(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-RouteLayerView2D-js"],{

/***/ "BLb8":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/RouteLayerView2D.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ "q03O");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const g=["routeInfo","directionLines","directionPoints","polygonBarriers","polylineBarriers","pointBarriers","stops"],d=Object.freeze({remove(){},pause(){},resume(){}});let m=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__["default"])){constructor(){super(...arguments),this._graphicsViews=new Map,this._highlightIds=new Map}attach(){for(const e of g)this.handles.add(Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__["watch"])((()=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.layer[e])?"routeInfo"===e?[Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this.layer[e])]:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this.layer[e]).toArray():null),(s=>this._createGraphicsView(e,s)),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__["initial"]),e)}detach(){this._destroyGraphicsViews()}highlight(e){let t;return"number"==typeof e?t=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):d}async hitTest(e,s){if(this.suspended||!this._graphicsViews.size)return Promise.resolve(null);const i=Array.from(this._graphicsViews.values()).reverse().map((s=>s.hitTest(e))).flat().filter((e=>!!e));for(const t of i)t.layer=this.layer,t.sourceLayer=this.layer;return i}moveStart(){}moveEnd(){}update(e){for(const s of this._graphicsViews.values())s.processUpdate(e)}viewChange(){for(const e of this._graphicsViews.values())e.viewChange()}isUpdating(){for(const e of this._graphicsViews.values())if(e.updating)return!0;return!1}_createGraphicsView(e,r){this._destroyGraphicsView(e);const a=this.view,n=()=>this.requestUpdate(),l=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"](Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(r)?r.map((e=>{const{attributes:i,geometry:t,symbol:r,popupInfo:h}=e.toPortalJSON();return _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON({attributes:i,geometry:t,symbol:r,popupTemplate:h})})):[]),d=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"](a.featuresTilingScheme),m=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]({container:d,graphics:l,requestUpdateCallback:n,view:a});this._graphicsViews.set(e,m),this.container.addChildAt(d,g.indexOf(e)),this._updateHighlight(),this.handles.add([Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__["watch"])((()=>m.updating),(()=>this.notifyChange("updating")),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__["initial"])],`updating-${e}`)}_destroyGraphicsView(e){if(!this._graphicsViews.has(e))return;const s=this._graphicsViews.get(e);this.container.removeChild(s.container),s.destroy(),this.handles.remove(`updating-${e}`),this._graphicsViews.delete(e)}_destroyGraphicsViews(){this.container.removeAllChildren();for(const[e,s]of this._graphicsViews.entries())this.handles.remove(e),s.destroy();this._graphicsViews.clear()}_addHighlight(e){for(const s of e)if(this._highlightIds.has(s)){const e=this._highlightIds.get(s);this._highlightIds.set(s,e+1)}else this._highlightIds.set(s,1);this._updateHighlight()}_removeHighlight(e){for(const s of e)if(this._highlightIds.has(s)){const e=this._highlightIds.get(s)-1;0===e?this._highlightIds.delete(s):this._highlightIds.set(s,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const s of this._graphicsViews.values())s.setHighlight(e)}};m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.RouteLayerView2D")],m);const u=m;


/***/ })

}]);
//# sourceMappingURL=layers-RouteLayerView2D-js.js.map