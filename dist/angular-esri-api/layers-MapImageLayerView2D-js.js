(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-MapImageLayerView2D-js"],{

/***/ "6BjF":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapImageLayerView2D.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../support/GraphicsCollection.js */ "9iar");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/HighlightGraphicContainer.js */ "/wA8");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/ExportStrategy.js */ "vbiG");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/MapImageLayerView.js */ "U3zk");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../support/drapedUtils.js */ "6UvW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(Object(_layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__["MapImageLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_16__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__["default"])))){constructor(){super(...arguments),this._highlightGraphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_8__["GraphicsCollection"]}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(e)||u.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_9__["BitmapContainer"],this.container.addChild(this._bitmapContainer);const a=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__["default"]({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_13__["default"]({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}createFetchPopupFeaturesQueryGeometry(e,t){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_17__["createQueryGeometry"])(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],f.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],f.prototype,"updating",void 0),f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;


/***/ }),

/***/ "Ilhi":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/sublayerUtils.js ***!
  \*******************************************************************/
/*! exports provided: isExportDynamic, isSublayerOverhaul, shouldWriteSublayerStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExportDynamic", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSublayerOverhaul", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWriteSublayerStructure", function() { return e; });
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/accessorSupport/PropertyOrigin.js */ "ku/q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(r,e,n){const o=e.flatten((({sublayers:r})=>r)).length;if(o!==r.length)return!0;return!!r.some((r=>r.originIdOf("minScale")>n||r.originIdOf("maxScale")>n||r.originIdOf("renderer")>n||r.originIdOf("labelingInfo")>n||r.originIdOf("opacity")>n||r.originIdOf("labelsVisible")>n||r.originIdOf("source")>n))||!i(r,e)}function n(e,n,o){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(!n.gdbVersion||n.gdbVersion===o.gdbVersion))||e.originIdOf("renderer")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__["OriginId"].SERVICE||e.originIdOf("labelingInfo")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__["OriginId"].SERVICE||e.originIdOf("opacity")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__["OriginId"].SERVICE||e.originIdOf("labelsVisible")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__["OriginId"].SERVICE}))||!i(e,n)}function i(r,e){if(!r||!r.length)return!0;const n=e.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).map((r=>r.id)).toArray();if(r.length>n.length)return!1;let i=0;const o=n.length;for(const{id:t}of r){for(;i<o&&n[i]!==t;)i++;if(i>=o)return!1}return!0}function o(r){return!!r&&r.some((r=>null!=r.minScale||r.layerDefinition&&null!=r.layerDefinition.minScale))}


/***/ }),

/***/ "U3zk":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/MapImageLayerView.js ***!
  \*********************************************************************/
/*! exports provided: MapImageLayerView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapImageLayerView", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ "IvSi");
/* harmony import */ var _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/ExportImageParameters.js */ "cM4j");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/* harmony import */ var _support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/floorFilterUtils.js */ "81Mc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const y=y=>{let d=class extends y{initialize(){this.exportImageParameters=new _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_10__["ExportImageParameters"]({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const i=this.get("view.scale"),p=[],m=async e=>{const r=0===e.minScale||i<=e.minScale,o=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&o)if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const r=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_13__["getFetchPopupTemplate"])(e,{...s,defaultPopupTemplateEnabled:!1});Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r)&&p.unshift({sublayer:e,popupTemplate:r})}},y=a.sublayers.toArray().reverse().map(m);await Promise.all(y);const d=p.map((async({sublayer:r,popupTemplate:o})=>{await r.load().catch((()=>{}));const a=r.createQuery(),i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s)?s.event:null,p=Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_11__["calculateTolerance"])({renderer:r.renderer,event:i}),m=this.createFetchPopupFeaturesQueryGeometry(e,p);if(a.geometry=m,a.outFields=await Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_13__["getRequiredFields"])(r,o),"map-image"===this.layer.type&&"floors"in this.view){var c,y;const e=null==(c=this.view)||null==(y=c.floors)?void 0:y.clone(),o=Object(_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_14__["getLayerFloorFilterClause"])(e,r);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o)&&(a.where=a.where?`(${a.where}) AND (${o})`:o)}const d=await this._loadArcadeModules(o);d&&d.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=m.width/p);return(await r.queryFeatures(a)).features}));return(await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["eachAlways"])(d)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__["loadArcade"])()}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"exportImageParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],d.prototype,"exportImageVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__["combinedViewLayerTimeExtentProperty"])],d.prototype,"timeExtent",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.layers.MapImageLayerView")],d),d};


/***/ }),

/***/ "rXMu":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFetchPopupTemplate, getRequiredFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetchPopupTemplate", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredFields", function() { return t; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function t(t,d=t.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(t):[],r=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ })

}]);
//# sourceMappingURL=layers-MapImageLayerView2D-js.js.map