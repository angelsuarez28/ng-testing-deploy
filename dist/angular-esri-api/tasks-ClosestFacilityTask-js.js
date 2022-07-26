(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-ClosestFacilityTask-js"],{

/***/ "GAVh":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/closestFacility.js ***!
  \***********************************************************/
/*! exports provided: solve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return c; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/queryUtils.js */ "o6Le");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _networkService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networkService.js */ "wnnX");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "u3Ia");
/* harmony import */ var _support_ClosestFacilitySolveResult_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support/ClosestFacilitySolveResult.js */ "JZK7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const l=Object(_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_1__["createQueryParamsHelper"])({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c(r,c,m){const f=[],p=[],y={},B={},d=Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["parseUrl"])(r),{path:b}=d;c.incidents&&c.incidents.features&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["collectGeometries"])(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["collectGeometries"])(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["collectGeometries"])(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["collectGeometries"])(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["collectGeometries"])(c.polygonBarriers.features,p,"polygonBarriers.features",y);const g=await Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeCentralMeridian"])(p);for(const e in y){const r=y[e];f.push(e),B[e]=g.slice(r[0],r[1])}if(Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["isInputGeometryZAware"])(B,f)){let e=null;try{e=await Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["fetchServiceDescription"])(b,c.apiKey,m)}catch{}e&&!e.hasZ&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_3__["dropZValuesOffInputGeometry"])(B,f)}for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r}));const A={...m,query:{...d.query,...l.toQueryParams(c),f:"json"}},{data:j}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`${b}/solveClosestFacility`,A);return _support_ClosestFacilitySolveResult_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(j)}


/***/ }),

/***/ "JZK7":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ClosestFacilitySolveResult.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return g; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DirectionsFeatureSet.js */ "Wylo");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FeatureSet.js */ "Ltyc");
/* harmony import */ var _NAMessage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NAMessage.js */ "laIn");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/Polyline.js */ "UhwK");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "Ehki");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(r.spatialReference),i=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(o);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return _FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(r).features.map((r=>r.geometry))}let j=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"]{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_12__["default"]]})],j.prototype,"directions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__["default"]]})],j.prototype,"facilities",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("facilities")],j.prototype,"readFacilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__["default"]]})],j.prototype,"incidents",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("incidents")],j.prototype,"readIncidents",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_NAMessage_js__WEBPACK_IMPORTED_MODULE_14__["default"]]})],j.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__["default"]]})],j.prototype,"pointBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__["default"]]})],j.prototype,"polylineBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("polylineBarriers")],j.prototype,"readPolylineBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_17__["default"]]})],j.prototype,"polygonBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("polygonBarriers")],j.prototype,"readPolygonBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]]})],j.prototype,"routes",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("routes")],j.prototype,"readRoutes",null),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;


/***/ }),

/***/ "R+dG":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/DirectionsFeature.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let e=class extends _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],e.prototype,"events",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],e.prototype,"strings",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.DirectionsFeature")],e);const p=e;


/***/ }),

/***/ "Wylo":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/DirectionsFeatureSet.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _DirectionsFeature_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DirectionsFeature.js */ "R+dG");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FeatureSet.js */ "Ltyc");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/Polyline.js */ "UhwK");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let u=class extends _FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const o=null!=(r=t.summary.envelope.spatialReference)?r:t.spatialReference,s=o&&_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(o);return e.map((e=>{var t,r;const o=this._decompressGeometry(e.compressedGeometry),n=new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_13__["default"]({...o,spatialReference:s}),p=null!=(t=null==(r=e.events)?void 0:r.map((e=>{const{arriveTimeUTC:t,ETA:r,point:{x:o,y:n,z:p},strings:i}=e;return new _DirectionsFeature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({geometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]({x:o,y:n,z:p,hasZ:void 0!==p,spatialReference:s}),attributes:{ETA:r,arriveTimeUTC:t},strings:i})})))?t:[];return new _DirectionsFeature_js__WEBPACK_IMPORTED_MODULE_9__["default"]({attributes:e.attributes,events:p,geometry:n,strings:e.strings})}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(e))),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)}get strings(){return this.features.map((({strings:e})=>e))}_decompressGeometry(e){let t=0,r=0,o=0,s=0;const a=[];let n,p,i,m,l,u,c,y,h=0,f=0,d=0;if(l=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),l||(l=[]),0===parseInt(l[h],32)){h=2;const e=parseInt(l[h],32);h++,u=parseInt(l[h],32),h++,1&e&&(f=l.indexOf("|")+1,c=parseInt(l[f],32),f++),2&e&&(d=l.indexOf("|",f)+1,y=parseInt(l[d],32),d++)}else u=parseInt(l[h],32),h++;for(;h<l.length&&"|"!==l[h];){n=parseInt(l[h],32)+t,h++,t=n,p=parseInt(l[h],32)+r,h++,r=p;const e=[n/u,p/u];f&&(m=parseInt(l[f],32)+o,f++,o=m,e.push(m/c)),d&&(i=parseInt(l[d],32)+s,d++,s=i,e.push(i/y)),a.push(e)}return{paths:[a],hasZ:f>0,hasM:d>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_13__["default"]({spatialReference:t});const r=[];for(const n of e)for(const e of n.paths)r.push(...e);const o=[];r.forEach(((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||o.push(e)}));const{hasM:s,hasZ:a}=e[0];return new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_13__["default"]({hasM:s,hasZ:a,paths:[o],spatialReference:t})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{read:{source:"summary.envelope"}}})],u.prototype,"extent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],u.prototype,"features",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("features")],u.prototype,"readFeatures",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],u.prototype,"geometryType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],u.prototype,"mergedGeometry",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],u.prototype,"routeId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],u.prototype,"routeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({value:null,readOnly:!0})],u.prototype,"strings",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{read:{source:"summary.totalDriveTime"}}})],u.prototype,"totalDriveTime",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{read:{source:"summary.totalLength"}}})],u.prototype,"totalLength",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{read:{source:"summary.totalTime"}}})],u.prototype,"totalTime",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.rest.support.DirectionsFeatureSet")],u);const c=u;


/***/ }),

/***/ "t0D6":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/ClosestFacilityTask.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _rest_closestFacility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest/closestFacility.js */ "GAVh");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Task.js */ "kglp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let c=class extends _Task_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(s){super(s),this.url=null}solve(s,r){return Object(_rest_closestFacility_js__WEBPACK_IMPORTED_MODULE_6__["solve"])(this.url,s,r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],c.prototype,"url",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.ClosestFacilityTask")],c);const p=c;


/***/ })

}]);
//# sourceMappingURL=tasks-ClosestFacilityTask-js.js.map