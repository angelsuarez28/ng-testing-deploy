(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-features-createSymbolSchema-js"],{

/***/ "7Fg+":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/createSymbolSchema.js ***!
  \**********************************************************************************/
/*! exports provided: createSymbolSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSymbolSchema", function() { return l; });
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/webgl/materialKey/MaterialKey.js */ "GMaR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(e){if("line-marker"===e.type){var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}}return e.constructor.fromJSON(e.toJSON()).toJSON()}function a(e){return hydrateKey(e)}function l(e,t,a){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return s(e,t,a);case"simple-marker":case"picture-marker":return o(e,t,a);case"simple-line":return i(e,t,a);case"text":return u(e,t,a);case"label":return n(e,t,a);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...r(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function n(r,l,n){const s=r.toJSON(),i=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LABEL,{...l,placement:s.labelPlacement});return{materialKey:n?a(i):i,hash:r.hash(),...s,labelPlacement:s.labelPlacement}}function s(l,n,s){const i=n.supportsOutlineFills,o=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL,{...n,isOutlinedFill:i}),u=s?a(o):o,c=l.clone(),h=c.outline;n.supportsOutlineFills||(c.outline=null);const m={materialKey:u,hash:c.hash(),isOutlinedFill:!!n.supportsOutlineFills,...r(c)};if(n.supportsOutlineFills)return m;const p=[];if(p.push(m),h){const l=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,{...n,isOutline:!0}),i={materialKey:s?a(l):l,hash:h.hash(),...r(h)};p.push(i)}return{type:"composite-symbol",layers:p,hash:p.reduce(((e,t)=>t.hash+e),"")}}function i(l,n,s){const i=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,n),o=s?a(i):i,u=l.clone(),c=u.marker;u.marker=null;const h=[];if(h.push({materialKey:o,hash:u.hash(),...r(u)}),c){var m;const l=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,n),i=s?a(l):l;c.color=null!=(m=c.color)?m:u.color,h.push({materialKey:i,hash:c.hash(),lineWidth:u.width,...r(c)})}return{type:"composite-symbol",layers:h,hash:h.reduce(((e,t)=>t.hash+e),"")}}function o(l,n,s){const i=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,n),o=s?a(i):i,u=r(l);return{materialKey:o,hash:l.hash(),...u,angle:l.angle,maxVVSize:n.maxVVSize}}function u(l,n,s){const i=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT,n),o=s?a(i):i,u=r(l);return{materialKey:o,hash:l.hash(),...u,angle:l.angle,maxVVSize:n.maxVVSize}}


/***/ })

}]);
//# sourceMappingURL=layers-features-createSymbolSchema-js.js.map