(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-workers-request-js"],{

/***/ "ZsKd":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/request.js ***!
  \***********************************************************/
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return s; });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error.js */ "zlDU");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let r;function s(s,a){let n=a.responseType;n?"array-buffer"!==n&&"blob"!==n&&"json"!==n&&"native"!==n&&"native-request-init"!==n&&"text"!==n&&(n="text"):n="json",a.responseType=n;const o=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(a.signal);return delete a.signal,globalThis.invokeStaticMessage("request",{url:s,options:a},{signal:o}).then((async t=>{let i,l,u,c,b;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==n&&"text"!==n&&"blob"!==n||(i=new Blob([t.data]),"json"!==n&&"text"!==n||(r||(r=new FileReaderSync),c=r.readAsText(i),"json"!==n)))){try{l=JSON.parse(c||null)}catch(f){const t={...f,url:s,requestOptions:a};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",f.message,t)}if(l.error){const t={...l.error,url:s,requestOptions:a};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",l.error.message,t)}}}else"native"===n&&(t.data.signal=o,u=await fetch(t.data.url,t.data));switch(n){case"blob":b=i;break;case"json":b=l;break;case"native":b=u;break;case"text":b=c;break;default:b=t.data}return{data:b,requestOptions:a,ssl:t.ssl,url:s}}))}


/***/ })

}]);
//# sourceMappingURL=core-workers-request-js.js.map