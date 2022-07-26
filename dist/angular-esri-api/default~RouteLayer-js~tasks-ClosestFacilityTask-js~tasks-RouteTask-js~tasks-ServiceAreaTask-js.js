(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~RouteLayer-js~tasks-ClosestFacilityTask-js~tasks-RouteTask-js~tasks-ServiceAreaTask-js"],{

/***/ "/4Hs":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/networkEnums.js ***!
  \****************************************************************/
/*! exports provided: barrierTypeJsonMap, curbApproachJsonMap, directionLineTypeJsonMap, directionPointTypeJsonMap, directionsLengthUnitJsonMap, directionsOutputTypeJsonMap, directionsTimeUnitJsonMap, fullEdgeJsonMap, lengthUnitJsonMap, locationTypeJsonMap, outputLineJsonMap, outputPolygonJsonMap, restrictUTurnJsonMap, sideOfEdgeJsonMap, statusJsonMap, timeOfDayUsageJsonMap, travelDirectionJsonMap, travelModeTypeJsonMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barrierTypeJsonMap", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curbApproachJsonMap", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionLineTypeJsonMap", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionPointTypeJsonMap", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionsLengthUnitJsonMap", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionsOutputTypeJsonMap", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionsTimeUnitJsonMap", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullEdgeJsonMap", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthUnitJsonMap", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationTypeJsonMap", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputLineJsonMap", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputPolygonJsonMap", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictUTurnJsonMap", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideOfEdgeJsonMap", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusJsonMap", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOfDayUsageJsonMap", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelDirectionJsonMap", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelModeTypeJsonMap", function() { return c; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),t=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),i=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"}),s=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),n=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),a=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),o=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),l=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),u=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),c=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}),m=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),d=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),N=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),f=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({1:"right",2:"left"},{useNumericKeys:!0}),h=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({0:"restriction",1:"added-cost"},{useNumericKeys:!0}),A=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({0:"permit",1:"restrict"},{useNumericKeys:!0}),p=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation"},{useNumericKeys:!0}),y=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0});


/***/ }),

/***/ "dI9f":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/TravelMode.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _networkEnums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./networkEnums.js */ "/4Hs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var u;let c=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(t){super(t),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new u(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[Object],json:{write:!0}})],c.prototype,"attributeParameterValues",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"distanceAttributeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"impedanceAttributeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[String],json:{write:!0}})],c.prototype,"restrictionAttributeNames",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Number,json:{write:{allowNull:!0}}})],c.prototype,"simplificationTolerance",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])(_networkEnums_js__WEBPACK_IMPORTED_MODULE_7__["lengthUnitJsonMap"])],c.prototype,"simplificationToleranceUnits",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"timeAttributeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])(_networkEnums_js__WEBPACK_IMPORTED_MODULE_7__["travelModeTypeJsonMap"])],c.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Boolean,json:{write:!0}})],c.prototype,"useHierarchy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])(_networkEnums_js__WEBPACK_IMPORTED_MODULE_7__["restrictUTurnJsonMap"])],c.prototype,"uturnAtJunctions",void 0),c=u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.TravelMode")],c);const l=c;


/***/ }),

/***/ "eUVy":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/GPMessage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
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
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(e){super(e),this.description=null,this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],i.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.GPMessage")],i);const a=i;


/***/ }),

/***/ "egEM":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/NetworkServiceDescription.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _networkEnums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkEnums.js */ "/4Hs");
/* harmony import */ var _TravelMode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TravelMode.js */ "dI9f");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(t){super(t),this.accumulateAttributeNames=null,this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"accumulateAttributeNames",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"currentVersion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"defaultTravelMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"directionsLanguage",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])(_networkEnums_js__WEBPACK_IMPORTED_MODULE_8__["directionsLengthUnitJsonMap"])],a.prototype,"directionsLengthUnits",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"directionsSupportedLanguages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"directionsTimeAttribute",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"hasZ",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"impedance",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"networkDataset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[_TravelMode_js__WEBPACK_IMPORTED_MODULE_9__["default"]]})],a.prototype,"supportedTravelModes",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.NetworkServiceDescription")],a);const n=a;


/***/ }),

/***/ "laIn":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/NAMessage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _GPMessage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GPMessage.js */ "eUVy");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends _GPMessage_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(r){super(r),this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{read:p.read,write:p.write}})],c.prototype,"type",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.NAMessage")],c);const a=c;


/***/ }),

/***/ "o6Le":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/queryUtils.js ***!
  \******************************************************/
/*! exports provided: createQueryParamsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryParamsHelper", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=t=>{if(!Array.isArray(t))return!1;const[e]=t;return"number"==typeof e||"string"==typeof e};class e{constructor(t={}){this._options=t}toQueryParams(e){if(!e)return null;const o=e.toJSON(),n={};return Object.keys(o).forEach((e=>{const r=this._options[e];if(r){const s="boolean"!=typeof r&&r.name?r.name:e,i="boolean"!=typeof r&&r.getter?r.getter(o):o[e];null!=i&&(n[s]=t(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else n[e]=o[e]}),this),n}}function o(t){return new e(t)}


/***/ }),

/***/ "wnnX":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/networkService.js ***!
  \**********************************************************/
/*! exports provided: collectGeometries, dropZValuesOffInputGeometry, fetchServiceDescription, isInputGeometryZAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectGeometries", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropZValuesOffInputGeometry", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchServiceDescription", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputGeometryZAware", function() { return u; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/object.js */ "nR38");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "u3Ia");
/* harmony import */ var _support_NetworkServiceDescription_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/NetworkServiceDescription.js */ "egEM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function i(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}function d(e,r){for(let t=0;t<r.length;t++){const o=e[r[t]];if(o&&o.length)for(const e of o)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function u(e,r){for(let o=0;o<r.length;o++){const s=e[r[o]];if(s&&s.length)for(const e of s)if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&e.hasZ)return!0}return!1}async function f(t,o,s){if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("network-service:missing-url","Url to Network service is missing");const l=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json",token:o},s),{data:i}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,l);i.supportedTravelModes||(i.supportedTravelModes=[]);for(let e=0;e<i.supportedTravelModes.length;e++)i.supportedTravelModes[e].id||(i.supportedTravelModes[e].id=i.supportedTravelModes[e].itemId);const d=i.currentVersion>=10.4?c(t,o,s):p(t,s),{defaultTravelMode:u,supportedTravelModes:f}=await d;return i.defaultTravelMode=u,i.supportedTravelModes=f,_support_NetworkServiceDescription_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(i)}async function p(r,t){var n,i;const d=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json"},t),{data:u}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r.replace(/\/rest\/.*$/i,"/info"),d);if(!u||!u.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:f}=u,p=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(f)+"/sharing/rest/portals/self",{data:c}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p,d),v=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_3__["getDeepValue"])("helperServices.routingUtilities.url",c);if(!v)return{supportedTravelModes:[],defaultTravelMode:null};const m=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["parseUrl"])(f),T=/\/solve$/i.test(m.path)?"Route":/\/solveclosestfacility$/i.test(m.path)?"ClosestFacility":"ServiceAreas",M=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json",serviceName:T},t),h=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(v)+"/GetTravelModes/execute",w=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(h,M),g=[];let y=null;if(null!=w&&null!=(n=w.data)&&null!=(i=n.results)&&i.length){const e=w.data.results;for(const r of e){var j;if("supportedTravelModes"===r.paramName){if(null!=(j=r.value)&&j.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);g.push(r)}}else"defaultTravelMode"===r.paramName&&(y=r.value)}}return{supportedTravelModes:g,defaultTravelMode:y}}async function c(t,o,l){try{const r=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json",token:o},l),n=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(t)+"/retrieveTravelModes",{data:{supportedTravelModes:i,defaultTravelMode:d}}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n,r);return{supportedTravelModes:i,defaultTravelMode:d}}catch(n){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:n})}}


/***/ })

}]);
//# sourceMappingURL=default~RouteLayer-js~tasks-ClosestFacilityTask-js~tasks-RouteTask-js~tasks-ServiceAreaTask-js.js.map