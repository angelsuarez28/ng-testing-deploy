(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-RasterWorker-js"],{

/***/ "DABJ":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RasterWorker.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return O; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/GeographicTransformation.js */ "hOOA");
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PixelBlock.js */ "Piei");
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rasterFormats/RasterCodec.js */ "FFFX");
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rasterFunctions/vectorFieldUtils.js */ "Gdt4");
/* harmony import */ var _rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rasterTransforms/utils.js */ "jGp1");
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/support/RasterSymbolizer.js */ "ciAr");
/* harmony import */ var _views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/2d/engine/flow/dataUtils.js */ "Jha9");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class O{convertVectorFieldData(e){const t=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e.pixelBlock),s=Object(_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertVectorFieldData"])(t,e.type);return Promise.resolve(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)&&s.toJSON())}async decode(r){const e=await Object(_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e.pixelBlock),e.extent=e.extent?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&t.toJSON())}async updateSymbolizer(r){var e;this.symbolizer=_renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&t.toJSON())}estimateStatisticsHistograms(r){const e=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["estimateStatisticsHistograms"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["split"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,null==r?void 0:r.toJSON())})),Promise.resolve(e)}async mosaicAndTransform(r){var t;const s=r.srcPixelBlocks.map((r=>r?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"](r):null)),i=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["mosaic"])(s,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let a,c=i;return r.coefs&&(c=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["approximateTransform"])(i,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(a=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["getLocalArithmeticNorthRotations"])(r.destDimension,r.gcsGrid),c=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(Object(_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToLocalDirections"])(c,r.isUV?"vector-uv":"vector-magdir",a))),{pixelBlock:null==(t=c)?void 0:t.toJSON(),localNorthDirections:a}}async createStreamlinesMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),width:r.flowData.width,height:r.flowData.height},{vertexData:o,indexData:s}=await Object(_views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_10__["createStreamlinesMesh"])(r.rendererSettings,t,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:s.buffer},transferList:[o.buffer,s.buffer]}}async getProjectionOffsetGrid(r){const e=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(r.projectedExtent),o=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(r.srcBufferExtent);let s=null;r.datumTransformationSteps&&(s=new _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_2__["default"]({steps:r.datumTransformationSteps})),(r.includeGCSGrid||Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_6__["requirePE"])(e.spatialReference,o.spatialReference,s))&&await Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_6__["load"])();const i=r.rasterTransform?Object(_rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_8__["readTransform"])(r.rasterTransform):null;return Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_6__["getProjectionOffsetGrid"])({...r,projectedExtent:e,srcBufferExtent:o,datumTransformation:s,rasterTransform:i})}}


/***/ })

}]);
//# sourceMappingURL=layers-support-RasterWorker-js.js.map