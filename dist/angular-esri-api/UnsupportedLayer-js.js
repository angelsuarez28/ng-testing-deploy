(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UnsupportedLayer-js"],{

/***/ "GN2T":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/UnsupportedLayer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/scheduling.js */ "WBXD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let c=class extends(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_10__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_9__["default"]))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__["schedule"])((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unsupported layer type";r&&(s+=" "+r),o(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("layer:unsupported-layer-type",s,{layerType:r}))}))})))}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e)}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"resourceInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["show","hide"]})],c.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.UnsupportedLayer")],c);const u=c;


/***/ })

}]);
//# sourceMappingURL=UnsupportedLayer-js.js.map