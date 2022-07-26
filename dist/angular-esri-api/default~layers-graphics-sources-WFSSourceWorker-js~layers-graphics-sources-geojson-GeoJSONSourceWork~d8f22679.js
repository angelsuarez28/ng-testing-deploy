(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-graphics-sources-WFSSourceWorker-js~layers-graphics-sources-geojson-GeoJSONSourceWork~d8f22679"],{

/***/ "BMSW":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js ***!
  \***********************************************************************/
/*! exports provided: BoundsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundsStore", function() { return e; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/rbush/PooledRBush.js */ "zna6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const d=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function t(i,s,d){n.minX=s[0],n.minY=s[1],n.maxX=s[2],n.maxY=s[3],i.search(n,d)}class e{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__["PooledRBush"](9,Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(i,s){this._loadIndex(),t(this._index,i,(i=>s(this._idByBounds.get(i))))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>d&&this._loadIndex()))}}


/***/ }),

/***/ "Rh/S":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js ***!
  \**********************************************************************************************/
/*! exports provided: default, optimizedFeatureQueryEngineAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizedFeatureQueryEngineAdapter", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../centroid.js */ "2X7Z");
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OptimizedFeature.js */ "k5I3");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OptimizedGeometry.js */ "gVKr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__["OptimizedFeature"](e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(r,i)=>(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r.centroid)&&(r.centroid=Object(_centroid_js__WEBPACK_IMPORTED_MODULE_1__["getCentroidOptimizedGeometry"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__["default"],r.geometry,i.hasZ,i.hasM)),r.centroid)};


/***/ }),

/***/ "ZRfE":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return m; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoundsStore.js */ "BMSW");
/* harmony import */ var _optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./optimizedFeatureQueryEngineAdapter.js */ "Rh/S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class m{constructor(e){this.geometryInfo=e,this._boundsStore=new _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__["BoundsStore"],this._featuresById=new Map,this._markedIds=new Set,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.featureAdapter=_optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__["optimizedFeatureQueryEngineAdapter"]}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["create"])(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["NEGATIVE_INFINITY"]);return this._featuresById.forEach((t=>{const r=this._boundsStore.get(t.objectId);r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,r){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["fromRect"])(r,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const i=t.objectId;if(null==i)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.graphics.data.FeatureStore").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("featurestore:invalid-feature","feature id is missing",{feature:t}));const d=this._featuresById.get(i);let h;if(this._markedIds.add(i),d?(t.displayId=d.displayId,h=this._boundsStore.get(i),this._boundsStore.delete(i)):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.onFeatureAdd)&&this.onFeatureAdd(t),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,t);h=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["getBoundsOptimizedGeometry"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(h)?h:Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["create"])(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(h)&&this._boundsStore.set(i,h),this._featuresById.set(i,t)}_remove(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}


/***/ }),

/***/ "zna6":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js ***!
  \******************************************************************/
/*! exports provided: BBox, PooledRBush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BBox", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PooledRBush", function() { return h; });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../arrayUtils.js */ "tQ+6");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../maybe.js */ "srIe");
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/quickselect.js */ "RjdO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class h{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),g.prune(),M.prune(),X.prune(),Y.prune()}all(t){this._all(this.data,t)}search(t,i){let n=this.data;const e=this._toBBox;if(p(t,n))for(g.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;p(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):g.push(h))}n=g.pop()}}collides(t){let i=this.data;const n=this._toBBox;if(!p(t,i))return!1;for(g.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(p(t,h)){if(i.leaf||x(t,h))return!0;g.push(s)}}i=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){const t=this.data;this.data=i,i=t}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new b([]),this}remove(i){if(!i)return this;let e,s=this.data,h=null,a=0,r=!1;const o=this._toBBox(i);for(X.clear(),Y.clear();s||X.length>0;){var l;if(!s)s=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(X.pop()),h=X.data[X.length-1],a=null!=(l=Y.pop())?l:0,r=!0;if(s.leaf&&(e=Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(s.children,i,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),X.push(s),this._condense(X),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(X.push(s),Y.push(a),a=0,h=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(M.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else M.pushArray(n.children);n=null!=(e=M.pop())?e:null}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new b(t.slice(i,n+1));return a(e,this._toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(e-1)));const r=new j([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));_(t,i,n,l,this.compareMinX);for(let a=i;a<=n;a+=l){const i=Math.min(a+l-1,n);_(t,a,i,o,this.compareMinY);for(let n=a;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1))}}return a(r,this._toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=m(a),o=d(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}_insert(t,i,n){const e=this._toBBox,s=n?t:e(t);X.clear();const h=this._chooseSubtree(s,this.data,i,X);for(h.children.push(t),o(h,s);i>=0&&X.data[i].children.length>this._maxEntries;)this._split(X,i),i--;this._adjustParentBBoxes(s,X,i)}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new b(r):new j(r);o.height=n.height,a(n,this._toBBox),a(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this.data=new j([t,i]),this.data.height=t.height+1,a(this.data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this._toBBox),o=r(t,a,n,this._toBBox),l=f(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a)}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this._toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=u(h)+u(a);for(let r=i;r<n-i;r++){const i=t.children[r];o(h,t.leaf?s(i):i),l+=u(h)}for(let r=n-i-1;r>=i;r--){const i=t.children[r];o(a,t.leaf?s(i):i),l+=u(a)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t)}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const s=i.data[n-1],h=s.children;h.splice(Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(h,e,h.length,s.indexHint),1)}else this.clear();else a(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){r(t,0,t.children.length,i,t)}function r(t,i,n,e,s){s||(s=new b([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function f(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function _(t,i,e,h,a){const r=[i,e];for(;r.length;){const i=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(r.pop()),e=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(r.pop());if(i-e<=h)continue;const o=e+Math.ceil((i-e)/h/2)*h;Object(_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__["q"])(t,o,e,i,a),r.push(e,o,o,i)}}const g=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],M=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],X=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["PositionHint"]}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class j extends w{constructor(t){super(),this.children=t,this.leaf=!1}}


/***/ })

}]);
//# sourceMappingURL=default~layers-graphics-sources-WFSSourceWorker-js~layers-graphics-sources-geojson-GeoJSONSourceWork~d8f22679.js.map