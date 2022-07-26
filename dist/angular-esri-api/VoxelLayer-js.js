(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VoxelLayer-js"],{

/***/ "0n+O":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVolume.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelDimension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelDimension.js */ "cCWz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.id=0,this.dimensions=null}getZDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let s=2;s<4;++s)if(this.dimensions[s].size>0)return s;return-1}isVolumeValid(){return!!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&-1!==this.getZDimension())))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[_VoxelDimension_js__WEBPACK_IMPORTED_MODULE_7__["default"]],json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"dimensions",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelVolume")],t);const n=t;


/***/ }),

/***/ "484D":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVolumeStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "fX31");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelDynamicSection.js */ "ytPz");
/* harmony import */ var _VoxelSlice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelSlice.js */ "ay+M");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"]{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.dynamicSections=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]}set slices(e){this._set("slices",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(e,this._get("slices"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_10__["default"])))}set dynamicSections(e){this._set("dynamicSections",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(e,this._get("dynamicSections"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_9__["default"])))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__["Integer"],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"volumeId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{default:1,write:!0}})],n.prototype,"verticalExaggeration",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],n.prototype,"exaggerationMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{default:0,write:!0}})],n.prototype,"verticalOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_10__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],n.prototype,"slices",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_9__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],n.prototype,"dynamicSections",null),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.VoxelVolumeStyle")],n);const a=n;


/***/ }),

/***/ "5vmo":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelColorStop.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(){super(...arguments),this.color=null,this.position=0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__["Integer"]],write:{enabled:!0,isRequired:!0}}})],i.prototype,"color",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"position",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.VoxelColorStop")],i);const c=i;


/***/ }),

/***/ "93JT":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/vxl/enums.js ***!
  \*****************************************************/
/*! exports provided: UpdateFlags, VoxelRequestType, WasmCullMode, WasmRenderingQuality, WasmResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFlags", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoxelRequestType", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmCullMode", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmRenderingQuality", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmResponseType", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var e,t,i,n,a;!function(e){e[e.Binary=0]="Binary",e[e.JSON=1]="JSON"}(e||(e={})),function(e){e[e.TreeIndex=0]="TreeIndex",e[e.TreeStats=1]="TreeStats",e[e.TreeData=2]="TreeData",e[e.BrickBundles=3]="BrickBundles",e[e.Section=4]="Section",e[e.VariableStats=5]="VariableStats"}(t||(t={})),function(e){e[e.None=1]="None",e[e.Front=2]="Front",e[e.Back=3]="Back"}(i||(i={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(n||(n={})),function(e){e[e.None=0]="None",e[e.StaticSections=1]="StaticSections",e[e.Slices=2]="Slices",e[e.DynamicSections=4]="DynamicSections",e[e.GhostShell=8]="GhostShell",e[e.Isosurface=16]="Isosurface",e[e.Quality=32]="Quality",e[e.SunLocation=64]="SunLocation",e[e.StaticSectionSelection=128]="StaticSectionSelection",e[e.ExaggerationAndOffset=256]="ExaggerationAndOffset",e[e.CurrentTime=512]="CurrentTime",e[e.CurrentVariable=1024]="CurrentVariable",e[e.DeleteIsosurface=2048]="DeleteIsosurface",e[e.ContainerVisibility=4096]="ContainerVisibility",e[e.RenderMode=8192]="RenderMode",e[e.Optimization=16384]="Optimization"}(a||(a={}));


/***/ }),

/***/ "AAAk":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelRangeFilter.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.enabled=!1,this.range=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean,json:{default:!1,write:!0}})],t.prototype,"enabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:!0}})],t.prototype,"range",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelRangeFilter")],t);const p=t;


/***/ }),

/***/ "GMfa":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelTransferFunctionStyle.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "fX31");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelAlphaStop_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelAlphaStop.js */ "c2hf");
/* harmony import */ var _VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelColorStop.js */ "5vmo");
/* harmony import */ var _VoxelRangeFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VoxelRangeFilter.js */ "AAAk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"]{constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.alphaStops=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]}set colorStops(o){this._set("colorStops",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(o,this._get("colorStops"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_10__["default"])))}set alphaStops(o){this._set("alphaStops",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(o,this._get("alphaStops"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelAlphaStop_js__WEBPACK_IMPORTED_MODULE_9__["default"])))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["linear","nearest"],json:{write:!0}})],n.prototype,"interpolation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"stretchRange",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_10__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],n.prototype,"colorStops",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelAlphaStop_js__WEBPACK_IMPORTED_MODULE_9__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],n.prototype,"alphaStops",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_VoxelRangeFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{write:!0}})],n.prototype,"rangeFilter",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.VoxelTransferFunctionStyle")],n);const c=n;


/***/ }),

/***/ "GX92":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVariableStyle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "fX31");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelIsosurface.js */ "p+nu");
/* harmony import */ var _VoxelTransferFunctionStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelTransferFunctionStyle.js */ "GMfa");
/* harmony import */ var _VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VoxelUniqueValue.js */ "V3BS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"]{constructor(e){super(e),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.isosurfaces=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]}set uniqueValues(e){this._set("uniqueValues",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(e,this._get("uniqueValues"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_11__["default"])))}set isosurfaces(e){this._set("isosurfaces",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(e,this._get("isosurfaces"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_9__["default"])))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__["Integer"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"variableId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_VoxelTransferFunctionStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],p.prototype,"transferFunction",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_11__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],p.prototype,"uniqueValues",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_9__["default"]),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&s}}}}})],p.prototype,"isosurfaces",null),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.VoxelVariableStyle")],p);const c=p;


/***/ }),

/***/ "RIjU":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVolumeIndex.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var t;let s=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelVolumeIndex")],s);const p=s;


/***/ }),

/***/ "RqMe":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVariable.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelFormat.js */ "hsAz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],i.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],i.prototype,"originalFormat",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"renderingFormat",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],i.prototype,"unit",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:!0}})],i.prototype,"volumeId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelVariable")],i);const p=i;


/***/ }),

/***/ "T+Uk":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelRegularSpacing.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.scale=1,this.offset=0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:!0}})],t.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:!0}})],t.prototype,"offset",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelRegularSpacing")],t);const p=t;


/***/ }),

/***/ "TIAR":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "fX31");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelSimpleShading.js */ "mUrU");
/* harmony import */ var _VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelVariableStyle.js */ "GX92");
/* harmony import */ var _VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VoxelVolumeStyle.js */ "484D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"]{constructor(e){super(e),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new _VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_9__["default"],this.volumeStyles=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.variableStyles=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]}set volumeStyles(e){this._set("volumeStyles",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(e,this._get("volumeStyles"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"])))}set variableStyles(e){this._set("variableStyles",Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(e,this._get("variableStyles"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"])))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]),json:{write:!0}})],y.prototype,"volumeStyles",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__["Integer"],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"currentVariableId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["volume","surfaces"],json:{write:!0}})],y.prototype,"renderMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]),json:{write:!0}})],y.prototype,"variableStyles",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{write:!0}})],y.prototype,"enableSlices",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{write:!0}})],y.prototype,"enableSections",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{write:!0}})],y.prototype,"enableDynamicSections",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{write:!0}})],y.prototype,"enableIsosurfaces",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],y.prototype,"shading",void 0),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.VoxelStyle")],y);const c=y;


/***/ }),

/***/ "V3BS":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelUniqueValue.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__["Integer"]],write:{enabled:!0,isRequired:!0}}})],i.prototype,"color",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__["Integer"],json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"value",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Boolean,json:{default:!0,write:!0}})],i.prototype,"enabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],i.prototype,"label",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.VoxelUniqueValue")],i);const l=i;


/***/ }),

/***/ "YAgM":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VoxelWasmPerScene.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/vxl/enums.js */ "93JT");
/* harmony import */ var _libs_vxl_VxlModule_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/vxl/VxlModule.js */ "Ygdx");
/* harmony import */ var _views_3d_webgl_engine_lib_RenderPass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/RenderPass.js */ "YU0U");
/* harmony import */ var _views_3d_webgl_engine_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/RenderSlot.js */ "utzi");
/* harmony import */ var _views_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/webgl/context-util.js */ "zBXm");
/* harmony import */ var _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const v=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.VoxelWasmPerScene");var p;!function(e){e[e.Lifetime=1]="Lifetime",e[e.RequestResponse=2]="RequestResponse",e[e.Rendering=3]="Rendering",e[e.Error=4]="Error"}(p||(p={}));class y{constructor(e){this._halfIntTexturesAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._renderPass=_views_3d_webgl_engine_lib_RenderPass_js__WEBPACK_IMPORTED_MODULE_8__["RenderPass"].MATERIAL,this._renderSlot=_views_3d_webgl_engine_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_9__["RenderSlot"].VOXEL,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._view=e,this._initialize()}get canRender(){return!!this._vxl&&"local"===this._view.viewingMode}_dbg(e,t){this._dbgFlags.has(e)&&(e===p.Error?v.error(t):v.warn(t))}_removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this._dbg(p.Lifetime,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}_initialize(){this._dbg(p.Lifetime,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this._readyWatchHandle=Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__["watch"])((()=>this._view.ready),(e=>{e&&"local"===this._view.viewingMode?(this._dbg(p.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this._dbg(p.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())}),{initial:!0}),this._qualityWatchHandle=Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__["watch"])((()=>{var e;return null==(e=this._view)?void 0:e.qualityProfile}),(e=>{this._dbg(p.Rendering,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this._toWasmQuality(e))}),{initial:!0}),this._timeExtentWatchHandle=Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__["watch"])((()=>{var e;return null==(e=this._view)?void 0:e.timeExtent}),(()=>{if(this._vxl){var e;const t=this._getTimeArgs(null==(e=this._view)?void 0:e.timeExtent);this._dbg(p.Rendering,"sceneView timeExtent changed to useTime="+t.useTime+" st="+t.startTime+" et="+t.endTime),this._vxl.set_scene_time_extent(t.startTime,t.endTime,t.useTime),this._renderPluginContext.requestRender()}}),{initial:!0}),this._stationaryWatchHandle=Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__["watch"])((()=>{var e;return null==(e=this._view)?void 0:e.stationary}),(e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()}))}initializeRenderContext(e){this._dbg(p.Lifetime,"--initializeRenderContext--");const t=e.renderContext.rctx;t.type===_views_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__["ContextType"].WEBGL2?(this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._initializeWasm(t.gl)):this._dbg(p.Error,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(p.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!!!this._rctx)return void this._dbg(p.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const t=this._renderTargetToRestore.viewport;this._rctx.setViewport(t.x,t.y,t.width,t.height)}_bindPreviousDepthToSlot(e,t){const i=!!this._rctx,s=!!this._renderTargetToRestore;if(!i||!s)return 0;const r=this._renderTargetToRestore.fbo.depthStencilTexture;return r?(0===t?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(r,e,!0),1):(this._dbg(p.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(e,t,i){if(!this._rctx)return void this._dbg(p.Error,"modifyAllocation callback has no rendering context!");const s=e;1===i?this._rctx.instanceCounter.increment(s,t):this._rctx.instanceCounter.decrement(s,t)}_setBlendState(e,t,i,s){this._rctx?(this._rctx.setBlendingEnabled(1===e),this._rctx.setBlendFunction(t,i),this._rctx.setBlendEquation(s)):this._dbg(p.Error,"setBlendState callback has no rendering context!")}_setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this._dbg(p.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(e,t,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(1===e),this._rctx.setDepthWriteEnabled(1===t),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["CompareFunction"].ALWAYS,0,255),this._rctx.setStencilOpSeparate(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["Face"].FRONT,_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["StencilOperation"].KEEP,_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["StencilOperation"].INCR,_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["StencilOperation"].KEEP),this._rctx.setStencilOpSeparate(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["Face"].BACK,_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["StencilOperation"].KEEP,_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["StencilOperation"].DECR,_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["StencilOperation"].KEEP)):this._dbg(p.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(e){if(this._rctx)switch(e){case _libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WasmCullMode"].None:this._rctx.setFaceCullingEnabled(!1);break;case _libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WasmCullMode"].Back:this._rctx.setCullFace(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["Face"].BACK),this._rctx.setFaceCullingEnabled(!0);break;case _libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WasmCullMode"].Front:this._rctx.setCullFace(_views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_11__["Face"].FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(p.Error,"setRasterizerState callback has no rendering context!")}_setViewport(e,t,i,s){this._rctx?this._rctx.setViewport(e,t,i,s):this._dbg(p.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach(((e,t)=>{if(e.needMemoryUsageUpdate){const i=this._vxl.estimate_memory_usage(t);i>=0&&(e.needMemoryUsageUpdate=!1,e.layerView.setUsedMemory(i))}}))}_syncRequestsResponses(){this._layers.forEach(((t,i)=>{const s=[];t.responses.forEach(((e,r)=>{s.push(r),this._dbg(p.RequestResponse,"responding for requestID:"+r+" size:"+e.size),this._vxl.respond(i,r,e),e.requestType!==_libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["VoxelRequestType"].TreeIndex&&e.requestType!==_libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["VoxelRequestType"].Section||(t.needMemoryUsageUpdate=!0)}));const r=t.responses;for(const e of s)r.delete(e);const a=this._vxl.get_new_requests(i),o=t.abortController.signal;for(const l in a){t.outstandingRequestCount+=1,1===t.outstandingRequestCount&&t.layerView.updatingFlagChanged();const i=a[l],s={responseType:"array-buffer",signal:o};this._dbg(p.RequestResponse,"making requestID:"+l+" url:"+i.url),Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i.url,s).then((e=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),this._dbg(p.RequestResponse,"have response for requestID:"+l);let s=0;if(e.data.byteLength>0){s=this._vxl._malloc(e.data.byteLength);const t=new Uint8Array(this._vxl.HEAPU8.buffer,s,e.data.byteLength),i=new Uint8Array(e.data);for(let s=0;s<e.data.byteLength;++s)t[s]=i[s]}r.set(+l,{responseType:i.responseType,ptr:s,size:e.data.byteLength,success:!0,requestType:i.requestType})})).catch((e=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(e)||(this._dbg(p.Error,`requestID:${l} failed, error=${e.toString()}`),r.set(+l,{responseType:i.responseType,ptr:0,size:0,success:!1,requestType:i.requestType}))}))}}))}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)}isUpdating(e){return!(this._vxl||!this._vxlPromise)||!!this._layers.has(e)&&this._layers.get(e).outstandingRequestCount>0}setEnabled(e,t){this._layers.forEach(((i,s)=>{i.layerView===e&&(this._vxl.set_enabled(s,t),this._renderPluginContext.requestRender())}))}setSlices(e,t){const i={mask:_libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["UpdateFlags"].Slices,slices:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,i,!0)}setDynamicSections(e,t){const i={mask:_libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["UpdateFlags"].DynamicSections,dynamicSections:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,i,!0)}setStaticSections(e,t){const i={mask:_libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["UpdateFlags"].StaticSections,staticSections:t};return this._doMaskedUIUpdate(e,i,!0)}setCurrentVariable(e,t){const i={mask:_libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["UpdateFlags"].CurrentVariable,currentVariable:t};return this._doMaskedUIUpdate(e,i,!0)}setRenderMode(e,t){const i={mask:_libs_vxl_enums_js__WEBPACK_IMPORTED_MODULE_6__["UpdateFlags"].RenderMode,renderMode:t};return this._doMaskedUIUpdate(e,i,!0)}_doMaskedUIUpdate(e,t,i){if(!this._vxl)return!1;let s=!1;return this._layers.forEach(((i,r)=>{if(i.layerView===e){const e={str:JSON.stringify(t),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(e)&&(s=1===this._vxl.handle_masked_ui_update(r,e.ptr,e.byteCount),e.isReusable||this._vxl._free(e.ptr))}})),s&&i&&this._renderPluginContext.requestRender(),s}addVoxelLayer(e){if(!this._vxl){const t={layerView:e,resolveCallback:null,rejectCallback:null},i=new Promise(((e,i)=>{t.resolveCallback=e,t.rejectCallback=i}));return this._newLayers.push(t),i}const t=this._addVoxelLayer(e);return t<0?Promise.reject(-1):Promise.resolve(t)}removeVoxelLayer(e){if(!this._vxl){const t=this._newLayers.findIndex((t=>e===t.layerView));t>=0&&(this._newLayers[t].resolveCallback(-1),this._newLayers.splice(t,1));const i=this._newLayers.length;return 0===i&&(this._dbg(p.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}let t=-1;this._layers.forEach(((i,s)=>{i.layerView===e&&(t=s,i.abortController.abort(),this._vxl.remove_layer(t))})),t>=0&&this._layers.delete(t);const i=this._layers.size;return 0===i&&(this._dbg(p.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}_getBlockSize(e){for(const t of this._wasmMemBlockSizes)if(e<t)return t;return-1}_allocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const t=this._getBlockSize(e.byteCount);return t<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(t),0===e.ptr&&(e.ptr=this._vxl._malloc(t),this._wasmMemBlocks.set(t,e.ptr))),0!==e.ptr&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let t=-Number.MAX_VALUE,i=Number.MAX_VALUE,r=!1;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)&&(e.isAllTime?r=!0:(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.start)&&(r=!0,t=e.start.getTime()/1e3),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.end)&&(r=!0,i=e.end.getTime()/1e3))),{startTime:t,endTime:i,useTime:r}}_addVoxelLayer(e){var i;const s=e.layer;let r=-1;const n=s.getConfiguration();if(n.length<1)return-1;const a={str:n,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const o=this._getTimeArgs(null==(i=this._view)?void 0:i.timeExtent),l=this._view.spatialReference.isWGS84&&s.spatialReference.isWGS84?111319.49079327357:1;if(r=this._vxl.add_layer(s.serviceRoot,a.ptr,a.byteCount,l,l,o.startTime,o.endTime,o.useTime,this._toWasmQuality(this._view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),r>=0){const i=new AbortController;if(this._layers.set(r,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:i,needMemoryUsageUpdate:!1}),!this._halfIntTexturesAvailable||Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("mac")){const t=[];let i="";for(const s of e.layer.variables)"Int16"!==s.renderingFormat.type&&"UInt16"!==s.renderingFormat.type||(t.push(s.name),s.id===e.layer.style.currentVariableId&&(i=s.name));""!==i&&v.error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${i}' in this browser`),t.length>0&&v.warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${t.toString()}' in this browser`)}return Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-mobile")&&v.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),r}return-1}prepareRender(e){if(!this._vxl)return;const t=e.viewForward,i=e.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],t[0],t[1],t[2]);const s=this._vxl.cull();this._dbg(p.RequestResponse,"missingResourceCount="+s),this._moreToLoad=s>0,this._havePreparedWithAllLayers=0===this._newLayers.length,this._updateMemoryUsage()}render(e){if(!this._vxl||e.pass!==this._renderPass||e.slot!==this._renderSlot)return;for(const i of this._newLayers){const e=this._addVoxelLayer(i.layerView);-1===e?i.rejectCallback(-1):i.resolveCallback(e)}if(this._newLayers=[],0===this._layers.size)return void this._dbg(p.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._lastFrameWasStationary=this._view.stationary,this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0),this._vxl.begin_color_frame(!this._view.stationary||this._moreToLoad,e.scenelightingData.lightingMainDirection[0],e.scenelightingData.lightingMainDirection[1],e.scenelightingData.lightingMainDirection[2]);const t=this._renderTargetToRestore.viewport;t.width===this._viewportWidth&&t.height===this._viewportHeight||(this._viewportWidth=t.width,this._viewportHeight=t.height,this._vxl.set_viewport(t.width,t.height),this._layers.forEach((e=>{e.needMemoryUsageUpdate=!0}))),0===t.x&&0===t.y||this._dbg(p.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.camera),this._vxl.draw(),this._renderTargetToRestore.fbo=null,e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),e.rctx.externalVertexArrayObjectUpdate(),e.rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(p.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._readyWatchHandle=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["removeMaybe"])(this._readyWatchHandle),this._qualityWatchHandle=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["removeMaybe"])(this._qualityWatchHandle),this._timeExtentWatchHandle=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["removeMaybe"])(this._timeExtentWatchHandle),this._stationaryWatchHandle=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["removeMaybe"])(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach((e=>{e.abortController.abort()})),this._wasmMemBlocks.forEach((e=>{0!==e&&this._vxl._free(e)})),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=Object(_libs_vxl_VxlModule_js__WEBPACK_IMPORTED_MODULE_7__["loadVoxelWASM"])(e).then((e=>{var i;if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(p.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const s=this._getTimeArgs(null==(i=this._view)?void 0:i.timeExtent),r=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),n=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),a=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),o=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),l=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),h=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),_=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),d=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),c=this._halfIntTexturesAvailable&&!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("mac");this._vxl.initialize_voxel_wasm(r,n,a,o,l,h,_,d,s.startTime,s.endTime,s.useTime,c),this._renderPluginContext&&this._renderPluginContext.requestRender()})).catch((()=>{for(const e of this._newLayers)e.rejectCallback(-2);this._dbg(p.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()}))),this._vxlPromise)}pickDepth(e,t,i){if(!this._vxl||!this._rctx||0===this._layers.size)return null;const s=i.viewport[3]-t;if(e<0||e>i.viewport[2]||t<0||t>i.viewport[3])return this._dbg(p.Error,`pickDepth: outOfRange, screenXY=[${e}, ${s}], vp=[${i.viewport.toString()}]`),null;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const r=i.viewForward,n=i.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],r[0],r[1],r[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const a=this._vxl.pick_depth(e,s);if(this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),a.success){return a.distanceToCamera}return null}_toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}}


/***/ }),

/***/ "Ygdx":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/vxl/VxlModule.js ***!
  \*********************************************************/
/*! exports provided: loadVoxelWASM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadVoxelWASM", function() { return t; });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "ss0y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(e){return new Promise((t=>__webpack_require__.e(/*! import() | chunks-vxlLayer-js */ "chunks-vxlLayer-js").then(__webpack_require__.bind(null, /*! ../../chunks/vxlLayer.js */ "UMX5")).then((e=>e.v)).then((({default:n})=>{const r=n({locateFile:i,preinitializedWebGLContext:e,onRuntimeInitialized:()=>t(r)})})))).catch((e=>Promise.reject(e)))}function i(t){return Object(_assets_js__WEBPACK_IMPORTED_MODULE_0__["getAssetUrl"])(`esri/libs/vxl/${t}`)}


/***/ }),

/***/ "ay+M":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelSlice.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean,json:{write:!0}})],s.prototype,"enabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],s.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:!0}})],s.prototype,"normal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:!0}})],s.prototype,"point",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelSlice")],s);const p=s;


/***/ }),

/***/ "c2hf":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelAlphaStop.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.alpha=0,this.position=0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"alpha",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"position",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelAlphaStop")],t);const p=t;


/***/ }),

/***/ "cCWz":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelDimension.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelIrregularSpacing_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelIrregularSpacing.js */ "ocSc");
/* harmony import */ var _VoxelRegularSpacing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoxelRegularSpacing.js */ "T+Uk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_VoxelIrregularSpacing_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],p.prototype,"irregularSpacing",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean,json:{write:!0}})],p.prototype,"isPositiveUp",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean,json:{write:!0}})],p.prototype,"isWrappedDateLine",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],p.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],p.prototype,"quantity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_VoxelRegularSpacing_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],p.prototype,"regularSpacing",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:!0}})],p.prototype,"size",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],p.prototype,"unit",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelDimension")],p);const n=p;


/***/ }),

/***/ "hsAz":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelFormat.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:["discrete","continuous"],json:{write:!0}})],s.prototype,"continuity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean,json:{write:!0}})],s.prototype,"hasNoData",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:!0}})],s.prototype,"noData",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:!0}})],s.prototype,"offset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{write:!0}})],s.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"type",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelFormat")],s);const p=s;


/***/ }),

/***/ "mUrU":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelSimpleShading.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"diffuseFactor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"specularFactor",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelSimpleShading")],t);const p=t;


/***/ }),

/***/ "o0d7":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VoxelLayer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return C; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Collection.js */ "LE9a");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Handles.js */ "r0DZ");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./VoxelWasmManager.js */ "vbpc");
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ "9G54");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/SceneService.js */ "lq5k");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/arcgisLayerUrl.js */ "VLTf");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _support_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/VoxelDynamicSection.js */ "ytPz");
/* harmony import */ var _support_VoxelSection_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/VoxelSection.js */ "pG35");
/* harmony import */ var _support_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/VoxelSlice.js */ "ay+M");
/* harmony import */ var _support_VoxelStyle_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/VoxelStyle.js */ "TIAR");
/* harmony import */ var _support_VoxelVariable_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support/VoxelVariable.js */ "RqMe");
/* harmony import */ var _support_VoxelVolume_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/VoxelVolume.js */ "0n+O");
/* harmony import */ var _support_VoxelVolumeIndex_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./support/VoxelVolumeIndex.js */ "RIjU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const M=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(" esri.layers.VoxelLayer");var D;!function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"}(D||(D={}));let R=class extends(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_24__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_20__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_23__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__["MultiOriginJSONMixin"])(Object(_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_19__["APIKeyMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_17__["default"])))))))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.style=null,this.opacity=1,this.variables=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.volumes=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__["default"],this.version={major:Number.NaN,minor:Number.NaN,versionString:""}}set url(e){this._set("url",Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_25__["sanitizeUrl"])(e,M))}destroy(){this._handles=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["destroyMaybe"])(this._handles)}_dbg(e,r){this._dbgFlags.has(e)&&(e===D.Error?M.error(r):M.warn(r))}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__["throwIfAbortError"]).then((()=>this._fetchService(r))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(t),Promise.resolve(this)}getConfiguration(){this._handles.add([Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__["watch"])((()=>this._getRenderMode()),(e=>this._pushRenderModeToWasm(e))),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__["watch"])((()=>this._getCurrentVariableId()),(e=>this._pushCurrentVariableIdToWasm(e))),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__["watch"])((()=>this._getDynamicSections()),(e=>this._pushDynamicSectionsToWasm(e))),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__["watch"])((()=>this._getSlices()),(e=>this._pushSlicesToWasm(e))),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__["watch"])((()=>this._getSections()),(e=>this._pushSectionsToWasm(e)))]);const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return e.index&&this.index.isValid()?JSON.stringify(e):""}readVersion(e,r){return super.parseVersionString(e)}_getSections(){const e=[];for(const r of this.sections)e.push(new _support_VoxelSection_js__WEBPACK_IMPORTED_MODULE_28__["default"]({enabled:r.enabled,href:r.href,id:r.id,label:r.label,normal:r.normal,point:r.point,sizeInPixel:r.sizeInPixel,slices:r.slices,timeId:r.timeId,variableId:r.variableId}));return e}_pushSectionsToWasm(e){this._dbg(D.VerboseAPI,"VoxelLayer._pushSectionsToWasm() called");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().setLayerStaticSections(this,e)||this._dbg(D.Error,"VoxelLayer._pushSectionsToWasm() failed!")}_isPlaneValid(e,r,t){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;for(let s=0;s<3;++s){const o=e.point[s];if(o<0||o>=t[r[s]].size)return!1}const o=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_16__["f"])(e.normal[0],e.normal[1],e.normal[2]);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_15__["n"])(o,o);const i=1e-6;return!(Math.abs(o[0])+Math.abs(o[1])+Math.abs(o[2])<i)&&(e.normal[0]=o[0],e.normal[1]=o[1],e.normal[2]=o[2],!0)}getVariableStyle(e){let r=-1;r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e)?e:this._getCurrentVariableId();if(!(null==this?void 0:this.style.variableStyles)||-1===r)return null;const t=this.style.variableStyles.findIndex((e=>e.variableId===r));return t<0?null:this.style.variableStyles.getItemAt(t)}getVariable(e){let r=-1;if(r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e)?e:this._getCurrentVariableId(),!this.variables||-1===r)return null;const t=this.variables.findIndex((e=>e.id===r));return t<0?null:this.variables.getItemAt(t)}getVolume(e){const r=this.getVariable(e);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r)?this.volumes.find((({id:e})=>e===r.volumeId)):null}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}_getVolumeStyle(e){const r=this.getVariable(e);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r)?this.style.volumeStyles.find((({volumeId:e})=>e===r.volumeId)):null}_getSlices(){const e=[],r=this.getVolume(null);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r)||!r.isVolumeValid())return e;const t=this._getVolumeStyle(null);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(t))return e;for(const o of t.slices)this._isPlaneValid(o,[0,1,r.getZDimension()],r.dimensions)?e.push(new _support_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_29__["default"]({enabled:o.enabled,label:o.label,point:o.point,normal:o.normal})):e.push(new _support_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_29__["default"]({enabled:!1,label:"invalid",point:o.point,normal:o.normal}));return e}_pushSlicesToWasm(e){this._dbg(D.VerboseAPI,"VoxelLayer._pushSlicesToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().setLayerSlices(this,e)||this._dbg(D.Error,"VoxelLayer._pushSlicesToWasm() failed!")}_getDynamicSections(){const e=[],r=this.getVolume(null);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(r)||!r.isVolumeValid())return e;const t=this._getVolumeStyle(null);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(t))return e;for(const o of t.dynamicSections)this._isPlaneValid(o,[0,1,r.getZDimension()],r.dimensions)?e.push(new _support_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_27__["default"]({enabled:o.enabled,label:o.label,point:o.point,normal:o.normal})):e.push(new _support_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_27__["default"]({enabled:!1,label:"invalid",point:o.point,normal:o.normal}));return e}_pushDynamicSectionsToWasm(e){this._dbg(D.VerboseAPI,"VoxelLayer._pushDynamicSectionsToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().setLayerDynamicSections(this,e)||this._dbg(D.Error,"VoxelLayer._updateDynamicSections() failed!")}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(e){this._dbg(D.VerboseAPI,"VoxelLayer._pushCurrentVariableIdToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().setLayerCurrentVariable(this,e)||this._dbg(D.Error,"VoxelLayer._pushCurrentVariableIdToWasm() failed!")}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(e){this._dbg(D.VerboseAPI,"VoxelLayer._pushRenderModeToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_18__["default"].getInstance().setLayerRenderMode(this,e)||this._dbg(D.Error,"VoxelLayer.setLayerRenderMode() failed!")}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_26__["popupEnabled"])],R.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:["Voxel"]})],R.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_26__["legendEnabled"])],R.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{write:!0}})],R.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_26__["url"])],R.prototype,"url",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_support_VoxelSection_js__WEBPACK_IMPORTED_MODULE_28__["default"]),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],R.prototype,"sections",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:_support_VoxelStyle_js__WEBPACK_IMPORTED_MODULE_30__["default"],json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],R.prototype,"style",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],R.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_support_VoxelVariable_js__WEBPACK_IMPORTED_MODULE_31__["default"])})],R.prototype,"variables",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_support_VoxelVolume_js__WEBPACK_IMPORTED_MODULE_32__["default"])})],R.prototype,"volumes",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:_support_VoxelVolumeIndex_js__WEBPACK_IMPORTED_MODULE_33__["default"]})],R.prototype,"index",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],R.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],R.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({readOnly:!0,json:{name:"serviceVersion"}})],R.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__["reader"])("service","version")],R.prototype,"readVersion",null),R=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__["subclass"])("esri.layers.VoxelLayer")],R);const C=R;


/***/ }),

/***/ "ocSc":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelIrregularSpacing.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.values=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:!0}})],t.prototype,"values",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelIrregularSpacing")],t);const p=t;


/***/ }),

/***/ "p+nu":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelIsosurface.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__["Integer"]],write:{enabled:!0,isRequired:!0}}})],l.prototype,"color",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"value",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Boolean,json:{default:!0,write:!0}})],l.prototype,"enabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],l.prototype,"label",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.VoxelIsosurface")],l);const i=l;


/***/ }),

/***/ "pG35":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelSection.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _VoxelSlice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoxelSlice.js */ "ay+M");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "/PL2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}readHref(e,r,o){return Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__["f"])(e,o)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean,json:{default:!0,write:!0}})],n.prototype,"enabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"href",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])(["service","web-scene"],"href")],n.prototype,"readHref",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],n.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"normal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"point",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"]],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"sizeInPixel",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_8__["default"]],json:{write:!0}})],n.prototype,"slices",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"],json:{default:0,write:!0}})],n.prototype,"timeId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"variableId",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.VoxelSection")],n);const a=n;


/***/ }),

/***/ "vbpc":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VoxelWasmManager.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _VoxelWasmPerScene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoxelWasmPerScene.js */ "YAgM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(){this.view2WASM=new Map}static getInstance(){return t.instance||(t.instance=new t),t.instance}getVoxelWasmPerSceneView(e){return this.view2WASM.has(e)?this.view2WASM.get(e):null}isUpdating(e,t){return!!this.view2WASM.has(e)&&this.view2WASM.get(e).isUpdating(t)}addLayer(t,i){return this.view2WASM.has(t)||this.view2WASM.set(t,new _VoxelWasmPerScene_js__WEBPACK_IMPORTED_MODULE_0__["default"](t)),this.view2WASM.get(t).addVoxelLayer(i)}removeLayer(e,t){if(this.view2WASM.has(e)){this.view2WASM.get(e).removeVoxelLayer(t)<1&&this.view2WASM.delete(e)}}setLayerEnabled(e,t,i){if(this.view2WASM.has(e)){this.view2WASM.get(e).setEnabled(t,i)}}setLayerSlices(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setSlices(a,t))}))})),i}setLayerDynamicSections(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setDynamicSections(a,t))}))})),i}setLayerCurrentVariable(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setCurrentVariable(a,t))}))})),i}setLayerRenderMode(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setRenderMode(a,t))}))})),i}setLayerStaticSections(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setStaticSections(a,t))}))})),i}}


/***/ }),

/***/ "ytPz":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelDynamicSection.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean,json:{default:!0,write:!0}})],s.prototype,"enabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{write:!0}})],s.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:!0}})],s.prototype,"normal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number],json:{write:!0}})],s.prototype,"point",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.VoxelDynamicSection")],s);const p=s;


/***/ })

}]);
//# sourceMappingURL=VoxelLayer-js.js.map