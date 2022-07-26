(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~RouteLayer-js~tasks-RouteTask-js"],{

/***/ "+gDS":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RouteResult.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DirectionsFeatureSet.js */ "Wylo");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FeatureSet.js */ "Ltyc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(o){super(o),this.directionLines=null,this.directionPoints=null,this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],n.prototype,"directionLines",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],n.prototype,"directionPoints",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],n.prototype,"directions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{write:!0}})],n.prototype,"route",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],n.prototype,"routeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]],json:{write:!0}})],n.prototype,"stops",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.RouteResult")],n);const c=n;


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

/***/ "VAet":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RouteSolveResult.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FeatureSet.js */ "Ltyc");
/* harmony import */ var _NAMessage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NAMessage.js */ "laIn");
/* harmony import */ var _RouteResult_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RouteResult.js */ "+gDS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function u(r){return r&&_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(r).features.map((r=>r))}let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(r){super(r),this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(r,o){return u(o.barriers)}readPolylineBarriers(r){return u(r)}readPolygonBarriers(r){return u(r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_NAMessage_js__WEBPACK_IMPORTED_MODULE_10__["default"]]})],n.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]]})],n.prototype,"pointBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("pointBarriers",["barriers"])],n.prototype,"readPointBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]]})],n.prototype,"polylineBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("polylineBarriers")],n.prototype,"readPolylineBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]]})],n.prototype,"polygonBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("polygonBarriers")],n.prototype,"readPolygonBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_RouteResult_js__WEBPACK_IMPORTED_MODULE_11__["default"]]})],n.prototype,"routeResults",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.rest.support.RouteSolveResult")],n);const c=n;


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

/***/ "mIeD":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/route.js ***!
  \*************************************************/
/*! exports provided: solve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return p; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queryUtils.js */ "o6Le");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _networkService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkService.js */ "wnnX");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "u3Ia");
/* harmony import */ var _support_RouteSolveResult_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/RouteSolveResult.js */ "VAet");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const f=Object(_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__["createQueryParamsHelper"])({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});function c(e){return"esri.rest.support.FeatureSet"===(null==e?void 0:e.declaredClass)}async function p(t,r,u){const p=[],d=[],y={},g={},R=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["parseUrl"])(t),{path:v}=R;c(r.stops)&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(r.stops.features,d,"stops.features",y),c(r.pointBarriers)&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(r.pointBarriers.features,d,"pointBarriers.features",y),c(r.polylineBarriers)&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(r.polylineBarriers.features,d,"polylineBarriers.features",y),c(r.polygonBarriers)&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(r.polygonBarriers.features,d,"polygonBarriers.features",y);const b=await Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__["normalizeCentralMeridian"])(d);for(const e in y){const t=y[e];p.push(e),g[e]=b.slice(t[0],t[1])}if(Object(_networkService_js__WEBPACK_IMPORTED_MODULE_4__["isInputGeometryZAware"])(g,p)){let e=null;try{e=await Object(_networkService_js__WEBPACK_IMPORTED_MODULE_4__["fetchServiceDescription"])(v,r.apiKey,u)}catch{}e&&!e.hasZ&&Object(_networkService_js__WEBPACK_IMPORTED_MODULE_4__["dropZValuesOffInputGeometry"])(g,p)}for(const e in g)g[e].forEach(((t,s)=>{r.get(e)[s].geometry=t}));const h={...u,query:{...R.query,...f.toQueryParams(r),f:"json"}},A=v.endsWith("/solve")?v:`${v}/solve`,{data:B}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(A,h);return m(B)}function m(e){var r,s,i,o,a;const n=new Map,{directionLines:l,directionPoints:f,directions:c,routes:p,stops:m,barriers:d,polygonBarriers:y,polylineBarriers:g,messages:R}=e,v=null!=(r=null!=(s=null!=(i=null!=(o=null==p?void 0:p.spatialReference)?o:null==m?void 0:m.spatialReference)?i:null==d?void 0:d.spatialReference)?s:null==y?void 0:y.spatialReference)?r:null==g?void 0:g.spatialReference;null==p||p.features.forEach((e=>{const r=e.attributes.Name,s=e.attributes.ObjectID;n.has(r)?(n.get(r).route=e,n.get(r).routeId=s):n.set(r,{route:e,routeId:s,routeName:r}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.geometry)&&(e.geometry.spatialReference=v)})),null==c||c.forEach((e=>{const t=e.routeName;n.has(t)?n.get(t).directions=e:n.set(t,{routeName:t,directions:e})})),null==m||m.features.forEach((e=>{var r;const s=null!=(r=e.attributes.RouteName)?r:null;n.has(s)?n.get(s).stops?n.get(s).stops.push(e):n.get(s).stops=[e]:n.set(s,{stops:[e],routeName:s}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.geometry)&&(e.geometry.spatialReference=v)}));const b=null==(a=null==m?void 0:m.features.every((e=>null==e.attributes.RouteName)))||a;if((null==m?void 0:m.features.length)>0&&b){const e=Array.from(n.keys())[0];n.get(e).stops=n.get(null).stops,n.delete(null)}null==l||l.features.forEach((e=>{var t;const r=e.attributes.RouteID,s=null==(t=Array.from(n.values()).find((e=>e.routeId===r)))?void 0:t.routeName;if(s)if(n.has(s))if(n.get(s).directionLines)n.get(s).directionLines.features.push(e);else{const{fieldAliases:t,geometryType:r,spatialReference:i}=l;n.get(s).directionLines={features:[e],fieldAliases:t,geometryType:r,spatialReference:i}}else{const{fieldAliases:t,geometryType:r,spatialReference:i}=l;n.set(s,{routeName:s,directionLines:{features:[e],fieldAliases:t,geometryType:r,spatialReference:i}})}})),null==f||f.features.forEach((e=>{var t;const r=e.attributes.RouteID,s=null==(t=Array.from(n.values()).find((e=>e.routeId===r)))?void 0:t.routeName;if(s)if(n.has(s))if(n.get(s).directionPoints)n.get(s).directionPoints.features.push(e);else{const{fieldAliases:t,geometryType:r,spatialReference:i}=f;n.get(s).directionPoints={features:[e],fieldAliases:t,geometryType:r,spatialReference:i}}else{const{fieldAliases:t,geometryType:r,spatialReference:i}=f;n.set(s,{routeName:s,directionPoints:{features:[e],fieldAliases:t,geometryType:r,spatialReference:i}})}}));const h=Array.from(n.values());return _support_RouteSolveResult_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON({routeResults:h,barriers:d,polygonBarriers:y,polylineBarriers:g,messages:R})}


/***/ })

}]);
//# sourceMappingURL=default~RouteLayer-js~tasks-RouteTask-js.js.map