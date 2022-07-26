(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-GroupLayerView2D-js"],{

/***/ "2GoO":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _engine_webgl_GroupContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../engine/webgl/GroupContainer.js */ "7zHX");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/GroupLayerView.js */ "TTjt");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let a=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__["LayerView2DMixin"])(_layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_9__["default"])){constructor(){super(...arguments),this.container=new _engine_webgl_GroupContainer_js__WEBPACK_IMPORTED_MODULE_7__["GroupContainer"]}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)))}};a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.GroupLayerView2D")],a);const i=a;


/***/ }),

/***/ "7zHX":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GroupContainer.js ***!
  \***************************************************************************/
/*! exports provided: GroupContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupContainer", function() { return r; });
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WGLContainer.js */ "mgI5");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(e){const r=this.createRenderParams(e),{context:s,painter:o,profiler:n}=r;this._prevFBO=s.getBoundFramebufferObject(),n.recordContainerStart(this.name);const i=this._getFbo(r),a=o.getRenderTarget();s.bindFramebuffer(i),o.setRenderTarget(i),s.setDepthWriteEnabled(!0),s.setColorMask(!0,!0,!0,!0),s.setClearColor(0,0,0,0),s.setClearDepth(1),s.clear(s.gl.COLOR_BUFFER_BIT|s.gl.DEPTH_BUFFER_BIT),s.setDepthWriteEnabled(!1);for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(r);for(const t of this.children)t.afterRender(e);o.setRenderTarget(a),o.releaseFbo(i),s.bindFramebuffer(this._prevFBO),o.beforeRenderLayer(r,this._clippingInfos?255:0,this.computedOpacity),s.setStencilTestEnabled(!1),s.setStencilWriteMask(0),o.blitTexture(s,i.colorTexture,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].NEAREST),o.compositeLayer(r,this.computedOpacity),n.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:r}=e,{width:s,height:o}=t.getViewport();return r.acquireFbo(s,o)}}


/***/ }),

/***/ "TTjt":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/GroupLayerView.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return h; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "fX31");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _LayerView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayerView.js */ "NloG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let o=class extends _LayerView_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(e){super(e),this.type="group",this.layerViews=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(e){this._set("layerViews",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((e=>e.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((i=>i.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e})))}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let s=null;i&&i.visible&&(s=i),this._enforceVisibility(s)}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e}));break}case"exclusive":this._enforceExclusiveVisibility(e)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({cast:_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["castForReferenceSetter"]})],o.prototype,"layerViews",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],o.prototype,"updatingProgress",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],o.prototype,"view",void 0),o=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.layers.GroupLayerView")],o);const h=o;


/***/ })

}]);
//# sourceMappingURL=layers-GroupLayerView2D-js.js.map