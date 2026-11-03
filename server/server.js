const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.resolve(__dirname, "..");

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// -------------------------------------------------------------
// HTTP Static File Server (with Range Support for audio)
// -------------------------------------------------------------
const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Prevent directory traversal
  const safePath = path.normalize(path.join(PUBLIC_DIR, pathname));
  if (!safePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If requesting a route without extension, try appending .html or serve index.html
      const fallbackHtml = path.join(PUBLIC_DIR, 'index.html');
      fs.stat(fallbackHtml, (err2, stats2) => {
        if (!err2 && stats2.isFile()) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          fs.createReadStream(fallbackHtml).pipe(res);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        }
      });
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;

    // Handle HTTP Range header (important for audio seek and smooth playback)
    const rangeHeader = req.headers.range;
    if (rangeHeader) {
      const parts = rangeHeader.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

      if (start >= totalSize || end >= totalSize || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${totalSize}`,
          'Content-Type': contentType
        });
        return res.end();
      }

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': (end - start) + 1,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });

      fs.createReadStream(safePath, { start, end }).pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Access-Control-Allow-Origin': '*'
      });
      fs.createReadStream(safePath).pipe(res);
    }
  });
});

// -------------------------------------------------------------
// Pure Node.js RFC 6455 WebSocket Implementation
// -------------------------------------------------------------
const WS_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

function encodeFrame(data, opcode = 0x1) {
  const payload = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
  const length = payload.length;

  let header;
  if (length < 126) {
    header = Buffer.alloc(2);
    header[0] = 0x80 | opcode; // FIN + opcode
    header[1] = length;        // Unmasked, length
  } else if (length <= 65535) {
    header = Buffer.alloc(4);
    header[0] = 0x80 | opcode;
    header[1] = 126;
    header.writeUInt16BE(length, 2);
  } else {
    header = Buffer.alloc(10);
    header[0] = 0x80 | opcode;
    header[1] = 127;
    header.writeBigUInt64BE(BigInt(length), 2);
  }

  return Buffer.concat([header, payload]);
}

class WsConnection {
  constructor(socket, req) {
    this.socket = socket;
    this.req = req;
    this.id = Math.floor(Math.random() * 899999 + 100000);
    this.pid = `pid_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    this.room = 'chua-1';
    this.name = 'Phật tử';
    this.look = null;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.ry = 0;
    this.s = 'idle';
    this.closed = false;

    // Buffer for assembling frames
    this.buffer = Buffer.alloc(0);

    socket.on('data', chunk => this.handleData(chunk));
    socket.on('close', () => this.handleClose());
    socket.on('error', () => this.handleClose());
  }

  send(obj) {
    if (this.closed || this.socket.destroyed) return;
    try {
      const json = JSON.stringify(obj);
      this.socket.write(encodeFrame(json, 0x1));
    } catch (e) {
      // Ignore write errors on disconnected sockets
    }
  }

  close() {
    if (this.closed) return;
    this.closed = true;
    try {
      this.socket.write(encodeFrame(Buffer.alloc(0), 0x8));
      this.socket.end();
    } catch (e) {}
  }

  handleData(chunk) {
    this.buffer = Buffer.concat([this.buffer, chunk]);

    while (this.buffer.length >= 2) {
      const byte1 = this.buffer[0];
      const byte2 = this.buffer[1];

      const opcode = byte1 & 0x0f;
      const isMasked = (byte2 & 0x80) !== 0;
      let payloadLength = byte2 & 0x7f;
      let headerLength = 2;

      if (payloadLength === 126) {
        if (this.buffer.length < 4) return;
        payloadLength = this.buffer.readUInt16BE(2);
        headerLength = 4;
      } else if (payloadLength === 127) {
        if (this.buffer.length < 10) return;
        payloadLength = Number(this.buffer.readBigUInt64BE(2));
        headerLength = 10;
      }

      const maskLength = isMasked ? 4 : 0;
      const totalFrameLength = headerLength + maskLength + payloadLength;

      if (this.buffer.length < totalFrameLength) {
        // Wait for more data
        return;
      }

      let payload = this.buffer.slice(headerLength + maskLength, totalFrameLength);

      if (isMasked) {
        const mask = this.buffer.slice(headerLength, headerLength + 4);
        const unmasked = Buffer.alloc(payloadLength);
        for (let i = 0; i < payloadLength; i++) {
          unmasked[i] = payload[i] ^ mask[i % 4];
        }
        payload = unmasked;
      }

      // Advance buffer
      this.buffer = this.buffer.slice(totalFrameLength);

      if (opcode === 0x8) {
        // Close frame
        this.close();
        return;
      } else if (opcode === 0x9) {
        // Ping -> Pong
        this.socket.write(encodeFrame(payload, 0xa));
      } else if (opcode === 0x1) {
        // Text message
        try {
          const str = payload.toString('utf8');
          const msg = JSON.parse(str);
          this.onMessage(msg);
        } catch (e) {
          console.error('WebSocket parse error:', e.message);
        }
      }
    }
  }

  onMessage(msg) {
    handleWsMessage(this, msg);
  }

  handleClose() {
    if (this.closed) return;
    this.closed = true;
    handleWsDisconnect(this);
  }

  peerInfo() {
    return {
      id: this.id,
      pid: this.pid,
      name: this.name,
      ...(this.look || { robe: 'nau', beads: 'dong', hat: 'tieu' }),
      x: this.x,
      y: this.y,
      z: this.z,
      ry: this.ry,
      s: this.s
    };
  }
}

// -------------------------------------------------------------
// Temple State & Multiplayer Management
// -------------------------------------------------------------
const clients = new Set();
let globalIncense = 28;
let globalLamps = 12;
const lanterns = [
  { id: 1, pid: 'monk_an_nhien', name: 'Thích An Nhiên', text: 'Cầu quốc thái dân an, gia đạo bình yên', color: '#ffb74d', x: 2, z: -15 },
  { id: 2, pid: 'monk_thien_tam', name: 'Thích Thiện Tâm', text: 'Nguyện chúng sinh an lạc, vạn sự hanh thông', color: '#e57373', x: -4, z: -18 }
];
const vows = [
  { id: 1, name: 'Phật tử Diệu Hạnh', text: 'Cầu cho cha mẹ dồi dào sức khoẻ, bình an vô sự.', likes: 18 },
  { id: 2, name: 'Phật tử Phước Lộc', text: 'Cầu công việc thuận lợi, lòng luôn thanh thản.', likes: 12 }
];

// Gentle Companion Monks & Faithful Buddhist Visitors (NPCs) to make temple peaceful & alive
const npcs = [
  {
    id: 900001,
    pid: 'npc_thien_tam',
    name: 'Thầy Thiện Tâm',
    robe: 'nau',
    beads: 'dong',
    hat: 'tieu',
    x: 0,
    y: 0,
    z: -8,
    ry: 0,
    s: 'idle'
  },
  {
    id: 900002,
    pid: 'npc_an_nhien',
    name: 'Thầy An Nhiên',
    robe: 'lam',
    beads: 'dong',
    hat: 'tieu',
    x: -8,
    y: 0,
    z: -2,
    ry: 1.5,
    s: 'idle'
  },
  {
    id: 900003,
    pid: 'npc_tai_sua_xe',
    name: 'Anh Tài sửa xe',
    robe: 'cam',
    beads: 'dong',
    hat: 'khong',
    x: 5,
    y: 0,
    z: 22,
    ry: 0,
    s: 'idle'
  },
  {
    id: 900004,
    pid: 'npc_ha_ban_bun',
    name: 'Cô Hà bán bún',
    robe: 'lam',
    beads: 'ngoc',
    hat: 'khong',
    x: -12,
    y: 0,
    z: 36,
    ry: 1.2,
    s: 'idle'
  },
  {
    id: 900005,
    pid: 'npc_kien_dau_bac',
    name: 'Anh Kiên đầu bạc',
    robe: 'xam',
    beads: 'go',
    hat: 'khong',
    x: 8,
    y: 0,
    z: 46,
    ry: 2.5,
    s: 'idle'
  }
];

function broadcast(msg, except = null) {
  for (const client of clients) {
    if (client !== except && !client.closed) {
      client.send(msg);
    }
  }
}

function handleWsMessage(client, msg) {
  if (!msg || !msg.t) return;

  switch (msg.t) {
    case 'hello': {
      if (msg.name) client.name = msg.name;
      if (msg.room) client.room = msg.room;
      client.look = {
        name: client.name,
        robe: msg.robe || 'nau',
        beads: msg.beads || 'dong',
        hat: msg.hat || 'tieu'
      };

      // Gather existing human peers + NPC companion monks
      const peers = [];
      for (const other of clients) {
        if (other !== client && !other.closed) {
          peers.push(other.peerInfo());
        }
      }
      peers.push(...npcs);

      // Send welcome message
      client.send({
        t: 'welcome',
        id: client.id,
        pid: client.pid,
        room: client.room,
        saved: client.look,
        peers: peers,
        incense: globalIncense,
        lanterns: lanterns,
        vows: vows,
        vowed: false,
        lamps: globalLamps,
        pinned: 'Nam Mô Bổn Sư Thích Ca Mâu Ni Phật · Chúc quý Phật tử thân tâm an lạc, vạn sự cát tường 🙏',
        donors: [],
        total: clients.size + npcs.length,
        chores: { swept: 12, weeds: 5, leaves: 3 }
      });

      // Announce self
      client.send({
        t: 'ann',
        k: 'self',
        name: client.name,
        streak: 1,
        days: 1
      });

      // Broadcast new peer join to all others
      broadcast({
        t: 'join',
        peer: client.peerInfo()
      }, client);

      broadcast({
        t: 'total',
        n: clients.size + npcs.length
      });
      break;
    }

    case 'state': {
      client.x = msg.x ?? client.x;
      client.y = msg.y ?? client.y;
      client.z = msg.z ?? client.z;
      client.ry = msg.ry ?? client.ry;
      client.s = msg.s ?? client.s;

      broadcast({
        t: 'state',
        id: client.id,
        x: client.x,
        y: client.y,
        z: client.z,
        ry: client.ry,
        s: client.s
      }, client);
      break;
    }

    case 'chat': {
      if (!msg.text) break;
      const cleanText = String(msg.text).trim().slice(0, 120);
      if (!cleanText) break;

      broadcast({
        t: 'chat',
        id: client.id,
        name: client.name,
        text: cleanText,
        warn: false
      });
      break;
    }

    case 'emote': {
      broadcast({
        t: 'emote',
        id: client.id,
        e: msg.e
      });
      break;
    }

    case 'incense': {
      globalIncense++;
      broadcast({
        t: 'incense',
        n: globalIncense,
        id: client.id,
        name: client.name
      });
      break;
    }

    case 'bell': {
      broadcast({
        t: 'bell',
        id: client.id,
        name: client.name
      });
      break;
    }

    case 'lantern': {
      const newLantern = {
        id: Date.now(),
        pid: client.pid,
        name: client.name,
        text: msg.text || 'Cầu an lạc, vạn sự như ý',
        color: msg.color || '#ffca28',
        x: (Math.random() - 0.5) * 8,
        z: -14 - Math.random() * 6
      };
      lanterns.unshift(newLantern);
      if (lanterns.length > 30) lanterns.pop();

      broadcast({
        t: 'lantern',
        lantern: newLantern
      });
      break;
    }

    case 'garden': {
      client.send({
        t: 'garden',
        mine: { flowers: [] },
        flowers: [],
        beds: []
      });
      break;
    }

    case 'look': {
      if (msg.name) client.name = msg.name;
      client.look = {
        name: client.name,
        robe: msg.robe || 'nau',
        beads: msg.beads || 'dong',
        hat: msg.hat || 'tieu'
      };
      broadcast({
        t: 'look',
        peer: client.peerInfo()
      });
      break;
    }

    case 'lamps': {
      globalLamps++;
      broadcast({
        t: 'lamps',
        n: globalLamps,
        id: client.id,
        name: client.name
      });
      break;
    }

    default:
      break;
  }
}

function handleWsDisconnect(client) {
  clients.delete(client);
  broadcast({
    t: 'leave',
    id: client.id
  });
  broadcast({
    t: 'total',
    n: clients.size + npcs.length
  });
}

// -------------------------------------------------------------
// WebSocket Upgrade Handler
// -------------------------------------------------------------
server.on('upgrade', (req, socket, head) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (urlObj.pathname !== '/ws') {
    socket.destroy();
    return;
  }

  const key = req.headers['sec-websocket-key'];
  if (!key) {
    socket.destroy();
    return;
  }

  const accept = crypto
    .createHash('sha1')
    .update(key + WS_GUID)
    .digest('base64');

  const headers = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${accept}`
  ];

  socket.write(headers.join('\r\n') + '\r\n\r\n');

  const client = new WsConnection(socket, req);
  clients.add(client);
});

// Periodic peaceful companion movement & friendly greetings (gentle, seek-safe)
let npcAngle = 0;
let npcChatTick = 0;
setInterval(() => {
  npcAngle += 0.05;
  npcChatTick += 1;

  // 1. Thầy An Nhiên walking slowly around the Bodhi tree
  const nx1 = -8 + Math.cos(npcAngle * 0.9) * 3;
  const nz1 = -2 + Math.sin(npcAngle * 0.9) * 3;
  const nry1 = -(npcAngle * 0.9) + Math.PI / 2;
  npcs[1].x = parseFloat(nx1.toFixed(2));
  npcs[1].z = parseFloat(nz1.toFixed(2));
  npcs[1].ry = parseFloat(nry1.toFixed(2));
  npcs[1].s = 'walk';
  broadcast({ t: 'state', id: npcs[1].id, x: npcs[1].x, y: 0, z: npcs[1].z, ry: npcs[1].ry, s: 'walk' });

  // 2. Anh Tài sửa xe walking through the courtyard / incense plaza
  const nx2 = 4 + Math.cos(npcAngle * 0.6) * 6;
  const nz2 = 24 + Math.sin(npcAngle * 0.5) * 6;
  const nry2 = Math.atan2(Math.cos(npcAngle * 0.5) * 6 * 0.5, -Math.sin(npcAngle * 0.6) * 6 * 0.6);
  npcs[2].x = parseFloat(nx2.toFixed(2));
  npcs[2].z = parseFloat(nz2.toFixed(2));
  npcs[2].ry = parseFloat(nry2.toFixed(2));
  npcs[2].s = 'walk';
  broadcast({ t: 'state', id: npcs[2].id, x: npcs[2].x, y: 0, z: npcs[2].z, ry: npcs[2].ry, s: 'walk' });

  // 3. Cô Hà bán bún walking along the lotus pond and avenue
  const nx3 = -13 + Math.sin(npcAngle * 0.55) * 4;
  const nz3 = 36 + Math.cos(npcAngle * 0.45) * 7;
  const nry3 = Math.atan2(-Math.sin(npcAngle * 0.45) * 7 * 0.45, Math.cos(npcAngle * 0.55) * 4 * 0.55);
  npcs[3].x = parseFloat(nx3.toFixed(2));
  npcs[3].z = parseFloat(nz3.toFixed(2));
  npcs[3].ry = parseFloat(nry3.toFixed(2));
  npcs[3].s = 'walk';
  broadcast({ t: 'state', id: npcs[3].id, x: npcs[3].x, y: 0, z: npcs[3].z, ry: npcs[3].ry, s: 'walk' });

  // 4. Anh Kiên đầu bạc walking around the bell tower and garden avenue
  const nx4 = 8 + Math.cos(npcAngle * 0.45) * 5;
  const nz4 = 48 + Math.sin(npcAngle * 0.4) * 8;
  const nry4 = Math.atan2(Math.cos(npcAngle * 0.4) * 8 * 0.4, -Math.sin(npcAngle * 0.45) * 5 * 0.45);
  npcs[4].x = parseFloat(nx4.toFixed(2));
  npcs[4].z = parseFloat(nz4.toFixed(2));
  npcs[4].ry = parseFloat(nry4.toFixed(2));
  npcs[4].s = 'walk';
  broadcast({ t: 'state', id: npcs[4].id, x: npcs[4].x, y: 0, z: npcs[4].z, ry: npcs[4].ry, s: 'walk' });

  // 5. Thầy Thiện Tâm stays near Tam Bảo / main entrance, occasionally bows
  if (npcChatTick % 12 === 0) {
    const s = (npcChatTick % 24 === 0) ? 'cui' : 'idle';
    npcs[0].s = s;
    broadcast({ t: 'state', id: npcs[0].id, x: npcs[0].x, y: 0, z: npcs[0].z, ry: npcs[0].ry, s: s });
  }

  // Periodic lively greetings in the public chat box every 25 seconds (12-13 ticks)
  if (npcChatTick % 13 === 0) {
    const dialogues = [
      { sender: 'Anh Tài sửa xe', text: 'A Di Đà Phật, sửa xong chiếc xe là chạy vào chùa bái Phật liền cho tâm thanh thản 🙏' },
      { sender: 'Cô Hà bán bún', text: 'Hôm nay mùng một bán hết sớm, ghé chùa lễ Phật cầu bình an cho cả nhà 🍜🙏' },
      { sender: 'Anh Kiên đầu bạc', text: 'Thời tiết hôm nay đẹp quá, đi dạo một vòng quanh chùa thấy lòng nhẹ nhõm hẳn ✨' },
      { sender: 'Anh Tài sửa xe', text: 'Cầu mong quý phật tử đi đường bình an, vạn sự hanh thông!' },
      { sender: 'Cô Hà bán bún', text: 'Hồ sen nở ngát hương thơm thanh tịnh quá quý vị ơi 🪷' },
      { sender: 'Anh Kiên đầu bạc', text: 'Mỗi ngày vào chùa tĩnh tâm một chút thấy cuộc sống an vui nhiều 🙏' }
    ];
    const d = dialogues[Math.floor(npcChatTick / 13) % dialogues.length];
    broadcast({ t: 'chat', id: 900000, name: d.sender, text: d.text });
  }
}, 2000);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[An Binh Tu Server] Running at http://localhost:${PORT}/ and http://0.0.0.0:${PORT}/`);
  console.log(`[WebSocket] Ready at ws://localhost:${PORT}/ws`);
});
