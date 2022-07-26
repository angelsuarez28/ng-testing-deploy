(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-support-geometryServiceUtils-js"],{

/***/ "4ugL":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/*! exports provided: getGeometryServiceURL, projectGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeometryServiceURL", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectGeometry", function() { return l; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/geometryService/project.js */ "rJHQ");
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ "fms8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function i(o=null,n){var i,l;if(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl)return _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");let a;a="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault():o,await a.load({signal:n});const c=null==(i=a.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");return c}async function l(r,t,l=null,a){const c=await i(l,a),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"];s.geometries=[r],s.outSpatialReference=t;const m=await Object(_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__["project"])(c,s,{signal:a});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed")}


/***/ })

}]);
//# sourceMappingURL=portal-support-geometryServiceUtils-js.js.map