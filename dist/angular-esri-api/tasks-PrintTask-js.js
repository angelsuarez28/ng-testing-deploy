(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-PrintTask-js"],{

/***/ "/k1A":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/MapImage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__["default"]})],p.prototype,"extent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"height",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"href",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"rotation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"visible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"width",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.MapImage")],p);const i=p;


/***/ }),

/***/ "9XlO":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/PrintTask.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _rest_print_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rest/print.js */ "byBC");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Task.js */ "kglp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let u=class extends _Task_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(...t){super(...t),this._gpMetadata=null,this.updateDelay=1e3}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?n.fromJSON(this._gpMetadata.executionType):"sync"}execute(t,e){return t&&(t.updateDelay=this.updateDelay),Object(_rest_print_js__WEBPACK_IMPORTED_MODULE_7__["execute"])(this.url,t,{...this.requestOptions,...e})}async _getGpPrintParams(t){const e=Object(_rest_print_js__WEBPACK_IMPORTED_MODULE_7__["getGpServerUrl"])(this.url),r=_rest_print_js__WEBPACK_IMPORTED_MODULE_7__["printCacheMap"].get(e);return Object(_rest_print_js__WEBPACK_IMPORTED_MODULE_7__["getGpPrintParams"])(t,r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],u.prototype,"_gpMetadata",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],u.prototype,"mode",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],u.prototype,"updateDelay",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.PrintTask")],u);const y=u;


/***/ }),

/***/ "DT8I":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/PrintTemplate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"attributionVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"exportOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"forceFeatureAttributes",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"format",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"layout",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"layoutOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"outScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"scalePreserved",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"showLabels",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.PrintTemplate")],s);const p=s;


/***/ }),

/***/ "E7a0":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/submitJob.js ***!
  \******************************************************************/
/*! exports provided: submitJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitJob", function() { return s; });
/* harmony import */ var _GPOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GPOptions.js */ "iZ43");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "NlB9");
/* harmony import */ var _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/JobInfo.js */ "oPuG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function s(s,m,n,f){return n=_GPOptions_js__WEBPACK_IMPORTED_MODULE_0__["default"].from(n||{}),Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["constructRequest"])(s,"submitJob",n,m,f).then((o=>{const r=_support_JobInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(o.data);return r.sourceUrl=s,r}))}


/***/ }),

/***/ "InkJ":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RasterData.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(r){super(r),this.format=null,this.itemId=null,this.url=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],e.prototype,"format",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],e.prototype,"url",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.RasterData")],e);const p=e;


/***/ }),

/***/ "J/1J":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/layoutTemplate.js ***!
  \******************************************************************/
/*! exports provided: fromJSON, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSON", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return o; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),r=t.fromJSON.bind(t),o=t.toJSON.bind(t);


/***/ }),

/***/ "Kzx6":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/printTaskUtils.js ***!
  \******************************************************************/
/*! exports provided: applyVisualVariables, createMultipointLayer, createPointLayer, createPolygonLayer, createPolylineLayer, getContextBoundingBox, getVisibleLayerViews, isBingMapsLayer, isBlendLayer, isCSVLayer, isFeatureLayer, isGeoJSONLayer, isGraphicsLayer, isGroupLayer, isImageryLayer, isImageryTileLayer, isKMLLayer, isMapImageLayer, isMapNotesLayer, isOpenStreetMapLayer, isScreenshotRequired, isStreamLayer, isTileLayer, isVectorTileLayer, isWMSLayer, isWMTSLayer, isWebTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyVisualVariables", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultipointLayer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPointLayer", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPolygonLayer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPolylineLayer", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextBoundingBox", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibleLayerViews", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBingMapsLayer", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlendLayer", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCSVLayer", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeatureLayer", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGeoJSONLayer", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGraphicsLayer", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupLayer", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageryLayer", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageryTileLayer", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKMLLayer", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapImageLayer", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapNotesLayer", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpenStreetMapLayer", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScreenshotRequired", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStreamLayer", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTileLayer", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVectorTileLayer", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWMSLayer", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWMTSLayer", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebTileLayer", function() { return E; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderers/visualVariables/support/visualVariableUtils.js */ "0pea");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o="simple-marker",u="picture-marker",a="simple-line",l="simple-fill",s="shield-label-symbol",f="text";function y(y,c){const{graphic:p,renderer:m,symbol:g}=c,d=g.type;if(d===f||d===s||!("visualVariables"in m)||!m.visualVariables)return;const b=m.getVisualVariablesForType("size"),h=m.getVisualVariablesForType("color"),w=m.getVisualVariablesForType("opacity"),V=m.getVisualVariablesForType("rotation"),T=b[0],v=h[0],G=w[0],k=V[0];if(T){const t=d===o?g.style:null,n=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getSize"])(T,p,{shape:t});null!=n&&(d===o?y.size=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n):d===u?(y.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n),y.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n)):d===a?y.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n):y.outline&&(y.outline.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n)))}if(v){const e=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getColor"])(v,p);(e&&d===o||d===a||d===l)&&(y.color=e?e.toJSON():void 0)}if(G){const e=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getOpacity"])(G,p);null!=e&&y.color&&(y.color[3]=Math.round(255*e))}k&&(y.angle=-Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getRotationAngle"])(m,p))}function c(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function p(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function m(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function g(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function d(e,r=15){const t=e.canvas.width,n=e.canvas.height,i=e.getImageData(0,0,t,n).data;let o,u,a,l,s,f;e:for(u=n;u--;)for(o=t;o--;)if(i[4*(t*u+o)+3]>r){f=u;break e}if(!f)return null;e:for(o=t;o--;)for(u=f+1;u--;)if(i[4*(t*u+o)+3]>r){s=o;break e}e:for(o=0;o<=s;++o)for(u=f+1;u--;)if(i[4*(t*u+o)+3]>r){a=o;break e}e:for(u=0;u<=f;++u)for(o=a;o<=s;++o)if(i[4*(t*u+o)+3]>r){l=u;break e}return{x:a,y:l,width:s-a,height:f-l}}function b(e,r){const t=e.allLayerViews.items;if(r===e.scale)return t.filter((e=>!e.suspended));const n=new Array;for(const i of t)S(i.parent)&&!n.includes(i.parent)||!i.visible||r&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(r)||n.push(i);return n}function h(e){return e&&"bing-maps"===e.type}function w(e){return e&&"blendMode"in e&&"effect"in e}function V(e){return e&&"csv"===e.type}function T(e){return e&&"feature"===e.type}function v(e){return e&&"geojson"===e.type}function G(e){return e&&"graphics"===e.type}function k(e){return e&&"group"===e.type}function S(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function D(e){return e&&"imagery"===e.type}function L(e){return e&&"imagery-tile"===e.type}function P(e){return e&&"kml"===e.type}function I(e){return e&&"map-image"===e.type}function M(e){return e&&"map-notes"===e.type}function F(e){return e&&"open-street-map"===e.type}function j(e){const r=e.layer;if(w(r)){const t=r.blendMode;if((!t||"normal"===t)&&(r.effect||"featureEffect"in e&&e.featureEffect))return!0}return!1}function x(e){return e&&"stream"===e.type}function A(e){return e&&"tile"===e.type}function z(e){return e&&"vector-tile"===e.type}function E(e){return e&&"web-tile"===e.type}function U(e){return e&&"wms"===e.type}function C(e){return e&&"wmts"===e.type}


/***/ }),

/***/ "NlB9":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/utils.js ***!
  \**************************************************************/
/*! exports provided: collectGeometries, constructRequest, decode, gpEncode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectGeometries", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructRequest", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gpEncode", function() { return P; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers/support/Field.js */ "ofM5");
/* harmony import */ var _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/support/MapImage.js */ "/k1A");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _support_DataFile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../support/DataFile.js */ "aUoB");
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/FeatureSet.js */ "Ltyc");
/* harmony import */ var _support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/LinearUnit.js */ "xNJU");
/* harmony import */ var _support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/ParameterValue.js */ "dZFq");
/* harmony import */ var _support_RasterData_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/RasterData.js */ "InkJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function m(t,r,u,l,s){const n={},i={},c=[];return p(l,c,n),Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeCentralMeridian"])(c).then((a=>{const{outSpatialReference:c,processExtent:m,processSpatialReference:p,returnFeatureCollection:f,returnM:G,returnZ:v}=u,{path:S}=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["parseUrl"])(t);for(const e in n){const t=n[e];i[e]=a.slice(t[0],t[1])}const y=c?c.wkid||c:null,D=p?p.wkid||p:null,J="execute"===r?{returnFeatureCollection:f||void 0,returnM:G||void 0,returnZ:v||void 0}:null,M=P({...m?{context:{extent:m,outSR:y,processSR:D}}:{"env:outSR":y,"env:processSR":D},...l,...J,f:"json"},null,i),N={...s,query:M};return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`${S}/${r}`,N)}))}function p(e,a,t){for(const r in e){const o=e[r];if(o&&"object"==typeof o&&o instanceof _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__["default"]){const{features:e}=o;t[r]=[a.length,a.length+e.length],e.forEach((e=>{a.push(e.geometry)}))}}}function f(e){const a=e.dataType,o=_support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(e);switch(a){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return o;case"GPDate":o.value=new Date(o.value);break;case"GPDataFile":o.value=_support_DataFile_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(o.value);break;case"GPLinearUnit":o.value=_support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON(o.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const a=e.value.url;o.value=a?_support_DataFile_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(o.value):_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(o.value);break}case"GPRasterData":case"GPRasterDataLayer":{const a=e.value.mapImage;o.value=a?_layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(a):_support_RasterData_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(o.value);break}case"GPField":o.value=_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(o.value);break;case"GPMultiValue:GPDate":{const e=o.value;o.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":o.value=o.value.map((e=>_support_DataFile_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":o.value=o.value.map((e=>_support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":o.value=o.value.map((e=>_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":o.value=o.value.map((e=>e?_layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e):_support_RasterData_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(o.value)));break;case"GPMultiValue:GPField":o.value=o.value.map((e=>_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e)))}return o}function P(e,a,t){for(const r in e){const a=e[r];Array.isArray(a)?e[r]=JSON.stringify(a.map((e=>P({item:e},!0).item))):a instanceof Date&&(e[r]=a.getTime())}return Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["encode"])(e,a,t)}


/***/ }),

/***/ "ODu+":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/fileFormat.js ***!
  \**************************************************************/
/*! exports provided: fromJSON, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSON", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return g; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),n=p.fromJSON.bind(p),g=p.toJSON.bind(p);


/***/ }),

/***/ "aPpv":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/execute.js ***!
  \****************************************************************/
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return o; });
/* harmony import */ var _GPOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GPOptions.js */ "iZ43");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "NlB9");
/* harmony import */ var _support_GPMessage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/GPMessage.js */ "eUVy");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function o(o,m,a,p){return a=_GPOptions_js__WEBPACK_IMPORTED_MODULE_0__["default"].from(a||{}),Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["constructRequest"])(o,"execute",a,m,p).then((s=>{const t=s.data.results||[],o=s.data.messages||[];return{results:t.map(_utils_js__WEBPACK_IMPORTED_MODULE_1__["decode"]),messages:o.map((s=>_support_GPMessage_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(s)))}}))}


/***/ }),

/***/ "aUoB":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/DataFile.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(r){super(r),this.itemId=null,this.url=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],e.prototype,"url",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.DataFile")],e);const p=e;


/***/ }),

/***/ "byBC":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/print.js ***!
  \*************************************************/
/*! exports provided: execute, getGpPrintParams, getGpServerUrl, getMode, printCacheMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGpPrintParams", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGpServerUrl", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMode", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printCacheMap", function() { return X; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "EyXx");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/screenUtils.js */ "qRWG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "wdpY");
/* harmony import */ var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../renderers/visualVariables/support/visualVariableUtils.js */ "0pea");
/* harmony import */ var _geoprocessor_execute_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./geoprocessor/execute.js */ "aPpv");
/* harmony import */ var _geoprocessor_submitJob_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./geoprocessor/submitJob.js */ "E7a0");
/* harmony import */ var _support_fileFormat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/fileFormat.js */ "ODu+");
/* harmony import */ var _support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/layoutTemplate.js */ "J/1J");
/* harmony import */ var _support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/printTaskUtils.js */ "Kzx6");
/* harmony import */ var _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/PrintTemplate.js */ "DT8I");
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/apiKeyUtils.js */ "gkm1");
/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/support/floorFilterUtils.js */ "81Mc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const G={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Q=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__["JSONMap"]({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),H=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__["JSONMap"]({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),X=new Map;async function Y(e,t,r){const a=ie(e);let n=X.get(a);return Promise.resolve().then((()=>n?{data:n.gpMetadata}:(n={gpServerUrl:a,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a,{query:{f:"json"}})))).then((e=>(n.gpMetadata=e.data,n.cimVersion=n.gpMetadata.cimVersion,n.is11xService=!!n.cimVersion,X.set(a,n),ee(t,n)))).then((i=>{const a=Me(n);let l;const s=e=>"sync"===a?e.results&&e.results[0]&&e.results[0].value:l.fetchResultData("Output_File",null,r).then((e=>e.value));return"async"===a?Object(_geoprocessor_submitJob_js__WEBPACK_IMPORTED_MODULE_12__["submitJob"])(e,i,null,r).then((e=>(l=e,e.waitForJobCompletion({interval:t.updateDelay}).then(s)))):Object(_geoprocessor_execute_js__WEBPACK_IMPORTED_MODULE_11__["execute"])(e,i,null,r).then(s)}))}async function Z(e){const t=ie(e);return Me(X.get(t))}async function ee(e,t){t=t||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const i=e.template||new _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_16__["default"];null==i.showLabels&&(i.showLabels=!0);const a=i.exportOptions;let n;const l=Object(_support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_14__["toJSON"])(i.layout);if(a){if(n={dpi:a.dpi},"map_only"===l.toLowerCase()||""===l){const e=a.width,t=a.height;n.outputSize=[e,t]}}const s=i.layoutOptions;let o;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),o={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,scaleBarOptions:{metricUnit:Q.toJSON(e),metricLabel:G[e],nonMetricUnit:Q.toJSON(t),nonMetricLabel:G[t]}}}let u=null;null!=s&&s.legendLayers&&(u=s.legendLayers.map((e=>{t.legendLayerNameMap[e.layerId]=e.title;const i={id:e.layerId};return e.subLayerIds&&(i.subLayerIds=e.subLayerIds),i})));const c=await te(e,i,t);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),i=/[\u0600-\u06FF]/,a=t=>{const r=t.text,a=t.font,n=a&&a.family&&a.family.toLowerCase();r&&a&&("arial"===n||"arial unicode ms"===n)&&(a.family=e.test(r)?"Arial Unicode MS":"Arial","normal"!==a.style&&i.test(r)&&(a.family="Arial Unicode MS"))},n=()=>{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach((e=>{var i,r,l;null!=(i=e.featureCollection)&&i.layers?e.featureCollection.layers.forEach((e=>{var i,r,l,s;if(null!=(i=e.layerDefinition)&&null!=(r=i.drawingInfo)&&null!=(l=r.renderer)&&l.symbol){const i=e.layerDefinition.drawingInfo.renderer;"esriTS"===i.symbol.type?a(i.symbol):"CIMSymbolReference"!==i.symbol.type||t.is11xService||n()}null!=(s=e.featureSet)&&s.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?a(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||n())}))})):!t.is11xService&&null!=(r=e.layerDefinition)&&null!=(l=r.drawingInfo)&&l.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&n()}))}e.outSpatialReference&&(c.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(c,{exportOptions:n,layoutOptions:o||{}}),Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=u?u:t.legendLayers.slice()}}),t.legendLayers.length=0,X.set(t.gpServerUrl,t);const y={Web_Map_as_JSON:JSON.stringify(c),Format:Object(_support_fileFormat_js__WEBPACK_IMPORTED_MODULE_13__["toJSON"])(i.format),Layout_Template:l};return e.extraParameters&&Object.assign(y,e.extraParameters),y}async function te(e,t,i){const r=e.view;let a=r.spatialReference;const l={operationalLayers:await re(r,t,i)};let s=i.ssExtent||e.extent||r.extent;if(a&&a.isWrappable&&(s=s.clone()._normalize(!0),a=s.spatialReference),l.mapOptions={extent:s&&s.toJSON(),spatialReference:a&&a.toJSON(),showAttribution:t.attributionVisible},i.ssExtent=null,r.background&&(l.background=r.background.toJSON()),r.rotation&&(l.mapOptions.rotation=-r.rotation),t.scalePreserved&&(l.mapOptions.scale=t.outScale||r.scale),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r.timeExtent)){const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r.timeExtent.start)?r.timeExtent.start.getTime():null,t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r.timeExtent.end)?r.timeExtent.end.getTime():null;l.mapOptions.time=[e,t]}return l}function ie(e){let t=e;const i=t.lastIndexOf("/GPServer/");return i>0&&(t=t.slice(0,i+9)),t}async function re(e,t,i){const r=[],a={layerView:null,printTemplate:t,view:e};let n=0;t.scalePreserved&&(n=t.outScale||e.scale);const l=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["getVisibleLayerViews"])(e,n);for(const s of l){const e=s.layer;if(!e.loaded||Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isGroupLayer"])(e))continue;let t;a.layerView=s,t=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isScreenshotRequired"])(s)?await ge(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isBingMapsLayer"])(e)?ae(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isCSVLayer"])(e)?await ne(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isFeatureLayer"])(e)?await se(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isGeoJSONLayer"])(e)?await oe(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isGraphicsLayer"])(e)?await ue(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isImageryLayer"])(e)?ce(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isImageryTileLayer"])(e)?await ye(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isKMLLayer"])(e)?await fe(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isMapImageLayer"])(e)?me(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isMapNotesLayer"])(e)?await de(a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isOpenStreetMapLayer"])(e)?pe():Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isStreamLayer"])(e)?await be(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isTileLayer"])(e)?he(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isVectorTileLayer"])(e)?await we(e,a,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isWebTileLayer"])(e)?Se(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isWMSLayer"])(e)?xe(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isWMTSLayer"])(e)?ve(e):await ge(e,a,i),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=i.legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["isBlendLayer"])(e)&&e.blendMode&&"normal"!==e.blendMode&&(t.blendMode=e.blendMode),r.push(t)))}if(n&&r.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const a=await le(null,e.graphics,t,i);a&&r.push(a)}return r}function ae(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function ne(e,t,i){e.legendEnabled&&i.legendLayers.push({id:e.id});const r=t.layerView,a=t.printTemplate;let n;if(!i.is11xService||r.filter){return le(e,await Ee(r),a,i)}return n={type:"CSV"},e.write(n,{origin:"web-map"}),delete n.popupInfo,delete n.layerType,n.showLabels=a.showLabels&&e.labelsVisible,n}async function le(e,t,i,r){let a;const n=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["createPolygonLayer"])(),l=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["createPolylineLayer"])(),s=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["createPointLayer"])(),o=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["createMultipointLayer"])(),u=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["createPointLayer"])();if(u.layerDefinition.name="textLayer",delete u.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?n.layerDefinition.name=l.layerDefinition.name=s.layerDefinition.name=o.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();n.layerDefinition.drawingInfo.renderer=t,l.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t}if(i.showLabels&&e.labelsVisible&&"function"==typeof e.write){var c,m;const t=null==(c=e.write({},{origin:"web-map"}).layerDefinition)||null==(m=c.drawingInfo)?void 0:m.labelingInfo;t&&(a=!0,n.layerDefinition.drawingInfo.labelingInfo=t,l.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t)}}let d;null!=e&&e.renderer||a||(delete n.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo);const p=null==e?void 0:e.fieldsIndex,g=null==e?void 0:e.renderer;if(p){const t=new Set;a&&await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__["collectLabelingFields"])(t,e),g&&"function"==typeof g.collectRequiredFields&&await g.collectRequiredFields(t,p),d=Array.from(t);const i=p.fields.map((e=>e.toJSON()));n.layerDefinition.fields=i,l.layerDefinition.fields=i,s.layerDefinition.fields=i,o.layerDefinition.fields=i}const b=t&&t.length;let h;for(let f=0;f<b;f++){var w;const a=t[f]||t.getItemAt(f);if(!1===a.visible||!a.geometry)continue;if(h=a.toJSON(),h.hasOwnProperty("popupTemplate")&&delete h.popupTemplate,h.geometry&&h.geometry.z&&delete h.geometry.z,h.symbol&&h.symbol.outline&&"esriCLS"===h.symbol.outline.type&&!r.is11xService)continue;!r.is11xService&&h.symbol&&h.symbol.outline&&h.symbol.outline.color&&h.symbol.outline.color[3]&&(h.symbol.outline.color[3]=255);const c=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!h.symbol&&e&&e.renderer&&c&&!r.is11xService){const t=e.renderer,i=await t.getSymbolAsync(a);if(!i)continue;h.symbol=i.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["applyVisualVariables"])(h.symbol,{renderer:t,graphic:a,symbol:i})}if(h.symbol&&(h.symbol.angle||delete h.symbol.angle,Ve(h.symbol)?h.symbol=await Le(h.symbol,r):h.symbol.text&&delete h.attributes),(!i||!i.forceFeatureAttributes)&&null!=(w=d)&&w.length){const e={};d.forEach((t=>{h.attributes&&h.attributes.hasOwnProperty(t)&&(e[t]=h.attributes[t])})),h.attributes=e}"polygon"===a.geometry.type?n.featureSet.features.push(h):"polyline"===a.geometry.type?l.featureSet.features.push(h):"point"===a.geometry.type?h.symbol&&h.symbol.text?u.featureSet.features.push(h):s.featureSet.features.push(h):"multipoint"===a.geometry.type?o.featureSet.features.push(h):"extent"===a.geometry.type&&(h.geometry=_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromExtent(a.geometry).toJSON(),n.featureSet.features.push(h))}const S=[n,l,o,s,u].filter((e=>e.featureSet.features.length>0));for(const y of S){const e=y.featureSet.features.every((e=>e.symbol));!e||i&&i.forceFeatureAttributes||y.featureSet.features.forEach((e=>{delete e.attributes})),e&&delete y.layerDefinition.drawingInfo,y.layerDefinition.drawingInfo&&y.layerDefinition.drawingInfo.renderer&&await Te(y.layerDefinition.drawingInfo.renderer,r)}return S.length?{featureCollection:{layers:S},showLabels:a}:null}async function se(e,t,i){var r,a;let n;const l=e.renderer,s=parseFloat(i.cimVersion);if(e.featureReduction&&(!i.is11xService||s<2.9)||"dot-density"===(null==l?void 0:l.type)&&(!i.is11xService||s<2.6))return ge(e,t,i);e.legendEnabled&&i.legendLayers.push({id:e.id});const o=t.layerView,{printTemplate:u,view:c}=t,y=l&&("valueExpression"in l&&l.valueExpression||"hasVisualVariables"in l&&l.hasVisualVariables()),f="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(a=e.source)?void 0:a.type);if(!i.is11xService&&y||o.filter||f||!l||"field"in l&&null!=l.field&&("string"!=typeof l.field||!e.getField(l.field))){const t=await Ee(o);n=await le(e,t,u,i)}else{var d,p;if(n={id:(g=e.write()).id,title:g.title,opacity:g.opacity,minScale:g.minScale,maxScale:g.maxScale,url:g.url,layerType:g.layerType,customParameters:g.customParameters,layerDefinition:g.layerDefinition},n.showLabels=u.showLabels&&e.labelsVisible,De(n,e),null!=(d=n.layerDefinition)&&null!=(p=d.drawingInfo)&&p.renderer&&(delete n.layerDefinition.minScale,delete n.layerDefinition.maxScale,await Te(n.layerDefinition.drawingInfo.renderer,i),"visualVariables"in l&&l.visualVariables&&l.visualVariables[0])){const e=l.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_10__["getSizeRangeAtScale"])(e,c.scale);n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}const t=Object(_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_18__["getFloorFilterClause"])(o);t&&(n.layerDefinition||(n.layerDefinition={}),n.layerDefinition.definitionExpression=n.layerDefinition.definitionExpression?`(${n.layerDefinition.definitionExpression}) AND (${t})`:t)}var g;return n}async function oe(e,{layerView:t,printTemplate:i},r){e.legendEnabled&&r.legendLayers.push({id:e.id});return le(e,await Ee(t),i,r)}async function ue(e,{printTemplate:t},i){return le(e,null,t,i)}function ce(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const i={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;if(i.bandIds=e.bandIds,i.compressionQuality=e.compressionQuality,i.format=e.format,i.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(i.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(i.renderingRule=e.renderingRule.toJSON()),e.renderer&&(i.layerDefinition=i.layerDefinition||{},i.layerDefinition.drawingInfo=i.layerDefinition.drawingInfo||{},i.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(i.renderingRule=t.toJSON())}return De(i,e),i}async function ye(e,t,i){var r;if("flow"===(null==(r=e.renderer)?void 0:r.type))return ge(e,t,i);e.legendEnabled&&i.legendLayers.push({id:e.id});const a={bandIds:(n=e.write()||{}).bandIds,customParameters:n.customParameters,interpolation:n.interpolation,layerDefinition:n.layerDefinition};var n;return a.layerType="ArcGISImageServiceLayer",De(a,e),a}async function fe(e,t,i){const r=t.printTemplate;if(i.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalize"])(e.url),t}{const a=[],n=t.layerView;n.allVisibleMapImages.forEach(((t,i)=>{const r={id:`${e.id}_image${i}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?r.imageData=t.href.substr(22):r.url=t.href,a.push(r)}));const l=[...n.allVisiblePoints.items,...n.allVisiblePolylines.items,...n.allVisiblePolygons.items],s={id:e.id,...await le(null,l,r,i)};return a.push(s),a}}function me(e,{view:t},i){let r;const a={id:e.id,subLayerIds:[]};let n=[];const l=t.scale,s=e=>{const t=0===l,i=0===e.minScale||l<=e.minScale,r=0===e.maxScale||l>=e.maxScale;if(e.visible&&(t||i&&r))if(e.sublayers)e.sublayers.forEach(s);else{const t=e.toExportImageJSON(),i={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};n.unshift(i),a.subLayerIds.push(e.id)}};var o;return e.sublayers&&e.sublayers.forEach(s),n.length&&(n=n.map((({id:e,name:t,layerDefinition:i})=>({id:e,name:t,layerDefinition:i}))),r={layerType:(o=e.write()).layerType,customParameters:o.customParameters},r.layers=n,r.visibleLayers=e.capabilities.exportMap.supportsDynamicLayers?void 0:a.subLayerIds,De(r,e),e.legendEnabled&&i.legendLayers.push(a)),r}async function de({layerView:e,printTemplate:t},i){const r=[],a=e.layer;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(a.featureCollections))for(const n of a.featureCollections){const e=await le(n,n.source,t,i);e&&r.push(...e.featureCollection.layers)}else if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(a.sublayers))for(const n of a.sublayers){const e=await le(null,n.graphics,t,i);e&&r.push(...e.featureCollection.layers)}return{featureCollection:{layers:r}}}function pe(){return{type:"OpenStreetMap"}}async function ge(e,{printTemplate:t,view:i},r){const a={type:"image"},n={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=r.ssExtent||i.extent.clone();let o=96,u=!0,y=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(o=e.dpi),e.width>0&&(u=e.width%2==i.width%2),e.height>0&&(y=e.height%2==i.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===i.scale)&&96===o&&(!u||!y)&&(n.area={x:0,y:0,width:i.width,height:i.height},u||(n.area.width-=1),y||(n.area.height-=1),!r.ssExtent)){const e=i.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["createScreenPoint"])(n.area.width,n.area.height));s.ymin=e.y,s.xmax=e.x,r.ssExtent=s}a.extent=s.clone()._normalize(!0).toJSON();const f=await i.takeScreenshot(n),{data:m}=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["dataComponents"])(f.dataUrl);return a.imageData=m,a}async function be(e,{layerView:t,printTemplate:i},r){e.legendEnabled&&r.legendLayers.push({id:e.id});return le(e,await Ee(t),i,r)}function he(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const i={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;return De(i,e),i}async function we(e,t,i){if(i.is11xService&&e.serviceUrl&&e.styleUrl){const t=Ie(e.styleUrl,e.apiKey),r=Ie(e.serviceUrl,e.apiKey);if(!t&&!r||"2.1.0"!==i.cimVersion){const i={type:"VectorTileLayer"};return i.styleUrl=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalize"])(e.styleUrl),i.token=t,r!==t&&(i.additionalTokens=[{url:e.serviceUrl,token:r}]),i}}return ge(e,t,i)}function Se(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}function xe(e){let t;const i=[],r=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(r):e.name&&i.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(r),i.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:i,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalize"])(e.url),version:e.version}),t}function ve(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalize"])(e.url)}}function De(e,t){t.url&&(e.url=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalize"])(e.url||t.url),e.token=Ie(e.url,t.apiKey))}function Ie(i,r){var a,n;return Object(_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_17__["supportsApiKey"])(i)&&(r||_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey)?r||_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey:null==(a=_kernel_js__WEBPACK_IMPORTED_MODULE_1__["id"])||null==(n=a.findCredential(i))?void 0:n.token}async function Le(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const r=1024;t.canvas.width=r,t.canvas.height=r;const a=t.canvas.getContext("2d");let n,l;if(e.path){var u;const t=new Path2D(e.path);t.closePath(),a.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",a.fill(t);const i=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_15__["getContextBoundingBox"])(a);if(!i)return null;a.clearRect(0,0,r,r);const o=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["pt2px"])(e.size)/Math.max(i.width,i.height);a.scale(o,o);const c=r/o,y=c/2-i.width/2-i.x,f=c/2-i.height/2-i.y;if(a.translate(y,f),Array.isArray(e.color)&&a.fill(t),null!=(u=e.outline)&&u.width&&Array.isArray(e.outline.color)){const r=e.outline;a.lineWidth=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["pt2px"])(r.width)/o,a.lineJoin="round",a.strokeStyle=`rgba(${r.color[0]},${r.color[1]},${r.color[2]},${r.color[3]/255})`,a.stroke(t),i.width+=a.lineWidth,i.height+=a.lineWidth}i.width*=o,i.height*=o;const m=a.getImageData(r/2-i.width/2,r/2-i.height/2,Math.ceil(i.width),Math.ceil(i.height));n=m.width,l=m.height,a.canvas.width=n,a.canvas.height=l,a.putImageData(m,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,r=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t,{responseType:"image"})).data;n=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["pt2px"])(e.width),l=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["pt2px"])(e.height),a.canvas.width=n,a.canvas.height=l,a.drawImage(r,0,0,a.canvas.width,a.canvas.height)}return{type:"esriPMS",imageData:a.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["px2pt"])(l),width:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["px2pt"])(n),xoffset:e.xoffset,yoffset:e.yoffset}}async function Te(e,t){const i=e.type;if("simple"===i&&Ve(e.symbol))e.symbol=await Le(e.symbol,t);else if("uniqueValue"===i||"classBreaks"===i){Ve(e.defaultSymbol)&&(e.defaultSymbol=await Le(e.defaultSymbol,t));const r=e["uniqueValue"===i?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)Ve(e.symbol)&&(e.symbol=await Le(e.symbol,t))}}async function Ee(e){return e.queryFeatures(e.createQuery()).then((e=>e.features))}function Me(e){return e.gpMetadata&&e.gpMetadata.executionType?H.fromJSON(e.gpMetadata.executionType):"sync"}function Ve(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}


/***/ }),

/***/ "dZFq":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ParameterValue.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let o=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(e){super(e),this.dataType=null,this.value=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{read:u.read,write:u.write}})],o.prototype,"dataType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],o.prototype,"value",void 0),o=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.ParameterValue")],o);const i=o;


/***/ }),

/***/ "eUVy":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/GPMessage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(e){super(e),this.description=null,this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],i.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.GPMessage")],i);const a=i;


/***/ }),

/***/ "iZ43":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/GPOptions.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let i=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__["default"]})],i.prototype,"outSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__["default"]})],i.prototype,"processExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__["default"]})],i.prototype,"processSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({nonNullable:!0})],i.prototype,"returnFeatureCollection",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({nonNullable:!0})],i.prototype,"returnM",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({nonNullable:!0})],i.prototype,"returnZ",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.geoprocessor.GPOptions")],i),i.from=Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["ensureType"])(i);const n=i;


/***/ }),

/***/ "oPuG":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/JobInfo.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geoprocessor/GPOptions.js */ "iZ43");
/* harmony import */ var _geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geoprocessor/utils.js */ "NlB9");
/* harmony import */ var _GPMessage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./GPMessage.js */ "eUVy");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var p;const h=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__["JSONMap"]({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let m=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__["JSONSupport"]{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:s,sourceUrl:r}=this,{path:o}=Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["parseUrl"])(r),i={...this.requestOptions,...e,query:{f:"json"}};this._clearTimer();return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${o}/jobs/${s}/cancel`,i).then((e=>{const t=p.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:s}=Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["parseUrl"])(this.sourceUrl),r={...this.requestOptions,...e,query:{f:"json"}},o=`${s}/jobs/${this.jobId}`;return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(o,r).then((({data:e})=>{const t=p.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}fetchResultData(e,s,r){s=_geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_11__["default"].from(s||{});const{returnFeatureCollection:o,returnM:i,returnZ:a,outSpatialReference:c}=s,{path:j}=Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["parseUrl"])(this.sourceUrl),p=Object(_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_12__["gpEncode"])({returnFeatureCollection:o,returnM:i,returnZ:a,outSR:c,returnType:"data",f:"json"},null),h={...this.requestOptions,...r,query:p},m=`${j}/jobs/${this.jobId}/results/${e}`;return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(m,h).then((e=>Object(_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_12__["decode"])(e.data)))}fetchResultImage(e,s,r){const{path:o}=Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["parseUrl"])(this.sourceUrl),i={...s.toJSON(),f:"json"},a=Object(_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_12__["gpEncode"])(i),c={...this.requestOptions,...r,query:a},u=`${o}/jobs/${this.jobId}/results/${e}`;return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(u,c).then((e=>Object(_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_12__["decode"])(e.data)))}async fetchResultMapImageLayer(){const{path:e}=Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["parseUrl"])(this.sourceUrl),t=e.indexOf("/GPServer/"),s=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await Promise.all(/*! import() | layers-MapImageLayer-js */[__webpack_require__.e("default~MapImageLayer-js~TileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("MapImageLayer-js")]).then(__webpack_require__.bind(null, /*! ../../layers/MapImageLayer.js */ "U/i9"))).default)({url:s})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:s,statusCallback:r}=e;return new Promise(((e,a)=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["onAbort"])(s,(()=>{this._clearTimer(),a(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortError"])())})),this._clearTimer();const c=setInterval((()=>{this._timer||a(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortError"])()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:s}=t;switch(this.jobStatus=s,s){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":r&&r(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),a(this)}}))}),t);this._timer=c}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],m.prototype,"jobId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:h.read}})],m.prototype,"jobStatus",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_GPMessage_js__WEBPACK_IMPORTED_MODULE_13__["default"]]})],m.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],m.prototype,"requestOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{write:!0}})],m.prototype,"sourceUrl",void 0),m=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.rest.support.JobInfo")],m);const d=m;


/***/ }),

/***/ "xNJU":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/LinearUnit.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(r){super(r),this.distance=0,this.units=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{write:!0}})],p.prototype,"distance",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{read:i.read,write:i.write}})],p.prototype,"units",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.LinearUnit")],p);const c=p;


/***/ })

}]);
//# sourceMappingURL=tasks-PrintTask-js.js.map