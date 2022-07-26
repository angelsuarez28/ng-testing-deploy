(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-labelFormatUtils-js"],{

/***/ "zKxS":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelFormatUtils.js ***!
  \**********************************************************************/
/*! exports provided: createLabelFunction, formatField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabelFunction", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatField", function() { return m; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _intl_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../intl/date.js */ "RlM3");
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../intl/number.js */ "IeLS");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fieldUtils.js */ "wdpY");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labelUtils.js */ "ezna");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "gvqN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},c={getAttribute:(e,t)=>e.field(t)};async function f(t,r,a){if(!t||!t.symbol)return p;const n=t.where,l=Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_5__["getLabelExpression"])(t),f=n?await __webpack_require__.e(/*! import() | core-sql-WhereClause-js */ "default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~9e66c59e").then(__webpack_require__.bind(null, /*! ../../core/sql/WhereClause.js */ "ZqIb")):null;let d;if("arcade"===l.type){const t=await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__["createLabelExpression"])(l.expression,a,r);d={type:"arcade",evaluate(r){try{const e=t.evaluate({$feature:"attributes"in r?t.repurposeFeature(r):r});if(null!=e)return e.toString()}catch(a){u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:l}))}return null},needsHydrationToEvaluate:()=>null==Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_5__["getSingleFieldArcadeExpression"])(l.expression)}}else d={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),n=r.get(a);if(!n)return t;let l=null;if("attributes"in e){e&&e.attributes&&(l=e.attributes[n.name])}else l=e.field(n.name);return null==l?"":m(l,n)}))};if(n){let e;try{e=f.WhereClause.create(n,r)}catch(y){return p}const t=d.evaluate;d.evaluate=r=>{const a="attributes"in r?void 0:c;return e.testFeature(r,a)?t(r):null}}return d}function m(e,t){if(null==e)return"";const o=t.domain;if(o)if("codedValue"===o.type||"coded-value"===o.type){const t=e;for(const e of o.codedValues)if(e.code===t)return e.name}else if("range"===o.type){const t=+e,r="range"in o?o.range[0]:o.minValue,a="range"in o?o.range[1]:o.maxValue;if(r<=t&&t<=a)return o.name}let i=e;return"date"===t.type||"esriFieldTypeDate"===t.type?i=Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(i,Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_2__["convertDateFormatToIntlOptions"])("short-date")):Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__["isNumericField"])(t)&&(i=Object(_intl_number_js__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(+i)),i||""}


/***/ })

}]);
//# sourceMappingURL=layers-support-labelFormatUtils-js.js.map