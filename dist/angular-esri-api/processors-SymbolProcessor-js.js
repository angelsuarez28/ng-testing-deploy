(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["processors-SymbolProcessor-js"],{

/***/ "9H0t":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/cimSymbolUtils.js ***!
  \*****************************************************************************/
/*! exports provided: cimLayerToRasterizationInfo, expandSymbol, expandSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cimLayerToRasterizationInfo", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbol", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbols", function() { return r; });
/* harmony import */ var _symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../symbols/cim/cimAnalyzer.js */ "T8sT");
/* harmony import */ var _symbols_cim_ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../symbols/cim/ExpandedCIM.js */ "wlZk");
/* harmony import */ var _webStyleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webStyleUtils.js */ "unaH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=async(e,t,a,r)=>Promise.all(e.map((e=>l(e,t,a,r)))),n=async(a,r,n)=>new _symbols_cim_ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_1__["ExpandedCIM"](await Object(_symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_0__["analyzeCIMSymbol"])(a.data,r,n),a.data,a.rendererKey,a.maxVVSize),l=async(e,t,r,l)=>{if(!e)return null;if("cim"===e.type)return n(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await Object(_webStyleUtils_js__WEBPACK_IMPORTED_MODULE_2__["fetchCIMSymbolReference"])(e,null,l),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return n(i,t,r)}return e};function i(e){if(!e)return null;const{type:t,cim:a,url:r,materialHash:n}=e,l={cim:a,type:t,mosaicHash:n,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}


/***/ }),

/***/ "DsOJ":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/SymbolProcessor.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return T; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_BidiText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/BidiText.js */ "9X5u");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/accessorSupport/set.js */ "LdQC");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ "DxxZ");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../engine/webgl/DisplayId.js */ "F16J");
/* harmony import */ var _engine_webgl_mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../engine/webgl/mesh/MeshData.js */ "acOm");
/* harmony import */ var _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../engine/webgl/mesh/factories/WGLMeshFactory.js */ "J3nV");
/* harmony import */ var _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../engine/webgl/mesh/templates/WGLTemplateStore.js */ "Dw8i");
/* harmony import */ var _engine_webgl_util_Matcher_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../engine/webgl/util/Matcher.js */ "YB6V");
/* harmony import */ var _textUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../textUtils.js */ "MrbB");
/* harmony import */ var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./BaseProcessor.js */ "ukaK");
/* harmony import */ var _support_ResourceManagerProxy_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/ResourceManagerProxy.js */ "znMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function v(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function x(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const r in t.data){const e=t.data[r];if(s.message.data[r]=null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e)){const t=e.stride,a=e.indices.slice(0),o=e.vertices.slice(0),n=e.records.slice(0),l={stride:t,indices:a,vertices:o,records:n,metrics:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["applySome"])(e.metrics,(e=>e.slice(0)))};s.transferList.push(a,o,n),s.message.data[r]=l}}return s}_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let j=class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_19__["default"]{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new _support_ResourceManagerProxy_js__WEBPACK_IMPORTED_MODULE_20__["default"](this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_11__["diff"])(this._schema,r);Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasDiff"])(i,"mesh")&&(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_3__["default"])("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",i),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,s,r){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAborted"])(r),this._onTileData(e,t,s,r)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,x(s),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(x(t))}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o={geometryType:t,fields:r,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(this.spatialReference)},n=new _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_16__["WGLTemplateStore"](a,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:c}=e.mesh;return this._store=n,this._matchers.feature=Object(_engine_webgl_util_Matcher_js__WEBPACK_IMPORTED_MODULE_17__["createMatcher"])(l,n,o,this._resourceManagerProxy),this._matchers.aggregate=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["applySome"])(c,(e=>Object(_engine_webgl_util_Matcher_js__WEBPACK_IMPORTED_MODULE_17__["createMatcher"])(e,n,o,this._resourceManagerProxy))),new _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_15__["WGLMeshFactory"](t,s,n)}async _onTileData(e,t,s,r){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAborted"])(r);const{type:i,addOrUpdate:n,remove:l}=t,f=t.end,h=!!this._schema.mesh.sortKey;if(!n){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:f,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const u=this._processFeatures(e,n,s,r);try{const s=await u;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(s)){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:f,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const n=[];for(const t of s){let s=!1;const r=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r)){if(!this.tileStore.get(a)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(r);for(const t of o){if(e.has(t)){s=!0;break}e.add(t)}}s||(this._addBufferData(i,t),n.push(t))}await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["all"])(n.map((s=>{const a=e.key.id===s.message.tileKey,o=a?t.remove:[],n=a&&t.end;return this._updateTileMesh(i,e,s,o,n,t.clear,r.signal)})))}catch(m){this._handleError(e,m,r)}}async _updateTileMesh(e,t,s,r,a,o,n){const d=e,f=s.message.tileKey,h=!!this._schema.mesh.sortKey;f!==t.key.id&&(a=!1);const u=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["applySome"])(s,(e=>e.message)),m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["applySome"])(s,(e=>e.transferList))||[],p={type:d,addOrUpdate:u,remove:r,clear:!1,end:a,sort:h},g={transferList:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["unwrap"])(m)||[],signal:n};return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAborted"])(g),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:f,data:p},g)}async _processFeatures(e,t,s,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:e.scale},l=await this._matchers.feature,d=await this._matchers.aggregate;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAborted"])(r);const f=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,l,d,i,n),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAborted"])(r),this._writeFeatureSet(e,t,i,f,o,s)}_writeFeatureSet(e,t,s,r,i,a){const n=t.getSize(),l=new _engine_webgl_mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_14__["MeshData"](e.key.id,{features:n,records:n,metrics:0},this._schema.mesh.matcher.stride,a,!0),c={viewingMode:"",scale:e.scale},d=t.getCursor();for(;d.next();)try{const t=d.getDisplayId(),a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r)?r.get(t):null;i.writeCursor(l,d,s,c,e.level,a,this._resourceManagerProxy)}catch(h){}const f=e.tileInfoView.tileInfo.isWrappable;return l.serialize(f)}_handleError(e,t,s){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>v(t,e.scale)));r=r||!!a.length,s.classes[i]=a}return r?s:null}const s=t.classes.filter((t=>v(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField,i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["unwrapOrThrow"])(r,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:null!=(s=t.classes[a])?s:[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(r))return null;const i=new Map,o=s.getCursor();for(;o.next();){const e=o.getDisplayId(),s=[],a=Object(_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_13__["isAggregateId"])(e),n=a&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(o,r);for(const r of l){if(r.target!==n)continue;const i=o.getStorage(),l=a&&"feature"===n?i.getComputedStringAtIndex(o.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=Object(_core_BidiText_js__WEBPACK_IMPORTED_MODULE_1__["bidiText"])(l.toString()),d=c[0],f=c[1];this._store.getMosaicItem(r.symbol,Object(_textUtils_js__WEBPACK_IMPORTED_MODULE_18__["codepoints"])(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems,rtl:f,index:r.index}}))}i.set(e,s)}return i}};j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.features.processors.SymbolProcessor")],j);const T=j;


/***/ }),

/***/ "GMaR":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/materialKey/MaterialKey.js ***!
  \************************************************************************************/
/*! exports provided: FillMaterialKey, LabelMaterialKey, LineMaterialKey, MarkerMaterialKey, MaterialKeyBase, TextMaterialKey, createMaterialKey, getSizeFlagsMask, hydrateMaterialKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillMaterialKey", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelMaterialKey", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineMaterialKey", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerMaterialKey", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialKeyBase", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMaterialKey", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMaterialKey", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeFlagsMask", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateMaterialKey", function() { return F; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(t,e){const a=_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_FIELD_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_MINMAX_VALUE|_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_SCALE_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_UNIT_VALUE,r=(t&(_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVTarget"].FIELD_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVTarget"].MINMAX_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVTarget"].SCALE_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVTarget"].UNIT_TARGETS_OUTLINE))>>>4;return e.isOutline||e.isOutlinedFill?a&r:a&~r}const n=0,v=8,o=7,l=8,h=11,S=11,u=12,d=13,V=14,c=15,p=15,g=16,z=17,y=18,m=19,E=20,T=21,M=22;function L(t,e){switch(t){case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].FILL:return x.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LINE:return B.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].MARKER:return U.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].TEXT:return R.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LABEL:return b.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function F(t){switch(_.load(t).geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].MARKER:return new U(t);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].FILL:return new x(t);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LINE:return new B(t);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].TEXT:return new R(t);case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LABEL:return new b(t)}}class _{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(l,h)}set geometryType(t){this.setBits(t,l,h)}get mapAligned(){return!!this.bit(E)}set mapAligned(t){this.setBit(E,t)}get sdf(){return!!this.bit(S)}set sdf(t){this.setBit(S,t)}get pattern(){return!!this.bit(u)}set pattern(t){this.setBit(u,t)}get textureBinding(){return this.bits(n,v)}set textureBinding(t){this.setBits(t,n,v)}get geometryTypeString(){switch(this.geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].FILL:return"fill";case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].MARKER:return"marker";case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LINE:return"line";case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].TEXT:return"text";case _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LABEL:return"label";default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,a=0;s<i;s++,a++)this.setBit(s,0!=(t&1<<a))}bits(t,e){let i=0;for(let s=t,a=0;s<e;s++,a++)i|=this.bit(s)<<a;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(o&this.textureBinding)}}_.shared=new _(0);const I=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(g)}set vvSizeMinMaxValue(t){this.setBit(g,t)}get vvSizeScaleStops(){return 0!==this.bit(z)}set vvSizeScaleStops(t){this.setBit(z,t)}get vvSizeFieldStops(){return 0!==this.bit(y)}set vvSizeFieldStops(t){this.setBit(y,t)}get vvSizeUnitValue(){return 0!==this.bit(m)}set vvSizeUnitValue(t){this.setBit(m,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const s=r(t,e)&t;this.vvSizeMinMaxValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_SCALE_STOPS)}},O=t=>class extends t{get vvRotation(){return 0!==this.bit(c)}set vvRotation(t){this.setBit(c,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].ROTATION)}},A=t=>class extends t{get vvColor(){return 0!==this.bit(d)}set vvColor(t){this.setBit(d,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].COLOR)}},f=t=>class extends t{get vvOpacity(){return 0!==this.bit(V)}set vvOpacity(t){this.setBit(V,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].OPACITY)}};class x extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].FILL,e.dotDensity="dot-density"===t.stride.fill,e.simple="simple"===t.stride.fill,e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(p)}set dotDensity(t){this.setBit(p,t)}get simple(){return!!this.bit(M)}set simple(t){this.setBit(M,t)}get outlinedFill(){return!!this.bit(T)}set outlinedFill(t){this.setBit(T,t)}}x.shared=new x(0);class U extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}U.shared=new U(0);class B extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}B.shared=new B(0);class R extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}R.shared=new R(0);class b extends(I(_)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const i=this.load(0);return i.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LABEL,i.setVV(t.vvFlags,t),i.mapAligned=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMapAligned"])(t.placement),i.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}b.shared=new b(0);


/***/ }),

/***/ "HQFP":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js ***!
  \**************************************************************************/
/*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_2PI", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_INFINITY", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToByte", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log2", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveMod", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToByte", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return T; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ "Mt1D":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/alignmentUtils.js ***!
  \***************************************************************************/
/*! exports provided: HAlign, VAlign, getAlignmentFromPlacement, getJustification, getXAnchorDirection, getXDirection, getYAnchorDirection, getYDirection, isMapAligned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAlign", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAlign", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignmentFromPlacement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJustification", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXAnchorDirection", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXDirection", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYAnchorDirection", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYDirection", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapAligned", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var e,t;function r(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}function n(e){switch(e){case"top":return t.Top;case"middle":return t.Center;case"baseline":return t.Baseline;case"bottom":return t.Bottom}}function a(r){switch(r){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[e.Right,t.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[e.Center,t.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[e.Left,t.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[e.Right,t.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[e.Center,t.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[e.Left,t.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[e.Right,t.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[e.Center,t.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[e.Left,t.Top];default:return console.debug(`Found invalid placement type ${r}`),[e.Center,t.Center]}}function c(t){switch(t){case e.Right:return-1;case e.Center:return 0;case e.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function o(e){switch(e){case t.Top:return 1;case t.Center:return 0;case t.Bottom:case t.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function s(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}function i(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}!function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(e||(e={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(t||(t={}));


/***/ }),

/***/ "SbiP":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ "mBKw":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/earcut.js ***!
  \****************************************************/
/*! exports provided: e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return x; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var e,n,t,r={exports:{}};e=r,n=function(){function e(e,t,x){x=x||2;var i,u,v,o,y,p,a,l=t&&t.length,h=l?t[0]*x:e.length,s=n(e,0,h,x,!0),c=[];if(!s||s.next===s.prev)return c;if(l&&(s=f(e,t,s,x)),e.length>80*x){i=v=e[0],u=o=e[1];for(var Z=x;Z<h;Z+=x)(y=e[Z])<i&&(i=y),(p=e[Z+1])<u&&(u=p),y>v&&(v=y),p>o&&(o=p);a=0!==(a=Math.max(v-i,o-u))?1/a:0}return r(s,c,x,i,u,a),c}function n(e,n,t,r,x){var i,u;if(x===E(e,n,t,r)>0)for(i=n;i<t;i+=r)u=B(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=B(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;C(u),u=v}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(C(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,o,y,p,a){if(e){!a&&p&&h(e,o,y,p);for(var l,s,c=e;e.prev!==e.next;)if(l=e.prev,s=e.next,p?i(e,o,y,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(s.i/f),C(e),e=s.next,c=s.next;else if((e=s)===c){a?1===a?r(e=u(t(e),n,f),n,f,o,y,p,2):2===a&&v(e,n,f,o,y,p):r(t(e),n,f,o,y,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,y=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=c(v,f,n,t,r),a=c(o,y,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!M(i,u)&&z(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),C(x),C(x.next),x=e=u),x=x.next}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var o=f.next.next;o!==f.prev;){if(f.i!==o.i&&d(f,o)){var y=A(f,o);return f=t(f,f.next),y=t(y,y.next),r(f,n,x,i,u,v),void r(y,n,x,i,u,v)}o=o.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,y=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),y.push(Z(f));for(y.sort(o),u=0;u<y.length;u++)x=t(x=p(y[u],x),x.next);return x}function o(e,n){return e.x-n.x}function y(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=A(r,e),i=t(r,r.next);let u=y(x);return t(u,u.next),i=y(i),y(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,o=t,y=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=y&&x!==r.x&&g(i<p?x:u,i,y,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next}while(r!==o);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{null===x.z&&(x.z=c(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,s(x)}function s(e){var n,t,r,x,i,u,v,f,o=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<o&&(v++,r=r.nextZ);n++);for(f=o;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,o*=2}while(u>1);return e}function c(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&q(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||M(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function z(e,n,t,r){var x=m(w(e,n,t)),i=m(w(e,n,r)),u=m(w(t,r,e)),v=m(w(t,r,n));return x!==i&&u!==v||!(0!==x||!b(e,t,n))||!(0!==i||!b(e,r,n))||!(0!==u||!b(t,e,r))||!(0!==v||!b(t,n,r))}function b(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&z(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function q(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function A(e,n){var t=new D(e.i,e.x,e.y),r=new D(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function B(e,n,t,r){var x=new D(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function D(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(E(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var o=n[v]*t,y=v<f-1?n[v+1]*t:e.length;u-=Math.abs(E(e,o,y,t))}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e},void 0!==(t=n())&&(e.exports=t);const x=r.exports;


/***/ }),

/***/ "unaH":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/webStyleUtils.js ***!
  \****************************************************************************/
/*! exports provided: fetchCIMSymbolReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCIMSymbolReference", function() { return y; });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../portal/Portal.js */ "AiS/");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../symbols/support/styleUtils.js */ "NDpP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function y(t,r,n){if(!t.name)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return f(t,n);try{return p(await Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["fetchStyle"])(t,r,n),t.name,r,n)}catch(s){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(s),null}}async function f(t,r){const e=_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["Style2DUrlTemplate"].replace(/\{SymbolName\}/gi,t.name);try{const t=await Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["requestJSON"])(e,r);return Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["makeCIMSymbolRef"])(t.data)}catch(n){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(n),null}}async function p(m,a,y,f){const p=m.data,b={portal:y&&y.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"].getDefault(),url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(m.baseUrl),origin:"portal-item"},d=p.items.find((t=>t.name===a));if(!d){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let j=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__["f"])(Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["symbolUrlFromStyleItem"])(d,"cimRef"),b);Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__["isDevEnvironment"])()&&(j=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__["adjustStaticAGOUrl"])(j));try{const t=await Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["requestJSON"])(j,f);return Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__["makeCIMSymbolRef"])(t.data)}catch(U){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(U),null}}


/***/ }),

/***/ "wlZk":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/ExpandedCIM.js ***!
  \**************************************************************/
/*! exports provided: ExpandedCIM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandedCIM", function() { return l; });
/* harmony import */ var _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/2d/engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/2d/engine/webgl/materialKey/MaterialKey.js */ "GMaR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={marker:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,fill:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL,line:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,text:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT};class l{constructor(e,l,s,n){const r={minScale:null==l?void 0:l.minScale,maxScale:null==l?void 0:l.maxScale},c=i(r);this.layers=e,this.data=l,this.hash=this._createHash()+c,this.rendererKey=s;const m={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:s};for(const i of e){const e=a[i.type];i.materialKey=Object(_views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(e,m),i.maxVVSize=n,i.scaleInfo=r,i.templateHash+=c}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}


/***/ }),

/***/ "znMu":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/ResourceManagerProxy.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)))}catch(o){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(o)?null:{width:0,height:0}}return n}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}


/***/ })

}]);
//# sourceMappingURL=processors-SymbolProcessor-js.js.map