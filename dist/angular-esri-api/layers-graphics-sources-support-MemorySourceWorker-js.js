(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-sources-support-MemorySourceWorker-js"],{

/***/ "Glky":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/MemorySourceWorker.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return S; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _objectIdUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../objectIdUtils.js */ "p0UO");
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/FeatureStore.js */ "ZRfE");
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/projectionSupport.js */ "HsO1");
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/QueryEngine.js */ "ZBG3");
/* harmony import */ var _clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clientSideDefaults.js */ "iNG6");
/* harmony import */ var _sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sourceUtils.js */ "IcpP");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../support/fieldType.js */ "Z4F+");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const R=_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"],q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"]},D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function O(e){return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(e)?null!=e.z:!!e.hasZ}function w(e){return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(e)?null!=e.m:!!e.hasM}class S{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(t){const i=[],{features:s}=t,r=this._inferLayerProperties(s,t.fields),n=t.fields||[],a=null!=t.hasM?t.hasM:r.hasM,o=null!=t.hasZ?t.hasZ:r.hasZ,l=!t.spatialReference&&!r.spatialReference,y=l?R:t.spatialReference||r.spatialReference,I=l?q:null,b=t.geometryType||r.geometryType,F=!b;let j=t.objectIdField||r.objectIdField,_=t.timeInfo;if(!F&&(l&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!j)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&j!==r.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${j}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),j=r.objectIdField),j&&!r.objectIdField){let e=null;n.some((t=>t.name===j&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n.unshift({alias:j,name:j,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const d of n){if(null==d.name&&(d.name=d.alias),null==d.alias&&(d.alias=d.name),!d.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:invalid-field-name","field name is missing",{field:d});if(d.name===j&&(d.type="esriFieldTypeOID"),-1===_support_fieldType_js__WEBPACK_IMPORTED_MODULE_12__["kebabDict"].jsonValues.indexOf(d.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:invalid-field-type",`invalid type for field "${d.name}"`,{field:d})}const O={};for(const e of n)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["getFieldDefaultValue"])(e);void 0!==t&&(O[e.name]=t)}if(this._fieldsIndex=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__["default"](n),this._createDefaultAttributes=Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__["createDefaultAttributesFunction"])(O,j),_){if(_.startTimeField){const e=this._fieldsIndex.get(_.startTimeField);e?(_.startTimeField=e.name,e.type="esriFieldTypeDate"):_.startTimeField=null}if(_.endTimeField){const e=this._fieldsIndex.get(_.endTimeField);e?(_.endTimeField=e.name,e.type="esriFieldTypeDate"):_.endTimeField=null}if(_.trackIdField){const e=this._fieldsIndex.get(_.trackIdField);e?_.trackIdField=e.name:(_.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:_}}))}_.startTimeField||_.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:_}}),_=null)}const w={warnings:i,featureErrors:[],layerDefinition:{...D,drawingInfo:Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__["createDrawingInfo"])(b),templates:Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__["createDefaultTemplate"])(O),extent:I,geometryType:b,objectIdField:j,fields:n,hasZ:!!o,hasM:!!a,timeInfo:_},assignedObjectIds:{}};if(this._queryEngine=new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_8__["default"]({fields:n,geometryType:b,hasM:a,hasZ:o,objectIdField:j,spatialReference:y,featureStore:new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_6__["default"]({geometryType:b,hasM:a,hasZ:o}),timeInfo:_,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=_objectIdUtils_js__WEBPACK_IMPORTED_MODULE_5__["initialObjectId"],w;const S=Object(_objectIdUtils_js__WEBPACK_IMPORTED_MODULE_5__["findLastObjectIdFromFeatures"])(j,s);return this._nextObjectId=S+1,await Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["checkProjectionSupport"])(s,y),this._loadInitialFeatures(w,s)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["loadGeometryEngineForSimplify"])(t,i),Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["checkProjectionSupport"])(e.adds,t),Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["checkProjectionSupport"])(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let r,n,a=null,o=null,l=null;for(const d of e){const e=d.geometry;if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e)&&(a||(a=Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["getJsonType"])(e)),o||(o=e.spatialReference),null==r&&(r=O(e)),null==n&&(n=w(e)),a&&o&&null!=r&&null!=n))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name)}return{geometryType:a,spatialReference:o,objectIdField:l,hasM:n,hasZ:r}}_loadInitialFeatures(e,t){const{geometryType:r,hasM:n,hasZ:o,objectIdField:l,spatialReference:d,featureStore:u}=this._queryEngine,p=[];for(const a of t){if(null!=a.uid&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&r!==Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["getJsonType"])(a.geometry)){e.featureErrors.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditErrorResult"])("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["mixAttributes"])(this._fieldsIndex,t,a.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,a.attributes,!0),a.attributes=t,null!=a.uid&&(e.assignedObjectIds[a.uid]=a.attributes[l]),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.geometry)&&(a.geometry=Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["project"])(a.geometry,a.geometry.spatialReference,d)),p.push(a))}if(u.addMany(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertFromFeatures"])([],p,r,o,n,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditSuccessResult"])(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:r}=e,{geometryType:n,hasM:o,hasZ:l,objectIdField:d,spatialReference:u,featureStore:p}=this._queryEngine,f=[];for(const a of t){if(a.geometry&&n!==Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["getJsonType"])(a.geometry)){r.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditErrorResult"])("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["mixAttributes"])(this._fieldsIndex,t,a.attributes);if(o)r.push(o);else{if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[d];e.uidToObjectId[a.uid]=t}Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.geometry)&&(a.geometry=Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["project"])(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["simplify"])(a.geometry,u),a.geometry.spatialReference,u)),f.push(a),r.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditSuccessResult"])(a.attributes[d]))}}p.addMany(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertFromFeatures"])([],f,n,l,o,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:r,hasM:n,hasZ:a,objectIdField:d,spatialReference:u,featureStore:p}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,m=t&&t[d];if(null==m){e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditErrorResult"])(`Identifier field ${d} missing`));continue}if(!p.has(m)){e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditErrorResult"])(`Feature with object id ${m} missing`));continue}const h=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertToFeature"])(p.getFeature(m),r,a,n);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(c)){if(r!==Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["getJsonType"])(c)){e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditErrorResult"])("Incorrect geometry type."));continue}h.geometry=Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__["project"])(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["simplify"])(c,u),c.spatialReference,u)}if(t){const i=Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["mixAttributes"])(this._fieldsIndex,h.attributes,t);if(i){e.push(i);continue}}p.add(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertFromFeature"])(h,r,a,n,d)),e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__["createFeatureEditSuccessResult"])(m))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}


/***/ }),

/***/ "iNG6":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js ***!
  \*****************************************************************************************/
/*! exports provided: createCapabilities, createDefaultAttributesFunction, createDefaultTemplate, createDrawingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCapabilities", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultAttributesFunction", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultTemplate", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDrawingInfo", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/QueryEngineCapabilities.js */ "qUyK");
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../symbols/support/defaultsJSON.js */ "gkbi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__["defaultPointSymbolJSON"]:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__["defaultPolylineSymbolJSON"]:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__["defaultPolygonSymbolJSON"]}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let i=1;function a(s,e){if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${u.test(e)?`.${e}`:`["${e}"]`} = ${JSON.stringify(s[e])};`}const r=new Function(`\n      return class AttributesClass$${i++} {\n        constructor() {\n          ${t};\n        }\n      }\n    `)();return()=>new r}catch(r){return()=>({[e]:null,...s})}}function l(t={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(t)}}]}function c(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__["queryCapabilities"],queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}


/***/ })

}]);
//# sourceMappingURL=layers-graphics-sources-support-MemorySourceWorker-js.js.map