(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["processors-HeatmapProcessor-js"],{

/***/ "Mx58":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/HeatmapProcessor.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return h; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ "DxxZ");
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../renderers/support/heatmapUtils.js */ "AfLA");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BaseProcessor.js */ "ukaK");
/* harmony import */ var _support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/tileUtils.js */ "oBXe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t}}function c(e){const t=e.key,s=new Map,r=256,i=_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_10__["TILE_SIZE"],o=e.tileInfoView.tileInfo.isWrappable;return s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,-1,-1,o).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,0,-1,o).id,new p([0,-i],[0,i-r,i,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,1,-1,o).id,new p([i,-i],[0,i-r,r,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,-1,0,o).id,new p([-i,0],[i-r,0,i,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,1,0,o).id,new p([i,0],[0,0,r,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,-1,1,o).id,new p([-i,i],[i-r,0,i,r])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,0,1,o).id,new p([0,i],[0,0,i,r])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__["getPow2NeighborKey"])(t,1,1,o).id,new p([i,i],[0,0,r,r])),s}let l=class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_8__["diff"])(this._schema,s)&&(e.mesh=!0,this._schema=s)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&a.set(r.addOrUpdate.instance,r),r.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["applySome"])(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["applySome"])(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s)}))))}}));const a=Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_9__["calculateHeatmapIntensityInfoReaders"])(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;


/***/ }),

/***/ "oBXe":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/tileUtils.js ***!
  \*********************************************************************************/
/*! exports provided: getPow2NeighborKey, getPow2NeighborTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPow2NeighborKey", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPow2NeighborTile", function() { return e; });
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile.js */ "7g5W");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,n,r){const t=e.tileInfoView.tileInfo.isWrappable,i=l(e.key,n,r,t);return new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["Tile"](e.tileInfoView,i)}function l(o,e,l,n){const r=o.clone(),t=1<<r.level,i=r.col+e,c=r.row+l;return n&&i<0?(r.col=i+t,r.world-=1):i>=t?(r.col=i-t,r.world+=1):r.col=i,r.row=c,r}


/***/ })

}]);
//# sourceMappingURL=processors-HeatmapProcessor-js.js.map