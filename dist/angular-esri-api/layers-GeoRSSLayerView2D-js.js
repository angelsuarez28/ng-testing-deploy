(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-GeoRSSLayerView2D-js"],{

/***/ "Uxk/":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GeoRSSLayerView2D.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../PopupTemplate.js */ "SFah");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../renderers/SimpleRenderer.js */ "/1dM");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ "Ltyc");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ "q03O");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let m=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__["default"])){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.graphicsViews.reverse().map((r=>r.hitTest(e)));return(await Promise.all(s)).flat().filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t,layerDefinition:o}of e){const e=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(t),l=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.features),c=o.drawingInfo,m=i?_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(i):null,y=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__["fromJSON"])(c.renderer),g=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_15__["default"]({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"](this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container)}})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_10__["default"]({symbol:e})})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_10__["default"]({symbol:e})})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_10__["default"]({symbol:e})}))],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;


/***/ })

}]);
//# sourceMappingURL=layers-GeoRSSLayerView2D-js.js.map