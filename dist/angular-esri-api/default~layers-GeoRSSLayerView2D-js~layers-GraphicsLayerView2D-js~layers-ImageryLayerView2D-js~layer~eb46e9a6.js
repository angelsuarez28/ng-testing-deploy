(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~eb46e9a6"],{

/***/ "1kEK":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js ***!
  \*********************************************************************/
/*! exports provided: jsonAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonAdapter", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:s,exportPoint:n,exportPolygon:o,exportPolyline:a,exportMultipoint:c,exportExtent:m};function s(t,s){return null==s?null:t.convertJSONToGeometry(s)}class i{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}function n(t,s,n){const e=new i(t.getPointX(s),t.getPointY(s),n),o=t.hasZ(s),h=t.hasM(s);return o&&(e.z=t.getPointZ(s)),h&&(e.m=t.getPointM(s)),e}class e{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function o(t,s,i){return new e(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class h{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function a(t,s,i){return new h(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class r{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function c(t,s,i){return new r(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))}class x{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function m(t,s,i){const n=t.hasZ(s),e=t.hasM(s),o=new x(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);o.zmin=i.vmin,o.zmax=i.vmax}if(e){const i=t.getMExtent(s);o.mmin=i.vmin,o.mmax=i.vmax}return o}


/***/ }),

/***/ "2X7Z":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/centroid.js ***!
  \***************************************************************/
/*! exports provided: getCentroidOptimizedGeometry, lineCentroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentroidOptimizedGeometry", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineCentroid", function() { return I; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(t,n){return t?n?4:3:n?3:2}function e(e,o,u,l,N){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o)||!o.lengths.length)return null;const s="upperLeft"===(null==N?void 0:N.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const c=e.coords,f=[],i=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:T,coords:h}=o,g=n(u,l);let E=0;for(const t of T){const n=r(i,h,E,t,u,l,s);n&&f.push(n),E+=t*g}if(f.sort(((t,n)=>{let e=s*t[2]-s*n[2];return 0===e&&u&&(e=t[4]-n[4]),e})),f.length){let t=6*f[0][2];c[0]=f[0][0]/t,c[1]=f[0][1]/t,u&&(t=6*f[0][4],c[2]=0!==t?f[0][3]/t:0),(c[0]<i[0]||c[0]>i[1]||c[1]<i[2]||c[1]>i[3]||u&&(c[2]<i[4]||c[2]>i[5]))&&(c.length=0)}if(!c.length){const t=o.lengths[0]?I(h,0,T[0],u,l):null;if(!t)return null;c[0]=t[0],c[1]=t[1],u&&t.length>2&&(c[2]=t[2])}return e}function r(t,e,r,I,o,u,l=1){const N=n(o,u);let s=r,c=r+N,f=0,i=0,T=0,h=0,g=0;for(let n=0,m=I-1;n<m;n++,s+=N,c+=N){const n=e[s],r=e[s+1],I=e[s+2],u=e[c],l=e[c+1],N=e[c+2];let E=n*l-u*r;h+=E,f+=(n+u)*E,i+=(r+l)*E,o&&(E=n*N-u*I,T+=(I+N)*E,g+=E),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),o&&(I<t[4]&&(t[4]=I),I>t[5]&&(t[5]=I))}if(h*l>0&&(h*=-1),g*l>0&&(g*=-1),!h)return null;const E=[f,i,.5*h];return o&&(E[3]=T,E[4]=.5*g),E}function I(t,e,r,I,s){const c=n(I,s);let f=e,i=e+c,T=0,h=0,g=0,E=0;for(let n=0,m=r-1;n<m;n++,f+=c,i+=c){const n=t[f],e=t[f+1],r=t[f+2],s=t[i],c=t[i+1],m=t[i+2],b=I?u(n,e,r,s,c,m):o(n,e,s,c);if(b)if(T+=b,I){const t=N(n,e,r,s,c,m);h+=b*t[0],g+=b*t[1],E+=b*t[2]}else{const t=l(n,e,s,c);h+=b*t[0],g+=b*t[1]}}return T>0?I?[h/T,g/T,E/T]:[h/T,g/T]:r>0?I?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function o(t,n,e,r){const I=e-t,o=r-n;return Math.sqrt(I*I+o*o)}function u(t,n,e,r,I,o){const u=r-t,l=I-n,N=o-e;return Math.sqrt(u*u+l*l+N*N)}function l(t,n,e,r){return[t+.5*(e-t),n+.5*(r-n)]}function N(t,n,e,r,I,o){return[t+.5*(r-t),n+.5*(I-n),e+.5*(o-e)]}


/***/ }),

/***/ "AIxD":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeBounds", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeExtent", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePaths", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoint", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoints", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolygon", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolyline", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeRings", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeX", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeY", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePaths", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoint", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoints", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeRings", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeX", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeY", function() { return T; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const a=(n,t,e)=>[t,e],m=(n,t,e)=>[t,e,n[2]],c=(n,t,e)=>[t,e,n[2],n[3]];function s(t){if(!t)return null;return{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}}function f(t,e){if(t===e||null==t&&null==e)return!0;if(null==t||null==e)return!1;let r,u,i,o,a,m;return l(t)?(r=t.translate[0],u=t.translate[1],i=t.scale[0]):(r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?t.extent.xmin:0,u=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?t.extent.ymax:0,i=t.tolerance),l(e)?(o=e.translate[0],a=e.translate[1],m=e.scale[0]):(o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.extent)?e.extent.xmin:0,a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.extent)?e.extent.ymax:0,m=e.tolerance),r===o&&u===a&&i===m}function x({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function h({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function I(n,t,e){const r=[];let u,i,o,l;for(let a=0;a<e.length;a++){const m=e[a];a>0?(o=x(n,m[0]),l=h(n,m[1]),o===u&&l===i||(r.push(t(m,o-u,l-i)),u=o,i=l)):(u=x(n,m[0]),i=h(n,m[1]),r.push(t(m,u,i)))}return r.length>0?r:null}function g(n,t,e){return t[0]=x(n,e[0]),t[3]=h(n,e[1]),t[2]=x(n,e[2]),t[1]=h(n,e[3]),t}function p(n,t,e,r){return I(n,e?r?c:m:r?m:a,t)}function N(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function y(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function z({scale:n,translate:t},e){return e*n[0]+t[0]}function T({scale:n,translate:t},e){return t[1]-e*n[1]}function M(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,i]=n.scale;let o=z(n,e[0][0]),l=T(n,e[0][1]);r[0]=t(e[0],o,l);for(let a=1;a<e.length;a++){const n=e[a];o+=n[0]*u,l-=n[1]*i,r[a]=t(n,o,l)}return r}function E(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=M(n,t,e[u]);return r}function P(n,t,e){return e?(t[0]=z(n,e[0]),t[1]=T(n,e[3]),t[2]=z(n,e[2]),t[3]=T(n,e[1]),t):[z(n,t[0]),T(n,t[3]),z(n,t[2]),T(n,t[1])]}function b(n,t,e,r){return M(n,e?r?c:m:r?m:a,t)}function F(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function V(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function Y(n,t,e){let[r,u]=e[0],i=Math.min(r,t[0]),o=Math.min(u,t[1]),l=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(i=Math.min(i,r)),n>0&&(l=Math.max(l,r)),t<0?o=Math.min(o,u):t>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function _(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)Y(n,n,t[e]);return n}function A(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return Y(t,t,n)}function w(n){return _([0,0,0,0],n)}function j(n){return _([0,0,0,0],n)}function G(n,t,e,r,u){return t.xmin=x(n,e.xmin),t.ymin=h(n,e.ymin),t.xmax=x(n,e.xmax),t.ymax=h(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function L(n,t,e,r,u){return t.points=p(n,e.points,r,u),t}function O(n,t,e,r,u){return t.x=x(n,e.x),t.y=h(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function S(n,t,e,r,u){const i=N(n,e.rings,r,u);return i?(t.rings=i,t):null}function d(n,t,e,r,u){const i=y(n,e.paths,r,u);return i?(t.paths=i,t):null}function U(n,t){return n&&t?Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPoint"])(t)?O(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?d(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?S(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t)?L(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t)?G(n,{},t,!1,!1):null:null}function k(n,t,e,r,u){return t.xmin=z(n,e.xmin),t.ymin=T(n,e.ymin),t.xmax=z(n,e.xmax),t.ymax=T(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function q(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.points=b(t,r.points,u,i)),e}function v(n,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||(e.x=z(n,r.x),e.y=T(n,r.y),e!==r&&(u&&(e.z=r.z),i&&(e.m=r.m))),e}function B(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.rings=V(t,r.rings,u,i)),e}function C(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.paths=F(t,r.paths,u,i)),e}


/***/ }),

/***/ "HsO1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js ***!
  \*****************************************************************************/
/*! exports provided: checkProjectionSupport, project, projectMany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProjectionSupport", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectMany", function() { return M; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/geometryAdapters/json.js */ "1kEK");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/webMercatorUtils.js */ "l4ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const h=[0,0];function c(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return[e.x,e.y]=s(t.x,t.y,h),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=s(t.xmin,t.ymin,h),[e.xmax,e.ymax]=s(t.xmax,t.ymax,h),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return"rings"in t?{rings:p(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:p(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:l(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function p(s,t){const e=[];for(const n of s)e.push(l(n,t));return e}function l(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3])}return e}async function f(e,n){if(!n)return;const r=Array.isArray(e)?e.map((t=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.geometry)&&t.geometry.spatialReference)):[e];await Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_1__["initializeProjection"])(r.map((s=>({source:s,dest:n}))))}const x=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_4__["lngLatToXY"]),y=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_4__["xyToLngLat"]);function g(s,t,a){if(!s)return s;if(a||(a=t,t=s.spatialReference),!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["isValid"])(t)||!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["isValid"])(a)||Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(t,a))return s;if(Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_4__["canProject"])(t,a)){const t=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["isWebMercator"])(a)?x(s):y(s);return t.spatialReference=a,t}return Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_1__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_2__["jsonAdapter"],[s],t,a,null)[0]}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,t,e){if(!s||!s.length||!t||!e||Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(t,e))return s;const n={geometries:s,inSpatialReference:t,outSpatialReference:e,resolve:null};return this._jobs.push(n),new Promise((s=>{n.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:r,outSpatialReference:i,resolve:a}=s;Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_4__["canProject"])(r,i)?Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["isWebMercator"])(i)?a(t.map(x)):a(t.map(y)):a(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_1__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_2__["jsonAdapter"],t,r,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const j=new _;function M(s,t,e){return j.push(s,t,e)}


/***/ })

}]);
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~eb46e9a6.js.map