(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-layersCreator-js"],{

/***/ "5Q/x":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/layersCreator.js ***!
  \*******************************************************************/
/*! exports provided: populateOperationalLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateOperationalLayers", function() { return n; });
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazyLayerLoader.js */ "oLSx");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/* harmony import */ var _portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/support/featureCollectionUtils.js */ "IEjF");
/* harmony import */ var _portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/support/portalLayers.js */ "XJLX");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "YOx9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function n(e,a,y){if(!a)return;const t=[];for(const r of a){const e=d(r,y);"GroupLayer"===r.layerType?t.push(G(e,r,y)):t.push(e)}const i=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(t);for(const r of i)!r.value||y.filter&&!y.filter(r.value)||e.add(r.value)}const l={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer"},c={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function d(e,r){return I(await T(e,r),e,r)}async function I(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&m(r)&&await M(y,r,a.context),await Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__["loadStyleRenderer"])(y,a.context),y}async function T(e,r){const o=r.context,n=g(o);let l=e.layerType||e.type;!l&&r&&r.defaultLayerType&&(l=r.defaultLayerType);const c=n[l];let s=c?_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"][c]:_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].UnknownLayer;if(f(e)){const r=null==o?void 0:o.portal;if(e.itemId){const t=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"]({id:e.itemId,portal:r});await t.load();const i=(await Object(_portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_6__["selectLayerClassPath"])(t)).className||"UnknownLayer";s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"][i]}}else"ArcGISFeatureLayer"===l?Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__["isMapNotesLayer"])(e)?s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].MapNotesLayer:Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__["isRouteLayer"])(e)?s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].RouteLayer:m(e)&&(s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo.version&&(s=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].UnsupportedLayer);return s()}function m(e){var r,a,y;if("ArcGISFeatureLayer"!==e.layerType||f(e))return!1;return(null!=(r=null==(a=e.featureCollection)||null==(y=a.layers)?void 0:y.length)?r:0)>1}function f(e){return"Feature Collection"===e.type}function g(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=c;break;default:r=l}else switch(e.layerContainerType){case"basemap":r=S;break;case"tables":r=u;break;default:r=p}return r}async function G(r,a,y){const t=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__["default"],i=n(t,Array.isArray(a.layers)?a.layers:[],y),L=await r;if(await i,"group"===L.type)return L.layers.addMany(t),L}async function M(e,r,y){const t=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__["layerLookupMap"].FeatureLayer,i=await t(),L=r.featureCollection,o=L.showLegend,n=L.layers.map(((a,t)=>{var L,n;const l=new i;l.read(a,y);const c={...y,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${t}`,visibility:null==(L=null==(n=r.visibleLayers)?void 0:n.includes(t))||L},c),null!=o&&l.read({showLegend:o},c),l}));e.layers.addMany(n)}


/***/ }),

/***/ "IEjF":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js ***!
  \****************************************************************************/
/*! exports provided: isMapNotesLayer, isRouteLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapNotesLayer", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteLayer", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){return t(e,"notes")}function r(e){return t(e,"route")}function t(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}


/***/ })

}]);
//# sourceMappingURL=layers-support-layersCreator-js.js.map