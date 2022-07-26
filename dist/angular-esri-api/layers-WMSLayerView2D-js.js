(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-WMSLayerView2D-js"],{

/***/ "JTUT":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/ExportStrategy.js */ "vbiG");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/WMSLayerView.js */ "prZ3");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.layers.WMSLayerView2D");let l=class extends(Object(_layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_15__["WMSLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_14__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__["default"])))){constructor(){super(...arguments),this.container=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_10__["BitmapContainer"]}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(e)||u.error(e)}))}attach(){const{layer:e,container:t}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_12__["default"]({container:t,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,container:r}=this,{x:s,y:i}=e,{spatialReference:o}=t;let n=null,p=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,l=d-h*r;return s>=c&&s<=u&&i<=d&&i>=l&&(n=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__["default"]({xmin:c,ymin:l,xmax:u,ymax:d,spatialReference:o}),p=t,m=r,!0)})),!n)return null;const h=n.width/p,c=Math.round((s-n.xmin)/h),d=Math.round((n.ymax-i)/h);return{extent:n,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,s){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...s})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"updating",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.layers.WMSLayerView2D")],l);const y=l;


/***/ }),

/***/ "prZ3":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/WMSLayerView.js ***!
  \****************************************************************/
/*! exports provided: WMSLayerView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMSLayerView", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ "IvSi");
/* harmony import */ var _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layers/support/ExportWMSImageParameters.js */ "uAeW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_8__["ExportWMSImageParameters"]({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s;if(!(p&&a&&i))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"exportImageParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],i.prototype,"exportImageVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__["combinedViewLayerTimeExtentProperty"])],i.prototype,"timeExtent",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.WMSLayerView")],i),i};


/***/ })

}]);
//# sourceMappingURL=layers-WMSLayerView2D-js.js.map