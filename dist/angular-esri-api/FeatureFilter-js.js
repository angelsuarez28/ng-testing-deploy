(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FeatureFilter-js"],{

/***/ "Hu/a":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/utils.js ***!
  \*****************************************************************/
/*! exports provided: QUERY_ENGINE_EMPTY_RESULT, cleanFromGeometryEngine, getCentroid, getGeometry, normalizeFilter, normalizeQuery, normalizeQueryLike, transformCentroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ENGINE_EMPTY_RESULT", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFromGeometryEngine", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentroid", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeometry", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeFilter", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQuery", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQueryLike", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformCentroid", function() { return O; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "gEht");
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/extentUtils.js */ "+NQI");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../centroid.js */ "2X7Z");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projectionSupport.js */ "HsO1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const j=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),U=Object.freeze({}),M=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],F=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],G=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],N={esriGeometryPoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPoint"],esriGeometryPolyline:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPolyline"],esriGeometryPolygon:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPolygon"],esriGeometryMultipoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToMultipoint"]};function O(e,r,i,o=e.hasZ,n=e.hasM){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(r))return null;const s=e.hasZ&&o,l=e.hasM&&n;if(i){const t=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["quantizeOptimizedGeometry"])(G,r,e.hasZ,e.hasM,"esriGeometryPoint",i,o,n);return Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPoint"])(t,s,l)}return Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPoint"])(r,s,l)}function _(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=Object(_centroid_js__WEBPACK_IMPORTED_MODULE_7__["getCentroidOptimizedGeometry"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],t.geometry,e.hasZ,e.hasM)),O(e,t.centroid,r)):null}function J(e,i,o,n,s,l,a=i,m=o){const c=i&&a,f=o&&m,g=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)?"coords"in n?n:n.geometry:null;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(g))return null;if(s){let t=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["generalizeOptimizedGeometry"])(F,g,i,o,e,s,a,m);return l&&(t=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["quantizeOptimizedGeometry"])(G,t,c,f,e,l)),N[e](t,c,f)}if(l){const t=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["quantizeOptimizedGeometry"])(G,g,i,o,e,l,a,m);return N[e](t,c,f)}return Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["removeZMValues"])(M,g,i,o,a,m),N[e](M,c,f)}async function P(e,t,r){const{outFields:i,orderByFields:o,groupByFieldsForStatistics:n,outStatistics:s}=e;if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(o)for(let l=0;l<o.length;l++)o[l]=o[l].trim();if(n)for(let l=0;l<n.length;l++)n[l]=n[l].trim();if(s)for(let l=0;l<s.length;l++)s[l].onStatisticField&&(s[l].onStatisticField=s[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),Z(e,t,r)}async function v(e,t,r){return Z(e,t,r)}async function Z(e,r,i){if(!e)return null;let{where:l}=e;if(e.where=l=l&&l.trim(),(!l||/^1 *= *1$/.test(l)||r&&r===l)&&(e.where=null),!e.geometry)return e;let a=await b(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;a=Object(_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__["getGeometryExtent"])(a),a.spatialReference=t}e.geometry=a,await Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["checkProjectionSupport"])(a.spatialReference,i);const m=(await Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__["normalizeCentralMeridian"])(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__["fromJSON"])(a)))[0];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(m))throw U;const c=m.toJSON(),u=await Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["project"])(c,c.spatialReference,i);if(!u)throw U;return u.spatialReference=i,e.geometry=u,e}async function b(e){const{geometry:t,distance:r,units:o}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,s=o?j.fromJSON(o):Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__["getUnitString"])(n),c=n&&(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["isGeographic"])(n)||Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["isWebMercator"])(n))?t:await Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["checkProjectionSupport"])(n,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["WGS84"]).then((()=>Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["project"])(t,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["WGS84"])));return(await x())(c.spatialReference,c,r,s)}async function x(){return(await Promise.all(/*! import() | geometry-geometryEngineJSON-js */[__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null, /*! ../../../geometry/geometryEngineJSON.js */ "AKzY"))).geodesicBuffer}function z(e){return e&&B in e?JSON.parse(JSON.stringify(e,E)):e}const B="_geVersion",E=(e,t)=>e!==B?t:void 0;


/***/ }),

/***/ "IFAU":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js ***!
  \**********************************************************************************/
/*! exports provided: createWhereClause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWhereClause", function() { return s; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await __webpack_require__.e(/*! import() | core-sql-WhereClause-js */ "default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~9e66c59e").then(__webpack_require__.bind(null, /*! ../../../../../core/sql/WhereClause.js */ "ZqIb"));try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r)}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}


/***/ }),

/***/ "Klsb":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js ***!
  \*******************************************************************************/
/*! exports provided: canQueryWithRBush, checkSpatialQuerySupport, getSpatialQueryOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canQueryWithRBush", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSpatialQuerySupport", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpatialQueryOperator", function() { return v; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/contains.js */ "IXLn");
/* harmony import */ var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/intersects.js */ "PNY3");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contains.js */ "Uz7T");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectionSupport.js */ "HsO1");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ "Hu/a");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const c="feature-store:unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return!0===S.spatialRelationship[e]}function g(e){return!0===S.queryGeometry[Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(e)]}function j(e){return!0===S.layerGeometry[e]}function h(){return Promise.all(/*! import() | geometry-geometryEngineJSON-js */[__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null, /*! ../../../geometry/geometryEngineJSON.js */ "AKzY"))}function v(e,n,l,y,c){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolygon"])(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertFromPolygon"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__["default"],n,!1,!1);return Promise.resolve((r=>Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__["polygonContainsPoint"])(e,!1,!1,r)))}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolygon"])(n)&&"esriGeometryMultipoint"===l){const r=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertFromPolygon"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__["default"],n,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__["polygonContainsMultipoint"])(r,!1,!1,e,y,c)))}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__["extentContainsPoint"])(n,Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,e))));if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(n)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__["extentContainsMultipoint"])(n,Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,e))));if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(n)&&"esriSpatialRelIntersects"===e){const e=Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_2__["getExtentIntersector"])(l);return Promise.resolve((r=>e(n,Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,r))))}return h().then((r=>{const t=r[R[e]].bind(null,n.spatialReference,n);return e=>t(Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,e))}))}async function P(r,t,i){const{spatialRel:s,geometry:o}=r;if(o){if(!G(s))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](c,"Unsupported query spatial relationship",{query:r});if(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(o.spatialReference)&&Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(i)){if(!g(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](c,"Unsupported query geometry type",{query:r});if(!j(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](c,"Unsupported layer geometry type",{query:r});if(r.outSR)return Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["checkProjectionSupport"])(r.geometry&&r.geometry.spatialReference,r.outSR)}}}function I(e){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(e))return!0;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolygon"])(e)){for(const r of e.rings){if(5!==r.length)return!1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1}return!0}return!1}


/***/ }),

/***/ "NBza":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureFilter.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _layers_graphics_data_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../layers/graphics/data/spatialQuerySupport.js */ "Klsb");
/* harmony import */ var _layers_graphics_data_timeSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../layers/graphics/data/timeSupport.js */ "q7ja");
/* harmony import */ var _layers_graphics_data_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../layers/graphics/data/utils.js */ "Hu/a");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../rest/support/Query.js */ "ad1r");
/* harmony import */ var _FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FeatureStore2D.js */ "DJok");
/* harmony import */ var _whereUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./whereUtils.js */ "IFAU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const m=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,p=2;class y{constructor(t){this._geometryBounds=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0)}))}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,_)}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&_),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?_|p:0)})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await Object(_layers_graphics_data_utils_js__WEBPACK_IMPORTED_MODULE_7__["normalizeQueryLike"])(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await Object(_whereUtils_js__WEBPACK_IMPORTED_MODULE_10__["createWhereClause"])(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await Object(_layers_graphics_data_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_5__["getSpatialQueryOperator"])(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXY"])(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(_layers_graphics_data_timeSupport_js__WEBPACK_IMPORTED_MODULE_6__["getTimeOperator"])(this._serviceInfo.timeInfo,e.timeExtent,_FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_9__["featureAdapter"]);else{const i=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(i)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(t){return!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&_||(this._idToVisibility.set(i,_),t.push(i))})),t}}


/***/ }),

/***/ "PNY3":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/intersects.js ***!
  \******************************************************************/
/*! exports provided: extentIntersectsExtent, extentIntersectsMultipoint, extentIntersectsPoint, extentIntersectsPolygon, extentIntersectsPolyline, getFeatureExtentIntersector, isSelfIntersecting, segmentIntersects, getExtentIntersector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtentIntersector", function() { return n; });
/* harmony import */ var _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersectsBase.js */ "9UdQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsExtent", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsExtent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsMultipoint", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsMultipoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsPoint", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsPolygon", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsPolyline", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeatureExtentIntersector", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["getFeatureExtentIntersector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelfIntersecting", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["isSelfIntersecting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "segmentIntersects", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["segmentIntersects"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(n){return"mesh"===n?_intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsExtent"]:Object(_intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["getFeatureExtentIntersector"])(n)}


/***/ }),

/***/ "Uz7T":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/contains.js ***!
  \***************************************************************/
/*! exports provided: polygonContainsCoords, polygonContainsMultipoint, polygonContainsPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsCoords", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsMultipoint", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsPoint", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return!1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return!1;return!0}function o(t,r,o,c,u){if(!t)return!1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f)}return f}


/***/ }),

/***/ "q7ja":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/timeSupport.js ***!
  \***********************************************************************/
/*! exports provided: getTimeExtent, getTimeOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeExtent", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeOperator", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:l}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&l)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,l);null==n||isNaN(n)||(r=Math.min(r,n)),null==o||isNaN(o)||(i=Math.max(i,o))}));else{const t=u||l;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u))}))}return{start:r,end:i}}function n(t,n,r){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;return null===s&&null===a?null:void 0===s&&void 0===a?l():i&&o?e(r,i,o,s,a):u(r,i||o,s,a)}function e(t,n,e,u,l){return null!=u&&null!=l?r=>{const i=t.getAttribute(r,n),o=t.getAttribute(r,e);return(null==i||i<=l)&&(null==o||o>=u)}:null!=u?n=>{const l=t.getAttribute(n,e);return null==l||l>=u}:null!=l?e=>{const u=t.getAttribute(e,n);return null==u||u<=l}:void 0}function u(t,n,e,u){return null!=e&&null!=u&&e===u?u=>t.getAttribute(u,n)===e:null!=e&&null!=u?l=>{const r=t.getAttribute(l,n);return r>=e&&r<=u}:null!=e?u=>t.getAttribute(u,n)>=e:null!=u?e=>t.getAttribute(e,n)<=u:void 0}function l(){return()=>!1}


/***/ })

}]);
//# sourceMappingURL=FeatureFilter-js.js.map