(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~loadGLTFMesh-js~views-3d-layers-graphics-objectResourceUtils-js"],{

/***/ "3Fbu":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec22.js ***!
  \***************************************************/
/*! exports provided: c, f, n, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return o; });
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/types.js */ "xqxP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function f(e,t,n){const f=e.typedBuffer,r=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*r,s=(n&&n.srcIndex?n.srcIndex:0)*o;for(let c=0;c<u;++c)f[l]=d[s],f[l+1]=d[s+1],l+=r,s+=o}function r(r,d,o){const u=r.typedBuffer,l=r.typedBufferStride,s=d.typedBuffer,c=d.typedBufferStride,p=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*l,i=(o&&o.srcIndex?o.srcIndex:0)*c;if(Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isInteger"])(d.elementType)){const e=Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["maximumValue"])(d.elementType);if(Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isSigned"])(d.elementType))for(let t=0;t<p;++t)u[y]=Math.max(s[i]/e,-1),u[y+1]=Math.max(s[i+1]/e,-1),y+=l,i+=c;else for(let t=0;t<p;++t)u[y]=s[i]/e,u[y+1]=s[i+1]/e,y+=l,i+=c}else f(r,d,o);return r}function d(e,t,n,f){var r,d;const o=e.typedBuffer,u=e.typedBufferStride,l=null!=(r=null==f?void 0:f.count)?r:e.count;let s=(null!=(d=null==f?void 0:f.dstIndex)?d:0)*u;for(let c=0;c<l;++c)o[s]=t,o[s+1]=n,s+=u}const o=Object.freeze({__proto__:null,copy:f,normalizeIntegerBuffer:r,fill:d});


/***/ }),

/***/ "3O/s":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/VectorStack.js ***!
  \*******************************************************/
/*! exports provided: VectorStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorStack", function() { return a; });
/* harmony import */ var _byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byteSizeEstimations.js */ "8Lmx");
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class a{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize)}get(){0===this._itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_1__["nextTick"])((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=c){return new a(16,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_5__["c"],t)}static createVec3f64(t=c){return new a(24,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["b"],t)}static createVec4f64(t=c){return new a(32,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["a"],t)}static createMat3f64(t=c){return new a(72,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"],t)}static createMat4f64(t=c){return new a(128,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__["a"],t)}static createQuatf64(t=c){return new a(32,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_4__["c"],t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const c=4*_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_0__["ByteSizeUnit"].KILOBYTES;


/***/ }),

/***/ "3RTz":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js ***!
  \********************************************************************************/
/*! exports provided: BinaryStreamReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryStreamReader", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}


/***/ }),

/***/ "5MHk":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec42.js ***!
  \***************************************************/
/*! exports provided: a, b, s, t, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return n; });
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ "ZBV1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["mathLogger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=f[9],B=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,g=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*j,f=g[r],o=g[r+1],x=g[r+2],z=g[r+3];M[t]=n*f+c*o+y*x+l*z,M[t+1]=u*f+i*o+m*x+S*z,M[t+2]=d*f+a*o+B*x+b*z,M[t+3]=s*f+p*o+h*x+v*z}}function r(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["mathLogger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=t.typedBuffer,B=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*B,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];m[t]=n*f+s*o+a*S,m[t+1]=u*f+c*o+p*S,m[t+2]=d*f+i*o+y*S,m[t+3]=b}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2],o[e+3]=r*u[t+3]}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r,o[e+3]=u[t+3]>>r}}const n=Object.freeze({__proto__:null,transformMat4:t,transformMat3:r,scale:f,shiftRight:o});


/***/ }),

/***/ "BhNz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js ***!
  \**************************************************************************************************/
/*! exports provided: COLOR_GAMMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_GAMMA", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=2.1;


/***/ }),

/***/ "CHx4":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js ***!
  \************************************************************************/
/*! exports provided: triangleFanToTriangles, triangleStripToTriangles, trianglesToTriangles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleFanToTriangles", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleStripToTriangles", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trianglesToTriangles", function() { return n; });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl-engine/lib/geometryDataUtils.js */ "EDiM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(n,o=_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["generateDefaultIndexArray"]){return"number"==typeof n?o(n):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint16Array"])(n)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint8Array"])(n)?new Uint32Array(n):n}function o(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2)}else{let e=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=t[o],i=t[o+1],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}else{const r=t[o+1],i=t[o],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}}return n}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],i=0;for(let f=0;f<r;++f){const r=t[f+2];n[i++]=e,n[i++]=o,n[i++]=r,o=r}return n}}


/***/ }),

/***/ "D8Ta":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, k, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function i(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const _=a(),l=o(),N=s(),U=c(),I=i(),O=f(),T=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,unitW:f,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});


/***/ }),

/***/ "EDiM":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
  \**********************************************************************************/
/*! exports provided: computeAttachmentOriginLines, computeAttachmentOriginPoints, computeAttachmentOriginTriangles, generateDefaultIndexArray, generateIndexArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginLines", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginPoints", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginTriangles", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultIndexArray", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateIndexArray", function() { return a; });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/triangle.js */ "V59N");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const f=new Uint16Array([0]),c=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function l(t){if(1===t)return f;if(t<c.length)return new Uint16Array(c.buffer,0,t);if(t>s.length){const n=Math.max(2*s.length,t);s=new Uint32Array(n);for(let t=0;t<s.length;t++)s[t]=t}return new Uint32Array(s.buffer,0,t)}function a(t){if(1===t)return new Uint16Array(f);if(t<c.length)return new Uint16Array(c.slice(0,t));if(t>s.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(s.slice(0,t))}function u(e,o,s){if(!e)return!1;const{size:f,data:c}=e;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(s,0,0,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(U,0,0,0);let l=0,a=0;for(let u=0;u<o.length-2;u+=3){const e=o[u+0]*f,h=o[u+1]*f,g=o[u+2]*f;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(y,c[e+0],c[e+1],c[e+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(w,c[h+0],c[h+1],c[h+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(A,c[g+0],c[g+1],c[g+2]);const m=Object(_geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__["areaPoints3d"])(y,w,A);m?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(y,y,w),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(y,y,A),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(y,y,1/3*m),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(s,s,y),l+=m):(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,y),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,w),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,A),a+=3)}return(0!==a||0!==l)&&(0!==l?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s,s,1/l),!0):0!==a&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s,U,1/a),!0))}function h(n,e,o){if(!n||!e)return!1;const{size:i,data:s}=n;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(o,0,0,0);let f=-1,c=0;for(let t=0;t<e.length;t++){const n=e[t]*i;f!==n&&(o[0]+=s[n+0],o[1]+=s[n+1],o[2]+=s[n+2],c++),f=n}return c>1&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(o,o,1/c),c>0}function g(o,i,s,f){if(!o)return!1;const{size:c,data:l}=o;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(f,0,0,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(U,0,0,0);let a=0,u=0;const h=i?i.length-1:l.length/c-1,g=h+(s?2:0);for(let t=0;t<g;t+=2){const o=t<h?t:h,s=t<h?t+1:0,g=(i?i[o]:o)*c,A=(i?i[s]:s)*c;y[0]=l[g+0],y[1]=l[g+1],y[2]=l[g+2],w[0]=l[A+0],w[1]=l[A+1],w[2]=l[A+2],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(y,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(y,y,w),.5);const m=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["j"])(y,w);m>0?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(f,f,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(y,y,m)),a+=m):(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,y),u++)}return 0!==a?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(f,f,1/a),!0):0!==u&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(f,U,1/u),!0)}const y=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),w=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),A=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),U=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "Gze9":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js ***!
  \**********************************************************************/
/*! exports provided: Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return F; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/MapUtils.js */ "KOts");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Version.js */ "VJrH");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/scalar.js */ "fPvx");
/* harmony import */ var _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BinaryStreamReader.js */ "3RTz");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enums.js */ "IZCt");
/* harmony import */ var _fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fillDefaults.js */ "cqrX");
/* harmony import */ var _pathUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pathUtils.js */ "aBUN");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const M={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class F{constructor(e,t,r,s,n){this.context=e,this.errorContext=t,this.uri=r,this.json=s,this.glbBuffer=n,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=Object(_pathUtils_js__WEBPACK_IMPORTED_MODULE_13__["splitURI"])(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==s.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==s.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==s.nodes,"Nodes must be defined."),this._computeNodeParents()}static async load(e,t,o,a){if(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isDataProtocol"])(o)){const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["dataComponents"])(o);if("model/gltf-binary"!==r.mediaType)try{const s=JSON.parse(r.isBase64?atob(r.data):r.data);return new F(e,t,o,s)}catch{}const a=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["dataToArrayBuffer"])(o);if(F._isGLBData(a))return this._fromGLBData(e,t,o,a)}if(o.endsWith(".gltf")){const r=await e.loadJSON(o,a);return new F(e,t,o,r)}const i=await e.loadBinary(o,a);if(F._isGLBData(i))return this._fromGLBData(e,t,o,i);const u=await e.loadJSON(o,a);return new F(e,t,o,u)}static _isGLBData(e){const t=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_10__["BinaryStreamReader"](e);return t.remainingBytes()>=4&&t.readUint32()===M.MAGIC}static async _fromGLBData(e,t,r,s){const n=await F._parseGLBData(t,s);return new F(e,t,r,n.json,n.binaryData)}static async _parseGLBData(e,t){const r=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_10__["BinaryStreamReader"](t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const s=r.readUint32(),n=r.readUint32(),o=r.readUint32();e.assert(s===M.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==n,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),s=r.readUint32();0===u?(e.assert(s===M.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await q(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(s!==M.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],s=this.errorContext;if(null==r.uri)return s.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const n=await this._getBufferLoader(e,t);return s.assert(n.byteLength===r.byteLength,"Buffer byte lengths should match."),n}async _getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const s=this.json.buffers[e],n=this.context.loadBinary(this._resolveUri(s.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,n),n}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const s=this.json.accessors[e];r.errorUnsupportedIf(null==(null==s?void 0:s.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(s.type in[_enums_js__WEBPACK_IMPORTED_MODULE_11__["AttributeType"].MAT2,_enums_js__WEBPACK_IMPORTED_MODULE_11__["AttributeType"].MAT3,_enums_js__WEBPACK_IMPORTED_MODULE_11__["AttributeType"].MAT4],`AttributeType ${s.type} is not supported`);const n=this.json.bufferViews[s.bufferView],o=await this.getBuffer(n.buffer,t),a=H[s.type],i=Y[s.componentType],u=a*i,c=n.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(n.byteOffset||0)+(s.byteOffset||0),entryCount:s.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:s.componentType,min:s.min,max:s.max,normalized:!!s.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_BYTE:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__["m"])(this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewUint8"],r));case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_SHORT:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__["m"])(this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewUint16"],r));case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_INT:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__["m"])(this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewUint32"],r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const s=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(s.componentType!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+z[s.componentType]),r.errorUnsupportedIf(3!==s.componentCount,"POSITION vertex attribute must have 3 components, but found "+s.componentCount.toFixed()),this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],s)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const s=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(s.componentType!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+z[s.componentType]),r.errorUnsupportedIf(3!==s.componentCount,"NORMAL vertex attribute must have 3 components, but found "+s.componentCount.toFixed()),this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],s)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const s=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(s.componentType!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+z[s.componentType]),r.errorUnsupportedIf(4!==s.componentCount,"TANGENT vertex attribute must have 4 components, but found "+s.componentCount.toFixed()),new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"](s.raw,s.byteOffset,s.byteStride,s.byteOffset+s.byteStride*s.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const s=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==s.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+s.componentCount.toFixed()),s.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT?this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2f"],s):(r.errorUnsupportedIf(!s.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),J(s))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const s=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==s.componentCount&&3!==s.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+s.componentCount.toFixed()),4===s.componentCount){if(s.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT)return this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"],s);if(s.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_BYTE)return this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"],s);if(s.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_SHORT)return this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u16"],s)}else if(3===s.componentCount){if(s.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT)return this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],s);if(s.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_BYTE)return this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u8"],s);if(s.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_SHORT)return this._wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u16"],s)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+z[s.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let s=this.materialCache.get(e.material);if(!s){const n=null!=e.material?Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__["material"])(this.json.materials[e.material]):Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__["material"])(),o=n.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(o.baseColorTexture,t),u=this.getTexture(n.normalTexture,t),c=r?this.getTexture(n.occlusionTexture,t):null,p=r?this.getTexture(n.emissiveTexture,t):null,f=r?this.getTexture(o.metallicRoughnessTexture,t):null,d=null!=e.material?e.material:-1;s={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:o.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:await i,normalTexture:await u,name:n.name,id:d,occlusionTexture:await c,emissiveTexture:await p,emissiveFactor:n.emissiveFactor,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor,metallicRoughnessTexture:await f,vertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode}}return s}async getTexture(e,r){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const s=e.index,n=this.errorContext,o=this.json.textures[s],a=Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__["textureSampler"])(null!=o.sampler?this.json.samplers[o.sampler]:{});n.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source],u=await this._loadTextureImageData(s,o,r);return Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreateMapValue"])(this.textureCache,s,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(n.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:e(a.wrapS)?a.wrapS:t(a.wrapS),wrapT:e(a.wrapT)?a.wrapT:t(a.wrapT),minFilter:a.minFilter,name:i.name,id:s}}))}getNodeTransform(e){if(void 0===e)return k;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),s=this.json.nodes[e];s.matrix?t=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),r,s.matrix):s.translation||s.rotation||s.scale?(t=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["b"])(r),s.translation&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["j"])(t,t,s.translation),s.rotation&&(V[3]=Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__["g"])(V,s.rotation),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["e"])(t,t,V[3],V)),s.scale&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["h"])(t,t,s.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["makeAbsolute"])(e,this.baseUri)}_getNodeParent(e){return this.nodeParentMap.get(e)}_checkVersionSupported(){const e=_core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"].parse(this.json.asset.version,"glTF");P.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const s=this.textureLoaders.get(e);if(s)return s;const n=this._createTextureLoader(t,r);return this.textureLoaders.set(e,n),n}async _createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this._resolveUri(r.uri),t);const s=this.errorContext;s.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),s.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t);return s.errorUnsupportedIf(null!=n.byteStride,"byteStride not supported for image buffer"),X(new Uint8Array(o.buffer,o.byteOffset+(n.byteOffset||0),n.byteLength),r.mimeType)}}const P=new _core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"](2,0,"glTF"),k=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["y"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Math.PI/2),V=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),H={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Y={[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].BYTE]:1,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_BYTE]:1,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].SHORT]:2,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_SHORT]:2,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT]:4,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_INT]:4};function J(t){switch(t.componentType){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].BYTE:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2i8"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_BYTE:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2u8"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].SHORT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2i16"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_SHORT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2u16"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].UNSIGNED_INT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2u32"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["DataType"].FLOAT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2f"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(t.componentType)}}async function q(e){return new Promise(((t,r)=>{const s=new Blob([e]),n=new FileReader;n.onload=()=>{const e=n.result;t(JSON.parse(e))},n.onerror=e=>{r(e)},n.readAsText(s)}))}async function X(e,t){return new Promise(((r,s)=>{const n=new Blob([e],{type:t}),o=URL.createObjectURL(n),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(o),s(e)})),a.src=o}))}const z={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};


/***/ }),

/***/ "HCB5":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec43.js ***!
  \***************************************************/
/*! exports provided: c, f, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],d[l+3]=o[c+3],l+=f,c+=r}function t(e,t,n,d,f,o){var r,u;const l=e.typedBuffer,c=e.typedBufferStride,s=null!=(r=null==o?void 0:o.count)?r:e.count;let p=(null!=(u=null==o?void 0:o.dstIndex)?u:0)*c;for(let i=0;i<s;++i)l[p]=t,l[p+1]=n,l[p+2]=d,l[p+3]=f,p+=c}const n=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ "IRkY":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ObjectStack.js ***!
  \*******************************************************/
/*! exports provided: ObjectStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectStack", function() { return s; });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_0__["nextTick"])((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator())}}const i=1024;


/***/ }),

/***/ "IZCt":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/enums.js ***!
  \*******************************************************************/
/*! exports provided: AttributeType, BufferViewTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeType", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewTarget", function() { return E; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var A,E;!function(A){A.SCALAR="SCALAR",A.VEC2="VEC2",A.VEC3="VEC3",A.VEC4="VEC4",A.MAT2="MAT2",A.MAT3="MAT3",A.MAT4="MAT4"}(A||(A={})),function(A){A[A.ARRAY_BUFFER=34962]="ARRAY_BUFFER",A[A.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(E||(E={}));


/***/ }),

/***/ "K2Cv":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js ***!
  \**************************************************************************/
/*! exports provided: DefaultLoadingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLoadingContext", function() { return n; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "Lqtk");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/asyncUtils.js */ "eSsm");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class n{constructor(r){this.streamDataRequester=r}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["isDataProtocol"])(r)?(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(e),Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["dataToArrayBuffer"])(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(t,i,m){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this.streamDataRequester))return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i,{responseType:c[t]})).data;const n=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__["result"])(this.streamDataRequester.request(i,t,m));if(!0===n.ok)return n.value;throw Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAbortError"])(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("",`Request for resource failed: ${n.error}`)}}const c={image:"image",binary:"array-buffer",json:"json"};


/***/ }),

/***/ "PDsV":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/loader.js ***!
  \***********************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return c; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultErrorContext.js */ "QgcX");
/* harmony import */ var _LoaderResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoaderResult.js */ "exm0");
/* harmony import */ var _internal_Resource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Resource.js */ "Gze9");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let u=0;async function c(s,r,a={},i=!0){const c=await _internal_Resource_js__WEBPACK_IMPORTED_MODULE_4__["Resource"].load(s,x,r,a),p="gltf_"+u++,h={lods:[],materials:new Map,textures:new Map,meta:m(c)},I=!(!c.json.asset.extras||"symbolResource"!==c.json.asset.extras.ESRI_type),R=new Map;await d(c,(async(s,r,n,u)=>{var m;const d=null!=(m=R.get(n))?m:0;R.set(n,d+1);const I=void 0!==s.mode?s.mode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__["PrimitiveType"].TRIANGLES,E=I===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__["PrimitiveType"].TRIANGLES||I===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__["PrimitiveType"].TRIANGLE_STRIP||I===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__["PrimitiveType"].TRIANGLE_FAN?I:null;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(E))return void x.warnUnsupported("Unsupported primitive mode ("+T[I]+"). Skipping primitive.");if(!c.hasPositions(s))return void x.warn("Skipping primitive without POSITION vertex attribute.");const S=c.getPositionData(s,a),_=c.getMaterial(s,a,i),g=c.hasNormals(s)?c.getNormalData(s,a):null,w=c.hasTangents(s)?c.getTangentData(s,a):null,v=c.hasTextureCoordinates(s)?c.getTextureCoordinates(s,a):null,N=c.hasVertexColors(s)?c.getVertexColors(s,a):null,M=c.getIndexData(s,a),A={transform:Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(r),attributes:{position:await S,normal:g?await g:null,texCoord0:v?await v:null,color:N?await N:null,tangent:w?await w:null},indices:await M,primitiveType:E,material:f(h,await _,p)};let F=null;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(h.meta)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(h.meta.ESRI_lod)&&"screenSpaceRadius"===h.meta.ESRI_lod.metric&&(F=h.meta.ESRI_lod.thresholds[n]),h.lods[n]=h.lods[n]||{parts:[],name:u,lodThreshold:F},h.lods[n].parts[d]=A}));for(const e of h.lods)e.parts=e.parts.filter((e=>!!e));return{model:h,meta:{isEsriSymbolResource:I,uri:c.uri},customMeta:{}}}function m(t){const o=t.json;let s=null;return o.nodes.forEach((t=>{const o=t.extras;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(s=o)})),s}async function d(e,t){const o=e.json,s=o.scenes[o.scene||0].nodes,r=s.length>1,a=[];for(const i of s){const e=o.nodes[i];if(a.push(n(i,0)),p(e)&&!r){e.extensions.MSFT_lod.ids.forEach(((e,t)=>n(e,t+1)))}}async function n(s,r){const i=o.nodes[s],l=e.getNodeTransform(s);if(x.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=o.meshes[i.mesh];for(const o of e.primitives)a.push(t(o,l,r,e.name))}for(const e of i.children||[])a.push(n(e,r))}await Promise.all(a)}function p(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function f(e,t,o){const s=t=>{const s=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(s)){const o=Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_3__["makeTextureSource"])(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:h.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(s,o)}return s},n=`${o}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const o=Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_3__["makeMaterialParameters"])({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?s(t.colorTexture):void 0,textureNormal:t.normalTexture?s(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?s(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?s(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?s(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(n,o)}return n}const x=new _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_2__["DefaultErrorContext"],h=[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__["TextureSamplingMode"].LINEAR_MIPMAP_LINEAR,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__["TextureSamplingMode"].LINEAR_MIPMAP_NEAREST],T=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];


/***/ }),

/***/ "QgcX":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultErrorContext.js ***!
  \************************************************************************/
/*! exports provided: DefaultErrorContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultErrorContext", function() { return t; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.glTF");class t{error(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error",e)}errorUnsupported(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e)}assert(r,e){r||this.error(e)}warn(r){o.warn(r)}warnUnsupported(r){this.warn("[Unsupported Feature] "+r)}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e)}}


/***/ }),

/***/ "V59N":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/triangle.js ***!
  \****************************************************************/
/*! exports provided: area2d, areaPoints2d, areaPoints3d, copy, create, distance2, fromValues, intersectRay, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "area2d", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaPoints2d", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaPoints3d", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance2", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRay", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return h; });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lineSegment.js */ "vX5d");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function j(t){return t?{p0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.p0),p1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.p1),p2:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.p2)}:{p0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),p1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),p2:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}function h(t,n,r){const e=x.get();return e.p0=t,e.p1=n,e.p2=r,e}function k(t,n=j()){return v(t.p0,t.p1,t.p2,n)}function v(t,n,e,p=j()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(p.p0,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(p.p1,n),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(p.p2,e),p}function b(t,n){const r=t.p0,s=t.p1,c=t.p2,u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),s,r),i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),c,s),f=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),r,c),a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),n,r),j=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),n,s),h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),n,c),k=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(u,u,f),v=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),u,k),a),b=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),i,k),j),d=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),f,k),h);if(v>0&&b>0&&d>0){const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(k,a);return t*t/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(k,k)}const S=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["distance2"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["fromValues"])(r,u,q.get()),n),w=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["distance2"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["fromValues"])(s,i,q.get()),n),M=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["distance2"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["fromValues"])(c,f,q.get()),n);return Math.min(S,w,M)}function d(t,n,r){const e=1e-5,{direction:p,origin:o}=n,{p0:u,p1:i,p2:f}=t,a=i[0]-u[0],g=i[1]-u[1],m=i[2]-u[2],l=f[0]-u[0],j=f[1]-u[1],h=f[2]-u[2],k=p[1]*h-j*p[2],v=p[2]*l-h*p[0],b=p[0]*j-l*p[1],d=a*k+g*v+m*b;if(d>-e&&d<e)return!1;const S=1/d,w=o[0]-u[0],M=o[1]-u[1],q=o[2]-u[2],x=S*(w*k+M*v+q*b);if(x<0||x>1)return!1;const O=M*m-g*q,V=q*a-m*w,y=w*g-a*M,z=S*(p[0]*O+p[1]*V+p[2]*y);if(z<0||x+z>1)return!1;if(r){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r,p,S*(l*O+j*V+h*y)),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r,o,r)}return!0}function S(t,r,e){const p=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t,r),o=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__["b"])(r,e),s=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__["b"])(e,t),c=(p+o+s)/2,u=c*(c-p)*(c-o)*(c-s);return u<=0?0:Math.sqrt(u)}function w(t){return S(t.p0,t.p1,t.p2)}function M(t,n,r){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(O,n,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(V,r,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(O,O,V))/2}const q=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__["ObjectStack"](_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["create"]),x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__["ObjectStack"]((()=>({p0:null,p1:null,p2:null}))),O=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),V=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();


/***/ }),

/***/ "VJrH":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/core/Version.js ***!
  \***************************************************/
/*! exports provided: Version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return r; });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e||!e.match||!e.match(n)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i||!i.match||!i.match(n)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}}


/***/ }),

/***/ "aBUN":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js ***!
  \***********************************************************************/
/*! exports provided: splitURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitURI", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}


/***/ }),

/***/ "c2GT":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vectorStacks.js ***!
  \********************************************************************/
/*! exports provided: sm3d, sm4d, sq4d, sv2d, sv3d, sv4d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm3d", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm4d", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sq4d", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv2d", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv3d", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv4d", function() { return r; });
/* harmony import */ var _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/VectorStack.js */ "3O/s");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec2f64(),c=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec3f64(),r=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec4f64(),a=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat3f64(),f=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat4f64(),o=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createQuatf64();


/***/ }),

/***/ "cqrX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js ***!
  \**************************************************************************/
/*! exports provided: material, textureSampler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textureSampler", function() { return c; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},a={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},l={ESRI_externalColorMixMode:"tint"},i=(e={})=>{const o={...t,...e.pbrMetallicRoughness},r=s({...l,...e.extras});return{...a,...e,pbrMetallicRoughness:o,extras:r}};function s(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const n={magFilter:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].LINEAR,minFilter:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].LINEAR_MIPMAP_LINEAR,wrapS:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureWrapMode"].REPEAT,wrapT:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureWrapMode"].REPEAT},c=e=>({...n,...e});


/***/ }),

/***/ "exm0":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js ***!
  \*****************************************************************/
/*! exports provided: makeMaterialParameters, makeTextureSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMaterialParameters", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTextureSource", function() { return l; });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l(t,l={}){return{data:t,parameters:{wrap:{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureWrapMode"].REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureWrapMode"].REPEAT,...l.wrap},noUnpackFlip:!0,mipmap:!1,...l}}}


/***/ }),

/***/ "fPvx":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/scalar.js ***!
  \****************************************************/
/*! exports provided: c, m, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=n?n.count:t.count;let s=(n&&n.dstIndex?n.dstIndex:0)*o,u=(n&&n.srcIndex?n.srcIndex:0)*d;for(let p=0;p<f;++p)r[s]=c[u],s+=o,u+=d}function t(e,t){const n=e.count;t||(t=new e.TypedArrayConstructor(n));for(let r=0;r<n;r++)t[r]=e.get(r);return t}const n=Object.freeze({__proto__:null,copy:e,makeDense:t});


/***/ }),

/***/ "fi3m":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/utils.js ***!
  \********************************************************************/
/*! exports provided: mat3, mat4, scalar, vec2, vec3, vec4, createBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBuffer", function() { return r; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "xqxP");
/* harmony import */ var _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat32.js */ "wMH/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony import */ var _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat42.js */ "g84+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__["m"]; });

/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/scalar.js */ "fPvx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__["s"]; });

/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec22.js */ "3Fbu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__["v"]; });

/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec33.js */ "TJZZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__["v"]; });

/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec43.js */ "HCB5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__["v"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*Object(_types_js__WEBPACK_IMPORTED_MODULE_0__["elementTypeSize"])(s.ElementType)))}


/***/ }),

/***/ "g84+":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat42.js ***!
  \***************************************************/
/*! exports provided: c, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<16;++e)d[s+e]=n[u+e];s+=f,u+=o}}const t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ "vX5d":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/lineSegment.js ***!
  \*******************************************************************/
/*! exports provided: closestLineSegmentDistance2, closestLineSegmentPoint, closestRayDistance2, copy, create, distance, distance2, fromPoints, fromValues, pointAt, projectPoint, projectPointClamp, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestLineSegmentDistance2", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestLineSegmentPoint", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestRayDistance2", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance2", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPoints", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointAt", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPointClamp", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return p; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function v(t){return t?{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.origin),vector:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.vector)}:{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),vector:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}function p(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function h(t,r=v()){return m(t.origin,t.vector,r)}function m(t,r,o=v()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.origin,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.vector,r),o}function l(t,r,i=v()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(i.origin,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(i.vector,r,t),i}function b(r,n){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,r.origin),u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector,c),s=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector,r.vector),a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(u/s,0,1),g=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),r.vector,a),c);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(g,g)}function M(t,r){return Math.sqrt(b(t,r))}function d(t,r,n){return A(t,r,0,1,n)}function j(t,r,n){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(n,t.origin,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n,t.vector,r))}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,p),m=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(v,h)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["p"])(v);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(g,v,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(m,s,a)),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(g,g,r.origin)}function B(t,r){if(q(t,p(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(t.origin,n);if(r>1)return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,u=r.origin,a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),u,r.vector),g=n.origin,v=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),g,n.vector),p=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),h=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();if(p[0]=u[0]-g[0],p[1]=u[1]-g[1],p[2]=u[2]-g[2],h[0]=v[0]-g[0],h[1]=v[1]-g[1],h[2]=v[2]-g[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const m=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();if(m[0]=a[0]-u[0],m[1]=a[1]-u[1],m[2]=a[2]-u[2],Math.abs(m[0])<e&&Math.abs(m[1])<e&&Math.abs(m[2])<e)return!1;const l=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],b=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],M=p[0]*m[0]+p[1]*m[1]+p[2]*m[2],d=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],j=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*d-b*b;if(Math.abs(j)<e)return!1;let A=(l*b-M*d)/j,B=(l+b*A)/d;o&&(A=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(A,0,1),B=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(B,0,1));const k=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),S=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();return k[0]=u[0]+A*m[0],k[1]=u[1]+A*m[1],k[2]=u[2]+A*m[2],S[0]=g[0]+B*h[0],S[1]=g[1]+B*h[1],S[2]=g[2]+B*h[2],i.tA=A,i.tB=B,i.pA=k,i.pB=S,i.distance2=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(k,S),!0}const w={tA:0,tB:0,pA:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),pB:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__["ObjectStack"]((()=>({origin:null,vector:null})));


/***/ }),

/***/ "wMH/":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat32.js ***!
  \***************************************************/
/*! exports provided: c, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<9;++e)d[s+e]=n[u+e];s+=f,u+=o}}const t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ "xqxP":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/types.js ***!
  \********************************************************************/
/*! exports provided: elementTypeSize, isInteger, isSigned, maximumValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementTypeSize", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSigned", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumValue", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function c(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function u(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}


/***/ })

}]);
//# sourceMappingURL=default~loadGLTFMesh-js~views-3d-layers-graphics-objectResourceUtils-js.js.map