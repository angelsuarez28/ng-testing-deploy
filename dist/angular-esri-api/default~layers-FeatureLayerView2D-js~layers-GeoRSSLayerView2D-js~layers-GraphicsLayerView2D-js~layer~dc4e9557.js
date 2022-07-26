(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~dc4e9557"],{

/***/ "5x/F":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/LevelDependentSizeVariable.js ***!
  \*********************************************************************************/
/*! exports provided: LevelDependentSizeVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelDependentSizeVariable", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../renderers/visualVariables/SizeVariable.js */ "w/y1");
/* harmony import */ var _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../renderers/visualVariables/support/sizeVariableUtils.js */ "hvLT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var l;let n=l=class extends _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_6__["default"]{writeLevels(e,s,i){for(const t in e){const e=this.levels[t];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_7__["isSizeVariable"])(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_7__["isSizeVariable"])(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.levels)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],n.prototype,"levels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_5__["writer"])("levels")],n.prototype,"writeLevels",null),n=l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__["subclass"])("esri.views.2d.engine.LevelDependentSizeVariable")],n);


/***/ }),

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


/***/ }),

/***/ "9H0t":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/cimSymbolUtils.js ***!
  \*****************************************************************************/
/*! exports provided: cimLayerToRasterizationInfo, expandSymbol, expandSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cimLayerToRasterizationInfo", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbol", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbols", function() { return r; });
/* harmony import */ var _symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../symbols/cim/cimAnalyzer.js */ "T8sT");
/* harmony import */ var _symbols_cim_ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../symbols/cim/ExpandedCIM.js */ "wlZk");
/* harmony import */ var _webStyleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webStyleUtils.js */ "unaH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=async(e,t,a,r)=>Promise.all(e.map((e=>l(e,t,a,r)))),n=async(a,r,n)=>new _symbols_cim_ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_1__["ExpandedCIM"](await Object(_symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_0__["analyzeCIMSymbol"])(a.data,r,n),a.data,a.rendererKey,a.maxVVSize),l=async(e,t,r,l)=>{if(!e)return null;if("cim"===e.type)return n(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await Object(_webStyleUtils_js__WEBPACK_IMPORTED_MODULE_2__["fetchCIMSymbolReference"])(e,null,l),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return n(i,t,r)}return e};function i(e){if(!e)return null;const{type:t,cim:a,url:r,materialHash:n}=e,l={cim:a,type:t,mosaicHash:n,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}


/***/ }),

/***/ "M08Z":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/graphicsUtils.js ***!
  \*****************************************************************************/
/*! exports provided: PIXEL_BUFFER, TILE_SIZE, getTextSymbolSize, graphicGeometryToNumber, intersectingInternationalDateline, isMarkerSymbol, isTextSymbol, polygonFromExtent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIXEL_BUFFER", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextSymbolSize", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphicGeometryToNumber", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectingInternationalDateline", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMarkerSymbol", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextSymbol", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonFromExtent", function() { return d; });
/* harmony import */ var _core_BidiText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/BidiText.js */ "9X5u");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtilsCommon.js */ "9w8m");
/* harmony import */ var _engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../engine/webgl/alignmentUtils.js */ "Mt1D");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../engine/webgl/mesh/templates/shapingUtils.js */ "G0q+");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const c=512,u=50;function g(e,t){if(!t.isWrappable)return null;const[n,i]=Object(_geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["getSpatialReferenceMinMaxX"])(t);return e[2]>i?[Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])([e[0],e[1],i,e[3]]),Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])([n,e[1],n+e[2]-i,e[3]])]:e[0]<n?[Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])([n,e[1],e[2],e[3]]),Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])([i-(n-e[0]),e[1],i,e[3]])]:null}function p(e){return"text"===e||"esriTS"===e}function h(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function y(e){switch(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function x(t,i,r){var o,c,u;if(!r||0===r.glyphMosaicItems.length)return t;const g=Object(_core_BidiText_js__WEBPACK_IMPORTED_MODULE_0__["bidiText"])(i.text)[1],p=r.glyphMosaicItems,h=Object(_engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_8__["shapeGlyphs"])(p,g,{scale:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(i.font.size)/_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_7__["GLYPH_SIZE"],angle:null!=(o=i.angle)?o:0,xOffset:null!=(c=i.xoffset)?c:0,yOffset:null!=(u=i.yoffset)?u:0,hAlign:Object(_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getXAnchorDirection"])(i.horizontalAlignment||"center"),vAlign:Object(_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getYAnchorDirection"])(i.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(i.lineWidth||512,512)),lineHeight:_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_7__["MAGIC_LABEL_LINE_HEIGHT"]*Math.max(.25,Math.min(i.lineHeight||1,4)),decoration:i.font.decoration||"none",isCIM:!1}).bounds;return t[0]=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(h.x-h.halfWidth),t[1]=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(h.y-h.halfHeight),t[2]=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(h.width),t[3]=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(h.height),t}function d(e){if(!e)return null;const{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:s}=e;return new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:[[[t,n],[t,o],[r,o],[r,n],[t,n]]],spatialReference:s})}


/***/ }),

/***/ "NIRN":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/visualVariablesUtils.js ***!
  \*********************************************************************************/
/*! exports provided: getTypeOfSizeVisualVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeOfSizeVisualVariable", function() { return o; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl");function o(s){return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(s.minDataValue)&&Object(_Utils_js__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_UNIT_VALUE:(l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-bad-type","Found invalid size VisualVariable",s)),_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].NONE)}


/***/ }),

/***/ "RaXU":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/util.js ***!
  \*******************************************************************/
/*! exports provided: analyzeRings, canUseMajorityInterpolationOnDataSource, toJSONGeometryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyzeRings", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseMajorityInterpolationOnDataSource", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSONGeometryType", function() { return e; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function n(t,o,e){const n=[],r=[];let l=0,i=0;for(const s of t){const t=i;let u=s[0][0],c=s[0][1];n[i++]=u,n[i++]=c;let p=0;for(let o=1;o<s.length;++o){const t=u,e=c;u=s[o][0],c=s[o][1],p+=c*t-u*e,n[i++]=u,n[i++]=c}o(p/2),p>0?(t-l>0&&(e(l,t,n,r),l=t),r.length=0):p<0&&t-l>0?r.push(.5*(t-l)):i=t}i-l>0&&e(l,i,n,r)}function r(t){const{bandCount:o,attributeTable:e,colormap:n,pixelType:r}=t.rasterInfo;return 1===o&&(null!=e||null!=n||"u8"===r||"s8"===r)}


/***/ }),

/***/ "SbiP":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ "a8c1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/vvFlagUtils.js ***!
  \*****************************************************************************/
/*! exports provided: getVVFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVVFlags", function() { return e; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visualVariablesUtils.js */ "NIRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){if(!e)return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].NONE;let r=0;for(const i of e)if("size"===i.type){const t=Object(_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__["getTypeOfSizeVisualVariable"])(i);r|=t,"outline"===i.target&&(r|=t<<4)}else"color"===i.type?r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].COLOR:"opacity"===i.type?r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].OPACITY:"rotation"===i.type&&(r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].ROTATION);return r}


/***/ }),

/***/ "bzbK":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/pixelBuffering.js ***!
  \**************************************************************************************/
/*! exports provided: computePxBuffer, getPtMaxVVSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computePxBuffer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPtMaxVVSize", function() { return m; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../symbols/cim/CIMSymbolHelper.js */ "eT81");
/* harmony import */ var _symbols_cim_Rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../symbols/cim/Rect.js */ "Du6U");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _graphics_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphics/graphicsUtils.js */ "M08Z");
/* harmony import */ var _support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../support/cimSymbolUtils.js */ "9H0t");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},o=.707;function m(t){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const e=t.getVisualVariablesForType("size");if(!e[0])return 0;const r=e[0];if("outline"===r.target)return 0;if("stops"===r.transformationType)return r.stops.map((t=>t.size)).reduce(g,0);if("clamped-linear"===r.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((t=>t.size)).reduce(g,0),e="number"==typeof r.minSize?r.minSize:r.minSize.stops.map((t=>t.size)).reduce(g,0),Math.max(t,e)}return"real-world-size"===r.transformationType?30:void 0}function u(t){return t.type in a}async function c(e,r,i,n,s,a){if(!e||a&&"cluster"===a.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?100:200;const o=e.getSymbols(),u=m(e),c=[];for(const t of o)c.push(x(t,u,i,r,n,s));const p=await Promise.all(c);return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(p.reduce(g,0))}const p=[0,0,0,0];function l(t,e){return null==t?e:t}function f(t,e){return null==t.outline?e:l(t.outline.width,e)}const h={sdf:!0,code:99,metrics:_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__["AVERAGE_GLYPH_MOSAIC_ITEM"].metrics,rect:new _symbols_cim_Rect_js__WEBPACK_IMPORTED_MODULE_2__["default"](0,0,24,24),page:0,textureBinding:2};function y(t){const e=t.text&&t.text.length;if(!e)return{glyphMosaicItems:[h]};const r=[];for(let i=0;i<e;i++)r.push({...h,code:t.text.charCodeAt(i)});return{glyphMosaicItems:r}}async function d(t,r,i,a,m,u){if("simple-marker"===t.type){const e=Math.max(l(t.size,12),r);return M(t)+e*o}if("picture-marker"===t.type){const e=Math.max(l(t.height,12),r),i=l(t.width,12)*(e/l(t.height,12))/2,n=e/2;return M(t)+Math.sqrt(i*i+n*n)}if("text"===t.type){const e=y(t);Object(_graphics_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getTextSymbolSize"])(p,t.toJSON(),e);const r=Math.abs(p[0]),i=Math.abs(p[1]),s=p[2],a=p[3];return Math.max(r,i)+Math.max(s,a)}if("simple-line"===t.type){const e=t,i=Math.max(l(e.width,.75),r)/2;return e.marker?Math.max(6*e.width,2*r):i}if("simple-fill"===t.type||"picture-fill"===t.type)return Math.max(f(t,0),r)/2;if("cim"===t.type){const n={geometryType:a,fields:m,spatialReference:u},o={type:"cim",rendererKey:0,data:t.data,maxVVSize:r};await Object(_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_5__["expandSymbol"])(o,n,i);const c=_symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_1__["CIMSymbolHelper"].getEnvelope(t.data,i);return c?Math.sqrt(c.width*c.width+c.height*c.height):0}return"web-style"===t.type?d(await t.fetchCIMSymbol(),r,i,a,m,u):0}async function x(t,e,r,i,n,s){return u(t)?Math.min(await d(t,e,r,i,n,s),75):0}function M(t){const e=l(t.xoffset,0),r=l(t.yoffset,0);return Math.sqrt(e*e+r*r)}function g(t,e){return Math.max(t,e)}


/***/ }),

/***/ "fvq6":
/*!***********************************************!*\
  !*** ./node_modules/@arcgis/core/core/MD5.js ***!
  \***********************************************/
/*! exports provided: createMD5Hash, outputTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMD5Hash", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputTypes", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n={Base64:0,Hex:1,String:2,Raw:3},t=8,r=(1<<t)-1;function e(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n){const e=[];for(let o=0,u=n.length*t;o<u;o+=t)e[o>>5]|=(n.charCodeAt(o/t)&r)<<o%32;return e}function u(n){const e=[];for(let o=0,u=32*n.length;o<u;o+=t)e.push(String.fromCharCode(n[o>>5]>>>o%32&r));return e.join("")}function c(n){const t="0123456789abcdef",r=[];for(let e=0,o=4*n.length;e<o;e++)r.push(t.charAt(n[e>>2]>>e%4*8+4&15)+t.charAt(n[e>>2]>>e%4*8&15));return r.join("")}function f(n){const t="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=[];for(let o=0,u=4*n.length;o<u;o+=3){const u=(n[o>>2]>>o%4*8&255)<<16|(n[o+1>>2]>>(o+1)%4*8&255)<<8|n[o+2>>2]>>(o+2)%4*8&255;for(let c=0;c<4;c++)8*o+6*c>32*n.length?e.push(t):e.push(r.charAt(u>>6*(3-c)&63))}return e.join("")}function s(n,t){return n<<t|n>>>32-t}function i(n,t,r,o,u,c){return e(s(e(e(t,n),e(o,c)),u),r)}function h(n,t,r,e,o,u,c){return i(t&r|~t&e,n,t,o,u,c)}function a(n,t,r,e,o,u,c){return i(t&e|r&~e,n,t,o,u,c)}function l(n,t,r,e,o,u,c){return i(t^r^e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return i(r^(t|~e),n,t,o,u,c)}function p(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;let r=1732584193,o=-271733879,u=-1732584194,c=271733878;for(let f=0;f<n.length;f+=16){const t=r,s=o,i=u,p=c;r=h(r,o,u,c,n[f+0],7,-680876936),c=h(c,r,o,u,n[f+1],12,-389564586),u=h(u,c,r,o,n[f+2],17,606105819),o=h(o,u,c,r,n[f+3],22,-1044525330),r=h(r,o,u,c,n[f+4],7,-176418897),c=h(c,r,o,u,n[f+5],12,1200080426),u=h(u,c,r,o,n[f+6],17,-1473231341),o=h(o,u,c,r,n[f+7],22,-45705983),r=h(r,o,u,c,n[f+8],7,1770035416),c=h(c,r,o,u,n[f+9],12,-1958414417),u=h(u,c,r,o,n[f+10],17,-42063),o=h(o,u,c,r,n[f+11],22,-1990404162),r=h(r,o,u,c,n[f+12],7,1804603682),c=h(c,r,o,u,n[f+13],12,-40341101),u=h(u,c,r,o,n[f+14],17,-1502002290),o=h(o,u,c,r,n[f+15],22,1236535329),r=a(r,o,u,c,n[f+1],5,-165796510),c=a(c,r,o,u,n[f+6],9,-1069501632),u=a(u,c,r,o,n[f+11],14,643717713),o=a(o,u,c,r,n[f+0],20,-373897302),r=a(r,o,u,c,n[f+5],5,-701558691),c=a(c,r,o,u,n[f+10],9,38016083),u=a(u,c,r,o,n[f+15],14,-660478335),o=a(o,u,c,r,n[f+4],20,-405537848),r=a(r,o,u,c,n[f+9],5,568446438),c=a(c,r,o,u,n[f+14],9,-1019803690),u=a(u,c,r,o,n[f+3],14,-187363961),o=a(o,u,c,r,n[f+8],20,1163531501),r=a(r,o,u,c,n[f+13],5,-1444681467),c=a(c,r,o,u,n[f+2],9,-51403784),u=a(u,c,r,o,n[f+7],14,1735328473),o=a(o,u,c,r,n[f+12],20,-1926607734),r=l(r,o,u,c,n[f+5],4,-378558),c=l(c,r,o,u,n[f+8],11,-2022574463),u=l(u,c,r,o,n[f+11],16,1839030562),o=l(o,u,c,r,n[f+14],23,-35309556),r=l(r,o,u,c,n[f+1],4,-1530992060),c=l(c,r,o,u,n[f+4],11,1272893353),u=l(u,c,r,o,n[f+7],16,-155497632),o=l(o,u,c,r,n[f+10],23,-1094730640),r=l(r,o,u,c,n[f+13],4,681279174),c=l(c,r,o,u,n[f+0],11,-358537222),u=l(u,c,r,o,n[f+3],16,-722521979),o=l(o,u,c,r,n[f+6],23,76029189),r=l(r,o,u,c,n[f+9],4,-640364487),c=l(c,r,o,u,n[f+12],11,-421815835),u=l(u,c,r,o,n[f+15],16,530742520),o=l(o,u,c,r,n[f+2],23,-995338651),r=g(r,o,u,c,n[f+0],6,-198630844),c=g(c,r,o,u,n[f+7],10,1126891415),u=g(u,c,r,o,n[f+14],15,-1416354905),o=g(o,u,c,r,n[f+5],21,-57434055),r=g(r,o,u,c,n[f+12],6,1700485571),c=g(c,r,o,u,n[f+3],10,-1894986606),u=g(u,c,r,o,n[f+10],15,-1051523),o=g(o,u,c,r,n[f+1],21,-2054922799),r=g(r,o,u,c,n[f+8],6,1873313359),c=g(c,r,o,u,n[f+15],10,-30611744),u=g(u,c,r,o,n[f+6],15,-1560198380),o=g(o,u,c,r,n[f+13],21,1309151649),r=g(r,o,u,c,n[f+4],6,-145523070),c=g(c,r,o,u,n[f+11],10,-1120210379),u=g(u,c,r,o,n[f+2],15,718787259),o=g(o,u,c,r,n[f+9],21,-343485551),r=e(r,t),o=e(o,s),u=e(u,i),c=e(c,p)}return[r,o,u,c]}function x(r,e=n.Hex){const s=e||n.Base64,i=p(o(r),r.length*t);switch(s){case n.Raw:return i;case n.Hex:return c(i);case n.String:return u(i);case n.Base64:return f(i)}}


/***/ }),

/***/ "m662":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js ***!
  \***************************************************************************/
/*! exports provided: createClusterCountSizeVariable, createClusterRenderer, findSizeVV, hasClusterCountVV, isClusterCompatibleRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClusterCountSizeVariable", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClusterRenderer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSizeVV", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClusterCountVV", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClusterCompatibleRenderer", function() { return m; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_MD5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/MD5.js */ "fvq6");
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../renderers/visualVariables/SizeVariable.js */ "w/y1");
/* harmony import */ var _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../renderers/visualVariables/support/SizeStop.js */ "moES");
/* harmony import */ var _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/LevelDependentSizeVariable.js */ "5x/F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.support.clusterUtils");_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"].add("esri-cluster-arcade-enabled",!0);const u=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-cluster-arcade-enabled"),c=(e,i,t,s)=>{const a=i.clone();if(!m(a))return a;if(t.fields)for(const r of t.fields)x(e,r);if("visualVariables"in a){const i=(a.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),n=d(i);i.forEach((i=>{"rotation"===i.type?i.field?i.field=y(e,i.field,"avg_angle"):i.valueExpression&&(i.field=S(e,i.valueExpression,"avg_angle"),i.valueExpression=null):i.normalizationField?(i.field=y(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=y(e,i.field,"avg"):(i.field=S(e,i.valueExpression,"avg"),i.valueExpression=null)})),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(n)&&!p(i)&&(i.push(f(t,s)),a.dynamicClusterSize=!0),a.visualVariables=i}switch(a.type){case"simple":break;case"unique-value":a.field?a.field=y(e,a.field,"mode"):a.valueExpression&&(a.field=S(e,a.valueExpression,"mode"),a.valueExpression=null);break;case"class-breaks":a.normalizationField?(a.field=y(e,a.field,"norm",a.normalizationField),a.normalizationField=null):a.field?a.field=y(e,a.field,"avg"):(a.field=S(e,a.valueExpression,"avg"),a.valueExpression=null)}return a},d=e=>{for(const i of e)if("size"===i.type)return i;return null},p=e=>{for(const i of e)if("cluster_count"===i.field)return!0;return!1},f=(e,i)=>{const t=[new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_6__["default"]({value:0,size:0}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_6__["default"]({value:1})];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(i))return new _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__["default"]({field:"cluster_count",stops:[...t,new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_6__["default"]({value:2,size:0})]});const s=Object.keys(i).reduce(((r,s)=>({...r,[s]:[...t,new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_6__["default"]({value:Math.max(2,i[s].minValue),size:e.clusterMinSize}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_6__["default"]({value:Math.max(3,i[s].maxValue),size:e.clusterMaxSize})]})),{});return new _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__["LevelDependentSizeVariable"]({field:"cluster_count",levels:s})},m=i=>{const t=t=>o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Unsupported-renderer",t,{renderer:i}));if("unique-value"===i.type){if(i.field2||i.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===i.type){if(i.normalizationField){const e=i.normalizationType;if("field"!==e)return t(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}}else if("simple"!==i.type)return t(`FeatureReductionCluster does not support renderers of type ${i.type}`),!1;if(!u){if("valueExpression"in i&&i.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in i&&i.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function v(e,i,t){switch(e){case"avg":case"avg_angle":return`cluster_avg_${i}`;case"mode":return`cluster_type_${i}`;case"norm":{const e=t,r="field",a=i.toLowerCase()+",norm:"+r+","+e.toLowerCase();return"cluster_avg_"+Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_4__["createMD5Hash"])(a)}}}function x(i,t){const{name:r,outStatistic:a}=t,{onStatisticField:n,onStatisticValueExpression:l,statisticType:u}=a;if(l){const e=Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_4__["createMD5Hash"])(l.toLowerCase());i.push({name:r,outStatistic:{onStatisticField:e,onStatisticValueExpression:l,statisticType:u}})}else n?i.push({name:r,outStatistic:{onStatisticField:n,statisticType:u}}):o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-unsupported-field","Unable to handle field",{field:t}))}function S(e,i,t){const r=Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_4__["createMD5Hash"])(i),a="mode"===t?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===a))||e.push({name:a,outStatistic:{onStatisticField:r,onStatisticValueExpression:i,statisticType:t}}),a}function y(e,i,t,r){if("cluster_count"===i||e.some((e=>e.name===i)))return i;const s=v(t,i,r);return e.some((e=>e.name===s))||("norm"===t?e.push({name:s,outStatistic:{onStatisticField:i,onStatisticNormalizationField:r,statisticType:t}}):e.push({name:s,outStatistic:{onStatisticField:i,statisticType:t}})),s}


/***/ }),

/***/ "owVx":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/schemaUtils.js ***!
  \***************************************************************************/
/*! exports provided: createSymbolSchema, addAggregateFields, createMatcherSchema, createSchema, createSymbolSchemaOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAggregateFields", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatcherSchema", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchema", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSymbolSchemaOptions", function() { return h; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../engine/webgl/Utils.js */ "yN2G");
/* harmony import */ var _engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/webgl/util/vvFlagUtils.js */ "a8c1");
/* harmony import */ var _createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createSymbolSchema.js */ "7Fg+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSymbolSchema", function() { return _createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"]; });

/* harmony import */ var _support_pixelBuffering_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/pixelBuffering.js */ "bzbK");
/* harmony import */ var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/rendererUtils.js */ "tDOP");
/* harmony import */ var _support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../support/clusterUtils.js */ "m662");
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/util.js */ "RaXU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const g=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.features.schemaUtils"),b="ValidationError",x={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function v(e){return e}function h(e){let t=0,i=0,r=!1,n=!0,s=!0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e)){if(i=Object(_support_pixelBuffering_js__WEBPACK_IMPORTED_MODULE_9__["getPtMaxVVSize"])(e),"visualVariables"in e&&(t=Object(_engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_7__["getVVFlags"])(e.visualVariables||[]),r="dot-density"===e.type),"dictionary"===e.type)return{maxVVSize:i,supportsOutlineFills:!1,vvFlags:t,stride:{fill:"default"}};if(!r){const t=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol);for(const e of t)if("cim"===e.type&&(n=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline;t&&"none"!==t.style&&"solid"!==t.style&&(s=!1);const i=t&&"none"!==t.style&&"solid"!==t.style,r="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;("picture-fill"===e.type||r||i)&&(n=!1)}}}return r&&(s=!1),{vvFlags:t,maxVVSize:i,supportsOutlineFills:s,stride:{fill:r?"dot-density":n?"simple":"default"}}}function w(t,i){const r=t.labelPlacement,l=x[i];if(!t.symbol)return g.warn("No ILabelClass symbol specified."),!0;if(!l)return g.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${i} is not supported`)),!0;if(!l.some((e=>e===r))){const e=l[0];r&&g.warn(`Found invalid label placement type ${r} for ${i}. Defaulting to ${e}`),t.labelPlacement=e}return!1}function F(e,t){const r=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e);return r.some((e=>w(e,t)))?[]:r}function I(e){return Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-2d-update-debug")&&console.debug("Created new schema",E(e,!0)),E(e)}function E(e,t=!1){try{var i,r;const l=O(e,t),n={};l.map((t=>S(n,e,t)));return{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(r=e.timeExtent)?void 0:r.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:l,targets:n}}catch(l){if(l.fieldName===b)return g.error(l),null;throw l}}function S(t,i,r){switch(r.target){case"feature":return void V(t,T(i),r);case"aggregate":{if(!("featureReduction"in i))return;const l=i.featureReduction;if("selection"===l.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Mapview does not support `selection` reduction type",l);return V(t,T(i),r),void N(t,l,r)}}}function z(e,t){for(const i in t){const r=t[i];if(r.target!==e.name)continue;const l=e.attributes[i];l?(l.context.mesh=l.context.mesh||r.context.mesh,l.context.storage=l.context.storage||r.context.storage):e.attributes[i]=r}return e}function T(e){var t,i,r,l,s;return[null!=(t=null==(i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(e.filter))?void 0:i.toJSON())?t:null,null!=(r=null==(l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(null==(s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(e.featureEffect))?void 0:s.filter))?void 0:l.toJSON())?r:null]}function V(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),z(e.feature,i.attributes.fields),e}function N(e,t,i){return e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterMaxSize)/64),fields:i.aggregateFields}}),z(e.aggregate,i.attributes.fields),e}function j(e,t){return t.field?M(e,{...t,type:"field",field:t.field}):t.valueExpression?M(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function M(e,t){switch(t.type){case"expression":{const i=v(t.valueExpression);if(!e.fields[i]){const r=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=v(JSON.stringify(t.label));if(!e.fields[i]){const r=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function O(e,t=!1){const i=new Array;let r=0;return i.push(B(e,r++,t)),i}function R(e,t,i,r,l,n=!1){const s=M(t,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:o}=s,a=h(e);return{...Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(i,a,n),fieldIndex:o,target:r,index:l}}function B(t,i,r=!1){const n={indexCount:0,fields:{}},s="featureReduction"in t&&t.featureReduction,o=s?"aggregate":"feature";if("sublayers"in t){const i={type:"subtype",subtypeField:t.subtypeField,renderers:{},stride:{fill:"default"}},s={type:"subtype",mapping:{},target:"feature"},a={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:n,storage:s,mesh:{matcher:i,aggregateMatcher:null,labels:a,sortKey:null}},d=new Set;let f=0;for(const{renderer:c,subtypeCode:p,labelingInfo:m,labelsVisible:y}of t.sublayers){const t=L(n,o,c,r),u=C(n,o,c),g=y&&m;if("visualVariables"in c&&c.visualVariables&&c.visualVariables.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Visual variables are currently not supported for subtype layers");if("dictionary"===t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Dictionary renderer is not supported in subtype layers");if("subtype"===t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Nested subtype renderers is not supported");if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(u)&&"subtype"===u.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Nested subtype storage is not supported");if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(u)&&"dot-density"===u.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Dot density attributes are not supported in subtype layers");if(d.has(p))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Subtype codes for sublayers must be unique");d.add(p),i.renderers[p]=t,s.mapping[p]=u,g&&(a.classes[p]=g.map((e=>R(c,n,e,"feature",f++,r))))}return u}if("heatmap"===t.renderer.type){const{blurRadius:e,fieldOffset:i,field:r}=t.renderer;return{type:"heatmap",aggregateFields:[],attributes:n,target:o,storage:null,mesh:{blurRadius:e,fieldOffset:i,field:j(n,{target:o,field:r,resultType:"numeric"}).field}}}{const i=[],l="aggregate"===o?Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_11__["createClusterRenderer"])(i,t.renderer,s,null):t.renderer;P(n,i);const a=L(n,o,l,r);let u=null;const d=C(n,o,l),c=Object(_support_util_js__WEBPACK_IMPORTED_MODULE_12__["toJSONGeometryType"])(t.geometryType);let p=t.labelsVisible&&t.labelingInfo||[],g=[];if(s){if("selection"===s.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Mapview does not support `selection` reduction type",s);if(s.symbol){const e=h(l);u={type:"simple",symbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(s.symbol,e,r),stride:e.stride}}g=s&&s.labelsVisible&&s.labelingInfo||[]}p=F(p,c),g=F(g,c);let x=0;const v=[...p.map((e=>R(l,n,e,"feature",x++,r))),...g.map((e=>R(l,n,e,"aggregate",x++,r)))],w=k(n,t.orderBy);return{type:"symbol",target:o,attributes:n,aggregateFields:i,storage:d,mesh:{matcher:a,labels:{type:"simple",classes:v},aggregateMatcher:u,sortKey:w}}}}function k(t,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(i)||!i.length)return null;i.length>1&&g.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${i.length}. All but the first will be discarded`);const r=i[0],l="ascending"===r.order?"asc":"desc";if(r.field)return{field:r.field,order:l};if(r.valueExpression){return{fieldIndex:M(t,{type:"expression",target:"feature",valueExpression:r.valueExpression,resultType:"numeric"}).fieldIndex,order:l}}return g.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Expected to find a field or valueExpression for OrderByInfo",r)),null}function P(e,t){const i={mesh:!0,storage:!0};for(const r of t){const{name:t,outStatistic:l}=r,{statisticType:n,onStatisticField:s}=l;let o=null,a=null,u=null;const d="numeric",f="feature";if("onStatisticValueExpression"in l){a=M(e,{type:"expression",target:f,valueExpression:l.onStatisticValueExpression,resultType:d}).fieldIndex}else if("onStatisticNormalizationField"in l){o=M(e,{type:"field",target:f,field:s,resultType:d}).field,u=l.onStatisticNormalizationField}else{o=M(e,{type:"field",target:f,field:s,resultType:d}).field}M(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:o,inNormalizationField:u,inFieldIndex:a,statisticType:n})}}function C(e,t,i){switch(i.type){case"dot-density":return U(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return J(e,t,i.visualVariables);case"heatmap":return null}}function U(e,t,i){if(!i||!i.length)return{type:"dot-density",mapping:[],target:t};return{type:"dot-density",mapping:i.map(((i,r)=>{const{field:l,fieldIndex:n}=j(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:r,field:l,fieldIndex:n}})),target:t}}function J(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const r={storage:!0},l="numeric";return{type:"visual-variable",mapping:Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_10__["simplifyVisualVariables"])(i).map((i=>{var n;const s=Object(_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_6__["getVVType"])(i.type),{field:o,fieldIndex:a}=j(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:r,resultType:l});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:s,field:o,fieldIndex:a,normalizationField:j(e,{target:t,field:i.normalizationField,context:r,resultType:l}).field,valueRepresentation:null!=(n=i.valueRepresentation)?n:null};case"color":return{type:"color",binding:s,field:o,fieldIndex:a,normalizationField:j(e,{target:t,field:i.normalizationField,context:r,resultType:l}).field};case"opacity":return{type:"opacity",binding:s,field:o,fieldIndex:a,normalizationField:j(e,{target:t,field:i.normalizationField,context:r,resultType:l}).field};case"rotation":return{type:"rotation",binding:s,field:o,fieldIndex:a}}})).filter((e=>e)),target:t}}function L(e,t,i,r=!1){const l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrapOr"])(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return $(l,i,r);case"class-breaks":return D(l,t,i,r);case"unique-value":return q(l,t,i,r);case"dictionary":return G(l,i,r)}}function $(e,t,i=!1){const r=t.getSymbols(),l=r.length?r[0]:null,n=h(t);return{type:"simple",symbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(l,n,i),stride:n.stride}}function D(e,t,i,r=!1){const l={mesh:!0,use:"renderer.field"},n=i.backgroundFillSymbol,{field:s,fieldIndex:o}=j(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:l}),a=i.normalizationType,u="log"===a?"esriNormalizeByLog":"percent-of-total"===a?"esriNormalizeByPercentOfTotal":"field"===a?"esriNormalizeByField":null,d=h(i),c=i.classBreakInfos.map((e=>({symbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(e.symbol,d,r),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:s,fieldIndex:o,backgroundFillSymbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(n,d,r),defaultSymbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(i.defaultSymbol,d,r),intervals:c,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive,stride:d.stride}}function q(t,i,r,l=!1){const n=[],s=r.backgroundFillSymbol,o={target:i,context:{mesh:!0},resultType:"string"};if(r.field&&"string"!=typeof r.field)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](b,"Expected renderer.field to be a string",r);const{field:a,fieldIndex:u}=j(t,{...o,field:r.field,valueExpression:r.valueExpression}),d=h(r);for(const e of r.uniqueValueInfos)n.push({value:""+e.value,symbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(e.symbol,d,l)});return{type:"map",attributes:t.fields,field:a,fieldIndex:u,field2:j(t,{...o,field:r.field2}).field,field3:j(t,{...o,field:r.field3}).field,fieldDelimiter:r.fieldDelimiter,backgroundFillSymbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(s,d),defaultSymbol:Object(_createSymbolSchema_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(r.defaultSymbol,d),map:n,stride:d.stride}}function G(e,t,i=!1){const r=h(t);return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,stride:r.stride}}


/***/ }),

/***/ "tDOP":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js ***!
  \*************************************************************************************/
/*! exports provided: simplifyVVRenderer, simplifyVisualVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyVVRenderer", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyVisualVariables", function() { return a; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=8,t=o-2,r=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.renderers.visualVariables.support.utils"),s=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),o=l.visualVariables.map((e=>n(e)?i(e):e));return l.visualVariables=o,l};function a(e){return e.map((e=>n(e)?i(e.clone()):e))}function n(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function i(e){return e.stops=b(e.type,e.stops),e}function u(e,l,o){return(1-o)*e+o*l}function c(e,o){const[r,...s]=o,a=s.pop(),n=s[0].value,i=s[s.length-1].value,c=(i-n)/t,p=[];for(let t=n;t<i;t+=c){let r=0;for(;t>=s[r].value;)r++;const a=s[r],n=o[r-1],i=t-n.value,c=a.value===n.value?1:i/(a.value-n.value);if("color"===e){const e=s[r],l=o[r-1],a=e.color.clone();a.r=u(l.color.r,a.r,c),a.g=u(l.color.g,a.g,c),a.b=u(l.color.b,a.b,c),a.a=u(l.color.a,a.a,c),p.push({value:t,color:a,label:e.label})}else if("size"===e){const e=s[r],a=o[r-1],n=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size),i=u(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(a.size),n,c);p.push({value:t,size:i,label:e.label})}else{const e=s[r],l=u(o[r-1].opacity,e.opacity,c);p.push({value:t,opacity:l,label:e.label})}}return[r,...p,a]}function p(e){const[l,...o]=e,r=o.pop();for(;o.length>t;){let e=0,l=0;for(let t=1;t<o.length;t++){const r=o[t-1],s=o[t],a=Math.abs(s.value-r.value);a>l&&(l=a,e=t)}o.splice(e,1)}return[l,...o,r]}function b(e,l){return l.length<=o?l:(r.warn(`Found ${l.length} Visual Variable stops, but MapView only supports ${o}. Displayed stops will be simplified.`),l.length>2*o?c(e,l):p(l))}


/***/ }),

/***/ "unaH":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/webStyleUtils.js ***!
  \****************************************************************************/
/*! exports provided: fetchCIMSymbolReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCIMSymbolReference", function() { return y; });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../portal/Portal.js */ "AiS/");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../symbols/support/styleUtils.js */ "NDpP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function y(t,r,n){if(!t.name)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return f(t,n);try{return p(await Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["fetchStyle"])(t,r,n),t.name,r,n)}catch(s){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(s),null}}async function f(t,r){const e=_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["Style2DUrlTemplate"].replace(/\{SymbolName\}/gi,t.name);try{const t=await Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["requestJSON"])(e,r);return Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["makeCIMSymbolRef"])(t.data)}catch(n){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(n),null}}async function p(m,a,y,f){const p=m.data,b={portal:y&&y.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"].getDefault(),url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(m.baseUrl),origin:"portal-item"},d=p.items.find((t=>t.name===a));if(!d){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let j=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__["f"])(Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["symbolUrlFromStyleItem"])(d,"cimRef"),b);Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__["isDevEnvironment"])()&&(j=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__["adjustStaticAGOUrl"])(j));try{const t=await Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["requestJSON"])(j,f);return Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["makeCIMSymbolRef"])(t.data)}catch(U){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(U),null}}


/***/ }),

/***/ "wlZk":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/ExpandedCIM.js ***!
  \**************************************************************/
/*! exports provided: ExpandedCIM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandedCIM", function() { return l; });
/* harmony import */ var _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/2d/engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/2d/engine/webgl/materialKey/MaterialKey.js */ "GMaR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={marker:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,fill:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL,line:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,text:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT};class l{constructor(e,l,s,n){const r={minScale:null==l?void 0:l.minScale,maxScale:null==l?void 0:l.maxScale},c=i(r);this.layers=e,this.data=l,this.hash=this._createHash()+c,this.rendererKey=s;const m={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:s};for(const i of e){const e=a[i.type];i.materialKey=Object(_views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(e,m),i.maxVVSize=n,i.scaleInfo=r,i.templateHash+=c}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}


/***/ })

}]);
//# sourceMappingURL=default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~dc4e9557.js.map