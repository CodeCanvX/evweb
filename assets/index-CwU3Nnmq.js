(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function vp(){const r=document.createElement("nav");r.className="nav";const e=document.createElement("article");e.className="article-nav";const t=document.createElement("section");t.className="section-left";const n=document.createElement("div");n.className="logo",n.textContent="EVACUATOR.181",t.appendChild(n);const i=document.createElement("section");i.className="section-right";const s=document.createElement("a");return s.className="link",s.href="tel:+00000000000",s.textContent="+0 (000) 000-00-00",i.appendChild(s),e.appendChild(t),e.appendChild(i),r.appendChild(e),r}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="181",Sp=0,Pf=1,Mp=2,md=1,bp=2,zi=3,br=0,Ln=1,Hi=2,Zi=0,Ds=1,Df=2,Lf=3,Uf=4,yp=5,Vr=100,Ep=101,Tp=102,wp=103,Ap=104,Cp=200,Rp=201,Pp=202,Dp=203,hc=204,dc=205,Lp=206,Up=207,Ip=208,Np=209,Fp=210,Op=211,Bp=212,kp=213,zp=214,pc=0,mc=1,_c=2,ks=3,xc=4,gc=5,vc=6,Sc=7,_d=0,Vp=1,Gp=2,gr=0,Hp=1,Wp=2,Xp=3,qp=4,Yp=5,Zp=6,Kp=7,xd=300,zs=301,Vs=302,Mc=303,bc=304,hl=306,yc=1e3,Xi=1001,Ec=1002,jn=1003,jp=1004,eo=1005,li=1006,bl=1007,Hr=1008,Ci=1009,gd=1010,vd=1011,Ia=1012,Wu=1013,Qr=1014,qi=1015,$s=1016,Xu=1017,qu=1018,Na=1020,Sd=35902,Md=35899,bd=1021,yd=1022,xi=1023,Fa=1026,Oa=1027,Ed=1028,Yu=1029,Zu=1030,Ku=1031,ju=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,Tc=35840,wc=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Dc=37496,Lc=37808,Uc=37809,Ic=37810,Nc=37811,Fc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Vc=37817,Gc=37818,Hc=37819,Wc=37820,Xc=37821,qc=36492,Yc=36494,Zc=36495,Kc=36283,jc=36284,$c=36285,Jc=36286,$p=3200,Jp=3201,Td=0,Qp=1,fr="",Wn="srgb",Gs="srgb-linear",$o="linear",St="srgb",ls=7680,If=519,em=512,tm=513,nm=514,wd=515,im=516,rm=517,sm=518,am=519,Nf=35044,Ff="300 es",yi=2e3,Jo=2001;function Ad(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function om(){const r=Qo("canvas");return r.style.display="block",r}const Of={};function Bf(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ke(...r){const e="THREE."+r.shift();console.warn(e,...r)}function kt(...r){const e="THREE."+r.shift();console.error(e,...r)}function Ba(...r){const e=r.join(" ");e in Of||(Of[e]=!0,Ke(...r))}function lm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kf=1234567;const Sa=Math.PI/180,ka=180/Math.PI;function Qs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function $u(r,e){return(r%e+e)%e}function cm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function um(r,e,t){return r!==e?(t-r)/(e-r):0}function Ma(r,e,t){return(1-t)*r+t*e}function fm(r,e,t,n){return Ma(r,e,1-Math.exp(-t*n))}function hm(r,e=1){return e-Math.abs($u(r,e*2)-e)}function dm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function pm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function mm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _m(r,e){return r+Math.random()*(e-r)}function xm(r){return r*(.5-Math.random())}function gm(r){r!==void 0&&(kf=r);let e=kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vm(r){return r*Sa}function Sm(r){return r*ka}function Mm(r){return(r&r-1)===0&&r!==0}function bm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ym(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Em(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*f,c*h,o*l);break;case"YZY":r.set(c*h,o*u,c*f,o*l);break;case"ZXZ":r.set(c*f,c*h,o*u,o*l);break;case"XZX":r.set(o*u,c*x,c*d,o*l);break;case"YXY":r.set(c*d,o*u,c*x,o*l);break;case"ZYZ":r.set(c*x,c*d,o*u,o*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ts(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tm={DEG2RAD:Sa,RAD2DEG:ka,generateUUID:Qs,clamp:ct,euclideanModulo:$u,mapLinear:cm,inverseLerp:um,lerp:Ma,damp:fm,pingpong:hm,smoothstep:dm,smootherstep:pm,randInt:mm,randFloat:_m,randFloatSpread:xm,seededRandom:gm,degToRad:vm,radToDeg:Sm,isPowerOfTwo:Mm,ceilPowerOfTwo:bm,floorPowerOfTwo:ym,setQuaternionFromProperEuler:Em,normalize:gn,denormalize:Ts};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],x=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=x,e[t+3]=_;return}if(f!==_||c!==h||l!==d||u!==x){let m=c*h+l*d+u*x+f*_;m<0&&(h=-h,d=-d,x=-x,_=-_,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),y=Math.sin(E);p=Math.sin(p*E)/y,o=Math.sin(o*E)/y,c=c*p+h*o,l=l*p+d*o,u=u*p+x*o,f=f*p+_*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+x*o,f=f*p+_*o;const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],x=s[a+3];return e[t]=o*x+u*f+c*d-l*h,e[t+1]=c*x+u*h+l*f-o*d,e[t+2]=l*x+u*d+o*h-c*f,e[t+3]=u*x-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(s/2),h=c(n/2),d=c(i/2),x=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*x,this._y=l*d*f-h*u*x,this._z=l*u*x+h*d*f,this._w=l*u*f-h*d*x;break;case"YXZ":this._x=h*u*f+l*d*x,this._y=l*d*f-h*u*x,this._z=l*u*x-h*d*f,this._w=l*u*f+h*d*x;break;case"ZXY":this._x=h*u*f-l*d*x,this._y=l*d*f+h*u*x,this._z=l*u*x+h*d*f,this._w=l*u*f-h*d*x;break;case"ZYX":this._x=h*u*f-l*d*x,this._y=l*d*f+h*u*x,this._z=l*u*x-h*d*f,this._w=l*u*f+h*d*x;break;case"YZX":this._x=h*u*f+l*d*x,this._y=l*d*f+h*u*x,this._z=l*u*x-h*d*f,this._w=l*u*f-h*d*x;break;case"XZY":this._x=h*u*f-l*d*x,this._y=l*d*f-h*u*x,this._z=l*u*x+h*d*f,this._w=l*u*f+h*d*x;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=i+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yl.copy(this).projectOnVector(e),this.sub(yl)}reflect(e){return this.sub(yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yl=new Q,zf=new Ka;class Qe{constructor(e,t,n,i,s,a,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],x=n[8],_=i[0],m=i[3],p=i[6],E=i[1],y=i[4],b=i[7],A=i[2],M=i[5],w=i[8];return s[0]=a*_+o*E+c*A,s[3]=a*m+o*y+c*M,s[6]=a*p+o*b+c*w,s[1]=l*_+u*E+f*A,s[4]=l*m+u*y+f*M,s[7]=l*p+u*b+f*w,s[2]=h*_+d*E+x*A,s[5]=h*m+d*y+x*M,s[8]=h*p+d*b+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,x=t*f+n*h+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new Qe,Vf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){const r={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fr?$o:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Gs]:{primaries:e,whitePoint:n,transfer:$o,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Vf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const ht=wm();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class Am{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=Qo("canvas")),cs.width=e.width,cs.height=e.height;const i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class Ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Tl(i[a].image)):s.push(Tl(i[a]))}else s=Tl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Am.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Rm=0;const wl=new Q;class An extends Js{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=Xi,i=Xi,s=li,a=Hr,o=xi,c=Ci,l=An.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Qs(),this.name="",this.source=new Ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=xd;An.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],x=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(d+1)/2,A=(p+1)/2,M=(u+h)/4,w=(f+_)/4,L=(x+m)/4;return y>b&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=M/n,s=w/n):b>A?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=M/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=L/s),this.set(n,i,s,t),this}let E=Math.sqrt((m-x)*(m-x)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pm extends Js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new An(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ju(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Pm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cd extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),no.subVectors(this.max,ia),us.subVectors(e.a,ia),fs.subVectors(e.b,ia),hs.subVectors(e.c,ia),nr.subVectors(fs,us),ir.subVectors(hs,fs),Cr.subVectors(us,hs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Cr.z,Cr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Cr.z,0,-Cr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Cr.y,Cr.x,0];return!Al(t,us,fs,hs,no)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,us,fs,hs,no))?!1:(io.crossVectors(nr,ir),t=[io.x,io.y,io.z],Al(t,us,fs,hs,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],hi=new Q,to=new ea,us=new Q,fs=new Q,hs=new Q,nr=new Q,ir=new Q,Cr=new Q,ia=new Q,no=new Q,io=new Q,Rr=new Q;function Al(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Rr.fromArray(r,s);const o=i.x*Math.abs(Rr.x)+i.y*Math.abs(Rr.y)+i.z*Math.abs(Rr.z),c=e.dot(Rr),l=t.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Lm=new ea,ra=new Q,Cl=new Q;class dl{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ra,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Cl)),this.expandByPoint(ra.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ui=new Q,Rl=new Q,ro=new Q,rr=new Q,Pl=new Q,so=new Q,Dl=new Q;class Um{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rl.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Rl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ro),o=rr.dot(this.direction),c=-rr.dot(ro),l=rr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,x;if(u>0)if(f=a*c-o,h=a*o-c,x=s*u,f>=0)if(h>=-x)if(h<=x){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Rl).addScaledVector(ro,h),d}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,s){Pl.subVectors(t,e),so.subVectors(n,e),Dl.crossVectors(Pl,so);let a=this.direction.dot(Dl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rr.subVectors(this.origin,e);const c=o*this.direction.dot(so.crossVectors(rr,so));if(c<0)return null;const l=o*this.direction.dot(Pl.cross(rr));if(l<0||c+l>a)return null;const u=-o*rr.dot(Dl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,n,i,s,a,o,c,l,u,f,h,d,x,_,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,f,h,d,x,_,m)}set(e,t,n,i,s,a,o,c,l,u,f,h,d,x,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=x,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,x=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+x*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=x+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,x=l*u,_=l*f;t[0]=h+_*o,t[4]=x*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-x,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,x=l*u,_=l*f;t[0]=h-_*o,t[4]=-a*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,x=o*u,_=o*f;t[0]=c*u,t[4]=x*l-d,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=d*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,x=o*c,_=o*l;t[0]=c*u,t[4]=_-h*f,t[8]=x*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+x,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*c,d=a*l,x=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Nm)}lookAt(e,t,n){const i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),sr.crossVectors(n,zn),sr.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),sr.crossVectors(n,zn)),sr.normalize(),ao.crossVectors(zn,sr),i[0]=sr.x,i[4]=ao.x,i[8]=zn.x,i[1]=sr.y,i[5]=ao.y,i[9]=zn.y,i[2]=sr.z,i[6]=ao.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],x=n[2],_=n[6],m=n[10],p=n[14],E=n[3],y=n[7],b=n[11],A=n[15],M=i[0],w=i[4],L=i[8],S=i[12],v=i[1],D=i[5],I=i[9],k=i[13],V=i[2],Y=i[6],H=i[10],$=i[14],G=i[3],se=i[7],P=i[11],me=i[15];return s[0]=a*M+o*v+c*V+l*G,s[4]=a*w+o*D+c*Y+l*se,s[8]=a*L+o*I+c*H+l*P,s[12]=a*S+o*k+c*$+l*me,s[1]=u*M+f*v+h*V+d*G,s[5]=u*w+f*D+h*Y+d*se,s[9]=u*L+f*I+h*H+d*P,s[13]=u*S+f*k+h*$+d*me,s[2]=x*M+_*v+m*V+p*G,s[6]=x*w+_*D+m*Y+p*se,s[10]=x*L+_*I+m*H+p*P,s[14]=x*S+_*k+m*$+p*me,s[3]=E*M+y*v+b*V+A*G,s[7]=E*w+y*D+b*Y+A*se,s[11]=E*L+y*I+b*H+A*P,s[15]=E*S+y*k+b*$+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],x=e[3],_=e[7],m=e[11],p=e[15];return x*(+s*c*f-i*l*f-s*o*h+n*l*h+i*o*d-n*c*d)+_*(+t*c*d-t*l*h+s*a*h-i*a*d+i*l*u-s*c*u)+m*(+t*l*f-t*o*d-s*a*f+n*a*d+s*o*u-n*l*u)+p*(-i*o*u-t*c*f+t*o*h+i*a*f-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],x=e[12],_=e[13],m=e[14],p=e[15],E=f*m*l-_*h*l+_*c*d-o*m*d-f*c*p+o*h*p,y=x*h*l-u*m*l-x*c*d+a*m*d+u*c*p-a*h*p,b=u*_*l-x*f*l+x*o*d-a*_*d-u*o*p+a*f*p,A=x*f*c-u*_*c-x*o*h+a*_*h+u*o*m-a*f*m,M=t*E+n*y+i*b+s*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=E*w,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*w,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*p+n*c*p)*w,e[3]=(f*c*s-o*h*s-f*i*l+n*h*l+o*i*d-n*c*d)*w,e[4]=y*w,e[5]=(u*m*s-x*h*s+x*i*d-t*m*d-u*i*p+t*h*p)*w,e[6]=(x*c*s-a*m*s-x*i*l+t*m*l+a*i*p-t*c*p)*w,e[7]=(a*h*s-u*c*s+u*i*l-t*h*l-a*i*d+t*c*d)*w,e[8]=b*w,e[9]=(x*f*s-u*_*s-x*n*d+t*_*d+u*n*p-t*f*p)*w,e[10]=(a*_*s-x*o*s+x*n*l-t*_*l-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*d-t*o*d)*w,e[12]=A*w,e[13]=(u*_*i-x*f*i+x*n*h-t*_*h-u*n*m+t*f*m)*w,e[14]=(x*o*i-a*_*i-x*n*c+t*_*c+a*n*m-t*o*m)*w,e[15]=(a*f*i-u*o*i+u*n*c-t*f*c-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,x=s*f,_=a*u,m=a*f,p=o*f,E=c*l,y=c*u,b=c*f,A=n.x,M=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+b)*A,i[2]=(x-y)*A,i[3]=0,i[4]=(d-b)*M,i[5]=(1-(h+p))*M,i[6]=(m+E)*M,i[7]=0,i[8]=(x+y)*w,i[9]=(m-E)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],di.copy(this);const l=1/s,u=1/a,f=1/o;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,t.setFromRotationMatrix(di),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=yi,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let x,_;if(c)x=s/(a-s),_=a*s/(a-s);else if(o===yi)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Jo)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=yi,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let x,_;if(c)x=1/(a-s),_=a/(a-s);else if(o===yi)x=-2/(a-s),_=-(a+s)/(a-s);else if(o===Jo)x=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new Q,di=new Vt,Im=new Q(0,0,0),Nm=new Q(1,1,1),sr=new Q,ao=new Q,zn=new Q,Hf=new Vt,Wf=new Ka;class Ri{constructor(e=0,t=0,n=0,i=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fm=0;const Xf=new Q,ps=new Ka,Ii=new Vt,oo=new Q,sa=new Q,Om=new Q,Bm=new Ka,qf=new Q(1,0,0),Yf=new Q(0,1,0),Zf=new Q(0,0,1),Kf={type:"added"},km={type:"removed"},ms={type:"childadded",child:null},Ll={type:"childremoved",child:null};class dn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new Q,t=new Ri,n=new Ka,i=new Q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Qe}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(qf,e)}rotateY(e){return this.rotateOnAxis(Yf,e)}rotateZ(e){return this.rotateOnAxis(Zf,e)}translateOnAxis(e,t){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qf,e)}translateY(e){return this.translateOnAxis(Yf,e)}translateZ(e){return this.translateOnAxis(Zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(sa,oo,this.up):Ii.lookAt(oo,sa,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Ii),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kf),ms.child=e,this.dispatchEvent(ms),ms.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kf),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dn.DEFAULT_UP=new Q(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new Q,Ni=new Q,Ul=new Q,Fi=new Q,_s=new Q,xs=new Q,jf=new Q,Il=new Q,Nl=new Q,Fl=new Q,Ol=new Nt,Bl=new Nt,kl=new Nt;class _i{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pi.subVectors(i,t),Ni.subVectors(n,t),Ul.subVectors(e,t);const a=pi.dot(pi),o=pi.dot(Ni),c=pi.dot(Ul),l=Ni.dot(Ni),u=Ni.dot(Ul),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,x=(a*u-o*c)*h;return s.set(1-d-x,x,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fi.x),c.addScaledVector(a,Fi.y),c.addScaledVector(o,Fi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ol.setScalar(0),Bl.setScalar(0),kl.setScalar(0),Ol.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ol,s.x),a.addScaledVector(Bl,s.y),a.addScaledVector(kl,s.z),a}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),Ni.subVectors(e,t),pi.cross(Ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),pi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_s.subVectors(i,n),xs.subVectors(s,n),Il.subVectors(e,n);const c=_s.dot(Il),l=xs.dot(Il);if(c<=0&&l<=0)return t.copy(n);Nl.subVectors(e,i);const u=_s.dot(Nl),f=xs.dot(Nl);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(_s,a);Fl.subVectors(e,s);const d=_s.dot(Fl),x=xs.dot(Fl);if(x>=0&&d<=x)return t.copy(s);const _=d*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(xs,o);const m=u*x-d*f;if(m<=0&&f-u>=0&&d-x>=0)return jf.subVectors(s,i),o=(f-u)/(f-u+(d-x)),t.copy(i).addScaledVector(jf,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(_s,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},lo={h:0,s:0,l:0};function zl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=$u(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zl(a,s,e+1/3),this.g=zl(a,s,e),this.b=zl(a,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=Wn){function n(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const n=Pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return ht.workingToColorSpace(on.copy(this),e),Math.round(ct(on.r*255,0,255))*65536+Math.round(ct(on.g*255,0,255))*256+Math.round(ct(on.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Wn){ht.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(lo);const n=Ma(ar.h,lo.h,t),i=Ma(ar.s,lo.s,t),s=Ma(ar.l,lo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new dt;dt.NAMES=Pd;let zm=0;class ja extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Ds,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==If&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dd extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Q,co=new pt;let Vm=0;class $n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nf,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}}class Ld extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ud extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ji extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gm=0;const ii=new Vt,Vl=new dn,gs=new Q,Vn=new ea,aa=new ea,Qt=new Q;class Pi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Ud:Ld)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ji(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Vn.min,aa.min),Vn.expandByPoint(Qt),Qt.addVectors(Vn.max,aa.max),Vn.expandByPoint(Qt)):(Vn.expandByPoint(aa.min),Vn.expandByPoint(aa.max))}Vn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Qt.fromBufferAttribute(o,l),c&&(gs.fromBufferAttribute(e,l),Qt.add(gs)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new Q,c[L]=new Q;const l=new Q,u=new Q,f=new Q,h=new pt,d=new pt,x=new pt,_=new Q,m=new Q;function p(L,S,v){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,S),x.fromBufferAttribute(s,v),u.sub(l),f.sub(l),d.sub(h),x.sub(h);const D=1/(d.x*x.y-x.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(D),o[L].add(_),o[S].add(_),o[v].add(_),c[L].add(m),c[S].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,S=E.length;L<S;++L){const v=E[L],D=v.start,I=v.count;for(let k=D,V=D+I;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new Q,b=new Q,A=new Q,M=new Q;function w(L){A.fromBufferAttribute(i,L),M.copy(A);const S=o[L];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),b.crossVectors(M,S);const D=b.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,S=E.length;L<S;++L){const v=E[L],D=v.start,I=v.count;for(let k=D,V=D+I;k<V;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new Q,s=new Q,a=new Q,o=new Q,c=new Q,l=new Q,u=new Q,f=new Q;if(e)for(let h=0,d=e.count;h<d;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,x=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let p=0;p<u;p++)h[x++]=l[d++]}return new $n(h,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $f=new Vt,Pr=new Um,uo=new dl,Jf=new Q,fo=new Q,ho=new Q,po=new Q,Gl=new Q,mo=new Q,Qf=new Q,_o=new Q;class Ji extends dn{constructor(e=new Pi,t=new Dd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){mo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Gl.fromBufferAttribute(f,e),a?mo.addScaledVector(Gl,u):mo.addScaledVector(Gl.sub(t),u))}t.add(mo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(uo.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(uo,Jf)===null||Pr.origin.distanceToSquared(Jf)>(e.far-e.near)**2))&&($f.copy(s).invert(),Pr.copy(e.ray).applyMatrix4($f),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const m=h[x],p=a[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,A=y;b<A;b+=3){const M=o.getX(b),w=o.getX(b+1),L=o.getX(b+2);i=xo(this,p,e,n,l,u,f,M,w,L),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){const E=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);i=xo(this,a,e,n,l,u,f,E,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const m=h[x],p=a[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,A=y;b<A;b+=3){const M=b,w=b+1,L=b+2;i=xo(this,p,e,n,l,u,f,M,w,L),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){const E=m,y=m+1,b=m+2;i=xo(this,a,e,n,l,u,f,E,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hm(r,e,t,n,i,s,a,o){let c;if(e.side===Ln?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===br,o),c===null)return null;_o.copy(o),_o.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_o);return l<t.near||l>t.far?null:{distance:l,point:_o.clone(),object:r}}function xo(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,fo),r.getVertexPosition(c,ho),r.getVertexPosition(l,po);const u=Hm(r,e,t,n,fo,ho,po,Qf);if(u){const f=new Q;_i.getBarycoord(Qf,fo,ho,po,f),i&&(u.uv=_i.getInterpolatedAttribute(i,o,c,l,f,new pt)),s&&(u.uv1=_i.getInterpolatedAttribute(s,o,c,l,f,new pt)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,c,l,f,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new Q,materialIndex:0};_i.getNormal(fo,ho,po,h.normal),u.face=h,u.barycoord=f}return u}class $a extends Pi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ji(l,3)),this.setAttribute("normal",new ji(u,3)),this.setAttribute("uv",new ji(f,2));function x(_,m,p,E,y,b,A,M,w,L,S){const v=b/w,D=A/L,I=b/2,k=A/2,V=M/2,Y=w+1,H=L+1;let $=0,G=0;const se=new Q;for(let P=0;P<H;P++){const me=P*D-k;for(let Fe=0;Fe<Y;Fe++){const Ze=Fe*v-I;se[_]=Ze*E,se[m]=me*y,se[p]=V,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=M>0?1:-1,u.push(se.x,se.y,se.z),f.push(Fe/w),f.push(1-P/L),$+=1}}for(let P=0;P<L;P++)for(let me=0;me<w;me++){const Fe=h+me+Y*P,Ze=h+me+Y*(P+1),Oe=h+(me+1)+Y*(P+1),Xe=h+(me+1)+Y*P;c.push(Fe,Ze,Xe),c.push(Ze,Oe,Xe),G+=6}o.addGroup(d,G,S),d+=G,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=Hs(r[t]);for(const i in n)e[i]=n[i]}return e}function Wm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Id(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Xm={clone:Hs,merge:Sn};var qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nd extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new Q,eh=new pt,th=new pt;class si extends Nd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,Ss=1;class Zm extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new si(vs,Ss,e,t);i.layers=this.layers,this.add(i);const s=new si(vs,Ss,e,t);s.layers=this.layers,this.add(s);const a=new si(vs,Ss,e,t);a.layers=this.layers,this.add(a);const o=new si(vs,Ss,e,t);o.layers=this.layers,this.add(o);const c=new si(vs,Ss,e,t);c.layers=this.layers,this.add(c);const l=new si(vs,Ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Fd extends An{constructor(e=[],t=zs,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Km extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $a(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Zi});s.uniforms.tEquirect.value=t;const a=new Ji(i,s),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=li),new Zm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class go extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class Hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,x=.005;l.inputState.pinching&&h>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new go;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $m extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jm extends An{constructor(e=null,t=1,n=1,i,s,a,o,c,l=jn,u=jn,f,h){super(null,a,o,c,l,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=new Q,Qm=new Q,e_=new Qe;class Fr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wl.subVectors(n,t).cross(Qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||e_.getNormalMatrix(e),i=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new dl,t_=new pt(.5,.5),vo=new Q;class Qu{constructor(e=new Fr,t=new Fr,n=new Fr,i=new Fr,s=new Fr,a=new Fr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],x=s[8],_=s[9],m=s[10],p=s[11],E=s[12],y=s[13],b=s[14],A=s[15];if(i[0].setComponents(l-a,d-u,p-x,A-E).normalize(),i[1].setComponents(l+a,d+u,p+x,A+E).normalize(),i[2].setComponents(l+o,d+f,p+_,A+y).normalize(),i[3].setComponents(l-o,d-f,p-_,A-y).normalize(),n)i[4].setComponents(c,h,m,b).normalize(),i[5].setComponents(l-c,d-h,p-m,A-b).normalize();else if(i[4].setComponents(l-c,d-h,p-m,A-b).normalize(),t===yi)i[5].setComponents(l+c,d+h,p+m,A+b).normalize();else if(t===Jo)i[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const t=t_.distanceTo(e.center);return Dr.radius=.7071067811865476+t,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vo.x=i.normal.x>0?e.max.x:e.min.x,vo.y=i.normal.y>0?e.max.y:e.min.y,vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Od extends An{constructor(e,t,n=Qr,i,s,a,o=jn,c=jn,l,u=Fa,f=1){if(u!==Fa&&u!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bd extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends Pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=e/o,h=t/c,d=[],x=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*h-a;for(let y=0;y<l;y++){const b=y*f-s;x.push(b,-E,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const y=E+l*p,b=E+l*(p+1),A=E+1+l*(p+1),M=E+1+l*p;d.push(y,b,M),d.push(b,A,M)}this.setIndex(d),this.setAttribute("position",new ji(x,3)),this.setAttribute("normal",new ji(_,3)),this.setAttribute("uv",new ji(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class n_ extends ja{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i_ extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r_ extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class s_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],x=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const a_=new s_;class ef{constructor(e){this.manager=e!==void 0?e:a_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ef.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class o_ extends Error{constructor(e,t){super(e),this.response=t}}class l_ extends ef{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=nh.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Oi[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,x=d!==0;let _=0;const m=new ReadableStream({start(p){E();function E(){f.read().then(({done:y,value:b})=>{if(y)p.close();else{_+=b.byteLength;const A=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:d});for(let M=0,w=u.length;M<w;M++){const L=u[M];L.onProgress&&L.onProgress(A)}p.enqueue(b),E()}},y=>{p.error(y)})}}});return new Response(m)}else throw new o_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{nh.add(`file:${e}`,l);const u=Oi[e];delete Oi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Oi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class kd extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xl=new Vt,ih=new Q,rh=new Q;class c_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qu,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zd extends Nd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class u_ extends c_{constructor(){super(new zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f_ extends kd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new u_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h_ extends kd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class d_ extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class p_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sh(r,e,t,n){const i=m_(n);switch(t){case bd:return r*e;case Ed:return r*e/i.components*i.byteLength;case Yu:return r*e/i.components*i.byteLength;case Zu:return r*e*2/i.components*i.byteLength;case Ku:return r*e*2/i.components*i.byteLength;case yd:return r*e*3/i.components*i.byteLength;case xi:return r*e*4/i.components*i.byteLength;case ju:return r*e*4/i.components*i.byteLength;case Oo:case Bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ko:case zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wc:case Cc:return Math.max(r,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(r,8)*Math.max(e,8)/2;case Rc:case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qc:case Yc:case Zc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kc:case jc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $c:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(r){switch(r){case Ci:case gd:return{byteLength:1,components:1};case Ia:case vd:case $s:return{byteLength:2,components:1};case Xu:case qu:return{byteLength:2,components:4};case Qr:case Wu:case qi:return{byteLength:4,components:1};case Sd:case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function __(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,o),f.length===0)r.bufferSubData(l,0,u);else{f.sort((d,x)=>d.start-x.start);let h=0;for(let d=1;d<f.length;d++){const x=f[h],_=f[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,x=f.length;d<x;d++){const _=f[d];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var x_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
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
#endif`,v_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
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
#endif`,E_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T_=`#ifdef USE_BATCHING
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
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P_=`#ifdef USE_IRIDESCENCE
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
#endif`,D_=`#ifdef USE_BUMPMAP
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z_=`#define PI 3.141592653589793
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
} // validated`,V_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G_=`vec3 transformedNormal = objectNormal;
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
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,J_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
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
}`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
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
#endif`,cx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
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
#endif`,mx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,_x=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eg=`#define DISTANCE
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
}`,Tg=`#define DISTANCE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Hg=`#define TOON
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
}`,Wg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 color;
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
}`,Zg=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:x_,alphahash_pars_fragment:g_,alphamap_fragment:v_,alphamap_pars_fragment:S_,alphatest_fragment:M_,alphatest_pars_fragment:b_,aomap_fragment:y_,aomap_pars_fragment:E_,batching_pars_vertex:T_,batching_vertex:w_,begin_vertex:A_,beginnormal_vertex:C_,bsdfs:R_,iridescence_fragment:P_,bumpmap_pars_fragment:D_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:U_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:N_,color_fragment:F_,color_pars_fragment:O_,color_pars_vertex:B_,color_vertex:k_,common:z_,cube_uv_reflection_fragment:V_,defaultnormal_vertex:G_,displacementmap_pars_vertex:H_,displacementmap_vertex:W_,emissivemap_fragment:X_,emissivemap_pars_fragment:q_,colorspace_fragment:Y_,colorspace_pars_fragment:Z_,envmap_fragment:K_,envmap_common_pars_fragment:j_,envmap_pars_fragment:$_,envmap_pars_vertex:J_,envmap_physical_pars_fragment:cx,envmap_vertex:Q_,fog_vertex:ex,fog_pars_vertex:tx,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:rx,lightmap_pars_fragment:sx,lights_lambert_fragment:ax,lights_lambert_pars_fragment:ox,lights_pars_begin:lx,lights_toon_fragment:ux,lights_toon_pars_fragment:fx,lights_phong_fragment:hx,lights_phong_pars_fragment:dx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:_x,lights_fragment_maps:xx,lights_fragment_end:gx,logdepthbuf_fragment:vx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:bx,map_fragment:yx,map_pars_fragment:Ex,map_particle_fragment:Tx,map_particle_pars_fragment:wx,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Cx,morphinstance_vertex:Rx,morphcolor_vertex:Px,morphnormal_vertex:Dx,morphtarget_pars_vertex:Lx,morphtarget_vertex:Ux,normal_fragment_begin:Ix,normal_fragment_maps:Nx,normal_pars_fragment:Fx,normal_pars_vertex:Ox,normal_vertex:Bx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Hx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:qx,project_vertex:Yx,dithering_fragment:Zx,dithering_pars_fragment:Kx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:sg,specularmap_fragment:ag,specularmap_pars_fragment:og,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:ug,transmission_pars_fragment:fg,uv_pars_fragment:hg,uv_pars_vertex:dg,uv_vertex:pg,worldpos_vertex:mg,background_vert:_g,background_frag:xg,backgroundCube_vert:gg,backgroundCube_frag:vg,cube_vert:Sg,cube_frag:Mg,depth_vert:bg,depth_frag:yg,distanceRGBA_vert:Eg,distanceRGBA_frag:Tg,equirect_vert:wg,equirect_frag:Ag,linedashed_vert:Cg,linedashed_frag:Rg,meshbasic_vert:Pg,meshbasic_frag:Dg,meshlambert_vert:Lg,meshlambert_frag:Ug,meshmatcap_vert:Ig,meshmatcap_frag:Ng,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:kg,meshphysical_vert:zg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Hg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:Zg,sprite_frag:Kg},Me={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Si={basic:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new dt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Sn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Sn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new dt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Sn([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Sn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Sn([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Sn([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Sn([Me.common,Me.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Sn([Me.lights,Me.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Si.physical={uniforms:Sn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const So={r:0,b:0,g:0},Lr=new Ri,jg=new Vt;function $g(r,e,t,n,i,s,a){const o=new dt(0);let c=s===!0?0:1,l,u,f=null,h=0,d=null;function x(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function _(y){let b=!1;const A=x(y);A===null?p(o,c):A&&A.isColor&&(p(A,1),b=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,b){const A=x(b);A&&(A.isCubeTexture||A.mapping===hl)?(u===void 0&&(u=new Ji(new $a(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Hs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Lr.copy(b.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Lr)),u.material.toneMapped=ht.getTransfer(A.colorSpace)!==St,(f!==A||h!==A.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ji(new pl(2,2),new Qi({name:"BackgroundMaterial",uniforms:Hs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ht.getTransfer(A.colorSpace)!==St,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,f=A,h=A.version,d=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(So,Id(r)),n.buffers.color.setClear(So.r,So.g,So.b,b,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m,dispose:E}}function Jg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,D,I,k,V){let Y=!1;const H=f(k,I,D);s!==H&&(s=H,l(s.object)),Y=d(v,k,I,V),Y&&x(v,k,I,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(v,D,I,k),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return r.createVertexArray()}function l(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,D,I){const k=I.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let Y=V[D.id];Y===void 0&&(Y={},V[D.id]=Y);let H=Y[k];return H===void 0&&(H=h(c()),Y[k]=H),H}function h(v){const D=[],I=[],k=[];for(let V=0;V<t;V++)D[V]=0,I[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,D,I,k){const V=s.attributes,Y=D.attributes;let H=0;const $=I.getAttributes();for(const G in $)if($[G].location>=0){const P=V[G];let me=Y[G];if(me===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),P===void 0||P.attribute!==me||me&&P.data!==me.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function x(v,D,I,k){const V={},Y=D.attributes;let H=0;const $=I.getAttributes();for(const G in $)if($[G].location>=0){let P=Y[G];P===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const me={};me.attribute=P,P&&P.data&&(me.data=P.data),V[G]=me,H++}s.attributes=V,s.attributesNum=H,s.index=k}function _(){const v=s.newAttributes;for(let D=0,I=v.length;D<I;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const I=s.newAttributes,k=s.enabledAttributes,V=s.attributeDivisors;I[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),V[v]!==D&&(r.vertexAttribDivisor(v,D),V[v]=D)}function E(){const v=s.newAttributes,D=s.enabledAttributes;for(let I=0,k=D.length;I<k;I++)D[I]!==v[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function y(v,D,I,k,V,Y,H){H===!0?r.vertexAttribIPointer(v,D,I,V,Y):r.vertexAttribPointer(v,D,I,k,V,Y)}function b(v,D,I,k){_();const V=k.attributes,Y=I.getAttributes(),H=D.defaultAttributeValues;for(const $ in Y){const G=Y[$];if(G.location>=0){let se=V[$];if(se===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const P=se.normalized,me=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const Ze=Fe.buffer,Oe=Fe.type,Xe=Fe.bytesPerElement,ee=Oe===r.INT||Oe===r.UNSIGNED_INT||se.gpuType===Wu;if(se.isInterleavedBufferAttribute){const te=se.data,_e=te.stride,Ue=se.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<G.locationSize;Ae++)p(G.location+Ae,te.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<G.locationSize;Ae++)m(G.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ae=0;Ae<G.locationSize;Ae++)y(G.location+Ae,me/G.locationSize,Oe,P,_e*Xe,(Ue+me/G.locationSize*Ae)*Xe,ee)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,se.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let te=0;te<G.locationSize;te++)y(G.location+te,me/G.locationSize,Oe,P,me*Xe,me/G.locationSize*te*Xe,ee)}}else if(H!==void 0){const P=H[$];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(G.location,P);break;case 3:r.vertexAttrib3fv(G.location,P);break;case 4:r.vertexAttrib4fv(G.location,P);break;default:r.vertexAttrib1fv(G.location,P)}}}}E()}function A(){L();for(const v in n){const D=n[v];for(const I in D){const k=D[I];for(const V in k)u(k[V].object),delete k[V];delete D[I]}delete n[v]}}function M(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const I in D){const k=D[I];for(const V in k)u(k[V].object),delete k[V];delete D[I]}delete n[v.id]}function w(v){for(const D in n){const I=n[D];if(I[v.id]===void 0)continue;const k=I[v.id];for(const V in k)u(k[V].object),delete k[V];delete I[v.id]}}function L(){S(),a=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Qg(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(r.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let x=0;x<f;x++)d+=u[x];t.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)a(l[x],u[x],h[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_]*h[_];t.update(x,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ev(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==xi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ci&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==qi&&!L)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:A,maxSamples:M}}function tv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Fr,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const x=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||x===null||x.length===0||s&&!m)s?u(null):l();else{const E=s?0:n,y=E*4;let b=p.clippingState||null;c.value=b,b=u(x,h,y,d);for(let A=0;A!==y;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,x){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,x!==!0||m===null){const p=d+_*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==_;++y,b+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function nv(r){let e=new WeakMap;function t(a,o){return o===Mc?a.mapping=zs:o===bc&&(a.mapping=Vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mc||o===bc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Km(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const hr=4,ah=[.125,.215,.35,.446,.526,.582],Gr=20,iv=512,oa=new zd,oh=new dt;let ql=null,Yl=0,Zl=0,Kl=!1;const rv=new Q;class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=rv}=s;ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Yl,Zl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:$s,format:xi,colorSpace:Gs,depthBuffer:!1},i=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sv(s)),this._blurMaterial=ov(s,e,t)}return i}_compileMaterial(e){const t=new Ji(new Pi,e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,i,s){const c=new si(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(oh),f.toneMapping=gr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ji(new $a,new Dd({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(oh),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):b===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;Ms(i,b*A,y>2?A:0,A,A),f.setRenderTarget(i),p&&f.render(_,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zs||e.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const E=3*Math.max(this._cubeSize,16),y=4*this._cubeSize;this._ggxMaterial=av(this._lodMax,E,y)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=.05+l*.95,d=f*h,{_lodMax:x}=this,_=this._sizeLods[n],m=3*_*(n>x-hr?n-x+hr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=x-t,Ms(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,oa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,Ms(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,oa)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&kt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gr-1),_=s/x,m=isFinite(s)?1+Math.floor(u*_):Gr;m>Gr&&Ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const p=[];let E=0;for(let w=0;w<Gr;++w){const L=w/_,S=Math.exp(-L*L/2);p.push(S),w===0?E+=S:w<m&&(E+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-n;const b=this._sizeLods[i],A=3*b*(i>y-hr?i-y+hr:0),M=4*(this._cubeSize-b);Ms(t,A,M,3*b,2*b),c.setRenderTarget(t),c.render(f,oa)}}function sv(r){const e=[],t=[],n=[];let i=r;const s=r-hr+1+ah.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-hr?c=ah[a-r+hr-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,x=6,_=3,m=2,p=1,E=new Float32Array(_*x*d),y=new Float32Array(m*x*d),b=new Float32Array(p*x*d);for(let M=0;M<d;M++){const w=M%3*2/3-1,L=M>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];E.set(S,_*x*M),y.set(h,m*x*M);const v=[M,M,M,M,M,M];b.set(v,p*x*M)}const A=new Pi;A.setAttribute("position",new $n(E,_)),A.setAttribute("uv",new $n(y,m)),A.setAttribute("faceIndex",new $n(b,p)),n.push(new Ji(A,null)),i>hr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ch(r,e,t){const n=new es(r,e,t);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function av(r,e,t){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ov(r,e,t){const n=new Float32Array(Gr),i=new Q(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function uh(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fh(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function lv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Mc||c===bc,u=c===zs||c===Vs;if(l||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new lh(r)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new lh(r)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ba("WebGLRenderer: "+n+" extension not supported."),i}}}function uv(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,x=f.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let y=0,b=E.length;y<b;y+=3){const A=E[y+0],M=E[y+1],w=E[y+2];h.push(A,M,M,w,w,A)}}else if(x!==void 0){const E=x.array;_=x.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const A=y+0,M=y+1,w=y+2;h.push(A,M,M,w,w,A)}}else return;const m=new(Ad(h)?Ud:Ld)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function fv(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){r.drawElements(n,d,s,h*a),t.update(d,n,1)}function l(h,d,x){x!==0&&(r.drawElementsInstanced(n,d,s,h*a,x),t.update(d,n,x))}function u(h,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];t.update(m,n,1)}function f(h,d,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,x);let p=0;for(let E=0;E<x;E++)p+=d[E]*_[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dv(r,e,t){const n=new WeakMap,i=new Nt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let b=o.attributes.position.count*y,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*A*4*f),w=new Cd(M,b,A,f);w.type=qi,w.needsUpdate=!0;const L=y*4;for(let v=0;v<f;v++){const D=m[v],I=p[v],k=E[v],V=b*A*4*v;for(let Y=0;Y<D.count;Y++){const H=Y*L;d===!0&&(i.fromBufferAttribute(D,Y),M[V+H+0]=i.x,M[V+H+1]=i.y,M[V+H+2]=i.z,M[V+H+3]=0),x===!0&&(i.fromBufferAttribute(I,Y),M[V+H+4]=i.x,M[V+H+5]=i.y,M[V+H+6]=i.z,M[V+H+7]=0),_===!0&&(i.fromBufferAttribute(k,Y),M[V+H+8]=i.x,M[V+H+9]=i.y,M[V+H+10]=i.z,M[V+H+11]=k.itemSize===4?i.w:1)}}h={count:f,texture:w,size:new pt(b,A)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const x=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function pv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return f}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Gd=new An,hh=new Od(1,1),Hd=new Cd,Wd=new Dm,Xd=new Fd,dh=[],ph=[],mh=new Float32Array(16),_h=new Float32Array(9),xh=new Float32Array(4);function ta(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=dh[i];if(s===void 0&&(s=new Float32Array(i),dh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _l(r,e){let t=ph[e];t===void 0&&(t=new Int32Array(e),ph[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function vv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;xh.set(n),r.uniformMatrix2fv(this.addr,!1,xh),$t(t,n)}}function Sv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;_h.set(n),r.uniformMatrix3fv(this.addr,!1,_h),$t(t,n)}}function Mv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;mh.set(n),r.uniformMatrix4fv(this.addr,!1,mh),$t(t,n)}}function bv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function wv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function Pv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hh.compareFunction=wd,s=hh):s=Gd,t.setTexture2D(e||s,i)}function Dv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wd,i)}function Lv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xd,i)}function Uv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hd,i)}function Iv(r){switch(r){case 5126:return mv;case 35664:return _v;case 35665:return xv;case 35666:return gv;case 35674:return vv;case 35675:return Sv;case 35676:return Mv;case 5124:case 35670:return bv;case 35667:case 35671:return yv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return wv;case 36294:return Av;case 36295:return Cv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Nv(r,e){r.uniform1fv(this.addr,e)}function Fv(r,e){const t=ta(e,this.size,2);r.uniform2fv(this.addr,t)}function Ov(r,e){const t=ta(e,this.size,3);r.uniform3fv(this.addr,t)}function Bv(r,e){const t=ta(e,this.size,4);r.uniform4fv(this.addr,t)}function kv(r,e){const t=ta(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zv(r,e){const t=ta(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Vv(r,e){const t=ta(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gv(r,e){r.uniform1iv(this.addr,e)}function Hv(r,e){r.uniform2iv(this.addr,e)}function Wv(r,e){r.uniform3iv(this.addr,e)}function Xv(r,e){r.uniform4iv(this.addr,e)}function qv(r,e){r.uniform1uiv(this.addr,e)}function Yv(r,e){r.uniform2uiv(this.addr,e)}function Zv(r,e){r.uniform3uiv(this.addr,e)}function Kv(r,e){r.uniform4uiv(this.addr,e)}function jv(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Gd,s[a])}function $v(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wd,s[a])}function Jv(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Xd,s[a])}function Qv(r,e,t){const n=this.cache,i=e.length,s=_l(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hd,s[a])}function e2(r){switch(r){case 5126:return Nv;case 35664:return Fv;case 35665:return Ov;case 35666:return Bv;case 35674:return kv;case 35675:return zv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Hv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return Zv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}class t2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}}class n2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e2(t.type)}}class i2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function gh(r,e){r.seq.push(e),r.map[e.id]=e}function r2(r,e,t){const n=r.name,i=n.length;for(jl.lastIndex=0;;){const s=jl.exec(n),a=jl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){gh(t,l===void 0?new t2(o,r,e):new n2(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new i2(o),gh(t,f)),t=f}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);r2(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const s2=37297;let a2=0;function o2(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sh=new Qe;function l2(r){ht._getMatrix(Sh,ht.workingColorSpace,r);const e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case $o:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+o2(r.getShaderSource(e),o)}else return s}function c2(r,e){const t=l2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u2(r,e){let t;switch(e){case Hp:t="Linear";break;case Wp:t="Reinhard";break;case Xp:t="Cineon";break;case qp:t="ACESFilmic";break;case Zp:t="AgX";break;case Kp:t="Neutral";break;case Yp:t="Custom";break;default:Ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mo=new Q;function f2(){ht.getLuminanceCoefficients(Mo);const r=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function d2(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function p2(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function fa(r){return r!==""}function bh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(r){return r.replace(m2,x2)}const _2=new Map;function x2(r,e){let t=et[e];if(t===void 0){const n=_2.get(e);if(n!==void 0)t=et[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const g2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(r){return r.replace(g2,v2)}function v2(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Th(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===md?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function M2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zs:case Vs:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function y2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case Vp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function E2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function T2(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=S2(t),l=M2(t),u=b2(t),f=y2(t),h=E2(t),d=h2(t),x=d2(s),_=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?et.tonemapping_pars_fragment:"",t.toneMapping!==gr?u2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,c2("linearToOutputTexel",t.outputColorSpace),f2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=Qc(a),a=bh(a,t),a=yh(a,t),o=Qc(o),o=bh(o,t),o=yh(o,t),a=Eh(a),o=Eh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+a,b=E+p+o,A=vh(i,i.VERTEX_SHADER,y),M=vh(i,i.FRAGMENT_SHADER,b);i.attachShader(_,A),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(D){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(A)||"",V=i.getShaderInfoLog(M)||"",Y=I.trim(),H=k.trim(),$=V.trim();let G=!0,se=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,M);else{const P=Mh(i,A,"vertex"),me=Mh(i,M,"fragment");kt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+P+`
`+me)}else Y!==""?Ke("WebGLProgram: Program Info Log:",Y):(H===""||$==="")&&(se=!1);se&&(D.diagnostics={runnable:G,programLog:Y,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(A),i.deleteShader(M),L=new Vo(i,_),S=p2(i,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,s2)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}let w2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new C2(e),t.set(e,n)),n}}class C2{constructor(e){this.id=w2++,this.code=e,this.usedTimes=0}}function R2(r,e,t,n,i,s,a){const o=new Rd,c=new A2,l=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,D,I,k){const V=I.fog,Y=k.geometry,H=S.isMeshStandardMaterial?I.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),G=$&&$.mapping===hl?$.image.height:null,se=x[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Ke("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=P!==void 0?P.length:0;let Fe=0;Y.morphAttributes.position!==void 0&&(Fe=1),Y.morphAttributes.normal!==void 0&&(Fe=2),Y.morphAttributes.color!==void 0&&(Fe=3);let Ze,Oe,Xe,ee;if(se){const ve=Si[se];Ze=ve.vertexShader,Oe=ve.fragmentShader}else Ze=S.vertexShader,Oe=S.fragmentShader,c.update(S),Xe=c.getVertexShaderID(S),ee=c.getFragmentShaderID(S);const te=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,Be=!!S.map,ot=!!S.matcap,be=!!$,qe=!!S.aoMap,U=!!S.lightMap,Ve=!!S.bumpMap,z=!!S.normalMap,je=!!S.displacementMap,Z=!!S.emissiveMap,O=!!S.metalnessMap,K=!!S.roughnessMap,ce=S.anisotropy>0,C=S.clearcoat>0,g=S.dispersion>0,N=S.iridescence>0,J=S.sheen>0,j=S.transmission>0,q=ce&&!!S.anisotropyMap,he=C&&!!S.clearcoatMap,ae=C&&!!S.clearcoatNormalMap,Te=C&&!!S.clearcoatRoughnessMap,ie=N&&!!S.iridescenceMap,le=N&&!!S.iridescenceThicknessMap,fe=J&&!!S.sheenColorMap,Pe=J&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,xe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,R=j&&!!S.transmissionMap,pe=j&&!!S.thicknessMap,ue=!!S.gradientMap,oe=!!S.alphaMap,re=S.alphaTest>0,ne=!!S.alphaHash,ye=!!S.extensions;let Ce=gr;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ce=r.toneMapping);const at={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:Oe,defines:S.defines,customVertexShaderID:Xe,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Gs,alphaToCoverage:!!S.alphaToCoverage,map:Be,matcap:ot,envMap:be,envMapMode:be&&$.mapping,envMapCubeUVHeight:G,aoMap:qe,lightMap:U,bumpMap:Ve,normalMap:z,displacementMap:h&&je,emissiveMap:Z,normalMapObjectSpace:z&&S.normalMapType===Qp,normalMapTangentSpace:z&&S.normalMapType===Td,metalnessMap:O,roughnessMap:K,anisotropy:ce,anisotropyMap:q,clearcoat:C,clearcoatMap:he,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:g,iridescence:N,iridescenceMap:ie,iridescenceThicknessMap:le,sheen:J,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:Ie,specularColorMap:xe,specularIntensityMap:Ne,transmission:j,transmissionMap:R,thicknessMap:pe,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:re,alphaHash:ne,combine:S.combine,mapUv:Be&&_(S.map.channel),aoMapUv:qe&&_(S.aoMap.channel),lightMapUv:U&&_(S.lightMap.channel),bumpMapUv:Ve&&_(S.bumpMap.channel),normalMapUv:z&&_(S.normalMap.channel),displacementMapUv:je&&_(S.displacementMap.channel),emissiveMapUv:Z&&_(S.emissiveMap.channel),metalnessMapUv:O&&_(S.metalnessMap.channel),roughnessMapUv:K&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:he&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(S.sheenRoughnessMap.channel),specularMapUv:Ie&&_(S.specularMap.channel),specularColorMapUv:xe&&_(S.specularColorMap.channel),specularIntensityMapUv:Ne&&_(S.specularIntensityMap.channel),transmissionMapUv:R&&_(S.transmissionMap.channel),thicknessMapUv:pe&&_(S.thicknessMap.channel),alphaMapUv:oe&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(z||ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Be||oe),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Fe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:Z&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Hi,flipSided:S.side===Ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)v.push(D),v.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(v,S),y(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const v=x[S.type];let D;if(v){const I=Si[v];D=Xm.clone(I.uniforms)}else D=S.uniforms;return D}function A(S,v){let D;for(let I=0,k=u.length;I<k;I++){const V=u[I];if(V.cacheKey===v){D=V,++D.usedTimes;break}}return D===void 0&&(D=new T2(r,v,S,s),u.push(D)),D}function M(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:A,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:L}}function P2(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function D2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ah(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,x,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:x,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,x,_,m){const p=a(f,h,d,x,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(f,h,d,x,_,m){const p=a(f,h,d,x,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||D2),n.length>1&&n.sort(h||wh),i.length>1&&i.sort(h||wh)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function L2(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ah,r.set(n,[a])):i>=s.length?(a=new Ah,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function U2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new dt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function I2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let N2=0;function F2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function O2(r){const e=new U2,t=I2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Q);const i=new Q,s=new Vt,a=new Vt;function o(l){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,x=0,_=0,m=0,p=0,E=0,y=0,b=0,A=0,M=0,w=0;l.sort(F2);for(let S=0,v=l.length;S<v;S++){const D=l[S],I=D.color,k=D.intensity,V=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=I.r*k,f+=I.g*k,h+=I.b*k;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],k);w++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,G=t.get(D);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=D.shadow.matrix,E++}n.directional[d]=H,d++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(I).multiplyScalar(k),H.distance=V,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[_]=H;const $=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[_]=$.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Y,b++}_++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(I).multiplyScalar(k),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const $=D.shadow,G=t.get(D);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=Y,n.pointShadowMatrix[x]=D.shadow.matrix,y++}n.point[x]=H,x++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(k),H.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==d||L.pointLength!==x||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==b||L.numSpotMaps!==A||L.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,L.directionalLength=d,L.pointLength=x,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=b,L.numSpotMaps=A,L.numLightProbes=w,n.version=N2++)}function c(l,u){let f=0,h=0,d=0,x=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const y=l[p];if(y.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Ch(r){const e=new O2(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function B2(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ch(r),e.set(i,[o])):s>=a.length?(o=new Ch(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const k2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
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
}`;function V2(r,e,t){let n=new Qu;const i=new pt,s=new pt,a=new Nt,o=new i_({depthPacking:Jp}),c=new r_,l={},u=t.maxTextureSize,f={[br]:Ln,[Ln]:br,[Hi]:Hi},h=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:k2,fragmentShader:z2}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const x=new Pi;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ji(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let p=this.type;this.render=function(M,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Zi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=p!==zi&&this.type===zi,V=p===zi&&this.type!==zi;for(let Y=0,H=M.length;Y<H;Y++){const $=M[Y],G=$.shadow;if(G===void 0){Ke("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const se=G.getFrameExtents();if(i.multiply(se),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/se.x),i.x=s.x*se.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/se.y),i.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||k===!0||V===!0){const me=this.type!==zi?{minFilter:jn,magFilter:jn}:{};G.map!==null&&G.map.dispose(),G.map=new es(i.x,i.y,me),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const P=G.getViewportCount();for(let me=0;me<P;me++){const Fe=G.getViewport(me);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),I.viewport(a),G.updateMatrices($,me),n=G.getFrustum(),b(w,L,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===zi&&E(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,v,D)};function E(M,w){const L=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new es(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,L,h,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,L,d,_,null)}function y(M,w,L,S){let v=null;const D=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=v.uuid,k=w.uuid;let V=l[I];V===void 0&&(V={},l[I]=V);let Y=V[k];Y===void 0&&(Y=v.clone(),V[k]=Y,w.addEventListener("dispose",A)),v=Y}if(v.visible=w.visible,v.wireframe=w.wireframe,S===zi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:f[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=L}return v}function b(M,w,L,S,v){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===zi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const k=e.update(M),V=M.material;if(Array.isArray(V)){const Y=k.groups;for(let H=0,$=Y.length;H<$;H++){const G=Y[H],se=V[G.materialIndex];if(se&&se.visible){const P=y(M,se,S,v);M.onBeforeShadow(r,M,w,L,k,P,G),r.renderBufferDirect(L,null,k,P,M,G),M.onAfterShadow(r,M,w,L,k,P,G)}}}else if(V.visible){const Y=y(M,V,S,v);M.onBeforeShadow(r,M,w,L,k,Y,null),r.renderBufferDirect(L,null,k,Y,M,null),M.onAfterShadow(r,M,w,L,k,Y,null)}}const I=M.children;for(let k=0,V=I.length;k<V;k++)b(I[k],w,L,S,v)}function A(M){M.target.removeEventListener("dispose",A);for(const L in l){const S=l[L],v=M.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const G2={[pc]:mc,[_c]:vc,[xc]:Sc,[ks]:gc,[mc]:pc,[vc]:_c,[Sc]:xc,[gc]:ks};function H2(r,e){function t(){let R=!1;const pe=new Nt;let ue=null;const oe=new Nt(0,0,0,0);return{setMask:function(re){ue!==re&&!R&&(r.colorMask(re,re,re,re),ue=re)},setLocked:function(re){R=re},setClear:function(re,ne,ye,Ce,at){at===!0&&(re*=Ce,ne*=Ce,ye*=Ce),pe.set(re,ne,ye,Ce),oe.equals(pe)===!1&&(r.clearColor(re,ne,ye,Ce),oe.copy(pe))},reset:function(){R=!1,ue=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,pe=!1,ue=null,oe=null,re=null;return{setReversed:function(ne){if(pe!==ne){const ye=e.get("EXT_clip_control");ne?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),pe=ne;const Ce=re;re=null,this.setClear(Ce)}},getReversed:function(){return pe},setTest:function(ne){ne?te(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(ne){ue!==ne&&!R&&(r.depthMask(ne),ue=ne)},setFunc:function(ne){if(pe&&(ne=G2[ne]),oe!==ne){switch(ne){case pc:r.depthFunc(r.NEVER);break;case mc:r.depthFunc(r.ALWAYS);break;case _c:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case xc:r.depthFunc(r.EQUAL);break;case gc:r.depthFunc(r.GEQUAL);break;case vc:r.depthFunc(r.GREATER);break;case Sc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=ne}},setLocked:function(ne){R=ne},setClear:function(ne){re!==ne&&(pe&&(ne=1-ne),r.clearDepth(ne),re=ne)},reset:function(){R=!1,ue=null,oe=null,re=null,pe=!1}}}function i(){let R=!1,pe=null,ue=null,oe=null,re=null,ne=null,ye=null,Ce=null,at=null;return{setTest:function(ve){R||(ve?te(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(ve){pe!==ve&&!R&&(r.stencilMask(ve),pe=ve)},setFunc:function(ve,De,$e){(ue!==ve||oe!==De||re!==$e)&&(r.stencilFunc(ve,De,$e),ue=ve,oe=De,re=$e)},setOp:function(ve,De,$e){(ne!==ve||ye!==De||Ce!==$e)&&(r.stencilOp(ve,De,$e),ne=ve,ye=De,Ce=$e)},setLocked:function(ve){R=ve},setClear:function(ve){at!==ve&&(r.clearStencil(ve),at=ve)},reset:function(){R=!1,pe=null,ue=null,oe=null,re=null,ne=null,ye=null,Ce=null,at=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],x=null,_=!1,m=null,p=null,E=null,y=null,b=null,A=null,M=null,w=new dt(0,0,0),L=0,S=!1,v=null,D=null,I=null,k=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=$>=2);let se=null,P={};const me=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),Ze=new Nt().fromArray(me),Oe=new Nt().fromArray(Fe);function Xe(R,pe,ue,oe){const re=new Uint8Array(4),ne=r.createTexture();r.bindTexture(R,ne),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<ue;ye++)R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(pe+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return ne}const ee={};ee[r.TEXTURE_2D]=Xe(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=Xe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=Xe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=Xe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(ks),Ve(!1),z(Pf),te(r.CULL_FACE),qe(Zi);function te(R){u[R]!==!0&&(r.enable(R),u[R]=!0)}function _e(R){u[R]!==!1&&(r.disable(R),u[R]=!1)}function Ue(R,pe){return f[R]!==pe?(r.bindFramebuffer(R,pe),f[R]=pe,R===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=pe),R===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ae(R,pe){let ue=d,oe=!1;if(R){ue=h.get(pe),ue===void 0&&(ue=[],h.set(pe,ue));const re=R.textures;if(ue.length!==re.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,ye=re.length;ne<ye;ne++)ue[ne]=r.COLOR_ATTACHMENT0+ne;ue.length=re.length,oe=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,oe=!0);oe&&r.drawBuffers(ue)}function Be(R){return x!==R?(r.useProgram(R),x=R,!0):!1}const ot={[Vr]:r.FUNC_ADD,[Ep]:r.FUNC_SUBTRACT,[Tp]:r.FUNC_REVERSE_SUBTRACT};ot[wp]=r.MIN,ot[Ap]=r.MAX;const be={[Cp]:r.ZERO,[Rp]:r.ONE,[Pp]:r.SRC_COLOR,[hc]:r.SRC_ALPHA,[Fp]:r.SRC_ALPHA_SATURATE,[Ip]:r.DST_COLOR,[Lp]:r.DST_ALPHA,[Dp]:r.ONE_MINUS_SRC_COLOR,[dc]:r.ONE_MINUS_SRC_ALPHA,[Np]:r.ONE_MINUS_DST_COLOR,[Up]:r.ONE_MINUS_DST_ALPHA,[Op]:r.CONSTANT_COLOR,[Bp]:r.ONE_MINUS_CONSTANT_COLOR,[kp]:r.CONSTANT_ALPHA,[zp]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(R,pe,ue,oe,re,ne,ye,Ce,at,ve){if(R===Zi){_===!0&&(_e(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),R!==yp){if(R!==m||ve!==S){if((p!==Vr||b!==Vr)&&(r.blendEquation(r.FUNC_ADD),p=Vr,b=Vr),ve)switch(R){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Df:r.blendFunc(r.ONE,r.ONE);break;case Lf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",R);break}else switch(R){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Df:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lf:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uf:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",R);break}E=null,y=null,A=null,M=null,w.set(0,0,0),L=0,m=R,S=ve}return}re=re||pe,ne=ne||ue,ye=ye||oe,(pe!==p||re!==b)&&(r.blendEquationSeparate(ot[pe],ot[re]),p=pe,b=re),(ue!==E||oe!==y||ne!==A||ye!==M)&&(r.blendFuncSeparate(be[ue],be[oe],be[ne],be[ye]),E=ue,y=oe,A=ne,M=ye),(Ce.equals(w)===!1||at!==L)&&(r.blendColor(Ce.r,Ce.g,Ce.b,at),w.copy(Ce),L=at),m=R,S=!1}function U(R,pe){R.side===Hi?_e(r.CULL_FACE):te(r.CULL_FACE);let ue=R.side===Ln;pe&&(ue=!ue),Ve(ue),R.blending===Ds&&R.transparent===!1?qe(Zi):qe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Z(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(R){v!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),v=R)}function z(R){R!==Sp?(te(r.CULL_FACE),R!==D&&(R===Pf?r.cullFace(r.BACK):R===Mp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),D=R}function je(R){R!==I&&(H&&r.lineWidth(R),I=R)}function Z(R,pe,ue){R?(te(r.POLYGON_OFFSET_FILL),(k!==pe||V!==ue)&&(r.polygonOffset(pe,ue),k=pe,V=ue)):_e(r.POLYGON_OFFSET_FILL)}function O(R){R?te(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function K(R){R===void 0&&(R=r.TEXTURE0+Y-1),se!==R&&(r.activeTexture(R),se=R)}function ce(R,pe,ue){ue===void 0&&(se===null?ue=r.TEXTURE0+Y-1:ue=se);let oe=P[ue];oe===void 0&&(oe={type:void 0,texture:void 0},P[ue]=oe),(oe.type!==R||oe.texture!==pe)&&(se!==ue&&(r.activeTexture(ue),se=ue),r.bindTexture(R,pe||ee[R]),oe.type=R,oe.texture=pe)}function C(){const R=P[se];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function J(){try{r.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function j(){try{r.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function ae(){try{r.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Te(){try{r.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}}function ie(){try{r.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function le(){try{r.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function fe(R){Ze.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Ze.copy(R))}function Pe(R){Oe.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),Oe.copy(R))}function Ie(R,pe){let ue=l.get(pe);ue===void 0&&(ue=new WeakMap,l.set(pe,ue));let oe=ue.get(R);oe===void 0&&(oe=r.getUniformBlockIndex(pe,R.name),ue.set(R,oe))}function xe(R,pe){const oe=l.get(pe).get(R);c.get(pe)!==oe&&(r.uniformBlockBinding(pe,oe,R.__bindingPointIndex),c.set(pe,oe))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},se=null,P={},f={},h=new WeakMap,d=[],x=null,_=!1,m=null,p=null,E=null,y=null,b=null,A=null,M=null,w=new dt(0,0,0),L=0,S=!1,v=null,D=null,I=null,k=null,V=null,Ze.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:Be,setBlending:qe,setMaterial:U,setFlipSided:Ve,setCullFace:z,setLineWidth:je,setPolygonOffset:Z,setScissorTest:O,activeTexture:K,bindTexture:ce,unbindTexture:C,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:ie,texImage3D:le,updateUBOMapping:Ie,uniformBlockBinding:xe,texStorage2D:ae,texStorage3D:Te,texSubImage2D:J,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:he,scissor:fe,viewport:Pe,reset:Ne}}function W2(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,g){return d?new OffscreenCanvas(C,g):Qo("canvas")}function _(C,g,N){let J=1;const j=ce(C);if((j.width>N||j.height>N)&&(J=N/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(J*j.width),he=Math.floor(J*j.height);f===void 0&&(f=x(q,he));const ae=g?x(q,he):f;return ae.width=q,ae.height=he,ae.getContext("2d").drawImage(C,0,0,q,he),Ke("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+he+")."),ae}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,g,N,J,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=g;if(g===r.RED&&(N===r.FLOAT&&(q=r.R32F),N===r.HALF_FLOAT&&(q=r.R16F),N===r.UNSIGNED_BYTE&&(q=r.R8)),g===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.R8UI),N===r.UNSIGNED_SHORT&&(q=r.R16UI),N===r.UNSIGNED_INT&&(q=r.R32UI),N===r.BYTE&&(q=r.R8I),N===r.SHORT&&(q=r.R16I),N===r.INT&&(q=r.R32I)),g===r.RG&&(N===r.FLOAT&&(q=r.RG32F),N===r.HALF_FLOAT&&(q=r.RG16F),N===r.UNSIGNED_BYTE&&(q=r.RG8)),g===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.RG8UI),N===r.UNSIGNED_SHORT&&(q=r.RG16UI),N===r.UNSIGNED_INT&&(q=r.RG32UI),N===r.BYTE&&(q=r.RG8I),N===r.SHORT&&(q=r.RG16I),N===r.INT&&(q=r.RG32I)),g===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.RGB8UI),N===r.UNSIGNED_SHORT&&(q=r.RGB16UI),N===r.UNSIGNED_INT&&(q=r.RGB32UI),N===r.BYTE&&(q=r.RGB8I),N===r.SHORT&&(q=r.RGB16I),N===r.INT&&(q=r.RGB32I)),g===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),N===r.UNSIGNED_INT&&(q=r.RGBA32UI),N===r.BYTE&&(q=r.RGBA8I),N===r.SHORT&&(q=r.RGBA16I),N===r.INT&&(q=r.RGBA32I)),g===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),g===r.RGBA){const he=j?$o:ht.getTransfer(J);N===r.FLOAT&&(q=r.RGBA32F),N===r.HALF_FLOAT&&(q=r.RGBA16F),N===r.UNSIGNED_BYTE&&(q=he===St?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(C,g){let N;return C?g===null||g===Qr||g===Na?N=r.DEPTH24_STENCIL8:g===qi?N=r.DEPTH32F_STENCIL8:g===Ia&&(N=r.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Qr||g===Na?N=r.DEPTH_COMPONENT24:g===qi?N=r.DEPTH_COMPONENT32F:g===Ia&&(N=r.DEPTH_COMPONENT16),N}function A(C,g){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==jn&&C.minFilter!==li?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function M(C){const g=C.target;g.removeEventListener("dispose",M),L(g),g.isVideoTexture&&u.delete(g)}function w(C){const g=C.target;g.removeEventListener("dispose",w),v(g)}function L(C){const g=n.get(C);if(g.__webglInit===void 0)return;const N=C.source,J=h.get(N);if(J){const j=J[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(C),Object.keys(J).length===0&&h.delete(N)}n.remove(C)}function S(C){const g=n.get(C);r.deleteTexture(g.__webglTexture);const N=C.source,J=h.get(N);delete J[g.__cacheKey],a.memory.textures--}function v(C){const g=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let j=0;j<g.__webglFramebuffer[J].length;j++)r.deleteFramebuffer(g.__webglFramebuffer[J][j]);else r.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)r.deleteFramebuffer(g.__webglFramebuffer[J]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=C.textures;for(let J=0,j=N.length;J<j;J++){const q=n.get(N[J]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[J])}n.remove(C)}let D=0;function I(){D=0}function k(){const C=D;return C>=i.maxTextures&&Ke("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function V(C){const g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function Y(C,g){const N=n.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const J=C.image;if(J===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(N,C,g);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+g)}function H(C,g){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){ee(N,C,g);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+g)}function $(C,g){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){ee(N,C,g);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+g)}function G(C,g){const N=n.get(C);if(C.version>0&&N.__version!==C.version){te(N,C,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+g)}const se={[yc]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Ec]:r.MIRRORED_REPEAT},P={[jn]:r.NEAREST,[jp]:r.NEAREST_MIPMAP_NEAREST,[eo]:r.NEAREST_MIPMAP_LINEAR,[li]:r.LINEAR,[bl]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},me={[em]:r.NEVER,[am]:r.ALWAYS,[tm]:r.LESS,[wd]:r.LEQUAL,[nm]:r.EQUAL,[sm]:r.GEQUAL,[im]:r.GREATER,[rm]:r.NOTEQUAL};function Fe(C,g){if(g.type===qi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===li||g.magFilter===bl||g.magFilter===eo||g.magFilter===Hr||g.minFilter===li||g.minFilter===bl||g.minFilter===eo||g.minFilter===Hr)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,se[g.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,se[g.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,se[g.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[g.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[g.minFilter]),g.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===jn||g.minFilter!==eo&&g.minFilter!==Hr||g.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(C,g){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",M));const J=g.source;let j=h.get(J);j===void 0&&(j={},h.set(J,j));const q=V(g);if(q!==C.__cacheKey){j[q]===void 0&&(j[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[q].usedTimes++;const he=j[C.__cacheKey];he!==void 0&&(j[C.__cacheKey].usedTimes--,he.usedTimes===0&&S(g)),C.__cacheKey=q,C.__webglTexture=j[q].texture}return N}function Oe(C,g,N){return Math.floor(Math.floor(C/N)/g)}function Xe(C,g,N,J){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,N,J,g.data);else{q.sort((le,fe)=>le.start-fe.start);let he=0;for(let le=1;le<q.length;le++){const fe=q[he],Pe=q[le],Ie=fe.start+fe.count,xe=Oe(Pe.start,g.width,4),Ne=Oe(fe.start,g.width,4);Pe.start<=Ie+1&&xe===Ne&&Oe(Pe.start+Pe.count-1,g.width,4)===xe?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++he,q[he]=Pe)}q.length=he+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let le=0,fe=q.length;le<fe;le++){const Pe=q[le],Ie=Math.floor(Pe.start/4),xe=Math.ceil(Pe.count/4),Ne=Ie%g.width,R=Math.floor(Ie/g.width),pe=xe,ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,R),t.texSubImage2D(r.TEXTURE_2D,0,Ne,R,pe,ue,N,J,g.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function ee(C,g,N){let J=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=r.TEXTURE_3D);const j=Ze(C,g),q=g.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+N);const he=n.get(q);if(q.version!==he.__version||j===!0){t.activeTexture(r.TEXTURE0+N);const ae=ht.getPrimaries(ht.workingColorSpace),Te=g.colorSpace===fr?null:ht.getPrimaries(g.colorSpace),ie=g.colorSpace===fr||ae===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let le=_(g.image,!1,i.maxTextureSize);le=K(g,le);const fe=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type);let Ie=y(g.internalFormat,fe,Pe,g.colorSpace,g.isVideoTexture);Fe(J,g);let xe;const Ne=g.mipmaps,R=g.isVideoTexture!==!0,pe=he.__version===void 0||j===!0,ue=q.dataReady,oe=A(g,le);if(g.isDepthTexture)Ie=b(g.format===Oa,g.type),pe&&(R?t.texStorage2D(r.TEXTURE_2D,1,Ie,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,Ie,le.width,le.height,0,fe,Pe,null));else if(g.isDataTexture)if(Ne.length>0){R&&pe&&t.texStorage2D(r.TEXTURE_2D,oe,Ie,Ne[0].width,Ne[0].height);for(let re=0,ne=Ne.length;re<ne;re++)xe=Ne[re],R?ue&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,xe.width,xe.height,fe,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,re,Ie,xe.width,xe.height,0,fe,Pe,xe.data);g.generateMipmaps=!1}else R?(pe&&t.texStorage2D(r.TEXTURE_2D,oe,Ie,le.width,le.height),ue&&Xe(g,le,fe,Pe)):t.texImage2D(r.TEXTURE_2D,0,Ie,le.width,le.height,0,fe,Pe,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){R&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Ie,Ne[0].width,Ne[0].height,le.depth);for(let re=0,ne=Ne.length;re<ne;re++)if(xe=Ne[re],g.format!==xi)if(fe!==null)if(R){if(ue)if(g.layerUpdates.size>0){const ye=sh(xe.width,xe.height,g.format,g.type);for(const Ce of g.layerUpdates){const at=xe.data.subarray(Ce*ye/xe.data.BYTES_PER_ELEMENT,(Ce+1)*ye/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ce,xe.width,xe.height,1,fe,at)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,le.depth,fe,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ie,xe.width,xe.height,le.depth,0,xe.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?ue&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,le.depth,fe,Pe,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ie,xe.width,xe.height,le.depth,0,fe,Pe,xe.data)}else{R&&pe&&t.texStorage2D(r.TEXTURE_2D,oe,Ie,Ne[0].width,Ne[0].height);for(let re=0,ne=Ne.length;re<ne;re++)xe=Ne[re],g.format!==xi?fe!==null?R?ue&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,xe.width,xe.height,fe,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ie,xe.width,xe.height,0,xe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?ue&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,xe.width,xe.height,fe,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,re,Ie,xe.width,xe.height,0,fe,Pe,xe.data)}else if(g.isDataArrayTexture)if(R){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Ie,le.width,le.height,le.depth),ue)if(g.layerUpdates.size>0){const re=sh(le.width,le.height,g.format,g.type);for(const ne of g.layerUpdates){const ye=le.data.subarray(ne*re/le.data.BYTES_PER_ELEMENT,(ne+1)*re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,fe,Pe,ye)}g.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,fe,Pe,le.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,le.width,le.height,le.depth,0,fe,Pe,le.data);else if(g.isData3DTexture)R?(pe&&t.texStorage3D(r.TEXTURE_3D,oe,Ie,le.width,le.height,le.depth),ue&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,fe,Pe,le.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,le.width,le.height,le.depth,0,fe,Pe,le.data);else if(g.isFramebufferTexture){if(pe)if(R)t.texStorage2D(r.TEXTURE_2D,oe,Ie,le.width,le.height);else{let re=le.width,ne=le.height;for(let ye=0;ye<oe;ye++)t.texImage2D(r.TEXTURE_2D,ye,Ie,re,ne,0,fe,Pe,null),re>>=1,ne>>=1}}else if(Ne.length>0){if(R&&pe){const re=ce(Ne[0]);t.texStorage2D(r.TEXTURE_2D,oe,Ie,re.width,re.height)}for(let re=0,ne=Ne.length;re<ne;re++)xe=Ne[re],R?ue&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,fe,Pe,xe):t.texImage2D(r.TEXTURE_2D,re,Ie,fe,Pe,xe);g.generateMipmaps=!1}else if(R){if(pe){const re=ce(le);t.texStorage2D(r.TEXTURE_2D,oe,Ie,re.width,re.height)}ue&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Pe,le)}else t.texImage2D(r.TEXTURE_2D,0,Ie,fe,Pe,le);m(g)&&p(J),he.__version=q.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function te(C,g,N){if(g.image.length!==6)return;const J=Ze(C,g),j=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const q=n.get(j);if(j.version!==q.__version||J===!0){t.activeTexture(r.TEXTURE0+N);const he=ht.getPrimaries(ht.workingColorSpace),ae=g.colorSpace===fr?null:ht.getPrimaries(g.colorSpace),Te=g.colorSpace===fr||he===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ie=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let ne=0;ne<6;ne++)!ie&&!le?fe[ne]=_(g.image[ne],!0,i.maxCubemapSize):fe[ne]=le?g.image[ne].image:g.image[ne],fe[ne]=K(g,fe[ne]);const Pe=fe[0],Ie=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),Ne=y(g.internalFormat,Ie,xe,g.colorSpace),R=g.isVideoTexture!==!0,pe=q.__version===void 0||J===!0,ue=j.dataReady;let oe=A(g,Pe);Fe(r.TEXTURE_CUBE_MAP,g);let re;if(ie){R&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Ne,Pe.width,Pe.height);for(let ne=0;ne<6;ne++){re=fe[ne].mipmaps;for(let ye=0;ye<re.length;ye++){const Ce=re[ye];g.format!==xi?Ie!==null?R?ue&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,Ne,Ce.width,Ce.height,0,Ce.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Ce.width,Ce.height,Ie,xe,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,Ne,Ce.width,Ce.height,0,Ie,xe,Ce.data)}}}else{if(re=g.mipmaps,R&&pe){re.length>0&&oe++;const ne=ce(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Ne,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){R?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe[ne].width,fe[ne].height,Ie,xe,fe[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ne,fe[ne].width,fe[ne].height,0,Ie,xe,fe[ne].data);for(let ye=0;ye<re.length;ye++){const at=re[ye].image[ne].image;R?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,at.width,at.height,Ie,xe,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,Ne,at.width,at.height,0,Ie,xe,at.data)}}else{R?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,xe,fe[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ne,Ie,xe,fe[ne]);for(let ye=0;ye<re.length;ye++){const Ce=re[ye];R?ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,Ie,xe,Ce.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,Ne,Ie,xe,Ce.image[ne])}}}m(g)&&p(r.TEXTURE_CUBE_MAP),q.__version=j.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function _e(C,g,N,J,j,q){const he=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),Te=y(N.internalFormat,he,ae,N.colorSpace),ie=n.get(g),le=n.get(N);if(le.__renderTarget=g,!ie.__hasExternalTextures){const fe=Math.max(1,g.width>>q),Pe=Math.max(1,g.height>>q);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,q,Te,fe,Pe,g.depth,0,he,ae,null):t.texImage2D(j,q,Te,fe,Pe,0,he,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Z(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,j,le.__webglTexture,0,je(g)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,j,le.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(C,g,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),g.depthBuffer){const J=g.depthTexture,j=J&&J.isDepthTexture?J.type:null,q=b(g.stencilBuffer,j),he=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=je(g);Z(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,q,g.width,g.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,q,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,q,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,C)}else{const J=g.textures;for(let j=0;j<J.length;j++){const q=J[j],he=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),Te=y(q.internalFormat,he,ae,q.colorSpace),ie=je(g);N&&Z(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Te,g.width,g.height):Z(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Te,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,Te,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(C,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const j=J.__webglTexture,q=je(g);if(g.depthTexture.format===Fa)Z(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(g.depthTexture.format===Oa)Z(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Be(C){const g=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=J}if(C.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?Ae(g.__webglFramebuffer[0],C):Ae(g.__webglFramebuffer,C)}else if(N){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=r.createRenderbuffer(),Ue(g.__webglDepthbuffer[J],C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,q)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),Ue(g.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(C,g,N){const J=n.get(C);g!==void 0&&_e(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Be(C)}function be(C){const g=C.texture,N=n.get(C),J=n.get(g);C.addEventListener("dispose",w);const j=C.textures,q=C.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=g.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let Te=0;Te<g.mipmaps.length;Te++)N.__webglFramebuffer[ae][Te]=r.createFramebuffer()}else N.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)N.__webglFramebuffer[ae]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(he)for(let ae=0,Te=j.length;ae<Te;ae++){const ie=n.get(j[ae]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Z(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const Te=j[ae];N.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const ie=s.convert(Te.format,Te.colorSpace),le=s.convert(Te.type),fe=y(Te.internalFormat,ie,le,Te.colorSpace,C.isXRRenderTarget===!0),Pe=je(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,fe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)_e(N.__webglFramebuffer[ae][Te],C,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else _e(N.__webglFramebuffer[ae],C,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(g)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ae=0,Te=j.length;ae<Te;ae++){const ie=j[ae],le=n.get(ie);let fe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,le.__webglTexture),Fe(fe,ie),_e(N.__webglFramebuffer,C,ie,r.COLOR_ATTACHMENT0+ae,fe,0),m(ie)&&p(fe)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),Fe(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)_e(N.__webglFramebuffer[Te],C,g,r.COLOR_ATTACHMENT0,ae,Te);else _e(N.__webglFramebuffer,C,g,r.COLOR_ATTACHMENT0,ae,0);m(g)&&p(ae),t.unbindTexture()}C.depthBuffer&&Be(C)}function qe(C){const g=C.textures;for(let N=0,J=g.length;N<J;N++){const j=g[N];if(m(j)){const q=E(C),he=n.get(j).__webglTexture;t.bindTexture(q,he),p(q),t.unbindTexture()}}}const U=[],Ve=[];function z(C){if(C.samples>0){if(Z(C)===!1){const g=C.textures,N=C.width,J=C.height;let j=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(C),ae=g.length>1;if(ae)for(let ie=0;ie<g.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ie=0;ie<g.length;ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[ie]);const le=n.get(g[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,N,J,0,0,N,J,j,r.NEAREST),c===!0&&(U.length=0,Ve.length=0,U.push(r.COLOR_ATTACHMENT0+ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(U.push(q),Ve.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ie=0;ie<g.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,he.__webglColorRenderbuffer[ie]);const le=n.get(g[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const g=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function je(C){return Math.min(i.maxSamples,C.samples)}function Z(C){const g=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(C){const g=a.render.frame;u.get(C)!==g&&(u.set(C,g),C.update())}function K(C,g){const N=C.colorSpace,J=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Gs&&N!==fr&&(ht.getTransfer(N)===St?(J!==xi||j!==Ci)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",N)),g}function ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=ot,this.setupRenderTarget=be,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Z}function X2(r,e){function t(n,i=fr){let s;const a=ht.getTransfer(i);if(n===Ci)return r.UNSIGNED_BYTE;if(n===Xu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Sd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Md)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===gd)return r.BYTE;if(n===vd)return r.SHORT;if(n===Ia)return r.UNSIGNED_SHORT;if(n===Wu)return r.INT;if(n===Qr)return r.UNSIGNED_INT;if(n===qi)return r.FLOAT;if(n===$s)return r.HALF_FLOAT;if(n===bd)return r.ALPHA;if(n===yd)return r.RGB;if(n===xi)return r.RGBA;if(n===Fa)return r.DEPTH_COMPONENT;if(n===Oa)return r.DEPTH_STENCIL;if(n===Ed)return r.RED;if(n===Yu)return r.RED_INTEGER;if(n===Zu)return r.RG;if(n===Ku)return r.RG_INTEGER;if(n===ju)return r.RGBA_INTEGER;if(n===Oo||n===Bo||n===ko||n===zo)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===wc||n===Ac||n===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Pc||n===Dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Pc)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Dc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Uc||n===Ic||n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===Zc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qc)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===jc||n===$c||n===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Na?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y2=`
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

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qi({vertexShader:q2,fragmentShader:Y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ji(new pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K2 extends Js{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,x=null;const _=typeof XRWebGLBinding<"u",m=new Z2,p={},E=t.getContextAttributes();let y=null,b=null;const A=[],M=[],w=new pt;let L=null;const S=new si;S.viewport=new Nt;const v=new si;v.viewport=new Nt;const D=[S,v],I=new d_;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let te=A[ee];return te===void 0&&(te=new Hl,A[ee]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ee){let te=A[ee];return te===void 0&&(te=new Hl,A[ee]=te),te.getGripSpace()},this.getHand=function(ee){let te=A[ee];return te===void 0&&(te=new Hl,A[ee]=te),te.getHandSpace()};function Y(ee){const te=M.indexOf(ee.inputSource);if(te===-1)return;const _e=A[te];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,l||a),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function H(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",$);for(let ee=0;ee<A.length;ee++){const te=M[ee];te!==null&&(M[ee]=null,A[ee].disconnect(te))}k=null,V=null,m.reset();for(const ee in p)delete p[ee];e.setRenderTarget(y),d=null,h=null,f=null,i=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",H),i.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,Ae=null;E.depth&&(Ae=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?Oa:Fa,Ue=E.stencil?Na:Qr);const Be={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Be),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new es(h.textureWidth,h.textureHeight,{format:xi,type:Ci,depthTexture:new Od(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new es(d.framebufferWidth,d.framebufferHeight,{format:xi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(ee){for(let te=0;te<ee.removed.length;te++){const _e=ee.removed[te],Ue=M.indexOf(_e);Ue>=0&&(M[Ue]=null,A[Ue].disconnect(_e))}for(let te=0;te<ee.added.length;te++){const _e=ee.added[te];let Ue=M.indexOf(_e);if(Ue===-1){for(let Be=0;Be<A.length;Be++)if(Be>=M.length){M.push(_e),Ue=Be;break}else if(M[Be]===null){M[Be]=_e,Ue=Be;break}if(Ue===-1)break}const Ae=A[Ue];Ae&&Ae.connect(_e)}}const G=new Q,se=new Q;function P(ee,te,_e){G.setFromMatrixPosition(te.matrixWorld),se.setFromMatrixPosition(_e.matrixWorld);const Ue=G.distanceTo(se),Ae=te.projectionMatrix.elements,Be=_e.projectionMatrix.elements,ot=Ae[14]/(Ae[10]-1),be=Ae[14]/(Ae[10]+1),qe=(Ae[9]+1)/Ae[5],U=(Ae[9]-1)/Ae[5],Ve=(Ae[8]-1)/Ae[0],z=(Be[8]+1)/Be[0],je=ot*Ve,Z=ot*z,O=Ue/(-Ve+z),K=O*-Ve;if(te.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(K),ee.translateZ(O),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ce=ot+O,C=be+O,g=je-K,N=Z+(Ue-K),J=qe*be/C*ce,j=U*be/C*ce;ee.projectionMatrix.makePerspective(g,N,J,j,ce,C),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function me(ee,te){te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let te=ee.near,_e=ee.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),I.near=v.near=S.near=te,I.far=v.far=S.far=_e,(k!==I.near||V!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,V=I.far),I.layers.mask=ee.layers.mask|6,S.layers.mask=I.layers.mask&3,v.layers.mask=I.layers.mask&5;const Ue=ee.parent,Ae=I.cameras;me(I,Ue);for(let Be=0;Be<Ae.length;Be++)me(Ae[Be],Ue);Ae.length===2?P(I,S,v):I.projectionMatrix.copy(S.projectionMatrix),Fe(ee,I,Ue)};function Fe(ee,te,_e){_e===null?ee.matrix.copy(te.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(te.projectionMatrix),ee.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ka*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(ee){c=ee,h!==null&&(h.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(ee){return p[ee]};let Ze=null;function Oe(ee,te){if(u=te.getViewerPose(l||a),x=te,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ue=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,Ue=!0);for(let be=0;be<_e.length;be++){const qe=_e[be];let U=null;if(d!==null)U=d.getViewport(qe);else{const z=f.getViewSubImage(h,qe);U=z.viewport,be===0&&(e.setRenderTargetTextures(b,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(b))}let Ve=D[be];Ve===void 0&&(Ve=new si,Ve.layers.enable(be),Ve.viewport=new Nt,D[be]=Ve),Ve.matrix.fromArray(qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(U.x,U.y,U.width,U.height),be===0&&(I.matrix.copy(Ve.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ue===!0&&I.cameras.push(Ve)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const be=f.getDepthInformation(_e[0]);be&&be.isValid&&be.texture&&m.init(be,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let be=0;be<_e.length;be++){const qe=_e[be].camera;if(qe){let U=p[qe];U||(U=new Bd,p[qe]=U);const Ve=f.getCameraImage(qe);U.sourceTexture=Ve}}}}for(let _e=0;_e<A.length;_e++){const Ue=M[_e],Ae=A[_e];Ue!==null&&Ae!==void 0&&Ae.update(Ue,te,l||a)}Ze&&Ze(ee,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),x=null}const Xe=new Vd;Xe.setAnimationLoop(Oe),this.setAnimationLoop=function(ee){Ze=ee},this.dispose=function(){}}}const Ur=new Ri,j2=new Vt;function $2(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Id(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,b=E.envMapRotation;y&&(m.envMap.value=y,Ur.copy(b),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),m.envMapRotation.value.setFromMatrix4(j2.makeRotationFromEuler(Ur)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function J2(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const b=y.program;n.uniformBlockBinding(E,b)}function l(E,y){let b=i[E.id];b===void 0&&(x(E),b=u(E),i[E.id]=b,E.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(E,A);const M=e.render.frame;s[E.id]!==M&&(h(E),s[E.id]=M)}function u(E){const y=f();E.__bindingPointIndex=y;const b=r.createBuffer(),A=E.__size,M=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=i[E.id],b=E.uniforms,A=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,w=b.length;M<w;M++){const L=Array.isArray(b[M])?b[M]:[b[M]];for(let S=0,v=L.length;S<v;S++){const D=L[S];if(d(D,M,S,A)===!0){const I=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let Y=0;Y<k.length;Y++){const H=k[Y],$=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,I+V,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(E,y,b,A){const M=E.value,w=y+"_"+b;if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:A[w]=M.clone(),!0;{const L=A[w];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return A[w]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function x(E){const y=E.uniforms;let b=0;const A=16;for(let w=0,L=y.length;w<L;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,D=S.length;v<D;v++){const I=S[v],k=Array.isArray(I.value)?I.value:[I.value];for(let V=0,Y=k.length;V<Y;V++){const H=k[V],$=_(H),G=b%A,se=G%$.boundary,P=G+se;b+=se,P!==0&&A-P<$.storage&&(b+=A-P),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=$.storage}}}const M=b%A;return M>0&&(b+=A-M),E.__size=b,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}const Q2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Bi=null;function e1(){return Bi===null&&(Bi=new Jm(Q2,32,32,Zu,$s),Bi.minFilter=li,Bi.magFilter=li,Bi.wrapS=Xi,Bi.wrapT=Xi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class t1{constructor(e={}){const{canvas:t=om(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const x=new Set([ju,Ku,Yu]),_=new Set([Ci,Qr,Ia,Na,Xu,qu]),m=new Uint32Array(4),p=new Int32Array(4);let E=null,y=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=Wn;let L=0,S=0,v=null,D=-1,I=null;const k=new Nt,V=new Nt;let Y=null;const H=new dt(0);let $=0,G=t.width,se=t.height,P=1,me=null,Fe=null;const Ze=new Nt(0,0,G,se),Oe=new Nt(0,0,G,se);let Xe=!1;const ee=new Qu;let te=!1,_e=!1;const Ue=new Vt,Ae=new Q,Be=new Nt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function qe(){return v===null?P:1}let U=n;function Ve(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hu}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){const B="webgl2";if(U=Ve(B,T),U===null)throw Ve(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let z,je,Z,O,K,ce,C,g,N,J,j,q,he,ae,Te,ie,le,fe,Pe,Ie,xe,Ne,R,pe;function ue(){z=new cv(U),z.init(),Ne=new X2(U,z),je=new ev(U,z,e,Ne),Z=new H2(U,z),je.reversedDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),O=new hv(U),K=new P2,ce=new W2(U,z,Z,K,je,Ne,O),C=new nv(M),g=new lv(M),N=new __(U),R=new Jg(U,N),J=new uv(U,N,O,R),j=new pv(U,J,N,O),Pe=new dv(U,je,ce),ie=new tv(K),q=new R2(M,C,g,z,je,R,ie),he=new $2(M,K),ae=new L2,Te=new B2(z),fe=new $g(M,C,g,Z,j,d,c),le=new V2(M,j,je),pe=new J2(U,O,je,Z),Ie=new Qg(U,z,O),xe=new fv(U,z,O),O.programs=q.programs,M.capabilities=je,M.extensions=z,M.properties=K,M.renderLists=ae,M.shadowMap=le,M.state=Z,M.info=O}ue();const oe=new K2(M,U);this.xr=oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=z.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=z.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(G,se,!1))},this.getSize=function(T){return T.set(G,se)},this.setSize=function(T,B,X=!0){if(oe.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,se=B,t.width=Math.floor(T*P),t.height=Math.floor(B*P),X===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(G*P,se*P).floor()},this.setDrawingBufferSize=function(T,B,X){G=T,se=B,P=X,t.width=Math.floor(T*X),t.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(Ze)},this.setViewport=function(T,B,X,W){T.isVector4?Ze.set(T.x,T.y,T.z,T.w):Ze.set(T,B,X,W),Z.viewport(k.copy(Ze).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(Oe)},this.setScissor=function(T,B,X,W){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,B,X,W),Z.scissor(V.copy(Oe).multiplyScalar(P).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){Z.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,X=!0){let W=0;if(T){let F=!1;if(v!==null){const de=v.texture.format;F=x.has(de)}if(F){const de=v.texture.type,Ee=_.has(de),we=fe.getClearColor(),ge=fe.getClearAlpha(),ze=we.r,Ge=we.g,Le=we.b;Ee?(m[0]=ze,m[1]=Ge,m[2]=Le,m[3]=ge,U.clearBufferuiv(U.COLOR,0,m)):(p[0]=ze,p[1]=Ge,p[2]=Le,p[3]=ge,U.clearBufferiv(U.COLOR,0,p))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT),X&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),fe.dispose(),ae.dispose(),Te.dispose(),K.dispose(),C.dispose(),g.dispose(),j.dispose(),R.dispose(),pe.dispose(),q.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ye),oe.removeEventListener("sessionend",ke),He.stop()};function re(T){T.preventDefault(),Bf("WebGLRenderer: Context Lost."),w=!0}function ne(){Bf("WebGLRenderer: Context Restored."),w=!1;const T=O.autoReset,B=le.enabled,X=le.autoUpdate,W=le.needsUpdate,F=le.type;ue(),O.autoReset=T,le.enabled=B,le.autoUpdate=X,le.needsUpdate=W,le.type=F}function ye(T){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ce(T){const B=T.target;B.removeEventListener("dispose",Ce),at(B)}function at(T){ve(T),K.remove(T)}function ve(T){const B=K.get(T).programs;B!==void 0&&(B.forEach(function(X){q.releaseProgram(X)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,W,F,de){B===null&&(B=ot);const Ee=F.isMesh&&F.matrixWorld.determinant()<0,we=Tt(T,B,X,W,F);Z.setMaterial(W,Ee);let ge=X.index,ze=1;if(W.wireframe===!0){if(ge=J.getWireframeAttribute(X),ge===void 0)return;ze=2}const Ge=X.drawRange,Le=X.attributes.position;let lt=Ge.start*ze,vt=(Ge.start+Ge.count)*ze;de!==null&&(lt=Math.max(lt,de.start*ze),vt=Math.min(vt,(de.start+de.count)*ze)),ge!==null?(lt=Math.max(lt,0),vt=Math.min(vt,ge.count)):Le!=null&&(lt=Math.max(lt,0),vt=Math.min(vt,Le.count));const Ut=vt-lt;if(Ut<0||Ut===1/0)return;R.setup(F,W,we,X,ge);let It,Mt=Ie;if(ge!==null&&(It=N.get(ge),Mt=xe,Mt.setIndex(It)),F.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*qe()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(F.isLine){let We=W.linewidth;We===void 0&&(We=1),Z.setLineWidth(We*qe()),F.isLineSegments?Mt.setMode(U.LINES):F.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else F.isPoints?Mt.setMode(U.POINTS):F.isSprite&&Mt.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ba("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))Mt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const We=F._multiDrawStarts,Ct=F._multiDrawCounts,ft=F._multiDrawCount,Bn=ge?N.get(ge).bytesPerElement:1,os=K.get(W).currentProgram.getUniforms();for(let kn=0;kn<ft;kn++)os.setValue(U,"_gl_DrawID",kn),Mt.render(We[kn]/Bn,Ct[kn])}else if(F.isInstancedMesh)Mt.renderInstances(lt,Ut,F.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ct=Math.min(X.instanceCount,We);Mt.renderInstances(lt,Ut,Ct)}else Mt.render(lt,Ut)};function De(T,B,X){T.transparent===!0&&T.side===Hi&&T.forceSinglePass===!1?(T.side=Ln,T.needsUpdate=!0,gt(T,B,X),T.side=br,T.needsUpdate=!0,gt(T,B,X),T.side=Hi):gt(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),y=Te.get(X),y.init(B),A.push(y),X.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),T!==X&&T.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),y.setupLights();const W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const de=F.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const we=de[Ee];De(we,X,F),W.add(we)}else De(de,X,F),W.add(de)}),y=A.pop(),W},this.compileAsync=function(T,B,X=null){const W=this.compile(T,B,X);return new Promise(F=>{function de(){if(W.forEach(function(Ee){K.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){F(T);return}setTimeout(de,10)}z.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $e=null;function Se(T){$e&&$e(T)}function Ye(){He.stop()}function ke(){He.start()}const He=new Vd;He.setAnimationLoop(Se),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(T){$e=T,oe.setAnimationLoop(T),T===null?He.stop():He.start()},oe.addEventListener("sessionstart",Ye),oe.addEventListener("sessionend",ke),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,v),y=Te.get(T,A.length),y.init(B),A.push(y),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(Ue,yi,B.reversedDepth),_e=this.localClippingEnabled,te=ie.init(this.clippingPlanes,_e),E=ae.get(T,b.length),E.init(),b.push(E),oe.enabled===!0&&oe.isPresenting===!0){const de=M.xr.getDepthSensingMesh();de!==null&&Lt(de,B,-1/0,M.sortObjects)}Lt(T,B,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(me,Fe),be=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,be&&fe.addToRenderList(E,T),this.info.render.frame++,te===!0&&ie.beginShadows();const X=y.state.shadowsArray;le.render(X,T,B),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=E.opaque,F=E.transmissive;if(y.setupLights(),B.isArrayCamera){const de=B.cameras;if(F.length>0)for(let Ee=0,we=de.length;Ee<we;Ee++){const ge=de[Ee];wt(W,F,T,ge)}be&&fe.render(T);for(let Ee=0,we=de.length;Ee<we;Ee++){const ge=de[Ee];nt(E,T,ge,ge.viewport)}}else F.length>0&&wt(W,F,T,B),be&&fe.render(T),nt(E,T,B);v!==null&&S===0&&(ce.updateMultisampleRenderTarget(v),ce.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(M,T,B),R.resetDefaultState(),D=-1,I=null,A.pop(),A.length>0?(y=A[A.length-1],te===!0&&ie.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?E=b[b.length-1]:E=null};function Lt(T,B,X,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)y.pushLight(T),T.castShadow&&y.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){W&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const Ee=j.update(T),we=T.material;we.visible&&E.push(T,Ee,we,X,Be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Ee=j.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Be.copy(Ee.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(we)){const ge=Ee.groups;for(let ze=0,Ge=ge.length;ze<Ge;ze++){const Le=ge[ze],lt=we[Le.materialIndex];lt&&lt.visible&&E.push(T,Ee,lt,X,Be.z,Le)}}else we.visible&&E.push(T,Ee,we,X,Be.z,null)}}const de=T.children;for(let Ee=0,we=de.length;Ee<we;Ee++)Lt(de[Ee],B,X,W)}function nt(T,B,X,W){const{opaque:F,transmissive:de,transparent:Ee}=T;y.setupLightsView(X),te===!0&&ie.setGlobalState(M.clippingPlanes,X),W&&Z.viewport(k.copy(W)),F.length>0&&Ot(F,B,X),de.length>0&&Ot(de,B,X),Ee.length>0&&Ot(Ee,B,X),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function wt(T,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[W.id]===void 0&&(y.state.transmissionRenderTarget[W.id]=new es(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?$s:Ci,minFilter:Hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const de=y.state.transmissionRenderTarget[W.id],Ee=W.viewport||k;de.setSize(Ee.z*M.transmissionResolutionScale,Ee.w*M.transmissionResolutionScale);const we=M.getRenderTarget(),ge=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(de),M.getClearColor(H),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),be&&fe.render(X);const Ge=M.toneMapping;M.toneMapping=gr;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),te===!0&&ie.setGlobalState(M.clippingPlanes,W),Ot(T,X,W),ce.updateMultisampleRenderTarget(de),ce.updateRenderTargetMipmap(de),z.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let vt=0,Ut=B.length;vt<Ut;vt++){const It=B[vt],{object:Mt,geometry:We,material:Ct,group:ft}=It;if(Ct.side===Hi&&Mt.layers.test(W.layers)){const Bn=Ct.side;Ct.side=Ln,Ct.needsUpdate=!0,Et(Mt,X,W,We,Ct,ft),Ct.side=Bn,Ct.needsUpdate=!0,lt=!0}}lt===!0&&(ce.updateMultisampleRenderTarget(de),ce.updateRenderTargetMipmap(de))}M.setRenderTarget(we,ge,ze),M.setClearColor(H,$),Le!==void 0&&(W.viewport=Le),M.toneMapping=Ge}function Ot(T,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let F=0,de=T.length;F<de;F++){const Ee=T[F],{object:we,geometry:ge,group:ze}=Ee;let Ge=Ee.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),we.layers.test(X.layers)&&Et(we,B,X,ge,Ge,ze)}}function Et(T,B,X,W,F,de){T.onBeforeRender(M,B,X,W,F,de),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(M,B,X,W,T,de),F.transparent===!0&&F.side===Hi&&F.forceSinglePass===!1?(F.side=Ln,F.needsUpdate=!0,M.renderBufferDirect(X,B,W,F,T,de),F.side=br,F.needsUpdate=!0,M.renderBufferDirect(X,B,W,F,T,de),F.side=Hi):M.renderBufferDirect(X,B,W,F,T,de),T.onAfterRender(M,B,X,W,F,de)}function gt(T,B,X){B.isScene!==!0&&(B=ot);const W=K.get(T),F=y.state.lights,de=y.state.shadowsArray,Ee=F.state.version,we=q.getParameters(T,F.state,de,B,X),ge=q.getProgramCacheKey(we);let ze=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?g:C).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",Ce),ze=new Map,W.programs=ze);let Ge=ze.get(ge);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Ee)return Cn(T,we),Ge}else we.uniforms=q.getUniforms(T),T.onBeforeCompile(we,M),Ge=q.acquireProgram(we,ge),ze.set(ge,Ge),W.uniforms=we.uniforms;const Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ie.uniform),Cn(T,we),W.needsLights=ti(T),W.lightsStateVersion=Ee,W.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function mt(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Vo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Cn(T,B){const X=K.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Tt(T,B,X,W,F){B.isScene!==!0&&(B=ot),ce.resetTextureUnits();const de=B.fog,Ee=W.isMeshStandardMaterial?B.environment:null,we=v===null?M.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Gs,ge=(W.isMeshStandardMaterial?g:C).get(W.envMap||Ee),ze=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color;let Ut=gr;W.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const It=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=It!==void 0?It.length:0,We=K.get(W),Ct=y.state.lights;if(te===!0&&(_e===!0||T!==I)){const _n=T===I&&W.id===D;ie.setState(W,T,_n)}let ft=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ct.state.version||We.outputColorSpace!==we||F.isBatchedMesh&&We.batching===!1||!F.isBatchedMesh&&We.batching===!0||F.isBatchedMesh&&We.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&We.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&We.instancing===!1||!F.isInstancedMesh&&We.instancing===!0||F.isSkinnedMesh&&We.skinning===!1||!F.isSkinnedMesh&&We.skinning===!0||F.isInstancedMesh&&We.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&We.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&We.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&We.instancingMorph===!1&&F.morphTexture!==null||We.envMap!==ge||W.fog===!0&&We.fog!==de||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ie.numPlanes||We.numIntersection!==ie.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Ge||We.morphTargets!==Le||We.morphNormals!==lt||We.morphColors!==vt||We.toneMapping!==Ut||We.morphTargetsCount!==Mt)&&(ft=!0):(ft=!0,We.__version=W.version);let Bn=We.currentProgram;ft===!0&&(Bn=gt(W,B,F));let os=!1,kn=!1,na=!1;const Rt=Bn.getUniforms(),Rn=We.uniforms;if(Z.useProgram(Bn.program)&&(os=!0,kn=!0,na=!0),W.id!==D&&(D=W.id,kn=!0),os||I!==T){Z.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Rt.setValue(U,"projectionMatrix",T.projectionMatrix),Rt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Pn=Rt.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,Ae.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,kn=!0,na=!0)}if(F.isSkinnedMesh){Rt.setOptional(U,F,"bindMatrix"),Rt.setOptional(U,F,"bindMatrixInverse");const _n=F.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Rt.setValue(U,"boneTexture",_n.boneTexture,ce))}F.isBatchedMesh&&(Rt.setOptional(U,F,"batchingTexture"),Rt.setValue(U,"batchingTexture",F._matricesTexture,ce),Rt.setOptional(U,F,"batchingIdTexture"),Rt.setValue(U,"batchingIdTexture",F._indirectTexture,ce),Rt.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(U,"batchingColorTexture",F._colorsTexture,ce));const ni=X.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Pe.update(F,X,Bn),(kn||We.receiveShadow!==F.receiveShadow)&&(We.receiveShadow=F.receiveShadow,Rt.setValue(U,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Rn.envMap.value=ge,Rn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Rn.envMapIntensity.value=B.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=e1()),kn&&(Rt.setValue(U,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&mn(Rn,na),de&&W.fog===!0&&he.refreshFogUniforms(Rn,de),he.refreshMaterialUniforms(Rn,W,P,se,y.state.transmissionRenderTarget[T.id]),Vo.upload(U,mt(We),Rn,ce)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vo.upload(U,mt(We),Rn,ce),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Rt.setValue(U,"center",F.center),Rt.setValue(U,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(U,"normalMatrix",F.normalMatrix),Rt.setValue(U,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _n=W.uniformsGroups;for(let Pn=0,Ml=_n.length;Pn<Ml;Pn++){const Ar=_n[Pn];pe.update(Ar,Bn),pe.bind(Ar,Bn)}}return Bn}function mn(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function ti(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,B,X){const W=K.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),K.get(T.texture).__webglTexture=B,K.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const X=K.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const qt=U.createFramebuffer();this.setRenderTarget=function(T,B=0,X=0){v=T,L=B,S=X;let W=!0,F=null,de=!1,Ee=!1;if(T){const ge=K.get(T);if(ge.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)ce.setupRenderTarget(T);else if(ge.__hasExternalTextures)ce.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(ge.__boundDepthTexture!==Le){if(Le!==null&&K.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Ge=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?F=Ge[B][X]:F=Ge[B],de=!0):T.samples>0&&ce.useMultisampledRTT(T)===!1?F=K.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[X]:F=Ge,k.copy(T.viewport),V.copy(T.scissor),Y=T.scissorTest}else k.copy(Ze).multiplyScalar(P).floor(),V.copy(Oe).multiplyScalar(P).floor(),Y=Xe;if(X!==0&&(F=qt),Z.bindFramebuffer(U.FRAMEBUFFER,F)&&W&&Z.drawBuffers(T,F),Z.viewport(k),Z.scissor(V),Z.setScissorTest(Y),de){const ge=K.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,X)}else if(Ee){const ge=B;for(let ze=0;ze<T.textures.length;ze++){const Ge=K.get(T.textures[ze]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ze,Ge.__webglTexture,X,ge)}}else if(T!==null&&X!==0){const ge=K.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,X)}D=-1},this.readRenderTargetPixels=function(T,B,X,W,F,de,Ee,we=0){if(!(T&&T.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(ge=ge[Ee]),ge){Z.bindFramebuffer(U.FRAMEBUFFER,ge);try{const ze=T.textures[we],Ge=ze.format,Le=ze.type;if(!je.textureFormatReadable(Ge)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Le)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&X>=0&&X<=T.height-F&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we),U.readPixels(B,X,W,F,Ne.convert(Ge),Ne.convert(Le),de))}finally{const ze=v!==null?K.get(v).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,B,X,W,F,de,Ee,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(ge=ge[Ee]),ge)if(B>=0&&B<=T.width-W&&X>=0&&X<=T.height-F){Z.bindFramebuffer(U.FRAMEBUFFER,ge);const ze=T.textures[we],Ge=ze.format,Le=ze.type;if(!je.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we),U.readPixels(B,X,W,F,Ne.convert(Ge),Ne.convert(Le),0);const vt=v!==null?K.get(v).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,vt);const Ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await lm(U,Ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.deleteBuffer(lt),U.deleteSync(Ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,X=0){const W=Math.pow(2,-X),F=Math.floor(T.image.width*W),de=Math.floor(T.image.height*W),Ee=B!==null?B.x:0,we=B!==null?B.y:0;ce.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Ee,we,F,de),Z.unbindTexture()};const Yt=U.createFramebuffer(),Jt=U.createFramebuffer();this.copyTextureToTexture=function(T,B,X=null,W=null,F=0,de=null){de===null&&(F!==0?(Ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=F,F=0):de=0);let Ee,we,ge,ze,Ge,Le,lt,vt,Ut;const It=T.isCompressedTexture?T.mipmaps[de]:T.image;if(X!==null)Ee=X.max.x-X.min.x,we=X.max.y-X.min.y,ge=X.isBox3?X.max.z-X.min.z:1,ze=X.min.x,Ge=X.min.y,Le=X.isBox3?X.min.z:0;else{const ni=Math.pow(2,-F);Ee=Math.floor(It.width*ni),we=Math.floor(It.height*ni),T.isDataArrayTexture?ge=It.depth:T.isData3DTexture?ge=Math.floor(It.depth*ni):ge=1,ze=0,Ge=0,Le=0}W!==null?(lt=W.x,vt=W.y,Ut=W.z):(lt=0,vt=0,Ut=0);const Mt=Ne.convert(B.format),We=Ne.convert(B.type);let Ct;B.isData3DTexture?(ce.setTexture3D(B,0),Ct=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ce.setTexture2DArray(B,0),Ct=U.TEXTURE_2D_ARRAY):(ce.setTexture2D(B,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ft=U.getParameter(U.UNPACK_ROW_LENGTH),Bn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),os=U.getParameter(U.UNPACK_SKIP_PIXELS),kn=U.getParameter(U.UNPACK_SKIP_ROWS),na=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Le);const Rt=T.isDataArrayTexture||T.isData3DTexture,Rn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const ni=K.get(T),_n=K.get(B),Pn=K.get(ni.__renderTarget),Ml=K.get(_n.__renderTarget);Z.bindFramebuffer(U.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ml.__webglFramebuffer);for(let Ar=0;Ar<ge;Ar++)Rt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(T).__webglTexture,F,Le+Ar),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(B).__webglTexture,de,Ut+Ar)),U.blitFramebuffer(ze,Ge,Ee,we,lt,vt,Ee,we,U.DEPTH_BUFFER_BIT,U.NEAREST);Z.bindFramebuffer(U.READ_FRAMEBUFFER,null),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||K.has(T)){const ni=K.get(T),_n=K.get(B);Z.bindFramebuffer(U.READ_FRAMEBUFFER,Yt),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Jt);for(let Pn=0;Pn<ge;Pn++)Rt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ni.__webglTexture,F,Le+Pn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ni.__webglTexture,F),Rn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_n.__webglTexture,de,Ut+Pn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_n.__webglTexture,de),F!==0?U.blitFramebuffer(ze,Ge,Ee,we,lt,vt,Ee,we,U.COLOR_BUFFER_BIT,U.NEAREST):Rn?U.copyTexSubImage3D(Ct,de,lt,vt,Ut+Pn,ze,Ge,Ee,we):U.copyTexSubImage2D(Ct,de,lt,vt,ze,Ge,Ee,we);Z.bindFramebuffer(U.READ_FRAMEBUFFER,null),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rn?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ct,de,lt,vt,Ut,Ee,we,ge,Mt,We,It.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,de,lt,vt,Ut,Ee,we,ge,Mt,It.data):U.texSubImage3D(Ct,de,lt,vt,Ut,Ee,we,ge,Mt,We,It):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,lt,vt,Ee,we,Mt,We,It.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,lt,vt,It.width,It.height,Mt,It.data):U.texSubImage2D(U.TEXTURE_2D,de,lt,vt,Ee,we,Mt,We,It);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,os),U.pixelStorei(U.UNPACK_SKIP_ROWS,kn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,na),de===0&&B.generateMipmaps&&U.generateMipmap(Ct),Z.unbindTexture()},this.initRenderTarget=function(T){K.get(T).__webglFramebuffer===void 0&&ce.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ce.setTextureCube(T,0):T.isData3DTexture?ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ce.setTexture2DArray(T,0):ce.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){L=0,S=0,v=null,Z.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class n1 extends ef{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new l_(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const x=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(x,u,_))return!1;return!0}function n(l,u,f){for(let h=0,d=l.length;h<d;h++)if(l[h]!==u.getUint8(f+h))return!1;return!0}function i(l){const u=new DataView(l),f=u.getUint32(80,!0);let h,d,x,_=!1,m,p,E,y,b;for(let D=0;D<70;D++)u.getUint32(D,!1)==1129270351&&u.getUint8(D+4)==82&&u.getUint8(D+5)==61&&(_=!0,m=new Float32Array(f*3*3),p=u.getUint8(D+6)/255,E=u.getUint8(D+7)/255,y=u.getUint8(D+8)/255,b=u.getUint8(D+9)/255);const A=84,M=12*4+2,w=new Pi,L=new Float32Array(f*3*3),S=new Float32Array(f*3*3),v=new dt;for(let D=0;D<f;D++){const I=A+D*M,k=u.getFloat32(I,!0),V=u.getFloat32(I+4,!0),Y=u.getFloat32(I+8,!0);if(_){const H=u.getUint16(I+48,!0);(H&32768)===0?(h=(H&31)/31,d=(H>>5&31)/31,x=(H>>10&31)/31):(h=p,d=E,x=y)}for(let H=1;H<=3;H++){const $=I+H*12,G=D*3*3+(H-1)*3;L[G]=u.getFloat32($,!0),L[G+1]=u.getFloat32($+4,!0),L[G+2]=u.getFloat32($+8,!0),S[G]=k,S[G+1]=V,S[G+2]=Y,_&&(v.setRGB(h,d,x,Wn),m[G]=v.r,m[G+1]=v.g,m[G+2]=v.b)}}return w.setAttribute("position",new $n(L,3)),w.setAttribute("normal",new $n(S,3)),_&&(w.setAttribute("color",new $n(m,3)),w.hasColors=!0,w.alpha=b),w}function s(l){const u=new Pi,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let x=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),p=new RegExp("normal"+_+_+_,"g"),E=[],y=[],b=[],A=new Q;let M,w=0,L=0,S=0;for(;(M=f.exec(l))!==null;){L=S;const v=M[0],D=(M=d.exec(v))!==null?M[1]:"";for(b.push(D);(M=h.exec(v))!==null;){let V=0,Y=0;const H=M[0];for(;(M=p.exec(H))!==null;)A.x=parseFloat(M[1]),A.y=parseFloat(M[2]),A.z=parseFloat(M[3]),Y++;for(;(M=m.exec(H))!==null;)E.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),y.push(A.x,A.y,A.z),V++,S++;Y!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),V!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const I=L,k=S-L;u.userData.groupNames=b,u.addGroup(I,k,w),w++}return u.setAttribute("position",new ji(E,3)),u.setAttribute("normal",new ji(y,3)),u}function a(l){return typeof l!="string"?new TextDecoder().decode(l):l}function o(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=o(e);return t(c)?i(c):s(a(e))}}function i1(){const r=document.createElement("header");r.className="header";const e=document.createElement("article");e.className="main-header-article";const t=document.createElement("section");t.className="left-section";const n=document.createElement("div");n.className="first-text",n.textContent="Услуги эвакуатора";const i=document.createElement("div");i.className="second-text",i.textContent="Круглосуточная и безопасная перевозка вашего автомобиля по Луганску и области.";const s=document.createElement("a");s.href="tel:+00000000000",s.textContent="Вызвать эвакуатор",s.className="evakuator-button",t.append(n,i,s);const a=document.createElement("section");a.className="right-section";const o=document.createElement("div");return o.className="three-container",a.appendChild(o),e.append(t,a),r.appendChild(e),setTimeout(()=>r1(o),0),r}function r1(r){r.clientHeight||(r.style.height="400px");const e=new $m,t=new si(35,r.clientWidth/r.clientHeight,.01,1e3);t.position.set(0,.8,3),t.lookAt(0,0,0);const n=new t1({antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(r.clientWidth,r.clientHeight),r.appendChild(n.domElement),e.add(new h_(16777215,.9));const i=new f_(16777215,1);i.position.set(3,5,2),e.add(i);const s=new n1;let a=null;const o=new URL("/evweb/assets/Gazelle_wrecker-Bo7EFMqz.stl",import.meta.url).href;console.log("STL path:",o),s.load(o,u=>{u.rotateX(-Math.PI/2),u.computeVertexNormals(),u.center();const f=new n_({color:13421772,metalness:.2,roughness:.75});a=new Ji(u,f),e.add(a);const h=new dl;new ea().setFromObject(a).getBoundingSphere(h);const d=1.25,x=Tm.degToRad(t.fov),_=h.radius*d/Math.sin(x/2);t.position.set(0,h.radius*.25,_),t.near=Math.max(_-h.radius*5,.01),t.far=_+h.radius*5,t.updateProjectionMatrix(),t.lookAt(0,0,0),a.rotation.y=Math.PI*.25,console.log("STL загружен успешно")},void 0,u=>console.error("Ошибка загрузки STL:",u));const c=new p_;n.setAnimationLoop(()=>{const u=c.getElapsedTime();a&&(a.rotation.y+=.003,a.position.y=Math.sin(u*.6)*.02),n.render(e,t)});const l=()=>{const u=Math.max(r.clientWidth,10),f=Math.max(r.clientHeight,10);t.aspect=u/f,t.updateProjectionMatrix(),n.setSize(u,f,!1)};window.addEventListener("resize",l),"ResizeObserver"in window&&new ResizeObserver(l).observe(r)}const eu="/evweb/assets/GAZ-D8g6Acs3.webp",tu="/evweb/assets/Gazelle_wrecker-Bo7EFMqz.stl",nu="/evweb/assets/WhatsApp-BlSfG_3n.webp",iu="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5%205.51C18.3%204.92%2017.91%204.5%2017.25%204.5H6.75C6.09%204.5%205.71%204.92%205.5%205.51L3.5%2011.25V18.75C3.5%2019.3%203.7%2019.5%204.25%2019.5H4.75C5.3%2019.5%205.5%2019.3%205.5%2018.75V17.5H18.5V18.75C18.5%2019.3%2018.7%2019.5%2019.25%2019.5H19.75C20.3%2019.5%2020.5%2019.3%2020.5%2018.75V11.25L18.5%205.51Z'%20stroke='%23000000'/%3e%3cpath%20d='M6.5%2014.5C5.94667%2014.5%205.5%2014.0533%205.5%2013.5C5.5%2012.9467%205.94667%2012.5%206.5%2012.5C7.05333%2012.5%207.5%2012.9467%207.5%2013.5C7.5%2014.0533%207.05333%2014.5%206.5%2014.5Z'%20stroke='%23000000'/%3e%3cpath%20d='M17.5%2014.5C16.9467%2014.5%2016.5%2014.0533%2016.5%2013.5C16.5%2012.9467%2016.9467%2012.5%2017.5%2012.5C18.0533%2012.5%2018.5%2012.9467%2018.5%2013.5C18.5%2014.0533%2018.0533%2014.5%2017.5%2014.5Z'%20stroke='%23000000'/%3e%3cpath%20d='M5.75%209.5L7%206H17L18.25%209.5H5.75Z'%20stroke='%23000000'%20stroke-linejoin='round'/%3e%3c/svg%3e",ru="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%200c-8.836%200-16%207.163-16%2016s7.163%2016%2016%2016c8.837%200%2016-7.163%2016-16s-7.163-16-16-16zM16%2030.032c-7.72%200-14-6.312-14-14.032s6.28-14%2014-14%2014%206.28%2014%2014-6.28%2014.032-14%2014.032zM22.386%2010.146l-9.388%209.446-4.228-4.227c-0.39-0.39-1.024-0.39-1.415%200s-0.391%201.023%200%201.414l4.95%204.95c0.39%200.39%201.024%200.39%201.415%200%200.045-0.045%200.084-0.094%200.119-0.145l9.962-10.024c0.39-0.39%200.39-1.024%200-1.415s-1.024-0.39-1.415%200z'%3e%3c/path%3e%3c/svg%3e",su="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3ccircle%20cx='12'%20cy='12'%20r='9'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%206V12L7.5%207.5'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",au="/evweb/assets/ev-BGwlkjB_.jpg",ou="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-3.5%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3email%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-414.000000,%20-261.000000)'%20fill='%23ecc630'%3e%3cpath%20d='M430,275.916%20L426.684,273.167%20L415.115,285.01%20L444.591,285.01%20L433.235,273.147%20L430,275.916%20L430,275.916%20Z%20M434.89,271.89%20L445.892,283.329%20C445.955,283.107%20446,282.877%20446,282.634%20L446,262.862%20L434.89,271.89%20L434.89,271.89%20Z%20M414,262.816%20L414,282.634%20C414,282.877%20414.045,283.107%20414.108,283.329%20L425.147,271.927%20L414,262.816%20L414,262.816%20Z%20M445,261%20L415,261%20L430,273.019%20L445,261%20L445,261%20Z'%20id='mail'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",lu="/evweb/assets/man-CdVyp1dt.webp",cu="/evweb/assets/phone-BifJ2vyz.svg",uu="/evweb/assets/sergej-Df34HdNz.webp",fu="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5562%2012.9062L16.1007%2013.359C16.1007%2013.359%2015.0181%2014.4355%2012.0631%2011.4972C9.10812%208.55901%2010.1907%207.48257%2010.1907%207.48257L10.4775%207.19738C11.1841%206.49484%2011.2507%205.36691%2010.6342%204.54348L9.37326%202.85908C8.61028%201.83992%207.13596%201.70529%206.26145%202.57483L4.69185%204.13552C4.25823%204.56668%203.96765%205.12559%204.00289%205.74561C4.09304%207.33182%204.81071%2010.7447%208.81536%2014.7266C13.0621%2018.9492%2017.0468%2019.117%2018.6763%2018.9651C19.1917%2018.9171%2019.6399%2018.6546%2020.0011%2018.2954L21.4217%2016.883C22.3806%2015.9295%2022.1102%2014.2949%2020.8833%2013.628L18.9728%2012.5894C18.1672%2012.1515%2017.1858%2012.2801%2016.5562%2012.9062Z'%20fill='%231C274C'/%3e%3c/svg%3e",hu="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke=''%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M16.5562%2012.9062L16.1007%2013.359C16.1007%2013.359%2015.0181%2014.4355%2012.0631%2011.4972C9.10812%208.55901%2010.1907%207.48257%2010.1907%207.48257L10.4775%207.19738C11.1841%206.49484%2011.2507%205.36691%2010.6342%204.54348L9.37326%202.85908C8.61028%201.83992%207.13596%201.70529%206.26145%202.57483L4.69185%204.13552C4.25823%204.56668%203.96765%205.12559%204.00289%205.74561C4.09304%207.33182%204.81071%2010.7447%208.81536%2014.7266C13.0621%2018.9492%2017.0468%2019.117%2018.6763%2018.9651C19.1917%2018.9171%2019.6399%2018.6546%2020.0011%2018.2954L21.4217%2016.883C22.3806%2015.9295%2022.1102%2014.2949%2020.8833%2013.628L18.9728%2012.5894C18.1672%2012.1515%2017.1858%2012.2801%2016.5562%2012.9062Z'%20fill='%23ecc630'/%3e%3c/g%3e%3c/svg%3e",du="data:image/webp;base64,UklGRiAJAABXRUJQVlA4IBQJAABQOACdASrhAOEAPrVWp00nJKOiKTHJuOAWiWlu/HwgfKm6Bd8Z/47s7/yHnDxjuTY9D96fPHnl3l/jPgN/0P/N7ydkjiI8QDgPqAH8v/wH/Q9QbOL+Z/6f2D/149J3qZy8pBLmn99BWO/CQ618GzYkICcOmUdlOaITRyCCtHS78QN/+2UtvD/IST8Remdjd+5e/b63iktayYATAG/km2FJAD/WDu2CRmmbDwycYyFUt4qBXUhxhSmQD+kJuZnlwkelUUTwL2Kf8+mxmtqlsk628MtMLoBoqe7PuZP7r3y/et/raC9BQodXqPpV7wAcM/ipbNj+WWFkxPw+Q4Tm342Egshnq/73I/WdFjaJnkOekHzMIG9WVdyDisytmaUCTE3zmJ7QK0J9TbhytnQFxkUWahJTrgvL3hDDc0jlFUs0QPfcmCmL7Mo06Yx5nB0v7mOF//lDlf3+Aj6X6HU2Ulo/y76xsE0p42jEx0xHD4HPQlsJP1sSX7YIMnX9pNgt03b3dvi5H0nYCckcf77I9gPSFSQrqWaN3ZuRXaSZZ7U69lj2zNwkleCVHc8hRLPAU+X0ke+yrPbnm4ZOxkkv/uQOMoCmCAK23d34gaAA/vcdO+tBxJlILL1ZwVp1B7EhehrQ+8gMDgJczXNs2HTTKWwv+NrNAVFS0/ch4Wjjhi+vmYNqG27CeRty6wZBc9g0yXInWqEBXkpmPpmcUTCKqitGh2zYSys8RA6WCqfgF6MF3QMszPctDO/5aQh32+cnREsqwkdfDuocNIpQqv6BCP79uJ80Ng7q+aRxaoVMaclrS0drLcDT8aScxB0HrCihLdqT8dTF3Y8oTudshv8JNfqOI4MW1W+r3wJ3XZDGIxnsGApglNtHRHYZH3ySiwarv72gbbvsS6+tcQ+Aq30Bg7ZHULIYnAfT4gONwpv0w/aV2oy/pYiqc1rExoxmePAdvUK6nmZHn7GlIyLChUpvAb/Qk/tbnhObbbfZStWf38Hr0d2Q6xS7N+vTc8XjSROxyzDubcpnv5QbpSaOZHBfY+XWux3M+LaV8wONWKYrUwvpO+FhfEBrBEhPU4N0fx+3GAXLsWM//YEZ/1Bx2LrWwy3hhj1hmFiZyHAFAFEcUxa35S/73lLHQLpBIVghA0TBHZPXEYnf5PWy64WCnecY8XJetfOgg1yfy/WG93JJ2LwnUd5m3s0ehb/q/SqjMl8adnC9fCKYV9R8O7b85B6fFjFFjCHIkqxySNnaOeDVV78e46/3fsZjab+FW+9b1qKxAfde+5+3MNODaGXsH1WfGD4YosXyvS1NnzSxAYvaVDwHia+QcnUCA1Ac9NugSe4GSL7L/TmyI2PJc4qKdq7qsNAOzmbpHsXnonG55RAkZAXkiqO3VjFzkVARXpLejzlyOA5Rz8BpIWH8xXR/tS7MmK1KHyxn9J6VnBl4uDVAf0hQPmHPS0Q534/NpUOo7/wT/M/dawSf8E1SNv9C6ji/O7YktwrEf3fRQMOwpV44q8DybQPiB/lOJDugO1IjUJpDLNTzuwiiqmoyQ3Pj2eXONwNNDSOcves4qx2pQz3VQ7jc4iqyue3ukbETOsNcLJnBsE+CJSlD/qVxaTIfEWIT+RqM07RpoWOJRc7jEFjgWW9VJ5p0jcsFXdbAilTRJsGqNWIe3E8FDcgWH9BTqa1GEEQPcIn8oETUKh0NzE1jDlE1De8vz8uOkUWGMtqgqqmwvVLHvWM7H9He5tPQTOQ4AoBsmQNapfbD5cFxhOhJcB7KunRYQ2YctvV5IvrhxhRz2wVBjxRi8wKXF+VZvldzVtSCWy5L3X57R+tEM05sCZ3Z5nmGqNCPol3UwW2kONL1/gLpKA71iRLcrXnzuV+NKxr0FLHWwGx7U9pI/LJirXP7b/WHObfgFjlhPbt71MHNWW0eR9Oi9fVL2PLRz4xZnBbfCnhX4/xNAogo6b04F06WEZEQicn4+1HNIVH/12Q/wgy8iiOGiGK45S45Dw6itS+GoO7Ge+hAU1y5o7fgj1/X+f6GECRa+558gtE8iC7kGQ1KbVAsfDxHInHE/dhf8nmYKQ+VhK7umvk9syQzzYZ9jM7L4r3A73kZuxh6O+HUU69IZe2H2q4udiBXYgqRvUw1IH1NZGldDJRKLxIu1eyeJH16CmBJSacHGnCQdhdpYcc1as7auT3K4ZO5U97WBcxuSZANB6J2q3iJ+fAob+OFuTqLXV+HlHCFG4IUZPKNuuEt5lspAGRz9j8SlRvBLpl6ypm9/yVekPyRpoN5Gy7b/AdNutuhOT2I2PJs0kO/HaM9yVko+BMBFda2/C4h9xGm1IrsezH91G31UYJDTr2lH6yWJJIlfibzQTNxFznB/2eDofKelYxegxnTp2tP5YPKpg74gi8fg/cMsqdx1Ct6R46iu5Arf34vOrOZPCuNVUall8fKnObLNm209WCLRa/diyX2mfomo+tPky7gJNTXdEAGQHoWqgUJTImfiXwQIzzZo5kQ5CB5p0yrbVxAJtSaxxcIH58aAPnoUcG0hjj7HvIClnsijN72EE8ri1nyG9HehmGqEfNcplUm6+pGjkH4+ECqp2akpnpkLuwdt0tWQn4TUXmhQ7kHOrJx92da7d5L3wAP8ZjmL/p6fM1peYXOGjdgHAis0aZlVQd2e8Hg5EnPMZtbydrTCMP6SV0e894KUOfpCSCIBMgTgLiJ+CPqZzAawaSBWXesfdUdEDqq3LyAMJW0pWIc59OheAFRdZVz0QCnl5+6VrtDSyUm16K9sUOq7hLQIiscKTTjTC8n3oVzmrJCCgCTK6fGLN+Al8Ckpu3yRLfhAvxQUhMuI1ika0NYFoOvKP86dmSGRS+D95qZb+uXF5IF6cxo+Ccu2MU5tw0ZuTD9oNDBaAmBOIR0qgfZbDkVFrWbHrfvABnoxjSxc0iCB6XDOe2eJVhR3bjpMGep1H//rfnNl79bzlBG+xDGdjUIf/E8ilRT2FIxMiL33URmYL0UVwfr2N5Kzce7LZSyJDsE9BVN2VKU3EVqVcWTbSZc+mJwOOhIqDlzokfG+KCfU3pAw5sACol5l1rsOp/sCrD8DDntX9yx1cTHIAAAAA==",pu="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20612%20612'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M507.9,117.596c-6.4,0-11.9,5.6-11.9,11.9v15c0,6.4,5.6,11.9,11.9,11.9h7.899L369.9,303.296l-3.101-11.2%20c-3.1-10.4-11.2-23-33.3-20.6l-85.7,4l-58.1-54.1c-7.1-7.1-19.8-15.8-38.1-11.2L0,250.896v27h0.8l61.9-16.7l16.7,59.5L0,342.096%20v126.199c8.7,19.801,31,30.201,51.6,24.602c22.2-6.4,35.7-27.801,31.8-50.801l153.2-41.199c7.1,21.398,31,34.1,53.2,27.799%20c22.2-6.4,35.7-27.799,31.8-50.799l43.7-11.9c10.4-3.1,18.3-10.4,15-23l-4-15l172.2-172.101h24.6v103.2H612v-141.5H507.9z%20M46,473.897c-12.7,4-26.2-4-29.3-16.701c-3.1-12.699,4-25.4,16.7-28.5c2.3-1.6,4-1.6,5.6-1.6c11.2-0.801,21.4,6.4,23.9,17.5%20C65.9,457.196,58.7,469.897,46,473.897z%20M105.6,312.696l-15.8-60.3l57.1-15c3.1,0,5.6,0,8.7,0c7.9,0.8,15,4.8,19.8,9.5l38.1,37.4%20L105.6,312.696z%20M284.1,408.795c-12.7,3.102-26.2-4-29.3-16.699c-3.1-12.699,4.8-25.4,17.5-29.301c1.6,0.801,3.1,0.801,4.8,0%20c11.2-0.799,21.4,6.4,23.9,17.5C304,392.897,296.9,405.596,284.1,408.795z%20M470.6,297.696v127.701%20c0,11.898,3.101,21.398,22.2,21.398h27c1.601,26.201,23.9,47.602,50.8,47.602c17.5,0,32.601-8.701,41.2-22.201v-195.1%20c0.8-0.8-119.1-0.8-119.1-0.8C473,276.296,470.6,284.996,470.6,297.696z%20M570.6,415.196c15,0,27,11.9,27,27%20c0,15-11.899,27.801-27,27.801c-15.1,0-27.8-12.701-27.8-27.801C543.7,427.897,555.6,415.196,570.6,415.196z'/%3e%3c/g%3e%3c/svg%3e",mu="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2050%2050'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M4.8125%204C4.609375%204.035156%204.425781%204.136719%204.28125%204.28125L3.28125%205.28125C2.917969%205.644531%202.890625%206.226563%203.21875%206.625L4%207.5625L4%2019C4%2019.550781%204.449219%2020%205%2020C5.566406%2020%206%2020.433594%206%2021C6%2021.566406%205.566406%2022%205%2022C4.433594%2022%204%2021.566406%204%2021L2%2021C2%2022.644531%203.355469%2024%205%2024C6.644531%2024%208%2022.644531%208%2021C8%2019.742188%207.109375%2018.847656%206%2018.40625L6%2010L17%2023.375L17%2028L0%2028L0%2035C0%2036.644531%201.355469%2038%203%2038L7.09375%2038C7.570313%2040.835938%2010.035156%2043%2013%2043C15.964844%2043%2018.429688%2040.835938%2018.90625%2038L33.09375%2038C33.570313%2040.835938%2036.035156%2043%2039%2043C41.964844%2043%2044.429688%2040.835938%2044.90625%2038L47%2038C48.644531%2038%2050%2036.644531%2050%2035L50%2025.375C50%2023.085938%2048.40625%2021.0625%2048.40625%2021.0625L48.375%2021.0625L44.25%2015.5625L44.25%2015.53125L44.21875%2015.5C43.296875%2014.386719%2041.914063%2013%2040%2013L32%2013C30.355469%2013%2029%2014.355469%2029%2016L29%2028L27%2028L27%2023C27%2022.710938%2026.875%2022.4375%2026.65625%2022.25L5.65625%204.25C5.453125%204.066406%205.179688%203.976563%204.90625%204C4.875%204%204.84375%204%204.8125%204%20Z%20M%206.875%207.9375L25%2023.46875L25%2028L19%2028L19%2023C19%2022.773438%2018.921875%2022.550781%2018.78125%2022.375%20Z%20M%2032%2015L40%2015C40.785156%2015%2041.894531%2015.84375%2042.65625%2016.75C42.664063%2016.761719%2042.679688%2016.769531%2042.6875%2016.78125L42.84375%2017L38%2017C36.40625%2017%2035%2018.289063%2035%2020L35%2024C35%2024.832031%2035.375%2025.5625%2035.90625%2026.09375C36.4375%2026.625%2037.167969%2027%2038%2027L48%2027L48%2035C48%2035.554688%2047.554688%2036%2047%2036L44.90625%2036C44.429688%2033.164063%2041.964844%2031%2039%2031C36.035156%2031%2033.570313%2033.164063%2033.09375%2036L31%2036L31%2016C31%2015.445313%2031.445313%2015%2032%2015%20Z%20M%2038%2019L44.34375%2019L46.78125%2022.25C46.78125%2022.25%2047.6875%2023.800781%2047.875%2025L38%2025C37.832031%2025%2037.5625%2024.875%2037.34375%2024.65625C37.125%2024.4375%2037%2024.167969%2037%2024L37%2020C37%2019.496094%2037.59375%2019%2038%2019%20Z%20M%202%2030L29%2030L29%2036L18.90625%2036C18.429688%2033.164063%2015.964844%2031%2013%2031C10.035156%2031%207.570313%2033.164063%207.09375%2036L3%2036C2.449219%2036%202%2035.550781%202%2035%20Z%20M%2013%2033C15.222656%2033%2017%2034.777344%2017%2037C17%2039.222656%2015.222656%2041%2013%2041C10.777344%2041%209%2039.222656%209%2037C9%2034.777344%2010.777344%2033%2013%2033%20Z%20M%2039%2033C41.222656%2033%2043%2034.777344%2043%2037C43%2039.222656%2041.222656%2041%2039%2041C36.777344%2041%2035%2039.222656%2035%2037C35%2034.777344%2036.777344%2033%2039%2033Z'/%3e%3c/svg%3e",_u="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%20256%20256'%20id='Flat'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M216,76H56a12,12,0,0,1,0-24H192a4,4,0,0,0,0-8H56A20.02229,20.02229,0,0,0,36,64V192a20.02229,20.02229,0,0,0,20,20H216a12.01312,12.01312,0,0,0,12-12V88A12.01312,12.01312,0,0,0,216,76Zm4,124a4.004,4.004,0,0,1-4,4H56a12.01312,12.01312,0,0,1-12-12V79.99023A19.89694,19.89694,0,0,0,56,84H216a4.004,4.004,0,0,1,4,4Zm-32-56a8,8,0,1,1-8-8A7.99977,7.99977,0,0,1,188,144Z'/%3e%3c/svg%3e",xu="/evweb/assets/women-CT7WStMu.webp";function s1(){const r=document.createElement("section");r.className="reviews-section";const e=document.createElement("div");e.className="reviews-title",e.textContent="ОТЗЫВЫ НАШИХ КЛИЕНТОВ";const t=document.createElement("div");t.className="slider";const n=document.createElement("div");n.className="slides";const i=[{name:"Иван",text:"Быстро и профессионально. Благодарим за своевременную транспортировку!",avatar:"man.webp"},{name:"Анна",text:"Очень довольны обслуживанием. Приехали быстро, всё вежливо и чётко.",avatar:"women.webp"},{name:"Сергей",text:"Эвакуировали мою машину ночью, быстро и без проблем. Рекомендую!",avatar:"sergej.webp"}];i.forEach((h,d)=>{const x=document.createElement("div");x.className="slide",d===0&&x.classList.add("active");const _=document.createElement("img");_.className="avatar",_.src=new URL(Object.assign({"../../assets/GAZ.webp":eu,"../../assets/Gazelle_wrecker.stl":tu,"../../assets/WhatsApp.webp":nu,"../../assets/car.svg":iu,"../../assets/check.svg":ru,"../../assets/clock.svg":su,"../../assets/ev.jpg":au,"../../assets/mail.svg":ou,"../../assets/man.webp":lu,"../../assets/phone.svg":cu,"../../assets/sergej.webp":uu,"../../assets/solidphone.svg":fu,"../../assets/solidphoneyel.svg":hu,"../../assets/telegram.webp":du,"../../assets/towed.svg":pu,"../../assets/towing.svg":mu,"../../assets/wallet.svg":_u,"../../assets/women.webp":xu})[`../../assets/${h.avatar}`],import.meta.url).href,_.alt=h.name;const m=document.createElement("div");m.className="review-text";const p=document.createElement("strong");p.textContent=h.name;const E=document.createElement("p");E.textContent=h.text,m.appendChild(p),m.appendChild(E),x.appendChild(_),x.appendChild(m),n.appendChild(x)});const s=document.createElement("div");s.className="slider-controls";const a=[];i.forEach((h,d)=>{const x=document.createElement("span");x.className="dot",d===0&&x.classList.add("active"),x.addEventListener("click",()=>f(d)),a.push(x),s.appendChild(x)});const o=document.createElement("button");o.className="arrow prev",o.innerHTML="❮",o.addEventListener("click",()=>{let h=(l-1+i.length)%i.length;f(h)});const c=document.createElement("button");c.className="arrow next",c.innerHTML="❯",c.addEventListener("click",()=>{let h=(l+1)%i.length;f(h)}),t.appendChild(o),t.appendChild(n),t.appendChild(c),t.appendChild(s),r.appendChild(e),r.appendChild(t);let l=0;const u=n.querySelectorAll(".slide");function f(h){u.forEach((d,x)=>{d.classList.toggle("active",x===h)}),a.forEach((d,x)=>{d.classList.toggle("active",x===h)}),l=h}return setInterval(()=>{let h=(l+1)%u.length;f(h)},5e3),r}function a1(){const r=document.createElement("div");r.className="telefon-pop-up-button";const e=document.createElement("img");e.className="icon-popup",e.src=new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5562%2012.9062L16.1007%2013.359C16.1007%2013.359%2015.0181%2014.4355%2012.0631%2011.4972C9.10812%208.55901%2010.1907%207.48257%2010.1907%207.48257L10.4775%207.19738C11.1841%206.49484%2011.2507%205.36691%2010.6342%204.54348L9.37326%202.85908C8.61028%201.83992%207.13596%201.70529%206.26145%202.57483L4.69185%204.13552C4.25823%204.56668%203.96765%205.12559%204.00289%205.74561C4.09304%207.33182%204.81071%2010.7447%208.81536%2014.7266C13.0621%2018.9492%2017.0468%2019.117%2018.6763%2018.9651C19.1917%2018.9171%2019.6399%2018.6546%2020.0011%2018.2954L21.4217%2016.883C22.3806%2015.9295%2022.1102%2014.2949%2020.8833%2013.628L18.9728%2012.5894C18.1672%2012.1515%2017.1858%2012.2801%2016.5562%2012.9062Z'%20fill='%231C274C'/%3e%3c/svg%3e",import.meta.url).href,e.alt="Phone",r.appendChild(e);const t=document.createElement("div");t.className="telefon-window";const n=document.createElement("div");n.className="logo-nav";const i=document.createElement("span");i.className="close-btn",i.textContent="×";const s=document.createElement("div");s.className="logo-window",s.textContent="EVACUATOR.181",n.appendChild(i),n.appendChild(s);const a=document.createElement("div");a.className="popup-content",a.textContent="Звоните, договоримся!";const o=document.createElement("div");o.className="second-popup-content",o.textContent="Или напишите в мессенджер";const c=document.createElement("div");c.className="third-popup-content",c.textContent="Наш основной номер";const l=document.createElement("div");l.className="main-number-block";const u=document.createElement("img");u.className="icon-inside",u.src=new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5562%2012.9062L16.1007%2013.359C16.1007%2013.359%2015.0181%2014.4355%2012.0631%2011.4972C9.10812%208.55901%2010.1907%207.48257%2010.1907%207.48257L10.4775%207.19738C11.1841%206.49484%2011.2507%205.36691%2010.6342%204.54348L9.37326%202.85908C8.61028%201.83992%207.13596%201.70529%206.26145%202.57483L4.69185%204.13552C4.25823%204.56668%203.96765%205.12559%204.00289%205.74561C4.09304%207.33182%204.81071%2010.7447%208.81536%2014.7266C13.0621%2018.9492%2017.0468%2019.117%2018.6763%2018.9651C19.1917%2018.9171%2019.6399%2018.6546%2020.0011%2018.2954L21.4217%2016.883C22.3806%2015.9295%2022.1102%2014.2949%2020.8833%2013.628L18.9728%2012.5894C18.1672%2012.1515%2017.1858%2012.2801%2016.5562%2012.9062Z'%20fill='%231C274C'/%3e%3c/svg%3e",import.meta.url).href,u.alt="Phone";const f=document.createElement("a");f.href="tel:+00000000000",f.textContent="+0 (000) 000-00-00",l.appendChild(u),l.appendChild(f);const h=document.createElement("div");h.className="fourth-popup-content",h.textContent="Наши соц. сети";const d=document.createElement("div");d.className="social-block";const x=document.createElement("a");x.href="https://t.me/ваш_username",x.target="_blank";const _=document.createElement("img");_.src=new URL("data:image/webp;base64,UklGRiAJAABXRUJQVlA4IBQJAABQOACdASrhAOEAPrVWp00nJKOiKTHJuOAWiWlu/HwgfKm6Bd8Z/47s7/yHnDxjuTY9D96fPHnl3l/jPgN/0P/N7ydkjiI8QDgPqAH8v/wH/Q9QbOL+Z/6f2D/149J3qZy8pBLmn99BWO/CQ618GzYkICcOmUdlOaITRyCCtHS78QN/+2UtvD/IST8Remdjd+5e/b63iktayYATAG/km2FJAD/WDu2CRmmbDwycYyFUt4qBXUhxhSmQD+kJuZnlwkelUUTwL2Kf8+mxmtqlsk628MtMLoBoqe7PuZP7r3y/et/raC9BQodXqPpV7wAcM/ipbNj+WWFkxPw+Q4Tm342Egshnq/73I/WdFjaJnkOekHzMIG9WVdyDisytmaUCTE3zmJ7QK0J9TbhytnQFxkUWahJTrgvL3hDDc0jlFUs0QPfcmCmL7Mo06Yx5nB0v7mOF//lDlf3+Aj6X6HU2Ulo/y76xsE0p42jEx0xHD4HPQlsJP1sSX7YIMnX9pNgt03b3dvi5H0nYCckcf77I9gPSFSQrqWaN3ZuRXaSZZ7U69lj2zNwkleCVHc8hRLPAU+X0ke+yrPbnm4ZOxkkv/uQOMoCmCAK23d34gaAA/vcdO+tBxJlILL1ZwVp1B7EhehrQ+8gMDgJczXNs2HTTKWwv+NrNAVFS0/ch4Wjjhi+vmYNqG27CeRty6wZBc9g0yXInWqEBXkpmPpmcUTCKqitGh2zYSys8RA6WCqfgF6MF3QMszPctDO/5aQh32+cnREsqwkdfDuocNIpQqv6BCP79uJ80Ng7q+aRxaoVMaclrS0drLcDT8aScxB0HrCihLdqT8dTF3Y8oTudshv8JNfqOI4MW1W+r3wJ3XZDGIxnsGApglNtHRHYZH3ySiwarv72gbbvsS6+tcQ+Aq30Bg7ZHULIYnAfT4gONwpv0w/aV2oy/pYiqc1rExoxmePAdvUK6nmZHn7GlIyLChUpvAb/Qk/tbnhObbbfZStWf38Hr0d2Q6xS7N+vTc8XjSROxyzDubcpnv5QbpSaOZHBfY+XWux3M+LaV8wONWKYrUwvpO+FhfEBrBEhPU4N0fx+3GAXLsWM//YEZ/1Bx2LrWwy3hhj1hmFiZyHAFAFEcUxa35S/73lLHQLpBIVghA0TBHZPXEYnf5PWy64WCnecY8XJetfOgg1yfy/WG93JJ2LwnUd5m3s0ehb/q/SqjMl8adnC9fCKYV9R8O7b85B6fFjFFjCHIkqxySNnaOeDVV78e46/3fsZjab+FW+9b1qKxAfde+5+3MNODaGXsH1WfGD4YosXyvS1NnzSxAYvaVDwHia+QcnUCA1Ac9NugSe4GSL7L/TmyI2PJc4qKdq7qsNAOzmbpHsXnonG55RAkZAXkiqO3VjFzkVARXpLejzlyOA5Rz8BpIWH8xXR/tS7MmK1KHyxn9J6VnBl4uDVAf0hQPmHPS0Q534/NpUOo7/wT/M/dawSf8E1SNv9C6ji/O7YktwrEf3fRQMOwpV44q8DybQPiB/lOJDugO1IjUJpDLNTzuwiiqmoyQ3Pj2eXONwNNDSOcves4qx2pQz3VQ7jc4iqyue3ukbETOsNcLJnBsE+CJSlD/qVxaTIfEWIT+RqM07RpoWOJRc7jEFjgWW9VJ5p0jcsFXdbAilTRJsGqNWIe3E8FDcgWH9BTqa1GEEQPcIn8oETUKh0NzE1jDlE1De8vz8uOkUWGMtqgqqmwvVLHvWM7H9He5tPQTOQ4AoBsmQNapfbD5cFxhOhJcB7KunRYQ2YctvV5IvrhxhRz2wVBjxRi8wKXF+VZvldzVtSCWy5L3X57R+tEM05sCZ3Z5nmGqNCPol3UwW2kONL1/gLpKA71iRLcrXnzuV+NKxr0FLHWwGx7U9pI/LJirXP7b/WHObfgFjlhPbt71MHNWW0eR9Oi9fVL2PLRz4xZnBbfCnhX4/xNAogo6b04F06WEZEQicn4+1HNIVH/12Q/wgy8iiOGiGK45S45Dw6itS+GoO7Ge+hAU1y5o7fgj1/X+f6GECRa+558gtE8iC7kGQ1KbVAsfDxHInHE/dhf8nmYKQ+VhK7umvk9syQzzYZ9jM7L4r3A73kZuxh6O+HUU69IZe2H2q4udiBXYgqRvUw1IH1NZGldDJRKLxIu1eyeJH16CmBJSacHGnCQdhdpYcc1as7auT3K4ZO5U97WBcxuSZANB6J2q3iJ+fAob+OFuTqLXV+HlHCFG4IUZPKNuuEt5lspAGRz9j8SlRvBLpl6ypm9/yVekPyRpoN5Gy7b/AdNutuhOT2I2PJs0kO/HaM9yVko+BMBFda2/C4h9xGm1IrsezH91G31UYJDTr2lH6yWJJIlfibzQTNxFznB/2eDofKelYxegxnTp2tP5YPKpg74gi8fg/cMsqdx1Ct6R46iu5Arf34vOrOZPCuNVUall8fKnObLNm209WCLRa/diyX2mfomo+tPky7gJNTXdEAGQHoWqgUJTImfiXwQIzzZo5kQ5CB5p0yrbVxAJtSaxxcIH58aAPnoUcG0hjj7HvIClnsijN72EE8ri1nyG9HehmGqEfNcplUm6+pGjkH4+ECqp2akpnpkLuwdt0tWQn4TUXmhQ7kHOrJx92da7d5L3wAP8ZjmL/p6fM1peYXOGjdgHAis0aZlVQd2e8Hg5EnPMZtbydrTCMP6SV0e894KUOfpCSCIBMgTgLiJ+CPqZzAawaSBWXesfdUdEDqq3LyAMJW0pWIc59OheAFRdZVz0QCnl5+6VrtDSyUm16K9sUOq7hLQIiscKTTjTC8n3oVzmrJCCgCTK6fGLN+Al8Ckpu3yRLfhAvxQUhMuI1ika0NYFoOvKP86dmSGRS+D95qZb+uXF5IF6cxo+Ccu2MU5tw0ZuTD9oNDBaAmBOIR0qgfZbDkVFrWbHrfvABnoxjSxc0iCB6XDOe2eJVhR3bjpMGep1H//rfnNl79bzlBG+xDGdjUIf/E8ilRT2FIxMiL33URmYL0UVwfr2N5Kzce7LZSyJDsE9BVN2VKU3EVqVcWTbSZc+mJwOOhIqDlzokfG+KCfU3pAw5sACol5l1rsOp/sCrD8DDntX9yx1cTHIAAAAA==",import.meta.url).href,_.alt="Telegram",_.className="telegram-icon popup-icon",x.appendChild(_);const m=document.createElement("a");m.href="https://wa.me/1234567890",m.target="_blank";const p=document.createElement("img");p.src=new URL("/evweb/assets/WhatsApp-BlSfG_3n.webp",import.meta.url).href,p.alt="WhatsApp",p.className="whatsapp-icon popup-icon",m.appendChild(p),d.appendChild(x),d.appendChild(m),t.appendChild(n),t.appendChild(a),t.appendChild(o),t.appendChild(c),t.appendChild(l),t.appendChild(h),t.appendChild(d),document.body.appendChild(r),document.body.appendChild(t),r.addEventListener("click",()=>{t.classList.add("active")}),i.addEventListener("click",()=>{t.classList.remove("active")})}function o1(){const r=document.createElement("main");r.className="main";const e=document.createElement("article");e.className="main-article";const t=document.createElement("section");t.className="section-about-us";const n=document.createElement("div");n.className="about-us-title title-main",n.textContent="О НАС";const i=document.createElement("div");i.className="about-us-text",i.textContent="Наша компания предоставляет услуги эвакуации автомобилей в Луганске и области. Работаем круглосуточно, быстро реагируем на вызовы и обеспечиваем безопасность транспортировки. В распоряжении — современный автопарк и опытные водители. Эвакуируем легковые авто, внедорожники и технику до 3 тонн. Работаем с частными и юридическими лицами. С нами — надёжно и вовремя.",t.append(n,i);const s=document.createElement("section");s.className="section-services";const a=document.createElement("div");a.className="services-title title-main",a.textContent="НАШИ УСЛУГИ";const o=document.createElement("ul");o.className="container-services-list list";const c=(E,y,b,A)=>{const M=document.createElement("li");M.className=b;const w=document.createElement("img");w.className="icon-list",w.src=new URL(Object.assign({"../../assets/GAZ.webp":eu,"../../assets/Gazelle_wrecker.stl":tu,"../../assets/WhatsApp.webp":nu,"../../assets/car.svg":iu,"../../assets/check.svg":ru,"../../assets/clock.svg":su,"../../assets/ev.jpg":au,"../../assets/mail.svg":ou,"../../assets/man.webp":lu,"../../assets/phone.svg":cu,"../../assets/sergej.webp":uu,"../../assets/solidphone.svg":fu,"../../assets/solidphoneyel.svg":hu,"../../assets/telegram.webp":du,"../../assets/towed.svg":pu,"../../assets/towing.svg":mu,"../../assets/wallet.svg":_u,"../../assets/women.webp":xu})[`../../assets/${E}`],import.meta.url).href,w.alt=y;const L=document.createElement("div");return L.className=A,L.textContent=y,M.append(w,L),M};o.append(c("clock.svg","РАБОТАЕМ КРУГЛОСУТОЧНО","first-block-list block-list","first-text-list text-list"),c("towing.svg","Приедем к вам за 15–30 минут","second-block-list block-list","second-text-list text-list"),c("car.svg","Эвакуируем авто до 3,5 тонн","third-block-list block-list","third-text-list text-list"),c("wallet.svg","Наличный и безналичный расчёт","fourth-block-list block-list","fourth-text-list text-list")),s.append(a,o);const l=document.createElement("section");l.className="section-foto";const u=document.createElement("div");u.className="title-foto title-main",u.textContent="ВЫПОЛНЯЕМ ЗАКАЗЫ";const f=document.createElement("div");f.className="container-foto",[{class:"first-foto foto",src:"ev.jpg",alt:"Центр города"},{class:"second-foto foto",src:"ev.jpg",alt:"Жилой район"},{class:"third-foto foto",src:"ev.jpg",alt:"Трасса"},{class:"fourth-foto foto",src:"ev.jpg",alt:"Промзона"},{class:"fiveth-foto foto",src:"ev.jpg",alt:"Ночной вызов"},{class:"sixth-foto foto",src:"ev.jpg",alt:"Пригород"}].forEach(({class:E,src:y,alt:b})=>{const A=document.createElement("img");A.className=E,A.src=new URL(Object.assign({"../../assets/GAZ.webp":eu,"../../assets/Gazelle_wrecker.stl":tu,"../../assets/WhatsApp.webp":nu,"../../assets/car.svg":iu,"../../assets/check.svg":ru,"../../assets/clock.svg":su,"../../assets/ev.jpg":au,"../../assets/mail.svg":ou,"../../assets/man.webp":lu,"../../assets/phone.svg":cu,"../../assets/sergej.webp":uu,"../../assets/solidphone.svg":fu,"../../assets/solidphoneyel.svg":hu,"../../assets/telegram.webp":du,"../../assets/towed.svg":pu,"../../assets/towing.svg":mu,"../../assets/wallet.svg":_u,"../../assets/women.webp":xu})[`../../assets/${y}`],import.meta.url).href,A.alt=b,f.appendChild(A)}),l.append(u,f);const d=document.createElement("section");d.className="section-stage";const x=document.createElement("div");x.className="stage-section-title title-main",x.textContent="ЭТАПЫ ЭВАКУАЦИИ";const _=document.createElement("ul");_.className="container-stage-list list",_.append(c("phone.svg","Звонок диспетчеру","first-block-list-stage block-list","first-text-list-stage text-list-stage"),c("towing.svg","Погрузка автомобиля","second-block-list-stage block-list","second-text-list-stage text-list-stage"),c("towed.svg","Доставка до места","third-block-list-stage block-list","third-text-list-stage text-list-stage"),c("check.svg","Оплата услуг","fourth-block-list-stage block-list","fourth-text-list-stage text-list-stage")),d.append(x,_);const m=document.createElement("section");m.className="order-section";const p=document.createElement("a");return p.href="tel:+00000000000",p.textContent="Вызвать эвакуатор",p.className="evakuator-button",m.appendChild(p),e.append(t,s,l,d,m,s1()),a1(),r.appendChild(e),r}function l1(){const r=document.createElement("footer");r.className="footer";const e=document.createElement("article");e.className="article-footer";const t=document.createElement("section");t.className="left-section";const n=document.createElement("div");n.className="title-left-section",n.textContent="КОНТАКТЫ";const i=document.createElement("div");i.className="phone-container container";const s=document.createElement("img");s.className=" icon-kontakt",s.src=new URL("data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke=''%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M16.5562%2012.9062L16.1007%2013.359C16.1007%2013.359%2015.0181%2014.4355%2012.0631%2011.4972C9.10812%208.55901%2010.1907%207.48257%2010.1907%207.48257L10.4775%207.19738C11.1841%206.49484%2011.2507%205.36691%2010.6342%204.54348L9.37326%202.85908C8.61028%201.83992%207.13596%201.70529%206.26145%202.57483L4.69185%204.13552C4.25823%204.56668%203.96765%205.12559%204.00289%205.74561C4.09304%207.33182%204.81071%2010.7447%208.81536%2014.7266C13.0621%2018.9492%2017.0468%2019.117%2018.6763%2018.9651C19.1917%2018.9171%2019.6399%2018.6546%2020.0011%2018.2954L21.4217%2016.883C22.3806%2015.9295%2022.1102%2014.2949%2020.8833%2013.628L18.9728%2012.5894C18.1672%2012.1515%2017.1858%2012.2801%2016.5562%2012.9062Z'%20fill='%23ecc630'/%3e%3c/g%3e%3c/svg%3e",import.meta.url).href,s.alt="Phone";const a=document.createElement("a");a.className="phone-number",a.href="tel:+00000000000",a.textContent="+0 (000) 000-00-00",i.appendChild(s),i.appendChild(a);const o=document.createElement("div");o.className="email-container container";const c=document.createElement("img");c.className=" icon-kontakt",c.src=new URL("data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-3.5%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3email%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-414.000000,%20-261.000000)'%20fill='%23ecc630'%3e%3cpath%20d='M430,275.916%20L426.684,273.167%20L415.115,285.01%20L444.591,285.01%20L433.235,273.147%20L430,275.916%20L430,275.916%20Z%20M434.89,271.89%20L445.892,283.329%20C445.955,283.107%20446,282.877%20446,282.634%20L446,262.862%20L434.89,271.89%20L434.89,271.89%20Z%20M414,262.816%20L414,282.634%20C414,282.877%20414.045,283.107%20414.108,283.329%20L425.147,271.927%20L414,262.816%20L414,262.816%20Z%20M445,261%20L415,261%20L430,273.019%20L445,261%20L445,261%20Z'%20id='mail'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",import.meta.url).href,c.alt="Mail";const l=document.createElement("a");l.className="email",l.href="mailto:info@evokuator181.ru",l.textContent="info@evokuator181.ru",o.appendChild(c),o.appendChild(l),t.appendChild(n),t.appendChild(i),t.appendChild(o);const u=document.createElement("section");u.className="right-section";const f=document.createElement("div");f.id="map",f.className="maps",u.appendChild(f),e.append(t,u),r.appendChild(e);const h=document.createElement("script");return h.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=5278004d-10ba-462d-bd1b-c827e2d44b97",h.onload=()=>{window.ymaps.ready(()=>{const d=new ymaps.Map("map",{center:[48.574041,39.307815],zoom:10}),x=new ymaps.Placemark([48.574041,39.307815],{hintContent:"Луганск",balloonContent:"Мы здесь!"});d.geoObjects.add(x)})},document.head.appendChild(h),r}function Vi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ws={duration:.5,overwrite:!1,delay:0},tf,sn,At,wi=1e8,hn=1/wi,gu=Math.PI*2,c1=gu/4,u1=0,Yd=Math.sqrt,f1=Math.cos,h1=Math.sin,nn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},nf=function(e){return typeof e>"u"},Di=function(e){return typeof e=="object"},Un=function(e){return e!==!1},rf=function(){return typeof window<"u"},bo=function(e){return Ft(e)||nn(e)},Zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,vu=/(?:-?\.?\d|\.)+/gi,Kd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jd=/[+-]=-?[.\d]+/,$d=/[^,'"\[\]\s]+/gi,d1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,gi,Su,sf,Qn={},el={},Jd,Qd=function(e){return(el=Xs(e,Qn))&&On},af=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},za=function(e,t){return!t&&console.warn(e)},e0=function(e,t){return e&&(Qn[e]=t)&&el&&(el[e]=t)||Qn},Va=function(){return 0},p1={suppressEvents:!0,isStart:!0,kill:!1},Go={suppressEvents:!0,kill:!1},m1={suppressEvents:!0},of={},vr=[],Mu={},t0,Xn={},Jl={},Rh=30,Ho=[],lf="",cf=function(e){var t=e[0],n,i;if(Di(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ho.length;i--&&!Ho[i].targetTest(t););n=Ho[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new T0(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||cf(ci(e))[0]._gsap},n0=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():nf(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},tl=function(){var e=vr.length,t=vr.slice(0),n,i;for(Mu={},vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},uf=function(e){return!!(e._initted||e._startAt||e.add)},i0=function(e,t,n,i){vr.length&&!sn&&tl(),e.render(t,n,!!(sn&&t<0&&uf(e))),vr.length&&!sn&&tl()},r0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($d).length<2?t:nn(e)?e.trim():e},s0=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},x1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Xs=function(e,t){for(var n in t)e[n]=t[n];return e},Ph=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Di(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},nl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ba=function(e){var t=e.parent||Pt,n=e.keyframes?x1(pn(e.keyframes)):ei;if(Un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},g1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},a0=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},xl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},v1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bu=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(Go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},S1=function r(e){return!e||e._ts&&r(e.parent)},Dh=function(e){return e._repeat?qs(e._tTime,e=e.duration()+e._rDelay)*e:0},qs=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},il=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gl=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||hn)||0))},vl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gl(e),n._dirty||Yr(n,e)),e},o0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=il(e.rawTime(),t),(!t._dur||Ja(0,t.totalDuration(),n)-t._tTime>hn)&&t.render(n,!0)),Yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},bi=function(e,t,n,i){return t.parent&&yr(t),t._start=Xt((er(n)?n:n||e!==Pt?ri(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),a0(e,t,"_first","_last",e._sort?"_start":0),yu(t)||(e._recent=t),i||o0(e,t),e._ts<0&&vl(e,e._tTime),e},l0=function(e,t){return(Qn.ScrollTrigger||af("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},c0=function(e,t,n,i,s){if(hf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&t0!==Yn.frame)return vr.push(e),e._lazy=[s,i],1},M1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},b1=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&M1(e)&&!(!e._initted&&yu(e))||(e._ts<0||e._dp._ts<0)&&!yu(e))?0:1,o=e._rDelay,c=0,l,u,f;if(o&&e._repeat&&(c=Ja(0,e._tDur,t),u=qs(c,o),e._yoyo&&u&1&&(a=1-a),u!==qs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||i||e._zTime===hn||!t&&e._zTime){if(!e._initted&&c0(e,t,i,n,c))return;for(f=e._zTime,e._zTime=t||(n?hn:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&bu(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&yr(e,1),!n&&!sn&&(Kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},y1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ys=function(e,t,n,i){var s=e._repeat,a=Xt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Xt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&vl(e,e._tTime=e._tDur*o),e.parent&&gl(e),n||Yr(e.parent,e),e},Lh=function(e){return e instanceof Tn?Yr(e):Ys(e,e._dur)},E1={_start:0,endTime:Va,totalDuration:Va},ri=function r(e,t,n){var i=e.labels,s=e._recent||E1,a=e.duration()>=wi?s.endTime(!1):e._dur,o,c,l;return nn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(pn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},ya=function(e,t,n){var i=er(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Un(c.vars.inherit)&&c.parent;a.immediateRender=Un(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},wr=function(e,t){return e||e===0?t(e):t},Ja=function(e,t,n){return n<e?e:n>t?t:n},un=function(e,t){return!nn(e)||!(t=d1.exec(e))?"":t[1]},T1=function(e,t,n){return wr(n,function(i){return Ja(e,t,i)})},Eu=[].slice,u0=function(e,t){return e&&Di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Di(e[0]))&&!e.nodeType&&e!==gi},w1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||u0(i,1)?(s=n).push.apply(s,ci(i)):n.push(i)})||n},ci=function(e,t,n){return At&&!t&&At.selector?At.selector(e):nn(e)&&!n&&(Su||!Zs())?Eu.call((t||sf).querySelectorAll(e),0):pn(e)?w1(e,n):u0(e)?Eu.call(e,0):e?[e]:[]},Tu=function(e){return e=ci(e)[0]||za("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?za("Invalid scope")||sf.createElement("div"):e)}},f0=function(e){return e.sort(function(){return .5-Math.random()})},h0=function(e){if(Ft(e))return e;var t=Di(e)?e:{each:e},n=Zr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,f=i;return nn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],f=i[1]),function(h,d,x){var _=(x||t).length,m=a[_],p,E,y,b,A,M,w,L,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,wi])[1],!S){for(w=-1e8;w<(w=x[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=a[_]=[],p=c?Math.min(S,_)*u-.5:i%S,E=S===wi?0:c?_*f/S-.5:i/S|0,w=0,L=wi,M=0;M<_;M++)y=M%S-p,b=E-(M/S|0),m[M]=A=l?Math.abs(l==="y"?b:y):Yd(y*y+b*b),A>w&&(w=A),A<L&&(L=A);i==="random"&&f0(m),m.max=w-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:l?l==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=un(t.amount||t.each)||0,n=n&&_<0?b0(n):n}return _=(m[h]-m.min)/m.max||0,Xt(m.b+(n?n(_):_)*m.v)+m.u}},wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(er(n)?0:un(n))}},d0=function(e,t){var n=pn(e),i,s;return!n&&Di(e)&&(i=n=e.radius||wi,e.values?(e=ci(e.values),(s=!er(e[0]))&&(i*=i)):e=wu(e.increment)),wr(t,n?Ft(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=wi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-c,h=h*h+d*d):h=Math.abs(e[f]-o),h<l&&(l=h,u=f);return u=!i||l<=i?e[u]:a,s||u===a||er(a)?u:u+un(a)}:wu(e))},p0=function(e,t,n,i){return wr(pn(e)?!t:n===!0?!!(n=0):!i,function(){return pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},A1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},C1=function(e,t){return function(n){return e(parseFloat(n))+(t||un(n))}},R1=function(e,t,n){return _0(e,t,0,1,n)},m0=function(e,t,n){return wr(n,function(i){return e[~~t(i)]})},P1=function r(e,t,n){var i=t-e;return pn(e)?m0(e,r(0,e.length),t):wr(n,function(s){return(i+(s-e)%i)%i+e})},D1=function r(e,t,n){var i=t-e,s=i*2;return pn(e)?m0(e,r(0,e.length-1),t):wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ga=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?$d:vu),n+=e.substr(t,i-t)+p0(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},_0=function(e,t,n,i,s){var a=t-e,o=i-n;return wr(s,function(c){return n+((c-e)/a*o||0)})},L1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=nn(e),o={},c,l,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],f=e.length,h=f-2,l=1;l<f;l++)u.push(r(e[l-1],e[l]));f--,s=function(x){x*=f;var _=Math.min(h,~~x);return u[_](x-_)},n=t}else i||(e=Xs(pn(e)?[]:{},e));if(!u){for(c in t)ff.call(o,e,c,"get",t[c]);s=function(x){return mf(x,o)||(a?e.p:e)}}}return wr(n,s)},Uh=function(e,t,n){var i=e.labels,s=wi,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},Kn=function(e,t,n){var i=e.vars,s=i[t],a=At,o=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&vr.length&&tl(),o&&(At=o),u=c?s.apply(l,c):s.call(l),At=a,u},ha=function(e){return yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Kn(e,"onInterrupt"),e},Rs,x0=[],g0=function(e){if(e)if(e=!e.name&&e.default||e,rf()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Va,render:mf,add:ff,kill:Z1,modifier:Y1,rawVars:0},a={targetTest:0,get:0,getSetter:pf,aliases:{},register:0};if(Zs(),e!==i){if(Xn[t])return;ei(i,ei(nl(e,s),a)),Xs(i.prototype,Xs(s,nl(e,a))),Xn[i.prop=t]=i,e.targetTest&&(Ho.push(i),of[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}e0(t,i),e.register&&e.register(On,i,Nn)}else x0.push(e)},bt=255,da={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Ql=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},v0=function(e,t,n){var i=e?er(e)?[e>>16,e>>8&bt,e&bt]:0:da.black,s,a,o,c,l,u,f,h,d,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),da[e])i=da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(vu),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ql(c+1/3,s,a),i[1]=Ql(c,s,a),i[2]=Ql(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Kd),n&&i.length<4&&(i[3]=1),i}else i=e.match(vu)||da.transparent;i=i.map(Number)}return t&&!x&&(s=i[0]/bt,a=i[1]/bt,o=i[2]/bt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?c=l=0:(d=f-h,l=u>.5?d/(2-f-h):d/(f+h),c=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},S0=function(e){var t=[],n=[],i=-1;return e.split(Sr).forEach(function(s){var a=s.match(Cs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ih=function(e,t,n){var i="",s=(e+i).match(Sr),a=t?"hsla(":"rgba(",o=0,c,l,u,f;if(!s)return e;if(s=s.map(function(h){return(h=v0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=S0(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Sr,"1").split(Cs),f=l.length-1;o<f;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(Sr),f=l.length-1;o<f;o++)i+=l[o]+s[o];return i+l[f]},Sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in da)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),U1=/hsl[a]?\(/,M0=function(e){var t=e.join(" "),n;if(Sr.lastIndex=0,Sr.test(t))return n=U1.test(t),e[1]=Ih(e[1],n),e[0]=Ih(e[0],n,S0(e[1])),!0},Ha,Yn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,u,f,h,d,x=function _(m){var p=r()-i,E=m===!0,y,b,A,M;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,y=A-a,(y>0||E)&&(M=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,a+=y+(y>=s?4:s-y),b=1),E||(c=l(_)),b)for(d=0;d<o.length;d++)o[d](A,h,M,m)};return f={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Jd&&(!Su&&rf()&&(gi=Su=window,sf=gi.document||{},Qn.gsap=On,(gi.gsapVersions||(gi.gsapVersions=[])).push(On.version),Qd(el||gi.GreenSockGlobals||!gi.gsap&&gi||{}),x0.forEach(g0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Ha=1,x(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ha=0,l=Va},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,E){var y=p?function(b,A,M,w){m(b,A,M,w),f.remove(y)}:m;return f.remove(m),o[E?"unshift":"push"](y),Zs(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),Zs=function(){return!Ha&&Yn.wake()},ut={},I1=/^[\d.\-M][\d.\-,\s]/,N1=/["']/g,F1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(N1,"").trim():+l,i=c.substr(o+1).trim();return t},O1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},B1=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[F1(t[1])]:O1(e).split(",").map(r0)):ut._CE&&I1.test(e)?ut._CE("",e):n},b0=function(e){return function(t){return 1-e(1-t)}},y0=function r(e,t){for(var n=e._first,i;n;)n instanceof Tn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Zr=function(e,t){return e&&(Ft(e)?e:ut[e]||B1(e))||t},as=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return In(e,function(o){ut[o]=Qn[o]=s,ut[a=o.toLowerCase()]=n;for(var c in s)ut[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ut[o+"."+c]=s[c]}),s},E0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ec=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/gu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*h1((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:E0(o);return s=gu/s,c.config=function(l,u){return r(e,l,u)},c},tc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:E0(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;as(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;as("Elastic",ec("in"),ec("out"),ec());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};as("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);as("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});as("Circ",function(r){return-(Yd(1-r*r)-1)});as("Sine",function(r){return r===1?1:-f1(r*c1)+1});as("Back",tc("in"),tc("out"),tc());ut.SteppedEase=ut.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-hn;return function(o){return((i*Ja(0,a,o)|0)+s)*n}}};Ws.ease=ut["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return lf+=r+","+r+"Params,"});var T0=function(e,t){this.id=u1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:n0,this.set=t?t.getSetter:pf},Wa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ys(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Ha||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vl(this,n),!s._dp||s.parent||o0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===hn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),i0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Ja(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),gl(this),v1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==hn&&(this._tTime-=hn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&bi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?il(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=m1);var i=sn;return sn=n,uf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ri(this,n),Un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-hn)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Ft(n)?n:s0,o=function(){var l=i.then;i.then=null,Ft(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),s(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ha(this)},r}();ei(Wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Tn=function(r){qd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),Pt&&bi(n.parent||Pt,Vi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&l0(Vi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ya(0,arguments,this),this},t.from=function(i,s,a){return ya(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ya(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ba(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,ri(this,a),1),this},t.call=function(i,s,a){return bi(this,Wt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Wt(i,a,ri(this,c)),this},t.staggerFrom=function(i,s,a,o,c,l,u){return a.runBackwards=1,ba(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,s,a,o,c,l,u)},t.staggerFromTo=function(i,s,a,o,c,l,u,f){return o.startAt=a,ba(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,s,o,c,l,u,f)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Xt(i),f=this._zTime<0!=i<0&&(this._initted||!l),h,d,x,_,m,p,E,y,b,A,M,w;if(this!==Pt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||f){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,y=this._ts,p=!y,f&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Xt(u%m),u===c?(_=this._repeat,h=l):(A=Xt(u/m),_=~~A,_&&_===A&&(h=l,_--),h>l&&(h=l)),A=qs(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),M&&_&1&&(h=l-h,w=1),_!==A&&!this._lock){var L=M&&A&1,S=L===(M&&_&1);if(_<A&&(L=!L),o=L?0:u%l?l:u,this._lock=1,this.render(o||(w?0:Xt(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,o=L?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;y0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=y1(this,Xt(o),Xt(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!A&&(Kn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(x=d._next,(d._act||h>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){E=0,x&&(u+=this._zTime=-1e-8);break}}d=x}else{d=this._last;for(var v=i<0?i:h;d;){if(x=d._prev,(d._act||v<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||sn&&uf(d)),h!==this._time||!this._ts&&!p){E=0,x&&(u+=this._zTime=v?-1e-8:hn);break}}d=x}}if(E&&!s&&(this.pause(),E.render(h>=o?0:-1e-8)._zTime=h>=o?1:-1,this._ts))return this._start=b,gl(this),this.render(i,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&yr(this,1),!s&&!(i<0&&!o)&&(u||o||!c)&&(Kn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(er(s)||(s=ri(this,s,i)),!(i instanceof Wa)){if(pn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ft(i))i=Wt.delayedCall(0,i);else return this}return this!==i?bi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Wt?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(i.parent===this&&xl(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ri(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Wt.delayedCall(0,s||Va,a);return o.data="isPause",this._hasPause=1,bi(this,o,ri(this,i))},t.removePause=function(i){var s=this._first;for(i=ri(this,i);s;)s._start===i&&s.data==="isPause"&&yr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)dr!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ci(i),c=this._first,l=er(s),u;c;)c instanceof Wt?_1(c._targets,o)&&(l?(!dr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ri(a,i),c=s,l=c.startAt,u=c.onStart,f=c.onStartParams,h=c.immediateRender,d,x=Wt.to(a,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||hn,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());x._dur!==m&&Ys(x,m,0,1).render(x._time,!0,!0),d=1}u&&u.apply(x,f||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ei({startAt:{time:ri(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Uh(this,ri(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Uh(this,ri(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+hn)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Yr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=wi,l,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,bi(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Ys(a,a===Pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Pt._ts&&(i0(Pt,il(i,Pt)),t0=Yn.frame),Yn.frame>=Rh){Rh+=Jn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e}(Wa);ei(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var k1=function(e,t,n,i,s,a,o){var c=new Nn(this._pt,e,t,0,1,D0,null,s),l=0,u=0,f,h,d,x,_,m,p,E;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ga(i)),a&&(E=[n,i],a(E,e,t),n=E[0],i=E[1]),h=n.match($l)||[];f=$l.exec(i);)x=f[0],_=i.substring(l,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),x!==h[u++]&&(m=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:x.charAt(1)==="="?Us(m,x)-m:parseFloat(x)-m,m:d&&d<4?Math.round:0},l=$l.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(jd.test(i)||p)&&(c.e=0),this._pt=c,c},ff=function(e,t,n,i,s,a,o,c,l,u){Ft(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Ft(f)?l?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,d=Ft(f)?l?W1:R0:df,x;if(nn(i)&&(~i.indexOf("random(")&&(i=Ga(i)),i.charAt(1)==="="&&(x=Us(h,i)+(un(h)||0),(x||x===0)&&(i=x))),!u||h!==i||Au)return!isNaN(h*i)&&i!==""?(x=new Nn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?q1:P0,0,d),l&&(x.fp=l),o&&x.modifier(o,this,e),this._pt=x):(!f&&!(t in e)&&af(t,i),k1.call(this,e,t,h,i,d,c||Jn.stringFilter,l))},z1=function(e,t,n,i,s){if(Ft(e)&&(e=Ea(e,s,t,n,i)),!Di(e)||e.style&&e.nodeType||pn(e)||Zd(e))return nn(e)?Ea(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ea(e[o],s,t,n,i);return a},w0=function(e,t,n,i,s,a){var o,c,l,u;if(Xn[e]&&(o=new Xn[e]).init(s,o.rawVars?t[e]:z1(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new Nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Rs))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},dr,Au,hf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,x=e._dur,_=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!tf,b=e.timeline,A,M,w,L,S,v,D,I,k,V,Y,H,$;if(b&&(!h||!s)&&(s="none"),e._ease=Zr(s,Ws.ease),e._yEase=f?b0(Zr(f===!0?s:f,Ws.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!b&&!!i.runBackwards,!b||h&&!i.stagger){if(I=m[0]?qr(m[0]).harness:0,H=I&&i[I.prop],A=nl(i,of),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&x?Go:p1),_._lazy=0),a){if(yr(e._startAt=Wt.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Un(c),startAt:null,delay:0,onUpdate:l&&function(){return Kn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!d)&&e._startAt.revert(Go),o&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&x&&!_){if(t&&(o=!1),w=ei({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Un(c),immediateRender:o,stagger:0,parent:p},A),H&&(w[I.prop]=H),yr(e._startAt=Wt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(Go):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,hn,hn);else if(!t)return}for(e._pt=e._ptCache=0,c=x&&Un(c)||c&&!x,M=0;M<m.length;M++){if(S=m[M],D=S._gsap||cf(m)[M]._gsap,e._ptLookup[M]=V={},Mu[D.id]&&vr.length&&tl(),Y=E===m?M:E.indexOf(S),I&&(k=new I).init(S,H||A,e,Y,E)!==!1&&(e._pt=L=new Nn(e._pt,S,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(G){V[G]=L}),k.priority&&(v=1)),!I||H)for(w in A)Xn[w]&&(k=w0(w,A,e,Y,S,E))?k.priority&&(v=1):V[w]=L=ff.call(e,S,w,"get",A[w],Y,E,0,i.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),y&&e._pt&&(dr=e,Pt.killTweensOf(S,V,e.globalTime(t)),$=!e.parent,dr=0),e._pt&&c&&(Mu[D.id]=1)}v&&L0(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&b.render(wi,!0,!0)},V1=function(e,t,n,i,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Au=1,e.vars[t]="+=0",hf(e,o),Au=0,c?za(t+" not eligible for reset"):1;l.push(u)}for(d=l.length;d--;)f=l[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Bt(n)+un(f.e)),f.b&&(f.b=u.s+un(f.b))},G1=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=Xs({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},H1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(pn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ea=function(e,t,n,i,s){return Ft(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?Ga(e):e},A0=lf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",C0={};In(A0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return C0[r]=1});var Wt=function(r){qd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ba(i))||this;var c=o.vars,l=c.duration,u=c.delay,f=c.immediateRender,h=c.stagger,d=c.overwrite,x=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,E=i.parent||Pt,y=(pn(n)||Zd(n)?er(n[0]):"length"in i)?[n]:ci(n),b,A,M,w,L,S,v,D;if(o._targets=y.length?cf(y):za("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,x||h||bo(l)||bo(u)){if(i=o.vars,b=o.timeline=new Tn({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:y}),b.kill(),b.parent=b._dp=Vi(o),b._start=0,h||bo(l)||bo(u)){if(w=y.length,v=h&&h0(h),Di(h))for(L in h)~A0.indexOf(L)&&(D||(D={}),D[L]=h[L]);for(A=0;A<w;A++)M=nl(i,C0),M.stagger=0,p&&(M.yoyoEase=p),D&&Xs(M,D),S=y[A],M.duration=+Ea(l,Vi(o),A,S,y),M.delay=(+Ea(u,Vi(o),A,S,y)||0)-o._delay,!h&&w===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),b.to(S,M,v?v(A,S,y):0),b._ease=ut.none;b.duration()?l=u=0:o.timeline=0}else if(x){ba(ei(b.vars.defaults,{ease:"none"})),b._ease=Zr(x.ease||i.ease||"none");var I=0,k,V,Y;if(pn(x))x.forEach(function(H){return b.to(y,H,">")}),b.duration();else{M={};for(L in x)L==="ease"||L==="easeEach"||H1(L,x[L],M,x.easeEach);for(L in M)for(k=M[L].sort(function(H,$){return H.t-$.t}),I=0,A=0;A<k.length;A++)V=k[A],Y={ease:V.e,duration:(V.t-(A?k[A-1].t:0))/100*l},Y[L]=V.v,b.to(y,Y,I),I+=Y.duration;b.duration()<l&&b.to({},{duration:l-b.duration()})}}l||o.duration(l=b.duration())}else o.timeline=0;return d===!0&&!tf&&(dr=Vi(o),Pt.killTweensOf(y),dr=0),bi(E,Vi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!l&&!x&&o._start===Xt(E._time)&&Un(f)&&S1(Vi(o))&&E.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),m&&l0(Vi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,f=i>c-hn&&!u?c:i<hn?0:i,h,d,x,_,m,p,E,y,b;if(!l)b1(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Xt(f%_),f===c?(x=this._repeat,h=l):(m=Xt(f/_),x=~~m,x&&x===m?(h=l,x--):h>l&&(h=l)),p=this._yoyo&&x&1,p&&(b=this._yEase,h=l-h),m=qs(this._tTime,_),h===o&&!a&&this._initted&&x===m)return this._tTime=f,this;x!==m&&(y&&this._yEase&&y0(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Xt(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(c0(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(b||this._ease)(h/l),this._from&&(this.ratio=E=1-E),!o&&f&&!s&&!m&&(Kn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&bu(this,i,s,a),Kn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&bu(this,i,!0,!0),(i||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&yr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Kn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){Ha||Yn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hf(this,l),u=this._ease(l/this._dur),V1(this,i,s,a,o,u,l,c)?this.resetTo(i,s,a,o,1):(vl(this,0),this.parent||a0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ha(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||ha(this),this.parent&&a!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?ci(i):o,l=this._ptLookup,u=this._pt,f,h,d,x,_,m,p;if((!s||s==="all")&&g1(o,c))return s==="all"&&(this._pt=0),ha(this);for(f=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},In(s,function(E){return _[E]=1}),s=_),s=G1(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){h=l[p],s==="all"?(f[p]=s,x=h,d={}):(d=f[p]=f[p]||{},x=s);for(_ in x)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&xl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ha(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ya(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ya(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Pt.killTweensOf(i,s,a)},e}(Wa);ei(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Tn,t=Eu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var df=function(e,t,n){return e[t]=n},R0=function(e,t,n){return e[t](n)},W1=function(e,t,n,i){return e[t](i.fp,n)},X1=function(e,t,n){return e.setAttribute(t,n)},pf=function(e,t){return Ft(e[t])?R0:nf(e[t])&&e.setAttribute?X1:df},P0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},q1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},D0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},mf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Y1=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Z1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},K1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},L0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Nn=function(){function r(t,n,i,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||P0,this.d=c||this,this.set=l||df,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=K1,this.m=n,this.mt=s,this.tween=i},r}();In(lf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return of[r]=1});Qn.TweenMax=Qn.TweenLite=Wt;Qn.TimelineLite=Qn.TimelineMax=Tn;Pt=new Tn({sortChildren:!1,defaults:Ws,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=M0;var Kr=[],Wo={},j1=[],Nh=0,$1=0,nc=function(e){return(Wo[e]||j1).map(function(t){return t()})},Cu=function(){var e=Date.now(),t=[];e-Nh>2&&(nc("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=gi.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),nc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Nh=e,nc("matchMedia"))},U0=function(){function r(t,n){this.selector=n&&Tu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)&&(s=i,i=n,n=Ft);var a=this,o=function(){var l=At,u=a.selector,f;return l&&l!==a&&l.data.push(a),s&&(a.selector=Tu(s)),At=a,f=i.apply(a,arguments),Ft(f)&&a._r.push(f),At=l,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ft?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Tn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Wt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Kr.length;a--;)Kr[a].id===this.id&&Kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),J1=function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Di(n)||(n={matches:n});var a=new U0(0,s||this.scope),o=a.conditions={},c,l,u;At&&!a.selector&&(a.selector=At.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=gi.matchMedia(n[l]),c&&(Kr.indexOf(a)<0&&Kr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(Cu):c.addEventListener("change",Cu)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),rl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return g0(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=ci(e)[0]);var s=qr(e||{}).get,a=n?s0:r0;return n==="native"&&(n=""),e&&(t?a((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(o,c,l){return a((Xn[o]&&Xn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var i=e.map(function(u){return On.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Xn[t],o=qr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var f=new a;Rs._pt=0,f.init(e,n?u+n:u,Rs,0,[e]),f.render(1,f),Rs._pt&&mf(1,Rs)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=On.to(e,ei((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zr(e.ease,Ws.ease)),Ph(Ws,e||{})},config:function(e){return Ph(Jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xn[o]&&!Qn[o]&&za(t+" effect requires "+o+" plugin.")}),Jl[t]=function(o,c,l){return n(ci(o),ei(c||{},s),l)},a&&(Tn.prototype[t]=function(o,c,l){return this.add(Jl[t](o,Di(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ut[e]=Zr(t)},parseEase:function(e,t){return arguments.length?Zr(e,t):ut},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=Un(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&bi(n,i,i._start-i._delay),i=s;return bi(Pt,n,0),n},context:function(e,t){return e?new U0(e,t):At},matchMedia:function(e){return new J1(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Cu()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:P1,wrapYoyo:D1,distribute:h0,random:p0,snap:d0,normalize:R1,getUnit:un,clamp:T1,splitColor:v0,toArray:ci,selector:Tu,mapRange:_0,pipe:A1,unitize:C1,interpolate:L1,shuffle:f0},install:Qd,effects:Jl,ticker:Yn,updateRoot:Tn.updateRoot,plugins:Xn,globalTimeline:Pt,core:{PropTween:Nn,globals:e0,Tween:Wt,Timeline:Tn,Animation:Wa,getCache:qr,_removeLinkedListItem:xl,reverting:function(){return sn},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return tf=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return rl[r]=Wt[r]});Yn.add(Tn.updateRoot);Rs=rl.to({},{duration:0});var Q1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},e3=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Q1(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ic=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(nn(s)&&(c={},In(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}e3(o,s)}}}},On=rl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ic("roundProps",wu),ic("modifiers"),ic("snap",d0))||rl;Wt.version=Tn.version=On.version="3.13.0";Jd=1;rf()&&Zs();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fh,pr,Is,_f,Wr,Oh,xf,t3=function(){return typeof window<"u"},tr={},Or=180/Math.PI,Ns=Math.PI/180,bs=Math.atan2,Bh=1e8,gf=/([A-Z])/g,n3=/(left|right|width|margin|padding|x)/i,i3=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ru=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},r3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},s3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},a3=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},I0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},N0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},o3=function(e,t,n){return e.style[t]=n},l3=function(e,t,n){return e.style.setProperty(t,n)},c3=function(e,t,n){return e._gsap[t]=n},u3=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},f3=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},h3=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Dt="transform",Fn=Dt+"Origin",d3=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ei[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gi(i,o)}):this.tfm[e]=a.x?a[e]:Gi(i,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return Ei.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Dt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},F0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},p3=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xf(),(!s||!s.isStart)&&!n[Dt]&&(F0(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},O0=function(e,t){var n={target:e,props:[],revert:p3,save:d3};return e._gsap||On.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},B0,Pu=function(e,t){var n=pr.createElementNS?pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pr.createElement(e);return n&&n.style?n:pr.createElement(e)},ui=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ks(t)||t,1)||""},kh="O,Moz,ms,Ms,Webkit".split(","),Ks=function(e,t,n){var i=t||Wr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(kh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?kh[a]:"")+e},Du=function(){t3()&&window.document&&(Fh=window,pr=Fh.document,Is=pr.documentElement,Wr=Pu("div")||{style:{}},Pu("div"),Dt=Ks(Dt),Fn=Dt+"Origin",Wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",B0=!!Ks("perspective"),xf=On.core.reverting,_f=1)},zh=function(e){var t=e.ownerSVGElement,n=Pu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Is.removeChild(n),s},Vh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},k0=function(e){var t,n;try{t=e.getBBox()}catch{t=zh(e),n=1}return t&&(t.width||t.height)||n||(t=zh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vh(e,["x","cx","x1"])||0,y:+Vh(e,["y","cy","y1"])||0,width:0,height:0}:t},z0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&k0(e))},ts=function(e,t){if(t){var n=e.style,i;t in tr&&t!==Fn&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(gf,"-$1").toLowerCase())):n.removeAttribute(t)}},mr=function(e,t,n,i,s,a){var o=new Nn(e._pt,t,n,0,1,a?N0:I0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Gh={deg:1,rad:1,turn:1},m3={grid:1,flex:1},Er=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Wr.style,c=n3.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),f=100,h=i==="px",d=i==="%",x,_,m,p;if(i===a||!s||Gh[i]||Gh[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&z0(e),(d||a==="%")&&(tr[t]||~t.indexOf("adius")))return x=p?e.getBBox()[c?"width":"height"]:e[u],Bt(d?s/x*f:s/100*x);if(o[c?"width":"height"]=f+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===pr||!_.appendChild)&&(_=pr.body),m=_._gsap,m&&d&&m.width&&c&&m.time===Yn.time&&!m.uncache)return Bt(s/m.width*f);if(d&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+i,x=e[u],E?e.style[t]=E:ts(e,t)}else(d||a==="%")&&!m3[ui(_,"display")]&&(o.position=ui(e,"position")),_===e&&(o.position="static"),_.appendChild(Wr),x=Wr[u],_.removeChild(Wr),o.position="absolute";return c&&d&&(m=qr(_),m.time=Yn.time,m.width=_[u]),Bt(h?x*s/f:x&&s?f/x*s:0)},Gi=function(e,t,n,i){var s;return _f||Du(),t in Ei&&t!=="transform"&&(t=Ei[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=qa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:al(ui(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=sl[t]&&sl[t](e,t,n)||ui(e,t)||n0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},_3=function(e,t,n,i){if(!n||n==="none"){var s=Ks(t,e,1),a=s&&ui(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ui(e,"borderTopColor"))}var o=new Nn(this._pt,e.style,t,0,1,D0),c=0,l=0,u,f,h,d,x,_,m,p,E,y,b,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ui(e,t)||i,_?e.style[t]=_:ts(e,t)),u=[n,i],M0(u),n=u[0],i=u[1],h=n.match(Cs)||[],A=i.match(Cs)||[],A.length){for(;f=Cs.exec(i);)m=f[0],E=i.substring(c,f.index),x?x=(x+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(x=1),m!==(_=h[l++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),m.charAt(1)==="="&&(m=Us(d,m)+b),p=parseFloat(m),y=m.substr((p+"").length),c=Cs.lastIndex-y.length,y||(y=y||Jn.units[t]||b,c===i.length&&(i+=y,o.e+=y)),b!==y&&(d=Er(e,t,_,y)||0),o._pt={_next:o._pt,p:E||l===1?E:",",s:d,c:p-d,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?N0:I0;return jd.test(i)&&(o.e=0),this._pt=o,o},Hh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},x3=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Hh[n]||n,t[1]=Hh[i]||i,t.join(" ")},g3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],tr[o]&&(c=1,o=o==="transformOrigin"?Fn:Dt),ts(n,o);c&&(ts(n,Dt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qa(n,1),a.uncache=1,F0(i)))}},sl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Nn(e._pt,t,n,0,0,g3);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Xa=[1,0,0,1,0,0],V0={},G0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wh=function(e){var t=ui(e,Dt);return G0(t)?Xa:t.substr(7).match(Kd).map(Bt)},vf=function(e,t){var n=e._gsap||qr(e),i=e.style,s=Wh(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Xa:s):(s===Xa&&!e.offsetParent&&e!==Is&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Is.appendChild(e)),s=Wh(e),c?i.display=c:ts(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lu=function(e,t,n,i,s,a){var o=e._gsap,c=s||vf(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=c[0],x=c[1],_=c[2],m=c[3],p=c[4],E=c[5],y=t.split(" "),b=parseFloat(y[0])||0,A=parseFloat(y[1])||0,M,w,L,S;n?c!==Xa&&(w=d*m-x*_)&&(L=b*(m/w)+A*(-_/w)+(_*E-m*p)/w,S=b*(-x/w)+A*(d/w)-(d*E-x*p)/w,b=L,A=S):(M=k0(e),b=M.x+(~y[0].indexOf("%")?b/100*M.width:b),A=M.y+(~(y[1]||y[0]).indexOf("%")?A/100*M.height:A)),i||i!==!1&&o.smooth?(p=b-l,E=A-u,o.xOffset=f+(p*d+E*_)-p,o.yOffset=h+(p*x+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Fn]="0px 0px",a&&(mr(a,o,"xOrigin",l,b),mr(a,o,"yOrigin",u,A),mr(a,o,"xOffset",f,o.xOffset),mr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+A)},qa=function(e,t){var n=e._gsap||new T0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=ui(e,Fn)||"0",u,f,h,d,x,_,m,p,E,y,b,A,M,w,L,S,v,D,I,k,V,Y,H,$,G,se,P,me,Fe,Ze,Oe,Xe;return u=f=h=_=m=p=E=y=b=0,d=x=1,n.svg=!!(e.getCTM&&z0(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Dt]!=="none"?c[Dt]:"")),i.scale=i.rotate=i.translate="none"),w=vf(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Lu(e,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,M=n.yOrigin||0,w!==Xa&&(D=w[0],I=w[1],k=w[2],V=w[3],u=Y=w[4],f=H=w[5],w.length===6?(d=Math.sqrt(D*D+I*I),x=Math.sqrt(V*V+k*k),_=D||I?bs(I,D)*Or:0,E=k||V?bs(k,V)*Or+_:0,E&&(x*=Math.abs(Math.cos(E*Ns))),n.svg&&(u-=A-(A*D+M*k),f-=M-(A*I+M*V))):(Xe=w[6],Ze=w[7],P=w[8],me=w[9],Fe=w[10],Oe=w[11],u=w[12],f=w[13],h=w[14],L=bs(Xe,Fe),m=L*Or,L&&(S=Math.cos(-L),v=Math.sin(-L),$=Y*S+P*v,G=H*S+me*v,se=Xe*S+Fe*v,P=Y*-v+P*S,me=H*-v+me*S,Fe=Xe*-v+Fe*S,Oe=Ze*-v+Oe*S,Y=$,H=G,Xe=se),L=bs(-k,Fe),p=L*Or,L&&(S=Math.cos(-L),v=Math.sin(-L),$=D*S-P*v,G=I*S-me*v,se=k*S-Fe*v,Oe=V*v+Oe*S,D=$,I=G,k=se),L=bs(I,D),_=L*Or,L&&(S=Math.cos(L),v=Math.sin(L),$=D*S+I*v,G=Y*S+H*v,I=I*S-D*v,H=H*S-Y*v,D=$,Y=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Bt(Math.sqrt(D*D+I*I+k*k)),x=Bt(Math.sqrt(H*H+Xe*Xe)),L=bs(Y,H),E=Math.abs(L)>2e-4?L*Or:0,b=Oe?1/(Oe<0?-Oe:Oe):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!G0(ui(e,Dt)),$&&e.setAttribute("transform",$))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Bt(d),n.scaleY=Bt(x),n.rotation=Bt(_)+o,n.rotationX=Bt(m)+o,n.rotationY=Bt(p)+o,n.skewX=E+o,n.skewY=y+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=al(l)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?S3:B0?H0:v3,n.uncache=0,n},al=function(e){return(e=e.split(" "))[0]+" "+e[1]},rc=function(e,t,n){var i=un(t);return Bt(parseFloat(t)+parseFloat(Er(e,"x",n+"px",i)))+i},v3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,H0(e,t)},Ir="0deg",la="0px",Nr=") ",H0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,x=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,y=n.zOrigin,b="",A=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Ir||u!==Ir)){var M=parseFloat(u)*Ns,w=Math.sin(M),L=Math.cos(M),S;M=parseFloat(f)*Ns,S=Math.cos(M),a=rc(E,a,w*S*-y),o=rc(E,o,-Math.sin(M)*-y),c=rc(E,c,L*S*-y+y)}m!==la&&(b+="perspective("+m+Nr),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(A||a!==la||o!==la||c!==la)&&(b+=c!==la||A?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Nr),l!==Ir&&(b+="rotate("+l+Nr),u!==Ir&&(b+="rotateY("+u+Nr),f!==Ir&&(b+="rotateX("+f+Nr),(h!==Ir||d!==Ir)&&(b+="skew("+h+", "+d+Nr),(x!==1||_!==1)&&(b+="scale("+x+", "+_+Nr),E.style[Dt]=b||"translate(0, 0)"},S3=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,x=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,y=parseFloat(a),b=parseFloat(o),A,M,w,L,S;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Ns,l*=Ns,A=Math.cos(c)*f,M=Math.sin(c)*f,w=Math.sin(c-l)*-h,L=Math.cos(c-l)*h,l&&(u*=Ns,S=Math.tan(l-u),S=Math.sqrt(1+S*S),w*=S,L*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),A*=S,M*=S)),A=Bt(A),M=Bt(M),w=Bt(w),L=Bt(L)):(A=f,L=h,M=w=0),(y&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(y=Er(d,"x",a,"px"),b=Er(d,"y",o,"px")),(x||_||m||p)&&(y=Bt(y+x-(x*A+_*w)+m),b=Bt(b+_-(x*M+_*L)+p)),(i||s)&&(S=d.getBBox(),y=Bt(y+i/100*S.width),b=Bt(b+s/100*S.height)),S="matrix("+A+","+M+","+w+","+L+","+y+","+b+")",d.setAttribute("transform",S),E&&(d.style[Dt]=S)},M3=function(e,t,n,i,s){var a=360,o=nn(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Or:1),l=c-i,u=i+l+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-360)),f==="cw"&&l<0?l=(l+a*Bh)%a-~~(l/a)*a:f==="ccw"&&l>0&&(l=(l-a*Bh)%a-~~(l/a)*a)),e._pt=h=new Nn(e._pt,t,n,i,l,r3),h.e=u,h.u="deg",e._props.push(n),h},Xh=function(e,t){for(var n in t)e[n]=t[n];return e},b3=function(e,t,n){var i=Xh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,f,h,d,x;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Dt]=t,o=qa(n,1),ts(n,Dt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Dt],a[Dt]=t,o=qa(n,1),a[Dt]=l);for(c in tr)l=i[c],u=o[c],l!==u&&s.indexOf(c)<0&&(d=un(l),x=un(u),f=d!==x?Er(n,c,l,x):parseFloat(l),h=parseFloat(u),e._pt=new Nn(e._pt,o,c,f,h-f,Ru),e._pt.u=x||0,e._props.push(c));Xh(o,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});sl[e>1?"border"+r:r]=function(o,c,l,u,f){var h,d;if(arguments.length<4)return h=a.map(function(x){return Gi(o,x,l)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(x,_){return d[x]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(c,d,f)}});var W0={name:"css",register:Du,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,f,h,d,x,_,m,p,E,y,b,A,M,w,L;_f||Du(),this.styles=this.styles||O0(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Xn[_]&&w0(_,t,n,i,e,s)))){if(d=typeof u,x=sl[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ga(u)),x)x(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Sr.lastIndex=0,Sr.test(l)||(m=un(l),p=un(u)),p?m!==p&&(l=Er(e,_,l,p)+p):m&&(u+=m),this.add(o,"setProperty",l,u,i,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],nn(l)&&~l.indexOf("random(")&&(l=Ga(l)),un(l+"")||l==="auto"||(l+=Jn.units[_]||un(Gi(e,_))||""),(l+"").charAt(1)==="="&&(l=Gi(e,_))):l=Gi(e,_),h=parseFloat(l),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in Ei&&(_==="autoAlpha"&&(h===1&&Gi(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,o.visibility),mr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ei[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in tr,y){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=ui(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),b||(A=e._gsap,A.renderTransform&&!t.parseTransform||qa(e,t.parseTransform),M=t.smoothOrigin!==!1&&A.smooth,b=this._pt=new Nn(this._pt,o,Dt,0,1,A.renderTransform,A,0,-1),b.dep=1),_==="scale")this._pt=new Nn(this._pt,A,"scaleY",A.scaleY,(E?Us(A.scaleY,E+f):f)-A.scaleY||0,Ru),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Fn,0,o[Fn]),u=x3(u),A.svg?Lu(e,u,0,M,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&mr(this,A,"zOrigin",A.zOrigin,p),mr(this,o,_,al(l),al(u)));continue}else if(_==="svgOrigin"){Lu(e,u,1,M,0,this);continue}else if(_ in V0){M3(this,A,_,h,E?Us(h,E+u):u);continue}else if(_==="smoothOrigin"){mr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){b3(this,u,e);continue}}else _ in o||(_=Ks(_)||_);if(y||(f||f===0)&&(h||h===0)&&!i3.test(u)&&_ in o)m=(l+"").substr((h+"").length),f||(f=0),p=un(u)||(_ in Jn.units?Jn.units[_]:m),m!==p&&(h=Er(e,_,l,p)),this._pt=new Nn(this._pt,y?A:o,_,h,(E?Us(h,E+f):f)-h,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?a3:Ru),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=s3);else if(_ in o)_3.call(this,e,_,l,E?E+u:u);else if(_ in e)this.add(e,_,l||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){af(_,u);continue}y||(_ in o?L.push(_,0,o[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,l||e[_])),a.push(_)}}w&&L0(this)},render:function(e,t){if(t.tween._time||!xf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:Ei,getSetter:function(e,t,n){var i=Ei[t];return i&&i.indexOf(",")<0&&(t=i),t in tr&&t!==Fn&&(e._gsap.x||Gi(e,"x"))?n&&Oh===n?t==="scale"?u3:c3:(Oh=n||{})&&(t==="scale"?f3:h3):e.style&&!nf(e.style[t])?o3:~t.indexOf("-")?l3:pf(e,t)},core:{_removeProperty:ts,_getMatrix:vf}};On.utils.checkPrefix=Ks;On.core.getStyleSaver=O0;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){tr[s]=1});In(e,function(s){Jn.units[s]="deg",V0[s]=1}),Ei[i[13]]=r+","+e,In(n,function(s){var a=s.split(":");Ei[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});On.registerPlugin(W0);var Qa=On.registerPlugin(W0)||On;Qa.core.Tween;function y3(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function E3(r,e,t){return e&&y3(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rn,Xo,Zn,_r,xr,Fs,X0,Br,Ta,q0,Yi,mi,Y0,Z0=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},K0=1,Ps=[],rt=[],Ai=[],wa=Date.now,Uu=function(e,t){return t},T3=function(){var e=Ta.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Ai),rt=n,Ai=i,Uu=function(a,o){return t[a](o)}},Mr=function(e,t){return~Ai.indexOf(e)&&Ai[Ai.indexOf(e)+1][t]},Aa=function(e){return!!~q0.indexOf(e)},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},yo="scrollLeft",Eo="scrollTop",Iu=function(){return Yi&&Yi.isPressed||rt.cache++},ol=function(e,t){var n=function i(s){if(s||s===0){K0&&(Zn.history.scrollRestoration="manual");var a=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),e(s),i.cacheID=rt.cache,a&&Uu("ss",s)}else(t||rt.cache!==i.cacheID||Uu("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},wn={s:yo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ol(function(r){return arguments.length?Zn.scrollTo(r,Kt.sc()):Zn.pageXOffset||_r[yo]||xr[yo]||Fs[yo]||0})},Kt={s:Eo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:ol(function(r){return arguments.length?Zn.scrollTo(wn.sc(),r):Zn.pageYOffset||_r[Eo]||xr[Eo]||Fs[Eo]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},w3=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Tr=function(e,t){var n=t.s,i=t.sc;Aa(e)&&(e=_r.scrollingElement||xr);var s=rt.indexOf(e),a=i===Kt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||vn(e,"scroll",Iu);var o=rt[s+a],c=o||(rt[s+a]=ol(Mr(e,n),!0)||(Aa(e)?i:ol(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),c},Nu=function(e,t,n){var i=e,s=e,a=wa(),o=a,c=t||50,l=Math.max(500,c*3),u=function(x,_){var m=wa();_||m-a>c?(s=i,i=x,o=a,a=m):n?i+=x:i=s+(x-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(x){var _=o,m=s,p=wa();return(x||x===0)&&x!==i&&u(x),a===o||p-o>l?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},ca=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},qh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},j0=function(){Ta=rn.core.globals().ScrollTrigger,Ta&&Ta.core&&T3()},$0=function(e){return rn=e||Z0(),!Xo&&rn&&typeof document<"u"&&document.body&&(Zn=window,_r=document,xr=_r.documentElement,Fs=_r.body,q0=[Zn,_r,xr,Fs],rn.utils.clamp,Y0=rn.core.context||function(){},Br="onpointerenter"in Fs?"pointer":"mouse",X0=zt.isTouch=Zn.matchMedia&&Zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,mi=zt.eventTypes=("ontouchstart"in xr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return K0=0},500),j0(),Xo=1),Xo};wn.op=Kt;rt.cache=0;var zt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Xo||$0(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Ta||j0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,x=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,E=n.onDrag,y=n.onPress,b=n.onRelease,A=n.onRight,M=n.onLeft,w=n.onUp,L=n.onDown,S=n.onChangeX,v=n.onChangeY,D=n.onChange,I=n.onToggleX,k=n.onToggleY,V=n.onHover,Y=n.onHoverEnd,H=n.onMove,$=n.ignoreCheck,G=n.isNormalizer,se=n.onGestureStart,P=n.onGestureEnd,me=n.onWheel,Fe=n.onEnable,Ze=n.onDisable,Oe=n.onClick,Xe=n.scrollSpeed,ee=n.capture,te=n.allowClicks,_e=n.lockAxis,Ue=n.onLockAxis;this.target=o=Dn(o)||xr,this.vars=n,d&&(d=rn.utils.toArray(d)),i=i||1e-9,s=s||0,x=x||1,Xe=Xe||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Zn.getComputedStyle(Fs).lineHeight)||22);var Ae,Be,ot,be,qe,U,Ve,z=this,je=0,Z=0,O=n.passive||!u&&n.passive!==!1,K=Tr(o,wn),ce=Tr(o,Kt),C=K(),g=ce(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&mi[0]==="pointerdown",J=Aa(o),j=o.ownerDocument||_r,q=[0,0,0],he=[0,0,0],ae=0,Te=function(){return ae=wa()},ie=function(De,$e){return(z.event=De)&&d&&w3(De.target,d)||$e&&N&&De.pointerType!=="touch"||$&&$(De,$e)},le=function(){z._vx.reset(),z._vy.reset(),Be.pause(),f&&f(z)},fe=function(){var De=z.deltaX=qh(q),$e=z.deltaY=qh(he),Se=Math.abs(De)>=i,Ye=Math.abs($e)>=i;D&&(Se||Ye)&&D(z,De,$e,q,he),Se&&(A&&z.deltaX>0&&A(z),M&&z.deltaX<0&&M(z),S&&S(z),I&&z.deltaX<0!=je<0&&I(z),je=z.deltaX,q[0]=q[1]=q[2]=0),Ye&&(L&&z.deltaY>0&&L(z),w&&z.deltaY<0&&w(z),v&&v(z),k&&z.deltaY<0!=Z<0&&k(z),Z=z.deltaY,he[0]=he[1]=he[2]=0),(be||ot)&&(H&&H(z),ot&&(m&&ot===1&&m(z),E&&E(z),ot=0),be=!1),U&&!(U=!1)&&Ue&&Ue(z),qe&&(me(z),qe=!1),Ae=0},Pe=function(De,$e,Se){q[Se]+=De,he[Se]+=$e,z._vx.update(De),z._vy.update($e),l?Ae||(Ae=requestAnimationFrame(fe)):fe()},Ie=function(De,$e){_e&&!Ve&&(z.axis=Ve=Math.abs(De)>Math.abs($e)?"x":"y",U=!0),Ve!=="y"&&(q[2]+=De,z._vx.update(De,!0)),Ve!=="x"&&(he[2]+=$e,z._vy.update($e,!0)),l?Ae||(Ae=requestAnimationFrame(fe)):fe()},xe=function(De){if(!ie(De,1)){De=ca(De,u);var $e=De.clientX,Se=De.clientY,Ye=$e-z.x,ke=Se-z.y,He=z.isDragging;z.x=$e,z.y=Se,(He||(Ye||ke)&&(Math.abs(z.startX-$e)>=s||Math.abs(z.startY-Se)>=s))&&(ot=He?2:1,He||(z.isDragging=!0),Ie(Ye,ke))}},Ne=z.onPress=function(ve){ie(ve,1)||ve&&ve.button||(z.axis=Ve=null,Be.pause(),z.isPressed=!0,ve=ca(ve),je=Z=0,z.startX=z.x=ve.clientX,z.startY=z.y=ve.clientY,z._vx.reset(),z._vy.reset(),vn(G?o:j,mi[1],xe,O,!0),z.deltaX=z.deltaY=0,y&&y(z))},R=z.onRelease=function(ve){if(!ie(ve,1)){xn(G?o:j,mi[1],xe,!0);var De=!isNaN(z.y-z.startY),$e=z.isDragging,Se=$e&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ye=ca(ve);!Se&&De&&(z._vx.reset(),z._vy.reset(),u&&te&&rn.delayedCall(.08,function(){if(wa()-ae>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(j.createEvent){var ke=j.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,Zn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(ke)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&$e&&!G&&Be.restart(!0),ot&&fe(),p&&$e&&p(z),b&&b(z,Se)}},pe=function(De){return De.touches&&De.touches.length>1&&(z.isGesturing=!0)&&se(De,z.isDragging)},ue=function(){return(z.isGesturing=!1)||P(z)},oe=function(De){if(!ie(De)){var $e=K(),Se=ce();Pe(($e-C)*Xe,(Se-g)*Xe,1),C=$e,g=Se,f&&Be.restart(!0)}},re=function(De){if(!ie(De)){De=ca(De,u),me&&(qe=!0);var $e=(De.deltaMode===1?c:De.deltaMode===2?Zn.innerHeight:1)*x;Pe(De.deltaX*$e,De.deltaY*$e,0),f&&!G&&Be.restart(!0)}},ne=function(De){if(!ie(De)){var $e=De.clientX,Se=De.clientY,Ye=$e-z.x,ke=Se-z.y;z.x=$e,z.y=Se,be=!0,f&&Be.restart(!0),(Ye||ke)&&Ie(Ye,ke)}},ye=function(De){z.event=De,V(z)},Ce=function(De){z.event=De,Y(z)},at=function(De){return ie(De)||ca(De,u)&&Oe(z)};Be=z._dc=rn.delayedCall(h||.25,le).pause(),z.deltaX=z.deltaY=0,z._vx=Nu(0,50,!0),z._vy=Nu(0,50,!0),z.scrollX=K,z.scrollY=ce,z.isDragging=z.isGesturing=z.isPressed=!1,Y0(this),z.enable=function(ve){return z.isEnabled||(vn(J?j:o,"scroll",Iu),a.indexOf("scroll")>=0&&vn(J?j:o,"scroll",oe,O,ee),a.indexOf("wheel")>=0&&vn(o,"wheel",re,O,ee),(a.indexOf("touch")>=0&&X0||a.indexOf("pointer")>=0)&&(vn(o,mi[0],Ne,O,ee),vn(j,mi[2],R),vn(j,mi[3],R),te&&vn(o,"click",Te,!0,!0),Oe&&vn(o,"click",at),se&&vn(j,"gesturestart",pe),P&&vn(j,"gestureend",ue),V&&vn(o,Br+"enter",ye),Y&&vn(o,Br+"leave",Ce),H&&vn(o,Br+"move",ne)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=be=ot=!1,z._vx.reset(),z._vy.reset(),C=K(),g=ce(),ve&&ve.type&&Ne(ve),Fe&&Fe(z)),z},z.disable=function(){z.isEnabled&&(Ps.filter(function(ve){return ve!==z&&Aa(ve.target)}).length||xn(J?j:o,"scroll",Iu),z.isPressed&&(z._vx.reset(),z._vy.reset(),xn(G?o:j,mi[1],xe,!0)),xn(J?j:o,"scroll",oe,ee),xn(o,"wheel",re,ee),xn(o,mi[0],Ne,ee),xn(j,mi[2],R),xn(j,mi[3],R),xn(o,"click",Te,!0),xn(o,"click",at),xn(j,"gesturestart",pe),xn(j,"gestureend",ue),xn(o,Br+"enter",ye),xn(o,Br+"leave",Ce),xn(o,Br+"move",ne),z.isEnabled=z.isPressed=z.isDragging=!1,Ze&&Ze(z))},z.kill=z.revert=function(){z.disable();var ve=Ps.indexOf(z);ve>=0&&Ps.splice(ve,1),Yi===z&&(Yi=0)},Ps.push(z),G&&Aa(o)&&(Yi=z),z.enable(_)},E3(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();zt.version="3.13.0";zt.create=function(r){return new zt(r)};zt.register=$0;zt.getAll=function(){return Ps.slice()};zt.getById=function(r){return Ps.filter(function(e){return e.vars.id===r})[0]};Z0()&&rn.registerPlugin(zt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Re,ws,it,yt,qn,xt,Sf,ll,Ya,Ca,pa,To,ln,Sl,Fu,yn,Yh,Zh,As,J0,sc,Q0,bn,Ou,ep,tp,cr,Bu,Mf,Os,bf,cl,ku,ac,wo=1,cn=Date.now,oc=cn(),fi=0,ma=0,Kh=function(e,t,n){var i=Hn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},jh=function(e,t){return t&&(!Hn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},A3=function r(){return ma&&requestAnimationFrame(r)},$h=function(){return Sl=1},Jh=function(){return Sl=0},vi=function(e){return e},_a=function(e){return Math.round(e*1e5)/1e5||0},np=function(){return typeof window<"u"},ip=function(){return Re||np()&&(Re=window.gsap)&&Re.registerPlugin&&Re},ns=function(e){return!!~Sf.indexOf(e)},rp=function(e){return(e==="Height"?bf:it["inner"+e])||qn["client"+e]||xt["client"+e]},sp=function(e){return Mr(e,"getBoundingClientRect")||(ns(e)?function(){return jo.width=it.innerWidth,jo.height=bf,jo}:function(){return Wi(e)})},C3=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Mr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?rp(s):e["client"+s])||0}},R3=function(e,t){return!t||~Ai.indexOf(e)?sp(e):function(){return jo}},Ti=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Mr(e,n))?a()-sp(e)()[s]:ns(e)?(qn[n]||xt[n])-rp(i):e[n]-e["offset"+i])},Ao=function(e,t){for(var n=0;n<As.length;n+=3)(!t||~t.indexOf(As[n+1]))&&e(As[n],As[n+1],As[n+2])},Hn=function(e){return typeof e=="string"},fn=function(e){return typeof e=="function"},xa=function(e){return typeof e=="number"},kr=function(e){return typeof e=="object"},ua=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},lc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ys=Math.abs,ap="left",op="top",yf="right",Ef="bottom",jr="width",$r="height",Ra="Right",Pa="Left",Da="Top",La="Bottom",Ht="padding",ai="margin",js="Width",Tf="Height",Zt="px",oi=function(e){return it.getComputedStyle(e)},P3=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Qh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wi=function(e,t){var n=t&&oi(e)[Fu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ul=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},lp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},D3=function(e){return function(t){return Re.utils.snap(lp(e),t)}},wf=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},L3=function(e){return function(t,n){return wf(lp(e))(t,n.direction)}},Co=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ro=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ed={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Po={toggleActions:"play",anticipatePin:0},fl={top:0,left:0,center:.5,bottom:1,right:1},qo=function(e,t){if(Hn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fl?fl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Do=function(e,t,n,i,s,a,o,c){var l=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,x=yt.createElement("div"),_=ns(n)||Mr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:n,E=e.indexOf("start")!==-1,y=E?l:u,b="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(b+=(i===Kt?yf:Ef)+":"+(a+parseFloat(h))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),x._isStart=E,x.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),x.style.cssText=b,x.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(x,p.children[0]):p.appendChild(x),x._offset=x["offset"+i.op.d2],Yo(x,0,i,E),x},Yo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+js]=1,s["border"+o+js]=0,s[n.p]=t+"px",Re.set(e,s)},tt=[],zu={},Za,td=function(){return cn()-fi>34&&(Za||(Za=requestAnimationFrame($i)))},Es=function(){(!bn||!bn.isPressed||bn.startX>xt.clientWidth)&&(rt.cache++,bn?Za||(Za=requestAnimationFrame($i)):$i(),fi||rs("scrollStart"),fi=cn())},cc=function(){tp=it.innerWidth,ep=it.innerHeight},ga=function(e){rt.cache++,(e===!0||!ln&&!Q0&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Ou||tp!==it.innerWidth||Math.abs(it.innerHeight-ep)>it.innerHeight*.25))&&ll.restart(!0)},is={},U3=[],cp=function r(){return en(st,"scrollEnd",r)||Xr(!0)},rs=function(e){return is[e]&&is[e].map(function(t){return t()})||U3},Gn=[],up=function(e){for(var t=0;t<Gn.length;t+=5)(!e||Gn[t+4]&&Gn[t+4].query===e)&&(Gn[t].style.cssText=Gn[t+1],Gn[t].getBBox&&Gn[t].setAttribute("transform",Gn[t+2]||""),Gn[t+3].uncache=1)},Af=function(e,t){var n;for(yn=0;yn<tt.length;yn++)n=tt[yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));cl=!0,t&&up(t),t||rs("revert")},fp=function(e,t){rt.cache++,(t||!En)&&rt.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),Hn(e)&&(it.history.scrollRestoration=Mf=e)},En,Jr=0,nd,I3=function(){if(nd!==Jr){var e=nd=Jr;requestAnimationFrame(function(){return e===Jr&&Xr(!0)})}},hp=function(){xt.appendChild(Os),bf=!bn&&Os.offsetHeight||it.innerHeight,xt.removeChild(Os)},id=function(e){return Ya(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Xr=function(e,t){if(qn=yt.documentElement,xt=yt.body,Sf=[it,yt,qn,xt],fi&&!e&&!cl){tn(st,"scrollEnd",cp);return}hp(),En=st.isRefreshing=!0,rt.forEach(function(i){return fn(i)&&++i.cacheID&&(i.rec=i())});var n=rs("refreshInit");J0&&st.sort(),t||Af(),rt.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),cl=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),ku=1,id(!0),tt.forEach(function(i){var s=Ti(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),id(!1),ku=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),fp(Mf,1),ll.pause(),Jr++,En=2,$i(2),tt.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=st.isRefreshing=!1,rs("refresh")},Vu=0,Zo=1,Ua,$i=function(e){if(e===2||!En&&!cl){st.isUpdating=!0,Ua&&Ua.update(0);var t=tt.length,n=cn(),i=n-oc>=50,s=t&&tt[0].scroll();if(Zo=Vu>s?-1:1,En||(Vu=s),i&&(fi&&!Sl&&n-fi>200&&(fi=0,rs("scrollEnd")),pa=oc,oc=n),Zo<0){for(yn=t;yn-- >0;)tt[yn]&&tt[yn].update(0,i);Zo=1}else for(yn=0;yn<t;yn++)tt[yn]&&tt[yn].update(0,i);st.isUpdating=!1}Za=0},Gu=[ap,op,Ef,yf,ai+La,ai+Ra,ai+Da,ai+Pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ko=Gu.concat([jr,$r,"boxSizing","max"+js,"max"+Tf,"position",ai,Ht,Ht+Da,Ht+Ra,Ht+La,Ht+Pa]),N3=function(e,t,n){Bs(n);var i=e._gsap;if(i.spacerIsNative)Bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},uc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Gu.length,a=t.style,o=e.style,c;s--;)c=Gu[s],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ef]=o[yf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[jr]=ul(e,wn)+Zt,a[$r]=ul(e,Kt)+Zt,a[Ht]=o[ai]=o[op]=o[ap]="0",Bs(i),o[jr]=o["max"+js]=n[jr],o[$r]=o["max"+Tf]=n[$r],o[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},F3=/([A-Z])/g,Bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(F3,"-$1").toLowerCase())}},Lo=function(e){for(var t=Ko.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ko[s],n[Ko[s]]);return i.t=e,i},O3=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},jo={left:0,top:0},rd=function(e,t,n,i,s,a,o,c,l,u,f,h,d,x){fn(e)&&(e=e(c)),Hn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?qo("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,E;if(d&&d.seek(0),isNaN(e)||(e=+e),xa(e))d&&(e=Re.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Yo(o,n,i,!0);else{fn(t)&&(t=t(c));var y=(e||"0").split(" "),b,A,M,w;E=Dn(t,c)||xt,b=Wi(E)||{},(!b||!b.left&&!b.top)&&oi(E).display==="none"&&(w=E.style.display,E.style.display="block",b=Wi(E),w?E.style.display=w:E.style.removeProperty("display")),A=qo(y[0],b[i.d]),M=qo(y[1]||"0",n),e=b[i.p]-l[i.p]-u+A+s-M,o&&Yo(o,M,i,n-M<20||o._isStart&&M>20),n-=n-M}if(x&&(c[x]=e||-.001,e<0&&(e=0)),a){var L=e+n,S=a._isStart;m="scroll"+i.d2,Yo(a,L,i,S&&L>20||!S&&(f?Math.max(xt[m],qn[m]):a.parentNode[m])<=L+1),f&&(l=Wi(o),f&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+Zt))}return d&&E&&(m=Wi(E),d.seek(h),p=Wi(E),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},B3=/(webkit|moz|length|cssText|inset)/i,sd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=oi(e);for(a in o)!+a&&!B3.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},dp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Uo=function(e,t,n){var i={};i[t.p]="+="+n,Re.set(e,i)},ad=function(e,t){var n=Tr(e,t),i="_scroll"+t.p2,s=function a(o,c,l,u,f){var h=a.tween,d=c.onComplete,x={};l=l||n();var _=dp(n,l,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-l,h&&h.kill(),c[i]=o,c.inherit=!1,c.modifiers=x,x[i]=function(){return _(l+u*h.ratio+f*h.ratio*h.ratio)},c.onUpdate=function(){rt.cache++,a.tween&&$i()},c.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Re.to(e,c),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),st.isTouch&&tn(e,"touchmove",n.wheelHandler),s},st=function(){function r(t,n){ws||r.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=vi;return}n=Qh(Hn(n)||xa(n)||n.nodeType?{trigger:n}:n,Po);var s=n,a=s.onUpdate,o=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,x=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,y=s.once,b=s.snap,A=s.pinReparent,M=s.pinSpacer,w=s.containerAnimation,L=s.fastScrollEnd,S=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Kt,D=!f&&f!==0,I=Dn(n.scroller||it),k=Re.core.getCache(I),V=ns(I),Y=("pinType"in n?n.pinType:Mr(I,"pinType")||V&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=D&&n.toggleActions.split(" "),G="markers"in n?n.markers:Po.markers,se=V?0:parseFloat(oi(I)["border"+v.p2+js])||0,P=this,me=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Fe=C3(I,V,v),Ze=R3(I,V),Oe=0,Xe=0,ee=0,te=Tr(I,v),_e,Ue,Ae,Be,ot,be,qe,U,Ve,z,je,Z,O,K,ce,C,g,N,J,j,q,he,ae,Te,ie,le,fe,Pe,Ie,xe,Ne,R,pe,ue,oe,re,ne,ye,Ce;if(P._startClamp=P._endClamp=!1,P._dir=v,m*=45,P.scroller=I,P.scroll=w?w.time.bind(w):te,Be=te(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(J0=1,n.refreshPriority===-9999&&(Ua=P)),k.tweenScroll=k.tweenScroll||{top:ad(I,Kt),left:ad(I,wn)},P.tweenTo=_e=k.tweenScroll[v.p],P.scrubDuration=function(Se){pe=xa(Se)&&Se,pe?R?R.duration(Se):R=Re.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pe,paused:!0,onComplete:function(){return p&&p(P)}}):(R&&R.progress(1).kill(),R=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),xe=0,c||(c=i.vars.id)),b&&((!kr(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in xt.style&&Re.set(V?[xt,qn]:I,{scrollBehavior:"auto"}),rt.forEach(function(Se){return fn(Se)&&Se.target===(V?yt.scrollingElement||qn:I)&&(Se.smooth=!1)}),Ae=fn(b.snapTo)?b.snapTo:b.snapTo==="labels"?D3(i):b.snapTo==="labelsDirectional"?L3(i):b.directional!==!1?function(Se,Ye){return wf(b.snapTo)(Se,cn()-Xe<500?0:Ye.direction)}:Re.utils.snap(b.snapTo),ue=b.duration||{min:.1,max:2},ue=kr(ue)?Ca(ue.min,ue.max):Ca(ue,ue),oe=Re.delayedCall(b.delay||pe/2||.1,function(){var Se=te(),Ye=cn()-Xe<500,ke=_e.tween;if((Ye||Math.abs(P.getVelocity())<10)&&!ke&&!Sl&&Oe!==Se){var He=(Se-be)/K,Lt=i&&!D?i.totalProgress():He,nt=Ye?0:(Lt-Ne)/(cn()-pa)*1e3||0,wt=Re.utils.clamp(-He,1-He,ys(nt/2)*nt/.185),Ot=He+(b.inertia===!1?0:wt),Et,gt,mt=b,Cn=mt.onStart,Tt=mt.onInterrupt,mn=mt.onComplete;if(Et=Ae(Ot,P),xa(Et)||(Et=Ot),gt=Math.max(0,Math.round(be+Et*K)),Se<=qe&&Se>=be&&gt!==Se){if(ke&&!ke._initted&&ke.data<=ys(gt-Se))return;b.inertia===!1&&(wt=Et-He),_e(gt,{duration:ue(ys(Math.max(ys(Ot-Lt),ys(Et-Lt))*.185/nt/.05||0)),ease:b.ease||"power3",data:ys(gt-Se),onInterrupt:function(){return oe.restart(!0)&&Tt&&Tt(P)},onComplete:function(){P.update(),Oe=te(),i&&!D&&(R?R.resetTo("totalProgress",Et,i._tTime/i._tDur):i.progress(Et)),xe=Ne=i&&!D?i.totalProgress():P.progress,E&&E(P),mn&&mn(P)}},Se,wt*K,gt-Se-wt*K),Cn&&Cn(P,_e.tween)}}else P.isActive&&Oe!==Se&&oe.restart(!0)}).pause()),c&&(zu[c]=P),h=P.trigger=Dn(h||d!==!0&&d),Ce=h&&h._gsap&&h._gsap.stRevert,Ce&&(Ce=Ce(P)),d=d===!0?h:Dn(d),Hn(o)&&(o={targets:h,className:o}),d&&(x===!1||x===ai||(x=!x&&d.parentNode&&d.parentNode.style&&oi(d.parentNode).display==="flex"?!1:Ht),P.pin=d,Ue=Re.core.getCache(d),Ue.spacer?ce=Ue.pinState:(M&&(M=Dn(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),Ue.spacerIsNative=!!M,M&&(Ue.spacerState=Lo(M))),Ue.spacer=N=M||yt.createElement("div"),N.classList.add("pin-spacer"),c&&N.classList.add("pin-spacer-"+c),Ue.pinState=ce=Lo(d)),n.force3D!==!1&&Re.set(d,{force3D:!0}),P.spacer=N=Ue.spacer,Ie=oi(d),Te=Ie[x+v.os2],j=Re.getProperty(d),q=Re.quickSetter(d,v.a,Zt),uc(d,N,Ie),g=Lo(d)),G){Z=kr(G)?Qh(G,ed):ed,z=Do("scroller-start",c,I,v,Z,0),je=Do("scroller-end",c,I,v,Z,0,z),J=z["offset"+v.op.d2];var at=Dn(Mr(I,"content")||I);U=this.markerStart=Do("start",c,at,v,Z,J,0,w),Ve=this.markerEnd=Do("end",c,at,v,Z,J,0,w),w&&(ye=Re.quickSetter([U,Ve],v.a,Zt)),!Y&&!(Ai.length&&Mr(I,"fixedMarkers")===!0)&&(P3(V?xt:I),Re.set([z,je],{force3D:!0}),le=Re.quickSetter(z,v.a,Zt),Pe=Re.quickSetter(je,v.a,Zt))}if(w){var ve=w.vars.onUpdate,De=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(w,De||[])})}if(P.previous=function(){return tt[tt.indexOf(P)-1]},P.next=function(){return tt[tt.indexOf(P)+1]},P.revert=function(Se,Ye){if(!Ye)return P.kill(!0);var ke=Se!==!1||!P.enabled,He=ln;ke!==P.isReverted&&(ke&&(re=Math.max(te(),P.scroll.rec||0),ee=P.progress,ne=i&&i.progress()),U&&[U,Ve,z,je].forEach(function(Lt){return Lt.style.display=ke?"none":"block"}),ke&&(ln=P,P.update(ke)),d&&(!A||!P.isActive)&&(ke?N3(d,N,ce):uc(d,N,oi(d),ie)),ke||P.update(ke),ln=He,P.isReverted=ke)},P.refresh=function(Se,Ye,ke,He){if(!((ln||!P.enabled)&&!Ye)){if(d&&Se&&fi){tn(r,"scrollEnd",cp);return}!En&&me&&me(P),ln=P,_e.tween&&!ke&&(_e.tween.kill(),_e.tween=0),R&&R.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Le){return Le.vars.immediateRender&&Le.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Lt=Fe(),nt=Ze(),wt=w?w.duration():Ti(I,v),Ot=K<=.01||!K,Et=0,gt=He||0,mt=kr(ke)?ke.end:n.end,Cn=n.endTrigger||h,Tt=kr(ke)?ke.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),mn=P.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,P),ti=h&&Math.max(0,tt.indexOf(P))||0,qt=ti,Yt,Jt,T,B,X,W,F,de,Ee,we,ge,ze,Ge;for(G&&kr(ke)&&(ze=Re.getProperty(z,v.p),Ge=Re.getProperty(je,v.p));qt-- >0;)W=tt[qt],W.end||W.refresh(0,1)||(ln=P),F=W.pin,F&&(F===h||F===d||F===mn)&&!W.isReverted&&(we||(we=[]),we.unshift(W),W.revert(!0,!0)),W!==tt[qt]&&(ti--,qt--);for(fn(Tt)&&(Tt=Tt(P)),Tt=Kh(Tt,"start",P),be=rd(Tt,h,Lt,v,te(),U,z,P,nt,se,Y,wt,w,P._startClamp&&"_startClamp")||(d?-.001:0),fn(mt)&&(mt=mt(P)),Hn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Hn(Tt)?Tt.split(" ")[0]:"")+mt:(Et=qo(mt.substr(2),Lt),mt=Hn(Tt)?Tt:(w?Re.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,be):be)+Et,Cn=h)),mt=Kh(mt,"end",P),qe=Math.max(be,rd(mt||(Cn?"100% 0":wt),Cn,Lt,v,te()+Et,Ve,je,P,nt,se,Y,wt,w,P._endClamp&&"_endClamp"))||-.001,Et=0,qt=ti;qt--;)W=tt[qt],F=W.pin,F&&W.start-W._pinPush<=be&&!w&&W.end>0&&(Yt=W.end-(P._startClamp?Math.max(0,W.start):W.start),(F===h&&W.start-W._pinPush<be||F===mn)&&isNaN(Tt)&&(Et+=Yt*(1-W.progress)),F===d&&(gt+=Yt));if(be+=Et,qe+=Et,P._startClamp&&(P._startClamp+=Et),P._endClamp&&!En&&(P._endClamp=qe||-.001,qe=Math.min(qe,Ti(I,v))),K=qe-be||(be-=.01)&&.001,Ot&&(ee=Re.utils.clamp(0,1,Re.utils.normalize(be,qe,re))),P._pinPush=gt,U&&Et&&(Yt={},Yt[v.a]="+="+Et,mn&&(Yt[v.p]="-="+te()),Re.set([U,Ve],Yt)),d&&!(ku&&P.end>=Ti(I,v)))Yt=oi(d),B=v===Kt,T=te(),he=parseFloat(j(v.a))+gt,!wt&&qe>1&&(ge=(V?yt.scrollingElement||qn:I).style,ge={style:ge,value:ge["overflow"+v.a.toUpperCase()]},V&&oi(xt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ge.style["overflow"+v.a.toUpperCase()]="scroll")),uc(d,N,Yt),g=Lo(d),Jt=Wi(d,!0),de=Y&&Tr(I,B?wn:Kt)(),x?(ie=[x+v.os2,K+gt+Zt],ie.t=N,qt=x===Ht?ul(d,v)+K+gt:0,qt&&(ie.push(v.d,qt+Zt),N.style.flexBasis!=="auto"&&(N.style.flexBasis=qt+Zt)),Bs(ie),mn&&tt.forEach(function(Le){Le.pin===mn&&Le.vars.pinSpacing!==!1&&(Le._subPinOffset=!0)}),Y&&te(re)):(qt=ul(d,v),qt&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=qt+Zt)),Y&&(X={top:Jt.top+(B?T-be:de)+Zt,left:Jt.left+(B?de:T-be)+Zt,boxSizing:"border-box",position:"fixed"},X[jr]=X["max"+js]=Math.ceil(Jt.width)+Zt,X[$r]=X["max"+Tf]=Math.ceil(Jt.height)+Zt,X[ai]=X[ai+Da]=X[ai+Ra]=X[ai+La]=X[ai+Pa]="0",X[Ht]=Yt[Ht],X[Ht+Da]=Yt[Ht+Da],X[Ht+Ra]=Yt[Ht+Ra],X[Ht+La]=Yt[Ht+La],X[Ht+Pa]=Yt[Ht+Pa],C=O3(ce,X,A),En&&te(0)),i?(Ee=i._initted,sc(1),i.render(i.duration(),!0,!0),ae=j(v.a)-he+K+gt,fe=Math.abs(K-ae)>1,Y&&fe&&C.splice(C.length-2,2),i.render(0,!0,!0),Ee||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),sc(0)):ae=K,ge&&(ge.value?ge.style["overflow"+v.a.toUpperCase()]=ge.value:ge.style.removeProperty("overflow-"+v.a));else if(h&&te()&&!w)for(Jt=h.parentNode;Jt&&Jt!==xt;)Jt._pinOffset&&(be-=Jt._pinOffset,qe-=Jt._pinOffset),Jt=Jt.parentNode;we&&we.forEach(function(Le){return Le.revert(!1,!0)}),P.start=be,P.end=qe,Be=ot=En?re:te(),!w&&!En&&(Be<re&&te(re),P.scroll.rec=0),P.revert(!1,!0),Xe=cn(),oe&&(Oe=-1,oe.restart(!0)),ln=0,i&&D&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(Ot||ee!==P.progress||w||_||i&&!i._initted)&&(i&&!D&&(i._initted||ee||i.vars.immediateRender!==!1)&&i.totalProgress(w&&be<-.001&&!ee?Re.utils.normalize(be,qe,0):ee,!0),P.progress=Ot||(Be-be)/K===ee?0:ee),d&&x&&(N._pinOffset=Math.round(P.progress*ae)),R&&R.invalidate(),isNaN(ze)||(ze-=Re.getProperty(z,v.p),Ge-=Re.getProperty(je,v.p),Uo(z,v,ze),Uo(U,v,ze-(He||0)),Uo(je,v,Ge),Uo(Ve,v,Ge-(He||0))),Ot&&!En&&P.update(),u&&!En&&!O&&(O=!0,u(P),O=!1)}},P.getVelocity=function(){return(te()-ot)/(cn()-pa)*1e3||0},P.endAnimation=function(){ua(P.callbackAnimation),i&&(R?R.progress(1):i.paused()?D||ua(i,P.direction<0,1):ua(i,i.reversed()))},P.labelToScroll=function(Se){return i&&i.labels&&(be||P.refresh()||be)+i.labels[Se]/i.duration()*K||0},P.getTrailing=function(Se){var Ye=tt.indexOf(P),ke=P.direction>0?tt.slice(0,Ye).reverse():tt.slice(Ye+1);return(Hn(Se)?ke.filter(function(He){return He.vars.preventOverlaps===Se}):ke).filter(function(He){return P.direction>0?He.end<=be:He.start>=qe})},P.update=function(Se,Ye,ke){if(!(w&&!ke&&!Se)){var He=En===!0?re:P.scroll(),Lt=Se?0:(He-be)/K,nt=Lt<0?0:Lt>1?1:Lt||0,wt=P.progress,Ot,Et,gt,mt,Cn,Tt,mn,ti;if(Ye&&(ot=Be,Be=w?te():He,b&&(Ne=xe,xe=i&&!D?i.totalProgress():nt)),m&&d&&!ln&&!wo&&fi&&(!nt&&be<He+(He-ot)/(cn()-pa)*m?nt=1e-4:nt===1&&qe>He+(He-ot)/(cn()-pa)*m&&(nt=.9999)),nt!==wt&&P.enabled){if(Ot=P.isActive=!!nt&&nt<1,Et=!!wt&&wt<1,Tt=Ot!==Et,Cn=Tt||!!nt!=!!wt,P.direction=nt>wt?1:-1,P.progress=nt,Cn&&!ln&&(gt=nt&&!wt?0:nt===1?1:wt===1?2:3,D&&(mt=!Tt&&$[gt+1]!=="none"&&$[gt+1]||$[gt],ti=i&&(mt==="complete"||mt==="reset"||mt in i))),S&&(Tt||ti)&&(ti||f||!i)&&(fn(S)?S(P):P.getTrailing(S).forEach(function(T){return T.endAnimation()})),D||(R&&!ln&&!wo?(R._dp._time-R._start!==R._time&&R.render(R._dp._time-R._start),R.resetTo?R.resetTo("totalProgress",nt,i._tTime/i._tDur):(R.vars.totalProgress=nt,R.invalidate().restart())):i&&i.totalProgress(nt,!!(ln&&(Xe||Se)))),d){if(Se&&x&&(N.style[x+v.os2]=Te),!Y)q(_a(he+ae*nt));else if(Cn){if(mn=!Se&&nt>wt&&qe+1>He&&He+1>=Ti(I,v),A)if(!Se&&(Ot||mn)){var qt=Wi(d,!0),Yt=He-be;sd(d,xt,qt.top+(v===Kt?Yt:0)+Zt,qt.left+(v===Kt?0:Yt)+Zt)}else sd(d,N);Bs(Ot||mn?C:g),fe&&nt<1&&Ot||q(he+(nt===1&&!mn?ae:0))}}b&&!_e.tween&&!ln&&!wo&&oe.restart(!0),o&&(Tt||y&&nt&&(nt<1||!ac))&&Ya(o.targets).forEach(function(T){return T.classList[Ot||y?"add":"remove"](o.className)}),a&&!D&&!Se&&a(P),Cn&&!ln?(D&&(ti&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(P)),(Tt||!ac)&&(l&&Tt&&lc(P,l),H[gt]&&lc(P,H[gt]),y&&(nt===1?P.kill(!1,1):H[gt]=0),Tt||(gt=nt===1?1:3,H[gt]&&lc(P,H[gt]))),L&&!Ot&&Math.abs(P.getVelocity())>(xa(L)?L:2500)&&(ua(P.callbackAnimation),R?R.progress(1):ua(i,mt==="reverse"?1:!nt,1))):D&&a&&!ln&&a(P)}if(Pe){var Jt=w?He/w.duration()*(w._caScrollDist||0):He;le(Jt+(z._isFlipped?1:0)),Pe(Jt)}ye&&ye(-He/w.duration()*(w._caScrollDist||0))}},P.enable=function(Se,Ye){P.enabled||(P.enabled=!0,tn(I,"resize",ga),V||tn(I,"scroll",Es),me&&tn(r,"refreshInit",me),Se!==!1&&(P.progress=ee=0,Be=ot=Oe=te()),Ye!==!1&&P.refresh())},P.getTween=function(Se){return Se&&_e?_e.tween:R},P.setPositions=function(Se,Ye,ke,He){if(w){var Lt=w.scrollTrigger,nt=w.duration(),wt=Lt.end-Lt.start;Se=Lt.start+wt*Se/nt,Ye=Lt.start+wt*Ye/nt}P.refresh(!1,!1,{start:jh(Se,ke&&!!P._startClamp),end:jh(Ye,ke&&!!P._endClamp)},He),P.update()},P.adjustPinSpacing=function(Se){if(ie&&Se){var Ye=ie.indexOf(v.d)+1;ie[Ye]=parseFloat(ie[Ye])+Se+Zt,ie[1]=parseFloat(ie[1])+Se+Zt,Bs(ie)}},P.disable=function(Se,Ye){if(P.enabled&&(Se!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ye||R&&R.pause(),re=0,Ue&&(Ue.uncache=1),me&&en(r,"refreshInit",me),oe&&(oe.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!V)){for(var ke=tt.length;ke--;)if(tt[ke].scroller===I&&tt[ke]!==P)return;en(I,"resize",ga),V||en(I,"scroll",Es)}},P.kill=function(Se,Ye){P.disable(Se,Ye),R&&!Ye&&R.kill(),c&&delete zu[c];var ke=tt.indexOf(P);ke>=0&&tt.splice(ke,1),ke===yn&&Zo>0&&yn--,ke=0,tt.forEach(function(He){return He.scroller===P.scroller&&(ke=1)}),ke||En||(P.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),Ye||i.kill()),U&&[U,Ve,z,je].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),Ua===P&&(Ua=0),d&&(Ue&&(Ue.uncache=1),ke=0,tt.forEach(function(He){return He.pin===d&&ke++}),ke||(Ue.spacer=0)),n.onKill&&n.onKill(P)},tt.push(P),P.enable(!1,!1),Ce&&Ce(P),i&&i.add&&!K){var $e=P.update;P.update=function(){P.update=$e,rt.cache++,be||qe||P.refresh()},Re.delayedCall(.01,P.update),K=.01,be=qe=0}else P.refresh();d&&I3()},r.register=function(n){return ws||(Re=n||ip(),np()&&window.document&&r.enable(),ws=ma),ws},r.defaults=function(n){if(n)for(var i in n)Po[i]=n[i];return Po},r.disable=function(n,i){ma=0,tt.forEach(function(a){return a[i?"kill":"disable"](n)}),en(it,"wheel",Es),en(yt,"scroll",Es),clearInterval(To),en(yt,"touchcancel",vi),en(xt,"touchstart",vi),Co(en,yt,"pointerdown,touchstart,mousedown",$h),Co(en,yt,"pointerup,touchend,mouseup",Jh),ll.kill(),Ao(en);for(var s=0;s<rt.length;s+=3)Ro(en,rt[s],rt[s+1]),Ro(en,rt[s],rt[s+2])},r.enable=function(){if(it=window,yt=document,qn=yt.documentElement,xt=yt.body,Re&&(Ya=Re.utils.toArray,Ca=Re.utils.clamp,Bu=Re.core.context||vi,sc=Re.core.suppressOverwrites||vi,Mf=it.history.scrollRestoration||"auto",Vu=it.pageYOffset||0,Re.core.globals("ScrollTrigger",r),xt)){ma=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",hp(),A3(),zt.register(Re),r.isTouch=zt.isTouch,cr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ou=zt.isTouch===1,tn(it,"wheel",Es),Sf=[it,yt,qn,xt],Re.matchMedia?(r.matchMedia=function(l){var u=Re.matchMedia(),f;for(f in l)u.add(f,l[f]);return u},Re.addEventListener("matchMediaInit",function(){return Af()}),Re.addEventListener("matchMediaRevert",function(){return up()}),Re.addEventListener("matchMedia",function(){Xr(0,1),rs("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return cc(),cc})):console.warn("Requires GSAP 3.11.0 or later"),cc(),tn(yt,"scroll",Es);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,a=Re.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Wi(xt),Kt.m=Math.round(o.top+Kt.sc())||0,wn.m=Math.round(o.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),To=setInterval(td,250),Re.delayedCall(.5,function(){return wo=0}),tn(yt,"touchcancel",vi),tn(xt,"touchstart",vi),Co(tn,yt,"pointerdown,touchstart,mousedown",$h),Co(tn,yt,"pointerup,touchend,mouseup",Jh),Fu=Re.utils.checkPrefix("transform"),Ko.push(Fu),ws=cn(),ll=Re.delayedCall(.2,Xr).pause(),As=[yt,"visibilitychange",function(){var l=it.innerWidth,u=it.innerHeight;yt.hidden?(Yh=l,Zh=u):(Yh!==l||Zh!==u)&&ga()},yt,"DOMContentLoaded",Xr,it,"load",Xr,it,"resize",ga],Ao(tn),tt.forEach(function(l){return l.enable(0,1)}),c=0;c<rt.length;c+=3)Ro(en,rt[c],rt[c+1]),Ro(en,rt[c],rt[c+2])}},r.config=function(n){"limitCallbacks"in n&&(ac=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(To)||(To=i)&&setInterval(td,i),"ignoreMobileResize"in n&&(Ou=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ao(en)||Ao(tn,n.autoRefreshEvents||"none"),Q0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Dn(n),a=rt.indexOf(s),o=ns(s);~a&&rt.splice(a,o?6:2),i&&(o?Ai.unshift(it,i,xt,i,qn,i):Ai.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Hn(n)?Dn(n):n).getBoundingClientRect(),o=a[s?jr:$r]*i||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},r.positionInViewport=function(n,i,s){Hn(n)&&(n=Dn(n));var a=n.getBoundingClientRect(),o=a[s?jr:$r],c=i==null?o/2:i in fl?fl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+c)/it.innerWidth:(a.top+c)/it.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=is.killAll||[];is={},i.forEach(function(s){return s()})}},r}();st.version="3.13.0";st.saveStyles=function(r){return r?Ya(r).forEach(function(e){if(e&&e.style){var t=Gn.indexOf(e);t>=0&&Gn.splice(t,5),Gn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),Bu())}}):Gn};st.revert=function(r,e){return Af(!r,e)};st.create=function(r,e){return new st(r,e)};st.refresh=function(r){return r?ga(!0):(ws||st.register())&&Xr(!0)};st.update=function(r){return++rt.cache&&$i(r===!0?2:0)};st.clearScrollMemory=fp;st.maxScroll=function(r,e){return Ti(r,e?wn:Kt)};st.getScrollFunc=function(r,e){return Tr(Dn(r),e?wn:Kt)};st.getById=function(r){return zu[r]};st.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!fi};st.snapDirectional=wf;st.addEventListener=function(r,e){var t=is[r]||(is[r]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(r,e){var t=is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(l,u){var f=[],h=[],d=Re.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(x){f.length||d.restart(!0),f.push(x.trigger),h.push(x),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&fn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return fn(s)&&(s=s(),tn(st,"refresh",function(){return s=e.batchMax()})),Ya(r).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(st.create(l))}),t};var od=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},fc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===qn&&r(xt,t)},Io={auto:1,scroll:1},k3=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Re.core.getCache(s),o=cn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Io[(c=oi(s)).overflowY]||Io[c.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ns(s)&&(Io[(c=oi(s)).overflowY]||Io[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},pp=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&k3,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(yt,zt.eventTypes[0],cd,!1,!0)},onDisable:function(){return en(yt,zt.eventTypes[0],cd,!0)}})},z3=/(input|label|select|textarea)/i,ld,cd=function(e){var t=z3.test(e.target.tagName);(t||ld)&&(e._gsapAllow=!0,ld=t)},V3=function(e){kr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,c,l=Dn(e.target)||qn,u=Re.core.globals().ScrollSmoother,f=u&&u.get(),h=cr&&(e.content&&Dn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Tr(l,Kt),x=Tr(l,wn),_=1,m=(zt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,E=fn(i)?function(){return i(o)}:function(){return i||2.8},y,b,A=pp(l,e.type,!0,s),M=function(){return b=!1},w=vi,L=vi,S=function(){c=Ti(l,Kt),L=Ca(cr?1:0,c),n&&(w=Ca(0,Ti(l,wn))),y=Jr},v=function(){h._gsap.y=_a(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(b){requestAnimationFrame(M);var G=_a(o.deltaY/2),se=L(d.v-G);if(h&&se!==d.v+d.offset){d.offset=se-d.v;var P=_a((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=rt.cache,$i()}return!0}d.offset&&v(),b=!0},I,k,V,Y,H=function(){S(),I.isActive()&&I.vars.scrollY>c&&(d()>c?I.progress(1)&&d(c):I.resetTo("scrollY",c))};return h&&Re.set(h,{y:"+=0"}),e.ignoreCheck=function($){return cr&&$.type==="touchmove"&&D()||_>1.05&&$.type!=="touchstart"||o.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){b=!1;var $=_;_=_a((it.visualViewport&&it.visualViewport.scale||1)/m),I.pause(),$!==_&&fc(l,_>1.01?!0:n?!1:"x"),k=x(),V=d(),S(),y=Jr},e.onRelease=e.onGestureStart=function($,G){if(d.offset&&v(),!G)Y.restart(!0);else{rt.cache++;var se=E(),P,me;n&&(P=x(),me=P+se*.05*-$.velocityX/.227,se*=od(x,P,me,Ti(l,wn)),I.vars.scrollX=w(me)),P=d(),me=P+se*.05*-$.velocityY/.227,se*=od(d,P,me,Ti(l,Kt)),I.vars.scrollY=L(me),I.invalidate().duration(se).play(.01),(cr&&I.vars.scrollY>=c||P>=c-1)&&Re.to({},{onUpdate:H,duration:se})}a&&a($)},e.onWheel=function(){I._ts&&I.pause(),cn()-p>1e3&&(y=0,p=cn())},e.onChange=function($,G,se,P,me){if(Jr!==y&&S(),G&&n&&x(w(P[2]===G?k+($.startX-$.x):x()+G-P[1])),se){d.offset&&v();var Fe=me[2]===se,Ze=Fe?V+$.startY-$.y:d()+se-me[1],Oe=L(Ze);Fe&&Ze!==Oe&&(V+=Oe-Ze),d(Oe)}(se||G)&&$i()},e.onEnable=function(){fc(l,n?!1:"x"),st.addEventListener("refresh",H),tn(it,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=x.smooth=!1),A.enable()},e.onDisable=function(){fc(l,!0),en(it,"resize",H),st.removeEventListener("refresh",H),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new zt(e),o.iOS=cr,cr&&!d()&&d(1),cr&&Re.ticker.add(vi),Y=o._dc,I=Re.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:dp(d,d(),function(){return I.pause()})},onUpdate:$i,onComplete:Y.vars.onComplete}),o};st.sort=function(r){if(fn(r))return tt.sort(r);var e=it.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};st.observe=function(r){return new zt(r)};st.normalizeScroll=function(r){if(typeof r>"u")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var e=r instanceof zt?r:V3(r);return bn&&bn.target===e.target&&bn.kill(),ns(e.target)&&(bn=e),e};st.core={_getVelocityProp:Nu,_inputObserver:pp,_scrollers:rt,_proxies:Ai,bridge:{ss:function(){fi||rs("scrollStart"),fi=cn()},ref:function(){return ln}}};ip()&&Re.registerPlugin(st);function G3(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function H3(r,e,t){return e&&G3(r.prototype,e),r}/*!
 * ScrollSmoother 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _t,No,Mn,ur,va,ki,zr,ud,Je,Mi,Fo,fd,hd,dd,pd,mp=function(){return typeof window<"u"},_p=function(){return _t||mp()&&(_t=window.gsap)&&_t.registerPlugin&&_t},W3=function(e){return Math.round(e*1e5)/1e5||0},lr=function(e){return Je.maxScroll(e||Mn)},X3=function(e,t){var n=e.parentNode||va,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),a=s.top-i.top,o=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(o)?a:o)/(1-t),l=-c*t,u,f;return c>0&&(u=s.height/(Mn.innerHeight+s.height),f=u===.5?s.height*2:Math.min(s.height,Math.abs(-c*u/(2*u-1)))*2*(t||1),l+=t?-f*t:-f/2,c+=f),{change:c,offset:l}},q3=function(e){var t=ur.querySelector(".ScrollSmoother-wrapper");return t||(t=ur.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},ss=function(){function r(e){var t=this;No||r.register(_t)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},Mi&&Mi.kill(),Mi=this,dd(this);var n=e,i=n.smoothTouch,s=n.onUpdate,a=n.onStop,o=n.smooth,c=n.onFocusIn,l=n.normalizeScroll,u=n.wholePixels,f,h,d,x,_,m,p,E,y,b,A,M,w,L,S=this,v=e.effectsPrefix||"",D=Je.getScrollFunc(Mn),I=Je.isTouch===1?i===!0?.8:parseFloat(i)||0:o===0||o===!1?0:parseFloat(o)||.8,k=I&&+e.speed||1,V=0,Y=0,H=1,$=fd(0),G=function(){return $.update(-V)},se={y:0},P=function(){return f.style.overflow="visible"},me,Fe=function(O){O.update();var K=O.getTween();K&&(K.pause(),K._time=K._dur,K._tTime=K._tDur),me=!1,O.animation.progress(O.progress,!0)},Ze=function(O,K){(O!==V&&!b||K)&&(u&&(O=Math.round(O)),I&&(f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",f._gsap.y=O+"px"),Y=O-V,V=O,Je.isUpdating||r.isRefreshing||Je.update())},Oe=function(O){return arguments.length?(O<0&&(O=0),se.y=-O,me=!0,b?V=-O:Ze(-O),Je.isRefreshing?x.update():D(O/k),this):-V},Xe=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!Je.isRefreshing){var Z=lr(h)*k;Z<-V&&Oe(Z),pd.restart(!0)}}),ee,te=function(O){h.scrollTop=0,!(O.target.contains&&O.target.contains(h)||c&&c(t,O)===!1)&&(Je.isInViewport(O.target)||O.target===ee||t.scrollTo(O.target,!1,"center center"),ee=O.target)},_e=function(O,K){if(O<K.start)return O;var ce=isNaN(K.ratio)?1:K.ratio,C=K.end-K.start,g=O-K.start,N=K.offset||0,J=K.pins||[],j=J.offset||0,q=K._startClamp&&K.start<=0||K.pins&&K.pins.offset?0:K._endClamp&&K.end===lr()?1:.5;return J.forEach(function(he){C-=he.distance,he.nativeStart<=O&&(g-=he.distance)}),j&&(g*=(C-j/ce)/C),O+(g-N*q)/ce-g},Ue=function Z(O,K,ce){ce||(O.pins.length=O.pins.offset=0);var C=O.pins,g=O.markers,N,J,j,q,he,ae,Te,ie;for(Te=0;Te<K.length;Te++)if(ie=K[Te],O.trigger&&ie.trigger&&O!==ie&&(ie.trigger===O.trigger||ie.pinnedContainer===O.trigger||O.trigger.contains(ie.trigger))&&(he=ie._startNative||ie._startClamp||ie.start,ae=ie._endNative||ie._endClamp||ie.end,j=_e(he,O),q=ie.pin&&ae>0?j+(ae-he):_e(ae,O),ie.setPositions(j,q,!0,(ie._startClamp?Math.max(0,j):j)-he),ie.markerStart&&g.push(_t.quickSetter([ie.markerStart,ie.markerEnd],"y","px")),ie.pin&&ie.end>0&&!ce)){if(N=ie.end-ie.start,J=O._startClamp&&ie.start<0,J){if(O.start>0){O.setPositions(0,O.end+(O._startNative-O.start),!0),Z(O,K);return}N+=ie.start,C.offset=-ie.start}C.push({start:ie.start,nativeStart:he,end:ie.end,distance:N,trig:ie}),O.setPositions(O.start,O.end+(J?-ie.start:N),!0)}},Ae=function(O,K){_.forEach(function(ce){return Ue(ce,O,K)})},Be=function(){va=ur.documentElement,ki=ur.body,P(),requestAnimationFrame(P),_&&(Je.getAll().forEach(function(O){O._startNative=O.start,O._endNative=O.end}),_.forEach(function(O){var K=O._startClamp||O.start,ce=O.autoSpeed?Math.min(lr(),O.end):K+Math.abs((O.end-K)/O.ratio),C=ce-O.end;if(K-=C/2,ce-=C/2,K>ce){var g=K;K=ce,ce=g}O._startClamp&&K<0?(ce=O.ratio<0?lr():O.end/O.ratio,C=ce-O.end,K=0):(O.ratio<0||O._endClamp&&ce>=lr())&&(ce=lr(),K=O.ratio<0||O.ratio>1?0:ce-(ce-O.start)/O.ratio,C=(ce-K)*O.ratio-(O.end-O.start)),O.offset=C||1e-4,O.pins.length=O.pins.offset=0,O.setPositions(K,ce,!0)}),Ae(Je.sort())),$.reset()},ot=function(){return Je.addEventListener("refresh",Be)},be=function(){return _&&_.forEach(function(O){return O.vars.onRefresh(O)})},qe=function(){return _&&_.forEach(function(O){return O.vars.onRefreshInit(O)}),be},U=function(O,K,ce,C){return function(){var g=typeof K=="function"?K(ce,C):K;g||g===0||(g=C.getAttribute("data-"+v+O)||(O==="speed"?1:0)),C.setAttribute("data-"+v+O,g);var N=(g+"").substr(0,6)==="clamp(";return{clamp:N,value:N?g.substr(6,g.length-7):g}}},Ve=function(O,K,ce,C,g){g=(typeof g=="function"?g(C,O):g)||0;var N=U("speed",K,C,O),J=U("lag",ce,C,O),j=_t.getProperty(O,"y"),q=O._gsap,he,ae,Te,ie,le,fe,Pe=[],Ie=function(){K=N(),ce=parseFloat(J().value),he=parseFloat(K.value)||1,Te=K.value==="auto",le=Te||ae&&ae._startClamp&&ae.start<=0||Pe.offset?0:ae&&ae._endClamp&&ae.end===lr()?1:.5,ie&&ie.kill(),ie=ce&&_t.to(O,{ease:Fo,overwrite:!1,y:"+=0",duration:ce}),ae&&(ae.ratio=he,ae.autoSpeed=Te)},xe=function(){q.y=j+"px",q.renderTransform(1),Ie()},Ne=[],R=0,pe=function(oe){if(Te){xe();var re=X3(O,ud(0,1,-oe.start/(oe.end-oe.start)));R=re.change,fe=re.offset}else fe=Pe.offset||0,R=(oe.end-oe.start-fe)*(1-he);Pe.forEach(function(ne){return R-=ne.distance*(1-he)}),oe.offset=R||.001,oe.vars.onUpdate(oe),ie&&ie.progress(1)};return Ie(),(he!==1||Te||ie)&&(ae=Je.create({trigger:Te?O.parentNode:O,start:function(){return K.clamp?"clamp(top bottom+="+g+")":"top bottom+="+g},end:function(){return K.value<0?"max":K.clamp?"clamp(bottom top-="+g+")":"bottom top-="+g},scroller:h,scrub:!0,refreshPriority:-999,onRefreshInit:xe,onRefresh:pe,onKill:function(oe){var re=_.indexOf(oe);re>=0&&_.splice(re,1),xe()},onUpdate:function(oe){var re=j+R*(oe.progress-le),ne=Pe.length,ye=0,Ce,at,ve;if(oe.offset){if(ne){for(at=-V,ve=oe.end;ne--;){if(Ce=Pe[ne],Ce.trig.isActive||at>=Ce.start&&at<=Ce.end){ie&&(Ce.trig.progress+=Ce.trig.direction<0?.001:-.001,Ce.trig.update(0,0,1),ie.resetTo("y",parseFloat(q.y),-Y,!0),H&&ie.progress(1));return}at>Ce.end&&(ye+=Ce.distance),ve-=Ce.distance}re=j+ye+R*((_t.utils.clamp(oe.start,oe.end,at)-oe.start-ye)/(ve-oe.start)-le)}Ne.length&&!Te&&Ne.forEach(function(De){return De(re-ye)}),re=W3(re+fe),ie?(ie.resetTo("y",re,-Y,!0),H&&ie.progress(1)):(q.y=re+"px",q.renderTransform(1))}}}),pe(ae),_t.core.getCache(ae.trigger).stRevert=qe,ae.startY=j,ae.pins=Pe,ae.markers=Ne,ae.ratio=he,ae.autoSpeed=Te,O.style.willChange="transform"),ae};ot(),Je.addEventListener("killAll",ot),_t.delayedCall(.5,function(){return H=0}),this.scrollTop=Oe,this.scrollTo=function(Z,O,K){var ce=_t.utils.clamp(0,lr(),isNaN(Z)?t.offset(Z,K,!!O&&!b):+Z);O?b?_t.to(t,{duration:I,scrollTop:ce,overwrite:"auto",ease:Fo}):D(ce):Oe(ce)},this.offset=function(Z,O,K){Z=zr(Z)[0];var ce=Z.style.cssText,C=Je.create({trigger:Z,start:O||"top top"}),g;return _&&(H?Je.refresh():Ae([C],!0)),g=C.start/(K?k:1),C.kill(!1),Z.style.cssText=ce,_t.core.getCache(Z).uncache=1,g};function z(){return d=f.clientHeight,f.style.overflow="visible",ki.style.height=Mn.innerHeight+(d-Mn.innerHeight)/k+"px",d-Mn.innerHeight}this.content=function(Z){if(arguments.length){var O=zr(Z||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||ki.children[0];return O!==f&&(f=O,y=f.getAttribute("style")||"",Xe&&Xe.observe(f),_t.set(f,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),I||_t.set(f,{clearProps:"transform"})),this}return f},this.wrapper=function(Z){return arguments.length?(h=zr(Z||"#smooth-wrapper")[0]||q3(f),E=h.getAttribute("style")||"",z(),_t.set(h,I?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):h},this.effects=function(Z,O){var K;if(_||(_=[]),!Z)return _.slice(0);Z=zr(Z),Z.forEach(function(he){for(var ae=_.length;ae--;)_[ae].trigger===he&&_[ae].kill()}),O=O||{};var ce=O,C=ce.speed,g=ce.lag,N=ce.effectsPadding,J=[],j,q;for(j=0;j<Z.length;j++)q=Ve(Z[j],C,g,j,N),q&&J.push(q);return(K=_).push.apply(K,J),O.refresh!==!1&&Je.refresh(),J},this.sections=function(Z,O){var K;if(m||(m=[]),!Z)return m.slice(0);var ce=zr(Z).map(function(C){return Je.create({trigger:C,start:"top 120%",end:"bottom -20%",onToggle:function(N){C.style.opacity=N.isActive?"1":"0",C.style.pointerEvents=N.isActive?"all":"none"}})});return O&&O.add?(K=m).push.apply(K,ce):m=ce.slice(0),ce},this.content(e.content),this.wrapper(e.wrapper),this.render=function(Z){return Ze(Z||Z===0?Z:V)},this.getVelocity=function(){return $.getVelocity(-V)},Je.scrollerProxy(h,{scrollTop:Oe,scrollHeight:function(){return z()&&ki.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!I,content:f,getBoundingClientRect:function(){return{top:0,left:0,width:Mn.innerWidth,height:Mn.innerHeight}}}),Je.defaults({scroller:h});var je=Je.getAll().filter(function(Z){return Z.scroller===Mn||Z.scroller===h});je.forEach(function(Z){return Z.revert(!0,!0)}),x=Je.create({animation:_t.fromTo(se,{y:function(){return L=0,0}},{y:function(){return L=1,-z()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(L){var O=me;O&&(Fe(x),se.y=V),Ze(se.y,O),G(),s&&!b&&s(S)}}}),onRefreshInit:function(O){if(!r.isRefreshing){if(r.isRefreshing=!0,_){var K=Je.getAll().filter(function(C){return!!C.pin});_.forEach(function(C){C.vars.pinnedContainer||K.forEach(function(g){if(g.pin.contains(C.trigger)){var N=C.vars;N.pinnedContainer=g.pin,C.vars=null,C.init(N,C.animation)}})})}var ce=O.getTween();w=ce&&ce._end>ce._dp._time,M=V,se.y=0,I&&(Je.isTouch===1&&(h.style.position="absolute"),h.scrollTop=0,Je.isTouch===1&&(h.style.position="fixed"))}},onRefresh:function(O){O.animation.invalidate(),O.setPositions(O.start,z()/k),w||Fe(O),se.y=-D()*k,Ze(se.y),H||(w&&(me=!1),O.animation.progress(_t.utils.clamp(0,1,M/k/-O.end))),w&&(O.progress-=.001,O.update()),r.isRefreshing=!1},id:"ScrollSmoother",scroller:Mn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return z()/k},onScrubComplete:function(){$.reset(),a&&a(t)},scrub:I||!0}),this.smooth=function(Z){return arguments.length&&(I=Z||0,k=I&&+e.speed||1,x.scrubDuration(Z)),x.getTween()?x.getTween().duration():0},x.getTween()&&(x.getTween().vars.ease=e.ease||Fo),this.scrollTrigger=x,e.effects&&this.effects(e.effects===!0?"[data-"+v+"speed], [data-"+v+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),je.forEach(function(Z){Z.vars.scroller=h,Z.revert(!1,!0),Z.init(Z.vars,Z.animation)}),this.paused=function(Z,O){return arguments.length?(!!b!==Z&&(Z?(x.getTween()&&x.getTween().pause(),D(-V/k),$.reset(),A=Je.normalizeScroll(),A&&A.disable(),b=Je.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return Oe(-V)}}),b.nested=hd(va,"wheel,touch,scroll",!0,O!==!1)):(b.nested.kill(),b.kill(),b=0,A&&A.enable(),x.progress=(-V/k-x.start)/(x.end-x.start),Fe(x))),this):!!b},this.kill=this.revert=function(){t.paused(!1),Fe(x),x.kill();for(var Z=(_||[]).concat(m||[]),O=Z.length;O--;)Z[O].kill();Je.scrollerProxy(h),Je.removeEventListener("killAll",ot),Je.removeEventListener("refresh",Be),h.style.cssText=E,f.style.cssText=y;var K=Je.defaults({});K&&K.scroller===h&&Je.defaults({scroller:Mn}),t.normalizer&&Je.normalizeScroll(!1),clearInterval(p),Mi=null,Xe&&Xe.disconnect(),ki.style.removeProperty("height"),Mn.removeEventListener("focusin",te)},this.refresh=function(Z,O){return x.refresh(Z,O)},l&&(this.normalizer=Je.normalizeScroll(l===!0?{debounce:!0,content:!I&&f}:l)),Je.config(e),"scrollBehavior"in Mn.getComputedStyle(ki)&&_t.set([ki,va],{scrollBehavior:"auto"}),Mn.addEventListener("focusin",te),p=setInterval(G,250),ur.readyState==="loading"||requestAnimationFrame(function(){return Je.refresh()})}return r.register=function(t){return No||(_t=t||_p(),mp()&&window.document&&(Mn=window,ur=document,va=ur.documentElement,ki=ur.body),_t&&(zr=_t.utils.toArray,ud=_t.utils.clamp,Fo=_t.parseEase("expo"),dd=_t.core.context||function(){},Je=_t.core.globals().ScrollTrigger,_t.core.globals("ScrollSmoother",r),ki&&Je&&(pd=_t.delayedCall(.2,function(){return Je.isRefreshing||Mi&&Mi.refresh()}).pause(),fd=Je.core._getVelocityProp,hd=Je.core._inputObserver,r.refresh=Je.refresh,No=1))),No},H3(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r}();ss.version="3.13.0";ss.create=function(r){return Mi&&r&&Mi.content()===zr(r.content)[0]?Mi:new ss(r)};ss.get=function(){return Mi};_p()&&_t.registerPlugin(ss);Qa.registerPlugin(st,ss);const xp=document.querySelector("#app");xp.innerHTML="";const Cf=document.createElement("div");Cf.className="wrapper";const Rf=document.createElement("div");Rf.className="content";Rf.append(vp(),i1(),o1(),l1());Cf.appendChild(Rf);xp.appendChild(Cf);ss.create({wrapper:".wrapper",content:".content",smooth:1.3,effects:!0});const gp=Qa.utils.toArray(".content section");Qa.set(gp,{opacity:0,y:60});gp.forEach(r=>{Qa.to(r,{opacity:1,y:0,duration:.9,ease:"power2.out",scrollTrigger:{trigger:r,start:"top 98%",toggleActions:"play none none reverse"}})});window.addEventListener("load",()=>{st.refresh()});
