(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aa301cde"],{

/***/ "0RS7":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/number.js ***!
  \*******************************************************************/
/*! exports provided: i16, i1616to32, i32, i8, i8816to32, i8888to32, numTo32, toFloat32, toUint32, u16, u32, u32to4Xu8, u4u4to8, u8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i16", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i1616to32", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i32", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8816to32", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8888to32", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numTo32", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat32", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u16", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32to4Xu8", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u4u4to8", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u8", function() { return f; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=new Float32Array(1),r=new Uint32Array(n.buffer);function t(n,r,t){return Math.round(Math.max(Math.min(n,t),r))}function u(n){return t(n,-128,127)}function e(n){return t(n,-32768,32767)}function o(n){return t(n,-2147483648,2147483647)}function f(n){return t(n,0,255)}function i(n){return t(n,0,65535)}function c(n){return t(n,0,4294967295)}function a(t){return n[0]=t,r[0]}function h(t){return r[0]=t,n[0]}function M(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function m(n,r){return 15&n|(15&r)<<4}function w(n,r){return 65535&n|r<<16}function x(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}function y(n,r,t){return 255&n|(255&r)<<8|t<<16}function A(n){return 0|n}


/***/ }),

/***/ "4SEz":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SymbolProperties.js ***!
  \*****************************************************************************/
/*! exports provided: TextProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProperties", function() { return h; });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "7Nfj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}h.pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](h);


/***/ }),

/***/ "Pz5D":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js ***!
  \**************************************************************************/
/*! exports provided: VertexElementDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexElementDescriptor", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,h,o,e=!1,r=0){this.name=t,this.count=s,this.type=i,this.offset=h,this.stride=o,this.normalized=e,this.divisor=r}}


/***/ }),

/***/ "qaIE":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/color.js ***!
  \******************************************************************/
/*! exports provided: copyAndPremultiply, premultiplyAlpha, premultiplyAlphaRGBA, premultiplyAlphaRGBAArray, premultiplyAlphaUint32, white */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAndPremultiply", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlpha", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBA", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBAArray", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaUint32", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return n; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "0RS7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=[255,255,255,1],t=[0,0,0,0];function u(r,n){return Array.isArray(n)?(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3]):(r[0]=n.r,r[1]=n.g,r[2]=n.b,r[3]=n.a),r}function o(r,n=0,t=!1){const u=r[n+3];return r[n+0]*=u,r[n+1]*=u,r[n+2]*=u,t||(r[n+3]*=255),r}function c(r){return o(u([],r))}function e(n){return o(u(t,n)),Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t[0],t[1],t[2],t[3])}function i(n){if(!n)return 0;const{r:t,g:u,b:o,a:c}=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*c,u*c,o*c,255*c)}function f(n){if(!n)return 0;const[t,u,o,c]=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*(c/255),u*(c/255),o*(c/255),c)}


/***/ }),

/***/ "yE7X":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js ***!
  \******************************************************************/
/*! exports provided: MosaicType, VVType, WGLDrawPhase, WGLGeometryTransactionStatus, WGLGeometryType, WGLVVFlag, WGLVVTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MosaicType", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VVType", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLDrawPhase", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryTransactionStatus", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryType", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVFlag", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVTarget", function() { return _; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var E,T,I,L,A,_,O;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL"}(E||(E={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(T||(T={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(I||(I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION"}(L||(L={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(A||(A={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(_||(_={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH"}(O||(O={}));


/***/ }),

/***/ "yN2G":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js ***!
  \******************************************************************/
/*! exports provided: C_FILL_STRIDE_SPEC, C_FILL_STRIDE_SPEC_DD, C_FILL_STRIDE_SPEC_SIMPLE, C_FILL_VERTEX_DEF, C_FILL_VERTEX_DEF_DD, C_FILL_VERTEX_DEF_SIMPLE, C_ICON_STRIDE_SPEC, C_ICON_VERTEX_DEF, C_LABEL_STRIDE_SPEC, C_LABEL_VERTEX_DEF, C_LINE_STRIDE_SPEC, C_LINE_VERTEX_DEF, C_TEXT_STRIDE_SPEC, C_TEXT_VERTEX_DEF, C_VBO_GEOMETRY, C_VBO_INFO, C_VBO_PERINSTANCE, C_VBO_PERINSTANCE_VV, allocateTypedArrayBuffer, allocateTypedArrayBufferwithData, charCodes, copyMeshData, createGeometryData, createProgramDescriptor, createTextureFromTexelData, forEachGeometryType, geometryToMappedGeometry, getBytes, getCapType, getJoinType, getNamedBuffers, getPMSResourceSize, getPixelArrayCtor, getPixelBytes, getStrides, getTextProperties, getTransformParams, getUrl, getVVType, is3D, isDefined, isGIF, isImageResource, isNumber, isPNG, isSVGImage, isSVGResource, isSimple, isValidSVG, shouldRepeat, strideToPackingFactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC_DD", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC_SIMPLE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF_DD", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF_SIMPLE", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_STRIDE_SPEC", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_VERTEX_DEF", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_STRIDE_SPEC", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_VERTEX_DEF", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_STRIDE_SPEC", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_VERTEX_DEF", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_STRIDE_SPEC", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_VERTEX_DEF", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_GEOMETRY", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_INFO", function() { return re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE_VV", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBuffer", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBufferwithData", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charCodes", function() { return Ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyMeshData", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryData", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramDescriptor", function() { return de; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureFromTexelData", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachGeometryType", function() { return pe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryToMappedGeometry", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBytes", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapType", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJoinType", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedBuffers", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPMSResourceSize", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelArrayCtor", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelBytes", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrides", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextProperties", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformParams", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrl", function() { return he; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVVType", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3D", function() { return Ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGIF", function() { return Te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageResource", function() { return ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPNG", function() { return we; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVGImage", function() { return Se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVGResource", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSimple", function() { return Ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidSVG", function() { return De; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldRepeat", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strideToPackingFactor", function() { return k; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../symbols/cim/enums.js */ "qzns");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color.js */ "qaIE");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SymbolProperties.js */ "4SEz");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../webgl/VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const w=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.Utils"),E="geometry",I="per_instance",S="per_instance_vv",A=[{name:E,strideInBytes:36}],L=[{name:E,strideInBytes:32}],N=[{name:E,strideInBytes:20}],D=[{name:E,strideInBytes:12}],M=[{name:E,strideInBytes:40}],v=[{name:E,strideInBytes:36}],U=[{name:E,strideInBytes:36}];function R(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const _=R(A),B=R(L),b=R(N),C=R(D),O=R(M),F=R(v),x=R(U);function z(e,{fill:t}){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].MARKER:return _;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].FILL:return"dot-density"===t?C:"simple"===t?b:B;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LINE:return O;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT:return F;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LABEL:return x}}const j=[E],G=[E],P=[E],$=[E],V=[E];function Y(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].MARKER:return j;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].FILL:return G;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LINE:return P;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT:return $;case _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LABEL:return V}}function k(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function q(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function H(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function X(e){return _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_7__["TextProperties"].pool.acquire(e.color?Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["copyAndPremultiply"])(e.color):[255,255,255,255],e.haloColor?Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["copyAndPremultiply"])(e.haloColor):[255,255,255,255],Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.haloSize),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)}function K(e){return null!=e}function Z(e){return"number"==typeof e}function J(t){switch(t){case"butt":return _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["CapType"].BUTT;case"round":return _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["CapType"].ROUND;case"square":return _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["CapType"].SQUARE;default:return w.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["CapType"].ROUND}}function Q(t){switch(t){case"miter":return _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["JoinType"].MITER;case"bevel":return _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["JoinType"].BEVEL;case"round":return _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["JoinType"].ROUND;default:return w.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_4__["JoinType"].ROUND}}function W(e){switch(e){case"opacity":return _enums_js__WEBPACK_IMPORTED_MODULE_6__["VVType"].OPACITY;case"color":return _enums_js__WEBPACK_IMPORTED_MODULE_6__["VVType"].COLOR;case"rotation":return _enums_js__WEBPACK_IMPORTED_MODULE_6__["VVType"].ROTATION;case"size":return _enums_js__WEBPACK_IMPORTED_MODULE_6__["VVType"].SIZE;default:return w.error(`Cannot interpret unknown vv: ${e}`),null}}function ee(e){const{transform:t,hasZ:r,hasM:n}=e;return{transform:t,hasZ:r,hasM:n}}function te(e,t,r,n,i,o,s){for(const c in o){const t=o[c].stride,n=k(t),s=o[c].data,a=r[c].data,u=t*i.vertexCount/n,l=t*e/n,m=t*i.vertexFrom/n;for(let e=0;e<u;++e)a[e+l]=s[e+m]}const a=i.indexCount;for(let c=0;c<a;++c)n[c+t]=s[c+i.indexFrom]-i.vertexFrom+e}const re={[E]:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["Usage"].STATIC_DRAW};function ne(e,t){const r=[];for(let n=0;n<5;++n){const i=Y(n),o={};for(const e of i)o[e]={data:t(n,e)};r.push({data:e(n),buffers:o})}return r}function ie(e,t){let n,i;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPowerOfTwo"])(t.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPowerOfTwo"])(t.height)?(n=!0,i=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureSamplingMode"].LINEAR_MIPMAP_LINEAR):(n=!1,i=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureSamplingMode"].LINEAR),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["Texture"](e,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelType"].UNSIGNED_BYTE,hasMipmap:n,samplingMode:i,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureWrapMode"].CLAMP_TO_EDGE,flipped:!0},t)}function oe(e){return{vertexFrom:void 0,vertexTo:void 0,geometry:e}}function se(e){switch(e){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["DataType"].BYTE:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["DataType"].UNSIGNED_BYTE:return 1;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["DataType"].SHORT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["DataType"].UNSIGNED_SHORT:return 2;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["DataType"].FLOAT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["DataType"].INT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["DataType"].UNSIGNED_INT:return 4}}function ae(t){switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelType"].UNSIGNED_BYTE:return 1;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelType"].UNSIGNED_SHORT_4_4_4_4:return 2;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelType"].FLOAT:return 4;default:return void w.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-utils",`Unable to handle type ${t}`))}}function ce(t){switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelType"].UNSIGNED_BYTE:return Uint8Array;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelType"].UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["PixelType"].FLOAT:return Float32Array;default:return void w.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-utils",`Unable to handle type ${t}`))}}function ue(e){const t={};for(const r in e){const n=e[r];let i=0;t[r]=n.map((e=>{const t=new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_10__["VertexElementDescriptor"](e.name,e.count,e.type,i,0,e.normalized||!1);return i+=e.count*se(e.type),t})),t[r].forEach((e=>e.stride=i))}return t}const le=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},me=e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0}return t},fe=new Map,de=(e,t)=>{if(!fe.has(e)){const r=ue(t),n={strides:me(r),bufferLayouts:r,attributes:le(t)};fe.set(e,n)}return fe.get(e)};function pe(e){e(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].FILL),e(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LINE),e(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].MARKER),e(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT),e(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LABEL)}const ye=e=>"path"in e&&De(e.path),ge=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,he=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,Te=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),we=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),Ee=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function Ie(e){switch(e.type){case"line":{const t=e;return"CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const Se=e=>e.includes("data:image/svg+xml");function Ae(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function Le(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function Ne(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const De=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4));


/***/ })

}]);
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aa301cde.js.map