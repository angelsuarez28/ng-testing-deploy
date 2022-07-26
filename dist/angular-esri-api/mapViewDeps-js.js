(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapViewDeps-js"],{

/***/ "/5M2":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/enums.js ***!
  \************************************************************************/
/*! exports provided: BucketType, DrawPhase, MemoryBufferType, ShaderProgramType, StyleUpdateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketType", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawPhase", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryBufferType", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderProgramType", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleUpdateType", function() { return L; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var E,I,N,T,L;!function(E){E[E.UNKNOWN=0]="UNKNOWN",E[E.FILL_VERTEX=1]="FILL_VERTEX",E[E.FILL_DD_VERTEX=2]="FILL_DD_VERTEX",E[E.FILL_INDEX=3]="FILL_INDEX",E[E.OUTLINE_VERTEX=4]="OUTLINE_VERTEX",E[E.OUTLINE_DD_VERTEX=5]="OUTLINE_DD_VERTEX",E[E.OUTLINE_INDEX=6]="OUTLINE_INDEX",E[E.LINE_VERTEX=7]="LINE_VERTEX",E[E.LINE_DD_VERTEX=8]="LINE_DD_VERTEX",E[E.LINE_INDEX=9]="LINE_INDEX",E[E.ICON_VERTEX=10]="ICON_VERTEX",E[E.ICON_DD_VERTEX=11]="ICON_DD_VERTEX",E[E.ICON_INDEX=12]="ICON_INDEX",E[E.TEXT_VERTEX=13]="TEXT_VERTEX",E[E.TEXT_DD_VERTEX=14]="TEXT_DD_VERTEX",E[E.TEXT_INDEX=15]="TEXT_INDEX",E[E.CIRCLE_VERTEX=16]="CIRCLE_VERTEX",E[E.CIRCLE_INDEX=17]="CIRCLE_INDEX"}(E||(E={})),function(E){E[E.FILL=1]="FILL",E[E.LINE=2]="LINE",E[E.SYMBOL=3]="SYMBOL",E[E.CIRCLE=4]="CIRCLE"}(I||(I={})),function(E){E[E.BACKGROUND=0]="BACKGROUND",E[E.OPAQUE=1]="OPAQUE",E[E.TRANSLUCENT=2]="TRANSLUCENT",E[E.SYMBOLS=3]="SYMBOLS",E[E.HITTEST=4]="HITTEST"}(N||(N={})),function(E){E[E.BACKGROUND=0]="BACKGROUND",E[E.FILL=1]="FILL",E[E.OUTLINE=2]="OUTLINE",E[E.LINE=3]="LINE",E[E.ICON=4]="ICON",E[E.CIRCLE=5]="CIRCLE",E[E.TEXT=6]="TEXT",E[E.TILEINFO=7]="TILEINFO"}(T||(T={})),function(E){E[E.PAINTER_CHANGED=0]="PAINTER_CHANGED",E[E.LAYOUT_CHANGED=1]="LAYOUT_CHANGED",E[E.LAYER_CHANGED=2]="LAYER_CHANGED",E[E.LAYER_REMOVED=3]="LAYER_REMOVED",E[E.SPRITES_CHANGED=4]="SPRITES_CHANGED"}(L||(L={}));


/***/ }),

/***/ "0Ht6":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return E; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "Lqtk");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Handles.js */ "r0DZ");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../engine/DisplayObject.js */ "fEsP");
/* harmony import */ var _engine_webgl_DefaultVertexAttributeLayouts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../engine/webgl/DefaultVertexAttributeLayouts.js */ "LlzU");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../engine/webgl/shaders/MagnifierPrograms.js */ "fUoV");
/* harmony import */ var _magnifier_resources_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../magnifier/resources.js */ "UBW5");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class E extends _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__["DisplayObject"]{constructor(){super(),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_1__["default"],this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles.destroy(),this._handles=null,this._disposeRenderResources(),this._resourcesTask&&(this._resourcesTask.abort(),this._resourcesTask=null)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__["init"])(e,"version",(()=>{this.visible=e.visible&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.position)&&e.size>0,this.requestRender()})),e.watch(["mask","overlay"],(()=>this._reloadResources())),e.watch("size",(()=>{this._disposeRenderResources(),this.requestRender()}))])}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_7__["c"])()}}doRender(e){var r;const i=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_10__["WGLDrawPhase"].MAP||!this._canRender())return;this._updateResources(e);const a=this._magnifier;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(a.position))return;const o=e.pixelRatio,n=a.size*o,l=1/a.factor,h=Math.ceil(l*n);this._readbackTexture.resize(h,h);const{size:m}=e.state,u=o*m[0],d=o*m[1],_=.5*h,p=.5*h,f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(o*a.position.x,_,u-_-1),T=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(d-o*a.position.y,p,d-p-1);i.setBlendingEnabled(!0);const b=f-_,x=T-p,R=this._readbackTexture;i.bindTexture(R,0),i.gl.copyTexImage2D(R.descriptor.target,0,R.descriptor.pixelFormat,b,x,h,h,0);const y=null==(r=this.background)?void 0:r.color,k=y?[y.a*y.r/255,y.a*y.g/255,y.a*y.b/255,y.a]:[1,1,1,1],v=(f+a.offset.x*o)/u*2-1,A=(T-a.offset.y*o)/d*2-1,E=n/u*2,w=n/d*2,j=this._program;i.bindVAO(this._vertexArrayObject),i.bindTexture(this._overlayTexture,6),i.bindTexture(this._maskTexture,7),i.useProgram(j),j.setUniform4fv("u_background",k),j.setUniform1i("u_readbackTexture",0),j.setUniform1i("u_overlayTexture",6),j.setUniform1i("u_maskTexture",7),j.setUniform4f("u_drawPos",v,A,E,w),j.setUniform1i("u_maskEnabled",a.maskEnabled?1:0),j.setUniform1i("u_overlayEnabled",a.overlayEnabled?1:0),i.setStencilTestEnabled(!1),i.setColorMask(!0,!0,!0,!0),i.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PrimitiveType"].TRIANGLE_STRIP,0,4),i.bindVAO()}_canRender(){return this.mask&&this.overlay&&null!=this._magnifier}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._magnifier)?this._magnifier.maskUrl:null,t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._magnifier)?this._magnifier.overlayUrl:null;this._resourcesTask=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createTask"])((async a=>{const o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(r)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(t)?Object(_magnifier_resources_js__WEBPACK_IMPORTED_MODULE_12__["loadMagnifierResources"])(a):null,n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(r)?Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,{responseType:"image",signal:a}).then((e=>e.data)):o.then((e=>e.mask)),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t)?Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",signal:a}).then((e=>e.data)):o.then((e=>e.overlay)),[h,m]=await Promise.all([n,l]);this.mask=h,this.overlay=m,this._disposeRenderResources(),this.requestRender()}))}_disposeRenderResources(){this._readbackTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._readbackTexture),this._overlayTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._overlayTexture),this._maskTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._maskTexture),this._vertexArrayObject=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._vertexArrayObject),this._program=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const r=e.context;this._resourcePixelRatio=e.pixelRatio;const t=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=Object(_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_11__["createMagnifierProgram"])(r);const s=new Uint16Array([0,1,0,0,1,1,1,0]),i=_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_11__["magnifierProgramTemplate"].attributes;this._vertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__["VertexArrayObject"](r,i,_engine_webgl_DefaultVertexAttributeLayouts_js__WEBPACK_IMPORTED_MODULE_9__["Pos2us"],{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_13__["BufferObject"].createVertex(r,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["Usage"].STATIC_DRAW,s)}),this.overlay.width=t,this.overlay.height=t,this._overlayTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__["Texture"](r,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureSamplingMode"].NEAREST,flipped:!0,preMultiplyAlpha:!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["isSVG"])(this.overlay.src)||!e.context.driverTest.svgAlwaysPremultipliesAlpha},this.overlay),this.mask.width=t,this.mask.height=t,this._maskTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__["Texture"](r,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelFormat"].ALPHA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelFormat"].ALPHA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureSamplingMode"].NEAREST,flipped:!0},this.mask);const a=1/this._magnifier.factor;this._readbackTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__["Texture"](r,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureSamplingMode"].LINEAR,flipped:!1,width:Math.ceil(a*t),height:Math.ceil(a*t)})}}


/***/ }),

/***/ "0O54":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BitBlitRenderer.js */ "bfVh");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/* harmony import */ var _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight/HighlightGradient.js */ "ygGI");
/* harmony import */ var _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight/HighlightRenderer.js */ "aK+o");
/* harmony import */ var _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight/HighlightSurfaces.js */ "26zf");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const l=4,d=4/l;class n extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],this._hlGradient=new _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__["default"],this._width=void 0,this._height=void 0,this._hlSurfaces=new _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__["default"],this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__["BitBlitRenderer"]}dispose(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null}bind(e){const{context:t,painter:s}=e,{width:i,height:h}=t.getViewport(),r=s.getFbos(i,h).effect0;this.setup(e,i,h),t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,s){this._width=t,this._height=s;const i=t%l,h=s%l;t+=i<l/2?-i:l-i,s+=h<l/2?-h:l-h,this._adjustedWidth=t,this._adjustedHeight=s,this._boundFBO=e.getBoundFramebufferObject();const r=Math.round(t*d),n=Math.round(s*d);this._hlRenderer.setup(e,r,n),this._hlSurfaces.setup(e,r,n)}draw({context:e}){const t=e.getBoundFramebufferObject();e.setViewport(0,0,this._adjustedWidth*d,this._adjustedHeight*d),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setStencilTestEnabled(!1),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(e,t.colorTexture,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureSamplingMode"].NEAREST,1),e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!0),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null}setHighlightOptions(e){this._hlGradient.setHighlightOptions(e)}}


/***/ }),

/***/ "1agI":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js ***!
  \*************************************************************************************/
/*! exports provided: CollisionBitsetGrid, CollisionGrid, HAS_COLLISION, NONE, OUTSIDE_EXTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionBitsetGrid", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionGrid", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_COLLISION", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NONE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTSIDE_EXTENT", function() { return r; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/features/support/StaticBitSet.js */ "feGD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=2,o=1,h=0,r=1,n=2;class c{constructor(t,s){this.width=t,this.height=s;const i=Math.ceil(t/o),h=Math.ceil(s/o);this._cols=i,this._rows=h,this._cells=_layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__["StaticBitSet"].create(i*h)}insertMetrics(t){const s=this._hasCollision(t);return s===h&&this._markMetrics(t),s}getCellId(t,s){return t+s*this._cols}has(t){return this._cells.has(t)}hasRange(t,s){return this._cells.hasRange(t,s)}set(t){this._cells.set(t)}setRange(t,s){this._cells.setRange(t,s)}_hasCollision(t){const s=t.id;let e=0,o=0;t.save();do{const s=t.boundsCount;e+=s;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),h=t.boundsComputedAnchorY(e),c=t.boundsWidth(e)+i,l=t.boundsHeight(e)+i;switch(this._collide(s,h,c,l)){case n:return n;case r:o++}}}while(t.peekId()===s&&t.next());return t.restore(),e===o?r:h}_collide(s,e,i,c){const l=s-i/2,_=e-c/2,a=l+i,u=_+c;if(a<0||u<0||l>this.width||_>this.height)return r;const d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(l/o),0,this._cols),g=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(_/o),0,this._rows),f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(a/o),0,this._cols),m=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(u/o),0,this._rows);for(let t=g;t<=m;t++)for(let s=d;s<=f;s++){const e=this.getCellId(s,t);if(this.has(e))return n}return h}_mark(s,e,i,h){const r=s-i/2,n=e-h/2,c=r+i,l=n+h,_=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(r/o),0,this._cols),a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(n/o),0,this._rows),u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(c/o),0,this._cols),d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(l/o),0,this._rows);for(let t=a;t<=d;t++)for(let s=_;s<=u;s++){const e=this.getCellId(s,t);this.set(e)}return!1}_markMetrics(t){const s=t.id;do{const s=t.boundsCount;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),o=t.boundsComputedAnchorY(e),h=t.boundsWidth(e)+i,r=t.boundsHeight(e)+i;this._mark(s,o,h,r)}}while(t.peekId()===s&&t.next())}}class l{constructor(t,e=2){this._bucketSize=t,this._rowsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]/t,this._colsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]/t,this._elementsPerBucket=e,this._grid=this._initGrid()}checkOverlap(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);return e<0||e>=this._rowsLength||i<0||i>=this._colsLength||this._grid[i*this._colsLength+e]>=this._elementsPerBucket}markUsed(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);this._grid[i*this._colsLength+e]+=1}reset(){this._grid=this._initGrid()}_initGrid(){return new Uint8Array(this._rowsLength*this._colsLength)}}


/***/ }),

/***/ "1dih":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return T; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../viewpointUtils.js */ "qYtE");
/* harmony import */ var _ZoomBox_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ZoomBox.js */ "qnLi");
/* harmony import */ var _actions_Pan_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/Pan.js */ "JlMO");
/* harmony import */ var _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/Pinch.js */ "cwtj");
/* harmony import */ var _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/Rotate.js */ "KOSm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const l=10,w=1,v=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]}),d=[0,0],g=250;let _=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(t){super(t),this._endTimer=null,this.animationManager=null}initialize(){this.pan=new _actions_Pan_js__WEBPACK_IMPORTED_MODULE_11__["default"]({navigation:this}),this.rotate=new _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_13__["default"]({navigation:this}),this.pinch=new _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_12__["default"]({navigation:this}),this.zoomBox=new _ZoomBox_js__WEBPACK_IMPORTED_MODULE_10__["default"]({view:this.view,navigation:this})}destroy(){this.pan.destroy(),this.rotate.destroy(),this.pinch.destroy(),this.zoomBox.destroy(),this.pan=this.rotate=this.pinch=this.zoomBox=this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(g)}async zoom(t,i=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(i):this.zoomOut(i);this.setViewpoint(i,t,0,[0,0])}async zoomIn(t){const i=this.view,o=i.constraints.snapToNextScale(i.scale);return this._zoomToScale(o,t)}async zoomOut(t){const i=this.view,o=i.constraints.snapToPreviousScale(i.scale);return this._zoomToScale(o,t)}setViewpoint(t,i,o,n){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,i,o,n),this.end()}setViewpointImmediate(t,i=0,o=[0,0],n=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,t,i,o)}continousRotateClockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["rotateBy"])(t,t,-w)}))}continousRotateCounterclockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["rotateBy"])(t,t,w)}))}resetRotation(){this.view.rotation=0}continousPanLeft(){this._continuousPan([-l,0])}continousPanRight(){this._continuousPan([l,0])}continousPanUp(){this._continuousPan([0,l])}continousPanDown(){this._continuousPan([0,-l])}stop(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(t){const i=this.view.viewpoint;this.animationManager.animateContinous(i,(i=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["translateBy"])(i,i,t),this.view.constraints.constrainByGeometry(i)}))}_startTimer(t){return null!==this._endTimer||(this._endTimer=setTimeout((()=>{this._endTimer=null;const t=performance.now()-this._lastEventTimestamp;t<g?this._endTimer=this._startTimer(t):this._set("interacting",!1)}),t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:i,right:o,top:n,bottom:e}}=this.view;return d[0]=.5*(t[0]-o+i),d[1]=.5*(t[1]-e+n),d}async _zoomToScale(t,i=this._getDefaultAnchor()){const{view:o}=this,{constraints:n,scale:e,viewpoint:s,size:a,padding:r}=o,h=n.canZoomInTo(t),m=n.canZoomOutTo(t);if(!(t<e&&!h||t>e&&!m))return Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["padAndScaleAndRotateBy"])(v,s,t/e,0,i,a,r),n.constrainByGeometry(v),o.goTo(v,{animate:!0})}_scaleRotateTranslateViewpoint(t,i,o,n,e){const{view:s}=this,{size:a,padding:h,constraints:m,scale:p,viewpoint:u}=s,l=p*o,w=m.canZoomInTo(l),v=m.canZoomOutTo(l);return(o<1&&!w||o>1&&!v)&&(o=1),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["translateBy"])(u,u,e),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["padAndScaleAndRotateBy"])(t,u,o,n,i,a,h),m.constrainByGeometry(t)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"animationManager",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Boolean,readOnly:!0})],_.prototype,"interacting",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"pan",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"pinch",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"rotate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"zoomBox",void 0),_=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.navigation.MapViewNavigation")],_);const T=_;


/***/ }),

/***/ "26zf":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function l(l,a,_){const c=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["Texture"](l,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureWrapMode"].CLAMP_TO_EDGE,width:a,height:_,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureSamplingMode"].LINEAR});return[c,new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__["FramebufferObject"](l,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DepthStencilTargetType"].STENCIL_RENDER_BUFFER},c)]}class a{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)}_initialize(e,s,r){this._width=s,this._height=r;const[t,i]=l(e,s,r),[h,o]=l(e,s,r);this._resources={sharedBlur1Tex:t,sharedBlur1Fbo:i,sharedBlur2Tex:h,sharedBlur2Fbo:o}}setup(e,s,r){!this._resources||this._width===s&&this._height===r||this.dispose(),this._resources||this._initialize(e,s,r)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}}


/***/ }),

/***/ "297m":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js ***!
  \*************************************************************************************/
/*! exports provided: createProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramTemplate", function() { return o; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "1F90");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e=r=>{let t="";t+=r[0].toUpperCase();for(let e=1;e<r.length;e++){const s=r[e];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},s=r=>{const s={};for(const t in r){s[e(t)]=r[t]}return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])(s)},o=(t,e,o,n)=>{const a=t+t.substring(t.lastIndexOf("/")),p=e+e.substring(e.lastIndexOf("/"));return{attributes:o,shaders:{vertexShader:s(n)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])(`${a}.vert`),fragmentShader:s(n)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])(`${p}.frag`)}}};


/***/ }),

/***/ "3wQP":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js ***!
  \************************************************************************************/
/*! exports provided: stencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencil", function() { return r; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};


/***/ }),

/***/ "60EV":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js ***!
  \**********************************************************************************/
/*! exports provided: HittestEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HittestEffect", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class l extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fbo)&&this._fbo.dispose()}createOptions({pixelRatio:t},e,s=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["HITTEST_RADIUS"]){if(!e.length)return null;const o=e.shift(),n=o.point.x,r=o.point.y;return this._outstanding=o,{type:"hittest",distance:s*t,position:[n,r]}}bind(t){const{context:i,attributeView:o}=t;if(!o.size)return;const n=o.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["ATTRIBUTE_DATA_GPGPU"]);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(n))return;const r=n.getFBO(i);i.setViewport(0,0,o.size,o.size),i.bindFramebuffer(r),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT)}unbind(t){}draw(t){const{context:i,attributeView:o}=t,l=o.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["ATTRIBUTE_DATA_GPGPU"]);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._outstanding))return;const u=this._outstanding.resolver;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(l))return u.resolve([]),void(this._outstanding=null);const c=l.getFBO(i),h=new Uint8Array(c.width*c.height*4);c.readPixels(0,0,c.width,c.height,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelType"].UNSIGNED_BYTE,h);const a=[];for(let e=0;e<h.length;e+=4)h[e]&&a.push(e/4);this._outstanding=null,u.resolve(a)}}


/***/ }),

/***/ "6U0y":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testSamplerPrecision.js ***!
  \***********************************************************************/
/*! exports provided: testSamplerPrecision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSamplerPrecision", function() { return h; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferObject.js */ "fOQB");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FramebufferObject.js */ "0meK");
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Texture.js */ "of9L");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexArrayObject.js */ "D6bk");
/* harmony import */ var _VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const w=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.WebGLDriverTest");function h(e){const h=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["FramebufferObject"](e,{colorTarget:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TargetType"].TEXTURE,depthStencilTarget:_enums_js__WEBPACK_IMPORTED_MODULE_2__["DepthStencilTargetType"].NONE},{target:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureType"].TEXTURE_2D,wrapMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureWrapMode"].CLAMP_TO_EDGE,pixelFormat:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,dataType:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,samplingMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].NEAREST,width:1,height:1}),T="\nprecision highp float;\nattribute vec2 a_pos;\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n",_="\nprecision highp float;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",v=new Uint8Array(4),b=_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["BufferObject"].createVertex(e,_enums_js__WEBPACK_IMPORTED_MODULE_2__["Usage"].STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),E=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["VertexArrayObject"](e,new Map([["a_position",0]]),{geometry:[new _VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_6__["VertexElementDescriptor"]("a_position",2,_enums_js__WEBPACK_IMPORTED_MODULE_2__["DataType"].SHORT,0,4)]},{geometry:b}),A=e.programCache.acquire(T,_,new Map([["a_pos",0]]));e.useProgram(A);const x=new _Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](e,{target:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureType"].TEXTURE_2D,wrapMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureWrapMode"].CLAMP_TO_EDGE,pixelFormat:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,dataType:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,samplingMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].NEAREST,width:1,height:1},new Uint8Array([2,255,0,0]));A.setUniform1i("u_texture",0),e.bindTexture(x,0);const y=e.getBoundFramebufferObject();e.bindFramebuffer(h),e.useProgram(A);const{x:D,y:R,width:j,height:N}=e.getViewport();e.setViewport(0,0,1,1),e.bindVAO(E),e.drawArrays(_enums_js__WEBPACK_IMPORTED_MODULE_2__["PrimitiveType"].TRIANGLE_STRIP,0,4),e.setViewport(D,R,j,N),h.readPixels(0,0,1,1,_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,v),A.dispose(),E.dispose(!1),b.dispose(),h.dispose();const B=255!==v[0]||255!==v[1]||255!==v[2]||255!==v[3];return B&&w.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${v[0]}.${v[1]}.${v[2]}.${v[3]}]`),e.bindFramebuffer(y),B}


/***/ }),

/***/ "6c4E":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/LoseContext.js ***!
  \***************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,t){const n=t.loseContext&&e.getExtension("WEBGL_lose_context");return n?{loseRenderingContext:()=>n.loseContext()}:null}


/***/ }),

/***/ "6ldq":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/Programs.js ***!
  \***********************************************************************************/
/*! exports provided: background, circle, fill, icon, line, outline, text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outline", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return v; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "QSUW");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "1F90");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=e=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])({ID:e.id,PATTERN:e.pattern}),a={shaders:r=>({vertexShader:t(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("background/background.vert"),fragmentShader:t(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("background/background.frag")})},d=e=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])({ID:e.id}),i={shaders:r=>({vertexShader:d(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("circle/circle.vert"),fragmentShader:d(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("circle/circle.frag")})},n=e=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])({ID:e.id,PATTERN:e.pattern}),l={shaders:r=>({vertexShader:n(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("fill/fill.vert"),fragmentShader:n(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("fill/fill.frag")})},s=e=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])({ID:e.id}),f={shaders:r=>({vertexShader:s(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("outline/outline.vert"),fragmentShader:s(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("outline/outline.frag")})},h=e=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])({ID:e.id,SDF:e.sdf}),o={shaders:r=>({vertexShader:h(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("icon/icon.vert"),fragmentShader:h(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("icon/icon.frag")})},g=e=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])({ID:e.id,PATTERN:e.pattern,SDF:e.sdf}),c={shaders:r=>({vertexShader:g(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("line/line.vert"),fragmentShader:g(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("line/line.frag")})},S=e=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])({ID:e.id}),v={shaders:r=>({vertexShader:S(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("text/text.vert"),fragmentShader:S(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("text/text.frag")})};


/***/ }),

/***/ "AJFd":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/AllocationTracer.js ***!
  \*********************************************************************/
/*! exports provided: AllocationTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocationTracer", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o{constructor(o){this._allocations=new Map,o?Error.stackTraceLimit=1/0:(this.add=()=>{},this.remove=()=>{})}add(o){this._allocations.set(o,(new Error).stack)}remove(o){this._allocations.delete(o)}print(){if(this._allocations.size>0){console.log(`${this._allocations.size} live object allocations:`);const o=new Map;this._allocations.forEach((s=>{var t;o.set(s,(null!=(t=o.get(s))?t:0)+1)})),o.forEach(((o,s)=>{const t=s.split("\n");t.shift(),t.shift(),console.log(`${o}: ${t.shift()}`),t.forEach((o=>console.log("   ",o)))}))}}}


/***/ }),

/***/ "B2cn":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Blur.js ***!
  \*****************************************************************************************/
/*! exports provided: Blur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blur", function() { return b; });
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../VertexStream.js */ "gjrC");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const d=[1,0],_=[0,1];class b{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(t,r,s){const{context:i}=t,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(t),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_0__["default"](i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(t,r,n):this._radialBlur(t,r),o.unbind()}_gaussianBlur(e,r,s){const{context:i,state:a,painter:n,pixelRatio:o}=e,{size:u}=a,{materialManager:l}=n,b=this._programDesc,p=this._quad,c=[Math.round(o*u[0]),Math.round(o*u[1])],h=this._blurFBO,g=l.getProgram(e,b.gaussianBlur,[{name:"radius",value:Math.ceil(s)}]);i.useProgram(g),i.setBlendingEnabled(!1),i.bindFramebuffer(h),i.bindTexture(r.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",d),g.setUniform1f("u_sigma",s),p.draw(),i.bindFramebuffer(r),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.bindTexture(h.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",_),p.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA),i.setStencilTestEnabled(!0)}_radialBlur(e,r){const{context:s,painter:i}=e,{materialManager:a}=i,n=this._programDesc,o=this._quad,u=this._blurFBO;s.bindFramebuffer(u);const l=a.getProgram(e,n.radialBlur);s.useProgram(l),s.setBlendingEnabled(!1),s.bindTexture(r.colorTexture,4),l.setUniform1i("u_colorTexture",4),o.draw(),s.bindFramebuffer(r),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setBlendingEnabled(!0);const d=a.getProgram(e,n.blit);s.useProgram(d),s.bindTexture(u.colorTexture,5),d.setUniform1i("u_texture",5),s.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA),o.draw()}_createOrResizeResources(e){const{context:t,state:d,pixelRatio:_}=e,{size:b}=d,p=Math.round(_*b[0]),c=Math.round(_*b[1]);this._blurFBO&&this._size[0]===p&&this._size[1]===c||(this._size[0]=p,this._size[1]=c,this._blurFBO?this._blurFBO.resize(p,c):this._blurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["FramebufferObject"](t,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DepthStencilTargetType"].NONE,width:p,height:c},{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].LINEAR,flipped:!1,width:p,height:c}))}}


/***/ }),

/***/ "BaZm":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RectangleBinPack.js */ "rhr1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=256,c=t=>Math.floor(t/256);function o(t){const e=new Set;for(const i of t)e.add(c(i));return e}function l(t,i,h){return t.has(i)||t.set(i,h().then((()=>{t.delete(i)})).catch((h=>{t.delete(i),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfNotAbortError"])(h)}))),t.get(i)}const g=t=>({rect:new _Rect_js__WEBPACK_IMPORTED_MODULE_2__["default"](0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:t,sdf:!0});class _{constructor(t,e,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=e,this._glyphSource=i,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_3__["default"](t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph()}dispose(){this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0,this._glyphData.length=0}_initDecorationGlyph(){const t=[117,149,181,207,207,181,149,117],e=[];for(let h=0;h<t.length;h++){const i=t[h];for(let t=0;t<11;t++)e.push(i)}const i={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(e)};this._recordGlyph(i)}async getGlyphItems(t,e,i){const h=this._getGlyphCache(t);return await this._fetchRanges(t,e,i),e.map((e=>this._getMosaicItem(h,t,e)))}bind(t,e,i,h){const s=this._getTexture(t,i);s.setSamplingMode(e),this._dirties[i]&&(s.setData(this._glyphData[i]),this._dirties[i]=!1),t.bindTexture(s,h)}_getGlyphCache(t){return this._glyphCache[t]||(this._glyphCache[t]={}),this._glyphCache[t]}_getTexture(t,e){return this._textures[e]||(this._textures[e]=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["Texture"](t,{pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["PixelFormat"].ALPHA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["PixelType"].UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._textures[e]}_invalidate(){this._dirties[this._currentPage]=!0}async _fetchRanges(t,e,i){const h=o(e),s=[];h.forEach((e=>{s.push(this._fetchRange(t,e,i))})),await Promise.all(s)}async _fetchRange(t,e,i){if(e>n)return null;const h=t+e;return l(this._rangePromises,h,(()=>this._glyphSource.getRange(t,e,i)))}_getMosaicItem(t,e,i){if(!t[i]){const h=this._glyphSource.getGlyph(e,i);if(!h||!h.metrics)return g(i);const s=this._recordGlyph(h),r=this._currentPage,a=h.metrics;t[i]={rect:s,page:r,metrics:a,code:i,sdf:!0},this._invalidate()}return t[i]}_recordGlyph(e){const s=e.metrics;let r;if(0===s.width)r=new _Rect_js__WEBPACK_IMPORTED_MODULE_2__["default"](0,0,0,0);else{const i=3,a=s.width+2*i,n=s.height+2*i;r=this._binPack.allocate(a,n),r.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.width-4,this.height-4),r=this._binPack.allocate(a,n));const c=this._glyphData[this._currentPage],o=e.bitmap;let l,g;if(o)for(let t=0;t<n;t++){l=a*t,g=this.width*(r.y+t)+r.x;for(let t=0;t<a;t++)c[g+t]=o[l+t]}Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-glyph-debug")&&this._showDebugPage(c)}return r}_showDebugPage(t){const e=document.createElement("canvas"),i=e.getContext("2d"),h=new ImageData(this.width,this.height),s=h.data;e.width=this.width,e.height=this.height,e.style.border="1px solid black";for(let r=0;r<t.length;++r)s[4*r+0]=t[r],s[4*r+1]=0,s[4*r+2]=0,s[4*r+3]=255;i.putImageData(h,0,0),document.body.appendChild(e)}}


/***/ }),

/***/ "C9cz":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffectVTL.js ***!
  \*************************************************************************************/
/*! exports provided: HittestEffectVTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HittestEffectVTL", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class i extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0}dispose(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fbo)&&this._fbo.dispose()}bind({context:t,painter:e}){const{width:s,height:o}=t.getViewport();this._boundFBO=t.getBoundFramebufferObject();const r=e.getFbos(s,o).effect0;t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind({context:t}){t.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw({context:t,state:s,pixelRatio:i},n,f=2*_definitions_js__WEBPACK_IMPORTED_MODULE_1__["HITTEST_RADIUS"]){const a=t.getBoundFramebufferObject(),h=s.size[1]*i,u=Math.round(f*i),b=u/2,c=u/2;this._ensureBuffer(u),n.forEach(((t,e)=>{const s=new Map,f=Math.floor(e.x*i-u/2),l=Math.floor(h-e.y*i-u/2);a.readPixels(f,l,u,u,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelType"].UNSIGNED_BYTE,this._buf);for(let o=0;o<this._buf32.length;o++){const t=this._buf32[o];if(4294967295!==t&&0!==t){const e=o%u,r=u-Math.floor(o/u),i=(b-e)*(b-e)+(c-r)*(c-r),n=s.has(t)?s.get(t):4294967295;s.set(t,Math.min(i,n))}}const d=Array.from(s).sort(((t,e)=>t[1]-e[1])).map((t=>t[0]));t.resolve(d),n.delete(e)}))}_ensureBuffer(t){this._lastSize!==t&&(this._lastSize=t,this._buf=new Uint8Array(4*t*t),this._buf32=new Uint32Array(this._buf.buffer))}}


/***/ }),

/***/ "Coxz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js ***!
  \**************************************************************************************************/
/*! exports provided: EffectManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectManager", function() { return i; });
/* harmony import */ var _Bloom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bloom.js */ "mxcV");
/* harmony import */ var _Blur_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blur.js */ "B2cn");
/* harmony import */ var _Colorize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Colorize.js */ "P3Vg");
/* harmony import */ var _DropShadow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropShadow.js */ "eylR");
/* harmony import */ var _Opacity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Opacity.js */ "T/wP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function c(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e;default:return"colorize"}}const f={colorize:()=>new _Colorize_js__WEBPACK_IMPORTED_MODULE_2__["Colorize"],blur:()=>new _Blur_js__WEBPACK_IMPORTED_MODULE_1__["Blur"],bloom:()=>new _Bloom_js__WEBPACK_IMPORTED_MODULE_0__["Bloom"],opacity:()=>new _Opacity_js__WEBPACK_IMPORTED_MODULE_4__["Opacity"],"drop-shadow":()=>new _DropShadow_js__WEBPACK_IMPORTED_MODULE_3__["DropShadow"]};class i{constructor(e){this._requestRender=e,this._effectMap=new Map}dispose(){this._requestRender&&(this._requestRender=null),this._effectMap.forEach((e=>e.dispose())),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||0===e.length)return[];const t=[];for(const o of e){const e=c(o.type);let s=this._effectMap.get(e);s||(s=f[e](),this._effectMap.set(e,s)),t.push({postProcessingEffect:s,effect:o})}return t}}


/***/ }),

/***/ "DKFY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js ***!
  \********************************************************************************/
/*! exports provided: FilteredFiniteDifference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredFiniteDifference", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t){this.gain=t}update(t){if(this.hasLastValue){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}get hasLastValue(){return void 0!==this.lastValue}get hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(t){return t-this.lastValue}_updateDelta(t){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*t:this.filteredDelta=t}}


/***/ }),

/***/ "DRKG":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js ***!
  \*****************************************************************************/
/*! exports provided: keyFromSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFromSymbol", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`;case"esriSLS":return`${e.style}.${e.cap}`;case"esriSFS":return`${e.style}`;case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`;default:return"mosaicHash"in e?e.mosaicHash:JSON.stringify(e)}}


/***/ }),

/***/ "EdjT":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js ***!
  \*********************************************************************************/
/*! exports provided: RotationMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotationMomentumEstimator", function() { return a; });
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MomentumEstimator.js */ "VfAO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class a extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__["MomentumEstimator"]{constructor(t=3,a=.01,s=.95,e=12){super(t,a,s,e)}add(t,a){if(this.value.hasLastValue){const a=this.value.lastValue;let s=t-a;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=a+s}super.add(t,a)}}


/***/ }),

/***/ "FGzj":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return h; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/MaterialPrograms.js */ "297m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a=r=>r===_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HITTEST||r===_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL_ALPHA,s=r=>(a(r)?1:0)|(r===_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT?2:0),o=({rendererInfo:e,drawPhase:t},a,o,i)=>`${a.getVariationHash()}-${i.join(".")}-${s(t)}-${e.getVariationHash()}-${Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&o.join(".")}`,i=(t,s,o,i)=>{const h=i.reduce(((r,e)=>({...r,[e]:t.context.driverTest[e]})),{}),n={...s.getVariation(),...t.rendererInfo.getVariation(),highlight:t.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,id:a(t.drawPhase),...h};if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o))for(const r of o)n[r]=!0;return n};class h{constructor(r){this._rctx=r,this._programByKey=new Map}dispose(){this._programByKey.forEach((r=>r.dispose())),this._programByKey.clear()}getProgram(r,e,a=[],s=[]){const o=e.vsPath+"."+e.fsPath+JSON.stringify(a)+s.join(".");if(this._programByKey.has(o))return this._programByKey.get(o);const i=s.reduce(((e,t)=>({...e,[t]:r.context.driverTest[t]})),{}),h={...a.map((r=>"string"==typeof r?{name:r,value:!0}:r)).reduce(((r,e)=>({...r,[e.name]:e.value})),{}),...i},{vsPath:n,fsPath:g,attributes:m}=e,c=Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_2__["createProgramTemplate"])(n,g,m,h),y=this._rctx.programCache.acquire(c.shaders.vertexShader,c.shaders.fragmentShader,c.attributes);if(!y)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(o,y),y}getMaterialProgram(r,e,a,s,h,n=["ignoresSamplerPrecision"]){const g=o(r,e,h,n);if(this._programByKey.has(g))return this._programByKey.get(g);const m=i(r,e,h,n),c=Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_2__["createProgramTemplate"])(a,a,s,m),y=this._rctx.programCache.acquire(c.shaders.vertexShader,c.shaders.fragmentShader,c.attributes);if(!y)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(g,y),y}}


/***/ }),

/***/ "FrEu":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js ***!
  \***************************************************************************/
/*! exports provided: Effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(){this.name=this.constructor.name}createOptions(t,r){return null}}


/***/ }),

/***/ "G+vY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js ***!
  \********************************************************************************/
/*! exports provided: default, getGIFSize, isAnimatedGIF, isGIF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFSize", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedGIF", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGIF", function() { return r; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={GCExt:249,COMMENT:254,APPExt:255,UNKNOWN:1,IMAGE:44,EOF:59,EXT:33};function r(t){if(!t||0===t.byteLength)return!1;const e=t.constructor===Uint8Array?t:new Uint8Array(t);return 71===e[0]&&73===e[1]&&70===e[2]&&56===e[3]}function h(t){const e=new Uint8ClampedArray(t);let s=6;return[e[s++]+(e[s++]<<8),e[s++]+(e[s++]<<8)]}function o(t){if(!t||0===t.byteLength)return!1;const e=new Uint8Array(t);if(!r(e))return!1;let s=0;for(let i=0,a=e.length-9;i<a;++i)if(0===e[i]&&33===e[i+1]&&249===e[i+2]&&4===e[i+3]&&0===e[i+8]&&(44===e[i+9]||33===e[i+9])&&(s++,s>1))return!0;return!1}class n{constructor(){this.paused=!1,this.playing=!1,this.waitTillDone=!0,this.loading=!1,this.firstFrameOnly=!1,this.frames=[],this.comment="",this.length=0,this.currentFrameNumber=0,this.frameCount=0,this.playSpeed=1,this.lastFrame=null,this.playOnLoad=!0,this.complete=!1,this.interlaceOffsets=[0,4,2,1],this.interlaceSteps=[8,8,4,2],this._lastUsedFrame=-1}static async create(s,i){const a=new n;try{await a._load(s,i)}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(r))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${r.message}`)}return a}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,s){t.bindTexture(e,s);const i=this.frameChanged();if(i){const t=this.currentFrame,s=t.frameData;e.updateData(0,0,0,t.width,t.height,s),this.updateUsedFrame()}return i}seekFrame(t){clearTimeout(this.timerID),this.currentFrameNumber=t%this.frames.length,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}seek(t){clearTimeout(this.timerID),t<0&&(t=0),t*=1e3,t%=this.length;let e=0;for(;t>this.frames[e].time+this.frames[e].delay&&e<this.frames.length;)e+=1;this.currentFrameNumber=e,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(s,i){try{this.loading=!0,await this._parse(s,i),this.loading=!1,this.play()}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(a))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse gif!")}}_parse(t,e){const s=new l(t);s.pos+=6,this.width=s.data[s.pos++]+(s.data[s.pos++]<<8),this.height=s.data[s.pos++]+(s.data[s.pos++]<<8);const i=s.data[s.pos++];return this.globalColourCount=1<<1+(7&i),s.pos++,s.pos++,128&i&&(this.globalColourTable=this._parseColourTable(this.globalColourCount,s)),new Promise(((t,i)=>{setTimeout((()=>this._parseBlock(s,t,i,e)),0)}))}async _parseBlock(t,e,r,h){if(h&&h.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAborted"])(h.signal))return void r(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAbortError"])());const o=t.data[t.pos++];if(o===a.IMAGE){if(this._parseImg(t),this.firstFrameOnly)return this._finishedLoading(),void e()}else{if(o===a.EOF)return this._finishedLoading(),void e();this._parseExt(t)}"function"==typeof this.onprogress&&this.onprogress({bytesRead:t.pos,totalBytes:t.data.length,frame:this.frames.length}),setTimeout((()=>this._parseBlock(t,e,r,h)),0)}_parseColourTable(t,e){const s=[];for(let i=0;i<t;i++)s.push([e.data[e.pos++],e.data[e.pos++],e.data[e.pos++]]);return s}_parseImg(t){const e=t=>{const e=this.pixelBufSize/t;this.interlacedBufSize!==this.pixelBufSize&&(this.deinterlaceBuf=new Uint8Array(this.pixelBufSize),this.interlacedBufSize=this.pixelBufSize);let s=0;for(let i=0;i<4;i++)for(let a=this.interlaceOffsets[i];a<e;a+=this.interlaceSteps[i])this.deinterlaceBuf.set(this.pixelBuf.subarray(s,s+t),a*t),s+=t},s={};this.frames.push(s),s.disposalMethod=this.disposalMethod,s.time=this.length,s.delay=10*this.delayTime,this.length+=s.delay,this.transparencyGiven?s.transparencyIndex=this.transparencyIndex:s.transparencyIndex=void 0,s.leftPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.topPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.width=t.data[t.pos++]+(t.data[t.pos++]<<8),s.height=t.data[t.pos++]+(t.data[t.pos++]<<8);const i=t.data[t.pos++];s.localColourTableFlag=!!(128&i),s.localColourTableFlag&&(s.localColourTable=this._parseColourTable(1<<1+(7&i),t)),this.pixelBufSize!==s.width*s.height&&(this.pixelBuf=new Uint8Array(s.width*s.height),this.pixelBufSize=s.width*s.height),this._lzwDecode(t.data[t.pos++],t.readSubBlocksB()),64&i?(s.interlaced=!0,e(s.width)):s.interlaced=!1,this._processFrame(s)}_lzwDecode(t,e){let s,i,a,r,h,o,n,l,d;a=i=0;let p=[];const u=1<<t,m=u+1;for(r=t+1,d=!1;!d;){for(o=h,h=0,s=0;s<r;s++)e[a>>3]&1<<(7&a)&&(h|=1<<s),a++;if(h===u){for(p=[],r=t+1,s=0;s<u;s++)p[s]=[s];p[u]=[],p[m]=null}else{if(h===m)return void(d=!0);for(h>=p.length?p.push(p[o].concat(p[o][0])):o!==u&&p.push(p[o].concat(p[h][0])),n=p[h],l=n.length,s=0;s<l;s++)this.pixelBuf[i++]=n[s];p.length===1<<r&&r<12&&r++}}}_processFrame(t){t.image=document.createElement("canvas"),t.image.width=this.width,t.image.height=this.height,t.ctx=t.image.getContext("2d");const e=t.localColourTableFlag?t.localColourTable:this.globalColourTable;null===this.lastFrame&&(this.lastFrame=t);const s=2===this.lastFrame.disposalMethod||3===this.lastFrame.disposalMethod;s||t.ctx.drawImage(this.lastFrame.image,0,0,this.width,this.height);const i=t.ctx.getImageData(t.leftPos,t.topPos,t.width,t.height),a=t.transparencyIndex,r=i.data,h=t.interlaced?this.deinterlaceBuf:this.pixelBuf,o=h.length;let n,l,d=0;for(let p=0;p<o;p++)n=h[p],l=e[n],a!==n?(r[d++]=l[0],r[d++]=l[1],r[d++]=l[2],r[d++]=255):s?(r[d+3]=0,d+=4):d+=4;t.ctx.putImageData(i,t.leftPos,t.topPos),this.lastFrame=t}_parseExt(t){const e=t.data[t.pos++];e===a.GCExt?this._parseGCExt(t):e===a.COMMENT?this.comment+=t.readSubBlocks():e===a.APPExt?this._parseAppExt(t):(e===a.UNKNOWN&&(t.pos+=13),t.readSubBlocks())}_parseAppExt(t){t.pos+=1,"NETSCAPE"===t.getString(8)?t.pos+=8:(t.pos+=3,t.readSubBlocks())}_parseGCExt(t){t.pos++;const e=t.data[t.pos++];this.disposalMethod=(28&e)>>2,this.transparencyGiven=!!(1&e),this.delayTime=t.data[t.pos++]+(t.data[t.pos++]<<8),this.transparencyIndex=t.data[t.pos++],t.pos++}_finishedLoading(){this.loading=!1,this.frameCount=this.frames.length,this.lastFrame=null,this.complete=!0,this.disposalMethod=void 0,this.transparencyGiven=void 0,this.delayTime=void 0,this.transparencyIndex=void 0,this.waitTillDone=void 0,this.pixelBuf=void 0,this.deinterlaceBuf=void 0,this.pixelBufSize=void 0,this.deinterlaceBuf=void 0,this.currentFrameNumber=0,this.frames.length>0&&this._setCurrentFrame(0),this.playOnLoad&&this.play()}_play(){let t,e;0!==this.playSpeed?(this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed),this._setCurrentFrame(this.currentFrameNumber),this.timerID=window.setTimeout((()=>this._play()),t)):this.pause()}_setCurrentFrame(t){const e=this.frames[t];this.currentFrame={frameData:e.image,top:0,left:0,width:this.width,height:this.height}}}class l{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t),this.len=this.data.length}getString(t){let e="";for(;t--;)e+=String.fromCharCode(this.data[this.pos++]);return e}readSubBlocks(){let t,e,s="";do{for(e=t=this.data[this.pos++];e--;)s+=String.fromCharCode(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}readSubBlocksB(){let t,e;const s=[];do{for(e=t=this.data[this.pos++];e--;)s.push(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}}


/***/ }),

/***/ "G7M8":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/WebGLDriverTest.js ***!
  \******************************************************************/
/*! exports provided: WebGLDriverTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLDriverTest", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _testDoublePrecisionArithmetic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testDoublePrecisionArithmetic.js */ "Udov");
/* harmony import */ var _testFloatBufferBlend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testFloatBufferBlend.js */ "a7UV");
/* harmony import */ var _testSamplerPrecision_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testSamplerPrecision.js */ "6U0y");
/* harmony import */ var _testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testSVGPremultipliedAlpha.js */ "N3sV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o{constructor(e){this.context=e,this._floatBufferBlendWorking=Object(_testFloatBufferBlend_js__WEBPACK_IMPORTED_MODULE_2__["testFloatBufferBlend"])(e),Object(_testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_4__["testSVGPremultipliedAlpha"])(e).then((e=>this._svgAlwaysPremultipliesAlpha=!e))}get floatBufferBlendWorking(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._floatBufferBlendWorking))throw new Error("floatBufferBlendWorking test not yet available");return this._floatBufferBlendWorking}get svgAlwaysPremultipliesAlpha(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._svgAlwaysPremultipliesAlpha))throw new Error("svgAlwaysPremultipliesAlpha test not yet available");return this._svgAlwaysPremultipliesAlpha}get doublePrecisionRequiresObfuscation(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._doublePrecisionRequiresObfuscation)){const e=Object(_testDoublePrecisionArithmetic_js__WEBPACK_IMPORTED_MODULE_1__["testDoublePrecisionArithmetic"])(this.context,!1),i=Object(_testDoublePrecisionArithmetic_js__WEBPACK_IMPORTED_MODULE_1__["testDoublePrecisionArithmetic"])(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===i||e/i>5)}return this._doublePrecisionRequiresObfuscation}get ignoresSamplerPrecision(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._ignoresSamplerPrecision)&&(this._ignoresSamplerPrecision=Object(_testSamplerPrecision_js__WEBPACK_IMPORTED_MODULE_3__["testSamplerPrecision"])(this.context)),this._ignoresSamplerPrecision}}


/***/ }),

/***/ "GprA":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DisjointTimerQuery.js ***!
  \**********************************************************************************/
/*! exports provided: DisjointTimerQuery, createDisjointTimerQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisjointTimerQuery", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDisjointTimerQuery", function() { return t; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class E{constructor(e,E,t,T,r,_,i,u){this.createQuery=e,this.resultAvailable=E,this.getResult=t,this.disjoint=T,this.beginTimeElapsed=r,this.endTimeElapsed=_,this.createTimestamp=i,this.timestampBits=u}}function t(t,T){if(T.disjointTimerQuery)return null;let r=t.getExtension("EXT_disjoint_timer_query_webgl2");return r&&Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t)?new E((()=>t.createQuery()),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>t.beginQuery(r.TIME_ELAPSED_EXT,e)),(()=>t.endQuery(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>t.getQuery(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):(r=t.getExtension("EXT_disjoint_timer_query"),r?new E((()=>r.createQueryEXT()),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT)),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>r.beginQueryEXT(r.TIME_ELAPSED_EXT,e)),(()=>r.endQueryEXT(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>r.getQueryEXT(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):null)}


/***/ }),

/***/ "JlMO":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return v; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/* harmony import */ var _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../navigation/PanPlanarMomentumEstimator.js */ "TkeS");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let d=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_14__["PanPlanarMomentumEstimator"](500,6,.92),this.momentum=null,this.tmpMomentum=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),this.momentumFinished=!1,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__["default"],scale:0,rotation:0}),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__["when"])((()=>this.momentumFinished),(()=>this.navigation.stop()))}begin(t,i){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(i),this.previousDrag=i}update(t,i){this.addToEstimator(i);let o=i.center.x,m=i.center.y;const s=this.previousDrag;o=s?s.center.x-o:-o,m=s?m-s.center.y:m,t.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_13__["translateBy"])(this.viewpoint,t.viewpoint,[o||0,m||0]),this.previousDrag=i}end(t,i){this.addToEstimator(i);const o=t.navigation.momentumEnabled;this.momentum=o?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()}addToEstimator(t){const i=t.center.x,o=t.center.y,m=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["createScreenPointArray"])(-i,o),e=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__["f"])(-i,o,0);this.momentumEstimator.add(m,e,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((i,o)=>{this.momentumFinished=!this.momentum||this.momentum.isFinished(this.animationTime);const m=.001*o;if(!this.momentumFinished){const o=this.momentum.valueDelta(this.animationTime,m);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__["a"])(this.tmpMomentum,this.momentum.direction,o),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_13__["translateBy"])(i,i,this.tmpMomentum),t.constraints.constrainByGeometry(i)}this.animationTime+=m}))}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],d.prototype,"momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],d.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],d.prototype,"navigation",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.navigation.actions.Pan")],d);const v=d;


/***/ }),

/***/ "KOSm":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return h; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])(),d=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])();let j=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(t){super(t),this._previousCenter=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])(),this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"],scale:0,rotation:0})}begin(t,e){this.navigation.begin(),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:o,padding:r}}=t;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(u,e.center.x,e.center.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["getAnchor"])(d,o,r),t.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["rotateBy"])(this.viewpoint,t.state.paddedViewState.viewpoint,Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["angleBetween"])(d,this._previousCenter,u)),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["c"])(this._previousCenter,u)}end(){this.navigation.end()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"navigation",void 0),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.actions.Rotate")],j);const h=j;


/***/ }),

/***/ "KVK4":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js ***!
  \***************************************************************************************/
/*! exports provided: CollisionEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionEngine", function() { return g; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollisionGrid.js */ "1agI");
/* harmony import */ var _visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualVariableSimpleUtils.js */ "cZ4F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const c=254,u=255,f=0;function b(t,i){const o=[];t.forEachTile((e=>o.push(e))),o.sort(((e,t)=>e.instanceId-t.instanceId)),o.forEach((t=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.labelMetrics)&&t.isReady&&i(t,t.labelMetrics.getCursor())}))}function p(e){return"feature"===e.layer.type||"csv"===e.layer.type||"geojson"===e.layer.type||"ogc-feature"===e.layer.type||"stream"===e.layer.type||"subtype-group"===e.layer.type||"wfs"===e.layer.type}function y(e){return t=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(Object(_visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_4__["getSizeForValueSimple"])(t,e))}function m(e){const t="visualVariables"in e&&e.visualVariables;if(!t)return null;for(const i of t)if("size"===i.type)return y(i);return null}function h(e){for(const i of e){var t;const e="featureReduction"in i&&"cluster"===(null==(t=i.featureReduction)?void 0:t.type)&&i.featureReduction,o=[...i.labelingInfo||[],...e.labelingInfo||[]];if(!i.labelsVisible||!o.length)continue;if(o.some((e=>"none"===e.deconflictionStrategy)))return!0}return!1}function M(e,i){if(!p(i))return;const o="subtype-group"===i.layer.type?i.layer.sublayers.items:[i.layer],r=i.layer.geometryType,n=!h(o),s={};if("subtype-group"!==i.layer.type){if("heatmap"===i.layer.renderer.type)return;const e=m(i.layer.renderer);s[0]=e}const a=i.tileRenderer;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a))return;const l=i.layer.visible&&!i.suspended;e.push({tileRenderer:a,vvEvaluators:s,deconflictionEnabled:n,geometryType:r,visible:l})}class g{run(e,t,i){const o=[];for(let r=e.length-1;r>=0;r--){M(o,e[r])}this._transformMetrics(o,t),this._runCollision(o,t,i)}_runCollision(e,t,i){const[o,r]=t.state.size,s=new _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["CollisionBitsetGrid"](o*t.pixelRatio,r*t.pixelRatio);for(const{tileRenderer:n,deconflictionEnabled:a,visible:l}of e){const e=n.featuresView.attributeView;a?l?(this._prepare(n),this._collideVisible(s,n,i),this._collideInvisible(s,n)):b(n,((t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,u)})):b(n,((t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,f)}))}}_isFiltered(t,i,n){const s=i.getFilterFlags(t),a=!n.hasFilter||!!(s&_definitions_js__WEBPACK_IMPORTED_MODULE_2__["FILTER_FLAG_0"]),l=!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n.featureEffect)||n.featureEffect.excludedLabelsVisible||!!(s&_definitions_js__WEBPACK_IMPORTED_MODULE_2__["EFFECT_FLAG_0"]);return!(a&&l)}_prepare(e){const t=e.featuresView.attributeView,i=new Set;b(e,((o,r)=>{for(;r.nextId();){if(i.has(r.id))continue;if(i.add(r.id),this._isFiltered(r.id,t,e.layerView)){t.setLabelMinZoom(r.id,c);continue}t.getLabelMinZoom(r.id)!==f?t.setLabelMinZoom(r.id,u):t.setLabelMinZoom(r.id,f)}}))}_collideVisible(e,t,i){const o=t.featuresView.attributeView,r=new Set;b(t,((t,n)=>{for(;n.nextId();)if(!r.has(n.id))if(t.key.level===i){if(0===o.getLabelMinZoom(n.id)){switch(e.insertMetrics(n)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["OUTSIDE_EXTENT"]:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["HAS_COLLISION"]:o.setLabelMinZoom(n.id,c),r.add(n.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["NONE"]:o.setLabelMinZoom(n.id,f),r.add(n.id)}}}else o.setLabelMinZoom(n.id,c)}))}_collideInvisible(e,t){const i=t.featuresView.attributeView,o=new Set;b(t,((t,r)=>{for(;r.nextId();)if(!o.has(r.id)&&i.getLabelMinZoom(r.id)===u){switch(e.insertMetrics(r)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["OUTSIDE_EXTENT"]:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["HAS_COLLISION"]:i.setLabelMinZoom(r.id,u),o.add(r.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["NONE"]:i.setLabelMinZoom(r.id,f),o.add(r.id)}}}))}_transformMetrics(t,i){for(const{tileRenderer:o,geometryType:r,vvEvaluators:n}of t)b(o,((t,s)=>{const a=o.featuresView.attributeView,l=t.transforms.labelMat2d;l[4]=Math.round(l[4]),l[5]=Math.round(l[5]);const d=l[4],c=l[5],u="polyline"===r;for(;s.next();){const t=s.boundsCount,o=s.anchorX,r=s.anchorY;let f=s.size;const b=n[0];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b)){const e=b(a.getVVSize(s.id));f=isNaN(e)||null==e||e===1/0?f:e}const p=s.directionX*(f/2),y=s.directionY*(f/2);for(let e=0;e<t;e++){let t=o,n=s.anchorY;if(u){let o=t+s.boundsX(e)+p,r=n+s.boundsY(e)+y;i.state.rotation?(o=l[0]*o+l[2]*r+l[4],r=l[1]*o+l[3]*r+l[5]):(o+=d,r+=c),s.setBoundsComputedAnchorX(e,Math.floor(o)),s.setBoundsComputedAnchorY(e,Math.floor(r))}else{i.state.rotation?(t=l[0]*o+l[2]*r+l[4],n=l[1]*o+l[3]*r+l[5]):(t+=d,n+=c);const a=t+s.boundsX(e)+p,u=n+s.boundsY(e)+y;s.setBoundsComputedAnchorX(e,a),s.setBoundsComputedAnchorY(e,u)}}}}))}}


/***/ }),

/***/ "L/m8":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js ***!
  \**************************************************************************************/
/*! exports provided: blur, highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlight", function() { return t; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},r={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};


/***/ }),

/***/ "LPg/":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/Capabilities.js ***!
  \****************************************************************************/
/*! exports provided: Capabilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capabilities", function() { return x; });
/* harmony import */ var _DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisjointTimerQuery.js */ "GprA");
/* harmony import */ var _DrawBuffers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawBuffers.js */ "RiM0");
/* harmony import */ var _Instancing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instancing.js */ "MTaK");
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load.js */ "uzVh");
/* harmony import */ var _LoseContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoseContext.js */ "6c4E");
/* harmony import */ var _VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexArrayObjects.js */ "cXeJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class x{constructor(t,e){this.gl=t,this._depthTexture=null,this._standardDerivatives=null,this._shaderTextureLOD=null,this._fragDepth=null,this._disabledExtensions=e.disabledExtensions||{},this._debugWebGLExtensions=e.debugWebGLExtensions||{}}get drawBuffers(){return this._drawBuffers||(this._drawBuffers=Object(_DrawBuffers_js__WEBPACK_IMPORTED_MODULE_1__["load"])(this.gl,this._disabledExtensions)),this._drawBuffers}get instancing(){return this._instancing||(this._instancing=Object(_Instancing_js__WEBPACK_IMPORTED_MODULE_2__["load"])(this.gl)),this._instancing}get vao(){return this._vertexArrayObject||(this._vertexArrayObject=Object(_VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__["load"])(this.gl,this._disabledExtensions)),this._vertexArrayObject}get compressedTextureETC(){return this._compressedTextureETC||(this._compressedTextureETC=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadCompressedTextureETC"])(this.gl,this._disabledExtensions)),this._compressedTextureETC}get compressedTextureS3TC(){return this._compressedTextureS3TC||(this._compressedTextureS3TC=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadCompressedTextureS3TC"])(this.gl,this._disabledExtensions)),this._compressedTextureS3TC}get textureFilterAnisotropic(){return this._textureFilterAnisotropic||(this._textureFilterAnisotropic=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadTextureFilterAnisotropicCapability"])(this.gl,this._disabledExtensions)),this._textureFilterAnisotropic}get disjointTimerQuery(){return this._disjointTimerQuery||(this._disjointTimerQuery=Object(_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_0__["createDisjointTimerQuery"])(this.gl,this._disabledExtensions)),this._disjointTimerQuery}get textureFloat(){return this._textureFloat||(this._textureFloat=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadTextureFloat"])(this.gl,this._disabledExtensions)),this._textureFloat}get colorBufferFloat(){return this._colorBufferFloat||(this._colorBufferFloat=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadColorBufferFloat"])(this.gl,this._disabledExtensions)),this._colorBufferFloat}get blendMinMax(){return this._minMaxBlending||(this._minMaxBlending=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadMinMaxBlending"])(this.gl,this._disabledExtensions)),this._minMaxBlending}get depthTexture(){return null===this._depthTexture&&(this._depthTexture=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadBooleanExtension"])(this.gl,this._disabledExtensions,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),this._depthTexture}get standardDerivatives(){return null===this._standardDerivatives&&(this._standardDerivatives=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadBooleanExtension"])(this.gl,this._disabledExtensions,"standardDerivatives",!0,["OES_standard_derivatives"])),this._standardDerivatives}get shaderTextureLOD(){return null===this._shaderTextureLOD&&(this._shaderTextureLOD=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadBooleanExtension"])(this.gl,this._disabledExtensions,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),this._shaderTextureLOD}get fragDepth(){return null===this._fragDepth&&(this._fragDepth=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadBooleanExtension"])(this.gl,this._disabledExtensions,"fragDepth",!0,["EXT_frag_depth"])),this._fragDepth}get loseContext(){return this._loseContext||(this._loseContext=Object(_LoseContext_js__WEBPACK_IMPORTED_MODULE_4__["load"])(this.gl,this._debugWebGLExtensions)),this._loseContext}get textureNorm16(){return this._textureNorm16||(this._textureNorm16=Object(_load_js__WEBPACK_IMPORTED_MODULE_3__["loadTextureNorm16"])(this.gl,this._disabledExtensions)),this._textureNorm16}enable(t){return this[t]}}


/***/ }),

/***/ "MTaK":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/Instancing.js ***!
  \**************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return r; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(r){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r))return{drawArraysInstanced:r.drawArraysInstanced.bind(r),drawElementsInstanced:r.drawElementsInstanced.bind(r),vertexAttribDivisor:r.vertexAttribDivisor.bind(r)};const t=r.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}


/***/ }),

/***/ "N3sV":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testSVGPremultipliedAlpha.js ***!
  \****************************************************************************/
/*! exports provided: testSVGPremultipliedAlpha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSVGPremultipliedAlpha", function() { return f; });
/* harmony import */ var _2d_engine_webgl_DefaultVertexAttributeLayouts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../2d/engine/webgl/DefaultVertexAttributeLayouts.js */ "LlzU");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferObject.js */ "fOQB");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FramebufferObject.js */ "0meK");
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Texture.js */ "of9L");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function f(f){const w=new Image;if(w.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",w.width=5,w.height=5,await w.decode(),!f.gl)return!0;const _=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["FramebufferObject"](f,{colorTarget:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TargetType"].TEXTURE,depthStencilTarget:_enums_js__WEBPACK_IMPORTED_MODULE_2__["DepthStencilTargetType"].NONE},{target:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureType"].TEXTURE_2D,wrapMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureWrapMode"].CLAMP_TO_EDGE,pixelFormat:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,dataType:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,samplingMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].NEAREST,width:1,height:1}),E=_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["BufferObject"].createVertex(f,_enums_js__WEBPACK_IMPORTED_MODULE_2__["Usage"].STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),h=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["VertexArrayObject"](f,new Map([["a_pos",0]]),_2d_engine_webgl_DefaultVertexAttributeLayouts_js__WEBPACK_IMPORTED_MODULE_0__["Pos2us"],{geometry:E}),v="\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ",T="\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",x=f.programCache.acquire(v,T,new Map([["a_pos",0]]));f.useProgram(x);const A=new _Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](f,{dataType:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,pixelFormat:_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,preMultiplyAlpha:!1,wrapMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].LINEAR},w);f.bindTexture(A,0),x.setUniform1i("u_texture",0);const b=f.getBoundFramebufferObject(),{x:y,y:B,width:C,height:F}=f.getViewport();f.bindFramebuffer(_),f.setViewport(0,0,1,1),f.setClearColor(0,0,0,0),f.setBlendingEnabled(!1),f.clearSafe(_enums_js__WEBPACK_IMPORTED_MODULE_2__["ClearBufferBit"].COLOR_BUFFER_BIT),f.bindVAO(h),f.drawArrays(_enums_js__WEBPACK_IMPORTED_MODULE_2__["PrimitiveType"].TRIANGLE_STRIP,0,4);const R=new Uint8Array(4);return _.readPixels(0,0,1,1,_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,R),x.dispose(),h.dispose(!1),E.dispose(),_.dispose(),A.dispose(),f.setViewport(y,B,C,F),f.bindFramebuffer(b),w.src="",255===R[0]}


/***/ }),

/***/ "Nhtl":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterialManager.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "/5M2");
/* harmony import */ var _Programs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Programs.js */ "6ldq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach((e=>e.dispose())),this._programByKey.clear()}getMaterialProgram(e,r,t){const a=r.key<<3|this._getMaterialOptionsValue(r.type,t);if(this._programByKey.has(a))return this._programByKey.get(a);const s=this._getProgramTemplate(r.type),{shaders:n}=s,{vertexShader:c,fragmentShader:i}=n(t),o=r.getShaderHeader(),u=r.getShaderMain(),p=c.replace("#pragma header",o).replace("#pragma main",u),g=e.programCache.acquire(p,i,r.getAttributeLocations());return this._programByKey.set(a,g),g}_getMaterialOptionsValue(r,t){switch(r){case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].BACKGROUND:{const e=t;return(e.pattern?1:0)<<1|(e.id?1:0)}case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].FILL:{const e=t;return(e.pattern?1:0)<<1|(e.id?1:0)}case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].OUTLINE:return t.id?1:0;case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].LINE:{const e=t;return(e.sdf?1:0)<<2|(e.pattern?1:0)<<1|(e.id?1:0)}case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].ICON:{const e=t;return(e.sdf?1:0)<<1|(e.id?1:0)}case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].CIRCLE:return t.id?1:0;case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].TEXT:return t.id?1:0;default:return 0}}_getProgramTemplate(o){switch(o){case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].BACKGROUND:return _Programs_js__WEBPACK_IMPORTED_MODULE_1__["background"];case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].CIRCLE:return _Programs_js__WEBPACK_IMPORTED_MODULE_1__["circle"];case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].FILL:return _Programs_js__WEBPACK_IMPORTED_MODULE_1__["fill"];case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].ICON:return _Programs_js__WEBPACK_IMPORTED_MODULE_1__["icon"];case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].LINE:return _Programs_js__WEBPACK_IMPORTED_MODULE_1__["line"];case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].OUTLINE:return _Programs_js__WEBPACK_IMPORTED_MODULE_1__["outline"];case _enums_js__WEBPACK_IMPORTED_MODULE_0__["ShaderProgramType"].TEXT:return _Programs_js__WEBPACK_IMPORTED_MODULE_1__["text"];default:return null}}}


/***/ }),

/***/ "P3Vg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Colorize.js ***!
  \*********************************************************************************************/
/*! exports provided: Colorize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colorize", function() { return l; });
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../VertexStream.js */ "gjrC");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class l{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,s,r){const{width:i,height:a}=s;this._createOrResizeResources(e,i,a);const{context:o,painter:n}=e,{materialManager:l}=n,_=this._programDesc,c=this._quad,h=r.colorMatrix;c.bind();const u=this._layerFBOTexture;o.bindFramebuffer(s),s.copyToTexture(0,0,i,a,0,0,u),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const d=l.getProgram(e,_);o.useProgram(d),o.bindTexture(u,2),d.setUniformMatrix4fv("u_coefficients",h),d.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA),o.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(t,l,_){const{context:c}=t;this._layerFBOTexture&&this._size[0]===l&&this._size[1]===_||(this._size[0]=l,this._size[1]=_,this._layerFBOTexture?this._layerFBOTexture.resize(l,_):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["Texture"](c,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].LINEAR,flipped:!1,width:l,height:_}),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_0__["default"](c,[-1,-1,1,-1,-1,1,1,1])))}}


/***/ }),

/***/ "PNHs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js ***!
  \**********************************************************************************/
/*! exports provided: FeatureEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureEffect", function() { return r; });
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r extends _Effect_js__WEBPACK_IMPORTED_MODULE_0__["Effect"]{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:r,height:s}=e.getViewport(),o=t.getFbos(r,s).effect0;e.bindFramebuffer(o),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,r){const{context:s,painter:o}=e,n=o.getPostProcessingEffects(r),c=s.getBoundFramebufferObject();for(const{postProcessingEffect:t,effect:f}of n)t.draw(e,c,f);s.bindFramebuffer(this._prev),s.setStencilTestEnabled(!1),o.blitTexture(s,c.colorTexture,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].NEAREST),s.setStencilTestEnabled(!0)}}


/***/ }),

/***/ "QSUW":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/resolver.js ***!
  \*******************************************************************************************/
/*! exports provided: resolveIncludes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIncludes", function() { return n; });
/* harmony import */ var _shaderRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaderRepository.js */ "V+Bw");
/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/ShaderCompiler.js */ "SfCL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(e){let o=_shaderRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"];return e.split("/").forEach((r=>{o&&(o=o[r])})),o}const t=new _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_1__["ShaderCompiler"](o);function n(r){return t.resolveIncludes(r)}


/***/ }),

/***/ "RiM0":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DrawBuffers.js ***!
  \***************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return A; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function A(A,_){if(_.disjointTimerQuery)return null;if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(A))return{drawBuffers:A.drawBuffers.bind(A),MAX_DRAW_BUFFERS:A.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:A.MAX_COLOR_ATTACHMENTS};if(_.drawBuffers)return null;const e=A.getExtension("WEBGL_draw_buffers");return e?{drawBuffers:e.drawBuffersWEBGL.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS_WEBGL}:null}


/***/ }),

/***/ "T/wP":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Opacity.js ***!
  \********************************************************************************************/
/*! exports provided: Opacity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opacity", function() { return l; });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class l{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(t,s,r){const{width:i,height:a}=s;this._createOrResizeResources(t,i,a);const{context:l,painter:o}=t,{amount:T}=r,h=l.gl,n=this._layerFBOTexture;l.bindFramebuffer(s),s.copyToTexture(0,0,i,a,0,0,n),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),l.setClearColor(0,0,0,0),l.clear(h.COLOR_BUFFER_BIT),o.blitTexture(l,n,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureSamplingMode"].NEAREST,T)}_createOrResizeResources(l,o,T){const{context:h}=l;this._layerFBOTexture&&this._size[0]===o&&this._size[1]===T||(this._size[0]=o,this._size[1]=T,this._layerFBOTexture?this._layerFBOTexture.resize(o,T):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_1__["Texture"](h,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["TextureSamplingMode"].NEAREST,flipped:!1,width:o,height:T}))}}


/***/ }),

/***/ "TkeS":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js ***!
  \**********************************************************************************/
/*! exports provided: PanPlanarMomentum, PanPlanarMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentum", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentumEstimator", function() { return h; });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "DKFY");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class c extends _Momentum_js__WEBPACK_IMPORTED_MODULE_3__["Momentum"]{constructor(e,t,i,s,n){super(e,t,i),this.sceneVelocity=s,this.direction=n}value(e){return super.valueFromInitialVelocity(this.sceneVelocity,e)}}class h{constructor(e=300,t=12,i=.84){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.enabled=!0,this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),this.screen=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4)],this.scene=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6)],this.tmpDirection=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}add(e,t,i){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)}}reset(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta;return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)}createMomentum(s,n,r){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);const h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["l"])(this.tmpDirection);h>0&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.tmpDirection,this.tmpDirection,1/h);const a=h/this.time.filteredDelta;return new c(s,n,r,a,this.tmpDirection)}}


/***/ }),

/***/ "UBW5":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/magnifier/resources.js ***!
  \****************************************************************/
/*! exports provided: loadMagnifierResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMagnifierResources", function() { return s; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../support/requestImageUtils.js */ "LbAs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function s(s){const r=__webpack_require__.e(/*! import() | mask-svg-js */ "mask-svg-js").then(__webpack_require__.bind(null, /*! ./mask-svg.js */ "RzSf")),i=__webpack_require__.e(/*! import() | overlay-svg-js */ "overlay-svg-js").then(__webpack_require__.bind(null, /*! ./overlay-svg.js */ "o3Xd")),o=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await r).default,{signal:s}),e=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await i).default,{signal:s}),m={mask:await o,overlay:await e};return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["throwIfAborted"])(s),m}


/***/ }),

/***/ "Udov":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testDoublePrecisionArithmetic.js ***!
  \********************************************************************************/
/*! exports provided: testDoublePrecisionArithmetic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testDoublePrecisionArithmetic", function() { return A; });
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/floatRGBA.js */ "Zhw2");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BufferObject.js */ "fOQB");
/* harmony import */ var _doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doublePrecisionUtils.js */ "nMRV");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FramebufferObject.js */ "0meK");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VertexArrayObject.js */ "D6bk");
/* harmony import */ var _VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function A(A,_){const g=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["FramebufferObject"](A,{colorTarget:_enums_js__WEBPACK_IMPORTED_MODULE_4__["TargetType"].TEXTURE,depthStencilTarget:_enums_js__WEBPACK_IMPORTED_MODULE_4__["DepthStencilTargetType"].NONE},{target:_enums_js__WEBPACK_IMPORTED_MODULE_4__["TextureType"].TEXTURE_2D,wrapMode:_enums_js__WEBPACK_IMPORTED_MODULE_4__["TextureWrapMode"].CLAMP_TO_EDGE,pixelFormat:_enums_js__WEBPACK_IMPORTED_MODULE_4__["PixelFormat"].RGBA,dataType:_enums_js__WEBPACK_IMPORTED_MODULE_4__["PixelType"].UNSIGNED_BYTE,samplingMode:_enums_js__WEBPACK_IMPORTED_MODULE_4__["TextureSamplingMode"].NEAREST,width:1,height:1});function B(n,e){const o=`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${_?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,r="\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",i=A.programCache.acquire(o,r,new Map([["position",0]])),a=new Float32Array(6);Object(_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__["encodeDoubleArray"])(n,a,3);const c=new Float32Array(6);return Object(_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__["encodeDoubleArray"])(e,c,3),A.useProgram(i),i.setUniform3f("u_highA",a[0],a[2],a[4]),i.setUniform3f("u_lowA",a[1],a[3],a[5]),i.setUniform3f("u_highB",c[0],c[2],c[4]),i.setUniform3f("u_lowB",c[1],c[3],c[5]),i}const E=_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["BufferObject"].createVertex(A,_enums_js__WEBPACK_IMPORTED_MODULE_4__["Usage"].STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),b=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["VertexArrayObject"](A,new Map([["position",0]]),{geometry:[new _VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_7__["VertexElementDescriptor"]("position",2,_enums_js__WEBPACK_IMPORTED_MODULE_4__["DataType"].UNSIGNED_SHORT,0,4)]},{geometry:E}),F=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(5633261.287538229,2626832.878767164,1434988.0495278358),w=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(5633271.46742708,2626873.6381334523,1434963.231608387),T=B(F,w),O=A.getBoundFramebufferObject(),{x:U,y:I,width:R,height:N}=A.getViewport();A.bindFramebuffer(g),A.setViewport(0,0,1,1),A.bindVAO(b),A.drawArrays(_enums_js__WEBPACK_IMPORTED_MODULE_4__["PrimitiveType"].TRIANGLE_STRIP,0,4);const S=new Uint8Array(4);g.readPixels(0,0,1,1,_enums_js__WEBPACK_IMPORTED_MODULE_4__["PixelFormat"].RGBA,_enums_js__WEBPACK_IMPORTED_MODULE_4__["PixelType"].UNSIGNED_BYTE,S),T.dispose(),b.dispose(!1),E.dispose(),g.dispose(),A.setViewport(U,I,R,N),A.bindFramebuffer(O);const D=(F[2]-w[2])/25,y=Object(_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__["unpackFloatRGBA"])(S);return Math.abs(D-y)}


/***/ }),

/***/ "V+Bw":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/shaderRepository.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e={background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform lowp sampler2D u_texture;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = u_opacity * color;\n#else\ngl_FragColor = u_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","background.vert":"precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\nuniform mediump vec4 u_tlbr;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\n#endif\nvoid main() {\ngl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\nv_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\nv_tlbr             = u_tlbr / u_mosaicSize.xyxy;\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},circle:{"circle.frag":"precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float dist = length(v_offset);\nmediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\nlowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\ngl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","circle.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_stroke_color = stroke_color * stroke_opacity;\nv_stroke_width = stroke_width;\nv_radius = radius;\nv_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\nmediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\nv_offset = offset;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},fill:{"fill.frag":"precision lowp float;\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = v_color[3] * color;\n#else\ngl_FragColor = v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","fill.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\n#include <util/util.glsl>\nuniform mediump vec2 u_mosaicSize;\nuniform mediump float u_patternFactor;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\nfloat patternWidth = nextPOT(tlbr.z - tlbr.x);\nfloat patternHeight = nextPOT(tlbr.w - tlbr.y);\nfloat scaleX = 1.0 / (patternWidth * u_patternFactor);\nfloat scaleY = 1.0 / (patternHeight * u_patternFactor);\nmat3 patterMat = mat3(scaleX, 0.0,    0.0,\n0.0,    -scaleY, 0.0,\n0.0,    0.0,    1.0);\nv_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;\nv_tlbr             = tlbr / u_mosaicSize.xyxy;\n#endif\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},icon:{"icon.frag":"precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\nlowp vec4 fillPixelColor = v_color;\nfloat d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\nconst float softEdgeRatio = 0.248062016;\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * softEdgeRatio * size;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nif (v_halo_width > 0.25) {\nlowp vec4 outlinePixelColor = u_outlineColor;\nconst float outlineLimitRatio = (16.0 / 86.0);\nfloat clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\noutlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\ngl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n}\nelse {\ngl_FragColor = v_opacity * fillPixelColor;\n}\n#else\nlowp vec4 texColor = texture2D(u_texture, v_tex);\ngl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nv_color = color;\nv_opacity = opacity;\n#ifdef SDF\nv_halo_width = halo_width;\n#endif\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_opacity *= interpolatedOpacity;\nmediump float a_angle         = a_levelInfo[1];\nmediump float a_minLevel      = a_levelInfo[2];\nmediump float a_maxLevel      = a_levelInfo[3];\nmediump vec2 a_tex            = a_texAngleRange.xy;\nmediump float delta_z = 0.0;\nmediump float rotated = mod(a_angle + u_mapRotation, 256.0);\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_opacity, 0.0);\nvec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\nv_size = abs(offset);\n#ifdef SDF\noffset = (120.0 / 86.0) * offset;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_tex = a_tex.xy / u_mosaicSize;\n}"},line:{"line.frag":"precision lowp float;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#if defined (PATTERN) || defined(SDF)\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\nuniform sampler2D u_texture;\nuniform mediump float u_antialiasing;\n#endif\n#ifdef SDF\n#include <util/encoding.glsl>\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float fragDist = length(v_normal) * v_lineHalfWidth;\nlowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\nmediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\ngl_FragColor = alpha * v_color[3] * color;\n#elif defined(SDF)\nmediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY =  0.5 + 0.25 * v_normal.y;\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);\ngl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n#else\ngl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","line.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_extrude_offset;\nattribute vec4 a_dir_normal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump float u_zoomFactor;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\nconst mediump float tileCoordRatio = 8.0;\n#if defined (SDF)\nconst mediump float sdfPatternHalfWidth = 15.5;\n#endif\n#if defined (PATTERN) || defined(SDF)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_blur = blur + u_antialiasing;\nv_normal = a_dir_normal.zw * scale;\n#if defined (PATTERN) || defined(SDF)\nv_tlbr          = tlbr / u_mosaicSize.xyxy;\nv_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);\n#if defined (PATTERN)\nv_widthRatio = width / v_patternSize.y;\n#else\nv_widthRatio = width / sdfPatternHalfWidth / 2.0;\n#endif\n#endif\nv_lineHalfWidth = (width + u_antialiasing) * 0.5;\nmediump vec2 dir = a_dir_normal.xy * scale;\nmediump vec2 offset_ = a_extrude_offset.zw * scale * offset;\nmediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n#if defined (PATTERN) || defined(SDF)\nv_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = abs(v_normal.y);\nlowp float alpha = smoothstep(1.0, 0.0, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_normal = a_xnormal;\nmediump vec2 dist = u_outline_width * scale * a_offset;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},text:{"text.frag":"uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nif (u_halo > 0.5)\n{\nv_color = halo_color * opacity;\nhalo_width *= sdfPixel;\nhalo_blur *= sdfPixel;\n}\nelse\n{\nv_color = color * opacity;\nhalo_width = 0.0;\nhalo_blur = 0.0;\n}\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_color *= interpolatedOpacity;\nmediump float a_angle       = a_levelInfo[1];\nmediump float a_minLevel    = a_levelInfo[2];\nmediump float a_maxLevel    = a_levelInfo[3];\nmediump vec2 a_tex          = a_texAngleRange.xy;\nmediump float a_visMinAngle    = a_texAngleRange.z;\nmediump float a_visMaxAngle    = a_texAngleRange.w;\nmediump float delta_z = 0.0;\nmediump float angle = mod(a_angle + u_mapRotation, 256.0);\nif (a_visMinAngle < a_visMaxAngle)\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n}\nelse\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n}\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_color[3], 0.0);\nv_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_edgeDistance = edgePos - halo_width / size;\nv_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}"},util:{"encoding.glsl":"const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}","util.glsl":"float nextPOT(in float x) {\nreturn pow(2.0, ceil(log2(abs(x))));\n}"}};


/***/ }),

/***/ "VfAO":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/MomentumEstimator.js ***!
  \*************************************************************************/
/*! exports provided: MomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentumEstimator", function() { return s; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "DKFY");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(t=2.5,i=.01,s=.95,l=12){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.maxVelocity=l,this.enabled=!0,this.value=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.8),this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.3)}add(t,e){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){const e=this.value.computeDelta(t);this.value.filteredDelta*e<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)}createMomentum(t,e,s){return new _Momentum_js__WEBPACK_IMPORTED_MODULE_2__["Momentum"](t,e,s)}}


/***/ }),

/***/ "W3i+":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return P; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../brushes.js */ "Oxob");
/* harmony import */ var _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vectorTiles/shaders/VTLMaterialManager.js */ "Nhtl");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BitBlitRenderer.js */ "bfVh");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _MaterialManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MaterialManager.js */ "FGzj");
/* harmony import */ var _TextureManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextureManager.js */ "v9+0");
/* harmony import */ var _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/AnimationEffect.js */ "ac4n");
/* harmony import */ var _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/BlendEffect.js */ "viFY");
/* harmony import */ var _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/FeatureEffect.js */ "PNHs");
/* harmony import */ var _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/HighlightEffect.js */ "0O54");
/* harmony import */ var _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./effects/HittestEffect.js */ "60EV");
/* harmony import */ var _effects_HittestEffectVTL_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/HittestEffectVTL.js */ "C9cz");
/* harmony import */ var _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/post-processing/EffectManager.js */ "Coxz");
/* harmony import */ var _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./painter/RenderPass.js */ "sAsQ");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webgl/Renderbuffer.js */ "kbDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const S={[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].FILL]:_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"].fill,[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LINE]:_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"].line,[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].MARKER]:_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"].marker,[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].TEXT]:_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"].text};class P{constructor(e,t,s){this.context=e,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_3__["BitBlitRenderer"],this._brushCache=new Map,this._vtlMaterialManager=new _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_2__["default"],this._blendEffect=new _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_8__["BlendEffect"],this._fboPool=[],this.effects={highlight:new _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_10__["default"],hittest:new _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_11__["HittestEffect"],hittestVTL:new _effects_HittestEffectVTL_js__WEBPACK_IMPORTED_MODULE_12__["HittestEffectVTL"],integrate:new _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_7__["AnimationEffect"],insideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_9__["FeatureEffect"]("inside"),outsideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_9__["FeatureEffect"]("outside")},this.materialManager=new _MaterialManager_js__WEBPACK_IMPORTED_MODULE_5__["default"](e),this.textureManager=new _TextureManager_js__WEBPACK_IMPORTED_MODULE_6__["default"](t,s),this._effectsManager=new _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_13__["EffectManager"](t)}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){for(const s in this._fbos)this._fbos[s].resize(e,t);return this._fbos}const s={target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["PixelType"].UNSIGNED_BYTE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureSamplingMode"].NEAREST,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureWrapMode"].CLAMP_TO_EDGE,width:e,height:t},r={colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["DepthStencilTargetType"].DEPTH_STENCIL_RENDER_BUFFER},i=new _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_17__["Renderbuffer"](this.context,{width:e,height:t,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["RenderbufferFormat"].DEPTH_STENCIL});this._stencilBuf=i,this._fbos={output:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_16__["FramebufferObject"](this.context,r,s,i),blend:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_16__["FramebufferObject"](this.context,r,s,i),effect0:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_16__["FramebufferObject"](this.context,r,s,i)}}return this._fbos}acquireFbo(e,t){let s;s=this._fboPool.length>0?this._fboPool.pop():new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_16__["FramebufferObject"](this.context,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["DepthStencilTargetType"].DEPTH_STENCIL_RENDER_BUFFER},{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["PixelType"].UNSIGNED_BYTE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureSamplingMode"].NEAREST,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureWrapMode"].CLAMP_TO_EDGE,width:e,height:t},this._stencilBuf);const r=s.descriptor;return r.width===e&&r.height===t||s.resize(e,t),s}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(t,s=null){const{width:r,height:i}=t.getViewport();this._prevFBO=t.getBoundFramebufferObject();const n=this.getFbos(r,i);if(t.bindFramebuffer(n.output),t.setColorMask(!0,!0,!0,!0),t.setDepthWriteEnabled(!0),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)){const{r:e,g:r,b:i,a:n}=s.color;t.setClearColor(n*e/255,n*r/255,n*i/255,n)}else t.setClearColor(0,0,0,0);t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,s){const{context:r,blendMode:i,effects:n,requireFBO:o,drawPhase:a}=e;if(o||N(a,i,n,s))r.bindFramebuffer(this._fbos.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const e=this._getOutputFBO();r.bindFramebuffer(e)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(s,r){const{context:i,blendMode:n,effects:a,requireFBO:h,drawPhase:f}=s;if(h||N(f,n,a,r)){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)&&a.length>0&&f===_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].MAP&&this._applyEffects(s,a);const h=this._getOutputFBO();i.bindFramebuffer(h),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE_MINUS_SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0);const l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(n)||f===_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].HIGHLIGHT?"normal":n;this._blendEffect.draw(s,this._fbos.blend.colorTexture,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureSamplingMode"].NEAREST,l,r)}}renderLayers(e){if(e.bindFramebuffer(this._prevFBO),!this._fbos)return;const t=this._getOutputFBO();e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),this.blitTexture(e,t.colorTexture,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["TextureSamplingMode"].NEAREST)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null),this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._effectsManager.dispose(),this._vtlMaterialManager&&(this._vtlMaterialManager.dispose(),this._vtlMaterialManager=null),this._prevFBO=null}getGeometryBrush(e){const t=S[e];let s=this._brushCache.get(t);return void 0===s&&(s=new t,this._brushCache.set(t,s)),this._brushCache.get(t)}renderObject(e,t,r,i){const n=_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"][r];if(!n)return null;let o=this._brushCache.get(n);void 0===o&&(o=new n,this._brushCache.set(n,o)),o.prepareState(e,t,i),o.draw(e,t,i)}renderObjects(e,t,r,i){const n=_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"][r];if(!n)return null;let o=this._brushCache.get(n);void 0===o&&(o=new n,this._brushCache.set(n,o)),o.drawMany(e,t,i)}registerRenderPass(e){const t=e.brushes.map((e=>(this._brushCache.has(e)||this._brushCache.set(e,new e),this._brushCache.get(e))));return new _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_14__["default"](t,e)}setHighlightOptions(e){this.effects.highlight.setHighlightOptions(e)}blitTexture(e,t,s,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE_MINUS_SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["BlendFactor"].ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,s,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){return null!=this._renderTarget?this._renderTarget:this._fbos.output}_applyEffects(e,t){const{context:s}=e,r=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:i,effect:n}of r)s.bindFramebuffer(this._fbos.blend),i.draw(e,this._fbos.blend,n)}}function N(t,s,r,i){return t!==_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].HIGHLIGHT&&(1!==i||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&"normal"!==s||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.length>0)}


/***/ }),

/***/ "XDzM":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Stage.js ***!
  \************************************************************/
/*! exports provided: EXTRA_RENDER_TIME, Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRA_RENDER_TIME", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return W; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/events.js */ "nYOO");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/scheduling.js */ "WBXD");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _chunks_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/common.js */ "QhKk");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/mat2df64.js */ "9+ss");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _symbols_cim_CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../symbols/cim/CIMResourceManager.js */ "J6Jj");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Container.js */ "AMBt");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./webgl/Painter.js */ "W3i+");
/* harmony import */ var _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./webgl/Profiler.js */ "oQiY");
/* harmony import */ var _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./webgl/shaders/StencilPrograms.js */ "3wQP");
/* harmony import */ var _support_Timeline_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/Timeline.js */ "Snp0");
/* harmony import */ var _support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../support/screenshotUtils.js */ "TcGo");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../webgl/context-util.js */ "zBXm");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../webgl/ProgramTemplate.js */ "aB/g");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../webgl/VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const q=2e3;class W extends _Container_js__WEBPACK_IMPORTED_MODULE_13__["Container"]{constructor(n,a){super(),this._trash=new Set,this._clipData=new Float32Array(8),this._upperLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_11__["a"])(),this._upperRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_11__["a"])(),this._lowerLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_11__["a"])(),this._lowerRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_11__["a"])(),this._mat2=Object(_chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_8__["c"])(),this._clipRendererInitialized=!1,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:o=document.createElement("canvas"),alpha:h=!0,stencil:d=!0,contextOptions:c={}}=a;this._canvas=o;const p=Object(_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_21__["createContextOrErrorHTML"])("2d",o,{alpha:h,antialias:!1,depth:!0,stencil:d});this.context=new _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_25__["RenderingContext"](Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(p)?p:null,c),this.resourceManager=new _symbols_cim_CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_12__["default"],this.painter=new _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_15__["default"](this.context,this,this.resourceManager),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),n.appendChild(this._debugOutput)),this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:a.timeline||new _support_Timeline_js__WEBPACK_IMPORTED_MODULE_18__["Timeline"],renderingOptions:a.renderingOptions,requireFBO:!1,profiler:new _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_16__["Profiler"](this.context,this._debugOutput),dataUploadCounter:0},this._taskHandle=Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_4__["addFrameTask"])({render:e=>this.renderFrame(e)}),this._taskHandle.pause(),this._lostWebGLContextHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_1__["on"])(o,"webglcontextlost",(()=>{this.emit("webgl-error",{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-context-lost")})})),o.setAttribute("style","width: 100%; height:100%; display:block;"),n.appendChild(o)}destroy(){this.removeAllChildren(),this._emptyTrash(),this._taskHandle.remove(),this._taskHandle=null,this._boundFBO=null,this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null),this._clipVAO&&(this._clipVAO.dispose(),this._clipVAO=null,this._clipVBO=null),this._clipStencilProgram&&(this._clipStencilProgram.dispose(),this._clipStencilProgram=null),this._lostWebGLContextHandle&&(this._lostWebGLContextHandle.remove(),this._lostWebGLContextHandle=null),this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas),this._debugOutput&&this._debugOutput.parentNode&&this._debugOutput.parentNode.removeChild(this._debugOutput),this.highlightOptions=null,this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){this._highlightOptionsHandle&&(this._highlightOptionsHandle.remove(),this._highlightOptionsHandle=null),this._highlightOptions=e,this._highlightOptions&&(this._highlightOptionsHandle=Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__["init"])(this._highlightOptions,"version",(()=>{this.painter.setHighlightOptions(e),this.requestRender()})))}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=q,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_9__["c"])()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const r=this.context;t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,this._beforeRenderChildren(t),t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["WGLDrawPhase"].MAP,this.painter.beforeRenderLayers(r,this.background);for(const i of e)i.processRender(t);this.painter.renderLayers(r),t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["WGLDrawPhase"].HIGHLIGHT,this.painter.beforeRenderLayers(r);for(const i of e)i.processRender(t);this.painter.renderLayers(r);if(this._isLabelDrawPhaseRequired(e)){t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["WGLDrawPhase"].LABEL,this.painter.beforeRenderLayers(r);for(const i of e)i.processRender(t);this.painter.renderLayers(r)}if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("esri-tiles-debug")){t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["WGLDrawPhase"].DEBUG,this.painter.beforeRenderLayers(r);for(const i of e)i.processRender(t);this.painter.renderLayers(r)}t.profiler.recordEnd("drawLayers"),this._afterRenderChildren()}_beforeRenderChildren(e){const{context:t}=this,{state:i,pixelRatio:r}=e;t.setClearDepth(1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT);const{size:s,rotation:n}=i,l=Math.round(s[0]*r),d=Math.round(s[1]*r);this._boundFBO=t.getBoundFramebufferObject();if(!i.spatialReference.isWrappable)return void(this._clipFrame=!1);const m=Object(_chunks_common_js__WEBPACK_IMPORTED_MODULE_6__["t"])(n),u=Math.abs(Math.cos(m)),_=Math.abs(Math.sin(m)),g=Math.round(l*u+d*_),f=Math.round(i.worldScreenWidth);if(g<=f)return void(this._clipFrame=!1);this._clipFBO&&this._clipFBO.width===l&&this._clipFBO.height===d||(this._clipFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_23__["FramebufferObject"](t,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["DepthStencilTargetType"].DEPTH_STENCIL_RENDER_BUFFER,width:l,height:d}));const b=(this.state.padding.left-this.state.padding.right)/2,R=(this.state.padding.bottom-this.state.padding.top)/2,w=.5*l,O=.5*d,E=1/l,F=1/d,T=f*r*.5,y=.5*(l*_+d*u),B=this._upperLeft,P=this._upperRight,S=this._lowerLeft,j=this._lowerRight;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(B,-T,-y),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(P,T,-y),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(S,-T,y),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(j,T,y),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_7__["a"])(this._mat2,[w+b,O-R]),0!==n&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this._mat2,this._mat2,m),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(B,B,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(P,P,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(S,S,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(j,j,this._mat2);const L=this._clipData;L.set([2*S[0]*E-1,2*(d-S[1])*F-1,2*j[0]*E-1,2*(d-j[1])*F-1,2*B[0]*E-1,2*(d-B[1])*F-1,2*P[0]*E-1,2*(d-P[1])*F-1]),this._clipRendererInitialized||this._initializeClipRenderer(t),this._clipVBO.setData(L),this._boundFBO=t.getBoundFramebufferObject(),t.bindFramebuffer(this._clipFBO),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.setClearStencil(0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT|t.gl.STENCIL_BUFFER_BIT),t.setDepthWriteEnabled(!1),this._clipFrame=!0}_afterRenderChildren(){const e=this.context;if(e.logIno(),this._clipFrame&&this._clipRendererInitialized){if(e.bindFramebuffer(this._boundFBO),this._boundFBO=null,e.bindVAO(this._clipVAO),e.useProgram(this._clipStencilProgram),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["StencilOperation"].KEEP,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["StencilOperation"].KEEP,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["StencilOperation"].REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["CompareFunction"].ALWAYS,1,255),e.drawElements(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["PrimitiveType"].TRIANGLES,6,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["DataType"].UNSIGNED_SHORT,0),e.bindVAO(),e.setColorMask(!0,!0,!0,!0),null!=this.background){const{r:t,g:i,b:r,a:s}=this.background.color;e.setClearColor(s*t/255,s*i/255,s*r/255,s)}else e.setClearColor(0,0,0,0);e.clear(e.gl.COLOR_BUFFER_BIT),e.setBlendingEnabled(!0),e.setStencilFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["CompareFunction"].EQUAL,1,255),this.painter.blitTexture(e,this._clipFBO.colorTexture,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["TextureSamplingMode"].NEAREST,1),e.setStencilTestEnabled(!1)}}doRender(e){const t=this.context,{state:i,pixelRatio:r}=e;this._resizeCanvas(e),t.setViewport(0,0,r*i.size[0],r*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const{framebufferWidth:t,framebufferHeight:i}={framebufferWidth:Math.round(this._renderParameters.state.size[0]*e.resolutionScale),framebufferHeight:Math.round(this._renderParameters.state.size[1]*e.resolutionScale)},r=1,s=this.context,n=this._state.clone();if(null!=e.rotation){const t=n.viewpoint;n.viewpoint.rotation=e.rotation,n.viewpoint=t}const a={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:n,pixelRatio:r,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},o=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_23__["FramebufferObject"](s,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["DepthStencilTargetType"].DEPTH_STENCIL_RENDER_BUFFER,width:t,height:i}),h=s.getBoundFramebufferObject(),l=s.getViewport();s.bindFramebuffer(o),s.setViewport(0,0,t,i),this._renderChildren(e.children,a);const d=this._readbackScreenshot(o,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)});s.bindFramebuffer(h),s.setViewport(l.x,l.y,l.width,l.height),this.requestRender();const c=await d;let p;1===e.outputScale?p=c:(p=new ImageData(Math.round(c.width*e.outputScale),Math.round(c.height*e.outputScale)),Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_19__["resampleHermite"])(c,p,!0));return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_19__["encodeResult"])(p,{format:e.format,quality:e.quality,rotation:0,disableDecorations:!1},document.createElement("canvas"),{flipY:!0,premultipliedAlpha:!0})}async _readbackScreenshot(e,t){const i=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_19__["createEmptyImageData"])(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["PixelFormat"].RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["PixelType"].UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:r},pixelRatio:s}=e,n=r[0],a=r[1],o=Math.round(n*s),h=Math.round(a*s);t.width===o&&t.height===h||(t.width=o,t.height=h),i.width=n+"px",i.height=a+"px"}_initializeClipRenderer(e){if(this._clipRendererInitialized)return!0;const t=Object(_webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_24__["createProgram"])(e,_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_17__["stencil"]);if(!t)return!1;const i=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_20__["BufferObject"].createVertex(e,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["Usage"].STREAM_DRAW,this._clipData),r=new Uint16Array([0,1,2,2,1,3]),s=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_20__["BufferObject"].createIndex(e,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["Usage"].STATIC_DRAW,r),n=_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_17__["stencil"].attributes,a={geometry:[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_27__["VertexElementDescriptor"]("a_pos",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_22__["DataType"].FLOAT,0,8)]},o=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_26__["VertexArrayObject"](e,n,a,{geometry:i},s);return this._clipStencilProgram=t,this._clipVBO=i,this._clipVAO=o,this._clipRendererInitialized=!0,!0}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof _Container_js__WEBPACK_IMPORTED_MODULE_13__["Container"])){t=t||!1;break}if(i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}


/***/ }),

/***/ "YbU1":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GeometryUtils.js */ "HQFP");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RectangleBinPack.js */ "rhr1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function m(t){return t&&"static"===t.type}class p{constructor(t,e,i,s=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,this._requestRender=t,s>0&&(this._maxItemSize=s),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._pageWidth,this._pageHeight);const a=Math.floor(this._pageWidth),o=Math.floor(this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(a*o)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[0]}getHeight(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[1]}getPageTexture(t){return t<this._mosaicPages.length?this._mosaicPages[t].texture:null}has(t){return this._mosaicRects.has(t)}get itemCount(){return this._mosaicRects.size}getSpriteItem(t){return this._mosaicRects.get(t)}addSpriteItem(t,e,i,s,r,o){if(this._mosaicRects.has(t))return this._mosaicRects.get(t);let h,c,n;if(m(i))[h,c,n]=this._allocateImage(e[0],e[1]);else{h=new _Rect_js__WEBPACK_IMPORTED_MODULE_4__["default"](0,0,e[0],e[1]),c=this._mosaicPages.length;const t=void 0;this._mosaicPages.push({mosaicsData:i,size:e,dirty:!0,texture:t})}if(h.width<=0||h.height<=0)return null;const g={rect:h,width:e[0],height:e[1],sdf:r,simplePattern:o,pixelRatio:1,page:c};return this._mosaicRects.set(t,g),m(i)&&this._copy({rect:h,spriteSize:e,spriteData:i.data,page:c,pageSize:n,repeat:s,sdf:r}),g}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const t=this._spriteCopyQueue.pop();t&&this._copy(t)}getSpriteItems(t){const e={};for(const i of t)e[i]=this.getSpriteItem(i);return e}getMosaicItemPosition(t){const e=this.getSpriteItem(t),s=e&&e.rect;if(!s)return null;s.width=e.width,s.height=e.height;const a=e.width,r=e.height,o=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],h=this._mosaicPages[e.page];return{size:[e.width,e.height],tl:[(s.x+o)/h[0],(s.y+o)/h[1]],br:[(s.x+o+a)/h[0],(s.y+o+r)/h[1]],page:e.page}}bind(t,i,s=0,a=0){const r=this._mosaicPages[s],o=r.mosaicsData;let h=r.texture;if(h||(h=_(t,o,r.size),r.texture=h),h.setSamplingMode(i),m(o))t.bindTexture(h,a),r.dirty&&(h.setData(new Uint8Array(o.data.buffer)),h.generateMipmap());else{const i=o.data,s=i.bindFrame(t,h,a);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._requestRender)&&s&&i.frameCount>0&&this._requestRender.requestRender(),i.bindFrame(t,h,a)}r.dirty=!1}static _copyBits(t,e,i,s,a,r,o,h,c,n,g){let m=s*e+i,p=h*r+o;if(g){p-=r;for(let o=-1;o<=n;o++,m=((o+n)%n+s)*e+i,p+=r)for(let e=-1;e<=c;e++)a[p+e]=t[m+(e+c)%c]}else for(let _=0;_<n;_++){for(let e=0;e<c;e++)a[p+e]=t[m+e];m+=e,p+=r}}_copy(e){if(e.page>=this._mosaicPages.length)return;const s=this._mosaicPages[e.page],a=s.mosaicsData;if(!m(s.mosaicsData))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-invalid-resource","unsuitable data type!");const r=e.spriteData,o=a.data;o&&r||console.error("Source or target images are uninitialized!"),p._copyBits(r,e.spriteSize[0],0,0,o,e.pageSize[0],e.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],e.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],e.spriteSize[0],e.spriteSize[1],e.repeat),s.dirty=!0}_allocateImage(t,e){t+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],e+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"];const o=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<o){const i=2**Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(t)),r=2**Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(e)),o=new _Rect_js__WEBPACK_IMPORTED_MODULE_4__["default"](0,0,t,e);return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(i*r)},size:[i,r],dirty:!0,texture:void 0}),[o,this._mosaicPages.length-1,[i,r]]}const h=this._binPack.allocate(t,e);if(h.width<=0){const i=this._mosaicPages[this._currentPage];return!i.dirty&&m(i.mosaicsData)&&(i.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._pageWidth,this._pageHeight),this._allocateImage(t,e)}return[h,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null;for(const t of this._mosaicPages){const e=t.texture;e&&e.dispose();const i=t.mosaicsData;if(!m(i)){i.data.pause()}}this._mosaicPages=null,this._mosaicRects.clear()}}function _(t,e,i){return m(e)?new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["Texture"](t,{pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelType"].UNSIGNED_BYTE,width:i[0],height:i[1]},new Uint8Array(e.data.buffer)):new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["Texture"](t,{pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelType"].UNSIGNED_BYTE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureSamplingMode"].LINEAR,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureWrapMode"].CLAMP_TO_EDGE,width:i[0],height:i[1]},null)}


/***/ }),

/***/ "a7UV":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testFloatBufferBlend.js ***!
  \***********************************************************************/
/*! exports provided: testFloatBufferBlend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testFloatBufferBlend", function() { return x; });
/* harmony import */ var _3d_webgl_engine_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../3d/webgl-engine/lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferObject.js */ "fOQB");
/* harmony import */ var _context_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-util.js */ "zBXm");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FramebufferObject.js */ "0meK");
/* harmony import */ var _renderState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderState.js */ "GJyJ");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VertexArrayObject.js */ "D6bk");
/* harmony import */ var _VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var T,_,F,v={exports:{}};function x(T){var _,F,x,A,R;if(!T.gl)return!1;if(T.type===_context_util_js__WEBPACK_IMPORTED_MODULE_2__["ContextType"].WEBGL1)return!(null==(A=T.capabilities.textureFloat)||!A.textureFloat||null==(R=T.capabilities.colorBufferFloat)||!R.textureFloat);if(!((null==(_=T.capabilities.textureFloat)?void 0:_.textureFloat)&&(null==(F=T.capabilities.colorBufferFloat)?void 0:F.textureFloat)&&(null==(x=T.capabilities.colorBufferFloat)?void 0:x.floatBlend)))return!1;const S=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__["FramebufferObject"](T,{colorTarget:_enums_js__WEBPACK_IMPORTED_MODULE_3__["TargetType"].TEXTURE,depthStencilTarget:_enums_js__WEBPACK_IMPORTED_MODULE_3__["DepthStencilTargetType"].NONE},{target:_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureType"].TEXTURE_2D,wrapMode:_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureWrapMode"].CLAMP_TO_EDGE,pixelFormat:_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA,dataType:_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelType"].FLOAT,internalFormat:_enums_js__WEBPACK_IMPORTED_MODULE_3__["SizedPixelFormat"].RGBA32F,samplingMode:_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureSamplingMode"].NEAREST,width:1,height:1}),h=_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["BufferObject"].createVertex(T,_enums_js__WEBPACK_IMPORTED_MODULE_3__["Usage"].STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),P=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["VertexArrayObject"](T,new Map([["a_pos",0]]),{geometry:[new _VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_7__["VertexElementDescriptor"]("a_pos",2,_enums_js__WEBPACK_IMPORTED_MODULE_3__["DataType"].UNSIGNED_SHORT,0,4)]},{geometry:h}),L="\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ",B="\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",C=T.programCache.acquire(L,B,new Map([["a_pos",0]]));T.useProgram(C);const w=T.getBoundFramebufferObject(),{x:O,y:N,width:I,height:U}=T.getViewport();T.bindFramebuffer(S),T.setViewport(0,0,1,1),T.bindVAO(P),T.drawArrays(_enums_js__WEBPACK_IMPORTED_MODULE_3__["PrimitiveType"].TRIANGLE_STRIP,0,4);const y=Object(_renderState_js__WEBPACK_IMPORTED_MODULE_5__["makePipelineState"])({blending:_3d_webgl_engine_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_0__["blendingAlpha"]});T.setPipelineState(y),T.drawArrays(_enums_js__WEBPACK_IMPORTED_MODULE_3__["PrimitiveType"].TRIANGLE_STRIP,0,4),v.exports.init(T);const D=T.gl.getError();return T.setViewport(O,N,I,U),T.bindFramebuffer(w),C.dispose(),P.dispose(!1),h.dispose(),S.dispose(),1282!==D||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}T=v,_=function(){var e=function(e){window.console&&window.console.log&&window.console.log(e)},t=function(t){window.console&&window.console.error?window.console.error(t):e(t)},r={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},n=null,o=null;function i(e){if(null==n)for(var t in n={},o={},e)"number"==typeof e[t]&&(n[e[t]]=t,o[t]=e[t])}function a(){if(null==n)throw"WebGLDebugUtils.init(ctx) not called"}function u(e){return a(),void 0!==n[e]}function f(e){a();var t=n[e];return void 0!==t?"gl."+t:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function l(e,t,n,i){var a;if(void 0!==(a=r[e])&&void 0!==(a=a[t])&&a[n]){if("object"==typeof a[n]&&void 0!==a[n].enumBitwiseOr){for(var u=a[n].enumBitwiseOr,l=0,c=[],s=0;s<u.length;++s){var d=o[u[s]];0!=(i&d)&&(l|=d,c.push(f(d)))}return l===i?c.join(" | "):f(i)}return f(i)}return null===i?"null":void 0===i?"undefined":i.toString()}function c(e,t){for(var r="",n=t.length,o=0;o<n;++o)r+=(0==o?"":", ")+l(e,n,o,t[o]);return r}function s(e,t,r){e.__defineGetter__(r,(function(){return t[r]})),e.__defineSetter__(r,(function(e){t[r]=e}))}function d(e,r,n,o){o=o||e,i(e),r=r||function(e,r,n){for(var o="",i=n.length,a=0;a<i;++a)o+=(0==a?"":", ")+l(r,i,a,n[a]);t("WebGL error "+f(e)+" in "+r+"("+o+")")};var a={};function u(e,t){return function(){n&&n(t,arguments);var i=e[t].apply(e,arguments),u=o.getError();return 0!=u&&(a[u]=!0,r(u,t,arguments)),i}}var c={};for(var g in e)if("function"==typeof e[g])if("getExtension"!=g)c[g]=u(e,g);else{var b=u(e,g);c[g]=function(){return d(b.apply(e,arguments),r,n,o)}}else s(c,e,g);return c.getError=function(){for(var t in a)if(a.hasOwnProperty(t)&&a[t])return a[t]=!1,t;return e.NO_ERROR},c}function g(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var n=0;n<t;++n)e.disableVertexAttribArray(n),e.vertexAttribPointer(n,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(n,0);e.deleteBuffer(r);var o=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(n=0;n<o;++n)e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}function b(e){var t,r,n=[],o=[],i={},a=1,u=!1,f=[],l=0,c=0,d=!1,b=0,E={};function p(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(r=e.getContext,function(){var n=r.apply(e,arguments);if(n instanceof WebGLRenderingContext){if(n!=t){if(t)throw"got different context";i=S(t=n)}return i}return n});var m=function(e){n.push(p(e))},T=function(e){o.push(p(e))};function _(e){var t=e.addEventListener;e.addEventListener=function(r,n,o){switch(r){case"webglcontextlost":m(n);break;case"webglcontextrestored":T(n);break;default:t.apply(e,arguments)}}}function F(){for(var e=Object.keys(E),t=0;t<e.length;++t)delete E[e]}function v(){++c,u||l==c&&e.loseContext()}function x(e,t){var r=e[t];return function(){if(v(),!u)return r.apply(e,arguments)}}function A(){for(var e=0;e<f.length;++e){var r=f[e];r instanceof WebGLBuffer?t.deleteBuffer(r):r instanceof WebGLFramebuffer?t.deleteFramebuffer(r):r instanceof WebGLProgram?t.deleteProgram(r):r instanceof WebGLRenderbuffer?t.deleteRenderbuffer(r):r instanceof WebGLShader?t.deleteShader(r):r instanceof WebGLTexture&&t.deleteTexture(r)}}function R(e){return{statusMessage:e,preventDefault:function(){d=!0}}}return _(e),e.loseContext=function(){if(!u){for(u=!0,l=0,++a;t.getError(););F(),E[t.CONTEXT_LOST_WEBGL]=!0;var r=R("context lost"),o=n.slice();setTimeout((function(){for(var t=0;t<o.length;++t)o[t](r);b>=0&&setTimeout((function(){e.restoreContext()}),b)}),0)}},e.restoreContext=function(){u&&o.length&&setTimeout((function(){if(!d)throw"can not restore. webglcontestlost listener did not call event.preventDefault";A(),g(t),u=!1,c=0,d=!1;for(var e=o.slice(),r=R("context restored"),n=0;n<e.length;++n)e[n](r)}),0)},e.loseContextInNCalls=function(e){if(u)throw"You can not ask a lost contet to be lost";l=c+e},e.getNumCalls=function(){return c},e.setRestoreTimeout=function(e){b=e},e;function S(e){for(var r in e)"function"==typeof e[r]?i[r]=x(e,r):s(i,e,r);i.getError=function(){if(v(),!u)for(;e=t.getError();)E[e]=!0;for(var e in E)if(E[e])return delete E[e],e;return i.NO_ERROR};for(var n=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],o=0;o<n.length;++o){var l=n[o];i[l]=function(t){return function(){if(v(),u)return null;var r=t.apply(e,arguments);return r.__webglDebugContextLostId__=a,f.push(r),r}}(e[l])}var c=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(o=0;o<c.length;++o)l=c[o],i[l]=function(t){return function(){return v(),u?null:t.apply(e,arguments)}}(i[l]);var d=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(o=0;o<d.length;++o)l=d[o],i[l]=function(t){return function(){return v(),!u&&t.apply(e,arguments)}}(i[l]);return i.checkFramebufferStatus=function(t){return function(){return v(),u?i.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(i.checkFramebufferStatus),i.getAttribLocation=function(t){return function(){return v(),u?-1:t.apply(e,arguments)}}(i.getAttribLocation),i.getVertexAttribOffset=function(t){return function(){return v(),u?0:t.apply(e,arguments)}}(i.getVertexAttribOffset),i.isContextLost=function(){return u},i}}return{init:i,mightBeEnum:u,glEnumToString:f,glFunctionArgToString:l,glFunctionArgsToString:c,makeDebugContext:d,makeLostContextSimulatingCanvas:b,resetToInitialState:g}},void 0!==(F=_())&&(T.exports=F);


/***/ }),

/***/ "aK+o":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters.js */ "fGRN");
/* harmony import */ var _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaders/HighlightPrograms.js */ "L/m8");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/ProgramTemplate.js */ "aB/g");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class c{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,i){e.bindTexture(i,_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_1__["ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),e.bindVAO(this._resources.quadVAO),e.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["PrimitiveType"].TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,s){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_1__["RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),e.bindVAO(this._resources.quadVAO),e.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["PrimitiveType"].TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,s,i){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["BlendFactor"].ONE_MINUS_SRC_ALPHA),e.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["PrimitiveType"].TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(s,i,a){this._width=i,this._height=a;const m=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["BufferObject"].createVertex(s,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["Usage"].STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),c=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["VertexArrayObject"](s,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_7__["VertexElementDescriptor"]("a_position",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["DataType"].BYTE,0,4),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_7__["VertexElementDescriptor"]("a_texcoord",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["DataType"].UNSIGNED_BYTE,2,4)]},{geometry:m}),f=Object(_webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_5__["createProgram"])(s,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_2__["highlight"]),b=Object(_webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_5__["createProgram"])(s,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_2__["blur"]);s.useProgram(f),f.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_HIGHLIGHT_0"]),f.setUniform1i("u_shade",_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_HIGHLIGHT_1"]),f.setUniform1f("u_sigma",_parameters_js__WEBPACK_IMPORTED_MODULE_1__["SIGMA"]),s.useProgram(b),b.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_HIGHLIGHT_0"]),b.setUniform1f("u_sigma",_parameters_js__WEBPACK_IMPORTED_MODULE_1__["SIGMA"]),this._resources={quadGeometry:m,quadVAO:c,highlightProgram:f,blurProgram:b}}setup(r,e,s){this._resources?(this._width=e,this._height=s):this._initialize(r,e,s)}}


/***/ }),

/***/ "ac4n":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js ***!
  \************************************************************************************/
/*! exports provided: AnimationEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEffect", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexStream.js */ "gjrC");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_3__["Effect"]{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(r,i){if(!i.size)return;const{context:a,renderingOptions:o}=r;this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](a,[0,0,1,0,0,1,1,1]));const n=a.getBoundFramebufferObject(),{x:u,y:m,width:d,height:f}=a.getViewport();i.bindTextures(a);const c=i.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["ATTRIBUTE_DATA_ANIMATION"]);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c))return;const _=c.getFBO(a),l=c.getFBO(a,1);a.setViewport(0,0,i.size,i.size),this._computeDelta(r,l,o.labelsAnimationTime),this._updateAnimationState(r,l,_),a.bindFramebuffer(n),a.setViewport(u,m,d,f)}_computeDelta(e,t,s){const{context:a,painter:o,displayLevel:n}=e,u=o.materialManager.getProgram(e,this._desc,["delta"]);a.bindFramebuffer(t),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),a.useProgram(u),u.setUniform1i("u_maskTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),u.setUniform1i("u_sourceTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),u.setUniform1f("u_timeDelta",e.deltaTime),u.setUniform1f("u_animationTime",s),u.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()}_updateAnimationState(e,t,r){const{context:i,painter:s}=e,a=s.materialManager.getProgram(e,this._desc,["update"]);i.bindTexture(t.colorTexture,1),i.useProgram(a),a.setUniform1i("u_sourceTexture",1),i.bindFramebuffer(r),i.setClearColor(0,0,0,0),i.clear(i.gl.COLOR_BUFFER_BIT),this._quad.draw()}}


/***/ }),

/***/ "bfJE":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/RenderingContext.js ***!
  \*******************************************************************/
/*! exports provided: RenderingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingContext", function() { return k; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/time.js */ "sOpp");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BufferObject.js */ "fOQB");
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FramebufferObject.js */ "0meK");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkWebGLError.js */ "GVa1");
/* harmony import */ var _context_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context-util.js */ "zBXm");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShaderTranspiler.js */ "0bwe");
/* harmony import */ var _ProgramCache_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProgramCache.js */ "kGdt");
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Texture.js */ "of9L");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./VertexArrayObject.js */ "D6bk");
/* harmony import */ var _ContextState_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ContextState.js */ "yXMX");
/* harmony import */ var _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./InstanceCounter.js */ "r3F2");
/* harmony import */ var _renderState_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./renderState.js */ "GJyJ");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Util.js */ "hTmG");
/* harmony import */ var _WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./WebGLDriverTest.js */ "G7M8");
/* harmony import */ var _capabilities_Capabilities_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./capabilities/Capabilities.js */ "LPg/");
/* harmony import */ var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./capabilities/isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class k{constructor(t,e){this.gl=t,this.instanceCounter=new _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_14__["InstanceCounter"],this.programCache=new _ProgramCache_js__WEBPACK_IMPORTED_MODULE_10__["ProgramCache"](this),this._state=new _ContextState_js__WEBPACK_IMPORTED_MODULE_13__["ContextState"],this._numOfDrawCalls=0,this._numOfTriangles=0,this.type=Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_19__["default"])(t)?_context_util_js__WEBPACK_IMPORTED_MODULE_7__["ContextType"].WEBGL2:_context_util_js__WEBPACK_IMPORTED_MODULE_7__["ContextType"].WEBGL1,this._loadExtensions(),this.configure(e)}configure(t){this._capabilities=new _capabilities_Capabilities_js__WEBPACK_IMPORTED_MODULE_18__["Capabilities"](this.gl,t),this._parameters=this._loadParameters(t);const e=this.gl.getParameter(this.gl.VIEWPORT);this._state=new _ContextState_js__WEBPACK_IMPORTED_MODULE_13__["ContextState"],this._state.viewport={x:e[0],y:e[1],width:e[2],height:e[3]},this._stateTracker=new _renderState_js__WEBPACK_IMPORTED_MODULE_15__["StateTracker"]({setBlending:t=>{if(t){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(t.opRgb,t.opAlpha),this.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);const e=t.color;this.setBlendColor(e.r,e.g,e.b,e.a)}else this.setBlendingEnabled(!1)},setCulling:t=>{t?(this.setFaceCullingEnabled(!0),this.setCullFace(t.face),this.setFrontFace(t.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:t=>{t?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(t.factor,t.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:t=>{t?(this.setDepthTestEnabled(!0),this.setDepthFunction(t.func)):this.setDepthTestEnabled(!1)},setStencilTest:t=>{if(t){this.setStencilTestEnabled(!0);const e=t.function;this.setStencilFunction(e.func,e.ref,e.mask);const s=t.operation;this.setStencilOp(s.fail,s.zFail,s.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:t=>{t?(this.setDepthWriteEnabled(!0),this.setDepthRange(t.zNear,t.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:t=>{t?this.setColorMask(t.r,t.g,t.b,t.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:t=>{t?this.setStencilWriteMask(t.mask):this.setStencilWriteMask(0)}}),this.enforceState(),this._driverTest=new _WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_17__["WebGLDriverTest"](this)}get driverTest(){return this._driverTest}get contextAttributes(){return this.gl.getContextAttributes()}get parameters(){return this._parameters}dispose(){this.programCache.dispose(),this.bindVAO(null),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ARRAY_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ELEMENT_ARRAY_BUFFER),Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_19__["default"])(this.gl)&&(this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_PACK_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_UNPACK_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_READ_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_WRITE_BUFFER)),this._state.textureUnitMap.length=0,Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()&&this.instanceCounter.printResourceCount()}setPipelineState(t){this._stateTracker.setPipeline(t)}setBlendingEnabled(t){this._state.blend!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._state.blend=t,this._stateTracker.invalidateBlending())}externalProgramUpdate(){var t;null==(t=this._state.program)||t.stop(),this._state.program=null}externalTextureUnitUpdate(t,e){for(let s=0;s<t.length;++s)this._state.textureUnitMap[t[s]]=null;e>=0&&(this._state.activeTexture=e)}externalVertexArrayObjectUpdate(){const t=this.capabilities.vao;t&&(t.bindVertexArray(null),this._state.vertexArrayObject=null),this._state.vertexBuffer=null,this._state.indexBuffer=null}externalVertexBufferUpdate(){this._state.vertexBuffer=null}externalIndexBufferUpdate(){this._state.indexBuffer=null}setBlendColor(t,e,s,i){t===this._state.blendColor.r&&e===this._state.blendColor.g&&s===this._state.blendColor.b&&i===this._state.blendColor.a||(this.gl.blendColor(t,e,s,i),this._state.blendColor.r=t,this._state.blendColor.g=e,this._state.blendColor.b=s,this._state.blendColor.a=i,this._stateTracker.invalidateBlending())}setBlendFunction(t,e){t===this._state.blendFunction.srcRGB&&e===this._state.blendFunction.dstRGB||(this.gl.blendFunc(t,e),this._state.blendFunction.srcRGB=t,this._state.blendFunction.srcAlpha=t,this._state.blendFunction.dstRGB=e,this._state.blendFunction.dstAlpha=e,this._stateTracker.invalidateBlending())}setBlendFunctionSeparate(t,e,s,i){this._state.blendFunction.srcRGB===t&&this._state.blendFunction.srcAlpha===s&&this._state.blendFunction.dstRGB===e&&this._state.blendFunction.dstAlpha===i||(this.gl.blendFuncSeparate(t,e,s,i),this._state.blendFunction.srcRGB=t,this._state.blendFunction.srcAlpha=s,this._state.blendFunction.dstRGB=e,this._state.blendFunction.dstAlpha=i,this._stateTracker.invalidateBlending())}setBlendEquation(t){this._state.blendEquation.mode!==t&&(this.gl.blendEquation(t),this._state.blendEquation.mode=t,this._state.blendEquation.modeAlpha=t,this._stateTracker.invalidateBlending())}setBlendEquationSeparate(t,e){this._state.blendEquation.mode===t&&this._state.blendEquation.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._state.blendEquation.mode=t,this._state.blendEquation.modeAlpha=e,this._stateTracker.invalidateBlending())}setColorMask(t,e,s,i){this._state.colorMask.r===t&&this._state.colorMask.g===e&&this._state.colorMask.b===s&&this._state.colorMask.a===i||(this.gl.colorMask(t,e,s,i),this._state.colorMask.r=t,this._state.colorMask.g=e,this._state.colorMask.b=s,this._state.colorMask.a=i,this._stateTracker.invalidateColorWrite())}setClearColor(t,e,s,i){this._state.clearColor.r===t&&this._state.clearColor.g===e&&this._state.clearColor.b===s&&this._state.clearColor.a===i||(this.gl.clearColor(t,e,s,i),this._state.clearColor.r=t,this._state.clearColor.g=e,this._state.clearColor.b=s,this._state.clearColor.a=i)}setFaceCullingEnabled(t){this._state.faceCulling!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._state.faceCulling=t,this._stateTracker.invalidateCulling())}setPolygonOffsetFillEnabled(t){this._state.polygonOffsetFill!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._state.polygonOffsetFill=t,this._stateTracker.invalidatePolygonOffset())}setPolygonOffset(t,e){this._state.polygonOffset[0]===t&&this._state.polygonOffset[1]===e||(this._state.polygonOffset[0]=t,this._state.polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset())}setCullFace(t){this._state.cullFace!==t&&(this.gl.cullFace(t),this._state.cullFace=t,this._stateTracker.invalidateCulling())}setFrontFace(t){this._state.frontFace!==t&&(this.gl.frontFace(t),this._state.frontFace=t,this._stateTracker.invalidateCulling())}setScissorTestEnabled(t){this._state.scissorTest!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._state.scissorTest=t)}setScissorRect(t,e,s,i){this._state.scissorRect.x===t&&this._state.scissorRect.y===e&&this._state.scissorRect.width===s&&this._state.scissorRect.height===i||(this.gl.scissor(t,e,s,i),this._state.scissorRect.x=t,this._state.scissorRect.y=e,this._state.scissorRect.width=s,this._state.scissorRect.height=i)}setDepthTestEnabled(t){this._state.depthTest!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._state.depthTest=t,this._stateTracker.invalidateDepthTest())}setClearDepth(t){this._state.clearDepth!==t&&(this.gl.clearDepth(t),this._state.clearDepth=t)}setDepthFunction(t){this._state.depthFunction!==t&&(this.gl.depthFunc(t),this._state.depthFunction=t,this._stateTracker.invalidateDepthTest())}setDepthWriteEnabled(t){this._state.depthWrite!==t&&(this.gl.depthMask(t),this._state.depthWrite=t,this._stateTracker.invalidateDepthWrite())}setDepthRange(t,e){this._state.depthRange.zNear===t&&this._state.depthRange.zFar===e||(this.gl.depthRange(t,e),this._state.depthRange.zNear=t,this._state.depthRange.zFar=e,this._stateTracker.invalidateDepthWrite())}setStencilTestEnabled(t){this._state.stencilTest!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._state.stencilTest=t,this._stateTracker.invalidateStencilTest())}setClearStencil(t){t!==this._state.clearStencil&&(this.gl.clearStencil(t),this._state.clearStencil=t)}setStencilFunction(t,e,s){this._state.stencilFunction.func===t&&this._state.stencilFunction.ref===e&&this._state.stencilFunction.mask===s||(this.gl.stencilFunc(t,e,s),this._state.stencilFunction.face=_enums_js__WEBPACK_IMPORTED_MODULE_8__["Face"].FRONT_AND_BACK,this._state.stencilFunction.func=t,this._state.stencilFunction.ref=e,this._state.stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())}setStencilFunctionSeparate(t,e,s,i){this._state.stencilFunction.face===t&&this._state.stencilFunction.func===e&&this._state.stencilFunction.ref===s&&this._state.stencilFunction.mask===i||(this.gl.stencilFuncSeparate(t,e,s,i),this._state.stencilFunction.face=t,this._state.stencilFunction.func=e,this._state.stencilFunction.ref=s,this._state.stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())}setStencilWriteMask(t){this._state.stencilWriteMask!==t&&(this.gl.stencilMask(t),this._state.stencilWriteMask=t,this._stateTracker.invalidateStencilWrite())}setStencilOp(t,e,s){this._state.stencilOperation.face===_enums_js__WEBPACK_IMPORTED_MODULE_8__["Face"].FRONT_AND_BACK&&this._state.stencilOperation.fail===t&&this._state.stencilOperation.zFail===e&&this._state.stencilOperation.zPass===s||(this.gl.stencilOp(t,e,s),this._state.stencilOperation.face=_enums_js__WEBPACK_IMPORTED_MODULE_8__["Face"].FRONT_AND_BACK,this._state.stencilOperation.fail=t,this._state.stencilOperation.zFail=e,this._state.stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())}setStencilOpSeparate(t,e,s,i){this._state.stencilOperation.face===t&&this._state.stencilOperation.fail===e&&this._state.stencilOperation.zFail===s&&this._state.stencilOperation.zPass===i||(this.gl.stencilOpSeparate(t,e,s,i),this._state.stencilOperation.face=t,this._state.stencilOperation.fail=e,this._state.stencilOperation.zFail=s,this._state.stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())}setActiveTexture(t,e=!1){const s=this._state.activeTexture;return t>=0&&(e||t!==this._state.activeTexture)&&(this.gl.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BASE_TEXTURE_UNIT"]+t),this._state.activeTexture=t),s}clear(t){t&&this.gl.clear(t)}clearSafe(t,e=255){t&&(t&_enums_js__WEBPACK_IMPORTED_MODULE_8__["ClearBufferBit"].COLOR_BUFFER_BIT&&this.setColorMask(!0,!0,!0,!0),t&_enums_js__WEBPACK_IMPORTED_MODULE_8__["ClearBufferBit"].DEPTH_BUFFER_BIT&&this.setDepthWriteEnabled(!0),t&_enums_js__WEBPACK_IMPORTED_MODULE_8__["ClearBufferBit"].STENCIL_BUFFER_BIT&&this.setStencilWriteMask(e),this.gl.clear(t))}drawArrays(t,e,s){if(Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()&&(this._numOfDrawCalls++,this._numOfTriangles+=I(t,s)),this.gl.drawArrays(t,e,s),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()){const t=Object(_Util_js__WEBPACK_IMPORTED_MODULE_16__["getErrorString"])(this);t&&console.error("drawArrays:",t)}}drawElements(e,s,i,a){if(Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()&&(this._numOfDrawCalls++,this._numOfTriangles+=I(e,s)),this.gl.drawElements(e,s,i,a),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()){const n=Object(_Util_js__WEBPACK_IMPORTED_MODULE_16__["getErrorString"])(this);if(n){var r;const l=this.getBoundVAO(),h=null==l?void 0:l.indexBuffer,f={indexBuffer:h,vertexBuffers:null==l?void 0:l.vertexBuffers},o={mode:e,count:s,type:i,offset:a},u=null!=(r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["applySome"])(h,(t=>t.size)))?r:0,_=a+s,c=u<_?`. Buffer is too small. Attempted to draw index ${_} of ${u}`:"";console.error(`drawElements: ${n}${c}`,{args:o,vao:f})}}}logIno(){Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()&&console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`)}get capabilities(){return this._capabilities}setViewport(t,e,s,i){s=Math.max(Math.round(s),1),i=Math.max(Math.round(i),1);const a=this._state.viewport;a.x===t&&a.y===e&&a.width===s&&a.height===i||(a.x=t,a.y=e,a.width=s,a.height=i,this.gl.viewport(t,e,s,i))}getViewport(){return{x:this._state.viewport.x,y:this._state.viewport.y,width:this._state.viewport.width,height:this._state.viewport.height}}useProgram(t){var e,s;this._state.program!==t&&(null==(e=this._state.program)||e.stop(),this._state.program=t,this.gl.useProgram(null!=(s=null==t?void 0:t.glName)?s:null))}bindTexture(t,i,a=!1){(i>=this.parameters.maxTextureImageUnits||i<0)&&console.error("Input texture unit is out of range of available units!");const r=this._state.textureUnitMap[i];return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)||null==t.glName?(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(this.setActiveTexture(i,a),this.gl.bindTexture(r.descriptor.target,null)),this._state.textureUnitMap[i]=null,r):a||r!==t?(this.setActiveTexture(i,a),this.gl.bindTexture(t.descriptor.target,t.glName),t.applyChanges(),this._state.textureUnitMap[i]=t,r):(t.isDirty&&(this.setActiveTexture(i,a),t.applyChanges()),r)}unbindTextureAllUnits(t){for(let e=0;e<this.parameters.maxTextureImageUnits;e++)this._state.textureUnitMap[e]===t&&(this.bindTexture(null,e),this._state.textureUnitMap[e]=null)}bindFramebuffer(t,s=!1){if(s||this._state.readFramebuffer!==t||this._state.drawFramebuffer!==t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return this.gl.bindFramebuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].FRAMEBUFFER,null),this._state.readFramebuffer=null,void(this._state.drawFramebuffer=null);t.initializeAndBind(_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].FRAMEBUFFER),this._state.readFramebuffer=t,this._state.drawFramebuffer=t}}bindFramebufferSeparate(t,s,a=!1){const r=s===_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].READ_FRAMEBUFFER,n=r?this._state.readFramebuffer:this._state.drawFramebuffer;(a||n!==t)&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)?this.gl.bindFramebuffer(s,null):t.initializeAndBind(s),r?this._state.readFramebuffer=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(t,null):this._state.drawFramebuffer=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(t,null))}blitFramebuffer(t,e,s=0,i=0,a=t.width,r=t.height,n=0,l=0,h=e.width,f=e.height,o=_enums_js__WEBPACK_IMPORTED_MODULE_8__["ClearBufferBit"].COLOR_BUFFER_BIT,d=_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureSamplingMode"].NEAREST){this.bindFramebufferSeparate(t,_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].READ_FRAMEBUFFER),this.bindFramebufferSeparate(e,_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].DRAW_FRAMEBUFFER);this.gl.blitFramebuffer(s,i,a,r,n,l,h,f,o,d)}bindBuffer(t,e){if(t)switch(null!=e||(e=t.bufferType),e){case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ARRAY_BUFFER:this._state.vertexBuffer=y(this.gl,t,e,this._state.vertexBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=y(this.gl,t,e,this._state.indexBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER:this._state.uniformBuffer=y(this.gl,t,e,this._state.uniformBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=y(this.gl,t,e,this._state.pixelPackBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=y(this.gl,t,e,this._state.pixelUnpackBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_READ_BUFFER:this._state.copyReadBuffer=y(this.gl,t,e,this._state.copyReadBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_WRITE_BUFFER:this._state.copyWriteBuffer=y(this.gl,t,e,this._state.copyWriteBuffer)}}bindRenderbuffer(t){const e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._state.renderbuffer=null),this._state.renderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._state.renderbuffer=t)}_getBufferBinding(t,s){if(s>=this.parameters.maxUniformBufferBindings||s<0)return console.error("Uniform buffer binding point is out of range!"),null;const i=this._state.uniformBufferBindingPoints;let a=i[s];return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)&&(a={buffer:null,offset:0,size:0},i[s]=a),a}bindBufferBase(t,s,i){const a=this._getBufferBinding(t,s);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a))return;if(a.buffer===i&&0===a.offset&&0===a.size)return;this.gl.bindBufferBase(t,s,i?i.glName:null),a.buffer=i,a.offset=0,a.size=0}bindBufferRange(t,s,i,a,r){const n=this._getBufferBinding(t,s);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(n))return;if(n.buffer===i&&n.offset===a&&n.size===r)return;if(a%this._parameters.uniformBufferOffsetAlignment!=0)return void console.error("Uniform buffer binding offset is not a multiple of the context offset alignment");this.gl.bindBufferRange(t,s,i.glName,a,r),n.buffer=i,n.offset=a,n.size=r}bindUBO(t,s,i,a){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s)?this.bindBufferBase(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,t,null):(Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()&&(null!=a?a:s.byteLength)>this._parameters.maxUniformBlockSize&&console.error("Attempting to bind more data than the maximum uniform block size"),s.initialize(),void 0!==i&&void 0!==a?this.bindBufferRange(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,t,s.buffer,i,a):this.bindBufferBase(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,t,s.buffer))}unbindUBO(t){for(let e=0,i=this._state.uniformBufferBindingPoints.length;e<i;e++){const i=this._state.uniformBufferBindingPoints[e];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)&&i.buffer===t.buffer&&this.bindBufferBase(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,e,null)}}unbindBuffer(t){switch(t){case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ARRAY_BUFFER:this._state.vertexBuffer=y(this.gl,null,t,this._state.vertexBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ELEMENT_ARRAY_BUFFER:this._state.indexBuffer=y(this.gl,null,t,this._state.indexBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER:this._state.uniformBuffer=y(this.gl,null,t,this._state.uniformBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_PACK_BUFFER:this._state.pixelPackBuffer=y(this.gl,null,t,this._state.pixelPackBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_UNPACK_BUFFER:this._state.pixelUnpackBuffer=y(this.gl,null,t,this._state.pixelUnpackBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_READ_BUFFER:this._state.copyReadBuffer=y(this.gl,null,t,this._state.copyReadBuffer);break;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_WRITE_BUFFER:this._state.copyWriteBuffer=y(this.gl,null,t,this._state.copyWriteBuffer)}}bindVAO(t=null){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)?this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null):this._state.vertexArrayObject!==t&&(t.bind(),this._state.vertexArrayObject=t)}async clientWaitAsync(t=Object(_core_time_js__WEBPACK_IMPORTED_MODULE_2__["Milliseconds"])(10)){const e={};this.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_8__["ResourceType"].Sync,e);const s=this.gl,i=s.fenceSync(_enums_js__WEBPACK_IMPORTED_MODULE_8__["SyncCondition"].SYNC_GPU_COMMANDS_COMPLETE,0);let n;s.flush();do{await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["after"])(t),n=s.clientWaitSync(i,0,0)}while(n===_enums_js__WEBPACK_IMPORTED_MODULE_8__["ClientWaitSyncStatus"].TIMEOUT_EXPIRED);if(s.deleteSync(i),this.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_8__["ResourceType"].Sync,e),n===_enums_js__WEBPACK_IMPORTED_MODULE_8__["ClientWaitSyncStatus"].WAIT_FAILED)throw new Error("Client wait failed")}getBoundFramebufferObject(t=_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].FRAMEBUFFER){return t===_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].READ_FRAMEBUFFER?this._state.readFramebuffer:this._state.drawFramebuffer}getBoundVAO(){return this._state.vertexArrayObject}resetState(){this.useProgram(null),this.bindVAO(null),this.bindFramebuffer(null,!0),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ARRAY_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ELEMENT_ARRAY_BUFFER),Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_19__["default"])(this.gl)&&(this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER),this._state.uniformBufferBindingPoints.length=0,this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_PACK_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_UNPACK_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_READ_BUFFER),this.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_WRITE_BUFFER));for(let t=0;t<this.parameters.maxTextureImageUnits;++t)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BlendFactor"].ONE,_enums_js__WEBPACK_IMPORTED_MODULE_8__["BlendFactor"].ZERO),this.setBlendEquation(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BlendOperation"].ADD),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(_enums_js__WEBPACK_IMPORTED_MODULE_8__["Face"].BACK),this.setFrontFace(_enums_js__WEBPACK_IMPORTED_MODULE_8__["CullMode"].CCW),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(_enums_js__WEBPACK_IMPORTED_MODULE_8__["CompareFunction"].LESS),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(_enums_js__WEBPACK_IMPORTED_MODULE_8__["CompareFunction"].ALWAYS,0,0),this.setStencilOp(_enums_js__WEBPACK_IMPORTED_MODULE_8__["StencilOperation"].KEEP,_enums_js__WEBPACK_IMPORTED_MODULE_8__["StencilOperation"].KEEP,_enums_js__WEBPACK_IMPORTED_MODULE_8__["StencilOperation"].KEEP),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}enforceState(){var t,e;const i=this.gl,a=this.capabilities.vao;a&&a.bindVertexArray(null);for(let s=0;s<this.parameters.maxVertexAttributes;s++)i.disableVertexAttribArray(s);if(this._state.vertexBuffer?i.bindBuffer(this._state.vertexBuffer.bufferType,this._state.vertexBuffer.glName):i.bindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ARRAY_BUFFER,null),this._state.indexBuffer?i.bindBuffer(this._state.indexBuffer.bufferType,this._state.indexBuffer.glName):i.bindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].ELEMENT_ARRAY_BUFFER,null),Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_19__["default"])(i)){var r,l;this._state.uniformBuffer?i.bindBuffer(this._state.uniformBuffer.bufferType,this._state.uniformBuffer.glName):i.bindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,null);for(let t=0;t<this._parameters.maxUniformBufferBindings;t++){const e=this._state.uniformBufferBindingPoints[t];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&null!==e.buffer){const{buffer:s,offset:a,size:r}=e;0===a&&0===r?i.bindBufferBase(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,t,s.glName):i.bindBufferRange(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,t,s.glName,a,r)}else i.bindBufferBase(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].UNIFORM_BUFFER,t,null)}this._state.pixelPackBuffer?i.bindBuffer(this._state.pixelPackBuffer.bufferType,this._state.pixelPackBuffer.glName):i.bindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_PACK_BUFFER,null),this._state.pixelUnpackBuffer?i.bindBuffer(this._state.pixelUnpackBuffer.bufferType,this._state.pixelUnpackBuffer.glName):i.bindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].PIXEL_UNPACK_BUFFER,null),this._state.copyReadBuffer?i.bindBuffer(this._state.copyReadBuffer.bufferType,this._state.copyReadBuffer.glName):i.bindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_READ_BUFFER,null),this._state.copyWriteBuffer?i.bindBuffer(this._state.copyWriteBuffer.bufferType,this._state.copyWriteBuffer.glName):i.bindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BufferType"].COPY_WRITE_BUFFER,null),i.bindFramebuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].READ_FRAMEBUFFER,null),i.readBuffer(i.BACK),this._state.readFramebuffer&&(i.bindFramebuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].READ_FRAMEBUFFER,this._state.readFramebuffer.glName),i.readBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["ColorAttachment"].COLOR_ATTACHMENT0)),i.bindFramebuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].DRAW_FRAMEBUFFER,null!=(r=null==(l=this._state.drawFramebuffer)?void 0:l.glName)?r:null)}else{var f,u;this._state.readFramebuffer=this._state.drawFramebuffer,i.bindFramebuffer(_enums_js__WEBPACK_IMPORTED_MODULE_8__["FramebufferTarget"].FRAMEBUFFER,null!=(f=null==(u=this._state.drawFramebuffer)?void 0:u.glName)?f:null)}if(a&&this._state.vertexArrayObject){const t=this._state.vertexArrayObject;this._state.vertexArrayObject&&(this._state.vertexArrayObject.unbind(),this._state.vertexArrayObject=null),this.bindVAO(t)}i.useProgram(null!=(t=null==(e=this._state.program)?void 0:e.glName)?t:null),i.blendColor(this._state.blendColor.r,this._state.blendColor.g,this._state.blendColor.b,this._state.blendColor.a),i.bindRenderbuffer(i.RENDERBUFFER,this._state.renderbuffer?this._state.renderbuffer.glName:null),!0===this._state.blend?i.enable(this.gl.BLEND):i.disable(this.gl.BLEND),i.blendEquationSeparate(this._state.blendEquation.mode,this._state.blendEquation.modeAlpha),i.blendFuncSeparate(this._state.blendFunction.srcRGB,this._state.blendFunction.dstRGB,this._state.blendFunction.srcAlpha,this._state.blendFunction.dstAlpha),i.clearColor(this._state.clearColor.r,this._state.clearColor.g,this._state.clearColor.b,this._state.clearColor.a),i.clearDepth(this._state.clearDepth),i.clearStencil(this._state.clearStencil),i.colorMask(this._state.colorMask.r,this._state.colorMask.g,this._state.colorMask.b,this._state.colorMask.a),i.cullFace(this._state.cullFace),i.depthFunc(this._state.depthFunction),i.depthRange(this._state.depthRange.zNear,this._state.depthRange.zFar),!0===this._state.depthTest?i.enable(i.DEPTH_TEST):i.disable(i.DEPTH_TEST),i.depthMask(this._state.depthWrite),i.frontFace(this._state.frontFace),i.lineWidth(1),!0===this._state.faceCulling?i.enable(i.CULL_FACE):i.disable(i.CULL_FACE),i.polygonOffset(this._state.polygonOffset[0],this._state.polygonOffset[1]),!0===this._state.polygonOffsetFill?i.enable(i.POLYGON_OFFSET_FILL):i.disable(i.POLYGON_OFFSET_FILL),i.scissor(this._state.scissorRect.x,this._state.scissorRect.y,this._state.scissorRect.width,this._state.scissorRect.height),!0===this._state.scissorTest?i.enable(i.SCISSOR_TEST):i.disable(i.SCISSOR_TEST),i.stencilFunc(this._state.stencilFunction.func,this._state.stencilFunction.ref,this._state.stencilFunction.mask),i.stencilOpSeparate(this._state.stencilOperation.face,this._state.stencilOperation.fail,this._state.stencilOperation.zFail,this._state.stencilOperation.zPass),!0===this._state.stencilTest?i.enable(i.STENCIL_TEST):i.disable(i.STENCIL_TEST),i.stencilMask(this._state.stencilWriteMask);for(let n=0;n<this.parameters.maxTextureImageUnits;n++){i.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BASE_TEXTURE_UNIT"]+n),i.bindTexture(_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureType"].TEXTURE_2D,null),i.bindTexture(_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureType"].TEXTURE_CUBE_MAP,null),Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_19__["default"])(i)&&(i.bindTexture(_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureType"].TEXTURE_3D,null),i.bindTexture(_enums_js__WEBPACK_IMPORTED_MODULE_8__["TextureType"].TEXTURE_2D_ARRAY,null));const t=this._state.textureUnitMap[n];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)&&i.bindTexture(t.descriptor.target,t.glName)}i.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_8__["BASE_TEXTURE_UNIT"]+this._state.activeTexture),i.viewport(this._state.viewport.x,this._state.viewport.y,this._state.viewport.width,this._state.viewport.height),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__["webglDebugEnabled"])()&&(this._numOfDrawCalls=0,this._numOfTriangles=0)}_loadExtensions(){this.type===_context_util_js__WEBPACK_IMPORTED_MODULE_7__["ContextType"].WEBGL1&&this.gl.getExtension("OES_element_index_uint"),this.gl.getExtension("KHR_parallel_shader_compile")}_loadParameters(t){var e;const s=this.capabilities.textureFilterAnisotropic,i=null!=(e=t.maxAnisotropy)?e:1/0,a=Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_19__["default"])(this.gl),r=this.gl,n={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:s?Math.min(this.gl.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY),i):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),maxUniformBufferBindings:a?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0,maxVertexUniformBlocks:a?r.getParameter(r.MAX_VERTEX_UNIFORM_BLOCKS):0,maxFragmentUniformBlocks:a?r.getParameter(r.MAX_FRAGMENT_UNIFORM_BLOCKS):0,maxUniformBlockSize:a?r.getParameter(r.MAX_UNIFORM_BLOCK_SIZE):0,uniformBufferOffsetAlignment:a?r.getParameter(r.UNIFORM_BUFFER_OFFSET_ALIGNMENT):1,maxArrayTextureLayers:a?r.getParameter(r.MAX_ARRAY_TEXTURE_LAYERS):1,maxSamples:a?r.getParameter(r.MAX_SAMPLES):1};return _Texture_js__WEBPACK_IMPORTED_MODULE_11__["Texture"].TEXTURE_UNIT_FOR_UPDATES=n.maxTextureImageUnits-1,n}}function y(t,e,s,i){return e?i!==e&&t.bindBuffer(s,e.glName):t.bindBuffer(s,null),e}function I(t,e){switch(t){case _enums_js__WEBPACK_IMPORTED_MODULE_8__["PrimitiveType"].POINTS:return 2*e;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["PrimitiveType"].TRIANGLES:return e/3;case _enums_js__WEBPACK_IMPORTED_MODULE_8__["PrimitiveType"].TRIANGLE_STRIP:case _enums_js__WEBPACK_IMPORTED_MODULE_8__["PrimitiveType"].TRIANGLE_FAN:return e-2;default:return 0}}


/***/ }),

/***/ "bfVh":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js ***!
  \****************************************************************************/
/*! exports provided: BitBlitRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitBlitRenderer", function() { return _; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _DefaultVertexAttributeLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultVertexAttributeLayouts.js */ "LlzU");
/* harmony import */ var _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/BitBlitPrograms.js */ "q6Gj");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/ProgramTemplate.js */ "aB/g");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class _{constructor(){this._initialized=!1}dispose(){this._program=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["disposeMaybe"])(this._program),this._vertexArrayObject=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["disposeMaybe"])(this._vertexArrayObject)}render(r,t,e,i){r&&(this._initialized||this._initialize(r),r.setBlendFunctionSeparate(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["BlendFactor"].ONE_MINUS_SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["BlendFactor"].ONE_MINUS_SRC_ALPHA),r.bindVAO(this._vertexArrayObject),r.useProgram(this._program),t.setSamplingMode(e),r.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),r.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["PrimitiveType"].TRIANGLE_STRIP,0,4),r.bindTexture(null,0),r.bindVAO())}_initialize(r){if(this._initialized)return!0;const s=Object(_webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_5__["createProgram"])(r,_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_2__["bitBlit"]);if(!s)return!1;const o=new Int8Array(16);o[0]=-1,o[1]=-1,o[2]=0,o[3]=0,o[4]=1,o[5]=-1,o[6]=1,o[7]=0,o[8]=-1,o[9]=1,o[10]=0,o[11]=1,o[12]=1,o[13]=1,o[14]=1,o[15]=1;const _=_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_2__["bitBlit"].attributes,p=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["VertexArrayObject"](r,_,_DefaultVertexAttributeLayouts_js__WEBPACK_IMPORTED_MODULE_1__["PosTex2b"],{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["BufferObject"].createVertex(r,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["Usage"].STATIC_DRAW,o)});return this._program=s,this._vertexArrayObject=p,this._initialized=!0,!0}}


/***/ }),

/***/ "cXeJ":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/VertexArrayObjects.js ***!
  \**********************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return r; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(r,t){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r))return{createVertexArray:r.createVertexArray.bind(r),deleteVertexArray:r.deleteVertexArray.bind(r),bindVertexArray:r.bindVertexArray.bind(r)};if(t.vao)return null;const n=r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object");return n?{createVertexArray:n.createVertexArrayOES.bind(n),deleteVertexArray:n.deleteVertexArrayOES.bind(n),bindVertexArray:n.bindVertexArrayOES.bind(n)}:null}


/***/ }),

/***/ "cZ4F":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js ***!
  \*************************************************************************************************/
/*! exports provided: getSizeForValueSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeForValueSimple", function() { return a; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../renderers/support/lengthUtils.js */ "m0D6");
/* harmony import */ var _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../renderers/visualVariables/support/sizeVariableUtils.js */ "hvLT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=Math.PI;function a(e,t){switch(t.transformationType){case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].Additive:return s(e,t);case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].Constant:return u(t,e);case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].ClampedLinear:return o(e,t);case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].Proportional:return l(e,t);case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].Stops:return c(e,t);case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].RealWorldSize:return m(e,t);case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].Identity:return e;case _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["TransformationType"].Unknown:return null}}function i(e,t){return"number"==typeof e?e:a(t,e)}function s(e,t){return e+(i(t.minSize,e)||t.minDataValue)}function u(e,t){const n=e.stops;let r=n&&n.length&&n[0].size;return null==r&&(r=e.minSize),i(r,t)}function o(e,t){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),r=i(t.minSize,e),a=i(t.maxSize,e);return e<=t.minDataValue?r:e>=t.maxDataValue?a:r+n*(a-r)}function l(t,n){const r=t/n.minDataValue,a=i(n.minSize,t),s=i(n.maxSize,t);let u=null;return u=r*a,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(u,a,s)}function c(e,t){const[n,r,a]=p(e,t.cache.ipData);if(n===r)return i(t.stops[n].size,e);{const s=i(t.stops[n].size,e);return s+(i(t.stops[r].size,e)-s)*a}}function m(n,a){const s=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__["meterIn"][a.valueUnit],u=i(a.minSize,n),o=i(a.maxSize,n),{valueRepresentation:l}=a;let c=null;return c="area"===l?2*Math.sqrt(n/r)/s:"radius"===l||"distance"===l?2*n/s:n/s,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(c,u,o)}function p(e,t){if(!t)return;let n=0,r=t.length-1;return t.some(((t,a)=>e<t?(r=a,!0):(n=a,!1))),[n,r,(e-t[n])/(t[r]-t[n])]}


/***/ }),

/***/ "cwtj":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/* harmony import */ var _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../navigation/RotationMomentumEstimator.js */ "EdjT");
/* harmony import */ var _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../navigation/ZoomMomentumEstimator.js */ "jm8U");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._rotationMomentumEstimator=new _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_12__["RotationMomentumEstimator"](.6,.15,.95),this._rotationDirection=1,this._zoomDirection=1,this._zoomMomentumEstimator=new _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__["ZoomMomentumEstimator"],this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"],scale:0,rotation:0}),this.watch("_momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,o){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._previousCenter=o.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1)}update(t,o){null===this._updateTimestamp&&(this._updateTimestamp=o.timestamp);const i=o.angle,s=o.radius,e=o.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),m=Math.abs(s-this._startRadius),a=this._startRadius/s;if(this._previousRadius){const r=s/this._previousRadius;let h=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&o.timestamp-this._updateTimestamp>200&&(this._zoomOnly=m-n>0),null===this._zoomOnly||this._zoomOnly?h=0:this.addToRotateEstimator(i-this._startAngle,o.timestamp)):h=0,this.addToZoomEstimator(o,a),this.navigation.setViewpoint([e.x,e.y],1/r,h,[this._previousCenter.x-e.x,e.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=e}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,o){this._rotationMomentumEstimator.add(t,.001*o)}addToZoomEstimator(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp)}canZoomIn(t){const o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i}canZoomOut(t){const o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((o,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,e=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),u=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),p=.001*i;if(this._momentumFinished=e&&u,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,p))*this._rotationDirection*180/Math.PI:0;let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,p)):1;const e=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])(),u=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])();if(this._previousCenter){Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(e,this._previousCenter.x,this._previousCenter.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["getPaddingScreenTranslation"])(u,t.size,t.padding),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["m"])(e,e,u);const{constraints:a,scale:p}=t,c=p*s;s<1&&!a.canZoomInTo(c)?(s=p/a.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!a.canZoomOutTo(c)&&(s=p/a.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["scaleAndRotateBy"])(o,t.viewpoint,s,i,e,t.size),t.constraints.constrainByGeometry(o)}}this._animationTime+=p}))}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"_momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"navigation",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.navigation.actions.Pinch")],l);const _=l;


/***/ }),

/***/ "eylR":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/DropShadow.js ***!
  \***********************************************************************************************/
/*! exports provided: DropShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropShadow", function() { return c; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../VertexStream.js */ "gjrC");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const _=[1,0],d=[0,1];class c{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(i,s,o){const{context:a,state:l,painter:n}=i,{materialManager:u}=n,h=this._programDesc,p=s.width,c=s.height,B=[Math.round(p/2),Math.round(c/2)],{blurRadius:m,offsetX:T,offsetY:f,color:g}=o,F=[Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(T/2),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(f/2)];this._createOrResizeResources(i,p,c,B);const O=this._horizontalBlurFBO,E=this._verticalBlurFBO;a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1);const b=this._layerFBOTexture;s.copyToTexture(0,0,p,c,0,0,b),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_1__["default"](a,[-1,-1,1,-1,-1,1,1,1])),a.setViewport(0,0,B[0],B[1]);const w=this._quad;w.bind(),a.setBlendingEnabled(!1);const x=u.getProgram(i,h.blur,[{name:"radius",value:Math.ceil(m)}]);a.useProgram(x),a.bindFramebuffer(O),a.bindTexture(s.colorTexture,4),x.setUniform1i("u_colorTexture",4),x.setUniform2fv("u_texSize",B),x.setUniform2fv("u_direction",_),x.setUniform1f("u_sigma",m),w.draw(),a.bindFramebuffer(E),a.bindTexture(O.colorTexture,5),x.setUniform1i("u_colorTexture",5),x.setUniform2fv("u_direction",d),w.draw(),a.bindFramebuffer(s),a.setViewport(0,0,p,c);const M=u.getProgram(i,h.composite);a.useProgram(M),a.bindTexture(E.colorTexture,2),M.setUniform1i("u_blurTexture",2),a.bindTexture(b,3),M.setUniform1i("u_layerFBOTexture",3),M.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),M.setUniformMatrix3fv("u_displayViewMat3",l.displayMat3),M.setUniform2fv("u_shadowOffset",F),w.draw(),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!0),a.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["BlendFactor"].ONE_MINUS_SRC_ALPHA),w.unbind()}_createOrResizeResources(e,t,r,_){const{context:d}=e;this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===r||(this._size[0]=t,this._size[1]=r,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(_[0],_[1]):this._horizontalBlurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["FramebufferObject"](d,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DepthStencilTargetType"].NONE,width:_[0],height:_[1]},{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].LINEAR,flipped:!1,width:_[0],height:_[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(_[0],_[1]):this._verticalBlurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["FramebufferObject"](d,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["DepthStencilTargetType"].NONE,width:_[0],height:_[1]},{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].LINEAR,flipped:!1,width:_[0],height:_[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,r):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](d,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].LINEAR,flipped:!1,width:t,height:r}))}}


/***/ }),

/***/ "fGRN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js ***!
  \*****************************************************************************************/
/*! exports provided: ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, HIGHLIGHT_SIZING, RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, SHADE_TEXTURE_SIZE, SIGMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_SIZING", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADE_TEXTURE_SIZE", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGMA", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=1,t=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n=256,e={outlineWidth:.7,outerHaloWidth:.7,innerHaloWidth:.7,outlinePosition:0};


/***/ }),

/***/ "fUoV":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js ***!
  \**************************************************************************************/
/*! exports provided: createMagnifierProgram, magnifierProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMagnifierProgram", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magnifierProgramTemplate", function() { return a; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/* harmony import */ var _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/ProgramTemplate.js */ "aB/g");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("magnifier/magnifier.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function t(r){return Object(_webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_1__["createProgram"])(r,a)}


/***/ }),

/***/ "jE2w":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/floatRGBA.js */ "Zhw2");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=1e20;class r{constructor(t){this.size=t;const s=document.createElement("canvas");s.width=s.height=t,this._context=s.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(r,h,n=31){this._initSVG();const o=this.createSVGString(r);return new Promise(((r,a)=>{const d=new Image;d.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(o),d.onload=()=>{d.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(d,0,0,this.size,this.size);const s=this._context.getImageData(0,0,this.size,this.size),e=new Uint8Array(this.size*this.size*4);for(let t=0;t<this.size*this.size;t++){const e=s.data[4*t+3]/255;this._gridOuter[t]=1===e?0:0===e?i:Math.max(0,.5-e)**2,this._gridInner[t]=1===e?i:0===e?0:Math.max(0,e-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size);for(let i=0;i<this.size*this.size;i++){const s=this._gridOuter[i]-this._gridInner[i];Object(_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__["packFloatRGBA"])(.5-s/(2*n),e,4*i)}r(e)};const l=h&&h.signal;l&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["onAbort"])(l,(()=>a(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAbortError"])())))}))}_initSVG(){if(!this._svg){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("style","position: absolute;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),document.body.appendChild(t),this._svg=t}}createSVGString(t){this._initSVG();const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",t),this._svg.appendChild(s);const e=s.getBBox(),i=e.width/e.height,r=this.size/2;let h,n,o,a;if(i>1){n=h=r/e.width;const t=r*(1/i);o=this.size/4,a=r-t/2}else{h=n=r/e.height;o=r-r*i/2,a=this.size/4}const d=-e.x*h+o,l=-e.y*n+a;s.setAttribute("style",`transform: matrix(${h}, 0, 0, ${n}, ${d}, ${l})`);const _=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;return this._svg.removeChild(s),_}_edt(t,s,e){const i=this._f,r=this._d,h=this._v,n=this._z;for(let o=0;o<s;o++){for(let r=0;r<e;r++)i[r]=t[r*s+o];this._edt1d(i,r,h,n,e);for(let i=0;i<e;i++)t[i*s+o]=r[i]}for(let o=0;o<e;o++){for(let e=0;e<s;e++)i[e]=t[o*s+e];this._edt1d(i,r,h,n,s);for(let e=0;e<s;e++)t[o*s+e]=Math.sqrt(r[e])}}_edt1d(t,s,e,r,h){e[0]=0,r[0]=-i,r[1]=+i;for(let n=1,o=0;n<h;n++){let s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);for(;s<=r[o];)o--,s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);o++,e[o]=n,r[o]=s,r[o+1]=+i}for(let i=0,n=0;i<h;i++){for(;r[n+1]<i;)n++;s[i]=(i-e[n])*(i-e[n])+t[e[n]]}}}


/***/ }),

/***/ "jm8U":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js ***!
  \*****************************************************************************/
/*! exports provided: ZoomMomentum, ZoomMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentum", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentumEstimator", function() { return s; });
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MomentumEstimator.js */ "VfAO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r extends _Momentum_js__WEBPACK_IMPORTED_MODULE_0__["Momentum"]{constructor(e,t,r){super(e,t,r)}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__["MomentumEstimator"]{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,s){return new r(e,t,s)}}


/***/ }),

/***/ "kIoy":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js ***!
  \*********************************************************************************/
/*! exports provided: default, getPNGSize, isAnimatedPNG, isPNG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPNGSize", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedPNG", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPNG", function() { return h; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=new Uint32Array(256);for(let b=0;b<256;b++){let t=b;for(let e=0;e<8;e++)t=0!=(1&t)?3988292384^t>>>1:t>>>1;r[b]=t}function a(t,e=0,a=t.length-e){let i=-1;for(let s=e,n=e+a;s<n;s++)i=i>>>8^r[255&(i^t[s])];return-1^i}const i=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not a PNG"),s=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not an animated PNG"),n=new Uint8Array([137,80,78,71,13,10,26,10]);function h(t){const e=t.constructor===Uint8Array?t:new Uint8Array(t);return!n.some(((t,r)=>t!==e[r]))}function u(t){let e,r;return p(new Uint8Array(t),((t,a,i)=>{const s=new DataView(a.buffer);"IHDR"===t&&(e=s.getUint32(i+8),r=s.getUint32(i+12))})),[e,r]}function l(t){const e=new Uint8Array(t);if(!h(e))return!1;let r=!1;return p(e,(t=>!(r="acTL"===t))),r}class o{constructor(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[],this.paused=!1,this.playing=!1,this.playSpeed=1,this.currentFrameNumber=0,this._lastUsedFrame=-1}static async create(r,a){const i=new o;try{await i._load(r,a)}catch(s){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(s))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${s.message}`)}return i}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,r){t.bindTexture(e,r);const a=this.frameChanged();if(!a)return!1;const i=this.currentFrame,s=i.frameData,n=e.descriptor;return(i.left||i.top||i.width!==n.width||i.height!==n.height)&&e.setData(null),e.updateData(0,i.left,i.top,i.width,i.height,s),this.updateUsedFrame(),a}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(r,a){try{const t=d(this,r);if(t!==this)return t;this._resizeCanvas=document.createElement("canvas"),this._resizeCanvas.width=this.width,this._resizeCanvas.height=this.height,await Promise.all(this.frames.map((t=>t.createImage(this._resizeCanvas))))}catch(i){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(i))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse PNG")}this.play()}_play(){let t,e;if(0===this.playSpeed)return void this.pause();this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed);const r=this.frames[this.currentFrameNumber];this.currentFrame={frameData:r.imageData,top:r.top,left:r.left,width:r.width,height:r.height},this.timerID=window.setTimeout((()=>this._play()),t)}}class c{constructor(){this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.data=null,this.imageData=null}async createImage(t){if(null===this.imageData)return new Promise(((e,r)=>{const a=URL.createObjectURL(this.data),i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(a),this.imageData=m(i,t),e()},i.onerror=()=>{URL.revokeObjectURL(a),this.imageData=null,r(new Error("Image creation error"))},i.src=a}))}}function m(t,e){e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const a=r.getImageData(0,0,t.width,t.height),i=new Uint8Array(a.data);let s;for(let n=0;n<i.length;n+=4)s=i[n+3]/255,i[n]=i[n]*s,i[n+1]=i[n+1]*s,i[n+2]=i[n+2]*s;return new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height)}function d(t,e){const r=new Uint8Array(e);if(n.some(((t,e)=>t!==r[e])))return i;let a=!1;if(p(r,(t=>!(a="acTL"===t))),!a)return s;const h=[],u=[];let l=null,o=null,m=0;if(p(r,((e,r,a,i)=>{const s=new DataView(r.buffer);switch(e){case"IHDR":l=r.subarray(a+8,a+8+i),t.width=s.getUint32(a+8),t.height=s.getUint32(a+12);break;case"acTL":t.numPlays=s.getUint32(a+8+4);break;case"fcTL":{o&&(t.frames.push(o),m++),o=new c,o.width=s.getUint32(a+8+4),o.height=s.getUint32(a+8+8),o.left=s.getUint32(a+8+12),o.top=s.getUint32(a+8+16);const e=s.getUint16(a+8+20);let r=s.getUint16(a+8+22);0===r&&(r=100),o.delay=1e3*e/r,o.delay<=10&&(o.delay=100),t.playTime+=o.delay,o.disposeOp=s.getUint8(a+8+24),o.blendOp=s.getUint8(a+8+25),o.dataParts=[],0===m&&2===o.disposeOp&&(o.disposeOp=1);break}case"fdAT":o&&o.dataParts.push(r.subarray(a+8+4,a+8+i));break;case"IDAT":o&&o.dataParts.push(r.subarray(a+8,a+8+i));break;case"IEND":u.push(w(r,a,12+i));break;default:h.push(w(r,a,12+i))}})),0===t.frames.length)return s;t.frameCount=t.frames.length;const d=new Blob(h),g=new Blob(u);return t.frames.forEach((t=>{let e=[];e.push(n),l.set(U(t.width),0),l.set(U(t.height),4),e.push(y("IHDR",l)),e.push(d),t.dataParts.forEach((t=>e.push(y("IDAT",t)))),e.push(g),t.data=new Blob(e,{type:"image/png"}),delete t.dataParts,e=null})),t}function p(t,e){const r=new DataView(t.buffer);let a,i,s,n=8;do{i=r.getUint32(n),a=g(t,n+4,4),s=e(a,t,n,i),n+=12+i}while(!1!==s&&"IEND"!==a&&n<t.length)}function g(t,e,r){const a=Array.prototype.slice.call(t.subarray(e,e+r));return String.fromCharCode.apply(String,a)}function f(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}function w(t,e,r){const a=new Uint8Array(r);return a.set(t.subarray(e,e+r)),a}function y(t,e){const r=t.length+e.length,i=new Uint8Array(r+8),s=new DataView(i.buffer);s.setUint32(0,e.length),i.set(f(t),4),i.set(e,8);const n=a(i,4,r);return s.setUint32(r+4,n),i}function U(t){return new Uint8Array([t>>>24&255,t>>>16&255,t>>>8&255,255&t])}


/***/ }),

/***/ "krN3":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/pbf.js */ "ATu9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let s,a,r,n,i,c,g;for(;t.next();)switch(t.tag()){case 1:s=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:n=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:g=t.getUInt32();break;default:t.skip()}t.release(),s&&(this._metrics[s]={width:r,height:n,left:i,top:c,advance:g},this._bitmaps[s]=a);break}default:e.skip()}e.release();break}default:t.skip()}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}}class a{constructor(){this._ranges=[]}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}}class r{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(a,r,n){const i=this._getFontStack(a);if(i.getRange(r))return Promise.resolve();const c=256*r,g=c+255,o=this._baseURL.replace("{fontstack}",a).replace("{range}",c+"-"+g);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o,{responseType:"array-buffer",...n}).then((t=>{i.addRange(r,new s(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(t.data),new DataView(t.data))))}))}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const a=Math.floor(e/256);if(a>256)return;const r=s.getRange(a);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new a),e}}


/***/ }),

/***/ "lx5q":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/CircularArray.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const e of this._buffer)if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&s(e))return e;return null}clear(s){let e=this.dequeue();for(;Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e);)s&&s(e),e=this.dequeue()}}


/***/ }),

/***/ "mvnU":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/LabelManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_throttle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/throttle.js */ "5C/r");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./engine/webgl/collisions/CollisionEngine.js */ "KVK4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=32,d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.2d.layers.labels.LabelManager");let u=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){constructor(e){super(e),this._applyVisibilityPassThrottled=Object(_core_throttle_js__WEBPACK_IMPORTED_MODULE_5__["throttle"])(this._applyVisibilityPass,n,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_11__["CollisionEngine"]}destroy(){this.collisionEngine=null,this._applyVisibilityPassThrottled.remove(),this._applyVisibilityPassThrottled=null}get updating(){return this.updateRequested}update(e){this._applyVisibilityPassThrottled(e)}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}processUpdate(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))}_applyVisibilityPass(e){try{const t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(this.view.allLayerViews.items,e,t)}catch(t){d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-labeling","Encountered an error during label decluttering",t))}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],u.prototype,"updateParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"view",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.labels.LabelManager")],u);const c=u;


/***/ }),

/***/ "mxcV":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Bloom.js ***!
  \******************************************************************************************/
/*! exports provided: Bloom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bloom", function() { return c; });
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../VertexStream.js */ "gjrC");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=5,p=[1,0],_=[0,1],m=[1,.8,.6,.4,.2],d=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class c{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(u),this._nMips=u,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}}draw(i,s,r){const{width:o,height:n}=s,{context:a,painter:l}=i,{materialManager:h}=l,c=a.gl,T=this._programDesc,{strength:f,radius:g,threshold:B}=r;this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_0__["default"](a,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(i,o,n),a.setStencilTestEnabled(!1),a.setBlendingEnabled(!0),a.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA),a.setStencilWriteMask(0);const O=this._quad;O.bind(),a.bindFramebuffer(this._intensityFBO);const F=h.getProgram(i,T.luminosityHighPass);a.useProgram(F),a.bindTexture(s.colorTexture,0),F.setUniform1i("u_texture",0),F.setUniform3fv("u_defaultColor",[0,0,0]),F.setUniform1f("u_defaultOpacity",0),F.setUniform1f("u_luminosityThreshold",B),F.setUniform1f("u_smoothWidth",.01);const b=[Math.round(o/2),Math.round(n/2)];a.setViewport(0,0,b[0],b[1]),a.setClearColor(0,0,0,0),a.clear(c.COLOR_BUFFER_BIT),O.draw(),a.setBlendingEnabled(!1);let E=this._intensityFBO.colorTexture;for(let t=0;t<this._nMips;t++){const e=h.getProgram(i,T.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[t]}]);a.useProgram(e),a.bindTexture(E,t+1),e.setUniform1i("u_colorTexture",t+1),e.setUniform2fv("u_texSize",b),e.setUniform2fv("u_direction",p),a.setViewport(0,0,b[0],b[1]);const s=this._mipsFBOs[t];a.bindFramebuffer(s.horizontal),O.draw(),E=s.horizontal.colorTexture,a.bindFramebuffer(s.vertical),a.bindTexture(E,t+1),e.setUniform2fv("u_direction",_),O.draw(),E=s.vertical.colorTexture,b[0]=Math.round(b[0]/2),b[1]=Math.round(b[1]/2)}a.setViewport(0,0,o,n);const x=h.getProgram(i,T.composite,[{name:"nummips",value:u}]);a.bindFramebuffer(this._compositeFBO),a.useProgram(x),x.setUniform1f("u_bloomStrength",f),x.setUniform1f("u_bloomRadius",g),x.setUniform1fv("u_bloomFactors",m),x.setUniform3fv("u_bloomTintColors",d),a.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),a.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),a.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),a.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),a.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),O.draw(),a.bindFramebuffer(s),a.setBlendingEnabled(!0);const w=h.getProgram(i,T.blit);a.useProgram(w),a.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),a.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE),O.draw(),O.unbind(),a.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["BlendFactor"].ONE_MINUS_SRC_ALPHA),a.setStencilTestEnabled(!0)}_createOrResizeResources(t,e,u){const{context:p}=t;if(this._compositeFBO&&this._size[0]===e&&this._size[1]===u)return;this._size[0]=e,this._size[1]=u;const _=[Math.round(e/2),Math.round(u/2)];this._compositeFBO?this._compositeFBO.resize(e,u):this._compositeFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["FramebufferObject"](p,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DepthStencilTargetType"].NONE,width:e,height:u}),this._intensityFBO?this._intensityFBO.resize(_[0],_[1]):this._intensityFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["FramebufferObject"](p,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DepthStencilTargetType"].NONE,width:_[0],height:_[1]},{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].LINEAR,flipped:!1,width:_[0],height:_[1]});for(let m=0;m<this._nMips;m++)this._mipsFBOs[m]?(this._mipsFBOs[m].horizontal.resize(_[0],_[1]),this._mipsFBOs[m].vertical.resize(_[0],_[1])):this._mipsFBOs[m]={horizontal:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["FramebufferObject"](p,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DepthStencilTargetType"].NONE,width:_[0],height:_[1]},{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].LINEAR,flipped:!1,width:_[0],height:_[1]}),vertical:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["FramebufferObject"](p,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DepthStencilTargetType"].NONE,width:_[0],height:_[1]},{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["TextureSamplingMode"].LINEAR,flipped:!1,width:_[0],height:_[1]})},_[0]=Math.round(_[0]/2),_[1]=Math.round(_[1]/2)}}


/***/ }),

/***/ "oQiY":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js ***!
  \*********************************************************************/
/*! exports provided: Profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return o; });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "lx5q");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/capabilities/DisjointTimerQuery.js */ "GprA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("esri-2d-profiler");class o{constructor(t,r){if(this._events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"],this._entries=new Map,this._timings=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__["default"](10),!i)return;this._ext=Object(_webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__["createDisjointTimerQuery"])(t.gl,{}),this._debugOutput=r;const o=t.gl;if(this.enableCommandLogging)for(const e in o)if("function"==typeof o[e]){const s=o[e],t=-1!==e.indexOf("draw");o[e]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:e,args:r,isDrawCommand:t}),this._currentSummary&&(this._currentSummary.commands++,t&&this._currentSummary.drawCommands++),s.apply(o,r))}}get enableCommandLogging(){return!("object"==typeof i&&i.disableCommands)}recordContainerStart(e){i&&(this._currentContainer=e)}recordContainerEnd(){i&&(this._currentContainer=null)}recordPassStart(e){i&&(this._currentPass=e,this._initSummary())}recordPassEnd(){i&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){i&&(this._currentBrush=e)}recordBrushEnd(){i&&(this._currentBrush=null)}recordStart(e){if(i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._ext)){if(this._entries.has(e)){const s=this._entries.get(e),t=this._ext.resultAvailable(s.query),n=this._ext.disjoint();if(t&&!n){const t=this._ext.getResult(s.query)/1e6;let n=0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._timings.enqueue(t))){const e=this._timings.entries,s=e.length;let t=0;for(const r of e)t+=r;n=t/s}const i=t.toFixed(2),o=n?n.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${i} ms (${o} last 10 avg)\n${s.commandsLen} Commands (${s.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(s.summaries),console.log("Commands: ",s.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${i} ms (${o} last 10 avg)`),this._debugOutput.innerHTML=`${i} (${o})`}for(const e of s.handles)e.remove();this._entries.delete(e)}const s={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(s.handles.push(this._events.on("command",(e=>{s.commandsLen++,s.commands.push(e),e.isDrawCommand&&s.drawCommands++}))),s.handles.push(this._events.on("summary",(e=>{s.summaries.push(e)})))),this._ext.beginTimeElapsed(s.query),this._entries.set(e,s)}}recordEnd(e){i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)}}


/***/ }),

/***/ "q6Gj":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js ***!
  \************************************************************************************/
/*! exports provided: bitBlit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitBlit", function() { return e; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])};


/***/ }),

/***/ "qnLi":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../input/InputManager.js */ "JYnY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={container:"esri-zoom-box__container",overlay:"esri-zoom-box__overlay",background:"esri-zoom-box__overlay-background",box:"esri-zoom-box__outline"},n={zoom:"Shift",counter:"Ctrl"};let h=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this._handles&&this._handles.forEach((t=>{t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[n.zoom],(t=>this._handleDrag(t,1)),_input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__["ViewEventPriorities"].INTERNAL),t.on("drag",[n.zoom,n.counter],(t=>this._handleDrag(t,-1)),_input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__["ViewEventPriorities"].INTERNAL))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,r,i){this._box.x=t,this._box.y=e,this._box.width=r,this._box.height=i,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,o,s){const a=this.view,n=a.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createScreenPoint"])(t+.5*i,e+.5*o));let h=Math.max(i/a.width,o/a.height);-1===s&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:n,scale:a.scale*h})}_updateBox(t,e,r,i){const o=this._boxShape;o.setAttributeNS(null,"x",""+t),o.setAttributeNS(null,"y",""+e),o.setAttributeNS(null,"width",""+r),o.setAttributeNS(null,"height",""+i),o.setAttributeNS(null,"class",a.box)}_updateBackground(t,e,r,i){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,r,i,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=a.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),r.setAttributeNS(null,"class",a.background);const i=document.createElementNS("http://www.w3.org/2000/svg","rect"),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.setAttributeNS(null,"class",a.overlay),o.appendChild(r),o.appendChild(i),this._container.appendChild(o),this._backgroundShape=r,this._boxShape=i,this._overlay=o}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,r,i,o,s){const a=t+r,n=e+i;return"M 0 0 L "+o+" 0 L "+o+" "+s+" L 0 "+s+" ZM "+t+" "+e+" L "+t+" "+n+" L "+a+" "+n+" L "+a+" "+e+" Z"}_handleDrag(t,e){const r=t.x,i=t.y,o=t.origin.x,s=t.origin.y;let a,n,h,l;switch(r>o?(a=o,h=r-o):(a=r,h=o-r),i>s?(n=s,l=i-s):(n=i,l=s-i),t.action){case"start":this._start();break;case"update":this._update(a,n,h,l);break;case"end":this._end(a,n,h,l,e)}t.stopPropagation()}_redraw(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:r,height:i}=this._box;this._updateBox(t,e,r,i),this._updateBackground(t,e,r,i),this._rafId=requestAnimationFrame(this._redraw)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],h.prototype,"navigation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],h.prototype,"view",null),h=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.navigation.ZoomBox")],h);const l=h;


/***/ }),

/***/ "r3F2":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/InstanceCounter.js ***!
  \******************************************************************/
/*! exports provided: InstanceCounter, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceCounter", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return e; });
/* harmony import */ var _support_AllocationTracer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../support/AllocationTracer.js */ "AJFd");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(){this.RECORD_ALLOCATIONS=!1}}const e=new s;class n{constructor(){for(this._current=new Array,this._max=new Array,this._allocations=new _support_AllocationTracer_js__WEBPACK_IMPORTED_MODULE_0__["AllocationTracer"](e.RECORD_ALLOCATIONS);this._current.length<_enums_js__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].COUNT;)this._current.push(0),this._max.push(0)}resetMax(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)}increment(t,r){const s=++this._current[t];this._max[t]=Math.max(s,this._max[t]),this._allocations.add(r)}decrement(t,r){--this._current[t],this._allocations.remove(r)}get max(){return this._max}get current(){return this._current}get total(){return this.current.reduce(((t,r)=>t+r),0)}printResourceCount(){if(this.total>0){console.log("Live objects:");for(let t=0;t<_enums_js__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].COUNT;++t){const s=this._current[t];s>0&&console.log(`${_enums_js__WEBPACK_IMPORTED_MODULE_1__["ResourceType"][t]}: ${s}`)}}this._allocations.print()}}


/***/ }),

/***/ "rhr1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._width=0,this._height=0,this._free=[],this._width=t,this._height=e,this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](0,0,t,e))}get width(){return this._width}get height(){return this._height}allocate(t,e){if(t>this._width||e>this._height)return new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"];let i=null,s=-1;for(let h=0;h<this._free.length;++h){const r=this._free[h];t<=r.width&&e<=r.height&&(null===i||r.y<=i.y&&r.x<=i.x)&&(i=r,s=h)}return null===i?new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]:(this._free.splice(s,1),i.width<i.height?(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,e)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,i.width,i.height-e))):(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,i.height)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,t,i.height-e))),new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y,t,e))}release(h){for(let t=0;t<this._free.length;++t){const e=this._free[t];if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)e.width+=h.width;else if(e.x===h.x&&e.width===h.width&&e.y+e.height===h.y)e.height+=h.height;else if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)e.x=h.x,e.width+=h.width;else{if(h.x!==e.x||h.width!==e.width||h.y+h.height!==e.y)continue;e.y=h.y,e.height+=h.height}this._free.splice(t,1),this.release(h)}this._free.push(h)}}


/***/ }),

/***/ "sAsQ":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(r,e){var t;this.brushes=r,this.name=e.name,this.drawPhase=e.drawPhase||_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].MAP,this._targetFn=e.target,this.effects=e.effects||[],this.enableDefaultDraw=null!=(t=e.enableDefaultDraw)?t:()=>!0}render(r){const{context:e,profiler:s}=r,t=this._targetFn(),a=this.drawPhase&r.drawPhase;if(s.recordPassStart(this.name),a){this.enableDefaultDraw()&&this._doRender(r,t),s.recordPassEnd();for(const a of this.effects){if(!a.enable())continue;const o=a.apply;s.recordPassStart(this.name+"."+o.name),s.recordBrushStart(o.name);const n=a.args&&a.args(),{x:i,y:d,width:f,height:h}=e.getViewport(),c=e.getBoundFramebufferObject();o.bind(r,n);const p=o.createOptions(r,n),u=r.passOptions;r.passOptions=p,this._doRender(r,t,o.defines),r.passOptions=u,o.draw(r,n),o.unbind(r,n),e.bindFramebuffer(c),e.setViewport(i,d,f,h),s.recordBrushEnd(),s.recordPassEnd()}}}_doRender(s,t,a){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))if(Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["isArrayLike"])(t)){for(const r of t)if(r.visible)for(const e of this.brushes)s.profiler.recordBrushStart(e.name),e.prepareState(s,r,a),e.draw(s,r,a),s.profiler.recordBrushEnd()}else for(const r of this.brushes)s.profiler.recordBrushStart(r.name),r.prepareState(s,t,a),r.draw(s,t,a),s.profiler.recordBrushEnd()}}


/***/ }),

/***/ "sz4w":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/Momentum.js ***!
  \****************************************************************/
/*! exports provided: Momentum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Momentum", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t,i,o){this._initialVelocity=t,this._stopVelocity=i,this._friction=o,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,i){const o=this.value(t);return this.value(t+i)-o}valueFromInitialVelocity(t,i){i=Math.min(i,this.duration);const o=1-this.friction;return t*(o**i-1)/Math.log(o)}}


/***/ }),

/***/ "tGAV":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/mapViewDeps.js ***!
  \***********************************************************/
/*! exports provided: Stage, LabelManager, GraphicsView2D, GraphicContainer, MapViewNavigation, MagnifierView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Stage.js */ "XDzM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _engine_Stage_js__WEBPACK_IMPORTED_MODULE_0__["Stage"]; });

/* harmony import */ var _LabelManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelManager.js */ "mvnU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelManager", function() { return _LabelManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/graphics/GraphicsView2D.js */ "Vh9r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsView2D", function() { return _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/graphics/GraphicContainer.js */ "q03O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicContainer", function() { return _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/MapViewNavigation.js */ "1dih");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapViewNavigation", function() { return _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./magnifier/MagnifierView2D.js */ "0Ht6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagnifierView2D", function() { return _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/



/***/ }),

/***/ "uzVh":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/load.js ***!
  \********************************************************************/
/*! exports provided: loadBooleanExtension, loadColorBufferFloat, loadCompressedTextureETC, loadCompressedTextureS3TC, loadMinMaxBlending, loadTextureFilterAnisotropicCapability, loadTextureFloat, loadTextureNorm16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBooleanExtension", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadColorBufferFloat", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCompressedTextureETC", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCompressedTextureS3TC", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMinMaxBlending", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTextureFilterAnisotropicCapability", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTextureFloat", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTextureNorm16", function() { return l; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function _(t,_){if(_.compressedTextureETC)return null;const e=t.getExtension("WEBGL_compressed_texture_etc");return e?{COMPRESSED_R11_EAC:e.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:e.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:e.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:e.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:e.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:e.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:e.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}function e(t,_){if(_.compressedTextureS3TC)return null;const e=t.getExtension("WEBGL_compressed_texture_s3tc");return e?{COMPRESSED_RGB_S3TC_DXT1:e.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:e.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:e.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:e.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function E(_,e){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_))return{MIN:_.MIN,MAX:_.MAX};if(e.blendMinMax)return null;{const t=_.getExtension("EXT_blend_minmax");return t?{MIN:t.MIN_EXT,MAX:t.MAX_EXT}:null}}function n(t,_){if(_.textureFilterAnisotropic)return null;const e=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return e?{MAX_TEXTURE_MAX_ANISOTROPY:e.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:e.TEXTURE_MAX_ANISOTROPY_EXT}:null}function R(_,e){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_))return{textureFloat:!0,textureFloatLinear:!e.textureFloatLinear&&!!_.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!_.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:_.HALF_FLOAT,R16F:_.R16F,RG16F:_.RG16F,RGBA16F:_.RGBA16F,R32F:_.R32F,RG32F:_.RG32F,RGBA32F:_.RGBA32F,R11F_G11F_B10F:_.R11F_G11F_B10F,RGB16F:_.RGB16F};if(_ instanceof WebGLRenderingContext){const t=!e.textureHalfFloat&&_.getExtension("OES_texture_half_float");return{textureFloat:!e.textureFloat&&!!_.getExtension("OES_texture_float"),textureFloatLinear:!e.textureFloatLinear&&!!_.getExtension("OES_texture_float_linear"),textureHalfFloat:!!t,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!_.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t?t.HALF_FLOAT_OES:void 0}}return null}function r(_,e){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)){const t=!e.colorBufferFloat&&_.getExtension("EXT_color_buffer_half_float"),E=!e.colorBufferFloat&&_.getExtension("EXT_color_buffer_float"),n=!e.floatBlend&&!e.colorBufferFloat&&_.getExtension("EXT_float_blend");return t||E||n?{textureFloat:!!E,textureHalfFloat:!!t,floatBlend:!!n,R16F:_.R16F,RG16F:_.RG16F,RGBA16F:_.RGBA16F,R32F:_.R32F,RG32F:_.RG32F,RGBA32F:_.RGBA32F,R11F_G11F_B10F:_.R11F_G11F_B10F,RGB16F:_.RGB16F}:null}if(_ instanceof WebGLRenderingContext){const t=!e.colorBufferFloat&&_.getExtension("EXT_color_buffer_half_float"),E=!e.colorBufferFloat&&_.getExtension("WEBGL_color_buffer_float"),n=!e.floatBlend&&!e.colorBufferFloat&&_.getExtension("EXT_float_blend");return t||E||n?{textureFloat:!!E,textureHalfFloat:!!t,floatBlend:!!n,RGBA16F:t?t.RGBA16F_EXT:void 0,RGB16F:t?t.RGB16F_EXT:void 0,RGBA32F:E?E.RGBA32F_EXT:void 0}:null}return null}function o(_,e,E,n,R){if(n&&Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_))return!0;if(e[E])return!1;for(const t of R)if(_.getExtension(t))return!0;return!1}function l(_,e){if(!Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_))return null;if(e.textureNorm16)return null;const E=_.getExtension("EXT_texture_norm16");return E?{R16:E.R16_EXT,RG16:E.RG16_EXT,RGB16:E.RGB16_EXT,RGBA16:E.RGBA16_EXT,R16_SNORM:E.R16_SNORM_EXT,RG16_SNORM:E.RG16_SNORM_EXT,RGB16_SNORM:E.RGB16_SNORM_EXT,RGBA16_SNORM:E.RGBA16_SNORM_EXT}:null}


/***/ }),

/***/ "v9+0":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return W; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config.js */ "EyXx");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_BidiText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/BidiText.js */ "9X5u");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../symbols/cim/Rasterizer.js */ "e4KH");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _fontUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fontUtils.js */ "5ROZ");
/* harmony import */ var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GlyphMosaic.js */ "BaZm");
/* harmony import */ var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GlyphSource.js */ "krN3");
/* harmony import */ var _SDFConverter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SDFConverter.js */ "jE2w");
/* harmony import */ var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SpriteMosaic.js */ "YbU1");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animatedFormats/apng.js */ "kIoy");
/* harmony import */ var _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animatedFormats/gif.js */ "G+vY");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/Result.js */ "GqaZ");
/* harmony import */ var _util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/symbolUtils.js */ "DRKG");
/* harmony import */ var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../support/QueueProcessor.js */ "tUFA");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const k=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),O="arial-unicode-ms-regular",Q=126,H=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.2d.engine.webgl.TextureManager");async function V(e,i){const r=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["getUrl"])(e);let n;const o=";base64,";if(r.includes(o)){const e=r.indexOf(o)+o.length,t=r.substring(e),i=atob(t),s=new Uint8Array(i.length);for(let r=0;r<i.length;r++)s[r]=i.charCodeAt(r);n=s.buffer}else try{const{data:e}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r,{responseType:"array-buffer",...i});n=e}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(a))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${r}`)}return n}function Y(e,t){const i=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t)*window.devicePixelRatio),s=i>=128?2:4;return Math.min(e,i*s)}const D=(e,t,i)=>H.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,t,i));class J{constructor(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}static fromMosaic(e,t){return new J(e,t.page,t.sdf)}}class W{constructor(i,r){this.resourceManager=r,this._invalidFontsMap=new Map,this._sdfConverter=new _SDFConverter_js__WEBPACK_IMPORTED_MODULE_16__["default"](Q),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._ongoingRasterizations=new Map,this._imageRequestQueue=new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_23__["QueueProcessor"]({concurrency:10,process:async(e,i)=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAborted"])(i);try{return await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e,{responseType:"image",signal:i})}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${e}`,r);throw r}}}),this._spriteMosaic=new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_17__["default"](i,2048,2048,500),this._glyphSource=new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_15__["default"](`${_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_14__["default"](1024,1024,this._glyphSource),this._rasterizer=new _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_10__["default"](r)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}async rasterizeItem(e,t,i,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(e))return D("mapview-null-resource","Unable to rasterize null resource"),null;switch(e.type){case"text":case"esriTS":{const t=await this._rasterizeText(e,i,s);return t.forEach((e=>this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].GLYPH,e))),{glyphMosaicItems:t}}default:{if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["is3D"])(e))return D("mapview-invalid-type",`MapView does not support symbol type: ${e.type}`,e),null;const i=await this._rasterizeSpriteSymbol(e,t,s);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_21__["ok"])(i)&&i&&this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].SPRITE,i),{spriteMosaicItem:i}}}}bindTextures(e,t,i,s=!1){if(0===i.textureBinding)return;const r=this._bindingInfos[i.textureBinding-1],n=r.page,o=s?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__["TextureSamplingMode"].LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__["TextureSamplingMode"].LINEAR;switch(r.mosaicType){case _enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].SPRITE:{const i=this.sprites.getWidth(n),s=this.sprites.getHeight(n),r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["s"])(k,i,s);return this._spriteMosaic.bind(e,o,n,_definitions_js__WEBPACK_IMPORTED_MODULE_11__["TEXTURE_BINDING_SPRITE_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_11__["TEXTURE_BINDING_SPRITE_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}case _enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].GLYPH:{const i=this.glyphs.width,s=this.glyphs.height,r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["s"])(k,i,s);return this._glyphMosaic.bind(e,o,n,_definitions_js__WEBPACK_IMPORTED_MODULE_11__["TEXTURE_BINDING_GLYPH_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_11__["TEXTURE_BINDING_GLYPH_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}default:H.error("mapview-texture-manager",`Cannot handle unknown type ${r.mosaicType}`)}}_hashMosaic(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3}_setTextureBinding(e,t){const i=this._hashMosaic(e,t);if(!this._hashToBindingIndex.has(i)){const s=J.fromMosaic(e,t),r=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,r),this._bindingInfos.push(s)}t.textureBinding=this._hashToBindingIndex.get(i)}async _rasterizeText(e,t,s){let r,n;if("cim"in e){const t=e;r=t.fontName,n=t.text}else{const t=e;r=Object(_fontUtils_js__WEBPACK_IMPORTED_MODULE_13__["getFullyQualifiedFontName"])(t.font),n=t.text}const o=this._invalidFontsMap.has(r),a=t||Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["charCodes"])(Object(_core_BidiText_js__WEBPACK_IMPORTED_MODULE_2__["bidiText"])(n)[0]);try{return await this._glyphMosaic.getGlyphItems(o?O:r,a,s)}catch(h){return D("mapview-invalid-resource",`Couldn't find font ${r}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(r,!0),this._glyphMosaic.getGlyphItems(O,a,s)}}async _rasterizeSpriteSymbol(e,t,i){if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["isSimple"])(e))return null;const r=Object(_util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_22__["keyFromSymbol"])(e);if(this._spriteMosaic.has(r))return this._spriteMosaic.getSpriteItem(r);if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["isSVGResource"])(e)||Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["isImageResource"])(e))return this._handleAsyncResource(r,e,i);const n=1,o=this._rasterizer.rasterizeJSONResource(e,n);if(o){const{size:t,image:i,sdf:s,simplePattern:n}=o;return this._addItemToMosaic(r,t,{type:"static",data:i},Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["shouldRepeat"])(e),s,n)}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("TextureManager","unrecognized or null rasterized image")}async _handleAsyncResource(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e);let s;s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["isSVGResource"])(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,s);try{await s,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return s}async _handleSVG(e,t,i){const s=[Q,Q],r=await this._sdfConverter.draw(e.path,i);return this._addItemToMosaic(t,s,{type:"static",data:new Uint32Array(r.buffer)},!1,!0,!0)}async _handleGIFOrPNG(e,t,i){const r=await V(e,i);if(Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_21__["ok"])(r)){const o=Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__["isGIF"])(r),a=Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__["isPNG"])(r);if(!o&&!a)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Image data is neither GIF nor PNG!");let c;try{o&&Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__["isAnimatedGIF"])(r)?c=await _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__["default"].create(r,i):a&&Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__["isAnimatedPNG"])(r)&&(c=await _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__["default"].create(r,i))}catch(n){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(n))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Could not fetch requested resource!")}if(c&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_21__["ok"])(c))return this._addItemToMosaic(t,[c.width,c.height],{type:"animated",data:c},Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["shouldRepeat"])(e),!1,!1);const u=new Blob([r],{type:o?"image/gif":"image/png"}),d=await this._imageFromBlob(u);if(d&&d instanceof HTMLImageElement){let i=d.width,s=d.height;"esriPMS"===e.type&&(i=Math.round(Y(d.width,Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["getPMSResourceSize"])(e))),s=Math.round(d.height*(i/d.width)));const r="cim"in e?e.cim.colorSubstitutions:void 0,{size:n,sdf:o,image:a}=this._rasterizer.rasterizeImageResource(i,s,d,r);return this._addItemToMosaic(t,n,{type:"static",data:a},Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["shouldRepeat"])(e),o,!1)}}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Could not handle resource!")}async _handleImage(e,t,i){if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["isGIF"])(e)||Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["isPNG"])(e))return this._handleGIFOrPNG(e,t,i);const r=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["getUrl"])(e);try{let s;const a=this.resourceManager.getResource(r);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(a))s=a;else{const{data:e}=await this._imageRequestQueue.push(r,{...i});s=e}if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["isSVGImage"])(r))if("width"in e&&"height"in e)s.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(e.width),s.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(e.height);else if("cim"in e){var n;const t=e.cim;s.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(null!=(n=t.width)?n:t.scaleX*t.size),s.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.size)}if(!s.width||!s.height)return null;let h=s.width,u=s.height;"esriPMS"===e.type&&(h=Math.round(Y(s.width,Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["getPMSResourceSize"])(e))),u=Math.round(s.height*(h/s.width)));const d="cim"in e?e.cim.colorSubstitutions:void 0,{size:l,sdf:m,image:g}=this._rasterizer.rasterizeImageResource(h,u,s,d);return this._addItemToMosaic(t,l,{type:"static",data:g},Object(_Utils_js__WEBPACK_IMPORTED_MODULE_18__["shouldRepeat"])(e),m,!1)}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(a))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${r}. ${a.message}`)}}async _imageFromBlob(e){const t=window.URL.createObjectURL(e);try{const{data:e}=await this._imageRequestQueue.push(t);return window.URL.revokeObjectURL(t),e}catch(i){if(window.URL.revokeObjectURL(t),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(i))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${t}`);throw i}}_addItemToMosaic(e,t,i,s,r,n){return this._spriteMosaic.addSpriteItem(e,t,i,s,r,n)}}


/***/ }),

/***/ "vEyU":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js ***!
  \**********************************************************************************/
/*! exports provided: createProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramTemplate", function() { return n; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=e=>e.replace("-","_").toUpperCase(),t=e=>`#define ${r(e)}\n`;function n(r){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:t(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.vert"),fragmentShader:t(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.frag")}}}


/***/ }),

/***/ "viFY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js ***!
  \********************************************************************************/
/*! exports provided: BlendEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendEffect", function() { return _; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VertexStream.js */ "gjrC");
/* harmony import */ var _shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/BlendPrograms.js */ "vEyU");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");class _{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["disposeMaybe"])(this._backBufferTexture),this._quad=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["disposeMaybe"])(this._quad)}draw(r,t,s,a,d){const{context:u,drawPhase:f}=r;if(this._setupShader(u),a&&"normal"!==a&&f!==_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLDrawPhase"].LABEL)return void this._drawBlended(r,t,s,a,d);const c=Object(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_5__["createProgramTemplate"])("normal"),m=u.programCache.acquire(c.shaders.vertexShader,c.shaders.fragmentShader,c.attributes);if(!m)return void l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));u.useProgram(m),t.setSamplingMode(s),u.bindTexture(t,0),m.setUniform1i("u_layerTexture",0),m.setUniform1f("u_opacity",d),u.setBlendingEnabled(!0),u.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["BlendFactor"].ONE_MINUS_SRC_ALPHA);const h=this._quad;h.draw(),h.unbind(),m.dispose()}_drawBlended(r,t,i,a,d){const{context:u,state:f,pixelRatio:c,inFadeTransition:m}=r,{size:h}=f,_=u.getBoundFramebufferObject();let p,b;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(_)){const e=_.descriptor;p=e.width,b=e.height}else p=Math.round(c*h[0]),b=Math.round(c*h[1]);this._createOrResizeTexture(r,p,b);const g=this._backBufferTexture;_.copyToTexture(0,0,p,b,0,0,g),u.setStencilTestEnabled(!1),u.setStencilWriteMask(0),u.setBlendingEnabled(!0),u.setDepthTestEnabled(!1),u.setDepthWriteEnabled(!1);const x=Object(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_5__["createProgramTemplate"])(a),E=u.programCache.acquire(x.shaders.vertexShader,x.shaders.fragmentShader,x.attributes);if(!E)return void l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-BlendEffect",`Error creating shader program for blend mode ${a}`));u.useProgram(E),g.setSamplingMode(i),u.bindTexture(g,0),E.setUniform1i("u_backbufferTexture",0),t.setSamplingMode(i),u.bindTexture(t,1),E.setUniform1i("u_layerTexture",1),E.setUniform1f("u_opacity",d),E.setUniform1f("u_inFadeOpacity",m?1:0),u.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["BlendFactor"].ZERO);const T=this._quad;T.draw(),T.unbind(),E.dispose(),u.setBlendFunction(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["BlendFactor"].ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["BlendFactor"].ONE_MINUS_SRC_ALPHA)}_setupShader(e){this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_4__["default"](e,[-1,-1,1,-1,-1,1,1,1]))}_createOrResizeTexture(e,r,t){const{context:s}=e;null!==this._backBufferTexture&&r===this._size[0]&&t===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(r,t):this._backBufferTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["Texture"](s,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelFormat"].RGBA,internalFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["TextureSamplingMode"].LINEAR,flipped:!1,width:r,height:t}),this._size[0]=r,this._size[1]=t)}}


/***/ }),

/***/ "yXMX":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ContextState.js ***!
  \***************************************************************/
/*! exports provided: ContextState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextState", function() { return h; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class h{constructor(){this.blend=!1,this.blendColor={r:0,g:0,b:0,a:0},this.blendFunction={srcRGB:_enums_js__WEBPACK_IMPORTED_MODULE_0__["BlendFactor"].ONE,dstRGB:_enums_js__WEBPACK_IMPORTED_MODULE_0__["BlendFactor"].ZERO,srcAlpha:_enums_js__WEBPACK_IMPORTED_MODULE_0__["BlendFactor"].ONE,dstAlpha:_enums_js__WEBPACK_IMPORTED_MODULE_0__["BlendFactor"].ZERO},this.blendEquation={mode:_enums_js__WEBPACK_IMPORTED_MODULE_0__["BlendOperation"].ADD,modeAlpha:_enums_js__WEBPACK_IMPORTED_MODULE_0__["BlendOperation"].ADD},this.colorMask={r:!0,g:!0,b:!0,a:!0},this.faceCulling=!1,this.cullFace=_enums_js__WEBPACK_IMPORTED_MODULE_0__["Face"].BACK,this.frontFace=_enums_js__WEBPACK_IMPORTED_MODULE_0__["CullMode"].CCW,this.scissorTest=!1,this.scissorRect={x:0,y:0,width:0,height:0},this.depthTest=!1,this.depthFunction=_enums_js__WEBPACK_IMPORTED_MODULE_0__["CompareFunction"].LESS,this.clearDepth=1,this.depthWrite=!0,this.depthRange={zNear:0,zFar:1},this.viewport=null,this.stencilTest=!1,this.polygonOffsetFill=!1,this.polygonOffset=[0,0],this.stencilFunction={face:_enums_js__WEBPACK_IMPORTED_MODULE_0__["Face"].FRONT_AND_BACK,func:_enums_js__WEBPACK_IMPORTED_MODULE_0__["CompareFunction"].ALWAYS,ref:0,mask:1},this.clearStencil=0,this.stencilWriteMask=1,this.stencilOperation={face:_enums_js__WEBPACK_IMPORTED_MODULE_0__["Face"].FRONT_AND_BACK,fail:_enums_js__WEBPACK_IMPORTED_MODULE_0__["StencilOperation"].KEEP,zFail:_enums_js__WEBPACK_IMPORTED_MODULE_0__["StencilOperation"].KEEP,zPass:_enums_js__WEBPACK_IMPORTED_MODULE_0__["StencilOperation"].KEEP},this.clearColor={r:0,g:0,b:0,a:0},this.program=null,this.vertexBuffer=null,this.indexBuffer=null,this.uniformBuffer=null,this.pixelPackBuffer=null,this.pixelUnpackBuffer=null,this.copyReadBuffer=null,this.copyWriteBuffer=null,this.uniformBufferBindingPoints=new Array,this.readFramebuffer=null,this.drawFramebuffer=null,this.renderbuffer=null,this.activeTexture=0,this.textureUnitMap=new Array}}


/***/ }),

/***/ "ygGI":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return f; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters.js */ "fGRN");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function C(o,i){i.fillColor[0]=o.color.r/255,i.fillColor[1]=o.color.g/255,i.fillColor[2]=o.color.b/255,i.fillColor[3]=o.color.a,o.haloColor?(i.outlineColor[0]=o.haloColor.r/255,i.outlineColor[1]=o.haloColor.g/255,i.outlineColor[2]=o.haloColor.b/255,i.outlineColor[3]=o.haloColor.a):(i.outlineColor[0]=i.fillColor[0],i.outlineColor[1]=i.fillColor[1],i.outlineColor[2]=i.fillColor[2],i.outlineColor[3]=i.fillColor[3]),i.fillColor[3]*=o.fillOpacity,i.outlineColor[3]*=o.haloOpacity,i.fillColor[0]*=i.fillColor[3],i.fillColor[1]*=i.fillColor[3],i.fillColor[2]*=i.fillColor[3],i.outlineColor[0]*=i.outlineColor[3],i.outlineColor[1]*=i.outlineColor[3],i.outlineColor[2]*=i.outlineColor[3],i.outlineWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].outlineWidth,i.outerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].outerHaloWidth,i.innerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].innerHaloWidth,i.outlinePosition=_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].outlinePosition}const g=[0,0,0,0];class f{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].outlinePosition,outlineWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].outlineWidth,innerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].innerHaloWidth,outerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_2__["HIGHLIGHT_SIZING"].outerHaloWidth},this.shadeTexChanged=!0,this.texelData=new Uint8Array(4*_parameters_js__WEBPACK_IMPORTED_MODULE_2__["SHADE_TEXTURE_SIZE"]),this.minMaxDistance=[0,0]}setHighlightOptions(o){const i=this._convertedHighlightOptions;C(o,i);const t=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,r=i.outlinePosition-i.outlineWidth/2,n=i.outlinePosition+i.outlineWidth/2,h=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,a=Math.sqrt(Math.PI/2)*_parameters_js__WEBPACK_IMPORTED_MODULE_2__["SIGMA"],s=Math.abs(t)>a?Math.round(10*(Math.abs(t)-a))/10:0,d=Math.abs(h)>a?Math.round(10*(Math.abs(h)-a))/10:0;let f;s&&!d?u.error("The outer rim of the highlight is "+s+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!s&&d?u.error("The inner rim of the highlight is "+d+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):s&&d&&u.error("The highlight is "+Math.max(s,d)+"px away from the edge of the feature; consider reducing some width values.");const c=[void 0,void 0,void 0,void 0];function m(o,i,t){c[0]=(1-t)*o[0]+t*i[0],c[1]=(1-t)*o[1]+t*i[1],c[2]=(1-t)*o[2]+t*i[2],c[3]=(1-t)*o[3]+t*i[3]}const{texelData:p}=this;for(let l=0;l<_parameters_js__WEBPACK_IMPORTED_MODULE_2__["SHADE_TEXTURE_SIZE"];++l)f=t+l/(_parameters_js__WEBPACK_IMPORTED_MODULE_2__["SHADE_TEXTURE_SIZE"]-1)*(h-t),f<t?(c[4*l+0]=0,c[4*l+1]=0,c[4*l+2]=0,c[4*l+3]=0):f<r?m(g,i.outlineColor,(f-t)/(r-t)):f<n?[c[0],c[1],c[2],c[3]]=i.outlineColor:f<h?m(i.outlineColor,i.fillColor,(f-n)/(h-n)):[c[4*l+0],c[4*l+1],c[4*l+2],c[4*l+3]]=i.fillColor,p[4*l+0]=255*c[0],p[4*l+1]=255*c[1],p[4*l+2]=255*c[2],p[4*l+3]=255*c[3];this.minMaxDistance[0]=t,this.minMaxDistance[1]=h,this.shadeTexChanged=!0}applyHighlightOptions(o,t){this.shadeTex||(this.shadeTex=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](o,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureWrapMode"].CLAMP_TO_EDGE,width:_parameters_js__WEBPACK_IMPORTED_MODULE_2__["SHADE_TEXTURE_SIZE"],height:1,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureSamplingMode"].LINEAR})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,_parameters_js__WEBPACK_IMPORTED_MODULE_2__["SHADE_TEXTURE_SIZE"],1,this.texelData),this.shadeTexChanged=!1),o.bindTexture(this.shadeTex,_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_HIGHLIGHT_1"]),t.setUniform2fv("u_minMaxDistance",this.minMaxDistance)}destroy(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)}}


/***/ })

}]);
//# sourceMappingURL=mapViewDeps-js.js.map