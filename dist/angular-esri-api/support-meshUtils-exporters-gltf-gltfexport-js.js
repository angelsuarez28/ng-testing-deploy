(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-meshUtils-exporters-gltf-gltfexport-js"],{

/***/ "+uC3":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js ***!
  \*******************************************************************************************/
/*! exports provided: toBinaryGLTF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBinaryGLTF", function() { return f; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "2kjo");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node.js */ "aO56");
/* harmony import */ var _asset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset.js */ "hDFU");
/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene.js */ "aMfo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(e,o){this._file={type:"model/gltf-binary",data:e},this.origin=o}buffer(){return Promise.resolve(this._file)}download(o){Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["downloadBlobAsFile"])(new Blob([this._file.data],{type:this._file.type}),o)}}function f(e,f){const d=new _asset_js__WEBPACK_IMPORTED_MODULE_3__["Asset"],l=new _scene_js__WEBPACK_IMPORTED_MODULE_4__["Scene"];return d.addScene(l),l.addNode(new _node_js__WEBPACK_IMPORTED_MODULE_2__["Node"](e)),Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["exportGLB"])(d,f).then((e=>new s(e[_index_js__WEBPACK_IMPORTED_MODULE_1__["MODEL_NAME_GLB"]],e.origin)))}


/***/ }),

/***/ "1QWe":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js ***!
  \*******************************************************************************************/
/*! exports provided: encodeBase64DataUri, imageToArrayBuffer, imageToDataURI, isArrayBufferPNG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBase64DataUri", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageToArrayBuffer", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageToDataURI", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBufferPNG", function() { return s; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function i(t){const n=m(t);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(n)?n.toDataURL():""}async function o(e){const r=m(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imageToArrayBuffer","Unsupported image type");const a=await c(e),i=await new Promise((t=>r.toBlob(t,a)));if(!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imageToArrayBuffer","Failed to encode image");return{data:await i.arrayBuffer(),type:a}}async function c(t){if(!(t instanceof HTMLImageElement))return"image/png";const e=t.src;if(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["isDataProtocol"])(e)){const{mediaType:t}=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["dataComponents"])(e);return"image/jpeg"===t?t:"image/png"}return/\.png$/i.test(e)?"image/png":/\.(jpg|jpeg)$/i.test(e)?"image/jpeg":"image/png"}function m(t){if(t instanceof HTMLCanvasElement)return t;if(t instanceof HTMLVideoElement)return null;const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");return t instanceof HTMLImageElement?n.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&n.putImageData(t,t.width,t.height),e}function g(t){const e=[],n=new Uint8Array(t);for(let r=0;r<n.length;r++)e.push(String.fromCharCode(n[r]));return"data:application/octet-stream;base64,"+btoa(e.join(""))}function s(t){if(t.byteLength<8)return!1;const e=new Uint8Array(t);return 137===e[0]&&80===e[1]&&78===e[2]&&71===e[3]&&13===e[4]&&10===e[5]&&26===e[6]&&10===e[7]}


/***/ }),

/***/ "2kjo":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js ***!
  \**************************************************************************************/
/*! exports provided: AlphaMode, AttributeType, BufferOutputType, ColorMode, ImageOutputType, MeshMode, Asset, Scene, Node, MODEL_NAME_GLB, MODEL_NAME_GLTF, exportGLB, exportGLTF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME_GLB", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME_GLTF", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportGLB", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportGLTF", function() { return a; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Point.js */ "SuVq");
/* harmony import */ var _glb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glb.js */ "TbbK");
/* harmony import */ var _gltf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gltf.js */ "o0MW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "pgu/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlphaMode", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["AlphaMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["AttributeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferOutputType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorMode", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["ColorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageOutputType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshMode", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["MeshMode"]; });

/* harmony import */ var _imageutils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageutils.js */ "1QWe");
/* harmony import */ var _asset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset.js */ "hDFU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return _asset_js__WEBPACK_IMPORTED_MODULE_6__["Asset"]; });

/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scene.js */ "aMfo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene_js__WEBPACK_IMPORTED_MODULE_7__["Scene"]; });

/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node.js */ "aO56");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node_js__WEBPACK_IMPORTED_MODULE_8__["Node"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const f="model.gltf",p="model.glb";function a(a,m,c){const l=new _gltf_js__WEBPACK_IMPORTED_MODULE_3__["GLTF"](a,m=m||{},c);let g=l.params;g?g.origin||(g.origin=new _Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]({x:-1,y:-1,z:-1})):g={origin:new _Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]({x:-1,y:-1,z:-1})};const y=g.origin,d=l.gltf,j=d.extras.promises;let x=1,b=1,B=null;return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["eachAlways"])(j).then((()=>{const e={origin:y};delete d.extras;const t="number"==typeof m.jsonSpacing?m.jsonSpacing:4,o=JSON.stringify(d,((t,r)=>{if("extras"!==t){if(r instanceof ArrayBuffer){if(Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_5__["isArrayBufferPNG"])(r))switch(m.imageOutputType){case _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].DataURI:case _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].GLB:break;case _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].External:default:{const t=`img${b}.png`;return b++,e[t]=r,t}}switch(m.bufferOutputType){case _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].DataURI:return Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_5__["encodeBase64DataUri"])(r);case _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].GLB:if(B)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(B=r);case _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].External:default:{const t=`data${x}.bin`;return x++,e[t]=r,t}}}return r}}),t);return m.bufferOutputType===_types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].GLB||m.imageOutputType===_types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].GLB?e[p]=new _glb_js__WEBPACK_IMPORTED_MODULE_2__["GLB"](o,B).buffer:e[f]=o,e}))}function m(e,t){return a(e,{bufferOutputType:_types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].GLB,imageOutputType:_types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].GLB,jsonSpacing:0},t)}


/***/ }),

/***/ "EZfZ":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js ***!
  \***************************************************************************************/
/*! exports provided: Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return r; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _bufferview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bufferview.js */ "lfVs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this.buffer=i}addBufferView(e,r,t){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new _bufferview_js__WEBPACK_IMPORTED_MODULE_1__["BufferView"](this,this.gltf,e,r,t);return this.bufferViews.push(f),f}getByteOffset(e){let i=0;for(const r of this.bufferViews){if(r===e)return i;i+=r.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const i=[];for(const r of this.bufferViews){if(e&&r===e)return i;i.push(r.finalized)}return i}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),i=new ArrayBuffer(e);let r=0;for(const t of this.bufferViews)t.writeOutToBuffer(i,r),r+=t.byteSize;return i}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((i=>{i(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["eachAlways"])(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}_getTotalSize(){let e=0;for(const i of this.bufferViews)e+=i.byteSize;return e}}


/***/ }),

/***/ "KbrP":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js ***!
  \*****************************************************************************************/
/*! exports provided: computeOrigin, smoothNormals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeOrigin", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothNormals", function() { return c; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry.js */ "4GrV");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function c(t,e){if(t.components)for(const n of t.components)n.faces&&"smooth"===n.shading&&f(n,e)}function f(e,i){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.normal)&&(i.normal=new Float32Array(i.position.length));const a=e.faces,{position:c,normal:f}=i,m=a.length/3;for(let t=0;t<m;++t){const e=3*a[3*t+0],s=3*a[3*t+1],i=3*a[3*t+2],m=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(p,c[e+0],c[e+1],c[e+2]),h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(l,c[s+0],c[s+1],c[s+2]),g=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(x,c[i+0],c[i+1],c[i+2]),u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(h,h,m),j=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(g,g,m),y=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(u,u,j);f[e+0]+=y[0],f[e+1]+=y[1],f[e+2]+=y[2],f[s+0]+=y[0],f[s+1]+=y[1],f[s+2]+=y[2],f[i+0]+=y[0],f[i+1]+=y[1],f[i+2]+=y[2]}for(let t=0;t<f.length;t+=3)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(h,f[t],f[t+1],f[t+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(h,h),f[t+0]=h[0],f[t+1]=h[1],f[t+2]=h[2]}function m(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.transform))return t.transform.getOriginPoint(t.spatialReference);const n=t.extent.xmax-t.extent.width/2,o=t.extent.ymax-t.extent.height/2,r=t.extent.zmin;return new _Point_js__WEBPACK_IMPORTED_MODULE_4__["default"]({x:n,y:o,z:r,spatialReference:t.extent.spatialReference})}const p=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),l=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),x=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),h=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();


/***/ }),

/***/ "TbbK":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js ***!
  \************************************************************************************/
/*! exports provided: GLB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLB", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var t;!function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN"}(t||(t={}));class e{constructor(i,r){if(!i)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;const n=this._textToArrayBuffer(i);if(this.length+=this._alignTo(n.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();const h=this._writeChunk(n,12,t.JSON,32);r&&this._writeChunk(r,h,t.BIN)}_writeHeader(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}_writeChunk(t,e,i,r=0){const n=this._alignTo(t.byteLength,4);for(this.outView.setUint32(e,n,!0),this.outView.setUint32(e+=4,i,!0),this._writeArrayBuffer(this.outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this.outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,i,r,n){new Uint8Array(t,i,n).set(new Uint8Array(e,r,n),0)}_textToArrayBuffer(t){return(new TextEncoder).encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}}e.HEADER_SIZE=12,e.CHUNK_HEADER_SIZE=8,e.MAGIC=1179937895,e.VERSION=2;


/***/ }),

/***/ "aMfo":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js ***!
  \**************************************************************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return d; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class d{constructor(){this.name="",this._nodes=[]}addNode(d){if(this._nodes.includes(d))throw new Error("Node already added");this._nodes.push(d)}forEachNode(d){this._nodes.forEach(d)}}


/***/ }),

/***/ "aO56":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js ***!
  \*************************************************************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return i; });
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class i{constructor(s){this.mesh=s,this.name="",this.translation=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.rotation=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),this.scale=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["O"]),this._nodes=[]}addNode(s){if(this._nodes.includes(s))throw new Error("Node already added");this._nodes.push(s)}forEachNode(s){this._nodes.forEach(s)}set rotationAngles(t){Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_0__["k"])(this.rotation,t[0],t[1],t[2])}}


/***/ }),

/***/ "hDFU":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js ***!
  \**************************************************************************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return s; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(s){Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._scenes,s)}forEachScene(e){this._scenes.forEach(e)}}


/***/ }),

/***/ "lfVs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js ***!
  \*******************************************************************************************/
/*! exports provided: BufferView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferView", function() { return r; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "pgu/");
/* harmony import */ var _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../views/webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r{constructor(e,s,i,r,n){this.buffer=e,this.componentType=i,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==_types_js__WEBPACK_IMPORTED_MODULE_1__["TargetBuffer"].ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a),s.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType,i=this.accessorMin[s];this.accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this.accessorMax[s];this.accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this.data.length*this._sizeComponentType()}get byteSize(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this.componentType){case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].BYTE:return new Int8Array(e,t);case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].FLOAT:return new Float32Array(e,t);case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].SHORT:return new Int16Array(e,t);case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_BYTE:return new Uint8Array(e,t);case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_INT:return new Uint32Array(e,t);case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this.data)}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this.data.push(t[s]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);const r={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_BYTE:case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_SHORT:r.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const t=this.bufferView;return new Promise((t=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),t(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["eachAlways"])(s))})).then((()=>{this.isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}_getElementSize(){return this._sizeComponentType()*this.numComponentsForDataType}_sizeComponentType(){switch(this.componentType){case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].BYTE:case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_BYTE:return 1;case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].SHORT:case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_SHORT:return 2;case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].UNSIGNED_INT:case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this.dataType){case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].SCALAR:return 1;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].VEC2:return 2;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].VEC3:return 3;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].VEC4:case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].MAT2:return 4;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].MAT3:return 9;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].MAT4:return 16}}}


/***/ }),

/***/ "o0MW":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js ***!
  \*************************************************************************************/
/*! exports provided: GLTF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTF", function() { return M; });
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/MapUtils.js */ "KOts");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../MeshMaterialMetallicRoughness.js */ "g/q1");
/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../georeference.js */ "6bpU");
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buffer.js */ "EZfZ");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geometry.js */ "KbrP");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types.js */ "pgu/");
/* harmony import */ var _imageutils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imageutils.js */ "1QWe");
/* harmony import */ var _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../views/webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class M{constructor(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===_types_js__WEBPACK_IMPORTED_MODULE_10__["BufferOutputType"].GLB||this.gltf.extras.options.imageOutputType===_types_js__WEBPACK_IMPORTED_MODULE_10__["ImageOutputType"].GLB;t&&(this.gltf.extras.binChunkBuffer=new _buffer_js__WEBPACK_IMPORTED_MODULE_8__["Buffer"](this.gltf)),e.forEachScene((e=>{this._addScene(e)})),t&&this.gltf.extras.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this._addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["k"])(s,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["Z"])||(t.translation=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(s));const c=e.rotation;Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_2__["j"])(c,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__["I"])||(t.rotation=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__["b"])(c));const u=e.scale;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["k"])(u,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["O"])||(t.scale=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(u)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this._addNode(e);t.children.push(s)}));const f=this.gltf.nodes.length;return this.gltf.nodes.push(t),f}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const s={primitives:[]},i=this.gltf.extras.options.bufferOutputType===_types_js__WEBPACK_IMPORTED_MODULE_10__["BufferOutputType"].GLB;let r;r=i?this.gltf.extras.binChunkBuffer:new _buffer_js__WEBPACK_IMPORTED_MODULE_8__["Buffer"](this.gltf),this.params.origin||(this.params.origin=Object(_geometry_js__WEBPACK_IMPORTED_MODULE_9__["computeOrigin"])(e));const a=Object(_georeference_js__WEBPACK_IMPORTED_MODULE_7__["ungeoreferenceByTransform"])(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});Object(_geometry_js__WEBPACK_IMPORTED_MODULE_9__["smoothNormals"])(e,a),this._flipYZAxis(a);const o=r.addBufferView(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["DataType"].FLOAT,_types_js__WEBPACK_IMPORTED_MODULE_10__["AttributeType"].VEC3,_types_js__WEBPACK_IMPORTED_MODULE_10__["TargetBuffer"].ARRAY_BUFFER);let n,l,h,c;a.normal&&(n=r.addBufferView(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["DataType"].FLOAT,_types_js__WEBPACK_IMPORTED_MODULE_10__["AttributeType"].VEC3,_types_js__WEBPACK_IMPORTED_MODULE_10__["TargetBuffer"].ARRAY_BUFFER)),e.vertexAttributes.uv&&(l=r.addBufferView(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["DataType"].FLOAT,_types_js__WEBPACK_IMPORTED_MODULE_10__["AttributeType"].VEC2,_types_js__WEBPACK_IMPORTED_MODULE_10__["TargetBuffer"].ARRAY_BUFFER)),a.tangent&&(h=r.addBufferView(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["DataType"].FLOAT,_types_js__WEBPACK_IMPORTED_MODULE_10__["AttributeType"].VEC4,_types_js__WEBPACK_IMPORTED_MODULE_10__["TargetBuffer"].ARRAY_BUFFER)),e.vertexAttributes.color&&(c=r.addBufferView(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["DataType"].UNSIGNED_BYTE,_types_js__WEBPACK_IMPORTED_MODULE_10__["AttributeType"].VEC4,_types_js__WEBPACK_IMPORTED_MODULE_10__["TargetBuffer"].ARRAY_BUFFER)),o.startAccessor("POSITION"),n&&n.startAccessor("NORMAL"),l&&l.startAccessor("TEXCOORD_0"),h&&h.startAccessor("TANGENT"),c&&c.startAccessor("COLOR_0");const g=a.position.length/3,{position:A,normal:R,tangent:T}=a,{color:b,uv:M}=e.vertexAttributes;for(let u=0;u<g;++u)o.push(A[3*u+0]),o.push(A[3*u+1]),o.push(A[3*u+2]),n&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(R)&&(n.push(R[3*u+0]),n.push(R[3*u+1]),n.push(R[3*u+2])),l&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(M)&&(l.push(M[2*u+0]),l.push(M[2*u+1])),h&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(T)&&(h.push(T[4*u+0]),h.push(T[4*u+1]),h.push(T[4*u+2]),h.push(T[4*u+3])),c&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(b)&&(c.push(b[4*u+0]),c.push(b[4*u+1]),c.push(b[4*u+2]),c.push(b[4*u+3]));const O=o.endAccessor(),N=this._addAccessor(o.index,O);let C,B,w,y,I;if(n){const e=n.endAccessor();C=this._addAccessor(n.index,e)}if(l){const e=l.endAccessor();B=this._addAccessor(l.index,e)}if(h){const e=h.endAccessor();w=this._addAccessor(h.index,e)}if(c){const e=c.endAccessor();y=this._addAccessor(c.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(I=r.addBufferView(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["DataType"].UNSIGNED_INT,_types_js__WEBPACK_IMPORTED_MODULE_10__["AttributeType"].SCALAR,_types_js__WEBPACK_IMPORTED_MODULE_10__["TargetBuffer"].ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(I,e.components,s,N,C,B,w,y)):this._addMeshVertexNonIndexed(e.components,s,N,C,B,w,y),o.finalize(),n&&n.finalize(),l&&l.finalize(),h&&h.finalize(),I&&I.finalize(),c&&c.finalize(),i||r.finalize();const S=this.gltf.meshes.length;return this.gltf.meshes.push(s),S}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],r=e[i];e[s]=r,e[i]=-t}}_addMaterial(e){if(null===e)return;const s=this.materialMap.indexOf(e);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const i={};switch(e.alphaMode){case"mask":i.alphaMode=_types_js__WEBPACK_IMPORTED_MODULE_10__["AlphaMode"].MASK;break;case"auto":case"blend":i.alphaMode=_types_js__WEBPACK_IMPORTED_MODULE_10__["AlphaMode"].BLEND}.5!==e.alphaCutoff&&(i.alphaCutoff=e.alphaCutoff),e.doubleSided&&(i.doubleSided=e.doubleSided),i.pbrMetallicRoughness={};const r=e=>e**2.1,a=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.color)&&(i.pbrMetallicRoughness.baseColorFactor=a(e.color)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.colorTexture)&&(i.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.normalTexture)&&(i.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_6__["default"]){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.emissiveTexture)&&(i.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.emissiveColor)){const t=a(e.emissiveColor);i.emissiveFactor=[t[0],t[1],t[2]]}Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.occlusionTexture)&&(i.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.metallicRoughnessTexture)&&(i.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),i.pbrMetallicRoughness.metallicFactor=e.metallic,i.pbrMetallicRoughness.roughnessFactor=e.roughness}else i.pbrMetallicRoughness.metallicFactor=1,i.pbrMetallicRoughness.roughnessFactor=1;const o=this.gltf.materials.length;return this.gltf.materials.push(i),this.materialMap.push(e),o}_addTexture(t){return this.gltf.textures||(this.gltf.textures=[]),Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapValue"])(this.textureMap,t,(()=>{const e={sampler:this._addSampler(t),source:this._addImage(t)},s=this.gltf.textures.length;return this.gltf.textures.push(e),s}))}_addImage(e){const t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{s.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case _types_js__WEBPACK_IMPORTED_MODULE_10__["ImageOutputType"].GLB:{const t=this.gltf.extras.binChunkBuffer.addBufferView(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["DataType"].UNSIGNED_BYTE,_types_js__WEBPACK_IMPORTED_MODULE_10__["AttributeType"].SCALAR),i=Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_11__["imageToArrayBuffer"])(e.data).then((({data:e,type:t})=>(s.mimeType=t,e)));t.writeAsync(i).then((()=>{t.finalize()})),s.bufferView=t.index;break}case _types_js__WEBPACK_IMPORTED_MODULE_10__["ImageOutputType"].DataURI:s.uri=Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_11__["imageToDataURI"])(e.data);break;default:this.gltf.extras.promises.push(Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_11__["imageToArrayBuffer"])(e.data).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].REPEAT,s=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].CLAMP_TO_EDGE,s=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].CLAMP_TO_EDGE;break;case"mirror":t=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].MIRRORED_REPEAT,s=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].CLAMP_TO_EDGE;break;case"mirror":s=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].CLAMP_TO_EDGE;break;case"mirror":t=_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__["TextureWrapMode"].MIRRORED_REPEAT}}const i={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[a]))return a;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,r,a,o,n){for(const l of t){e.startAccessor("INDICES");for(let s=0;s<l.faces.length;++s)e.push(l.faces[s]);const t=e.endAccessor(),h={attributes:{POSITION:i},indices:this._addAccessor(e.index,t),material:this._addMaterial(l.material)};r&&"flat"!==l.shading&&(h.attributes.NORMAL=r),a&&(h.attributes.TEXCOORD_0=a),o&&"flat"!==l.shading&&(h.attributes.TANGENT=o),n&&(h.attributes.COLOR_0=n),s.primitives.push(h)}}_addMeshVertexNonIndexed(e,t,s,i,r,a,o){const n={attributes:{POSITION:s}};i&&(n.attributes.NORMAL=i),r&&(n.attributes.TEXCOORD_0=r),a&&(n.attributes.TANGENT=a),o&&(n.attributes.COLOR_0=o),e&&(n.material=this._addMaterial(e[0].material)),t.primitives.push(n)}}


/***/ }),

/***/ "pgu/":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js ***!
  \**************************************************************************************/
/*! exports provided: AlphaMode, AttributeType, BufferOutputType, ColorMode, ImageOutputType, MeshMode, TargetBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaMode", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeType", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferOutputType", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMode", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageOutputType", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshMode", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetBuffer", function() { return R; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var E,A,R,L,o,I,N;!function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(E||(E={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4"}(L||(L={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(o||(o={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND"}(I||(I={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor"}(N||(N={}));


/***/ })

}]);
//# sourceMappingURL=support-meshUtils-exporters-gltf-gltfexport-js.js.map