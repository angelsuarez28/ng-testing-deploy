(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-GeometryService-js"],{

/***/ "1E6V":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/GeometryService.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return g; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest/geometryService/areasAndLengths.js */ "T9St");
/* harmony import */ var _rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rest/geometryService/autoComplete.js */ "Cexc");
/* harmony import */ var _rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rest/geometryService/buffer.js */ "vBrX");
/* harmony import */ var _rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rest/geometryService/convexHull.js */ "Giuk");
/* harmony import */ var _rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rest/geometryService/cut.js */ "JhN6");
/* harmony import */ var _rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rest/geometryService/densify.js */ "xC5X");
/* harmony import */ var _rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rest/geometryService/difference.js */ "EhxB");
/* harmony import */ var _rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rest/geometryService/distance.js */ "5USS");
/* harmony import */ var _rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rest/geometryService/fromGeoCoordinateString.js */ "bMVx");
/* harmony import */ var _rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rest/geometryService/generalize.js */ "NdSu");
/* harmony import */ var _rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rest/geometryService/intersect.js */ "vB4c");
/* harmony import */ var _rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rest/geometryService/labelPoints.js */ "q/vV");
/* harmony import */ var _rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rest/geometryService/lengths.js */ "whjZ");
/* harmony import */ var _rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../rest/geometryService/offset.js */ "EPdg");
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rest/geometryService/project.js */ "rJHQ");
/* harmony import */ var _rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../rest/geometryService/relation.js */ "nkC/");
/* harmony import */ var _rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../rest/geometryService/reshape.js */ "5Q/F");
/* harmony import */ var _rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../rest/geometryService/simplify.js */ "1STP");
/* harmony import */ var _rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../rest/geometryService/toGeoCoordinateString.js */ "MSw1");
/* harmony import */ var _rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../rest/geometryService/trimExtend.js */ "+L3b");
/* harmony import */ var _rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../rest/geometryService/union.js */ "0aJI");
/* harmony import */ var _rest_geometryService_units_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../rest/geometryService/units.js */ "vaBp");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Task.js */ "kglp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let C=class extends _Task_js__WEBPACK_IMPORTED_MODULE_28__["default"]{constructor(r){super(r),this.url=null}areasAndLengths(r,e){return Object(_rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_6__["areasAndLengths"])(this.url,r,e)}autoComplete(r,e,t){return Object(_rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_7__["autoComplete"])(this.url,r,e,t)}buffer(r,e){return Object(_rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_8__["buffer"])(this.url,r,e)}convexHull(r,e){return Object(_rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_9__["convexHull"])(this.url,r,e)}cut(r,e,t){return Object(_rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_10__["cut"])(this.url,r,e,t)}densify(r,e){return Object(_rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_11__["densify"])(this.url,r,e)}difference(r,e,t){return Object(_rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_12__["difference"])(this.url,r,e,t)}distance(r,e){return Object(_rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_13__["distance"])(this.url,r,e)}fromGeoCoordinateString(r,e){return Object(_rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_14__["fromGeoCoordinateString"])(this.url,r,e)}generalize(r,e){return Object(_rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_15__["generalize"])(this.url,r,e)}intersect(r,e,t){return Object(_rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_16__["intersect"])(this.url,r,e,t)}labelPoints(r,e){return Object(_rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_17__["labelPoints"])(this.url,r,e)}lengths(r,e){return Object(_rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_18__["lengths"])(this.url,r,e)}offset(r,e){return Object(_rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_19__["offset"])(this.url,r,e)}project(r,e){return Object(_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_20__["project"])(this.url,r,e)}relation(r,e){return Object(_rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_21__["relation"])(this.url,r,e)}reshape(r,e,t){return Object(_rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_22__["reshape"])(this.url,r,e,t)}simplify(r,e){return Object(_rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_23__["simplify"])(this.url,r,e)}toGeoCoordinateString(r,e){return Object(_rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_24__["toGeoCoordinateString"])(this.url,r,e)}trimExtend(r,e){return Object(_rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_25__["trimExtend"])(this.url,r,e)}union(r,e){return Object(_rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_26__["union"])(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],C.prototype,"url",void 0),C=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.GeometryService")],C);const g=C;


/***/ })

}]);
//# sourceMappingURL=tasks-GeometryService-js.js.map