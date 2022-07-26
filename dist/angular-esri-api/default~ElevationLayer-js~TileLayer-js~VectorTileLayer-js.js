(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js"],{

/***/ "HSpW":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/Tilemap.js ***!
  \*************************************************************/
/*! exports provided: Tilemap, default, tilemapDefinitionId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tilemap", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilemapDefinitionId", function() { return o; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class l{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"}_updateFromData(t){const i=this.location.width,e=this.location.height;let a=!0,l=!0;const o=Math.ceil(i*e/8),n=new Uint8Array(o);let r=0;for(let s=0;s<t.length;s++){const i=s%8;t[s]?(l=!1,n[r]|=1<<i):a=!1,7===i&&++r}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(a,o){const r=a.service.request||_request_js__WEBPACK_IMPORTED_MODULE_0__["default"],{row:s,col:h,width:c,height:m}=a,d={query:{f:"json"}};return o=o?{...d,...o}:d,r(n(a),o).then((t=>t.data)).catch((t=>{if(t&&t.details&&422===t.details.httpStatus)return{location:{top:s,left:h,width:c,height:m},valid:!0,data:Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["constant"])(c*m,0)};throw t})).then((t=>{if(t.location&&(t.location.top!==s||t.location.left!==h||t.location.width!==c||t.location.height!==m))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:s,left:h,width:c,height:m}});return l.fromJSON(t)}))}static fromJSON(t){l._validateJSON(t);const i=new l;return i.location=Object.freeze(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(t.location)),i._updateFromData(t.data),Object.freeze(i)}static _validateJSON(t){if(!t||!t.location)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function o(t){return`${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if("vector-tile"===t.service.type)i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;else{const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}const e=t.service.query;return e&&(i=`${i}?${e}`),i}


/***/ }),

/***/ "llFo":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TilemapCache.js ***!
  \******************************************************************/
/*! exports provided: TilemapCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilemapCache", function() { return z; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/byteSizeEstimations.js */ "8Lmx");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/LRUCache.js */ "wk6I");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "R3wZ");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/scheduling.js */ "WBXD");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Tilemap.js */ "HSpW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var T;const j=_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger("esri.layers.support.TilemapCache");let z=T=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_5__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"])){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_3__["ByteSizeUnit"].MEGABYTES,this.request=_request_js__WEBPACK_IMPORTED_MODULE_1__["default"],this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),Object(_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__["watch"])((()=>{var e,t;return null==(e=this.layer)||null==(t=e.tileInfo)?void 0:t.lods}),(e=>this._initializeAvailableLevels(e)),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__["syncAndInitial"])]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(j.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,s);if(a)return Promise.resolve(a);const o=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["onAbort"])(o,(()=>t(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["createAbortError"])())));const i=Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(s);let l=this._pendingTilemapRequests[i];if(!l){l=_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"].fromDefinition(s,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"]){const s=r.getAvailability(t,i);return"unavailable"===s?Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):s}if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(r))throw r;return"unknown"})):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const s=this.layer.tileInfo;s.updateTileInfo(r);const a=this.fetchAvailability(e,t,i,l).catch((e=>{if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,s){if(!this._prefetchingEnabled)return;const a=`prefetch-${e}`;if(this.handles.has(a))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let n=!1;const c={remove(){n||(n=!0,o.abort())}};if(this.handles.add(c,a),await Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__["waitTicks"])(10,o.signal).catch((()=>{})),n||(n=!0,this.handles.remove(a)),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAborted"])(o))return;const h={id:e,level:t,row:i,col:r},m={...l,signal:o.signal},u=this.layer.tileInfo;for(let p=0;T._prefetches.length<T._maxPrefetch&&u.upsampleTile(h);++p){const e=this.fetchAvailability(h.level,h.row,h.col,m);T._prefetches.push(e);const t=()=>{T._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:r}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["objectToQuery"])({...t.query,...r,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};z._maxPrefetch=4,z._prefetches=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]({initialSize:T._maxPrefetch}),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({constructOnly:!0,type:Number})],z.prototype,"levels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_16__["cast"])("levels")],z.prototype,"castLevels",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0,type:Number})],z.prototype,"size",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({constructOnly:!0,type:Number})],z.prototype,"cacheByteSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({constructOnly:!0})],z.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({constructOnly:!0})],z.prototype,"request",void 0),z=T=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__["subclass"])("esri.layers.support.TilemapCache")],z);


/***/ }),

/***/ "q2iW":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/serviceTileInfoProperty.js ***!
  \*****************************************************************************/
/*! exports provided: readServiceTileInfo, serviceTileInfoProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readServiceTileInfo", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceTileInfoProperty", function() { return r; });
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileInfo.js */ "3/ME");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const r={type:_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"],json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}};function n(r,n,l,o){if(!r)return null;const{minScale:i,maxScale:t,minLOD:m,maxLOD:s}=n;if(null!=m&&null!=s)return o&&o.ignoreMinMaxLOD?_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(r):_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON({...r,lods:r.lods.filter((({level:e})=>null!=e&&e>=m&&e<=s))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON({...r,lods:r.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(r)}


/***/ }),

/***/ "tIWS":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js ***!
  \************************************************************************/
/*! exports provided: ArcGISCachedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcGISCachedService", function() { return s; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/serviceTileInfoProperty.js */ "q2iW");
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/TilemapCache.js */ "llFo");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_9__["TilemapCache"]({layer:this}):null}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("service","minScale")],l.prototype,"readMinScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("service","maxScale")],l.prototype,"readMaxScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"]})],l.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],l.prototype,"supportsBlankTile",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])(_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_8__["serviceTileInfoProperty"])],l.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"tilemapCache",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"version",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.mixins.ArcGISCachedService")],l),l};


/***/ })

}]);
//# sourceMappingURL=default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js.js.map