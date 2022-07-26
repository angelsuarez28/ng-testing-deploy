(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-TileLayerView2D-js"],{

/***/ "ArQ+":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/TileLayerView2D.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BitmapTileLayerView2D.js */ "Fkrg");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/imageUtils.js */ "2BtX");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tiling/TileQueue.js */ "B81a");
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tiling/TileStrategy.js */ "0wLv");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../layers/TileLayerView.js */ "K+Ap");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../support/drapedUtils.js */ "6UvW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const _=[0,0];let I=class extends(Object(_layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__["TileLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_18__["RefreshableLayerView"])(Object(_BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__["BitmapTileLayerView2D"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__["default"]))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__["default"](this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__["default"]({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__["default"]({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__["equals"])(null==(t=this.layer.tileInfo)?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_20__["createQueryGeometry"])(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))))}isUpdating(){var e,t;return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:l=0}=t;if(!s)try{return await this._fetchImage(e,r)}catch(h){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(h)&&!this.resampling)return Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__["createBlankImage"])(this._tileInfoView.tileInfo.size);if(l<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_14__["default"](i),r=await this.fetchTile(s,{...t,resamplingLevel:l+1});return Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__["resampleImage"])(this._tileInfoView,r,s,e)}}throw h}const a=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_14__["default"](0,0,0,0);let o;try{if(await s.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:r}),a.level!==e.level&&!this.resampling)return Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__["createBlankImage"])(this._tileInfoView.tileInfo.size);o=await this._fetchImage(a,r)}catch(h){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(h))throw h;o=await this._fetchImage(e,r)}return this.resampling?Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__["resampleImage"])(this._tileInfoView,o,a,e):o}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(s){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(s)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger(this.declaredClass).error(s)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],I.prototype,"_fetchQueue",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],I.prototype,"resampling",null),I=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.layers.TileLayerView2D")],I);const V=I;


/***/ }),

/***/ "K+Ap":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/TileLayerView.js ***!
  \*****************************************************************/
/*! exports provided: TileLayerView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileLayerView", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));if("tile"!==a.type)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}));const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["eachAlways"])(c.map((async r=>{const o=r.createQuery(),a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s)?s.event:null,i=Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_9__["calculateTolerance"])({renderer:r.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r.popupTemplate.getRequiredFields();return(await r.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"layer",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.mixins.TileLayerView")],c),c};


/***/ })

}]);
//# sourceMappingURL=layers-TileLayerView2D-js.js.map