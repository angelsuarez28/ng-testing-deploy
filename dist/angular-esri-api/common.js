(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+dDh":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/NestedMap.js ***!
  \*****************************************************/
/*! exports provided: NestedMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedMap", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,e){var r;return null==(r=this._outer.get(t))?void 0:r.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]))}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((e,r)=>t(e,r)))}}


/***/ }),

/***/ "/ADo":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js ***!
  \********************************************************************************/
/*! exports provided: InterleavedBuffer, InterleavedLayout, newLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterleavedBuffer", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterleavedLayout", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLayout", function() { return T; });
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/buffer/types.js */ "xqxP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class v{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new v(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,s){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n)}}}class N{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,i){return this._appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"],i),this}vec2f64(e,i){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"],i),this}vec3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"],t),this}vec3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"],t),this}vec4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"],t),this}vec4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"],t),this}mat3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"],t),this}mat3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"],t),this}mat4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"],t),this}mat4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"],t),this}vec4u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"],t),this}f32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"],t),this}f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"],t),this}u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"],t),this}u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"],t),this}i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"],t),this}vec2i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"],t),this}vec2i16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"],t),this}vec2u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"],t),this}vec4u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"],t),this}u32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"],t),this}_appendField(e,t,i){const s=t.ElementCount*Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__["elementTypeSize"])(t.ElementType),r=this.stride;this.fields.set(e,{size:s,constructor:t,offset:r,optional:i}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new v(this,e)}createView(e){return new v(this,e)}clone(){const e=new N;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function T(){return new N}


/***/ }),

/***/ "/wA8":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ "kvL/");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let i=class extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"]{renderChildren(r){if(r.drawPhase!==_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__["ClearBufferBit"].COLOR_BUFFER_BIT),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;


/***/ }),

/***/ "1F90":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/programUtils.js ***!
  \***************************************************************/
/*! exports provided: glslifyDefineMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glslifyDefineMap", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){let n="";for(const o in e){const t=e[o];if("boolean"==typeof t)t&&(n+=`#define ${o}\n`);else if("number"==typeof t)n+=`#define ${o} ${t.toFixed()}\n`;else if("object"==typeof t){const e=t.options;let f=0;for(const o in e)n+=`#define ${e[o]} ${(f++).toFixed()}\n`;n+=`#define ${o} ${e[t.value]}\n`}}return n}


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4xTw":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__["HandleOwner"]{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"layerView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"tileInfoView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"updating",null),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const o=i;


/***/ }),

/***/ "6UvW":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
  \****************************************************************/
/*! exports provided: createQueryGeometry, intersectsDrapedGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryGeometry", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsDrapedGeometry", function() { return o; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/unitUtils.js */ "gEht");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"]){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o)&&!o.equals(a.spatialReference)?Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__["getMetersPerUnitForSR"])(o)/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__["getMetersPerUnitForSR"])(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o))return!1;return a(o,Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__["calculateTolerance"])(),i,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"];


/***/ }),

/***/ "AfLA":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
  \*********************************************************************/
/*! exports provided: calculateHeatmapIntensityInfo, calculateHeatmapIntensityInfoReaders, createHeatmapImageData, createKernel, createValueFunction, createValueFunctionCursor, drawHeatmap, generateGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfo", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfoReaders", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeatmapImageData", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKernel", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunction", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunctionCursor", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawHeatmap", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGradient", function() { return e; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),n=512;return t.height=n,t.width=1,n=>{e.clearRect(0,0,1,t.height);const r=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n)r.addColorStop(Math.max(t,.001),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`);return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function n(t,e,n,r){const{blurRadius:a,fieldOffset:o,field:c}=e,u=new Float64Array(n*r),h=i(a),l=Math.round(3*a);let s,d=Number.NEGATIVE_INFINITY;const m=f(c,o);for(const{geometry:i,attributes:f}of t){const t=i.x-l,e=i.y-l,a=Math.max(0,t),o=Math.max(0,e),c=Math.min(r,i.y+l),g=Math.min(n,i.x+l),y=+m(f);for(let r=o;r<c;r++){const o=h[r-e];for(let e=a;e<g;e++){const a=h[e-t];s=u[r*n+e]+=o*a*y,s>d&&(d=s)}}}return{matrix:u.buffer,max:d}}function r(t,e,n,r){const{blurRadius:a,fieldOffset:o,field:f}=e,u=new Float64Array(n*r),h=i(a),l=Math.round(3*a);let s,d=Number.NEGATIVE_INFINITY;const m=c(f,o),g=new Set;for(const i of t){const t=i.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const a=t.readLegacyPointGeometry(),o=128;if(a.x<-o||a.x>=n+o||a.y<-o||a.y>r+o)continue;const i=+m(t),f=Math.round(a.x)-l,c=Math.round(a.y)-l,y=Math.max(0,f),M=Math.max(0,c),x=Math.min(r,Math.round(a.y)+l),b=Math.min(n,Math.round(a.x)+l);for(let t=M;t<x;t++){const e=h[t-c];for(let r=y;r<b;r++){const a=h[r-f];s=u[t*n+r]+=e*a*i,s>d&&(d=s)}}}}return{matrix:u.buffer,max:d}}function a(t,e,n,r,a,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(o(e,n,r,a,i))),t.putImageData(f,0,0)}function o(e,n,r,a,o){const i=new Uint32Array(e*e),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(o-a);for(let h=0;h<f.length;h++){const e=f[h],n=Math.floor((e-a)*u);i[h]=c[Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(n,0,c.length-1)]}return i.buffer}function i(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let a=0;a<=r.length;a++)r[a]=Math.exp(-((a-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function f(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function c(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}


/***/ }),

/***/ "BGvB":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/kmlUtils.js ***!
  \**************************************************************/
/*! exports provided: computeExtent, fetchService, getGraphics, parseKML, sublayersFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchService", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphics", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKML", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sublayersFromJSON", function() { return S; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kernel.js */ "975N");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PopupTemplate.js */ "SFah");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../rest/support/FeatureSet.js */ "Ltyc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const o=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?G(n,a,e.featureSet.features):"esriGeometryPolyline"===t?G(i,a,e.featureSet.features):"esriGeometryPolygon"===t&&G(f,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s)}))})),t.forEach((e=>{if(e.featureInfos){e.points=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(r.get("esriGeometryPoint")),e.polylines=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(r.get("esriGeometryPolyline")),e.polygons=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=a.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e])}}));const u=j(t);return{folders:o,sublayers:t,extent:u}}function g(t,s,i,f){const a=_kernel_js__WEBPACK_IMPORTED_MODULE_1__["id"]&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__["id"].findCredential(t);t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["addQueryParameters"])(t,{token:a&&a.token});const l=_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].kmlServiceUrl;return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(l,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else s.unshift(i)})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t)}))}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(e.featureSet).features,r=e.layerDefinition,s=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__["fromJSON"])(r.drawingInfo.renderer),n=_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t)}return i}function j(e){const o=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["create"])(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["NEGATIVE_INFINITY"]),t=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["create"])(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["NEGATIVE_INFINITY"]);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o);if(r.mapImages)for(const e of r.mapImages)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.extent),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o)}return Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["equals"])(t,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["NEGATIVE_INFINITY"])?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__["default"].WGS84}}


/***/ }),

/***/ "Dx0z":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/BaseRasterTransform.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{get affectsPixelSize(){return!1}forwardTransform(r){return r}inverseTransform(r){return r}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],t.prototype,"affectsPixelSize",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],t.prototype,"spatialReference",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterTransforms.BaseRasterTransform")],t);const a=t;


/***/ }),

/***/ "Eqwr":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseRasterTransform.js */ "Dx0z");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let e=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(){super(...arguments),this.type="identity"}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({IdentityXform:"identity"})],e.prototype,"type",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.rasterTransforms.IdentityTransform")],e);const p=e;


/***/ }),

/***/ "GJyJ":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/renderState.js ***!
  \**************************************************************/
/*! exports provided: StateTracker, backFaceCullingParams, cullingParams, defaultColorWriteParams, defaultDepthWriteParams, frontFaceCullingParams, makeBlending, makeColorWrite, makeCulling, makeDepthTest, makeDepthWrite, makePipelineState, makePolygonOffset, makeStencilTest, makeStencilWrite, separateBlendingParams, simpleBlendingParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTracker", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backFaceCullingParams", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cullingParams", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColorWriteParams", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDepthWriteParams", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontFaceCullingParams", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBlending", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeColorWrite", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCulling", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDepthTest", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDepthWrite", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePipelineState", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePolygonOffset", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStencilTest", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStencilWrite", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateBlendingParams", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleBlendingParams", function() { return s; });
/* harmony import */ var _3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../3d/webgl-engine/lib/basicInterfaces.js */ "t8JS");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function s(t,e,i=_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendOperation"].ADD,s=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function l(t,e,i,s,l=_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendOperation"].ADD,r=_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendOperation"].ADD,o=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:s,opRgb:l,opAlpha:r,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const r={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__["Face"].BACK,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__["CullMode"].CCW},o={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__["Face"].FRONT,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__["CullMode"].CCW},h=e=>e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["CullFaceOptions"].Back?r:e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["CullFaceOptions"].Front?o:null,a={zNear:0,zFar:1},c={r:!0,g:!0,b:!0,a:!0};function _(t){return T.intern(t)}function d(t){return D.intern(t)}function p(t){return C.intern(t)}function u(t){return A.intern(t)}function g(t){return w.intern(t)}function f(t){return B.intern(t)}function v(t){return z.intern(t)}function I(t){return j.intern(t)}function W(t){return N.intern(t)}class S{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function b(t){return"["+t.join(",")+"]"}const T=new S(y,(t=>({__tag:"Blending",...t})));function y(t){return t?b([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const D=new S(O,(t=>({__tag:"Culling",...t})));function O(t){return t?b([t.face,t.mode]):null}const C=new S(m,(t=>({__tag:"PolygonOffset",...t})));function m(t){return t?b([t.factor,t.units]):null}const A=new S(R,(t=>({__tag:"DepthTest",...t})));function R(t){return t?b([t.func]):null}const w=new S(k,(t=>({__tag:"StencilTest",...t})));function k(t){return t?b([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const B=new S(P,(t=>({__tag:"DepthWrite",...t})));function P(t){return t?b([t.zNear,t.zFar]):null}const z=new S(F,(t=>({__tag:"ColorWrite",...t})));function F(t){return t?b([t.r,t.g,t.b,t.a]):null}const j=new S(K,(t=>({__tag:"StencilWrite",...t})));function K(t){return t?b([t.mask]):null}const N=new S(x,(t=>({blending:_(t.blending),culling:d(t.culling),polygonOffset:p(t.polygonOffset),depthTest:u(t.depthTest),stencilTest:g(t.stencilTest),depthWrite:f(t.depthWrite),colorWrite:v(t.colorWrite),stencilWrite:I(t.stencilWrite)})));function x(t){return t?b([y(t.blending),O(t.culling),m(t.polygonOffset),R(t.depthTest),k(t.stencilTest),P(t.depthWrite),F(t.colorWrite),K(t.stencilWrite)]):null}class M{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ }),

/***/ "IYxN":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js ***!
  \**********************************************************************************/
/*! exports provided: decreaseRefCount, deleteBlock, deleteRaster, getBlock, getRasterId, putBlock, register, unregister, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseRefCount", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlock", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRaster", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlock", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRasterId", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putBlock", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return g; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EphemeralBlockCache.js */ "vbno");
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const c=new Map,a=new _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__["default"];function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function s(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(c.has(e)){const t=c.get(e);return t.push(n),t.length-1}return c.set(e,[n]),0}function u(e,t){if(c.has(e)){const n=c.get(e);n[t]=null,n.some((e=>null!=e))||c.delete(e)}}function f(e){c.delete(e)}function h(e,t,n){if(!c.has(e))return null==t?a.decreaseRefCount(e,n):0;const o=c.get(e);if(null==o[t])return a.decreaseRefCount(e,n);const r=o[t].cache;if(r.has(n)){const e=r.get(n);if(e.refCount--,0===e.refCount){r.delete(n);for(let e=0;e<o.length;e++)o[e]&&o[e].cache.has(n)&&o[e].cache.delete(n);e.controller&&e.controller.abort()}return e.refCount}return 0}function m(e,t,n){if(!c.has(e))return null==t?a.getBlock(e,n):null;const o=c.get(e);if(null==o[t]){for(let e=0;e<o.length;e++)if(o[e]&&o[e].cache.has(n)){const t=o[e].cache.get(n);return t.refCount++,t.block}return a.getBlock(e,n)}const r=o[t].cache;if(r.has(n)){const e=r.get(n);return e.refCount++,e.block}for(let l=0;l<o.length;l++)if(l!==t&&o[l]&&o[l]&&o[l].cache.has(n)){const e=o[l].cache.get(n);return e.refCount++,r.set(n,e),e.block}return null}function x(e,t,n,o,r=null){if(!c.has(e))return void(null==t&&a.putBlock(e,n,o,r));const l=c.get(e);if(null==l[t])return void a.putBlock(e,n,o,r);const i={refCount:1,block:o,isResolved:!1,isRejected:!1,controller:r};o.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),l[t].cache.set(n,i)}function d(e,t,n){if(!c.has(e))return void(null==t&&a.deleteBlock(e,n));const o=c.get(e);null!=o[t]?o[t].cache.delete(n):a.deleteBlock(e,n)}function y(e,t){if(!c.has(e))return null;const n=c.get(e);return null==n[t]?null:n[t]}function g(t,c,a,i,s,u,f=null){const h=y(t,c),m=h.extent,{cache:x,rasterInfo:d}=h;if(m&&m.xmin===a.xmin&&m.xmax===a.xmax&&m.ymin===a.ymin&&m.ymax===a.ymax)return;const g=a.clone().normalize(),{spatialReference:p,transform:k}=d,M=new Set;for(let y=0;y<g.length;y++){const t=g[y];if(t.xmax-t.xmin<=i||t.ymax-t.ymin<=i)continue;let c=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["projectExtent"])(t,p,f);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(k)&&(c=k.inverseTransform(c));const a=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__["default"]({x:i,y:i,spatialReference:t.spatialReference});if(null==s&&!(s=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["projectResolution"])(a,p,t,f)))return;const{pyramidLevel:h,pyramidResolution:m,excessiveReading:x}=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["snapPyramid"])(s,d,u||"closest");if(x)return;const{storageInfo:R}=d,{origin:C}=R,j={x:Math.max(0,Math.floor((c.xmin-C.x)/m.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/m.y))},v=Math.ceil((c.xmax-c.xmin)/m.x-.1),B=Math.ceil((c.ymax-c.ymin)/m.y-.1),b=h>0?R.pyramidBlockWidth:R.blockWidth,w=h>0?R.pyramidBlockHeight:R.blockHeight,$=1,I=Math.max(0,Math.floor(j.x/b)-$),H=Math.max(0,Math.floor(j.y/w)-$),E=Math.floor((j.x+v-1)/b)+$,P=Math.floor((j.y+B-1)/w)+$;for(let e=H;e<=P;e++)for(let t=I;t<=E;t++)M.add(`${h}/${e}/${t}`)}x.forEach(((e,t)=>{if(!M.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),h.extent={xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax}}


/***/ }),

/***/ "IcpP":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js ***!
  \**********************************************************************************/
/*! exports provided: createFeatureEditErrorResult, createFeatureEditSuccessResult, loadGeometryEngine, loadGeometryEngineForSimplify, mixAttributes, simplify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditErrorResult", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditSuccessResult", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngine", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngineForSimplify", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixAttributes", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return h; });
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new a(e)}const f=new Set;function d(e,t,r,s=!1,o){f.clear();for(const l in r){const a=e.get(l);if(!a)continue;const c=r[l],d=m(a,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(s||a.editable)){const e=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validateFieldValue"])(a,d);if(e)return u(Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validationErrorToString"])(e,a,d));t[a.name]=d}}for(const n of e.requiredFields)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(e,n){let i=n;return"string"==typeof n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNumericField"])(e)?i=parseFloat(n):null!=n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isStringField"])(e)&&"string"!=typeof n&&(i=String(n)),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["sanitizeNullFieldValue"])(i)}let p;function h(t,n){if(!t||!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(n))return t;if("rings"in t||"paths"in t){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function g(){return p||(p=await Promise.all(/*! import() | geometry-geometryEngineJSON-js */[__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null, /*! ../../../../geometry/geometryEngineJSON.js */ "AKzY")),p)}async function y(t,n){!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g()}


/***/ }),

/***/ "LbAs":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \****************************************************************/
/*! exports provided: requestImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestImage", function() { return t; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ "OYGz":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js ***!
  \*******************************************************************/
/*! exports provided: WMTSLayerInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMTSLayerInfo", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var i;let p=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(r){super(r)}clone(){return new i({customLayerParameters:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.customLayerParameters),customParameters:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layer.support.WMTSLayerInfo")],p);const a=p;


/***/ }),

/***/ "PjW/":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js ***!
  \**************************************************************************/
/*! exports provided: fetchSymbolFromStyle, resolveWebStyleSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSymbolFromStyle", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveWebStyleSymbol", function() { return g; });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "H9eC");
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jsonUtils.js */ "YXST");
/* harmony import */ var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyleOrigin.js */ "tyRe");
/* harmony import */ var _styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styleUtils.js */ "NDpP");
/* harmony import */ var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Thumbnail.js */ "UFqC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["fetchStyle"])(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"].getDefault(),url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__["f"])(Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["symbolUrlFromStyleItem"])(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["isDevEnvironment"])()&&(w=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["adjustStaticAGOUrl"])(w),P=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["adjustStaticAGOUrl"])(P));const D={portal:g.portal,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeFile"])(w)),origin:"portal-item"};return Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["requestJSON"])(w,j).then((e=>{const r="cimRef"===h?Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["makeCIMSymbolRef"])(e.data):e.data,o=Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])(r,D);if(o&&Object(_symbols_js__WEBPACK_IMPORTED_MODULE_0__["isSymbol3D"])(o)){if(P){const t=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__["f"])(P,U);o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__["Thumbnail"]({url:t})}else S&&(o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__["Thumbnail"]({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:g.portal,styleName:y.styleName,name:c}))}return o}))}function j(t,e,r){const o=_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["Style2DUrlTemplate"].replace(/\{SymbolName\}/gi,t.name);return Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["requestJSON"])(o,r).then((t=>{const r=Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["makeCIMSymbolRef"])(t.data);return Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])(r,{portal:e.portal,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeFile"])(o)),origin:"portal-item"})}))}


/***/ }),

/***/ "U282":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
  \****************************************************************************/
/*! exports provided: calculateTolerance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTolerance", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}


/***/ }),

/***/ "YU0U":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderPass.js ***!
  \***************************************************************************/
/*! exports provided: RenderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPass", function() { return A; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var A;!function(A){A[A.MATERIAL=0]="MATERIAL",A[A.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",A[A.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",A[A.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",A[A.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",A[A.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",A[A.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",A[A.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT",A[A.MAX_PASS=8]="MAX_PASS"}(A||(A={}));


/***/ }),

/***/ "cM4j":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js ***!
  \***************************************************************************/
/*! exports provided: ExportImageParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImageParameters", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commonProperties.js */ "IvSi");
/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sublayerUtils.js */ "Ilhi");
/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/support/floorFilterUtils.js */ "81Mc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=Object(_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__["getLayerFloorFilterClause"])(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_10__["isExportDynamic"])(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r)=>{const s=Object(_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__["getLayerFloorFilterClause"])(this.floors,r),i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(s)?Object(_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__["combineFloorsDefinitionExpression"])(s,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"dynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"floors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"hasDynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"layers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"layerDefs",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],c.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__["combinedViewLayerTimeExtentProperty"])],c.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"version",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"visibleSublayers",null),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.mixins.ExportImageParameters")],c);


/***/ }),

/***/ "d0kY":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ogc/crsUtils.js ***!
  \**********************************************************/
/*! exports provided: isAxesOrderReversedForWkid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAxesOrderReversedForWkid", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function o(o){return n.some((([n,t])=>o>=n&&o<=t))}


/***/ }),

/***/ "dDjh":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js ***!
  \*********************************************************************************************/
/*! exports provided: OITPolygonOffset, OITPolygonOffsetLimit, blendingAlpha, blendingColor, blendingDefault, getOITPolygonOffset, oitBlending, oitDepthTest, oitDepthWrite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITPolygonOffset", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITPolygonOffsetLimit", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingAlpha", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingColor", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingDefault", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOITPolygonOffset", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oitBlending", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oitDepthTest", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oitDepthWrite", function() { return S; });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInterfaces.js */ "t8JS");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const c=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__["separateBlendingParams"])(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA),N=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__["simpleBlendingParams"])(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE),A=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__["simpleBlendingParams"])(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ZERO,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA);function E(r){return r===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["TransparencyPassType"].FrontFace?null:r===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["TransparencyPassType"].Alpha?A:N}function S(r){return r===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["TransparencyPassType"].FrontFace?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__["defaultDepthWriteParams"]:null}const _=5e5,f={factor:-1,units:-2};function i(n){return n?f:null}function l(r,e=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].LESS){return r===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["TransparencyPassType"].NONE||r===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["TransparencyPassType"].FrontFace?e:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].LEQUAL}


/***/ }),

/***/ "dZC4":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js ***!
  \*************************************************************************/
/*! exports provided: hydratedAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydratedAdapter", function() { return r; });
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Extent.js */ "OvF4");
/* harmony import */ var _Multipoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Multipoint.js */ "V9wi");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Point.js */ "SuVq");
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Polygon.js */ "Ehki");
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Polyline.js */ "UhwK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r={convertToGEGeometry:s,exportPoint:a,exportPolygon:c,exportPolyline:h,exportMultipoint:m,exportExtent:x};function s(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t}function a(e,n,o){const i=e.hasZ(n),r=e.hasM(n),s=new _Point_js__WEBPACK_IMPORTED_MODULE_2__["default"]({x:e.getPointX(n),y:e.getPointY(n),spatialReference:o});return i&&(s.z=e.getPointZ(n)),r&&(s.m=e.getPointM(n)),s.cache._geVersion=n,s}function c(e,n,t){const i=new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return i.cache._geVersion=n,i}function h(e,n,t){const o=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return o.cache._geVersion=n,o}function m(e,t,o){const i=new _Multipoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:o});return i.cache._geVersion=t,i}function x(n,t,o){const i=n.hasZ(t),r=n.hasM(t),s=new _Extent_js__WEBPACK_IMPORTED_MODULE_0__["default"]({xmin:n.getXMin(t),ymin:n.getYMin(t),xmax:n.getXMax(t),ymax:n.getYMax(t),spatialReference:o});if(i){const e=n.getZExtent(t);s.zmin=e.vmin,s.zmax=e.vmax}if(r){const e=n.getMExtent(t);s.mmin=e.vmin,s.mmax=e.vmax}return s.cache._geVersion=t,s}


/***/ }),

/***/ "dz3i":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/GCSShiftTransform.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseRasterTransform.js */ "Dx0z");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let a=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(r){return"point"===(r=r.clone()).type?(r.x>180+this.tolerance&&(r.x-=360),r):(r.xmin>=180-this.tolerance?(r.xmax-=360,r.xmin-=360):r.xmax>180+this.tolerance&&(r.xmin=-180,r.xmax=180),r)}inverseTransform(r){return"point"===(r=r.clone()).type?(r.x<-this.tolerance&&(r.x+=360),r):(r.xmin<-this.tolerance&&(r.xmin+=360,r.xmax+=360),r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({GCSShiftXform:"gcs-shift"})],a.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"tolerance",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterTransforms.GCSShiftTransform")],a);const c=a;


/***/ }),

/***/ "e4KH":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/Rasterizer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return m; });
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CIMSymbolHelper.js */ "eT81");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect.js */ "Du6U");
/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDFHelper.js */ "QFw1");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "NrhG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=512;class m{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(s,o,m){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===s.type||"esriSFS"===s.type){const[t,r,a]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["SymbolHelper"].rasterizeSimpleFill(this._rasterizationCanvas,s.style,o);return{size:[r,a],image:new Uint32Array(t.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===s.type||"esriSLS"===s.type||"line"===s.type&&s.dashTemplate){let r,a;if("simple-line"===s.type||"esriSLS"===s.type)switch(r=Object(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["slsDashToTemplateArray"])(s.style,s.cap),s.cap){case"butt":a="Butt";break;case"square":a="Square";break;default:a="Round"}else r=s.dashTemplate,a=s.cim.capStyle;const[i,n,o]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["SymbolHelper"].rasterizeSimpleLine(r,a);return{size:[n,o],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let l,c,f;if("simple-marker"===s.type||"esriSMS"===s.type||"line-marker"===s.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].fromSimpleMarker(s),f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__["getSDFInfo"])(l)):s.cim&&"CIMHatchFill"===s.cim.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].fromCIMHatchFill(s.cim),c=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):s.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===s.cim.markerPlacement.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].fromCIMInsidePolygon(s.cim),c=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):(l=s.cim,f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__["getSDFInfo"])(l)),f&&!m){const[e,t,r]=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__["buildSDF"])(f);return e?{size:[t,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[p,h,u,y,d]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].rasterize(this._rasterizationCanvas,l,c,this._resourceManager,!m);return p?{size:[h,u],image:new Uint32Array(p.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:d}:null}rasterizeImageResource(e,t,r,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${t}px`),i.drawImage(r,0,0,e,t));const n=i.getImageData(0,0,e,t),m=new Uint8Array(n.data);if(a)for(const s of a)if(s&&s.oldColor&&4===s.oldColor.length&&s.newColor&&4===s.newColor.length){const[e,t,r,a]=s.oldColor,[i,n,o,l]=s.newColor;if(e===i&&t===n&&r===o&&a===l)continue;for(let s=0;s<m.length;s+=4)e===m[s]&&t===m[s+1]&&r===m[s+2]&&a===m[s+3]&&(m[s]=i,m[s+1]=n,m[s+2]=o,m[s+3]=l)}let l;for(let s=0;s<m.length;s+=4)l=m[s+3]/255,m[s]=m[s]*l,m[s+1]=m[s+1]*l,m[s+2]=m[s+2]*l;let c=m,f=e,p=t;const h=o;if(f>=h||p>=h){const r=f/p;r>1?(f=h,p=Math.round(h/r)):(p=h,f=Math.round(h*r)),c=new Uint8Array(4*f*p);const a=new Uint8ClampedArray(c.buffer);Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["resampleHermite"])(m,e,t,a,f,p,!1)}return{size:[f,p],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}


/***/ }),

/***/ "f7EE":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/PolynomialTransform.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return m; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseRasterTransform.js */ "Dx0z");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function p(e,r,o){const{x:t,y:s}=r;if(o<2){return{x:e[0]+t*e[2]+s*e[4],y:e[1]+t*e[3]+s*e[5]}}if(2===o){const r=t*t,o=s*s,n=t*s;return{x:e[0]+t*e[2]+s*e[4]+r*e[6]+n*e[8]+o*e[10],y:e[1]+t*e[3]+s*e[5]+r*e[7]+n*e[9]+o*e[11]}}const n=t*t,i=s*s,f=t*s,l=n*t,p=n*s,a=t*i,c=s*i;return{x:e[0]+t*e[2]+s*e[4]+n*e[6]+f*e[8]+i*e[10]+l*e[12]+p*e[14]+a*e[16]+c*e[18],y:e[1]+t*e[3]+s*e[5]+n*e[7]+f*e[9]+i*e[11]+l*e[13]+p*e[15]+a*e[17]+c*e[19]}}function a(e,r,o){const{xmin:t,ymin:s,xmax:n,ymax:i,spatialReference:f}=r;let a=[];if(o<2)a.push({x:t,y:i}),a.push({x:n,y:i}),a.push({x:t,y:s}),a.push({x:n,y:s});else{let e=10;for(let r=0;r<e;r++)a.push({x:t,y:s+(i-s)*r/(e-1)}),a.push({x:n,y:s+(i-s)*r/(e-1)});e=8;for(let r=1;r<=e;r++)a.push({x:t+(n-t)*r/e,y:s}),a.push({x:t+(n-t)*r/e,y:i})}a=a.map((r=>p(e,r,o)));const c=a.map((e=>e.x)),u=a.map((e=>e.y));return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"]({xmin:Math.min.apply(null,c),xmax:Math.max.apply(null,c),ymin:Math.min.apply(null,u),ymax:Math.max.apply(null,u),spatialReference:f})}function c(e){const[r,o,t,s,n,i]=e,f=t*i-n*s,l=n*s-t*i;return[(n*o-r*i)/f,(t*o-r*s)/l,i/f,s/l,-n/f,-t/l]}let u=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,r){const{coeffX:o,coeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeForwardCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.coeffX=t,r.coeffY=s}get inverseCoefficients(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=c(r)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,r){const{inverseCoeffX:o,inverseCoeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeInverseCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.inverseCoeffX=t,r.inverseCoeffY=s}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const r=p(this.forwardCoefficients,e,this.polynomialOrder);return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const r=p(this.inverseCoefficients,e,this.polynomialOrder);return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.inverseCoefficients,e,this.polynomialOrder)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],u.prototype,"polynomialOrder",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],u.prototype,"forwardCoefficients",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("forwardCoefficients",["coeffX","coeffY"])],u.prototype,"readForwardCoefficients",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("forwardCoefficients")],u.prototype,"writeForwardCoefficients",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],u.prototype,"inverseCoefficients",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],u.prototype,"readInverseCoefficients",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("inverseCoefficients")],u.prototype,"writeInverseCoefficients",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],u.prototype,"affectsPixelSize",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({PolynomialXform:"polynomial"})],u.prototype,"type",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.rasterTransforms.PolynomialTransform")],u);const m=u;


/***/ }),

/***/ "jEtK":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js ***!
  \*****************************************************************************/
/*! exports provided: deduplicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduplicate", function() { return n; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(n,f,i){var u;const c=n.byteLength/(4*f),s=new Uint32Array(n,0,c*f);let a=new Uint32Array(c);const h=null!=(u=null==i?void 0:i.minReduction)?u:0,g=(null==i?void 0:i.originalIndices)||null,y=g?g.length:0,U=(null==i?void 0:i.componentOffsets)||null;let d=0;if(U)for(let t=0;t<U.length-1;t++){const n=U[t+1]-U[t];n>d&&(d=n)}else d=c;const w=Math.floor(1.1*d)+1;(null==o||o.length<2*w)&&(o=new Uint32Array(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(2*w)));for(let t=0;t<2*w;t++)o[t]=0;let A=0;const m=!!U&&!!g,b=m?y:c,v=m?new Uint32Array(y):null,p=1.96;let M=0!==h?Math.ceil(4*p*p/(h*h)*h*(1-h)):b,q=1,j=U?U[1]:b;for(let t=0;t<b;t++){if(t===M){const n=1-A/t;if(n+p*Math.sqrt(n*(1-n)/t)<h)return null;M*=2}if(t===j){for(let t=0;t<2*w;t++)o[t]=0;if(g)for(let t=U[q-1];t<U[q];t++)v[t]=a[g[t]];j=U[++q]}const n=m?g[t]:t,l=n*f,i=r(s,l,f);let u=i%w,c=A;for(;0!==o[2*u+1];){if(o[2*u]===i){const t=o[2*u+1]-1;if(e(s,l,t*f,f)){c=a[t];break}}u++,u>=w&&(u-=w)}c===A&&(o[2*u]=i,o[2*u+1]=n+1,A++),a[n]=c}if(0!==h&&1-A/c<h)return null;if(m){for(let t=U[q-1];t<v.length;t++)v[t]=a[g[t]];a=v}const k=new Uint32Array(f*A);A=0;for(let t=0;t<b;t++)if(a[t]===A){l(s,(m?g[t]:t)*f,k,A*f,f),A++}if(g&&!m){const t=new Uint32Array(y);for(let n=0;n<t.length;n++)t[n]=a[g[n]];a=t}return{buffer:k.buffer,indices:a,uniqueCount:A}}function e(t,n,e,l){for(let r=0;r<l;r++)if(t[n+r]!==t[e+r])return!1;return!0}function l(t,n,e,l,r){for(let o=0;o<r;o++)e[l+o]=t[n+o]}function r(t,n,e){let l=0;for(let r=0;r<e;r++)l=t[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o=null;


/***/ }),

/***/ "jGp1":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js ***!
  \****************************************************************************/
/*! exports provided: isTransformSupported, readTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformSupported", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTransform", function() { return f; });
/* harmony import */ var _GCSShiftTransform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GCSShiftTransform.js */ "dz3i");
/* harmony import */ var _IdentityTransform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentityTransform.js */ "Eqwr");
/* harmony import */ var _PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PolynomialTransform.js */ "f7EE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t={GCSShiftXform:_GCSShiftTransform_js__WEBPACK_IMPORTED_MODULE_0__["default"],IdentityXform:_IdentityTransform_js__WEBPACK_IMPORTED_MODULE_1__["default"],PolynomialXform:_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_2__["default"]},i=Object.keys(t);function e(n){const o=null==n?void 0:n.type;return!n||i.includes(o)}function f(n){if(!(null==n?void 0:n.type))return null;const o=t[null==n?void 0:n.type];if(o){const r=new o;return r.read(n),r}return null}


/***/ }),

/***/ "kGdt":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \***************************************************************/
/*! exports provided: ProgramCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramCache", function() { return s; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/NestedMap.js */ "+dDh");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Program.js */ "jjdI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(r){this._rctx=r,this._store=new _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_1__["NestedMap"]}dispose(){this._store.forEach((r=>r.forEach((r=>r.dispose())))),this._store.clear()}acquire(t,s,o,c){const i=this._store.get(t,s);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i))return i.ref(),i;const h=new _Program_js__WEBPACK_IMPORTED_MODULE_2__["Program"](this._rctx,t,s,o,c);return h.ref(),this._store.set(t,s,h),h}get test(){let r=0;return this._store.forEach((t=>t.forEach((t=>r+=t.hasGLName?2:1)))),{cachedWebGLObjects:r}}}


/***/ }),

/***/ "l5Tg":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/geometryEngineJSON.js ***!
  \****************************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, I, J, K, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return v; });
/* harmony import */ var _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometryEngineBase.js */ "9gar");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/geometryAdapters/json.js */ "1kEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(n){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].extendedSpatialReferenceInfo(n)}function t(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].clip(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function i(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].cut(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function s(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].contains(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function u(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].crosses(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function o(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].distance(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function a(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].equals(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function c(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].intersects(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function f(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].touches(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function l(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].within(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function p(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].disjoint(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function g(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].overlaps(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function d(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].relate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function m(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].isSimple(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function h(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].simplify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function y(r,t,i=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].convexHull(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function x(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].difference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function w(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].symmetricDifference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function A(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].intersect(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function E(r,t,i=null){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].union(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function j(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].offset(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function z(r,t,i,s,u=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].buffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function I(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicBuffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function V(r,t,i,s=!0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].nearestCoordinate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function v(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].nearestVertex(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function D(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].nearestVertices(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function H(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const s=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].rotate(r,t,i);return s.spatialReference=n,s}function R(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].flipHorizontal(r,t);return i.spatialReference=n,i}function b(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].flipVertical(r,t);return i.spatialReference=n,i}function B(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].generalize(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function L(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].densify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function S(r,t,i,s,u=0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicDensify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function _(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].planarArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function q(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].planarLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function C(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function G(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}const k=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:s,crosses:u,distance:o,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:h,convexHull:y,difference:x,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:z,geodesicBuffer:I,nearestCoordinate:V,nearestVertex:v,nearestVertices:D,rotate:H,flipHorizontal:R,flipVertical:b,generalize:B,densify:L,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:G});


/***/ }),

/***/ "nMRV":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js ***!
  \***********************************************************************/
/*! exports provided: decodeDoubleArray, encodeDouble, encodeDoubleArray, encodeDoubleArraySplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeDoubleArray", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDouble", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleArray", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleArraySplit", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(n,o){e[0]=n,e[1]=n-e[0],o[0]=e[0],o[1]=e[1]}function o(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r]}function t(n,o,t){for(let r=0;r<t;++r)o[r]=n[2*r]+n[2*r+1]}function r(n,t,r,c){for(let l=0;l<c;++l)f[0]=n[l],o(f,e,1),t[l]=e[0],r[l]=e[1]}const f=new Float64Array(1),e=new Float32Array(2);


/***/ }),

/***/ "ncPp":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/WebTileLayer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return x; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/string.js */ "s7YA");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/LOD.js */ "UOZ4");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/TileInfo.js */ "3/ME");
/* harmony import */ var _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/WMTSLayerInfo.js */ "OYGz");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let R=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"]))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__["default"](-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator,this.subDomains=null,this.tileInfo=new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"]({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__["default"]({x:-20037508.342787,y:20037508.342787,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator}),spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator,lods:[new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:0,scale:591657527.591555,resolution:156543.033928}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:1,scale:295828763.795777,resolution:78271.5169639999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:2,scale:147914381.897889,resolution:39135.7584820001}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:3,scale:73957190.948944,resolution:19567.8792409999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:4,scale:36978595.474472,resolution:9783.93962049996}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:5,scale:18489297.737236,resolution:4891.96981024998}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:6,scale:9244648.868618,resolution:2445.98490512499}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:7,scale:4622324.434309,resolution:1222.99245256249}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:8,scale:2311162.217155,resolution:611.49622628138}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:9,scale:1155581.108577,resolution:305.748113140558}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:10,scale:577790.554289,resolution:152.874056570411}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:11,scale:288895.277144,resolution:76.4370282850732}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:12,scale:144447.638572,resolution:38.2185141425366}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:13,scale:72223.819286,resolution:19.1092570712683}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:14,scale:36111.909643,resolution:9.55462853563415}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:15,scale:18055.954822,resolution:4.77731426794937}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:16,scale:9027.977411,resolution:2.38865713397468}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:17,scale:4513.988705,resolution:1.19432856685505}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:18,scale:2256.994353,resolution:.597164283559817}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:19,scale:1128.497176,resolution:.298582141647617}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:20,scale:564.248588,resolution:.14929107082380833}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:21,scale:282.124294,resolution:.07464553541190416}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:22,scale:141.062147,resolution:.03732276770595208}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["Url"](this.urlTemplate);!!this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["Url"](t),o=l.scheme?l.scheme+"://":"//",i=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(i);else if(r&&r.length>0&&l.authority.split(".").length>1)for(const s of r)e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["Url"](e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["isProtocolRelative"])(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["normalize"])(e)),t.templateUrl=e}fetchTile(e,r,l,o={}){const{signal:s}=o,i=this.getTileUrl(e,r,l),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i,n).then((e=>e.data))}getTileUrl(e,t,r){const l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(_core_string_js__WEBPACK_IMPORTED_MODULE_5__["replace"])(this.urlPath,{level:l,z:l,col:r,x:r,row:t,y:t})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__["default"],json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],R.prototype,"levelValues",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"]})],R.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"],json:{write:!0}})],R.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],R.prototype,"tileServers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{read:!1}})],R.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],R.prototype,"urlPath",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__["writer"])("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_22__["default"],json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__["subclass"])("esri.layers.WebTileLayer")],R);const x=R;


/***/ }),

/***/ "p0UO":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/objectIdUtils.js ***!
  \********************************************************************/
/*! exports provided: findLastObjectIdFromFeatures, initialObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastObjectIdFromFeatures", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialObjectId", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=1;function n(t,n){let o=0;for(const r of n){var e;const n=null==(e=r.attributes)?void 0:e[t];"number"==typeof n&&isFinite(n)&&(o=Math.max(o,n))}return o}


/***/ }),

/***/ "q03O":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ "kvL/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}


/***/ }),

/***/ "t73S":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js ***!
  \********************************************************************************/
/*! exports provided: VertexAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexAttribute", function() { return O; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var O;!function(O){O.POSITION="position",O.NORMAL="normal",O.UV0="uv0",O.AUXPOS1="auxpos1",O.AUXPOS2="auxpos2",O.MAPPOS="mapPos",O.COLOR="color",O.SYMBOLCOLOR="symbolColor",O.SIZE="size",O.TANGENT="tangent",O.OFFSET="offset",O.SUBDIVISIONFACTOR="subdivisionFactor",O.COLORFEATUREATTRIBUTE="colorFeatureAttribute",O.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",O.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",O.DISTANCETOSTART="distanceToStart",O.UVMAPSPACE="uvMapSpace",O.BOUNDINGRECT="boundingRect",O.UVREGION="uvRegion",O.NORMALCOMPRESSED="normalCompressed",O.PROFILERIGHT="profileRight",O.PROFILEUP="profileUp",O.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",O.FEATUREVALUE="featureValue",O.MODELORIGINHI="modelOriginHi",O.MODELORIGINLO="modelOriginLo",O.MODEL="model",O.MODELNORMAL="modelNormal",O.INSTANCECOLOR="instanceColor",O.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",O.LOCALTRANSFORM="localTransform",O.GLOBALTRANSFORM="globalTransform",O.BOUNDINGSPHERE="boundingSphere",O.MODELORIGIN="modelOrigin",O.MODELSCALEFACTORS="modelScaleFactors",O.FEATUREATTRIBUTE="featureAttribute",O.STATE="state",O.LODLEVEL="lodLevel",O.POSITION0="position0",O.POSITION1="position1",O.NORMALA="normalA",O.NORMALB="normalB",O.COMPONENTINDEX="componentIndex",O.VARIANTOFFSET="variantOffset",O.VARIANTSTROKE="variantStroke",O.VARIANTEXTENSION="variantExtension",O.U8PADDING="u8padding",O.U16PADDING="u16padding",O.SIDENESS="sideness",O.START="start",O.END="end",O.UP="up",O.EXTRUDE="extrude"}(O||(O={}));


/***/ }),

/***/ "t8JS":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js ***!
  \********************************************************************************/
/*! exports provided: AlphaDiscardMode, AntiAliasingMode, CullFaceOptions, Decorations, DepthTestFunction, Object3DState, PowerOfTwoResizeMode, PrimitiveType, RenderRequestType, ResourceState, StencilBits, TransparencyPassType, UpdatePolicy, ValidationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaDiscardMode", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntiAliasingMode", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CullFaceOptions", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decorations", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepthTestFunction", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3DState", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerOfTwoResizeMode", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitiveType", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderRequestType", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceState", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StencilBits", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransparencyPassType", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePolicy", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationState", function() { return A; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var n,N,e,O,t,i,a,o,u,c,l,A,C,D;!function(n){n[n.None=0]="None",n[n.Front=1]="Front",n[n.Back=2]="Back",n[n.COUNT=3]="COUNT"}(n||(n={})),function(n){n[n.Less=0]="Less",n[n.Lequal=1]="Lequal",n[n.COUNT=2]="COUNT"}(N||(N={})),function(n){n[n.NONE=0]="NONE",n[n.SMAA=1]="SMAA"}(e||(e={})),function(n){n[n.Color=0]="Color",n[n.Alpha=1]="Alpha",n[n.FrontFace=2]="FrontFace",n[n.NONE=3]="NONE",n[n.COUNT=4]="COUNT"}(O||(O={})),function(n){n[n.BACKGROUND=0]="BACKGROUND",n[n.UPDATE=1]="UPDATE"}(t||(t={})),function(n){n[n.NOT_LOADED=0]="NOT_LOADED",n[n.LOADING=1]="LOADING",n[n.LOADED=2]="LOADED"}(i||(i={})),function(n){n[n.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",n[n.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(a||(a={})),function(n){n[n.ASYNC=0]="ASYNC",n[n.SYNC=1]="SYNC"}(o||(o={})),function(n){n[n.Highlight=0]="Highlight",n[n.MaskOccludee=1]="MaskOccludee",n[n.COUNT=2]="COUNT"}(u||(u={})),function(n){n[n.Triangle=0]="Triangle",n[n.Point=1]="Point",n[n.Line=2]="Line"}(c||(c={})),function(n){n[n.STRETCH=1]="STRETCH",n[n.PAD=2]="PAD"}(l||(l={})),function(n){n[n.CHANGED=0]="CHANGED",n[n.UNCHANGED=1]="UNCHANGED"}(A||(A={})),function(n){n[n.Blend=0]="Blend",n[n.Opaque=1]="Opaque",n[n.Mask=2]="Mask",n[n.MaskBlend=3]="MaskBlend",n[n.COUNT=4]="COUNT"}(C||(C={})),function(n){n[n.OFF=0]="OFF",n[n.ON=1]="ON"}(D||(D={}));


/***/ }),

/***/ "uAeW":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js ***!
  \******************************************************************************/
/*! exports provided: ExportWMSImageParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportWMSImageParameters", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={visible:"visibleSublayers"};let l=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,s=null==e?void 0:e.sublayers,t=[],o=e=>{const{minScale:s,maxScale:a,sublayers:l,visible:i}=e;i&&(0===r||(0===s||r<=s)&&(0===a||r>=a))&&(l?l.forEach(o):t.unshift(e))};return null==s||s.forEach(o),t}toJSON(){const{layer:e,layers:r}=this,{imageFormat:s,imageTransparency:t,version:o}=e;return{format:s,request:"GetMap",service:"WMS",styles:"",transparent:t?"TRUE":"FALSE",version:o,layers:r}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],l.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],l.prototype,"layers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Number})],l.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],l.prototype,"version",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],l.prototype,"visibleSublayers",null),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.ExportWMSImageParameters")],l);


/***/ }),

/***/ "ukaK":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__["HandleOwner"]{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],s.prototype,"supportsTileUpdates",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"remoteClient",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"service",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"tileStore",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;


/***/ }),

/***/ "utzi":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js ***!
  \***************************************************************************/
/*! exports provided: RenderSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderSlot", function() { return E; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var E;!function(E){E[E.INTEGRATED_MESH=0]="INTEGRATED_MESH",E[E.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",E[E.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",E[E.OPAQUE_PLUGIN=3]="OPAQUE_PLUGIN",E[E.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",E[E.TRANSPARENT_PLUGIN=5]="TRANSPARENT_PLUGIN",E[E.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",E[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",E[E.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",E[E.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",E[E.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",E[E.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",E[E.POSTPROCESSING_ENVIRONMENT_OPAQUE=12]="POSTPROCESSING_ENVIRONMENT_OPAQUE",E[E.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=13]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",E[E.LASERLINES=14]="LASERLINES",E[E.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",E[E.HUD_MATERIAL=16]="HUD_MATERIAL",E[E.LABEL_MATERIAL=17]="LABEL_MATERIAL",E[E.LINE_CALLOUTS=18]="LINE_CALLOUTS",E[E.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",E[E.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",E[E.DRAPED_WATER=21]="DRAPED_WATER",E[E.VOXEL=22]="VOXEL",E[E.MAX_SLOTS=23]="MAX_SLOTS"}(E||(E={}));


/***/ }),

/***/ "vbno":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e)}decreaseRefCount(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.refCount--,t.refCount<=0&&(r.delete(s),t.controller&&t.controller.abort()),t.refCount}return 0}getBlock(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.ts=Date.now(),t.refCount++,r.delete(s),r.set(s,t),t.block}return null}putBlock(t,e,s,r=null){const i=this._cachedBlocks,c=t+"/"+e;if(i.has(c)){const t=i.get(c);t.ts=Date.now(),t.refCount++}else i.set(c,{block:s,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(t,e){const s=this._cachedBlocks,r=t+"/"+e;s.has(r)&&s.delete(r)}updateMaxSize(t){this._size=t,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(null!=this._timer)return;const t=this._cachedBlocks;this._timer=setInterval((()=>{const e=Array.from(t),s=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=s-this._duration;r++)t.delete(e[r][0]);0===t.size&&this._clearTimer()}),this._interval)}_trim(){const t=this._cachedBlocks;if(-1===this._size||this._size>=t.size)return;const e=Array.from(t);for(let s=0;s<e.length-this._size;s++)t.delete(e[s][0])}_clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}}


/***/ })

}]);
//# sourceMappingURL=common.js.map