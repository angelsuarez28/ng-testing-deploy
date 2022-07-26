(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView2D-js"],{

/***/ "3BYb":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayObject.js ***!
  \*****************************************************************************/
/*! exports provided: FlowDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDisplayObject", function() { return m; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class m extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(s){const{displayData:n}=this;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n))return;const l=n.extent.xmin,m=n.extent.ymax,p=[0,0];s.toScreen(p,[l,m]);const c=(n.extent.xmax-n.extent.xmin)/n.size[0]/s.resolution,d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(s.rotation),{dvs:x}=this.transforms;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(x,[-1,1,0]),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(x,x,[2/(s.size[0]*s.pixelRatio),-2/(s.size[1]*s.pixelRatio),1]),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(x,x,[p[0],p[1],0]),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["r"])(x,x,d),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(x,x,[c*s.pixelRatio,c*s.pixelRatio,1])}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}}


/***/ }),

/***/ "AorF":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowContainer.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _BrushFlow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrushFlow.js */ "ye41");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(s){const t=s.registerRenderPass({name:"flow",brushes:[_BrushFlow_js__WEBPACK_IMPORTED_MODULE_0__["default"]],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ "ByKg":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/imagery/RasterVFDisplayObject.js ***!
  \************************************************************************************/
/*! exports provided: RasterVFDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterVFDisplayObject", function() { return _; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/vectorFieldUtils.js */ "Gdt4");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/* harmony import */ var _webgl_Utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl/Utils.js */ "yN2G");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class _ extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_6__["DisplayObject"]{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=t}destroy(){var e,s;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.vaoData)&&(null==(e=this.vaoData.magdir)||e.vao.dispose(),null==(s=this.vaoData.scalar)||s.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){var e,s;!this._vaoInvalidated&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.vaoData)&&(null==(e=this.vaoData.magdir)||e.vao.dispose(),null==(s=this.vaoData.scalar)||s.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(e){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.source)&&!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.vaoData)){const{style:t}=this.symbolizerParameters;switch(t){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const t=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_5__["createVFMesh"])(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(e.context,t);this.vaoData={magdir:s}}break;case"simple_scalar":{const t=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_5__["createVFMeshScalar"])(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(e.context,t);this.vaoData={scalar:s}}break;case"wind_speed":{const t=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_5__["createVFMesh"])(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(e.context,t),a=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_5__["createVFMeshScalar"])(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(e.context,a);this.vaoData={magdir:s,scalar:r}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}setTransform(t){const o=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.transforms.dvs),[l,c]=t.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/t.resolution,m=h*this.width,u=h*this.height,d=Math.PI*this.rotation/180;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(l,c)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(m/2,u/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["r"])(o,o,-d),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-m/2,-u/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["j"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(m,u)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["m"])(this.transforms.dvs,t.displayViewMat3,o)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:s,indexData:a}=e,r=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__["BufferObject"].createVertex(t,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__["Usage"].STATIC_DRAW,new Float32Array(s)),i=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__["BufferObject"].createIndex(t,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__["Usage"].STATIC_DRAW,new Uint32Array(a)),o=Object(_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_7__["createProgramDescriptor"])("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__["DataType"].FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__["DataType"].FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__["DataType"].FLOAT,normalized:!1}]});return{vao:new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__["VertexArrayObject"](t,o.attributes,o.bufferLayouts,{geometry:r},i),elementCount:a.length}}}


/***/ }),

/***/ "OB5n":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/flowRendererUtils.js ***!
  \*****************************************************************************/
/*! exports provided: createFlowRendererSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFlowRendererSettings", function() { return t; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t){const o=s(t),r=n(o),l=2*r,u=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(t.maxPathLength)/l)+1,p=r,c=10,h=i(t),f=a(t),{flowSpeed:d,trailLength:g,density:m}=t;return{lineRenderWidth:o,segmentLength:l,verticesPerLine:u,lineCollisionWidth:p,lineSpacing:c,lineColor:h,lineOpacity:f,lineSpeed:d,fadeDuration:g,density:m,smoothing:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(t.smoothing),velocityScale:"flow-from"===t.flowRepresentation?1:-1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}function n(e){return"constant"===e.kind?e.value[0]:e.values[e.values.length-1]}function o(e){const t=e.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function s(t){if(!t.hasVisualVariables("size"))return{kind:"constant",value:[Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(t.trailWidth)]};const n=t.getVisualVariablesForType("size")[0],o=[],s=[];let i;if(n.stops){for(const e of n.stops)o.push(e.value),s.push(e.size);i=n.stops.length}else o.push(n.minDataValue,n.maxDataValue),s.push(n.minSize,n.maxSize),i=2;return{kind:"ramp",stops:o,values:s,count:i}}function i(e){if(!e.hasVisualVariables("color"))return{kind:"constant",value:o(e.color)};const t=e.getVisualVariablesForType("color")[0],n=[],s=[];for(const i of t.stops)n.push(i.value),Array.prototype.push.apply(s,o(i.color));return{kind:"ramp",stops:n,values:s,count:t.stops.length}}function a(e){if(!e.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=e.getVisualVariablesForType("opacity")[0],n=[],o=[];for(const s of t.stops)n.push(s.value),o.push(s.opacity);return{kind:"ramp",stops:n,values:o,count:t.stops.length}}


/***/ }),

/***/ "eD1f":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStrategy.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _FlowDisplayData_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FlowDisplayData.js */ "gO5q");
/* harmony import */ var _FlowDisplayObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FlowDisplayObject.js */ "3BYb");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const y=1.15,h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.engine.flow.FlowStrategy");let f=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(t){super(t),this._flowDisplayObject=new _FlowDisplayObject_js__WEBPACK_IMPORTED_MODULE_14__["FlowDisplayObject"],this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(t){const{flowStyle:o}=this.flowContainer;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(o))return void this._clear();const{extent:e,rotation:i,resolution:l,pixelRatio:n}=t.state,p=g(e,i);p.expand(y);const m=[Math.round((p.xmax-p.xmin)/l),Math.round((p.ymax-p.ymin)/l)],d=new _FlowDisplayData_js__WEBPACK_IMPORTED_MODULE_13__["default"](o,p,m,n);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(this._loading)){if(this._loading.update(d))return;this._loading.destroy(),this._loading=null}!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(t=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(t)||(h.error("A resource failed to load.",t),this._loading=null)})),this._loading=d)}_clear(){this._flowDisplayObject.clear(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(this._loading)&&(this._loading.destroy(),this._loading=null)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],f.prototype,"_loading",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],f.prototype,"flowContainer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],f.prototype,"updating",null),f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__["subclass"])("esri.views.2d.engine.flow.FlowStrategy")],f);const u=f;function g(t,o){const e=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"]({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),r=t.xmax-t.xmin,s=t.ymax-t.ymin,a=Math.abs(Math.cos(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__["deg2rad"])(o))),l=Math.abs(Math.sin(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__["deg2rad"])(o))),n=a*r+l*s,c=l*r+a*s,m=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]({xmin:e.x-n/2,ymin:e.y-c/2,xmax:e.x+n/2,ymax:e.y+c/2,spatialReference:t.spatialReference});return m.centerAt(e),m}


/***/ }),

/***/ "gO5q":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayData.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.flow.FlowDisplayData");class s{constructor(e,t,s,a){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=s,this.pixelRatio=a}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t=await this.flowStyle.loadResources({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.signal);this.state={name:"loaded",resources:t}}prepareForRendering(e){if("loaded"!==this.state.name)return void t.error("Only loaded resources can be attached.");const s=this.state.resources;s.prepareForRendering(e),this.state={name:"attached",resources:s}}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){if(!this.flowStyle.areResourcesCompatible(e.flowStyle))return!1;return!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0)}}


/***/ }),

/***/ "hwyq":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowView2D.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _dataUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dataUtils.js */ "Jha9");
/* harmony import */ var _FlowContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FlowContainer.js */ "AorF");
/* harmony import */ var _FlowStrategy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FlowStrategy.js */ "eD1f");
/* harmony import */ var _FlowStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FlowStyle.js */ "qSvj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let h=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__["HandleOwner"]{constructor(){super(...arguments),this._loadImagery=(t,e,r,i,s)=>Object(_dataUtils_js__WEBPACK_IMPORTED_MODULE_9__["loadImagery"])(this.layer,t,e,r,i,s),this._createStreamlinesMesh=(t,e,r)=>this.layer.createStreamlinesMesh({flowData:e,rendererSettings:t},{signal:r}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this._strategy||this._strategy.updating}attach(){const{layer:t}=this,e=()=>{this._loadImagery=(e,r,i,s,o)=>Object(_dataUtils_js__WEBPACK_IMPORTED_MODULE_9__["loadImagery"])(t,e,r,i,s,o),this._updateVisualization()};"multidimensionalDefinition"in t?this.handles.add(Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>t.multidimensionalDefinition),e)):this.handles.add([Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>t.mosaicRule),e),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>t.renderingRule),e),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["watch"])((()=>t.definitionExpression),e)]),this.container=new _FlowContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"],this._strategy=new _FlowStrategy_js__WEBPACK_IMPORTED_MODULE_11__["default"]({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate()}hitTest(t){return new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){if("flow"!==this.layer.renderer.type)return;const t=new _FlowStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"](this._loadImagery,this._createStreamlinesMesh,this.layer.renderer,this.timeExtent);this.container.flowStyle=t,this.layerView.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"_strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"attached",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"layerView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"timeExtent",void 0),h=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.engine.flow.FlowView2D")],h);const d=h;


/***/ }),

/***/ "qSvj":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStyle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _FlowGLResources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlowGLResources.js */ "vnhx");
/* harmony import */ var _flowRendererUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flowRendererUtils.js */ "OB5n");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class n{constructor(e,t,r,n){this._loadImagery=e,this._createStreamlinesMesh=t,this._timeExtent=n,this._rendererSettings=Object(_flowRendererUtils_js__WEBPACK_IMPORTED_MODULE_3__["createFlowRendererSettings"])(r)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(t){let r=!0;return r=r&&t._loadImagery===this._loadImagery,r=r&&t._createStreamlinesMesh===this._createStreamlinesMesh,r=r&&t._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,r=r&&t._rendererSettings.segmentLength===this._rendererSettings.segmentLength,r=r&&t._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,r=r&&t._rendererSettings.density===this._rendererSettings.density,r=r&&t._rendererSettings.smoothing===this._rendererSettings.smoothing,r=r&&t._rendererSettings.velocityScale===this._rendererSettings.velocityScale,r=r&&t._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,r=r&&t._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,r=r&&t._rendererSettings.mergeLines===this._rendererSettings.mergeLines,r=r&&t._rendererSettings.velocityScale===this._rendererSettings.velocityScale,r=r&&t._rendererSettings.interpolate===this._rendererSettings.interpolate,r=r&&t._rendererSettings.lineColor.kind===this._rendererSettings.lineColor.kind,r=r&&t._rendererSettings.lineOpacity.kind===this._rendererSettings.lineOpacity.kind,r=r&&t._rendererSettings.lineRenderWidth.kind===this._rendererSettings.lineRenderWidth.kind,r&&this._rendererSettings.mergeLines&&(r=t._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),r&&t._timeExtent!==this._timeExtent&&(r=!(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t._timeExtent)||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._timeExtent))&&t._timeExtent.equals(this._timeExtent)),r}async loadResources(e,i){const{extent:n,size:s}=e;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(i);const d=await this._loadImagery(n,s[0],s[1],this._timeExtent,i),{vertexData:g,indexData:h}=await this._createStreamlinesMesh(this._rendererSettings,d,i);return new _FlowGLResources_js__WEBPACK_IMPORTED_MODULE_2__["default"](g,h,{lineColor:this._rendererSettings.lineColor,lineOpacity:this._rendererSettings.lineOpacity,lineRenderWidth:this._rendererSettings.lineRenderWidth})}}


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


/***/ }),

/***/ "vnhx":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowGLResources.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a=new Map;a.set("a_positionAndSide",0),a.set("a_timeInfo",1),a.set("a_extrude",2),a.set("a_speed",3);const n={geometry:[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__["VertexElementDescriptor"]("a_positionAndSide",3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,0,36),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__["VertexElementDescriptor"]("a_timeInfo",3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,12,36),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__["VertexElementDescriptor"]("a_extrude",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,24,36),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__["VertexElementDescriptor"]("a_speed",1,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,32,36)]};class o{constructor(e,t,r){this.values=r,this._vertexData=e,this._indexData=t}prepareForRendering(t){const i=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["BufferObject"].createVertex(t,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["Usage"].STATIC_DRAW,this._vertexData),o=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["BufferObject"].createIndex(t,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["Usage"].STATIC_DRAW,this._indexData),d=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_2__["VertexArrayObject"](t,a,n,{geometry:i},o);this.vertexBuffer=i,this.indexBuffer=o,this.vertexArray=d,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}get locations(){return a}}


/***/ })

}]);
//# sourceMappingURL=default~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView2D-js.js.map