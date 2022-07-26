(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["previewWebStyleSymbol-js"],{

/***/ "Su0i":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js ***!
  \****************************************************************************/
/*! exports provided: previewWebStyleSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewWebStyleSymbol", function() { return n; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previewUtils.js */ "IAPW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(e,i,n){const o=e.thumbnail&&e.thumbnail.url;return o?Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o,{responseType:"image"}).then((t=>{const e=h(t.data,n);return n&&n.node?(n.node.appendChild(e),n.node):e})):e.fetchSymbol().then((t=>i(t,n)))}function h(t,n){const h=!/\\.svg$/i.test(t.src)&&n&&n.disableUpsampling,o=Math.max(t.width,t.height);let r=n&&null!=n.maxSize?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(n.maxSize):_previewUtils_js__WEBPACK_IMPORTED_MODULE_2__["SymbolSizeDefaults"].maxSize;h&&(r=Math.min(o,r));const s="number"==typeof(null==n?void 0:n.size)?null==n?void 0:n.size:null,l=Math.min(r,null!=s?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s):o);if(l!==o){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=l,t.height=l/e):(t.width=l*e,t.height=l)}return t}


/***/ })

}]);
//# sourceMappingURL=previewWebStyleSymbol-js.js.map