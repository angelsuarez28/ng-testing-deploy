(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-ImageryLayerView2D-js"],{

/***/ "20T6":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/imagery/RasterVFContainer.js ***!
  \********************************************************************************/
/*! exports provided: RasterVFContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterVFContainer", function() { return t; });
/* harmony import */ var _BrushVectorField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrushVectorField.js */ "O8Ne");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[_BrushVectorField_js__WEBPACK_IMPORTED_MODULE_0__["default"]],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e)}))}}


/***/ }),

/***/ "5hoH":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/VectorFieldView2D.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return g; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Graphic.js */ "jWBI");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/vectorFieldUtils.js */ "Gdt4");
/* harmony import */ var _engine_imagery_RasterVFContainer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../engine/imagery/RasterVFContainer.js */ "20T6");
/* harmony import */ var _ImageryVFStrategy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ImageryVFStrategy.js */ "qxKe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let f=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__["HandleOwner"]{constructor(){super(...arguments),this.attached=!1,this.container=new _engine_imagery_RasterVFContainer_js__WEBPACK_IMPORTED_MODULE_14__["RasterVFContainer"],this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,r,i)=>{const n=await this._projectFullExtentPromise,{symbolTileSize:l}=this.layer.renderer,{extent:c,width:m,height:p}=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["snapImageToSymbolTile"])(e,t,r,l,n);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(n)&&!n.intersects(e))return{extent:c,pixelBlock:null};const h={bbox:`${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:l,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e)){if(`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}}const{pixelData:u}=await this.layer.fetchImage(c,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});if(this._dataParameters=h,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(u.pixelBlock))return{extent:c,pixelBlock:null};return{extent:c,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["convertVectorFieldData"])(u.pixelBlock,"vector-uv")):u.pixelBlock}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new _ImageryVFStrategy_js__WEBPACK_IMPORTED_MODULE_15__["default"]({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__["watch"])((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__["syncAndInitial"]),"vector-field-view-update")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return{extent:e,pixelBlock:t}}hitTest(e){return new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&r&&i&&s}async _getProjectedFullExtent(e){try{return await Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_12__["projectExtent"])(this.layer.fullExtent,e)}catch(t){try{const t=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],f.prototype,"attached",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],f.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],f.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],f.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],f.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],f.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],f.prototype,"updating",null),f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g=f;


/***/ }),

/***/ "f1zk":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryLayerView2D.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return b; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../support/GraphicsCollection.js */ "9iar");
/* harmony import */ var _engine_flow_FlowView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../engine/flow/FlowView2D.js */ "hwyq");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/HighlightGraphicContainer.js */ "/wA8");
/* harmony import */ var _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./imagery/ImageryView2D.js */ "slNU");
/* harmony import */ var _imagery_VectorFieldView2D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./imagery/VectorFieldView2D.js */ "5hoH");
/* harmony import */ var _layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/ImageryLayerView.js */ "yAIi");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let g=class extends(Object(_layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_16__["ImageryLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_18__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__["default"])))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_9__["GraphicsCollection"],this.subview=null}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,i){return this.subview?[this.subview.hitTest(e)]:null}update(e){var i;null==(i=this.subview)||i.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__["default"]({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"](this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>{var e;return null!=(e=this.layer.blendMode)?e:"normal"}),(e=>this.subview.container.blendMode=e),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["syncAndInitial"]),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>{var e;return null!=(e=this.layer.effect)?e:null}),(e=>this.subview.container.effect=e),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["syncAndInitial"]),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["sync"]),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch()}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["sync"]),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()})),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update")}detach(){var e,i;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),null==(e=this.subview)||e.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,null==(i=this._highlightView)||i.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,r){if(!((Array.isArray(e)?e[0]:_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].isCollection(e)?e.getItemAt(0):e)instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]))return{remove:()=>{}};let s=[];return Array.isArray(e)||_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].isCollection(e)?s=e.map((e=>e.clone())):e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var e;if(!this.view)return;const i=null==(e=this.layer.renderer)?void 0:e.type;let t="imagery";if("vector-field"===i&&"lerc"===this.layer.format?t="imageryVF":"flow"===i&&(t="flow"),this.subview){var r;if(this.subview.type===t)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),null==(r=this.subview)||r.destroy()}this.subview="imagery"===t?new _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_14__["default"]({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new _imagery_VectorFieldView2D_js__WEBPACK_IMPORTED_MODULE_15__["default"]({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new _engine_flow_FlowView2D_js__WEBPACK_IMPORTED_MODULE_10__["default"]({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){null!=e&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],g.prototype,"pixelData",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],g.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],g.prototype,"subview",void 0),g=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;


/***/ }),

/***/ "qxKe":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryVFStrategy.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _engine_imagery_RasterVFDisplayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../engine/imagery/RasterVFDisplayObject.js */ "ByKg");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const p=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");let m=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this.update=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["debounce"])(((e,t)=>this._update(e,t).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(e)||p.error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"]({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,n]=e.state.size;this._loading=this.fetchPixels(o,a,n,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null}_addToDisplay(e,t,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:o}=e,a=new _engine_imagery_RasterVFDisplayObject_js__WEBPACK_IMPORTED_MODULE_11__["RasterVFDisplayObject"](o);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=o.width*t.symbolTileSize,a.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"fetchPixels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"_loading",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"updating",null),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.views.2d.layers.imagery.ImageryVFStrategy")],m);const d=m;


/***/ }),

/***/ "slNU":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../engine/Container.js */ "AMBt");
/* harmony import */ var _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../engine/ImageryBitmapSource.js */ "iUxC");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../support/ExportStrategy.js */ "vbiG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.imagery.ImageryView2D");let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(){super(...arguments),this.attached=!1,this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_13__["Container"],this.updateRequested=!1,this.type="imagery",this._bitmapView=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_12__["BitmapContainer"]}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(e)||d.error(e)}))}hitTest(e){return new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_15__["default"]({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_11__["mosaicPixelData"])(r,t);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_14__["default"](t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"attached",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"type",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.imagery.ImageryView2D")],u);const y=u;


/***/ }),

/***/ "yAIi":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/ImageryLayerView.js ***!
  \********************************************************************/
/*! exports provided: ImageryLayerView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageryLayerView", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/Point.js */ "SuVq");
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ "IvSi");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../rest/support/Query.js */ "ad1r");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__["getFetchPopupTemplate"])(s,o);if(!i||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(u))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__["default"];c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](l,l,this.view.spatialReference):new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],m.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],m.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__["combinedViewLayerTimeExtentProperty"])],m.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],m.prototype,"view",void 0),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.layers.ImageryLayerView")],m),m};


/***/ })

}]);
//# sourceMappingURL=layers-ImageryLayerView2D-js.js.map