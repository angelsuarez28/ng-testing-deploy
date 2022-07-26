(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-TileLayerView2D-js~layers-WMTSLayerView2D-js"],{

/***/ "2BtX":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/imageUtils.js ***!
  \*************************************************************************/
/*! exports provided: createBlankImage, resampleImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlankImage", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resampleImage", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function t(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function n(n,l,r,u){if(r.level===u.level)return l;const i=n.tileInfo.size,a=n.getTileResolution(r.level),c=n.getTileResolution(u.level);let g=n.getLODInfoAt(u.level);const h=g.getXForColumn(u.col),d=g.getYForRow(u.row);g=n.getLODInfoAt(r.level);const f=g.getXForColumn(r.col),s=g.getYForRow(r.row),m=e(l)/i[0],v=t(l)/i[1],w=Math.round(m*((h-f)/a)),I=Math.round(v*(-(d-s)/a)),M=Math.round(m*i[0]*(c/a)),F=Math.round(v*i[1]*(c/a)),L=o(i);return L.getContext("2d").drawImage(l,w,I,M,F,0,0,i[0],i[1]),L}function o(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}


/***/ }),

/***/ "5LEI":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
  \*******************************************************************************/
/*! exports provided: TiledDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function() { return r; });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__["DisplayObject"]{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(h,a,0,0,0,l,0,o,n,1),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["m"])(this.transforms.dvs,i.displayViewMat3,h)}}


/***/ }),

/***/ "6Az7":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js ***!
  \**************************************************************************/
/*! exports provided: BitmapTileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTileContainer", function() { return n; });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _BitmapTile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BitmapTile.js */ "lP2y");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "ZyIX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class n extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_4__["default"]{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(),s),[i,n]=this._tileInfoView.tileInfo.size;return new _BitmapTile_js__WEBPACK_IMPORTED_MODULE_1__["BitmapTile"](s,t[0],t[3],i,n)}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLDrawPhase"].MAP&&super.doRender(e)}}


/***/ }),

/***/ "Fkrg":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/BitmapTileLayerView2D.js ***!
  \****************************************************************************/
/*! exports provided: BitmapTileLayerView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTileLayerView2D", function() { return r; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../engine/BitmapTileContainer.js */ "6Az7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=r=>{let s=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_7__["BitmapTileContainer"](this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null==(e=this._bitmapView)||e.removeAllChildren()}};return s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};


/***/ }),

/***/ "ZyIX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
  \**************************************************************************/
/*! exports provided: default, sortByLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLevel", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLContainer.js */ "mgI5");
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brushes/WGLBrushInfo.js */ "b3VY");
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brushes/WGLBrushStencil.js */ "7F7D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(i),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const i=super.prepareRenderPasses(s);return i.push(s.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug")&&i.push(s.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(e){let r=1;for(const s of this.children)s.stencilRef=r++}}


/***/ }),

/***/ "bHqs":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js ***!
  \************************************************************************/
/*! exports provided: RefreshableLayerView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshableLayerView", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add(Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__["on"])((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"layer",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.mixins.RefreshableLayerView")],c),c};


/***/ }),

/***/ "iUxC":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.pixelBlock)?this.pixelBlock.height:0}render(e){const i=this.pixelBlock;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i))return;const l=this.filter({pixelBlock:i});if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(l.pixelBlock))return;const r=l.pixelBlock.getAsRGBA(),o=e.createImageData(l.pixelBlock.width,l.pixelBlock.height);o.data.set(r),e.putImageData(o,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}


/***/ }),

/***/ "lP2y":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTile.js ***!
  \*****************************************************************/
/*! exports provided: BitmapTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTile", function() { return r; });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bitmap.js */ "xzrc");
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/TiledDisplayObject.js */ "5LEI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__["TiledDisplayObject"]{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__["Bitmap"](n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t)}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t)}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}


/***/ }),

/***/ "xzrc":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
  \*************************************************************/
/*! exports provided: Bitmap, isImageSource, rasterize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageSource", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rasterize", function() { return p; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayObject.js */ "fEsP");
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageryBitmapSource.js */ "iUxC");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function m(t){return t&&"render"in t}function g(t){return t&&!("render"in t)}function p(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function f(t,e,i){const s={target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureWrapMode"].CLAMP_TO_EDGE};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["Texture"](t,s)}class v extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()}}setTransform(t){const n=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.transforms.dvs),[u,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,c=d*this.width,l=d*this.height,_=Math.PI*this.rotation/180;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(u,a)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c/2,l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(n,n,-_),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(-c/2,-l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c,l)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,t.displayViewMat3,n)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(e){var i;if(!this.stage)return null==(i=this._texture)||i.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=f(e,this.sourceWidth,this.sourceHeight):this._texture=f(e));const s=this.source;if(s){if(this._texture.resize(this.sourceWidth,this.sourceHeight),m(s))if(s instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__["default"]){const e=s.getRenderedRasterPixels();this._texture.setData(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)?e.renderedRasterPixels:null)}else this._texture.setData(p(s));else g(s)&&this._texture.setData(s);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ })

}]);
//# sourceMappingURL=default~layers-TileLayerView2D-js~layers-WMTSLayerView2D-js.js.map