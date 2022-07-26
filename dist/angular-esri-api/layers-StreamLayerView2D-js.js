(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-StreamLayerView2D-js"],{

/***/ "+haL":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/StreamLayerView2D.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ "Ltyc");
/* harmony import */ var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FeatureLayerView2D.js */ "GJxj");
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/util.js */ "RaXU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function p(e,t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t))return null;const i={};return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)&&(i.geometry=t.toJSON()),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&(i.where=e),i}let l=class extends _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update())),this.watch("suspended",(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream()}))])}get connectionError(){if(this.errorString)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),s=this;return{remove(){r.remove(),"data-received"===e&&(s._proxy.closed||s.hasEventListener("data-received")||s._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(p(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=Object(_support_util_js__WEBPACK_IMPORTED_MODULE_10__["toJSONGeometryType"])(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:p(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],l.prototype,"errorString",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],l.prototype,"connectionError",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],l.prototype,"connectionStatus",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.StreamLayerView2D")],l);const d=l;


/***/ })

}]);
//# sourceMappingURL=layers-StreamLayerView2D-js.js.map