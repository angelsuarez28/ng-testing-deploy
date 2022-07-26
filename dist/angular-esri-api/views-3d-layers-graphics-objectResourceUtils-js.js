(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-graphics-objectResourceUtils-js"],{

/***/ "+JUG":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/sphere.js ***!
  \****************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return w; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "15Hh");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec4.js */ "dXfX");
/* harmony import */ var _vec4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec4f64.js */ "D8Ta");
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/support/Axis.js */ "OjWZ");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/support/ray.js */ "0Y+r");
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/support/vector.js */ "obHo");
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/support/vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const S=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.geometry.support.sphere");function P(){return Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__["c"])()}function _(t,r=P()){return Object(_vec4_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r,t)}function q(t,r){return Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__["f"])(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:N}function O(t,r,s,n){return Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__["f"])(t,r,s,n)}function T(t,r,s){return t!==s&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(s,t),s[3]=t[3]+r,s}function Z(t,r,s){return S.error("sphere.setExtent is not yet supported"),t===s?s:_(t,s)}function z(t,r,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(r))return!1;const{origin:o,direction:e}=r,i=U;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],c=2*(e[0]*i[0]+e[1]*i[1]+e[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return(m<0||p<m&&p>0)&&(m=p),!(m<0)&&(s&&(s[0]=o[0]+e[0]*m,s[1]=o[1]+e[1]*m,s[2]=o[2]+e[2]*m),!0)}const U=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])();function V(t,r){return z(t,r,null)}function X(t,r,s){if(z(t,r,s))return s;const n=Y(t,r,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(s,r.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),r.direction,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["i"])(r.origin,n)/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(r.direction))),s}function Y(t,r,s){const n=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),e=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sm4d"].get();Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(n,r.origin,r.direction);const i=E(t);Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(s,n,r.origin),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(s,s,1/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s)*i);const c=G(t,r.origin),p=Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__["angle"])(r.origin,s);return Object(_mat4_js__WEBPACK_IMPORTED_MODULE_4__["d"])(e,p+c,n),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["m"])(s,s,e),s}function B(t,r,s){return z(t,r,s)?s:(Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__["closestPoint"])(r,L(t),s),D(t,s,s))}function D(t,r,s){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),r,L(t)),o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),n,t[3]/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(n));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(s,o,L(t))}function F(t,r){const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),r,L(t)),n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["p"])(s),o=t[3]*t[3];return Math.sqrt(Math.abs(n-o))}function G(t,s){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),s,L(t)),o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(n),e=E(t),i=e+Math.abs(e-o);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(e/i)}const H=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])();function I(t,r,n,o){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(H,r,L(t));switch(n){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__["Axis"].X:{const t=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["cartesianToSpherical"])(e,H)[2];return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(o,-Math.sin(t),Math.cos(t),0)}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__["Axis"].Y:{const t=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["cartesianToSpherical"])(e,H),r=t[1],n=t[2],i=Math.sin(r);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(o,-i*Math.cos(n),-i*Math.sin(n),Math.cos(r))}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__["Axis"].Z:return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["n"])(o,e);default:return}}function J(t,r){const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(Q,r,L(t));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s)-t[3]}function K(t,r,s,n){const o=J(t,r),e=I(t,r,_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__["Axis"].Z,Q),c=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(Q,e,s-o);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(n,r,c)}const N=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),Q=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),W=Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:Z,intersectRay:z,intersectsRay:V,intersectRayClosestSilhouette:X,closestPointOnSilhouette:Y,closestPoint:B,projectPoint:D,distanceToSilhouette:F,angleToSilhouette:G,axisAt:I,altitudeAt:J,setAltitudeAt:K});


/***/ }),

/***/ "+h6m":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js ***!
  \************************************************************************************************/
/*! exports provided: Default3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Default3D", function() { return E; });
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const E=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].POSITION,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].NORMAL,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].UV0,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].COLOR,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].SIZE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].TANGENT,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].AUXPOS1,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].SYMBOLCOLOR,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].AUXPOS2,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].FEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].INSTANCEFEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].INSTANCECOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].MODEL,8],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].MODELNORMAL,12],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].MODELORIGINHI,11],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].MODELORIGINLO,15]]);


/***/ }),

/***/ "0BfS":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: ReadShadowMap, bindReadShadowMapUniforms, bindReadShadowMapView, bindReadShadowMapViewCustomOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadShadowMap", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReadShadowMapUniforms", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReadShadowMapView", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReadShadowMapViewCustomOrigin", function() { return o; });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t){t.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__["RgbaFloatEncoding"]),t.fragment.uniforms.add("shadowMapTex","sampler2D"),t.fragment.uniforms.add("numCascades","int"),t.fragment.uniforms.add("cascadeDistances","vec4"),t.fragment.uniforms.add("shadowMapMatrix","mat4",4),t.fragment.uniforms.add("depthHalfPixelSz","float"),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function i(e,a){a.shadowMappingEnabled&&(a.shadowMap.bind(e),a.shadowMap.bindView(e,a.origin))}function o(e,a,t){a.shadowMappingEnabled&&a.shadowMap.bindView(e,t)}function s(e,a){a.shadowMappingEnabled&&a.shadowMap.bindView(e,a.origin)}


/***/ }),

/***/ "0Ect":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: ReadLinearDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadLinearDepth", function() { return a; });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a(a){a.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__["RgbaFloatEncoding"]),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}


/***/ }),

/***/ "0Y+r":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/ray.js ***!
  \***********************************************************/
/*! exports provided: closestPoint, copy, create, distance, distance2, equals, fromPoints, fromValues, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestPoint", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance2", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPoints", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return j; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function d(i){return i?{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(i.origin),direction:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(i.direction)}:{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),direction:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}function m(n,r){return Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(n.origin,r.origin)&&Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(n.direction,r.direction)}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function l(i,n=d()){return k(i.origin,i.direction,n)}function p(i,n,t=d()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(t.origin,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(t.direction,n,i),t}function k(i,n,o=d()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.origin,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.direction,n),o}function h(i,n){const r=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),i.direction),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,i.origin));return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r,r)}function v(i,n){return Math.sqrt(h(i,n))}function b(i,n,r){const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(i.direction,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(r,n,i.origin));return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r,i.origin,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r,i.direction,t)),r}function q(){return{origin:null,direction:null}}const S=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__["ObjectStack"](q);


/***/ }),

/***/ "0nJL":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js ***!
  \******************************************************************************************/
/*! exports provided: Slice, bindSliceUniforms, bindSliceUniformsWithOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSliceUniforms", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSliceUniformsWithOrigin", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function f(s,e){if(e.slicePlaneEnabled){s.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(s.vertex.uniforms.add("slicePlaneOrigin","vec3"),s.vertex.uniforms.add("slicePlaneBasis1","vec3"),s.vertex.uniforms.add("slicePlaneBasis2","vec3")),s.fragment.uniforms.add("slicePlaneOrigin","vec3"),s.fragment.uniforms.add("slicePlaneBasis1","vec3"),s.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.sliceHighlightDisabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`#define highlightSlice(_color_, _pos_) (_color_)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&s.vertex.code.add(i),s.fragment.code.add(i),s.fragment.code.add(o)}else{const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&s.vertex.code.add(i),s.fragment.code.add(i)}}function d(s,e,i){_(s,e,i.slicePlane,{origin:i.origin})}function _(i,t,n,f){if(t.slicePlaneEnabled)if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n)){if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(g,n.origin),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(m,n.basis1),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(P,n.basis2),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.origin)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(g,n.origin,f.origin),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.view)){const i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.origin)?Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["j"])(H,f.view,f.origin):f.view;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(m,m,g),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(P,P,g),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(g,g,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(m,m,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(P,P,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(m,m,g),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(P,P,g)}i.setUniform3fv("slicePlaneOrigin",g),i.setUniform3fv("slicePlaneBasis1",m),i.setUniform3fv("slicePlaneBasis2",P)}else i.setUniform3fv("slicePlaneBasis1",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["Z"]),i.setUniform3fv("slicePlaneBasis2",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["Z"]),i.setUniform3fv("slicePlaneOrigin",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["Z"])}const g=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),m=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),P=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),H=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "1/dN":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInterfaces.js */ "t8JS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique}ensureResources(t){return _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["ResourceState"].LOADED}}


/***/ }),

/***/ "1TnO":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js ***!
  \************************************************************************************************************************/
/*! exports provided: InstancedDoublePrecision, InstancedDoublePrecisionUniforms, bindCustomOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstancedDoublePrecision", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstancedDoublePrecisionUniforms", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCustomOrigin", function() { return d; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/doublePrecisionUtils.js */ "nMRV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__["VertexAttribute"].MODELORIGINHI,"vec3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__["VertexAttribute"].MODELORIGINLO,"vec3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__["VertexAttribute"].MODEL,"mat3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__["VertexAttribute"].MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_2__["DoublePrecision"],t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const a=[_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]``];e.vertex.code.add(a[0]),e.vertex.code.add(a[1]),e.vertex.code.add(a[2]),t.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_1__["ShaderOutput"].Normal&&e.vertex.code.add(a[3]),e.vertex.code.add(a[4])}class c{}function d(e,r){Object(_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_5__["encodeDoubleArraySplit"])(r,s,l,3),e.setUniform3fv("viewOriginHi",s),e.setUniform3fv("viewOriginLo",l)}const s=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),l=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();


/***/ }),

/***/ "1W42":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: HeaderComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComment", function() { return r; });
/* harmony import */ var _ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ "GVa1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(r,u){const p=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
  /*
  *  ${u.name}
  *  ${u.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Color?"RenderOutput: Color":u.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Depth?"RenderOutput: Depth":u.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Shadow?"RenderOutput: Shadow":u.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Normal?"RenderOutput: Normal":u.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Highlight?"RenderOutput: Highlight":""}
  */
  `;Object(_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["webglValidateShadersEnabled"])()&&(r.fragment.code.add(p),r.vertex.code.add(p))}


/***/ }),

/***/ "1ff1":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js ***!
  \*************************************************************************/
/*! exports provided: createColorTexture, createEmptyDepthTexture, createEmptyTexture, createQuadVAO, createScreenSizeTriangleVAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorTexture", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyDepthTexture", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyTexture", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuadVAO", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScreenSizeTriangleVAO", function() { return g; });
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultVertexBufferLayouts.js */ "fDPZ");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function u(a,i=_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["Pos2"],m=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__["Default3D"],l=-1,T=1){let u=null;if(i===_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["Pos2Tex"])u=new Float32Array([l,l,0,0,T,l,1,0,l,T,0,1,T,T,1,1]);else u=new Float32Array([l,l,T,l,l,T,T,T]);return new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["VertexArrayObject"](a,m,{geometry:i},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["BufferObject"].createVertex(a,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["Usage"].STATIC_DRAW,u)})}function g(r,a=_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["Pos2"],i=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__["Default3D"]){const m=new Float32Array([-1,-1,3,-1,-1,3]);return new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["VertexArrayObject"](r,i,{geometry:a},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["BufferObject"].createVertex(r,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["Usage"].STATIC_DRAW,m)})}const E=4;function w(e,t=E){return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](e,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelType"].UNSIGNED_BYTE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureSamplingMode"].NEAREST,width:t,height:t})}function A(e,t,r=E){const o=new Uint8Array(r*r*4);for(let n=0;n<o.length;n+=4)o[n+0]=255*t[0],o[n+1]=255*t[1],o[n+2]=255*t[2],o[n+3]=255*t[3];return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](e,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelType"].UNSIGNED_BYTE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureSamplingMode"].NEAREST,width:r,height:r},o)}function p(e){return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](e,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelType"].UNSIGNED_BYTE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureSamplingMode"].NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}


/***/ }),

/***/ "262w":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js ***!
  \**************************************************************************************/
/*! exports provided: DefaultMaterial, getInstanceBufferLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterial", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstanceBufferLayout", function() { return H; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ViewingMode.js */ "PJys");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../support/buffer/InterleavedLayout.js */ "/ADo");
/* harmony import */ var _core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "qrV2");
/* harmony import */ var _core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "t8JS");
/* harmony import */ var _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/GLMaterialTexture.js */ "aK8v");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_RenderPass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/RenderPass.js */ "YU0U");
/* harmony import */ var _lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/RenderSlot.js */ "utzi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/VertexAttribute.js */ "t73S");
/* harmony import */ var _lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/verticalOffsetUtils.js */ "ib+T");
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/bufferWriterUtils.js */ "WVfK");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shaders/DefaultMaterialTechnique.js */ "4csu");
/* harmony import */ var _shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shaders/RealisticTreeTechnique.js */ "b5HO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class _ extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_11__["Material"]{constructor(e){super(e,B),this.supportsEdges=!0,this.techniqueConfig=new _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_19__["DefaultMaterialTechniqueConfiguration"],this.vertexBufferLayout=j(this.parameters),this.instanceBufferLayout=e.instanced?H(this.parameters):null}isVisibleInPass(e){return e!==_lib_RenderPass_js__WEBPACK_IMPORTED_MODULE_13__["RenderPass"].MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==_lib_RenderPass_js__WEBPACK_IMPORTED_MODULE_13__["RenderPass"].MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==_lib_RenderPass_js__WEBPACK_IMPORTED_MODULE_13__["RenderPass"].MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,s=e.vertexColors,i=e.symbolColors,r=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return s&&(r||a||i)?!!n||o:s?n?l:o:r||a||i?!!n||o:n?l:o}getTechniqueConfig(t,s){return this.techniqueConfig.output=t,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__["CullFaceOptions"].None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=s.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=s.cullAboveGround,this.techniqueConfig.hasModelTransformation=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.parameters.modelTransformation),t!==_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Color&&t!==_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalsDoubleSidedMode"].WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalsDoubleSidedMode"].View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalsDoubleSidedMode"].WindingOrder:_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalsDoubleSidedMode"].None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!s.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=s.transparencyPassType,this.techniqueConfig.enableOffset=s.camera.relativeElevation<_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__["OITPolygonOffsetLimit"]),this.techniqueConfig}intersect(e,t,h,u,m,d,f){if(null!==this.parameters.verticalOffset){const e=u.camera;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(U,h[12],h[13],h[14]);let t=null;switch(u.viewingMode){case _ViewingMode_js__WEBPACK_IMPORTED_MODULE_4__["ViewingMode"].Global:t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(k,U);break;case _ViewingMode_js__WEBPACK_IMPORTED_MODULE_4__["ViewingMode"].Local:t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(k,V)}let f=0;if(null!==this.parameters.verticalOffset){const s=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(W,U,e.eye),i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(s),r=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(s,s,1/i);let c=null;this.parameters.screenSizePerspective&&(c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t,r)),f+=Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_18__["verticalOffsetAtDistance"])(e,i,this.parameters.verticalOffset,c,this.parameters.screenSizePerspective)}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(t,t,f),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["t"])(F,t,u.transform.inverseRotation),m=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(z,m,F),d=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(G,d,F)}Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_18__["intersectTriangleGeometry"])(e,t,u,m,d,Object(_lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_16__["getVerticalOffsetObject3D"])(u.verticalOffset),f)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_14__["RenderSlot"].TRANSPARENT_MATERIAL:_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_14__["RenderSlot"].TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_14__["RenderSlot"].OPAQUE_MATERIAL)||e===_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_14__["RenderSlot"].DRAPED_MATERIAL}createGLMaterial(e){return e.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Color||e.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Alpha||e.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Depth||e.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Normal||e.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Shadow||e.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Highlight?new w(e):null}createBufferWriter(){return new N(this.vertexBufferLayout,this.instanceBufferLayout)}}class w extends _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?_shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_20__["RealisticTreeTechnique"]:_shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_19__["DefaultMaterialTechnique"],e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Color&&this._output!==_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_6__["ShaderOutput"].Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const B={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__["CullFaceOptions"].Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__["DepthTestFunction"].Less,textureAlphaMode:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__["AlphaDiscardMode"].Blend,textureAlphaCutoff:_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_8__["defaultMaskAlphaCutoff"],textureAlphaPremultiplied:!1,sceneHasOcludees:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialParameters"]};class N{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].POSITION).length}write(e,t,s,i){Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_17__["writeDefaultAttributes"])(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,s,i)}}function j(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,s=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_5__["newLayout"])().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].POSITION).vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].NORMAL);return e.vertexTangents&&s.vec4f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].TANGENT),t&&s.vec2f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].UV0),e.vertexColors&&s.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].COLOR),e.symbolColors&&s.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].SYMBOLCOLOR),s}function H(e){let t=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_5__["newLayout"])();return t=e.instancedDoublePrecision?t.vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].MODELORIGINHI).vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].MODELORIGINLO).mat3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].MODEL).mat3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].MODELNORMAL):t.mat4f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].MODEL).mat4f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__["VertexAttribute"].INSTANCEFEATUREATTRIBUTE)),t}const z=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),G=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),V=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0,0,1),k=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),F=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),U=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),W=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();


/***/ }),

/***/ "2hxh":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js ***!
  \*******************************************************************************************/
/*! exports provided: applyPrecomputedScaleFactor, applyScaleFactor, getLabelSettings, getSettings, precomputeScaleFactor, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPrecomputedScaleFactor", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScaleFactor", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelSettings", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precomputeScaleFactor", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return m; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ViewingMode.js */ "PJys");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(e,t){return new p(e,h,t)}function n(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h;return new p(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v.minPixelSize},t)}function l(e){return Math.abs(e*e*e)}function s(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x.scale=Math.min(i.divisor/(t-i.offset),1),x.factor=l(e),x.minPixelSize=i.minPixelSize,x.paddingPixels=r,x}function c(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o(t,a){return Math.max(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t*a.scale,t,a.factor),c(t,a))}function u(e,t,a){const i=s(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,o(1,i)}function d(e,t,a,i){i.scale=u(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride}function f(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,c(e[1],t)/Math.max(1e-5,e[1])),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m(e,t,a,i){return o(e,s(t,a,i))}class p{constructor(e,t,a,r=g(),n){this.viewingMode=e,this.description=t,this.ellipsoidRadius=a,this.parameters=r,this._paddingPixelsOverride=n,this.viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_1__["ViewingMode"].Local?(this.coverageCompensation=this._surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this._surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this.description,{fovY:l,distance:s}=e,c=this.calculateCurvatureDependentParameters(e,t),o=this.coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}_calculateCurvatureDependentParametersLocal(e,t,a=P){return a.tiltAngle=this.description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(t,i,r=P){const n=this.description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}_surfaceCoverageCompensationLocal(e,t,a){return(e.fovY-a.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return(Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h={curvatureDependent:{min:{curvature:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(10),tiltAngle:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(12),scaleFallOffFactor:.5},max:{curvature:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(70),tiltAngle:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g(){return{camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P={tiltAngle:0,scaleFallOffFactor:0};


/***/ }),

/***/ "2jVe":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js ***!
  \**************************************************************************************************************/
/*! exports provided: ShaderTechniqueConfiguration, parameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTechniqueConfiguration", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameter", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function e(t={}){return(e,r)=>{var a,s;e._parameterNames=null!=(a=e._parameterNames)?a:[],e._parameterNames.push(r);const i=e._parameterNames.length-1,h=t.count||2,o=Math.ceil(Math.log2(h)),m=null!=(s=e._parameterBits)?s:[0];let n=0;for(;m[n]+o>16;)n++,n>=m.length&&m.push(0);e._parameterBits=m;const p=m[n],_=(1<<o)-1<<p;m[n]+=o,Object.defineProperty(e,r,{get(){return this[i]},set(t){if(this[i]!==t&&(this[i]=t,this._keyDirty=!0,this._parameterBits[n]=this._parameterBits[n]&~_|+t<<p&_,"number"!=typeof t&&"boolean"!=typeof t))throw"Configuration value for "+r+" must be boolean or number, got "+typeof t}})}}


/***/ }),

/***/ "2uVf":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3f64.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function r(e,n,r,t,a,o,c,u,f){return[e,n,r,t,a,o,c,u,f]}function t(e,n){return new Float64Array(e,n,9)}const a=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t});


/***/ }),

/***/ "368d":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js ***!
  \**************************************************************************************************************************/
/*! exports provided: TextureCoordinateAttribute, TextureCoordinateAttributeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureCoordinateAttribute", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureCoordinateAttributeType", function() { return a; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(r,d){d.attributeTextureCoordinates===a.Default&&(r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttribute"].UV0,"vec2"),r.varyings.add("vuv0","vec2"),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),d.attributeTextureCoordinates===a.Atlas&&(r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttribute"].UV0,"vec2"),r.varyings.add("vuv0","vec2"),r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttribute"].UVREGION,"vec4"),r.varyings.add("vuvRegion","vec4"),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),d.attributeTextureCoordinates===a.None&&r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardTextureCoordinates() {}`)}var a;!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(a||(a={}));


/***/ }),

/***/ "3qN5":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: EvaluateMainLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateMainLighting", function() { return n; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.uniforms.add("lightingSpecularStrength","float"),t.uniforms.add("lightingEnvironmentStrength","float"),t.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}


/***/ }),

/***/ "4csu":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js ***!
  \*********************************************************************************************/
/*! exports provided: DefaultMaterialTechnique, DefaultMaterialTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechnique", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechniqueConfiguration", function() { return K; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "qrV2");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "t8JS");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "h7dw");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../chunks/DefaultMaterial.glsl.js */ "AxBq");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const W=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class Q extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_19__["ShaderTechnique"]{initializeProgram(e){const t=Q.shader.get(),r=this.configuration,o=t.build({oitEnabled:r.transparencyPassType===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["TransparencyPassType"].Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["PBRMode"].Schematic:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["PBRMode"].Normal:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["PBRMode"].Disabled,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,hasModelTransformation:r.hasModelTransformation,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttributeType"].ScreenDerivative:_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttributeType"].Attribute,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["TextureCoordinateAttributeType"].Default:_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["TextureCoordinateAttributeType"].None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_16__["doublePrecisionRequiresObfuscation"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_24__["Program"](e.rctx,o,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_22__["Default3D"])}bindPass(e,t){var o,s;Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__["bindProjectionMatrix"])(this.program,t.camera.projectionMatrix);const a=this.configuration.output;this.configuration.hasModelTransformation&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):W.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Depth||t.multipassTerrainEnabled||a===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_11__["bindMultipassTerrainTexture"])(this.program,t)),a===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_26__["colorMixModes"][e.colorMixMode])),a===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_26__["colorMixModes"][e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["bindPBRUniforms"])(this.program,e,this.configuration.isSchematic)):a===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Highlight&&Object(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_10__["bindOutputHighlight"])(this.program,t),Object(_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_15__["bindVisualVariablesUniformsForSymbols"])(this.program,e),Object(_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_9__["bindVerticalOffsetUniforms"])(this.program,e,t),Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_26__["bindScreenSizePerspective"])(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["AlphaDiscardMode"].Mask&&e.textureAlphaMode!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["AlphaDiscardMode"].MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(s=t.ssaoHelper)||s.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__["bindViewCustomOrigin"])(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Color||this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Alpha||this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Depth&&this.configuration.screenSizePerspective||this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Normal&&this.configuration.screenSizePerspective||this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Highlight&&this.configuration.screenSizePerspective)&&Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__["bindCameraPosition"])(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Object(_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__["bindCustomOrigin"])(this.program,t),Object(_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__["bindSliceUniforms"])(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Color&&Object(_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_14__["bindReadShadowMapViewCustomOrigin"])(this.program,e,t)}_convertDepthTestFunction(e){return e===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["DepthTestFunction"].Lequal?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_28__["CompareFunction"].LEQUAL:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_28__["CompareFunction"].LESS}_setPipeline(e,t){const r=this.configuration,o=e===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["TransparencyPassType"].NONE,s=e===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["TransparencyPassType"].FrontFace;return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_29__["makePipelineState"])({blending:r.output!==_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Color&&r.output!==_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Alpha||!r.transparent?null:o?_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_23__["blendingDefault"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_23__["oitBlending"])(e),culling:J(r)&&Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_29__["cullingParams"])(r.cullFace),depthTest:{func:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_23__["oitDepthTest"])(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:o||s?r.writeDepth&&_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_29__["defaultDepthWriteParams"]:null,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_29__["defaultColorWriteParams"],stencilWrite:r.sceneHasOcludees?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_25__["stencilWriteMaskOn"]:null,stencilTest:r.sceneHasOcludees?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_25__["stencilToolMaskBaseParams"]:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_25__["stencilBaseAllZerosParams"]:null,polygonOffset:o||s?null:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_23__["getOITPolygonOffset"])(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function J(e){return e.cullFace?e.cullFace!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["CullFaceOptions"].None:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}Q.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_18__["ReloadableShaderModule"](_chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_27__["D"],(()=>__webpack_require__.e(/*! import() | DefaultMaterial-glsl-js */ "DefaultMaterial-glsl-js").then(__webpack_require__.bind(null, /*! ./DefaultMaterial.glsl.js */ "SjXz"))));class K extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].Color,this.alphaDiscardMode=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["AlphaDiscardMode"].Opaque,this.doubleSidedMode=_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_12__["NormalsDoubleSidedMode"].None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["CullFaceOptions"].None,this.transparencyPassType=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["TransparencyPassType"].NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["DepthTestFunction"].Less}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])({count:_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_4__["ShaderOutput"].COUNT})],K.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["AlphaDiscardMode"].COUNT})],K.prototype,"alphaDiscardMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])({count:_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_12__["NormalsDoubleSidedMode"].COUNT})],K.prototype,"doubleSidedMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"isSchematic",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"vertexColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"offsetBackfaces",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"symbolColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"vvSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"vvColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"verticalOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"receiveShadows",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"sliceHighlightDisabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"receiveAmbientOcclusion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"screenSizePerspective",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"textureAlphaPremultiplied",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"hasColorTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"usePBR",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"hasEmissionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"hasOcclusionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"hasNormalTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"instanced",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"instancedColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"instancedDoublePrecision",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"vertexTangents",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"normalsTypeDerivate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"writeDepth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"sceneHasOcludees",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"transparent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"enableOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["CullFaceOptions"].COUNT})],K.prototype,"cullFace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["TransparencyPassType"].COUNT})],K.prototype,"transparencyPassType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"multipassTerrainEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"cullAboveGround",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])()],K.prototype,"hasModelTransformation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_20__["parameter"])({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_21__["DepthTestFunction"].COUNT})],K.prototype,"customDepthTest",void 0);


/***/ }),

/***/ "69UF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js ***!
  \******************************************************************************************************/
/*! exports provided: DiscardOrAdjustAlpha, defaultMaskAlphaCutoff, symbolAlphaCutoff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscardOrAdjustAlpha", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMaskAlphaCutoff", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolAlphaCutoff", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/basicInterfaces.js */ "t8JS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const o=.1,e=.001;function r(o,r){const c=o.fragment;switch(r.alphaDiscardMode){case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__["AlphaDiscardMode"].Blend:c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        #define discardOrAdjustAlpha(color) { if (color.a < ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].float(e)}) { discard; } }
      `);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__["AlphaDiscardMode"].Opaque:c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__["AlphaDiscardMode"].Mask:c.uniforms.add("textureAlphaCutoff","float"),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__["AlphaDiscardMode"].MaskBlend:o.fragment.uniforms.add("textureAlphaCutoff","float"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}


/***/ }),

/***/ "6kvK":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js ***!
  \******************************************************************************************************************/
/*! exports provided: EvaluateSceneLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateSceneLighting", function() { return c; });
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ViewingMode.js */ "PJys");
/* harmony import */ var _EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvaluateAmbientLighting.glsl.js */ "KQYO");
/* harmony import */ var _EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EvaluateMainLighting.glsl.js */ "3qN5");
/* harmony import */ var _PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "xRv2");
/* harmony import */ var _ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function c(c,m){const s=c.fragment;c.include(_EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__["EvaluateMainLighting"]),c.include(_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_2__["EvaluateAmbientOcclusion"],m),m.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PBRMode"].Disabled&&c.include(_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__["PhysicallyBasedRendering"],m),c.include(_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_1__["EvaluateAmbientLighting"],m),m.receiveShadows&&c.include(_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_7__["ReadShadowMap"],m),s.uniforms.add("lightingGlobalFactor","float"),s.uniforms.add("ambientBoostFactor","float"),s.uniforms.add("hasFillLights","bool"),c.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__["PiUtils"]),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${m.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PBRMode"].Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${m.viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__["ViewingMode"].Global?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`normalize(vPosWorld)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),m.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PBRMode"].Disabled||m.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PBRMode"].WaterOnIntegratedMesh?s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):m.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PBRMode"].Normal&&m.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PBRMode"].Schematic||(s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),s.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${m.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PBRMode"].Schematic?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_8__["glsl"]`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}


/***/ }),

/***/ "AD+e":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js ***!
  \******************************************************************************/
/*! exports provided: ContentObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObject", function() { return r; });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/uid.js */ "8uAX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r{constructor(){this.id=Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_0__["generateUID"])()}unload(){}}


/***/ }),

/***/ "Ango":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js ***!
  \*************************************************************************/
/*! exports provided: Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return g; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicInterfaces.js */ "t8JS");
/* harmony import */ var _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoundingInfo.js */ "thYK");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentObjectType.js */ "J2V/");
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometryDataUtils.js */ "EDiM");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class g extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_3__["ContentObject"]{constructor(t,i=[],n=_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__["PrimitiveType"].Triangle,o=-1){super(),this._primitiveType=n,this.edgeIndicesLength=o,this.type=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_4__["ContentObjectType"].Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,s]of t)s&&this._vertexAttributes.set(e,{...s});if(null==i||0===i.length){const t=d(this._vertexAttributes),e=Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_5__["generateDefaultIndexArray"])(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e)}else for(const[e,s]of i)s&&(this._indices.set(e,l(s)),e===_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__["VertexAttribute"].POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}cloneShallow(){const t=new g([],void 0,this._primitiveType,void 0),{_vertexAttributes:e,_indices:i}=t;return this._vertexAttributes.forEach(((t,i)=>{e.set(i,t)})),this._indices.forEach(((t,e)=>{i.set(e,t)})),t.screenToWorldRatio=this.screenToWorldRatio,t._boundingInfo=this._boundingInfo,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return this.primitiveType===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__["PrimitiveType"].Triangle?this._computeAttachmentOriginTriangles(t):this._computeAttachmentOriginPoints(t)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__["VertexAttribute"].POSITION),i=this.vertexAttributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__["VertexAttribute"].POSITION);return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_5__["computeAttachmentOriginTriangles"])(i,e,t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__["VertexAttribute"].POSITION),i=this.vertexAttributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__["VertexAttribute"].POSITION);return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_5__["computeAttachmentOriginPoints"])(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__["VertexAttribute"].POSITION);if(0===t.length)return null;const n=this.primitiveType===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__["PrimitiveType"].Triangle?3:1;Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(t.length%n==0,"Indexing error: "+t.length+" not divisible by "+n);const s=Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_5__["generateDefaultIndexArray"])(t.length/n),o=this.vertexAttributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__["VertexAttribute"].POSITION);return new _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_2__["BoundingInfo"](s,n,t,o)}}function d(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function l(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}


/***/ }),

/***/ "AxBq":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js ***!
  \******************************************************************/
/*! exports provided: D, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $; });
/* harmony import */ var _views_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ViewingMode.js */ "PJys");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "F8o4");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "bLIi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js */ "fRF2");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "fiGu");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */ "DXpj");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "6kvK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js */ "qrV2");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js */ "1W42");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "NiZE");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function $($){const D=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_29__["ShaderBuilder"],B=D.vertex.code,F=D.fragment.code;D.include(_views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_26__["HeaderComment"],{name:"Default Material Shader",output:$.output}),D.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const V=$.hasModelTransformation;return V&&D.vertex.uniforms.add("model","mat4"),D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["PositionAttribute"]),D.varyings.add("vpos","vec3"),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__["VisualVariables"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__["InstancedDoublePrecision"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_13__["VerticalOffset"],$),$.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Color&&$.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Alpha||(D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttribute"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_5__["Transform"],{linearDepth:!1,hasModelTransformation:V}),$.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttributeType"].Attribute&&$.offsetBackfaces&&D.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Offset"]),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_16__["ComputeNormalTexture"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_12__["VertexNormal"],$),$.instancedColor&&D.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_30__["VertexAttribute"].INSTANCECOLOR,"vec4"),D.varyings.add("localvpos","vec3"),D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_10__["TextureCoordinateAttribute"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ForwardLinearDepth"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__["SymbolColor"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_11__["VertexColor"],$),D.vertex.uniforms.add("externalColor","vec4"),D.varyings.add("vcolorExt","vec4"),$.multipassTerrainEnabled&&D.varyings.add("depth","float"),B.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${$.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_25__["symbolAlphaCutoff"])}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${$.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttributeType"].Attribute?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${$.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${V?"model,":""} vpos);
          ${$.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttributeType"].Attribute&&$.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${$.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),$.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Alpha&&(D.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__["Slice"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_25__["DiscardOrAdjustAlpha"],$),$.multipassTerrainEnabled&&(D.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_15__["ReadLinearDepth"]),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_19__["multipassTerrainTest"],$)),D.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),$.hasColorTexture&&D.fragment.uniforms.add("tex","sampler2D"),D.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_27__["MixExternalColor"]),F.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${$.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${$.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${$.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`vec4 texColor = vec4(1.0);`}
        ${$.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),$.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Color&&(D.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__["Slice"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_18__["EvaluateSceneLighting"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_17__["EvaluateAmbientOcclusion"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_25__["DiscardOrAdjustAlpha"],$),$.receiveShadows&&D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_23__["ReadShadowMap"],$),$.multipassTerrainEnabled&&(D.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_15__["ReadLinearDepth"]),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_19__["multipassTerrainTest"],$)),D.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),$.hasColorTexture&&D.fragment.uniforms.add("tex","sampler2D"),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_22__["PhysicallyBasedRenderingParameters"],$),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_21__["PhysicallyBasedRendering"],$),D.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_27__["MixExternalColor"]),D.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_20__["Normals"],$),F.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${$.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${$.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${$.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${$.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttributeType"].ScreenDerivative?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        vec3 normal = screenDerivativeNormal(localvpos);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${$.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_22__["PBRMode"].Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${$.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":$.viewingMode===_views_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__["ViewingMode"].Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${$.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${$.hasNormalTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
              mat3 tangentSpace = ${$.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${$.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_22__["PBRMode"].Normal||$.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_22__["PBRMode"].Schematic?$.viewingMode===_views_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__["ViewingMode"].Global?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]``}
        ${$.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_22__["PBRMode"].Normal||$.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_22__["PBRMode"].Schematic?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__["glsl"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${$.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),D.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_14__["DefaultMaterialAuxiliaryPasses"],$),D}const D=Object.freeze({__proto__:null,build:$});


/***/ }),

/***/ "BPBZ":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quat.js ***!
  \**************************************************/
/*! exports provided: A, B, C, D, E, F, G, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return T; });
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat3f64.js */ "2uVf");
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quatf64.js */ "sTkM");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "QhKk");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec4.js */ "dXfX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function A(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function I(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function P(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>_common_js__WEBPACK_IMPORTED_MODULE_3__["E"]?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function v(t,s,a){const n=s[0],o=s[1],r=s[2],c=s[3],e=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+c*e+o*i-r*u,t[1]=o*h+c*u+r*e-n*i,t[2]=r*h+c*i+n*u-o*e,t[3]=c*h-n*e-o*u-r*i,t}function b(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+c*e,t[1]=o*u+r*e,t[2]=r*u-o*e,t[3]=c*u-n*e,t}function y(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*e,t[1]=o*u+c*e,t[2]=r*u+n*e,t[3]=c*u-o*e,t}function E(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*e,t[1]=o*u-n*e,t[2]=r*u+c*e,t[3]=c*u-r*e,t}function _(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function z(t,s,a,n){const r=s[0],c=s[1],e=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],d=a[3];return h=r*m+c*p+e*q+u*d,h<0&&(h=-h,m=-m,p=-p,q=-q,d=-d),1-h>_common_js__WEBPACK_IMPORTED_MODULE_3__["E"]?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*c+l*p,t[2]=f*e+l*q,t[3]=f*u+l*d,t}function L(t){const s=Object(_common_js__WEBPACK_IMPORTED_MODULE_3__["R"])(),a=Object(_common_js__WEBPACK_IMPORTED_MODULE_3__["R"])(),n=Object(_common_js__WEBPACK_IMPORTED_MODULE_3__["R"])(),o=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=o*Math.sin(2*Math.PI*a),t[1]=o*Math.cos(2*Math.PI*a),t[2]=c*Math.sin(2*Math.PI*n),t[3]=c*Math.cos(2*Math.PI*n),t}function k(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],c=a*a+n*n+o*o+r*r,e=c?1/c:0;return t[0]=-a*e,t[1]=-n*e,t[2]=-o*e,t[3]=r*e,t}function w(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function B(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function C(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),c=Math.cos(s),e=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-c*e*i,t[1]=c*e*h+r*u*i,t[2]=c*u*i-r*e*h,t[3]=c*u*h+r*e*i,t}function D(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["c"],G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["s"],O=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["a"],R=v,T=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["b"],W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["d"],X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["l"],Y=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["e"],Z=Y,H=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["f"],J=H,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["n"],N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["g"],Q=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["h"];function S(t,s,a){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s,a);return n<-.999999?(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(U,V,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["u"])(U)<1e-6&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(U,$,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(U,U),I(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,K(t,t))}const U=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),V=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(1,0,0),$=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(0,1,0);function tt(t,s,a,n,o,r){return z(st,s,o,r),z(at,a,n,r),z(t,st,at,2*r*(1-r)),t}const st=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),at=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_1__["a"])();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],K(t,B(t,o))}const ot=Object(_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),rt=Object.freeze({__proto__:null,identity:A,setAxisAngle:I,getAxisAngle:P,multiply:v,rotateX:b,rotateY:y,rotateZ:E,calculateW:_,slerp:z,random:L,invert:k,conjugate:w,fromMat3:B,fromEuler:C,str:D,copy:F,set:G,add:O,mul:R,scale:T,dot:W,lerp:X,length:Y,len:Z,squaredLength:H,sqrLen:J,normalize:K,exactEquals:N,equals:Q,rotationTo:S,sqlerp:tt,setAxes:nt});


/***/ }),

/***/ "DXpj":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: ComputeNormalTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputeNormalTexture", function() { return o; });
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "fLTx");
/* harmony import */ var _Normals_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Normals.glsl.js */ "qrV2");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(o,s){const d=o.fragment;s.vertexTangents?(o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__["VertexAttribute"].TANGENT,"vec4"),o.varyings.add("vTangent","vec4"),s.doubleSidedMode===_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_2__["NormalsDoubleSidedMode"].WindingOrder?d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(o.extensions.add("GL_OES_standard_derivatives"),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),s.attributeTextureCoordinates!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__["TextureCoordinateAttributeType"].None&&(o.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__["VertexTextureCoordinates"],s),d.uniforms.add("normalTexture","sampler2D"),d.uniforms.add("normalTextureSize","vec2"),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${s.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}


/***/ }),

/***/ "EVMh":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js ***!
  \*********************************************************************/
/*! exports provided: assert, fovd2fovx, fovd2fovy, fovx2fovd, fovy2fovd, inverseProjectionInfo, isTranslationMatrix, logWithBase, project, rayBoxTest, rayRay2D, setMatrixTranslation3, verify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovd2fovx", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovd2fovy", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovx2fovd", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovy2fovd", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverseProjectionInfo", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTranslationMatrix", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logWithBase", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayBoxTest", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayRay2D", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixTranslation3", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return c; });
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();class s{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function e(t,n){if(!t)throw n=n||"assert",console.log(new Error(n).stack),new s(n)}function c(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function u(t,n,r,o){let a,s=(r[0]-t[0])/n[0],e=(o[0]-t[0])/n[0];s>e&&(a=s,s=e,e=a);let c=(r[1]-t[1])/n[1],u=(o[1]-t[1])/n[1];if(c>u&&(a=c,c=u,u=a),s>u||c>e)return!1;c>s&&(s=c),u<e&&(e=u);let i=(r[2]-t[2])/n[2],f=(o[2]-t[2])/n[2];return i>f&&(a=i,i=f,f=a),!(s>f||i>e)&&(f<e&&(e=f),!(e<0))}function i(t,r,o,a,s,e=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["a"])()){const c=(a[s]-o[s])*(r[0]-t[0])-(a[0]-o[0])*(r[s]-t[s]),u=(a[0]-o[0])*(t[s]-o[s])-(a[s]-o[s])*(t[0]-o[0]);if(0===c)return!1;const i=u/c;return e[0]=t[0]+i*(r[0]-t[0]),e[1]=t[s]+i*(r[s]-t[s]),!0}function f(t,n,o,s,c){c||(c=t),a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=1,Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__["t"])(a,a,n),c.length>2&&(c[2]=-a[2]),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__["t"])(a,a,o),e(0!==a[3]),c[0]=a[0]/a[3],c[1]=a[1]/a[3],c[2]=a[2]/a[3],c[0]=(.5*c[0]+.5)*s[2]+s[0],c[1]=(.5*c[1]+.5)*s[3]+s[1]}function h(t,n){return Math.log(t)/Math.log(n)}function M(t,n,r,o){t[12]=n,t[13]=r,t[14]=o}function l(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function m(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function g(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function k(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function p(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function v(n,r,o,a,s){const e=n;0===n[11]?(a[0]=2/(r*e[0]),a[1]=2/(o*e[5]),a[2]=(1+e[12])/e[0],a[3]=(1+e[13])/e[5],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(s,0,1)):(a[0]=-2/(r*e[0]),a[1]=-2/(o*e[5]),a[2]=(1-e[8])/e[0],a[3]=(1-e[9])/e[5],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(s,1,0))}


/***/ }),

/***/ "F7CJ":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js ***!
  \**************************************************************************************************************/
/*! exports provided: VerticalOffset, bindVerticalOffsetUniforms, calculateVerticalOffsetFactors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalOffset", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVerticalOffsetUniforms", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateVerticalOffsetFactors", function() { return i; });
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ViewingMode.js */ "PJys");
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ScreenSizePerspective.glsl.js */ "L5gG");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function l(l,c){const i=l.vertex.code;c.verticalOffsetEnabled?(l.vertex.uniforms.add("verticalOffset","vec4"),c.screenSizePerspectiveEnabled&&(l.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ScreenSizePerspective"]),l.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${c.viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__["ViewingMode"].Global?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 worldNormal = normalize(worldPos + localOrigin);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${c.screenSizePerspectiveEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function c(e,r,t){if(!r.verticalOffset)return;const l=i(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),c=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*c,l.perDistance,l.minWorldLength,l.maxWorldLength)}function i(e,r,t,l=o){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}const o={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};


/***/ }),

/***/ "F8o4":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js ***!
  \*******************************************************************************************/
/*! exports provided: Offset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offset", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}


/***/ }),

/***/ "Hizz":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js ***!
  \************************************************************************/
/*! exports provided: Texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return v; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "LbAs");
/* harmony import */ var _support_requestUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../support/requestUtils.js */ "Ioo4");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basicInterfaces.js */ "t8JS");
/* harmony import */ var _BasisUtil_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BasisUtil.js */ "wV01");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ContentObjectType.js */ "J2V/");
/* harmony import */ var _DDSUtil_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DDSUtil.js */ "ekr9");
/* harmony import */ var _glUtil3D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./glUtil3D.js */ "1ff1");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../webgl/Util.js */ "hTmG");
/* harmony import */ var _webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../webgl/capabilities/isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class v extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_12__["ContentObject"]{constructor(t,e){super(),this.data=t,this.type=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_13__["ContentObjectType"].Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureWrapMode"].REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureWrapMode"].REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["PowerOfTwoResizeMode"].STRETCH,this.estimatedTexMemRequired=v._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const t=this.data;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t)||(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["isBlobProtocol"])(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src)}_startPreloadImageElement(t){Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["isDataProtocol"])(t.src)||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["isBlobProtocol"])(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}static _getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static _estimateTexMemRequired(t,e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t))return 0;if(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(t)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(t))return e.encoding===v.KTX2_ENCODING?Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_11__["estimateMemoryKTX2"])(t,e.mipmap):e.encoding===v.BASIS_ENCODING?Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_11__["estimateMemoryBasis"])(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?v._getDataDimensions(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(t){var e;return{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureType"].TEXTURE_2D,pixelFormat:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelFormat"].RGBA,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelType"].UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureSamplingMode"].LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureSamplingMode"].LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(e=this.params.maxAnisotropy)?e:this.params.mipmap?t.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(t,e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._glTexture))return this._glTexture;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._loadingPromise))return this._loadingPromise;const r=this.data;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(r)?(this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](t,this._createDescriptor(t),null),this._glTexture):"string"==typeof r?this._loadFromURL(t,e,r):r instanceof Image?this._loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r,e):(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r))&&this.params.encoding===v.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(t,r)):(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r))&&this.params.encoding===v.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(t,r)):(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r))&&this.params.encoding===v.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(t,r)):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r)?this._loadFromPixelData(t,r):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)?this._loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this.data instanceof HTMLVideoElement)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(this._glTexture))return r;if(this.data.readyState<L.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this.data),this._drawStretchedTexture(t,e,r,i,s,this._glTexture)}else{const{width:t,height:e}=this.data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(t,e){return this._glTexture=Object(_DDSUtil_js__WEBPACK_IMPORTED_MODULE_14__["createDDSTexture"])(t,this._createDescriptor(t),e),this._glTexture}_loadFromKTX2(t,e){return this._loadAsync((()=>Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_11__["createTextureKTX2"])(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromBasis(t,e){return this._loadAsync((()=>Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_11__["createTextureBasis"])(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromPixelData(t,e){Object(_Util_js__WEBPACK_IMPORTED_MODULE_16__["assert"])(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(t);return r.pixelFormat=1===this.params.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelFormat"].LUMINANCE:3===this.params.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelFormat"].RGB:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelFormat"].RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](t,r,e),this._glTexture}_loadFromURL(t,e,r){return this._loadAsync((async i=>{const s=await Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_8__["requestImage"])(r,{signal:i});return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAborted"])(i),this._loadFromImage(t,s,e)}))}_loadFromImageElement(t,e,r){return r.complete?this._loadFromImage(t,r,e):this._loadAsync((async i=>{const s=await Object(_support_requestUtils_js__WEBPACK_IMPORTED_MODULE_9__["loadImageAsync"])(r,r.src,!1,i);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAborted"])(i),this._loadFromImage(t,s,e)}))}_loadFromVideoElement(t,e,r){return r.readyState>=L.HAVE_CURRENT_DATA?this._loadFromImage(t,r,e):this._loadFromVideoElementAsync(t,e,r)}_loadFromVideoElementAsync(t,r,i){return this._loadAsync((s=>new Promise(((a,o)=>{const m=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["removeMaybe"])(_)},p=()=>{i.readyState>=L.HAVE_CURRENT_DATA&&(m(),a(this._loadFromImage(t,i,r)))},d=t=>{m(),o(t||new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Failed to load video"))};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const _=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["onAbort"])(s,(()=>d(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortError"])())))}))))}_loadFromImage(t,e,r){const s=v._getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this._createDescriptor(t);return a.pixelFormat=3===this.params.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelFormat"].RGB:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelFormat"].RGBA,!this._requiresPowerOfTwo(t,a)||Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(s.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](t,a,e),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}_loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(t,e){const r=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureWrapMode"].CLAMP_TO_EDGE,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return!Object(_webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_21__["default"])(t.gl)&&(e.hasMipmap||!i)}_makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:m}=i,h=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["nextHighestPowerOfTwo"])(n),l=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["nextHighestPowerOfTwo"])(m);let p;switch(a.width=h,a.height=l,this.params.powerOfTwoResizeMode){case _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["PowerOfTwoResizeMode"].PAD:a.textureCoordinateScaleFactor=[n/h,m/l],p=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](e,a),p.updateData(0,0,0,n,m,r);break;case _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["PowerOfTwoResizeMode"].STRETCH:case null:case void 0:p=this._stretchToPowerOfTwo(e,r,a,o());break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&p.generateMipmap(),p}_stretchToPowerOfTwo(t,e,r,i){const s=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](t,r),a=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_18__["FramebufferObject"](t,{colorTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TargetType"].TEXTURE,depthStencilTarget:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["DepthStencilTargetType"].NONE},s),o=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](t,{target:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureType"].TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PixelType"].UNSIGNED_BYTE,wrapMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureWrapMode"].CLAMP_TO_EDGE,samplingMode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["TextureSamplingMode"].LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=Object(_glUtil3D_js__WEBPACK_IMPORTED_MODULE_15__["createQuadVAO"])(t),m=t.getBoundFramebufferObject();return this._drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(m),s}_drawStretchedTexture(t,e,r,i,s,a){t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=t.useTechnique(e);n.setUniform4f("uColor",1,1,1,1),n.bindTexture(s,"tex"),t.bindVAO(i),t.drawArrays(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__["PrimitiveType"].TRIANGLE_STRIP,0,Object(_webgl_Util_js__WEBPACK_IMPORTED_MODULE_20__["vertexCount"])(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height)}unload(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}var L;v.DDS_ENCODING="image/vnd-ms.dds",v.KTX2_ENCODING="image/ktx2",v.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(L||(L={}));


/***/ }),

/***/ "IvV4":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js ***!
  \**************************************************************************/
/*! exports provided: createTextureResources, load, processLoadResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureResources", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processLoadResult", function() { return M; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/asyncUtils.js */ "eSsm");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/Version.js */ "VJrH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "LbAs");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl-engine/lib/basicInterfaces.js */ "t8JS");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "Ango");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "Hizz");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "262w");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const b=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function w(e,t){const r=await h(e,t);return{resource:r,textures:await P(r.textureDefinitions,t)}}async function h(r,n){const i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(n)&&n.streamDataRequester;if(i)return v(r,i,n);const u=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__["result"])(Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(n)));if(!0===u.ok)return u.value.data;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAbortError"])(u.error),j(u.error)}async function v(e,r,n){const a=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__["result"])(r.request(e,"json",n));if(!0===a.ok)return a.value;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAbortError"])(a.error),j(a.error.details.url)}function j(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("",`Request for object resource failed: ${e}`)}function A(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(b.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(b.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(b.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(b.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else b.warn("Indexed geometries must specify faces"),n=!1;break}default:b.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(b.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(b.warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function M(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=_core_Version_js__WEBPACK_IMPORTED_MODULE_6__["Version"].parse(l.version||"1.0","wosr");k.validate(c);const p=l.model.name,f=l.model.geometries,x=l.materialDefinitions,b=e.textures;let w=0;const h=new Map;for(let i=0;i<f.length;i++){const e=f[i];if(!A(e))continue;const l=T(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const v=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)v.push([e,new Uint32Array(t[e].values)])}const j=b&&b[l.texture];if(j&&!h.has(l.texture)){const{image:e,params:t}=j,r=new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_12__["Texture"](e,t);o.push(r),h.set(l.texture,r)}const M=h.get(l.texture),U=M?M.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?I(j.alphaChannelUsage):void 0,i={ambient:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(e.diffuse),diffuse:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:U,initTextureTransparent:!0,doubleSided:!0,cullFace:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["CullFaceOptions"].None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["DefaultMaterial"](i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P}n.push(P);const k=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_11__["Geometry"](p,v);w+=v.position?v.position.length:0,r.push(k)}return{name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:U(r),numberOfVertices:w,lodThreshold:null}}function U(e){const t=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["empty"])();return e.forEach((e=>{const r=e.boundingInfo;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(r)&&(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(t,r.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(t,r.getBBMax()))})),t}async function P(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){b.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureWrapMode"].REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_14__["TextureWrapMode"].REPEAT},preMultiplyAlpha:I(l)!==_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["AlphaDiscardMode"].Opaque},m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(t)&&t.disableTextures?Promise.resolve(null):Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__["requestImage"])(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))))}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function I(e){switch(e){case"mask":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["AlphaDiscardMode"].Mask;case"maskAndTransparency":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["AlphaDiscardMode"].MaskBlend;case"none":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["AlphaDiscardMode"].Opaque;default:return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_10__["AlphaDiscardMode"].Blend}}function T(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const k=new _core_Version_js__WEBPACK_IMPORTED_MODULE_6__["Version"](1,2,"wosr");


/***/ }),

/***/ "J1lp":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: AnalyticalSkyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticalSkyModel", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t){const a=t.fragment.code;a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}


/***/ }),

/***/ "J2V/":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js ***!
  \**********************************************************************************/
/*! exports provided: ContentObjectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObjectType", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(e||(e={}));


/***/ }),

/***/ "KQYO":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js ***!
  \********************************************************************************************************************/
/*! exports provided: EvaluateAmbientLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateAmbientLighting", function() { return t; });
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t,e){const a=t.fragment,m=void 0!==e.lightingSphericalHarmonicsOrder?e.lightingSphericalHarmonicsOrder:2;0===m?(a.uniforms.add("lightingAmbientSH0","vec3"),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===m?(a.uniforms.add("lightingAmbientSH_R","vec4"),a.uniforms.add("lightingAmbientSH_G","vec4"),a.uniforms.add("lightingAmbientSH_B","vec4"),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===m&&(a.uniforms.add("lightingAmbientSH0","vec3"),a.uniforms.add("lightingAmbientSH_R1","vec4"),a.uniforms.add("lightingAmbientSH_G1","vec4"),a.uniforms.add("lightingAmbientSH_B1","vec4"),a.uniforms.add("lightingAmbientSH_R2","vec4"),a.uniforms.add("lightingAmbientSH_G2","vec4"),a.uniforms.add("lightingAmbientSH_B2","vec4"),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_0__["PBRMode"].Normal&&e.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_0__["PBRMode"].Schematic||a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}


/***/ }),

/***/ "L5gG":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: ScreenSizePerspective, bindScreenSizePerspectiveUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSizePerspective", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindScreenSizePerspectiveUniforms", function() { return c; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../materials/internal/MaterialUtil.js */ "fFEv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(a){a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function c(e,r){if(r.screenSizePerspective){Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(r.screenSizePerspective,e,"screenSizePerspective");const c=r.screenSizePerspectiveAlignment||r.screenSizePerspective;Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(c,e,"screenSizePerspectiveAlignment")}}


/***/ }),

/***/ "NbNv":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js ***!
  \*************************************************************************/
/*! exports provided: DefaultMaterialParameters, Material, RenderOccludedFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialParameters", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderOccludedFlag", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentObjectType.js */ "J2V/");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "fFEv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class n extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_1__["ContentObject"]{constructor(e,r){super(),this.type=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_2__["ContentObjectType"].Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_3__["Default3D"],this._parameters=Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__["copyParameters"])(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__["updateParameters"])(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.repository)&&this.repository.materialChanged(this)}}var d;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(d||(d={}));const h={renderOccluded:d.Occlude};


/***/ }),

/***/ "NiZE":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: MixExternalColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixExternalColor", function() { return i; });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/symbolColorUtils.js */ "yvHm");
/* harmony import */ var _ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorConversion.glsl.js */ "Q3fD");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function i(i){i.include(_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ColorConversion"]),i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Multiply)}) {
        return allMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}


/***/ }),

/***/ "OIYi":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js ***!
  \******************************************************************************************/
/*! exports provided: glsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glsl", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o}(t||(t={}));


/***/ }),

/***/ "OjWZ":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/Axis.js ***!
  \************************************************************/
/*! exports provided: Axis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var n;!function(n){n[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z"}(n||(n={}));


/***/ }),

/***/ "Pz5D":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js ***!
  \**************************************************************************/
/*! exports provided: VertexElementDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexElementDescriptor", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,h,o,e=!1,r=0){this.name=t,this.count=s,this.type=i,this.offset=h,this.stride=o,this.normalized=e,this.divisor=r}}


/***/ }),

/***/ "Q3fD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: ColorConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorConversion", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}


/***/ }),

/***/ "R/jG":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec3f32.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const e=new Float32Array(3);return e[0]=n,e[1]=r,e[2]=t,e}function e(n,r){return new Float32Array(n,r,3)}function a(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=a(),f=o(),l=u(),_=s(),w=c(),y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e,zeros:a,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});


/***/ }),

/***/ "SbiP":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ "TJZZ":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec33.js ***!
  \***************************************************/
/*! exports provided: c, f, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],l+=f,c+=r}function t(e,t,n,d,f){var o,r;const u=e.typedBuffer,l=e.typedBufferStride,c=null!=(o=null==f?void 0:f.count)?o:e.count;let s=(null!=(r=null==f?void 0:f.dstIndex)?r:0)*l;for(let p=0;p<c;++p)u[s]=t,u[s+1]=n,u[s+2]=d,s+=l}const n=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ "Tbkp":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js ***!
  \**********************************************************************************************/
/*! exports provided: Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(r,o){const t={hasModelTransformation:!1,...o};if(t.hasModelTransformation)return t.linearDepth?void r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.linearDepth?r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}


/***/ }),

/***/ "UBvB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: RgbaFloatEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RgbaFloatEncoding", function() { return a; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a(a){a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}


/***/ }),

/***/ "UhFW":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: TextureAtlasLookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureAtlasLookup", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}


/***/ }),

/***/ "WHaQ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js ***!
  \*************************************************************************************************************************/
/*! exports provided: DecodeSymbolColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeSymbolColor", function() { return e; });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../layers/support/symbolColorUtils.js */ "yvHm");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__["ColorMixModeEnum"].Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}


/***/ }),

/***/ "WVfK":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js ***!
  \*************************************************************************************************/
/*! exports provided: writeBufferFloat, writeBufferMat3f, writeBufferMat4f, writeBufferVec2, writeBufferVec3, writeBufferVec4, writeColor, writeDefaultAttributes, writeNormal, writePosition, writeTangent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferFloat", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferMat3f", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferMat4f", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec2", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec3", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec4", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeColor", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeDefaultAttributes", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeNormal", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writePosition", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeTangent", function() { return y; });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function i(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c)s[o]=e[t[c]],o+=n;else for(let c=0;c<i;++c){const f=e[t[c]];for(let t=0;t<r;t++)s[o]=f,o+=n}}function c(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s}}function l(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}}function d(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}}function u(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=9*t[i];for(let t=0;t<9;++t)r[o+t]=e[f+t];o+=s}}function a(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=16*t[i];for(let t=0;t<16;++t)r[o+t]=e[f+t];o+=s}}function p(t,e,f,o,r,s=1){if(!f)return void l(t,e,o,r,s);const n=o.typedBuffer,i=o.typedBufferStride,c=t.length,d=f[0],u=f[1],a=f[2],p=f[4],B=f[5],y=f[6],g=f[8],h=f[9],S=f[10],b=f[12],m=f[13],z=f[14];if(r*=i,1===s)for(let l=0;l<c;++l){const f=3*t[l],o=e[f],s=e[f+1],c=e[f+2];n[r]=d*o+p*s+g*c+b,n[r+1]=u*o+B*s+h*c+m,n[r+2]=a*o+y*s+S*c+z,r+=i}else for(let l=0;l<c;++l){const f=3*t[l],o=e[f],c=e[f+1],O=e[f+2],k=d*o+p*c+g*O+b,F=u*o+B*c+h*O+m,M=a*o+y*c+S*O+z;for(let t=0;t<s;++t)n[r]=k,n[r+1]=F,n[r+2]=M,r+=i}}function B(e,f,o,r,s,n=1){if(!o)return void l(e,f,r,s,n);const i=o,c=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],B=i[2],y=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["p"])(i),O=1e-6,k=1-O;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let l=a*r+y*n+S*i,u=p*r+g*n+b*i,F=B*r+h*n+m*i;if(z){const t=l*l+u*u+F*F;if(t<k&&t>O){const e=1/Math.sqrt(t);l*=e,u*=e,F*=e}}c[s+0]=l,c[s+1]=u,c[s+2]=F,s+=d}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],l=f[o+2];let u=a*r+y*i+S*l,F=p*r+g*i+b*l,M=B*r+h*i+m*l;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e}}for(let t=0;t<n;++t)c[s+0]=u,c[s+1]=F,c[s+2]=M,s+=d}}function y(e,f,o,r,s,n=1){if(!o)return void d(e,f,r,s,n);const i=o,c=r.typedBuffer,l=r.typedBufferStride,u=e.length,a=i[0],p=i[1],B=i[2],y=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["p"])(i),O=1e-6,k=1-O;if(s*=l,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],d=f[o+3];let u=a*r+y*n+S*i,F=p*r+g*n+b*i,M=B*r+h*n+m*i;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e}}c[s+0]=u,c[s+1]=F,c[s+2]=M,c[s+3]=d,s+=l}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],d=f[o+2],u=f[o+3];let F=a*r+y*i+S*d,M=p*r+g*i+b*d,N=B*r+h*i+m*d;if(z){const t=F*F+M*M+N*N;if(t<k&&t>O){const e=1/Math.sqrt(t);F*=e,M*=e,N*=e}}for(let t=0;t<n;++t)c[s+0]=F,c[s+1]=M,c[s+2]=N,c[s+3]=u,s+=l}}function g(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}function h(t,i,l,d,u,a){for(const h of i.fieldNames){const i=t.vertexAttributes.get(h),S=t.indices.get(h);if(i&&S)switch(h){case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__["VertexAttribute"].POSITION:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size);const t=u.getField(h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec3f"]);t&&p(S,i.data,l,t,a);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__["VertexAttribute"].NORMAL:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size);const t=u.getField(h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec3f"]);t&&B(S,i.data,d,t,a);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__["VertexAttribute"].UV0:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(2===i.size);const t=u.getField(h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec2f"]);t&&c(S,i.data,t,a);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__["VertexAttribute"].COLOR:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size||4===i.size);const t=u.getField(h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec4u8"]);t&&g(S,i.data,i.size,t,a);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__["VertexAttribute"].SYMBOLCOLOR:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size||4===i.size);const t=u.getField(h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec4u8"]);t&&g(S,i.data,i.size,t,a);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__["VertexAttribute"].TANGENT:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(4===i.size);const t=u.getField(h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec4f"]);t&&y(S,i.data,d,t,a);break}}}}


/***/ }),

/***/ "XV/G":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: PhysicallyBasedRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRendering", function() { return n; });
/* harmony import */ var _AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticalSkyModel.glsl.js */ "J1lp");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "xRv2");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(n,r){const l=n.fragment.code;n.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__["PiUtils"]),r.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PBRMode"].Water||r.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PBRMode"].WaterOnIntegratedMesh?(l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${r.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PBRMode"].Normal&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PBRMode"].Schematic||(n.include(_AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__["AnalyticalSkyModel"]),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}


/***/ }),

/***/ "ZBV1":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/math/common.js ***!
  \**************************************************************************/
/*! exports provided: mathLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathLogger", function() { return e; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ "ZS5L":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DecodeNormal.glsl.js ***!
  \******************************************************************************************************/
/*! exports provided: DecodeNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeNormal", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(o){const d=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d)}


/***/ }),

/***/ "ZotJ":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec32.js ***!
  \***************************************************/
/*! exports provided: a, b, n, s, t, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return u; });
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ "ZBV1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,f,r){if(e.count!==f.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["mathLogger"].error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[4],c=r[5],i=r[6],a=r[8],p=r[9],y=r[10],B=r[12],m=r[13],h=r[14],l=e.typedBuffer,S=e.typedBufferStride,b=f.typedBuffer,M=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*S,f=t*M,r=b[f],o=b[f+1],v=b[f+2];l[e]=n*r+s*o+a*v+B,l[e+1]=u*r+c*o+p*v+m,l[e+2]=d*r+i*o+y*v+h}}function f(e,f,r){if(e.count!==f.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["mathLogger"].error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[3],c=r[4],i=r[5],a=r[6],p=r[7],y=r[8],B=e.typedBuffer,m=e.typedBufferStride,h=f.typedBuffer,l=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*m,f=t*l,r=h[f],o=h[f+1],S=h[f+2];B[e]=n*r+s*o+a*S,B[e+1]=u*r+c*o+p*S,B[e+2]=d*r+i*o+y*S}}function r(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=f*u[e],o[t+1]=f*u[e+1],o[t+2]=f*u[e+2]}}function o(t,e){const f=Math.min(t.count,e.count),r=t.typedBuffer,o=t.typedBufferStride,n=e.typedBuffer,u=e.typedBufferStride;for(let d=0;d<f;d++){const t=d*o,e=d*u,f=n[e],s=n[e+1],c=n[e+2],i=Math.sqrt(f*f+s*s+c*c);if(i>0){const e=1/i;r[t]=e*f,r[t+1]=e*s,r[t+2]=e*c}}}function n(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=u[e]>>f,o[t+1]=u[e+1]>>f,o[t+2]=u[e+2]>>f}}const u=Object.freeze({__proto__:null,transformMat4:e,transformMat3:f,scale:r,normalize:o,shiftRight:n});


/***/ }),

/***/ "aK8v":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialTexture.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicInterfaces.js */ "t8JS");
/* harmony import */ var _GLMaterial_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLMaterial.js */ "1/dN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class o extends _GLMaterial_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t))}dispose(){this._texture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._texture),this._textureNormal=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureNormal),this._textureEmissive=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureEmissive),this._textureOcclusion=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureOcclusion),this._textureMetallicRoughness=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return 0===this._numLoading?_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_2__["ResourceState"].LOADED:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_2__["ResourceState"].LOADING}updateTexture(i){(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._texture)||i!==this._texture.id)&&(this._texture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._texture),this._textureId=i,this._acquire(this._textureId,(t=>this._texture=t)))}bindTextures(t){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture)&&t.bindTexture(this._texture.glTexture,"tex"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureNormal)&&t.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureEmissive)&&t.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureOcclusion)&&t.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureMetallicRoughness)&&t.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(t){const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture)?this._texture.glTexture:null;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&e.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",e.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(i,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i))return void s(null);const u=this._textureRepository.acquire(i);if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPromiseLike"])(u))return++this._numLoading,void u.then((e=>{if(this._disposed)return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(e),void s(null);s(e)})).finally((()=>--this._numLoading));s(u)}}


/***/ }),

/***/ "aQrP":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js ***!
  \*********************************************************************************************/
/*! exports provided: Code, Includes, ShaderBuilder, Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Includes", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderBuilder", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return o; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class r{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&t.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class n extends r{constructor(){super(...arguments),this.vertex=new o,this.fragment=new o,this.attributes=new a,this.varyings=new c,this.extensions=new u,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?_:m,c=this.constants.generateSource().concat(s.constants.generateSource());return`\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}}class s{constructor(){this._entries=new Map}add(e,t,r){const n=`${e}_${t}_${r}`;return this._entries.set(n,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class i{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class o extends r{constructor(){super(...arguments),this.uniforms=new s,this.code=new i,this.constants=new h}get builder(){return this}}class a{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h._numberToFloatStr(r);break;case"int":n=h._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h._numberToFloatStr(r[0])},                            ${h._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h._numberToFloatStr(r[0])},                            ${h._numberToFloatStr(r[1])},                            ${h._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h._numberToFloatStr(r[0])},                            ${h._numberToFloatStr(r[1])},                            ${h._numberToFloatStr(r[2])},                            ${h._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h._numberToIntStr(r[0])},                             ${h._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h._numberToIntStr(r[0])},                             ${h._numberToIntStr(r[1])},                             ${h._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h._numberToIntStr(r[0])},                             ${h._numberToIntStr(r[1])},                             ${h._numberToIntStr(r[2])},                             ${h._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h._numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",_="precision highp float;\nprecision highp sampler2D;";


/***/ }),

/***/ "agdK":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: OutputHighlight, bindOutputHighlight, occludedHighlightFlag, unoccludedHighlightFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputHighlight", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindOutputHighlight", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "occludedHighlightFlag", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unoccludedHighlightFlag", function() { return o; });
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1,1,0,1),o=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1,0,1,1);function r(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",t).add("unoccludedHighlightFlag","vec4",o),e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function g(e,i){e.bindTexture(i.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1])}


/***/ }),

/***/ "aiF/":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: DoublePrecision, doublePrecisionRequiresObfuscation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoublePrecision", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doublePrecisionRequiresObfuscation", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function i({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function r(c){return!!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("force-double-precision-obfuscation")||c.driverTest.doublePrecisionRequiresObfuscation}


/***/ }),

/***/ "b5HO":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js ***!
  \*******************************************************************************************/
/*! exports provided: RealisticTreeTechnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealisticTreeTechnique", function() { return u; });
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/RealisticTree.glsl.js */ "sKsC");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "qrV2");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "t8JS");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DefaultMaterialTechnique.js */ "4csu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class u extends _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_10__["DefaultMaterialTechnique"]{initializeProgram(s){const a=u.shader.get(),d=this.configuration,b=a.build({oitEnabled:d.transparencyPassType===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__["TransparencyPassType"].Color,output:d.output,viewingMode:s.viewingMode,receiveShadows:d.receiveShadows,slicePlaneEnabled:d.slicePlaneEnabled,sliceHighlightDisabled:d.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:d.symbolColors,vvSize:d.vvSize,vvColor:d.vvColor,vvInstancingEnabled:!0,instanced:d.instanced,instancedColor:d.instancedColor,instancedDoublePrecision:d.instancedDoublePrecision,pbrMode:d.usePBR?_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__["PBRMode"].Normal:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__["PBRMode"].Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:d.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:d.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__["NormalAttributeType"].Attribute,doubleSidedMode:_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_3__["NormalsDoubleSidedMode"].WindingOrder,vertexTangents:!1,attributeTextureCoordinates:d.hasColorTexture?_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["TextureCoordinateAttributeType"].Default:_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["TextureCoordinateAttributeType"].None,textureAlphaPremultiplied:d.textureAlphaPremultiplied,attributeColor:d.vertexColors,screenSizePerspectiveEnabled:d.screenSizePerspective,verticalOffsetEnabled:d.verticalOffset,offsetBackfaces:d.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__["doublePrecisionRequiresObfuscation"])(s.rctx),alphaDiscardMode:d.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:d.multipassTerrainEnabled,cullAboveGround:d.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_9__["Program"](s.rctx,b,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_8__["Default3D"])}}u.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_6__["ReloadableShaderModule"](_chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_2__["R"],(()=>__webpack_require__.e(/*! import() | core-shaderLibrary-default-RealisticTree-glsl-js */ "core-shaderLibrary-default-RealisticTree-glsl-js").then(__webpack_require__.bind(null, /*! ../core/shaderLibrary/default/RealisticTree.glsl.js */ "FmK6"))));


/***/ }),

/***/ "bLIi":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: SymbolColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolColor", function() { return l; });
/* harmony import */ var _collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collections/Component/Material/shader/DecodeSymbolColor.glsl.js */ "WHaQ");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function l(l,d){d.symbolColor?(l.include(_collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__["DecodeSymbolColor"]),l.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].SYMBOLCOLOR,"vec4"),l.varyings.add("colorMixMode","mediump float")):l.fragment.uniforms.add("colorMixMode","int"),d.symbolColor?l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}


/***/ }),

/***/ "bVvB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: VertexColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexColor", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,d){d.attributeColor?(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttribute"].COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}


/***/ }),

/***/ "cIib":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: EvaluateAmbientOcclusion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateAmbientOcclusion", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}


/***/ }),

/***/ "ekr9":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js ***!
  \************************************************************************/
/*! exports provided: createDDSTexture, createDDSTextureData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDDSTexture", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDDSTextureData", function() { return S; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),i=542327876,s=131072,l=4;function u(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function m(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c=u("DXT1"),h=u("DXT3"),p=u("DXT5"),d=31,g=0,f=1,C=2,w=3,D=4,_=7,T=20,A=21;function E(e,t,n){const{textureData:a,internalFormat:i,width:s,height:l}=S(n,t.hasMipmap);return t.samplingMode=a.levels.length>1?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["TextureSamplingMode"].LINEAR,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=l,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["Texture"](e,t,a)}function S(e,r){const o=new Int32Array(e,0,d);if(o[g]!==i)return a.error("Invalid magic number in DDS header"),null;if(!(o[T]&l))return a.error("Unsupported format, must contain a FourCC code"),null;const u=o[A];let E,S;switch(u){case c:E=8,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["CompressedTextureFormat"].COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h:E=16,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["CompressedTextureFormat"].COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case p:E=16,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["CompressedTextureFormat"].COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return a.error("Unsupported FourCC code:",m(u)),null}let M=1,R=o[D],x=o[w];0==(3&R)&&0==(3&x)||(a.warn("Rounding up compressed texture size to nearest multiple of 4."),R=R+3&-4,x=x+3&-4);const X=R,b=x;let I,v;o[C]&s&&!1!==r&&(M=Math.max(1,o[_])),1===M||Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(R)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(x)||(a.warn("Ignoring mipmaps of non power of two sized compressed texture."),M=1);let F=o[f]+4;const L=[];for(let t=0;t<M;++t)v=(R+3>>2)*(x+3>>2)*E,I=new Uint8Array(e,F,v),L.push(I),F+=v,R=Math.max(1,R>>1),x=Math.max(1,x>>1);return{textureData:{type:"compressed",levels:L},internalFormat:S,width:X,height:b}}


/***/ }),

/***/ "fA32":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/basisu/TextureFormat.js ***!
  \****************************************************************/
/*! exports provided: TextureFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureFormat", function() { return _; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var _;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(_||(_={}));


/***/ }),

/***/ "fDPZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js ***!
  \*******************************************************************************************/
/*! exports provided: Pos2, Pos2Tex, Pos3, Pos3Col, Pos3NormalTex, Pos3Tex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos2", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos2Tex", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3Col", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3NormalTex", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3Tex", function() { return w; });
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexAttribute.js */ "t73S");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const n=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,0,12)],w=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,0,20),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].UV0,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,12,20)],I=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,0,32),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].NORMAL,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,12,32),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].UV0,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,24,32)],r=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].POSITION,3,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,0,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].COLOR,4,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].UNSIGNED_BYTE,12,16)],t=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].POSITION,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,0,8)],A=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].POSITION,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,0,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__["VertexElementDescriptor"](_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__["VertexAttribute"].UV0,2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["DataType"].FLOAT,8,16)];


/***/ }),

/***/ "fFEv":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js ***!
  \********************************************************************************************/
/*! exports provided: bindScreenSizePerspective, colorMixModes, computeInvDir, computeNormal, copyParameters, intersectAabbInvDir, intersectAabbInvDirBefore, intersectDrapedRenderLineGeometry, intersectTriangleGeometry, intersectTriangles, updateParameters, verticalOffsetAtDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindScreenSizePerspective", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorMixModes", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeInvDir", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeNormal", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyParameters", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectAabbInvDir", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectAabbInvDirBefore", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectDrapedRenderLineGeometry", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectTriangleGeometry", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectTriangles", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParameters", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalOffsetAtDistance", function() { return P; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/basicInterfaces.js */ "t8JS");
/* harmony import */ var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/screenSizePerspectiveUtils.js */ "2hxh");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/VertexAttribute.js */ "t73S");
/* harmony import */ var _renderers_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../renderers/utils.js */ "tiP8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const d=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["create"])();function g(t,e,n,i,o,r,s){if(!Object(_renderers_utils_js__WEBPACK_IMPORTED_MODULE_9__["isInstanceHidden"])(e))if(t.boundingInfo){Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_7__["assert"])(t.primitiveType===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_5__["PrimitiveType"].Triangle);const e=n.tolerance;b(t.boundingInfo,i,o,e,r,s)}else{const e=t.indices.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__["VertexAttribute"].POSITION),n=t.vertexAttributes.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__["VertexAttribute"].POSITION);v(i,o,0,e.length/3,e,n,void 0,r,s)}}const x=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();function b(t,i,o,r,s,c){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))return;const l=A(i,o,x);if(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMin"])(d,t.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMax"])(d,t.getBBMax()),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)&&s.applyToAabb(d),O(d,i,l,r)){const{primitiveIndices:e,indices:n,position:f}=t,a=e?e.length:n.length/3;if(a>z){const e=t.getChildren();if(void 0!==e){for(let t=0;t<8;++t)void 0!==e[t]&&b(e[t],i,o,r,s,c);return}}v(i,o,0,a,n,f,e,s,c)}}const M=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();function v(t,e,i,o,r,s,c,f,a){if(c)return y(t,e,i,o,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=e[0]-m,g=e[1]-p,x=e[2]-h;for(let b=i,v=3*i;b<o;++b){let t=u*r[v++],e=l[t++],i=l[t++],o=l[t];t=u*r[v++];let s=l[t++],c=l[t++],y=l[t];t=u*r[v++];let I=l[t++],T=l[t++],A=l[t];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(f)&&([e,i,o]=f.applyToVertex(e,i,o,b),[s,c,y]=f.applyToVertex(s,c,y,b),[I,T,A]=f.applyToVertex(I,T,A,b));const O=s-e,N=c-i,P=y-o,S=I-e,V=T-i,L=A-o,B=g*L-V*x,E=x*S-L*d,U=d*V-S*g,z=O*B+N*E+P*U;if(Math.abs(z)<=Number.EPSILON)continue;const W=m-e,k=p-i,R=h-o,C=W*B+k*E+R*U;if(z>0){if(C<0||C>z)continue}else if(C>0||C<z)continue;const H=k*P-N*R,X=R*O-P*W,Y=W*N-O*k,Z=d*H+g*X+x*Y;if(z>0){if(Z<0||C+Z>z)continue}else if(Z>0||C+Z<z)continue;const _=(S*H+V*X+L*Y)/z;if(_>=0){a(_,j(O,N,P,S,V,L,M),b,!1)}}}function y(t,e,i,o,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=e[0]-m,g=e[1]-p,x=e[2]-h;for(let b=i;b<o;++b){const t=c[b];let e=3*t,i=u*r[e++],o=l[i++],s=l[i++],v=l[i];i=u*r[e++];let y=l[i++],I=l[i++],T=l[i];i=u*r[e];let A=l[i++],O=l[i++],N=l[i];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(f)&&([o,s,v]=f.applyToVertex(o,s,v,b),[y,I,T]=f.applyToVertex(y,I,T,b),[A,O,N]=f.applyToVertex(A,O,N,b));const P=y-o,S=I-s,V=T-v,L=A-o,B=O-s,E=N-v,U=g*E-B*x,z=x*L-E*d,W=d*B-L*g,k=P*U+S*z+V*W;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-o,C=p-s,H=h-v,X=R*U+C*z+H*W;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*V-S*H,Z=H*P-V*R,_=R*S-P*C,q=d*Y+g*Z+x*_;if(k>0){if(q<0||X+q>k)continue}else if(q>0||X+q<k)continue;const w=(L*Y+B*Z+E*_)/k;if(w>=0){a(w,j(P,S,V,L,B,E,M),t,!1)}}}const I=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),T=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();function j(t,e,n,s,c,f,a){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(I,t,e,n),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(T,s,c,f),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(a,I,T),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(a,a),a}function A(t,e,n){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(n,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function O(t,e,n,i){return N(t,e,n,i,1/0)}function N(t,e,n,i,o){const r=(t[0]-i-e[0])*n[0],s=(t[3]+i-e[0])*n[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-i-e[1])*n[1],l=(t[4]+i-e[1])*n[1];if(f=Math.min(f,Math.max(a,l)),f<0)return!1;if(c=Math.max(c,Math.min(a,l)),c>f)return!1;const u=(t[2]-i-e[2])*n[2],m=(t[5]+i-e[2])*n[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<o)}function P(e,n,i,o,r){let s=(i.screenLength||0)*e.pixelRatio;r&&(s=Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_6__["scale"])(s,o,n,r));const c=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(c*n,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function S(t,e,n){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;e.setUniform4f(n,i.divisor,i.offset,i.minPixelSize,o)}function V(t,e){const n=e?V(e):{};for(const i in t){let e=t[i];e&&e.forEach&&(e=E(e)),null==e&&i in n||(n[i]=e)}return n}function L(t,e){let n=!1;for(const i in e){const o=e[i];void 0!==o&&(n=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o)}return n}function B(e,n,i,o,r,s){if(!n.options.selectionMode)return;const c=e.vertexAttributes.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__["VertexAttribute"].POSITION).data,f=e.vertexAttributes.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__["VertexAttribute"].SIZE),a=f&&f.data[0],l=o[0],u=o[1],m=((a+r)/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE,d=0;for(let p=0;p<c.length-5;p+=3){const e=c[p],n=c[p+1],i=l-e,o=u-n,r=c[p+3]-e,s=c[p+4]-n,f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])((r*i+s*o)/(r*r+s*s),0,1),a=r*f-i,m=s*f-o,g=a*a+m*m;g<h&&(h=g,d=p/3)}h<m*m&&s(i.dist,i.normal,d,!1)}function E(t){const e=[];return t.forEach((t=>e.push(t))),e}const U={multiply:1,ignore:2,replace:3,tint:4},z=1e3;


/***/ }),

/***/ "fLTx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js ***!
  \************************************************************************************************************************/
/*! exports provided: VertexTextureCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexTextureCoordinates", function() { return u; });
/* harmony import */ var _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/TextureAtlasLookup.glsl.js */ "UhFW");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function u(u,o){u.include(_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__["TextureCoordinateAttribute"],o),u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
  struct TextureLookupParameter {
    vec2 uv;
    ${o.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),o.attributeTextureCoordinates===_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__["TextureCoordinateAttributeType"].Default&&u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),o.attributeTextureCoordinates===_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__["TextureCoordinateAttributeType"].Atlas&&(u.include(_util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_1__["TextureAtlasLookup"]),u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}


/***/ }),

/***/ "fRF2":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: VertexNormal, bindVertexNormalUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexNormal", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVertexNormalUniforms", function() { return d; });
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ViewingMode.js */ "PJys");
/* harmony import */ var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VertexPosition.glsl.js */ "vEBI");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function m(m,d){d.normalType===_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["NormalAttributeType"].Attribute||d.normalType===_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["NormalAttributeType"].CompressedAttribute?(m.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["NormalAttribute"],d),m.varyings.add("vNormalWorld","vec3"),m.varyings.add("vNormalView","vec3"),m.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),m.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),m.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):d.normalType===_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["NormalAttributeType"].Ground?(m.include(_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__["VertexPosition"],d),m.varyings.add("vNormalWorld","vec3"),m.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    void forwardNormal() {
      vNormalWorld = ${d.viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__["ViewingMode"].Global?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`normalize(vPositionWorldCameraRelative);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`vec3(0.0, 0.0, 1.0);`}
    }
    `)):m.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`void forwardNormal() {}`)}function d(o,r){o.setUniformMatrix4fv("viewNormal",r)}


/***/ }),

/***/ "fiGu":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js ***!
  \***************************************************************************************************************************/
/*! exports provided: DefaultMaterialAuxiliaryPasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialAuxiliaryPasses", function() { return p; });
/* harmony import */ var _ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Slice.glsl.js */ "0nJL");
/* harmony import */ var _Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Transform.glsl.js */ "Tbkp");
/* harmony import */ var _attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../attributes/VertexNormal.glsl.js */ "fRF2");
/* harmony import */ var _output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../output/OutputDepth.glsl.js */ "wtEh");
/* harmony import */ var _output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function p(p,v){const c=p.vertex.code,f=p.fragment.code,g=v.hasModelTransformation;v.output!==_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Depth&&v.output!==_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Shadow||(p.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Transform"],{linearDepth:!0,hasModelTransformation:g}),p.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__["TextureCoordinateAttribute"],v),p.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_8__["VisualVariables"],v),p.include(_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__["OutputDepth"],v),p.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Slice"],v),p.vertex.uniforms.add("nearFar","vec2"),p.varyings.add("depth","float"),v.hasColorTexture&&p.fragment.uniforms.add("tex","sampler2D"),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${g?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),p.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["DiscardOrAdjustAlpha"],v),f.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
      void main(void) {
        discardBySlice(vpos);
        ${v.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),v.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Normal&&(p.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Transform"],{linearDepth:!1,hasModelTransformation:g}),p.include(_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["NormalAttribute"],v),p.include(_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_5__["VertexNormal"],v),p.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__["TextureCoordinateAttribute"],v),p.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_8__["VisualVariables"],v),v.hasColorTexture&&p.fragment.uniforms.add("tex","sampler2D"),p.vertex.uniforms.add("viewNormal","mat4"),p.varyings.add("vPositionView","vec3"),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${v.normalType===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["NormalAttributeType"].Attribute?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${g?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),p.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Slice"],v),p.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["DiscardOrAdjustAlpha"],v),f.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${v.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${v.normalType===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["NormalAttributeType"].ScreenDerivative?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
            vec3 normal = screenDerivativeNormal(vPositionView);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),v.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Highlight&&(p.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Transform"],{linearDepth:!1,hasModelTransformation:g}),p.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__["TextureCoordinateAttribute"],v),p.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_8__["VisualVariables"],v),v.hasColorTexture&&p.fragment.uniforms.add("tex","sampler2D"),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${g?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),p.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Slice"],v),p.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["DiscardOrAdjustAlpha"],v),p.include(_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_7__["OutputHighlight"]),f.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${v.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}


/***/ }),

/***/ "h7dw":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js ***!
  \*****************************************************************************/
/*! exports provided: depthCompareAlways, depthCompareLess, renderWhenBitIsNotSet, replaceBitWhenDepthTestPasses, stencilBaseAllZerosParams, stencilToolMaskBaseParams, stencilToolMaskOccluderParams, stencilToolTransparentOccluderParams, stencilWriteMaskOff, stencilWriteMaskOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthCompareAlways", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthCompareLess", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWhenBitIsNotSet", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceBitWhenDepthTestPasses", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilBaseAllZerosParams", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolMaskBaseParams", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolMaskOccluderParams", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolTransparentOccluderParams", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOff", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOn", function() { return e; });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInterfaces.js */ "t8JS");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const i={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].LESS},s={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].ALWAYS},e={mask:255},l={mask:0},t=a=>({function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].NOTEQUAL,ref:a,mask:a},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP}}),u=a=>({function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].ALWAYS,ref:a,mask:a},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].REPLACE}}),f={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].ZERO}},o={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].REPLACE}},P={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].EQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP}},m={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["CompareFunction"].NOTEQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__["StencilBits"].OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["StencilOperation"].KEEP}};


/***/ }),

/***/ "ib+T":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js ***!
  \************************************************************************************/
/*! exports provided: I3SVerticalOffsetGlobalViewingMode, IntersectorTransform, Object3DVerticalOffsetGlobalViewingMode, TERRAIN_ID, TerrainVerticalOffsetGlobalViewingMode, getVerticalOffsetI3S, getVerticalOffsetObject3D, getVerticalOffsetTerrain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SVerticalOffsetGlobalViewingMode", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectorTransform", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3DVerticalOffsetGlobalViewingMode", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERRAIN_ID", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainVerticalOffsetGlobalViewingMode", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetI3S", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetObject3D", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetTerrain", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "+JUG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class z{constructor(){this._transform=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),this._transformInverse=new g({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["a"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"]),this._transformInverseTranspose=new g(this._transformInverse,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["t"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"]),this._transformTranspose=new g({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["t"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"]),this._transformInverseRotation=new g({value:this._transform},_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["n"],_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform,t)}multiplyTransform(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this._transform,this._transform,t)}set(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform,t),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms()}}class g{constructor(t,s,i){this.original=t,this.update=s,this.dirty=!0,this.transform=i()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class S{constructor(t=0){this.offset=t,this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])()}applyToVertex(t,s,i){const r=t+this.localOrigin[0],e=s+this.localOrigin[1],o=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0]+this.localOrigin[0],i=t[1]+this.localOrigin[1],r=t[2]+this.localOrigin[2],e=t[3]+this.localOrigin[0],o=t[4]+this.localOrigin[1],n=t[5]+this.localOrigin[2],h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}}class T{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),this.mbs=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])(),this.obb={center:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),halfSize:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_8__["c"])(),quaternion:null}}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,s,i){const r=t,e=s,o=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0],i=t[1],r=t[2]+this.componentLocalOriginLength,e=t[3],o=t[4],n=t[5]+this.componentLocalOriginLength,h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.mbs[0]=t[0]+t[0]*i,this.mbs[1]=t[1]+t[1]*i,this.mbs[2]=t[2]+t[2]*i,this.mbs[3]=t[3]+t[3]*this.offset/s,this.mbs}applyToObb(t){const s=t.center,i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.obb.center[0]=s[0]+s[0]*i,this.obb.center[1]=s[1]+s[1]*i,this.obb.center[2]=s[2]+s[2]*i,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["q"])(this.obb.halfSize,t.halfSize,t.quaternion),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["b"])(this.obb.halfSize,this.obb.halfSize,t.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["f"])(this.obb.halfSize,this.obb.halfSize,t.center),Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_5__["c"])(j,t.quaternion),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["q"])(this.obb.halfSize,this.obb.halfSize,j),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}}class _{constructor(t=0){this.offset=t,this.sphere=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])()}applyToVertex(t,s,i){const r=this.objectTransform.transform;let e=r[0]*t+r[4]*s+r[8]*i+r[12],o=r[1]*t+r[5]*s+r[9]*i+r[13],n=r[2]*t+r[6]*s+r[10]*i+r[14];const h=this.offset/Math.sqrt(e*e+o*o+n*n);e+=e*h,o+=o*h,n+=n*h;const a=this.objectTransform.inverse;return this.tmpVertex[0]=a[0]*e+a[4]*o+a[8]*n+a[12],this.tmpVertex[1]=a[1]*e+a[5]*o+a[9]*n+a[13],this.tmpVertex[2]=a[2]*e+a[6]*o+a[10]*n+a[14],this.tmpVertex}applyToMinMax(t,s){const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i;const r=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*r,s[1]+=s[1]*r,s[2]+=s[2]*r}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.sphere[0]=t[0]+t[0]*i,this.sphere[1]=t[1]+t[1]*i,this.sphere[2]=t[2]+t[2]*i,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const q=new _;function x(s){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)?(q.offset=s,q):null}const y=new T;function M(s){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)?(y.offset=s,y):null}const V=new S;function d(s){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)?(V.offset=s,V):null}const O="terrain",j=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__["a"])();


/***/ }),

/***/ "jpeq":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js ***!
  \**********************************************************************************************/
/*! exports provided: bindCameraPosition, bindProjectionMatrix, bindView, bindViewCustomOrigin, bindViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCameraPosition", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindProjectionMatrix", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindView", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindViewCustomOrigin", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindViewport", function() { return a; });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat4f32.js */ "lwwL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(i,o,t){i.setUniform3f("cameraPosition",t[3]-o[0],t[7]-o[1],t[11]-o[2])}function n(i,o){i.setUniformMatrix4fv("proj",o)}function r(o,t,n){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["j"])(m,n,t),o.setUniform3fv("localOrigin",t),o.setUniformMatrix4fv("view",m)}function f(i,o){r(i,o.origin,o.camera.viewMatrix)}function a(i,o){i.setUniform4fv("viewport",o.camera.fullViewport)}const m=Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "lKY1":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js ***!
  \***********************************************************************************/
/*! exports provided: fetch, gltfToEngineResources, parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gltfToEngineResources", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return X; });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "ZotJ");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "5MHk");
/* harmony import */ var _geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/support/buffer/utils.js */ "fi3m");
/* harmony import */ var _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../glTF/DefaultLoadingContext.js */ "K2Cv");
/* harmony import */ var _glTF_loader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../glTF/loader.js */ "PDsV");
/* harmony import */ var _glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../glTF/internal/indexUtils.js */ "CHx4");
/* harmony import */ var _wosrLoader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wosrLoader.js */ "IvV4");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../webgl-engine/lib/basicInterfaces.js */ "t8JS");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "Ango");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "Hizz");
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../webgl-engine/lib/VertexAttribute.js */ "t73S");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "262w");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js */ "BhNz");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../chunks/vec22.js */ "3Fbu");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../chunks/vec43.js */ "HCB5");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../chunks/vec33.js */ "TJZZ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function J(s,o){const i=X(Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__["adjustStaticAGOUrl"])(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_16__["load"])(i.url,o)),t=Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_16__["processLoadResult"])(e,o);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):Object(_glTF_loader_js__WEBPACK_IMPORTED_MODULE_14__["load"])(new _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_13__["DefaultLoadingContext"](o.streamDataRequester),i.url,o,o.usePBR)),u=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["get"])(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(u)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&te(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=Y(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=Y(a,n,l,0)[0].boundingBox}return{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=Y(a,n,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function X(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Y(e,t,s,a){const u=e.model,n=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["empty"])()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.texCoord0),f=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.normal),p=Z(a.alphaMode);if(!c.has(i)){if(l){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:p!==_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["AlphaDiscardMode"].Opaque};m.set(a.textureColor,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](e.data,t))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](e.data,e.parameters))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](e.data,e.parameters))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](e.data,e.parameters))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_19__["Texture"](e.data,e.parameters))}}const o=a.color[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__["COLOR_GAMMA"]),n=a.color[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__["COLOR_GAMMA"]),d=a.color[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__["COLOR_GAMMA"]),x=a.emissiveFactor[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__["COLOR_GAMMA"]),g=a.emissiveFactor[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__["COLOR_GAMMA"]),b=a.emissiveFactor[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_22__["COLOR_GAMMA"]),h=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_21__["DefaultMaterial"]({...t,transparent:p===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["AlphaDiscardMode"].Blend,customDepthTest:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["DepthTestFunction"].Lequal,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["CullFaceOptions"].None:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["CullFaceOptions"].Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(h)?h.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(h)&&!!h.params.preMultiplyAlpha,occlusionTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,b],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}))}const x=ee(e.indices||e.attributes.position.count,e.primitiveType),S=e.attributes.position.count,A=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"],S);Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["t"])(A,e.attributes.position,e.transform);const N=[[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],I=[[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].POSITION,x]];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.normal)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"],S);Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n,e.transform),Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["a"])(t,e.attributes.normal,n),N.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].NORMAL,x])}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.tangent)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4f"],S);Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n,e.transform),Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__["t"])(t,e.attributes.tangent,n),N.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].TANGENT,x])}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.texCoord0)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec2f"],S);Object(_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_24__["n"])(t,e.attributes.texCoord0),N.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].UV0,x])}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.color)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u8"],S);if(4===e.attributes.color.elementCount)e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4f"]?Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__["s"])(t,e.attributes.color,255):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u8"]?Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_25__["c"])(t,e.attributes.color):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u16"]&&Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__["s"])(t,e.attributes.color,1/256);else{Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_25__["f"])(t,255,255,255,255);const r=new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3u8"](t.buffer,0,4);e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"]?Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["s"])(r,e.attributes.color,255):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3u8"]?Object(_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_26__["c"])(r,e.attributes.color):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3u16"]&&Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["s"])(r,e.attributes.color,1/256)}N.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_20__["VertexAttribute"].COLOR,x])}const L=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_18__["Geometry"](N,I);d.stageResources.geometries.push(L),d.stageResources.materials.push(c.get(i)),l&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=S;const F=L.boundingInfo;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(F)&&(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(d.boundingBox,F.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(d.boundingBox,F.getBBMax()))}))})),l}function Z(e){switch(e){case"BLEND":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["AlphaDiscardMode"].Blend;case"MASK":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["AlphaDiscardMode"].Mask;case"OPAQUE":case null:case void 0:return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_17__["AlphaDiscardMode"].Opaque}}function ee(e,t){switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_23__["PrimitiveType"].TRIANGLES:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__["trianglesToTriangles"])(e);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_23__["PrimitiveType"].TRIANGLE_STRIP:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__["triangleStripToTriangles"])(e);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_23__["PrimitiveType"].TRIANGLE_FAN:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__["triangleFanToTriangles"])(e)}}function te(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o))return;const x=i.attributes.position,g=x.count,h=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),R=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),B=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),M=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u8"],g),T=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"],g),w=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["a"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),i.transform);for(let s=0;s<g;s++){x.getVec(s,R),o.getVec(s,h),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(R,R,i.transform),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["f"])(B,R,t.center),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["E"])(B,B,t.radius);const a=B[2],u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["l"])(B),p=Math.min(.45+.55*u*u,1);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["E"])(B,B,t.radius),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(B,B,w),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["n"])(B,B),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["e"])(B,B,h,a>-1?.2:Math.min(-4*a-3.8,1)),T.setVec(s,B),M.set(s,0,255*p),M.set(s,1,255*p),M.set(s,2,255*p),M.set(s,3,255)}i.attributes.normal=T,i.attributes.color=M}}}


/***/ }),

/***/ "oFv1":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js ***!
  \***************************************************************************************************/
/*! exports provided: ShaderOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderOutput", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var o;!function(o){o[o.Color=0]="Color",o[o.Depth=1]="Depth",o[o.Normal=2]="Normal",o[o.Shadow=3]="Shadow",o[o.Highlight=4]="Highlight",o[o.Draped=5]="Draped",o[o.Occlusion=6]="Occlusion",o[o.Alpha=7]="Alpha",o[o.COUNT=8]="COUNT"}(o||(o={}));


/***/ }),

/***/ "obHo":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vector.js ***!
  \**************************************************************/
/*! exports provided: angle, angleAroundAxis, projectPoint, projectPointSignedLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleAroundAxis", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPointSignedLength", function() { return e; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a(n,o,s){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(n,o)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(n,n);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(s,n,c)}function e(n,r){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(n,r)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(n)}function f(r,s){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(r,s)/(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(r)*Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(s));return-Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(c)}function i(o,r,u){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(m,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(h,r);const a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(m,h),e=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(a),f=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(m,m,h);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(f,u)<0?2*Math.PI-e:e}const m=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),h=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "p9cc":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: PBRMode, PBRSchematicMRRValues, PhysicallyBasedRenderingParameters, bindPBRUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBRMode", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBRSchematicMRRValues", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRenderingParameters", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindPBRUniforms", function() { return c; });
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "fLTx");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_0__["f"])(0,.6,.2);var r;function a(e,t){const a=e.fragment,c=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;t.pbrMode===r.Normal&&c&&e.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__["VertexTextureCoordinates"],t),t.pbrMode!==r.Schematic?(t.pbrMode===r.Disabled&&a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float getBakedOcclusion() { return 1.0; }`),t.pbrMode===r.Normal&&(a.uniforms.add("emissionFactor","vec3"),a.uniforms.add("mrrFactors","vec3"),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(a.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&a.uniforms.add("texMetallicRoughnessSize","vec2"),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(a.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&a.uniforms.add("texEmissionSize","vec2"),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(a.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&a.uniforms.add("texOcclusionSize","vec2"),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float getBakedOcclusion() { return 1.0; }`),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${c?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function c(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor))}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(r||(r={}));


/***/ }),

/***/ "qrV2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: Normals, NormalsDoubleSidedMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Normals", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalsDoubleSidedMode", function() { return i; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,o){const n=e.fragment;switch(n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i.None:n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(o.doubleSidedMode);case i.COUNT:}}var i;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"}(i||(i={}));


/***/ }),

/***/ "r+FG":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat4f64.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function r(e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m){return[e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t(e,n){return new Float64Array(e,n,16)}const a=e(),o=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t,IDENTITY:a});


/***/ }),

/***/ "sJp1":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: PositionAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionAttribute", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(o){o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttribute"].POSITION,"vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 positionModel() { return position; }`)}


/***/ }),

/***/ "sKsC":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js ***!
  \****************************************************************/
/*! exports provided: R, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _; });
/* harmony import */ var _views_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ViewingMode.js */ "PJys");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "F8o4");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "bLIi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "fiGu");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "6kvK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "NiZE");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function _(_){const P=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_25__["ShaderBuilder"],S=P.vertex.code,F=P.fragment.code;return P.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),P.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["PositionAttribute"]),P.varyings.add("vpos","vec3"),P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_21__["VisualVariables"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__["InstancedDoublePrecision"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__["VerticalOffset"],_),_.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Color&&_.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Alpha||(P.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["NormalAttribute"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_5__["Transform"],{linearDepth:!1}),_.offsetBackfaces&&P.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Offset"]),_.instancedColor&&P.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_26__["VertexAttribute"].INSTANCECOLOR,"vec4"),P.varyings.add("vNormalWorld","vec3"),P.varyings.add("localvpos","vec3"),_.multipassTerrainEnabled&&P.varyings.add("depth","float"),P.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_10__["TextureCoordinateAttribute"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ForwardLinearDepth"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__["SymbolColor"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_11__["VertexColor"],_),P.vertex.uniforms.add("externalColor","vec4"),P.varyings.add("vcolorExt","vec4"),S.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${_.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_22__["symbolAlphaCutoff"])}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${_.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${_.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),_.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Alpha&&(P.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__["Slice"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_22__["DiscardOrAdjustAlpha"],_),_.multipassTerrainEnabled&&(P.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_14__["ReadLinearDepth"]),P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__["multipassTerrainTest"],_)),P.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.fragment.uniforms.add("view","mat4"),_.hasColorTexture&&P.fragment.uniforms.add("tex","sampler2D"),P.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__["MixExternalColor"]),F.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${_.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${_.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${_.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`vec4 texColor = vec4(1.0);`}
        ${_.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),_.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_3__["ShaderOutput"].Color&&(P.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__["Slice"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__["EvaluateSceneLighting"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__["EvaluateAmbientOcclusion"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_22__["DiscardOrAdjustAlpha"],_),_.receiveShadows&&P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_20__["ReadShadowMap"],_),_.multipassTerrainEnabled&&(P.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_14__["ReadLinearDepth"]),P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__["multipassTerrainTest"],_)),P.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.fragment.uniforms.add("view","mat4"),_.hasColorTexture&&P.fragment.uniforms.add("tex","sampler2D"),P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PhysicallyBasedRenderingParameters"],_),P.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_18__["PhysicallyBasedRendering"],_),P.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__["MixExternalColor"]),F.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${_.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${_.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${_.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${_.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PBRMode"].Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${_.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":_.viewingMode===_views_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__["ViewingMode"].Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${_.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${_.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PBRMode"].Normal||_.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PBRMode"].Schematic?_.viewingMode===_views_ViewingMode_js__WEBPACK_IMPORTED_MODULE_0__["ViewingMode"].Global?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]``}
        ${_.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PBRMode"].Normal||_.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PBRMode"].Schematic?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_24__["glsl"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${_.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),P.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__["DefaultMaterialAuxiliaryPasses"],_),P}const P=Object.freeze({__proto__:null,build:_});


/***/ }),

/***/ "sTkM":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quatf64.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function r(e,n,r,t){return[e,n,r,t]}function t(e,n){return new Float64Array(e,n,4)}const a=e(),o=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t,IDENTITY:a});


/***/ }),

/***/ "thYK":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js ***!
  \*****************************************************************************/
/*! exports provided: BoundingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingInfo", function() { return a; });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class a{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(i.length>=1),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length%this._numIndexPerPrimitive==0),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length>=i.length*this._numIndexPerPrimitive),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(3===c.size||4===c.size);const{data:o,size:M}=c,d=i.length;let l=M*a[this._numIndexPerPrimitive*i[0]];b.clear(),b.push(l),this.bbMin=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(o[l],o[l+1],o[l+2]),this.bbMax=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.bbMin);for(let t=0;t<d;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=M*a[s+i],b.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b.length;++t){l=b.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a}b.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["h"])(this.bbMin,this.bbMax)>1){const i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],M=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<M&&(M=n)}c<i[0]&&(s|=1),o<i[1]&&(s|=2),M<i[2]&&(s|=4),n[t]=s,++r[s]}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t]}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a(o[t],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){b.prune()}}const b=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({deallocator:null});


/***/ }),

/***/ "tiP8":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js ***!
  \**************************************************************************************/
/*! exports provided: addObject3DStateID, calculateTransformRelativeToOrigin, encodeDoubleVec3, isInstanceHidden, removeObject3DStateID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addObject3DStateID", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTransformRelativeToOrigin", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleVec3", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceHidden", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeObject3DStateID", function() { return f; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/doublePrecisionUtils.js */ "nMRV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function c(r,n){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)&&(r=[]),r.push(n),r}function f(r,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function u(t){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)&&!t.visible}function l(t,i,m){const c=t.origin.vec3;Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_3__["setMatrixTranslation3"])(j,-c[0],-c[1],-c[2]),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.transformation)?Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["m"])(i,j,t.transformation):Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i,j),m&&(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["a"])(m,i),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["t"])(m,m))}function p(t,r,n,o,s){g[0]=t.get(r,0),g[1]=t.get(r,1),g[2]=t.get(r,2),Object(_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__["encodeDoubleArray"])(g,b,3),n.set(s,0,b[0]),o.set(s,0,b[1]),n.set(s,1,b[2]),o.set(s,1,b[3]),n.set(s,2,b[4]),o.set(s,2,b[5])}const g=new Float64Array(3),b=new Float32Array(6),j=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "vEBI":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js ***!
  \**************************************************************************************************************/
/*! exports provided: VertexPosition, VertexPositionModelTransform, VertexPositionViewProjectionTransform, bindModelTransform, bindViewProjTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexPosition", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexPositionModelTransform", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexPositionViewProjectionTransform", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindModelTransform", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindViewProjTransform", function() { return l; });
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a(r,o){r.include(_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["PositionAttribute"]),r.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__["DoublePrecision"],o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),r.vertex.uniforms.add("transformWorldFromModelRS","mat3"),r.vertex.uniforms.add("transformWorldFromModelTH","vec3"),r.vertex.uniforms.add("transformWorldFromModelTL","vec3"),r.vertex.uniforms.add("transformWorldFromViewTH","vec3"),r.vertex.uniforms.add("transformWorldFromViewTL","vec3"),r.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),r.vertex.uniforms.add("transformProjFromView","mat4"),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.uniforms.add("transformWorldFromViewTL","vec3"),r.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class s{constructor(){this.transformWorldFromModelRS=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),this.transformWorldFromModelTH=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.transformWorldFromModelTL=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])()}}class n{constructor(){this.transformWorldFromViewTH=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.transformWorldFromViewTL=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.transformViewFromCameraRelativeRS=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),this.transformProjFromView=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}}function d(r,o){r.setUniformMatrix3fv("transformWorldFromModelRS",o.transformWorldFromModelRS),r.setUniform3fv("transformWorldFromModelTH",o.transformWorldFromModelTH),r.setUniform3fv("transformWorldFromModelTL",o.transformWorldFromModelTL)}function l(r,o){r.setUniform3fv("transformWorldFromViewTH",o.transformWorldFromViewTH),r.setUniform3fv("transformWorldFromViewTL",o.transformWorldFromViewTL),r.setUniformMatrix4fv("transformProjFromView",o.transformProjFromView),r.setUniformMatrix3fv("transformViewFromCameraRelativeRS",o.transformViewFromCameraRelativeRS)}


/***/ }),

/***/ "vXUg":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: ForwardLinearDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardLinearDepth", function() { return a; });
/* harmony import */ var _ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function a(a,o){o.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Color&&o.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):o.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Depth||o.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Shadow?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("nearFar","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void forwardLinearDepth() {}`)}


/***/ }),

/***/ "viRi":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: VisualVariables, bindVisualVariablesUniforms, bindVisualVariablesUniformsForSymbols, bindVisualVariablesUniformsWithOpacity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualVariables", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVisualVariablesUniforms", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVisualVariablesUniformsForSymbols", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVisualVariablesUniformsWithOpacity", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(o,r){r.vvInstancingEnabled&&(r.vvSize||r.vvColor)&&o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttribute"].INSTANCEFEATUREATTRIBUTE,"vec4"),r.vvSize?(o.vertex.uniforms.add("vvSizeMinSize","vec3"),o.vertex.uniforms.add("vvSizeMaxSize","vec3"),o.vertex.uniforms.add("vvSizeOffset","vec3"),o.vertex.uniforms.add("vvSizeFactor","vec3"),o.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),o.vertex.uniforms.add("vvSymbolAnchor","vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${r.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),r.vvColor?(o.vertex.constants.add("vvColorNumber","int",8),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${r.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 vvColor() { return vec4(1.0); }`)}function r(v,e){e.vvSizeEnabled&&(v.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),v.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),v.setUniform3fv("vvSizeOffset",e.vvSizeOffset),v.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(v.setUniform1fv("vvColorValues",e.vvColorValues),v.setUniform4fv("vvColorColors",e.vvColorColors))}function t(v,e){r(v,e),e.vvOpacityEnabled&&(v.setUniform1fv("vvOpacityValues",e.vvOpacityValues),v.setUniform1fv("vvOpacityOpacities",e.vvOpacityOpacities))}function i(v,e){r(v,e),e.vvSizeEnabled&&(v.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),v.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}


/***/ }),

/***/ "w6Td":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js ***!
  \********************************************************************************************************/
/*! exports provided: ReloadableShaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadableShaderModule", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t,o){this._module=t,this._loadModule=o}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}


/***/ }),

/***/ "wV01":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js ***!
  \**************************************************************************/
/*! exports provided: createTextureBasis, createTextureKTX2, estimateMemoryBasis, estimateMemoryKTX2, loadBasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureBasis", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureKTX2", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateMemoryBasis", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateMemoryKTX2", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBasis", function() { return c; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/basisu/BasisU.js */ "yqQq");
/* harmony import */ var _libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/basisu/TextureFormat.js */ "fA32");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/Util.js */ "hTmG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let g=null,l=null;async function c(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(l)&&(l=Object(_libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_1__["getBasisTranscoder"])(),g=await l),l}function u(t,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(g))return t.byteLength;const r=new g.BasisFile(new Uint8Array(t)),s=T(r)?E(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),s}function m(t,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(g))return t.byteLength;const r=new g.KTX2File(new Uint8Array(t)),s=_(r)?E(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),s}function E(e,t,n,s,i){const a=Object(_webgl_Util_js__WEBPACK_IMPORTED_MODULE_5__["getBytesPerElementFormat"])(t?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["CompressedTextureFormat"].COMPRESSED_RGBA8_ETC2_EAC:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["CompressedTextureFormat"].COMPRESSED_RGB8_ETC2),g=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*g)}function T(e){return e.getNumImages()>=1&&!e.isUASTC()}function _(e){return e.getFaces()>=1&&e.isETC1S()}async function h(t,n,r){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(g)&&(g=await c());const s=new g.BasisFile(new Uint8Array(r));if(!T(s))return null;s.startTranscoding();const i=p(t,n,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),i}async function A(t,n,r){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(g)&&(g=await c());const s=new g.KTX2File(new Uint8Array(r));if(!_(s))return null;s.startTranscoding();const i=p(t,n,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),i}function p(e,t,o,g,l,c,u,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[_,h]=E?g?[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_2__["TextureFormat"].ETC2_RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["CompressedTextureFormat"].COMPRESSED_RGBA8_ETC2_EAC]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_2__["TextureFormat"].ETC1_RGB,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["CompressedTextureFormat"].COMPRESSED_RGB8_ETC2]:T?g?[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_2__["TextureFormat"].BC3_RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["CompressedTextureFormat"].COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_2__["TextureFormat"].BC1_RGB,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["CompressedTextureFormat"].COMPRESSED_RGB_S3TC_DXT1_EXT]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_2__["TextureFormat"].RGBA32,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["PixelFormat"].RGBA],A=t.hasMipmap?o:Math.min(1,o),p=[];for(let n=0;n<A;n++)p.push(new Uint8Array(u(n,_))),m(n,_,p[n]);const C=p.length>1,d=C?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureSamplingMode"].LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["TextureSamplingMode"].LINEAR,R={...t,samplingMode:d,hasMipmap:C,internalFormat:h,width:l,height:c};return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](e,R,{type:"compressed",levels:p})}


/***/ }),

/***/ "wtEh":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: OutputDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputDepth", function() { return e; });
/* harmony import */ var _ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutputOptions.js */ "oFv1");
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,l){e.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__["RgbaFloatEncoding"]),l.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):l.output===_ShaderOutputOptions_js__WEBPACK_IMPORTED_MODULE_0__["ShaderOutput"].Depth&&e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}


/***/ }),

/***/ "wzLF":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: NormalAttribute, NormalAttributeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalAttribute", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalAttributeType", function() { return i; });
/* harmony import */ var _util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/DecodeNormal.glsl.js */ "ZS5L");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(o,d){d.normalType===i.Attribute&&(o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMAL,"vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 normalModel() {
return normal;
}`)),d.normalType===i.CompressedAttribute&&(o.include(_util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_0__["DecodeNormal"]),o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMALCOMPRESSED,"vec2"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),d.normalType===i.ScreenDerivative&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var i;!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(i||(i={}));


/***/ }),

/***/ "xRv2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: PiUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiUtils", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t){t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const float PI = 3.141592653589793;`),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}


/***/ }),

/***/ "xtdb":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: bindMultipassTerrainTexture, multipassTerrainTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindMultipassTerrainTexture", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipassTerrainTest", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function r(r,t){r.fragment.uniforms.add("terrainDepthTexture","sampler2D"),r.fragment.uniforms.add("nearFar","vec2"),r.fragment.uniforms.add("inverseViewport","vec2"),r.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function t(e,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&e.bindTexture(r.terrainLinearDepthTexture,"terrainDepthTexture")}


/***/ }),

/***/ "yCmR":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js ***!
  \************************************************************************/
/*! exports provided: Program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return s; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class s{constructor(t,e,s){this._context=t,this._locations=s,this._textures=new Map,this._freeTextureUnits=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({deallocator:null}),this._glProgram=t.programCache.acquire(e.generateSource("vertex"),e.generateSource("fragment"),s),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=Object(_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["webglDebugEnabled"])()?e.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0)}setUniform1i(t,e){this._glProgram.setUniform1i(t,e)}setUniform1f(t,e){this._glProgram.setUniform1f(t,e)}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e)}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e)}setUniform2f(t,e,r){this._glProgram.setUniform2f(t,e,r)}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e)}setUniform2iv(t,e){this._glProgram.setUniform2iv(t,e)}setUniform3f(t,e,r,i){this._glProgram.setUniform3f(t,e,r,i)}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e)}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e)}setUniform4f(t,e,r,i,s){this._glProgram.setUniform4f(t,e,r,i,s)}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e)}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e)}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e)}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)||null==e.glName){const t=this._textures.get(r);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(r)),null}let i=this._textures.get(r);return null==i?(i=this._allocTextureUnit(e),this._textures.set(r,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(r,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit)})),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{if(("sampler2D"===t.type||"samplerCube"===t.type)&&!this._textures.has(t.name))throw new Error(`Texture sampler ${t.name} has no bound texture`)}))}_allocTextureUnit(t){return{texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}}


/***/ }),

/***/ "ypgp":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js ***!
  \*************************************************************************************************/
/*! exports provided: ShaderTechnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTechnique", function() { return e; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "0X3F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class e{constructor(i,t,e){this.release=e,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i)}destroy(){this._program=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["disposeMaybe"])(this._program),this._pipeline=this._config=null}reload(t){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["disposeMaybe"])(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,t){}bindMaterial(i,t){}bindDraw(i){}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e))}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i)}get primitiveType(){return _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["PrimitiveType"].TRIANGLES}getPipelineState(i,t){return this._pipeline}}


/***/ }),

/***/ "yqQq":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/basisu/BasisU.js ***!
  \*********************************************************/
/*! exports provided: getBasisTranscoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasisTranscoder", function() { return s; });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "ss0y");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function s(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)){const t=t=>Object(_assets_js__WEBPACK_IMPORTED_MODULE_0__["getAssetUrl"])(`esri/libs/basisu/${t}`);i=Promise.all(/*! import() | chunks-basis_transcoder-js */[__webpack_require__.e("common"), __webpack_require__.e("chunks-basis_transcoder-js")]).then(__webpack_require__.bind(null, /*! ../../chunks/basis_transcoder.js */ "pY8p")).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return i}let i;


/***/ }),

/***/ "yvHm":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js ***!
  \*******************************************************************************/
/*! exports provided: ColorMixModeEnum, encodeSymbolColor, parseColorMixMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMixModeEnum", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSymbolColor", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColorMixMode", function() { return n; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var r;function n(t){switch(t){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function o(n,o,l){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n)||o===r.Ignore)return l[0]=255,l[1]=255,l[2]=255,void(l[3]=255);const p=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(n[3]*a),0,a),s=0===p||o===r.Tint?0:o===r.Replace?c:u;l[0]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(n[0]*i),0,i),l[1]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(n[1]*i),0,i),l[2]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(n[2]*i),0,i),l[3]=p+s}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(r||(r={}));const i=255,a=85,c=a,u=2*a;


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-graphics-objectResourceUtils-js.js.map