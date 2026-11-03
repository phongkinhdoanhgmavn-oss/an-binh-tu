import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="170",xv=0,lf=1,bv=2,h0=1,u0=2,ls=3,ms=0,Sn=1,Re=2,zs=0,ir=1,vo=2,hf=3,uf=4,_v=5,ao=100,Mv=101,wv=102,Sv=103,Tv=104,Ev=200,Av=201,Cv=202,Rv=203,nu=204,iu=205,Pv=206,Lv=207,Iv=208,kv=209,Nv=210,Dv=211,Uv=212,Ov=213,zv=214,su=0,ou=1,ru=2,lr=3,au=4,cu=5,lu=6,hu=7,d0=0,Bv=1,Fv=2,Bs=0,Hv=1,Gv=2,Vv=3,fd=4,$v=5,Wv=6,qv=7,df="attached",Xv="detached",f0=300,hr=301,ur=302,uu=303,du=304,yl=306,Gs=1e3,Ds=1001,il=1002,In=1003,p0=1004,ea=1005,Xn=1006,Bc=1007,us=1008,gs=1009,m0=1010,g0=1011,ga=1012,pd=1013,yo=1014,Ti=1015,La=1016,md=1017,gd=1018,dr=1020,v0=35902,y0=1021,x0=1022,ii=1023,b0=1024,_0=1025,sr=1026,fr=1027,vd=1028,yd=1029,M0=1030,xd=1031,bd=1033,Fc=33776,Hc=33777,Gc=33778,Vc=33779,fu=35840,pu=35841,mu=35842,gu=35843,vu=36196,yu=37492,xu=37496,bu=37808,_u=37809,Mu=37810,wu=37811,Su=37812,Tu=37813,Eu=37814,Au=37815,Cu=37816,Ru=37817,Pu=37818,Lu=37819,Iu=37820,ku=37821,$c=36492,Nu=36494,Du=36495,w0=36283,Uu=36284,Ou=36285,zu=36286,va=2300,ya=2301,Nl=2302,ff=2400,pf=2401,mf=2402,jv=2500,Yv=0,S0=1,Bu=2,Kv=3200,Zv=3201,T0=0,Jv=1,ks="",de="srgb",Tn="srgb-linear",xl="linear",Ae="srgb",Eo=7680,gf=519,Qv=512,t1=513,e1=514,E0=515,n1=516,i1=517,s1=518,o1=519,Fu=35044,vf="300 es",ds=2e3,sl=2001;class Tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yf=1234567;const ra=Math.PI/180,pr=180/Math.PI;function si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function on(i,t,e){return Math.max(t,Math.min(e,i))}function _d(i,t){return(i%t+t)%t}function r1(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function a1(i,t,e){return i!==t?(e-i)/(t-i):0}function aa(i,t,e){return(1-e)*i+e*t}function c1(i,t,e,n){return aa(i,t,1-Math.exp(-e*n))}function l1(i,t=1){return t-Math.abs(_d(i,t*2)-t)}function h1(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function u1(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function d1(i,t){return i+Math.floor(Math.random()*(t-i+1))}function f1(i,t){return i+Math.random()*(t-i)}function p1(i){return i*(.5-Math.random())}function m1(i){i!==void 0&&(yf=i);let t=yf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g1(i){return i*ra}function v1(i){return i*pr}function y1(i){return(i&i-1)===0&&i!==0}function x1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function b1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _1(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),p=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fi={DEG2RAD:ra,RAD2DEG:pr,generateUUID:si,clamp:on,euclideanModulo:_d,mapLinear:r1,inverseLerp:a1,lerp:aa,damp:c1,pingpong:l1,smoothstep:h1,smootherstep:u1,randInt:d1,randFloat:f1,randFloatSpread:p1,seededRandom:m1,degToRad:g1,radToDeg:v1,isPowerOfTwo:y1,ceilPowerOfTwo:x1,floorPowerOfTwo:b1,setQuaternionFromProperEuler:_1,normalize:Se,denormalize:Si};class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,o,r,a,c,l){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],x=s[1],b=s[4],y=s[7],C=s[2],T=s[5],R=s[8];return o[0]=r*v+a*x+c*C,o[3]=r*m+a*b+c*T,o[6]=r*g+a*y+c*R,o[1]=l*v+h*x+u*C,o[4]=l*m+h*b+u*T,o[7]=l*g+h*y+u*R,o[2]=d*v+f*x+p*C,o[5]=d*m+f*b+p*T,o[8]=d*g+f*y+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Dl.makeScale(t,e)),this}rotate(t){return this.premultiply(Dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dl=new se;function A0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function M1(){const i=xa("canvas");return i.style.display="block",i}const xf={};function na(i){i in xf||(xf[i]=!0,console.warn(i))}function w1(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function S1(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function T1(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ks?xl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bf=[.64,.33,.3,.6,.15,.06],_f=[.2126,.7152,.0722],Mf=[.3127,.329],wf=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[Tn]:{primaries:bf,whitePoint:Mf,transfer:xl,toXYZ:wf,fromXYZ:Sf,luminanceCoefficients:_f,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:bf,whitePoint:Mf,transfer:Ae,toXYZ:wf,fromXYZ:Sf,luminanceCoefficients:_f,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});let Ao;class E1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ao===void 0&&(Ao=xa("canvas")),Ao.width=t.width,Ao.height=t.height;const n=Ao.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ao}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=fs(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A1=0;class C0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ul(s[r].image)):o.push(Ul(s[r]))}else o=Ul(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?E1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C1=0;class an extends Tr{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Ds,s=Ds,o=Xn,r=us,a=ii,c=gs,l=an.DEFAULT_ANISOTROPY,h=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=si(),this.name="",this.source=new C0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==f0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=f0;an.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(f+1)/2,C=(g+1)/2,T=(h+d)/4,R=(u+v)/4,L=(p+m)/4;return b>y&&b>C?b<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(b),s=T/n,o=R/n):y>C?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=T/s,o=L/s):C<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),n=R/o,s=L/o),this.set(n,s,o,e),this}let x=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R1 extends Tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new C0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xo extends R1{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class R0 extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class P1 extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],f=o[r+1],p=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==p){let m=1-a;const g=c*d+l*f+h*p+u*v,x=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const C=Math.sqrt(b),T=Math.atan2(C,g*x);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const y=a*x;if(c=c*m+d*y,l=l*m+f*y,h=h*m+p*y,u=u*m+v*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],d=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+h*u+c*f-l*d,t[e+1]=c*p+h*d+l*u-a*f,t[e+2]=l*p+h*f+a*d-c*u,t[e+3]=h*p-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),d=c(n/2),f=c(s/2),p=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{constructor(t=0,e=0,n=0){_.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new _,Tf=new mn;class bs{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,mi):mi.fromBufferAttribute(o,r),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$a.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(t.matrixWorld),this.union($a)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Wa.subVectors(this.max,Ur),Co.subVectors(t.a,Ur),Ro.subVectors(t.b,Ur),Po.subVectors(t.c,Ur),Ss.subVectors(Ro,Co),Ts.subVectors(Po,Ro),Xs.subVectors(Co,Po);let e=[0,-Ss.z,Ss.y,0,-Ts.z,Ts.y,0,-Xs.z,Xs.y,Ss.z,0,-Ss.x,Ts.z,0,-Ts.x,Xs.z,0,-Xs.x,-Ss.y,Ss.x,0,-Ts.y,Ts.x,0,-Xs.y,Xs.x,0];return!zl(e,Co,Ro,Po,Wa)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,Co,Ro,Po,Wa))?!1:(qa.crossVectors(Ss,Ts),e=[qa.x,qa.y,qa.z],zl(e,Co,Ro,Po,Wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new _,new _,new _,new _,new _,new _,new _,new _],mi=new _,$a=new bs,Co=new _,Ro=new _,Po=new _,Ss=new _,Ts=new _,Xs=new _,Ur=new _,Wa=new _,qa=new _,js=new _;function zl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){js.fromArray(i,o);const a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),c=t.dot(js),l=e.dot(js),h=n.dot(js);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const L1=new bs,Or=new _,Bl=new _;class Vi{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):L1.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);const e=Or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(Bl)),this.expandByPoint(Or.copy(t.center).sub(Bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new _,Fl=new _,Xa=new _,Es=new _,Hl=new _,ja=new _,Gl=new _;class Ia{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fl.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),Es.copy(this.origin).sub(Fl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Xa),a=Es.dot(this.direction),c=-Es.dot(Xa),l=Es.lengthSq(),h=Math.abs(1-r*r);let u,d,f,p;if(h>0)if(u=r*c-a,d=r*a-c,p=o*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fl).addScaledVector(Xa,d),f}intersectSphere(t,e){Ji.subVectors(t.center,this.origin);const n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,n,s,o){Hl.subVectors(e,t),ja.subVectors(n,t),Gl.crossVectors(Hl,ja);let r=this.direction.dot(Gl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Es.subVectors(this.origin,t);const c=a*this.direction.dot(ja.crossVectors(Es,ja));if(c<0)return null;const l=a*this.direction.dot(Hl.cross(Es));if(l<0||c+l>r)return null;const h=-a*Es.dot(Gl);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,n,s,o,r,a,c,l,h,u,d,f,p,v,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,d,f,p,v,m)}set(t,e,n,s,o,r,a,c,l,h,u,d,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Lo.setFromMatrixColumn(t,0).length(),o=1/Lo.setFromMatrixColumn(t,1).length(),r=1/Lo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,p=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=p+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,p=l*h,v=l*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,p=l*h,v=l*u;e[0]=d-v*a,e[4]=-r*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,p=a*h,v=a*u;e[0]=c*h,e[4]=p*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,p=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*c,f=r*l,p=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=r*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(I1,t,k1)}lookAt(t,e,n){const s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),As.crossVectors(n,Hn),As.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),As.crossVectors(n,Hn)),As.normalize(),Ya.crossVectors(Hn,As),s[0]=As.x,s[4]=Ya.x,s[8]=Hn.x,s[1]=As.y,s[5]=Ya.y,s[9]=Hn.y,s[2]=As.z,s[6]=Ya.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],b=n[7],y=n[11],C=n[15],T=s[0],R=s[4],L=s[8],S=s[12],M=s[1],I=s[5],H=s[9],B=s[13],$=s[2],K=s[6],W=s[10],ot=s[14],q=s[3],nt=s[7],_t=s[11],Pt=s[15];return o[0]=r*T+a*M+c*$+l*q,o[4]=r*R+a*I+c*K+l*nt,o[8]=r*L+a*H+c*W+l*_t,o[12]=r*S+a*B+c*ot+l*Pt,o[1]=h*T+u*M+d*$+f*q,o[5]=h*R+u*I+d*K+f*nt,o[9]=h*L+u*H+d*W+f*_t,o[13]=h*S+u*B+d*ot+f*Pt,o[2]=p*T+v*M+m*$+g*q,o[6]=p*R+v*I+m*K+g*nt,o[10]=p*L+v*H+m*W+g*_t,o[14]=p*S+v*B+m*ot+g*Pt,o[3]=x*T+b*M+y*$+C*q,o[7]=x*R+b*I+y*K+C*nt,o[11]=x*L+b*H+y*W+C*_t,o[15]=x*S+b*B+y*ot+C*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15];return p*(+o*c*u-s*l*u-o*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+m*(+e*l*u-e*a*f-o*r*u+n*r*f+o*a*h-n*l*h)+g*(-s*a*h-e*c*u+e*a*d+s*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],x=u*m*l-v*d*l+v*c*f-a*m*f-u*c*g+a*d*g,b=p*d*l-h*m*l-p*c*f+r*m*f+h*c*g-r*d*g,y=h*v*l-p*u*l+p*a*f-r*v*f-h*a*g+r*u*g,C=p*u*c-h*v*c-p*a*d+r*v*d+h*a*m-r*u*m,T=e*x+n*b+s*y+o*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=x*R,t[1]=(v*d*o-u*m*o-v*s*f+n*m*f+u*s*g-n*d*g)*R,t[2]=(a*m*o-v*c*o+v*s*l-n*m*l-a*s*g+n*c*g)*R,t[3]=(u*c*o-a*d*o-u*s*l+n*d*l+a*s*f-n*c*f)*R,t[4]=b*R,t[5]=(h*m*o-p*d*o+p*s*f-e*m*f-h*s*g+e*d*g)*R,t[6]=(p*c*o-r*m*o-p*s*l+e*m*l+r*s*g-e*c*g)*R,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*R,t[8]=y*R,t[9]=(p*u*o-h*v*o-p*n*f+e*v*f+h*n*g-e*u*g)*R,t[10]=(r*v*o-p*a*o+p*n*l-e*v*l-r*n*g+e*a*g)*R,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*f-e*a*f)*R,t[12]=C*R,t[13]=(h*v*s-p*u*s+p*n*d-e*v*d-h*n*m+e*u*m)*R,t[14]=(p*a*s-r*v*s-p*n*c+e*v*c+r*n*m-e*a*m)*R,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,p=o*u,v=r*h,m=r*u,g=a*u,x=c*l,b=c*h,y=c*u,C=n.x,T=n.y,R=n.z;return s[0]=(1-(v+g))*C,s[1]=(f+y)*C,s[2]=(p-b)*C,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+g))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(p+b)*R,s[9]=(m-x)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Lo.set(s[0],s[1],s[2]).length();const r=Lo.set(s[4],s[5],s[6]).length(),a=Lo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],gi.copy(this);const l=1/o,h=1/r,u=1/a;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,e.setFromRotationMatrix(gi),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=ds){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===ds)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===sl)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ds){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*l,f=(n+s)*h;let p,v;if(a===ds)p=(r+o)*u,v=-2*u;else if(a===sl)p=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Lo=new _,gi=new Vt,I1=new _(0,0,0),k1=new _(1,1,1),As=new _,Ya=new _,Hn=new _,Ef=new Vt,Af=new mn;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-on(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ef,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Af.setFromEuler(this),this.setFromQuaternion(Af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let N1=0;const Cf=new _,Io=new mn,Qi=new Vt,Ka=new _,zr=new _,D1=new _,U1=new mn,Rf=new _(1,0,0),Pf=new _(0,1,0),Lf=new _(0,0,1),If={type:"added"},O1={type:"removed"},ko={type:"childadded",child:null},Vl={type:"childremoved",child:null};class Fe extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new _,e=new kn,n=new mn,s=new _(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new se}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Io.setFromAxisAngle(t,e),this.quaternion.multiply(Io),this}rotateOnWorldAxis(t,e){return Io.setFromAxisAngle(t,e),this.quaternion.premultiply(Io),this}rotateX(t){return this.rotateOnAxis(Rf,t)}rotateY(t){return this.rotateOnAxis(Pf,t)}rotateZ(t){return this.rotateOnAxis(Lf,t)}translateOnAxis(t,e){return Cf.copy(t).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rf,t)}translateY(t){return this.translateOnAxis(Pf,t)}translateZ(t){return this.translateOnAxis(Lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ka.copy(t):Ka.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(zr,Ka,this.up):Qi.lookAt(Ka,zr,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Io.setFromRotationMatrix(Qi),this.quaternion.premultiply(Io.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(If),ko.child=t,this.dispatchEvent(ko),ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O1),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(If),ko.child=t,this.dispatchEvent(ko),ko.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,D1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,U1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new _(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new _,ts=new _,$l=new _,es=new _,No=new _,Do=new _,kf=new _,Wl=new _,ql=new _,Xl=new _,jl=new be,Yl=new be,Kl=new be;class ni{constructor(t=new _,e=new _,n=new _){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vi.subVectors(t,e),s.cross(vi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){vi.subVectors(s,e),ts.subVectors(n,e),$l.subVectors(t,e);const r=vi.dot(vi),a=vi.dot(ts),c=vi.dot($l),l=ts.dot(ts),h=ts.dot($l),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,p=(r*h-a*c)*d;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,es)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,es.x),c.addScaledVector(r,es.y),c.addScaledVector(a,es.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return jl.setScalar(0),Yl.setScalar(0),Kl.setScalar(0),jl.fromBufferAttribute(t,e),Yl.fromBufferAttribute(t,n),Kl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(jl,o.x),r.addScaledVector(Yl,o.y),r.addScaledVector(Kl,o.z),r}static isFrontFacing(t,e,n,s){return vi.subVectors(n,e),ts.subVectors(t,e),vi.cross(ts).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),vi.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ni.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;No.subVectors(s,n),Do.subVectors(o,n),Wl.subVectors(t,n);const c=No.dot(Wl),l=Do.dot(Wl);if(c<=0&&l<=0)return e.copy(n);ql.subVectors(t,s);const h=No.dot(ql),u=Do.dot(ql);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(No,r);Xl.subVectors(t,o);const f=No.dot(Xl),p=Do.dot(Xl);if(p>=0&&f<=p)return e.copy(o);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Do,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return kf.subVectors(o,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(kf,a);const g=1/(m+v+d);return r=v*g,a=d*g,e.copy(n).addScaledVector(No,r).addScaledVector(Do,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=_d(t,1),e=on(e,0,1),n=on(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Zl(r,o,t+1/3),this.g=Zl(r,o,t),this.b=Zl(r,o,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){const n=P0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return ue.fromWorkingColorSpace(bn.copy(this),t),Math.round(on(bn.r*255,0,255))*65536+Math.round(on(bn.g*255,0,255))*256+Math.round(on(bn.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,s=bn.g,o=bn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=de){ue.fromWorkingColorSpace(bn.copy(this),t);const e=bn.r,n=bn.g,s=bn.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+e,Cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cs),t.getHSL(Za);const n=aa(Cs.h,Za.h,e),s=aa(Cs.s,Za.s,e),o=aa(Cs.l,Za.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Dt;Dt.NAMES=P0;let z1=0;class Ei extends Tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=si(),this.name="",this.blending=ir,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nu&&(n.blendSrc=this.blendSrc),this.blendDst!==iu&&(n.blendDst=this.blendDst),this.blendEquation!==ao&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Eo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Eo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Eo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xe extends Ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new _,Ja=new Q;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ja.fromBufferAttribute(this,e),Ja.applyMatrix3(t),this.setXY(e,Ja.x,Ja.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),o=Se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fu&&(t.usage=this.usage),t}}class L0 extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class I0 extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let B1=0;const Zn=new Vt,Jl=new Fe,Uo=new _,Gn=new bs,Br=new bs,hn=new _;class me extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(A0(t)?I0:L0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new se().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Gn.min,Br.min),Gn.expandByPoint(hn),hn.addVectors(Gn.max,Br.max),Gn.expandByPoint(hn)):(Gn.expandByPoint(Br.min),Gn.expandByPoint(Br.max))}Gn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)hn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)hn.fromBufferAttribute(a,l),c&&(Uo.fromBufferAttribute(t,l),hn.add(Uo)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new _,c[L]=new _;const l=new _,h=new _,u=new _,d=new Q,f=new Q,p=new Q,v=new _,m=new _;function g(L,S,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(o,L),f.fromBufferAttribute(o,S),p.fromBufferAttribute(o,M),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[L].add(v),a[S].add(v),a[M].add(v),c[L].add(m),c[S].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,S=x.length;L<S;++L){const M=x[L],I=M.start,H=M.count;for(let B=I,$=I+H;B<$;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new _,y=new _,C=new _,T=new _;function R(L){C.fromBufferAttribute(s,L),T.copy(C);const S=a[L];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(T,S);const I=y.dot(c[L])<0?-1:1;r.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,S=x.length;L<S;++L){const M=x[L],I=M.start,H=M.count;for(let B=I,$=I+H;B<$;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new _,o=new _,r=new _,a=new _,c=new _,l=new _,h=new _,u=new _;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nf=new Vt,Ys=new Ia,Qa=new Vi,Df=new _,tc=new _,ec=new _,nc=new _,Ql=new _,ic=new _,Uf=new _,sc=new _;class z extends Fe{constructor(t=new me,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){ic.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Ql.fromBufferAttribute(u,t),r?ic.addScaledVector(Ql,h):ic.addScaledVector(Ql.sub(e),h))}e.add(ic)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(o),Ys.copy(t.ray).recast(t.near),!(Qa.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Qa,Df)===null||Ys.origin.distanceToSquared(Df)>(t.far-t.near)**2))&&(Nf.copy(o).invert(),Ys.copy(t.ray).applyMatrix4(Nf),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ys)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=r[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,C=b;y<C;y+=3){const T=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);s=oc(this,g,t,n,l,h,u,T,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const x=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=oc(this,r,t,n,l,h,u,x,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=r[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,C=b;y<C;y+=3){const T=y,R=y+1,L=y+2;s=oc(this,g,t,n,l,h,u,T,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const x=m,b=m+1,y=m+2;s=oc(this,r,t,n,l,h,u,x,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function F1(i,t,e,n,s,o,r,a){let c;if(t.side===Sn?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===ms,a),c===null)return null;sc.copy(a),sc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(sc);return l<e.near||l>e.far?null:{distance:l,point:sc.clone(),object:i}}function oc(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,tc),i.getVertexPosition(c,ec),i.getVertexPosition(l,nc);const h=F1(i,t,e,n,tc,ec,nc,Uf);if(h){const u=new _;ni.getBarycoord(Uf,tc,ec,nc,u),s&&(h.uv=ni.getInterpolatedAttribute(s,a,c,l,u,new Q)),o&&(h.uv1=ni.getInterpolatedAttribute(o,a,c,l,u,new Q)),r&&(h.normal=ni.getInterpolatedAttribute(r,a,c,l,u,new _),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new _,materialIndex:0};ni.getNormal(tc,ec,nc,d.normal),h.face=d,h.barycoord=u}return h}class Wt extends me{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function p(v,m,g,x,b,y,C,T,R,L,S){const M=y/R,I=C/L,H=y/2,B=C/2,$=T/2,K=R+1,W=L+1;let ot=0,q=0;const nt=new _;for(let _t=0;_t<W;_t++){const Pt=_t*I-B;for(let Zt=0;Zt<K;Zt++){const ge=Zt*M-H;nt[v]=ge*x,nt[m]=Pt*b,nt[g]=$,l.push(nt.x,nt.y,nt.z),nt[v]=0,nt[m]=0,nt[g]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Zt/R),u.push(1-_t/L),ot+=1}}for(let _t=0;_t<L;_t++)for(let Pt=0;Pt<R;Pt++){const Zt=d+Pt+K*_t,ge=d+Pt+K*(_t+1),j=d+(Pt+1)+K*(_t+1),ht=d+(Pt+1)+K*_t;c.push(Zt,ge,ht),c.push(ge,j,ht),q+=6}a.addGroup(f,q,S),f+=q,d+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Cn(i){const t={};for(let e=0;e<i.length;e++){const n=mr(i[e]);for(const s in n)t[s]=n[s]}return t}function H1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function k0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const G1={clone:mr,merge:Cn};var V1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends Ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=H1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class N0 extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ds}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rs=new _,Of=new Q,zf=new Q;class Mn extends N0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,e){return this.getViewBounds(t,Of,zf),e.subVectors(zf,Of)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oo=-90,zo=1;class W1 extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Oo,zo,t,e);s.layers=this.layers,this.add(s);const o=new Mn(Oo,zo,t,e);o.layers=this.layers,this.add(o);const r=new Mn(Oo,zo,t,e);r.layers=this.layers,this.add(r);const a=new Mn(Oo,zo,t,e);a.layers=this.layers,this.add(a);const c=new Mn(Oo,zo,t,e);c.layers=this.layers,this.add(c);const l=new Mn(Oo,zo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===ds)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class D0 extends an{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class q1 extends xo{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new D0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wt(5,5,5),o=new vs({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:zs});o.uniforms.tEquirect.value=e;const r=new z(s,o),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Xn),new W1(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const th=new _,X1=new _,j1=new se;class io{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=th.subVectors(n,e).cross(X1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(th),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||j1.getNormalMatrix(t),s=this.coplanarPoint(th).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new Vi,rc=new _;class wd{constructor(t=new io,e=new io,n=new io,s=new io,o=new io,r=new io){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ds){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],v=s[10],m=s[11],g=s[12],x=s[13],b=s[14],y=s[15];if(n[0].setComponents(c-o,d-l,m-f,y-g).normalize(),n[1].setComponents(c+o,d+l,m+f,y+g).normalize(),n[2].setComponents(c+r,d+h,m+p,y+x).normalize(),n[3].setComponents(c-r,d-h,m-p,y-x).normalize(),n[4].setComponents(c-a,d-u,m-v,y-b).normalize(),e===ds)n[5].setComponents(c+a,d+u,m+v,y+b).normalize();else if(e===sl)n[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(t){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(rc.x=s.normal.x>0?t.max.x:t.min.x,rc.y=s.normal.y>0?t.max.y:t.min.y,rc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function U0(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Y1(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class We extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const x=g*d-r;for(let b=0;b<l;b++){const y=b*u-o;p.push(y,-x,0),v.push(0,0,1),m.push(b/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){const b=x+l*g,y=x+l*(g+1),C=x+1+l*(g+1),T=x+1+l*g;f.push(b,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.width,t.height,t.widthSegments,t.heightSegments)}}var K1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ly=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_y=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:K1,alphahash_pars_fragment:Z1,alphamap_fragment:J1,alphamap_pars_fragment:Q1,alphatest_fragment:ty,alphatest_pars_fragment:ey,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:sy,batching_vertex:oy,begin_vertex:ry,beginnormal_vertex:ay,bsdfs:cy,iridescence_fragment:ly,bumpmap_pars_fragment:hy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:vy,color_vertex:yy,common:xy,cube_uv_reflection_fragment:by,defaultnormal_vertex:_y,displacementmap_pars_vertex:My,displacementmap_vertex:wy,emissivemap_fragment:Sy,emissivemap_pars_fragment:Ty,colorspace_fragment:Ey,colorspace_pars_fragment:Ay,envmap_fragment:Cy,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Py,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Gy,envmap_vertex:Iy,fog_vertex:ky,fog_pars_vertex:Ny,fog_fragment:Dy,fog_pars_fragment:Uy,gradientmap_pars_fragment:Oy,lightmap_pars_fragment:zy,lights_lambert_fragment:By,lights_lambert_pars_fragment:Fy,lights_pars_begin:Hy,lights_toon_fragment:Vy,lights_toon_pars_fragment:$y,lights_phong_fragment:Wy,lights_phong_pars_fragment:qy,lights_physical_fragment:Xy,lights_physical_pars_fragment:jy,lights_fragment_begin:Yy,lights_fragment_maps:Ky,lights_fragment_end:Zy,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:ox,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ax,morphinstance_vertex:cx,morphcolor_vertex:lx,morphnormal_vertex:hx,morphtarget_pars_vertex:ux,morphtarget_vertex:dx,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:vx,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:Mx,opaque_fragment:wx,packing:Sx,premultiplied_alpha_fragment:Tx,project_vertex:Ex,dithering_fragment:Ax,dithering_pars_fragment:Cx,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Ix,shadowmap_vertex:kx,shadowmask_pars_fragment:Nx,skinbase_vertex:Dx,skinning_pars_vertex:Ux,skinning_vertex:Ox,skinnormal_vertex:zx,specularmap_fragment:Bx,specularmap_pars_fragment:Fx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Gx,transmission_fragment:Vx,transmission_pars_fragment:$x,uv_pars_fragment:Wx,uv_pars_vertex:qx,uv_vertex:Xx,worldpos_vertex:jx,background_vert:Yx,background_frag:Kx,backgroundCube_vert:Zx,backgroundCube_frag:Jx,cube_vert:Qx,cube_frag:tb,depth_vert:eb,depth_frag:nb,distanceRGBA_vert:ib,distanceRGBA_frag:sb,equirect_vert:ob,equirect_frag:rb,linedashed_vert:ab,linedashed_frag:cb,meshbasic_vert:lb,meshbasic_frag:hb,meshlambert_vert:ub,meshlambert_frag:db,meshmatcap_vert:fb,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:vb,meshphong_frag:yb,meshphysical_vert:xb,meshphysical_frag:bb,meshtoon_vert:_b,meshtoon_frag:Mb,points_vert:wb,points_frag:Sb,shadow_vert:Tb,shadow_frag:Eb,sprite_vert:Ab,sprite_frag:Cb},yt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ni={basic:{uniforms:Cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Cn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Cn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Cn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Cn([yt.points,yt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Cn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Cn([yt.common,yt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Cn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Cn([yt.sprite,yt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Cn([yt.common,yt.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Cn([yt.lights,yt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Ni.physical={uniforms:Cn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const ac={r:0,b:0,g:0},Zs=new kn,Rb=new Vt;function Pb(i,t,e,n,s,o,r){const a=new Dt(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function p(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?e:t).get(b)),b}function v(x){let b=!1;const y=p(x);y===null?g(a,c):y&&y.isColor&&(g(y,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,b){const y=p(b);y&&(y.isCubeTexture||y.mapping===yl)?(h===void 0&&(h=new z(new Wt(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:mr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zs.copy(b.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(Zs)),h.material.toneMapped=ue.getTransfer(y.colorSpace)!==Ae,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new z(new We(2,2),new vs({name:"BackgroundMaterial",uniforms:mr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==Ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,b){x.getRGB(ac,k0(i)),n.buffers.color.setClear(ac.r,ac.g,ac.b,b,r)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),c=b,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,g(a,c)},render:v,addToRenderList:m}}function Lb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(M,I,H,B,$){let K=!1;const W=u(B,H,I);o!==W&&(o=W,l(o.object)),K=f(M,B,H,$),K&&p(M,B,H,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(M,I,H,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,H){const B=H.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let K=$[I.id];K===void 0&&(K={},$[I.id]=K);let W=K[B];return W===void 0&&(W=d(c()),K[B]=W),W}function d(M){const I=[],H=[],B=[];for(let $=0;$<e;$++)I[$]=0,H[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,I,H,B){const $=o.attributes,K=I.attributes;let W=0;const ot=H.getAttributes();for(const q in ot)if(ot[q].location>=0){const _t=$[q];let Pt=K[q];if(Pt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Pt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Pt=M.instanceColor)),_t===void 0||_t.attribute!==Pt||Pt&&_t.data!==Pt.data)return!0;W++}return o.attributesNum!==W||o.index!==B}function p(M,I,H,B){const $={},K=I.attributes;let W=0;const ot=H.getAttributes();for(const q in ot)if(ot[q].location>=0){let _t=K[q];_t===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const Pt={};Pt.attribute=_t,_t&&_t.data&&(Pt.data=_t.data),$[q]=Pt,W++}o.attributes=$,o.attributesNum=W,o.index=B}function v(){const M=o.newAttributes;for(let I=0,H=M.length;I<H;I++)M[I]=0}function m(M){g(M,0)}function g(M,I){const H=o.newAttributes,B=o.enabledAttributes,$=o.attributeDivisors;H[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),$[M]!==I&&(i.vertexAttribDivisor(M,I),$[M]=I)}function x(){const M=o.newAttributes,I=o.enabledAttributes;for(let H=0,B=I.length;H<B;H++)I[H]!==M[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function b(M,I,H,B,$,K,W){W===!0?i.vertexAttribIPointer(M,I,H,$,K):i.vertexAttribPointer(M,I,H,B,$,K)}function y(M,I,H,B){v();const $=B.attributes,K=H.getAttributes(),W=I.defaultAttributeValues;for(const ot in K){const q=K[ot];if(q.location>=0){let nt=$[ot];if(nt===void 0&&(ot==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),ot==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const _t=nt.normalized,Pt=nt.itemSize,Zt=t.get(nt);if(Zt===void 0)continue;const ge=Zt.buffer,j=Zt.type,ht=Zt.bytesPerElement,It=j===i.INT||j===i.UNSIGNED_INT||nt.gpuType===pd;if(nt.isInterleavedBufferAttribute){const ut=nt.data,Ft=ut.stride,Kt=nt.offset;if(ut.isInstancedInterleavedBuffer){for(let $t=0;$t<q.locationSize;$t++)g(q.location+$t,ut.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let $t=0;$t<q.locationSize;$t++)m(q.location+$t);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let $t=0;$t<q.locationSize;$t++)b(q.location+$t,Pt/q.locationSize,j,_t,Ft*ht,(Kt+Pt/q.locationSize*$t)*ht,It)}else{if(nt.isInstancedBufferAttribute){for(let ut=0;ut<q.locationSize;ut++)g(q.location+ut,nt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ut=0;ut<q.locationSize;ut++)m(q.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ut=0;ut<q.locationSize;ut++)b(q.location+ut,Pt/q.locationSize,j,_t,Pt*ht,Pt/q.locationSize*ut*ht,It)}}else if(W!==void 0){const _t=W[ot];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(q.location,_t);break;case 3:i.vertexAttrib3fv(q.location,_t);break;case 4:i.vertexAttrib4fv(q.location,_t);break;default:i.vertexAttrib1fv(q.location,_t)}}}}x()}function C(){L();for(const M in n){const I=n[M];for(const H in I){const B=I[H];for(const $ in B)h(B[$].object),delete B[$];delete I[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const H in I){const B=I[H];for(const $ in B)h(B[$].object),delete B[$];delete I[H]}delete n[M.id]}function R(M){for(const I in n){const H=n[I];if(H[M.id]===void 0)continue;const B=H[M.id];for(const $ in B)h(B[$].object),delete B[$];delete H[M.id]}}function L(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ib(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)r(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];e.update(p,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kb(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==ii&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==gs&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ti&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function Nb(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new io,a=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||o&&!m)o?h(null):l();else{const x=o?0:n,b=x*4;let y=g.clippingState||null;c.value=y,y=h(p,d,b,f);for(let C=0;C!==b;++C)y[C]=e[C];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,p!==!0||m===null){const g=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=f;b!==v;++b,y+=4)r.copy(u[b]).applyMatrix4(x,a),r.normal.toArray(m,y),m[y+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Db(i){let t=new WeakMap;function e(r,a){return a===uu?r.mapping=hr:a===du&&(r.mapping=ur),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===uu||a===du)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new q1(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Sd extends N0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qo=4,Bf=[.125,.215,.35,.446,.526,.582],co=20,eh=new Sd,Ff=new Dt;let nh=null,ih=0,sh=0,oh=!1;const so=(1+Math.sqrt(5))/2,Bo=1/so,Hf=[new _(-so,Bo,0),new _(so,Bo,0),new _(-Bo,0,so),new _(Bo,0,so),new _(0,so,-Bo),new _(0,so,Bo),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)];class Hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=oh,t.scissorTest=!1,cc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:La,format:ii,colorSpace:Tn,depthBuffer:!1},s=Gf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ub(o)),this._blurMaterial=Ob(o,t,e)}return s}_compileMaterial(t){const e=new z(this._lodPlanes[0],t);this._renderer.compile(e,eh)}_sceneToCubeUV(t,e,n,s){const a=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ff),h.toneMapping=Bs,h.autoClear=!1;const f=new xe({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),p=new z(new Wt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ff),v=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):x===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const b=this._cubeSize;cc(s,x*b,g>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hr||t.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;cc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,eh)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Hf[(s-o-1)%Hf.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*co-1),v=o/p,m=isFinite(o)?1+Math.floor(h*v):co;m>co&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${co}`);const g=[];let x=0;for(let R=0;R<co;++R){const L=R/v,S=Math.exp(-L*L/2);g.push(S),R===0?x+=S:R<m&&(x+=2*S)}for(let R=0;R<g.length;R++)g[R]=g[R]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-n;const y=this._sizeLods[s],C=3*y*(s>b-Qo?s-b+Qo:0),T=4*(this._cubeSize-y);cc(e,C,T,3*y,2*y),c.setRenderTarget(e),c.render(u,eh)}}function Ub(i){const t=[],e=[],n=[];let s=i;const o=i-Qo+1+Bf.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-Qo?c=Bf[r-i+Qo-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,m=2,g=1,x=new Float32Array(v*p*f),b=new Float32Array(m*p*f),y=new Float32Array(g*p*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,L=T>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(S,v*p*T),b.set(d,m*p*T);const M=[T,T,T,T,T,T];y.set(M,g*p*T)}const C=new me;C.setAttribute("position",new Oe(x,v)),C.setAttribute("uv",new Oe(b,m)),C.setAttribute("faceIndex",new Oe(y,g)),t.push(C),s>Qo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gf(i,t,e){const n=new xo(i,t,e);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ob(i,t,e){const n=new Float32Array(co),s=new _(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Vf(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function $f(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zb(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===uu||c===du,h=c===hr||c===ur;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hu(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Hu(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Bb(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&na("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fb(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const v=f[p];for(let m=0,g=v.length;m<g;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let b=0,y=x.length;b<y;b+=3){const C=x[b+0],T=x[b+1],R=x[b+2];d.push(C,T,T,R,R,C)}}else if(p!==void 0){const x=p.array;v=p.version;for(let b=0,y=x.length/3-1;b<y;b+=3){const C=b+0,T=b+1,R=b+2;d.push(C,T,T,R,R,C)}}else return;const m=new(A0(d)?I0:L0)(d,1);m.version=v;const g=o.get(u);g&&t.remove(g),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Hb(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,o,d*r,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function u(d,f,p,v){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)l(d[g]/r,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x]*v[x];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gb(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vb(i,t,e){const n=new WeakMap,s=new be;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*C*4*u),R=new R0(T,y,C,u);R.type=Ti,R.needsUpdate=!0;const L=b*4;for(let M=0;M<u;M++){const I=m[M],H=g[M],B=x[M],$=y*C*4*M;for(let K=0;K<I.count;K++){const W=K*L;f===!0&&(s.fromBufferAttribute(I,K),T[$+W+0]=s.x,T[$+W+1]=s.y,T[$+W+2]=s.z,T[$+W+3]=0),p===!0&&(s.fromBufferAttribute(H,K),T[$+W+4]=s.x,T[$+W+5]=s.y,T[$+W+6]=s.z,T[$+W+7]=0),v===!0&&(s.fromBufferAttribute(B,K),T[$+W+8]=s.x,T[$+W+9]=s.y,T[$+W+10]=s.z,T[$+W+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Q(y,C)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function $b(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class O0 extends an{constructor(t,e,n,s,o,r,a,c,l,h=sr){if(h!==sr&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===sr&&(n=yo),n===void 0&&h===fr&&(n=dr),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const z0=new an,Wf=new O0(1,1),B0=new R0,F0=new P1,H0=new D0,qf=[],Xf=[],jf=new Float32Array(16),Yf=new Float32Array(9),Kf=new Float32Array(4);function Er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=qf[s];if(o===void 0&&(o=new Float32Array(s),qf[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bl(i,t){let e=Xf[t];e===void 0&&(e=new Int32Array(t),Xf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function Xb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function jb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function Yb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Kf.set(n),i.uniformMatrix2fv(this.addr,!1,Kf),ln(e,n)}}function Kb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Yf.set(n),i.uniformMatrix3fv(this.addr,!1,Yf),ln(e,n)}}function Zb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;jf.set(n),i.uniformMatrix4fv(this.addr,!1,jf),ln(e,n)}}function Jb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function n_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function s_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function o_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function r_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Wf.compareFunction=E0,o=Wf):o=z0,e.setTexture2D(t||o,s)}function a_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||F0,s)}function c_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||H0,s)}function l_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||B0,s)}function h_(i){switch(i){case 5126:return Wb;case 35664:return qb;case 35665:return Xb;case 35666:return jb;case 35674:return Yb;case 35675:return Kb;case 35676:return Zb;case 5124:case 35670:return Jb;case 35667:case 35671:return Qb;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}function u_(i,t){i.uniform1fv(this.addr,t)}function d_(i,t){const e=Er(t,this.size,2);i.uniform2fv(this.addr,e)}function f_(i,t){const e=Er(t,this.size,3);i.uniform3fv(this.addr,e)}function p_(i,t){const e=Er(t,this.size,4);i.uniform4fv(this.addr,e)}function m_(i,t){const e=Er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g_(i,t){const e=Er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v_(i,t){const e=Er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y_(i,t){i.uniform1iv(this.addr,t)}function x_(i,t){i.uniform2iv(this.addr,t)}function b_(i,t){i.uniform3iv(this.addr,t)}function __(i,t){i.uniform4iv(this.addr,t)}function M_(i,t){i.uniform1uiv(this.addr,t)}function w_(i,t){i.uniform2uiv(this.addr,t)}function S_(i,t){i.uniform3uiv(this.addr,t)}function T_(i,t){i.uniform4uiv(this.addr,t)}function E_(i,t,e){const n=this.cache,s=t.length,o=bl(e,s);cn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||z0,o[r])}function A_(i,t,e){const n=this.cache,s=t.length,o=bl(e,s);cn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||F0,o[r])}function C_(i,t,e){const n=this.cache,s=t.length,o=bl(e,s);cn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||H0,o[r])}function R_(i,t,e){const n=this.cache,s=t.length,o=bl(e,s);cn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||B0,o[r])}function P_(i){switch(i){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return v_;case 5124:case 35670:return y_;case 35667:case 35671:return x_;case 35668:case 35672:return b_;case 35669:case 35673:return __;case 5125:return M_;case 36294:return w_;case 36295:return S_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return R_}}class L_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h_(e.type)}}class I_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}}class k_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function Zf(i,t){i.seq.push(t),i.map[t.id]=t}function N_(i,t,e){const n=i.name,s=n.length;for(rh.lastIndex=0;;){const o=rh.exec(n),r=rh.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Zf(e,l===void 0?new L_(a,i,t):new I_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new k_(a),Zf(e,u)),e=u}}}class Wc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);N_(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Jf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D_=37297;let U_=0;function O_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Qf=new se;function z_(i){ue._getMatrix(Qf,ue.workingColorSpace,i);const t=`mat3( ${Qf.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case xl:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tp(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+O_(i.getShaderSource(t),r)}else return s}function B_(i,t){const e=z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F_(i,t){let e;switch(t){case Hv:e="Linear";break;case Gv:e="Reinhard";break;case Vv:e="Cineon";break;case fd:e="ACESFilmic";break;case Wv:e="AgX";break;case qv:e="Neutral";break;case $v:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lc=new _;function H_(){ue.getLuminanceCoefficients(lc);const i=lc.x.toFixed(4),t=lc.y.toFixed(4),e=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function V_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ia(i){return i!==""}function ep(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function np(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(i){return i.replace(W_,X_)}const q_=new Map;function X_(i,t){let e=re[t];if(e===void 0){const n=q_.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gu(e)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ip(i){return i.replace(j_,Y_)}function Y_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function sp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function K_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===h0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===u0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ls&&(t="SHADOWMAP_TYPE_VSM"),t}function Z_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case ur:t="ENVMAP_TYPE_CUBE";break;case yl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function Q_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case d0:t="ENVMAP_BLENDING_MULTIPLY";break;case Bv:t="ENVMAP_BLENDING_MIX";break;case Fv:t="ENVMAP_BLENDING_ADD";break}return t}function tM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eM(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=K_(e),l=Z_(e),h=J_(e),u=Q_(e),d=tM(e),f=G_(e),p=V_(o),v=s.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),g.length>0&&(g+=`
`)):(m=[sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),g=[sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bs?"#define TONE_MAPPING":"",e.toneMapping!==Bs?re.tonemapping_pars_fragment:"",e.toneMapping!==Bs?F_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,B_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),r=Gu(r),r=ep(r,e),r=np(r,e),a=Gu(a),a=ep(a,e),a=np(a,e),r=ip(r),a=ip(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=x+m+r,y=x+g+a,C=Jf(s,s.VERTEX_SHADER,b),T=Jf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(C).trim(),$=s.getShaderInfoLog(T).trim();let K=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{const ot=tp(s,C,"vertex"),q=tp(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ot+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||$==="")&&(W=!1);W&&(I.diagnostics={runnable:K,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:g}})}s.deleteShader(C),s.deleteShader(T),L=new Wc(s,v),S=$_(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,D_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sM(t),e.set(t,n)),n}}class sM{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}}function oM(i,t,e,n,s,o,r){const a=new Md,c=new iM,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,H,B){const $=H.fog,K=B.geometry,W=S.isMeshStandardMaterial?H.environment:null,ot=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),q=ot&&ot.mapping===yl?ot.image.height:null,nt=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const _t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pt=_t!==void 0?_t.length:0;let Zt=0;K.morphAttributes.position!==void 0&&(Zt=1),K.morphAttributes.normal!==void 0&&(Zt=2),K.morphAttributes.color!==void 0&&(Zt=3);let ge,j,ht,It;if(nt){const we=Ni[nt];ge=we.vertexShader,j=we.fragmentShader}else ge=S.vertexShader,j=S.fragmentShader,c.update(S),ht=c.getVertexShaderID(S),It=c.getFragmentShaderID(S);const ut=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Kt=B.isInstancedMesh===!0,$t=B.isBatchedMesh===!0,fe=!!S.map,tt=!!S.matcap,U=!!ot,A=!!S.aoMap,at=!!S.lightMap,J=!!S.bumpMap,vt=!!S.normalMap,pt=!!S.displacementMap,qt=!!S.emissiveMap,Ct=!!S.metalnessMap,P=!!S.roughnessMap,w=S.anisotropy>0,F=S.clearcoat>0,Y=S.dispersion>0,st=S.iridescence>0,Z=S.sheen>0,Ut=S.transmission>0,xt=w&&!!S.anisotropyMap,Rt=F&&!!S.clearcoatMap,le=F&&!!S.clearcoatNormalMap,ct=F&&!!S.clearcoatRoughnessMap,kt=st&&!!S.iridescenceMap,Xt=st&&!!S.iridescenceThicknessMap,Jt=Z&&!!S.sheenColorMap,Nt=Z&&!!S.sheenRoughnessMap,pe=!!S.specularMap,oe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,N=Ut&&!!S.transmissionMap,bt=Ut&&!!S.thicknessMap,X=!!S.gradientMap,et=!!S.alphaMap,Tt=S.alphaTest>0,Mt=!!S.alphaHash,ne=!!S.extensions;let Xe=Bs;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const yn={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:j,defines:S.defines,customVertexShaderID:ht,customFragmentShaderID:It,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:$t,batchingColor:$t&&B._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&B.instanceColor!==null,instancingMorph:Kt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Tn,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:tt,envMap:U,envMapMode:U&&ot.mapping,envMapCubeUVHeight:q,aoMap:A,lightMap:at,bumpMap:J,normalMap:vt,displacementMap:d&&pt,emissiveMap:qt,normalMapObjectSpace:vt&&S.normalMapType===Jv,normalMapTangentSpace:vt&&S.normalMapType===T0,metalnessMap:Ct,roughnessMap:P,anisotropy:w,anisotropyMap:xt,clearcoat:F,clearcoatMap:Rt,clearcoatNormalMap:le,clearcoatRoughnessMap:ct,dispersion:Y,iridescence:st,iridescenceMap:kt,iridescenceThicknessMap:Xt,sheen:Z,sheenColorMap:Jt,sheenRoughnessMap:Nt,specularMap:pe,specularColorMap:oe,specularIntensityMap:Ne,transmission:Ut,transmissionMap:N,thicknessMap:bt,gradientMap:X,opaque:S.transparent===!1&&S.blending===ir&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:Tt,alphaHash:Mt,combine:S.combine,mapUv:fe&&v(S.map.channel),aoMapUv:A&&v(S.aoMap.channel),lightMapUv:at&&v(S.lightMap.channel),bumpMapUv:J&&v(S.bumpMap.channel),normalMapUv:vt&&v(S.normalMap.channel),displacementMapUv:pt&&v(S.displacementMap.channel),emissiveMapUv:qt&&v(S.emissiveMap.channel),metalnessMapUv:Ct&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:xt&&v(S.anisotropyMap.channel),clearcoatMapUv:Rt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(S.sheenRoughnessMap.channel),specularMapUv:pe&&v(S.specularMap.channel),specularColorMapUv:oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ne&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:bt&&v(S.thicknessMap.channel),alphaMapUv:et&&v(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(vt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(fe||et),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===Ae,decodeVideoTextureEmissive:qt&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Re,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&S.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yn.vertexUv1s=l.has(1),yn.vertexUv2s=l.has(2),yn.vertexUv3s=l.has(3),l.clear(),yn}function g(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(x(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=p[S.type];let I;if(M){const H=Ni[M];I=G1.clone(H.uniforms)}else I=S.uniforms;return I}function C(S,M){let I;for(let H=0,B=h.length;H<B;H++){const $=h[H];if($.cacheKey===M){I=$,++I.usedTimes;break}}return I===void 0&&(I=new eM(i,M,S,o),h.push(I)),I}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:L}}function rM(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function aM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function op(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rp(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,f,p,v,m){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=v,g.group=m),t++,g}function a(u,d,f,p,v,m){const g=r(u,d,f,p,v,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function c(u,d,f,p,v,m){const g=r(u,d,f,p,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||aM),n.length>1&&n.sort(d||op),s.length>1&&s.sort(d||op)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function cM(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new rp,i.set(n,[r])):s>=o.length?(r=new rp,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function lM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new _,color:new Dt};break;case"SpotLight":e={position:new _,direction:new _,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new _,halfWidth:new _,halfHeight:new _};break}return i[t.id]=e,e}}}function hM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let uM=0;function dM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fM(i){const t=new lM,e=hM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new _);const s=new _,o=new Vt,r=new Vt;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,x=0,b=0,y=0,C=0,T=0,R=0;l.sort(dM);for(let S=0,M=l.length;S<M;S++){const I=l[S],H=I.color,B=I.intensity,$=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*B,u+=H.g*B,d+=H.b*B;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],B);R++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ot=I.shadow,q=e.get(I);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=W,f++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(B),W.distance=$,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;const ot=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,ot.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=ot.matrix,I.castShadow){const q=e.get(I);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=K,y++}v++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const ot=I.shadow,q=e.get(I);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,q.shadowCameraNear=ot.camera.near,q.shadowCameraFar=ot.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=W,p++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(B),W.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[g]=W,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==g||L.numDirectionalShadows!==x||L.numPointShadows!==b||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=f,L.pointLength=p,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=g,L.numDirectionalShadows=x,L.numPointShadows=b,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=R,n.version=uM++)}function c(l,h){let u=0,d=0,f=0,p=0,v=0;const m=h.matrixWorldInverse;for(let g=0,x=l.length;g<x;g++){const b=l[g];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(b.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),p++}else if(b.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function ap(i){const t=new fM(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function pM(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ap(i),t.set(s,[a])):o>=r.length?(a=new ap(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class mM extends Ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gM extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xM(i,t,e){let n=new wd;const s=new Q,o=new Q,r=new be,a=new mM({depthPacking:Zv}),c=new gM,l={},h=e.maxTextureSize,u={[ms]:Sn,[Sn]:ms,[Re]:Re},d=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:vM,fragmentShader:yM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new me;p.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new z(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let g=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(zs),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=g!==ls&&this.type===ls,$=g===ls&&this.type!==ls;for(let K=0,W=T.length;K<W;K++){const ot=T[K],q=ot.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const nt=q.getFrameExtents();if(s.multiply(nt),o.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/nt.x),s.x=o.x*nt.x,q.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/nt.y),s.y=o.y*nt.y,q.mapSize.y=o.y)),q.map===null||B===!0||$===!0){const Pt=this.type!==ls?{minFilter:In,magFilter:In}:{};q.map!==null&&q.map.dispose(),q.map=new xo(s.x,s.y,Pt),q.map.texture.name=ot.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const _t=q.getViewportCount();for(let Pt=0;Pt<_t;Pt++){const Zt=q.getViewport(Pt);r.set(o.x*Zt.x,o.y*Zt.y,o.x*Zt.z,o.y*Zt.w),H.viewport(r),q.updateMatrices(ot,Pt),n=q.getFrustum(),y(R,L,q.camera,ot,this.type)}q.isPointLightShadow!==!0&&this.type===ls&&x(q,L),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,I)};function x(T,R){const L=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xo(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,f,v,null)}function b(T,R,L,S){let M=null;const I=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=M.uuid,B=R.uuid;let $=l[H];$===void 0&&($={},l[H]=$);let K=$[B];K===void 0&&(K=M.clone(),$[B]=K,R.addEventListener("dispose",C)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,S===ls?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=L}return M}function y(T,R,L,S,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ls)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=t.update(T),$=T.material;if(Array.isArray($)){const K=B.groups;for(let W=0,ot=K.length;W<ot;W++){const q=K[W],nt=$[q.materialIndex];if(nt&&nt.visible){const _t=b(T,nt,S,M);T.onBeforeShadow(i,T,R,L,B,_t,q),i.renderBufferDirect(L,null,B,_t,T,q),T.onAfterShadow(i,T,R,L,B,_t,q)}}}else if($.visible){const K=b(T,$,S,M);T.onBeforeShadow(i,T,R,L,B,K,null),i.renderBufferDirect(L,null,B,K,T,null),T.onAfterShadow(i,T,R,L,B,K,null)}}const H=T.children;for(let B=0,$=H.length;B<$;B++)y(H[B],R,L,S,M)}function C(T){T.target.removeEventListener("dispose",C);for(const L in l){const S=l[L],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const bM={[su]:ou,[ru]:lu,[au]:hu,[lr]:cu,[ou]:su,[lu]:ru,[hu]:au,[cu]:lr};function _M(i,t){function e(){let N=!1;const bt=new be;let X=null;const et=new be(0,0,0,0);return{setMask:function(Tt){X!==Tt&&!N&&(i.colorMask(Tt,Tt,Tt,Tt),X=Tt)},setLocked:function(Tt){N=Tt},setClear:function(Tt,Mt,ne,Xe,yn){yn===!0&&(Tt*=Xe,Mt*=Xe,ne*=Xe),bt.set(Tt,Mt,ne,Xe),et.equals(bt)===!1&&(i.clearColor(Tt,Mt,ne,Xe),et.copy(bt))},reset:function(){N=!1,X=null,et.set(-1,0,0,0)}}}function n(){let N=!1,bt=!1,X=null,et=null,Tt=null;return{setReversed:function(Mt){if(bt!==Mt){const ne=t.get("EXT_clip_control");bt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Xe=Tt;Tt=null,this.setClear(Xe)}bt=Mt},getReversed:function(){return bt},setTest:function(Mt){Mt?ut(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Mt){X!==Mt&&!N&&(i.depthMask(Mt),X=Mt)},setFunc:function(Mt){if(bt&&(Mt=bM[Mt]),et!==Mt){switch(Mt){case su:i.depthFunc(i.NEVER);break;case ou:i.depthFunc(i.ALWAYS);break;case ru:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case au:i.depthFunc(i.EQUAL);break;case cu:i.depthFunc(i.GEQUAL);break;case lu:i.depthFunc(i.GREATER);break;case hu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=Mt}},setLocked:function(Mt){N=Mt},setClear:function(Mt){Tt!==Mt&&(bt&&(Mt=1-Mt),i.clearDepth(Mt),Tt=Mt)},reset:function(){N=!1,X=null,et=null,Tt=null,bt=!1}}}function s(){let N=!1,bt=null,X=null,et=null,Tt=null,Mt=null,ne=null,Xe=null,yn=null;return{setTest:function(we){N||(we?ut(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(we){bt!==we&&!N&&(i.stencilMask(we),bt=we)},setFunc:function(we,fi,Yi){(X!==we||et!==fi||Tt!==Yi)&&(i.stencilFunc(we,fi,Yi),X=we,et=fi,Tt=Yi)},setOp:function(we,fi,Yi){(Mt!==we||ne!==fi||Xe!==Yi)&&(i.stencilOp(we,fi,Yi),Mt=we,ne=fi,Xe=Yi)},setLocked:function(we){N=we},setClear:function(we){yn!==we&&(i.clearStencil(we),yn=we)},reset:function(){N=!1,bt=null,X=null,et=null,Tt=null,Mt=null,ne=null,Xe=null,yn=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,v=!1,m=null,g=null,x=null,b=null,y=null,C=null,T=null,R=new Dt(0,0,0),L=0,S=!1,M=null,I=null,H=null,B=null,$=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ot=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ot>=1):q.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ot>=2);let nt=null,_t={};const Pt=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),ge=new be().fromArray(Pt),j=new be().fromArray(Zt);function ht(N,bt,X,et){const Tt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(N,Mt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<X;ne++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(bt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Mt}const It={};It[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),r.setFunc(lr),J(!1),vt(lf),ut(i.CULL_FACE),A(zs);function ut(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ft(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Kt(N,bt){return u[N]!==bt?(i.bindFramebuffer(N,bt),u[N]=bt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function $t(N,bt){let X=f,et=!1;if(N){X=d.get(bt),X===void 0&&(X=[],d.set(bt,X));const Tt=N.textures;if(X.length!==Tt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,ne=Tt.length;Mt<ne;Mt++)X[Mt]=i.COLOR_ATTACHMENT0+Mt;X.length=Tt.length,et=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,et=!0);et&&i.drawBuffers(X)}function fe(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const tt={[ao]:i.FUNC_ADD,[Mv]:i.FUNC_SUBTRACT,[wv]:i.FUNC_REVERSE_SUBTRACT};tt[Sv]=i.MIN,tt[Tv]=i.MAX;const U={[Ev]:i.ZERO,[Av]:i.ONE,[Cv]:i.SRC_COLOR,[nu]:i.SRC_ALPHA,[Nv]:i.SRC_ALPHA_SATURATE,[Iv]:i.DST_COLOR,[Pv]:i.DST_ALPHA,[Rv]:i.ONE_MINUS_SRC_COLOR,[iu]:i.ONE_MINUS_SRC_ALPHA,[kv]:i.ONE_MINUS_DST_COLOR,[Lv]:i.ONE_MINUS_DST_ALPHA,[Dv]:i.CONSTANT_COLOR,[Uv]:i.ONE_MINUS_CONSTANT_COLOR,[Ov]:i.CONSTANT_ALPHA,[zv]:i.ONE_MINUS_CONSTANT_ALPHA};function A(N,bt,X,et,Tt,Mt,ne,Xe,yn,we){if(N===zs){v===!0&&(Ft(i.BLEND),v=!1);return}if(v===!1&&(ut(i.BLEND),v=!0),N!==_v){if(N!==m||we!==S){if((g!==ao||y!==ao)&&(i.blendEquation(i.FUNC_ADD),g=ao,y=ao),we)switch(N){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,b=null,C=null,T=null,R.set(0,0,0),L=0,m=N,S=we}return}Tt=Tt||bt,Mt=Mt||X,ne=ne||et,(bt!==g||Tt!==y)&&(i.blendEquationSeparate(tt[bt],tt[Tt]),g=bt,y=Tt),(X!==x||et!==b||Mt!==C||ne!==T)&&(i.blendFuncSeparate(U[X],U[et],U[Mt],U[ne]),x=X,b=et,C=Mt,T=ne),(Xe.equals(R)===!1||yn!==L)&&(i.blendColor(Xe.r,Xe.g,Xe.b,yn),R.copy(Xe),L=yn),m=N,S=!1}function at(N,bt){N.side===Re?Ft(i.CULL_FACE):ut(i.CULL_FACE);let X=N.side===Sn;bt&&(X=!X),J(X),N.blending===ir&&N.transparent===!1?A(zs):A(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),o.setMask(N.colorWrite);const et=N.stencilWrite;a.setTest(et),et&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),qt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function vt(N){N!==xv?(ut(i.CULL_FACE),N!==I&&(N===lf?i.cullFace(i.BACK):N===bv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),I=N}function pt(N){N!==H&&(W&&i.lineWidth(N),H=N)}function qt(N,bt,X){N?(ut(i.POLYGON_OFFSET_FILL),(B!==bt||$!==X)&&(i.polygonOffset(bt,X),B=bt,$=X)):Ft(i.POLYGON_OFFSET_FILL)}function Ct(N){N?ut(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function P(N){N===void 0&&(N=i.TEXTURE0+K-1),nt!==N&&(i.activeTexture(N),nt=N)}function w(N,bt,X){X===void 0&&(nt===null?X=i.TEXTURE0+K-1:X=nt);let et=_t[X];et===void 0&&(et={type:void 0,texture:void 0},_t[X]=et),(et.type!==N||et.texture!==bt)&&(nt!==X&&(i.activeTexture(X),nt=X),i.bindTexture(N,bt||It[N]),et.type=N,et.texture=bt)}function F(){const N=_t[nt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(N){ge.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ge.copy(N))}function Nt(N){j.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function pe(N,bt){let X=l.get(bt);X===void 0&&(X=new WeakMap,l.set(bt,X));let et=X.get(N);et===void 0&&(et=i.getUniformBlockIndex(bt,N.name),X.set(N,et))}function oe(N,bt){const et=l.get(bt).get(N);c.get(bt)!==et&&(i.uniformBlockBinding(bt,et,N.__bindingPointIndex),c.set(bt,et))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,_t={},u={},d=new WeakMap,f=[],p=null,v=!1,m=null,g=null,x=null,b=null,y=null,C=null,T=null,R=new Dt(0,0,0),L=0,S=!1,M=null,I=null,H=null,B=null,$=null,ge.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ut,disable:Ft,bindFramebuffer:Kt,drawBuffers:$t,useProgram:fe,setBlending:A,setMaterial:at,setFlipSided:J,setCullFace:vt,setLineWidth:pt,setPolygonOffset:qt,setScissorTest:Ct,activeTexture:P,bindTexture:w,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:st,texImage2D:kt,texImage3D:Xt,updateUBOMapping:pe,uniformBlockBinding:oe,texStorage2D:le,texStorage3D:ct,texSubImage2D:Z,texSubImage3D:Ut,compressedTexSubImage2D:xt,compressedTexSubImage3D:Rt,scissor:Jt,viewport:Nt,reset:Ne}}function cp(i,t,e,n){const s=MM(n);switch(e){case y0:return i*t;case b0:return i*t;case _0:return i*t*2;case vd:return i*t/s.components*s.byteLength;case yd:return i*t/s.components*s.byteLength;case M0:return i*t*2/s.components*s.byteLength;case xd:return i*t*2/s.components*s.byteLength;case x0:return i*t*3/s.components*s.byteLength;case ii:return i*t*4/s.components*s.byteLength;case bd:return i*t*4/s.components*s.byteLength;case Fc:case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gc:case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pu:case gu:return Math.max(i,16)*Math.max(t,8)/4;case fu:case mu:return Math.max(i,8)*Math.max(t,8)/2;case vu:case yu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _u:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Su:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Au:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Iu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ku:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $c:case Nu:case Du:return Math.ceil(i/4)*Math.ceil(t/4)*16;case w0:case Uu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ou:case zu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function MM(i){switch(i){case gs:case m0:return{byteLength:1,components:1};case ga:case g0:case La:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case yo:case pd:case Ti:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wM(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return f?new OffscreenCanvas(P,w):xa("canvas")}function v(P,w,F){let Y=1;const st=Ct(P);if((st.width>F||st.height>F)&&(Y=F/Math.max(st.width,st.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(Y*st.width),Ut=Math.floor(Y*st.height);u===void 0&&(u=p(Z,Ut));const xt=w?p(Z,Ut):u;return xt.width=Z,xt.height=Ut,xt.getContext("2d").drawImage(P,0,0,Z,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Z+"x"+Ut+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,w,F,Y,st=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=w;if(w===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),w===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),w===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),w===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),w===i.RGBA){const Ut=st?xl:ue.getTransfer(Y);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=Ut===Ae?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(P,w){let F;return P?w===null||w===yo||w===dr?F=i.DEPTH24_STENCIL8:w===Ti?F=i.DEPTH32F_STENCIL8:w===ga&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===yo||w===dr?F=i.DEPTH_COMPONENT24:w===Ti?F=i.DEPTH_COMPONENT32F:w===ga&&(F=i.DEPTH_COMPONENT16),F}function C(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==Xn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){const w=P.target;w.removeEventListener("dispose",T),L(w),w.isVideoTexture&&h.delete(w)}function R(P){const w=P.target;w.removeEventListener("dispose",R),M(w)}function L(P){const w=n.get(P);if(w.__webglInit===void 0)return;const F=P.source,Y=d.get(F);if(Y){const st=Y[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(P),Object.keys(Y).length===0&&d.delete(F)}n.remove(P)}function S(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const F=P.source,Y=d.get(F);delete Y[w.__cacheKey],r.memory.textures--}function M(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let st=0;st<w.__webglFramebuffer[Y].length;st++)i.deleteFramebuffer(w.__webglFramebuffer[Y][st]);else i.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)i.deleteFramebuffer(w.__webglFramebuffer[Y]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const F=P.textures;for(let Y=0,st=F.length;Y<st;Y++){const Z=n.get(F[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(F[Y])}n.remove(P)}let I=0;function H(){I=0}function B(){const P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function $(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function K(P,w){const F=n.get(P);if(P.isVideoTexture&&pt(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){const Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,P,w);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+w)}function W(P,w){const F=n.get(P);if(P.version>0&&F.__version!==P.version){j(F,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+w)}function ot(P,w){const F=n.get(P);if(P.version>0&&F.__version!==P.version){j(F,P,w);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+w)}function q(P,w){const F=n.get(P);if(P.version>0&&F.__version!==P.version){ht(F,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+w)}const nt={[Gs]:i.REPEAT,[Ds]:i.CLAMP_TO_EDGE,[il]:i.MIRRORED_REPEAT},_t={[In]:i.NEAREST,[p0]:i.NEAREST_MIPMAP_NEAREST,[ea]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[Bc]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},Pt={[Qv]:i.NEVER,[o1]:i.ALWAYS,[t1]:i.LESS,[E0]:i.LEQUAL,[e1]:i.EQUAL,[s1]:i.GEQUAL,[n1]:i.GREATER,[i1]:i.NOTEQUAL};function Zt(P,w){if(w.type===Ti&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Xn||w.magFilter===Bc||w.magFilter===ea||w.magFilter===us||w.minFilter===Xn||w.minFilter===Bc||w.minFilter===ea||w.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,nt[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,nt[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,nt[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,_t[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,_t[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Pt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==ea&&w.minFilter!==us||w.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ge(P,w){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",T));const Y=w.source;let st=d.get(Y);st===void 0&&(st={},d.set(Y,st));const Z=$(w);if(Z!==P.__cacheKey){st[Z]===void 0&&(st[Z]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,F=!0),st[Z].usedTimes++;const Ut=st[P.__cacheKey];Ut!==void 0&&(st[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&S(w)),P.__cacheKey=Z,P.__webglTexture=st[Z].texture}return F}function j(P,w,F){let Y=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=i.TEXTURE_3D);const st=ge(P,w),Z=w.source;e.bindTexture(Y,P.__webglTexture,i.TEXTURE0+F);const Ut=n.get(Z);if(Z.version!==Ut.__version||st===!0){e.activeTexture(i.TEXTURE0+F);const xt=ue.getPrimaries(ue.workingColorSpace),Rt=w.colorSpace===ks?null:ue.getPrimaries(w.colorSpace),le=w.colorSpace===ks||xt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ct=v(w.image,!1,s.maxTextureSize);ct=qt(w,ct);const kt=o.convert(w.format,w.colorSpace),Xt=o.convert(w.type);let Jt=b(w.internalFormat,kt,Xt,w.colorSpace,w.isVideoTexture);Zt(Y,w);let Nt;const pe=w.mipmaps,oe=w.isVideoTexture!==!0,Ne=Ut.__version===void 0||st===!0,N=Z.dataReady,bt=C(w,ct);if(w.isDepthTexture)Jt=y(w.format===fr,w.type),Ne&&(oe?e.texStorage2D(i.TEXTURE_2D,1,Jt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Jt,ct.width,ct.height,0,kt,Xt,null));else if(w.isDataTexture)if(pe.length>0){oe&&Ne&&e.texStorage2D(i.TEXTURE_2D,bt,Jt,pe[0].width,pe[0].height);for(let X=0,et=pe.length;X<et;X++)Nt=pe[X],oe?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Nt.width,Nt.height,kt,Xt,Nt.data):e.texImage2D(i.TEXTURE_2D,X,Jt,Nt.width,Nt.height,0,kt,Xt,Nt.data);w.generateMipmaps=!1}else oe?(Ne&&e.texStorage2D(i.TEXTURE_2D,bt,Jt,ct.width,ct.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,kt,Xt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,ct.width,ct.height,0,kt,Xt,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){oe&&Ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Jt,pe[0].width,pe[0].height,ct.depth);for(let X=0,et=pe.length;X<et;X++)if(Nt=pe[X],w.format!==ii)if(kt!==null)if(oe){if(N)if(w.layerUpdates.size>0){const Tt=cp(Nt.width,Nt.height,w.format,w.type);for(const Mt of w.layerUpdates){const ne=Nt.data.subarray(Mt*Tt/Nt.data.BYTES_PER_ELEMENT,(Mt+1)*Tt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Mt,Nt.width,Nt.height,1,kt,ne)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Nt.width,Nt.height,ct.depth,kt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Jt,Nt.width,Nt.height,ct.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Nt.width,Nt.height,ct.depth,kt,Xt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Jt,Nt.width,Nt.height,ct.depth,0,kt,Xt,Nt.data)}else{oe&&Ne&&e.texStorage2D(i.TEXTURE_2D,bt,Jt,pe[0].width,pe[0].height);for(let X=0,et=pe.length;X<et;X++)Nt=pe[X],w.format!==ii?kt!==null?oe?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Nt.width,Nt.height,kt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Jt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Nt.width,Nt.height,kt,Xt,Nt.data):e.texImage2D(i.TEXTURE_2D,X,Jt,Nt.width,Nt.height,0,kt,Xt,Nt.data)}else if(w.isDataArrayTexture)if(oe){if(Ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Jt,ct.width,ct.height,ct.depth),N)if(w.layerUpdates.size>0){const X=cp(ct.width,ct.height,w.format,w.type);for(const et of w.layerUpdates){const Tt=ct.data.subarray(et*X/ct.data.BYTES_PER_ELEMENT,(et+1)*X/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,kt,Xt,Tt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,kt,Xt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,ct.width,ct.height,ct.depth,0,kt,Xt,ct.data);else if(w.isData3DTexture)oe?(Ne&&e.texStorage3D(i.TEXTURE_3D,bt,Jt,ct.width,ct.height,ct.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,kt,Xt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,ct.width,ct.height,ct.depth,0,kt,Xt,ct.data);else if(w.isFramebufferTexture){if(Ne)if(oe)e.texStorage2D(i.TEXTURE_2D,bt,Jt,ct.width,ct.height);else{let X=ct.width,et=ct.height;for(let Tt=0;Tt<bt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Jt,X,et,0,kt,Xt,null),X>>=1,et>>=1}}else if(pe.length>0){if(oe&&Ne){const X=Ct(pe[0]);e.texStorage2D(i.TEXTURE_2D,bt,Jt,X.width,X.height)}for(let X=0,et=pe.length;X<et;X++)Nt=pe[X],oe?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,kt,Xt,Nt):e.texImage2D(i.TEXTURE_2D,X,Jt,kt,Xt,Nt);w.generateMipmaps=!1}else if(oe){if(Ne){const X=Ct(ct);e.texStorage2D(i.TEXTURE_2D,bt,Jt,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Xt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Jt,kt,Xt,ct);m(w)&&g(Y),Ut.__version=Z.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ht(P,w,F){if(w.image.length!==6)return;const Y=ge(P,w),st=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+F);const Z=n.get(st);if(st.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const Ut=ue.getPrimaries(ue.workingColorSpace),xt=w.colorSpace===ks?null:ue.getPrimaries(w.colorSpace),Rt=w.colorSpace===ks||Ut===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const le=w.isCompressedTexture||w.image[0].isCompressedTexture,ct=w.image[0]&&w.image[0].isDataTexture,kt=[];for(let et=0;et<6;et++)!le&&!ct?kt[et]=v(w.image[et],!0,s.maxCubemapSize):kt[et]=ct?w.image[et].image:w.image[et],kt[et]=qt(w,kt[et]);const Xt=kt[0],Jt=o.convert(w.format,w.colorSpace),Nt=o.convert(w.type),pe=b(w.internalFormat,Jt,Nt,w.colorSpace),oe=w.isVideoTexture!==!0,Ne=Z.__version===void 0||Y===!0,N=st.dataReady;let bt=C(w,Xt);Zt(i.TEXTURE_CUBE_MAP,w);let X;if(le){oe&&Ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,pe,Xt.width,Xt.height);for(let et=0;et<6;et++){X=kt[et].mipmaps;for(let Tt=0;Tt<X.length;Tt++){const Mt=X[Tt];w.format!==ii?Jt!==null?oe?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,Mt.width,Mt.height,Jt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,pe,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,0,0,Mt.width,Mt.height,Jt,Nt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt,pe,Mt.width,Mt.height,0,Jt,Nt,Mt.data)}}}else{if(X=w.mipmaps,oe&&Ne){X.length>0&&bt++;const et=Ct(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,pe,et.width,et.height)}for(let et=0;et<6;et++)if(ct){oe?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,kt[et].width,kt[et].height,Jt,Nt,kt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,pe,kt[et].width,kt[et].height,0,Jt,Nt,kt[et].data);for(let Tt=0;Tt<X.length;Tt++){const ne=X[Tt].image[et].image;oe?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,ne.width,ne.height,Jt,Nt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,pe,ne.width,ne.height,0,Jt,Nt,ne.data)}}else{oe?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Jt,Nt,kt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,pe,Jt,Nt,kt[et]);for(let Tt=0;Tt<X.length;Tt++){const Mt=X[Tt];oe?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,0,0,Jt,Nt,Mt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Tt+1,pe,Jt,Nt,Mt.image[et])}}}m(w)&&g(i.TEXTURE_CUBE_MAP),Z.__version=st.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function It(P,w,F,Y,st,Z){const Ut=o.convert(F.format,F.colorSpace),xt=o.convert(F.type),Rt=b(F.internalFormat,Ut,xt,F.colorSpace),le=n.get(w),ct=n.get(F);if(ct.__renderTarget=w,!le.__hasExternalTextures){const kt=Math.max(1,w.width>>Z),Xt=Math.max(1,w.height>>Z);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Z,Rt,kt,Xt,w.depth,0,Ut,xt,null):e.texImage2D(st,Z,Rt,kt,Xt,0,Ut,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),vt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,st,ct.__webglTexture,0,J(w)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,st,ct.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,w,F){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const Y=w.depthTexture,st=Y&&Y.isDepthTexture?Y.type:null,Z=y(w.stencilBuffer,st),Ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=J(w);vt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,Z,w.width,w.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,P)}else{const Y=w.textures;for(let st=0;st<Y.length;st++){const Z=Y[st],Ut=o.convert(Z.format,Z.colorSpace),xt=o.convert(Z.type),Rt=b(Z.internalFormat,Ut,xt,Z.colorSpace),le=J(w);F&&vt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Rt,w.width,w.height):vt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const st=Y.__webglTexture,Z=J(w);if(w.depthTexture.format===sr)vt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(w.depthTexture.format===fr)vt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Kt(P){const w=n.get(P),F=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const st=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",st)};Y.addEventListener("dispose",st),w.__depthDisposeCallback=st}w.__boundDepthTexture=Y}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ft(w.__webglFramebuffer,P)}else if(F){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=i.createRenderbuffer(),ut(w.__webglDepthbuffer[Y],P,!1);else{const st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ut(w.__webglDepthbuffer,P,!1);else{const Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(P,w,F){const Y=n.get(P);w!==void 0&&It(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Kt(P)}function fe(P){const w=P.texture,F=n.get(P),Y=n.get(w);P.addEventListener("dispose",R);const st=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Ut=st.length>1;if(Ut||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=w.version,r.memory.textures++),Z){F.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[xt]=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)F.__webglFramebuffer[xt][Rt]=i.createFramebuffer()}else F.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)F.__webglFramebuffer[xt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let xt=0,Rt=st.length;xt<Rt;xt++){const le=n.get(st[xt]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&vt(P)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xt=0;xt<st.length;xt++){const Rt=st[xt];F.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[xt]);const le=o.convert(Rt.format,Rt.colorSpace),ct=o.convert(Rt.type),kt=b(Rt.internalFormat,le,ct,Rt.colorSpace,P.isXRRenderTarget===!0),Xt=J(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,kt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,F.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(F.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)It(F.__webglFramebuffer[xt][Rt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt);else It(F.__webglFramebuffer[xt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(w)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let xt=0,Rt=st.length;xt<Rt;xt++){const le=st[xt],ct=n.get(le);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Zt(i.TEXTURE_2D,le),It(F.__webglFramebuffer,P,le,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),m(le)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Y.__webglTexture),Zt(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)It(F.__webglFramebuffer[Rt],P,w,i.COLOR_ATTACHMENT0,xt,Rt);else It(F.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,xt,0);m(w)&&g(xt),e.unbindTexture()}P.depthBuffer&&Kt(P)}function tt(P){const w=P.textures;for(let F=0,Y=w.length;F<Y;F++){const st=w[F];if(m(st)){const Z=x(P),Ut=n.get(st).__webglTexture;e.bindTexture(Z,Ut),g(Z),e.unbindTexture()}}}const U=[],A=[];function at(P){if(P.samples>0){if(vt(P)===!1){const w=P.textures,F=P.width,Y=P.height;let st=i.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(P),xt=w.length>1;if(xt)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const le=n.get(w[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,st,i.NEAREST),c===!0&&(U.length=0,A.length=0,U.push(i.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(U.push(Z),A.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const le=n.get(w[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,le,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function J(P){return Math.min(s.maxSamples,P.samples)}function vt(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function pt(P){const w=r.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function qt(P,w){const F=P.colorSpace,Y=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==Tn&&F!==ks&&(ue.getTransfer(F)===Ae?(Y!==ii||st!==gs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=ot,this.setTextureCube=q,this.rebindTextures=$t,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=vt}function SM(i,t){function e(n,s=ks){let o;const r=ue.getTransfer(s);if(n===gs)return i.UNSIGNED_BYTE;if(n===md)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===v0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===m0)return i.BYTE;if(n===g0)return i.SHORT;if(n===ga)return i.UNSIGNED_SHORT;if(n===pd)return i.INT;if(n===yo)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===La)return i.HALF_FLOAT;if(n===y0)return i.ALPHA;if(n===x0)return i.RGB;if(n===ii)return i.RGBA;if(n===b0)return i.LUMINANCE;if(n===_0)return i.LUMINANCE_ALPHA;if(n===sr)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===vd)return i.RED;if(n===yd)return i.RED_INTEGER;if(n===M0)return i.RG;if(n===xd)return i.RG_INTEGER;if(n===bd)return i.RGBA_INTEGER;if(n===Fc||n===Hc||n===Gc||n===Vc)if(r===Ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Fc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Fc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===pu||n===mu||n===gu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===fu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vu||n===yu||n===xu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===vu||n===yu)return r===Ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===xu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bu||n===_u||n===Mu||n===wu||n===Su||n===Tu||n===Eu||n===Au||n===Cu||n===Ru||n===Pu||n===Lu||n===Iu||n===ku)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===bu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_u)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Su)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Au)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Iu)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ku)return r===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$c||n===Nu||n===Du)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===$c)return r===Ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===w0||n===Uu||n===Ou||n===zu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===$c)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Uu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ou)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class TM extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class it extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EM={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new it;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vs({vertexShader:AM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new z(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PM extends Tr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const v=new RM,m=e.getContextAttributes();let g=null,x=null;const b=[],y=[],C=new Q;let T=null;const R=new Mn;R.viewport=new be;const L=new Mn;L.viewport=new be;const S=[R,L],M=new TM;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ht=b[j];return ht===void 0&&(ht=new ah,b[j]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(j){let ht=b[j];return ht===void 0&&(ht=new ah,b[j]=ht),ht.getGripSpace()},this.getHand=function(j){let ht=b[j];return ht===void 0&&(ht=new ah,b[j]=ht),ht.getHandSpace()};function B(j){const ht=y.indexOf(j.inputSource);if(ht===-1)return;const It=b[ht];It!==void 0&&(It.update(j.inputSource,j.frame,l||r),It.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",K);for(let j=0;j<b.length;j++){const ht=y[j];ht!==null&&(y[j]=null,b[j].disconnect(ht))}I=null,H=null,v.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,x=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new xo(f.framebufferWidth,f.framebufferHeight,{format:ii,type:gs,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,It=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?fr:sr,It=m.stencil?dr:yo);const Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new xo(d.textureWidth,d.textureHeight,{format:ii,type:gs,depthTexture:new O0(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(j){for(let ht=0;ht<j.removed.length;ht++){const It=j.removed[ht],ut=y.indexOf(It);ut>=0&&(y[ut]=null,b[ut].disconnect(It))}for(let ht=0;ht<j.added.length;ht++){const It=j.added[ht];let ut=y.indexOf(It);if(ut===-1){for(let Kt=0;Kt<b.length;Kt++)if(Kt>=y.length){y.push(It),ut=Kt;break}else if(y[Kt]===null){y[Kt]=It,ut=Kt;break}if(ut===-1)break}const Ft=b[ut];Ft&&Ft.connect(It)}}const W=new _,ot=new _;function q(j,ht,It){W.setFromMatrixPosition(ht.matrixWorld),ot.setFromMatrixPosition(It.matrixWorld);const ut=W.distanceTo(ot),Ft=ht.projectionMatrix.elements,Kt=It.projectionMatrix.elements,$t=Ft[14]/(Ft[10]-1),fe=Ft[14]/(Ft[10]+1),tt=(Ft[9]+1)/Ft[5],U=(Ft[9]-1)/Ft[5],A=(Ft[8]-1)/Ft[0],at=(Kt[8]+1)/Kt[0],J=$t*A,vt=$t*at,pt=ut/(-A+at),qt=pt*-A;if(ht.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qt),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ft[10]===-1)j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Ct=$t+pt,P=fe+pt,w=J-qt,F=vt+(ut-qt),Y=tt*fe/P*Ct,st=U*fe/P*Ct;j.projectionMatrix.makePerspective(w,F,Y,st,Ct,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function nt(j,ht){ht===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ht.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ht=j.near,It=j.far;v.texture!==null&&(v.depthNear>0&&(ht=v.depthNear),v.depthFar>0&&(It=v.depthFar)),M.near=L.near=R.near=ht,M.far=L.far=R.far=It,(I!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,H=M.far),R.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ut=j.parent,Ft=M.cameras;nt(M,ut);for(let Kt=0;Kt<Ft.length;Kt++)nt(Ft[Kt],ut);Ft.length===2?q(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),_t(j,M,ut)};function _t(j,ht,It){It===null?j.matrix.copy(ht.matrixWorld):(j.matrix.copy(It.matrixWorld),j.matrix.invert(),j.matrix.multiply(ht.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=pr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Pt=null;function Zt(j,ht){if(h=ht.getViewerPose(l||r),p=ht,h!==null){const It=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ut=!1;It.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let Kt=0;Kt<It.length;Kt++){const $t=It[Kt];let fe=null;if(f!==null)fe=f.getViewport($t);else{const U=u.getViewSubImage(d,$t);fe=U.viewport,Kt===0&&(t.setRenderTargetTextures(x,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(x))}let tt=S[Kt];tt===void 0&&(tt=new Mn,tt.layers.enable(Kt),tt.viewport=new be,S[Kt]=tt),tt.matrix.fromArray($t.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray($t.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(fe.x,fe.y,fe.width,fe.height),Kt===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(tt)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Kt=u.getDepthInformation(It[0]);Kt&&Kt.isValid&&Kt.texture&&v.init(t,Kt,s.renderState)}}for(let It=0;It<b.length;It++){const ut=y[It],Ft=b[It];ut!==null&&Ft!==void 0&&Ft.update(ut,ht,l||r)}Pt&&Pt(j,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}const ge=new U0;ge.setAnimationLoop(Zt),this.setAnimationLoop=function(j){Pt=j},this.dispose=function(){}}}const Js=new kn,LM=new Vt;function IM(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,k0(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,b,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(m,g):g.isMeshToonMaterial?(o(m,g),u(m,g)):g.isMeshPhongMaterial?(o(m,g),h(m,g)):g.isMeshStandardMaterial?(o(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),v(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,x,b):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),b=x.envMap,y=x.envMapRotation;b&&(m.envMap.value=b,Js.copy(y),Js.x*=-1,Js.y*=-1,Js.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),m.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Js)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kM(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const y=b.program;n.uniformBlockBinding(x,y)}function l(x,b){let y=s[x.id];y===void 0&&(p(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(x,C);const T=t.render.frame;o[x.id]!==T&&(d(x),o[x.id]=T)}function h(x){const b=u();x.__bindingPointIndex=b;const y=i.createBuffer(),C=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=s[x.id],y=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=y.length;T<R;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,M=L.length;S<M;S++){const I=L[S];if(f(I,T,S,C)===!0){const H=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let K=0;K<B.length;K++){const W=B[K],ot=v(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+$,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,$),$+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,b,y,C){const T=x.value,R=b+"_"+y;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const L=C[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function p(x){const b=x.uniforms;let y=0;const C=16;for(let R=0,L=b.length;R<L;R++){const S=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,I=S.length;M<I;M++){const H=S[M],B=Array.isArray(H.value)?H.value:[H.value];for(let $=0,K=B.length;$<K;$++){const W=B[$],ot=v(W),q=y%C,nt=q%ot.boundary,_t=q+nt;y+=nt,_t!==0&&C-_t<ot.storage&&(y+=C-_t),H.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ot.storage}}}const T=y%C;return T>0&&(y+=C-T),x.__size=y,x.__cache={},this}function v(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const y=r.indexOf(b.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:c,update:l,dispose:g}}class G0{constructor(t={}){const{canvas:e=M1(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const x=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=Bs,this.toneMappingExposure=1;const y=this;let C=!1,T=0,R=0,L=null,S=-1,M=null;const I=new be,H=new be;let B=null;const $=new Dt(0);let K=0,W=e.width,ot=e.height,q=1,nt=null,_t=null;const Pt=new be(0,0,W,ot),Zt=new be(0,0,W,ot);let ge=!1;const j=new wd;let ht=!1,It=!1;const ut=new Vt,Ft=new Vt,Kt=new _,$t=new be,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function U(){return L===null?q:1}let A=n;function at(E,D){return e.getContext(E,D)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dd}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),A===null){const D="webgl2";if(A=at(D,E),A===null)throw at(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,vt,pt,qt,Ct,P,w,F,Y,st,Z,Ut,xt,Rt,le,ct,kt,Xt,Jt,Nt,pe,oe,Ne,N;function bt(){J=new Bb(A),J.init(),oe=new SM(A,J),vt=new kb(A,J,t,oe),pt=new _M(A,J),vt.reverseDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),qt=new Gb(A),Ct=new rM,P=new wM(A,J,pt,Ct,vt,oe,qt),w=new Db(y),F=new zb(y),Y=new Y1(A),Ne=new Lb(A,Y),st=new Fb(A,Y,qt,Ne),Z=new $b(A,st,Y,qt),Jt=new Vb(A,vt,P),ct=new Nb(Ct),Ut=new oM(y,w,F,J,vt,Ne,ct),xt=new IM(y,Ct),Rt=new cM,le=new pM(J),Xt=new Pb(y,w,F,pt,Z,f,c),kt=new xM(y,Z,vt),N=new kM(A,qt,vt,pt),Nt=new Ib(A,J,qt),pe=new Hb(A,J,qt),qt.programs=Ut.programs,y.capabilities=vt,y.extensions=J,y.properties=Ct,y.renderLists=Rt,y.shadowMap=kt,y.state=pt,y.info=qt}bt();const X=new PM(y,A);this.xr=X,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(W,ot,!1))},this.getSize=function(E){return E.set(W,ot)},this.setSize=function(E,D,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,ot=D,e.width=Math.floor(E*q),e.height=Math.floor(D*q),G===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(W*q,ot*q).floor()},this.setDrawingBufferSize=function(E,D,G){W=E,ot=D,q=G,e.width=Math.floor(E*G),e.height=Math.floor(D*G),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Pt)},this.setViewport=function(E,D,G,V){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,D,G,V),pt.viewport(I.copy(Pt).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Zt)},this.setScissor=function(E,D,G,V){E.isVector4?Zt.set(E.x,E.y,E.z,E.w):Zt.set(E,D,G,V),pt.scissor(H.copy(Zt).multiplyScalar(q).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){pt.setScissorTest(ge=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){_t=E},this.getClearColor=function(E){return E.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(E=!0,D=!0,G=!0){let V=0;if(E){let O=!1;if(L!==null){const dt=L.texture.format;O=dt===bd||dt===xd||dt===yd}if(O){const dt=L.texture.type,wt=dt===gs||dt===yo||dt===ga||dt===dr||dt===md||dt===gd,Ot=Xt.getClearColor(),zt=Xt.getClearAlpha(),Qt=Ot.r,ie=Ot.g,Bt=Ot.b;wt?(p[0]=Qt,p[1]=ie,p[2]=Bt,p[3]=zt,A.clearBufferuiv(A.COLOR,0,p)):(v[0]=Qt,v[1]=ie,v[2]=Bt,v[3]=zt,A.clearBufferiv(A.COLOR,0,v))}else V|=A.COLOR_BUFFER_BIT}D&&(V|=A.DEPTH_BUFFER_BIT),G&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Rt.dispose(),le.dispose(),Ct.dispose(),w.dispose(),F.dispose(),Z.dispose(),Ne.dispose(),N.dispose(),Ut.dispose(),X.dispose(),X.removeEventListener("sessionstart",tf),X.removeEventListener("sessionend",ef),qs.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=qt.autoReset,D=kt.enabled,G=kt.autoUpdate,V=kt.needsUpdate,O=kt.type;bt(),qt.autoReset=E,kt.enabled=D,kt.autoUpdate=G,kt.needsUpdate=V,kt.type=O}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){const D=E.target;D.removeEventListener("dispose",ne),Xe(D)}function Xe(E){yn(E),Ct.remove(E)}function yn(E){const D=Ct.get(E).programs;D!==void 0&&(D.forEach(function(G){Ut.releaseProgram(G)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,G,V,O,dt){D===null&&(D=fe);const wt=O.isMesh&&O.matrixWorld.determinant()<0,Ot=gv(E,D,G,V,O);pt.setMaterial(V,wt);let zt=G.index,Qt=1;if(V.wireframe===!0){if(zt=st.getWireframeAttribute(G),zt===void 0)return;Qt=2}const ie=G.drawRange,Bt=G.attributes.position;let ye=ie.start*Qt,De=(ie.start+ie.count)*Qt;dt!==null&&(ye=Math.max(ye,dt.start*Qt),De=Math.min(De,(dt.start+dt.count)*Qt)),zt!==null?(ye=Math.max(ye,0),De=Math.min(De,zt.count)):Bt!=null&&(ye=Math.max(ye,0),De=Math.min(De,Bt.count));const ze=De-ye;if(ze<0||ze===1/0)return;Ne.setup(O,V,Ot,G,zt);let Nn,_e=Nt;if(zt!==null&&(Nn=Y.get(zt),_e=pe,_e.setIndex(Nn)),O.isMesh)V.wireframe===!0?(pt.setLineWidth(V.wireframeLinewidth*U()),_e.setMode(A.LINES)):_e.setMode(A.TRIANGLES);else if(O.isLine){let Ht=V.linewidth;Ht===void 0&&(Ht=1),pt.setLineWidth(Ht*U()),O.isLineSegments?_e.setMode(A.LINES):O.isLineLoop?_e.setMode(A.LINE_LOOP):_e.setMode(A.LINE_STRIP)}else O.isPoints?_e.setMode(A.POINTS):O.isSprite&&_e.setMode(A.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)_e.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))_e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ht=O._multiDrawStarts,Ki=O._multiDrawCounts,Me=O._multiDrawCount,pi=zt?Y.get(zt).bytesPerElement:1,To=Ct.get(V).currentProgram.getUniforms();for(let Fn=0;Fn<Me;Fn++)To.setValue(A,"_gl_DrawID",Fn),_e.render(Ht[Fn]/pi,Ki[Fn])}else if(O.isInstancedMesh)_e.renderInstances(ye,ze,O.count);else if(G.isInstancedBufferGeometry){const Ht=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ki=Math.min(G.instanceCount,Ht);_e.renderInstances(ye,ze,Ki)}else _e.render(ye,ze)};function we(E,D,G){E.transparent===!0&&E.side===Re&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,Va(E,D,G),E.side=ms,E.needsUpdate=!0,Va(E,D,G),E.side=Re):Va(E,D,G)}this.compile=function(E,D,G=null){G===null&&(G=E),g=le.get(G),g.init(D),b.push(g),G.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const dt=O.material;if(dt)if(Array.isArray(dt))for(let wt=0;wt<dt.length;wt++){const Ot=dt[wt];we(Ot,G,O),V.add(Ot)}else we(dt,G,O),V.add(dt)}),b.pop(),g=null,V},this.compileAsync=function(E,D,G=null){const V=this.compile(E,D,G);return new Promise(O=>{function dt(){if(V.forEach(function(wt){Ct.get(wt).currentProgram.isReady()&&V.delete(wt)}),V.size===0){O(E);return}setTimeout(dt,10)}J.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let fi=null;function Yi(E){fi&&fi(E)}function tf(){qs.stop()}function ef(){qs.start()}const qs=new U0;qs.setAnimationLoop(Yi),typeof self<"u"&&qs.setContext(self),this.setAnimationLoop=function(E){fi=E,X.setAnimationLoop(E),E===null?qs.stop():qs.start()},X.addEventListener("sessionstart",tf),X.addEventListener("sessionend",ef),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,D,L),g=le.get(E,b.length),g.init(D),b.push(g),Ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(Ft),It=this.localClippingEnabled,ht=ct.init(this.clippingPlanes,It),m=Rt.get(E,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const dt=y.xr.getDepthSensingMesh();dt!==null&&kl(dt,D,-1/0,y.sortObjects)}kl(E,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(nt,_t),tt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,tt&&Xt.addToRenderList(m,E),this.info.render.frame++,ht===!0&&ct.beginShadows();const G=g.state.shadowsArray;kt.render(G,E,D),ht===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(g.setupLights(),D.isArrayCamera){const dt=D.cameras;if(O.length>0)for(let wt=0,Ot=dt.length;wt<Ot;wt++){const zt=dt[wt];sf(V,O,E,zt)}tt&&Xt.render(E);for(let wt=0,Ot=dt.length;wt<Ot;wt++){const zt=dt[wt];nf(m,E,zt,zt.viewport)}}else O.length>0&&sf(V,O,E,D),tt&&Xt.render(E),nf(m,E,D);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,D),Ne.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(g=b[b.length-1],ht===!0&&ct.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function kl(E,D,G,V){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){V&&$t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);const wt=Z.update(E),Ot=E.material;Ot.visible&&m.push(E,wt,Ot,G,$t.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const wt=Z.update(E),Ot=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$t.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),$t.copy(wt.boundingSphere.center)),$t.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ot)){const zt=wt.groups;for(let Qt=0,ie=zt.length;Qt<ie;Qt++){const Bt=zt[Qt],ye=Ot[Bt.materialIndex];ye&&ye.visible&&m.push(E,wt,ye,G,$t.z,Bt)}}else Ot.visible&&m.push(E,wt,Ot,G,$t.z,null)}}const dt=E.children;for(let wt=0,Ot=dt.length;wt<Ot;wt++)kl(dt[wt],D,G,V)}function nf(E,D,G,V){const O=E.opaque,dt=E.transmissive,wt=E.transparent;g.setupLightsView(G),ht===!0&&ct.setGlobalState(y.clippingPlanes,G),V&&pt.viewport(I.copy(V)),O.length>0&&Ga(O,D,G),dt.length>0&&Ga(dt,D,G),wt.length>0&&Ga(wt,D,G),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function sf(E,D,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new xo(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?La:gs,minFilter:us,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const dt=g.state.transmissionRenderTarget[V.id],wt=V.viewport||I;dt.setSize(wt.z,wt.w);const Ot=y.getRenderTarget();y.setRenderTarget(dt),y.getClearColor($),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Xt.render(G);const zt=y.toneMapping;y.toneMapping=Bs;const Qt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),ht===!0&&ct.setGlobalState(y.clippingPlanes,V),Ga(E,G,V),P.updateMultisampleRenderTarget(dt),P.updateRenderTargetMipmap(dt),J.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Bt=0,ye=D.length;Bt<ye;Bt++){const De=D[Bt],ze=De.object,Nn=De.geometry,_e=De.material,Ht=De.group;if(_e.side===Re&&ze.layers.test(V.layers)){const Ki=_e.side;_e.side=Sn,_e.needsUpdate=!0,of(ze,G,V,Nn,_e,Ht),_e.side=Ki,_e.needsUpdate=!0,ie=!0}}ie===!0&&(P.updateMultisampleRenderTarget(dt),P.updateRenderTargetMipmap(dt))}y.setRenderTarget(Ot),y.setClearColor($,K),Qt!==void 0&&(V.viewport=Qt),y.toneMapping=zt}function Ga(E,D,G){const V=D.isScene===!0?D.overrideMaterial:null;for(let O=0,dt=E.length;O<dt;O++){const wt=E[O],Ot=wt.object,zt=wt.geometry,Qt=V===null?wt.material:V,ie=wt.group;Ot.layers.test(G.layers)&&of(Ot,D,G,zt,Qt,ie)}}function of(E,D,G,V,O,dt){E.onBeforeRender(y,D,G,V,O,dt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,D,G,V,E,dt),O.transparent===!0&&O.side===Re&&O.forceSinglePass===!1?(O.side=Sn,O.needsUpdate=!0,y.renderBufferDirect(G,D,V,O,E,dt),O.side=ms,O.needsUpdate=!0,y.renderBufferDirect(G,D,V,O,E,dt),O.side=Re):y.renderBufferDirect(G,D,V,O,E,dt),E.onAfterRender(y,D,G,V,O,dt)}function Va(E,D,G){D.isScene!==!0&&(D=fe);const V=Ct.get(E),O=g.state.lights,dt=g.state.shadowsArray,wt=O.state.version,Ot=Ut.getParameters(E,O.state,dt,D,G),zt=Ut.getProgramCacheKey(Ot);let Qt=V.programs;V.environment=E.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(E.isMeshStandardMaterial?F:w).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Qt===void 0&&(E.addEventListener("dispose",ne),Qt=new Map,V.programs=Qt);let ie=Qt.get(zt);if(ie!==void 0){if(V.currentProgram===ie&&V.lightsStateVersion===wt)return af(E,Ot),ie}else Ot.uniforms=Ut.getUniforms(E),E.onBeforeCompile(Ot,y),ie=Ut.acquireProgram(Ot,zt),Qt.set(zt,ie),V.uniforms=Ot.uniforms;const Bt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=ct.uniform),af(E,Ot),V.needsLights=yv(E),V.lightsStateVersion=wt,V.needsLights&&(Bt.ambientLightColor.value=O.state.ambient,Bt.lightProbe.value=O.state.probe,Bt.directionalLights.value=O.state.directional,Bt.directionalLightShadows.value=O.state.directionalShadow,Bt.spotLights.value=O.state.spot,Bt.spotLightShadows.value=O.state.spotShadow,Bt.rectAreaLights.value=O.state.rectArea,Bt.ltc_1.value=O.state.rectAreaLTC1,Bt.ltc_2.value=O.state.rectAreaLTC2,Bt.pointLights.value=O.state.point,Bt.pointLightShadows.value=O.state.pointShadow,Bt.hemisphereLights.value=O.state.hemi,Bt.directionalShadowMap.value=O.state.directionalShadowMap,Bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Bt.spotShadowMap.value=O.state.spotShadowMap,Bt.spotLightMatrix.value=O.state.spotLightMatrix,Bt.spotLightMap.value=O.state.spotLightMap,Bt.pointShadowMap.value=O.state.pointShadowMap,Bt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ie,V.uniformsList=null,ie}function rf(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Wc.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function af(E,D){const G=Ct.get(E);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function gv(E,D,G,V,O){D.isScene!==!0&&(D=fe),P.resetTextureUnits();const dt=D.fog,wt=V.isMeshStandardMaterial?D.environment:null,Ot=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Tn,zt=(V.isMeshStandardMaterial?F:w).get(V.envMap||wt),Qt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ie=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Bt=!!G.morphAttributes.position,ye=!!G.morphAttributes.normal,De=!!G.morphAttributes.color;let ze=Bs;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ze=y.toneMapping);const Nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=Nn!==void 0?Nn.length:0,Ht=Ct.get(V),Ki=g.state.lights;if(ht===!0&&(It===!0||E!==M)){const Kn=E===M&&V.id===S;ct.setState(V,E,Kn)}let Me=!1;V.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ki.state.version||Ht.outputColorSpace!==Ot||O.isBatchedMesh&&Ht.batching===!1||!O.isBatchedMesh&&Ht.batching===!0||O.isBatchedMesh&&Ht.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ht.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ht.instancing===!1||!O.isInstancedMesh&&Ht.instancing===!0||O.isSkinnedMesh&&Ht.skinning===!1||!O.isSkinnedMesh&&Ht.skinning===!0||O.isInstancedMesh&&Ht.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ht.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ht.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ht.instancingMorph===!1&&O.morphTexture!==null||Ht.envMap!==zt||V.fog===!0&&Ht.fog!==dt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ct.numPlanes||Ht.numIntersection!==ct.numIntersection)||Ht.vertexAlphas!==Qt||Ht.vertexTangents!==ie||Ht.morphTargets!==Bt||Ht.morphNormals!==ye||Ht.morphColors!==De||Ht.toneMapping!==ze||Ht.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,Ht.__version=V.version);let pi=Ht.currentProgram;Me===!0&&(pi=Va(V,D,O));let To=!1,Fn=!1,Nr=!1;const Be=pi.getUniforms(),Ri=Ht.uniforms;if(pt.useProgram(pi.program)&&(To=!0,Fn=!0,Nr=!0),V.id!==S&&(S=V.id,Fn=!0),To||M!==E){pt.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),S1(ut),T1(ut),Be.setValue(A,"projectionMatrix",ut)):Be.setValue(A,"projectionMatrix",E.projectionMatrix),Be.setValue(A,"viewMatrix",E.matrixWorldInverse);const Ms=Be.map.cameraPosition;Ms!==void 0&&Ms.setValue(A,Kt.setFromMatrixPosition(E.matrixWorld)),vt.logarithmicDepthBuffer&&Be.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Be.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Fn=!0,Nr=!0)}if(O.isSkinnedMesh){Be.setOptional(A,O,"bindMatrix"),Be.setOptional(A,O,"bindMatrixInverse");const Kn=O.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),Be.setValue(A,"boneTexture",Kn.boneTexture,P))}O.isBatchedMesh&&(Be.setOptional(A,O,"batchingTexture"),Be.setValue(A,"batchingTexture",O._matricesTexture,P),Be.setOptional(A,O,"batchingIdTexture"),Be.setValue(A,"batchingIdTexture",O._indirectTexture,P),Be.setOptional(A,O,"batchingColorTexture"),O._colorsTexture!==null&&Be.setValue(A,"batchingColorTexture",O._colorsTexture,P));const Dr=G.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Jt.update(O,G,pi),(Fn||Ht.receiveShadow!==O.receiveShadow)&&(Ht.receiveShadow=O.receiveShadow,Be.setValue(A,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ri.envMap.value=zt,Ri.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Ri.envMapIntensity.value=D.environmentIntensity),Fn&&(Be.setValue(A,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&vv(Ri,Nr),dt&&V.fog===!0&&xt.refreshFogUniforms(Ri,dt),xt.refreshMaterialUniforms(Ri,V,q,ot,g.state.transmissionRenderTarget[E.id]),Wc.upload(A,rf(Ht),Ri,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wc.upload(A,rf(Ht),Ri,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Be.setValue(A,"center",O.center),Be.setValue(A,"modelViewMatrix",O.modelViewMatrix),Be.setValue(A,"normalMatrix",O.normalMatrix),Be.setValue(A,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Kn=V.uniformsGroups;for(let Ms=0,ws=Kn.length;Ms<ws;Ms++){const cf=Kn[Ms];N.update(cf,pi),N.bind(cf,pi)}}return pi}function vv(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function yv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,D,G){Ct.get(E.texture).__webglTexture=D,Ct.get(E.depthTexture).__webglTexture=G;const V=Ct.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const G=Ct.get(E);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,G=0){L=E,T=D,R=G;let V=!0,O=null,dt=!1,wt=!1;if(E){const zt=Ct.get(E);if(zt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(A.FRAMEBUFFER,null),V=!1;else if(zt.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(zt.__hasExternalTextures)P.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Bt=E.depthTexture;if(zt.__boundDepthTexture!==Bt){if(Bt!==null&&Ct.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const Qt=E.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const ie=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ie[D])?O=ie[D][G]:O=ie[D],dt=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?O=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(ie)?O=ie[G]:O=ie,I.copy(E.viewport),H.copy(E.scissor),B=E.scissorTest}else I.copy(Pt).multiplyScalar(q).floor(),H.copy(Zt).multiplyScalar(q).floor(),B=ge;if(pt.bindFramebuffer(A.FRAMEBUFFER,O)&&V&&pt.drawBuffers(E,O),pt.viewport(I),pt.scissor(H),pt.setScissorTest(B),dt){const zt=Ct.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,zt.__webglTexture,G)}else if(wt){const zt=Ct.get(E.texture),Qt=D||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,zt.__webglTexture,G||0,Qt)}S=-1},this.readRenderTargetPixels=function(E,D,G,V,O,dt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot){pt.bindFramebuffer(A.FRAMEBUFFER,Ot);try{const zt=E.texture,Qt=zt.format,ie=zt.type;if(!vt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-V&&G>=0&&G<=E.height-O&&A.readPixels(D,G,V,O,oe.convert(Qt),oe.convert(ie),dt)}finally{const zt=L!==null?Ct.get(L).__webglFramebuffer:null;pt.bindFramebuffer(A.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,D,G,V,O,dt,wt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot){const zt=E.texture,Qt=zt.format,ie=zt.type;if(!vt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-V&&G>=0&&G<=E.height-O){pt.bindFramebuffer(A.FRAMEBUFFER,Ot);const Bt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Bt),A.bufferData(A.PIXEL_PACK_BUFFER,dt.byteLength,A.STREAM_READ),A.readPixels(D,G,V,O,oe.convert(Qt),oe.convert(ie),0);const ye=L!==null?Ct.get(L).__webglFramebuffer:null;pt.bindFramebuffer(A.FRAMEBUFFER,ye);const De=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await w1(A,De,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Bt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,dt),A.deleteBuffer(Bt),A.deleteSync(De),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,G=0){E.isTexture!==!0&&(na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(E.image.width*V),dt=Math.floor(E.image.height*V),wt=D!==null?D.x:0,Ot=D!==null?D.y:0;P.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,wt,Ot,O,dt),pt.unbindTexture()},this.copyTextureToTexture=function(E,D,G=null,V=null,O=0){E.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],D=arguments[2],O=arguments[3]||0,G=null);let dt,wt,Ot,zt,Qt,ie,Bt,ye,De;const ze=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(dt=G.max.x-G.min.x,wt=G.max.y-G.min.y,Ot=G.isBox3?G.max.z-G.min.z:1,zt=G.min.x,Qt=G.min.y,ie=G.isBox3?G.min.z:0):(dt=ze.width,wt=ze.height,Ot=ze.depth||1,zt=0,Qt=0,ie=0),V!==null?(Bt=V.x,ye=V.y,De=V.z):(Bt=0,ye=0,De=0);const Nn=oe.convert(D.format),_e=oe.convert(D.type);let Ht;D.isData3DTexture?(P.setTexture3D(D,0),Ht=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(P.setTexture2DArray(D,0),Ht=A.TEXTURE_2D_ARRAY):(P.setTexture2D(D,0),Ht=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const Ki=A.getParameter(A.UNPACK_ROW_LENGTH),Me=A.getParameter(A.UNPACK_IMAGE_HEIGHT),pi=A.getParameter(A.UNPACK_SKIP_PIXELS),To=A.getParameter(A.UNPACK_SKIP_ROWS),Fn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ze.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ze.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,zt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Qt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ie);const Nr=E.isDataArrayTexture||E.isData3DTexture,Be=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Ri=Ct.get(E),Dr=Ct.get(D),Kn=Ct.get(Ri.__renderTarget),Ms=Ct.get(Dr.__renderTarget);pt.bindFramebuffer(A.READ_FRAMEBUFFER,Kn.__webglFramebuffer),pt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ms.__webglFramebuffer);for(let ws=0;ws<Ot;ws++)Nr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,O,ie+ws),E.isDepthTexture?(Be&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,O,De+ws),A.blitFramebuffer(zt,Qt,dt,wt,Bt,ye,dt,wt,A.DEPTH_BUFFER_BIT,A.NEAREST)):Be?A.copyTexSubImage3D(Ht,O,Bt,ye,De+ws,zt,Qt,dt,wt):A.copyTexSubImage2D(Ht,O,Bt,ye,De+ws,zt,Qt,dt,wt);pt.bindFramebuffer(A.READ_FRAMEBUFFER,null),pt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Be?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Ht,O,Bt,ye,De,dt,wt,Ot,Nn,_e,ze.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(Ht,O,Bt,ye,De,dt,wt,Ot,Nn,ze.data):A.texSubImage3D(Ht,O,Bt,ye,De,dt,wt,Ot,Nn,_e,ze):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,O,Bt,ye,dt,wt,Nn,_e,ze.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,O,Bt,ye,ze.width,ze.height,Nn,ze.data):A.texSubImage2D(A.TEXTURE_2D,O,Bt,ye,dt,wt,Nn,_e,ze);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ki),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Me),A.pixelStorei(A.UNPACK_SKIP_PIXELS,pi),A.pixelStorei(A.UNPACK_SKIP_ROWS,To),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Fn),O===0&&D.generateMipmaps&&A.generateMipmap(Ht),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,D,G=null,V=null,O=0){return E.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],D=arguments[3],O=arguments[4]||0),na('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,G,V,O)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,pt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class Ed{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new Ed(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ad extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class V0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new _;class ba{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),o=Se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ba(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ka extends Ei{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fo;const Fr=new _,Ho=new _,Go=new _,Vo=new Q,Hr=new Q,$0=new Vt,hc=new _,Gr=new _,uc=new _,lp=new Q,ch=new Q,hp=new Q;class _l extends Fe{constructor(t=new ka){if(super(),this.isSprite=!0,this.type="Sprite",Fo===void 0){Fo=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new V0(e,5);Fo.setIndex([0,1,2,0,2,3]),Fo.setAttribute("position",new ba(n,3,0,!1)),Fo.setAttribute("uv",new ba(n,2,3,!1))}this.geometry=Fo,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ho.setFromMatrixScale(this.matrixWorld),$0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Go.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ho.multiplyScalar(-Go.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;dc(hc.set(-.5,-.5,0),Go,r,Ho,s,o),dc(Gr.set(.5,-.5,0),Go,r,Ho,s,o),dc(uc.set(.5,.5,0),Go,r,Ho,s,o),lp.set(0,0),ch.set(1,0),hp.set(1,1);let a=t.ray.intersectTriangle(hc,Gr,uc,!1,Fr);if(a===null&&(dc(Gr.set(-.5,.5,0),Go,r,Ho,s,o),ch.set(0,1),a=t.ray.intersectTriangle(hc,uc,Gr,!1,Fr),a===null))return;const c=t.ray.origin.distanceTo(Fr);c<t.near||c>t.far||e.push({distance:c,point:Fr.clone(),uv:ni.getInterpolation(Fr,hc,Gr,uc,lp,ch,hp,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function dc(i,t,e,n,s,o){Vo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Hr.x=o*Vo.x-s*Vo.y,Hr.y=s*Vo.x+o*Vo.y):Hr.copy(Vo),i.copy(t),i.x+=Hr.x,i.y+=Hr.y,i.applyMatrix4($0)}const up=new _,dp=new be,fp=new be,NM=new _,pp=new Vt,fc=new _,lh=new Vi,mp=new Vt,hh=new Ia;class DM extends z{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=df,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new bs),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fc),this.boundingBox.expandByPoint(fc)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fc),this.boundingSphere.expandByPoint(fc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lh.copy(this.boundingSphere),lh.applyMatrix4(s),t.ray.intersectsSphere(lh)!==!1&&(mp.copy(s).invert(),hh.copy(t.ray).applyMatrix4(mp),!(this.boundingBox!==null&&hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,hh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new be,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;dp.fromBufferAttribute(s.attributes.skinIndex,t),fp.fromBufferAttribute(s.attributes.skinWeight,t),up.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const r=fp.getComponent(o);if(r!==0){const a=dp.getComponent(o);pp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(NM.copy(up).applyMatrix4(pp),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class W0 extends Fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class q0 extends an{constructor(t=null,e=1,n=1,s,o,r,a,c,l=In,h=In,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gp=new Vt,UM=new Vt;class Cd{constructor(t=[],e=[]){this.uuid=si(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,r=t.length;o<r;o++){const a=t[o]?t[o].matrixWorld:UM;gp.multiplyMatrices(a,e[o]),gp.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cd(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new q0(e,t,t,ii,Ti);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let r=e[o];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),r=new W0),this.bones.push(r),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const r=e[s];t.bones.push(r.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Vu extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $o=new Vt,vp=new Vt,pc=[],yp=new bs,OM=new Vt,Vr=new z,$r=new Vi;class ci extends z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,OM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$o),yp.copy(t.boundingBox).applyMatrix4($o),this.boundingBox.union(yp)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$o),$r.copy(t.boundingSphere).applyMatrix4($o),this.boundingSphere.union($r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),t.ray.intersectsSphere($r)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,$o),vp.multiplyMatrices(n,$o),Vr.matrixWorld=vp,Vr.raycast(t,pc);for(let r=0,a=pc.length;r<a;r++){const c=pc[r];c.instanceId=o,c.object=this,e.push(c)}pc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new q0(new Float32Array(s*this.count),s,this.count,vd,Ti));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class X0 extends Ei{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ol=new _,rl=new _,xp=new Vt,Wr=new Ia,mc=new Vi,uh=new _,bp=new _;class Rd extends Fe{constructor(t=new me,e=new X0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)ol.fromBufferAttribute(e,s-1),rl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ol.distanceTo(rl);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=o,t.ray.intersectsSphere(mc)===!1)return;xp.copy(s).invert(),Wr.copy(t.ray).applyMatrix4(xp);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let v=f,m=p-1;v<m;v+=l){const g=h.getX(v),x=h.getX(v+1),b=gc(this,t,Wr,c,g,x);b&&e.push(b)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(f),g=gc(this,t,Wr,c,v,m);g&&e.push(g)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=f,m=p-1;v<m;v+=l){const g=gc(this,t,Wr,c,v,v+1);g&&e.push(g)}if(this.isLineLoop){const v=gc(this,t,Wr,c,p-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function gc(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(ol.fromBufferAttribute(r,s),rl.fromBufferAttribute(r,o),e.distanceSqToSegment(ol,rl,uh,bp)>n)return;uh.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(uh);if(!(c<t.near||c>t.far))return{distance:c,point:bp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const _p=new _,Mp=new _;class zM extends Rd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)_p.fromBufferAttribute(e,s),Mp.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_p.distanceTo(Mp);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class BM extends Rd{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class $i extends Ei{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wp=new Vt,$u=new Ia,vc=new Vi,yc=new _;class _s extends Fe{constructor(t=new me,e=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),vc.radius+=o,t.ray.intersectsSphere(vc)===!1)return;wp.copy(s).invert(),$u.copy(t.ray).applyMatrix4(wp);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let p=d,v=f;p<v;p++){const m=l.getX(p);yc.fromBufferAttribute(u,m),Sp(yc,m,c,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let p=d,v=f;p<v;p++)yc.fromBufferAttribute(u,p),Sp(yc,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Sp(i,t,e,n,s,o,r){const a=$u.distanceSqToPoint(i);if(a<e){const c=new _;$u.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ve extends an{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Q:new _);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new _,s=[],o=[],r=[],a=new _,c=new Vt;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new _)}o[0]=new _,r[0]=new _;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(on(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,p))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(on(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pd extends Wi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Q){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class FM extends Pd{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ld(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const xc=new _,dh=new Ld,fh=new Ld,ph=new Ld;class Hi extends Wi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new _){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(xc.subVectors(s[0],s[1]).add(s[0]),l=xc);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(xc.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=xc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),dh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,v,m),fh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,v,m),ph.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),fh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ph.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(dh.calc(c),fh.calc(c),ph.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tp(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function HM(i,t){const e=1-i;return e*e*t}function GM(i,t){return 2*(1-i)*i*t}function VM(i,t){return i*i*t}function ca(i,t,e,n){return HM(i,t)+GM(i,e)+VM(i,n)}function $M(i,t){const e=1-i;return e*e*e*t}function WM(i,t){const e=1-i;return 3*e*e*i*t}function qM(i,t){return 3*(1-i)*i*i*t}function XM(i,t){return i*i*i*t}function la(i,t,e,n,s){return $M(i,t)+WM(i,e)+qM(i,n)+XM(i,s)}class j0 extends Wi{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(la(t,s.x,o.x,r.x,a.x),la(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jM extends Wi{constructor(t=new _,e=new _,n=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(la(t,s.x,o.x,r.x,a.x),la(t,s.y,o.y,r.y,a.y),la(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y0 extends Wi{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YM extends Wi{constructor(t=new _,e=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new _){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K0 extends Wi{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ca(t,s.x,o.x,r.x),ca(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Id extends Wi{constructor(t=new _,e=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ca(t,s.x,o.x,r.x),ca(t,s.y,o.y,r.y),ca(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z0 extends Wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Tp(a,c.x,l.x,h.x,u.x),Tp(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Q().fromArray(s))}return this}}var al=Object.freeze({__proto__:null,ArcCurve:FM,CatmullRomCurve3:Hi,CubicBezierCurve:j0,CubicBezierCurve3:jM,EllipseCurve:Pd,LineCurve:Y0,LineCurve3:YM,QuadraticBezierCurve:K0,QuadraticBezierCurve3:Id,SplineCurve:Z0});class KM extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new al[s.type]().fromJSON(s))}return this}}class _a extends KM{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Y0(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new K0(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new j0(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Z0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new Pd(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class di extends me{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=on(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new _,d=new Q,f=new _,p=new _,v=new _;let m=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=e;x++){const b=n+x*h*s,y=Math.sin(b),C=Math.cos(b);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*C,r.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),a.push(d.x,d.y);const R=c[3*T+0]*y,L=c[3*T+1],S=c[3*T+0]*C;l.push(R,L,S)}}for(let x=0;x<e;x++)for(let b=0;b<t.length-1;b++){const y=b+x*t.length,C=y,T=y+t.length,R=y+t.length+1,L=y+1;o.push(C,T,L),o.push(R,L,T)}this.setIndex(o),this.setAttribute("position",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.points,t.segments,t.phiStart,t.phiLength)}}class Ar extends di{constructor(t=1,e=1,n=4,s=8){const o=new _a;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ar(t.radius,t.length,t.capSegments,t.radialSegments)}}class Yn extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new _,h=new Q;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ft extends me{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let p=0;const v=[],m=n/2;let g=0;x(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function x(){const y=new _,C=new _;let T=0;const R=(e-t)/n;for(let L=0;L<=o;L++){const S=[],M=L/o,I=M*(e-t)+t;for(let H=0;H<=s;H++){const B=H/s,$=B*c+a,K=Math.sin($),W=Math.cos($);C.x=I*K,C.y=-M*n+m,C.z=I*W,u.push(C.x,C.y,C.z),y.set(K,R,W).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-M),S.push(p++)}v.push(S)}for(let L=0;L<s;L++)for(let S=0;S<o;S++){const M=v[S][L],I=v[S+1][L],H=v[S+1][L+1],B=v[S][L+1];(t>0||S!==0)&&(h.push(M,I,B),T+=3),(e>0||S!==o-1)&&(h.push(I,H,B),T+=3)}l.addGroup(g,T,0),g+=T}function b(y){const C=p,T=new Q,R=new _;let L=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),p++;const I=p;for(let H=0;H<=s;H++){const $=H/s*c+a,K=Math.cos($),W=Math.sin($);R.x=S*W,R.y=m*M,R.z=S*K,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=K*.5+.5,T.y=W*.5*M+.5,f.push(T.x,T.y),p++}for(let H=0;H<s;H++){const B=C+H,$=I+H;y===!0?h.push($,$+1,B):h.push($+1,$,B),L+=3}l.addGroup(g,L,y===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ft(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rn extends ft{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new rn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ml extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(o.slice(),3)),this.setAttribute("uv",new Yt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const b=new _,y=new _,C=new _;for(let T=0;T<e.length;T+=3)f(e[T+0],b),f(e[T+1],y),f(e[T+2],C),c(b,y,C,x)}function c(x,b,y,C){const T=C+1,R=[];for(let L=0;L<=T;L++){R[L]=[];const S=x.clone().lerp(y,L/T),M=b.clone().lerp(y,L/T),I=T-L;for(let H=0;H<=I;H++)H===0&&L===T?R[L][H]=S:R[L][H]=S.clone().lerp(M,H/I)}for(let L=0;L<T;L++)for(let S=0;S<2*(T-L)-1;S++){const M=Math.floor(S/2);S%2===0?(d(R[L][M+1]),d(R[L+1][M]),d(R[L][M])):(d(R[L][M+1]),d(R[L+1][M+1]),d(R[L+1][M]))}}function l(x){const b=new _;for(let y=0;y<o.length;y+=3)b.x=o[y+0],b.y=o[y+1],b.z=o[y+2],b.normalize().multiplyScalar(x),o[y+0]=b.x,o[y+1]=b.y,o[y+2]=b.z}function h(){const x=new _;for(let b=0;b<o.length;b+=3){x.x=o[b+0],x.y=o[b+1],x.z=o[b+2];const y=m(x)/2/Math.PI+.5,C=g(x)/Math.PI+.5;r.push(y,1-C)}p(),u()}function u(){for(let x=0;x<r.length;x+=6){const b=r[x+0],y=r[x+2],C=r[x+4],T=Math.max(b,y,C),R=Math.min(b,y,C);T>.9&&R<.1&&(b<.2&&(r[x+0]+=1),y<.2&&(r[x+2]+=1),C<.2&&(r[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function f(x,b){const y=x*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){const x=new _,b=new _,y=new _,C=new _,T=new Q,R=new Q,L=new Q;for(let S=0,M=0;S<o.length;S+=9,M+=6){x.set(o[S+0],o[S+1],o[S+2]),b.set(o[S+3],o[S+4],o[S+5]),y.set(o[S+6],o[S+7],o[S+8]),T.set(r[M+0],r[M+1]),R.set(r[M+2],r[M+3]),L.set(r[M+4],r[M+5]),C.copy(x).add(b).add(y).divideScalar(3);const I=m(C);v(T,M+0,x,I),v(R,M+2,b,I),v(L,M+4,y,I)}}function v(x,b,y,C){C<0&&x.x===1&&(r[b]=x.x-1),y.x===0&&y.z===0&&(r[b]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.vertices,t.indices,t.radius,t.details)}}class kd extends Ml{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kd(t.radius,t.detail)}}class Cr extends _a{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new _a().fromJSON(s))}return this}}const ZM={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=J0(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(n&&(o=n2(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ma(o,r,e,a,c,f,0),r}};function J0(i,t,e,n,s){let o,r;if(s===f2(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Ep(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Ep(o,i[o],i[o+1],r);return r&&wl(r,r.next)&&(Sa(r),r=r.next),r}function bo(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wl(e,e.next)||$e(e.prev,e,e.next)===0)){if(Sa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ma(i,t,e,n,s,o,r){if(!i)return;!r&&o&&a2(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?QM(i,n,s,o):JM(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Sa(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=t2(bo(i),t,e),Ma(i,t,e,n,s,o,2)):r===2&&e2(i,t,e,n,s,o):Ma(bo(i),t,e,n,s,o,1);break}}}function JM(i){const t=i.prev,e=i,n=i.next;if($e(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&tr(s,a,o,c,r,l,p.x,p.y)&&$e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function QM(i,t,e,n){const s=i.prev,o=i,r=i.next;if($e(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,g=Wu(f,p,t,e,n),x=Wu(v,m,t,e,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=g&&y&&y.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==r&&tr(a,h,c,u,l,d,b.x,b.y)&&$e(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==r&&tr(a,h,c,u,l,d,y.x,y.y)&&$e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==r&&tr(a,h,c,u,l,d,b.x,b.y)&&$e(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==r&&tr(a,h,c,u,l,d,y.x,y.y)&&$e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function t2(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!wl(s,o)&&Q0(s,n,n.next,o)&&wa(s,o)&&wa(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Sa(n),Sa(n.next),n=i=o),n=n.next}while(n!==i);return bo(n)}function e2(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&h2(r,a)){let c=tg(r,a);r=bo(r,r.next),c=bo(c,c.next),Ma(r,t,e,n,s,o,0),Ma(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function n2(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=J0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(l2(l));for(s.sort(i2),o=0;o<s.length;o++)e=s2(s[o],e);return e}function i2(i,t){return i.x-t.x}function s2(i,t){const e=o2(i,t);if(!e)return t;const n=tg(e,i);return bo(n,n.next),bo(e,e.next)}function o2(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&tr(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),wa(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&r2(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function r2(i,t){return $e(i.prev,i,t.prev)<0&&$e(t.next,i,i.next)<0}function a2(i,t,e,n){let s=i;do s.z===0&&(s.z=Wu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,c2(s)}function c2(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Wu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function l2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function tr(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function h2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!u2(i,t)&&(wa(i,t)&&wa(t,i)&&d2(i,t)&&($e(i.prev,i,t.prev)||$e(i,t.prev,t))||wl(i,t)&&$e(i.prev,i,i.next)>0&&$e(t.prev,t,t.next)>0)}function $e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wl(i,t){return i.x===t.x&&i.y===t.y}function Q0(i,t,e,n){const s=_c($e(i,t,e)),o=_c($e(i,t,n)),r=_c($e(e,n,i)),a=_c($e(e,n,t));return!!(s!==o&&r!==a||s===0&&bc(i,e,t)||o===0&&bc(i,n,t)||r===0&&bc(e,i,n)||a===0&&bc(e,t,n))}function bc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _c(i){return i>0?1:i<0?-1:0}function u2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Q0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wa(i,t){return $e(i.prev,i,i.next)<0?$e(i,t,i.next)>=0&&$e(i,i.prev,t)>=0:$e(i,t,i.prev)<0||$e(i,i.next,t)<0}function d2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tg(i,t){const e=new qu(i.i,i.x,i.y),n=new qu(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ep(i,t,e,n){const s=new qu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qu(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f2(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Fs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Fs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Ap(t),Cp(n,t);let r=t.length;e.forEach(Ap);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Cp(n,e[c]);const a=ZM.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Ap(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Nd extends me{constructor(t=new Cr([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:p2;let b,y=!1,C,T,R,L;g&&(b=g.getSpacedPoints(h),y=!0,d=!1,C=g.computeFrenetFrames(h,!1),T=new _,R=new _,L=new _),d||(m=0,f=0,p=0,v=0);const S=a.extractPoints(l);let M=S.shape;const I=S.holes;if(!Fs.isClockWise(M)){M=M.reverse();for(let tt=0,U=I.length;tt<U;tt++){const A=I[tt];Fs.isClockWise(A)&&(I[tt]=A.reverse())}}const B=Fs.triangulateShape(M,I),$=M;for(let tt=0,U=I.length;tt<U;tt++){const A=I[tt];M=M.concat(A)}function K(tt,U,A){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(U,A)}const W=M.length,ot=B.length;function q(tt,U,A){let at,J,vt;const pt=tt.x-U.x,qt=tt.y-U.y,Ct=A.x-tt.x,P=A.y-tt.y,w=pt*pt+qt*qt,F=pt*P-qt*Ct;if(Math.abs(F)>Number.EPSILON){const Y=Math.sqrt(w),st=Math.sqrt(Ct*Ct+P*P),Z=U.x-qt/Y,Ut=U.y+pt/Y,xt=A.x-P/st,Rt=A.y+Ct/st,le=((xt-Z)*P-(Rt-Ut)*Ct)/(pt*P-qt*Ct);at=Z+pt*le-tt.x,J=Ut+qt*le-tt.y;const ct=at*at+J*J;if(ct<=2)return new Q(at,J);vt=Math.sqrt(ct/2)}else{let Y=!1;pt>Number.EPSILON?Ct>Number.EPSILON&&(Y=!0):pt<-Number.EPSILON?Ct<-Number.EPSILON&&(Y=!0):Math.sign(qt)===Math.sign(P)&&(Y=!0),Y?(at=-qt,J=pt,vt=Math.sqrt(w)):(at=pt,J=qt,vt=Math.sqrt(w/2))}return new Q(at/vt,J/vt)}const nt=[];for(let tt=0,U=$.length,A=U-1,at=tt+1;tt<U;tt++,A++,at++)A===U&&(A=0),at===U&&(at=0),nt[tt]=q($[tt],$[A],$[at]);const _t=[];let Pt,Zt=nt.concat();for(let tt=0,U=I.length;tt<U;tt++){const A=I[tt];Pt=[];for(let at=0,J=A.length,vt=J-1,pt=at+1;at<J;at++,vt++,pt++)vt===J&&(vt=0),pt===J&&(pt=0),Pt[at]=q(A[at],A[vt],A[pt]);_t.push(Pt),Zt=Zt.concat(Pt)}for(let tt=0;tt<m;tt++){const U=tt/m,A=f*Math.cos(U*Math.PI/2),at=p*Math.sin(U*Math.PI/2)+v;for(let J=0,vt=$.length;J<vt;J++){const pt=K($[J],nt[J],at);ut(pt.x,pt.y,-A)}for(let J=0,vt=I.length;J<vt;J++){const pt=I[J];Pt=_t[J];for(let qt=0,Ct=pt.length;qt<Ct;qt++){const P=K(pt[qt],Pt[qt],at);ut(P.x,P.y,-A)}}}const ge=p+v;for(let tt=0;tt<W;tt++){const U=d?K(M[tt],Zt[tt],ge):M[tt];y?(R.copy(C.normals[0]).multiplyScalar(U.x),T.copy(C.binormals[0]).multiplyScalar(U.y),L.copy(b[0]).add(R).add(T),ut(L.x,L.y,L.z)):ut(U.x,U.y,0)}for(let tt=1;tt<=h;tt++)for(let U=0;U<W;U++){const A=d?K(M[U],Zt[U],ge):M[U];y?(R.copy(C.normals[tt]).multiplyScalar(A.x),T.copy(C.binormals[tt]).multiplyScalar(A.y),L.copy(b[tt]).add(R).add(T),ut(L.x,L.y,L.z)):ut(A.x,A.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const U=tt/m,A=f*Math.cos(U*Math.PI/2),at=p*Math.sin(U*Math.PI/2)+v;for(let J=0,vt=$.length;J<vt;J++){const pt=K($[J],nt[J],at);ut(pt.x,pt.y,u+A)}for(let J=0,vt=I.length;J<vt;J++){const pt=I[J];Pt=_t[J];for(let qt=0,Ct=pt.length;qt<Ct;qt++){const P=K(pt[qt],Pt[qt],at);y?ut(P.x,P.y+b[h-1].y,b[h-1].x+A):ut(P.x,P.y,u+A)}}}j(),ht();function j(){const tt=s.length/3;if(d){let U=0,A=W*U;for(let at=0;at<ot;at++){const J=B[at];Ft(J[2]+A,J[1]+A,J[0]+A)}U=h+m*2,A=W*U;for(let at=0;at<ot;at++){const J=B[at];Ft(J[0]+A,J[1]+A,J[2]+A)}}else{for(let U=0;U<ot;U++){const A=B[U];Ft(A[2],A[1],A[0])}for(let U=0;U<ot;U++){const A=B[U];Ft(A[0]+W*h,A[1]+W*h,A[2]+W*h)}}n.addGroup(tt,s.length/3-tt,0)}function ht(){const tt=s.length/3;let U=0;It($,U),U+=$.length;for(let A=0,at=I.length;A<at;A++){const J=I[A];It(J,U),U+=J.length}n.addGroup(tt,s.length/3-tt,1)}function It(tt,U){let A=tt.length;for(;--A>=0;){const at=A;let J=A-1;J<0&&(J=tt.length-1);for(let vt=0,pt=h+m*2;vt<pt;vt++){const qt=W*vt,Ct=W*(vt+1),P=U+at+qt,w=U+J+qt,F=U+J+Ct,Y=U+at+Ct;Kt(P,w,F,Y)}}}function ut(tt,U,A){c.push(tt),c.push(U),c.push(A)}function Ft(tt,U,A){$t(tt),$t(U),$t(A);const at=s.length/3,J=x.generateTopUV(n,s,at-3,at-2,at-1);fe(J[0]),fe(J[1]),fe(J[2])}function Kt(tt,U,A,at){$t(tt),$t(U),$t(at),$t(U),$t(A),$t(at);const J=s.length/3,vt=x.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);fe(vt[0]),fe(vt[1]),fe(vt[3]),fe(vt[1]),fe(vt[2]),fe(vt[3])}function $t(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function fe(tt){o.push(tt.x),o.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return m2(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new al[s.type]().fromJSON(s)),new Nd(n,t.options)}}const p2={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Q(o,r),new Q(a,c),new Q(l,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[o*3],m=t[o*3+1],g=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new Q(r,1-c),new Q(l,1-u),new Q(d,1-p),new Q(v,1-g)]:[new Q(a,1-c),new Q(h,1-u),new Q(f,1-p),new Q(m,1-g)]}};function m2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ws extends Ml{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ws(t.radius,t.detail)}}class Rr extends me{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new _,p=new Q;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const g=o+m/n*r;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let g=0;g<n;g++){const x=g+m,b=x,y=x+n+1,C=x+n+2,T=x+1;a.push(b,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gr extends me{constructor(t=new Cr([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(r,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Fs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const x=p[m];Fs.isClockWise(x)===!0&&(p[m]=x.reverse())}const v=Fs.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){const x=f[m];s.push(x.x,x.y,0),o.push(0,0,1),r.push(x.x,x.y)}for(let m=0,g=v.length;m<g;m++){const x=v[m],b=x[0]+u,y=x[1]+u,C=x[2]+u;n.push(b,y,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return g2(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new gr(n,t.curveSegments)}}function g2(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class gt extends me{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new _,d=new _,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const x=[],b=g/n;let y=0;g===0&&r===0?y=.5/e:g===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(s+T*o)*Math.sin(r+b*a),u.y=t*Math.cos(r+b*a),u.z=t*Math.sin(s+T*o)*Math.sin(r+b*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+y,1-b),x.push(l++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const b=h[g][x+1],y=h[g][x],C=h[g+1][x],T=h[g+1][x+1];(g!==0||r>0)&&f.push(b,y,T),(g!==n-1||c<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ge extends me{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new _,u=new _,d=new _;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const v=p/s*o,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const v=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,x=(s+1)*f+p;r.push(v,m,x),r.push(m,g,x)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class li extends me{constructor(t=new Id(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new _,c=new _,l=new Q;let h=new _;const u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function v(){for(let b=0;b<e;b++)m(b);m(o===!1?e:0),x(),g()}function m(b){h=t.getPointAt(b/e,h);const y=r.normals[b],C=r.binormals[b];for(let T=0;T<=s;T++){const R=T/s*Math.PI*2,L=Math.sin(R),S=-Math.cos(R);c.x=S*y.x+L*C.x,c.y=S*y.y+L*C.y,c.z=S*y.z+L*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){const C=(s+1)*(b-1)+(y-1),T=(s+1)*b+(y-1),R=(s+1)*b+y,L=(s+1)*(b-1)+y;p.push(C,T,L),p.push(T,R,L)}}function x(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)l.x=b/e,l.y=y/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new li(new al[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class mt extends Ei{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=T0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qi extends mt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Mc(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function v2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function y2(i){function t(s,o){return i[s]-i[o]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Rp(i,t,e){const n=i.length,s=new i.constructor(n);for(let o=0,r=0;r!==n;++o){const a=e[o]*t;for(let c=0;c!==t;++c)s[r++]=i[a+c]}return s}function eg(i,t,e,n){let s=1,o=i[0];for(;o!==void 0&&o[n]===void 0;)o=i[s++];if(o===void 0)return;let r=o[n];if(r!==void 0)if(Array.isArray(r))do r=o[n],r!==void 0&&(t.push(o.time),e.push.apply(e,r)),o=i[s++];while(o!==void 0);else if(r.toArray!==void 0)do r=o[n],r!==void 0&&(t.push(o.time),r.toArray(e,e.length)),o=i[s++];while(o!==void 0);else do r=o[n],r!==void 0&&(t.push(o.time),e.push(r)),o=i[s++];while(o!==void 0)}class Na{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){const a=e[1];t<a&&(n=2,o=a);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class x2 extends Na{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ff,endingEnd:ff}}intervalChanged_(t,e,n){const s=this.parameterPositions;let o=t-2,r=t+1,a=s[o],c=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case pf:o=t,a=2*e-n;break;case mf:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pf:r=t,c=2*n-e;break;case mf:r=1,c=n+s[1]-s[0];break;default:r=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let C=0;C!==a;++C)o[C]=g*r[h+C]+x*r[l+C]+b*r[c+C]+y*r[u+C];return o}}class b2 extends Na{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)o[d]=r[l+d]*u+r[c+d]*h;return o}}class _2 extends Na{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Xi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mc(e,this.TimeBufferType),this.values=Mc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mc(t.times,Array),values:Mc(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _2(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new b2(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new x2(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case va:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case Nl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);const a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(s!==void 0&&v2(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nl,o=t.length-1;let r=1;for(let a=1;a<o;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=ya;class Pr extends Xi{constructor(t,e,n){super(t,e,n)}}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=va;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class ng extends Xi{}ng.prototype.ValueTypeName="color";class vr extends Xi{}vr.prototype.ValueTypeName="number";class M2 extends Na{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)mn.slerpFlat(o,0,r,l-a,r,l,c);return o}}class yr extends Xi{InterpolantFactoryMethodLinear(t){return new M2(this.times,this.values,this.getValueSize(),t)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Xi{constructor(t,e,n){super(t,e,n)}}Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=va;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Xi{}xr.prototype.ValueTypeName="vector";class w2{constructor(t="",e=-1,n=[],s=jv){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(T2(n[r]).scale(s));const o=new this(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,r=n.length;o!==r;++o)e.push(Xi.toJSON(n[o]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const o=e.length,r=[];for(let a=0;a<o;a++){let c=[],l=[];c.push((a+o-1)%o,a,(a+1)%o),l.push(0,1,0);const h=y2(c);c=Rp(c,1,h),l=Rp(l,1,h),!s&&c[0]===0&&(c.push(o),l.push(l[0])),r.push(new vr(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(o);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const r=[];for(const a in s)r.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,v){if(f.length!==0){const m=[],g=[];eg(f,m,g,p),m.length!==0&&v.push(new u(d,m,g))}},s=[],o=t.name||"default",r=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const m=[],g=[];for(let x=0;x!==d[p].morphTargets.length;++x){const b=d[p];m.push(b.time),g.push(b.morphTarget===v?1:0)}s.push(new vr(".morphTargetInfluence["+v+"]",m,g))}c=f.length*r}else{const f=".bones["+e[u].name+"]";n(xr,f+".position",d,"pos",s),n(yr,f+".quaternion",d,"rot",s),n(xr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(o,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const o=this.tracks[n];e=Math.max(e,o.times[o.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function S2(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return xr;case"color":return ng;case"quaternion":return yr;case"bool":case"boolean":return Pr;case"string":return Lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function T2(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=S2(i.type);if(i.times===void 0){const e=[],n=[];eg(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Us={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class E2{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const A2=new E2;class wo{constructor(t){this.manager=t!==void 0?t:A2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ns={};class C2 extends Error{constructor(t,e){super(t),this.response=e}}class cl extends wo{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Us.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(ns[t]!==void 0){ns[t].push({onLoad:e,onProgress:n,onError:s});return}ns[t]=[],ns[t].push({onLoad:e,onProgress:n,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ns[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let v=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:b,value:y})=>{if(b)g.close();else{v+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let T=0,R=h.length;T<R;T++){const L=h[T];L.onProgress&&L.onProgress(C)}g.enqueue(y),x()}},b=>{g.error(b)})}}});return new Response(m)}else throw new C2(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Us.add(t,l);const h=ns[t];delete ns[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ns[t];if(h===void 0)throw this.manager.itemError(t),l;delete ns[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class R2 extends wo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Us.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=xa("img");function c(){h(),Us.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class P2 extends wo{constructor(t){super(t)}load(t,e,n,s){const o=new an,r=new R2(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Sl extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xu extends Sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mh=new Vt,Pp=new _,Lp=new _;class Dd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pp),Lp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lp),e.updateMatrixWorld(),mh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class L2 extends Dd{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=pr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class I2 extends Sl{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new L2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ip=new Vt,qr=new _,gh=new _;class k2 extends Dd{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),qr.setFromMatrixPosition(t.matrixWorld),n.position.copy(qr),gh.copy(n.position),gh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gh),n.updateMatrixWorld(),s.makeTranslation(-qr.x,-qr.y,-qr.z),Ip.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ip)}}class Ud extends Sl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new k2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class N2 extends Dd{constructor(){super(new Sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ll extends Sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new N2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ha{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class D2 extends wo{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Us.get(t);if(r!==void 0){if(o.manager.itemStart(t),r.then){r.then(l=>{e&&e(l),o.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(l){return Us.add(t,l),e&&e(l),o.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Us.remove(t),o.manager.itemError(t),o.manager.itemEnd(t)});Us.add(t,c),o.manager.itemStart(t)}}class U2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=kp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function kp(){return performance.now()}const Od="\\[\\]\\.:\\/",O2=new RegExp("["+Od+"]","g"),zd="[^"+Od+"]",z2="[^"+Od.replace("\\.","")+"]",B2=/((?:WC+[\/:])*)/.source.replace("WC",zd),F2=/(WCOD+)?/.source.replace("WCOD",z2),H2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zd),G2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zd),V2=new RegExp("^"+B2+F2+H2+G2+"$"),$2=["material","materials","bones","map"];class W2{constructor(t,e,n){const s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(O2,"")}static parseTrackName(t){const e=V2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);$2.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let r=0;r<o.length;r++){const a=o[r];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let o=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const r=t[s];if(r===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=W2;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Np=new Vt;class ig{constructor(t,e,n=0,s=1/0){this.ray=new Ia(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Md,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Np.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Np),this}intersectObject(t,e=!0,n=[]){return ju(t,this,n,e),n.sort(Dp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)ju(t[s],this,n,e);return n.sort(Dp),n}}function Dp(i,t){return i.distance-t.distance}function ju(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)ju(o[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);function Tl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new me;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in o){const u=Up(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][d]);const p=Up(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Up(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Oe(r,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const v=h.getComponent(d,p);a.setComponent(d+u,p,v)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Op(i,t){if(t===Yv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Bu||t===S0){let e=i.getIndex();if(e===null){const r=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)r.push(c);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Bu)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=i.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class q2 extends wo{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Z2(e)}),this.register(function(e){return new J2(e)}),this.register(function(e){return new aw(e)}),this.register(function(e){return new cw(e)}),this.register(function(e){return new lw(e)}),this.register(function(e){return new tw(e)}),this.register(function(e){return new ew(e)}),this.register(function(e){return new nw(e)}),this.register(function(e){return new iw(e)}),this.register(function(e){return new K2(e)}),this.register(function(e){return new sw(e)}),this.register(function(e){return new Q2(e)}),this.register(function(e){return new rw(e)}),this.register(function(e){return new ow(e)}),this.register(function(e){return new j2(e)}),this.register(function(e){return new hw(e)}),this.register(function(e){return new uw(e)})}load(t,e,n,s){const o=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=ha.extractUrlBase(t);r=ha.resolveURL(l,this.path)}else r=ha.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){s?s(l):console.error(l),o.manager.itemError(t),o.manager.itemEnd(t)},c=new cl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{o.parse(l,r,function(h){e(h),o.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let o;const r={},a={},c=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===sg){try{r[ce.KHR_BINARY_GLTF]=new dw(t)}catch(u){s&&s(u);return}o=JSON.parse(r[ce.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Tw(o,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,r[u.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){const u=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(u){case ce.KHR_MATERIALS_UNLIT:r[u]=new Y2;break;case ce.KHR_DRACO_MESH_COMPRESSION:r[u]=new fw(o,this.dracoLoader);break;case ce.KHR_TEXTURE_TRANSFORM:r[u]=new pw;break;case ce.KHR_MESH_QUANTIZATION:r[u]=new mw;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,o){n.parse(t,e,s,o)})}}function X2(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class j2{constructor(t){this.parser=t,this.name=ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const o=e[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const o=e.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let l;const h=new Dt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Tn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ll(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ud(h),l.distance=u;break;case"spot":l=new I2(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,hs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,o=n.json.nodes[t],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class Y2{constructor(){this.name=ce.KHR_MATERIALS_UNLIT}getMaterialType(){return xe}extendParams(t,e,n){const s=[];t.color=new Dt(1,1,1),t.opacity=1;const o=e.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const r=o.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],Tn),t.opacity=r[3]}o.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",o.baseColorTexture,de))}return Promise.all(s)}}class K2{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name].emissiveStrength;return o!==void 0&&(e.emissiveIntensity=o),Promise.resolve()}}class Z2{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Q(a,a)}return Promise.all(o)}}class J2{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return e.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class Q2{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(o)}}class tw{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Tn)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&o.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,de)),r.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(o)}}class ew{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&o.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(o)}}class nw{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&o.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(a[0],a[1],a[2],Tn),Promise.all(o)}}class iw{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return e.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class sw{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&o.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(a[0],a[1],a[2],Tn),r.specularColorTexture!==void 0&&o.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,de)),Promise.all(o)}}class ow{constructor(t){this.parser=t,this.name=ce.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&o.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(o)}}class rw{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&o.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(o)}}class aw{constructor(t){this.parser=t,this.name=ce.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const o=s.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,o.source,r)}}class cw{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,o=s.textures[t];if(!o.extensions||!o.extensions[e])return null;const r=o.extensions[e],a=s.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class lw{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,o=s.textures[t];if(!o.extensions||!o.extensions[e])return null;const r=o.extensions[e],a=s.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class hw{constructor(t){this.name=ce.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],o=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class uw{constructor(t){this.name=ce.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],c={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const p of u){const v=new Vt,m=new _,g=new mn,x=new _(1,1,1),b=new ci(p.geometry,p.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,v.compose(m,g,x));for(const y in c)if(y==="_COLOR_0"){const C=c[y];b.instanceColor=new Vu(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);Fe.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const sg="glTF",Xr=12,zp={JSON:1313821514,BIN:5130562};class dw{constructor(t){this.name=ce.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==sg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Xr,o=new DataView(t,Xr);let r=0;for(;r<s;){const a=o.getUint32(r,!0);r+=4;const c=o.getUint32(r,!0);if(r+=4,c===zp.JSON){const l=new Uint8Array(t,Xr+r,a);this.content=n.decode(l)}else if(c===zp.BIN){const l=Xr+r;this.body=t.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fw{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ce.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,o=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},c={},l={};for(const h in r){const u=Yu[h]||h.toLowerCase();a[u]=r[h]}for(const h in t.attributes){const u=Yu[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[t.attributes[h]],f=rr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",o).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const p in f.attributes){const v=f.attributes[p],m=c[p];m!==void 0&&(v.normalized=m)}u(f)},a,l,Tn,d)})})}}class pw{constructor(){this.name=ce.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class mw{constructor(){this.name=ce.KHR_MESH_QUANTIZATION}}class og extends Na{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s*3+s;for(let r=0;r!==s;r++)e[r]=n[o+r];return e}interpolate_(t,e,n,s){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,p=t*l,v=p-l,m=-2*f+3*d,g=f-d,x=1-m,b=g-d+u;for(let y=0;y!==a;y++){const C=r[v+y+a],T=r[v+y+c]*h,R=r[p+y+a],L=r[p+y]*h;o[y]=x*C+b*T+m*R+g*L}return o}}const gw=new mn;class vw extends og{interpolate_(t,e,n,s){const o=super.interpolate_(t,e,n,s);return gw.fromArray(o).normalize().toArray(o),o}}const ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bp={9728:In,9729:Xn,9984:p0,9985:Bc,9986:ea,9987:us},Fp={33071:Ds,33648:il,10497:Gs},vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yw={CUBICSPLINE:void 0,LINEAR:ya,STEP:va},yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ms})),i.DefaultMaterial}function Qs(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function hs(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function bw(i,t,e){let n=!1,s=!1,o=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(o=!0),n&&s&&o)break}if(!n&&!s&&!o)return Promise.resolve(i);const r=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;r.push(d)}if(s){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(o){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),o&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _w(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mw(i){let t;const e=i.extensions&&i.extensions[ce.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+xh(e.attributes):t=i.indices+":"+xh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+xh(i.targets[n]);return t}function xh(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Ku(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ww(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Sw=new Vt;class Tw{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new X2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,o=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,o=a.indexOf("Firefox")>-1,r=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||o&&r<98?this.textureLoader=new P2(this.options.manager):this.textureLoader=new D2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return Qs(o,a,s),hs(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,o=e.length;s<o;s++){const r=e[s].joints;for(let a=0,c=r.length;a<c;a++)t[r[a]].isBone=!0}for(let s=0,o=t.length;s<o;s++){const r=t[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),o=(r,a)=>{const c=this.associations.get(r);c!=null&&this.associations.set(a,c);for(const[l,h]of r.children.entries())o(h,a.children[l])};return o(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const o=t(e[s]);o&&n.push(o)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(o){return o.loadNode&&o.loadNode(e)});break;case"mesh":s=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(o,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ce.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(o,r){n.load(ha.resolveURL(e.uri,s.path),o,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,o=e.byteOffset||0;return n.slice(o,o+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const r=vh[s.type],a=rr[s.componentType],c=s.normalized===!0,l=new a(s.count*r);return Promise.resolve(new Oe(l,r,c))}const o=[];return s.bufferView!==void 0?o.push(this.getDependency("bufferView",s.bufferView)):o.push(null),s.sparse!==void 0&&(o.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(o).then(function(r){const a=r[0],c=vh[s.type],l=rr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let v,m;if(f&&f!==u){const g=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let b=e.cache.get(x);b||(v=new l(a,g*f,s.count*f/h),b=new V0(v,f/h),e.cache.add(x,b)),m=new ba(b,c,d%f/h,p)}else a===null?v=new l(s.count*c):v=new l(a,d,s.count*c),m=new Oe(v,c,p);if(s.sparse!==void 0){const g=vh.SCALAR,x=rr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new x(r[1],b,s.sparse.count*g),T=new l(r[2],y,s.sparse.count*c);a!==null&&(m=new Oe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=C.length;R<L;R++){const S=C[R];if(m.setX(S,T[R*c]),c>=2&&m.setY(S,T[R*c+1]),c>=3&&m.setZ(S,T[R*c+2]),c>=4&&m.setW(S,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,o=e.textures[t].source,r=e.images[o];let a=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(a=c)}return this.loadTextureImage(t,o,a)}loadTextureImage(t,e,n){const s=this,o=this.json,r=o.textures[t],a=o.images[e],c=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(o.samplers||{})[r.sampler]||{};return h.magFilter=Bp[d.magFilter]||Xn,h.minFilter=Bp[d.minFilter]||us,h.wrapS=Fp[d.wrapS]||Gs,h.wrapT=Fp[d.wrapT]||Gs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==In&&h.minFilter!==Xn,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const r=s.images[t],a=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:r.mimeType});return c=a.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;e.isImageBitmapLoader===!0&&(p=function(v){const m=new an(v);m.needsUpdate=!0,d(m)}),e.load(ha.resolveURL(u,o.path),p,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),hs(u,r),u.userData.mimeType=r.mimeType||ww(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const o=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),o.extensions[ce.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ce.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=o.associations.get(r);r=o.extensions[ce.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),o.associations.set(r,c)}}return s!==void 0&&(r.colorSpace=s),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,o=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new $i,Ei.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new X0,Ei.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||o||r){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),o&&(c.vertexColors=!0),r&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return mt}loadMaterial(t){const e=this,n=this.json,s=this.extensions,o=n.materials[t];let r;const a={},c=o.extensions||{},l=[];if(c[ce.KHR_MATERIALS_UNLIT]){const u=s[ce.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(a,o,e))}else{const u=o.pbrMetallicRoughness||{};if(a.color=new Dt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,de)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}o.doubleSided===!0&&(a.side=Re);const h=o.alphaMode||yh.OPAQUE;if(h===yh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===yh.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&r!==xe&&(l.push(e.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new Q(1,1),o.normalTexture.scale!==void 0)){const u=o.normalTexture.scale;a.normalScale.set(u,u)}if(o.occlusionTexture!==void 0&&r!==xe&&(l.push(e.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&r!==xe){const u=o.emissiveFactor;a.emissive=new Dt().setRGB(u[0],u[1],u[2],Tn)}return o.emissiveTexture!==void 0&&r!==xe&&l.push(e.assignTexture(a,"emissiveMap",o.emissiveTexture,de)),Promise.all(l).then(function(){const u=new r(a);return o.name&&(u.name=o.name),hs(u,o),e.associations.set(u,{materials:t}),o.extensions&&Qs(s,u,o),u})}createUniqueName(t){const e=Te.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function o(a){return n[ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Hp(c,a,e)})}const r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=Mw(l),u=s[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[ce.KHR_DRACO_MESH_COMPRESSION]?d=o(l):d=Hp(new me,l,e),s[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,s=this.extensions,o=n.meshes[t],r=o.primitives,a=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?xw(this.cache):this.getDependency("material",r[c].material);a.push(h)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const v=h[f],m=r[f];let g;const x=l[f];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)g=o.isSkinnedMesh===!0?new DM(v,x):new z(v,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?g.geometry=Op(g.geometry,S0):m.mode===ei.TRIANGLE_FAN&&(g.geometry=Op(g.geometry,Bu));else if(m.mode===ei.LINES)g=new zM(v,x);else if(m.mode===ei.LINE_STRIP)g=new Rd(v,x);else if(m.mode===ei.LINE_LOOP)g=new BM(v,x);else if(m.mode===ei.POINTS)g=new _s(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&_w(g,o),g.name=e.createUniqueName(o.name||"mesh_"+t),hs(g,o),m.extensions&&Qs(s,g,m),e.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return o.extensions&&Qs(s,u[0],o),u[0];const d=new it;o.extensions&&Qs(s,d,o),e.associations.set(d,{meshes:t});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Mn(Fi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Sd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),hs(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,o=e.joints.length;s<o;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const o=s.pop(),r=s,a=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){a.push(u);const d=new Vt;o!==null&&d.fromArray(o.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Cd(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],o=s.name?s.name:"animation_"+t,r=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],p=s.samplers[f.sampler],v=f.target,m=v.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(v))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],v=u[3],m=u[4],g=[];for(let x=0,b=d.length;x<b;x++){const y=d[x],C=f[x],T=p[x],R=v[x],L=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,C,T,R,L);if(S)for(let M=0;M<S.length;M++)g.push(S[M])}return new w2(o,void 0,g)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(o){const r=n._getNodeRef(n.meshCache,s.mesh,o);return s.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),r})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],o=n._loadNodeShallow(t),r=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)r.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([o,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Sw)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=e.nodes[t],r=o.name?s.createUniqueName(o.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),o.camera!==void 0&&a.push(s.getDependency("camera",o.camera).then(function(l){return s._getNodeRef(s.cameraCache,o.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(o.isBone===!0?h=new W0:l.length>1?h=new it:l.length===1?h=l[0]:h=new Fe,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(o.name&&(h.userData.name=o.name,h.name=r),hs(h,o),o.extensions&&Qs(n,h,o),o.matrix!==void 0){const u=new Vt;u.fromArray(o.matrix),h.applyMatrix4(u)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,o=new it;n.name&&(o.name=s.createUniqueName(n.name)),hs(o,n),n.extensions&&Qs(e,o,n);const r=n.nodes||[],a=[];for(let c=0,l=r.length;c<l;c++)a.push(s.getDependency("node",r[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)o.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Ei||d instanceof an)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(o),o})}_createAnimationTracks(t,e,n,s,o){const r=[],a=t.name?t.name:t.uuid,c=[];Ps[o.path]===Ps.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ps[o.path]){case Ps.weights:l=vr;break;case Ps.rotation:l=yr;break;case Ps.position:case Ps.scale:l=xr;break;default:switch(n.itemSize){case 1:l=vr;break;case 2:case 3:default:l=xr;break}break}const h=s.interpolation!==void 0?yw[s.interpolation]:ya,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const p=new l(c[d]+"."+Ps[o.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ku(e.constructor),s=new Float32Array(e.length);for(let o=0,r=e.length;o<r;o++)s[o]=e[o]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof yr?vw:og;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ew(i,t,e){const n=t.attributes,s=new bs;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new _(c[0],c[1],c[2]),new _(l[0],l[1],l[2])),a.normalized){const h=Ku(rr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const a=new _,c=new _;for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const v=Ku(rr[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const r=new Vi;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Hp(i,t,e){const n=t.attributes,s=[];function o(r,a){return e.getDependency("accessor",r).then(function(c){i.setAttribute(a,c)})}for(const r in n){const a=Yu[r]||r.toLowerCase();a in i.attributes||s.push(o(n[r],a))}if(t.indices!==void 0&&!i.index){const r=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(r)}return ue.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ue.workingColorSpace}" not supported.`),hs(i,t),Ew(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?bw(i,t.targets,e):i})}const bh=new WeakMap;class Aw extends wo{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,s){const o=new cl(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,r=>{this.parse(r,e,s)},n,s)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,de,n).catch(n)}decodeDracoFile(t,e,n,s,o=Tn,r=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:o};return this.decodeGeometry(t,a).then(e).catch(r)}decodeGeometry(t,e){const n=JSON.stringify(e);if(bh.has(t)){const c=bh.get(t);if(c.key===n)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const o=this.workerNextTaskID++,r=t.byteLength,a=this._getWorker(o,r).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[o]={resolve:l,reject:h},s.postMessage({type:"decode",id:o,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&o&&this._releaseTask(s,o)}),bh.set(t,{key:n,promise:a}),a}_createGeometry(t){const e=new me;t.index&&e.setIndex(new Oe(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const s=t.attributes[n],o=s.name,r=s.array,a=s.itemSize,c=new Oe(r,a);o==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(r instanceof Float32Array)),e.setAttribute(o,c)}return e}_assignVertexColorSpace(t,e){if(e!==de)return;const n=new Dt;for(let s=0,o=t.count;s<o;s++)n.fromBufferAttribute(t,s),ue.toWorkingColorSpace(n,de),t.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new cl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((s,o)=>{n.load(t,s,void 0,o)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const s=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const o=Cw.toString(),r=["/* draco decoder */",s,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(o){const r=o.data;switch(r.type){case"decode":s._callbacks[r.id].resolve(r);break;case"error":s._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,o){return s._taskLoad>o._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Cw(){let i,t;onmessage=function(r){const a=r.data;switch(a.type){case"init":i=a.decoderConfig,t=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const c=a.buffer,l=a.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(c),l),p=f.attributes.map(v=>v.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function e(r,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const p=a.GetEncodedGeometryType(c);if(p===r.TRIANGULAR_MESH)d=new r.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(p===r.POINT_CLOUD)d=new r.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const m in h){const g=self[u[m]];let x,b;if(l.useUniqueIDs)b=h[m],x=a.GetAttributeByUniqueId(d,b);else{if(b=a.GetAttributeId(d,r[h[m]]),b===-1)continue;x=a.GetAttribute(d,b)}const y=s(r,a,d,m,g,x);m==="color"&&(y.vertexColorSpace=l.vertexColorSpace),v.attributes.push(y)}return p===r.TRIANGULAR_MESH&&(v.index=n(r,a,d)),r.destroy(d),v}function n(r,a,c){const h=c.num_faces()*3,u=h*4,d=r._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:f,itemSize:1}}function s(r,a,c,l,h,u){const d=u.num_components(),p=c.num_points()*d,v=p*h.BYTES_PER_ELEMENT,m=o(r,h),g=r._malloc(v);a.GetAttributeDataArrayForAllPoints(c,u,m,v,g);const x=new h(r.HEAPF32.buffer,g,p).slice();return r._free(g),{name:l,array:x,itemSize:d}}function o(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}let qc=1;function ee(){return qc=qc*16807%2147483647,(qc-1)/2147483646}function Rw(i=512){const t=document.createElement("canvas");return t.width=t.height=i,{c:t,g:t.getContext("2d")}}function Ci(i,t,e,n,s=!1){for(let o=0;o<e;o++){const r=s?255:0;i.fillStyle=`rgba(${r},${r},${r},${ee()*n})`;const a=ee()*2.2+.4;i.fillRect(ee()*t,ee()*t,a,a)}}const Gp=new Map;function ji(i,t,e=512){const n=Gp.get(i);if(n)return n;qc=i.length*7919+13;const{c:s,g:o}=Rw(e);t(o,e);const r=new Ve(s);return r.wrapS=r.wrapT=Gs,r.colorSpace=de,r.anisotropy=8,Gp.set(i,r),r}function sn(i,t,e){const n=i.clone();return n.repeat.set(t,e),n.needsUpdate=!0,n}const Pw=()=>ji("roof",(i,t)=>{i.fillStyle="#2e1a12",i.fillRect(0,0,t,t);const e=10,n=8,s=t/n,o=t/e;for(let r=e;r>=-1;r--)for(let a=-1;a<=n;a++){const c=a*s+(r%2?s/2:0),l=r*o,h=58+ee()*22;i.fillStyle=`rgb(${h+38},${h+6},${h-14})`,i.beginPath(),i.moveTo(c+2,l-o*.4),i.lineTo(c+s-2,l-o*.4),i.lineTo(c+s-2,l+o*.55),i.quadraticCurveTo(c+s/2,l+o*1.05,c+2,l+o*.55),i.closePath(),i.fill(),i.strokeStyle="rgba(30,10,4,0.55)",i.lineWidth=2,i.stroke();const u=i.createLinearGradient(c,l-o*.4,c,l+o);u.addColorStop(0,"rgba(0,0,0,0.25)"),u.addColorStop(1,"rgba(255,220,170,0.16)"),i.fillStyle=u,i.fill()}Ci(i,t,3e3,.25),Ci(i,t,1200,.08,!0)}),Lw=()=>ji("lacquer",(i,t)=>{i.fillStyle="#8e2a1d",i.fillRect(0,0,t,t);for(let e=0;e<90;e++){i.strokeStyle=`rgba(${ee()>.5?"40,8,4":"190,80,50"},${ee()*.18})`,i.lineWidth=ee()*3+.5;const n=ee()*t;i.beginPath(),i.moveTo(0,n);for(let s=0;s<=t;s+=32)i.lineTo(s,n+Math.sin(s*.02+e)*4);i.stroke()}Ci(i,t,1500,.12)}),Iw=()=>ji("timber",(i,t)=>{i.fillStyle="#6b4a30",i.fillRect(0,0,t,t);for(let e=0;e<140;e++){i.strokeStyle=`rgba(${ee()>.5?"30,18,8":"160,120,80"},${ee()*.22})`,i.lineWidth=ee()*2.5+.5;const n=ee()*t;i.beginPath(),i.moveTo(0,n);for(let s=0;s<=t;s+=24)i.lineTo(s,n+Math.sin(s*.015+e*.7)*6);i.stroke()}Ci(i,t,2e3,.15)}),kw=()=>ji("plaster",(i,t)=>{i.fillStyle="#d6a45a",i.fillRect(0,0,t,t);for(let e=0;e<60;e++){const n=ee()*t,s=ee()*t,o=ee()*90+20,r=i.createRadialGradient(n,s,0,n,s,o),a=ee()>.4;r.addColorStop(0,a?"rgba(120,80,30,0.16)":"rgba(255,230,170,0.16)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(n-o,s-o,o*2,o*2)}for(let e=0;e<10;e++){const n=ee()*t,s=i.createLinearGradient(n,0,n,t*.35);s.addColorStop(0,"rgba(90,60,25,0.08)"),s.addColorStop(1,"rgba(90,60,25,0)"),i.fillStyle=s,i.fillRect(n,0,ee()*14+6,t*.35)}Ci(i,t,4e3,.1)}),Nw=()=>ji("brick",(i,t)=>{i.fillStyle="#6e3b26",i.fillRect(0,0,t,t);const e=4,n=t/e;for(let s=0;s<e;s++)for(let o=0;o<e;o++){const r=150+ee()*30;i.fillStyle=`rgb(${r},${r*.55},${r*.38})`,i.fillRect(s*n+3,o*n+3,n-6,n-6)}Ci(i,t,5e3,.18),Ci(i,t,1500,.08,!0)}),rg=()=>ji("laterite",(i,t)=>{i.fillStyle="#5b3420",i.fillRect(0,0,t,t);const e=4,n=t/e;for(let s=0;s<e;s++){const o=s%2?t/4:0;for(let r=-1;r<3;r++){const a=120+ee()*40;i.fillStyle=`rgb(${a+20},${a*.62},${a*.4})`,i.fillRect(r*(t/2)+o+3,s*n+3,t/2-6,n-6)}}for(let s=0;s<1400;s++)i.fillStyle=`rgba(40,20,10,${.3+ee()*.4})`,i.beginPath(),i.arc(ee()*t,ee()*t,ee()*3+.6,0,Math.PI*2),i.fill()}),Ta=()=>ji("stone",(i,t)=>{i.fillStyle="#5c5a52",i.fillRect(0,0,t,t);const e=3,n=t/e;for(let s=0;s<e;s++)for(let o=0;o<e;o++){const r=120+ee()*30;i.fillStyle=`rgb(${r},${r*.97},${r*.9})`;const a=o%2?n/2:0;i.fillRect(s*n+a+2,o*n+2,n-4,n-4),i.fillRect(s*n+a-t+2,o*n+2,n-4,n-4)}Ci(i,t,6e3,.14),Ci(i,t,2e3,.07,!0)}),El=()=>ji("grass",(i,t)=>{i.fillStyle="#56683a",i.fillRect(0,0,t,t);for(let e=0;e<40;e++){const n=ee()*t,s=ee()*t,o=ee()*120+40,r=i.createRadialGradient(n,s,0,n,s,o);r.addColorStop(0,ee()>.5?"rgba(140,140,70,0.18)":"rgba(40,70,30,0.2)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(n-o,s-o,o*2,o*2)}for(let e=0;e<9e3;e++){const n=ee()*t,s=ee()*t,o=ee();i.strokeStyle=o>.5?`rgba(120,150,60,${.3+ee()*.3})`:`rgba(40,60,20,${.3+ee()*.3})`,i.lineWidth=1,i.beginPath(),i.moveTo(n,s),i.lineTo(n+(ee()-.5)*3,s-ee()*7),i.stroke()}}),ag=()=>ji("earth",(i,t)=>{i.fillStyle="#8b6a48",i.fillRect(0,0,t,t),Ci(i,t,9e3,.22),Ci(i,t,3e3,.1,!0)}),Dw=()=>ji("gilt",(i,t)=>{i.fillStyle="#c99a3c",i.fillRect(0,0,t,t);for(let e=0;e<400;e++){const n=ee()*t,s=ee()*t,o=ee()*40+10;i.fillStyle=`rgba(${ee()>.5?"255,225,140":"120,80,20"},${ee()*.18})`,i.fillRect(n,s,o,o*.7)}},256);function Pe(i){let t;return()=>t??=i()}const Le=i=>new mt(i),k={lacquer:Pe(()=>Le({map:sn(Lw(),1,2),roughness:.45})),timber:Pe(()=>Le({map:sn(Iw(),1,1),roughness:.75})),plaster:Pe(()=>Le({map:sn(kw(),1,1),roughness:.95})),brick:Pe(()=>Le({map:sn(Nw(),6,6),roughness:.9})),laterite:Pe(()=>Le({map:sn(rg(),2,1),roughness:.95})),stone:Pe(()=>Le({map:sn(Ta(),1,1),roughness:.9})),grass:Pe(()=>Le({map:sn(El(),40,40),roughness:1})),earth:Pe(()=>Le({map:sn(ag(),4,4),roughness:1})),gold:Pe(()=>Le({map:sn(Dw(),1,1),color:"#ffd57e",metalness:.86,roughness:.18,emissive:"#553500",emissiveIntensity:.12})),bronze:Pe(()=>Le({color:"#5a4a2c",metalness:.8,roughness:.45})),ridge:Pe(()=>Le({color:"#4a2418",roughness:.7})),ridgeGreen:Pe(()=>Le({color:"#3f6b55",roughness:.55})),whiteStone:Pe(()=>Le({color:"#d9d2c3",roughness:.85})),blueStone:Pe(()=>Le({map:sn(Ta(),.6,.6),color:"#9aa39c",roughness:.8})),darkStone:Pe(()=>Le({color:"#55544e",roughness:.9})),cushion:Pe(()=>Le({color:"#b98a3a",roughness:.9})),cloth:Pe(()=>Le({color:"#a8322a",roughness:.85})),paperGlow:Pe(()=>Le({color:"#ffd9a0",emissive:"#ff9a3c",emissiveIntensity:.6,roughness:.8})),lanternRed:Pe(()=>Le({color:"#c0392b",emissive:"#ff5a2a",emissiveIntensity:.35,roughness:.7})),leaf:Pe(()=>Le({color:"#3d5f2a",roughness:.9})),leafLight:Pe(()=>Le({color:"#5d7d34",roughness:.9})),bark:Pe(()=>Le({color:"#5a4a3a",roughness:1})),bamboo:Pe(()=>Le({color:"#7d9a45",roughness:.6})),lotusPad:Pe(()=>Le({color:"#3f7a3a",roughness:.7,side:Re})),lotusPink:Pe(()=>Le({color:"#f3a6b8",emissive:"#f06a8c",emissiveIntensity:.08,roughness:.6,side:Re})),pinkSilk:Pe(()=>Le({color:"#e46b86",roughness:.7})),incense:Pe(()=>Le({color:"#b23a26",emissive:"#ff4010",emissiveIntensity:.8}))},Uw=()=>[k.paperGlow(),k.lanternRed(),k.incense()],Ow=["buddha","maitreya","guardian","monk","seated","banyan","disciple"],Bd=new Map,zw={gold:k.gold,bronze:k.bronze,lacquer:k.lacquer,whiteStone:k.whiteStone,bark:k.bark,leaf:k.leaf,leafLight:k.leafLight,haloGlow:()=>new mt({color:"#ffcf7a",emissive:"#ffb347",emissiveIntensity:.35,roughness:.6})},Vp=new Map;function Bw(i,t){const e=i.name+(t?"+ao":"");let n=Vp.get(e);if(!n){const s=zw[i.name]?.(),o=s?s.clone():i;o.name=i.name,o.vertexColors=t,i.name==="gold"&&(o.emissive.set("#ffb336"),o.emissiveMap=o.map,o.emissiveIntensity=.38,o.roughness=.2,o.metalness=.92),n=o,Vp.set(e,n)}return n}async function Fw(i=8e3){const t=new Aw().setDecoderPath("/draco/"),e=new q2().setDRACOLoader(t),n=Ow.map(async s=>{try{const o=await e.loadAsync(`/models/${s}.glb`);o.scene.traverse(r=>{r instanceof z&&(r.castShadow=!0,r.receiveShadow=!0,r.material=Bw(r.material,!!r.geometry.attributes.color))}),Bd.set(s,o.scene)}catch(o){console.warn(`[models] ${s}.glb not loaded, keeping the code-built statue`,o)}});await Promise.race([Promise.all(n),new Promise(s=>setTimeout(s,i))]),t.dispose()}function Ir(i){return Bd.get(i)?.clone()??null}function Hw(){const i=Bd.get("monk");if(!i)return null;const t={};for(const e of["robe","sash","beads","sleeve","hand","head","eyes"]){const n=i.getObjectByName(e);if(!(n instanceof z))return null;t[e]=n.geometry}return t}const $p=new Map;function Zu(i,t,e){const n=new Dt(e).getHexString();i.traverse(s=>{if(!(s instanceof z))return;const o=s.material;if(!o.name.startsWith(t))return;const r=`${o.uuid}:${n}`;let a=$p.get(r);a||(a=o.clone(),a.color.set(e),$p.set(r,a)),s.material=a})}const qn={nau:"#7a5134",lam:"#5d7487",xam:"#8a8a84",vang:"#b98a3a",cam:"#b8602c"},fo={sang:["#eaa77e","#f7d9bd"],hong:["#e2966a","#f2cba6"],dong:["#d9875a","#e6b48a"],nau:["#b46a40","#c98e62"]},Wn={go:{name:"Tràng hạt gỗ",color:"#e0852c",lv:0},bode:{name:"Tràng hạt bồ đề",color:"#b98a5a",lv:1},tram:{name:"Tràng hạt trầm hương",color:"#6b442a",lv:2},hophach:{name:"Tràng hạt hổ phách",color:"#f2a91f",lv:3},ngoc:{name:"Tràng hạt ngọc bích",color:"#4fae84",lv:4},manao:{name:"Tràng hạt mã não",color:"#c2412b",lv:99}},ki={xam:{name:"Bồ đoàn xám",color:"#8a8a84",lv:0},nau:{name:"Bồ đoàn nâu",color:"#7a5134",lv:1},vang:{name:"Bồ đoàn vàng",color:"#c9a24a",lv:2},son:{name:"Bồ đoàn đỏ son",color:"#a3452f",lv:3},sen:{name:"Bồ đoàn hoa sen",color:"#d98fa0",lv:5}},Wp={nau:"Áo nâu",lam:"Áo tràng lam",xam:"Áo xám",vang:"Áo vàng",cam:"Áo cà sa"};class Fd{root=new it;body=new it;head=new it;feet=[];arms=[];robeMat;skinMat;beadsMat=null;sculpted;cap;tuft=null;state="idle";sitBlend=0;walkPhase=0;bowLeft=0;layLeft=0;deepLeft=0;tossLeft=0;countLeft=0;sweepLeft=0;broom=null;constructor(t){const e=Hw(),n=!!e;this.sculpted=!!e;const s=new mt({color:fo[t.skin??"dong"][e?0:1],roughness:.7,vertexColors:n});this.skinMat=s,this.cap=this.niCap();const o=new mt({color:"#e9bf98",roughness:.7,vertexColors:n});this.robeMat=new mt({color:qn[t.robe],roughness:.72,metalness:.04,vertexColors:n});const r=new mt({color:"#2a211b",roughness:.6}),a=new mt({color:"#ff9aa8",emissive:"#ff6f86",emissiveIntensity:.3,roughness:.8,transparent:!0,opacity:.6,depthWrite:!1});this.root.add(this.body),this.head.position.y=.78,this.body.add(this.head),e?this.buildSculpted(e,t,{skin:s,scalp:o,dark:r,cheek:a}):this.buildPrimitive(t,{skin:s,scalp:o,dark:r,cheek:a});for(const c of[-1,1]){const l=new z(new gt(.06,10,8),r);l.scale.set(1,.6,1.4),l.position.set(c*.09,.04,.03),this.root.add(l),this.feet.push(l)}this.root.traverse(c=>{c instanceof z&&(c.castShadow=!0)})}buildSculpted(t,e,n){this.body.add(new z(t.robe,this.robeMat)),this.body.add(new z(t.sash,new mt({color:"#dca842",roughness:.42,metalness:.18,vertexColors:!0}))),this.beadsMat=new mt({color:(Wn[e.beads??"go"]??Wn.go).color,roughness:.35,vertexColors:!0}),this.body.add(new z(t.beads,this.beadsMat));for(const o of[-1,1]){const r=new it;r.position.set(o*.17,.45,0),r.add(new z(t.sleeve,this.robeMat),new z(t.hand,n.skin)),r.rotation.z=o*.25,this.body.add(r),this.arms.push(r)}const s=new mt({color:"#2a211b",roughness:.35});this.head.add(new z(t.head,n.skin),new z(t.eyes,s),this.cap),this.cap.visible=e.kind==="ni"}buildPrimitive(t,e){const{skin:n,scalp:s,dark:o,cheek:r}=e,a=new z(new di([[0,.06],[.26,.06],[.28,.1],[.24,.3],[.19,.45],[.13,.5],[0,.52]].map(([f,p])=>new Q(f,p)),24),this.robeMat);a.castShadow=!0,this.body.add(a);const c=new z(new Ge(.12,.022,6,20),this.robeMat);c.rotation.x=Math.PI/2,c.position.y=.5,this.body.add(c);for(const f of[-1,1]){const p=new it;p.position.set(f*.17,.45,0);const v=new z(new Ar(.06,.16,4,8),this.robeMat);v.position.y=-.11,v.castShadow=!0;const m=new z(new gt(.045,10,8),n);m.position.y=-.23,p.add(v,m),p.rotation.z=f*.25,this.body.add(p),this.arms.push(p)}const l=new z(new gt(.27,28,20),s);l.scale.set(1,.96,.96),l.castShadow=!0,this.head.add(l);const h=new z(new gt(.255,24,16,-.9,1.8,.75,1.6),n);h.rotation.y=Math.PI/2,h.position.z=.015,this.head.add(h);for(const f of[-1,1]){const p=new z(new gt(.055,10,8),n);p.scale.set(.5,1,.8),p.position.set(f*.265,-.02,0),this.head.add(p);const v=new z(new gt(.026,10,8),o);v.scale.set(1,1.25,.6),v.position.set(f*.085,-.02,.258),this.head.add(v);const m=new z(new Yn(.035,12),r);m.position.set(f*.15,-.08,.212),m.rotation.y=f*.55,this.head.add(m)}const u=new z(new Ge(.03,.007,4,10,Math.PI),o);u.position.set(0,-.11,.25),u.rotation.z=Math.PI,this.head.add(u);const d=new z(new gt(.06,10,8),o);d.scale.set(1,.6,1.2),d.position.set(0,.25,.08),this.tuft=d,this.head.add(d,this.cap),d.visible=t.kind==="tieu",this.cap.visible=t.kind==="ni"}niCap(){const t=new z(new gt(.285,24,12,0,Math.PI*2,0,Math.PI*.42),new mt({color:"#8f8a80",roughness:.9}));return t.position.y=.01,t}bow(){this.bowLeft=1.6}lay(){this.layLeft=5.4}deepBow(){this.deepLeft=2.6}toss(){this.tossLeft=1.6}counting(t=3){this.countLeft=Math.max(this.countLeft,t)}sweep(t){if(this.sweepLeft=t,!this.broom&&t>0){const e=new it,n=new z(new ft(.018,.018,.95,6),new mt({color:"#8a6a3a",roughness:.8}));n.position.y=.42;const s=new mt({color:"#d2ab5e",roughness:1}),o=new z(new ft(.035,.12,.34,10),s);o.position.y=-.12;const r=new z(new Ge(.045,.012,4,10),new mt({color:"#a8322a",roughness:.8}));r.rotation.x=Math.PI/2,r.position.y=0,e.add(n,o,r),e.position.set(0,.16,.3),e.rotation.x=.32,this.body.add(e),this.broom=e}this.broom&&(this.broom.visible=t>0)}get busy(){return this.layLeft>0||this.bowLeft>0||this.deepLeft>0||this.tossLeft>0}setLook(t){this.robeMat.color.set(qn[t.robe]??qn.nau),this.skinMat.color.set((fo[t.skin??"dong"]??fo.dong)[this.sculpted?0:1]),this.cap.visible=t.kind==="ni",this.tuft&&(this.tuft.visible=t.kind==="tieu"),this.beadsMat?.color.set((Wn[t.beads??"go"]??Wn.go).color)}update(t,e,n){const s=this.state==="sit";this.sitBlend+=((s?1:0)-this.sitBlend)*Math.min(1,t*6);const o=this.state==="walk";o&&(this.walkPhase+=t*(6+n*2.2));const r=o?Math.abs(Math.sin(this.walkPhase))*.05:Math.sin(e*2)*.006;if(this.body.position.y=r-this.sitBlend*.08,this.body.rotation.z=o?Math.sin(this.walkPhase)*.06:0,this.head.rotation.x=o?.05:Math.sin(e*.7)*.03,this.feet.forEach((a,c)=>{const l=c===0?1:-1;a.position.z=.03+(o?Math.sin(this.walkPhase)*.08*l:0),a.position.y=.04+(o?Math.max(0,Math.sin(this.walkPhase)*l)*.04:0),a.position.x=(c===0?-1:1)*(.09+this.sitBlend*.08),a.visible=this.sitBlend<.7}),this.arms.forEach((a,c)=>{const l=c===0?-1:1,h=o?Math.sin(this.walkPhase+(l>0?Math.PI:0))*.5:0;a.rotation.x=h*(1-this.sitBlend)-this.sitBlend*.9,a.rotation.z=l*(.25-this.sitBlend*.15)}),this.bowLeft>0){this.bowLeft=Math.max(0,this.bowLeft-t);const a=1-this.bowLeft/1.6,c=Math.sin(a*Math.PI);this.body.rotation.x=c*.45,this.arms.forEach((l,h)=>{l.rotation.x=-1.25,l.rotation.z=(h===0?-1:1)*-.55})}else if(this.layLeft>0){this.layLeft=Math.max(0,this.layLeft-t);const a=(5.4-this.layLeft)/1.8%1,c=Math.sin(Math.min(1,a*1.15)*Math.PI);this.body.rotation.x=c*1.15,this.body.position.y-=c*.12,this.arms.forEach((l,h)=>{l.rotation.x=-1.25-c*.9,l.rotation.z=(h===0?-1:1)*-.55})}else if(this.deepLeft>0){this.deepLeft=Math.max(0,this.deepLeft-t);const a=1-this.deepLeft/2.6,c=a<.3?Math.sin(a/.3*Math.PI/2):a<.65?1:Math.cos((a-.65)/.35*Math.PI/2);this.body.rotation.x=c*.95,this.head.rotation.x+=c*.15,this.arms.forEach((l,h)=>{l.rotation.x=-1.25-c*.25,l.rotation.z=(h===0?-1:1)*-.55})}else if(this.tossLeft>0){this.tossLeft=Math.max(0,this.tossLeft-t);const a=1-this.tossLeft/1.6,c=Math.sin(Math.min(1,a*1.3)*Math.PI);this.body.rotation.x=-c*.12,this.arms.forEach((l,h)=>{l.rotation.x=-c*2.5,l.rotation.z=(h===0?-1:1)*(.25+c*.45)})}else this.body.rotation.x=0;if(this.sweepLeft>0&&!this.busy){this.sweepLeft=Math.max(0,this.sweepLeft-t),this.sweepLeft===0&&this.broom&&(this.broom.visible=!1);const a=Math.sin(e*(this.state==="walk"?7:3))*(this.state==="walk"?.35:.12);this.broom&&(this.broom.rotation.z=a),this.arms.forEach((c,l)=>{c.rotation.x=-.75,c.rotation.z=(l===0?-1:1)*-.35+a*.4})}if(this.countLeft>0&&!this.busy){this.countLeft=Math.max(0,this.countLeft-t);const a=Math.min(1,this.countLeft*3);this.arms.forEach((c,l)=>{const h=l===1?Math.max(0,Math.sin(e*12.5))*.12:0;c.rotation.x=c.rotation.x*(1-a)+(-1.05-h)*a,c.rotation.z=c.rotation.z*(1-a)+(l===0?-1:1)*-.5*a}),this.head.rotation.x+=.12*a}this.body.scale.set(1+this.sitBlend*.25,1-this.sitBlend*.12,1+this.sitBlend*.2)}}class Gw{constructor(t,e=[]){this.camera=t,this.occluders=e}yaw=0;pitch=.38;dist=7;wantDist=7;focus=new _;ray=new ig;sinceManual=99;sensitivity=1;autoFollow=!0;distScale=1;zoom(t){this.wantDist=Fi.clamp(this.wantDist*(1+t),2.8,16)}rotate(t,e){this.yaw-=t*.006*this.sensitivity,this.pitch=Fi.clamp(this.pitch+e*.004*this.sensitivity,.06,1.15),this.sinceManual=0}forward(){return new _(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}follow(t,e,n){if(this.sinceManual+=t,!this.autoFollow||!n||this.sinceManual<1.2)return;const s=n.dot(this.forward());if(s<-.3)return;const o=s>.2?1.6:.6;let a=e+Math.PI-this.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),this.yaw+=a*Math.min(1,t*o)}update(t,e,n){const s=1-Math.exp(-t*10);this.focus.lerp(e,s);const o=(n?Math.min(this.wantDist,6.5):this.wantDist)*this.distScale;this.dist+=(o-this.dist)*(1-Math.exp(-t*5));const r=n?Math.min(this.pitch,.34):this.pitch,a=this.focus.clone().add(new _(0,1,0)),c=new _(Math.sin(this.yaw)*Math.cos(r),Math.sin(r),Math.cos(this.yaw)*Math.cos(r)).multiplyScalar(this.dist);this.ray.set(a,c.clone().normalize()),this.ray.far=this.dist;const l=this.ray.intersectObjects(this.occluders,!1)[0];l&&c.setLength(Math.max(.8,l.distance-.25)),this.camera.position.copy(a).add(c),this.camera.position.y=Math.max(this.camera.position.y,e.y+.4),this.camera.lookAt(a)}snap(t){this.focus.copy(t)}}const _h=52;class Vw{constructor(t,e,n){this.rig=e,this.onTap=n,this.joyEl=document.createElement("div"),this.joyEl.className="joystick",this.knobEl=document.createElement("div"),this.knobEl.className="joystick-knob",this.joyEl.appendChild(this.knobEl),document.body.appendChild(this.joyEl),this.touch&&(this.rest(),addEventListener("resize",()=>this.rest())),t.addEventListener("pointerdown",o=>{t.setPointerCapture(o.pointerId);const r=o.pointerType==="touch"&&o.clientX<innerWidth*.45&&o.clientY>innerHeight*.3&&!this.joyActive();if(this.ptrs.set(o.pointerId,{x:o.clientX,y:o.clientY,sx:o.clientX,sy:o.clientY,joy:r,t:performance.now()}),r){this.joyEl.style.left=`${o.clientX}px`,this.joyEl.style.top=`${o.clientY}px`,this.joyEl.classList.remove("idle"),this.joyEl.classList.add("on"),this.joyVec.set(0,0),this.knobEl.style.transform="translate(-50%, -50%)";return}const a=this.cameraPtrs();a===1&&(this.dragged=!1),a===2&&(this.pinch=this.spread())}),t.addEventListener("pointermove",o=>{const r=this.ptrs.get(o.pointerId);if(!r)return;const a=o.clientX-r.x,c=o.clientY-r.y;if(r.x=o.clientX,r.y=o.clientY,r.joy){const l=new Q(o.clientX-r.sx,o.clientY-r.sy);l.length()>_h&&l.setLength(_h),this.knobEl.style.transform=`translate(calc(-50% + ${l.x}px), calc(-50% + ${l.y}px))`,this.joyVec.copy(l).divideScalar(_h);return}if(this.cameraPtrs()===2){const l=this.spread();this.pinch>0&&this.rig.zoom((this.pinch-l)/300),this.pinch=l,this.dragged=!0;return}Math.hypot(o.clientX-r.sx,o.clientY-r.sy)>8&&(this.dragged=!0),this.dragged&&this.rig.rotate(a,c)});const s=o=>{const r=this.ptrs.get(o.pointerId);if(this.ptrs.delete(o.pointerId),r?.joy){this.joyVec.set(0,0),this.rest(),Math.hypot(o.clientX-r.sx,o.clientY-r.sy)<10&&performance.now()-r.t<350&&o.type==="pointerup"&&this.onTap(o.clientX,o.clientY);return}r&&!this.dragged&&this.cameraPtrs()===0&&o.type==="pointerup"&&this.onTap(o.clientX,o.clientY),this.cameraPtrs()<2&&(this.pinch=0)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("contextmenu",o=>o.preventDefault()),t.addEventListener("wheel",o=>{o.preventDefault(),this.rig.zoom(Math.sign(o.deltaY)*.1)},{passive:!1}),addEventListener("keydown",o=>{o.target?.tagName!=="INPUT"&&this.keys.add(o.key.toLowerCase())}),addEventListener("keyup",o=>this.keys.delete(o.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear())}keys=new Set;ptrs=new Map;dragged=!1;pinch=0;joyEl;knobEl;joyVec=new Q;touch=matchMedia("(pointer: coarse)").matches;rest(){this.joyEl.classList.remove("on"),this.touch&&(this.joyEl.classList.add("idle"),this.joyEl.style.left=`${Math.max(80,innerWidth*.16)}px`,this.joyEl.style.top=`${innerHeight-(innerHeight>500?190:130)}px`,this.knobEl.style.transform="translate(-50%, -50%)")}joyActive(){for(const t of this.ptrs.values())if(t.joy)return!0;return!1}cameraPtrs(){let t=0;for(const e of this.ptrs.values())e.joy||t++;return t}spread(){const[t,e]=[...this.ptrs.values()].filter(n=>!n.joy);return Math.hypot(t.x-e.x,t.y-e.y)}turnCamera(t){const e=this.keys.has("q"),n=this.keys.has("e");e!==n&&this.rig.rotate((e?-1:1)*t*300,0)}move(){let t=0,e=0,n=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(t+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(t-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(e+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(e-=1),t||e)n=this.keys.has("shift")?1.6:1;else if(this.joyVec.length()>.10){t=-this.joyVec.y,e=this.joyVec.x;const r=this.joyVec.length();n=r>.92?1.6:.35+r*.7}if(!n)return null;const s=this.rig.forward(),o=new _(-s.z,0,s.x);return{dir:s.multiplyScalar(t).add(o.multiplyScalar(e)).normalize(),speed:n}}}const po=["Sơ tâm","Phát tâm","Tinh tấn","Hoan hỷ","An lạc","Thanh tịnh","Viên mãn"],$w=[["today","Hôm nay"],["week","Tuần này"],["all","Tất cả"]],Ww='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 5c2 2.5 2.5 6 0 10-2.5-4-2-7.5 0-10z"/><path d="M12 15c-3-.5-6-3-6.5-6.5 3 0 5.5 2 6.5 6.5zM12 15c3-.5 6-3 6.5-6.5-3 0-5.5 2-6.5 6.5z"/><path d="M5 18h14"/></svg>';class qw{constructor(t,e){this.send=e,this.pill.className="pill merit-pill",this.pill.setAttribute("aria-label","Công đức và nhiệm vụ"),this.pill.style.display="none",this.pill.onclick=()=>this.isOpen?this.close():this.open(),this.float.className="merit-float",this.el.className="sheet merit",this.row.className="merit-row",this.row.append(this.pill,this.float),t.append(this.row,this.el)}row=document.createElement("div");pill=document.createElement("button");float=document.createElement("div");el=document.createElement("div");info=null;board=null;tab="nv";scope="today";floatTimer=0;floatSum=0;get ready(){return this.info?.quests.filter(t=>!t.claimed&&t.have>=t.need).length??0}get gifts(){return this.info?.gifts??null}get isOpen(){return this.el.classList.contains("open")}open(t="nv"){this.tab=t,this.send({t:"merit"}),t==="xh"&&this.send({t:"board",scope:this.scope}),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open")}update(t,e){const n=this.info&&t.lv>this.info.lv;this.info=t;const s=t.quests.some(o=>!o.claimed&&o.have>=o.need);this.pill.style.display="",this.pill.classList.toggle("ready",s),this.pill.innerHTML=`${Ww}<b>${t.total.toLocaleString("vi-VN")}</b><span>${t.level}</span>`,e&&this.showGain(e.n,n?`Lên cấp ${t.level}`:e.why),this.isOpen&&this.render()}setBoard(t){this.board=t,this.isOpen&&this.tab==="xh"&&this.render()}showGain(t,e){this.floatSum=this.float.classList.contains("show")?this.floatSum+t:t,this.float.innerHTML=`<b>+${this.floatSum} công đức</b>${e?`<span>${Mh(e)}</span>`:""}`,this.float.classList.remove("show"),this.float.offsetWidth,this.float.classList.add("show"),clearTimeout(this.floatTimer),this.floatTimer=window.setTimeout(()=>this.float.classList.remove("show"),2400)}render(){const t=this.info,e=t?`<div class="merit-head">
          <div class="merit-total"><b>${t.total.toLocaleString("vi-VN")}</b><span>công đức</span></div>
          <div class="merit-level">
            <div><b>${t.level}</b>${t.next!==null?`<span>còn ${(t.next-t.total).toLocaleString("vi-VN")} lên ${po[t.lv+1]}</span>`:"<span>cấp cao nhất</span>"}</div>
            <div class="bar"><i style="width:${t.next!==null?Math.round((t.total-t.from)/(t.next-t.from)*100):100}%"></i></div>
            <small>Hôm nay +${t.today}${t.streak>1?` · ${t.streak} ngày liên tiếp`:""}</small>
          </div>
        </div>`:'<p class="sheet-sub">Đang kết nối với chùa…</p>';this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Công đức</div>
      ${e}
      <div class="tabs">
        <button data-tab="nv" class="${this.tab==="nv"?"on":""}">Nhiệm vụ hôm nay</button>
        <button data-tab="xh" class="${this.tab==="xh"?"on":""}">Bảng xếp hạng</button>
      </div>
      <div class="tab-body">${this.tab==="nv"?this.quests():this.rank()}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-tab]").forEach(n=>n.addEventListener("click",()=>this.open(n.dataset.tab))),this.el.querySelectorAll("[data-claim]").forEach(n=>n.addEventListener("click",()=>{n.disabled=!0,this.send({t:"claim",q:n.dataset.claim})})),this.el.querySelectorAll("[data-scope]").forEach(n=>n.addEventListener("click",()=>{this.scope=n.dataset.scope,this.board=null,this.send({t:"board",scope:this.scope}),this.render()}))}quests(){return`${(this.info?.quests??[]).map(n=>{const s=n.have>=n.need,o=n.claimed?'<span class="q-done">Đã nhận</span>':s?`<button class="primary small" data-claim="${n.id}">Nhận +${n.reward}</button>`:`<span class="q-reward">+${n.reward}</span>`;return`<div class="quest ${n.claimed?"claimed":s?"ready":""}">
          <div class="q-text"><b>${Mh(n.title)}</b>
            <div class="bar"><i style="width:${Math.round(n.have/n.need*100)}%"></i></div>
            <small>${n.have}/${n.need}</small></div>
          ${o}
        </div>`}).join("")}
      <p class="sheet-sub">Nhiệm vụ đổi mỗi ngày lúc nửa đêm. Ngoài nhiệm vụ, mỗi lần lạy, dâng hương, lần hạt, ngồi tĩnh, thả hoa đăng đều được công đức (có giới hạn mỗi ngày để ai cũng tu đều đặn). Lạy cùng lúc với người khác được thêm công đức <b>đồng tâm</b>.</p>`}rank(){const t=$w.map(([c,l])=>`<button data-scope="${c}" class="${this.scope===c?"on":""}">${l}</button>`).join(""),e=this.board;if(!e||e.scope!==this.scope)return`<div class="seg">${t}</div><p class="sheet-sub">Đang tải…</p>`;const n=(c,l,h=!1)=>`<div class="rank-row ${h?"me":""} ${c<=3?"top"+c:""}">
        <span class="rank-n">${c}</span>
        <span class="rank-name"><b>${Mh(l.name)}</b><small>${po[l.lv]??""}</small></span>
        <span class="rank-merit">${l.merit.toLocaleString("vi-VN")}</span>
      </div>`,s=e.me,o=e.rows.length?e.rows.map((c,l)=>n(l+1,c,!!s&&s.rank===l+1)).join(""):'<p class="sheet-sub">Chưa có ai. Hãy là người đầu tiên!</p>',r=s&&s.rank>e.rows.length?`<div class="rank-gap">…</div>${n(s.rank,s,!0)}`:"";return`<div class="seg">${t}</div><div class="rank-list">${o}${r}</div>${s?"":'<p class="sheet-sub">Bạn chưa có công đức trong mục này.</p>'}
      <p class="sheet-sub">${e.count.toLocaleString("vi-VN")} người có công đức · tên hiển thị lấy theo Cài đặt.</p>`}}const Mh=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),hl={chap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1 2-3 5-3 9v6l3 3 3-3v-6c0-4-2-7-3-9z"/><path d="M12 3v18"/></svg>',vay:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V6a1.5 1.5 0 0 1 3 0v6M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-1a5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.3-1.9L8 14"/></svg>',cuoi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14c1 1.5 2.4 2.2 4 2.2s3-.7 4-2.2"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>',tim:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>'};function ua(i,t,e=0,n=""){const s=Math.max(0,Math.min(po.length-1,e|0));i.className=`${i.className.replace(/\s*rank-\d/g,"")} rank-${s}`,i.textContent="";const o=document.createElement("span");o.textContent=t;const r=document.createElement("small");r.className="rank",r.textContent=n?`${po[s]} · ${n}`:po[s],i.append(o,r)}const Hd={show:!0},cg=14;class lg{el=document.createElement("div");until=0;constructor(t){this.el.className="bubble",t.appendChild(this.el)}say(t,e){this.el.innerHTML="";const n=document.createElement("span");if(n.textContent=t,this.el.appendChild(n),e){const s=document.createElement("small");s.textContent="Cẩn thận lừa đảo: đừng chuyển tiền cho người mới quen",this.el.appendChild(s)}this.el.classList.remove("emote"),this.until=performance.now()+(e?9e3:6e3)}emote(t){hl[t]&&(this.el.innerHTML=hl[t],this.el.classList.add("emote"),this.until=performance.now()+2500)}place(t,e,n){this.el.style.display=n&&performance.now()<this.until?"flex":"none",this.el.style.left=`${t}px`,this.el.style.top=`${e-24}px`}}class Xw{constructor(t,e,n){this.info=t,this.monk=new Fd({kind:t.kind,robe:t.robe,skin:t.skin,beads:t.beads}),this.monk.root.position.set(t.x,t.y,t.z),this.monk.root.rotation.y=t.ry,this.target.set(t.x,t.y,t.z),this.targetRy=t.ry,this.state=t.s,e.add(this.monk.root),this.hit=new z(new ft(.45,.45,1.2,8),new xe({visible:!1})),this.hit.position.y=.6,this.hit.userData.peer=t.id,this.monk.root.add(this.hit),this.tag=document.createElement("div"),this.tag.className="name-tag",ua(this.tag,t.name,t.lv,t.title),n.appendChild(this.tag),this.bubble=new lg(n)}monk;hit;tag;bubble;target=new _;targetRy=0;state=0;shown=!0;setLook(t){Object.assign(this.info,{name:t.name,kind:t.kind,robe:t.robe,skin:t.skin,beads:t.beads,lv:t.lv,title:t.title,pet:t.pet}),this.monk.setLook(t),ua(this.tag,t.name,t.lv,t.title)}setState(t,e,n,s,o){this.target.set(t,e,n),this.targetRy=s,this.state=o}say(t,e){this.bubble.say(t,e)}emote(t){this.bubble.emote(t),t==="chap"?this.monk.bow():t==="cui"?this.monk.deepBow():t==="hoa"||t==="gieo"||t==="ca"?this.monk.toss():t==="quet"?this.monk.sweep(25):t==="chuoi"&&this.monk.counting(3.5)}update(t,e,n,s,o){const r=this.monk.root;if(r.visible=this.shown,!this.shown){r.position.copy(this.target),r.rotation.y=this.targetRy,this.tag.style.display="none",this.bubble.place(0,0,!1);return}const a=1-Math.exp(-t*10),c=r.position.clone();r.position.lerp(this.target,a);let l=this.targetRy-r.rotation.y;l=Math.atan2(Math.sin(l),Math.cos(l)),r.rotation.y+=l*a;const h=c.distanceTo(r.position)/Math.max(t,.001);this.monk.state=this.state===2||this.state==="sit"?"sit":this.state===1||this.state==="walk"||h>.3?"walk":"idle",this.monk.update(t,e,h);const u=r.position.clone().setY(r.position.y+(this.state===2?1.25:1.35)).project(n),d=r.position.distanceTo(s)<40,f=u.z<1&&d,p=(u.x*.5+.5)*innerWidth,v=(-u.y*.5+.5)*innerHeight;this.tag.style.display=f&&Hd.show?"block":"none",this.tag.style.left=`${p}px`,this.tag.style.top=`${v}px`,this.bubble.place(p,v,f&&!o&&r.position.distanceTo(s)<cg)}dispose(t){t.remove(this.monk.root),this.tag.remove(),this.bubble.el.remove()}}const jw={choan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h12c0 3.5-2.7 6-6 6s-6-2.5-6-6z"/><path d="M15 9l3-3M18 10.5l3-1M13 7.5l1-3.5"/><circle cx="19.5" cy="5" r=".6" fill="currentColor"/><circle cx="21" cy="13" r=".6" fill="currentColor"/></svg>',thien:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><path d="M12 8v6M7 12l5 2 5-2"/><path d="M4 19c2-2 5-3 8-3s6 1 8 3z"/></svg>',hoa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 10c-2-3-1-6 0-7 1 1 2 4 0 7zM14 12c3-2 6-1 7 0-1 1-4 2-7 0zM12 14c2 3 1 6 0 7-1-1-2-4 0-7zM10 12c-3 2-6 1-7 0 1-1 4-2 7 0z"/></svg>',cui:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="7" r="2.2"/><path d="M13.5 9 8 13v8M8 13l5 1M12 21h-6"/></svg>',chuoi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="4.5" r="2"/><circle cx="17.5" cy="8" r="2"/><circle cx="17.5" cy="15" r="2"/><circle cx="12" cy="19.5" r="2"/><circle cx="6.5" cy="15" r="2"/><circle cx="6.5" cy="8" r="2"/></svg>'},qp={thien:"Ngồi thiền tại chỗ",hoa:"Tung hoa",cui:"Cúi chào sâu",chuoi:"Lần chuỗi",choan:"Cho thú ăn"},Yw='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2"/><path d="M12 7v7l-4 6M12 14l4 6M5 10l7-2 7 2"/></svg>';class Kw{el=document.createElement("div");constructor(t,e){this.el.className="moves";for(const n of Object.keys(qp)){const s=document.createElement("button");s.innerHTML=`${jw[n]}<span>${qp[n]}</span>`,s.onclick=()=>{this.close(),e(n)},this.el.appendChild(s)}t.appendChild(this.el)}get isOpen(){return this.el.classList.contains("open")}toggle(){this.el.classList.toggle("open")}close(){this.el.classList.remove("open")}}const Xp=36,wh=2.6,jp=["#f4a3b8","#ffd36b","#ffffff","#f7c1cf","#f2b04c"].map(i=>new Dt(i));class Zw{points;bursts=[];geo=new me;pos;col;max=6;constructor(){const t=Xp*this.max;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.geo.setAttribute("position",new Oe(this.pos,3)),this.geo.setAttribute("color",new Oe(this.col,3)),this.geo.setDrawRange(0,0);const e=new $i({size:.15,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,map:hg()});this.points=new _s(this.geo,e),this.points.frustumCulled=!1,this.points.visible=!1}burst(t,e){const n=[];for(let s=0;s<Xp;s++){const o=Math.random()*Math.PI*2,r=.5+Math.random()*1.6;n.push(new _(Math.cos(o)*r,2.2+Math.random()*2.4,Math.sin(o)*r))}this.bursts.push({at:e,pos:t.clone().setY(t.y+1.1),vel:n}),this.bursts.length>this.max&&this.bursts.shift()}update(t){if(this.bursts=this.bursts.filter(n=>t-n.at<wh),this.points.visible=this.bursts.length>0,!this.points.visible)return;let e=0;for(const n of this.bursts){const s=t-n.at,o=1-Math.max(0,(s-wh*.6)/(wh*.4));n.vel.forEach((r,a)=>{const c=Math.min(s,.5),l=n.pos.y+r.y*c-4.5*c*c-Math.max(0,s-.5)*.55,h=Math.sin(s*4+a)*.12;this.pos[e*3]=n.pos.x+r.x*s*.55+h,this.pos[e*3+1]=Math.max(n.pos.y-1.05,l),this.pos[e*3+2]=n.pos.z+r.z*s*.55+Math.cos(s*3.3+a)*.1;const u=jp[a%jp.length];this.col[e*3]=u.r*o,this.col[e*3+1]=u.g*o,this.col[e*3+2]=u.b*o,e++})}this.geo.setDrawRange(0,e),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}function hg(){const i=document.createElement("canvas");i.width=i.height=32;const t=i.getContext("2d"),e=t.createRadialGradient(16,16,2,16,16,15);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.6,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.ellipse(16,16,15,10,.5,0,Math.PI*2),t.fill(),new Ve(i)}const Yp=44,Sh=.55,Th=7,Kp=["#e8c46a","#d9a441","#f2dc9a","#c98f3a"].map(i=>new Dt(i));class Jw{points;throws=[];geo=new me;pos;col;max=4;constructor(){const t=Yp*this.max;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.geo.setAttribute("position",new Oe(this.pos,3)),this.geo.setAttribute("color",new Oe(this.col,3)),this.geo.setDrawRange(0,0),this.points=new _s(this.geo,new $i({size:.08,vertexColors:!0,transparent:!0,depthWrite:!1,map:hg()})),this.points.frustumCulled=!1,this.points.visible=!1}burst(t,e,n){const s=[];for(let o=0;o<Yp;o++){const r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*.75;s.push(new _(e.x+Math.cos(r)*a,e.y+.03,e.z+Math.sin(r)*a))}this.throws.push({at:n,from:t.clone(),to:s}),this.throws.length>this.max&&this.throws.shift()}update(t){if(this.throws=this.throws.filter(n=>t-n.at<Sh+Th),this.points.visible=this.throws.length>0,!this.points.visible)return;let e=0;for(const n of this.throws){const s=t-n.at,o=1-Math.max(0,(s-Sh-Th*.7)/(Th*.3));n.to.forEach((r,a)=>{const c=Math.min(1,Math.max(0,(s-a%8*.02)/Sh));this.pos[e*3]=n.from.x+(r.x-n.from.x)*c,this.pos[e*3+1]=n.from.y+(r.y-n.from.y)*c+Math.sin(c*Math.PI)*.45,this.pos[e*3+2]=n.from.z+(r.z-n.from.z)*c;const l=Kp[a%Kp.length];this.col[e*3]=l.r*o,this.col[e*3+1]=l.g*o,this.col[e*3+2]=l.b*o,e++})}this.geo.setDrawRange(0,e),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}const is={sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h3l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h3l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6"/></svg>',stand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><path d="M12 8v7M8 11l4-2 4 2M10 21l2-6 2 6"/></svg>',send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 20 4l-6 16-3-7z"/></svg>',log:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',lay:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M5 20h14M8 20c0-4 1.5-7 4-9 2.5 2 4 5 4 9"/></svg>',huong:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21V9M12 21V7M15 21V9"/><path d="M12 5c-1-1.5 1-2 0-3.5M9 7c-1-1.5 1-2 0-3.5M15 7c-1-1.5 1-2 0-3.5"/></svg>',hat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="4.5" r="2"/><circle cx="17.5" cy="8" r="2"/><circle cx="17.5" cy="15" r="2"/><circle cx="12" cy="19.5" r="2"/><circle cx="6.5" cy="15" r="2"/><circle cx="6.5" cy="8" r="2"/></svg>',den:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c3 3 13 3 16 0M7 15c0-4 2-7 5-9 3 2 5 5 5 9M12 6v9"/><path d="M3 20c3 1 15 1 18 0"/></svg>',xam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10h10l-1.5 11h-7z"/><path d="M9 10 8 3M12 10V2M15 10l1-7"/></svg>',chuong:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2M7 17c0-6 1-11 5-11s5 5 5 11z"/><path d="M5 17h14M12 20h.01"/></svg>',gao:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1.5 3-4 6-4 9 0 3 2 5 4 6 2-1 4-3 4-6 0-3-2.5-6-4-9z"/><path d="M8 12c-2.5-1-4.5.5-5 2.5-.5 2 1 4 4 4.5 1.5.2 2.5-.5 3-1.5"/><path d="M16 12c2.5-1 4.5.5 5 2.5.5 2-1 4-4 4.5-1.5.2-2.5-.5-3-1.5"/></svg>',dongtac:Yw,tuoi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h9v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 13l6-4"/><path d="M8 11V8a3 3 0 0 1 6 0"/><path d="M19 12v1M21 10v1M20 14v1"/></svg>',danghoa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c2 2.5 2.5 6 0 10-2.5-4-2-7.5 0-10z"/><path d="M12 14c-3-.5-6-3-6.5-6.5 3 0 5.5 2 6.5 6.5zM12 14c3-.5 6-3 6.5-6.5-3 0-5.5 2-6.5 6.5z"/><path d="M7 20h10M9 17h6"/></svg>',quet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3l-5 10"/><path d="M10 13l-5 1 -1 6 4-2 1 3 3-4 2 1z"/></svg>',thapden:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16h12l-1.5 3h-9z"/><path d="M9 16c0-2 1.5-3 3-3s3 1 3 3"/><path d="M12 13c-1.4-1.6-.6-3.6.2-5 .7 1.3 1.8 2.8.6 5"/></svg>',phongsinh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c3-4 9-5 13-2l4-3v10l-4-3c-4 3-10 2-13-2z"/><circle cx="7.5" cy="11" r=".7" fill="currentColor"/><path d="M4 20c2 1 4 1 6 0s4-1 6 0"/></svg>',nguyen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-1.2-3-1-6.5 0-9 1 2.5 1.2 6 0 9z"/><path d="M12 12c-.8-2.6-.2-5.2 1.6-7.4"/><path d="M7 20c.6-2.4 2.2-4 5-4.6M17 20c-.6-2.4-2.2-4-5-4.6"/><path d="M15.5 7.5l2-1.5M16.5 10.5l2.4-.2"/></svg>',choan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18c0 4.5-4 8-9 8s-9-3.5-9-8z"/><path d="M8 12c.5-2 1.5-3 3-3M13 12c.3-1.5 1.2-2.5 2.6-2.5"/></svg>',linhthu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9.5l-.5-4 3 2.5M17 9.5l.5-4-3 2.5"/><circle cx="12" cy="13" r="6"/><path d="M9.5 13q1 1 2 0M12.5 13q1 1 2 0"/></svg>',gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/><circle cx="12" cy="12" r="6.5"/></svg>',gomo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0-9 9c0 3.5 2 6.5 5 8h8c3-1.5 5-4.5 5-8a9 9 0 0 0-9-9z"/><path d="M9 13a3 3 0 1 0 6 0"/></svg>',thien:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><path d="M6 19c1.5-3 3-5 6-5s4.5 2 6 5"/><path d="M4 21h16"/><path d="M9 12l3 2 3-2"/></svg>'};class Qw{constructor(t,e,n,s){this.onSound=n,this.onStand=s,t.innerHTML="";const o=document.createElement("div");o.className="pill zone-pill",o.innerHTML='<span class="brand">An Bình Tự</span><span class="sep"></span><span class="zone">Cả chùa</span><span class="count"></span>',t.appendChild(o),this.zoneEl=o.querySelector(".zone"),this.countEl=o.querySelector(".count");const r=document.createElement("div");r.className="top-right";const a=document.createElement("button");a.className="icon-btn",a.setAttribute("aria-label","Bật âm thanh"),a.innerHTML=is.mute,this.soundBtn=a,a.onclick=()=>this.setSound(this.muted),r.appendChild(a),t.appendChild(r),this.topRight=r,this.fadeEl=document.createElement("div"),this.fadeEl.className="fade",t.appendChild(this.fadeEl),this.toastEl=document.createElement("div"),this.toastEl.className="toast",t.appendChild(this.toastEl),this.actionBar=document.createElement("div"),this.actionBar.className="action-bar",this.actionBar.style.display="none",t.appendChild(this.actionBar),this.banner=document.createElement("div"),this.banner.className="banner",t.appendChild(this.banner),this.chatBar=document.createElement("div"),this.chatBar.className="chat-bar";const c=document.createElement("button");c.className="chat-icon",c.setAttribute("aria-label","Xem lại tin nhắn"),c.innerHTML=is.log,this.chatInput=document.createElement("input"),this.chatInput.maxLength=80,this.chatInput.placeholder="Nói gì đó…",this.chatInput.enterKeyHint="send";const l=document.createElement("button");l.className="chat-icon send",l.setAttribute("aria-label","Gửi"),l.innerHTML=is.send;const h=()=>{const f=this.chatInput.value.trim();f&&this.onSend(f),this.chatInput.value="",this.chatBar.classList.remove("typing")};this.chatInput.addEventListener("input",()=>this.chatBar.classList.toggle("typing",this.chatInput.value.trim()!=="")),l.onclick=h,this.chatInput.addEventListener("keydown",f=>{f.stopPropagation(),f.key==="Enter"&&h(),f.key==="Escape"&&this.chatInput.blur()});const u=document.createElement("div");u.className="emotes";for(const[f,p]of[["chap","Chắp tay"],["vay","Vẫy tay"],["cuoi","Cười"],["tim","Thả tim"]]){const v=document.createElement("button");v.className="chat-icon",v.dataset.emote=f,v.setAttribute("aria-label",p),v.title=p,v.innerHTML=hl[f],v.onclick=()=>{u.classList.remove("open"),Os(),this.onEmote(f)},u.appendChild(v)}const d=document.createElement("button");d.className="chat-icon emote-toggle",d.setAttribute("aria-label","Biểu cảm"),d.innerHTML=hl.cuoi,d.onclick=()=>u.classList.toggle("open"),this.chatBar.append(c,this.chatInput,l,d,u),t.appendChild(this.chatBar),this.logEl=document.createElement("div"),this.logEl.className="chat-log",this.logEl.innerHTML='<div class="chat-log-head"><span class="chat-log-title">💬 Trò chuyện đại chúng</span><button type="button" class="chat-log-min" title="Thu gọn/Mở rộng">⚊</button></div><div class="chat-log-msgs"><div class="chat-msg system-msg">🙏 Chào mừng bạn đến chiêm bái An Bình Tự. Chúc thân tâm an lạc!</div></div>',t.appendChild(this.logEl);const _minBtn=this.logEl.querySelector(".chat-log-min"),_toggleChat=()=>{this.logEl.classList.toggle("closed"),_minBtn.textContent=this.logEl.classList.contains("closed")?"💬":"⚊"};_minBtn.onclick=_toggleChat,c.onclick=_toggleChat,this.card=document.createElement("div"),this.card.className="peer-card",t.appendChild(this.card),this.tagMe=document.createElement("div"),this.tagMe.className="name-tag me",this.myName=e,ua(this.tagMe,e),t.appendChild(this.tagMe)}zoneEl;hintEl=null;toastEl;toastTimer=0;actionBar;tagMe;muted=!0;fadeEl;banner;actionsKey="";sitting=!1;zoneActions=[];onAction=()=>{};countEl;chatBar;chatInput;logEl;card;chatMode=null;onSend=()=>{};onEmote=()=>{};topRight;addDonate(t){const e=document.createElement("button");e.className="icon-btn",e.setAttribute("aria-label","Cầu nguyện chúng sinh"),e.title="Cầu nguyện cho chúng sinh",e.innerHTML=is.gao,e.onclick=t,this.topRight.prepend(e)}addSettings(t){const e=document.createElement("button");e.className="icon-btn",e.setAttribute("aria-label","Cài đặt"),e.title="Cài đặt",e.innerHTML=is.gear,e.onclick=t,this.topRight.appendChild(e)}setSound(t){this.muted=!t,this.soundBtn.innerHTML=this.muted?is.mute:is.sound,this.soundBtn.setAttribute("aria-label",this.muted?"Bật âm thanh":"Tắt âm thanh"),this.onSound(t)}rank={lv:0,title:""};setName(t){this.myName=t,ua(this.tagMe,t,this.rank.lv,this.rank.title)}setRank(t,e){t===this.rank.lv&&e===this.rank.title||(this.rank={lv:t,title:e},ua(this.tagMe,this.myName,t,e))}myName="";soundBtn;fade(t){this.fadeEl.classList.add("on"),setTimeout(()=>{t(),setTimeout(()=>this.fadeEl.classList.remove("on"),120)},420)}setCount(t){this.countEl.textContent=t>0?` · ${t} người`:""}setChatMode(t){t!==this.chatMode&&(this.chatMode=t,this.chatBar.classList.toggle("quiet",t==="quiet"),t==="quiet"&&(this.chatInput.blur(),this.logEl.classList.remove("open")),t==="chat"&&!this.seen("chat")&&(this.toast("Khu trò chuyện dành cho người từ 18 tuổi · nói chuyện lịch sự nhé",6e3),this.mark("chat")))}addLog(t,e,n=!1){const msgs=this.logEl.querySelector(".chat-log-msgs")||this.logEl;const s=document.createElement("div");s.className="chat-msg"+(n?" warn":"");const o=document.createElement("b");o.className="chat-author";o.textContent=t+": ";const b=document.createElement("span");b.className="chat-text";b.textContent=e;s.append(o,b);msgs.appendChild(s);while(msgs.children.length>50)msgs.firstChild.remove();msgs.scrollTop=msgs.scrollHeight;this.logEl.classList.remove("closed")}showCard(t,e,n){this.card.innerHTML="";const s=document.createElement("div");s.className="peer-name",s.textContent=t,this.card.appendChild(s);for(const[o,r]of[["greet","Chắp tay chào"],["mute",e?"Bỏ tắt tiếng":"Tắt tiếng"],["report","Báo xấu"]]){const a=document.createElement("button");a.textContent=r,o==="report"&&(a.className="danger"),a.onclick=()=>{this.hideCard(),n(o)},this.card.appendChild(a)}this.card.classList.add("open")}hideCard(){this.card.classList.remove("open")}seen(t){try{return localStorage.getItem("anduyen.seen."+t)==="1"}catch{return!1}}mark(t){try{localStorage.setItem("anduyen.seen."+t,"1")}catch{}}showHint(t){this.hintEl=document.createElement("div"),this.hintEl.className="hint",this.hintEl.textContent=t,this.zoneEl.closest("#hud").appendChild(this.hintEl)}hideHint(){const t=this.hintEl;t&&(this.hintEl=null,t.style.opacity="0",setTimeout(()=>t.remove(),900))}toast(t,e=2600){this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),e)}setSitting(t){this.sitting=t,t&&this.hideHint(),this.renderActions()}setActions(t){this.zoneActions=t,this.renderActions()}renderActions(){const t=this.zoneActions.map(e=>e.id).join()+(this.sitting?"+s":"");if(t!==this.actionsKey){this.actionsKey=t,this.actionBar.innerHTML="";this.actionBar.onpointerdown=ev=>ev.stopPropagation();this.actionBar.onmousedown=ev=>ev.stopPropagation();for(const e of this.zoneActions){const n=document.createElement("button");n.innerHTML=`${is[e.id]}<span>${e.label}</span>`;const tr=ev=>{if(ev){ev.preventDefault();ev.stopPropagation()}Os();this.onAction(e.id)};n.onclick=tr;n.ontouchend=tr;const st=ev=>ev.stopPropagation();n.onpointerdown=st;n.onmousedown=st;this.actionBar.appendChild(n)}if(this.sitting){
  const sutraBtn=document.createElement("button");
  sutraBtn.innerHTML="<span>📖 Tụng kinh</span>";
  sutraBtn.onclick=()=>window.sutraSystem&&window.sutraSystem.openMenu();
  const e=document.createElement("button");
  e.innerHTML=`${is.stand}<span>Đứng dậy</span>`;
  e.onclick=()=>this.onStand();
  this.actionBar.append(sutraBtn,e);
}this.actionBar.style.display=this.actionBar.children.length?"flex":"none"}}setBanner(t){if(t!==(this.banner.dataset.text??null)){if(t===null){delete this.banner.dataset.text,this.banner.classList.remove("show");return}this.banner.dataset.text=t,this.banner.textContent=t,this.banner.classList.add("show")}}placeTag(t,e,n){this.tagMe.style.display=n?"block":"none",this.tagMe.style.left=`${t}px`,this.tagMe.style.top=`${e}px`}}const Gd={on:!0};function Os(i=8){Gd.on&&(navigator.userActivation?.hasBeenActive??!0)&&navigator.vibrate?.(i)}const rt={spawn:new _(0,.3,39.5),gateZ:100,avenue:{z0:58,z1:100,half:3.2},yard:{x0:-24,x1:24,z0:15,z1:58},corridorX:26.5,corridorGap:{z0:30,z1:37},corridorStart:17,terrace:{x0:-30,x1:30,z0:-46,z1:15,y:1.8,stairHalf:6,stairLen:6},hall:{x0:-21,x1:21,z0:-31,z1:3,y:2.4,stairHalf:21,stairLen:1.8},upper:{x0:-14,x1:14,z0:-74,z1:-46,y:4.6,stairHalf:3,stairLen:6},lake:{x:50,z:12,rx:15,rz:21,water:-.3},halfMoon:{x:-22,z:82,r:11},isle:{x:50,z:12,half:2.2,floor:1},bridge:{x0:33.6,x1:47.8,z:12,half:1.1},frontLake:{x:0,z:137,rx:44,rz:17},causeway:{half:4,z0:117,z1:157,y:.3},well:{x:-44,z:-32,r:8.5},mound:{x:46,z:-52,r:15,h:6},petGarden:{x0:-55,x1:-37,z0:66,z1:96,gateZ:81,gateHalf:2},flowerGarden:{x0:9,x1:20.3,z0:65.5,z1:86},bounds:{x0:-58,x1:72,z0:-82,z1:157}},ug=[-1,1].flatMap(i=>[10.5,15,19.5].map((t,e)=>({x:i*t,z:45.5,id:`thap-${i<0?"l":"r"}-${e}`}))),er={x:-16,z:16.4},Vd=[];function Ee(i,t,e,n){Vd.push({kind:"box",x0:i-e/2,x1:i+e/2,z0:t-n/2,z1:t+n/2})}function pn(i,t,e){Vd.push({kind:"circle",x:i,z:t,r:e})}const dg=[];function Da(i,t,e,n,s){dg.push({x0:i-e/2,x1:i+e/2,z0:t-n/2,z1:t+n/2,y:s})}const fg=[];function pg(i,t,e,n,s,o){fg.push({x0:i-t,x1:i+t,zLow:e,zHigh:n,yLow:s,yHigh:o})}const Gi=[],Bn=[],Di=[];function Xc(i,t,e,n,s,o){const r=(i-e)/s,a=(t-n)/o;return r*r+a*a<1}function mg(i,t){const e=rt.bridge;return i>=e.x0&&i<=e.x1+.3&&Math.abs(t-e.z)<=e.half}function gg(i,t){const e=rt.isle;return Math.abs(i-e.x)<=e.half&&Math.abs(t-e.z)<=e.half}function vg(i,t){const e=rt.causeway;return Math.abs(i)<=e.half&&t>=e.z0&&t<=e.z1}function jc(i){return Math.sin(i*Math.PI*.5)*rt.isle.floor+Math.sin(i*Math.PI)*.45}function oi(i,t){let e=0;for(const o of dg)i>o.x0&&i<o.x1&&t>o.z0&&t<o.z1&&(e=Math.max(e,o.y));for(const o of fg){const r=Math.min(o.zLow,o.zHigh),a=Math.max(o.zLow,o.zHigh);if(i>o.x0&&i<o.x1&&t>=r&&t<=a){const c=(t-o.zLow)/(o.zHigh-o.zLow);e=Math.max(e,o.yLow+(o.yHigh-o.yLow)*c)}}const n=rt.mound,s=Math.hypot(i-n.x,t-n.z)/n.r;if(s<1&&(e=Math.max(e,n.h*(1-s*s))),vg(i,t)&&(e=Math.max(e,rt.causeway.y)),gg(i,t))e=Math.max(e,rt.isle.floor);else if(mg(i,t)){const o=rt.bridge;e=Math.max(e,jc(Math.min(1,Math.max(0,(i-o.x0)/(o.x1-o.x0)))))}return e}function tS(i,t){const e=rt.lake;if(Xc(i,t,e.x,e.z,e.rx+.3,e.rz+.3)&&!mg(i,t)&&!gg(i,t))return!0;const n=rt.frontLake;if(Xc(i,t,n.x,n.z,n.rx+.3,n.rz+.3)&&!vg(i,t))return!0;const s=rt.well;if(Math.hypot(i-s.x,t-s.z)<s.r+.3)return!0;const o=rt.halfMoon;return!!(i<o.x&&Xc(i,t,o.x,o.z,o.r*.75+.3,o.r+.3))}function yg(i,t,e,n=.35){const s=new _(t.x-i.x,0,t.z-i.z),o=s.length();if(o<1e-4)return i.clone();s.multiplyScalar(Math.min(e,o)/o);const r=i.clone().add(s);for(const c of Vd)if(c.kind==="box"){if(r.x<c.x0-n||r.x>c.x1+n||r.z<c.z0-n||r.z>c.z1+n)continue;const l=Math.max(c.x0,Math.min(r.x,c.x1)),h=Math.max(c.z0,Math.min(r.z,c.z1)),u=r.x-l,d=r.z-h,f=u*u+d*d;if(f<n*n)if(f>1e-8){const p=Math.sqrt(f);r.x=l+u/p*n,r.z=h+d/p*n}else{const p=[[r.x-c.x0+n,-1,0],[c.x1-r.x+n,1,0],[r.z-c.z0+n,0,-1],[c.z1-r.z+n,0,1]].sort((v,m)=>v[0]-m[0]);r.x+=p[0][1]*p[0][0],r.z+=p[0][2]*p[0][0]}}else{const l=r.x-c.x,h=r.z-c.z,u=Math.hypot(l,h),d=c.r+n;u<d&&u>1e-6&&(r.x=c.x+l/u*d,r.z=c.z+h/u*d)}if(tS(r.x,r.z))return i.clone();const a=rt.bounds;return r.x=Math.max(a.x0,Math.min(a.x1,r.x)),r.z=Math.max(a.z0,Math.min(a.z1,r.z)),r}function xg(i,t,e=0){const n=rt.petGarden;return i>n.x0-e&&i<n.x1+e&&t>n.z0-e&&t<n.z1+e}function wc(i,t){if(xg(i,t,.3))return!0;const e=rt.halfMoon;return t>rt.avenue.z0+.8&&t<rt.gateZ-3&&i>rt.petGarden.x1-.3&&i<rt.corridorX+1.5?!Xc(i,t,e.x,e.z,e.r*.75+1,e.r+1)||i>e.x+1:t>=rt.gateZ-3&&t<=rt.gateZ+3.5?Math.abs(i)<7.6:t>rt.gateZ+3.5}const lo=Array.from({length:8},(i,t)=>new _(rt.petGarden.x0+2.3,0,69.5+t*3.4));function Oi(i,t){const e=rt.hall,n=rt.upper,s=rt.terrace;if(i>e.x0&&i<e.x1&&t>e.z0&&t<e.z1)return"Chánh điện";if(t<s.z0&&Math.abs(i)<n.x1+4)return"Bảo tháp";if(Math.hypot(i-rt.well.x,t-rt.well.z)<17)return"Giếng Ngọc";if(Math.hypot(i-rt.mound.x,t-rt.mound.z)<rt.mound.r+2)return"Tượng Di Lặc";if(i>rt.corridorX+2.5)return"Hồ sen · Cầu Duyên";if(xg(i,t,.5))return"Vườn Linh Thú";const o=rt.flowerGarden;return i>o.x0-.5&&i<o.x1+.5&&t>o.z0-.5&&t<o.z1+.5?"Vườn hoa":i<-26.5-2.5?"Vườn thiền":Math.abs(i)>rt.corridorX-2.5&&t>10&&t<58?"Hành lang La Hán":t>95?"Cổng tam quan":t>58?"Đường thần đạo":"Sân chùa"}const Ua=[{name:"Cổng tam quan",pos:new _(0,.3,140),yaw:0},{name:"Sân chùa",pos:new _(0,0,40),yaw:0},{name:"Chánh điện",pos:new _(0,2.4,-3),yaw:0},{name:"Bảo tháp",pos:new _(0,4.6,-50),yaw:0},{name:"Hồ sen · Cầu Duyên",pos:new _(32,0,12),yaw:-Math.PI/2},{name:"Vườn thiền",pos:new _(-36,0,30),yaw:Math.PI/2},{name:"Giếng Ngọc",pos:new _(-44,0,-16),yaw:0},{name:"Tượng Di Lặc",pos:new _(46,0,-32),yaw:0},{name:"Vườn Linh Thú",pos:new _(-39,0,81),yaw:Math.PI/2},{name:"Vườn hoa",pos:new _(9.6,0,75.75),yaw:-Math.PI/2}];let Zp=7;const Gt=()=>((Zp=Zp*16807%2147483647)-1)/2147483646;function sa(i,t,e,n,s=!1){const o=new _a,r=64;for(let a=0;a<=r;a++){const c=s?Math.PI/2+a/r*Math.PI:a/r*Math.PI*2,l=i+Math.cos(c)*e,h=-(t+Math.sin(c)*n);a===0?o.moveTo(l,h):o.lineTo(l,h)}return s&&o.lineTo(i,-(t+n)),o}function eS(){const i=new it,t=700,e=new Cr;e.moveTo(-t/2,-t/2),e.lineTo(t/2,-t/2),e.lineTo(t/2,t/2),e.lineTo(-t/2,t/2),e.lineTo(-t/2,-t/2);const n=rt.lake;e.holes.push(sa(n.x,n.z,n.rx,n.rz));const s=rt.halfMoon,o=s.r*.75;e.holes.push(sa(s.x,s.z,o,s.r,!0));const r=rt.frontLake,a=rt.well;e.holes.push(sa(r.x,r.z,r.rx,r.rz)),e.holes.push(sa(a.x,a.z,a.r,a.r));const c=new gr(e,64);c.rotateX(-Math.PI/2);const l=new mt({map:sn(El(),.22,.22),roughness:1}),h=new z(c,l);h.receiveShadow=!0,h.name="ground",i.add(h),Bn.push(h),i.add(Sc(n.x,n.z,n.rx,n.rz,!1)),i.add(Sc(s.x,s.z,o,s.r,!0)),i.add(Eh(n.x,n.z,n.rx,n.rz,!1)),i.add(Eh(s.x,s.z,o,s.r,!0)),i.add(Sc(r.x,r.z,r.rx,r.rz,!1),Eh(r.x,r.z,r.rx,r.rz,!1)),i.add(Sc(a.x,a.z,a.r,a.r,!1));const u=(g,x,b,y,C,T=.02)=>{const R=new z(new We(g,x),b);return R.rotation.x=-Math.PI/2,R.position.set(y,T,C),R.receiveShadow=!0,i.add(R),Bn.push(R),R},d=rt.yard;u(d.x1-d.x0,d.z1-d.z0+6,new mt({map:sn(Ta(),16,16),roughness:.9}),0,(d.z0+d.z1)/2+3),u(40,16,new mt({map:sn(Ta(),13,5),roughness:.9}),0,109);const f=rt.avenue;u(f.half*2,f.z1-f.z0,new mt({map:sn(rg(),2,14),roughness:.95}),0,(f.z0+f.z1)/2,.025);const p=new mt({map:sn(ag(),8,1),roughness:1}),v=rt.corridorGap;u(14,v.z1-v.z0-1,p,30,(v.z0+v.z1)/2,.015),u(14,v.z1-v.z0-1,p,-30,(v.z0+v.z1)/2,.015);const m=new z(new Rr(1,1.1,96),p);return m.rotation.x=-Math.PI/2,m.scale.set(n.rx+2,n.rz+2,1),m.position.set(n.x,.015,n.z),m.receiveShadow=!0,i.add(m),i}function Sc(i,t,e,n,s){const o=new it,r=new Cr,a=sa(0,0,e,n,s);r.setFromPoints(a.getPoints());const c=new gr(r,48);c.rotateX(-Math.PI/2);const l=new z(c,new mt({color:"#1f2a1e",roughness:1}));l.position.y=rt.lake.water-.5;const h=new ft(1,1,.55,64,1,!0,s?Math.PI:0,s?Math.PI:Math.PI*2),u=new z(h,new mt({color:"#3d3524",roughness:1,side:Sn}));u.scale.set(e,1,n),u.position.y=-.27;const d=new gr(r,48);d.rotateX(-Math.PI/2);const f=new z(d,nS());return f.position.y=rt.lake.water,f.receiveShadow=!0,o.add(l,u,f),o.position.set(i,0,t),o}let oo=null;function nS(){return oo||(oo=new mt({color:"#1d3b31",roughness:.1,metalness:.15,transparent:!0,opacity:.92}),oo.onBeforeCompile=i=>{i.uniforms.uTime={value:0},oo.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWorldPos;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec2 p = vWorldPos.xz;
        float w1 = sin(p.x * 1.7 + uTime * 1.1) * cos(p.y * 1.3 - uTime * 0.8);
        float w2 = sin(p.x * 3.1 - p.y * 2.3 + uTime * 1.7);
        normal = normalize(normal + vec3(w1 * 0.05 + w2 * 0.025, 0.0, w2 * 0.05 - w1 * 0.02));`)},oo)}function iS(i){const t=oo?.userData.shader;t&&(t.uniforms.uTime.value=i)}function Eh(i,t,e,n,s){const o=s?26:70,r=new kd(1,0),a=new ci(r,k.darkStone(),o),c=new Vt;for(let l=0;l<o;l++){const h=s?Math.PI/2+l/(o-1)*Math.PI:l/o*Math.PI*2,u=1.02+Gt()*.04,d=.22+Gt()*.18;c.compose(new _(i+Math.cos(h)*e*u,-.05,t+Math.sin(h)*n*u),new mn().setFromEuler(new kn(Gt()*3,Gt()*3,Gt()*3)),new _(d*1.4,d*.7,d)),a.setMatrixAt(l,c)}return a.castShadow=!0,a.receiveShadow=!0,a}function Ah(i,t,e,n,s,o){const r=new it,a=new Cr;a.moveTo(0,0),a.absarc(0,0,1,.25,Math.PI*2-.05,!1),a.lineTo(0,0);const c=new gr(a,20);c.rotateX(-Math.PI/2);const l=new ci(c,k.lotusPad(),s),h=new Vt,u=[];let d=0;for(let v=0;d<s&&v<s*10;v++){const m=Gt()*Math.PI*2,g=Math.sqrt(Gt())*.86,x=i+Math.cos(m)*e*g,b=t+Math.sin(m)*n*g;if(o?.(x,b))continue;const y=.35+Gt()*.4;h.compose(new _(x,rt.lake.water+.02,b),new mn().setFromAxisAngle(new _(0,1,0),Gt()*6.3),new _(y,1,y)),l.setMatrixAt(d++,h),Gt()<.22&&u.push(new _(x+.1,rt.lake.water,b+.1))}l.count=d,l.receiveShadow=!0,r.add(l);const f=new gt(1,6,3,0,Math.PI*2,0,Math.PI/2),p=new mt({color:"#e8c94a"});for(const v of u){const m=new it;for(let b=0;b<2;b++){const y=b?6:8;for(let C=0;C<y;C++){const T=C/y*Math.PI*2+b*.3,R=new z(f,k.lotusPink());R.scale.set(.07,.2-b*.03,.05),R.position.set(Math.cos(T)*(.07-b*.03),.06,Math.sin(T)*(.07-b*.03)),R.rotation.set(0,-T,0),R.rotateZ(.5-b*.25),m.add(R)}}const g=new z(new ft(.04,.03,.04,6),p);g.position.y=.1,m.add(g),m.position.copy(v).setY(rt.lake.water+.18);const x=new z(new ft(.012,.012,.2),k.lotusPad());x.position.y=-.1,m.add(x),r.add(m)}return r}function ro(i,t,e=1){const n=new it,s=Ir("banyan");s?n.add(s):sS(n);const o=new z(new gt(5.6,16,8),new xe({visible:!1,side:Re}));return o.scale.y=.42,o.position.y=6.2,n.add(o),Gi.push(o),n.scale.setScalar(e),n.position.set(i,0,t),pn(i,t,1.3*e),n}function sS(i){const t=new z(new ft(.7,1.1,4.2,14),k.bark());t.position.y=2.1,t.castShadow=!0,i.add(t);for(let s=0;s<6;s++){const o=s/6*Math.PI*2,r=new z(new rn(.35,1.6,6),k.bark());r.position.set(Math.cos(o)*.9,.5,Math.sin(o)*.9),r.rotation.set(Math.sin(o)*.6,0,-Math.cos(o)*.6),i.add(r)}for(let s=0;s<5;s++){const o=s/5*Math.PI*2+.4,r=new Hi([new _(0,3.6,0),new _(Math.cos(o)*1.8,4.6,Math.sin(o)*1.8),new _(Math.cos(o)*3.6,5.2,Math.sin(o)*3.6)]),a=new z(new li(r,10,.32,8),k.bark());a.castShadow=!0,i.add(a)}const e=new Ws(1,1);for(let s=0;s<22;s++){const o=Gt()*Math.PI*2,r=1+Gt()*4.2,a=new z(e,Gt()>.45?k.leaf():k.leafLight()),c=1.6+Gt()*1.4;a.scale.set(c*1.25,c*.75,c*1.25),a.position.set(Math.cos(o)*r,5.6+Gt()*2.2-r*.15,Math.sin(o)*r),a.castShadow=!0,a.receiveShadow=!0,i.add(a)}const n=new ft(.02,.03,1,4);for(let s=0;s<40;s++){const o=Gt()*Math.PI*2,r=1.5+Gt()*3.5,a=1.5+Gt()*2.5,c=new z(n,k.bark());c.scale.y=a,c.position.set(Math.cos(o)*r,5-a/2,Math.sin(o)*r),i.add(c)}}const bg={value:0},Jp=new Map;function oS(i){let t=Jp.get(i);return t||(t=i.clone(),t.onBeforeCompile=e=>{e.uniforms.uTime=bg,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float h = max(transformed.y, 0.0);
        vec4 wp = modelMatrix * vec4(transformed, 1.0);
        float ph = wp.x * 0.7 + wp.z * 0.9;
        transformed.x += sin(uTime * 0.8 + ph) * 0.03 * h;
        transformed.z += cos(uTime * 0.6 + ph) * 0.02 * h;`)},Jp.set(i,t)),t}function Qp(i,t,e=14){const n=new it,s=new ft(.05,.07,1,6).translate(0,.5,0),o=new Ws(.7,0),r=new Map,a=(c,l,h)=>{const u=r.get(l)??[];let d=c.clone().applyMatrix4(h);d.index&&(d=d.toNonIndexed()),d.deleteAttribute("uv"),u.push(d),r.set(l,u)};for(let c=0;c<e;c++){const l=5+Gt()*4,h=new Vt().compose(new _((Gt()-.5)*2.2,0,(Gt()-.5)*2.2),new mn().setFromEuler(new kn((Gt()-.5)*.18,Gt()*6,(Gt()-.5)*.18)),new _(1,1,1));a(s,k.bamboo(),h.clone().multiply(new Vt().makeScale(1,l,1)));for(let u=0;u<4;u++){const d=new Vt().compose(new _((Gt()-.5)*1.2,l*(.62+u*.11),(Gt()-.5)*1.2),new mn,new _(1.1,.35,.8));a(o,Gt()>.5?k.leafLight():k.bamboo(),h.clone().multiply(d))}}for(const[c,l]of r){const h=new z(Tl(l),oS(c));h.castShadow=!0,n.add(h)}return n.position.set(i,0,t),n.userData.bamboo=!0,pn(i,t,1.3),n}function ul(i,t,e=.8){const n=new z(new Ws(e,1),Gt()>.5?k.leaf():k.leafLight());return n.scale.y=.7,n.position.set(i,e*.55,t),n.castShadow=!0,n.receiveShadow=!0,n}let tm=null;function Tc(i,t,e=1){const n=new it;tm??=new mt({color:"#fff6e6",emissive:"#fff0d0",emissiveIntensity:.1,roughness:.6});const s=new mt({color:"#8a8478",roughness:.9}),o=(r,a,c,l)=>{const h=r.clone().addScaledVector(a,c),u=r.clone().lerp(h,.5).add(new _((Gt()-.5)*.4,.2,(Gt()-.5)*.4)),d=new z(new li(new Hi([r,u,h]),6,.06+l*.06,6),s);if(d.castShadow=!0,n.add(d),l===0){const f=new z(new Ws(.75,0),Gt()>.5?k.leaf():k.leafLight());f.scale.set(1.2,.5,1.2),f.position.copy(h),f.castShadow=!0,n.add(f);for(let p=0;p<5;p++){const v=new z(new gt(.06,6,5),tm);v.position.copy(h).add(new _((Gt()-.5)*1.1,.3+Gt()*.2,(Gt()-.5)*1.1)),n.add(v)}return}for(let f=0;f<2+Math.round(Gt());f++){const p=Gt()*Math.PI*2;o(h,new _(Math.cos(p)*.8,.9,Math.sin(p)*.8).normalize(),c*.7,l-1)}};return o(new _(0,0,0),new _(.1,1,0).normalize(),2.2,2),n.scale.setScalar(e),n.position.set(i,0,t),pn(i,t,.4*e),n}function Ch(i,t,e=1,n=0){const s=new it,o=new z(new ft(.15,.3,4,7),k.bark());o.position.y=2,o.castShadow=!0,s.add(o);const r=new mt({color:"#2f4a2c",roughness:.95,flatShading:!0});for(let a=0;a<4;a++){const c=new z(new rn(1.9-a*.38,1.6,7),r);c.position.y=2.6+a*1.05,c.rotation.y=Gt()*3,c.castShadow=!0,s.add(c)}return s.scale.setScalar(e),s.position.set(i,n,t),n===0&&pn(i,t,.45*e),s}function rS(i,t){const e=new ft(t*.25,t,i,14,10),n=e.attributes.position,s=new _,o=[],r=new Dt("#5a6656"),a=new Dt("#3e5e3a");for(let c=0;c<n.count;c++){s.fromBufferAttribute(n,c);const l=(s.y+i/2)/i,h=1+Math.sin(s.y*.12+Math.atan2(s.z,s.x)*3)*.12+(Gt()-.5)*.12,u=l>.75?1-(l-.75)*1.4:1;s.x*=h*u,s.z*=h*u,n.setXYZ(c,s.x,s.y,s.z);const d=r.clone().lerp(a,Math.min(1,l*1.4));o.push(d.r,d.g,d.b)}return e.setAttribute("color",new Yt(o,3)),e.computeVertexNormals(),e}function aS(){const i=new it,t=420,e=new ft(.2,.3,1,6),n=new Ws(1,0),s=new ci(e,k.bark(),t),o=new ci(n,k.leaf(),t),r=new Vt,a=rt.bounds;let c=0;for(;c<t;){const h=-150+Gt()*300,u=-170+Gt()*330,d=h>a.x0-5&&h<a.x1+5&&u>a.z0-5&&u<a.z1+4,f=rt.frontLake,p=Math.abs(h)<14&&u>100||Math.abs(h-f.x)<f.rx+8&&Math.abs(u-f.z)<f.rz+8;if(d||p)continue;const v=5+Gt()*8;r.compose(new _(h,v/2,u),new mn,new _(1,v,1)),s.setMatrixAt(c,r);const m=2.5+Gt()*3;r.compose(new _(h,v+m*.5,u),new mn().setFromEuler(new kn(0,Gt()*6,0)),new _(m,m*1.1,m)),o.setMatrixAt(c,r),c++}o.castShadow=!0,i.add(s,o);const l=new mt({vertexColors:!0,roughness:1,flatShading:!0});for(let h=0;h<34;h++){const u=h/34*Math.PI*2+Gt()*.15,d=Math.sin(u)<0,f=(d?190:260)+Gt()*110,p=(d?70:45)+Gt()*70,v=new z(rS(p,20+Gt()*18),l);v.position.set(Math.cos(u)*f,p/2-6,Math.sin(u)*f-20),v.rotation.y=Gt()*3,i.add(v)}return i}const $d=[];function cS(i){bg.value=i;for(const t of $d)t.rotation.z=Math.sin(i*.8+t.userData.sway)*.03,t.rotation.x=Math.cos(i*.6+t.userData.sway)*.02}function lS(i=160){const t=new me,e=new Float32Array(i*3),n=rt.lake;for(let l=0;l<i;l++){const h=l%3;e[l*3]=h===0?n.x+(Gt()-.5)*n.rx*2.6:h===1?-56+Gt()*26:(Gt()-.5)*30,e[l*3+1]=.4+Gt()*2.4,e[l*3+2]=h===0?n.z+(Gt()-.5)*n.rz*2.4:h===1?-10+Gt()*80:60+Gt()*40}t.setAttribute("position",new Oe(e.slice(),3));const s=document.createElement("canvas");s.width=s.height=64;const o=s.getContext("2d"),r=o.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.25,"rgba(255,240,170,0.8)"),r.addColorStop(1,"rgba(255,220,120,0)"),o.fillStyle=r,o.fillRect(0,0,64,64);const a=new $i({map:new Ve(s),color:"#ffe68a",size:.32,transparent:!0,opacity:0,depthWrite:!1,blending:vo}),c=new _s(t,a);return c.userData.base=e,c}function hS(i,t,e){const n=i.material;if(n.opacity=e*(.75+Math.sin(t*3)*.1),i.visible=e>.02,!i.visible)return;const s=i.userData.base,o=i.geometry.attributes.position;for(let r=0;r<o.count;r++)o.setXYZ(r,s[r*3]+Math.sin(t*.3+r)*.8,s[r*3+1]+Math.sin(t*.7+r*2.1)*.3,s[r*3+2]+Math.cos(t*.25+r*1.3)*.8);o.needsUpdate=!0}const uS=["Gió","Trăng","Mây","Sen","Suối","Sương","Nắng","Lá","Chim","Hoa","Mưa","Sao","Trúc","Khói"],dS=["Nam","Non","Chiều","Hồng","Nhỏ","Sớm","Mai","Thu","Xuân","Biếc","Lành","Hiền","Ngàn","Khuya","Xanh","Mới"],_g="anduyen.profile",Ju=i=>i[Math.floor(Math.random()*i.length)];function Mg(){return`${Ju(uS)} ${Ju(dS)}`}function fS(){try{const t=localStorage.getItem(_g);if(t){const e=JSON.parse(t);if(e.name&&e.kind&&e.robe)return e}}catch{}const i={name:Mg(),kind:Math.random()<.5?"tieu":"ni",robe:Ju(["nau","lam","xam"])};return Ea(i),i}function Ea(i){try{localStorage.setItem(_g,JSON.stringify(i))}catch{}}function pS(){try{return localStorage.getItem("anduyen.hint")==="1"}catch{return!1}}function mS(){try{localStorage.setItem("anduyen.hint","1")}catch{}}const Ec=[{h:0,zenith:"#0a1430",horizon:"#26335a",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1},{h:4.6,zenith:"#0d1838",horizon:"#2c3a62",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1},{h:5.6,zenith:"#3a4c80",horizon:"#f0a07a",sun:"#ffb38a",sunI:.9,hemi:.5,night:.4},{h:7,zenith:"#5d93d0",horizon:"#f6d8b8",sun:"#ffe2c0",sunI:2.2,hemi:.8,night:0},{h:12,zenith:"#4d8bd6",horizon:"#d6e6ef",sun:"#fff4e2",sunI:2.8,hemi:.95,night:0},{h:16,zenith:"#5a8ccc",horizon:"#f2dcb4",sun:"#ffe0b0",sunI:2.4,hemi:.85,night:0},{h:17.6,zenith:"#3c4c80",horizon:"#f28a4c",sun:"#ff9a5a",sunI:1.5,hemi:.6,night:.15},{h:18.6,zenith:"#1c2450",horizon:"#7a4a6c",sun:"#c98aa8",sunI:.5,hemi:.42,night:.7},{h:19.8,zenith:"#0b1534",horizon:"#2a3560",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1},{h:24,zenith:"#0a1430",horizon:"#26335a",sun:"#9fb4ff",sunI:.6,hemi:.55,night:1}];function Oa(){const i=new URLSearchParams(location.search).get("gio");if(i!==null&&!Number.isNaN(Number(i)))return(Number(i)%24+24)%24;const t=new Date;return(t.getUTCHours()+7+t.getUTCMinutes()/60+t.getUTCSeconds()/3600)%24}function gS(i){let t=0;for(;t<Ec.length-2&&Ec[t+1].h<=i;)t++;const e=Ec[t],n=Ec[t+1],s=(i-e.h)/(n.h-e.h),o=(a,c)=>new Dt(a).lerp(new Dt(c),s),r=(a,c)=>a+(c-a)*s;return{zenith:o(e.zenith,n.zenith),horizon:o(e.horizon,n.horizon),sun:o(e.sun,n.sun),sunI:r(e.sunI,n.sunI),hemi:r(e.hemi,n.hemi),night:r(e.night,n.night)}}class vS{constructor(t,e,n){this.scene=t;for(let h=0;h<(n?2:3);h++){const u=new Ud("#ffb062",0,9,1.6);t.add(u),this.pool.push(u)}const s=new vs({uniforms:this.uniforms,side:Sn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 zenith; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunVis;
        varying vec3 vDir;
        void main(){
          float y = max(vDir.y, -0.05);
          vec3 col = mix(horizon, zenith, pow(smoothstep(-0.05, 0.6, y), 0.7));
          float d = max(dot(normalize(vDir), sunDir), 0.0);
          col += sunColor * (pow(d, 600.0) * 3.0 + pow(d, 12.0) * 0.25) * sunVis;
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`});this.dome=new z(new gt(820,32,16),s),this.dome.renderOrder=-1,t.add(this.dome),this.envDome=new z(new gt(10,32,16),s),this.envScene.add(this.envDome),this.pmrem=new Hu(e);const o=600,r=new Float32Array(o*3);for(let h=0;h<o;h++){const u=Math.random()*2-1,d=Math.random()*Math.PI*2,f=Math.abs(u)*.95+.05,p=Math.sqrt(1-f*f);r.set([Math.cos(d)*p*780,f*780,Math.sin(d)*p*780],h*3)}const a=new me;a.setAttribute("position",new Oe(r,3)),this.stars=new _s(a,new $i({color:"#ffffff",size:1.4,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.stars),this.moon=new z(new gt(16,24,16),new xe({color:"#fff4d6",fog:!1,transparent:!0})),t.add(this.moon),this.sun.castShadow=!0;const c=n?1024:2048;this.sun.shadow.mapSize.set(c,c);const l=this.sun.shadow.camera;l.left=l.bottom=-28,l.right=l.top=28,l.near=1,l.far=140,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,t.add(this.sun,this.sun.target,this.hemi,this.lampFill),t.fog=new Ed("#cfdde6",90,520)}dome;sun=new ll("#ffffff",2);hemi=new Xu("#cfe3ff","#5a4a30",.8);lampFill=new Xu("#ffc88a","#6a3a1c",0);stars;moon;night=0;uniforms={zenith:{value:new Dt},horizon:{value:new Dt},sunDir:{value:new _(0,1,0)},sunColor:{value:new Dt},sunVis:{value:1}};envScene=new Ad;envDome;pmrem;envTarget=null;lastEnvHour=-99;spots=[];pool=[];addLanternLight(t,e=9){this.spots.push({pos:t.clone(),range:e,intensity:26,night:!0})}addWarmLight(t,e,n){this.spots.push({pos:t.clone(),range:n,intensity:e,night:!1})}placeLights(t,e){const n=this.spots.map(s=>({s,i:s.night?s.intensity*e:s.intensity,d:s.pos.distanceToSquared(t)})).filter(s=>s.i>.01&&s.d<(s.s.range+40)**2).sort((s,o)=>s.d-o.d);this.pool.forEach((s,o)=>{const r=n[o];s.intensity=r?r.i:0,r&&(s.position.copy(r.s.pos),s.distance=r.s.range)})}update(t){const e=Oa(),n=gS(e);this.night=n.night,this.uniforms.zenith.value.copy(n.zenith),this.uniforms.horizon.value.copy(n.horizon);const s=(e-6)/12,o=Math.sin(s*Math.PI)*1.05,r=new _(Math.cos(s*Math.PI),Math.max(o,-.3),-.35).normalize(),a=(e+6)%24/12,c=new _(Math.cos(a*Math.PI),Math.max(Math.sin(a*Math.PI)*.9,.12),-.25).normalize(),l=o>-.05,h=l?r.clone().setY(Math.max(r.y,.18)).normalize():c;this.uniforms.sunDir.value.copy(r),this.uniforms.sunColor.value.copy(n.sun),this.uniforms.sunVis.value=l?1:0,this.sun.color.copy(n.sun),this.sun.intensity=n.sunI,this.sun.position.copy(t).addScaledVector(h,60),this.sun.target.position.copy(t),this.hemi.intensity=n.hemi,this.hemi.color.copy(n.zenith).lerp(new Dt("#ffffff"),.5),this.hemi.groundColor.set(n.night>.5?"#1a1a24":"#5a4a30"),this.lampFill.intensity=Fi.smoothstep(n.night,.2,.9)*.95,this.scene.fog.color.copy(n.horizon).lerp(n.zenith,.25);const u=this.stars.material;u.opacity=Math.max(0,n.night-.3)*1.2,this.moon.position.copy(c).multiplyScalar(620),this.moon.material.opacity=Math.max(0,n.night-.2),this.moon.visible=n.night>.2;for(const d of Uw())d instanceof mt&&(d.emissiveIntensity=(d.userData.base??=d.emissiveIntensity)*(1+n.night*3.6));return this.placeLights(t,n.night),Math.abs(e-this.lastEnvHour)>.25&&(this.lastEnvHour=e,this.envTarget?.dispose(),this.envTarget=this.pmrem.fromScene(this.envScene,.02),this.scene.environment=this.envTarget.texture,this.scene.environmentIntensity=.35+(1-n.night)*.5),this.dome.position.copy(t).setY(0),n}}const jr=28,Rh=12;function jo({h:i,lift:t=.6,sag:e=1.45},n,s){return i*Math.pow(s,e)+t*Math.pow(Math.abs(n),5)*Math.pow(1-s,2)}function yS(i){const{a:t,b:e,r:n,h:s}=i,o=[],r=[],a=[],c=Math.hypot(e,s),l=Math.hypot(t-n,s),h=(p,v)=>jo(i,p,v),u=(p,v,m,g)=>{const x=o.length/3;for(let b=0;b<=Rh;b++){const y=b/Rh;for(let C=0;C<=jr;C++){const T=-1+2*C/jr,R=p(T,y);o.push(R[0],R[1],R[2]),r.push((g==="x"?R[0]:R[2])*.55,(1-y)*v*.55)}}for(let b=0;b<Rh;b++)for(let y=0;y<jr;y++){const C=x+b*(jr+1)+y,T=C+1,R=C+(jr+1),L=R+1;m?a.push(C,R,T,T,R,L):a.push(C,T,R,T,L,R)}},d=(p,v,m)=>p+(v-p)*m;u((p,v)=>[d(t*p,n*p,v),h(p,v),d(e,0,v)],c,!1,"x"),u((p,v)=>[d(t*p,n*p,v),h(p,v),-d(e,0,v)],c,!0,"x"),u((p,v)=>[d(t,n,v),h(p,v),d(e*p,0,v)],l,!0,"z"),u((p,v)=>[-d(t,n,v),h(p,v),d(e*p,0,v)],l,!1,"z");const f=new me;return f.setAttribute("position",new Yt(o,3)),f.setAttribute("uv",new Yt(r,2)),f.setIndex(a),f.computeVertexNormals(),f}let Ph=null;function xS(){return Ph||(Ph=new mt({map:sn(Pw(),1,1),roughness:.42,metalness:.08,side:Re})),Ph}function Yr(i,t,e){const n=new Hi(i),s=new z(new li(n,Math.max(6,i.length*2),t,5,!1),e);return s.castShadow=!0,s}function vn(i){const{a:t,b:e,r:n,h:s,lift:o=.6,dragons:r,tips:a=!0}=i,c=new it,l=new z(yS(i),xS());l.castShadow=!0,l.receiveShadow=!0,c.add(l),Math.min(t,e)>1.5&&Gi.push(l);const h=Math.max(.035,Math.min(t,e)*.06),u=Math.min(t,e)<1,d=(f,p,v)=>f+(p-f)*v;if(n>.05){const f=new z(new Wt(n*2+h*2,h*1.6,h*1.4),k.ridge());if(f.position.y=s+h*.5,f.castShadow=!0,c.add(f),!u)for(const p of[-1,1])c.add(Yr([new _(p*(n-h*2),s+h*.6,0),new _(p*(n+h*.5),s+h*.9,0),new _(p*(n+h*1.6),s+h*2.6,0),new _(p*(n+h*.9),s+h*3.6,0),new _(p*(n+h*.2),s+h*3,0)],h*.55,k.ridge()))}if(!u){for(const g of[-1,1])for(const x of[-1,1]){const b=[];for(let y=0;y<=10;y++){const C=1-y/10;b.push(new _(g*d(t,n,C),jo(i,1,C)+h*.45,x*d(e,0,C)))}c.add(Yr(b,h*.6,k.ridge()))}const f=[],p=h*.42,v=new ft(p,p,p*.6,6).rotateX(Math.PI/2),m=(g,x,b)=>{const y=[];for(let T=0;T<=12;T++){const[R,L,S]=x(-1+2*T/12);y.push(new _(R,L,S))}c.add(Yr(y,h*.32,k.ridge()));const C=Math.min(t,e)>2.5?Math.max(2,Math.round(g*2/(p*7))):0;for(let T=1;T<C;T++){const[R,L,S]=x(-1+2*T/C);f.push(v.clone().rotateY(b).translate(R,L-h*.32,S))}};if(m(t,g=>[t*g,jo(i,g,0),e],0),m(t,g=>[t*g,jo(i,g,0),-e],Math.PI),m(e,g=>[t,jo(i,g,0),e*g],Math.PI/2),m(e,g=>[-t,jo(i,g,0),e*g],-Math.PI/2),f.length){const g=new z(Tl(f),k.ridge());c.add(g)}}for(const f of a?[-1,1]:[])for(const p of[-1,1]){const v=new _(t*f,o,e*p),m=new _(f,0,p).normalize(),g=Math.min(t,e)*.18+.15,x=(y,C)=>v.clone().addScaledVector(m,g*y).setY(o+g*C),b=u?[x(-.6,-.3),x(0,.05),x(.55,.55),x(.6,1.05)]:[x(-.6,.02),x(0,.1),x(.6,.3),x(1,.62),x(1.18,.92),x(1.12,1.06)];c.add(Yr(b,h*(u?.45:.5),k.ridge()))}if(r&&n>.5){const f=s+h*1.3,p=new z(new gt(h*2.2,20,14),k.gold());p.position.set(0,f+h*2.4,0),c.add(p);const v=new z(new rn(h*1.2,h*3.2,12),k.gold());v.position.set(0,f+h*5,0),c.add(v);for(const m of[-1,1]){const g=[];for(let b=0;b<=8;b++){const y=b/8,C=m*(n*.9-y*(n*.9-h*3.2));g.push(new _(C,f+Math.sin(y*Math.PI*2.2)*h*1.1+y*h*2,0))}c.add(Yr(g,h*.55,k.ridgeGreen()));const x=new z(new gt(h*.9,12,10),k.ridgeGreen());x.position.copy(g[g.length-1]),x.scale.set(1.3,.9,.9),c.add(x)}}return c}function je(i,t,e=0,n=0,s=0){const o=new z(i,t);return o.position.set(e,n,s),o.castShadow=!0,o}function Wd(i,t,e=32){return je(new di(i.map(([n,s])=>new Q(n,s)),e),t)}function bS(i,t){const e=new it;e.add(Wd([[0,0],[i*.9,0],[i,.12],[i*.8,.3],[i*.85,.42],[0,.42]],t));const n=new gt(1,12,8);for(const[s,o,r,a]of[[i*.95,.12,.6,16],[i*.82,.34,-.5,14]])for(let c=0;c<a;c++){const l=c/a*Math.PI*2+(o>.2?.2:0),h=je(n,t,Math.cos(l)*s,o,Math.sin(l)*s);h.scale.set(i*.13,i*.2,i*.07),h.rotation.y=-l+Math.PI/2,h.rotation.x=r,e.add(h)}return e}function _S(){const i=Ir("buddha");if(i)return i;const t=new it,e=k.gold(),n=bS(1.05,e);t.add(n);const s=new it;s.position.y=.42,t.add(s);const o=je(new gt(1,28,16),e,0,.22,.05);o.scale.set(.95,.26,.62),s.add(o),s.add(Wd([[0,.2],[.5,.22],[.52,.45],[.47,.8],[.44,1.02],[.3,1.12],[.14,1.16],[0,1.16]],e));const r=je(new Ge(.42,.04,8,28,Math.PI*1.1),e,0,.82,.02);r.rotation.set(.25,0,-.9),s.add(r);for(const p of[-1,1]){const v=new Hi([new _(p*.46,1,0),new _(p*.58,.7,.08),new _(p*.45,.42,.32),new _(p*.12,.38,.42)]);s.add(je(new li(v,20,.11,10),e))}const a=je(new gt(1,16,10),e,0,.42,.4);a.scale.set(.22,.08,.14),s.add(a),s.add(je(new ft(.12,.14,.18,14),e,0,1.22,0));const c=je(new gt(.3,28,20),e,0,1.5,0);c.scale.set(.92,1.05,.95),s.add(c);const l=new gt(.035,6,5);for(let p=0;p<70;p++){const v=Math.acos(1-p/70*.9),m=p*2.39996,g=new _(Math.sin(v)*Math.cos(m),Math.cos(v),Math.sin(v)*Math.sin(m));g.z>.55&&g.y<.7||s.add(je(l,k.bronze(),g.x*.28,1.5+g.y*.31,g.z*.29))}s.add(je(new gt(.13,16,12),k.bronze(),0,1.86,0));for(const p of[-1,1]){const v=je(new gt(1,10,8),e,p*.28,1.43,0);v.scale.set(.04,.16,.07),s.add(v)}s.add(je(new gt(.018,8,6),k.incense(),0,1.6,.285));for(const p of[-1,1]){const v=je(new Ge(.045,.008,4,12,Math.PI),k.bronze(),p*.1,1.53,.27);v.rotation.z=Math.PI,s.add(v)}const h=new it;h.position.set(0,1.92,-.45);const u=je(new Ge(.62,.05,10,48),e);h.add(u);const d=new z(new Yn(.6,48),new mt({color:"#ffcf7a",emissive:"#ffb347",emissiveIntensity:.35,roughness:.6}));d.position.z=-.02,h.add(d);const f=je(new Ge(1.1,.045,8,64),e,0,-.75,-.05);h.add(f);for(let p=0;p<18;p++){const v=Math.PI*.12+p/17*Math.PI*.76,m=je(new rn(.06,.24,6),e,Math.cos(v)*1.2,-.75+Math.sin(v)*1.2,-.05);m.rotation.z=v-Math.PI/2,h.add(m)}return t.add(h),t}function qd(i,t,e=!1,n=!0){const s=Ir("seated");if(s)return Zu(s,"robe",i),Zu(s,"skin",t),e||s.getObjectByName("beard")?.removeFromParent(),n||s.getObjectByName("hat")?.removeFromParent(),s;const o=new it,r=new mt({color:i,roughness:.6,metalness:.15}),a=new mt({color:t,roughness:.6}),c=je(new Wt(.9,.12,.7),k.gold(),0,.06,0);o.add(c);const l=je(new gt(1,20,12),r,0,.25,.05);l.scale.set(.42,.14,.3),o.add(l),o.add(Wd([[0,.12],[.26,.14],[.28,.4],[.22,.68],[.1,.74],[0,.74]],r,20));const h=je(new gt(.17,18,14),a,0,.9,.02);if(o.add(h),n&&o.add(je(new ft(.13,.17,.14,16),k.gold(),0,1.04,0)),e){const u=je(new rn(.1,.36,12),k.whiteStone(),0,.68,.15);u.rotation.x=Math.PI,o.add(u);const d=je(new Wt(.2,.03,.04),k.whiteStone(),0,.95,.16);o.add(d)}return o}function Lt(i,t,e=0,n=0,s=0){const o=new z(i,t);return o.position.set(e,n,s),o.castShadow=!0,o.receiveShadow=!0,o}const St=(i,t,e,n,s=0,o=0,r=0)=>Lt(new Wt(i,t,e),n,s,o+t/2,r);function Ai(i,t,e,n=.2,s=0){const o=new it,r=Lt(new ft(n*1.6,n*1.9,.22,12),k.whiteStone(),0,.11,0),a=Lt(new ft(n*.92,n,e,14),k.lacquer(),0,e/2+.2,0);return o.add(r,a),Gi.push(a),o.position.set(i,s,t),o}class Xd{constructor(t,e,n){this.ox=t,this.oy=e,this.oz=n}block(t,e,n,s){Ee(this.ox+t,this.oz+e,n,s)}circle(t,e,n){pn(this.ox+t,this.oz+e,n)}seat(t,e,n,s,o,r){r.userData.seat=t,Di.push({id:t,position:new _(this.ox+e,this.oy+n,this.oz+s),facing:o,mesh:r,taken:!1})}}function _o(i,t,e,n=!1){const s=document.createElement("canvas");s.width=n?128:512,s.height=n?512:128;const o=s.getContext("2d");o.fillStyle="#7a1f14",o.fillRect(0,0,s.width,s.height),o.strokeStyle="#d9a845",o.lineWidth=8,o.strokeRect(6,6,s.width-12,s.height-12),o.fillStyle="#f2c96b",o.textAlign="center",o.textBaseline="middle";const r='"Noto Serif CJK SC", "SimSun", "MS Mincho", serif';if(n){const c=[...i[0]],l=(s.height-40)/c.length;o.font=`600 ${Math.min(84,l*.85)}px ${r}`,c.forEach((h,u)=>o.fillText(h,s.width/2,20+l*(u+.5)))}else{const c=i[2]?54:66;o.font=`600 ${c}px ${r}`;const l=o.measureText(i[0]).width;l>s.width-48&&(o.font=`600 ${Math.floor(c*(s.width-48)/l)}px ${r}`),o.fillText(i[0],s.width/2,i[2]?42:i[1]?52:s.height/2),o.font=`600 ${i[2]?21:24}px "Lora", serif`,i[1]&&o.fillText(i[1],s.width/2,i[2]?82:104),i[2]&&o.fillText(i[2],s.width/2,106)}const a=new Ve(s);return a.colorSpace=de,new z(new We(t,e),new mt({map:a,roughness:.5}))}function kr(i=1,t=!1){const e=new it,n=t?k.paperGlow():k.lanternRed(),s=Lt(new gt(.28*i,16,12),n,0,0,0);s.scale.y=1.25;const o=Lt(new ft(.12*i,.16*i,.08*i,12),k.gold(),0,.36*i,0),r=Lt(new ft(.16*i,.12*i,.08*i,12),k.gold(),0,-.36*i,0),a=Lt(new ft(.03,.05,.3*i,6),k.lanternRed(),0,-.55*i,0);return e.add(s,o,r,a),e}function em(i,t){const e=new it;e.add(St(.5,.25,.5,k.blueStone(),0,0,0)),e.add(St(.22,1.3,.22,k.blueStone(),0,.25,0)),e.add(St(.6,.12,.6,k.blueStone(),0,1.55,0));const n=St(.42,.5,.42,k.paperGlow(),0,1.67,0);e.add(n);const s=vn({a:.42,b:.42,r:.02,h:.3,lift:.1});return s.position.y=2.17,e.add(s),e.position.set(i,0,t),pn(i,t,.3),e}function wg(i=1){const t=[[0,1],[.18,1],[.3,.92],[.34,.7],[.36,.4],[.42,.12],[.48,0],[.44,-.02],[0,-.02]];return Lt(new di(t.map(([e,n])=>new Q(e*i,n*i)),28),k.bronze())}function MS(i=1){const t=new it,e=Lt(new ft(.5*i,.5*i,.8*i,24),k.lacquer());e.rotation.z=Math.PI/2;const n=new mt({color:"#d9c39a",roughness:.8});for(const s of[-1,1]){const o=Lt(new Yn(.48*i,24),n,s*.41*i,0,0);o.rotation.y=s*Math.PI/2,t.add(o)}return t.add(e),t}function nm(i,t,e){const n=new it,s=k.blueStone();n.add(St(1.2,.8,1.6,k.darkStone(),0,0,0));const o=Lt(new gt(.5,16,12),s,0,1.25,-.15);o.scale.set(.9,.9,1.3);const r=Lt(new gt(.42,16,12),s,0,1.55,.3),a=Lt(new gt(.38,16,12),s,0,2.05,.45);a.scale.set(1.1,1,1);const c=Lt(new Ge(.34,.12,8,18),s,0,2,.35);c.rotation.x=.2,n.add(o,r,a,c);for(const h of[-1,1]){const u=Lt(new ft(.11,.13,.6,8),s,h*.25,1.1,.5),d=Lt(new gt(.12,8,6),s,h*.18,2.4,.4);n.add(u,d)}const l=Lt(new Ge(.25,.08,6,12,Math.PI*1.3),s,0,1.6,-.75);return l.rotation.y=Math.PI/2,n.add(l),n.position.set(i,0,t),n.rotation.y=e,Ee(i,t,1.4,1.8),n}function wS(){const i=new it,t=rt.gateZ,e=22,n=5,s=6.4,o=new Cr;o.moveTo(-e/2,0),o.lineTo(e/2,0),o.lineTo(e/2,s),o.lineTo(-e/2,s),o.lineTo(-e/2,0);const r=(m,g,x)=>{const b=new _a;return b.moveTo(m-g/2,.001),b.lineTo(m-g/2,x-g/2),b.absarc(m,x-g/2,g/2,Math.PI,0,!0),b.lineTo(m+g/2,.001),b.lineTo(m-g/2,.001),b};o.holes.push(r(0,4.6,5.4),r(-6.2,2.8,4.2),r(6.2,2.8,4.2));const a=new Nd(o,{depth:n,bevelEnabled:!1});a.translate(0,0,-n/2);const c=a.attributes.uv;for(let m=0;m<c.count;m++)c.setXY(m,c.getX(m)*.3,c.getY(m)*.3);const l=Lt(a,k.plaster());i.add(l),i.add(St(e+1,.3,n+1.2,k.laterite(),0,0,0));for(const m of[-10.6,-8.1,-3.9,3.9,8.1,10.6])i.add(St(.5,s,.3,k.lacquer(),m,0,n/2+.1));const h=vn({a:e/2+1.4,b:n/2+1.6,r:e/2-1,h:1.3,lift:.8});h.position.y=s,i.add(h);const u=s+.7;i.add(St(12,.35,4.4,k.timber(),0,u-.35,0));for(const m of[-5.4,-1.8,1.8,5.4])for(const g of[-1.9,1.9])i.add(Ai(m,g,3.2,.2,u));i.add(St(11.4,.7,.16,k.lacquer(),0,u+.05,1.95));const d=wg(1.6);d.position.set(0,u+1.3,0),i.add(d);const f=vn({a:7.4,b:3.6,r:5,h:1.2,lift:.75});f.position.y=u+3.3,i.add(f),i.add(St(9,1.2,3.4,k.plaster(),0,u+3.6,0));const p=vn({a:6.2,b:3.2,r:3.8,h:2.4,lift:.95,dragons:!0});p.position.y=u+4.8,i.add(p);const v=_o(["AN BÌNH TỰ","CHÙA AN BÌNH TỰ","LÊN CHÙA CẦU AN · TÂM THÂN THANH TỊNH"],4.6,1.15);v.position.set(0,5.75,n/2+.03),i.add(v);for(const[m,g]of[[-3.9,"佛光普照"],[3.9,"緣滿人間"]]){const x=_o([g],.45,3.4,!0);x.position.set(m,3,n/2+.27),i.add(x)}return i.position.z=t,Gi.push(l),Ee(-9.4,t,3.2,n),Ee(-3.4,t,2.2,n),Ee(3.4,t,2.2,n),Ee(9.4,t,3.2,n),i}function im(i,t,e){const n=new it,s=1.4;n.add(St(5.2,.5,5.2,k.laterite(),0,0,0));for(const a of[-1.8,1.8])for(const c of[-1.8,1.8])n.add(Ai(a,c,3,.17,.5));for(const a of[-.85,.85])for(const c of[-.85,.85])n.add(Ai(a,c,8.9,.14,.5));if([{y:3.6,a:3.4,h:1.2},{y:6.6,a:2.7,h:1.1},{y:9.4,a:2,h:1.9}].forEach((a,c)=>{const l=vn({a:a.a,b:a.a,r:c===2?.35:a.a-.7,h:a.h,lift:.7});l.position.y=a.y,n.add(l),c<2&&n.add(St(a.a*1.2,.16,a.a*1.2,k.timber(),0,a.y+a.h*.6,0))}),e==="bell"){const a=wg(1.25*s);a.position.set(0,4.6,0),n.add(a)}else{const a=MS(1.6);a.position.set(0,5.4,0),n.add(a)}const r=_o([e==="bell"?"鐘樓":"鼓樓"],1.4,.5);return r.position.set(0,3.2,1.95),n.add(r),n.position.set(i,0,t),Ee(i,t,4.6,4.6),n}function sm(i,t,e=0){const n=new it,s=i.x1-i.x0,o=i.z1-i.z0,r=i.y-t,a=(i.x0+i.x1)/2,c=(i.z0+i.z1)/2,l=St(s,i.y,o,k.laterite(),a,0,c);n.add(l);const h=St(s-.2,.04,o-.2,k.brick(),a,i.y,c);n.add(h),Bn.push(h),Da(a,c,s,o,i.y);const u=Math.max(4,Math.round(r/.18));for(let p=0;p<u;p++){const v=r*(1-p/u);n.add(St(i.stairHalf*2,v,i.stairLen/u+.02,k.whiteStone(),0,t,i.z1+(p+.5)*(i.stairLen/u)))}const d=new z(new We(i.stairHalf*2,Math.hypot(i.stairLen,r)),new xe({visible:!1}));d.rotation.x=-Math.PI/2+Math.atan2(r,i.stairLen),d.position.set(0,t+r/2,i.z1+i.stairLen/2),n.add(d),Bn.push(d),pg(0,i.stairHalf,i.z1+i.stairLen,i.z1,t,i.y);for(const p of[-1,1]){const v=[new _(p*(i.stairHalf+.25),i.y+.7,i.z1),new _(p*(i.stairHalf+.25),t+r*.5+.7,i.z1+i.stairLen*.5),new _(p*(i.stairHalf+.25),t+.8,i.z1+i.stairLen+.4)];n.add(Lt(new li(new Hi(v),20,.22,10),k.blueStone()));const m=Lt(new gt(.34,12,10),k.blueStone(),v[2].x,v[2].y+.15,v[2].z+.1);m.scale.set(.8,1,1.3),n.add(m)}const f=(p,v,m)=>{v-p<.5||(n.add(St(v-p,.7,.25,k.blueStone(),(p+v)/2,i.y,m)),Ee((p+v)/2,m,v-p,.4))};return f(i.x0,-i.stairHalf-.5,i.z1-.15),f(i.stairHalf+.5,i.x1,i.z1-.15),Ee(i.x0,c,.4,o),Ee(i.x1,c,.4,o),e>0?(Ee((i.x0-e)/2,i.z0,-e-i.x0,.4),Ee((i.x1+e)/2,i.z0,i.x1-e,.4)):Ee(a,i.z0,s,.4),n}const censerTargets=[];function Sg(i=1){const t=new it,e=[[0,0],[.3,0],[.34,.08],[.22,.2],[.24,.32],[.5,.42],[.56,.62],[.5,.82],[.54,.86],[.46,.88],[0,.88]].map(([n,s])=>new Q(n*i,s*i));t.add(Lt(new di(e,24),k.bronze()));const _cHit=new z(new ft(.8*i,.9*i,1.4*i,8),new xe({visible:!1}));_cHit.userData.isCenser=!0,t.add(_cHit),censerTargets.push(_cHit);for(const n of[-1,1]){const s=Lt(new Ge(.12*i,.03*i,6,12),k.bronze(),n*.56*i,.84*i,0);s.rotation.y=Math.PI/2,t.add(s)}for(let n=0;n<7;n++){const s=n*.9,o=.18*i*(n%3)*.6;t.add(Lt(new ft(.008,.008,.5*i,4),k.ridge(),Math.cos(s)*o,1.05*i,Math.sin(s)*o)),t.add(Lt(new gt(.014,6,4),k.incense(),Math.cos(s)*o,1.3*i,Math.sin(s)*o))}return t}function SS(i,t){const e=new it;e.add(St(2.6,.7,2.6,k.whiteStone(),0,0,0));const n=Sg(2);n.position.y=.7,e.add(n);const hitOut=new z(new ft(2.2,2.2,3.6,12),new xe({visible:!1}));hitOut.position.set(0,1.8,0),hitOut.userData.isCenser=!0,e.add(hitOut),censerTargets.push(hitOut),e.position.set(i,0,t),Ee(i,t,2.9,2.9);return e}function om(i,t,e){const n=new it,s=i*(rt.corridorX-2.2),o=i*(rt.corridorX+1.4),r=e-t,a=(t+e)/2,c=(s+o)/2,l=St(4.2,.3,r,k.laterite(),c,0,a);n.add(l);const h=St(4,.02,r-.1,k.brick(),c,.3,a);n.add(h),Bn.push(h),Da(c,a,4.2,r,.3);const u=St(.4,3.6,r,k.plaster(),o,.3,a);n.add(u),Gi.push(u),Ee(o,a,.5,r);const d=Math.round(r/3.2);for(let v=0;v<=d;v++){const m=t+r/d*v;n.add(Ai(s,m,3.4,.16,.3)),pn(s,m,.24)}const f=vn({a:r/2+.8,b:3.2,r:r/2-1.2,h:1.6,lift:.5});f.rotation.y=Math.PI/2,f.position.set(c,3.9,a),n.add(f);const p=["#8f9792","#858d88","#97a09a"];for(let v=0;v<d;v++){const m=t+r/d*(v+.5);n.add(St(1.4,.7,1,k.lacquer(),o-i*.75,.3,m));const g=qd(p[v%p.length],p[(v+1)%p.length],v%3===0,!1);g.scale.setScalar(1.15),g.position.set(o-i*.75,1,m),g.rotation.y=i>0?-Math.PI/2:Math.PI/2,n.add(g),Ee(o-i*.75,m,1.4,1)}return n}function TS(i,t,e){const n=new it,s=9;n.add(St(9,.8,9,k.whiteStone(),0,0,0));let o=.8;for(let c=0;c<s;c++){const l=3.2-c*.24,h=c===0?3.2:2.2-c*.06,u=Lt(new ft(l*.92,l,h,8),c%2?k.plaster():k.whiteStone(),0,o+h/2,0);u.rotation.y=Math.PI/8,n.add(u);for(let f=0;f<4;f++){const p=f/4*Math.PI*2,v=Lt(new Yn(.42-c*.02,16,0,Math.PI),k.gold(),Math.sin(p)*(l*.93+.01),o+h*.35,Math.cos(p)*(l*.93+.01));v.rotation.y=p,n.add(v)}o+=h;const d=vn({a:l+.7,b:l+.7,r:.01,h:1,lift:.3,tips:!1});d.position.y=o-.1,d.rotation.y=Math.PI/4,n.add(d),o+=.35}const r=Lt(new rn(.3,2.2,10),k.gold(),0,o+1.1,0),a=Lt(new gt(.5,12,8),k.gold(),0,o+.2,0);return a.scale.y=.6,n.add(r,a),n.position.set(i,e,t),pn(i,t,4.6),n}function ES(){const{x:i,z:t,floor:e,half:n}=rt.isle,s=rt.lake.water,o=new it;o.add(Lt(new ft(.7,.8,e-s+.2,20),k.whiteStone(),0,(e+s)/2-.1,0));for(let l=0;l<8;l++){const h=l/8*Math.PI*2,u=St(.16,.16,2,k.timber(),Math.cos(h)*.8,e-.6,Math.sin(h)*.8);u.rotation.y=-h+Math.PI/2,u.rotation.x=.5,o.add(u)}o.add(St(n*2+.2,.22,n*2+.2,k.timber(),0,e-.22,0));const r=St(n*2,.02,n*2,k.brick(),0,e-.02,0);o.add(r),Bn.push(r);for(const l of[-n+.15,n-.15])for(const h of[-n+.15,n-.15])o.add(Ai(l,h,2.6,.13,e));const a=vn({a:n+.9,b:n+.9,r:.5,h:1.6,lift:.7,dragons:!1});a.position.y=e+2.8,o.add(a);for(const[l,h,u,d]of[[0,-n,n*2,.1],[0,n,n*2,.1],[n,0,.1,n*2]])o.add(St(u,.55,d,k.lacquer(),l,e,h));const c=kr(1);return c.position.set(0,e+2.3,0),o.add(c),o.position.set(i,0,t),o}function AS(){const i=rt.bridge,t=new it,e=26,n=i.x1-i.x0;for(let s=0;s<e;s++){const o=s/e,r=(s+1)/e,a=jc(o),c=jc(r),l=Lt(new Wt(n/e+.03,.12,i.half*2),k.timber(),i.x0+n*(o+r)/2,(a+c)/2-.06,i.z);if(l.rotation.z=Math.atan2(c-a,n/e),t.add(l),Bn.push(l),s%3===0)for(const h of[-1,1])t.add(Lt(new Wt(.1,.7,.1),k.lacquer(),i.x0+n*o,a+.35,i.z+h*(i.half-.05)))}for(const s of[-1,1]){const o=[];for(let r=0;r<=16;r++){const a=r/16;o.push(new _(i.x0+n*a,jc(a)+.7,i.z+s*(i.half-.05)))}t.add(Lt(new li(new Hi(o),32,.05,6),k.lacquer()))}return t}function CS(i,t){const e=new it,n=new Xd(i,0,t);e.add(St(8,.5,6,k.laterite(),0,0,0)),e.add(St(7.6,.02,5.6,k.brick(),0,.5,0));for(const a of[St(7.2,3.6,.35,k.plaster(),0,.5,-2.6),St(.35,3.6,5.2,k.plaster(),-3.6,.5,0),St(.35,3.6,5.2,k.plaster(),3.6,.5,0)])e.add(a),Gi.push(a);for(const a of[-3.4,-1.2,1.2,3.4])e.add(Ai(a,2.6,3.4,.17,.5));const s=vn({a:5,b:4,r:3,h:2.3,lift:.9,dragons:!0});s.position.y=4.1,e.add(s),e.add(St(3.2,1.1,1.2,k.lacquer(),0,.5,-1.7));const o=qd("#b8402e","#ecd2b4",!0);o.scale.setScalar(1.3),o.position.set(0,1.6,-1.85),e.add(o);for(let a=0;a<13;a++)e.add(Lt(new ft(.014,.014,1.8,4),k.pinkSilk(),-3+a*.5,3,2.6));const r=_o(["月老祠","ĐỀN NGUYỆT LÃO"],2.8,.7);r.position.set(0,3.6,2.7),e.add(r);for(const a of[-2.3,2.3]){const c=kr(1);c.position.set(a,3.3,2.8),e.add(c)}return e.position.set(i,0,t),n.block(0,-2.6,7.2,.6),n.block(-3.6,0,.6,5.4),n.block(3.6,0,.6,5.4),n.block(0,-1.7,3.4,1.4),Da(i,t,8,6,.5),e}function RS(i,t){const e=new it,n=new Xd(i,0,t);e.add(St(8,.2,7.6,k.timber(),0,0,0));for(const r of[-3.7,0,3.7])for(const a of[-3.5,3.5])e.add(Ai(r,a,2.8,.13,.2));const s=vn({a:4.8,b:4.6,r:3,h:2,lift:.6});s.position.y=3.2,e.add(s),[[-2.1,-1.7],[2.1,-1.7],[-2.1,1.7],[2.1,1.7]].forEach(([r,a],c)=>{e.add(St(1.2,.42,.9,k.timber(),r,.2,a)),e.add(Lt(new gt(.11,10,8),k.whiteStone(),r,.73,a));for(const l of[-1,1]){const h=Lt(new ft(.24,.24,.28,12),k.timber(),r+l*.95,.34,a);e.add(h),n.seat(`tea-${c}-${l}`,r+l*.95,.48,a,l>0?-Math.PI/2:Math.PI/2,h)}n.block(r,a,1.2,.9)});for(const r of[-3.7,3.7]){const a=kr(.9);a.position.set(r,2.6,3.7),e.add(a)}e.position.set(i,0,t);for(const r of[-3.7,0,3.7])for(const a of[-3.5,3.5])n.circle(r,a,.2);return Da(i,t,8,7.6,.2),e}function Yo(i,t,e,n){const s=new it;s.add(St(1.6,.1,.5,k.darkStone(),0,.38,0),St(.25,.38,.4,k.darkStone(),-.6,0,0),St(.25,.38,.4,k.darkStone(),.6,0,0)),s.position.set(i,0,t),s.rotation.y=e;const o=new _(1,0,0).applyAxisAngle(new _(0,1,0),e);for(const r of[-1,1]){const a=new z(new Wt(.75,.12,.5),new xe({visible:!1}));a.position.set(r*.4,.44,0),s.add(a),a.userData.seat=`${n}-${r}`,Di.push({id:`${n}-${r}`,position:new _(i+o.x*r*.4,.48,t+o.z*r*.4),facing:e,mesh:a,taken:!1})}return Ee(i,t,1.4,1.4),s}function rm(i,t){const e=new it;e.add(St(1.2,.4,1.2,k.darkStone(),0,0,0)),e.add(St(.8,2.4,.8,k.blueStone(),0,.4,0));const n=vn({a:.75,b:.75,r:.05,h:.45,lift:.16});return n.position.y=2.8,e.add(n),e.position.set(i,0,t),Ee(i,t,1.2,1.2),e}function PS(){const i=new it,t=rt.bounds,e=t.x0-1,n=t.x1+1,s=t.z0-1,o=rt.gateZ,r=2.2,a=(c,l,h,u)=>{const d=Math.hypot(h-c,u-l),f=St(d,r,.45,k.plaster(),0,0,0);f.position.set((c+h)/2,0,(l+u)/2),f.rotation.y=-Math.atan2(u-l,h-c);const p=Lt(new Wt(d+.1,.16,.8),k.ridge(),(c+h)/2,r+.08,(l+u)/2);p.rotation.y=f.rotation.y,i.add(f,p)};return a(e,s,n,s),a(e,s,e,o),a(n,s,n,o),a(e,o,-11,o),a(11,o,n,o),i}const Tg=matchMedia("(pointer: coarse)").matches,Ac=Tg?.5:1,Eg="#7a4a12",Ag="#d9a443",Cg="#fbe39a",jd="#6e1a0e",LS="#3d0c06";function za(i,t){const e=document.createElement("canvas");e.width=Math.round(i*Ac),e.height=Math.round(t*Ac);const n=e.getContext("2d");return n.scale(Ac,Ac),{c:e,g:n}}function Ba(i){const t=new Ve(i);return t.colorSpace=de,t.anisotropy=4,t}function Aa(i,t,e){i.save(),i.lineCap="round",i.lineJoin="round",i.translate(e*.35,e*.5),i.strokeStyle=Eg,i.lineWidth=e*1.25,i.beginPath(),t(),i.stroke(),i.translate(-e*.35,-e*.5),i.strokeStyle=Ag,i.lineWidth=e,i.beginPath(),t(),i.stroke(),i.translate(-e*.18,-e*.22),i.strokeStyle=Cg,i.globalAlpha=.55,i.lineWidth=e*.3,i.beginPath(),t(),i.stroke(),i.restore()}function Ca(i,t,e,n,s,o=0){Aa(i,()=>{for(let a=0;a<=26;a++){const c=a/26,l=o+s*c*Math.PI*2.4,h=n*(1-c*.78),u=t+Math.cos(l)*h-s*n*(1-c)*.9,d=e+Math.sin(l)*h;a===0?i.moveTo(u,d):i.lineTo(u,d)}},Math.max(2,n*.22))}function Qu(i,t,e){for(const[n,s]of t){i.fillStyle=Eg,i.beginPath(),i.arc(n+e*.25,s+e*.3,e,0,Math.PI*2),i.fill();const o=i.createRadialGradient(n-e*.3,s-e*.3,e*.1,n,s,e);o.addColorStop(0,Cg),o.addColorStop(1,Ag),i.fillStyle=o,i.beginPath(),i.arc(n,s,e,0,Math.PI*2),i.fill()}}function da(i,t,e,n,s){const o=i.createLinearGradient(t,e,t+n,e+s);return o.addColorStop(0,"#b9852f"),o.addColorStop(.45,"#f0c96a"),o.addColorStop(1,"#a8752a"),i.fillStyle=o,o}const Rg=i=>new mt({map:i,alphaTest:.35,metalness:.8,roughness:.22,emissive:"#ffa826",emissiveMap:i,emissiveIntensity:.48,side:Re});function Cc(i,t,e,n){const s=t/2,o=t/2-n;i.beginPath(),i.moveTo(s-o*.82,e-n),i.bezierCurveTo(s-o*1.08,e*.62,s-o*1.02,e*.3,s-o*.55,e*.14+n*.6),i.bezierCurveTo(s-o*.25,e*.05+n,s-o*.08,e*.06+n,s,n*.6),i.bezierCurveTo(s+o*.08,e*.06+n,s+o*.25,e*.05+n,s+o*.55,e*.14+n*.6),i.bezierCurveTo(s+o*1.02,e*.3,s+o*1.08,e*.62,s+o*.82,e-n),i.closePath()}let Rc=null;function IS(){if(Rc)return Rc;const i=768,t=1024,{c:e,g:n}=za(i,t);Cc(n,i,t,0),n.save(),n.clip(),da(n,0,0,i,t),n.fillRect(0,0,i,t),n.restore();for(let c=0;c<46;c++){const l=c/45,h=Math.PI*(1.05+l*.9),u=i/2+Math.cos(h)*i*.44,d=t*.52+Math.sin(h)*t*.5;Ca(n,u,d,15,c%2?1:-1,h)}Cc(n,i,t,46),n.fillStyle=jd,n.fill(),n.save(),Cc(n,i,t,46),n.clip(),n.globalAlpha=.72,n.fillStyle=da(n,0,0,i,t),n.fillRect(0,0,i,t),n.restore(),n.save(),Cc(n,i,t,46),n.clip();for(let c=120;c<t;c+=74)for(let l=40+c/74%2*40;l<i;l+=82)Ca(n,l,c,22,(l+c)%2?1:-1);n.restore();const s=[];for(let c=0;c<=60;c++){const l=c/60,h=Math.PI*(1+l);s.push([i/2+Math.cos(h)*i*.4,t*.55+Math.sin(h)*t*.45])}Qu(n,s,7);const o=i/2,r=t*.36,a=i*.2;n.fillStyle=da(n,o-a,r-a,a*2,a*2),n.beginPath(),n.arc(o,r,a,0,Math.PI*2),n.fill();for(let c=0;c<36;c++){const l=c/36*Math.PI*2;Aa(n,()=>{n.moveTo(o+Math.cos(l)*a*.35,r+Math.sin(l)*a*.35),n.lineTo(o+Math.cos(l)*a*.85,r+Math.sin(l)*a*.85)},3)}for(const c of[a,a*.32]){const l=[],h=Math.round(c/6);for(let u=0;u<h;u++)l.push([o+Math.cos(u/h*Math.PI*2)*c,r+Math.sin(u/h*Math.PI*2)*c]);Qu(n,l,5)}return Rc=Ba(e),Rc}function kS(i){
  const g=new it;
  const back=new z(new We(i*.82,i*1.08).translate(0,i*.54,0),Rg(IS()));
  back.receiveShadow=!0;
  g.add(back);
  const rimMat=k.gold();
  const flameOuter=new z(new Ge(i*.46,i*.022,12,48,Math.PI*1.35),rimMat);
  flameOuter.position.set(0,i*.56,.015);
  flameOuter.rotation.z=-Math.PI*.675;
  g.add(flameOuter);
  for(let p=0;p<12;p++){
    const ang=-Math.PI*.58+(p/11)*Math.PI*1.16;
    const rad=i*.48;
    const fx=Math.cos(ang)*rad, fy=i*.54+Math.sin(ang)*rad*1.08;
    const flameTip=Lt(new rn(i*.026,i*.16,6),rimMat,fx,fy,.02);
    flameTip.rotation.z=ang-Math.PI/2+(p%2?.25:-.25);
    g.add(flameTip);
  }
  const headHalo=new z(new Ge(i*.26,i*.018,12,48),rimMat);
  headHalo.position.set(0,i*.64,.025);
  g.add(headHalo);
  const auraDisc=new z(new Yn(i*.25,36),new mt({color:"#ffc857",emissive:"#ffa726",emissiveIntensity:.75,transparent:!0,opacity:.85,side:Re}));
  auraDisc.position.set(0,i*.64,.022);
  g.add(auraDisc);
  const rayMat=new mt({color:"#ffe082",emissive:"#ffb300",emissiveIntensity:.85,transparent:!0,opacity:.7});
  for(let r=0;r<14;r++){
    const rang=(r/14)*Math.PI*2;
    const ray=Lt(new ft(i*.005,i*.01,i*.2,6),rayMat,Math.cos(rang)*i*.28,i*.64+Math.sin(rang)*i*.28,.028);
    ray.rotation.z=rang-Math.PI/2;
    g.add(ray);
  }
  return g;
}const am=new Map;function NS(i){const t=i.toFixed(1);let e=am.get(t);if(e)return e;const n=384,s=Math.round(n*i),{c:o,g:r}=za(s,n),a=d=>n*.42+n*.55*Math.pow(Math.abs(d/s-.5)*2,2.2);r.beginPath(),r.moveTo(0,0),r.lineTo(s,0),r.lineTo(s,n);for(let d=s;d>=0;d-=24)r.quadraticCurveTo(d-12,a(d-12)+16,d-24,a(d-24));r.closePath(),r.save(),r.clip(),r.fillStyle=jd,r.fillRect(0,0,s,n),r.fillStyle=da(r,0,0,s,46),r.fillRect(0,0,s,46);const c=[];for(let d=14;d<s;d+=22)c.push([d,52]);Qu(r,c,6);for(let d=86;d<n;d+=54)for(let f=30+d/54%2*30;f<s;f+=62)d<a(f)-10&&Ca(r,f,d,19,(f/62+d/54)%2>.5?1:-1);const l=s/2,h=n*.3,u=n*.17;r.fillStyle=da(r,l-u,h-u,u*2,u*2),r.beginPath(),r.arc(l,h,u,0,Math.PI*2),r.fill();for(let d=0;d<12;d++){const f=d/12*Math.PI*2;Aa(r,()=>{r.ellipse(l+Math.cos(f)*u*.55,h+Math.sin(f)*u*.55,u*.32,u*.13,f,0,Math.PI*2)},3)}return r.restore(),Aa(r,()=>{r.moveTo(0,a(0));for(let d=0;d<=s;d+=24)r.quadraticCurveTo(d+12,a(d+12)+16,d+24,a(d+24))},7),e=Ba(o),am.set(t,e),e}function cm(i,t){return new z(new We(i,t).translate(0,-t/2,0),Rg(NS(i/t)))}let Pc=null;function lm(i){if(!Pc){const{c:s,g:o}=za(512,128);o.fillStyle=jd,o.fillRect(0,0,512,128),o.fillStyle=LS,o.fillRect(0,14,512,100);for(const r of[7,121])Aa(o,()=>{o.moveTo(0,r),o.lineTo(512,r)},6);for(let r=32;r<512;r+=64)Ca(o,r,128/2-8,20,1),Ca(o,r+32,128/2+10,20,-1);Pc=Ba(s),Pc.wrapS=Gs}const t=Pc.clone();return t.repeat.set(i,1),t.needsUpdate=!0,new mt({map:t,metalness:.35,roughness:.45,emissive:"#ffffff",emissiveMap:t,emissiveIntensity:.12})}function DS(i,t){const n=Math.round(1024*t/i),{c:s,g:o}=za(1024,n);o.fillStyle="#e8b52c",o.fillRect(0,0,1024,n);for(let h=0;h<1024;h+=32){const u=o.createLinearGradient(h,0,h+32,0);u.addColorStop(0,"rgba(255,255,255,0.0)"),u.addColorStop(.5,"rgba(255,240,190,0.25)"),u.addColorStop(1,"rgba(120,70,0,0.12)"),o.fillStyle=u,o.fillRect(h,0,32,n)}o.strokeStyle="#b3261a",o.lineWidth=n*.08,o.strokeRect(n*.06,n*.06,1024-n*.12,n-n*.12);const r=1024/2,a=n/2,c=n*.28;for(let h=0;h<8;h++){const u=h/8*Math.PI*2-Math.PI/2;o.fillStyle="#c0392b",o.beginPath(),o.ellipse(r+Math.cos(u)*c*.55,a+Math.sin(u)*c*.55,c*.5,c*.2,u,0,Math.PI*2),o.fill()}return o.fillStyle="#f6d36b",o.beginPath(),o.arc(r,a,c*.3,0,Math.PI*2),o.fill(),new z(new We(i,t),new mt({map:Ba(s),roughness:.75}))}let Lc=null;function US(){if(Lc)return Lc;const i=512,t=512,{c:e,g:n}=za(i,t);n.fillStyle="#f2f1ea",n.fillRect(0,0,i,t);const s="#1f3f8f";n.fillStyle=s;for(const[o,r]of[[0,30],[92,10],[400,10],[470,42]])n.fillRect(0,o,i,r);n.strokeStyle=s,n.lineWidth=6,n.lineCap="round";for(let o=0;o<i;o+=128){n.beginPath(),n.moveTo(o,250),n.bezierCurveTo(o+30,160,o+90,160,o+128,250),n.stroke(),n.beginPath(),n.ellipse(o+64,215,26,34,0,0,Math.PI*2),n.fill();for(const r of[-1,1])n.beginPath(),n.ellipse(o+64+r*34,250,18,9,r*.6,0,Math.PI*2),n.fill()}for(let o=0;o<i;o+=32)n.beginPath(),n.moveTo(o,470),n.quadraticCurveTo(o+16,410,o+32,470),n.stroke();return Lc=Ba(e),Lc}function OS(i){const t=[[0,0],[.16,0],[.18,.04],[.2,.25],[.28,.5],[.3,.62],[.25,.76],[.12,.86],[.1,.94],[.14,1],[.12,1]],e=new di(t.map(([s,o])=>new Q(s*i,o*i)),Tg?16:24),n=new z(e,new mt({map:US(),roughness:.18,metalness:.05}));return n.castShadow=!0,n}const Pg=matchMedia("(pointer: coarse)").matches,zS=Pg?.7:1,He=i=>Math.max(4,Math.round(i*zS)),Ue=(i,t={})=>new mt({color:i,roughness:.6,...t});let BS=null;function FS(){return{stem:Ue("#4f7a35",{roughness:.8}),leaf:Ue("#3f7d3a",{roughness:.7,side:Re}),lotus:Ue("#f39ab2",{emissive:"#f06a8c",emissiveIntensity:.1,side:Re}),lotusTip:Ue("#e0507a",{side:Re}),pod:Ue("#e8d36a"),mum:Ue("#f4c21f",{emissive:"#c98a00",emissiveIntensity:.12,roughness:.85}),lily:Ue("#fbf6ea",{emissive:"#ffffff",emissiveIntensity:.06,side:Re}),gold:Ue("#d9a443",{metalness:.7,roughness:.32}),banana:Ue("#d8c43a",{roughness:.55}),bananaGreen:Ue("#9cb83c",{roughness:.55}),pomelo:Ue("#a9c24a",{roughness:.5}),orange:Ue("#f08a1c",{roughness:.45}),mango:Ue("#f2b52a",{roughness:.4}),dragon:Ue("#d8306b",{roughness:.45}),dragonScale:Ue("#7fae3a",{roughness:.6}),grape:Ue("#5b2a6e",{roughness:.3}),apple:Ue("#c4252c",{roughness:.35}),redLacquer:Ue("#9c2416",{roughness:.35}),chung:Ue("#2f6b2f",{roughness:.75}),string:Ue("#d9c79a",{roughness:.9}),sweetPink:Ue("#f28fb1",{roughness:.3}),sweetYellow:Ue("#f6d24a",{roughness:.3}),sweetGreen:Ue("#7cc576",{roughness:.3}),banhIn:Ue("#f7e9ef",{roughness:.8}),porcelain:Ue("#f6f3ec",{roughness:.2}),water:Ue("#bfe3f0",{roughness:.05,metalness:.1})}}const ri=()=>BS??=FS();function Ce(i,t,e,n,s,o,r=!1){const a=new z(t,e);return a.position.set(n,s,o),a.castShadow=r,i.add(a),a}function hm(i,t){const e=new it,n=new gt(1,He(8),He(5),0,Math.PI*2,0,Math.PI/2),s=t>.3?[[6,1,.55+t*.6],[5,.75,.25+t*.35]]:[[5,1,.12]];for(const[o,r,a]of s)for(let c=0;c<o;c++){const l=c/o*Math.PI*2+(r<1?.4:0),h=Ce(e,n,ri().lotus,0,0,0);h.scale.set(i*.42*r,i*1.1*r,i*.18*r),h.rotation.set(0,-l,0,"YXZ"),h.rotateX(a),h.position.set(Math.sin(l)*i*.12,0,Math.cos(l)*i*.12)}return t>.3?Ce(e,new ft(i*.22,i*.18,i*.25,He(10)),ri().pod,0,i*.2,0):Ce(e,new rn(i*.18,i*.5,He(8)),ri().lotusTip,0,i*1.15,0),e}function HS(i){const t=new it,e=Ce(t,new Ws(i,Pg?1:2),ri().mum,0,0,0);return e.scale.y=.75,t}function GS(i){const t=new it,e=new ft(i*.45,i*.06,i*1.3,He(10),1,!0);for(let n=0;n<3;n++){const s=n/3*Math.PI*2;Ce(t,e,ri().lily,Math.sin(s)*i*.35,0,Math.cos(s)*i*.35).rotation.set(Math.cos(s)*.9,0,-Math.sin(s)*.9)}return t}function VS(i){const t=new gt(1,He(6),He(4));return t.scale(i*.22,i,i*.04),t.translate(0,i,0),t}function um(i){const t=new it,e=new ft(.012*i,.012*i,1,He(5)),n=(r,a,c,l)=>{const h=Math.sin(a)*c*i,u=Math.cos(a)*c*i,d=l*i,f=Math.hypot(h,d,u),p=Ce(t,e,ri().stem,h/2,d/2,u/2);p.scale.y=f,p.lookAt(h,d,u),p.rotateX(Math.PI/2);const v=r==="bud"?hm(.16*i,0):r==="lotus"?hm(.17*i,1):r==="mum"?HS(.1*i):GS(.14*i);v.position.set(h,d,u),v.rotation.set(Math.cos(a)*c*.9,0,-Math.sin(a)*c*.9),t.add(v)};n("bud",0,0,1),["lotus","lily","mum","lotus","lily","mum"].forEach((r,a)=>n(r,a/6*Math.PI*2+.3,.22,.84));for(let r=0;r<9;r++)n(r%3===1?"bud":r%3===2?"lily":"mum",r/9*Math.PI*2,.38,.64);for(let r=0;r<8;r++)n(r%2?"mum":"lotus",r/8*Math.PI*2+.2,.48,.42);const o=VS(.4*i);for(let r=0;r<12;r++){const a=r/12*Math.PI*2+.2,c=Ce(t,o,ri().leaf,0,.05*i,0);c.rotation.set(Math.cos(a)*.9,0,-Math.sin(a)*.9),c.rotateY(a)}return t}function $S(i){const t=new it,e=[[0,0],[.55,0],[.5,.08],[.22,.16],[.17,.8],[.28,.88],[1,.98],[1.02,1.04],[0,1.02]].map(([n,s])=>new Q(n*i,s*i));return Ce(t,new di(e,He(20)),ri().gold,0,0,0,!0),{g:t,top:1.02*i}}function WS(i,t,e,n){const s=ri().bananaGreen;for(let o=0;o<6;o++){const r=-.9+o/5*1.8,a=new Id(new _(0,0,0),new _(Math.sin(r)*.35*t,.02*t,Math.cos(r)*.35*t),new _(Math.sin(r)*.55*t,.22*t,Math.cos(r)*.55*t)),c=Ce(i,new li(a,He(8),.06*t,He(6),!1),s,0,e,-.25*t);c.castShadow=!1}}function qS(i){const{g:t,top:e}=$S(i),n=ri();WS(t,i*1.1,e);const s=c=>new gt(c*1.3*i,He(12),He(9));for(let c=0;c<4;c++){const l=c/4*Math.PI*2+.4;Ce(t,s(.2),c%2?n.orange:n.apple,Math.sin(l)*.48*i,e+.2*i,Math.cos(l)*.45*i)}Ce(t,s(.2),n.mango,-.3*i,e+.22*i,.35*i).scale.set(.8,.75,1.35),Ce(t,s(.22),n.dragon,.34*i,e+.25*i,.3*i).scale.set(1,1.25,1);for(let c=0;c<6;c++){const l=c/6*Math.PI*2;Ce(t,new rn(.05*i,.14*i,4),n.dragonScale,.34*i+Math.sin(l)*.2*i,e+(.25+c%2*.12)*i,.3*i+Math.cos(l)*.2*i).rotation.set(Math.cos(l)*1.2,0,-Math.sin(l)*1.2)}for(let c=0;c<9;c++)Ce(t,s(.07),n.grape,(-.08+c%3*.08)*i,e+(.12-Math.floor(c/3)*.08)*i,.62*i);const a=Ce(t,s(.36),n.pomelo,0,e+.68*i,-.02*i,!0);return a.scale.y=.92,Ce(t,new rn(.06*i,.1*i,He(6)),n.stem,0,e+1.12*i,-.02*i),t}function XS(i,t){const e=new it,n=ri(),s=.22*i;Ce(e,new ft(.16*i,.24*i,s,He(14)),n.gold,0,s/2,0),Ce(e,new ft(.5*i,.42*i,.05*i,He(20)),n.redLacquer,0,s+.025*i,0),Ce(e,new Ge(.48*i,.015*i,4,He(20)),n.gold,0,s+.05*i,0).rotation.x=Math.PI/2;const o=s+.05*i;if(t==="chung"){for(const[r,a,c]of[[-.18,.05,.2],[.17,-.06,-.15]]){const l=Ce(e,new Wt(.3*i,.12*i,.3*i),n.chung,r*i,o+.06*i,a*i,!0);l.rotation.y=c;for(const h of[0,Math.PI/2]){const u=Ce(e,new Wt(.31*i,.125*i,.025*i),n.string,r*i,o+.06*i,a*i);u.rotation.y=c+h}}Ce(e,new ft(.15*i,.15*i,.12*i,He(16)),n.redLacquer,0,o+.18*i,.25*i),Ce(e,new ft(.155*i,.155*i,.03*i,He(16)),n.gold,0,o+.25*i,.25*i)}else{const r=[n.sweetPink,n.sweetYellow,n.sweetGreen];for(let a=0;a<10;a++){const c=a*2.1,l=.08+a%4*.06;Ce(e,new Ar(.035*i,.07*i,2,He(6)),r[a%3],Math.sin(c)*l*i-.08*i,o+(.04+(a>6?.05:0))*i,Math.cos(c)*l*i).rotation.set(Math.PI/2,c,0)}for(let a=0;a<4;a++)Ce(e,new ft(.08*i,.08*i,.05*i,He(10)),n.banhIn,.24*i,o+(.03+a*.055)*i,-.05*i)}return e}function jS(i){const t=new it,e=ri();for(const n of[-.3,0,.3])Ce(t,new ft(.12*i,.1*i,.02*i,He(12)),e.porcelain,n*i,.01*i,0),Ce(t,new ft(.075*i,.05*i,.09*i,He(12),1,!0),e.porcelain,n*i,.065*i,0),Ce(t,new Yn(.07*i,He(12)),e.water,n*i,.1*i,0).rotation.x=-Math.PI/2;return t}const Lh=[{name:"Cung Tỳ La",meaning:"Cực Úy",skin:"#e3b23c",skinName:"vàng",weapon:"xu",weaponName:"bảo xử",avatar:"Di Lặc Bồ Tát",zodiac:"Hợi",branch:"亥"},{name:"Phạt Chiết La",meaning:"Kim Cang",skin:"#efe6d4",skinName:"trắng",weapon:"kiem",weaponName:"bảo kiếm",avatar:"Đại Thế Chí Bồ Tát",zodiac:"Tuất",branch:"戌"},{name:"Mê Súy La",meaning:"Chấp Nghiêm",skin:"#e3b23c",skinName:"vàng",weapon:"bong",weaponName:"bảo bổng",avatar:"A Di Đà Phật",zodiac:"Dậu",branch:"酉"},{name:"An Để La",meaning:"Chấp Tinh",skin:"#4f9a5e",skinName:"xanh lục",weapon:"chuy",weaponName:"bảo chùy",avatar:"Quán Thế Âm Bồ Tát",zodiac:"Thân",branch:"申"},{name:"Át Nể La",meaning:"Chấp Phong",skin:"#c9452c",skinName:"đỏ",weapon:"xoa",weaponName:"bảo xoa",avatar:"Ma Lợi Chi Bồ Tát",zodiac:"Mùi",branch:"未"},{name:"San Để La",meaning:"Cư Ngoại",skin:"#7391a8",skinName:"lam khói",weapon:"loa",weaponName:"loa bối",avatar:"Hư Không Tạng Bồ Tát",zodiac:"Ngọ",branch:"午"},{name:"Nhân Đạt La",meaning:"Chấp Lực",skin:"#c9452c",skinName:"đỏ",weapon:"mau",weaponName:"cây mâu",avatar:"Địa Tạng Bồ Tát",zodiac:"Tỵ",branch:"巳"},{name:"Ba Di La",meaning:"Chấp Ẩm",skin:"#c9452c",skinName:"đỏ",weapon:"cung",weaponName:"cung tên",avatar:"Văn Thù Bồ Tát",zodiac:"Thìn",branch:"辰"},{name:"Ma Hổ La",meaning:"Chấp Ngôn",skin:"#efe6d4",skinName:"trắng",weapon:"riu",weaponName:"rìu báu",avatar:"Đại Uy Đức Minh Vương",zodiac:"Mão",branch:"卯"},{name:"Chân Đạt La",meaning:"Chấp Tưởng",skin:"#e3b23c",skinName:"vàng",weapon:"day",weaponName:"quyên sách",avatar:"Phổ Hiền Bồ Tát",zodiac:"Dần",branch:"寅"},{name:"Chiêu Đổ La",meaning:"Chấp Động",skin:"#3f6fb5",skinName:"xanh lam",weapon:"chuy",weaponName:"bảo chùy",avatar:"Kim Cang Thủ Bồ Tát",zodiac:"Sửu",branch:"丑"},{name:"Tỳ Yết La",meaning:"Viên Tác",skin:"#c9452c",skinName:"đỏ",weapon:"luan",weaponName:"bảo luân",avatar:"Thích Ca Mâu Ni Phật",zodiac:"Tý",branch:"子"}],gn=512,Ko=896,_i="#3a1606",Ye="#d9a640",ho="#f4d27c",Yc="Lora, Georgia, serif",fa='"Be Vietnam Pro", system-ui, sans-serif';function ae(i,t,e,n=3){i.beginPath(),e(),i.fillStyle=t,i.fill(),i.lineWidth=n,i.strokeStyle=_i,i.stroke()}function Un(i,t,e,n){i.lineCap=i.lineJoin="round",i.beginPath(),t.forEach(([s,o],r)=>r?i.lineTo(s,o):i.moveTo(s,o)),i.strokeStyle=_i,i.lineWidth=e+6,i.stroke(),i.strokeStyle=n,i.lineWidth=e,i.stroke()}function YS(i,t){const e=new Dt(i);return e.multiplyScalar(t),`#${e.getHexString()}`}function KS(i){const t=i.createRadialGradient(256,380,40,256,380,260);t.addColorStop(0,"rgba(255,214,120,0.55)"),t.addColorStop(.6,"rgba(230,110,40,0.35)"),t.addColorStop(1,"rgba(120,20,10,0)"),i.fillStyle=t,i.fillRect(0,100,gn,600);for(let e=0;e<26;e++){const n=Math.PI*(1.06+e/25*.88)+e%2*.03,s=205+e%3*14,o=256+Math.cos(n)*s*.82,r=400+Math.sin(n)*s*1.2,a=46+e%4*10,c=Math.cos(n)*a*.7,l=Math.sin(n)*a-18;for(const[h,u]of[["#b8321a",1],["#ee7a2a",.66],["#ffd56b",.34]])i.beginPath(),i.moveTo(o-16*u,r+8*u),i.quadraticCurveTo(o-6*u+c*.4,r+l*.4,o+c*u,r+l*u),i.quadraticCurveTo(o+10*u+c*.3,r+l*.3,o+16*u,r+8*u),i.closePath(),i.fillStyle=h,i.fill()}}function ZS(i){for(const[t,e,n]of[[120,690,40],[180,676,46],[256,684,54],[332,676,46],[392,690,40],[70,700,30],[442,700,30]])ae(i,"#e8eef0",()=>i.arc(t,e,n,Math.PI,0),3),i.beginPath(),i.arc(t,e-n*.2,n*.45,Math.PI*1.1,Math.PI*1.9),i.strokeStyle="#7ea4b0",i.lineWidth=3,i.stroke();i.fillStyle="#e8eef0",i.fillRect(40,690,432,14)}function JS(i,t,e,n){const s=(o,r,a="#7a4a1e",c=10)=>Un(i,[[e,o],[e,r]],c,a);switch(t){case"xu":{s(150,560,Ye,10);for(const o of[150,560]){ae(i,ho,()=>i.ellipse(e,o,12,16,0,0,Math.PI*2));for(const r of[-1,1])Un(i,[[e,o],[e+r*16,o+(o<300?-22:22)],[e+r*6,o+(o<300?-36:36)]],5,Ye)}break}case"kiem":ae(i,"#dfe6ea",()=>{i.moveTo(e-9,n-18),i.lineTo(e-7,120),i.lineTo(e,98),i.lineTo(e+7,120),i.lineTo(e+9,n-18)}),ae(i,Ye,()=>i.rect(e-26,n-26,52,10)),s(n-16,n+30,"#6a2a14",10);break;case"bong":Un(i,[[e,n+60],[e,150]],18,"#8a5222"),ae(i,Ye,()=>i.rect(e-12,150,24,18)),ae(i,Ye,()=>i.rect(e-11,n+40,22,14));break;case"chuy":s(170,n+60),ae(i,Ye,()=>i.arc(e,160,30,0,Math.PI*2));for(let o=0;o<8;o++){const r=o/8*Math.PI*2;ae(i,ho,()=>{i.moveTo(e+Math.cos(r)*26,160+Math.sin(r)*26),i.lineTo(e+Math.cos(r+.2)*40,160+Math.sin(r+.2)*40),i.lineTo(e+Math.cos(r+.4)*26,160+Math.sin(r+.4)*26)},2)}break;case"xoa":s(170,600),Un(i,[[e-34,130],[e-34,170],[e+34,170],[e+34,130]],7,Ye),Un(i,[[e,170],[e,110]],8,Ye);for(const o of[e-34,e,e+34])ae(i,ho,()=>{i.moveTo(o-7,o===e?112:132),i.lineTo(o,o===e?92:112),i.lineTo(o+7,o===e?112:132)},2);break;case"loa":ae(i,"#f6efe2",()=>{i.moveTo(e-10,n+10),i.quadraticCurveTo(e-46,n-40,e-4,n-86),i.quadraticCurveTo(e+40,n-40,e+14,n+10),i.closePath()});for(let o=0;o<4;o++)i.beginPath(),i.arc(e-2,n-40+o*10,18-o*3,Math.PI*1.1,Math.PI*1.9),i.strokeStyle="#c9a77a",i.lineWidth=3,i.stroke();break;case"mau":s(150,610),ae(i,"#dfe6ea",()=>{i.moveTo(e-13,160),i.lineTo(e,92),i.lineTo(e+13,160),i.closePath()}),ae(i,"#c0392b",()=>{i.moveTo(e-16,160),i.lineTo(e+16,160),i.lineTo(e,196),i.closePath()},2);break;case"cung":i.beginPath(),i.moveTo(e,150),i.quadraticCurveTo(e-90,n+20,e,560),i.strokeStyle=_i,i.lineWidth=14,i.stroke(),i.strokeStyle="#8a5222",i.lineWidth=8,i.stroke(),Un(i,[[e,150],[e,560]],2,"#f0e6d0"),Un(i,[[e+6,200],[e+6,470]],4,"#7a4a1e"),ae(i,"#dfe6ea",()=>{i.moveTo(e-2,200),i.lineTo(e+6,176),i.lineTo(e+14,200),i.closePath()},2);break;case"riu":s(150,580),ae(i,"#dfe6ea",()=>{i.moveTo(e+4,160),i.quadraticCurveTo(e+70,150,e+64,214),i.quadraticCurveTo(e+40,200,e+4,214),i.closePath()});break;case"day":for(let o=0;o<4;o++)i.beginPath(),i.ellipse(e,n+30+o*6,30-o*3,18,0,0,Math.PI*2),i.strokeStyle=_i,i.lineWidth=9,i.stroke(),i.strokeStyle="#d8b46a",i.lineWidth=5,i.stroke();Un(i,[[e,n+48],[e-10,n+120],[e+6,n+170]],5,"#d8b46a");break;case"luan":i.beginPath(),i.arc(e,n-70,52,0,Math.PI*2),i.strokeStyle=_i,i.lineWidth=16,i.stroke(),i.strokeStyle=Ye,i.lineWidth=10,i.stroke();for(let o=0;o<8;o++){const r=o/8*Math.PI*2;Un(i,[[e,n-70],[e+Math.cos(r)*50,n-70+Math.sin(r)*50]],4,Ye)}ae(i,ho,()=>i.arc(e,n-70,12,0,Math.PI*2));break}}function QS(i,t){const e=t.skin,n=YS(e,.72),s="#a3281b";i.beginPath(),i.arc(256,240,74,0,Math.PI*2),i.fillStyle="rgba(255,226,140,0.35)",i.fill(),i.lineWidth=6,i.strokeStyle=Ye,i.stroke();for(const o of[-1,1])i.beginPath(),i.moveTo(256+o*50,300),i.bezierCurveTo(256+o*170,320,256+o*120,470,256+o*190,600),i.strokeStyle=_i,i.lineWidth=24,i.stroke(),i.strokeStyle="#2f8a80",i.lineWidth=18,i.stroke();for(const o of[-1,1])ae(i,"#5a1a10",()=>{i.moveTo(256+o*18,560),i.lineTo(256+o*54,560),i.lineTo(256+o*60,646),i.lineTo(256+o*12,646),i.closePath()}),ae(i,Ye,()=>i.rect(256+o*18-(o<0?36:0),560,36,12),2),ae(i,"#2a0c06",()=>i.ellipse(256+o*40,650,34,12,0,0,Math.PI*2));ae(i,s,()=>{i.moveTo(196,450),i.lineTo(316,450),i.lineTo(352,590),i.lineTo(160,590),i.closePath()});for(const o of[-1,1]){ae(i,Ye,()=>{i.moveTo(256+o*2,452),i.lineTo(256+o*64,452),i.lineTo(256+o*78,578),i.lineTo(256+o*8,590),i.closePath()}),i.strokeStyle="#9a6a22",i.lineWidth=2;for(let r=466;r<584;r+=13)for(let a=10;a<74;a+=14)i.beginPath(),i.arc(256+o*(a+r/13%2*7),r,7,0,Math.PI),i.stroke()}ae(i,ho,()=>i.arc(256,462,24,0,Math.PI*2)),i.fillStyle=_i;for(const o of[-1,1])i.beginPath(),i.arc(256+o*9,456,4,0,Math.PI*2),i.fill();i.fillRect(246,468,20,4),ae(i,Ye,()=>{i.moveTo(206,300),i.lineTo(306,300),i.lineTo(298,440),i.lineTo(214,440),i.closePath()}),ae(i,"#fbe7a8",()=>i.arc(256,356,30,0,Math.PI*2)),i.strokeStyle="#b8862e",i.lineWidth=2,i.beginPath(),i.arc(256,356,20,0,Math.PI*2),i.stroke();for(let o=0;o<12;o++){const r=o/12*Math.PI*2;i.beginPath(),i.moveTo(256+Math.cos(r)*21,356+Math.sin(r)*21),i.lineTo(256+Math.cos(r)*28,356+Math.sin(r)*28),i.stroke()}ae(i,Ye,()=>i.arc(256,356,7,0,Math.PI*2),2);for(const o of[-1,1])Un(i,[[256+o*46,304],[256+o*26,334]],7,"#a3281b");ae(i,s,()=>i.rect(208,428,96,18));for(const o of[-1,1])ae(i,Ye,()=>i.ellipse(256+o*62,308,32,22,o*.3,0,Math.PI*2)),i.fillStyle=_i,i.beginPath(),i.arc(256+o*62,306,5,0,Math.PI*2),i.fill();Un(i,[[192,318],[150,372],[160,300]],28,e),Un(i,[[156,352],[160,304]],24,Ye),Un(i,[[320,318],[354,384],[320,432]],28,e),Un(i,[[350,396],[324,428]],24,Ye),JS(i,t.weapon,160,292),ae(i,e,()=>i.arc(160,292,15,0,Math.PI*2)),ae(i,e,()=>i.arc(318,434,14,0,Math.PI*2)),ae(i,n,()=>i.rect(240,274,32,30)),ae(i,e,()=>i.ellipse(256,246,42,48,0,0,Math.PI*2));for(const o of[-1,1])ae(i,e,()=>i.ellipse(256+o*44,250,8,14,0,0,Math.PI*2),2);i.fillStyle=_i;for(const o of[-1,1])i.beginPath(),i.moveTo(256+o*6,232),i.lineTo(256+o*34,220),i.lineTo(256+o*36,228),i.lineTo(256+o*8,240),i.closePath(),i.fill(),ae(i,"#fffaf0",()=>i.ellipse(256+o*18,246,10,8,0,0,Math.PI*2),2),i.fillStyle=_i,i.beginPath(),i.arc(256+o*17,246,4.5,0,Math.PI*2),i.fill();ae(i,n,()=>i.ellipse(256,262,9,7,0,0,Math.PI*2),2),ae(i,"#5a0e08",()=>i.ellipse(256,280,16,8,0,0,Math.PI*2),2),i.fillStyle="#fffaf0";for(const o of[-1,1])i.beginPath(),i.moveTo(256+o*12,274),i.lineTo(256+o*8,284),i.lineTo(256+o*4,274),i.fill();i.strokeStyle=_i,i.lineWidth=4;for(const o of[-1,1])i.beginPath(),i.moveTo(256+o*14,272),i.quadraticCurveTo(256+o*40,270,256+o*44,290),i.quadraticCurveTo(256+o*30,300,256+o*34,288),i.stroke();ae(i,Ye,()=>{i.moveTo(212,236),i.quadraticCurveTo(212,190,256,186),i.quadraticCurveTo(300,190,300,236),i.lineTo(312,226),i.lineTo(306,248),i.lineTo(290,226),i.quadraticCurveTo(256,212,222,226),i.lineTo(206,248),i.lineTo(200,226),i.closePath()});for(const[o,r,a]of[[0,62,"#c0321c"],[-20,42,"#e0672a"],[20,42,"#e0672a"],[0,34,"#ffd36a"]])ae(i,a,()=>{i.moveTo(256+o-14,192),i.quadraticCurveTo(256+o-12,192-r*.6,256+o+4,192-r),i.quadraticCurveTo(256+o+4,192-r*.45,256+o+14,192),i.closePath()},2)}function tT(i,t){ae(i,"#fbf3dc",()=>i.arc(256,210,17,0,Math.PI*2),3),i.fillStyle="#a3281b",i.font="600 22px serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t.branch,256,211)}function dm(i,t,e){const n=document.createElement("canvas");n.width=gn,n.height=Ko;const s=n.getContext("2d"),o=s.createLinearGradient(0,0,0,Ko);return o.addColorStop(0,"#5e1610"),o.addColorStop(1,"#320a06"),s.fillStyle=o,s.fillRect(0,0,gn,Ko),KS(s),ZS(s),s.save(),e&&(s.translate(gn,0),s.scale(-1,1)),QS(s,i),s.restore(),tT(s,i),s.fillStyle="#2a0805",s.fillRect(24,22,gn-48,90),s.strokeStyle=Ye,s.lineWidth=3,s.strokeRect(30,28,gn-60,78),s.textAlign="center",s.textBaseline="middle",s.fillStyle="#e9c77a",s.font=`500 19px ${fa}`,s.fillText(`Dược Xoa Đại Tướng thứ ${t}`,gn/2,48),s.fillStyle=ho,s.font=`600 38px ${Yc}`,s.fillText(i.name,gn/2,84),s.fillStyle="#2a0805",s.fillRect(24,714,gn-48,158),s.strokeStyle=Ye,s.strokeRect(30,720,gn-60,146),s.fillStyle="#e9c77a",s.font=`500 20px ${fa}`,s.fillText(`Nghĩa là “${i.meaning}”`,gn/2,744),s.fillStyle=ho,s.font=`600 25px ${Yc}`,s.fillText(`Hóa thân ${i.avatar}`,gn/2,780),s.font=`600 27px ${Yc}`,s.fillStyle="#ffe39a",s.fillText(`Hộ trì người tuổi ${i.zodiac}`,gn/2,816),s.fillStyle="#e9c77a",s.font=`400 19px ${fa}`,s.fillText(`Thân ${i.skinName} · tay cầm ${i.weaponName}`,gn/2,850),s.strokeStyle=Ye,s.lineWidth=8,s.strokeRect(6,6,gn-12,Ko-12),s.lineWidth=2,s.strokeRect(16,16,gn-32,Ko-32),n}function eT(i,t,e,n=1.4,s=.95){const o=new it,r=n*(Ko/gn),a=t+s,c=[],l=(d,f,p)=>{const v=f>0;o.add(St(.1,r+.3,n+.3,k.lacquer(),f*(i-.05),a-.15,p)),o.add(St(.06,r+.1,n+.1,k.gold(),f*(i-.12),a-.05,p));const m=new Ve(dm(Lh[d],d+1,v));m.colorSpace=de,m.anisotropy=8,c.push({t:m,k:d,mirror:v});const g=new mt({map:m,roughness:.6,emissive:"#ffffff",emissiveMap:m,emissiveIntensity:.22}),x=new z(new We(n,r),g);x.position.set(f*(i-.16),a+r/2,p),x.rotation.y=-f*Math.PI/2,o.add(x)};e.forEach((d,f)=>l(f,-1,d)),[...e].reverse().forEach((d,f)=>l(6+f,1,d));const h=Lh.map(d=>d.name+d.avatar+d.zodiac+d.meaning).join("")+"Dược Xoa Đại Tướng thứ Hóa thân Hộ trì người tuổi tay cầm",u=[`600 38px ${Yc}`,`500 20px ${fa}`,`400 19px ${fa}`];return u.every(d=>document.fonts.check(d,h))||Promise.all(u.map(d=>document.fonts.load(d,h))).then(()=>{for(const{t:d,k:f,mirror:p}of c)d.image=dm(Lh[f],f+1,p),d.needsUpdate=!0}),o}const Ie=40,Jn=-2,Qn=-30,_n=8,Ih=[-11.25,-17.75,-24.25];function nT(){const i=[],t=(n,s,o,r,a=1,c=1,l=1)=>{n.scale(a,c,l),n.translate(s,o,r),i.push(n.index?n.toNonIndexed():n)};return t(new ft(.2,.22,.08,8),0,.04,0),t(new gt(1,8,4),0,.14,.02,.2,.07,.13),t(new ft(.09,.13,.24,7),0,.3,0),t(new gt(.075,8,5),0,.5,.01),t(new gt(.03,5,3),0,.585,0),Tl(i.map(n=>{for(const s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);return n}))}function iT(i,t){const e=document.createElement("canvas");e.width=1024,e.height=Math.round(1024/i*t*1.25);const n=e.getContext("2d");n.fillStyle="#4a1a10",n.fillRect(0,0,e.width,e.height);const s=e.width/i,o=e.height/t;for(let a=0;a<t;a++)for(let c=0;c<i;c++){const l=c*s+s*.14,h=a*o+o*.12,u=s*.72,d=o*.8;n.fillStyle="#1e0c07",n.beginPath(),n.moveTo(l,h+d),n.lineTo(l,h+u/2),n.arc(l+u/2,h+u/2,u/2,Math.PI,0),n.lineTo(l+u,h+d),n.closePath(),n.fill(),n.strokeStyle="#d6a94e",n.lineWidth=3,n.stroke();const f=n.createRadialGradient(l+u/2,h+d*.55,2,l+u/2,h+d*.55,u*.6);f.addColorStop(0,"rgba(255,190,90,0.35)"),f.addColorStop(1,"rgba(255,190,90,0)"),n.fillStyle=f,n.fill()}const r=new Ve(e);return r.colorSpace=de,r}function td(i,t){const e=new it;e.add(St(1.4,.4,1.2,k.lacquer(),0,0,0));const n=Ir("guardian");if(n)return Zu(n,"robe",i),n.getObjectByName(t==="sword"?"staff":"sword")?.removeFromParent(),e.add(n),e;const s=new mt({color:i,roughness:.6,metalness:.2}),o=new mt({color:"#c99b70",roughness:.6}),r=Lt(new di([[0,0],[.62,0],[.55,.9],[.5,1.8],[.62,2.3],[.5,2.6],[.2,2.75],[0,2.75]].map(([u,d])=>new Q(u,d)),20),s,0,.4,0);e.add(r);const a=Lt(new ft(.56,.5,.7,16),k.gold(),0,2.45,.02);e.add(a);const c=Lt(new gt(.34,18,14),o,0,3.45,.05);e.add(c);const l=Lt(new rn(.36,.55,14),k.gold(),0,3.85,0);e.add(l);for(const u of[-1,1]){const d=Lt(new Ar(.14,.9,4,8),s,u*.7,2.5,.25);d.rotation.x=-.6,d.rotation.z=u*.2,e.add(d)}const h=t==="sword"?Lt(new Wt(.08,1.8,.2),k.whiteStone(),0,2.6,.75):Lt(new ft(.05,.05,3.2,8),k.gold(),.75,2.2,.55);return e.add(h),e}const Lg=[];function sT(){
  const i=rt.hall,t=i.y,e=rt.terrace.y,n=new Xd(0,t,0),s=new it;
  const o=i.x1-i.x0,r=i.z1-i.z0,a=(i.z0+i.z1)/2;
  s.add(St(o,t-e,r,k.laterite(),0,e,a));
  
  // Polished dark slate granite floor matching temple interior
  const floorMat=new mt({map:k.brick().map,color:"#222120",roughness:.36,metalness:.08,envMapIntensity:.25});
  const l=St(o-.2,.04,r-.2,floorMat,0,t,a);
  s.add(l),Bn.push(l),Da(0,a,o,r,t);
  
  // Entrance Stairs
  const h=4;
  for(let U=0;U<h;U++)s.add(St(i.stairHalf*2,(t-e)/h*(h-U),i.stairLen/h+.02,k.whiteStone(),0,e,i.z1+(U+.5)*(i.stairLen/h)));
  pg(0,i.stairHalf,i.z1+i.stairLen,i.z1,e,t),Ee(i.x0,a,.3,r),Ee(i.x1,a,.3,r);
  
  // Pillars
  const u=Ie/9,d=Array.from({length:10},(U,A)=>-Ie/2+u*A);
  for(const U of d)s.add(Ai(U,1.6,_n-.6,.36,t)),n.circle(U,1.6,.42),s.add(Ai(U,Jn,_n,.42,t)),n.circle(U,Jn,.5);
  for(const U of[-15.5,-8.9,8.9,15.5])for(const A of[-8,-14.5,-21])s.add(Ai(U,A,_n+.2,.46,t)),n.circle(U,A,.55);
  
  // Side Walls
  const f=Jn-Qn,p=(Jn+Qn)/2;
  for(const U of[-1,1]){
    const A=St(.6,_n,f,k.plaster(),U*Ie/2,t,p);
    s.add(A),Gi.push(A),n.block(U*Ie/2,p,.7,f);
    for(const at of Ih){
      const J=Lt(new Ge(1,.13,8,32),k.lacquer(),U*(Ie/2-.32),t+5.2,at);
      J.rotation.y=Math.PI/2,s.add(J);
      const vt=Lt(new Yn(.95,32),k.paperGlow(),U*(Ie/2-.31),t+5.2,at);
      vt.rotation.y=-U*Math.PI/2,s.add(vt);
    }
  }
  const v=St(Ie+.6,_n,.6,k.plaster(),0,t,Qn);
  s.add(v),Gi.push(v),n.block(0,Qn,Ie+.6,.7);
  s.add(St(Ie+1,.6,.5,k.lacquer(),0,t+_n-.6,1.6)),s.add(St(Ie+1,.6,.55,k.lacquer(),0,t+_n-.3,Jn));
  
  // Front Outer Grand Inscribed Board
  const m=_o(["大雄寶殿","ĐẠI HÙNG BẢO ĐIỆN"],7.5,1.9);
  m.position.set(0,t+_n-1.5,Jn+.32),s.add(m);
  
  // Front Outer Couplets
  const g=[[-u/2-u*0,"安心見佛"],[u/2,"緣起成蓮"],[-u*1.5,"慈悲喜捨"],[u*1.5,"福慧雙修"]];
  for(const[U,A]of g){
    const at=_o([A],.62,4.2,!0);
    at.position.set(U,t+3.4,1.6+.4),s.add(at);
  }
  
  // Inner Columns Golden Couplets (Matching reference photo)
  const sancCouplets=[
    [-8.9,t+3.8,-8,"佛日增輝法輪常轉"],
    [8.9,t+3.8,-8,"風調雨順國泰民安"],
    [-8.9,t+3.8,-14.5,"南流永信惠坡備睛正光"],
    [8.9,t+3.8,-14.5,"大雄寶德棟間雄運巍浮德"]
  ];
  for(const[cpx,cpy,cpz,cText]of sancCouplets){
    const couplet=_o([cText],.65,4.2,!0);
    couplet.position.set(cpx,cpy,cpz+.5),s.add(couplet);
  }
  
  // Hanging Buddhist Ceremonial Silk Banners (Phướn Ngũ Sắc - matching truoc_mat_tam_bao.png)
  const bannerColors=["#ffb300","#d32f2f","#ffffff","#ff6f00","#1976d2"];
  for(const bx of[-8.9,8.9]){
    const bz=-13.8;
    // Golden lotus canopy (bảo cái)
    const canopy=Lt(new ft(.45,.55,.2,16),k.gold(),bx,t+_n-.8,bz);
    s.add(canopy);
    // Vertical silk streamer bands
    for(let bi=0;bi<5;bi++){
      const sMat=new mt({color:bannerColors[bi],roughness:.75,side:Re});
      const streamer=new z(new We(.16,4.6),sMat);
      streamer.position.set(bx+(bi-2)*.14,t+_n-3.2,bz);
      s.add(streamer);
    }
  }
  
  // Hall Roof & Ceiling Timbers
  const x=(1.6+Qn)/2,b=(1.6-Qn)/2;
  const y=vn({a:Ie/2+3,b:b+3,r:Ie/2-2,h:2.6,lift:1.5});
  y.position.set(0,t+_n,x),s.add(y);
  s.add(St(Ie-5,3,b*2-6,k.plaster(),0,t+_n+1.4,x));
  const C=vn({a:Ie/2-.5,b:b-1.5,r:Ie/2-7,h:6,lift:1.6,dragons:!0});
  C.position.set(0,t+_n+4.2,x),s.add(C);
  
  const T=t+_n+.25,R=St(Ie,.1,b*2,k.timber(),0,T,x);
  R.castShadow=!1,s.add(R);
  for(let U=0;U<=9;U++){
    const A=St(.3,.4,b*2,k.lacquer(),-Ie/2+u*U,T-.4,x);
    A.castShadow=!1,s.add(A);
  }
  for(let U=0;U<=6;U++){
    const A=St(Ie,.3,.25,k.lacquer(),0,T-.3,1.6-b*2/6*U);
    A.castShadow=!1,s.add(A);
  }
  
  // Thousand Buddha back wall
  const L=30,S=6,M=Ie-1.4,I=_n-.4,H=2.6;
  const B=new z(new We(M,I-H),new mt({map:iT(L,S),roughness:.6,emissive:"#2a0d06",emissiveIntensity:.4}));
  B.position.set(0,t+(I+H)/2,Qn+.32),s.add(B);
  const $=new ci(nT(),k.gold(),L*S),K=new Vt,W=M/L,ot=(I-H)/S;
  let q=0;
  for(let U=0;U<S;U++)for(let A=0;A<L;A++)K.makeTranslation(-M/2+W*(A+.5),t+H+ot*(U+.12),Qn+.45),K.multiply(new Vt().makeScale(ot*1.2,ot*1.2,ot*1.2)),$.setMatrixAt(q++,K);
  s.add($);
  
  // Tam Bảo Tiered Plinth Platform
  const nt=Qn+3.4;
  s.add(St(22,1.4,3.6,k.lacquer(),0,t,nt));
  s.add(St(18,.9,2.6,k.lacquer(),0,t+1.4,nt-.4));
  for(const[U,A,at]of[[t+1.4,22.1,nt+1.8],[t+2.3,18.1,nt+.9]])s.add(St(A,.08,.08,k.gold(),0,U-.05,at));
  n.block(0,nt,22.4,4);
  
  // ==================== CỬA VÕNG VÀ HOÀNH PHI CAO (100% KHÔNG CHE MẶT PHẬT) ====================
  // Hoành Phi đặt ở xà gồ cao nhất sát mái (y = t + _n - 0.7 = 9.7m), HOÀN TOÀN TRÊN ĐỈNH ĐẦU VÀ HÀO QUANG PHẬT!
  const highBeamY=t+_n-.7;
  const highLintel=St(22.6,.45,.55,k.lacquer(),0,highBeamY,nt+.1);
  s.add(highLintel);
  s.add(St(22.8,.08,.62,k.gold(),0,highBeamY+.24,nt+.1));
  s.add(St(22.8,.08,.62,k.gold(),0,highBeamY-.24,nt+.1));
  
  // Bức Hoành Phi "ĐẠI HÙNG BẢO ĐIỆN" sơn then thếp vàng gắn trên xà cao nhất, không che mặt Phật
  const hoanhPhiSanctuary=_o(["大雄寶殿","ĐẠI HÙNG BẢO ĐIỆN"],6.2,1.35);
  hoanhPhiSanctuary.position.set(0,highBeamY,nt+.42);
  s.add(hoanhPhiSanctuary);
  
  // Hai đại trụ Cửa Võng sơn then chạm rồng vàng hai bên khám thờ (cx = -10.6, 10.6)
  for(const cx of[-10.6,10.6]){
    const pillar=Lt(new ft(.42,.45,highBeamY-t+.2,20),k.lacquer(),cx,t+(highBeamY-t)/2,nt+.1);
    s.add(pillar);
    s.add(Lt(new ft(.55,.6,.3,12),k.gold(),cx,t+.15,nt+.1));
    for(let step=0;step<9;step++){
      const dAng=step*1.1, dy=t+.8+step*.68;
      const dMesh=Lt(new ft(.09,.09,.45,8),k.gold(),cx+Math.cos(dAng)*.46,dy,nt+.1+Math.sin(dAng)*.46);
      dMesh.rotation.y=-dAng,dMesh.rotation.z=.35,s.add(dMesh);
    }
  }
  
  // Cửa Võng vòm cung uốn lượn chạm lộng (phần giữa võng cao lên y = 9.2m, thoáng đãng tuyệt đối)
  for(let fx=-9.6;fx<=9.6;fx+=1.6){
    const distCenter=Math.abs(fx);
    // Vòm cong lên ở giữa: hai bên hạ nhẹ, chính giữa uốn cao
    const archY=highBeamY-.4-Math.max(0,(10-distCenter)*.05);
    const tassel=Lt(new rn(.1,.38,6),k.gold(),fx,archY,nt+.1);
    s.add(tassel);
    s.add(Lt(new gt(.055,8,8),k.gold(),fx,archY+.22,nt+.1));
  }
  // Hai góc rồng chầu Cửa Võng hai bên tả hữu (để trống hoàn toàn khoang giữa x = -5 đến 5)
  for(const sx of[-1,1]){
    const cornerDragon=Lt(new ft(.12,.12,2.4,10),k.gold(),sx*7.5,highBeamY-.7,nt+.1);
    cornerDragon.rotation.z=sx*.35,s.add(cornerDragon);
  }
  
  // ==================== TAM THẾ PHẬT (TAM BẢO) THẾP VÀNG 24K ====================
  for(const[U,A,at]of[[-6.4,1.55,5.2],[0,1.85,6.1],[6.4,1.55,5.2]]){
    // Tòa Sen Bách Diệp Thếp Vàng 3 Tầng Nguy Nga
    const basePedestal=Lt(new ft(A*1.45,A*1.6,.45,8),k.lacquer(),U,t+1.45,nt-.4);
    s.add(basePedestal);
    const baseGoldRim=Lt(new Ge(A*1.55,.04,8,32),k.gold(),U,t+1.68,nt-.4);
    baseGoldRim.rotation.x=Math.PI/2,s.add(baseGoldRim);
    
    // Tầng cánh sen úp (16 cánh)
    for(let p=0;p<16;p++){
      const pAng=(p/16)*Math.PI*2, pRad=A*1.42;
      const petal=Lt(new rn(A*.15,A*.35,6),k.gold(),U+Math.cos(pAng)*pRad,t+1.6,nt-.4+Math.sin(pAng)*pRad);
      petal.rotation.x=Math.PI*.85,petal.rotation.y=-pAng+Math.PI/2,s.add(petal);
    }
    // Tầng cánh sen ngửa ôm đài sen (18 cánh)
    for(let p=0;p<18;p++){
      const pAng=(p/18)*Math.PI*2+.15, pRad=A*1.35;
      const petal=Lt(new rn(A*.14,A*.38,6),k.gold(),U+Math.cos(pAng)*pRad,t+1.95,nt-.4+Math.sin(pAng)*pRad);
      petal.rotation.x=-Math.PI*.18,petal.rotation.y=-pAng+Math.PI/2,s.add(petal);
    }
    // Vòng nhụy sen vàng lấp lánh (24 nhụy)
    for(let p=0;p<24;p++){
      const pAng=(p/24)*Math.PI*2, pRad=A*1.15;
      const stamen=Lt(new gt(A*.04,6,6),k.gold(),U+Math.cos(pAng)*pRad,t+2.16,nt-.4+Math.sin(pAng)*pRad);
      s.add(stamen);
    }
    
    // Kim Thân Đức Phật Thếp Vàng 24K Sáng Ngời
    const J=_S();
    J.scale.setScalar(A),J.position.set(U,t+2.3,nt-.4),s.add(J);
    
    // Khung Vòm Khám Thờ Gỗ Gụ Phía Sau Kim Thân
    const shrineArch=Lt(new Ge(at*.48,.06,12,32,Math.PI),k.gold(),U,t+3.4*(A/1.55),nt-.98);
    shrineArch.rotation.z=-Math.PI,s.add(shrineArch);
    
    // Cụm Hào Quang Lá Bồ Đề 3D Phía Sau Tôn Tượng (nt - 0.95, không che mặt)
    const vt=kS(at);
    vt.position.set(U,t+1.95,nt-.95),s.add(vt);
    
    // Ánh Sáng Phật Quang Ấm Áp
    Lg.push({pos:new _(U,t+3.8*(A/1.55),nt-.5),intensity:20,range:16});
  }
  
  // Ánh Sáng Toàn Điện
  Lg.push(
    {pos:new _(0,t+5.2,nt+2.8),intensity:26,range:24},
    {pos:new _(-6.4,t+4.6,nt+2.2),intensity:18,range:18},
    {pos:new _(6.4,t+4.6,nt+2.2),intensity:18,range:18},
    {pos:new _(0,t+3.2,-11.5),intensity:16,range:24}
  );
  
  // Rèm Hương Án Phía Trước
  const _t=DS(21.2,1.25);
  _t.position.set(0,t+.68,nt+1.82),s.add(_t);
  
  // Liễn Treo Hai Bên Vách
  const Pt=t+_n+.05,Zt=cm(17.8-.9,2.6);
  Zt.position.set(0,Pt,-21),s.add(Zt);
  for(const U of[-1,1]){
    const A=cm(5.7,2.1);
    A.position.set(U*12.2,Pt,-21),s.add(A);
  }
  const ge=new z(new We(Ie-1.4,.7),lm(18));
  ge.position.set(0,t+_n-.05,Qn+.34),s.add(ge);
  for(const U of[-1,1]){
    const A=new z(new We(Jn-Qn,.7),lm(14));
    A.rotation.y=-U*Math.PI/2,A.position.set(U*(Ie/2-.32),t+_n-.05,(Jn+Qn)/2),s.add(A);
  }
  
  // Ban Thờ Phụ Hai Bên
  for(const U of[-9.6,-5.2,5.2,9.6]){
    const A=Math.abs(U)>7?1.5:1.15,at=OS(A);
    at.position.set(U,t,nt+2.5),s.add(at);
    const J=um(A*.95);
    J.position.set(U,t+A*.97,nt+2.5),J.rotation.y=U,s.add(J),n.circle(U,nt+2.5,.4);
  }
  
  // Tôn Tượng Tôn Giả Ca Diếp & A Nan
  for(const U of[-1,1]){
    const A=Ir("disciple");
    if(!A)break;
    A.scale.setScalar(1.25),A.position.set(U*3.3,t,nt+2.7),A.rotation.y=-U*.25,s.add(A),n.circle(U*3.3,nt+2.7,.6);
  }
  
  // Ban Thờ Tổ & Hộ Pháp Tả Hữu
  for(const[U,A,at]of[[-13.5,"#7a2a1e","#e2b98f"],[13.5,"#c9952e","#e8c7a0"]]){
    s.add(St(3.2,1.2,2.6,k.lacquer(),U,t,nt+.6));
    const J=qd(A,at);
    J.scale.setScalar(2),J.position.set(U,t+1.2,nt+.6),s.add(J),n.block(U,nt+.6,3.4,2.8);
  }
  
  // ==================== LỄ VẬT ANH LINH TRÊN BÀN THỜ TAM BẢO ====================
  // 1. Đôi Hạc Ngự Long Quy Chân Đèn Đồng Vàng
  for(const cx of[-2.4,2.4]){
    const turtle=Lt(new gt(.24,12,8),k.bronze(),cx,t+1.48,nt+1.6);
    turtle.scale.set(1.2,.45,1.4),s.add(turtle);
    s.add(Lt(new gt(.08,8,8),k.bronze(),cx,t+1.55,nt+1.85));
    const craneBody=Lt(new ft(.045,.055,.82,8),k.gold(),cx,t+1.95,nt+1.6);
    s.add(craneBody);
    const craneChest=Lt(new gt(.12,10,8),k.gold(),cx,t+2.3,nt+1.6);
    craneChest.scale.set(.8,1.1,1.2),s.add(craneChest);
    const candleDish=Lt(new ft(.16,.06,.06,14),k.gold(),cx,t+2.48,nt+1.6);
    s.add(candleDish);
    const redCandle=Lt(new ft(.055,.055,.65,12),k.cloth(),cx,t+2.82,nt+1.6);
    s.add(redCandle);
    const candleFlame=new z(new rn(.035,.12,8),new mt({color:"#ffaa00",emissive:"#ff7700",emissiveIntensity:2.2,roughness:.2}));
    candleFlame.position.set(cx,t+3.2,nt+1.6),s.add(candleFlame);
    Lg.push({pos:new _(cx,t+3.25,nt+1.6),intensity:9,range:10});
  }
  
  // 2. Đôi Lục Bình Sứ Hoa Lam Cắm Hoa Cúc Vàng Đại Đóa (chuẩn ảnh chanh_dien_tam_bao.png)
  for(const vx of[-4.8,4.8]){
    const vaseMat=new mt({color:"#f0f4f8",roughness:.18,metalness:.05});
    s.add(Lt(new ft(.25,.35,.95,18),vaseMat,vx,t+1.88,nt+1.5));
    s.add(Lt(new ft(.16,.22,.35,16),vaseMat,vx,t+2.45,nt+1.5));
    s.add(Lt(new ft(.28,.14,.12,16),k.gold(),vx,t+2.65,nt+1.5));
    
    // Hoa cúc vàng đại đóa nở rực rỡ
    const chryYellowMat=new mt({color:"#ffd54f",emissive:"#ffb300",emissiveIntensity:.4,roughness:.4});
    const chryCenterMat=new mt({color:"#ff9800",emissive:"#f57c00",emissiveIntensity:.5,roughness:.4});
    const leafGreenMat=new mt({color:"#2e7d32",roughness:.6});
    
    // Đóa cúc chính giữa
    s.add(Lt(new gt(.14,12,10),chryCenterMat,vx,t+2.88,nt+1.5));
    for(let lp=0;lp<12;lp++){
      const lang=(lp/12)*Math.PI*2;
      const petal=Lt(new rn(.07,.26,6),chryYellowMat,vx+Math.cos(lang)*.18,t+2.88,nt+1.5+Math.sin(lang)*.18);
      petal.rotation.x=Math.PI*.25,petal.rotation.y=-lang+Math.PI/2,s.add(petal);
    }
    // Các đóa cúc sum sê xung quanh
    for(let b=0;b<5;b++){
      const bang=(b/5)*Math.PI*2+.3;
      const cCenter=Lt(new gt(.1,10,8),chryCenterMat,vx+Math.cos(bang)*.26,t+3.05,nt+1.5+Math.sin(bang)*.26);
      s.add(cCenter);
      for(let cp=0;cp<8;cp++){
        const clang=(cp/8)*Math.PI*2;
        const cpetal=Lt(new rn(.055,.2,6),chryYellowMat,vx+Math.cos(bang)*.26+Math.cos(clang)*.12,t+3.05,nt+1.5+Math.sin(bang)*.26+Math.sin(clang)*.12);
        cpetal.rotation.x=Math.PI*.2,s.add(cpetal);
      }
      const leaf=Lt(new Yn(.16,10),leafGreenMat,vx+Math.cos(bang+.8)*.3,t+2.72,nt+1.5+Math.sin(bang+.8)*.3);
      leaf.rotation.x=-Math.PI/2+.25,s.add(leaf);
    }
  }
  
  // 3. Đôi Tôn Tượng Hộ Pháp Thếp Vàng Hai Đầu Bàn Thờ (chuẩn ảnh chanh_dien_tam_bao.png)
  for(const[gx,gType]of[[-8.6,"staff"],[8.6,"sword"]]){
    const guardian=td("#b8860b",gType);
    if(guardian){
      guardian.scale.setScalar(1.2);
      guardian.position.set(gx,t+1.4,nt+1.4);
      guardian.rotation.y=gx<0?.4:-.4;
      s.add(guardian);
    }
  }
  
  // Mâm Quả & Lễ Vật Trên Bàn Thờ
  const j=t+1.4,ht=nt+1.35;
  for(const U of[-8,-4,4,8]){
    s.add(Lt(new ft(.09,.09,.6,10),k.paperGlow(),U,t+1.7,nt+1.5));
    const A=Lt(new gt(.07,8,6),k.incense(),U,t+2.08,nt+1.5);
    A.scale.y=1.8,s.add(A);
  }
  for(const U of[-6,-2,2,6]){
    s.add(Lt(new ft(.2,.28,.7,12),k.gold(),U,t+1.75,nt+1.4));
    const A=um(.85);
    A.position.set(U,t+2.08,nt+1.4),A.rotation.y=U*.7,s.add(A);
  }
  for(const[U,A]of[[0,.55],[-3,.42],[3,.42],[-7,.42],[7,.42]]){
    const at=qS(A);
    at.position.set(U,j,ht),at.rotation.y=U*.3,s.add(at);
  }
  for(const[U,A]of[[-1.25,"keo"],[1.25,"chung"],[-5,"chung"],[5,"keo"],[-9.6,"keo"],[9.6,"chung"]]){
    const at=XS(.85,A);
    at.position.set(U,j,ht+.05),at.rotation.y=U*.4,s.add(at);
  }
  for(const U of[-6.4,0,6.4]){
    const A=jS(1);
    A.position.set(U,t+2.3,nt+.7),s.add(A);
  }
  
  // Bàn Tụng Kinh & Mõ Gia Trì
  const deskY=t+.25,deskZ=nt+4.1;
  s.add(St(2.2,.45,.85,k.lacquer(),0,deskY,deskZ));
  s.add(St(2.24,.05,.89,k.gold(),0,deskY+.23,deskZ));
  const yellowCushion=Lt(new ft(.48,.52,.15,18),new mt({color:"#e6a817",emissive:"#d48806",emissiveIntensity:.18,roughness:.65}),0,t+.08,deskZ+1.15);
  s.add(yellowCushion);
  n.seat("master-reciter",0,.16,deskZ+1.15,Math.PI,yellowCushion);
  const woodenFish=Lt(new gt(.14,12,10),new mt({color:"#734320",roughness:.45,metalness:.05}),-.42,deskY+.34,deskZ);
  woodenFish.scale.set(1.2,.8,1.1),s.add(woodenFish);
  const striker=Lt(new ft(.015,.015,.28,8),k.timber(),-.42,deskY+.26,deskZ+.18);
  striker.rotation.z=Math.PI/2,s.add(striker);
  const bowlBell=Lt(new ft(.14,.08,.16,16),k.bronze(),.42,deskY+.32,deskZ);
  s.add(bowlBell);
  s.add(Lt(new ft(.16,.16,.04,16),k.cloth(),.42,deskY+.25,deskZ));
  
  // Lư Hương Đỉnh Đồng Chánh Điện
  const It=Sg(1.6);
  It.position.set(0,t,nt+5),s.add(It),n.circle(0,nt+5,1.1);
  
  // ==================== PHÁP KHÍ CHÁNH ĐIỆN ====================
  // 1. ĐẠI HỒNG CHUNG - Bên Tả (x = -14.2, z = -14.0)
  const bellX=-14.2,bellZ=-14;
  for(const dx of[-.9,.9])for(const dz of[-.7,.7])s.add(Lt(new ft(.14,.15,4.4,10),k.lacquer(),bellX+dx,t+2.2,bellZ+dz));
  s.add(St(2.2,.28,.32,k.lacquer(),bellX,t+4.3,bellZ-.7));
  s.add(St(2.2,.28,.32,k.lacquer(),bellX,t+4.3,bellZ+.7));
  s.add(St(.32,.28,1.6,k.lacquer(),bellX-.9,t+4.3,bellZ));
  s.add(St(.32,.28,1.6,k.lacquer(),bellX+.9,t+4.3,bellZ));
  s.add(St(.35,.35,1.7,k.gold(),bellX,t+4.15,bellZ));
  const bellGroup=new it;
  bellGroup.add(Lt(new ft(.55,.72,1.25,24),k.bronze(),0,0,0));
  const bellLip=Lt(new Ge(.72,.08,12,32),k.bronze(),0,-.62,0);
  bellLip.rotation.x=Math.PI/2,bellGroup.add(bellLip);
  bellGroup.add(Lt(new ft(.38,.52,.45,18),k.bronze(),0,.72,0));
  const hangerRing=Lt(new Ge(.22,.05,8,20),k.gold(),0,1.02,0);
  hangerRing.rotation.y=Math.PI/2,bellGroup.add(hangerRing);
  bellGroup.position.set(bellX,t+2.5,bellZ),s.add(bellGroup);
  const strikerLog=Lt(new ft(.08,.08,1.45,12),k.timber(),bellX+.65,t+2.2,bellZ);
  strikerLog.rotation.x=Math.PI/2,s.add(strikerLog);
  for(const sdz of[-.5,.5])s.add(Lt(new ft(.012,.012,1.8,6),k.cloth(),bellX+.65,t+3.15,bellZ+sdz));
  n.block(bellX,bellZ,2.6,2.4);
  
  // 2. TRỐNG BÁT NHÃ - Bên Hữu (x = 14.2, z = -14.0)
  const drumX=14.2,drumZ=-14;
  s.add(St(1.6,.28,2.2,k.lacquer(),drumX,t+.15,drumZ));
  for(const dz of[-.65,.65]){
    const legL=Lt(new ft(.12,.14,1.35,10),k.lacquer(),drumX-.65,t+.75,drumZ+dz);
    legL.rotation.z=-.15;
    const legR=Lt(new ft(.12,.14,1.35,10),k.lacquer(),drumX+.65,t+.75,drumZ+dz);
    legR.rotation.z=.15;
    s.add(legL,legR);
  }
  const drumBody=Lt(new ft(.88,.88,1.75,24),new mt({color:"#7a1a15",roughness:.45,metalness:.1}),drumX,t+1.65,drumZ);
  drumBody.rotation.x=Math.PI/2,s.add(drumBody);
  s.add(Lt(new Ge(.9,.04,8,32),k.gold(),drumX,t+1.65,drumZ));
  for(const dz of[-.88,.88]){
    const drumHead=Lt(new Yn(.86,24),new mt({color:"#e8cba2",roughness:.75}),drumX,t+1.65,drumZ+dz);
    if(dz<0)drumHead.rotation.y=Math.PI;
    s.add(drumHead,Lt(new Ge(.88,.035,8,32),k.gold(),drumX,t+1.65,drumZ+dz));
  }
  const stick1=Lt(new ft(.02,.02,.55,8),k.timber(),drumX+.75,t+1.2,drumZ-.25);
  stick1.rotation.z=.4;
  const stick2=Lt(new ft(.02,.02,.55,8),k.timber(),drumX+.75,t+1.2,drumZ+.25);
  stick2.rotation.z=.4;
  s.add(stick1,stick2);
  n.block(drumX,drumZ,2.6,2.4);
  
  // Hộ Pháp Lối Vào
  const ut=td("#8e3a26","sword");
  ut.position.set(-Ie/2+2.6,t,Jn-3),ut.rotation.y=.5;
  const Ft=td("#3d5a6e","staff");
  Ft.position.set(Ie/2-2.6,t,Jn-3),Ft.rotation.y=-.5;
  s.add(ut,Ft),n.block(-Ie/2+2.6,Jn-3,1.6,1.4),n.block(Ie/2-2.6,Jn-3,1.6,1.4);
  s.add(eT(Ie/2-.3,t,Ih.flatMap(U=>[U+1.4,U-1.4]),1.8,.7));
  
  // Đèn Lồng Đỏ Treo Xà Gồ
  for(const U of[-6,-12,-18])for(const A of[-4.5,4.5]){
    const at=kr(1.6);
    at.position.set(A,t+6.4,U),s.add(at);
  }
  
  // ==================== BỒ ĐOÀN NGỒI THIỀN & THẢM NGỰ ĐẠO ====================
  // Thảm Ngự Đạo Đỏ Thắm Dẫn Vào Tam Bảo
  const carpetLen=17.5, carpetZ=-9.8;
  const carpet=St(4.8,.035,carpetLen,new mt({color:"#7e1a17",roughness:.85,metalness:.05}),0,t+.015,carpetZ);
  s.add(carpet);
  for(const ex of[-2.4,2.4])s.add(St(.1,.042,carpetLen,k.gold(),ex,t+.02,carpetZ));
  
  // Hàng Bồ Đoàn Ngồi Thiền Đối Xứng Tả Hữu (chuẩn ảnh truoc_mat_tam_bao.png)
  let seatIdx=0;
  const colLeft=[-9.8,-7.6,-5.4,-3.4];
  const colRight=[3.4,5.4,7.6,9.8];
  const rowsZ=[-6.2,-8.8,-11.4,-14,-16.6,-19.2];
  const $t=new ft(.85,.85,.3,16), fe=new xe({visible:!1});
  
  const spawnCushion=(cx,cz,isFront)=>{
    const cMat=isFront
      ?new mt({color:"#941e1a",roughness:.7,metalness:.1}) // Bồ đoàn đỏ hàng đầu
      :new mt({color:"#4a3222",roughness:.65,metalness:.05}); // Bồ đoàn nâu các hàng sau
    s.add(St(.85,.15,.85,cMat,cx,t+.075,cz));
    s.add(St(.87,.03,.87,k.gold(),cx,t+.06,cz));
    const seatTarget=new z($t,fe);
    seatTarget.position.set(cx,t+.16,cz);
    s.add(seatTarget);
    n.seat(`cd-${seatIdx++}`,cx,.16,cz,Math.PI,seatTarget);
  };
  
  for(const cz of rowsZ){
    const isFront=(cz===-19.2||cz===-16.6);
    for(const cx of colLeft)spawnCushion(cx,cz,isFront);
    for(const cx of colRight)spawnCushion(cx,cz,isFront);
  }
  
  // Bồ đoàn sát tường
  for(const U of[-1,1])for(const A of Ih.flatMap(at=>[at+1.4,at-1.4])){
    const J=Lt(new ft(.45,.5,.16,20),k.cushion(),U*(Ie/2-1.6),t+.08,A);
    const vt=new z($t,fe);
    vt.position.set(U*(Ie/2-1.6),t+.15,A),s.add(J,vt);
    n.seat(`cd-${seatIdx++}`,U*(Ie/2-1.6),.16,A,U*Math.PI/2,vt);
  }
  
  // ==================== TĂNG ĐOÀN VÀ PHẬT TỬ ====================
  // 1. Quý Thầy Cà Sa Vàng đứng gần Đại Hồng Chung
  const monkMaster=qd("#c9952e","#e8c7a0");
  if(monkMaster){
    monkMaster.scale.setScalar(1.95);
    monkMaster.position.set(-11.6,t,-13.8);
    monkMaster.rotation.y=.6,s.add(monkMaster),n.block(-11.6,-13.8,1.2,1.2);
  }
  // 2. Thầy Áo Nâu gần Trống Bát Nhã
  const monkDrummer=qd("#6b4028","#e2b98f");
  if(monkDrummer){
    monkDrummer.scale.setScalar(1.95);
    monkDrummer.position.set(11.6,t,-13.8);
    monkDrummer.rotation.y=-.6,s.add(monkDrummer),n.block(11.6,-13.8,1.2,1.2);
  }
  // 3. Thiện Nam Tín Nữ / Phật Tử Áo Lam quỳ niệm Phật trang nghiêm trên bồ đoàn
  const devoteePositions=[[-5.4,-16.6],[5.4,-16.6],[-7.6,-14],[7.6,-14]];
  for(const[px,pz]of devoteePositions){
    const devotee=qd("#5a7285","#f2cba6");
    if(devotee){
      devotee.scale.setScalar(1.75);
      devotee.position.set(px,t+.14,pz);
      devotee.rotation.y=Math.PI,s.add(devotee);
    }
  }
  
  return s;
}function oT(){const i=rt.causeway,t=new it,e=i.z1-i.z0,n=(i.z0+i.z1)/2;t.add(St(i.half*2,i.y,e,k.blueStone(),0,0,n));const s=St(i.half*2-.1,.03,e-.1,k.stone(),0,i.y,n);t.add(s),Bn.push(s);for(const o of[-1,1]){t.add(St(.3,.75,e,k.blueStone(),o*(i.half-.15),i.y,n)),Ee(o*(i.half-.15),n,.4,e);for(let r=i.z0+4;r<i.z1;r+=8){t.add(St(.5,1.6,.5,k.blueStone(),o*(i.half-.15),i.y,r));const a=kr(.9,!0);a.position.set(o*(i.half-.15),i.y+2,r),t.add(a)}}return t}function rT(i,t){const e=new it;e.add(Lt(new ft(2.6,2.8,.5,8),k.blueStone(),0,.25,0));for(let o=0;o<8;o++){const r=o/8*Math.PI*2+Math.PI/8;e.add(Ai(Math.cos(r)*2.1,Math.sin(r)*2.1,3,.13,.5))}for(const o of[0,Math.PI/4]){const r=vn({a:2.7,b:2.7,r:.05,h:1.6,lift:.55});r.position.y=3.6,r.rotation.y=o,e.add(r)}const n=Lt(new gt(.28,12,10),k.gold(),0,5.4,0);e.add(n);const s=kr(.9);s.position.y=3,e.add(s),e.position.set(i,0,t);for(let o=0;o<8;o++){const r=o/8*Math.PI*2+Math.PI/8;pn(i+Math.cos(r)*2.1,t+Math.sin(r)*2.1,.2)}return e}function aT(){const i=rt.well,t=new it,e=Lt(new Ge(i.r+.25,.3,8,64),k.blueStone(),i.x,.15,i.z);e.rotation.x=Math.PI/2,t.add(e);const n=new z(new Rr(i.r+.5,i.r+7,48),new mt({map:sn(Ta(),6,6),roughness:.9}));n.rotation.x=-Math.PI/2,n.position.set(i.x,.02,i.z),n.receiveShadow=!0,t.add(n),Bn.push(n);const s=i.r+3.2;for(const o of[-1,1])for(const r of[-1,1])t.add(rT(i.x+o*s,i.z+r*s));return t}function cT(){const i=rt.mound,t=new it,e=[];for(let m=0;m<=16;m++){const g=m/16;e.push(new Q(i.r*(1-g),i.h*(1-(1-g)*(1-g))))}const n=new z(new di(e,48),new mt({map:sn(El(),6,3),roughness:1}));n.position.set(i.x,0,i.z),n.receiveShadow=!0,t.add(n),Bn.push(n);const s=new it;s.position.set(i.x,i.h-.05,i.z),s.add(Lt(new ft(3.4,3.8,1,8),k.blueStone(),0,.5,0));const o=k.bronze(),r=k.gold(),a=2.2,c=new it;c.position.y=1,c.scale.setScalar(a),s.add(c);const l=Lt(new gt(1,24,16),o,0,.32,.15);l.scale.set(1.15,.34,.75);const h=Lt(new gt(.72,28,20),r,0,.95,.12);h.scale.set(1,.95,.92);const u=Lt(new gt(.6,24,16),o,0,1.38,-.05),d=Lt(new gt(.42,24,18),r,0,2.05,.05);d.scale.set(1.05,.98,1),c.add(l,h,u,d);for(const m of[-1,1]){const g=Lt(new gt(1,10,8),r,m*.42,2,.02);g.scale.set(.06,.2,.1);const x=Lt(new Ar(.17,.6,4,10),o,m*.72,1.25,.25);x.rotation.set(-.9,0,m*.5);const b=Lt(new gt(.16,12,10),r,m*.6,.78,.6);c.add(g,x,b)}const f=Lt(new Ge(.16,.025,6,16,Math.PI),o,0,1.92,.44);f.rotation.z=Math.PI,c.add(f);for(const m of[-1,1]){const g=Lt(new Ge(.06,.015,4,10,Math.PI),o,m*.15,2.12,.42);c.add(g)}const p=Lt(new Ge(.5,.04,6,32),k.lacquer(),0,1.45,.12);p.rotation.x=1.1,c.add(p);const v=Ir("maitreya");v&&c.clear().add(v),t.add(s),pn(i.x,i.z,3.9);for(let m=0;m<10;m++){const g=m/10,x=i.r*(1-g),b=i.h*(1-x/i.r*(x/i.r));t.add(St(3,.3,1.3,k.blueStone(),i.x,b-.08,i.z+x))}return t}function lT(){const i=new it;for(const[t,e,n,s]of[[-9.4,"#6b5233","sword",.25],[9.4,"#5a4a2c","staff",-.25]]){const o=td(e,n);o.scale.setScalar(1.35),o.position.set(t,0,rt.gateZ-3.6),o.rotation.y=s,i.add(o),Ee(t,rt.gateZ-3.6,2.2,2)}return i}function hT(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Ve(i),s=new it;for(let o=0;o<40;o++){const r=o/40*Math.PI*2+Math.sin(o*7.1)*.1,a=170+o*37%90,c=new _l(new ka({map:n,transparent:!0,depthWrite:!1,opacity:.8,fog:!0}));c.position.set(Math.cos(r)*a,8+o*13%14,Math.sin(r)*a-20),c.scale.set(120,30,1),s.add(c)}return s.userData.mist=!0,s}function Ig(i,t,e,n,s){const o=new z(new Wt(.7,.14,.55),new xe({visible:!1}));return o.position.set(t,e-.05,n),o.rotation.y=s,Di.push({id:i,position:new _(t,e,n),facing:s,mesh:o,taken:!1}),o.userData.seat=i,o}function ed(i,t,e,n,s,o=0){const r=new it,a=Lt(new Ge(e,.32,6,40),k.blueStone(),i,o+.42,t);a.rotation.x=Math.PI/2,a.scale.z=.35,r.add(a);for(let c=0;c<8;c++){const l=c/8*Math.PI*2;r.add(St(.3,.38,.3,k.blueStone(),i+Math.cos(l)*e,o,t+Math.sin(l)*e))}for(let c=0;c<n;c++){const l=c/n*Math.PI*2,h=e+.05;r.add(Ig(`${s}-${c}`,i+Math.cos(l)*h,o+.52,t+Math.sin(l)*h,Math.atan2(Math.cos(l),Math.sin(l))))}return pn(i,t,e+.35),r}function kh(i,t,e,n){const s=new it,o=new it;for(const l of[-1,1])o.add(St(1.7,.1,.5,k.blueStone(),0,.38,l*1)),o.add(St(.3,.38,.4,k.blueStone(),-.6,0,l*1),St(.3,.38,.4,k.blueStone(),.6,0,l*1));o.add(St(.9,.45,.6,k.darkStone(),0,0,0)),o.add(Lt(new gt(.1,10,8),k.whiteStone(),0,.55,0)),o.rotation.y=e,o.position.set(i,0,t),s.add(o);const r=Math.cos(e),a=Math.sin(e),c=(l,h)=>[i+l*r+h*a,t-l*a+h*r];for(const l of[-1,1])for(const h of[-.4,.4]){const[u,d]=c(h,l*1);s.add(Ig(`${n}-${l}-${h}`,u,.48,d,e+(l>0?Math.PI:0)))}return pn(i,t,1.5),s}function uT(){return new mt({color:"#c8283a",emissive:"#7a0d1a",emissiveIntensity:.25,roughness:.6,side:Re})}function dT(i,t){const e=new it;e.add(ro(i,t,1.25));const n=uT(),s=new We(.12,1);let o=3;const r=()=>((o=o*16807%2147483647)-1)/2147483646;for(let c=0;c<160;c++){const l=r()*Math.PI*2,h=2.2+r()*3.6,u=.6+r()*.9,d=new z(s,n);d.scale.y=u,d.position.set(i+Math.cos(l)*h,5.8-u/2-r()*.6,t+Math.sin(l)*h),d.rotation.y=r()*Math.PI,e.add(d)}e.add(ed(i,t,3.4,12,"duyen"));const a=_o(["姻緣樹","CÂY DUYÊN"],2.2,.55);return a.position.set(i,1.6,t+3.95),e.add(a),e.add(St(.12,1.4,.12,k.timber(),i-.9,0,t+3.9),St(.12,1.4,.12,k.timber(),i+.9,0,t+3.9)),e}function fm(i,t){const e=new it,n=new z(new ft(.05,.07,6,6),new mt({color:"#b8a26a",roughness:.7}));n.position.y=3,e.add(n);const s=document.createElement("canvas");s.width=160,s.height=64;const o=s.getContext("2d");["#2b5fae","#f2c230","#c8322a","#f4f1e8","#e8812a"].forEach((l,h)=>{o.fillStyle=l,o.fillRect(h*32,0,32,64)});const a=new Ve(s);a.colorSpace=de;const c=new z(new We(1.6,.65,8,1),new mt({map:a,side:Re,roughness:.8}));return c.geometry.translate(.8,0,0),c.position.set(.04,5.5,0),c.userData.sway=i*.3+t*.1,c.userData.flag=!0,$d.push(c),e.add(c),e.position.set(i,0,t),e}class fT{points;base;n=26;constructor(t){this.base=t;const e=t.length*this.n,n=new me;n.setAttribute("position",new Oe(new Float32Array(e*3),3));const s=document.createElement("canvas");s.width=s.height=64;const o=s.getContext("2d"),r=o.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(235,235,230,0.55)"),r.addColorStop(1,"rgba(235,235,230,0)"),o.fillStyle=r,o.fillRect(0,0,64,64),this.points=new _s(n,new $i({map:new Ve(s),size:.9,transparent:!0,opacity:.55,depthWrite:!1})),this.points.frustumCulled=!1}update(t){const e=this.points.geometry.attributes.position;let n=0;for(const s of this.base)for(let o=0;o<this.n;o++){const r=(t*.18+o/this.n)%1,a=r*4.5;e.setXYZ(n++,s.x+Math.sin(t*.6+o)*.25*r+r*.8,s.y+a,s.z+Math.cos(t*.5+o*1.7)*.25*r)}e.needsUpdate=!0}}class pT{group=new it;birds=[];constructor(t=9){const e=new me;e.setAttribute("position",new Yt([0,0,.3,-.9,.15,-.1,0,0,-.2,0,0,.3,.9,.15,-.1,0,0,-.2],3)),e.computeVertexNormals();const n=new xe({color:"#2a2a2a",side:Re});for(let s=0;s<t;s++){const o=new z(e,n);o.scale.setScalar(1.3),this.group.add(o),this.birds.push({m:o,phase:s*.45,r:60+s%3*8,h:34+s%4*2.5,speed:.05+s%2*.006})}}update(t,e){if(this.group.visible=e,!!e)for(const n of this.birds){const s=t*n.speed+n.phase*.12;n.m.position.set(Math.cos(s)*n.r,n.h+Math.sin(t*.5+n.phase)*1.5,Math.sin(s)*n.r+20),n.m.rotation.y=-s,n.m.scale.y=1.3*(.6+Math.abs(Math.sin(t*6+n.phase))*.8)}}}const kg=new mt({color:"#3a2a20",roughness:.9});function Nh(i=1){const t=new it,e=new z(new gt(.2*i,10,8),k.lanternRed());e.scale.y=1.2;const n=new z(new ft(.08*i,.11*i,.06*i,8),k.gold());n.position.y=.26*i;const s=n.clone();s.position.y=-.26*i;const o=new z(new ft(.015*i,.04*i,.26*i,5),k.lanternRed());return o.position.y=-.42*i,t.add(e,n,s,o),t}function pm(i,t,e=0){const n=[];for(let s=0;s<=12;s++){const o=s/12;n.push(i.clone().lerp(t,o).setY(i.y+(t.y-i.y)*o-e*4*o*(1-o)))}return new z(new li(new Hi(n),16,.012,3,!1),kg)}function mT(){const i=new it,t=[],e=[],n=[],s=[];function o(C,T,R=0){const L=oi(C,T),S=new it,M=k.blueStone(),I=(K,W,ot)=>{const q=new z(K,W);return q.position.y=ot,S.add(q),q};I(new Wt(.8,.22,.8),M,.11),I(new Wt(.58,.28,.58),M,.36),I(new ft(.12,.15,2.3,8),M,1.65),I(new Wt(.44,.1,.44),M,2.84);const H=I(new Wt(1.5,.08,.08),k.lacquer(),2.5);H.rotation.y=R;const B=[];for(const K of[-1,1]){const W=Math.cos(R)*K*.68,ot=-Math.sin(R)*K*.68,q=I(new ft(.01,.01,.16,4),kg,2.38);q.position.x=W,q.position.z=ot;const nt=Nh(.85);nt.position.set(W,2.06,ot),S.add(nt),e.push(new _(C+W,L+2.06,T+ot)),B.push(new _(C+W,L+2.5,T+ot))}I(new ft(.3,.3,.08,6),k.lacquer(),2.93),I(new ft(.26,.24,.5,6),k.paperGlow(),3.22),I(new ft(.32,.3,.07,6),k.lacquer(),3.5),I(new Ge(.25,.015,4,6),k.gold(),3).rotation.x=Math.PI/2;const $=vn({a:.4,b:.4,r:.02,h:.28,lift:.1});return $.position.y=3.56,S.add($),I(new gt(.06,8,6),k.gold(),3.92),S.position.set(C,L,T),i.add(S),pn(C,T,.4),t.push(new _(C,L+3.22,T)),n.push({x:C,y:L,z:T,r:6.5}),s.push(new _(C,L+3.2,T)),B}function r(C,T,R=1.6,L=.5){i.add(pm(C,T,L));const S=Math.max(1,Math.round(C.distanceTo(T)/R)-1);for(let M=1;M<=S;M++){const I=M/(S+1),H=C.clone().lerp(T,I);H.y=C.y+(T.y-C.y)*I-L*4*I*(1-I)-.32;const B=Nh(.75);B.position.copy(H),i.add(B),e.push(H.clone())}}function a(C,T,R,L,S,M=!1){i.add(pm(new _(C,T,R),new _(C,T-L+.3*S,R)));const I=Nh(S);I.position.set(C,T-L,R),i.add(I),(M?t:e).push(new _(C,T-L,R));const H=oi(C,R+(R<0?1.5:0));n.push({x:C,y:H,z:R<0?R+1.5:R,r:M?5.5:3.2})}const c=6.5,l=[55,47,25];for(const C of[-1,1])for(const T of l)o(C*c,T,Math.PI/2);const h=c+.75,u=6,d=(C,T)=>{const R=oi(C,T),L=new it,S=new z(new ft(.22,.26,.3,8),k.blueStone());S.position.y=.15;const M=new z(new ft(.07,.09,u+.2,8),k.lacquer());M.position.y=(u+.2)/2+.1;const I=new z(new gt(.1,8,6),k.gold());return I.position.y=u+.35,L.add(S,M,I),L.position.set(C,R,T),i.add(L),pn(C,T,.3),new _(C,R+u,T)},f=[-1,1].map(C=>l.map(T=>d(C*h,T)));for(const C of f)r(C[0],C[1],1.6,.35);for(let C=0;C<l.length;C++)r(f[0][C],f[1][C],1.5,.45);for(const C of[-1,1])for(const T of[28.6,38.4])o(C*22.6,T);for(const C of[-1,1])o(C*11,22.5);for(const C of[-1,1])for(const T of[12,6])o(C*11.5,T);for(const C of[-1,1])o(C*6,-40);for(const C of[-1,1])for(const[T,R]of[[37,58],[17,30]]){const L=Math.round((R-T)/3.2);for(let S=0;S<L;S++)a(C*24.3,3.75,T+(R-T)/L*(S+.5),.75,.9)}for(let C=0;C<9;C++){const T=-20+4.444444444444445*(C+.5);C!==4&&a(T,2.4+7.7,-1.7,1.9,1.5,!0)}for(const C of[102.9,97.1])for(const T of[-1,1])a(T*3.4,6.1,C,1.1,1.6,!0);o(32.4,14.4,0),o(32.4,9.6,0),o(44.5,-11.5),o(55.5,-11.5),o(-38,26.5),o(-35.6,78.2,0),o(-35.6,83.8,0),o(-45.5,85.5),o(8,72.6,0),o(8,78.9,0),o(-40,9.5);const p=new it,v=vT(),m=C=>new $i({size:C,map:v,color:"#ffb46a",transparent:!0,opacity:0,depthWrite:!1,blending:vo,fog:!1}),g=[m(2.2),m(1.1)];for(const[C,T]of[[t,g[0]],[e,g[1]]]){const R=new me().setFromPoints(C),L=new _s(R,T);L.frustumCulled=!1,p.add(L)}const x=n.map(C=>{const T=new We(C.r*2,C.r*2);return T.rotateX(-Math.PI/2),T.translate(C.x,C.y+.035,C.z),T}),b=new xe({map:v,color:"#ffa04a",transparent:!0,opacity:0,depthWrite:!1,blending:vo,polygonOffset:!0,polygonOffsetFactor:-2}),y=new z(gT(x),b);return y.renderOrder=1,p.add(y),{root:i,glow:p,lightSpots:s,update(C){const T=Fi.smoothstep(C,.25,.9);p.visible=T>.01,g[0].opacity=.75*T,g[1].opacity=.7*T,b.opacity=.62*T}}}function gT(i){const t=[],e=[],n=[];for(const o of i){const r=t.length/3;t.push(...o.attributes.position.array),e.push(...o.attributes.uv.array);for(const a of o.index.array)n.push(r+a)}const s=new me;return s.setAttribute("position",new Yt(t,3)),s.setAttribute("uv",new Yt(e,2)),s.setIndex(n),s}function vT(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.15)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ve(i)}const Dh=new mt({color:"#c9a25a",roughness:1}),yT=new mt({color:"#9c7838",roughness:1}),mm=new mt({color:"#b89a55",roughness:.7}),xT=new mt({color:"#4d7f8c",roughness:.15,metalness:.1});function dn(i,t,e,n,s){const o=new z(i,t);return o.position.set(e,n,s),o.castShadow=!0,o.receiveShadow=!0,o}function Kr(i,t,e,n,s){const o=Math.hypot(n-t,s-e),r=Math.max(1,Math.round(o/1.4));for(let c=0;c<=r;c++){const l=c/r;i.add(dn(new ft(.05,.06,1.05,6),mm,t+(n-t)*l,.52,e+(s-e)*l))}const a=Math.atan2(s-e,n-t);for(const c of[.42,.85]){const l=dn(new ft(.03,.03,o,5),mm,(t+n)/2,c,(e+s)/2);l.rotation.z=Math.PI/2,l.rotation.y=-a,i.add(l)}Ee((t+n)/2,(e+s)/2,Math.abs(n-t)+.2,Math.abs(s-e)+.2)}function bT(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#7a1f14",e.fillRect(0,0,512,128),e.strokeStyle="#d9a845",e.lineWidth=8,e.strokeRect(6,6,500,116),e.fillStyle="#f2c96b",e.textAlign="center",e.textBaseline="middle",e.font='600 58px "Lora", Georgia, serif',e.fillText(i,256,68);const n=new Ve(t);return n.colorSpace=de,new z(new Wt(2.6,.65,.08),[k.lacquer(),k.lacquer(),k.lacquer(),k.lacquer(),new mt({map:n,roughness:.5}),new mt({map:n,roughness:.5})])}function _T(){const i=rt.petGarden,t=new it,e=(i.x0+i.x1)/2,n=(i.z0+i.z1)/2,s=new mt({map:sn(El(),3,5),color:"#b9d48a",roughness:1}),o=new z(new We(i.x1-i.x0,i.z1-i.z0),s);o.rotation.x=-Math.PI/2,o.position.set(e,.02,n),o.receiveShadow=!0,t.add(o),Bn.push(o);for(let m=0;m<7;m++){const g=dn(new ft(.42,.45,.06,9),k.blueStone(),i.x1-1-m*1.25,.04,i.gateZ+Math.sin(m*.9)*.4);t.add(g)}Kr(t,i.x0,i.z0,i.x1,i.z0),Kr(t,i.x0,i.z1,i.x1,i.z1),Kr(t,i.x0,i.z0,i.x0,i.z1),Kr(t,i.x1,i.z0,i.x1,i.gateZ-i.gateHalf),Kr(t,i.x1,i.gateZ+i.gateHalf,i.x1,i.z1);for(const m of[-1,1])t.add(dn(new ft(.13,.15,3,10),k.lacquer(),i.x1,1.5,i.gateZ+m*(i.gateHalf+.15))),t.add(dn(new ft(.22,.24,.25,10),k.blueStone(),i.x1,.12,i.gateZ+m*(i.gateHalf+.15))),pn(i.x1,i.gateZ+m*(i.gateHalf+.15),.25);t.add(dn(new Wt(.2,.2,i.gateHalf*2+1.2),k.lacquer(),i.x1,2.9,i.gateZ));const r=bT("Vườn Linh Thú");r.rotation.y=Math.PI/2,r.position.set(i.x1,2.4,i.gateZ),t.add(r);const a=vn({a:i.gateHalf+1.1,b:.6,r:i.gateHalf-.2,h:.55,lift:.18});a.rotation.y=Math.PI/2,a.position.set(i.x1,3.05,i.gateZ),t.add(a);const c=lo[0].z-2,l=lo[lo.length-1].z+2,h=l-c,u=(c+l)/2;for(let m=c;m<=l+.01;m+=h/6)t.add(dn(new ft(.08,.09,2,6),k.lacquer(),i.x0+3.6,1,m)),t.add(dn(new ft(.08,.09,2,6),k.lacquer(),i.x0+.6,1,m)),pn(i.x0+3.6,m,.15);const d=vn({a:h/2+.6,b:2.2,r:h/2-1,h:1,lift:.35});d.rotation.y=Math.PI/2,d.position.set(i.x0+2.1,2,u),t.add(d);for(const m of lo){const g=dn(new Ge(.5,.16,6,14),Dh,m.x,.14,m.z);g.rotation.x=Math.PI/2,g.scale.z=.8,t.add(g,dn(new ft(.48,.5,.1,14),yT,m.x,.07,m.z))}t.add(dn(new ft(.75,.55,.45,12),k.blueStone(),-46,.22,73.5));const f=dn(new Yn(.64,16),xT,-46,.43,73.5);f.rotation.x=-Math.PI/2,t.add(f),pn(-46,73.5,.8),t.add(dn(new Wt(.6,.3,2.2),k.timber(),-48.5,.15,81)),t.add(dn(new Wt(.44,.06,2),Dh,-48.5,.31,81)),Ee(-48.5,81,.7,2.3);for(const[m,g,x,b]of[[-43.5,90.5,.55,.5],[-49.5,88,.42,.35],[-42.5,70.5,.48,.42]]){t.add(dn(new ft(x*.9,x,b,10),k.bark(),m,b/2,g));const y=dn(new Yn(x*.88,10),Dh,m,b+.005,g);y.rotation.x=-Math.PI/2,t.add(y),pn(m,g,x)}const p=["#f2a6c0","#ffd36b","#ffffff","#c7a6f5","#f39070"].map(m=>new mt({color:m,roughness:.7}));let v=0;for(const[m,g]of[[-38.2,68],[-38.2,72],[-38.2,90],[-38.2,94],[-46,95],[-50,95],[-44,67],[-40,67]]){for(let x=0;x<5;x++){const b=x/5*Math.PI*2+v;t.add(dn(new gt(.1,6,5),p[(v+x)%p.length],m+Math.cos(b)*.35,.25+x%2*.08,g+Math.sin(b)*.35))}t.add(dn(new gt(.32,6,5),k.leafLight(),m,.14,g)),v++}return t.add(ul(-53.5,66.8,.8),ul(-53.5,95.2,.8)),t.add(Yo(-41,93.5,Math.PI,"thu-a")),t}const Zo={cuc:{name:"Cúc vàng",need:3,merit:10,desc:"Dễ trồng, 3 ngày tưới là nở"},lan:{name:"Lan tím",need:4,merit:15,desc:"Thanh nhã, 4 ngày tưới là nở"},sen:{name:"Sen hồng",need:5,merit:20,desc:"Loài hoa của Phật, 5 ngày tưới là nở"}},gm=Object.keys(Zo),ve=rt.flowerGarden,vm=new _(ve.x0,0,(ve.z0+ve.z1)/2),xi=(()=>{const i=[];for(const t of[68.5,73.5,78.5,83.5])for(const e of[11,14.4,17.8])i.push(new _(e,0,t));return i.sort((t,e)=>t.distanceTo(vm)-e.distanceTo(vm))})(),Kc=2.2,pa=1.3;function MT(i){const t=xi[i];return new _(t.x,0,t.z+(t.z<(ve.z0+ve.z1)/2?1:-1)*(pa/2+.45))}function ym(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.fillStyle="#5a3a1e",e.fillRect(0,0,512,128),e.strokeStyle="#d9a845",e.lineWidth=8,e.strokeRect(6,6,500,116),e.fillStyle="#f2c96b",e.textAlign="center",e.textBaseline="middle",e.font='600 52px "Lora", Georgia, serif',e.fillText(i,256,68);const n=new Ve(t);return n.colorSpace=de,new mt({map:n,roughness:.6})}function wT(){const i=new it,t=new mt({color:"#4a3424",roughness:1});for(const r of xi){const a=new z(new Wt(Kc,.32,pa),k.timber());a.position.set(r.x,.16,r.z);const c=new z(new Wt(Kc-.16,.04,pa-.16),t);c.position.set(r.x,.33,r.z),i.add(a,c),Ee(r.x,r.z,Kc,pa)}const e=k.leafLight(),n=(r,a,c,l)=>{const h=Math.hypot(c-r,l-a),u=new z(new Wt(Math.abs(c-r)||.5,.55,Math.abs(l-a)||.5),e);u.position.set((r+c)/2,.27,(a+l)/2),i.add(u),h&&Ee((r+c)/2,(a+l)/2,Math.abs(c-r)||.5,Math.abs(l-a)||.5)},s=(ve.z0+ve.z1)/2;n(ve.x0,ve.z0,ve.x1,ve.z0),n(ve.x0,ve.z1,ve.x1,ve.z1),n(ve.x1,ve.z0,ve.x1,ve.z1),n(ve.x0,ve.z0,ve.x0,s-1.8),n(ve.x0,s+1.8,ve.x0,ve.z1);for(const r of[71,76,81])for(let a=ve.x0+1;a<ve.x1-.8;a+=1.6){const c=new z(new ft(.34,.36,.05,8),k.blueStone());c.position.set(a,.03,r+Math.sin(a)*.15),i.add(c)}const o=new z(new Wt(2.4,.6,.08),[k.lacquer(),k.lacquer(),k.lacquer(),k.lacquer(),ym("Vườn hoa dâng Phật"),ym("Vườn hoa dâng Phật")]);o.rotation.y=Math.PI/2,o.position.set(ve.x0-.2,1.75,s),i.add(o);for(const r of[-1,1]){const a=new z(new ft(.07,.08,2.1,8),k.lacquer());a.position.set(ve.x0-.2,1.05,s+r*1.3),i.add(a)}return i}const xm=new Map,An=(i,t={})=>{const e=i+JSON.stringify(t);let n=xm.get(e);return n||xm.set(e,n=new mt({color:i,roughness:.7,...t})),n},ST="#4f8a3a",Uh="#8a7448";function Ic(i,t,e,n,s=0){const o=new z(new ft(.012,.018,i,5),An(t));return o.position.set(e,i/2,n),o.rotation.z=s,o}function TT(i,t,e){const n=new it,s=e?Uh:ST,o=[[-.6,-.25],[0,.2],[.6,-.2],[-.3,.3],[.35,.3]];if(i==="sen"){const a=new z(new ft(.5,.38,.3,16),An("#6b4a3a",{roughness:.4}));a.position.y=.15;const c=new z(new Yn(.46,16),An("#4d7f8c",{roughness:.15}));if(c.rotation.x=-Math.PI/2,c.position.y=.29,n.add(a,c),t>=1)for(const[l,h]of[[-.18,-.1],[.2,.12],[.05,-.22]]){const u=new z(new Yn(.14,10),An(s,{side:Re}));u.rotation.x=-Math.PI/2,u.position.set(l,.3,h),n.add(u)}if(t>=2){n.add(Ic(.45,s,0,0,e?.5:0));const l=new it;if(l.position.set(e?.2:0,.47,0),t===2)l.add(new z(new gt(.07,8,6).scale(1,1.6,1),An(e?Uh:"#e98aa3")));else for(let h=0;h<8;h++){const u=new z(new gt(.07,8,6).scale(.6,1.4,.35),An("#f3a6b8",{emissive:"#f06a8c",emissiveIntensity:.12})),d=h/8*Math.PI*2;u.position.set(Math.cos(d)*.06,.04,Math.sin(d)*.06),u.rotation.set(Math.sin(d)*.6,0,-Math.cos(d)*.6),l.add(u)}t===3&&l.add(new z(new ft(.035,.03,.03,8),An("#f2c94a"))),n.add(l)}return t===0&&n.add(new z(new gt(.04,6,4),An("#6b5a3a")).translateY(.3)),n}const r=t===0?0:5;if(t===0){for(const[a,c]of o)n.add(new z(new gt(.03,5,4),An("#2e2016")).translateX(a).translateZ(c).translateY(.36));return n}for(let a=0;a<r;a++){const[c,l]=o[a],h=t===1?.12:i==="lan"?.42:.36,u=new it;if(u.position.set(c,.35,l),e&&(u.rotation.z=.5*(a%2?1:-1)),i==="lan"){for(const d of[-1,1]){const f=new z(new Wt(.04,.008,.3),An(s));f.position.set(d*.05,.03,0),f.rotation.set(.2,d*.6,d*.3),u.add(f)}if(t>=2){u.add(Ic(h,s,0,0,.15));for(let d=0;d<3;d++){const f=new z(new gt(t===3?.05:.025,8,6).scale(1.3,.8,.5),An(t===3?d%2?"#b27ad9":"#efe3f7":"#9cc07a",{emissive:t===3?"#7a3aa8":"#000000",emissiveIntensity:.08}));f.position.set(-.03-d*.04,h-d*.06,0),u.add(f)}}else u.add(Ic(h,s,0,0))}else{if(u.add(Ic(h,s,0,0)),t>=1){const d=new z(new gt(.06,6,4).scale(1.4,.4,.8),An(s));d.position.y=h*.45,u.add(d)}if(t===2&&u.add(new z(new gt(.04,8,6),An(e?Uh:"#9cb85a")).translateY(h)),t===3){const d=new z(new gt(.13,12,8).scale(1,.55,1),An("#f2b632",{emissive:"#e08a10",emissiveIntensity:.12}));d.position.y=h;const f=new z(new gt(.05,8,6),An("#c9781e"));f.position.y=h+.05,u.add(d,f)}}n.add(u)}return n}const Oh=30;class ET{group=new it;hits=[];plants=xi.map(()=>null);keys=xi.map(()=>"");tags=[];owners=xi.map(()=>null);drops;dropPos=new Float32Array(Oh*3);dropAt=-99;dropBed=0;constructor(t){xi.forEach((n,s)=>{const o=new z(new Wt(Kc,.9,pa),new xe({visible:!1}));o.position.set(n.x,.45,n.z),o.userData.bed=s,this.group.add(o),this.hits.push(o);const r=document.createElement("div");r.className="bed-tag"+(s===0?" mine":""),t.appendChild(r),this.tags.push(r)});const e=new me;e.setAttribute("position",new Oe(this.dropPos,3)),this.drops=new _s(e,new $i({color:"#bfe3f2",size:.05,transparent:!0,opacity:.85,depthWrite:!1})),this.drops.visible=!1,this.drops.frustumCulled=!1,this.group.add(this.drops)}set(t,e){this.owners=xi.map((n,s)=>{if(s===0)return{pid:e,name:"Luống của bạn",plot:t.mine,friend:!1};const o=t.beds[s-1];return o?{pid:o.pid,name:o.name,plot:o,friend:o.friend}:null}),this.owners.forEach((n,s)=>{const o=n?.plot,r=o?`${o.k}${o.stage}${o.wilted}`:"";if(r===this.keys[s]||(this.keys[s]=r,this.plants[s]&&this.group.remove(this.plants[s]),this.plants[s]=null,!o))return;const a=TT(o.k,o.stage,o.wilted);a.position.copy(xi[s]),this.group.add(a),this.plants[s]=a})}water(t,e){this.dropBed=t,this.dropAt=e}update(t,e,n){const s=Math.hypot(n.x-(ve.x0+ve.x1)/2,n.z-(ve.z0+ve.z1)/2)<24;this.group.visible=s,this.owners.forEach((a,c)=>{const l=this.tags[c],h=xi[c],u=new _(h.x,.95,h.z).project(e),d=s&&u.z<1&&h.distanceTo(new _(n.x,0,n.z))<11&&(c===0||!!a);if(l.style.display=d?"block":"none",!d)return;const f=a?.plot,p=f?f.stage===3?"Đã nở":f.wilted?"Đang héo":f.watered?`Đã tưới · ${f.grown}/${f.need}`:`Cần tưới · ${f.grown}/${f.need}`:c===0?"Chưa gieo":"";l.innerHTML="";const v=document.createElement("b");v.textContent=(a?.friend?"♥ ":"")+(a?.name??"");const m=document.createElement("small");m.textContent=p,f&&!f.watered&&f.stage<3&&(m.className="thirsty"),l.append(v,m),l.style.left=`${(u.x*.5+.5)*innerWidth}px`,l.style.top=`${(-u.y*.5+.5)*innerHeight}px`});const o=t-this.dropAt;if(this.drops.visible=o>=0&&o<1.5,!this.drops.visible)return;const r=xi[this.dropBed];for(let a=0;a<Oh;a++){const c=(o*1.8+a/Oh)%1;this.dropPos[a*3]=r.x-.8+a*7%16/10,this.dropPos[a*3+1]=1.2-c*.85,this.dropPos[a*3+2]=r.z-.45+a*3%10/11}this.drops.geometry.attributes.position.needsUpdate=!0}}function AT(){const i=new it;i.add(eS(),aS(),PS(),hT());const t=rt.frontLake;i.add(oT()),i.add(Ah(t.x,t.z,t.rx,t.rz,120,h=>Math.abs(h)<rt.causeway.half+3)),i.add(wS(),lT());const e=rt.avenue;for(let h=e.z1-5;h>=e.z0+2;h-=5.5)i.add(em(-3.2-1,h),em(e.half+1,h));for(let h=e.z1-8;h>=e.z0+4;h-=11){const u=Math.abs(h-5.5-75.5)<1?70.5:h-5.5;i.add(Tc(-3.2-4.5,h,1.1),Tc(e.half+4.5,u,1.1))}i.add(rm(-9,92),rm(9,92));for(let h=e.z1-10;h>=e.z0+4;h-=11)i.add(fm(-3.2-2.3,h),fm(e.half+2.3,h));const n=rt.halfMoon;i.add(Ah(n.x-n.r*.38,n.z,n.r*.32,n.r*.85,26)),i.add(ro(-34,70,1.4),ro(24,82,1.2));for(const[h,u]of[[20,92],[-14,64]])i.add(ul(h,u,1.1));i.add(wT()),i.add(im(-15,52,"bell"),im(15,52,"drum")),i.add(SS(0,33)),i.add(ro(-17,40,1.15),ro(17,22,1)),i.add(ed(-17,40,3,10,"ring-a"),ed(17,22,2.8,10,"ring-b"));for(const h of ug)i.add(kh(h.x,h.z,0,h.id));for(const h of[-1,1])i.add(om(h,rt.corridorGap.z1,58),om(h,rt.corridorStart,rt.corridorGap.z0));for(const h of[-20,-12,12,20])i.add(ul(h,18,.9));const s=rt.terrace;i.add(sm(s,0,rt.upper.x1)),i.add(nm(-s.stairHalf-2,s.z1+s.stairLen+1.2,0),nm(s.stairHalf+2,s.z1+s.stairLen+1.2,0)),i.add(sT());for(const h of[-25,25])for(const u of[8,-10,-38]){const d=Tc(h,u,1.15);d.position.y=s.y,i.add(d)}const o=rt.upper;i.add(sm(o,s.y)),i.add(TS(0,-62,o.y));for(const[h,u]of[[-10,-52],[10,-52],[-10,-70],[10,-70]])i.add(Ch(h,u,1.1,o.y));for(let h=0;h<14;h++)i.add(Ch(-22+h%7*7.5+(h>6?3:0),-78+(h>6?-3:0),1.3));for(const[h,u]of[[-36,50],[-44,40],[-50,24],[-38,12],[-48,2],[-36,-10],[-56,-12],[-40,-56],[-52,-62]])i.add(Ch(h,u,1.2));for(const[h,u]of[[-34,-2],[-52,46],[-56,-56],[-34,62],[-28,-60]])i.add(Qp(h,u,16));i.add(Yo(-40,30,Math.PI/2,"garden-a"),Yo(-42,6,Math.PI/2,"garden-b")),i.add(aT());const r=rt.lake;i.add(ES(),AS()),i.add(Ah(r.x,r.z,r.rx,r.rz,200,(h,u)=>Math.abs(u-rt.bridge.z)<2&&h<r.x+3||Math.hypot(h-r.x,u-r.z)<3.4)),i.add(CS(50,-18),cT()),i.add(RS(40,44)),i.add(Yo(33,0,1.9,"lake-a"),Yo(66,18,-1.4,"lake-b"),Yo(58,36,-2.6,"lake-c")),i.add(dT(63,-15)),i.add(kh(38,-8,.6,"lake-d"),kh(62,30,-.8,"lake-e")),i.add(ro(68,4,1.1),ro(64,46,.9));for(const[h,u]of[[68,30],[36,56],[64,-28],[36,-26],[68,-66],[30,-70]])i.add(Qp(h,u,14));for(const[h,u]of[[46,54],[54,56],[30,52]])i.add(Tc(h,u,1));i.add(_T());const a=lS();i.add(a);const c=mT();i.add(c.root),CT(i),i.add(c.glow);const l=[new _(0,3,96),new _(0,3,72),new _(0,4,30),new _(0,6,-2),new _(50,3.4,-14.5),new _(40,2.6,44),new _(50,2.6,12)];return{root:i,fireflies:a,lights:l,lamps:c}}function CT(i){i.updateMatrixWorld(!0);const t=new Set([...Bn,...Gi,...Di.map(a=>a.mesh)]),e=new Set($d),n=new Map,s=[],o=[];i.traverse(a=>{if(!(a instanceof z)||a instanceof ci||Array.isArray(a.material))return;const c=a.material;if(!c.visible||c.onBeforeCompile.toString().includes("uTime"))return;const l=c.vertexColors;if(l&&!a.geometry.attributes.color)return;for(let d=a;d;d=d.parent)if(e.has(d))return;let h=a.geometry.clone().applyMatrix4(a.matrixWorld);h.index&&(h=h.toNonIndexed());for(const d of Object.keys(h.attributes))["position","normal","uv",...l?["color"]:[]].includes(d)||h.deleteAttribute(d);if(l){const d=h.attributes.color,f=new Float32Array(d.count*3);for(let p=0;p<d.count;p++)f.set([d.getX(p),d.getY(p),d.getZ(p)],p*3);h.setAttribute("color",new Yt(f,3))}h.attributes.normal||h.computeVertexNormals(),h.attributes.uv||h.setAttribute("uv",new Yt(new Float32Array(h.attributes.position.count*2),2)),h.morphAttributes={};const u=n.get(c)??[];u.push(h),n.set(c,u),t.has(a)?o.push(a):s.push(a)});for(const a of s)a.removeFromParent();const r=new xe({visible:!1});for(const a of o)a.material=r;for(const[a,c]of n){const l=Tl(c,!1);if(!l)continue;const h=new z(l,a);h.castShadow=!0,h.receiveShadow=!0,i.add(h)}}const bm=[{f1:700,f2:1200,step:0,len:.85,nasalStart:!0,nasalEnd:!0},{f1:430,f2:820,step:0,len:.85,nasalStart:!0},{f1:720,f2:1250,step:2,len:.85},{f1:300,f2:2100,step:2,len:.8,burst:"d"},{f1:700,f2:1150,step:0,len:.85,burst:"d"},{f1:620,f2:1180,step:-2,len:.7,burst:"f"}];class RT{ctx=null;master=null;cicadas=null;bellTimer=0;lifeTimer=0;night=0;indoor=!1;nextBird=0;nextFrog=0;nextCricket=0;volume=1;playing=!1;hushed=!1;get context(){return this.ctx}setVolume(t){this.volume=t,this.playing&&this.ctx&&this.master&&this.master.gain.setTargetAtTime(.9*t,this.ctx.currentTime,.15)}start(){this.ctx||this.build(),this.playing=!0,this.ctx.resume(),this.master.gain.setTargetAtTime(.9*this.volume,this.ctx.currentTime,.8),clearInterval(this.bellTimer),this.bellTimer=window.setInterval(()=>!this.hushed&&this.bell(.12),45e3),setTimeout(()=>!this.hushed&&this.bell(.16),1200),clearInterval(this.lifeTimer),this.lifeTimer=window.setInterval(()=>this.life(),200)}stop(){this.playing=!1,!(!this.ctx||!this.master)&&(this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.4),clearInterval(this.bellTimer),clearInterval(this.lifeTimer))}setScene(t,e){if(this.night=t,this.indoor=e,this.ctx&&this.cicadas){const n=this.hushed?0:Math.max(0,1-t*2);this.cicadas.gain.setTargetAtTime(n*(e?.012:.035),this.ctx.currentTime,this.hushed?.5:2)}}life(){const t=this.ctx;if(!t)return;const e=t.currentTime,n=this.indoor?.35:1;this.hushed||(this.night<.5&&e>this.nextBird&&(this.bird(n*(.5+Math.random()*.5)),this.nextBird=e+2.5+Math.random()*6),this.night>.5&&e>this.nextCricket&&(this.cricket(n),this.nextCricket=e+.5+Math.random()*.6),this.night>.4&&e>this.nextFrog&&(this.frog(n*(.5+Math.random()*.5)),this.nextFrog=e+(Math.random()<.4?.4:2+Math.random()*5)))}voice(t,e){const n=this.ctx,s=n.createStereoPanner();s.pan.value=t;const o=n.createGain();return o.gain.value=e,o.connect(s).connect(this.master),o}bird(t){const e=this.ctx,n=this.voice(Math.random()*1.6-.8,.05*t);let s=e.currentTime+.05;const o=2200+Math.random()*1800,r=3+Math.floor(Math.random()*5);for(let a=0;a<r;a++){const c=.06+Math.random()*.1,l=e.createOscillator(),h=o*(.8+Math.random()*.5);l.frequency.setValueAtTime(h,s),l.frequency.exponentialRampToValueAtTime(h*(Math.random()<.5?1.35:.75),s+c);const u=e.createGain();u.gain.setValueAtTime(0,s),u.gain.linearRampToValueAtTime(1,s+.012),u.gain.exponentialRampToValueAtTime(.001,s+c),l.connect(u).connect(n),l.start(s),l.stop(s+c+.02),s+=c+.03+Math.random()*.08}}cricket(t){const e=this.ctx,n=this.voice(Math.random()*1.2-.6,.02*t),s=4300+Math.random()*500;for(let o=0;o<3;o++){const r=e.currentTime+o*.045,a=e.createOscillator();a.frequency.value=s;const c=e.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(1,r+.005),c.gain.exponentialRampToValueAtTime(.001,r+.03),a.connect(c).connect(n),a.start(r),a.stop(r+.04)}}frog(t){const e=this.ctx,n=e.currentTime,s=this.voice(Math.random()*1.4-.7,.07*t),o=.12+Math.random()*.12,r=e.createOscillator();r.type="sawtooth";const a=150+Math.random()*120;r.frequency.setValueAtTime(a,n),r.frequency.linearRampToValueAtTime(a*1.15,n+o);const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=600,c.Q.value=3;const l=e.createGain();l.gain.value=.5;const h=e.createOscillator();h.frequency.value=28+Math.random()*12;const u=e.createGain();u.gain.value=.5,h.connect(u).connect(l.gain);const d=e.createGain();d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(1,n+.02),d.gain.setValueAtTime(1,n+o-.03),d.gain.linearRampToValueAtTime(0,n+o),r.connect(c).connect(l).connect(d).connect(s),r.start(n),h.start(n),r.stop(n+o+.02),h.stop(n+o+.02)}build(){const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination);const e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);for(let f=0;f<e;f++)s[f]=Math.random()*2-1;const o=t.createBufferSource();o.buffer=n,o.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=5200,r.Q.value=6;const a=t.createGain();a.gain.value=.5;const c=t.createOscillator();c.frequency.value=46;const l=t.createGain();l.gain.value=.5,c.connect(l).connect(a.gain);const h=t.createGain();h.gain.value=.6;const u=t.createOscillator();u.frequency.value=.09;const d=t.createGain();d.gain.value=.4,u.connect(d).connect(h.gain),this.cicadas=t.createGain(),this.cicadas.gain.value=0,o.connect(r).connect(a).connect(h).connect(this.cicadas).connect(this.master),o.start(),c.start(),u.start(),this.setScene(this.night,this.indoor)}get on(){return this.playing&&!!this.ctx&&this.ctx.state==="running"&&this.volume>.01}mo(t=.5){const e=this.ctx;if(!e||!this.master)return;const n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(760,n),s.frequency.exponentialRampToValueAtTime(420,n+.08);const o=e.createGain();o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.18),s.connect(o).connect(this.master),s.start(n),s.stop(n+.2)}bead(){const t=this.ctx;if(!t||!this.master)return;const e=t.currentTime;for(const[n,s]of[[1900,.05],[1350,.07]]){const o=t.createOscillator();o.frequency.value=n;const r=t.createGain();r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(1e-4,e+s),o.connect(r).connect(this.master),o.start(e),o.stop(e+s+.01)}}chant(t,e=.5){const n=this.ctx;if(!n||!this.master)return;const s=bm[t%bm.length],o=n.currentTime+.02,r=s.len,a=98*Math.pow(2,s.step/12),c=n.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(e*.24,o+(s.nasalStart?.09:.04)),c.gain.setValueAtTime(e*.24,o+r*.7),c.gain.exponentialRampToValueAtTime(8e-4,o+r),c.connect(this.temple());const l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(s.nasalStart?500:3500,o),l.frequency.linearRampToValueAtTime(3500,o+.08),s.nasalEnd&&l.frequency.setTargetAtTime(380,o+r*.55,.06),l.connect(c);for(const[h,u,d]of[[s.f1,6,1],[s.f2,9,.5]]){const f=n.createBiquadFilter();f.type="bandpass",f.frequency.value=h,f.Q.value=u;const p=n.createGain();p.gain.value=d,f.connect(p).connect(l);for(const[v,m]of[[-9,1],[0,1],[7,1],[3,2]]){const g=n.createOscillator();g.type="sawtooth",g.frequency.value=a*m,g.detune.value=v+(Math.random()-.5)*6;const x=n.createOscillator();x.frequency.value=4.5+Math.random();const b=n.createGain();b.gain.value=4,x.connect(b).connect(g.detune);const y=n.createGain();y.gain.value=m===2?.35:1,g.connect(y).connect(f),g.start(o),x.start(o),g.stop(o+r+.05),x.stop(o+r+.05)}}if(s.burst){const h=n.createBufferSource();h.buffer=this.noise();const u=n.createBiquadFilter();u.type="highpass",u.frequency.value=s.burst==="f"?1800:600;const d=n.createGain();d.gain.setValueAtTime(e*(s.burst==="f"?.05:.08),o),d.gain.exponentialRampToValueAtTime(5e-4,o+(s.burst==="f"?.1:.03)),h.connect(u).connect(d).connect(this.temple()),h.start(o),h.stop(o+.12)}}reverb=null;noiseBuf=null;temple(){const t=this.ctx;if(!this.reverb){const e=t.sampleRate*3,n=t.createBuffer(2,e,t.sampleRate);for(let r=0;r<2;r++){const a=n.getChannelData(r);for(let c=0;c<e;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/e,3)}this.reverb=t.createConvolver(),this.reverb.buffer=n;const s=t.createGain();s.gain.value=.55,this.reverb.connect(s).connect(this.master);const o=t.createGain();o.connect(this.reverb),o.connect(this.master),this.templeIn=o}return this.templeIn}templeIn=null;noise(){const t=this.ctx;if(!this.noiseBuf){this.noiseBuf=t.createBuffer(1,t.sampleRate*.2,t.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}return this.noiseBuf}muyu(t=.55){const e=this.ctx;if(!e||!this.master)return;const n=e.currentTime,a=e.createOscillator(),c=e.createGain();a.type="sine",a.frequency.setValueAtTime(560,n),a.frequency.exponentialRampToValueAtTime(130,n+.08),c.gain.setValueAtTime(t,n),c.gain.exponentialRampToValueAtTime(1e-4,n+.12),a.connect(c).connect(this.master),a.start(n),a.stop(n+.14)}bell(t=.3){const e=this.ctx;if(!e||!this.master)return;const n=e.currentTime;for(const[s,o,r]of[[110,1,9],[221,.5,7],[297,.35,5],[442,.2,3.5],[663,.1,2]]){const a=e.createOscillator();a.frequency.value=s;const c=e.createGain();c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(t*o,n+.02),c.gain.exponentialRampToValueAtTime(1e-4,n+r),a.connect(c).connect(this.master),a.start(n),a.stop(n+r)}}}const Ls=[{src:"/music/01.mp3",title:"Sớm Mai Cửa Thiền"},{src:"/music/02.mp3",title:"Mưa Êm Mái Chùa"},{src:"/music/03.mp3",title:"Hồ Sen Tĩnh Lặng"},{src:"/music/04.mp3",title:"Niệm Phật An Tâm — Giọng Trầm"},{src:"/music/05.mp3",title:"Sen Tịnh Niệm Phật — Giọng Nữ"},{src:"/music/06.mp3",title:"Buông Thư Dưới Hiên Chùa"},{src:"/music/07.mp3",title:"Gió Trúc An Nhiên"},{src:"/music/08.mp3",title:"Một Đóa Từ Tâm"},{src:"/music/09.mp3",title:"Trăng Yên Bên Thềm"},{src:"/music/10.mp3",title:"Lối Về Bình Yên"},{src:"/music/11.mp3",title:"Một Lòng Hướng Phật"}],PT=.5,_m="anduyen.music";class LT{el=new Audio;index=0;level=0;wanted=0;saved={i:0,at:0};gain=null;attach(t){if(!this.gain)try{const e=t.createMediaElementSource(this.el);this.gain=t.createGain(),this.gain.gain.value=0,e.connect(this.gain).connect(t.destination),this.el.volume=1}catch{}}constructor(){this.el.preload="none",this.el.volume=0,this.el.addEventListener("ended",()=>this.load(this.index+1,0,!0)),this.el.addEventListener("error",()=>setTimeout(()=>this.load(this.index+1,0,this.wanted>0),4e3));try{const t=JSON.parse(localStorage.getItem(_m)||"null");t&&Number.isInteger(t.i)&&(this.saved={i:(t.i%Ls.length+Ls.length)%Ls.length,at:Number(t.at)||0})}catch{}this.index=this.saved.i,setInterval(()=>this.remember(),5e3)}get title(){return`${String(this.index+1).padStart(2,"0")} · ${Ls[this.index].title}`}load(t,e,n){this.index=(t%Ls.length+Ls.length)%Ls.length,this.el.src=Ls[this.index].src,e>0&&this.el.addEventListener("loadedmetadata",()=>this.el.currentTime=Math.min(e,Math.max(0,this.el.duration-5)),{once:!0}),n&&this.el.play().catch(()=>{})}remember(){if(this.el.src)try{localStorage.setItem(_m,JSON.stringify({i:this.index,at:Math.floor(this.el.currentTime||0)}))}catch{}}update(t,e,n,s){this.wanted=e&&!n?PT*s:0,this.wanted>0&&this.el.paused&&(this.el.src?this.el.play().catch(()=>{}):this.load(this.saved.i,this.saved.at,!0));const o=t*.35;this.level+=Math.max(-o,Math.min(o,this.wanted-this.level));const r=Math.max(0,Math.min(1,this.level));this.gain?this.gain.gain.value=r:this.el.volume=r,this.wanted===0&&this.level<.005&&!this.el.paused&&(this.el.pause(),this.remember())}get playing(){return!this.el.paused&&this.level>.01}}const nd="anduyen.cid",Yd="anduyen.adopt";function Ng(i){try{localStorage.setItem(nd,i),localStorage.setItem(Yd,"1")}catch{}location.reload()}function IT(){try{for(const i of Object.keys(localStorage))i.startsWith("anduyen.")&&i!=="anduyen.settings"&&i!=="anduyen.hint"&&localStorage.removeItem(i)}catch{}location.reload()}function kT(){try{return localStorage.getItem(Yd)==="1"}catch{return!1}}function NT(){try{localStorage.removeItem(Yd)}catch{}}function Dg(){try{let i=localStorage.getItem(nd);return i||(i=crypto.randomUUID(),localStorage.setItem(nd,i)),i}catch{return Mm??=crypto.randomUUID(),Mm}}let Mm;class DT{constructor(t,e,n){this.hello=t,this.onMsg=e,this.onStatus=n,this.open()}ws=null;retry=1e3;myId=0;myPid="";room="";connected=!1;halted=!1;halt(){this.halted=!0,this.ws?.close()}open(){const _p=new URLSearchParams(window.location.search).get("ws"),_c=window.AN_BINH_TU_WS||localStorage.getItem("anbinhtu_ws"),t=_p||_c||(location.host.includes("vercel.app")?"wss://an-binh-tu.onrender.com/ws":`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`),e=new WebSocket(t);this.ws=e,e.onopen=()=>{this.retry=1e3,this.connected=!0,this.onStatus(!0),e.send(JSON.stringify({t:"hello",cid:Dg(),adopt:kT(),...this.hello()}))},e.onmessage=n=>{let s;try{s=JSON.parse(n.data)}catch{return}s.t==="welcome"&&(this.myId=s.id,this.myPid=s.pid,this.room=s.room),this.onMsg(s)},e.onclose=()=>{this.connected=!1,this.onStatus(!1),!this.halted&&(setTimeout(()=>this.open(),this.retry),this.retry=Math.min(this.retry*2,15e3))}}send(t){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}}function Ug(i="tieu",t="nau",e="dong"){const n=qn[t]??qn.nau,s=(fo[e]??fo.dong)[0];return`<svg viewBox="0 0 64 64" aria-hidden="true">
    <defs><radialGradient id="avbg" cx="50%" cy="38%" r="65%"><stop offset="0" stop-color="#f6dfb4"/><stop offset="1" stop-color="#c99a5c"/></radialGradient></defs>
    <circle cx="32" cy="32" r="32" fill="url(#avbg)"/>
    <path d="M10 64c1-14 9-22 22-22s21 8 22 22z" fill="${n}"/>
    <path d="M20 48c8 6 18 9 26 6" stroke="#dba53e" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="15.5" cy="28" r="3.6" fill="${s}"/><circle cx="48.5" cy="28" r="3.6" fill="${s}"/>
    <circle cx="32" cy="27" r="16.5" fill="${s}"/>
    <ellipse cx="32" cy="22" rx="10" ry="6" fill="#fff" opacity="0.12"/>
    ${i==="ni"?'<path d="M15.5 25a16.5 16.5 0 0 1 33 0c-5-3-28-3-33 0z" fill="#8f8a80"/>':""}
    <path d="M24.5 30q2.5 2.4 5 0M34.5 30q2.5 2.4 5 0" stroke="#2a211b" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M29.5 35.5q2.5 1.6 5 0" stroke="#7a3b22" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  </svg>`}const jn={meo:{name:"Mèo chùa",lv:2,days:7,desc:"Lười biếng mà hiền, thích nằm sưởi nắng bên hiên"},se:{name:"Chim sẻ",lv:3,days:14,desc:"Nhảy lích chích theo chân, mổ hạt thóc rơi"},tho:{name:"Thỏ trắng",lv:4,days:21,desc:"Nhút nhát nhưng quấn chủ, nhảy từng bước nhỏ"},soc:{name:"Sóc nâu",lv:4,days:30,desc:"Nhanh nhẹn, đuôi to như chổi lông"},rua:{name:"Rùa vàng",lv:5,days:45,desc:"Chậm rãi, điềm tĩnh, sống lâu như chùa"},huou:{name:"Hươu sao",lv:5,days:60,desc:"Hiền lành, lưng lấm tấm sao trắng"},hac:{name:"Hạc trắng",lv:6,days:90,desc:"Thanh cao, chân dài, cổ vươn như đang múa"}},Al=Object.keys(jn),UT={vui:"Vui vẻ",binhyen:"Bình yên",buonngu:"Buồn ngủ"},wm=new Map,Dn=(i,t=.8)=>{const e=i+t;let n=wm.get(e);return n||wm.set(e,n=new mt({color:i,roughness:t})),n},Og="#2a211b";function te(i,t,e=0,n=0,s=0,o=1,r=1,a=1){const c=new z(new gt(i,14,10),Dn(t));return c.position.set(e,n,s),c.scale.set(o,r,a),c.castShadow=!0,c}function id(i,t,e){const n=new z(new ft(i,i*.85,t,6),Dn(e));return n.position.y=-t/2,n.castShadow=!0,n}function Wo(i,t,e,n,s,o){const r=new it;return r.position.set(n,s,o),r.add(id(i,t,e)),r}function to(i,t,e,n,s){for(const o of[-1,1]){const r=new z(new Ge(t,t*.28,4,8,Math.PI),Dn(Og,.4));r.position.set(o*e,n,s),r.rotation.z=Math.PI,i.add(r)}}function Kd(i){const t=new it,e=new it,n=new it;t.add(e),e.add(n);const s=[],o=[];let r=null,a=!1,c=4.2,l=.6;if(i==="meo"){e.add(te(.17,"#e3954a",0,.22,0,1,.85,1.3),te(.11,"#f6e2c4",0,.2,.12,1,.9,.8)),n.position.set(0,.4,.17),n.add(te(.15,"#e3954a"),te(.07,"#f6e2c4",0,-.04,.11,1.2,.8,.7));for(const u of[-1,1]){const d=new z(new rn(.055,.1,4),Dn("#d4823a"));d.position.set(u*.085,.12,-.01),d.rotation.z=-u*.3,n.add(d)}n.add(te(.015,"#e58a92",0,0,.15)),to(n,.028,.06,.02,.135);for(const[u,d]of[[-.08,.13],[.08,.13],[-.08,-.13],[.08,-.13]])s.push(Wo(.04,.14,"#e3954a",u,.14,d));const h=new Hi([new _(0,.24,-.2),new _(0,.3,-.33),new _(0,.46,-.36),new _(.04,.55,-.3)]);r=new it,r.add(new z(new li(h,10,.032,6),Dn("#d4823a"))),r.position.set(0,0,0),l=.6,c=4.4}else if(i==="se"){t.scale.setScalar(1.5),e.add(te(.1,"#9a6b43",0,.13,0,1,.95,1.2),te(.07,"#efe1c8",0,.11,.04,1,.9,1)),n.position.set(0,.23,.07),n.add(te(.075,"#8a5a36"),te(.026,"#f3ead8",-.05,-.018,.035,.6,1,1),te(.026,"#f3ead8",.05,-.018,.035,.6,1,1));const h=new z(new rn(.018,.05,5),Dn("#5a4030"));h.rotation.x=Math.PI/2,h.position.set(0,-.005,.085),n.add(h),to(n,.016,.035,.015,.065);for(const d of[-1,1]){const f=new it;f.position.set(d*.09,.16,-.01),f.add(te(.06,"#7a5232",0,-.02,-.02,.35,.8,1.3)),e.add(f),o.push(f)}const u=new z(new Wt(.07,.015,.12),Dn("#6a4a2e"));u.position.set(0,.16,-.15),u.rotation.x=-.4,r=u;for(const d of[-1,1])s.push(Wo(.008,.06,"#5a4030",d*.035,.06,0));a=!0,c=4.6,l=.45}else if(i==="tho"){e.add(te(.16,"#f7f3ee",0,.17,-.02,1,.9,1.2)),n.position.set(0,.34,.12),n.add(te(.12,"#f7f3ee"),te(.015,"#f2a0ae",0,-.02,.12));for(const h of[-1,1]){const u=new it;u.position.set(h*.05,.08,-.02),u.rotation.z=-h*.15,u.add(te(.035,"#f7f3ee",0,.12,0,1,3.6,.7),te(.02,"#f6c2cc",0,.12,.018,1,3.2,.4)),n.add(u)}to(n,.022,.05,.02,.105),e.add(te(.05,"#ffffff",0,.18,-.2));for(const[h,u,d]of[[-.06,.11,.04],[.06,.11,.04],[-.1,-.07,.06],[.1,-.07,.06]])e.add(te(d,"#efe9e2",h,d*.8,u,1,.75,1.3));a=!0,c=4.6,l=.68}else if(i==="soc"){e.add(te(.12,"#a5643a",0,.17,0,.95,1.15,1),te(.08,"#f0d9b5",0,.16,.06,.9,1.1,.7)),n.position.set(0,.34,.06),n.add(te(.1,"#a5643a"),te(.045,"#f0d9b5",0,-.03,.07,1.3,.8,.8));for(const u of[-1,1]){const d=new z(new rn(.03,.07,5),Dn("#8c5230"));d.position.set(u*.06,.1,-.01),n.add(d)}to(n,.02,.045,.02,.09);const h=new it;h.position.set(0,.14,-.12),h.add(te(.09,"#c07a48",0,.06,-.06),te(.11,"#c98a55",0,.2,-.12),te(.1,"#d39a62",0,.34,-.06)),r=h;for(const[u,d]of[[-.06,.07],[.06,.07],[-.07,-.05],[.07,-.05]])s.push(Wo(.03,.08,"#8c5230",u,.08,d));c=5,l=.6}else if(i==="rua"){const h=te(.22,"#d6a92c",0,.12,0,1,.62,1.2);h.material=Dn("#d6a92c",.45);const u=new z(new Ge(.21,.035,5,16),Dn("#a57d1e"));u.rotation.x=Math.PI/2,u.scale.set(1,1.2,1),u.position.y=.1,e.add(h,u,te(.08,"#e9c45a",0,.24,0,1,.5,1.2)),n.position.set(0,.13,.28),n.add(te(.075,"#b9b56a")),to(n,.017,.035,.02,.065);for(const[d,f]of[[-.16,.14],[.16,.14],[-.16,-.14],[.16,-.14]]){const p=Wo(.045,.06,"#a9a65e",d,.07,f);p.scale.set(1.3,1,1.6),s.push(p)}c=1.8,l=.4}else if(i==="huou"){e.add(te(.22,"#c9884d",0,.46,0,.95,.9,1.45),te(.13,"#efd7b4",0,.4,.12,.9,.8,1));for(const[u,d,f]of[[.13,.55,.08],[-.13,.55,.04],[.11,.6,-.12],[-.09,.62,-.17],[0,.65,0],[.15,.5,-.19],[-.16,.5,-.05]])e.add(te(.027,"#fbf3e6",u,d,f));const h=new z(new ft(.075,.1,.24,8),Dn("#c9884d"));h.position.set(0,.64,.22),h.rotation.x=.4,e.add(h),n.position.set(0,.8,.28),n.add(te(.12,"#c9884d",0,0,0,.9,.95,1.1),te(.06,"#e8c7a0",0,-.04,.1,1,.8,.9),te(.02,Og,0,-.02,.155));for(const u of[-1,1]){const d=te(.04,"#b87a44",u*.11,.06,-.03,.6,1.5,.6);d.rotation.z=u*.8,n.add(d);const f=new it;f.position.set(u*.05,.1,-.02),f.rotation.z=-u*.35;const p=id(.012,.16,"#8a6a46");p.position.y=.08;const v=id(.01,.08,"#8a6a46");v.position.set(-u*.03,.1,.02),v.rotation.z=u*.8,f.add(p,v),n.add(f)}to(n,.022,.06,.02,.1),e.add(te(.045,"#fbf3e6",0,.52,-.3));for(const[u,d]of[[-.1,.19],[.1,.19],[-.1,-.19],[.1,-.19]])s.push(Wo(.038,.32,"#b87a44",u,.32,d));c=5,l=1}else{e.add(te(.24,"#fbfbf7",0,.72,-.02,.85,.8,1.4));const h=new z(new rn(.12,.28,6),Dn("#2a2a2a"));h.rotation.x=-Math.PI/2-.4,h.position.set(0,.74,-.34),r=h;const u=new Hi([new _(0,.8,.2),new _(0,.98,.3),new _(0,1.14,.22),new _(0,1.26,.27)]);e.add(new z(new li(u,12,.042,7),Dn("#2e2e2e")),te(.07,"#fbfbf7",0,.8,.2,1,1.2,1)),n.position.set(0,1.3,.29),n.add(te(.065,"#fbfbf7"),te(.03,"#d33a2c",0,.05,-.005,1,.5,1));const d=new z(new rn(.018,.16,5),Dn("#b8a87a"));d.rotation.x=Math.PI/2,d.position.set(0,-.01,.12),n.add(d),to(n,.014,.035,.015,.055);for(const f of[-1,1]){const p=new it;p.position.set(f*.17,.76,-.02),p.add(te(.12,"#f2f2ee",0,-.04,-.06,.35,.8,1.6),te(.06,"#2a2a2a",0,-.05,-.26,.4,.7,1)),e.add(p),o.push(p)}for(const f of[-1,1])s.push(Wo(.022,.56,"#6d6d6a",f*.07,.56,0));c=4,l=1.42}r&&e.add(r);for(const h of s)e.add(h);return{root:t,body:e,head:n,legs:s,tail:r,wings:o,hop:a,speed:c,top:l}}const Sm=7;function Tm(i,t){const e=t*2.39996;return new _(i.x+Math.cos(e)*.75,0,i.z+Math.sin(e)*.75)}function zg(i,t,e,n){const s=t==="walk",o=t==="sleep";if(t==="eat"){i.legs.forEach(a=>a.rotation.x=0),i.body.position.y=0,i.body.scale.y=1,i.head.rotation.x=.55+Math.max(0,Math.sin(n*9+e))*.35,i.head.rotation.y=0,i.tail&&(i.tail.rotation.y=Math.sin(n*6)*.3),i.wings.forEach(a=>a.rotation.z=0);return}i.legs.forEach((a,c)=>{const l=c===0||c===3?0:Math.PI;a.rotation.x=s&&!i.hop?Math.sin(e+l)*.6:0});const r=s&&i.hop?Math.max(0,Math.sin(e))*.09:0;i.body.position.y=r+(s&&!i.hop?Math.abs(Math.sin(e))*.015:0)-(o?.03:0),i.body.scale.y=o?.86+Math.sin(n*1.4)*.015:1+Math.sin(n*2.4)*.012,i.head.rotation.x=o?.45:s?.05:Math.sin(n*.6)*.08,i.head.rotation.y=o||s?0:Math.sin(n*.35)*.35,i.tail&&(i.tail.rotation.y=Math.sin(n*(s?7:2))*(o?.05:.25)),i.wings.forEach((a,c)=>a.rotation.z=(c?-1:1)*(s&&i.hop?Math.max(0,Math.sin(e*2))*.9:0))}class OT{constructor(t,e,n,s,o,r,a){this.ownerId=t,this.kind=e,this.name=n,this.nest=s,this.model=Kd(e),this.model.root.position.copy(s),this.model.root.rotation.y=Math.PI/2,o.add(this.model.root),this.hit=new z(new gt(.45,8,6),new xe({visible:!1})),this.hit.position.y=Math.min(.5,this.model.top*.5),this.hit.userData.petOwner=t,this.model.root.add(this.hit),this.tag.className="pet-tag"+(a?" mine":""),this.tag.textContent=n,r.appendChild(this.tag),this.side=t%2?1:-1}model;hit;tag=document.createElement("div");phase=0;still=0;side;eatAt=null;eatUntil=0;lastSpot=null;waited=0;update(t,e,n){const s=this.model.root,o=s.position,r=new _(n.x,0,n.z);let a,c;if(wc(n.x,n.z)){c="follow",this.lastSpot=r.clone(),this.waited=0;const v=.95,m=.75*this.side;if(a=new _(n.x-Math.sin(n.ry)*v+Math.cos(n.ry)*m,0,n.z-Math.cos(n.ry)*v-Math.sin(n.ry)*m),wc(a.x,a.z)||(a=r.clone()),Math.hypot(o.x-n.x,o.z-n.z)>25){const g=new _(n.x-Math.sin(n.ry)*5,0,n.z-Math.cos(n.ry)*5);o.copy(wc(g.x,g.z)?g:r)}}else this.lastSpot&&this.waited<120&&this.lastSpot.distanceTo(r)<40?(c="wait",this.waited+=t,a=this.lastSpot):(c="home",this.lastSpot=null,a=this.nest,Math.hypot(o.x-this.nest.x,o.z-this.nest.z)>20&&o.set(this.nest.x,0,this.nest.z));const l=!!this.eatAt&&e<this.eatUntil&&c!=="home";l&&(a=this.eatAt);const h=a.x-o.x,u=a.z-o.z,d=Math.hypot(h,u);let f="idle",p=!1;if(d>.35){const v=Math.min(this.model.speed,d*2.4+.4),m=yg(o,a,v*t,.22);if(wc(m.x,m.z)&&m.distanceToSquared(o)>1e-8){o.x=m.x,o.z=m.z,p=!0;let x=Math.atan2(h,u)-s.rotation.y;x=Math.atan2(Math.sin(x),Math.cos(x)),s.rotation.y+=x*Math.min(1,t*8),this.phase+=t*(6+v*3),f="walk",this.still=0}}if(!p&&l){let m=Math.atan2(this.eatAt.x-o.x+.001,this.eatAt.z-o.z)-s.rotation.y;m=Math.atan2(Math.sin(m),Math.cos(m)),s.rotation.y+=m*Math.min(1,t*4),f="eat"}else if(!p){this.still+=t;const v=c==="wait"?Math.atan2(n.x-o.x,n.z-o.z):c==="follow"?n.ry:null;if(v!==null){let m=v-s.rotation.y;m=Math.atan2(Math.sin(m),Math.cos(m)),s.rotation.y+=m*Math.min(1,t*2.5)}else this.still>2&&(f="sleep")}o.y=oi(o.x,o.z),zg(this.model,f,this.phase,e)}placeTag(t,e){const n=this.model.root,s=n.position.distanceTo(e)<14,o=n.position.clone().setY(n.position.y+this.model.top*n.scale.y+.12).project(t),r=s&&o.z<1;if(this.tag.style.display=r?"block":"none",!r)return null;const a=(o.x*.5+.5)*innerWidth,c=(-o.y*.5+.5)*innerHeight;return this.tag.style.left=`${a}px`,this.tag.style.top=`${c}px`,{x:a,y:c}}dispose(t){t.remove(this.model.root),this.tag.remove()}}class zT{constructor(t,e,n,s){this.kind=t,this.index=e,this.model=Kd(t),n.add(this.model.root),this.hit=new z(new gt(.45,8,6),new xe({visible:!1})),this.hit.position.y=Math.min(.5,this.model.top*.5),this.hit.userData.petRes=t,this.model.root.add(this.hit),this.tag.className="pet-tag res",this.tag.textContent=jn[t].name,s.appendChild(this.tag)}model;hit;tag=document.createElement("div");phase=0;eatAt=null;eatUntil=0;cur=null;spot(t){let e=this.index*7919+t*104729>>>0;const n=()=>(e=e*1664525+1013904223>>>0)/2**32,s=rt.petGarden,o=[[-46,73.5,1.6],[-48.5,81,1.8],[-43.5,90.5,1.2],[-49.5,88,1.1],[-42.5,70.5,1.1],[-41,93.5,1.4]];let r=0,a=0;for(let c=0;c<8&&(r=s.x0+4.5+n()*(s.x1-s.x0-6),a=s.z0+1.6+n()*(s.z1-s.z0-3.2),!!o.some(([l,h,u])=>Math.hypot(r-l,a-h)<u));c++);return new _(r,0,a)}update(t,e){const n=this.model.root,s=Oa();let o="idle";if(s>=21.5||s<5){const a=lo[this.index];n.position.set(a.x,oi(a.x,a.z),a.z),n.rotation.y=Math.PI/2,o="sleep"}else{const a=this.kind==="rua"?20:12,c=Date.now()/1e3+this.index*3.7,l=Math.floor(c/a),h=this.spot(l),u=this.spot(l+1),d=Math.min(a-3,h.distanceTo(u)/(this.model.speed*.4)),f=Math.min(1,(c-l*a)/d);n.position.lerpVectors(h,u,f*f*(3-2*f)),n.position.y=oi(n.position.x,n.position.z),f<1&&(n.rotation.y=Math.atan2(u.x-h.x,u.z-h.z),this.phase+=e*9,o="walk")}const r=!!this.eatAt&&t<this.eatUntil;if(r&&!this.cur&&(this.cur=n.position.clone()),this.cur){const a=n.position.clone(),c=n.rotation.y,l=r?this.eatAt:a,h=l.x-this.cur.x,u=l.z-this.cur.z,d=Math.hypot(h,u);if(d>.3){const f=Math.min(d,this.model.speed*.8*e);this.cur.x+=h/d*f,this.cur.z+=u/d*f,n.rotation.y=Math.atan2(h,u),this.phase+=e*10,o="walk"}else r?(n.rotation.y=Math.atan2(this.eatAt.x-this.cur.x+.001,this.eatAt.z-this.cur.z),o="eat"):(this.cur=null,n.rotation.y=c);this.cur&&n.position.set(this.cur.x,oi(this.cur.x,this.cur.z),this.cur.z)}zg(this.model,o,this.phase,t)}}const BT=20,Em=60;function FT(i,t){let e=0;for(const s of i)e=e*31+s.charCodeAt(0)>>>0;const n=lo[e%lo.length];return new _(n.x+(t%3-1)*.25,0,n.z+((t>>2)%3-1)*.25)}class HT{constructor(t,e){this.scene=t,this.hud=e}actors=new Map;hearts=[];showOthers=!0;residents=null;hitTargets(){return[...this.actors.values()].map(t=>t.hit).concat((this.residents??[]).filter(t=>t.model.root.visible).map(t=>t.hit))}nameOf(t){const e=this.actors.get(t);return e?{name:e.name,kind:e.kind}:null}feedAt(t,e){let n=0;for(const s of this.residents??[])s.model.root.position.distanceTo(t)>15||(s.eatAt=Tm(t,n++),s.eatUntil=e+Sm);for(const s of this.actors.values())s.model.root.position.distanceTo(t)>15||(s.eatAt=Tm(t,n++),s.eatUntil=e+Sm)}hearts3(t){for(let e=0;e<3;e++){const n=document.createElement("div");n.className="pet-heart",n.style.animationDelay=`${e*.18}s`,this.hud.appendChild(n),this.hearts.push({el:n,owner:t,until:performance.now()+1700,dx:(e-1)*14})}}update(t,e,n,s,o){const r=rt.petGarden,a=(r.x0+r.x1)/2,c=(r.z0+r.z1)/2,l=Math.hypot(n.x-a,n.z-c)<Em,h=o.filter(p=>p.pet&&(p.mine||this.showOthers)&&(l||Math.hypot(p.x-n.x,p.z-n.z)<Em)).sort((p,v)=>(v.mine?1:0)-(p.mine?1:0)||Math.hypot(p.x-n.x,p.z-n.z)-Math.hypot(v.x-n.x,v.z-n.z)).slice(0,BT),u=new Set(h.map(p=>p.id));for(const[p,v]of this.actors){const m=h.find(g=>g.id===p);(!u.has(p)||!m?.pet||m.pet.k!==v.kind)&&(v.dispose(this.scene),this.actors.delete(p))}const d=new Map;l&&!this.residents&&(this.residents=Al.map((p,v)=>new zT(p,v,this.scene,this.hud)));for(const p of this.residents??[]){if(p.model.root.visible=l,!l){p.tag.style.display="none";continue}p.update(e,t);const v=p.model.root.position.clone().setY(p.model.root.position.y+p.model.top+.12).project(s),m=p.model.root.position.distanceTo(n)<14&&v.z<1;if(p.tag.style.display=m?"block":"none",!m)continue;const g=(v.x*.5+.5)*innerWidth,x=(-v.y*.5+.5)*innerHeight;p.tag.style.left=`${g}px`,p.tag.style.top=`${x}px`,d.set(-(p.index+1),{x:g,y:x})}for(const p of h){let v=this.actors.get(p.id);v||(v=new OT(p.id,p.pet.k,p.pet.n,FT(p.pid,p.id),this.scene,this.hud,p.mine),this.actors.set(p.id,v)),v.name!==p.pet.n&&(v.name=p.pet.n,v.tag.textContent=v.name),v.update(t,e,p);const m=v.placeTag(s,n);m&&d.set(p.id,m)}const f=performance.now();this.hearts=this.hearts.filter(p=>{const v=d.get(p.owner);return f>p.until||!v?(p.el.remove(),!1):(p.el.style.left=`${v.x+p.dx}px`,p.el.style.top=`${v.y-6}px`,!0)})}}function nr(i){const t=(s,o,r=3)=>`<path d="M${s-r} ${o}q${r} ${r*1.1} ${r*2} 0" fill="none" stroke="#2a211b" stroke-width="1.6" stroke-linecap="round"/>`,e=(s,o,r=30)=>`<circle cx="24" cy="${r}" r="13" fill="${s}"/>${o}${t(17.5,r,2.6)}${t(27.5,r,2.6)}`,n={meo:`<path d="M12 22 13 10 20 18Z M36 22 35 10 28 18Z" fill="#d4823a"/>${e("#e3954a",'<ellipse cx="24" cy="35" rx="6" ry="4" fill="#f6e2c4"/><circle cx="24" cy="33" r="1.2" fill="#e58a92"/>')}`,se:`<ellipse cx="24" cy="34" rx="15" ry="11" fill="#9a6b43"/><ellipse cx="24" cy="37" rx="9" ry="7" fill="#efe1c8"/>${e("#8a5a36",'<path d="M22 31h4l-2 4z" fill="#5a4030"/>',24)}`,tho:`<ellipse cx="18" cy="11" rx="3.6" ry="10" fill="#f7f3ee"/><ellipse cx="30" cy="11" rx="3.6" ry="10" fill="#f7f3ee"/><ellipse cx="18" cy="11" rx="1.8" ry="7" fill="#f6c2cc"/><ellipse cx="30" cy="11" rx="1.8" ry="7" fill="#f6c2cc"/>${e("#f7f3ee",'<circle cx="24" cy="34" r="1.3" fill="#f2a0ae"/>')}`,soc:`<circle cx="38" cy="18" r="9" fill="#d39a62"/><circle cx="36" cy="30" r="8" fill="#c98a55"/>${e("#a5643a",'<ellipse cx="24" cy="35" rx="5.5" ry="3.6" fill="#f0d9b5"/><path d="M14 20l2-7 4 5zM34 20l-2-7-4 5z" fill="#8c5230"/>')}`,rua:`<ellipse cx="24" cy="32" rx="16" ry="11" fill="#d6a92c"/><path d="M14 30h20M18 24l3 6-3 6M30 24l-3 6 3 6" stroke="#a57d1e" stroke-width="1.6" fill="none"/><circle cx="24" cy="14" r="7" fill="#b9b56a"/>${t(19.4,14,2)}${t(25,14,2)}`,huou:`<path d="M17 14l-3-9M15 9l-4-2M31 14l3-9M33 9l4-2" stroke="#8a6a46" stroke-width="1.8" stroke-linecap="round"/>${e("#c9884d",'<ellipse cx="24" cy="36" rx="6" ry="4.4" fill="#e8c7a0"/><circle cx="24" cy="35" r="1.6" fill="#2a211b"/><circle cx="15" cy="26" r="1.2" fill="#fbf3e6"/><circle cx="33" cy="25" r="1.2" fill="#fbf3e6"/>')}`,hac:`<path d="M24 44V30" stroke="#2e2e2e" stroke-width="3"/><circle cx="24" cy="22" r="11" fill="#fbfbf7"/><ellipse cx="24" cy="12" rx="5" ry="2.6" fill="#d33a2c"/><path d="M24 25l14 3-14 2z" fill="#b8a87a"/>${t(17.5,21,2.2)}${t(23.5,21,2.2)}`};return`<svg viewBox="0 0 48 48" class="pet-icon pet-${i}">${n[i]}</svg>`}const eo=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`);function Bg(i,t){const e=jn[i],n=(t?.lv??0)>=e.lv,s=(t?.days??0)>=e.days,o=n&&!s&&(t?.tokens??0)>0;return{ok:n&&(s||o),early:o,need:`Cần ${po[e.lv]} · ${e.days} ngày`}}class GT{constructor(t,e){this.h=e,this.el.className="sheet pets",this.el.addEventListener("keydown",n=>n.stopPropagation()),t.appendChild(this.el)}el=document.createElement("div");info=null;can=null;view="list";chosen=null;get isOpen(){return this.el.classList.contains("open")}get pet(){return this.info}get rules(){return this.can}set(t,e){const n=!this.info&&t;this.info=t,this.can=e,n?this.view="pet":!t&&(this.view==="pet"||this.view==="return")&&(this.view="list"),this.isOpen&&this.render()}open(t=!1){this.view=this.info&&!t?"pet":"list",this.chosen=null,this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open")}render(){const t=(this.view==="pet"||this.view==="return")&&!this.info?"list":this.view;this.el.innerHTML='<button class="sheet-close" aria-label="Đóng">×</button>'+(t==="pet"?this.petView():t==="name"?this.nameView():t==="return"?this.returnView():this.listView());const e=(n,s)=>this.el.querySelectorAll(n).forEach(o=>o.addEventListener("click",()=>s(o)));e(".sheet-close",()=>this.close()),e("[data-kind]",n=>{this.chosen=n.dataset.kind,this.view="name",this.render(),this.el.querySelector("#pet-name")?.focus()}),e("[data-act]",n=>{const s=n.dataset.act;if(s==="feed"){this.h.inGarden()?this.h.send({t:"pet-feed"}):(this.close(),this.h.toGarden());return}if(s==="garden"){this.close(),this.h.toGarden();return}s==="rename"?(this.chosen=this.info?.k??null,this.view="name"):s==="list"?this.view="list":s==="back"?this.view=this.info?"pet":"list":s==="return"?this.view="return":s==="return-yes"&&(this.h.send({t:"pet-return"}),this.view="list"),this.render()}),this.el.querySelector("form")?.addEventListener("submit",n=>{n.preventDefault();const s=this.el.querySelector("#pet-name").value.trim();this.chosen&&this.h.send({t:"pet-choose",k:this.chosen,n:s})})}listView(){const t=this.can,e=!!t&&t.wait>0,n=Al.map(r=>{const a=Bg(r,t),c=this.info?.k===r,l=a.ok&&!this.info&&!e,h=c?"Đang nuôi":a.ok?a.early?"Nhận sớm (quà tháng)":"Đủ điều kiện":a.need;return`<button class="gear-item ${c?"on":""} ${l||c?"":"locked"}" ${l?`data-kind="${r}"`:"disabled"}>
        ${nr(r)}<b>${jn[r].name}</b><small>${h}</small></button>`}).join(""),s=this.info?`Bạn đang nuôi <b>${eo(this.info.n)}</b>. Mỗi người chỉ nuôi một linh thú.`:e?`Còn <b>${t.wait} ngày</b> nữa bạn mới nhận nuôi linh thú mới được.`:`Linh thú phải tu tập mới có: đủ <b>cấp tu</b> và <b>số ngày lên chùa</b>. Bạn đang ở cấp <b>${po[t?.lv??0]}</b>, đã lên chùa <b>${t?.days??0} ngày</b>.`,o=t?.tokens?` Bạn có <b>${t.tokens} quà tháng</b>: được nhận nuôi sớm một con khi đủ cấp tu.`:"";return`
      <div class="sheet-title">Linh thú</div>
      <p class="sheet-sub">${s}${o}</p>
      <div class="gear-grid">${n}</div>
      <p class="sheet-sub">Bảy linh thú của chùa luôn ở trong <b>Vườn Linh Thú</b> để mọi người ghé thăm, vuốt ve. Mỗi tháng, 10 người nhiều công đức nhất được chùa tặng quyền nhận nuôi sớm.</p>
      ${this.info?'<button class="ghost" data-act="back">Quay lại</button>':this.h.inGarden()?"":'<button class="ghost" data-act="garden">Đi tới Vườn Linh Thú</button>'}`}nameView(){const t=this.chosen,e=jn[t],n=this.info?.k===t;return`
      <div class="sheet-title">${n?"Đổi tên":"Nhận nuôi"} ${e.name}</div>
      <div class="pet-head">${nr(t)}<p class="sheet-sub">${e.desc}.</p></div>
      <form class="pet-form">
        <input id="pet-name" maxlength="16" placeholder="Đặt tên, ví dụ: ${e.name}" autocomplete="off" value="${n?eo(this.info.n):""}">
        <button class="primary" type="submit">${n?"Lưu tên":"Nhận nuôi"}</button>
      </form>
      ${n?"":'<p class="sheet-sub">Mỗi người chỉ nuôi một linh thú. Cho ăn mỗi ngày trong vườn; bỏ đói 14 ngày linh thú sẽ rời đi.</p>'}
      <button class="ghost" data-act="back">Quay lại</button>`}returnView(){const t=this.info;return`
      <div class="sheet-title">Trả ${eo(t.n)} về vườn?</div>
      <div class="pet-head">${nr(t.k)}<p class="sheet-sub">${eo(t.n)} sẽ về lại vườn và <b>không quay lại với bạn nữa</b>. Phải đủ 7 ngày kể từ lần nhận nuôi trước bạn mới nhận được con mới. Số ngày đã chăm vẫn được giữ cho danh hiệu.</p></div>
      <div class="card-main">
        <button class="ghost" data-act="back">Giữ lại</button>
        <button class="primary danger-btn" data-act="return-yes">Trả về vườn</button>
      </div>`}petView(){const t=this.info,e=Math.max(0,30-t.days),n=t.mood==="buonngu"?`<p class="sheet-sub warn">${eo(t.n)} đói và buồn. Còn <b>${t.left} ngày</b> không được cho ăn, ${eo(t.n)} sẽ rời vườn đi xa.</p>`:"";return`
      <div class="pet-head">${nr(t.k)}<div><div class="sheet-title">${eo(t.n)}</div><span class="pet-kind">${jn[t.k].name}</span></div></div>
      <div class="pet-stats">
        <div><b class="mood-${t.mood}">${UT[t.mood]}</b><span>Tâm trạng</span></div>
        <div><b>${t.streak}</b><span>Ngày liên tục</span></div>
        <div><b>${t.days}</b><span>Ngày đã chăm</span></div>
      </div>
      ${n}
      <p class="sheet-sub">${jn[t.k].desc}. ${e?`Chăm thêm <b>${e} ngày</b> để nhận danh hiệu “Người bạn của muôn loài”.`:"Bạn đã là “Người bạn của muôn loài”."}</p>
      <div class="card-main">
        <button class="primary" data-act="feed" ${t.fedToday?"disabled":""}>${t.fedToday?"Đã cho ăn":this.h.inGarden()?"Cho ăn (+3 công đức)":"Đến vườn cho ăn"}</button>
        <button class="ghost" data-act="rename">Đổi tên</button>
      </div>
      <div class="card-main">
        <button class="ghost" data-act="list">Xem các linh thú</button>
        <button class="ghost danger-text" data-act="return">Trả về vườn</button>
      </div>`}}class VT{el=document.createElement("div");canvas=document.createElement("canvas");renderer=null;scene=new Ad;camera=new Mn(28,1,.1,20);monk=null;cushion;turn=new it;raf=0;last=0;spin=.5;idle=99;pose="sit";look=null;constructor(){this.el.className="stage",this.canvas.setAttribute("aria-label","Nhân vật của bạn, kéo để xoay");const t=document.createElement("div");t.className="stage-hint",t.textContent="Kéo để xoay nhân vật",this.el.append(this.canvas,t),this.scene.add(new Xu("#fff1d8","#6a4a2c",2));const e=new ll("#ffe2b8",3);e.position.set(-1.5,2.5,3);const n=new ll("#ffc46b",2.4);n.position.set(1.2,1.8,-2.5),this.scene.add(e,n);const s=[[0,0],[.4,0],[.47,.03],[.5,.08],[.48,.13],[.4,.16],[0,.17]].map(([h,u])=>new Q(h,u));this.cushion=new z(new di(s,40),new mt({roughness:.9}));const o=new z(new Ge(.49,.012,6,48),new mt({color:"#e9c27a",roughness:.5,metalness:.3}));o.rotation.x=Math.PI/2,o.position.y=.085,this.cushion.add(o);const r=document.createElement("canvas");r.width=r.height=64;const a=r.getContext("2d"),c=a.createRadialGradient(32,32,4,32,32,32);c.addColorStop(0,"rgba(0,0,0,0.45)"),c.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=c,a.fillRect(0,0,64,64);const l=new z(new We(1.5,1.5),new xe({map:new Ve(r),transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.002,this.turn.add(this.cushion),this.scene.add(l,this.turn),this.camera.position.set(0,1.05,3.6),this.camera.lookAt(0,.55,0),this.rebind()}setLook(t){this.look={...t},this.monk?this.monk.setLook(t):(this.monk=new Fd(t),this.turn.add(this.monk.root)),this.cushion.material.color.set((ki[t.cushion??"xam"]??ki.xam).color),this.setPose(this.pose)}setPose(t){this.pose=t,this.monk&&(this.monk.state=t==="stand"?"idle":"sit",this.monk.root.position.set(0,t==="stand"?0:.17,t==="stand"?.3:0),t==="bow"&&this.monk.bow())}start(){if(this.raf)return;this.renderer||(this.renderer=new G0({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.toneMapping=fd,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2))),this.last=performance.now();const t=e=>{this.raf=requestAnimationFrame(t),this.frame(Math.min((e-this.last)/1e3,.05),e/1e3),this.last=e};this.raf=requestAnimationFrame(t)}stop(){if(cancelAnimationFrame(this.raf),this.raf=0,this.renderer){this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null;const t=this.canvas.cloneNode();this.canvas.replaceWith(t),this.canvas=t,this.rebind()}}rebind(){let t=null;this.canvas.addEventListener("pointerdown",n=>{t=n.clientX,this.canvas.setPointerCapture(n.pointerId)}),this.canvas.addEventListener("pointermove",n=>{t!==null&&(this.turn.rotation.y+=(n.clientX-t)*.012,t=n.clientX,this.idle=0)});const e=()=>t=null;this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e)}pet=null;petKind=null;setPet(t){if(t===this.petKind||(this.pet&&this.turn.remove(this.pet.root),this.pet=null,this.petKind=t,!t))return;this.pet=Kd(t);const e=t==="huou"||t==="hac";this.pet.root.position.set(e?.85:.62,0,e?.05:.22),this.pet.root.rotation.y=-.5,this.turn.add(this.pet.root)}frame(t,e){const n=this.renderer;if(!n||!this.monk)return;const s=this.canvas.clientWidth,o=this.canvas.clientHeight;!s||!o||((this.canvas.width!==Math.round(s*n.getPixelRatio())||this.canvas.height!==Math.round(o*n.getPixelRatio()))&&(n.setSize(s,o,!1),this.camera.aspect=s/o,this.camera.updateProjectionMatrix()),this.idle+=t,this.idle>2&&(this.turn.rotation.y+=t*this.spin),this.monk.update(t,e,0),this.pet&&(this.pet.body.scale.y=1+Math.sin(e*2.4)*.012,this.pet.head.rotation.y=Math.sin(e*.5)*.3,this.pet.tail&&(this.pet.tail.rotation.y=Math.sin(e*2)*.25)),this.pose==="bow"&&!this.monk.busy&&this.monk.bow(),n.render(this.scene,this.camera))}save(t){this.renderer&&(this.renderer.render(this.scene,this.camera),this.canvas.toBlob(e=>{if(!e)return;const n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`an-duyen-${t.replace(/\s+/g,"-").toLowerCase()}.png`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)},"image/png"))}get current(){return this.look}}const Am=i=>i.charAt(0).toUpperCase()+i.slice(1),$T=["Sơ tâm","Phát tâm","Tinh tấn","Hoan hỷ","An lạc","Thanh tịnh","Viên mãn"],Cm=i=>`<svg viewBox="0 0 32 32"><path d="M7 29c0-9 4-15 9-15s9 6 9 15z" fill="${i}"/><path d="M11 18c4 3 8 4 11 3" stroke="#dba53e" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="16" cy="10" r="6" fill="#d9875a"/></svg>`,Rm=i=>`<svg viewBox="0 0 32 32">${Array.from({length:12},(t,e)=>{const n=e/12*Math.PI*2;return`<circle cx="${(16+Math.cos(n)*10).toFixed(1)}" cy="${(16+Math.sin(n)*10).toFixed(1)}" r="2.9" fill="${i}" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>`}).join("")}<circle cx="16" cy="29" r="2.6" fill="${i}"/></svg>`,Pm=i=>`<svg viewBox="0 0 32 32"><ellipse cx="16" cy="19" rx="13" ry="6.5" fill="${i}"/><ellipse cx="16" cy="16.5" rx="12" ry="5" fill="${i}" stroke="rgba(255,255,255,.25)" stroke-width=".8"/><ellipse cx="16" cy="16.5" rx="10" ry="3.6" fill="none" stroke="#e9c27a" stroke-width=".8"/></svg>`;class WT{constructor(t,e){this.h=e,this.el.className="sheet journal",this.el.addEventListener("keydown",n=>n.stopPropagation()),t.appendChild(this.el)}el=document.createElement("div");j=null;tab="me";showCode=!1;form="none";stage=new VT;pose="sit";get isOpen(){return this.el.classList.contains("open")}open(t="me"){this.tab=t,this.form="none",this.showCode=!1,this.h.send({t:"journal"}),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open"),this.stage.stop()}update(t){this.j=t,t.user&&this.form==="create"&&(this.form="none"),this.isOpen&&this.render()}error(t){const e=this.el.querySelector(".form-err");e&&(e.textContent=t),this.el.querySelectorAll("form button").forEach(n=>n.disabled=!1)}render(){const t=[["me","Của tôi"],["gear","Bộ sưu tập"],["titles","Danh hiệu"],["account","Tài khoản"]].map(([s,o])=>`<button data-tab="${s}" class="${this.tab===s?"on":""}">${o}</button>`).join(""),e=this.j?{me:()=>this.mine(),gear:()=>this.gear(),titles:()=>this.titles(),account:()=>this.account()}[this.tab]():'<p class="sheet-sub">Đang kết nối với chùa…</p>';this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Hồ sơ tu tập</div>
      <div class="tabs">${t}</div>
      <div class="tab-body">${e}</div>`;const n=this.el.querySelector(".stage-slot");n?(n.replaceWith(this.stage.el),this.stage.setLook(this.h.profile()),this.stage.setPet(this.j?.pet?.k??null),this.stage.setPose(this.pose),this.stage.start()):this.stage.stop(),this.wire()}mine(){const t=this.j,e=this.h.profile(),n=t.titles.find(h=>h.id===t.title)?.name??"",s=t.next!==null?Math.round((t.merit-t.from)/(t.next-t.from)*100):100,o=h=>h.toLocaleString("vi-VN"),r=(h,u)=>`<div><b>${h}</b><span>${u}</span></div>`,a=Wn[e.beads??"go"]??Wn.go,c=ki[e.cushion??"xam"]??ki.xam;return`
      <div class="showcase">
        <div class="stage-slot"></div>
        <div class="pose-row"><div class="seg">${[["sit","Ngồi thiền"],["stand","Đứng"],["bow","Chắp tay"]].map(([h,u])=>`<button data-pose="${h}" class="${this.pose===h?"on":""}">${u}</button>`).join("")}</div><button class="ghost small" data-act="photo">Lưu ảnh</button></div>
        <div class="worn">
          <button data-act="gear">${Cm(qn[e.robe]??qn.nau)}<span><small>Áo</small>${Wp[e.robe]??"Áo nâu"}</span></button>
          <button data-act="gear">${Rm(a.color)}<span><small>Tràng hạt</small>${a.name.replace("Tràng hạt ","Hạt ")}</span></button>
          <button data-act="gear">${Pm(c.color)}<span><small>Bồ đoàn</small>${Am(c.name.replace("Bồ đoàn ",""))}</span></button>
        </div>
      </div>
      <div class="card-head">
        <div class="avatar">${Ug(e.kind,e.robe,e.skin)}</div>
        <div class="card-who">
          <b>${Zr(t.name)}</b>
          <span><em>${t.level}</em>${n?` · ${n}`:""}</span>
          <small>${t.user?`Tài khoản @${Zr(t.user)}`:"Chưa có tài khoản"}</small>
        </div>
      </div>
      <div class="level-bar">
        <div class="bar"><i style="width:${s}%"></i></div>
        <small>${t.next!==null?`${o(t.merit)} / ${o(t.next)} công đức đến cấp tiếp theo`:`${o(t.merit)} công đức · cấp cao nhất`}</small>
      </div>
      <div class="stat-grid">
        ${r(o(t.bows),"Lạy Phật")}
        ${r(o(t.rounds),`Chuỗi tràng hạt (${o(t.beads)} hạt)`)}
        ${r(o(t.sitMin),"Phút ngồi tĩnh")}
        ${r(String(t.streak),`Ngày liên tiếp (kỷ lục ${t.best})`)}
        ${r(`${t.visited}/${t.zones}`,"Khu đã viếng")}
        ${r(o(t.days),"Ngày đồng hành")}
        ${r(o(t.incense),"Lần dâng hương")}
        ${r(o(t.lanterns),"Hoa đăng đã thả")}
      </div>
      <div class="card-main">
        <button class="primary" data-act="share">Khoe thành tích</button>
        <button class="ghost" data-act="edit">Sửa nhân vật</button>
      </div>`}gear(){const t=this.h.profile(),e=this.j.lv,n=this.j.items??[],s=(d,f,p,v,m,g)=>{const x=e>=m||n.includes(f),b=m>6?"Quà điểm danh ngày 7":`Mở ở cấp ${$T[m]}`;return`<button class="gear-item ${g?"on":""} ${x?"":"locked"}" data-equip="${d}:${f}" ${x?"":"disabled"}>
        ${v}<b>${p}</b><small>${g?"Đang dùng":x?"Dùng":b}</small></button>`},o=Object.keys(qn).map(d=>s("robe",d,Wp[d],Cm(qn[d]),0,t.robe===d)).join(""),r=Object.keys(Wn).map(d=>s("beads",d,Wn[d].name.replace("Tràng hạt ","Hạt "),Rm(Wn[d].color),Wn[d].lv,(t.beads??"go")===d)).join(""),a=Object.keys(ki).map(d=>s("cushion",d,Am(ki[d].name.replace("Bồ đoàn ","")),Pm(ki[d].color),ki[d].lv,(t.cushion??"xam")===d)).join(""),c=this.j.pet,l=Al.map(d=>{const f=Bg(d,{lv:e,days:this.j.days,tokens:0}),p=c?.k===d;return`<button class="gear-item ${p?"on":""} ${f.ok||p?"":"locked"}" data-pets="1">
        ${nr(d)}<b>${p?Zr(c.n):jn[d].name}</b><small>${p?"Đang nuôi":f.ok?"Đủ điều kiện":f.need}</small></button>`}).join(""),h=Object.keys(Wn).filter(d=>Wn[d].lv<=e||n.includes(d)).length+Object.values(ki).filter(d=>d.lv<=e).length+Object.keys(qn).length,u=Object.keys(Wn).length+Object.keys(ki).length+Object.keys(qn).length;return`
      <p class="sheet-sub">Đã có ${h}/${u} món. Tu tập lên cấp để mở thêm tràng hạt và bồ đoàn quý. Tràng hạt mọi người đều nhìn thấy trên nhân vật của bạn.</p>
      <div class="field-label">Áo</div><div class="gear-grid">${o}</div>
      <div class="field-label">Tràng hạt</div><div class="gear-grid">${r}</div>
      <div class="field-label">Bồ đoàn</div><div class="gear-grid">${a}</div>
      <div class="field-label">Linh thú</div><div class="gear-grid">${l}</div>`}titles(){const t=this.j;return`
      <p class="sheet-sub">Đã đạt ${t.titles.filter(n=>n.got).length}/${t.titles.length} danh hiệu. Chọn một danh hiệu để hiện trên hồ sơ của bạn.</p>
      <div class="title-list">${t.titles.map(n=>`<button class="title-row ${n.got?"got":""} ${n.id===t.title?"on":""}" data-title="${n.id}" ${n.got?"":"disabled"}>
            <b>${n.name}</b><small>${n.desc}</small><span>${n.id===t.title?"Đang dùng":n.got?"Dùng":"Chưa đạt"}</span>
          </button>`).join("")}</div>`}account(){const t=this.j,e=this.h.code();return`
      ${t.user?`<div class="acct-box ok"><b>Đã có tài khoản @${Zr(t.user)}</b><small>Đăng nhập tài khoản này ở máy khác để tiếp tục tu tập, công đức và bạn bè vẫn giữ nguyên.</small>
          <button class="ghost small" data-form="passwd">Đổi mật khẩu</button></div>`:`<div class="acct-box"><b>Chưa có tài khoản đăng nhập</b><small>Tạo tên đăng nhập và mật khẩu để không mất công đức khi đổi máy hay xoá dữ liệu trình duyệt.</small>
          <button class="primary small" data-form="create">Tạo ngay</button></div>`}
      ${{create:`<form data-send="register">
          <div class="field-label">Tạo tài khoản</div>
          <input name="user" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="20" placeholder="Tên đăng nhập (vd: minhtam)" required>
          <input name="pass" type="password" autocomplete="new-password" maxlength="64" placeholder="Mật khẩu (ít nhất 6 ký tự)" required>
          <input name="pass2" type="password" autocomplete="new-password" maxlength="64" placeholder="Nhập lại mật khẩu" required>
          <p class="form-err"></p><button class="primary">Tạo tài khoản</button></form>`,login:`<form data-send="login">
          <div class="field-label">Đăng nhập tài khoản khác trên máy này</div>
          <input name="user" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="20" placeholder="Tên đăng nhập" required>
          <input name="pass" type="password" autocomplete="current-password" maxlength="64" placeholder="Mật khẩu" required>
          <p class="form-err"></p><button class="primary">Đăng nhập</button></form>`,code:`<form data-send="code">
          <div class="field-label">Dùng mã khôi phục</div>
          <input name="code" autocomplete="off" autocapitalize="none" spellcheck="false" maxlength="64" placeholder="Dán mã khôi phục" required>
          <p class="form-err"></p><button class="primary">Vào bằng mã này</button></form>`,passwd:`<form data-send="passwd">
          <div class="field-label">Đổi mật khẩu</div>
          <input name="old" type="password" autocomplete="current-password" maxlength="64" placeholder="Mật khẩu cũ" required>
          <input name="pass" type="password" autocomplete="new-password" maxlength="64" placeholder="Mật khẩu mới (ít nhất 6 ký tự)" required>
          <p class="form-err"></p><button class="primary">Đổi mật khẩu</button></form>`}[this.form]??""}
      <div class="field-label">Mã khôi phục của máy này <span class="pick-name">không chia sẻ cho ai</span></div>
      <input class="code-box" readonly value="${this.showCode?Zr(e):"•".repeat(18)}">
      <div class="card-main">
        <button class="ghost" data-act="show">${this.showCode?"Ẩn mã":"Hiện mã"}</button>
        <button class="ghost" data-act="copy">Sao chép mã</button>
      </div>
      <div class="acct-links">
        <button data-form="login">Đăng nhập tài khoản khác</button>
        <button data-form="code">Dùng mã khôi phục</button>
        <button class="danger" data-act="out">Đăng xuất khỏi máy này</button>
      </div>`}wire(){const t=(e,n)=>this.el.querySelectorAll(e).forEach(s=>s.addEventListener("click",()=>n(s)));t(".sheet-close",()=>this.close()),t("[data-tab]",e=>this.open(e.dataset.tab)),t('[data-act="edit"]',()=>{this.close(),this.h.editLook()}),t('[data-act="share"]',()=>this.share()),t('[data-act="photo"]',()=>this.stage.save(this.h.profile().name)),t('[data-act="gear"]',()=>this.open("gear")),t("[data-pose]",e=>{this.pose=e.dataset.pose,this.stage.setPose(this.pose),this.el.querySelectorAll("[data-pose]").forEach(n=>n.classList.toggle("on",n===e))}),t("[data-pets]",()=>this.h.pets()),t("[data-equip]",e=>{const[n,s]=e.dataset.equip.split(":");this.h.equip({[n]:s}),this.render()}),t("[data-title]",e=>this.h.send({t:"title",id:e.dataset.title})),t("[data-form]",e=>{const n=e.dataset.form;this.form=this.form===n?"none":n,this.render(),this.el.querySelector("form input")?.focus()}),t('[data-act="show"]',()=>{this.showCode=!this.showCode,this.render()}),t('[data-act="copy"]',async e=>{try{await navigator.clipboard.writeText(this.h.code()),e.textContent="Đã chép · cất kỹ nhé"}catch{this.showCode=!0,this.render(),this.h.toast("Không chép được, hãy chép mã đang hiện")}}),t('[data-act="out"]',()=>{const e=this.j?.user?`Bạn có thể đăng nhập lại bằng tài khoản @${this.j.user}.`:"Bạn CHƯA có tài khoản: nếu chưa lưu mã khôi phục, công đức của nhân vật này sẽ mất.";confirm(`Đăng xuất khỏi máy này? ${e}`)&&this.h.signOut()}),this.el.querySelector("form")?.addEventListener("submit",e=>{e.preventDefault();const n=e.target,s=a=>n.elements.namedItem(a)?.value??"",o=n.querySelector(".form-err"),r=n.dataset.send;if(r==="register"&&s("pass")!==s("pass2"))return o.textContent="Hai lần nhập mật khẩu chưa giống nhau.";if(r==="code"){const a=s("code").trim();return a.length<8?o.textContent="Mã khôi phục chưa đúng.":a===this.h.code()?o.textContent="Đây là mã của chính máy này rồi.":this.h.switchTo(a)}n.querySelectorAll("button").forEach(a=>a.disabled=!0),o.textContent="",r==="register"&&this.h.send({t:"register",user:s("user"),pass:s("pass")}),r==="login"&&this.h.send({t:"login",user:s("user"),pass:s("pass")}),r==="passwd"&&(this.h.send({t:"passwd",old:s("old"),pass:s("pass")}),this.form="none",setTimeout(()=>this.render(),300))})}async share(){const t=this.j,e=`Mình đã lạy ${t.bows} lạy, lần ${t.rounds} chuỗi hạt, ${t.streak} ngày liên tiếp lên chùa An Bình Tự · ${t.level} · ${t.merit} công đức. Lên chùa cùng mình nhé!`;try{navigator.share?await navigator.share({title:"An Bình Tự",text:e,url:location.origin}):(await navigator.clipboard.writeText(`${e} ${location.origin}`),this.h.toast("Đã chép lời khoe, dán vào Zalo hay Facebook nhé"))}catch{}}}const Zr=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),jt=rt,Mi=jt.bounds,en=(i,t,e,n,s,o=1)=>`<rect class="${s}" x="${i}" y="${t}" width="${e-i}" height="${n-t}" rx="${o}"/>`,Lm=(i,t,e,n,s)=>`<ellipse class="${s}" cx="${i}" cy="${t}" rx="${e}" ry="${n}"/>`;function qT(){const i=jt.yard,t=jt.terrace,e=jt.hall,n=jt.upper,s=jt.avenue;return[en(Mi.x0,Mi.z0,Mi.x1,Mi.z1,"m-ground",6),en(Mi.x0+2,-70,-30,64,"m-garden",6),`<circle class="m-garden" cx="${jt.mound.x}" cy="${jt.mound.z}" r="${jt.mound.r}"/>`,en(jt.petGarden.x0,jt.petGarden.z0,jt.petGarden.x1,jt.petGarden.z1,"m-garden",3),en(jt.flowerGarden.x0,jt.flowerGarden.z0,jt.flowerGarden.x1,jt.flowerGarden.z1,"m-garden",3),Lm(jt.frontLake.x,jt.frontLake.z,jt.frontLake.rx,jt.frontLake.rz,"m-water"),Lm(jt.lake.x,jt.lake.z,jt.lake.rx,jt.lake.rz,"m-water"),`<circle class="m-water" cx="${jt.halfMoon.x}" cy="${jt.halfMoon.z}" r="${jt.halfMoon.r}"/>`,`<circle class="m-water" cx="${jt.well.x}" cy="${jt.well.z}" r="3"/>`,en(-4,jt.causeway.z0,jt.causeway.half,jt.causeway.z1,"m-stone",0),en(-3.2,s.z0,s.half,s.z1,"m-stone",0),en(i.x0,i.z0,i.x1,i.z1,"m-stone",2),en(t.x0,t.z0,t.x1,t.z1,"m-terrace",2),en(n.x0,n.z0,n.x1,n.z1,"m-terrace",2),en(jt.bridge.x0,jt.bridge.z-1.2,jt.bridge.x1,jt.bridge.z+1.2,"m-wood",.5),en(-16,jt.gateZ-3,16,jt.gateZ+3,"m-roof"),en(-26.5-1.8,jt.corridorStart,-26.5+1.8,58,"m-roof",.5),en(jt.corridorX-1.8,jt.corridorStart,jt.corridorX+1.8,58,"m-roof",.5),en(-18,49,-12,55,"m-roof",.5),en(12,49,18,55,"m-roof",.5),en(e.x0,e.z0,e.x1,e.z1,"m-hall",1.5),'<circle class="m-roof" cx="0" cy="-62" r="5"/>','<circle class="m-gold" cx="0" cy="33" r="1.6"/>',en(jt.isle.x-3,jt.isle.z-3,jt.isle.x+3,jt.isle.z+3,"m-roof",.5),en(47,-21,53,-15,"m-roof",.5),en(36,41,44,47,"m-roof",.5)].join("")}class XT{constructor(t,e,n,s,o){this.me=e,this.dots=n,this.go=s,this.zone=o,this.el.className="sheet map",t.appendChild(this.el)}el=document.createElement("div");timer=0;get isOpen(){return this.el.classList.contains("open")}open(){const t=Ua.map((e,n)=>`<g class="m-place" data-place="${n}" transform="translate(${e.pos.x} ${e.pos.z})">
        <circle r="1.4"/><rect x="-15" y="-15" width="30" height="9.2" rx="4.6"/><text y="-8">${e.name.replace(" · Cầu Duyên","")}</text></g>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Bản đồ chùa</div>
      <p class="sheet-sub">Bạn đang ở <b class="m-zone"></b>. Chạm tên một khu để tới đó.</p>
      <svg viewBox="${Mi.x0-2} ${Mi.z0-2} ${Mi.x1-Mi.x0+4} ${Mi.z1-Mi.z0+4}" role="img" aria-label="Bản đồ chùa An Bình Tự">
        ${qT()}
        <g class="m-dots"></g>
        ${t}
        <g class="m-me"><circle r="3.2"/><path d="M0 -6.5 L3 -1.5 L-3 -1.5 Z"/></g>
      </svg>
      <div class="m-legend"><span><i class="me"></i>Bạn</span><span><i class="friend"></i>Bạn đồng tu</span><span><i></i>Người khác</span></div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-place]").forEach(e=>e.addEventListener("click",()=>{this.close(),this.go(Number(e.dataset.place))})),this.el.classList.add("open"),this.paint(),clearInterval(this.timer),this.timer=window.setInterval(()=>this.paint(),400)}close(){this.el.classList.remove("open"),clearInterval(this.timer)}paint(){const t=this.me(),e=180-t.ry*180/Math.PI;this.el.querySelector(".m-me").setAttribute("transform",`translate(${t.x.toFixed(1)} ${t.z.toFixed(1)}) rotate(${e.toFixed(0)})`),this.el.querySelector(".m-zone").textContent=this.zone(),this.el.querySelector(".m-dots").innerHTML=this.dots().map(n=>`<circle class="${n.friend?"friend":""}" cx="${n.x.toFixed(1)}" cy="${n.z.toFixed(1)}" r="${n.friend?2.6:1.8}"><title>${jT(n.name)}</title></circle>`).join("")}}const jT=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),ma=[{n:1,level:"Thượng cát",poem:["Trăng rằm soi bóng hồ sen","Người thương sắp đến bên thềm chùa xưa","Nắng hiền tan hết cơn mưa","Duyên lành đã định, đón đưa có ngày"],meaning:"Tình duyên sáng sủa, người hợp ý đang đến gần. Hãy mở lòng, đừng vội vàng."},{n:2,level:"Trung cát",poem:["Gió đưa cánh hạc qua sông","Chờ thêm chút nữa, nhẹ lòng mà đi","Gặp nhau chẳng phải vội gì","Chân thành giữ lấy, xuân thì còn xanh"],meaning:"Duyên đến chậm mà bền. Giữ sự chân thành, thời gian sẽ trả lời."},{n:3,level:"Thượng cát",poem:["Hoa đào nở giữa trời xuân","Bước chân ai đó đã gần cổng mây","Nụ cười gửi gió heo may","Tơ hồng một sợi buộc ngay đôi người"],meaning:"Có người đang để ý bạn. Một lời chào thân thiện có thể mở ra câu chuyện đẹp."},{n:4,level:"Bình an",poem:["Sương mai còn đọng lá tre","Lòng còn vương vấn chuyện hè năm xưa","Buông đi cho nhẹ gió mưa","Mới mong đón được người vừa ý thương"],meaning:"Chuyện cũ chưa nguôi. Buông bỏ được thì duyên mới đến."},{n:5,level:"Thượng cát",poem:["Hai con chim sẻ đầu cành","Ríu ran một khúc, trời xanh mây hồng","Một lòng như nước sông Hồng","Mai kia mái ấm thong dong bên nhau"],meaning:"Tình cảm hiện tại bền vững, có thể tính chuyện lâu dài."},{n:6,level:"Trung cát",poem:["Thuyền nan khẽ tựa bến xưa","Đợi người đi chợ về trưa chưa về","Đừng buồn mà lỡ câu thề","Hẹn ngày nắng ấm bốn bề hoa thơm"],meaning:"Người bạn chờ có thể đến muộn. Kiên nhẫn và giữ lời hứa với chính mình."},{n:7,level:"Thượng cát",poem:["Đèn hoa thả giữa dòng trong","Ước gì ai đó cũng mong như mình","Trăng lên rót ánh lung linh","Hai bờ chung một mối tình đơm hoa"],meaning:"Tình cảm có thể đến từ hai phía. Đừng ngại bày tỏ."},{n:8,level:"Bình an",poem:["Mây chiều lững thững qua non","Tình như con nước lúc còn lúc vơi","Muốn bền thì phải nhường lời","Giận hờn chớ để cho đời cách xa"],meaning:"Mối quan hệ có lúc thăng trầm. Biết nhường nhịn thì bền lâu."},{n:9,level:"Trung cát",poem:["Chùa xa vọng tiếng chuông ngân","Ai đi lễ Phật dừng chân bên thềm","Gặp nhau một tối trăng lên","Chuyện trò đôi phút mà nên bạn lành"],meaning:"Quen biết mới tốt đẹp ở nơi thanh tịnh. Hãy bắt đầu từ tình bạn."},{n:10,level:"Thượng cát",poem:["Cau xanh trầu thắm đầy mâm","Mẹ cha vui vẻ, xa gần chúc nhau","Duyên này đã định từ lâu","Thuận buồm xuôi gió trước sau một lòng"],meaning:"Chuyện hôn nhân thuận lợi, được gia đình ủng hộ."},{n:11,level:"Bình an",poem:["Lá vàng rơi xuống sân rêu","Người đi chưa nói một điều dặn ai","Lòng ơi xin chớ u hoài","Mùa sau hoa nở nụ mai thắm cành"],meaning:"Có thể bạn vừa qua một lần chia xa. Thời gian sẽ chữa lành, duyên mới sẽ tới."},{n:12,level:"Trung cát",poem:["Bên hiên quán nhỏ chén trà","Nghe người kể chuyện quê nhà xa xôi","Cùng chung một nỗi bồi hồi","Biết đâu duyên đến từ lời hỏi thăm"],meaning:"Một cuộc trò chuyện bình thường có thể thành duyên. Hãy hỏi thăm người bên cạnh."},{n:13,level:"Thượng cát",poem:["Sen hồng nở giữa ao thu","Gió đưa hương ngát, lời ru dịu dàng","Người hiền như ánh trăng vàng","Đến bên lặng lẽ, nhẹ nhàng mà sâu"],meaning:"Người hợp với bạn hiền lành, kín đáo. Hãy để ý những người ít nói."},{n:14,level:"Bình an",poem:["Cầu tre lắt lẻo gập ghềnh","Bước đi chậm rãi chớ nên vội vàng","Tình như chén nước trong làng","Uống từng ngụm nhỏ mới mang ngọt lành"],meaning:"Đừng vội. Tìm hiểu kỹ trước khi quyết định."},{n:15,level:"Trung cát",poem:["Ngày rằm lên chùa thắp hương","Cầu cho mẹ khỏe, cầu thương người hiền","Phật thương ban chữ bình yên","Đường duyên rộng mở, ưu phiền nhẹ trôi"],meaning:"Lòng hiếu thảo đem lại phước lành. Gia đạo yên thì duyên cũng thuận."},{n:16,level:"Bình an",poem:["Mưa rơi ướt áo người đi","Ô che chẳng đủ, biết gì cho nhau","Thương nhau nhường áo choàng sau","Một mai nắng lại, cùng nhau chuyện trò"],meaning:"Gặp khó khăn nhỏ. Biết sẻ chia thì tình cảm sâu hơn."},{n:17,level:"Thượng cát",poem:["Chỉ hồng ông Nguyệt se duyên","Hai phương trời bỗng gần liền một nơi","Gặp nhau như đã lâu rồi","Nói câu nào cũng như lời quen thân"],meaning:"Người ở xa có thể là người hợp ý. Đừng ngại những cuộc gặp tình cờ."},{n:18,level:"Bình an",poem:["Đá mòn nhưng dạ chẳng mòn","Đợi chờ một bóng, héo hon tháng ngày","Hãy nhìn quanh những bàn tay","Có người lặng lẽ bao ngày đứng chờ"],meaning:"Đừng chỉ mải chờ một người. Có người quan tâm bạn ngay bên cạnh."},{n:19,level:"Trung cát",poem:["Bánh trôi chìm nổi giữa trần","Giữ lòng son sắt, mười phần vẹn mười","Gặp người biết quý nụ cười","Là duyên trời định, đẹp tươi trọn đời"],meaning:"Giữ gìn phẩm giá của mình. Người trân trọng bạn sẽ xuất hiện."},{n:20,level:"Thượng cát",poem:["Bình minh trên đỉnh non cao","Mây tan nắng tỏ, ước ao thành hình","Tình yêu như ánh bình minh","Mỗi ngày một mới, chung tình cùng nhau"],meaning:"Điều mong ước sắp thành. Tình cảm mới mẻ, tươi sáng."},{n:21,level:"Bình an",poem:["Chim bay mỏi cánh tìm cây","Cây cao bóng mát chẳng đầy một khi","Nhọc nhằn đừng vội than chi","Nghỉ chân đôi chút rồi đi tiếp đường"],meaning:"Bạn đang mệt. Hãy chăm sóc bản thân trước, duyên sẽ đến khi lòng an."},{n:22,level:"Trung cát",poem:["Tiếng đàn bầu vọng bờ ao","Ai nghe mà chẳng nao nao trong lòng","Tri âm khó kiếm mà mong","Một người hiểu được, cũng xong một đời"],meaning:"Bạn cần người thấu hiểu hơn người hoàn hảo. Hãy tìm người cùng sở thích."},{n:23,level:"Thượng cát",poem:["Cổng chùa rợp bóng cây đa","Gặp nhau ngày hội, chẳng xa chẳng gần","Một lần hỏi, một lần thân","Chữ duyên đã đến, ân cần giữ nhau"],meaning:"Duyên đến từ những dịp lễ hội, chỗ đông người. Hãy chủ động làm quen."},{n:24,level:"Bình an",poem:["Trăng khuyết rồi lại trăng tròn","Buồn vui là lẽ, đâu còn mãi đâu","Tâm an thì chẳng âu sầu","Duyên lành tự đến, trước sau rõ ràng"],meaning:"Mọi chuyện đều có lúc. Giữ tâm an, mọi việc tự sáng tỏ."},{n:25,level:"Thượng cát",poem:["Giếng trong soi bóng mây trời","Lòng ai trong vắt như lời nguyện xưa","Người về dưới mái hiên mưa","Trao nhau chiếc nón, sớm trưa đợi chờ"],meaning:"Tấm lòng trong sáng của bạn được người khác nhìn thấy. Duyên đẹp đang gần."},{n:26,level:"Trung cát",poem:["Con đò đợi khách sang ngang","Nước xuôi thì chậm, nước ngang thì đầy","Thuận theo con nước hôm nay","Bến kia có kẻ đứng đây đợi mình"],meaning:"Đừng cưỡng cầu. Thuận theo tự nhiên thì việc sẽ thành."},{n:27,level:"Bình an",poem:["Cánh diều chao giữa đồng xa","Dây căng quá mức thì xa mất diều","Thương nhau đừng giữ quá nhiều","Buông tay đúng lúc, sớm chiều có nhau"],meaning:"Yêu thương cần chừa khoảng thở. Tin tưởng thì giữ được lâu."},{n:28,level:"Thượng cát",poem:["Mùa sen hương ngát cả làng","Người đi lễ Phật nhẹ nhàng bước chân","Gặp nhau ngoảnh lại một lần","Mà như quen biết bao lần kiếp xưa"],meaning:"Một cuộc gặp tưởng tình cờ lại rất hợp. Hãy trân trọng cảm giác thân quen ấy."},{n:29,level:"Trung cát",poem:["Gió nồm thổi mát bờ đê","Người đi xa sắp trở về quê hương","Đường xa mà chẳng xa thương","Tin vui sắp đến cuối đường nắng lên"],meaning:"Người ở xa vẫn nhớ đến bạn. Sắp có tin vui."},{n:30,level:"Bình an",poem:["Lúa non còn đợi đòng đòng","Muốn ăn hạt ngọc phải lòng kiên trì","Tình như cây lúa xuân thì","Chăm cho tươi tốt, ngại gì gió sương"],meaning:"Tình cảm cần vun đắp mỗi ngày. Kiên trì thì gặt được quả ngọt."},{n:31,level:"Thượng cát",poem:["Pháo hoa nở rộ đêm xuân","Hai người chung bước, chung phần chung vui","Tay trong tay, mắt môi cười","Năm nay nên vợ nên chồng, nên đôi"],meaning:"Năm thuận lợi cho chuyện hôn nhân. Có thể tính chuyện chung đôi."},{n:32,level:"Trung cát",poem:["Thư ai gửi giữa đường xa","Chữ nhòe nét mực, lời qua nét tình","Chớ nghe lời đoán linh tinh","Hỏi thẳng một tiếng, thật tình mà hay"],meaning:"Đừng đoán ý nhau qua lời người khác. Hỏi thẳng nhẹ nhàng sẽ rõ."},{n:33,level:"Bình an",poem:["Cây khô chờ hạt mưa rào","Lòng ai khô héo, chờ bao giờ cười","Mở lòng ra với mọi người","Mưa xuân sẽ đến, đất trời nở hoa"],meaning:"Bạn đang khép lòng. Kết bạn, ra ngoài nhiều hơn thì niềm vui sẽ tới."},{n:34,level:"Thượng cát",poem:["Hồ thu trong vắt như gương","In hai bóng nhỏ chung đường về chung","Đôi chim liền cánh trên không","Một lòng một dạ thủy chung trọn đời"],meaning:"Người bên cạnh bạn là người thủy chung. Hãy giữ gìn."},{n:35,level:"Trung cát",poem:["Bếp hồng lửa ấm chiều đông","Nồi cơm mẹ nấu thơm nồng khói rơm","Duyên lành từ chỗ rất thường","Người chung mái ấm, sớm hôm đỡ đần"],meaning:"Người hợp với bạn biết lo toan việc nhà. Đừng chỉ nhìn vẻ ngoài."},{n:36,level:"Bình an",poem:["Nước trôi qua đá nghìn năm","Đá còn đứng đó, âm thầm đợi trăng","Lòng người như đá vững vàng","Muộn màng một chút, mà vàng mười thôi"],meaning:"Duyên có thể đến muộn nhưng quý. Đừng so mình với người khác."},{n:37,level:"Thượng cát",poem:["Nắng mai rót mật trên đồi","Chè xanh hái vội, lưng đồi tiếng ca","Câu hò ai gửi gần xa","Có người nghe được, ghé qua hỏi tình"],meaning:"Bạn đang được chú ý. Sự vui tươi của bạn đang thu hút người hợp ý."},{n:38,level:"Trung cát",poem:["Hai bờ một nhịp cầu tre","Ai qua ai lại, ai nghe ai chờ","Nhịp cầu nối những ước mơ","Bước thêm một bước, đôi bờ gần nhau"],meaning:"Hai người đều có ý, chỉ thiếu một người bước trước. Hãy chủ động một chút."},{n:39,level:"Bình an",poem:["Chuông chiều ngân giữa núi xanh","Lắng nghe một tiếng, lòng thanh lạ thường","Bao nhiêu phiền muộn vấn vương","Theo chuông tan hết, con đường sáng ra"],meaning:"Hãy dành thời gian tĩnh lặng. Lòng yên thì thấy rõ điều mình muốn."},{n:40,level:"Thượng cát",poem:["Cành mai vàng nở sân nhà","Tết này có khách gần xa đến chào","Một người dáng nhỏ thanh tao","Mang theo lời hẹn năm sau chung nhà"],meaning:"Dịp lễ Tết là dịp gặp gỡ tốt. Người đến chơi nhà có thể là người có duyên."},{n:41,level:"Trung cát",poem:["Thuyền câu lặng giữa ao thu","Cá chưa cắn mồi, người tu chữ chờ","Đợi nhau chẳng phải là ngờ","Lòng kiên nhẫn sẽ đến bờ yêu thương"],meaning:"Hãy chờ thêm một thời gian. Sự kiên nhẫn của bạn đáng giá."},{n:42,level:"Bình an",poem:["Mái tranh dột lúc mưa dầm","Sửa sang từ sớm, khỏi nằm lo âu","Tình người cũng vậy nhiệm màu","Chăm từ việc nhỏ, về sau vững bền"],meaning:"Những chuyện nhỏ trong tình cảm đừng để lâu. Nói ra sớm thì nhẹ lòng."},{n:43,level:"Thượng cát",poem:["Dải ngân hà bắc qua trời","Ngưu Lang Chức Nữ một thời cách xa","Nay cầu Ô Thước bắc qua","Người thương gặp lại, chan hòa lệ vui"],meaning:"Có cuộc hội ngộ đáng mong chờ. Người xa cách sẽ gặp lại."},{n:44,level:"Trung cát",poem:["Chiếc lá đề rơi trên vai","Ngỡ là tình cờ, ai hay duyên lành","Dưới tàng cây đa xanh xanh","Một câu chào hỏi mà thành bạn thân"],meaning:"Những điều nhỏ bé có ý nghĩa. Một lời chào hôm nay có thể thành tình bạn."},{n:45,level:"Bình an",poem:["Ngựa hay chạy vội thì mòn","Người khôn đi chậm vẫn còn tới nơi","Tình duyên chẳng phải đua người","Đúng người đúng lúc, trọn đời chẳng phai"],meaning:"Đừng sốt ruột vì bạn bè đã có đôi. Mỗi người một thời điểm."},{n:46,level:"Thượng cát",poem:["Đèn lồng đỏ thắm phố đêm","Bàn tay ai nắm, êm đềm bước đi","Chẳng cần nói những lời gì","Một ánh mắt đủ biết khi chung lòng"],meaning:"Hai người hiểu nhau không cần nhiều lời. Đây là mối duyên sâu."},{n:47,level:"Trung cát",poem:["Cửa chùa gió thoảng hương trầm","Lời kinh nhắc nhở thì thầm bao dung","Thương người phải biết thương cùng","Cả điều chưa đẹp, ung dung đón chờ"],meaning:"Thương ai thì thương cả điểm chưa tốt của họ. Bao dung làm duyên bền."},{n:48,level:"Bình an",poem:["Gánh hàng rong giữa phố đông","Mẹ nuôi con lớn, chẳng mong đền bù","Thương cha mẹ trước mùa thu","Phước lành theo đến, mây mù tan mau"],meaning:"Dành thời gian cho cha mẹ. Gia đạo yên vui là nền của mọi duyên lành."},{n:49,level:"Thượng cát",poem:["Vầng trăng vằng vặc đầu non","Mười lăm trăng sáng, tình tròn như trăng","Ông Tơ bà Nguyệt nói rằng","Duyên này đã buộc, khó khăn cũng qua"],meaning:"Duyên đã định thì trở ngại nhỏ cũng vượt qua được. Hãy tin."},{n:50,level:"Trung cát",poem:["Mưa phùn lất phất tháng ba","Áo ai mỏng mảnh qua nhà hôm qua","Muốn hỏi mà ngại người ta","Hỏi đi một tiếng, chẳng qua mất gì"],meaning:"Bạn đang ngần ngại với một người. Thử hỏi thăm, chẳng mất gì cả."},{n:51,level:"Bình an",poem:["Rễ đa bám chặt đất nâu","Trăm năm gió bão vẫn sâu vẫn bền","Muốn tình như rễ cây đền","Phải từ thật thà mà nên cội nguồn"],meaning:"Sự thật thà là gốc rễ của tình cảm. Đừng giấu nhau điều gì."},{n:52,level:"Thượng cát",poem:["Chim én liệng giữa trời xuân","Báo tin vui đến, muôn phần an khang","Duyên lành như ánh nắng vàng","Đến không hẹn trước, rộn ràng cửa nhà"],meaning:"Niềm vui bất ngờ sắp đến. Cửa duyên đang mở."},{n:53,level:"Trung cát",poem:["Hạt mưa rơi xuống hồ sen","Lá sen chẳng ướt, sắc sen vẫn hồng","Giữa đời nhiều chuyện ngược dòng","Giữ mình trong sạch, mới mong gặp lành"],meaning:"Đừng để chuyện xung quanh làm bạn đổi khác. Giữ mình thì gặp người tốt."},{n:54,level:"Bình an",poem:["Ngọn đèn dầu nhỏ đêm khuya","Soi trang sách cũ, sẻ chia nỗi niềm","Một mình mà chẳng buồn thêm","Học thêm một chữ, tự nhiên sáng lòng"],meaning:"Lúc một mình là lúc tốt để học hỏi, hoàn thiện bản thân. Duyên sẽ đến sau."},{n:55,level:"Thượng cát",poem:["Tràng hạt lần đủ trăm lần","Lời cầu ai đó đã gần được nghe","Hoa đăng trôi nhẹ bên hè","Ước mong thành thật, sẽ về thành công"],meaning:"Điều bạn thành tâm cầu mong đang dần thành. Giữ lòng thành."},{n:56,level:"Trung cát",poem:["Đôi giày cũ chạy đường xa","Mòn gót mà vẫn đi qua bao miền","Người cùng mình bước chẳng phiền","Là người đáng giữ, giữ yên trong lòng"],meaning:"Người cùng bạn qua những lúc khó là người đáng quý nhất."},{n:57,level:"Bình an",poem:["Sóng xô thuyền giạt bến bờ","Neo cho chắc chắn, đợi chờ trời quang","Giận hờn chớ nói vội vàng","Ngủ một giấc dậy, lời càng dịu êm"],meaning:"Khi giận đừng nói gì. Để qua một đêm, lời nói sẽ nhẹ nhàng hơn."},{n:58,level:"Thượng cát",poem:["Mẹ già cười giữa sân phơi","Nàng dâu, chàng rể đến mời trầu cau","Hai nhà vui vẻ cùng nhau","Một chữ hiếu, vạn phước sau đong đầy"],meaning:"Gia đình hai bên hòa thuận. Chuyện cưới hỏi thuận lợi."},{n:59,level:"Trung cát",poem:["Sương tan để lộ đường mòn","Bước chân thong thả lên non hái chè","Đường duyên khúc khuỷu chớ e","Đi rồi sẽ thấy lối về rõ thêm"],meaning:"Con đường chưa rõ nhưng cứ bước. Đi rồi sẽ sáng tỏ."},{n:60,level:"Bình an",poem:["Hạt bồ đề nhỏ trong tay","Mai kia thành cội che đầy bóng râm","Duyên lành gieo tự hôm nay","Một lời tử tế, ngàn năm còn hoài"],meaning:"Mỗi việc tốt nhỏ hôm nay là hạt giống duyên lành mai sau."}];class YT{el=document.createElement("div");onDraw=()=>{};constructor(t){this.el.className="sheet fortune",t.appendChild(this.el)}open(t){this.onDraw=t,this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Xin xăm duyên</div>
      <p class="sheet-sub">Thành tâm nghĩ về điều mình mong, rồi lắc ống xăm.</p>
      <div class="tube"><div class="sticks">${"<i></i>".repeat(9)}</div></div>
      <button class="primary shake">Lắc ống xăm</button>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector(".shake").addEventListener("click",()=>this.shake()),this.el.classList.add("open")}close(){this.el.classList.remove("open")}shake(){this.el.querySelector(".tube").classList.add("shaking"),this.el.querySelector(".shake").disabled=!0,navigator.vibrate?.([40,60,40,60,40]),setTimeout(()=>{const e=ma[Math.floor(Math.random()*ma.length)];this.show(e),this.onDraw(e.n)},1500)}reread(t){const e=ma.find(n=>n.n===t);e&&(this.show(e),this.el.classList.add("open"))}show(t){this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="paper">
        <div class="paper-head">Quẻ số ${t.n} · ${t.level}</div>
        <div class="poem">${t.poem.map(e=>`<div>${e}</div>`).join("")}</div>
        <div class="meaning">${t.meaning}</div>
        <div class="match"></div>
      </div>
      <button class="primary again">Xong</button>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector(".again").addEventListener("click",()=>this.close())}showMatch(t){const e=this.el.querySelector(".match");!e||!t.length||(e.textContent=`Hôm nay ${t.join(", ")} cũng rút quẻ này.`)}}const Fg=i=>{const t=ma.find(e=>e.n===i);return t?`Rút quẻ số ${t.n} · ${t.level}`:""},Im="anduyen.bag.xam",km="anduyen.bag.words";function Nm(i){try{return JSON.parse(localStorage.getItem(i)||"[]")}catch{return[]}}function Dm(i,t){try{localStorage.setItem(i,JSON.stringify(t.slice(-30)))}catch{}}class KT{constructor(t,e){this.h=e,this.el.className="sheet bag",t.appendChild(this.el)}el=document.createElement("div");tab="xam";xam=Nm(Im);words=Nm(km);unread=0;get isOpen(){return this.el.classList.contains("open")}addFortune(t){this.xam.push({n:t,at:Date.now()}),Dm(Im,this.xam)}addWords(t){this.words.push(t),Dm(km,this.words),this.unread++}open(t=this.tab){this.tab=t,t==="words"&&(this.unread=0),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open")}render(){const t=this.h.today(),e=this.h.giftsLeft(),n=this.h.myLanterns(),s=[["xam",`Quẻ xăm (${this.xam.length})`],["words",`Lời chúc (${this.words.length})`],["den",`Hoa đăng (${n.length})`]].map(([o,r])=>`<button data-tab="${o}" class="${this.tab===o?"on":""}">${r}${o==="words"&&this.unread?" •":""}</button>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Túi đồ</div>
      <div class="bag-today">
        <div><b>${e??"–"}</b><span>nén hương còn tặng hôm nay</span></div>
        <div><b>${t.beads}</b><span>hạt đã lần hôm nay</span></div>
        <div><b>${t.bows}</b><span>lạy hôm nay</span></div>
      </div>
      <div class="tabs">${s}</div>
      <div class="bag-list">${this.list(n)}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-tab]").forEach(o=>o.addEventListener("click",()=>this.open(o.dataset.tab))),this.el.querySelectorAll("[data-xam]").forEach(o=>o.addEventListener("click",()=>{this.close(),this.h.readFortune(Number(o.dataset.xam))})),this.el.querySelectorAll("[data-den]").forEach(o=>o.addEventListener("click",()=>{const r=n.find(a=>a.id===Number(o.dataset.den));r&&(this.close(),this.h.readLantern(r))}))}list(t){const e=s=>new Date(s).toLocaleDateString("vi-VN",{day:"numeric",month:"numeric"})+" "+new Date(s).toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"}),n=s=>`<p class="sheet-sub">${s}</p>`;return this.tab==="xam"?this.xam.length?[...this.xam].reverse().map(({n:s,at:o})=>{const r=ma.find(a=>a.n===s);return r?`<button class="bag-item" data-xam="${s}"><b>Quẻ số ${s} · ${r.level}</b><span>${r.poem[0]}…</span><small>${e(o)}</small></button>`:""}).join(""):n("Chưa có quẻ nào. Xin xăm ở Hồ sen · Cầu Duyên, quẻ sẽ được cất vào đây để đọc lại."):this.tab==="words"?this.words.length?[...this.words].reverse().map(s=>`<div class="bag-item"><b>${zh(s.name)}${s.kind==="gift"?" · tặng hương":""}</b><span>${zh(s.text)}</span><small>${e(s.at)}</small></div>`).join(""):n("Lời chúc và nén hương người khác gửi cho bạn sẽ được cất ở đây."):t.length?t.map(s=>`<button class="bag-item" data-den="${s.id}"><b>${s.color==="hong"?"Đèn hồng · cầu duyên":"Đèn vàng · cầu an"}</b><span>${zh(s.text)}</span><small>${s.likes} người tùy hỷ · ${e(s.at)}</small></button>`).join(""):n("Bạn chưa có ngọn hoa đăng nào trên hồ. Đèn trôi 24 giờ rồi tắt.")}}const zh=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),Vn=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,Um={nhiemvu:Vn('<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>'),tuido:Vn('<path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),bando:Vn('<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),xephang:Vn('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M9 20h6"/>'),congdong:Vn('<circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-3.5 2.8-5.5 5.5-5.5s5 2 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c2.6-.3 4.6 1.5 5 4.9"/>'),dovui:Vn('<path d="M5 4h14v12H9l-4 4z"/><path d="M10 8.2a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.5"/><circle cx="12" cy="13.6" r=".5" fill="currentColor"/>'),loinguyen:Vn('<path d="M12 21c-1.2-3-1-6.5 0-9 1 2.5 1.2 6 0 9z"/><path d="M12 12c-.8-2.6-.2-5.2 1.6-7.4"/><path d="M7 20c.6-2.4 2.2-4 5-4.6M17 20c-.6-2.4-2.2-4-5-4.6"/>'),linhthu:Vn('<path d="M7 9.5l-.5-4 3 2.5M17 9.5l.5-4-3 2.5"/><circle cx="12" cy="13" r="6"/><path d="M9.5 13q1 1 2 0M12.5 13q1 1 2 0"/>'),hoso:Vn('<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1-4 3.8-6 7-6s6 2 7 6"/>'),gopgao:Vn('<path d="M3 11h18c0 5-4 9-9 9s-9-4-9-9z"/><path d="M8 11c0-2 1-3 2-3M12 11c0-3 1-4 2-4M16 11c0-1.5.6-2.5 1.5-2.5"/>'),gopy:Vn('<path d="M4 5h16v11H10l-4 3.5V16H4z"/><path d="M8 9h8M8 12h5"/>'),gomo:Vn('<circle cx="12" cy="13" r="7"/><path d="M5 13c0-3.8 3.1-7 7-7s7 3.2 7 7"/><path d="M12 9v4l3 2"/>'),phongsinh:Vn('<path d="M2 16s4-4 9-2c4 1.6 7-2 11-2-1 3-3 6-7 7-5 1-9-3-13-3z"/><circle cx="17" cy="14" r="1"/>'),caidat:Vn('<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/><circle cx="12" cy="12" r="6.5"/>'),menu:Vn('<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>')},ZT=[["nhiemvu","Nhiệm vụ"],["gomo","Gõ mõ niệm Phật"],["phongsinh","Phóng sinh"],["tuido","Túi đồ"],["bando","Bản đồ chùa"],["xephang","Xếp hạng"],["congdong","Bạn đồng tu"],["loinguyen","Lời nguyện"],["dovui","Đố vui"],["linhthu","Linh thú"],["hoso","Hồ sơ"],["gopgao","Cầu nguyện chúng sinh"],["gopy","Góp ý"],["caidat","Cài đặt"]];class JT{constructor(t,e,n){this.act=n;const s=ZT.filter(([r])=>e.includes(r)),o=([r,a])=>`<button data-menu="${r}">${Um[r]}<span>${a}</span><i class="badge"></i></button>`;this.bar.className="menu-bar",this.bar.setAttribute("aria-label","Menu"),this.bar.innerHTML=s.map(o).join(""),this.btn.className="icon-btn menu-btn",this.btn.setAttribute("aria-label","Menu"),this.btn.innerHTML=`${Um.menu}<i class="badge"></i>`,this.grid.className="sheet menu-grid",this.grid.innerHTML=`<button class="sheet-close" aria-label="Đóng">×</button><div class="sheet-title">Menu</div><div class="grid">${s.map(o).join("")}</div>`,t.append(this.bar,this.btn,this.grid),this.btn.onclick=()=>this.grid.classList.toggle("open"),this.grid.querySelector(".sheet-close").addEventListener("click",()=>this.grid.classList.remove("open"));for(const r of[this.bar,this.grid])r.querySelectorAll("[data-menu]").forEach(a=>a.addEventListener("click",()=>{this.grid.classList.remove("open"),this.act(a.dataset.menu)}))}bar=document.createElement("nav");btn=document.createElement("button");grid=document.createElement("div");close(){this.grid.classList.remove("open")}setBadges(t){let e=0;for(const s of[this.bar,this.grid])s.querySelectorAll("[data-menu]").forEach(o=>{const r=t[o.dataset.menu]??0,a=o.querySelector(".badge");a.textContent=r>0?String(r):"",a.style.display=r>0?"":"none"});for(const s of Object.values(t))e+=s??0;const n=this.btn.querySelector(".badge");n.textContent=e>0?String(e):"",n.style.display=e>0?"":"none"}}const QT=[{title:"Đi lại",text:"Đặt ngón cái lên vòng tròn bên trái rồi kéo để đi. Đẩy hết cỡ để chạy.",at:"left"},{title:"Nhìn quanh",text:"Vuốt nửa phải màn hình để xoay, chụm hai ngón để xem gần xa. Chạm bồ đoàn hay ghế đá để ngồi.",at:"center"},{title:"Lễ Phật",text:"Nút lễ hiện bên phải, đổi theo nơi bạn đứng: lạy, thắp hương, thả hoa đăng, xin xăm…",at:"right"},{title:"Của riêng bạn",text:"Bánh răng để đổi tên, màu áo, âm thanh. Bát gạo để góp nuôi chùa. Chúc bạn an lạc!",at:"top"}],tE=[{title:"Đi lại",text:"W A S D hoặc phím mũi tên để đi, giữ Shift để chạy. Bấm xuống nền để đi tới đó.",at:"center"},{title:"Nhìn quanh",text:"Kéo chuột hoặc Q E để xoay, lăn chuột để xem gần xa. Bấm bồ đoàn hay ghế đá để ngồi.",at:"center"},{title:"Lễ Phật",text:"Nút lễ hiện dưới màn hình, đổi theo nơi bạn đứng: lạy, thắp hương, thả hoa đăng, xin xăm…",at:"center"},{title:"Của riêng bạn",text:"Bánh răng để đổi tên, màu áo, âm thanh. Bát gạo để góp nuôi chùa. Chúc bạn an lạc!",at:"top"}];class eE{el=document.createElement("div");i=0;steps;done=()=>{};constructor(t,e){this.steps=e?QT:tE,this.el.className="guide",t.appendChild(this.el)}open(t){this.done=t,this.i=0,this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open"),this.done()}render(){const t=this.steps[this.i],e=this.i===this.steps.length-1,n=this.steps.map((s,o)=>`<i class="${o===this.i?"on":""}"></i>`).join("");this.el.dataset.at=t.at,this.el.innerHTML=`
      <div class="guide-card">
        <div class="guide-step">${this.i+1}/${this.steps.length}</div>
        <div class="sheet-title">${t.title}</div>
        <p>${t.text}</p>
        <div class="guide-foot">
          <div class="guide-dots">${n}</div>
          ${e?"":'<button class="ghost small" data-act="skip">Bỏ qua</button>'}
          <button class="primary small" data-act="next">${e?"Vào chùa":"Tiếp"}</button>
        </div>
      </div>`,this.el.querySelector('[data-act="skip"]')?.addEventListener("click",()=>this.close()),this.el.querySelector('[data-act="next"]').addEventListener("click",()=>{if(e)return this.close();this.i++,this.render()})}}const Om=["Chúc đạo hữu thân tâm an lạc","Tùy hỷ công đức của đạo hữu","Chúc bạn một ngày bình an","Mong bạn sớm gặp được duyên lành"],nE={nau:"nâu",lam:"lam",xam:"xám",vang:"vàng",cam:"cà sa"};class iE{constructor(t,e){this.act=e,this.el.className="sheet profile",t.appendChild(this.el),this.el.addEventListener("keydown",n=>n.stopPropagation())}el=document.createElement("div");p=null;get isOpen(){return this.el.classList.contains("open")}get pid(){return this.isOpen?this.p?.pid??null:null}request(t){this.act.send({t:"profile",...t})}show(t){const e=this.p?.pid===t.pid?this.el.querySelector("input")?.value??"":"";this.p=t,this.render(e),this.el.classList.add("open")}close(){this.el.classList.remove("open")}render(t){const e=this.p,n=e.bond==="self",s=e.id!==null?this.act.zoneOf(e.id):null,o=n?"hồ sơ của bạn":s?`đang ở ${s}`:e.online?"đang ở phòng khác":"đang không ở chùa",r={none:'<button class="primary" data-act="friend">Kết bạn đồng tu</button>',sent:'<button class="ghost" data-act="unfriend">Đã gửi lời mời · Huỷ</button>',got:'<button class="primary" data-act="friend">Nhận lời kết bạn</button>',yes:'<button class="primary" data-act="chat">Nhắn tin riêng</button>',self:""}[e.bond],a=n?'<button class="ghost" data-act="edit">Đổi tên, áo, lời giới thiệu</button>':`
        <div class="field-label">Gửi lời chúc</div>
        <div class="wish-chips">${Om.map((d,f)=>`<button data-wish="${f}">${d}</button>`).join("")}</div>
        <div class="name-row">
          <input maxlength="80" placeholder="Hoặc tự viết lời chúc…" enterkeyhint="send" value="${kc(t)}">
          <button class="ghost small" data-act="wish">Gửi</button>
        </div>
        <div class="card-main">
          <button class="ghost" data-act="gift" ${e.giftsLeft<=0?"disabled":""}>Tặng hương <small>còn ${e.giftsLeft}</small></button>
          ${r}
        </div>
        <p class="sheet-sub">${e.bond==="yes"?"Hai bạn là bạn đồng tu.":"Kết bạn đồng tu để nhắn tin riêng và thấy nhau khi vào chùa."}</p>
        <div class="card-more">
          ${e.id!==null?'<button data-act="greet">Chắp tay chào</button>':""}
          ${e.bond==="yes"?'<button data-act="unfriend">Bỏ kết bạn</button>':""}
          <button data-act="mute">${this.act.muted(e.pid)?"Bỏ tắt tiếng":"Tắt tiếng"}</button>
          ${e.id!==null?'<button class="danger" data-act="report">Báo xấu</button>':""}
        </div>`;this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="card-head">
        <div class="avatar">${Ug(e.kind,e.robe,e.skin)}</div>
        <div class="card-who">
          <b>${kc(e.name)}</b>
          <span>${e.kind==="ni"?"Tiểu ni":"Chú tiểu"} · áo ${nE[e.robe]??"nâu"} · <em>${e.level}</em></span>
          <small class="${e.online?"on":""}">${o}</small>
        </div>
      </div>
      ${e.pet&&jn[e.pet.k]?`<div class="card-pet">${nr(e.pet.k)}<span>Linh thú: <b>${kc(e.pet.n)}</b> · ${jn[e.pet.k].name}</span></div>`:""}
      ${e.bio?`<p class="card-bio">“${kc(e.bio)}”</p>`:n?'<p class="sheet-sub">Bạn chưa có lời giới thiệu. Thêm trong Cài đặt → Nhân vật.</p>':""}
      <div class="stats">
        <div><b>${e.merit.toLocaleString("vi-VN")}</b><span>công đức</span></div>
        <div><b>${e.bows.toLocaleString("vi-VN")}</b><span>lạy</span></div>
        <div><b>${e.rounds}</b><span>chuỗi hạt</span></div>
        <div><b>${e.streak}</b><span>ngày liên tiếp</span></div>
      </div>
      ${a}`;const c=(d,f)=>this.el.querySelector(d)?.addEventListener("click",f);c(".sheet-close",()=>this.close());const l=e.id!==null?{to:e.id}:{pid:e.pid},h=this.el.querySelector("input"),u=d=>{d.trim()&&(this.act.send({t:"wish",...l,text:d}),h&&(h.value=""))};this.el.querySelectorAll("[data-wish]").forEach(d=>d.addEventListener("click",()=>u(Om[Number(d.dataset.wish)]))),c('[data-act="wish"]',()=>u(h?.value??"")),h?.addEventListener("keydown",d=>{d.key==="Enter"&&u(h.value)}),c('[data-act="gift"]',()=>this.act.send({t:"gift",...l})),c('[data-act="friend"]',()=>this.act.send({t:"friend",...l})),c('[data-act="unfriend"]',()=>{this.act.send({t:"unfriend",pid:e.pid}),this.request(l)}),c('[data-act="chat"]',()=>{this.close(),this.act.chat(e.pid,e.name)}),c('[data-act="greet"]',()=>{this.close(),this.act.greet(e.id)}),c('[data-act="mute"]',()=>{this.act.mute(e.pid,e.name),this.render(h?.value??"")}),c('[data-act="report"]',()=>{this.close(),this.act.report(e.id)}),c('[data-act="edit"]',()=>{this.close(),this.act.editMe()})}}const kc=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),sE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-3.5 2.8-5.5 5.5-5.5s5 2 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c2.6-.3 4.6 1.5 5 4.9"/></svg>';class oE{constructor(t,e,n,s,o,r){this.myPid=n,this.send=s,this.openProfile=o,this.toast=r,this.pill.className="pill friends-pill",this.pill.setAttribute("aria-label","Bạn đồng tu"),this.pill.onclick=()=>this.isOpen?this.close():this.open(),t.appendChild(this.pill),this.el.className="sheet friends",this.el.addEventListener("keydown",a=>a.stopPropagation()),e.appendChild(this.el),this.paintPill()}pill=document.createElement("button");el=document.createElement("div");list=[];reqIn=[];tab="list";talk=null;unread=new Map;get waiting(){return this.reqIn.length+[...this.unread.values()].reduce((t,e)=>t+e,0)}get pids(){return new Set(this.list.map(t=>t.pid))}get isOpen(){return this.el.classList.contains("open")}open(){this.talk=null,this.tab=this.reqIn.length&&!this.list.length?"req":"list",this.send({t:"friends"}),this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open"),this.talk=null}chat(t,e){this.talk={pid:t,name:e},this.unread.delete(t),this.render(),this.el.classList.add("open"),this.paintPill()}setFriends(t,e){this.list=t.sort((n,s)=>Number(s.online)-Number(n.online)),this.reqIn=e,this.paintPill(),this.isOpen&&!this.talk&&this.render()}request(t){this.toast(`${t} muốn kết bạn đồng tu với bạn · xem ở biểu tượng bạn bè`)}dm(t){const e=t.from===this.myPid()?t.to:t.from,n=zm(e);if(n.push(t),rE(e,n),this.isOpen&&this.talk?.pid===e)return this.renderTalk(!0);t.from!==this.myPid()&&(this.unread.set(e,(this.unread.get(e)||0)+1),this.paintPill(),this.toast(`${t.name}: ${t.text.length>40?t.text.slice(0,40)+"…":t.text}`))}paintPill(){const t=this.list.filter(n=>n.online).length,e=this.reqIn.length+[...this.unread.values()].reduce((n,s)=>n+s,0);this.pill.innerHTML=`${sE}<b>${t}</b>`,this.pill.title=`${t} bạn đồng tu đang ở chùa`,this.pill.classList.toggle("ready",e>0)}render(){if(this.talk)return this.renderTalk(!1);const t=this.tab==="list"?this.list:this.reqIn,e=t.length?t.map(n=>`<div class="friend-row" data-pid="${n.pid}">
              <span class="f-dot ${n.online?"on":""}"></span>
              <span class="f-name"><b>${Nc(n.name)}</b><small>${n.level??""}${n.online?" · đang ở chùa":""}</small></span>
              ${this.tab==="req"?`<button class="primary small" data-yes="${n.pid}">Nhận lời</button><button class="ghost small" data-no="${n.pid}">Thôi</button>`:`<button class="ghost small" data-talk="${n.pid}">Nhắn${this.unread.get(n.pid)?` (${this.unread.get(n.pid)})`:""}</button>`}
            </div>`).join(""):`<p class="sheet-sub">${this.tab==="list"?"Chưa có bạn đồng tu. Chạm vào một người trong chùa, xem hồ sơ và bấm <b>Kết bạn đồng tu</b>.":"Không có lời mời nào."}</p>`;this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Bạn đồng tu</div>
      <div class="tabs">
        <button data-tab="list" class="${this.tab==="list"?"on":""}">Bạn bè (${this.list.length})</button>
        <button data-tab="req" class="${this.tab==="req"?"on":""}">Lời mời${this.reqIn.length?` (${this.reqIn.length})`:""}</button>
      </div>
      <div class="friend-list">${e}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-tab]").forEach(n=>n.addEventListener("click",()=>{this.tab=n.dataset.tab,this.render()})),this.el.querySelectorAll(".friend-row").forEach(n=>n.addEventListener("click",s=>{const o=s.target,r=n.dataset.pid;o.dataset.yes?this.send({t:"friend",pid:r}):o.dataset.no?this.send({t:"unfriend",pid:r}):o.dataset.talk?this.chat(r,this.list.find(a=>a.pid===r)?.name??""):(this.close(),this.openProfile(r))}))}renderTalk(t){const e=this.talk,n=this.list.find(l=>l.pid===e.pid),s=t?this.el.querySelector("input")?.value??"":"",o=zm(e.pid).map(l=>`<div class="dm ${l.from===this.myPid()?"mine":""}"><span>${Nc(l.text)}</span>${l.warn?"<small>Cẩn thận lừa đảo: đừng chuyển tiền cho người mới quen</small>":""}</div>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="talk-head"><button class="ghost small" data-act="back">‹ Bạn bè</button><b>${Nc(n?.name??e.name)}</b><small class="${n?.online?"on":""}">${n?.online?"đang ở chùa":"không ở chùa"}</small></div>
      <div class="dm-list">${o||'<p class="sheet-sub">Hãy gửi lời chào đầu tiên. Tin nhắn riêng chỉ hai bạn thấy.</p>'}</div>
      <div class="name-row">
        <input maxlength="80" placeholder="${n?.online?"Nhắn riêng…":"Bạn ấy không ở chùa lúc này"}" enterkeyhint="send" value="${Nc(s)}">
        <button class="primary small" data-act="send">Gửi</button>
      </div>`;const r=this.el.querySelector(".dm-list");r.scrollTop=r.scrollHeight;const a=this.el.querySelector("input"),c=()=>{const l=a.value.trim();l&&(this.send({t:"dm",pid:e.pid,text:l}),a.value="")};this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector('[data-act="back"]').addEventListener("click",()=>{this.talk=null,this.render()}),this.el.querySelector('[data-act="send"]').addEventListener("click",c),a.addEventListener("keydown",l=>{l.key==="Enter"&&c()}),t&&a.focus()}}const sd=new Map;function zm(i){let t=sd.get(i);if(!t){try{t=JSON.parse(localStorage.getItem("anduyen.dm."+i)||"[]")}catch{t=[]}sd.set(i,t)}return t}function rE(i,t){sd.set(i,t.slice(-50));try{localStorage.setItem("anduyen.dm."+i,JSON.stringify(t.slice(-50)))}catch{}}const Nc=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`);let Jo=null;addEventListener("beforeinstallprompt",i=>{i.preventDefault(),Jo=i});function aE(){return!Jo&&!("BeforeInstallPromptEvent"in window)?null:async()=>{if(!Jo)return!1;await Jo.prompt();const{outcome:i}=await Jo.userChoice;return Jo=null,i==="accepted"}}function cE(){"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}))}const oa=Math.PI,On=Math.floor;function Hg(i,t,e){const n=On((14-t)/12),s=e+4800-n,o=t+12*n-3;let r=i+On((153*o+2)/5)+365*s+On(s/4)-On(s/100)+On(s/400)-32045;return r<2299161&&(r=i+On((153*o+2)/5)+365*s+On(s/4)-32083),r}function br(i,t){const e=i/1236.85,n=e*e,s=n*e,o=oa/180;let r=241502075933e-5+29.53058868*i+1178e-7*n-155e-9*s;r+=33e-5*Math.sin((166.56+132.87*e-.009173*n)*o);const a=359.2242+29.10535608*i-333e-7*n-347e-8*s,c=306.0253+385.81691806*i+.0107306*n+1236e-8*s,l=21.2964+390.67050646*i-.0016528*n-239e-8*s;let h=(.1734-393e-6*e)*Math.sin(a*o)+.0021*Math.sin(2*o*a);h=h-.4068*Math.sin(c*o)+.0161*Math.sin(o*2*c),h=h-4e-4*Math.sin(o*3*c),h=h+.0104*Math.sin(o*2*l)-.0051*Math.sin(o*(a+c)),h=h-.0074*Math.sin(o*(a-c))+4e-4*Math.sin(o*(2*l+a)),h=h-4e-4*Math.sin(o*(2*l-a))-6e-4*Math.sin(o*(2*l+c)),h=h+.001*Math.sin(o*(2*l-c))+5e-4*Math.sin(o*(2*c+a));const u=e<-11?.001+839e-6*e+2261e-7*n-845e-8*s-81e-9*e*s:-278e-6+265e-6*e+262e-6*n;return On(r+h-u+.5+t/24)}function od(i,t){const e=(i-24515455e-1-t/24)/36525,n=e*e,s=oa/180,o=357.5291+35999.0503*e-1559e-7*n-48e-8*e*n,r=280.46645+36000.76983*e+3032e-7*n;let a=(1.9146-.004817*e-14e-6*n)*Math.sin(s*o);a+=(.019993-101e-6*e)*Math.sin(s*2*o)+29e-5*Math.sin(s*3*o);let c=(r+a)*s;return c-=oa*2*On(c/(oa*2)),On(c/oa*6)}function Bh(i,t){const e=Hg(31,12,i)-2415021,n=On(e/29.530588853),s=br(n,t);return od(s,t)>=9?br(n-1,t):s}function lE(i,t){const e=On((i-2415021076998695e-9)/29.530588853+.5);let n=0,s=1,o=od(br(e+s,t),t);do n=o,s++,o=od(br(e+s,t),t);while(o!==n&&s<14);return s-1}function hE(i,t,e,n=7){const s=Hg(i,t,e),o=On((s-2415021076998695e-9)/29.530588853);let r=br(o+1,n);r>s&&(r=br(o,n));let a=Bh(e,n),c=a,l;a>=r?(l=e,a=Bh(e-1,n)):(l=e+1,c=Bh(e+1,n));const h=s-r+1,u=On((r-a)/29);let d=!1,f=u+11;if(c-a>365){const p=lE(a,n);u>=p&&(f=u+10,u===p&&(d=!0))}return f>12&&(f-=12),f>=11&&u<4&&(l-=1),{day:h,month:f,year:l,leap:d}}function rd(i=new Date){const t=new Date(i.getTime()+252e5);return hE(t.getUTCDate(),t.getUTCMonth()+1,t.getUTCFullYear())}const Bm=new _(0,rt.hall.y,-19.6),Fh=new _(0,rt.hall.y,-21.6);class uE{group=new it;sticks;tips;max=45;constructor(){this.sticks=new ci(new ft(.012,.012,.9,4),k.ridge(),this.max),this.tips=new ci(new gt(.022,6,4),k.incense(),this.max);const t=new Vt;let e=11;const n=()=>((e=e*16807%2147483647)-1)/2147483646;for(let s=0;s<this.max;s++){const o=n()*Math.PI*2,r=Math.sqrt(n())*.62,a=new mn().setFromEuler(new kn((n()-.5)*.15,0,(n()-.5)*.15)),c=new _(Fh.x+Math.cos(o)*r,Fh.y+1.4+.45,Fh.z+Math.sin(o)*r);t.compose(c,a,new _(1,1,1)),this.sticks.setMatrixAt(s,t);const l=new _(0,.45,0).applyQuaternion(a).add(c);t.compose(l,new mn,new _(1,1,1)),this.tips.setMatrixAt(s,t)}this.sticks.count=this.tips.count=0,this.group.add(this.sticks,this.tips)}set(t){this.sticks.count=this.tips.count=Math.min(this.max,t*3)}}
let _incenseSheet=null;
function spawnFloatingPrayer(text){
  const el=document.createElement("div");
  el.className="floating-prayer-ribbon";
  el.innerHTML=`<div class="ribbon-lotus">🪷</div><div class="ribbon-text">“${text}”</div><div class="ribbon-smoke">Khói trầm hương quyện bay dâng lên Tam Bảo…</div>`;
  document.body.appendChild(el);
  setTimeout(()=>{el.remove()},7000);
}
function openIncenseModal(){
  if(!_incenseSheet){
    _incenseSheet=document.createElement("div");
    _incenseSheet.className="sheet incense-dialog";
    ke.appendChild(_incenseSheet);
  }
  _incenseSheet.innerHTML=`
    <button class="sheet-close" aria-label="Đóng">×</button>
    <div class="sheet-title">Dâng Hương & Cầu Nguyện</div>
    <p class="sheet-sub">Thành tâm dâng ba nén tâm hương trước Tam Bảo, khói hương nghi ngút quyện bay, gửi gắm lời nguyện lành đến mười phương chư Phật.</p>
    <div class="incense-anim-box">
      <div class="incense-burner-icon">
        <div class="incense-sticks">
          <div class="stick stick-1"><span class="ember"></span><span class="smoke-trail"></span></div>
          <div class="stick stick-2"><span class="ember"></span><span class="smoke-trail"></span></div>
          <div class="stick stick-3"><span class="ember"></span><span class="smoke-trail"></span></div>
        </div>
        <div class="burner-bowl">🪷 LƯ HƯƠNG ĐẠI HÙNG BẢO ĐIỆN 🪷</div>
      </div>
    </div>
    <div class="incense-prayer-form">
      <div class="incense-label">✍️ Viết lời nguyện cầu dâng Phật:</div>
      <textarea class="incense-input" rows="3" placeholder="Ghi lời cầu nguyện thành tâm của bạn khi cắm nén hương…"></textarea>
      <div class="incense-tags">
        <button type="button" class="incense-tag" data-v="Nguyện dâng ba nén tâm hương, cúng dường mười phương Tam Bảo, cầu cho muôn loài an lạc.">🕊️ Dâng nén tâm hương</button>
        <button type="button" class="incense-tag" data-v="Cầu cho cha mẹ thân tâm an lạc, tai qua nạn khỏi, sức khỏe dồi dào, thọ mệnh dài lâu.">🌿 Cầu an cho cha mẹ</button>
        <button type="button" class="incense-tag" data-v="Cầu cho gia đạo bình yên, công việc hanh thông, tiêu trừ nghiệp chướng, vạn sự cát tường.">💫 Gia đạo bình an</button>
        <button type="button" class="incense-tag" data-v="Cầu quốc thái dân an, phong điều vũ thuận, mưa hòa gió thuận, muôn dân no ấm.">🪷 Quốc thái dân an</button>
      </div>
      <button type="button" class="incense-submit-btn">
        <span>🔥</span> Cắm 3 Nén Hương & Dâng Lời Nguyện
      </button>
    </div>
  `;
  _incenseSheet.querySelector(".sheet-close").addEventListener("click",()=>_incenseSheet.classList.remove("open"));
  const inputEl=_incenseSheet.querySelector(".incense-input");
  _incenseSheet.querySelectorAll(".incense-tag").forEach(tag=>{
    tag.addEventListener("click",()=>{
      inputEl.value=tag.getAttribute("data-v")||"";
      inputEl.focus();
    });
  });
  _incenseSheet.querySelector(".incense-submit-btn").addEventListener("click",()=>{
    const text=inputEl.value.trim()||"Nguyện dâng ba nén tâm hương, cầu cho thân tâm an lạc, vạn sự cát tường.";
    try{
      lt.bow();
      zn.bell&&zn.bell(.45);
      zn.muyu&&zn.muyu(.55);
    }catch(e){}
    try{
      if(cd?.sticks){
        cd.sticks.count=Math.min(cd.max,(cd.sticks.count||0)+3);
        cd.tips.count=cd.sticks.count;
        cd.sticks.instanceMatrix.needsUpdate=!0;
        cd.tips.instanceMatrix.needsUpdate=!0;
      }
    }catch(e){}
    spawnFloatingPrayer(text);
    Ns.incense=(Ns.incense||0)+3;
    ad(Ns);
    try{
      Et.send({t:"incense"});
      Et.send({t:"chat",text:`🙏 Thắp hương cầu nguyện: ${text}`});
    }catch(e){}
    At.toast("Khói hương trầm bay tỏa quyện cùng lời nguyện dâng lên chư Phật 🙏",5200);
    _incenseSheet.classList.remove("open");
  });
  _incenseSheet.classList.add("open");
}
const dE=[{start:5,name:"Công phu sáng"},{start:19.5,name:"Tụng kinh tối"}],fE=10;function pE(){const i=Oa();for(const t of dE){const e=(i-t.start)*60;if(e>=0&&e<fE)return{name:t.name,elapsed:e}}return null}function mE(){const i=new URLSearchParams(location.search).get("am"),t=i?{day:Number(i),month:10}:rd();return t.day===15?{label:`Hôm nay rằm tháng ${t.month} âm lịch`,fullMoon:!0}:t.day===1?{label:`Hôm nay mùng 1 tháng ${t.month} âm lịch`,fullMoon:!1}:null}class gE{constructor(t){this.sound=t}beat=0;syllable=0;lastBell=-99;previewLeft=0;preview(){this.previewLeft=12*.95,this.syllable=0}update(t,e,n){if(this.previewLeft=Math.max(0,this.previewLeft-t),this.previewLeft>0&&(n=!0),!this.sound.on||!e&&!n){this.syllable=0;return}const s=e?n?1:.6:.35;if(this.beat+=t,this.beat>=.95&&(this.beat-=.95,this.sound.mo(.35*s),this.sound.chant(this.syllable,s),this.syllable=(this.syllable+1)%6),!e)return;const o=e.elapsed*60;(o-this.lastBell>=20||o<this.lastBell)&&(this.lastBell=o,this.sound.bell(.22))}}const Gg="anduyen.today",Fm=()=>new Date(Date.now()+7*3600*1e3).toISOString().slice(0,10);function vE(){try{const i=JSON.parse(localStorage.getItem(Gg)||"null");if(i&&i.day===Fm())return i}catch{}return{day:Fm(),beads:0,bows:0,incense:0}}function ad(i){try{localStorage.setItem(Gg,JSON.stringify(i))}catch{}}class yE{constructor(t,e,n){this.today=e,this.onBead=n,this.el.className="beads",this.el.innerHTML=`
      <div class="beads-top">
        <div class="beads-count"></div>
        <div class="beads-mantra">Nam mô A Di Đà Phật</div>
      </div>
      <div class="strand"></div>
      <div class="beads-bottom">
        <button class="ghost mantra-toggle">Ẩn câu niệm</button>
        <button class="primary beads-close">Về chùa</button>
      </div>
      <div class="beads-hint">Vuốt lên hoặc chạm để lần một hạt</div>`,t.appendChild(this.el),this.strand=this.el.querySelector(".strand"),this.countEl=this.el.querySelector(".beads-count");for(let a=0;a<15;a++){const c=document.createElement("i");a===7&&(c.className="current"),this.strand.appendChild(c)}this.el.querySelector(".beads-close").addEventListener("click",()=>this.close());const s=this.el.querySelector(".mantra-toggle");s.addEventListener("click",()=>{this.showMantra=!this.showMantra,this.el.querySelector(".beads-mantra").style.visibility=this.showMantra?"visible":"hidden",s.textContent=this.showMantra?"Ẩn câu niệm":"Hiện câu niệm"});const o=this.strand;o.addEventListener("pointerdown",a=>{this.dragStart=a.clientY,this.dragOffset=0,o.setPointerCapture(a.pointerId)}),o.addEventListener("pointermove",a=>{this.dragStart!==null&&(this.dragOffset=Math.min(0,a.clientY-this.dragStart),this.layout())});const r=()=>{if(this.dragStart===null)return;const a=this.dragOffset;this.dragStart=null,this.dragOffset=0,a>-8||a<-30?this.next():this.layout()};o.addEventListener("pointerup",r),o.addEventListener("pointercancel",r),this.el.addEventListener("wheel",a=>{a.preventDefault(),a.deltaY>0&&this.next()},{passive:!1}),addEventListener("keydown",a=>{this.el.classList.contains("open")&&((a.key===" "||a.key==="ArrowUp"||a.key==="ArrowDown")&&(a.preventDefault(),this.next()),a.key==="Escape"&&this.close())})}el=document.createElement("div");strand;countEl;offset=0;dragStart=null;dragOffset=0;showMantra=!0;get isOpen(){return this.el.classList.contains("open")}open(){this.el.classList.add("open"),this.render()}close(){this.el.classList.remove("open")}next(){this.today.beads++,ad(this.today),this.offset++,this.onBead(),navigator.vibrate?.(8),this.strand.classList.remove("step"),this.strand.offsetWidth,this.strand.classList.add("step"),this.render()}render(){const t=this.today.beads,e=t%108,n=Math.floor(t/108);this.countEl.innerHTML=e===0&&t>0?`Trọn vòng ${n} · nguyện lòng an yên`:`Hạt ${e}/108 · Vòng ${n+1}`,this.layout()}layout(){const t=[...this.strand.children],e=64;t.forEach((n,s)=>{const o=(s-7)*e+this.dragOffset,r=Math.abs(s-7)/7;n.style.transform=`translate(${r*r*30}px, ${o}px) scale(${1-r*.35})`,n.style.opacity=String(1-r*.6)})}}const xE=new gt(1,10,6,0,Math.PI*2,0,Math.PI/2),Hh={vang:new mt({color:"#ffd77a",emissive:"#ffb02e",emissiveIntensity:.9,roughness:.6,side:Re}),hong:new mt({color:"#ffb3c6",emissive:"#ff5c8a",emissiveIntensity:.9,roughness:.6,side:Re}),base:new mt({color:"#3f7a3a",roughness:.7,side:Re}),flame:new xe({color:"#fff1c2"})};let Gh=null;function bE(){if(Gh)return Gh;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Gh=new Ve(i)}function _E(i){const t=new it,e=new _l(new ka({map:bE(),color:i==="hong"?"#ff7aa2":"#ffc24a",transparent:!0,opacity:.55,depthWrite:!1,blending:vo}));e.scale.setScalar(1.6),e.position.y=.25,t.add(e);const n=new z(new Yn(.42,18),Hh.base);n.rotation.x=-Math.PI/2,t.add(n);for(let r=0;r<2;r++){const a=r?6:8;for(let c=0;c<a;c++){const l=c/a*Math.PI*2+r*.35,h=new z(xE,Hh[i]);h.scale.set(.11,.3-r*.06,.08),h.position.set(Math.cos(l)*(.17-r*.07),.02,Math.sin(l)*(.17-r*.07)),h.rotation.y=-l,h.rotateZ(.55-r*.3),t.add(h)}}const s=new z(new gt(.04,8,6),Hh.flame);s.position.y=.2,s.scale.y=1.7,t.add(s);const o=new z(new gt(.6,8,6),new xe({visible:!1}));return o.position.y=.2,t.add(o),t.userData.hit=o,t.scale.setScalar(1.8),t}class ME{group=new it;items=new Map;set(t){for(const e of this.items.values())this.group.remove(e.mesh);this.items.clear();for(const e of t)this.add(e)}add(t){if(this.items.has(t.id))return;const e=_E(t.color);e.userData.hit.userData.lantern=t.id,this.group.add(e),this.items.set(t.id,{info:t,mesh:e,seed:(t.id*9301+49297)%233280/233280})}setLikes(t,e){const n=this.items.get(t);n&&(n.info.likes=e)}get(t){return this.items.get(t)?.info}all(){return[...this.items.values()].map(t=>t.info)}hitTargets(){return[...this.items.values()].map(t=>t.mesh.userData.hit)}update(t){const e=rt.lake,n=Date.now();for(const s of this.items.values()){const o=(n-s.info.at)/1e3,r=s.seed*Math.PI*2+o*.004+t*.01,a=.35+.5*((Math.sin(s.seed*40+o*.002)+1)/2);s.mesh.position.set(e.x+Math.cos(r)*e.rx*a*.92,e.water+.03+Math.sin(t*1.3+s.seed*10)*.02,e.z+Math.sin(r)*e.rz*a*.92),s.mesh.rotation.y=r*.5}}static launchPoint(t){const e=rt.lake,n=new _(t.x-e.x,0,t.z-e.z).normalize();return new _(e.x+n.x*e.rx*.8,e.water,e.z+n.z*e.rz*.8)}}const wE={vang:["Cầu cho bố mẹ luôn mạnh khỏe","Mong cả nhà bình an, ấm êm","Mong công việc thuận lợi, lòng nhẹ nhàng"],hong:["Mong sớm gặp người hiểu mình","Cầu cho chúng mình bên nhau thật lâu","Mong người ấy cũng nghĩ về mình"]};class SE{el=document.createElement("div");constructor(t){this.el.className="sheet lantern",t.appendChild(this.el)}openWrite(t){let e="vang";const n=()=>{this.el.innerHTML=`
        <button class="sheet-close" aria-label="Đóng">×</button>
        <div class="sheet-title">Thả hoa đăng</div>
        <div class="choice">
          <button data-c="vang" class="${e==="vang"?"on":""}"><span class="dot vang"></span>Cầu an</button>
          <button data-c="hong" class="${e==="hong"?"on":""}"><span class="dot hong"></span>Cầu duyên</button>
        </div>
        <textarea maxlength="80" rows="3" placeholder="Viết lời nguyện của bạn (tối đa 80 chữ)…"></textarea>
        <div class="chips">${wE[e].map(o=>`<button>${o}</button>`).join("")}</div>
        <button class="primary release">Thả đèn</button>`;const s=this.el.querySelector("textarea");s.addEventListener("keydown",o=>o.stopPropagation()),this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll(".choice button").forEach(o=>o.addEventListener("click",()=>{const r=s.value;e=o.dataset.c,n(),this.el.querySelector("textarea").value=r})),this.el.querySelectorAll(".chips button").forEach(o=>o.addEventListener("click",()=>s.value=o.textContent||"")),this.el.querySelector(".release").addEventListener("click",()=>{const o=s.value.trim();if(!o)return s.focus();this.close(),t(e,o)})};n(),this.el.classList.add("open")}openRead(t,e,n){this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title"><span class="dot ${t.color}"></span>${t.color==="hong"?"Đèn cầu duyên":"Đèn cầu an"}</div>
      <p class="wish"></p>
      <p class="sheet-sub">Thả bởi <b></b> · ${t.likes} người tùy hỷ</p>
      ${e?'<p class="sheet-sub">Đây là đèn của bạn.</p>':'<button class="primary like">Tùy hỷ</button>'}`,this.el.querySelector(".wish").textContent=`“${t.text}”`,this.el.querySelector(".sheet-sub b").textContent=t.name,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector(".like")?.addEventListener("click",()=>{n(),this.close();try{zn.on&&zn.bell&&zn.bell(.35);At.toast(`A Di Đà Phật! Bạn vừa tùy hỷ công đức lời nguyện của ${t.name} 🙏`,4500)}catch(e){}}),this.el.classList.add("open")}close(){this.el.classList.remove("open")}}const _PRAYERS=[
  "Nguyện mười phương pháp giới chúng sinh: Kẻ khổ được vui, người mê biết giác, bệnh tật tiêu trừ, tai qua nạn khỏi, thân tâm thường an lạc, phước huệ trang nghiêm.",
  "Nguyện đem công đức này, hướng về khắp tất cả, đệ tử và chúng sinh, đều trọn thành Phật đạo.",
  "Nguyện ngày an lành, đêm an lành, đêm ngày sáu thời thường an lành, tất cả các thời đều an lành, xin nguyện từ bi gia hộ độ.",
  "Nguyện muôn loài dứt sạch oan khiên, mở rộng lòng từ bi hỷ xả, xa lìa sân hận oán thù, cùng sống hòa hợp và an vui.",
  "Nguyện người đau ốm mau lành bệnh, người già yếu được phụng dưỡng, trẻ thơ được chở che, người lầm lỡ sớm quay về nẻo thiện.",
  "Nguyện ánh từ quang của chư Phật soi rọi muôn nơi, xua tan bóng tối vô minh, mang an lành hạnh phúc đến cho muôn loài chúng sinh."
];let _pIdx=0;const _r={title:"Cầu nguyện cho chúng sinh"};class TE{el=document.createElement("div");constructor(t){this.el.className="sheet donate";t.appendChild(this.el);const st=ev=>ev.stopPropagation();this.el.addEventListener("pointerdown",st);this.el.addEventListener("mousedown",st);this.el.addEventListener("touchstart",st,{passive:!0})}open(t,e="menu"){const curP=_PRAYERS[_pIdx%_PRAYERS.length];this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Cầu Nguyện Cho Chúng Sinh</div>
      <p class="sheet-sub">Tâm thành hướng thiện, nguyện muôn loài chúng sinh khắp mười phương thân tâm an lạc, tiêu trừ khổ nạn, vạn sự bình yên.</p>
      <div class="prayer-box">
        <div class="prayer-card">
          <div class="prayer-lotus">🪷</div>
          <div class="prayer-verse">“${curP}”</div>
          <div class="prayer-author">— Lời nguyện cầu đại bi —</div>
        </div>
        <div class="prayer-writer">
          <div class="prayer-writer-label"><span>✍️</span> Ghi lời cầu nguyện của bạn:</div>
          <textarea class="prayer-input" rows="3" placeholder="Ghi một câu cầu nguyện thành tâm gửi tới chúng sinh..."></textarea>
          <div class="prayer-tags">
            <button type="button" class="prayer-tag" data-p="Nguyện cầu quốc thái dân an, thế giới hòa bình, nhân dân ấm no hạnh phúc.">🕊️ Quốc thái dân an</button>
            <button type="button" class="prayer-tag" data-p="Nguyện cầu cha mẹ, người thân thân tâm an lạc, tai qua nạn khỏi, sức khỏe dồi dào.">🌿 Cầu an gia đình</button>
            <button type="button" class="prayer-tag" data-p="Nguyện mười phương chúng sinh dứt trừ khổ ách, bệnh tật tiêu trừ, tâm thường thanh tịnh.">🪷 Chúng sinh an lạc</button>
            <button type="button" class="prayer-tag" data-p="Nguyện mọi người luôn gặp duyên lành, trí tuệ sáng suốt, vạn sự hanh thông như ý.">💫 Vạn sự cát tường</button>
          </div>
          <div class="prayer-actions">
            <button type="button" class="prayer-submit"><span>🙏</span> Dâng lời cầu nguyện</button>
            <button type="button" class="prayer-refresh" title="Đổi câu kinh nguyện khác"><span>📜</span> Đổi câu</button>
          </div>
        </div>
      </div>
      <p class="sheet-sub warn" style="color:#ffd98a;opacity:0.9;margin-top:4px;">“Một niệm từ bi khởi lên, muôn dặm an lành che chở.”</p>`;const _cb=this.el.querySelector(".sheet-close");if(_cb){const _f=ev=>{ev.preventDefault();ev.stopPropagation();this.close()};_cb.onclick=_f;_cb.ontouchend=_f}const verseEl=this.el.querySelector(".prayer-verse"),inputEl=this.el.querySelector(".prayer-input"),refreshBtn=this.el.querySelector(".prayer-refresh"),submitBtn=this.el.querySelector(".prayer-submit");refreshBtn.addEventListener("click",()=>{_pIdx=(_pIdx+1)%_PRAYERS.length,verseEl.textContent=`“${_PRAYERS[_pIdx]}”`});this.el.querySelectorAll(".prayer-tag").forEach(tag=>{tag.addEventListener("click",()=>{inputEl.value=tag.getAttribute("data-p")||"",inputEl.focus()})});submitBtn.addEventListener("click",()=>{const text=inputEl.value.trim()||_PRAYERS[_pIdx%_PRAYERS.length];try{typeof Et!=="undefined"&&Et?.send&&Et.send({t:"chat",text:`🙏 Nguyện cầu: ${text}`}),typeof zn!=="undefined"&&zn?.bell&&zn.bell(.35),typeof At!=="undefined"&&At?.toast&&At.toast("Lời nguyện cầu cho chúng sinh của bạn đã được dâng lên Tam Bảo 🙏",4500)}catch(err){}submitBtn.innerHTML=`<span>✓</span> Đã dâng lời nguyện cầu`,submitBtn.disabled=!0,setTimeout(()=>this.close(),1200)});this.el.classList.add("open");const _bd=document.getElementById("modal-backdrop");if(_bd){_bd.classList.add("show");_bd.onclick=()=>this.close()}}close(){this.el.classList.remove("open");const _bd=document.getElementById("modal-backdrop");_bd&&_bd.classList.remove("show")}}const Dc=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),Uc={x:0,z:7.5},ss=1.3,yi=1.05,os=.82,ti=.26;function Vh(i){const t=document.createElement("canvas");t.width=512,t.height=432;const e=t.getContext("2d"),n=e.createRadialGradient(256,200,40,256,216,320);n.addColorStop(0,"#b3261e"),n.addColorStop(1,"#6e120d"),e.fillStyle=n,e.fillRect(0,0,512,432),e.strokeStyle="#e8c06a",e.lineWidth=10,e.strokeRect(20,20,472,392),e.lineWidth=3,e.strokeRect(40,40,432,352),e.fillStyle="#e8c06a";for(const[o,r]of[[40,40],[472,40],[40,392],[472,392]])e.beginPath(),e.arc(o,r,12,0,Math.PI*2),e.fill();i&&(e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.45)",e.shadowBlur=6,e.fillStyle="#ffd98a",e.font='700 150px "Noto Serif SC", "Songti SC", "SimSun", serif',e.fillText("祈愿",256,175),e.font="600 36px Lora, Georgia, serif",e.fillText("CẦU NGUYỆN CHÚNG SINH",256,330));const s=new Ve(t);return s.colorSpace=de,s.anisotropy=4,s}function EE(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,214,120,0.35)"),e.addColorStop(.55,"rgba(255,220,140,0.3)"),e.addColorStop(.75,"rgba(255,226,150,1)"),e.addColorStop(.86,"rgba(255,210,120,0.45)"),e.addColorStop(1,"rgba(255,200,110,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Ve(i);return n.colorSpace=de,n}function Hm(){const i=document.createElement("canvas");i.width=640,i.height=128;const t=i.getContext("2d");t.fillStyle="rgba(110,18,13,0.88)",t.beginPath(),t.roundRect(8,14,624,100,50),t.fill(),t.strokeStyle="#e8c06a",t.lineWidth=4,t.stroke(),t.fillStyle="#ffd98a",t.textAlign="center",t.textBaseline="middle",t.font='600 42px "Be Vietnam Pro", system-ui, sans-serif',t.fillText("Cầu nguyện chúng sinh · chạm để phát tâm",320,66);const e=new Ve(i);return e.colorSpace=de,e}class AE{group=new it;hit;ring;glow;trim;front;sign;flashUntil=0;constructor(){const t=rt.terrace.y,e=this.group;e.position.set(Uc.x,t,Uc.z);const n=(l,h,u,d,f)=>{const p=new z(l,h);return p.position.set(u,d,f),p.castShadow=!0,e.add(p),p};n(new Wt(ss+.5,.1,os+.45),k.whiteStone(),0,.05,0),n(new Wt(ss+.22,ti-.1,os+.2),k.whiteStone(),0,.1+(ti-.1)/2,0),this.front=new mt({map:Vh(!0),roughness:.4,emissive:"#ffcf70",emissiveMap:null,emissiveIntensity:0});const s=new mt({map:Vh(!1),roughness:.45}),o=k.lacquer(),r=[o,o,o,o,this.front,s];n(new Wt(ss,yi,os),r,0,ti+yi/2,0),this.trim=k.gold().clone(),this.trim.emissive=new Dt("#ffb84a"),this.trim.emissiveIntensity=.12;const a=l=>n(new Wt(ss+.05,.06,os+.05),this.trim,0,l,0);a(ti+.03),a(ti+yi-.03);for(const l of[-1,1])for(const h of[-1,1])n(new Wt(.06,yi,.06),this.trim,l*ss/2,ti+yi/2,h*os/2);const c=ti+yi+.04;n(new Wt(ss+.14,.08,os+.14),o,0,c,0),n(new Wt(ss+.16,.025,os+.16),this.trim,0,c-.045,0),n(new Wt(.55,.02,.08),new mt({color:"#160807",roughness:.9}),0,c+.045,0);for(const l of[-1,1])n(new gt(.05,12,8),this.trim,l*.46,c+.07,0);this.ring=new z(new We(3.4,3.4).rotateX(-Math.PI/2),new xe({map:EE(),color:"#fff0c4",transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.5})),this.ring.position.y=.02,e.add(this.ring),this.glow=new Ud("#ffcf70",0,5,2),this.glow.position.set(0,ti+yi+.6,.6),e.add(this.glow),this.sign=new _l(new ka({map:Hm(),transparent:!0,depthWrite:!1,toneMapped:!1})),this.sign.scale.set(2.6,.52,1),this.sign.position.y=ti+yi+.75,e.add(this.sign),this.hit=new z(new Wt(ss+.6,yi+ti+.9,os+.6),new xe({visible:!1})),this.hit.position.y=(yi+ti+.9)/2,e.add(this.hit),Ee(Uc.x,Uc.z,ss+.4,os+.4),document.fonts?.ready.then(()=>{this.front.map?.dispose(),this.front.map=Vh(!0),this.front.needsUpdate=!0,this.sign.material.map=Hm(),this.sign.material.needsUpdate=!0})}flash(){this.flashUntil=performance.now()+1600}update(t){const e=Math.max(0,this.flashUntil-performance.now())/1600,n=.5+.5*Math.sin(t*2.2),s=this.ring.material;s.opacity=.35+.25*n+.4*e,this.ring.scale.setScalar(1+.05*n+.35*e),this.trim.emissiveIntensity=.12+.1*n+.9*e,this.front.emissiveIntensity=.25*e,this.glow.intensity=6*e,this.sign.position.y=ti+yi+.75+.04*Math.sin(t*1.6)}}const $n=3.2,rs=3.2,Pi=.34,Li=.5,un=1024,Is=1024,$h=18,CE=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`);function Vg(i,t,e){const n=i.createRadialGradient(t/2,e*.45,40,t/2,e/2,Math.max(t,e)*.75);n.addColorStop(0,"#5f6a64"),n.addColorStop(1,"#353d39"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=7;const o=()=>(s=s*16807%2147483647)/2147483647;for(let r=0;r<t*e/160;r++)i.fillStyle=o()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.07)",i.fillRect(o()*t,o()*e,1+o()*2,1+o()*2)}function Oc(i,t,e,n,s,o="#f0c96a"){i.font=s,i.fillStyle="rgba(0,0,0,0.55)",i.fillText(t,e+2,n+3),i.fillStyle=o,i.fillText(t,e,n)}function Gm(i,t,e,n,s){for(const[o,r]of i.entries())r.font=s,r.shadowColor="rgba(255, 186, 40, 1)",r.shadowBlur=o===0?24:30,r.fillStyle=o===0?"#ffc93a":"#ffb21e",r.fillText(t,e,n),r.shadowBlur=0,r.fillStyle=o===0?"#ffdd66":"#ffc94a",r.fillText(t,e,n)}function Vm(i){const t=()=>{const l=document.createElement("canvas");l.width=un,l.height=Is;const h=l.getContext("2d");return h.textAlign="center",h.textBaseline="middle",{c:l,g:h}},e=t(),n=t(),s=e.g;Vg(s,un,Is),n.g.fillStyle="#000",n.g.fillRect(0,0,un,Is),s.strokeStyle="rgba(0,0,0,0.45)",s.lineWidth=16,s.strokeRect(34,34,un-68,Is-68),s.strokeStyle="#d4a94e",s.lineWidth=6,s.strokeRect(46,46,un-92,Is-92),s.lineWidth=2,s.strokeRect(66,66,un-132,Is-132),Gm([s,n.g],"BẢNG VÀNG CÔNG ĐỨC",un/2,140,"700 82px Lora, Georgia, serif"),Oc(s,"Thập phương thiện tín · Tùy hỷ công đức",un/2,214,"italic 500 38px Lora, Georgia, serif","#e9dcb4"),s.strokeStyle="#d4a94e",s.lineWidth=3,s.beginPath(),s.moveTo(120,268),s.lineTo(un/2-60,268),s.moveTo(un/2+60,268),s.lineTo(un-120,268),s.stroke(),s.fillStyle="#e8c068";for(const[l,h]of[[-22,.5],[22,-.5],[0,0]])s.beginPath(),s.ellipse(un/2+l,262,14,28,h,0,Math.PI*2),s.fill();const o=[...i].reverse().slice(0,$h),r=320,a=Is-130;if(!o.length)Oc(s,"Kính mời thập phương thiện tín",un/2,520,"500 48px Lora, Georgia, serif","#efe4c4"),Oc(s,"cùng ghi danh công đức",un/2,590,"500 48px Lora, Georgia, serif","#efe4c4");else{const l=v=>`700 ${v}px "Be Vietnam Pro", system-ui, sans-serif`;s.font=l(100);const h=Math.max(...o.map(v=>s.measureText(v.name).width))/100,u=v=>{const m=Math.ceil(o.length/v),g=Math.min(118,(a-r)/m);return{cols:v,step:g,size:Math.max(18,Math.floor(Math.min(g*.62,70,un*(v===1?.82:.42)/h)))}},d=u(1),f=u(2),p=o.length>1&&f.size>d.size?f:d;o.forEach((v,m)=>{const g=p.cols===2?un*(m%2===0?.285:.715):un/2,x=r+p.step*(Math.floor(m/p.cols)+.5);Gm([s,n.g],v.name,g,x,l(p.size))})}Oc(s,i.length>$h?`… và ${i.length-$h} thiện tín khác · chạm để xem đủ`:"Chạm để xem đầy đủ",un/2,Is-104,"italic 500 32px Lora, Georgia, serif","#d9cba3");const c=l=>{const h=new Ve(l);return h.colorSpace=de,h.anisotropy=8,h};return{map:c(e.c),glow:c(n.c)}}function RE(){const i=document.createElement("canvas");i.width=640,i.height=260;const t=i.getContext("2d");Vg(t,640,260),t.strokeStyle="#c9a24e",t.lineWidth=4,t.beginPath(),t.arc(320,280,270,Math.PI,0),t.stroke();const e=t.createRadialGradient(320,150,4,320,150,46);e.addColorStop(0,"#ffe7a0"),e.addColorStop(1,"#c48a2c"),t.fillStyle=e,t.beginPath(),t.arc(320,150,42,0,Math.PI*2),t.fill(),t.strokeStyle="#e0b85a",t.lineWidth=3;for(let s=0;s<16;s++){const o=s/16*Math.PI*2;t.beginPath(),t.moveTo(320+Math.cos(o)*52,150+Math.sin(o)*52),t.lineTo(320+Math.cos(o)*66,150+Math.sin(o)*66),t.stroke()}t.lineWidth=5;for(const s of[-1,1])for(const[o,r,a]of[[110,175,26],[160,150,20],[205,180,30],[250,200,18]])t.beginPath(),t.arc(320+s*o,r,a,0,Math.PI*1.6),t.stroke();const n=new Ve(i);return n.colorSpace=de,n}function PE(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,214,120,0.3)"),e.addColorStop(.6,"rgba(255,220,140,0.25)"),e.addColorStop(.78,"rgba(255,226,150,0.9)"),e.addColorStop(1,"rgba(255,200,110,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Ve(i);return n.colorSpace=de,n}function $m(){const i=document.createElement("canvas");i.width=640,i.height=128;const t=i.getContext("2d");t.fillStyle="rgba(60,48,30,0.88)",t.beginPath(),t.roundRect(8,14,624,100,50),t.fill(),t.strokeStyle="#e8c06a",t.lineWidth=4,t.stroke(),t.fillStyle="#ffd98a",t.textAlign="center",t.textBaseline="middle",t.font='600 40px "Be Vietnam Pro", system-ui, sans-serif',t.fillText("Bảng vàng công đức · chạm xem",320,66);const e=new Ve(i);return e.colorSpace=de,e}class LE{group=new it;hit;faceMat;ring;sign;donors=[];constructor(){const t=this.group;t.position.set(er.x,0,er.z);const e=(d,f,p,v,m)=>{const g=new z(d,f);return g.position.set(p,v,m),g.castShadow=!0,g.receiveShadow=!0,t.add(g),g},n=k.blueStone(),s=k.darkStone();e(new Wt($n+.9,.18,Pi+.9),n,0,.09,0),e(new Wt($n+.5,Li-.18,Pi+.5),n,0,.18+(Li-.18)/2,0);const o=new gt(.12,10,6,0,Math.PI*2,0,Math.PI/2);for(let d=0;d<11;d++)e(o,k.gold(),-$n/2-.1+d*($n+.2)/10,Li-.02,Pi/2+.22).scale.set(1,.7,.5);const r=Vm([]);this.faceMat=new mt({map:r.map,emissiveMap:r.glow,emissive:"#ffd27a",emissiveIntensity:1.1,roughness:.75});const a=[s,s,s,s,this.faceMat,s];e(new Wt($n,rs,Pi),a,0,Li+rs/2,0);const c=new ft($n/2,$n/2,Pi,40,1,!1,-Math.PI/2,Math.PI);c.rotateX(Math.PI/2),c.rotateZ(Math.PI);const l=new mt({map:RE(),roughness:.75});e(c,[s,l,s],0,Li+rs,0).scale.set(1,.55,1),e(new Wt($n+.06,.06,Pi+.06),k.gold(),0,Li+rs,0);for(const d of[-1,1])e(new Wt(.06,rs,Pi+.06),k.gold(),d*$n/2,Li+rs/2,0);e(new ft(.2,.15,.22,16),n,0,.29,Pi/2+.6),this.ring=new z(new We(5.2,5.2).rotateX(-Math.PI/2),new xe({map:PE(),color:"#fff0c4",transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.45})),this.ring.position.set(0,.02,.5),t.add(this.ring),this.sign=new _l(new ka({map:$m(),transparent:!0,depthWrite:!1,toneMapped:!1})),this.sign.scale.set(2.6,.52,1),this.sign.position.y=Li+rs+$n*.28+.5,t.add(this.sign);const u=Li+rs+.7;this.hit=new z(new Wt($n+.6,u,Pi+1),new xe({visible:!1})),this.hit.position.set(0,u/2,.2),t.add(this.hit),Ee(er.x,er.z,$n+.9,Pi+.9),document.fonts?.ready.then(()=>this.paint())}get list(){return this.donors}set(t){this.donors=t,this.paint()}paint(){this.faceMat.map?.dispose(),this.faceMat.emissiveMap?.dispose();const t=Vm(this.donors);this.faceMat.map=t.map,this.faceMat.emissiveMap=t.glow,this.faceMat.needsUpdate=!0,this.sign.material.map=$m(),this.sign.material.needsUpdate=!0}update(t){const e=.5+.5*Math.sin(t*2);this.ring.material.opacity=.3+.25*e,this.sign.position.y=Li+rs+$n*.28+.5+.04*Math.sin(t*1.5)}}class IE{constructor(t,e){this.give=e;this.el.className="sheet donors";t.appendChild(this.el);const st=ev=>ev.stopPropagation();this.el.addEventListener("pointerdown",st);this.el.addEventListener("mousedown",st);this.el.addEventListener("touchstart",st,{passive:!0})}el=document.createElement("div");get isOpen(){return this.el.classList.contains("open")}open(t){const e=[...t].reverse().map((n,s)=>`<li><i>${s+1}</i><span>${CE(n.name)}</span></li>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Bảng vàng công đức</div>
      <p class="sheet-sub">Chùa An Bình Tự xin ghi ơn thập phương thiện tín đã phát tâm bồ đề hướng về Tam Bảo. Nguyện hồi hướng công đức này cho quý vị và gia quyến thân tâm thường an lạc, vạn sự cát tường.</p>
      ${e?`<ol class="donor-list">${e}</ol>`:'<p class="sheet-sub">Bảng vàng đang chờ những tấm lòng đầu tiên.</p>'}
      ${this.give?'<button type="button" class="primary" data-give>Phát tâm cầu nguyện cho chúng sinh</button><p class="sheet-sub small">Tâm thành hướng thiện, gieo mầm phúc đức cầu an cho muôn loài.</p>':""}`;const cb=this.el.querySelector(".sheet-close");if(cb){const f=ev=>{ev.preventDefault();ev.stopPropagation();this.close()};cb.onclick=f;cb.ontouchend=f}const gb=this.el.querySelector("[data-give]");if(gb){const f=ev=>{ev.preventDefault();ev.stopPropagation();this.close();this.give?.()};gb.onclick=f;gb.ontouchend=f}this.el.classList.add("open");const bd=document.getElementById("modal-backdrop");if(bd){bd.classList.add("show");bd.onclick=()=>this.close()}}close(){this.el.classList.remove("open");const bd=document.getElementById("modal-backdrop");bd&&bd.classList.remove("show")}}const $g="anduyen.settings";function kE(i){const t={volume:.8,chant:!0,quality:i?"vua":"dep",autoCam:!0,camSpeed:1,names:!0,qualityManual:!1,haptics:!0,ticker:!0,hidePets:!1,music:!0};try{return{...t,...JSON.parse(localStorage.getItem($g)||"{}")}}catch{return t}}function Wg(i){try{localStorage.setItem($g,JSON.stringify(i))}catch{}}const NE=[["tieu","Chú tiểu"],["ni","Tiểu ni"]],Wh={nau:"Nâu",lam:"Lam",xam:"Xám",vang:"Vàng",cam:"Cà sa"},qh={sang:"Sáng",hong:"Hồng hào",dong:"Bánh mật",nau:"Rám nắng"},DE=[["nhe","Nhẹ","Tiết kiệm pin, máy yếu vẫn mượt"],["vua","Vừa","Cân bằng đẹp và mượt"],["dep","Đẹp","Nét nhất, có bóng đổ mềm"]],UE=[["nv","Nhân vật"],["at","Âm thanh"],["ha","Hình ảnh"],["tt","Thông tin"]];class OE{constructor(t,e,n,s,o){this.settings=n,this.mobile=s,this.hooks=o,this.el.className="sheet settings",t.appendChild(this.el),this.el.addEventListener("keydown",r=>r.stopPropagation()),this.saved={...e},this.draft={...e}}el=document.createElement("div");tab="nv";draft;saved;setProfile(t){this.saved={...t},this.draft={...t}}rect(){return this.el.getBoundingClientRect()}get isOpen(){return this.el.classList.contains("open")}open(t="nv"){this.draft={...this.saved},this.tab=t,this.render(),this.el.classList.add("open"),this.hooks.onPreview(t==="nv")}close(){this.isOpen&&(this.el.classList.remove("open"),this.hooks.onPreview(!1),this.commitLook())}commitLook(){const t=this.draft.name.trim().replace(/\s+/g," ");t.length<2?(this.hooks.toast("Tên cần ít nhất 2 chữ, chùa giữ tên cũ"),this.draft.name=this.saved.name):this.draft.name=t,this.draft.bio=(this.draft.bio??"").trim().replace(/\s+/g," ");const e=this.draft,n=this.saved;e.name===n.name&&e.kind===n.kind&&e.robe===n.robe&&e.skin===n.skin&&(e.bio??"")===(n.bio??"")||(this.saved={...e},Ea(this.saved),this.hooks.onLook(this.saved,!0),this.hooks.toast(`Đã lưu · mọi người sẽ thấy bạn là “${this.saved.name}”`))}set(t,e){this.settings[t]=e,Wg(this.settings),this.hooks.onSettings(this.settings)}render(){const t=UE.map(([e,n])=>`<button data-tab="${e}" class="${e===this.tab?"on":""}">${n}</button>`).join("");this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Cài đặt</div>
      <div class="tabs" role="tablist">${t}</div>
      <div class="tab-body">${this.body()}</div>`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll(".tabs button").forEach(e=>e.addEventListener("click",()=>{this.tab=e.dataset.tab,this.render(),this.hooks.onPreview(this.tab==="nv")})),this.wire()}body(){const t=this.settings,e=this.draft;if(this.tab==="nv"){const s=NE.map(([a,c])=>`<button data-kind="${a}" class="${e.kind===a?"on":""}">${c}</button>`).join(""),o=Object.keys(fo).map(a=>`<button class="swatch ${(e.skin??"dong")===a?"on":""}" data-skin="${a}" style="--c:${fo[a][0]}" title="${qh[a]}" aria-label="Da ${qh[a]}"></button>`).join(""),r=Object.keys(qn).map(a=>`<button class="swatch ${e.robe===a?"on":""}" data-robe="${a}" style="--c:${qn[a]}" title="${Wh[a]}" aria-label="Áo ${Wh[a]}"></button>`).join("");return`
        <label class="field-label" for="st-name">Pháp danh / tên hiển thị</label>
        <div class="name-row">
          <input id="st-name" maxlength="24" autocomplete="off" spellcheck="false" value="${Wm(e.name)}">
          <button class="ghost small" data-act="random">Thỉnh tên</button>
        </div>
        <p class="sheet-sub">Đổi tên miễn phí bất cứ lúc nào. Tên thô tục sẽ bị chùa thay bằng tên khác.</p>
        <label class="field-label" for="st-bio">Đôi lời về bạn <span class="pick-name">hiện trên hồ sơ</span></label>
        <textarea id="st-bio" maxlength="80" rows="2" placeholder="Ví dụ: Thích nghe kinh buổi tối, mong gặp bạn cùng tu.">${Wm(e.bio??"")}</textarea>
        <div class="field-label">Hình dáng</div>
        <div class="seg">${s}</div>
        <div class="field-label">Màu da <span class="pick-name">${qh[e.skin??"dong"]}</span></div>
        <div class="swatches">${o}</div>
        <div class="field-label">Màu áo <span class="pick-name">${Wh[e.robe]}</span></div>
        <div class="swatches">${r}</div>
        <button class="primary" data-act="done">Xong</button>`}if(this.tab==="at")return`
        ${as("sound","Âm thanh chùa","Chim, ve, dế, chuông, mõ",this.hooks.soundOn())}
        <label class="field-label" for="st-vol">Âm lượng <span class="pick-name">${Math.round(t.volume*100)}%</span></label>
        <input id="st-vol" type="range" min="0" max="100" value="${Math.round(t.volume*100)}">
        ${"vibrate"in navigator?as("haptics","Rung nhẹ khi bấm","Khi lần hạt, bấm nút lễ, biểu cảm",t.haptics):""}
        ${as("music","Nhạc nền ngoài sân","Mười một bài nhạc Phật pháp, thiền định phát lần lượt, hết lại quay về bài đầu, ở mọi nơi ngoài Chánh điện (khi nhạc phát thì tắt tiếng chim, ve, dế)",t.music)}
        ${as("chant","Tụng kinh thời khoá","Công phu 5:00 sáng, tụng kinh 19:30 tối, và tiếng niệm khe khẽ trong Chánh điện",t.chant)}
        <button class="ghost" data-act="listen">Nghe thử tiếng niệm Phật</button>
        <p class="sheet-sub">Tiếng niệm "Nam mô A Di Đà Phật" theo nhịp mõ, như trong Chánh điện.</p>`;if(this.tab==="ha")return`
        <div class="field-label">Chất lượng hình</div>
        <div class="seg tall">${DE.map(([o,r,a])=>`<button data-q="${o}" class="${t.quality===o?"on":""}"><b>${r}</b><small>${a}</small></button>`).join("")}</div>
        <p class="sheet-sub">${t.qualityManual?"Bạn đã tự chọn.":"Chùa tự giảm khi máy chạy chậm."} Điện thoại nóng máy hoặc giật thì chọn <b>Nhẹ</b>.</p>
        ${document.fullscreenEnabled?as("full","Toàn màn hình","Ẩn thanh địa chỉ để nhìn rộng hơn",!!document.fullscreenElement):""}
        ${as("autoCam","Camera tự theo sau lưng","Khi đi tới, camera từ từ quay ra sau nhân vật",t.autoCam)}
        <label class="field-label" for="st-cam">Tốc độ xoay camera <span class="pick-name">${t.camSpeed.toFixed(1)}×</span></label>
        <input id="st-cam" type="range" min="5" max="18" value="${Math.round(t.camSpeed*10)}">
        ${as("names","Hiện tên người khác","Tắt đi để ngắm cảnh cho thanh tịnh",t.names)}
        ${as("ticker","Dải thông báo đầu màn hình","Chào người mới về chùa, việc lành, giờ lễ, rằm và mùng 1",t.ticker)}
        ${as("hidePets","Ẩn linh thú của người khác","Chỉ thấy linh thú của mình, cho cảnh thêm yên",t.hidePets)}`;const n=this.hooks.today();return`
      <div class="field-label">Hôm nay của bạn</div>
      <div class="stats">
        <div><b>${n.bows}</b><span>lạy</span></div>
        <div><b>${n.incense}</b><span>nén hương</span></div>
        <div><b>${n.beads}</b><span>hạt niệm Phật</span></div>
      </div>
      <div class="field-label">Mời bạn bè vào cùng phòng</div>
      <button class="ghost" data-act="invite">Chép đường dẫn mời</button>
      ${this.installRow()}
      <button class="ghost" data-act="journal">Hồ sơ tu tập & tài khoản</button>
      <button class="ghost" data-act="guide">Xem lại hướng dẫn</button>
      <div class="field-label">Cách đi lại</div>
      <p class="sheet-sub">${this.mobile?"Ngón cái trái kéo để đi, đẩy hết cỡ để chạy · vuốt bên phải để nhìn quanh · chạm vào chỗ ngồi để ngồi.":"<b>W A S D</b> để đi · giữ <b>Shift</b> để chạy · <b>Q E</b> hoặc kéo chuột để xoay · lăn chuột để gần xa · bấm vào chỗ ngồi để ngồi."}</p>
      <p class="sheet-sub">Không cần tài khoản: tên và tiến độ lưu ngay trên máy này.</p>`}wire(){const t=a=>this.el.querySelector(a),e=()=>this.hooks.onLook({...this.draft},!1),n=t("#st-name");n?.addEventListener("input",()=>{this.draft.name=n.value,e()});const s=t("#st-bio");s?.addEventListener("input",()=>this.draft.bio=s.value),n?.addEventListener("keydown",a=>{a.key==="Enter"&&n.blur()}),t('[data-act="random"]')?.addEventListener("click",()=>{this.draft.name=Mg(),n&&(n.value=this.draft.name),e()}),t('[data-act="done"]')?.addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-kind]").forEach(a=>a.addEventListener("click",()=>{this.draft.kind=a.dataset.kind,e(),this.rerender()})),this.el.querySelectorAll("[data-skin]").forEach(a=>a.addEventListener("click",()=>{this.draft.skin=a.dataset.skin,e(),this.rerender()})),this.el.querySelectorAll("[data-robe]").forEach(a=>a.addEventListener("click",()=>{this.draft.robe=a.dataset.robe,e(),this.rerender()})),this.el.querySelectorAll("[data-toggle]").forEach(a=>a.addEventListener("change",()=>{const c=a.dataset.toggle;c==="sound"?this.hooks.setSound(a.checked):c==="full"?this.fullscreen(a.checked):this.set(c,a.checked)}));const o=t("#st-vol");o?.addEventListener("input",()=>{this.set("volume",Number(o.value)/100),o.previousElementSibling.querySelector(".pick-name").textContent=`${o.value}%`,Number(o.value)>0&&!this.hooks.soundOn()&&this.hooks.setSound(!0)});const r=t("#st-cam");r?.addEventListener("input",()=>{this.set("camSpeed",Number(r.value)/10),r.previousElementSibling.querySelector(".pick-name").textContent=`${(Number(r.value)/10).toFixed(1)}×`}),this.el.querySelectorAll("[data-q]").forEach(a=>a.addEventListener("click",()=>{this.settings.qualityManual=!0,this.set("quality",a.dataset.q),this.rerender()})),t('[data-act="listen"]')?.addEventListener("click",()=>{this.hooks.soundOn()||this.hooks.setSound(!0),this.hooks.previewChant()}),t('[data-act="journal"]')?.addEventListener("click",()=>{this.close(),this.hooks.showJournal("me")}),t('[data-act="guide"]')?.addEventListener("click",()=>{this.close(),this.hooks.showGuide()}),t('[data-act="install"]')?.addEventListener("click",async a=>{const c=a.currentTarget,l=!!this.hooks.install&&await this.hooks.install();c.textContent=l?"Đã thêm vào màn hình chính":"Mở menu ⋮ của trình duyệt → Thêm vào màn hình chính"}),t('[data-act="invite"]')?.addEventListener("click",async a=>{const c=a.currentTarget;try{await navigator.clipboard.writeText(location.href),c.textContent="Đã chép · gửi cho bạn bè nhé"}catch{c.textContent="Không chép được, hãy chép thanh địa chỉ"}})}installRow(){if(matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches)return"";const t=/iPhone|iPad|iPod/.test(navigator.userAgent);return this.hooks.install?'<div class="field-label">Mở chùa như một ứng dụng</div><button class="ghost" data-act="install">Thêm chùa vào màn hình chính</button>':t?'<div class="field-label">Mở chùa như một ứng dụng</div><p class="sheet-sub">Bấm nút <b>Chia sẻ</b> của Safari rồi chọn <b>Thêm vào MH chính</b>: lần sau chạm biểu tượng là vào chùa, toàn màn hình.</p>':""}async fullscreen(t){try{t?await document.documentElement.requestFullscreen({navigationUI:"hide"}):document.fullscreenElement&&await document.exitFullscreen()}catch{this.hooks.toast("Trình duyệt này chưa cho toàn màn hình")}}rerender(){const t=this.el.scrollTop;this.render(),this.el.scrollTop=t}}function as(i,t,e,n){return`
    <label class="toggle">
      <span><b>${t}</b><small>${e}</small></span>
      <input type="checkbox" data-toggle="${i}" ${n?"checked":""}>
      <i aria-hidden="true"></i>
    </label>`}const Wm=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),qm=6e3,zE=350,BE=12,FE=1500,HE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 5c2 2.5 2.5 6 0 10-2.5-4-2-7.5 0-10z"/><path d="M12 15c-3-.5-6-3-6.5-6.5 3 0 5.5 2 6.5 6.5zM12 15c3-.5 6-3 6.5-6.5-3 0-5.5 2-6.5 6.5z"/></svg>',GE=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),VE=i=>GE(i).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>"),Rn=i=>`**${i.replace(/\*/g,"")}**`;class $E{constructor(t){this.hud=t,this.el.className="ticker",this.el.setAttribute("role","status"),this.inner.className="ticker-in";const e=document.createElement("i");e.innerHTML=HE,this.inner.appendChild(this.textEl),this.el.append(e,this.inner),t.appendChild(this.el),this.setOn(this.on)}el=document.createElement("div");inner=document.createElement("div");textEl=document.createElement("span");queue=[];busy=!1;joins=[];joinTimer=0;on=!0;push(t,e=!1){if(this.on){if(e){const n=this.queue.findIndex(s=>!s.prio);this.queue.splice(n<0?this.queue.length:n,0,{text:t,prio:e})}else this.queue.push({text:t,prio:e});for(;this.queue.length>BE;){const n=this.queue.findIndex(s=>!s.prio);this.queue.splice(n<0?0:n,1)}this.busy||this.next()}}join(t,e){if(this.on){if(e)return this.push(`Bạn đồng tu ${Rn(t)} vừa về chùa · A Di Đà Phật!`,!0);this.joins.push({name:t}),clearTimeout(this.joinTimer),this.joinTimer=window.setTimeout(()=>this.flushJoins(),FE)}}flushJoins(){const t=this.joins;this.joins=[];const e=this.queue.filter(n=>n.text.startsWith("A Di Đà Phật! Kính chào thí chủ"));if(t.length+e.length>=4)this.queue=this.queue.filter(n=>!e.includes(n)),this.push(`A Di Đà Phật! ${t.length+e.length} thí chủ vừa về chùa An Bình Tự`);else for(const n of t)this.push(`A Di Đà Phật! Kính chào thí chủ ${Rn(n.name)} đã về chùa An Bình Tự`)}setOn(t){this.on=t,document.documentElement.classList.toggle("has-ticker",t),!t&&(this.queue=[],this.joins=[],this.el.classList.remove("show"),this.hud.classList.remove("ticker-on"))}next(){const t=this.queue.shift();if(!t){this.busy=!1,this.el.classList.remove("show"),this.hud.classList.remove("ticker-on");return}this.busy=!0,this.textEl.innerHTML=VE(t.text),this.textEl.style.animation="none",this.el.classList.add("show"),this.hud.classList.add("ticker-on"),requestAnimationFrame(()=>{const e=this.textEl.scrollWidth-this.inner.clientWidth;e>4?(this.textEl.style.setProperty("--from",`${this.inner.clientWidth*.35}px`),this.textEl.style.setProperty("--to",`${-e-12}px`),this.textEl.style.animation=`ticker-run ${qm}ms linear forwards`,this.inner.classList.add("long")):this.inner.classList.remove("long")}),setTimeout(()=>{this.el.classList.remove("show"),setTimeout(()=>this.next(),zE)},qm)}}const WE=[{start:5,name:"Công phu sáng",at:"5:00"},{start:19.5,name:"Tụng kinh tối",at:"19:30"}];function qE(i){const t=new Set,e=s=>s.day===15?`rằm tháng ${s.month}`:s.day===1?`mùng 1 tháng ${s.month}`:null,n=()=>{const s=Oa(),o=rd();for(const l of WE){const h=(l.start-s)*60,u=`${o.day}-${l.start}`;h>0&&h<=5&&!t.has(u)&&(t.add(u),i.push(`Còn ${Math.ceil(h)} phút nữa đến giờ ${l.name} (${l.at}) · mời đại chúng về Chánh điện`,!0))}const r=new URLSearchParams(location.search).get("am"),a=e(r?{day:Number(r),month:10}:o);a&&!t.has("holy")&&(t.add("holy"),i.push(`Hôm nay ${a} âm lịch · chúc đại chúng một ngày an lành`));const c=e(rd(new Date(Date.now()+864e5)));c&&s>=17&&!t.has("mai")&&(t.add("mai"),i.push(`Ngày mai là ${c} âm lịch · mời đại chúng lên chùa lễ Phật`))};setTimeout(n,4e3),setInterval(n,15e3)}const Xh={merit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 5c2 2.5 2.5 6 0 10-2.5-4-2-7.5 0-10z"/><path d="M12 15c-3-.5-6-3-6.5-6.5 3 0 5.5 2 6.5 6.5zM12 15c3-.5 6-3 6.5-6.5-3 0-5.5 2-6.5 6.5z"/><path d="M5 18h14"/></svg>',incense:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21V9M12 21V7M15 21V9"/><path d="M12 5c-1-1.5 1-2 0-3.5M9 7c-1-1.5 1-2 0-3.5M15 7c-1-1.5 1-2 0-3.5"/></svg>',beads:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="4.5" r="2"/><circle cx="17.3" cy="6.7" r="2"/><circle cx="19.5" cy="12" r="2"/><circle cx="17.3" cy="17.3" r="2"/><circle cx="12" cy="19.5" r="2.6"/><circle cx="6.7" cy="17.3" r="2"/><circle cx="4.5" cy="12" r="2"/><circle cx="6.7" cy="6.7" r="2"/></svg>'};class XE{el=document.createElement("div");constructor(t){this.el.className="sheet week",t.appendChild(this.el)}get isOpen(){return this.el.classList.contains("open")}show(t){const e=t.gifts.map((s,o)=>{const r=o+1,a=r===7?Xh.beads:s.includes("hương")?Xh.incense:Xh.merit;return`<div class="week-day ${[r<t.day?"done":"",r===t.day?"today":"",r===7?"rare":""].join(" ")}"><b>Ngày ${r}</b>${a}<span>${s}</span></div>`}).join(""),n=t.day<7?`Mai quay lại để nhận quà ngày ${t.day+1}.`:"Đã tròn một tuần! Mai bắt đầu tuần mới.";this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Quà điểm danh</div>
      <p class="sheet-sub">${t.streak>1?`Bạn lên chùa <b>${t.streak} ngày liên tiếp</b>.`:"Lên chùa mỗi ngày để nhận quà."} Bỏ một ngày thì quay lại ngày 1.</p>
      <div class="week-grid">${e}</div>
      <div class="week-got">Hôm nay nhận: <b>${jE(t.got)}</b></div>
      <p class="sheet-sub">${n}</p>
      <button class="primary">Nhận quà</button>`;for(const s of this.el.querySelectorAll(".sheet-close, .primary"))s.addEventListener("click",()=>this.close());this.el.classList.add("open")}close(){this.el.classList.remove("open")}}const jE=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),YE=["Cầu cho cha mẹ mạnh khỏe, bình an","Nguyện cho mọi người bớt khổ đau","Cầu mong gia đình hòa thuận","Nguyện sống chậm lại, thương người nhiều hơn","Cầu cho người thân đi xa được bình an"],qo=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`);function KE(i){const t=Math.max(0,Math.round((Date.now()-i)/6e4));return t<1?"vừa xong":t<60?`${t} phút trước`:`${Math.floor(t/60)} giờ trước`}class ZE{constructor(t,e){this.h=e,this.el.className="sheet vows",this.el.addEventListener("keydown",n=>n.stopPropagation()),t.appendChild(this.el)}el=document.createElement("div");vows=[];liked=new Set;reported=new Set;vowed=!1;draft="";error="";get isOpen(){return this.el.classList.contains("open")}set(t,e){this.vows=t,this.vowed=e,this.isOpen&&this.render()}add(t){this.vows.some(e=>e.id===t.id)||(this.vows.push(t),this.vows.length>200&&this.vows.shift(),t.pid===this.h.myPid()&&(this.vowed=!0,this.draft="",this.error=""),this.isOpen&&this.render())}likes(t,e){const n=this.vows.find(s=>s.id===t);n&&(n.likes=e),this.isOpen&&this.render()}remove(t){this.vows=this.vows.filter(e=>e.id!==t),this.isOpen&&this.render()}refuse(t){this.error=t,this.isOpen&&this.render()}open(){this.error="",this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open")}render(){const t=this.h.myPid(),e=this.vows.filter(r=>!this.h.muted(r.pid)).slice().reverse().map(r=>{const a=r.pid===t,c=this.liked.has(r.id);return`<div class="vow ${a?"mine":""}">
          <p>“${qo(r.text)}”</p>
          <div class="vow-foot"><span><b>${qo(r.name)}</b> · ${KE(r.at)}</span>
            <span class="vow-acts">
              ${a?`<em>${r.likes?`${r.likes} người tùy hỷ`:"Lời nguyện của bạn"}</em>`:`<button class="vow-like ${c?"on":""}" data-like="${r.id}" ${c?"disabled":""}>Tùy hỷ${r.likes?` · ${r.likes}`:""}</button>`}
              ${a||this.reported.has(r.id)?"":`<button class="vow-report" data-report="${r.id}" aria-label="Báo xấu">Báo</button>`}
            </span></div>
        </div>`}).join(""),n=this.vowed?'<p class="sheet-sub vow-done">Hôm nay bạn đã gửi lời nguyện. Mai quay lại gửi tiếp nhé.</p>':`<form class="vow-form">
          <textarea id="vow-text" maxlength="80" rows="2" placeholder="Lời nguyện của bạn hôm nay…">${qo(this.draft)}</textarea>
          <div class="vow-ideas">${YE.map(r=>`<button type="button" data-idea="${qo(r)}">${qo(r)}</button>`).join("")}</div>
          ${this.error?`<p class="sheet-sub warn">${qo(this.error)}</p>`:""}
          <button class="primary" type="submit">Gửi tới cả chùa (+3 công đức)</button>
        </form>`;this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Lời nguyện chung</div>
      <p class="sheet-sub">Mỗi ngày một lời nguyện, gửi tới cả chùa. Lời nguyện chạy trên dải thông báo và ở lại đây một ngày. Không ghi số tài khoản, số điện thoại hay đường link.</p>
      ${n}
      <div class="vow-list">${e||'<p class="sheet-sub">Chưa có lời nguyện nào hôm nay. Bạn hãy là người đầu tiên.</p>'}</div>`;const s=r=>this.el.querySelector(r);s(".sheet-close").addEventListener("click",()=>this.close());const o=s("#vow-text");o?.addEventListener("input",()=>this.draft=o.value),this.el.querySelectorAll("[data-idea]").forEach(r=>r.addEventListener("click",()=>{o&&(o.value=this.draft=r.dataset.idea,o.focus())})),s("form")?.addEventListener("submit",r=>{r.preventDefault();const a=(o?.value??"").trim();a&&(this.error="",this.h.send({t:"vow",text:a}))}),this.el.querySelectorAll("[data-like]").forEach(r=>r.addEventListener("click",()=>{const a=Number(r.dataset.like);this.liked.add(a),this.h.send({t:"vow-like",id:a}),this.render()})),this.el.querySelectorAll("[data-report]").forEach(r=>r.addEventListener("click",()=>{const a=Number(r.dataset.report);this.reported.add(a),this.h.send({t:"vow-report",id:a}),this.render()}))}}const no=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),Xm=["A","B","C","D"],jh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h14v12H9l-4 4z"/><path d="M10 8.2a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.5"/><circle cx="12" cy="13.6" r=".5" fill="currentColor"/></svg>',Yh=i=>{const t=Math.max(0,Math.ceil(i/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Kh=i=>new Date(i+7*36e5).toISOString().slice(11,16),jm=i=>Math.floor((i+7*36e5)/864e5);class JE{constructor(t,e,n){this.h=n,this.el.className="sheet quiz",t.appendChild(this.el),this.pill.className="pill quiz-pill",this.pill.setAttribute("aria-label","Đố vui Phật pháp"),this.pill.onclick=()=>{if(this.isOpen)return this.close();this.h.beforeOpen(),this.open()},e.appendChild(this.pill),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.pull()}),setInterval(()=>this.tick(),1e3)}el=document.createElement("div");pill=document.createElement("button");v=null;got=0;pullTimer=0;tickTimer=0;picked=null;told=new Set;mode="live";prac=[];pi=0;pPick=null;pRight=0;get isOpen(){return this.el.classList.contains("open")}get live(){const t=this.phase();return t==="wait"||t==="ask"||t==="show"}pull(){clearTimeout(this.pullTimer),this.h.send({t:"quiz"})}open(){this.mode="live",this.el.classList.add("open"),this.render(),this.pull(),clearInterval(this.tickTimer),this.tickTimer=window.setInterval(()=>this.countdown(),250)}close(){this.el.classList.remove("open"),clearInterval(this.tickTimer)}set(t){const e=this.v;this.v=t,this.got=Date.now(),this.picked&&(this.picked.i!==t.i||t.phase!=="ask")&&(this.picked=null),this.mode==="practice"&&t.phase==="ask"&&e?.phase==="wait"&&(this.mode="live");const s=!this.isOpen&&(t.phase==="ask"||t.phase==="show")?t.start+t.n*(t.ask+t.show)-t.now:t.left;clearTimeout(this.pullTimer),this.pullTimer=window.setTimeout(()=>this.pull(),Math.max(300,s+150+Math.random()*450)),this.announce(e),this.tick(),this.isOpen&&this.mode==="live"&&this.render()}answered(t,e){this.v&&this.v.i===t&&(this.v.mine=e),this.picked=null,this.isOpen&&this.mode==="live"&&this.render()}practice(t){this.prac=t,this.pi=0,this.pPick=null,this.pRight=0,this.mode="practice",this.isOpen&&this.render()}left(){return this.v?this.v.left-(Date.now()-this.got):0}phase(){const t=this.v;return t?this.left()>0?t.phase:t.phase==="off"?"wait":t.phase==="wait"?"ask":t.phase==="end"?"off":t.phase:null}questionNow(){const t=this.v,e=t.now+(Date.now()-this.got)-t.start;return Math.min(t.n,Math.max(1,Math.floor(e/(t.ask+t.show))+1))}announce(t){const e=this.v,n=Kh(e.upcoming);e.phase==="wait"&&!this.told.has(`wait-${e.upcoming}`)&&(this.told.add(`wait-${e.upcoming}`),this.h.tell(`Còn ${Math.max(1,Math.ceil(e.left/6e4))} phút nữa đến giờ Đố vui Phật pháp (${n}) · bấm “Đố vui” để cùng tham gia`,!0)),e.phase==="ask"&&e.i<3&&!this.isOpen&&!this.told.has(`ask-${e.start}`)&&(t?.phase==="wait"||!t)&&(this.told.add(`ask-${e.start}`),this.h.tell("Đố vui Phật pháp đã bắt đầu · 10 câu hỏi, mời đại chúng cùng tham gia",!0))}tick(){const t=this.phase(),e=this.v;let n="";e&&t==="wait"?n=`Đố vui <b>${Yh(this.left())}</b>`:e&&(t==="ask"||t==="show")?n=`Đố vui <b>câu ${this.questionNow()}/${e.n}</b>`:e&&t==="end"&&e.score&&(n="Đố vui <b>kết quả</b>"),this.pill.style.display=n?"":"none",n&&(this.pill.innerHTML=`${jh}<span>${n}</span>`),this.pill.classList.toggle("on",t==="ask"||t==="show")}countdown(){const t=this.left(),e=this.el.querySelector("[data-left]");e&&(e.textContent=this.v?.phase==="wait"?Yh(t):String(Math.max(0,Math.ceil(t/1e3))));const n=this.el.querySelector(".quiz-bar i");n&&this.v&&(n.style.width=`${Math.max(0,Math.min(100,t/this.v.ask*100))}%`)}render(){if(this.mode==="practice")return this.renderPractice();const t=this.v;let e='<p class="sheet-sub">Đang hỏi chùa…</p>';t&&(e=t.phase==="ask"||t.phase==="show"?this.question(t):t.phase==="wait"?this.lobby(t):this.board(t)),this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">${jh}Đố vui Phật pháp</div>
      ${e}`,this.wire(),this.countdown()}rules(){return'<p class="sheet-sub">Mỗi tối <b>20:00</b>, cả chùa cùng trả lời <b>10 câu</b> về Phật pháp, mỗi câu <b>15 giây</b>. Trả lời đúng và nhanh được nhiều điểm hơn. Mỗi câu đúng <b>+2 công đức</b>; ba người đứng đầu được thêm.</p>'}lobby(t){return`
      <div class="quiz-wait"><span>Bắt đầu sau</span><b data-left>${Yh(t.left)}</b></div>
      ${this.rules()}
      <button class="ghost" data-practice>Ôn bài trong lúc chờ</button>`}question(t){const e=t.q,n=t.phase==="show",s=t.mine??(this.picked?.i===t.i?this.picked.c:null),o=e.opts.map((a,c)=>`<button class="quiz-opt ${n?c===t.right?"right":c===s?"wrong":"dim":c===s?"picked":s!==null?"dim":""}" data-c="${c}" ${n||s!==null?"disabled":""}><i>${Xm[c]}</i><span>${no(a)}</span></button>`).join(""),r=n?`<p class="quiz-why ${s===t.right?"ok":""}"><b>${s===t.right?"Đúng rồi!":s===null?"Hết giờ.":"Chưa đúng."}</b> ${no(t.why??"")}</p>
         <p class="sheet-sub">${t.i+1<t.n?`Câu tiếp theo sau <b data-left>${Math.ceil(t.left/1e3)}</b> giây`:"Sắp có kết quả…"}</p>`:`<div class="quiz-bar"><i></i></div>
         <p class="sheet-sub">${s!==null?"Đã chọn · chờ đáp án":"Còn <b data-left>15</b> giây"}</p>`;return`
      <div class="quiz-head"><span>Câu <b>${t.i+1}</b>/${t.n}</span>${t.score?`<span>${t.score.pts} điểm · đúng ${t.score.right}</span>`:""}</div>
      <p class="quiz-q">${no(e.text)}</p>
      <div class="quiz-opts">${o}</div>
      ${r}`}board(t){const e=this.h.myPid(),n=(t.top??[]).map((a,c)=>`<li class="${a.pid===e?"mine":""}"><i>${c+1}</i><span>${no(a.name)}</span><small>đúng ${a.right}</small><b>${a.pts}</b></li>`).join(""),s=t.phase==="end",o=jm(t.upcoming)===jm(t.now)?`tối nay lúc ${Kh(t.upcoming)}`:`${Kh(t.upcoming)} tối mai`,r=t.score?`<p class="quiz-me">Bạn đứng <b>hạng ${t.rank}</b> · đúng ${t.score.right}/${t.n} câu · ${t.score.pts} điểm${t.score.right?` · +${Math.min(20,t.score.right*2)} công đức`:""}</p>`:"";return`
      ${s?'<p class="sheet-sub">Kết quả tối nay. Tùy hỷ công đức đại chúng!</p>':this.rules()}
      ${r}
      ${n?`<div class="sheet-sub">${s?"":"Kết quả lần gần nhất"}</div><ol class="quiz-board">${n}</ol>`:""}
      <p class="sheet-sub">Lần tới: <b>${o}</b></p>
      <button class="ghost" data-practice>Ôn bài (không tính điểm)</button>`}renderPractice(){const t=this.prac[this.pi],e=this.prac.length>0&&this.pi>=this.prac.length;let n;if(e)n=`
        <div class="quiz-wait"><span>Ôn bài xong</span><b>${this.pRight}/${this.prac.length}</b></div>
        <p class="sheet-sub">${this.pRight===this.prac.length?"Tuyệt vời! Hẹn bạn lúc 20:00 nhé.":"Mỗi lần ôn là một lần hiểu thêm. Hẹn bạn lúc 20:00 nhé."}</p>
        <button class="primary" data-practice>Ôn tiếp 5 câu</button>`;else if(!t)n='<p class="sheet-sub">Đang lấy câu hỏi…</p>';else{const s=this.pPick,o=t.opts.map((a,c)=>`<button class="quiz-opt ${s===null?"":c===t.right?"right":c===s?"wrong":"dim"}" data-p="${c}" ${s!==null?"disabled":""}><i>${Xm[c]}</i><span>${no(a)}</span></button>`).join(""),r=this.pi+1>=this.prac.length;n=`
        <div class="quiz-head"><span>Ôn bài · câu <b>${this.pi+1}</b>/${this.prac.length}</span><span>đúng ${this.pRight}</span></div>
        <p class="quiz-q">${no(t.text)}</p>
        <div class="quiz-opts">${o}</div>
        ${s===null?"":`<p class="quiz-why ${s===t.right?"ok":""}"><b>${s===t.right?"Đúng rồi!":"Chưa đúng."}</b> ${no(t.why)}</p><button class="primary" data-next>${r?"Xem kết quả":"Câu tiếp"}</button>`}`}this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">${jh}Đố vui Phật pháp</div>
      ${n}
      <button class="ghost small quiz-back" data-live>Về đố vui tối nay</button>`,this.wire()}wire(){const t=e=>this.el.querySelector(e);t(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-c]").forEach(e=>e.addEventListener("click",()=>{const n=this.v;!n||n.phase!=="ask"||n.mine!=null||this.picked||(this.picked={i:n.i,c:Number(e.dataset.c)},this.h.send({t:"quiz-ans",i:n.i,c:this.picked.c}),this.render())})),this.el.querySelectorAll("[data-practice]").forEach(e=>e.addEventListener("click",()=>{this.mode="practice",this.prac=[],this.pi=0,this.render(),this.h.send({t:"quiz-practice"})})),this.el.querySelectorAll("[data-p]").forEach(e=>e.addEventListener("click",()=>{this.pPick===null&&(this.pPick=Number(e.dataset.p),this.pPick===this.prac[this.pi].right&&this.pRight++,this.render())})),t("[data-next]")?.addEventListener("click",()=>{this.pi++,this.pPick=null,this.render()}),t("[data-live]")?.addEventListener("click",()=>{this.mode="live",this.render(),this.pull()})}}const Zh=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`);class QE{constructor(t,e,n){this.send=e,this.zone=n,this.el.className="sheet feedback",this.el.addEventListener("keydown",s=>s.stopPropagation()),t.appendChild(this.el)}el=document.createElement("div");text="";contact="";error="";sent=!1;sending=!1;get isOpen(){return this.el.classList.contains("open")}open(){this.sent=!1,this.error="",this.render(),this.el.classList.add("open")}close(){this.el.classList.remove("open")}ok(){this.sending=!1,this.sent=!0,this.text="",this.isOpen&&this.render()}refuse(t){this.sending=!1,this.error=t,this.isOpen&&this.render()}render(){this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Góp ý cho chùa</div>
      ${this.sent?`<p class="fb-thanks">A Di Đà Phật! Chùa đã nhận góp ý của bạn. Cảm ơn bạn đã giúp An Bình Tự tốt hơn.</p>
             <button class="ghost" data-act="again">Gửi thêm góp ý</button>`:`<p class="sheet-sub">Bạn thấy chỗ nào chưa hay, muốn chùa có thêm điều gì, hay gặp lỗi? Viết cho chùa nhé. Chỉ người quản trị chùa đọc được.</p>
             <form class="fb-form">
               <textarea id="fb-text" maxlength="600" rows="5" placeholder="Ý kiến của bạn…">${Zh(this.text)}</textarea>
               <label class="field-label" for="fb-contact">Cách liên hệ lại (không bắt buộc)</label>
               <input id="fb-contact" maxlength="80" placeholder="Email, Zalo hoặc Facebook nếu muốn chùa trả lời" value="${Zh(this.contact)}" autocomplete="off">
               ${this.error?`<p class="sheet-sub warn">${Zh(this.error)}</p>`:""}
               <button class="primary" type="submit" ${this.sending?"disabled":""}>${this.sending?"Đang gửi…":"Gửi góp ý"}</button>
             </form>`}`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelector("[data-act=again]")?.addEventListener("click",()=>{this.sent=!1,this.render()});const t=this.el.querySelector("#fb-text"),e=this.el.querySelector("#fb-contact");t?.addEventListener("input",()=>this.text=t.value),e?.addEventListener("input",()=>this.contact=e.value),this.el.querySelector("form")?.addEventListener("submit",n=>{n.preventDefault();const s=(t?.value??"").trim();if(s.length<5)return this.refuse("Góp ý ngắn quá, bạn viết thêm đôi chữ nhé.");this.error="",this.sending=!0,this.render(),this.send({t:"feedback",text:s,contact:(e?.value??"").trim(),zone:this.zone()}),setTimeout(()=>{this.sending&&this.refuse("Chưa gửi được, bạn kiểm tra mạng rồi thử lại nhé.")},8e3)})}}const tA=70;class eA{el=document.createElement("div");span=document.createElement("span");text="";constructor(){this.el.className="marquee",this.el.setAttribute("role","marquee"),this.el.appendChild(this.span),document.body.appendChild(this.el),addEventListener("resize",()=>this.pace())}set(t){if(t=t.trim(),t===this.text||(this.text=t,document.documentElement.classList.toggle("has-marquee",!!t),this.el.classList.toggle("show",!!t),!t))return;this.span.textContent="";const e=document.createElement("b");e.textContent="Thông báo của chùa:",this.span.append(e,document.createTextNode(t)),this.span.style.animation="none",this.span.offsetWidth,this.span.style.animation="",this.pace()}pace(){this.text&&requestAnimationFrame(()=>{const t=this.span.scrollWidth;this.el.style.setProperty("--mq-dur",`${Math.max(12,t/tA)}s`)})}}function nA(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,220,140,0.15)"),e.addColorStop(.5,"rgba(255,220,140,0.25)"),e.addColorStop(.72,"rgba(255,226,150,1)"),e.addColorStop(.82,"rgba(255,210,120,0.55)"),e.addColorStop(1,"rgba(255,200,110,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Ve(i);return n.colorSpace=de,n}class iA{group=new it;rings=new Map;calm;lit;constructor(t){const e=nA(),n=()=>new xe({map:e,color:"#fff0c4",transparent:!0,depthWrite:!1,toneMapped:!1});this.calm=n(),this.lit=n();const s=new We(1.7,1.7).rotateX(-Math.PI/2);for(const o of t){if(!o.id.startsWith("cd-"))continue;const r=new z(s,this.calm);r.position.set(o.position.x,o.position.y-.11,o.position.z),r.renderOrder=2,this.group.add(r),this.rings.set(o,r)}}update(t,e,n,s){if(this.group.visible=e,!!e){this.calm.opacity=.5+Math.sin(t*1.6)*.1,this.lit.opacity=.9+Math.sin(t*6)*.1;for(const[o,r]of this.rings)r.visible=o===n||!s(o),r.material=o===n?this.lit:this.calm,r.scale.setScalar(o===n?1.1:1)}}}const Jh=i=>i.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),Ym={cuc:'<svg viewBox="0 0 48 48" class="flower-icon"><g fill="#f2b632">'+Array.from({length:12},(i,t)=>`<ellipse cx="24" cy="12" rx="3.2" ry="9" transform="rotate(${t*30} 24 24)"/>`).join("")+'</g><circle cx="24" cy="24" r="6" fill="#c9781e"/></svg>',lan:'<svg viewBox="0 0 48 48" class="flower-icon"><g fill="#b27ad9"><ellipse cx="16" cy="20" rx="9" ry="6" transform="rotate(-30 16 20)"/><ellipse cx="32" cy="20" rx="9" ry="6" transform="rotate(30 32 20)"/><ellipse cx="24" cy="12" rx="5" ry="8"/></g><ellipse cx="24" cy="30" rx="7" ry="9" fill="#efe3f7"/><circle cx="24" cy="25" r="3" fill="#f2c94a"/></svg>',sen:'<svg viewBox="0 0 48 48" class="flower-icon"><g fill="#f3a6b8"><path d="M24 8c5 6 5 16 0 22-5-6-5-16 0-22z"/><path d="M24 30c-9-1-14-8-14-15 7 1 12 6 14 15z"/><path d="M24 30c9-1 14-8 14-15-7 1-12 6-14 15z"/></g><path d="M8 34h32" stroke="#4f8a3a" stroke-width="3" stroke-linecap="round"/></svg>'};class sA{constructor(t,e){this.h=e,this.el.className="sheet garden",t.appendChild(this.el)}el=document.createElement("div");view=null;bed=0;owner=null;get isOpen(){return this.el.classList.contains("open")}get flowersInHand(){return Object.values(this.view?.flowers??{}).reduce((t,e)=>t+(e||0),0)}set(t){this.view=t,this.isOpen&&this.bed===0&&(this.owner={pid:"",name:"Luống của bạn",plot:t.mine,friend:!1}),this.isOpen&&this.render()}open(t,e){this.bed=t,this.owner=t===0?{pid:"",name:"Luống của bạn",plot:this.view?.mine??null,friend:!1}:e,this.render(),this.el.classList.add("open")}update(t){this.isOpen&&this.bed!==0&&(this.owner=t,this.render())}close(){this.el.classList.remove("open")}progress(t){const e=Array.from({length:t.need},(s,o)=>`<i class="${o<t.grown?"on":""}"></i>`).join("");return`<div class="grow"><span>${t.stage===3?"Hoa đã nở":t.wilted?"Cây đang héo vì lâu chưa tưới":t.stage===2?"Đang ra nụ":t.stage===1?"Đã nảy mầm":"Vừa gieo hạt"}</span><div class="dots">${e}</div><small>${t.grown}/${t.need} ngày được tưới</small></div>`}render(){const t=this.owner,e=this.bed===0,n=t?.plot??null,s=this.view?.flowers??{},o=gm.filter(a=>s[a]).map(a=>`${s[a]} ${Zo[a].name}`).join(", ");let r="";if(e&&!n)r=`
        <p class="sheet-sub">Luống của bạn đang trống. Chọn một giống hoa để gieo: tưới mỗi ngày, hoa nở thì hái vào Chánh điện dâng Phật.</p>
        <div class="seed-grid">${gm.map(a=>`<button class="seed" data-plant="${a}">${Ym[a]}<b>${Zo[a].name}</b><small>${Zo[a].need} ngày · +${Zo[a].merit} công đức khi dâng</small></button>`).join("")}</div>`;else if(n){const a=n.helper&&e?`<p class="sheet-sub">${Jh(n.helper)} đã tưới giúp lần gần nhất.</p>`:"",c=n.stage===3?e?'<button class="primary" data-act="pick">Hái hoa</button>':'<p class="sheet-sub center">Hoa đã nở, chờ chủ luống hái dâng Phật.</p>':n.watered?'<button class="primary" disabled>Hôm nay đã được tưới</button>':`<button class="primary" data-act="water">${e?"Tưới hoa":"Tưới giúp"}</button>`;r=`
        <div class="bed-head">${Ym[n.k]}<div><b>${Zo[n.k].name}</b><span>${e?"Luống của bạn":`Luống của ${Jh(t.name)}${t.friend?" · bạn đồng tu":""}`}</span></div></div>
        ${this.progress(n)}
        ${a}
        ${n.wilted?'<p class="sheet-sub warn">Tưới lại để cây tươi lại. Bỏ 7 ngày không tưới thì cây chết.</p>':""}
        ${c}
        ${!e&&!n.watered&&n.stage<3?'<p class="sheet-sub center">Tưới giúp: bạn +2 công đức, chủ luống +1 và được báo.</p>':""}`}else r='<p class="sheet-sub">Luống này đang trống.</p>';this.el.innerHTML=`
      <button class="sheet-close" aria-label="Đóng">×</button>
      <div class="sheet-title">Vườn hoa dâng Phật</div>
      ${r}
      ${e?`<div class="in-hand">${o?`Hoa đã hái: <b>${Jh(o)}</b>. Vào Chánh điện bấm “Dâng hoa”. <button class="ghost" data-act="hall">Đến Chánh điện</button>`:"Chưa có hoa đã hái."}</div>`:""}`,this.el.querySelector(".sheet-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-plant]").forEach(a=>a.addEventListener("click",()=>this.h.plant(a.dataset.plant))),this.el.querySelector("[data-act=water]")?.addEventListener("click",()=>{this.close(),this.h.water(this.bed,e?"":t.pid)}),this.el.querySelector("[data-act=pick]")?.addEventListener("click",()=>this.h.pick()),this.el.querySelector("[data-act=hall]")?.addEventListener("click",()=>{this.close(),this.h.toHall()})}}const Qh=20,oA=2.2,Km=["#d9a441","#c9782e","#e2c15a","#a8642a","#b98b3a"].map(i=>new Dt(i));class rA{mesh;leaves=[];m=new Vt;q=new mn;active=!1;constructor(){const t=new We(.34,.18);t.rotateX(-Math.PI/2),this.mesh=new ci(t,new mt({roughness:.9,side:Re}),Qh),this.mesh.frustumCulled=!1,this.mesh.visible=!1;for(let e=0;e<Qh;e++)this.mesh.setColorAt(e,Km[e%Km.length])}start(t){this.leaves=[];for(let s=0;this.leaves.length<Qh&&s<300;s++){const o=Math.random()*Math.PI*2,r=1.2+Math.random()*6.5,a=t.x+Math.cos(o)*r,c=t.z+Math.sin(o)*r,y=Math.max(oi(a,c),(t.y||0))+.03;this.leaves.push({p:new _(a,y,c),rot:Math.random()*6.28,gone:-1,dir:new _})}this.active=!0,this.mesh.visible=!0}stop(){this.active=!1,this.mesh.visible=!1}get swept(){return this.leaves.filter(t=>t.gone>=0).length}get total(){return this.leaves.length}update(t,e){this.active&&(this.leaves.forEach((n,s)=>{n.gone<0&&Math.hypot(n.p.x-e.x,n.p.z-e.z)<oA&&(n.gone=t,n.dir.set(n.p.x-e.x,0,n.p.z-e.z).normalize(),(()=>{try{zn&&zn.bell&&zn.bell(.08)}catch(err){}})());let o=1;const r=n.p.clone();if(n.gone>=0){const a=Math.min(1,(t-n.gone)/.8);r.addScaledVector(n.dir,a*1.6),r.y+=Math.sin(a*Math.PI)*.5,o=1-a}this.q.setFromEuler(new kn(n.gone>=0?(t-n.gone)*9:0,n.rot+(n.gone>=0?(t-n.gone)*6:0),0)),this.m.compose(r,this.q,new _(o,o,o)),this.mesh.setMatrixAt(s,this.m)}),this.mesh.count=this.leaves.length,this.mesh.instanceMatrix.needsUpdate=!0)}}const Zc=[new _(-7.4,rt.hall.y,-21.8),new _(7.4,rt.hall.y,-21.8)],Jr=8,tu=3;function aA(i){const t=Zc[i.x<0?0:1];return new _(t.x,t.y,t.z+1.1)}class cA{group=new it;flames;spots=[];lit=0;m=new Vt;haloGeo=new me;constructor(){const t=k.gold(),e=new ft(.05,.035,.05,8),n=new ci(e,t,Jr*tu*Zc.length);let s=0;for(const h of Zc){for(let d=0;d<tu;d++){const f=.55+d*.22,p=h.z+.3-d*.24,v=new z(new Wt(1.7,.04,.2),t);v.position.set(h.x,h.y+f,p),this.group.add(v);for(let m=0;m<Jr;m++){const g=h.x-.72+m*1.44/(Jr-1);this.m.makeTranslation(g,h.y+f+.045,p),n.setMatrixAt(s++,this.m)}}for(const d of[-.8,.8]){const f=new z(new ft(.025,.035,1,6),t);f.position.set(h.x+d,h.y+.5,h.z),this.group.add(f)}const u=new z(new Wt(1.9,.08,.9),k.lacquer());u.position.set(h.x,h.y+.04,h.z),this.group.add(u),Ee(h.x,h.z,2,1)}this.group.add(n);for(let h=0;h<tu;h++)for(let u=0;u<Jr;u++)for(const d of Zc){const f=[3,4,2,5,1,6,0,7][u],p=d.x-.72+f*1.44/(Jr-1);this.spots.push(new _(p,d.y+.55+h*.22+.1,d.z+.3-h*.24))}const o=new rn(.022,.08,6);o.translate(0,.04,0),this.flames=new ci(o,new xe({color:"#ffa63a",toneMapped:!1}),this.spots.length),this.flames.count=0,this.flames.frustumCulled=!1,this.group.add(this.flames);const r=document.createElement("canvas");r.width=r.height=64;const a=r.getContext("2d"),c=a.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.3,"rgba(255,255,255,0.45)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,64,64),this.haloGeo.setAttribute("position",new Yt(this.spots.flatMap(h=>[h.x,h.y+.05,h.z]),3)),this.haloGeo.setDrawRange(0,0);const l=new _s(this.haloGeo,new $i({size:.32,map:new Ve(r),color:"#ffb35a",transparent:!0,opacity:.8,depthWrite:!1,blending:vo}));l.frustumCulled=!1,this.group.add(l)}get newest(){return this.spots[Math.max(0,this.lit-1)]}set(t){this.lit=Math.max(0,Math.min(this.spots.length,t)),this.flames.count=this.lit,this.haloGeo.setDrawRange(0,this.lit)}update(t){for(let e=0;e<this.lit;e++){const n=.85+Math.sin(t*11+e*1.7)*.1+Math.sin(t*23+e)*.05;this.m.compose(this.spots[e],new mn,new _(1,n,1)),this.flames.setMatrixAt(e,this.m)}this.flames.instanceMatrix.needsUpdate=!0}}const Zm=["#e8542a","#f2f0ea","#f2a23a","#d8352a","#f6d36b"];function Jm(i,t){const e=rt.lake,n=rt.isle,s=rt.bridge,o=(i-e.x)/(e.rx-1.2),r=(t-e.z)/(e.rz-1.2);return o*o+r*r>=1||Math.abs(i-n.x)<=n.half+.8&&Math.abs(t-n.z)<=n.half+.8?!1:!(i>=s.x0-.5&&i<=s.x1+.8&&Math.abs(t-s.z)<=s.half+.6)}function lA(i,t){const e=new _(i.x+Math.sin(t)*3,0,i.z+Math.cos(t)*3);if(Jm(e.x,e.z))return e;const n=rt.lake,s=new _(n.x-i.x,0,n.z-i.z).setLength(3.2).add(new _(i.x,0,i.z));return Jm(s.x,s.z)?s:null}class hA{group=new it;pool=[];rings=[];constructor(){for(let t=0;t<10;t++){const e=new it,n=Zm[t%Zm.length],s=new mt({color:n,roughness:.4,transparent:!0}),o=new mt({color:n,roughness:.5,transparent:!0,side:Re}),r=new z(new gt(.07,10,8),s);r.scale.set(.8,.7,2.4);const a=new z(new rn(.06,.14,4),o);a.rotation.x=-Math.PI/2,a.scale.set(1.4,.25,1),a.position.z=-.2,e.add(r,a),e.visible=!1,this.group.add(e),this.pool.push({mesh:e,mat:[s,o],at:-99,from:new _,to:new _,dir:0})}}release(t,e,n){this.pool.filter(r=>n-r.at>9).slice(0,5).forEach((r,a)=>{const c=a/5*Math.PI*2;r.at=n+a*.12,r.from.copy(t),r.to.set(e.x+Math.cos(c)*.6,rt.lake.water+.02,e.z+Math.sin(c)*.6),r.dir=Math.atan2(r.to.x-t.x,r.to.z-t.z)+(Math.random()-.5)*1.6});const o=new z(new Rr(.2,.23,32),new xe({color:"#dfeef0",transparent:!0,opacity:.45,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.set(e.x,rt.lake.water+.03,e.z),this.group.add(o),this.rings.push({mesh:o,at:n+.55})}update(t){for(const e of this.pool){const n=t-e.at;if(e.mesh.visible=n>=0&&n<9,!e.mesh.visible)continue;const s=.55;if(n<s){const r=n/s;e.mesh.position.lerpVectors(e.from,e.to,r),e.mesh.position.y+=Math.sin(r*Math.PI)*.7,e.mesh.rotation.set(-Math.cos(r*Math.PI)*.9,Math.atan2(e.to.x-e.from.x,e.to.z-e.from.z),0)}else{const r=n-s,a=r*.7,c=e.dir+Math.sin(r*1.3)*.3;e.mesh.position.set(e.to.x+Math.sin(e.dir)*a,rt.lake.water-Math.min(.12,r*.02),e.to.z+Math.cos(e.dir)*a),e.mesh.rotation.set(0,c+Math.sin(r*9)*.25,0)}const o=Math.min(1,Math.max(0,(9-n)/3));for(const r of e.mat)r.opacity=o}this.rings=this.rings.filter(e=>{const n=t-e.at;return n>2?(this.group.remove(e.mesh),!1):(e.mesh.visible=n>=0,e.mesh.scale.setScalar(1+Math.max(0,n)*4),e.mesh.material.opacity=.45*(1-Math.max(0,n)/2),!0)})}}cE();const So=matchMedia("(pointer: coarse)").matches;document.documentElement.classList.toggle("touch",So);const qg=document.getElementById("scene"),Ln=new G0({canvas:qg,antialias:!0,powerPreference:"high-performance"});Ln.setSize(innerWidth,innerHeight);Ln.toneMapping=fd;Ln.toneMappingExposure=1;Ln.shadowMap.enabled=!0;Ln.shadowMap.type=u0;Ln.shadowMap.autoUpdate=!1;let uA=0,Xg=1;const tn=kE(So),qe=new Ad;function Zd(i){Ln.setPixelRatio(Math.min(devicePixelRatio,i==="nhe"?1:i==="vua"?1.5:2)),Ln.setSize(innerWidth,innerHeight),Xg=i==="dep"&&!So?1:i==="dep"?2:3;const t=i!=="nhe";Ln.shadowMap.enabled!==t&&(Ln.shadowMap.enabled=t,qe.traverse(e=>{if(e instanceof z)for(const n of Array.isArray(e.material)?e.material:[e.material])n.needsUpdate=!0}))}Zd(tn.quality);const wn=new Mn(55,innerWidth/innerHeight,.1,1800),Fa=new vS(qe,Ln,So);await Fw();const Ra=AT();qe.add(Ra.root);for(const i of Ra.lights)Fa.addLanternLight(i);for(const i of Ra.lamps.lightSpots)Fa.addLanternLight(i,14);for(const i of Lg)Fa.addWarmLight(i.pos,i.intensity,i.range);const jg=new iA(Di);qe.add(jg.group);const Yg=new fT([new _(0,2.5,33),new _(0,rt.hall.y+2.6,-21.6),new _(50,1.6,-19.5)]);qe.add(Yg.points);const Kg=new pT;qe.add(Kg.group);const cd=new uE;qe.add(cd.group);const Hs=new ME;qe.add(Hs.group);const Pa=mE();Pa?.fullMoon&&Fa.moon.scale.setScalar(1.8);const he=fS(),lt=new Fd(he);qe.add(lt.root);const Zg=rt.spawn.clone();lt.root.position.copy(Zg);lt.root.rotation.y=Math.PI;const hi=new Gw(wn,Gi);hi.snap(Zg);hi.sensitivity=tn.camSpeed;hi.autoFollow=tn.autoCam;Hd.show=tn.names;Gd.on=tn.haptics;const zn=new RT;zn.setVolume(tn.volume);const ld=new LT;let Ze=null;const At=new Qw(document.getElementById("hud"),he.name,i=>{i?(zn.start(),zn.context&&ld.attach(zn.context)):zn.stop()},()=>ui());function Cl(i){const t=Ua[i];At.fade(()=>{ui(),Je=null,fn=null,lt.state="idle",lt.root.position.copy(t.pos),lt.root.rotation.y=t.yaw+Math.PI,hi.yaw=t.yaw,hi.snap(t.pos)})}const ke=document.getElementById("hud"),Ke=new Map,Ha=new lg(ke),ps=new ET(ke);qe.add(ps.group);let Qm=0;const t0=new eA,nn=new $E(ke);nn.setOn(tn.ticker);qE(nn);const Jg=new XE(ke);function Qg(i){if(document.querySelector(".guide.open"))return void setTimeout(()=>Qg(i),1e3);Jg.show(i)}const Rl=new Zw;qe.add(Rl.points);const Jd=new Jw;qe.add(Jd.points);let Vs={quet:!1,den:!1,ca:!1};const bi=new rA;qe.add(bi.mesh);const dl=new cA;qe.add(dl.group);const Qd=new hA;qe.add(Qd.group);const ar=document.createElement("div");ar.className="chore-pill";ke.appendChild(ar);let hd=0;function dA(){if(bi.active)return Jc();ui(),bi.start(lt.root.position),lt.sweep(9999),Et.send({t:"emote",e:"quet"}),hd=performance.now(),ar.dataset.swept="0",ar.innerHTML=`Quét lá bồ đề <b>0/${bi.total}</b> <button type="button" class="chore-stop-btn" aria-label="Dừng quét">×</button>`,ar.classList.add("show");const sb=ar.querySelector(".chore-stop-btn");if(sb){const h=ev=>{ev.preventDefault();ev.stopPropagation();Jc()};sb.onclick=h;sb.ontouchend=h}At.toast("Bắt đầu quét lá bồ đề: đi tới đâu chổi quét tới đó 🙏",3500)}function Jc(){bi.stop(),lt.sweep(0),ar.classList.remove("show")}function fA(i,t){if(!bi.active)return;const e=lt.root.rotation.y;bi.update(i,lt.root.position.clone().add(new _(-Math.sin(e)*.75,0,-Math.cos(e)*.75)));if(ar.dataset.swept!==String(bi.swept)){ar.dataset.swept=String(bi.swept);ar.innerHTML=`Quét lá bồ đề <b>${bi.swept}/${bi.total}</b> <button type="button" class="chore-stop-btn" aria-label="Dừng quét">×</button>`;ar.classList.add("show");const sb=ar.querySelector(".chore-stop-btn");if(sb){const h=ev=>{ev.preventDefault();ev.stopPropagation();Jc()};sb.onclick=h;sb.ontouchend=h}}performance.now()-hd>2e4&&(hd=performance.now(),Et.send({t:"emote",e:"quet"}));bi.swept>=bi.total&&(setTimeout(Jc,900),bi.active=!1,Vs.quet||Et.send({t:"viec",k:"quet"}),At.toast("✨ Sân chùa sạch bong lá bồ đề! Công đức quét lá hôm nay vô lượng 🙏",4500))}function pA(){const i=Oa();if(i<16.5||i>=21.5)return At.toast("Đèn Chánh điện được thắp từ 16:30 đến 21:30. Chiều tối quay lại nhé",4e3);if(Vs.den)return At.toast("Tối nay bạn đã thắp một ngọn đèn rồi");ui(),fn=null,Je=aA(lt.root.position),Sr(Je),Bi=()=>{lt.root.rotation.y=Math.PI,lt.bow(),Et.send({t:"lamp"})}}function tv(i,t){const e=i.root.position,n=lA(e,i.root.rotation.y);return n?(i.toss(),Qd.release(e.clone().setY(e.y+.8),n,xs.elapsedTime),!0):(t&&At.toast("Lại gần mép hồ hơn chút nữa rồi thả cá nhé"),!1)}function mA(i,t){const e=rt.petGarden,n=Fi.clamp(i.x+Math.sin(t)*1.5,e.x0+1,e.x1-1),s=Fi.clamp(i.z+Math.cos(t)*1.5,e.z0+1,e.z1-1);return new _(n,oi(n,s),s)}function ev(i){const t=i.root.position,e=mA(t,i.root.rotation.y);Jd.burst(t.clone().setY(t.y+.75),e,xs.elapsedTime),$s.feedAt(e,xs.elapsedTime)}function nv(){const i=()=>{if(lt.busy)return;ui(),Je=null,lt.toss(),ev(lt),Et.send({t:"emote",e:"gieo"});const t=ai.pet;t&&!t.fedToday&&setTimeout(()=>Et.send({t:"pet-feed"}),400),At.toast(t&&!t.fedToday?`Bạn rắc hạt cho ${t.n} và các linh thú ăn`:"Bạn rắc hạt cho các linh thú trong vườn ăn",3500)};if(Oi(lt.root.position.x,lt.root.position.z)==="Vườn Linh Thú")return i();At.toast("Đang về Vườn Linh Thú…",1500),Cl(Ua.findIndex(t=>t.name==="Vườn Linh Thú")),setTimeout(i,1100)}const $s=new HT(qe,ke);$s.showOthers=!tn.hidePets;const zc=new Map,iv="anduyen.muted",Pn=new Set;try{for(const i of JSON.parse(localStorage.getItem(iv)||"[]"))Pn.add(i)}catch{}function gA(){try{localStorage.setItem(iv,JSON.stringify([...Pn]))}catch{}}const Et=new DT(()=>({name:he.name,kind:he.kind,robe:he.robe,skin:he.skin,bio:he.bio??"",beads:he.beads,cushion:he.cushion,room:new URLSearchParams(location.search).get("phong")}),vA,i=>{if(!i){for(const t of Ke.values())t.dispose(qe);Ke.clear(),At.setCount(0)}});function e0(i){i.id===Et.myId||Ke.has(i.id)||Ke.set(i.id,new Xw(i,qe,ke))}function vA(i){switch(i.t){case"welcome":{i.saved&&(Object.assign(he,i.saved),Ea(he),lt.setLook(he),At.setName(he.name),zi.setProfile(he),At.toast(i.user?`Đã đăng nhập @${i.user} · chào mừng ${he.name} trở lại`:`Chào mừng ${he.name} trở lại`,4500)),NT(),ud.clear();for(const e of i.peers)e0(e);cd.set(i.incense),Hs.set(i.lanterns),Ui.set(i.vows??[],!!i.vowed),dl.set(i.lamps??0),t0.set(i.pinned??""),Mr.set(i.donors??[]),Et.send({t:"garden"}),uo.pull(),i.chores&&(Vs=i.chores),At.setCount(i.total??i.peers.length+1);const t=new URL(location.href);t.searchParams.set("phong",i.room),history.replaceState(null,"",t),sv(!0);break}case"join":e0(i.peer);break;case"look":i.peer.id===Et.myId?i.peer.name!==he.name&&(he.name=i.peer.name,Ea(he),At.setName(he.name)):Ke.get(i.peer.id)?.setLook(i.peer);break;case"leave":Ke.get(i.id)?.dispose(qe),Ke.delete(i.id);break;case"state":Ke.get(i.id)?.setState(i.x,i.y,i.z,i.ry,i.s);break;case"states":for(const[t,e,n,s,o,r]of i.a)t!==Et.myId&&Ke.get(t)?.setState(e,n,s,o,r);break;case"chat":{const isMe=(i.id===Et.myId);const sName=isMe?he.name:(i.name||"Đồng tu");At.addLog(sName,i.text,i.warn);if(isMe){Ha.say(i.text,!1)}else{const t=Ke.get(i.id);if(t&&!Pn.has(t.info.pid)&&t.monk.root.position.distanceTo(lt.root.position)<=45){t.say(i.text,i.warn)}}break}case"emote":{const t=Ke.get(i.id);t?.emote(i.e),t&&i.e==="hoa"&&t.monk.root.position.distanceTo(lt.root.position)<40&&Rl.burst(t.monk.root.position,xs.elapsedTime),t&&i.e==="gieo"&&t.monk.root.position.distanceTo(lt.root.position)<60&&ev(t.monk),t&&i.e==="ca"&&t.monk.root.position.distanceTo(lt.root.position)<60&&tv(t.monk,!1);break}case"greet":At.toast(`${i.name} chắp tay chào bạn`);break;case"notice":At.toast(i.text,4500);break;case"total":At.setCount(i.n);break;case"incense":cd.set(i.n),i.id!==Et.myId&&Oi(lt.root.position.x,lt.root.position.z)==="Chánh điện"&&At.toast(`${i.name} vừa thắp hương`);break;case"bell":zn.on&&zn.bell(.45),i.id===Et.myId?At.toast("Bạn vừa thỉnh chuông"):nn.on?nn.push(`Thí chủ ${Rn(i.name)} vừa thỉnh chuông · tiếng chuông vang khắp chùa`):At.toast(`${i.name} vừa thỉnh chuông`);break;case"lantern":Hs.add(i.lantern),i.lantern.pid===Et.myPid?At.toast("Đèn của bạn đang trôi trên hồ sen"):nn.push(`Thí chủ ${Rn(i.lantern.name)} vừa thả một ngọn hoa đăng trên hồ sen`);break;case"banned":{Et.halt();const t=document.createElement("div");t.className="banned",t.innerHTML="<div><b>Tài khoản này đã bị khoá</b><p>Chùa An Bình Tự tạm không tiếp bạn vì vi phạm nội quy. Nếu có nhầm lẫn, xin liên hệ quản trị chùa.</p></div>",document.body.appendChild(t);break}case"ann":{if(i.k==="admin"){nn.push(`Chùa thông báo: ${i.text}`,!0),nn.on||At.toast(`Chùa thông báo: ${i.text}`,6e3);break}const t=i.pid===Et.myPid,e=wi.pids.has(i.pid);if(i.k==="join")Pn.has(i.pid)||nn.join(i.name,e);else if(i.k==="self")nn.push(i.streak>1?`A Di Đà Phật! Chào mừng thí chủ ${Rn(i.name)} trở lại · ngày thứ ${i.streak} liên tiếp`:i.days>1?`A Di Đà Phật! Chào mừng thí chủ ${Rn(i.name)} trở lại chùa An Bình Tự`:`A Di Đà Phật! Kính chào thí chủ ${Rn(i.name)} lần đầu về chùa An Bình Tự`,!0);else if(i.k==="level")nn.push(t?`Chúc mừng bạn đã lên cấp tu ${Rn(i.level)} · tùy hỷ công đức!`:`Tùy hỷ thí chủ ${Rn(i.name)} vừa lên cấp tu ${i.level}`,t||e);else if(i.k==="pet")nn.push(t?`Bạn đã nhận nuôi ${Rn(i.pet)} · nhớ cho ăn mỗi ngày nhé`:`Tùy hỷ thí chủ ${Rn(i.name)} được nhận nuôi ${i.pet}`,t||e);else if(i.k==="quiz"){const n=i.top.findIndex(s=>s.pid===Et.myPid);nn.push(n>=0?`Chúc mừng bạn đứng hạng ${n+1} Đố vui Phật pháp tối nay · tùy hỷ công đức!`:`Đố vui Phật pháp tối nay: ${i.top.map((s,o)=>`${o+1}. ${Rn(s.name)}`).join(" · ")} · tùy hỷ!`,n>=0||i.top.some(s=>wi.pids.has(s.pid)))}else i.k==="title"&&nn.push(t?`Bạn vừa đạt danh hiệu ${Rn(i.title)}`:`Thí chủ ${Rn(i.name)} vừa đạt danh hiệu “${i.title}”`,t||e);break}case"pet":ai.set(i.p,i.can);break;case"quiz":uo.set(i);break;case"donors":Mr.set(i.list),pl.isOpen&&pl.open(i.list);break;case"quiz-got":uo.answered(i.i,i.c);break;case"quiz-practice":uo.practice(i.qs);break;case"vow":if(Pn.has(i.vow.pid))break;Ui.add(i.vow),i.vow.pid===Et.myPid?nn.push(`Lời nguyện của bạn đã gửi tới cả chùa: “${i.vow.text}”`,!0):nn.push(`Thí chủ ${Rn(i.vow.name)} nguyện: “${i.vow.text}”`,wi.pids.has(i.vow.pid)),!nn.on&&i.vow.pid!==Et.myPid&&At.toast(`${i.vow.name} nguyện: “${i.vow.text}”`,5e3);break;case"garden":{const t={mine:i.mine,flowers:i.flowers,beds:i.beds};ps.set(t,Et.myPid),mo.set(t);break}case"watered":{const t=ps.owners.findIndex(e=>e?.pid===i.pid);t>=0&&i.id!==Et.myId&&ps.water(t,xs.elapsedTime),Oi(lt.root.position.x,lt.root.position.z)==="Vườn hoa"&&Et.send({t:"garden"});break}case"pinned":t0.set(i.text);break;case"feedback-ok":ml.ok();break;case"feedback-err":ml.refuse(i.text);break;case"chores":Vs=i.c;break;case"lamps":dl.set(i.n),i.id===Et.myId?At.toast("Bạn đã thắp một ngọn đèn dâng Phật. Đèn sáng tới sáng mai"):Oi(lt.root.position.x,lt.root.position.z)==="Chánh điện"&&At.toast(`${i.name} vừa thắp một ngọn đèn`);break;case"vow-likes":Ui.likes(i.id,i.n);break;case"vow-gone":Ui.remove(i.id);break;case"vow-tuyhy":At.toast(`${i.name} tùy hỷ lời nguyện “${i.text}” của bạn`,5e3);break;case"vow-err":Ui.refuse(i.text),At.toast(i.text,4e3);break;case"pet-pat":{$s.hearts3(i.id),i.id===Et.myId&&ai.pet&&At.toast(`${i.by} vừa vuốt ve ${ai.pet.n}`,3500);break}case"pet-fed":$s.hearts3(i.id);break;case"checkin":setTimeout(()=>Qg(i),1500);break;case"likes":Hs.setLikes(i.lantern,i.n);break;case"tuyhy":At.toast(`${i.name} tùy hỷ lời nguyện “${i.text}”`,5e3);break;case"xam":Ke.get(i.id)?.say(Fg(i.n),!1);break;case"xam-match":Pl.showMatch(i.names);break;case"merit":ys.update(i.me,i.gain),At.setRank(i.me.lv,i.me.title??""),i.gain&&Os(12);break;case"board":ys.setBoard(i);break;case"journal":Mo.update(i.j);break;case"account-err":Mo.error(i.text);break;case"login-ok":Ng(i.cid);break;case"profile":(Qc===i.p.pid||Qc===i.p.id||fl.pid===i.p.pid)&&fl.show(i.p),Qc=null;break;case"wish":if(Pn.has(i.pid))break;wr.addWords({kind:"wish",name:i.name,text:i.text,at:Date.now()}),At.toast(`${i.name} gửi lời chúc: “${i.text}”`,6e3),At.addLog(i.name,`(gửi riêng bạn) ${i.text}`,i.warn),Os(15);break;case"gift":wr.addWords({kind:"gift",name:i.name,text:"Dâng một nén hương cầu an cho bạn",at:Date.now()}),At.toast(`${i.name} vừa dâng một nén hương cầu an cho bạn`,5e3),Os(15);break;case"friend-req":Pn.has(i.pid)||wi.request(i.name);break;case"friends":wi.setFriends(i.list,i.reqIn);break;case"dm":if(i.from!==Et.myPid&&Pn.has(i.from))break;wi.dm(i),i.from!==Et.myPid&&Os(10);break}}At.onSend=i=>Et.send({t:"chat",text:i});At.onEmote=i=>{Et.send({t:"emote",e:i}),Ha.emote(i),i==="chap"&&lt.bow()};function yA(){const i=ai.pet,t=[{id:Et.myId,pid:Et.myPid,pet:i?{k:i.k,n:i.n}:null,x:lt.root.position.x,z:lt.root.position.z,ry:lt.root.rotation.y,mine:!0}];for(const e of Ke.values()){const n=e.monk.root.position;t.push({id:e.info.id,pid:e.info.pid,pet:e.info.pet??null,x:n.x,z:n.z,ry:e.monk.root.rotation.y,mine:!1})}return t}let n0=0;const Qr={x:0,z:0,ry:0,s:-1};function sv(i=!1){const t=performance.now(),e=lt.root.position,n=Ze?2:lt.state==="walk"?1:0,s=Math.abs(e.x-Qr.x)+Math.abs(e.z-Qr.z)>.05||Math.abs(lt.root.rotation.y-Qr.ry)>.05||n!==Qr.s;!i&&t-n0<(s?100:2e3)||(n0=t,Object.assign(Qr,{x:e.x,z:e.z,ry:lt.root.rotation.y,s:n}),Et.send({t:"state",x:e.x,y:e.y,z:e.z,ry:lt.root.rotation.y,s:n}))}let i0=0;const Mo=new WT(ke,{send:i=>Et.send(i),profile:()=>he,code:()=>Dg(),switchTo:i=>Ng(i),signOut:()=>IT(),editLook:()=>zi.open("nv"),toast:i=>At.toast(i,4e3),pets:()=>{Mo.close(),ai.open(!0)},equip:i=>{Object.assign(he,i),Ea(he),lt.setLook(he),zi.setProfile(he),clearTimeout(i0),i0=window.setTimeout(()=>Et.send({t:"look",name:he.name,kind:he.kind,robe:he.robe,skin:he.skin,bio:he.bio??"",beads:he.beads,cushion:he.cushion}),1200)}});let Qc=null;const fl=new iE(ke,{send:i=>Et.send(i),greet:i=>{Et.send({t:"greet",to:i}),lt.bow(),Ha.emote("chap")},muted:i=>Pn.has(i),mute:(i,t)=>{Pn.has(i)?Pn.delete(i):Pn.add(i),gA(),At.toast(Pn.has(i)?`Đã tắt tiếng ${t}`:`Đã bỏ tắt tiếng ${t}`)},report:i=>Et.send({t:"report",who:i}),zoneOf:i=>{const t=Ke.get(i);return t?Oi(t.monk.root.position.x,t.monk.root.position.z):null},chat:(i,t)=>wi.chat(i,t),editMe:()=>zi.open("nv")});function ov(i){Qc="to"in i?i.to:i.pid,fl.request(i)}function xA(i){ov({to:i.info.id})}const Ns=vE(),ys=new qw(ke,i=>Et.send(i)),wi=new oE(ys.row,ke,()=>Et.myPid,i=>Et.send(i),i=>ov({pid:i}),i=>At.toast(i,4500));let tl=0;setInterval(()=>{tl&&(Et.send({t:"beads",n:tl}),tl=0)},2e3);let s0=0;const rv=new yE(ke,Ns,()=>{tl++,Os(6),zn.on&&zn.bead(),lt.counting(2.5);const i=performance.now();i-s0>3e3&&(s0=i,Et.send({t:"emote",e:"chuoi"}))}),Pl=new YT(ke),Ll=new SE(ke),av=new TE(ke),cr=_r?new AE:null;cr&&qe.add(cr.group);const Mr=new LE;qe.add(Mr.group);const pl=new IE(ke,_r?()=>Il("hom"):null);function Il(i="menu"){_r&&av.open(_r,i)}_r&&At.addDonate(()=>Il());const cv=new gE(zn);let lv=!1;const zi=new OE(ke,he,tn,So,{onLook:(i,t)=>{lt.setLook(i),At.setName(i.name.trim()||he.name),t&&(Object.assign(he,i),Et.send({t:"look",name:i.name,kind:i.kind,robe:i.robe,skin:i.skin,bio:i.bio??"",beads:i.beads,cushion:i.cushion}))},onSettings:i=>{zn.setVolume(i.volume),hi.sensitivity=i.camSpeed,hi.autoFollow=i.autoCam,Hd.show=i.names,Gd.on=i.haptics,nn.setOn(i.ticker),$s.showOthers=!i.hidePets,Zd(i.quality)},onPreview:i=>{lv=i,i||wn.clearViewOffset()},soundOn:()=>!At.muted,setSound:i=>At.setSound(i),today:()=>Ns,toast:i=>At.toast(i,3500),showGuide:()=>dv(),showJournal:i=>Mo.open(i),previewChant:()=>cv.preview(),install:aE()});At.addSettings(()=>zi.isOpen?zi.close():zi.open());function bA(i){const t=zi.rect(),e=innerWidth,n=innerHeight,s=t.left>e*.35,o=s?t.left:e,r=s?n:t.top,a=Fi.clamp(1.15*n/(.6*Math.max(r,120)*1.04),2.4,7),c=lt.root.position,l=lt.root.rotation.y+Math.sin(i*.5)*.6;wn.position.set(c.x+Math.sin(l)*a,c.y+.95,c.z+Math.cos(l)*a),wn.lookAt(c.x,c.y+.55,c.z),wn.setViewOffset(e,n,s?e/2-o/2:0,s?0:n/2-r/2,e,n),wn.updateMatrixWorld()}const _A=new _(-15,0,52);function MA(i,t){const e={id:"hat",label:"Tràng hạt"},n={id:"dongtac",label:"Động tác"},m={id:"gomo",label:"Gõ mõ"},th={id:"thien",label:"Ngồi thiền"};return i==="Chánh điện"?[{id:"lay",label:"Lạy"},{id:"huong",label:"Thắp hương"},m,th,{id:"thapden",label:"Thắp đèn"},...mo.flowersInHand?[{id:"danghoa",label:"Dâng hoa"}]:[],e,n]:i==="Vườn hoa"?[{id:"tuoi",label:"Luống hoa"},th,e,n]:i==="Bảo tháp"?[{id:"lay",label:"Lạy"},m,th,e,n]:(i==="Hồ sen · Cầu Duyên"||i==="Hồ sen Cầu An")?[{id:"den",label:"Thả hoa đăng"},{id:"xam",label:"Xin xăm"},{id:"phongsinh",label:"Phóng sinh"},th,e,n]:t.distanceTo(_A)<8?[{id:"chuong",label:"Thỉnh chuông"},m,th,e,n]:i==="Sân chùa"?[{id:"huong",label:"Thắp hương"},{id:"nguyen",label:"Lời nguyện"},m,th,{id:"quet",label:"Quét lá"},e,n]:i==="Vườn Linh Thú"?[{id:"choan",label:"Cho ăn"},{id:"linhthu",label:"Linh thú"},e,n]:[m,th,e,n]}function wA(i){if(i==="thien"){if(Ze)return At.toast("Bạn đang ngồi rồi");Je=null,fn=null,Bi=null,fv({id:"dat",position:lt.root.position.clone(),facing:lt.root.rotation.y,mesh:lt.root,taken:!1}),At.toast("Ngồi thiền · thở chậm, mỗi phút ngồi tĩnh được thêm công đức",4e3)}else if(i==="hoa"){if(lt.busy)return;lt.toss(),Rl.burst(lt.root.position,xs.elapsedTime),Et.send({t:"emote",e:"hoa"})}else if(i==="cui"){if(lt.busy)return;ui(),lt.deepBow(),Et.send({t:"emote",e:"cui"})}else i==="chuoi"?(rv.open(),lt.counting(2.5)):i==="choan"&&nv()}const hv=new Kw(ke,i=>{Os(),wA(i)});At.onAction=i=>{if(i==="lay"){if(lt.busy)return;lt.lay(),Et.send({t:"emote",e:"lay"}),Ns.bows+=3,ad(Ns),setTimeout(()=>At.toast(`Hôm nay bạn đã lạy ${Ns.bows} lạy`),5600)}else if(i==="huong"){openIncenseModal();}else if(i==="gomo"){if(lt.busy)return;lt.bow();try{zn.muyu?zn.muyu(.6):(zn.on&&zn.bell&&zn.bell(.15))}catch(e){}Ns.muyu=(Ns.muyu||0)+1;ad(Ns);try{Et.send({t:"emote",e:"cui"})}catch(e){}const mantras=["Cốc... Nam Mô A Di Đà Phật 🙏","Cốc... Nam Mô Bổn Sư Thích Ca Mâu Ni Phật 🙏","Cốc... Nam Mô Quán Thế Âm Bồ Tát 🙏","Cốc... Án Ma Ni Bát Mê Hồng 🙏"];const m=mantras[Ns.muyu%mantras.length];At.toast(`${m} (Đã niệm ${Ns.muyu} biến)`,2800)}else if(i==="thien"){wA("thien");try{zn.on&&zn.bell&&zn.bell(.35)}catch(e){}At.toast("Thân tâm buông thư, an trú trong hiện tại... Hít vào tâm tĩnh lặng, thở ra miệng mỉm cười 🙏",6000)}else if(i==="hat")rv.open();else if(i==="den")Ll.openWrite((t,e)=>Et.send({t:"lantern",color:t,text:e}));else if(i==="xam")Pl.open(t=>{wr.addFortune(t),Et.send({t:"xam",n:t}),Ha.say(Fg(t),!1)});else if(i==="chuong")Et.send({t:"bell"});else if(i==="dongtac")hv.toggle();else if(i==="choan")nv();else if(i==="tuoi")mo.isOpen?mo.close():mo.open(0,null);else if(i==="danghoa")ui(),fn=null,Je=Bm.clone(),Sr(Je),Bi=()=>{lt.root.rotation.y=Math.PI,lt.bow(),Et.send({t:"offer-flowers"})};else if(i==="quet")dA();else if(i==="thapden")pA();else if(i==="phongsinh"){if(lt.busy||!tv(lt,!0))return;Et.send({t:"emote",e:"ca"}),Vs.ca||Et.send({t:"viec",k:"ca"}),At.toast(Vs.ca?"Cá bơi đi thong thả. A Di Đà Phật!":"Bạn thả cá về hồ sen. Phóng sinh hôm nay đã ghi nhận",4e3)}else i==="nguyen"?Ui.isOpen?Ui.close():Ui.open():i==="linhthu"&&(ai.isOpen?ai.close():ai.open())};const uv=new XT(ke,()=>({x:lt.root.position.x,z:lt.root.position.z,ry:lt.root.rotation.y}),()=>{const i=wi.pids;return[...Ke.values()].map(t=>({x:t.monk.root.position.x,z:t.monk.root.position.z,friend:i.has(t.info.pid),name:t.info.name}))},i=>Cl(i),()=>Oi(lt.root.position.x,lt.root.position.z)),Ui=new ZE(ke,{send:i=>Et.send(i),myPid:()=>Et.myPid,muted:i=>Pn.has(i)}),uo=new JE(ke,ys.row,{send:i=>Et.send(i),myPid:()=>Et.myPid,tell:(i,t)=>nn.on?nn.push(i,t):At.toast(i,5e3),beforeOpen:()=>gl()}),ml=new QE(ke,i=>Et.send(i),()=>Oi(lt.root.position.x,lt.root.position.z)),mo=new sA(ke,{water:(i,t)=>{ui(),fn=null,Je=MT(i),Sr(Je),Bi=()=>{const e=xi[i];lt.root.rotation.y=Math.atan2(e.x-lt.root.position.x,e.z-lt.root.position.z),lt.bow(),ps.water(i,xs.elapsedTime),Et.send({t:"water",pid:t})}},plant:i=>Et.send({t:"plant",k:i}),pick:()=>Et.send({t:"pick"}),toHall:()=>Cl(Ua.findIndex(i=>i.name==="Chánh điện"))}),ai=new GT(ke,{send:i=>Et.send(i),inGarden:()=>Oi(lt.root.position.x,lt.root.position.z)==="Vườn Linh Thú",toGarden:()=>Cl(Ua.findIndex(i=>i.name==="Vườn Linh Thú"))}),wr=new KT(ke,{myLanterns:()=>Hs.all().filter(i=>i.pid===Et.myPid),today:()=>Ns,giftsLeft:()=>ys.gifts,readFortune:i=>Pl.reread(i),readLantern:i=>Ll.openRead(i,!0,()=>{})});function gl(){for(const i of[ys,wi,Mo,uv,wr,zi,fl,Pl,Ll,av,Jg,hv,ai,Ui,uo,ml,mo,pl])i.close()}const SA=new JT(ke,["nhiemvu","tuido","bando","xephang","congdong","loinguyen","dovui","linhthu","hoso",..._r?["gopgao"]:[],"gopy","caidat"],i=>{gl(),i==="nhiemvu"?ys.open("nv"):i==="tuido"?wr.open():i==="bando"?uv.open():i==="xephang"?ys.open("xh"):i==="congdong"?wi.open():i==="hoso"?Mo.open("me"):i==="linhthu"?ai.open():i==="loinguyen"?Ui.open():i==="dovui"?uo.open():i==="gopy"?ml.open():i==="gopgao"?Il():i==="gomo"?At.onAction("gomo"):i==="phongsinh"?At.onAction("phongsinh"):i==="caidat"&&zi.open()});setInterval(()=>SA.setBadges({nhiemvu:ys.ready,congdong:wi.waiting,tuido:wr.unread,dovui:uo.live?1:0}),1e3);Pa&&!tn.ticker&&setTimeout(()=>At.toast(Pa.label,5e3),1500);const TA=new eE(ke,So);function dv(){TA.open(mS)}pS()||setTimeout(dv,900);let Je=null,fn=null,el=!1,Bi=null;const go=new z(new Rr(.22,.3,32),new xe({color:"#ffe2a8",transparent:!0,opacity:0,depthWrite:!1}));go.rotation.x=-Math.PI/2;qe.add(go);const Ii=new ig,vl=new z(new ft(.4,.4,1.2,8),new xe({visible:!1}));vl.position.y=.6;lt.root.add(vl);const o0=So?40:80;let r0=0;function EA(i){if(Ke.size<=o0){for(const e of Ke.values())e.shown=!0;return}[...Ke.values()].sort((e,n)=>e.monk.root.position.distanceToSquared(i)-n.monk.root.position.distanceToSquared(i)).forEach((e,n)=>e.shown=n<o0)}function nl(i){if(i===Ze)return!0;for(const t of Ke.values()){const e=t.monk.root.position;if(t.state===2&&Math.hypot(e.x-i.position.x,e.z-i.position.z)<.45)return!0}return!1}function a0(i){Ze&&ui(),fn=i,el=!1,Bi=null,Je=i.position.clone(),Sr(Je)}function AA(i,t){const e=new Q(i/innerWidth*2-1,-(t/innerHeight)*2+1);Ii.setFromCamera(e,wn);const n=Ii.intersectObjects(Bn,!1)[0],s=n?n.distance+.5:1/0;for(const d of Ii.intersectObjects(Di.map(f=>f.mesh),!1)){if(d.distance>s)break;const f=Di.find(p=>p.mesh===d.object);if(f&&f!==Ze&&!nl(f))return a0(f)}if(n){const d=n.point;if(Math.hypot(d.x,d.z-33)<4||(Math.abs(d.x)<3&&Math.abs(d.z+21.6)<3.5))return gl(),openIncenseModal();let f=null,p=1.2;for(const v of Di){if(!v.id.startsWith("cd-")||v===Ze||Math.abs(v.position.y-d.y)>.6)continue;const m=Math.hypot(v.position.x-d.x,v.position.z-d.z);m<p&&!nl(v)&&(f=v,p=m)}if(f)return a0(f)}const _cHit=Ii.intersectObjects(censerTargets,!1)[0];if(_cHit&&_cHit.distance<s)return gl(),openIncenseModal();const o=cr?Ii.intersectObject(cr.hit,!1)[0]:void 0;if(o&&o.distance<s)return cr.flash(),gl(),Il("hom");const r=Ii.intersectObject(Mr.hit,!1)[0];if(r&&r.distance<s)return gl(),pl.open(Mr.list);const a=Ii.intersectObjects([...Ke.values()].filter(d=>d.shown).map(d=>d.hit).concat(vl),!1)[0],c=Ii.intersectObjects($s.hitTargets(),!1)[0];if(c&&(!a||c.distance<a.distance)){const d=c.object.userData.petRes;if(d){const m=-(Al.indexOf(d)+1),g=performance.now();return g-(zc.get(m)||0)<15e3?At.toast(`${jn[d].name} đang lim dim vì sướng, lát nữa vuốt tiếp nhé`):(zc.set(m,g),Et.send({t:"pet-pat",res:d}),At.toast(`Bạn vuốt ve ${jn[d].name} của chùa`))}const f=c.object.userData.petOwner;if(f===Et.myId)return ai.open();const p=$s.nameOf(f),v=performance.now();if(v-(zc.get(f)||0)<15e3)return At.toast(`${p?.name??"Linh thú"} đang lim dim vì sướng, lát nữa vuốt tiếp nhé`);zc.set(f,v),Et.send({t:"pet-pat",to:f}),p&&At.toast(`Bạn vuốt ve ${p.name} (${jn[p.kind].name})`);return}if(a?.object===vl)return Mo.open("me");if(a){const d=Ke.get(a.object.userData.peer);if(d)return xA(d)}At.hideCard();const l=ps.group.visible?Ii.intersectObjects(ps.hits,!1)[0]:void 0;if(l){const d=l.object.userData.bed;return mo.open(d,ps.owners[d])}const h=Ii.intersectObjects(Hs.hitTargets(),!1)[0];if(h){const d=Hs.get(h.object.userData.lantern);if(d)return Ll.openRead(d,d.pid===Et.myPid,()=>Et.send({t:"tuyhy",lantern:d.id}))}const u=Ii.intersectObjects(Di.map(d=>d.mesh),!1)[0];if(u&&u.distance<s){const d=Di.find(f=>f.mesh===u.object);if(d&&d!==Ze&&nl(d))return At.toast("Chỗ này đã có người ngồi, bạn chọn chỗ khác nhé");if(d===Ze)return}n&&(Ze&&ui(),fn=null,Bi=null,Je=n.point.clone(),Sr(Je))}function Sr(i){go.position.set(i.x,oi(i.x,i.z)+.04,i.z),go.material.opacity=.9,go.scale.setScalar(1)}function fv(i){Ze=i,i.taken=!0,lt.state="sit",lt.root.position.copy(i.position),lt.root.rotation.y=i.facing,hi.yaw=i.facing+Math.PI,At.setSitting(!0),window.sutraSystem&&window.sutraSystem.onSitDown()}function ui(){if(!Ze)return;Ze.taken=!1;const i=new _(Math.sin(Ze.facing),0,Math.cos(Ze.facing)).multiplyScalar(Ze.id==="dat"?0:-.6),t=Ze.position.clone().add(i);lt.root.position.set(t.x,oi(t.x,t.z),t.z),Ze=null,lt.state="idle",At.setSitting(!1),window.sutraSystem&&window.sutraSystem.onStandUp()}document.addEventListener("pointerdown",ev=>{if(ev.target.closest(".action-bar,.action-bar button,.chat-bar,.chat-bar input,.chat-bar button,.sheet,.guide,#sutra-selection-modal,.chat-log,.chore-pill,#modal-backdrop,.icon-btn,.top-right"))ev.stopPropagation();},!0);document.addEventListener("touchstart",ev=>{if(ev.target.closest(".action-bar,.action-bar button,.chat-bar,.chat-bar input,.chat-bar button,.sheet,.guide,#sutra-selection-modal,.chat-log,.chore-pill,#modal-backdrop,.icon-btn,.top-right"))ev.stopPropagation();},{passive:!0,capture:!0});const c0=new Vw(qg,hi,AA);function pv(){wn.aspect=innerWidth/innerHeight;const i=wn.aspect<.8;wn.fov=i?62:55,hi.distScale=i?.78:1,wn.updateProjectionMatrix(),Ln.setSize(innerWidth,innerHeight)}pv();addEventListener("resize",pv);(()=>{if(!document.getElementById("modal-backdrop")){const bd=document.createElement("div");bd.id="modal-backdrop";document.body.appendChild(bd);bd.onclick=()=>{document.querySelectorAll(".sheet.open,.guide.open").forEach(s=>s.classList.remove("open"));bd.classList.remove("show")};}})();const xs=new U2,ud=new Set,eu=4.6;let Xo=0,l0=!0;const ta=new _,cs={time:0,frames:0,steps:0};function CA(i,t){if(tn.qualityManual||cs.steps>=2||t<3||document.hidden||tn.quality==="nhe"||(cs.time+=i,cs.frames++,cs.time<4))return;const e=cs.time/cs.frames*1e3;cs.time=cs.frames=0,!(e<34)&&(cs.steps++,tn.quality=tn.quality==="dep"?"vua":"nhe",Wg(tn),Zd(tn.quality),At.toast("Máy hơi chậm nên chùa giảm chất lượng hình cho mượt (đổi lại trong Cài đặt)",4500))}function mv(){const i=Math.min(xs.getDelta(),.05),t=xs.elapsedTime;CA(i,t);const e=lt.root.position;c0.turnCamera(i);const n=c0.move();n&&(Ze&&ui(),Je=e.clone().addScaledVector(n.dir,1.8),fn=null);const s=n?n.speed:1;let o=0;if(Je&&!Ze){const d=e.clone(),f=fn?.15:.12,p=new _(Je.x-e.x,0,Je.z-e.z);if(p.length()<=f)fn&&fv(fn),Bi?.(),Bi=null,Je=null,fn=null,Ze||(lt.state="idle");else{const v=fn&&(p.length()<.9||el)?e.clone().add(p.clone().setLength(Math.min(p.length(),eu*s*i))):yg(e,Je,eu*s*i);e.x=v.x,e.z=v.z;const m=Math.hypot(e.x-d.x,e.z-d.z);o=m/i,lt.state="walk";let x=Math.atan2(p.x,p.z)-lt.root.rotation.y;x=Math.atan2(Math.sin(x),Math.cos(x)),lt.root.rotation.y+=x*Math.min(1,i*18),Xo=m<eu*s*i*.2?Xo+i:0,Xo>.4&&fn&&!el&&fn.id.startsWith("cd-")&&Oi(e.x,e.z)==="Chánh điện"?(el=!0,Xo=0):Xo>.4&&(Je=null,fn=null,Bi=null,lt.state="idle",Xo=0)}}Ze||(e.y+=(oi(e.x,e.z)-e.y)*Math.min(1,i*22)),lt.update(i,t,o);const r=Oi(e.x,e.z);jg.update(t,r==="Chánh điện",fn,nl),ud.has(r)||(ud.add(r),Et.send({t:"visit",zone:r})),hi.follow(i,lt.root.rotation.y,n?.dir??null),hi.update(i,e,r==="Chánh điện"),lv&&bA(t),At.setChatMode(r==="Chánh điện"||r==="Bảo tháp"?"quiet":"chat"),At.setActions(MA(r,e));const a=pE();At.setBanner(a?`${a.name} · mời bạn vào chánh điện`:Pa?Pa.label:null),cv.update(i,tn.chant?a:null,tn.chant&&r==="Chánh điện"),Hs.update(t),Rl.update(t),Jd.update(t),ps.update(t,wn,e),r==="Vườn hoa"&&performance.now()-Qm>2e4&&(Qm=performance.now(),Et.send({t:"garden"})),dl.update(t),cr?.update(t),Mr.update(t),Qd.update(t),fA(t,r),$s.update(i,t,e,wn,yA()),sv(),t-r0>.5&&(r0=t,EA(e));for(const d of Ke.values())d.update(i,t,wn,e,Pn.has(d.info.pid));const c=Fa.update(e);iS(t),cS(t),Yg.update(t),Kg.update(t,c.night<.5),hS(Ra.fireflies,t,c.night),Ra.lamps.update(c.night),ld.update(i,tn.music&&zn.on,r==="Chánh điện",tn.volume),zn.hushed=ld.playing,zn.setScene(c.night,r==="Chánh điện");const l=go.material;l.opacity>0&&(l.opacity=Math.max(0,l.opacity-i*1.2),go.scale.setScalar(1+(.9-l.opacity)*.6)),ta.copy(e).setY(e.y+(Ze?1.25:1.35)).project(wn);const h=(ta.x*.5+.5)*innerWidth,u=(-ta.y*.5+.5)*innerHeight;At.placeTag(h,u,ta.z<1),Ha.place(h,u,ta.z<1),window.sutraSystem&&window.sutraSystem.placeOverhead(h,u,ta.z<1),Ln.shadowMap.enabled&&uA++%Xg===0&&(Ln.shadowMap.needsUpdate=!0),Ln.render(qe,wn),l0&&(l0=!1,(document.getElementById("loading")?.classList.add("done"),setTimeout(()=>{const el=document.getElementById("loading");if(el)el.style.display="none"},1000))),requestAnimationFrame(mv)}requestAnimationFrame(mv);


// ==================== 8 BỘ KINH PHẬT THƯỜNG TỤNG ====================
const SUTRA_DATA = [
  {
    id: "adida",
    name: "Kinh A Di Đà",
    subtitle: "Cầu an lạc, nhất tâm niệm Phật, vãng sinh Tịnh độ",
    desc: "Giới thiệu cõi Tây phương Cực Lạc của Đức Phật A Di Đà, dạy hành giả nhất tâm bất loạn niệm danh hiệu Phật để tự độ và cầu vãng sinh thanh tịnh an vui.",
    verses: [
      "Nam mô Bổn Sư Thích Ca Mâu Ni Phật.",
      "Từ đây qua phương Tây, cách mười muôn ức cõi Phật, có thế giới tên là Cực Lạc.",
      "Cõi đó có Đức Phật hiệu là A Di Đà, hiện nay đang thuyết pháp.",
      "Chúng sinh trong cõi đó không có các sự khổ, chỉ hưởng những điều vui, nên gọi là Cực Lạc.",
      "Bảy tầng lan can, bảy tầng lưới báu, bảy tầng hàng cây, đều bằng bốn chất báu bao bọc khắp nơi.",
      "Ao bảy báu chứa đầy nước tám công đức, đáy ao trải thuần bằng cát vàng óng ánh.",
      "Hoa sen trong ao lớn như bánh xe, vi diệu hương thơm thanh khiết ngát bay xa muôn phương.",
      "Chấp trì danh hiệu Phật A Di Đà, nhất tâm bất loạn, khi lâm chung tâm không điên đảo.",
      "Tâm định ý hòa, liền được vãng sinh về cõi Cực Lạc thanh tịnh an vui vô lượng.",
      "Nam mô Tây Phương Cực Lạc Thế Giới Đại Từ Đại Bi A Di Đà Phật."
    ]
  },
  {
    id: "phomon",
    name: "Kinh Phổ Môn",
    subtitle: "Quán Thế Âm Bồ Tát cứu khổ cứu nạn",
    desc: "Phẩm Phổ Môn trong Kinh Diệu Pháp Liên Hoa, ngợi ca hạnh nguyện từ bi cứu khổ cứu nạn của Bồ Tát Quán Thế Âm, chúng sinh xưng danh liền được giải thoát.",
    verses: [
      "Nam mô Đại Từ Đại Bi Tầm Thinh Cứu Khổ Cứu Nạn Quán Thế Âm Bồ Tát.",
      "Nếu có vô lượng trăm nghìn muôn ức chúng sinh chịu các khổ não, một lòng xưng niệm Quán Thế Âm.",
      "Bồ Tát tức thời quán sát âm thanh ấy, khiến cho thảy đều được giải thoát tai ách.",
      "Diệu âm, Quán Thế Âm, Phạm âm, Hải triều âm, tiếng vi diệu hơn hết thảy thanh âm thế gian.",
      "Niệm niệm chớ sinh lòng nghi ngại, Quán Âm bậc tịnh thánh, nơi khổ não suy vong hay làm nơi nương tựa.",
      "Đầy đủ tất cả công đức lành, mắt từ bi trông khắp chúng sinh, biển phước lớn lao không ngần mé.",
      "Mây lành từ bi che phủ khắp, rưới mưa pháp cam lồ thanh lương, dập tắt lửa phiền não khổ đau.",
      "Tâm thành đảnh lễ Bồ Tát Quán Thế Âm, tai qua nạn khỏi, vạn sự cát tường an vui.",
      "Nam mô Quán Thế Âm Bồ Tát Ma Ha Tát."
    ]
  },
  {
    id: "duocsu",
    name: "Kinh Dược Sư",
    subtitle: "Tiêu trừ bệnh khổ, giải trừ tai ách, thân tâm khang kiện",
    desc: "Kinh về cõi Lưu Ly và 12 đại nguyện của Đức Phật Dược Sư cứu chữa bệnh tật thân tâm, diệt trừ tai nạn hiểm nghèo, tăng phúc tăng thọ, cơm ăn áo mặc đầy đủ.",
    verses: [
      "Nam mô Dược Sư Lưu Ly Quang Vương Như Lai.",
      "Nguyện đời sau khi ta đắc Bồ-đề, thân như ngọc lưu ly, trong ngoài sáng suốt không tì vết.",
      "Hào quang rực rỡ chiếu soi vô lượng thế giới, khai mở trí tuệ cho muôn loài chúng sinh.",
      "Nguyện chúng sinh thân tâm bệnh khổ, nghe danh hiệu ta, mọi bệnh hoạn thảy đều tiêu trừ.",
      "Thân tướng đoan nghiêm, lục căn thanh tịnh, của cải vật dụng đầy đủ an vui trọn vẹn.",
      "Dược Sư Quán Đảnh Chân Ngôn tiêu diệt vạn tội khiên, dứt trừ tai ương hoạn nạn hiểm nghèo.",
      "Tâm trí sáng trong như ngọc báu, phúc đức tăng trưởng, thọ mạng dài lâu, an khang thịnh vượng.",
      "Nam mô Đông Phương Tịnh Lưu Ly Thế Giới Dược Sư Lưu Ly Quang Như Lai."
    ]
  },
  {
    id: "thuysam",
    name: "Kinh Từ Bi Thủy Sám",
    subtitle: "Sám hối nghiệp chướng, rửa sạch oan khiên thù hận",
    desc: "Nghi thức sám hối vi diệu, dùng dòng nước pháp thanh lương của chư Phật để rửa sạch mọi cấu uế, lỗi lầm và nghiệp chướng trong tâm, khơi mở tâm Bồ-đề.",
    verses: [
      "Chí tâm quy mạng đảnh lễ mười phương chư Phật, chư Đại Bồ Tát.",
      "Dùng dòng nước pháp từ bi thanh tịnh, gột rửa hết mọi trần cấu nghiệp chướng sâu dày.",
      "Bao nhiêu ác nghiệp đã từng tạo tác, từ vô thỉ do tham sân si phát sinh.",
      "Từ thân miệng ý phát sinh ra, hôm nay con thành tâm phát lồ xin sám hối ăn năn.",
      "Cúi xin mười phương chư Phật xót thương gia hộ, giải mở mọi oan khiên thù oán đời đời.",
      "Dứt trừ mầm mống tội lỗi, khơi nguồn thiện căn Bồ-đề thanh tịnh.",
      "Tâm như hoa sen thơm ngát giữa bùn lầy, thân an tâm lạc, vững bước trên đường giác ngộ.",
      "Nam mô Cầu Sám Hối Bồ Tát Ma Ha Tát."
    ]
  },
  {
    id: "diatang",
    name: "Kinh Địa Tạng",
    subtitle: "Đại hiếu cứu khổ, hồi hướng cửu huyền thất tổ",
    desc: "Hạnh nguyện đại hiếu và lời thề nguyện sâu rộng 'Địa ngục chưa trống thề chưa thành Phật' của Bồ Tát Địa Tạng, cứu độ cha mẹ nhiều đời và siêu sinh hương linh.",
    verses: [
      "Nam mô Đại Nguyện Địa Tạng Vương Bồ Tát.",
      "Địa ngục chưa trống thề chưa thành Phật, chúng sinh độ hết mới chứng Bồ-đề.",
      "Thiện nam tín nữ nào nghe danh hiệu Bồ Tát Địa Tạng, chí tâm chiêm lễ ngợi khen cúng dường.",
      "Người đó được trăm ngàn công đức thù thắng, tiêu trừ tội chướng nhiều đời nhiều kiếp.",
      "Nguyện đem công đức tụng kinh này, hồi hướng khắp cho cha mẹ và tổ tiên nhiều đời.",
      "Đều được thoát khỏi nẻo luân hồi khổ đau, vãng sinh về cảnh giới an lành thanh tịnh.",
      "Trời rồng thường xuyên ủng hộ, phúc đức ngày một tăng, gia quyến an khang thịnh vượng.",
      "Nam mô U Minh Giáo Chủ Cứu Khổ Bổn Tôn Địa Tạng Vương Bồ Tát."
    ]
  },
  {
    id: "baoan",
    name: "Kinh Báo Ân Cha Mẹ",
    subtitle: "Tri ân công đức sinh thành dưỡng dục của cha mẹ",
    desc: "Đức Phật dạy về mười ân đức cù lao trời biển của cha mẹ sinh thành dưỡng dục, nhắc nhở người con giữ tròn chữ hiếu, sống có trách nhiệm và đạo nghĩa gia đình.",
    verses: [
      "Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra.",
      "Ơn cha mẹ chín tháng cưu mang nhọc nhằn, sinh nở đau đớn cam chịu không lời thở than.",
      "Nhường khô nằm ướt chăm sóc sớm hôm, bú mớm nuôi nấng dưỡng dục nên người khôn lớn.",
      "Dù vai trái cõng cha, vai phải cõng mẹ, đi quanh núi Tu Di trăm ngàn kiếp cũng chưa đền đáp nổi.",
      "Làm con giữ trọn đạo hiếu thuận, sớm hôm phụng dưỡng, khuyên cha mẹ hướng về đường thiện lành.",
      "Nguyện cha mẹ hiện đời mạnh khỏe bình an, trường thọ vô biên, thân tâm thường hoan hỷ.",
      "Cha mẹ quá vãng thảy đều được siêu sinh Tịnh độ, hưởng phúc lạc an vui vĩnh hằng.",
      "Nam mô Đại Hiếu Mục Kiền Liên Bồ Tát."
    ]
  },
  {
    id: "luonghoangsam",
    name: "Kinh Lương Hoàng Sám",
    subtitle: "Giải tỏa oán kết, dứt trừ khổ ách, siêu sinh cõi lành",
    desc: "Bộ sám pháp lớn tiêu trừ các nghiệp chướng thâm sâu, hóa giải thù hận oan khiên từ nhiều đời nhiều kiếp, mang lại sự bình an và thanh thản cho tâm hồn.",
    verses: [
      "Quy y Phật, quy y Pháp, quy y Tăng, chí thành phát lồ sám hối.",
      "Giải kết giải kết giải oan kết, giải trừ oan khiên nhiều đời nhiều kiếp.",
      "Dứt bỏ oán hờn thù ghét, nuôi dưỡng từ tâm thương xót muôn loài chúng sinh.",
      "Nguyện cùng hết thảy chúng sinh trong sáu nẻo luân hồi, đồng phát tâm Bồ-đề kiên cố.",
      "Ánh từ quang của mười phương chư Phật chiếu soi, xua tan bóng tối vô minh oán thù.",
      "Mở rộng lòng bao dung hỷ xả, xây dựng thế giới an lành, nhân tâm thanh tịnh.",
      "Nam mô Giải Oan Kết Bồ Tát Ma Ha Tát."
    ]
  },
  {
    id: "phaphoa",
    name: "Kinh Diệu Pháp Liên Hoa",
    subtitle: "Vua của các kinh điển Đại thừa, khai mở Phật tính",
    desc: "Khai thị rằng tất cả chúng sinh đều có Phật tính thanh tịnh và khả năng thành Phật. Tượng trưng cho hoa sen tinh khôi vươn lên nở rộ giữa bùn lầy thế gian.",
    verses: [
      "Nam mô Diệu Pháp Liên Hoa Kinh, Nam mô Pháp Hoa Hội Thượng Phật Bồ Tát.",
      "Chư Phật xuất hiện nơi đời vì một đại sự nhân duyên duy nhất: Khai thị chúng sinh ngộ nhập Phật tri kiến.",
      "Tất cả chúng sinh đều vốn sẵn có Phật tính thanh tịnh, đều có khả năng chứng đắc vô thượng Bồ-đề.",
      "Như hoa sen tinh khôi nở giữa đầm lầy, tâm giác ngộ vượt thoát mọi phiền não trần thế.",
      "Thọ trì đọc tụng biên chép giảng nói kinh này, phúc đức vô lượng vô biên không thể nghĩ bàn.",
      "Hòa mình vào ánh sáng trí tuệ chân như, thắp sáng ngọn đèn từ bi dẫn lối muôn người.",
      "Nam mô Thường Tinh Tấn Bồ Tát, Nam mô Pháp Hoa Kinh Chư Đại Bồ Tát Ma Ha Tát."
    ]
  }
];

class SutraManager {
  currentSutra = null;
  currentVerseIdx = 0;
  timer = null;
  isPaused = false;
  sutras = SUTRA_DATA;
  modalOverlay = null;
  playerBar = null;
  overheadEl = null;

  constructor() {
    this.createUI();
  }

  createUI() {
    // 1. Modal Overlay for Sutra Selection
    this.modalOverlay = document.createElement("div");
    this.modalOverlay.className = "sutra-modal-overlay";
    this.modalOverlay.innerHTML = `
      <div class="sutra-modal">
        <div class="sutra-modal-header">
          <button class="sutra-modal-close" id="sutra-modal-close" aria-label="Đóng">✕</button>
          <h2>🪷 Thiền Định Tụng Kinh</h2>
          <p>Lựa chọn một trong 8 bộ kinh Phật linh thiêng để lắng lòng trì tụng, tích lũy công đức</p>
        </div>
        <div class="sutra-modal-body" id="sutra-card-container"></div>
      </div>
    `;
    document.body.appendChild(this.modalOverlay);

    // Render 8 sutra cards
    const container = this.modalOverlay.querySelector("#sutra-card-container");
    this.sutras.forEach(s => {
      const card = document.createElement("div");
      card.className = "sutra-card-item";
      card.innerHTML = `
        <div class="sutra-card-title">📖 ${s.name}</div>
        <div class="sutra-card-sub">${s.subtitle}</div>
        <div class="sutra-card-desc">${s.desc}</div>
        <div class="sutra-card-btn"><span>Trì tụng ▶</span></div>
      `;
      card.onclick = () => this.startSutra(s.id);
      container.appendChild(card);
    });

    const closeBtn = this.modalOverlay.querySelector("#sutra-modal-close");
    closeBtn.onclick = () => this.closeMenu();
    this.modalOverlay.onclick = e => {
      if (e.target === this.modalOverlay) this.closeMenu();
    };

    // 2. Chanting Player Bar (HUD docked above action bar)
    this.playerBar = document.createElement("div");
    this.playerBar.className = "sutra-player-bar";
    this.playerBar.innerHTML = `
      <div class="sutra-player-top">
        <div class="sutra-player-title" id="sutra-bar-title">📖 Kinh A Di Đà</div>
        <div class="sutra-player-progress-text" id="sutra-bar-count">Câu 1 / 10</div>
      </div>
      <div class="sutra-progress-bar">
        <div class="sutra-progress-fill" id="sutra-progress-fill"></div>
      </div>
      <div class="sutra-player-verse" id="sutra-bar-verse">Đang chuẩn bị trì tụng...</div>
      <div class="sutra-player-controls">
        <button class="sutra-ctrl-btn" id="sutra-pause-btn"><span>⏸ Tạm dừng</span></button>
        <button class="sutra-ctrl-btn" id="sutra-next-btn"><span>⏭ Câu tiếp</span></button>
        <button class="sutra-ctrl-btn" id="sutra-stop-btn"><span>⏹ Dừng tụng</span></button>
      </div>
    `;
    document.body.appendChild(this.playerBar);

    document.getElementById("sutra-pause-btn").onclick = () => this.togglePause();
    document.getElementById("sutra-next-btn").onclick = () => this.nextVerse();
    document.getElementById("sutra-stop-btn").onclick = () => this.stopChanting();

    // 3. 3D Overhead Floating Scripture Bubble
    this.overheadEl = document.createElement("div");
    this.overheadEl.className = "sutra-overhead-bubble";
    this.overheadEl.id = "sutra-overhead-bubble";
    this.overheadEl.innerHTML = `
      <div class="sutra-overhead-header">
        <span>🪷</span>
        <span id="sutra-overhead-name">TỤNG KINH</span>
      </div>
      <div class="sutra-overhead-text" id="sutra-overhead-verse">...</div>
    `;
    const hud = document.getElementById("hud") || document.body;
    hud.appendChild(this.overheadEl);
  }

  onSitDown() {
    // When player sits on meditation cushion, prompt sutra selection
    if (!this.currentSutra) {
      setTimeout(() => this.openMenu(), 350);
    }
  }

  onStandUp() {
    this.stopChanting();
    this.closeMenu();
    this.closeComplete();
  }

  openMenu() {
    this.closeComplete();
    this.modalOverlay.classList.add("open");
  }

  closeMenu() {
    this.modalOverlay.classList.remove("open");
  }

  startSutra(sutraId) {
    const s = this.sutras.find(x => x.id === sutraId);
    if (!s) return;
    this.currentSutra = s;
    this.currentVerseIdx = 0;
    this.isPaused = false;
    this.closeMenu();
    this.closeComplete();
    this.playerBar.style.display = "flex";
    document.getElementById("sutra-pause-btn").innerHTML = "<span>⏸ Tạm dừng</span>";
    
    // Initial Bell chime
    try {
      if (typeof zn !== "undefined" && zn?.bell) zn.bell(0.28);
    } catch(e) {}
    
    if (typeof At !== "undefined" && At?.toast) {
      At.toast(`🙏 Bắt đầu trì tụng: ${s.name}`, 4000);
    }

    this.playVerse();
  }

  playVerse() {
    clearTimeout(this.timer);
    if (!this.currentSutra) return;
    const verses = this.currentSutra.verses;
    if (this.currentVerseIdx >= verses.length) {
      this.finishSutra();
      return;
    }

    const verse = verses[this.currentVerseIdx];
    const curNum = this.currentVerseIdx + 1;
    const total = verses.length;

    // Rhythmic temple wooden fish chime
    try {
      if (typeof zn !== "undefined" && zn?.muyu?.hit) {
        zn.muyu.hit();
      } else if (typeof zn !== "undefined" && zn?.bell) {
        zn.bell(0.16);
      }
    } catch(e) {}

    // Update HUD Bar
    document.getElementById("sutra-bar-title").innerHTML = `📖 ${this.currentSutra.name}`;
    document.getElementById("sutra-bar-count").textContent = `Câu ${curNum} / ${total}`;
    document.getElementById("sutra-bar-verse").textContent = verse;
    const pct = Math.round((curNum / total) * 100);
    document.getElementById("sutra-progress-fill").style.width = `${pct}%`;

    // Update 3D Overhead Scripture
    document.getElementById("sutra-overhead-name").textContent = this.currentSutra.name;
    document.getElementById("sutra-overhead-verse").textContent = verse;
    this.overheadEl.style.display = "flex";

    // Sync to chat / multiplayer speech bubble
    try {
      if (typeof Ha !== "undefined" && Ha?.say) {
        Ha.say(`🪷 ${verse}`, !1);
      }
      if (typeof Et !== "undefined" && Et?.send) {
        Et.send({ t: "chat", text: `🪷 [${this.currentSutra.name}]: ${verse}` });
      }
    } catch(e) {}

    // Schedule next verse at serene tempo (~6.8s)
    this.timer = setTimeout(() => {
      if (!this.isPaused) {
        this.currentVerseIdx++;
        this.playVerse();
      }
    }, 6800);
  }

  nextVerse() {
    clearTimeout(this.timer);
    if (this.currentSutra) {
      this.currentVerseIdx++;
      this.playVerse();
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    const btn = document.getElementById("sutra-pause-btn");
    if (this.isPaused) {
      clearTimeout(this.timer);
      btn.innerHTML = "<span>▶ Tiếp tục</span>";
      if (typeof At !== "undefined" && At?.toast) At.toast("Đã tạm dừng tụng kinh", 2500);
    } else {
      btn.innerHTML = "<span>⏸ Tạm dừng</span>";
      this.playVerse();
    }
  }

  stopChanting() {
    clearTimeout(this.timer);
    this.currentSutra = null;
    this.currentVerseIdx = 0;
    this.isPaused = false;
    this.playerBar.style.display = "none";
    this.overheadEl.style.display = "none";
  }

  finishSutra() {
    const finishedSutra = this.currentSutra;
    this.stopChanting();

    // Completion Great Bell
    try {
      if (typeof zn !== "undefined" && zn?.bell) zn.bell(0.5);
    } catch(e) {}

    this.showComplete(finishedSutra);
  }

  showComplete(sutra) {
    this.closeComplete();
    const overlay = document.createElement("div");
    overlay.className = "sutra-modal-overlay open";
    overlay.id = "sutra-complete-overlay";
    overlay.innerHTML = `
      <div class="sutra-modal" style="max-width: 520px;">
        <div class="sutra-complete-card">
          <div class="sutra-complete-icon">🪷</div>
          <div class="sutra-complete-title">CÔNG ĐỨC VÔ LƯỢNG!</div>
          <div class="sutra-complete-desc">
            Bạn đã hoàn thành trì tụng trọn vẹn <b>${sutra.name}</b>.<br><br>
            Nguyện đem công đức thù thắng này hồi hướng khắp mười phương pháp giới chúng sinh, cầu quốc thái dân an, cha mẹ bình an, thân tâm thường lạc, tiêu trừ tai ách khổ nạn.
          </div>
          <div class="sutra-complete-actions">
            <button class="sutra-action-btn primary" id="sutra-btn-next-book">📖 Tụng bài kinh khác</button>
            <button class="sutra-action-btn secondary" id="sutra-btn-repeat">🔁 Tụng lại bài này</button>
            <button class="sutra-action-btn secondary" id="sutra-btn-stand">🚶 Đứng dậy</button>
            <button class="sutra-action-btn secondary" id="sutra-btn-meditate">🧘 Ngồi thiền tiếp</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector("#sutra-btn-next-book").onclick = () => {
      this.closeComplete();
      this.openMenu();
    };
    overlay.querySelector("#sutra-btn-repeat").onclick = () => {
      this.closeComplete();
      this.startSutra(sutra.id);
    };
    overlay.querySelector("#sutra-btn-stand").onclick = () => {
      this.closeComplete();
      if (typeof ui === "function") ui();
    };
    overlay.querySelector("#sutra-btn-meditate").onclick = () => {
      this.closeComplete();
      if (typeof At !== "undefined" && At?.toast) {
        At.toast("Thanh tịnh an trú trong chánh niệm thiền định 🙏", 4000);
      }
    };
  }

  closeComplete() {
    const el = document.getElementById("sutra-complete-overlay");
    if (el) el.remove();
  }

  placeOverhead(x, y, visible) {
    if (!this.overheadEl) return;
    if (!this.currentSutra || !visible) {
      this.overheadEl.style.display = "none";
      return;
    }
    this.overheadEl.style.display = "flex";
    this.overheadEl.style.left = `${x}px`;
    this.overheadEl.style.top = `${y - 28}px`;
  }
}

window.sutraSystem = new SutraManager();
