(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-SceneLayerWorker-js"],{

/***/ "D8Ta":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, k, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function i(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const _=a(),l=o(),N=s(),U=c(),I=i(),O=f(),T=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,unitW:f,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});


/***/ }),

/***/ "Ka4Q":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/i3s/I3SModule.js ***!
  \*********************************************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return t; });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "ss0y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(){return n||(n=new Promise((e=>__webpack_require__.e(/*! import() | chunks-i3s-js */ "chunks-i3s-js").then(__webpack_require__.bind(null, /*! ../../chunks/i3s.js */ "ilXH")).then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:i,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>Promise.reject(e)))),n}function i(t){return Object(_assets_js__WEBPACK_IMPORTED_MODULE_0__["getAssetUrl"])(`esri/libs/i3s/${t}`)}let n;


/***/ }),

/***/ "KgD9":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js ***!
  \***********************************************************************/
/*! exports provided: destroyContext, dracoDecompressPointCloudData, filterObbsForModifications, filterObbsForModificationsSync, initialize, interpretObbModificationResults, process, setLegacySchema, setModifications, setModificationsSync, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyContext", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dracoDecompressPointCloudData", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObbsForModifications", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObbsForModificationsSync", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpretObbModificationResults", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegacySchema", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setModifications", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setModificationsSync", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return w; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _libs_i3s_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/i3s/enums.js */ "eokS");
/* harmony import */ var _libs_i3s_I3SModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/i3s/I3SModule.js */ "Ka4Q");
/* harmony import */ var _i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i3s/I3SNode.js */ "xFPU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function s(e){await g();const t=[e.geometryBuffer];return{result:m(e,t),transferList:t}}async function f(e){var r;await g();const n=[e.geometryBuffer],{geometryBuffer:o}=e,s=o.byteLength,f=y._malloc(s),i=new Uint8Array(y.HEAPU8.buffer,f,s);i.set(new Uint8Array(o));const a=y.dracoDecompressPointCloudData(f,i.byteLength);if(y._free(f),a.error.length>0)throw`i3s.wasm: ${a.error}`;const u=(null==(r=a.featureIds)?void 0:r.length)>0?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(a.featureIds):null,l=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(a.positions);u&&n.push(u.buffer),n.push(l.buffer);return{result:{positions:l,featureIds:u},transferList:n}}async function i(e){await g(),E(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function a(e){await g(),b(e)}async function u(e){await g(),y.setLegacySchema(e.context,e.jsonSchema)}function l(e){h(e)}let c,y;function b(e){const t=e.modifications,r=y._malloc(8*t.length),n=new Float64Array(y.HEAPU8.buffer,r,t.length);for(let o=0;o<t.length;++o)n[o]=t[o];y.setModifications(e.context,r,t.length,e.isGeodetic),y._free(r)}function m(n,o){if(!y)return null;const{context:s,localOrigin:f,globalTrafo:i,mbs:a,obb:u,elevationOffset:l,geometryBuffer:c,geometryDescriptor:b,indexToVertexProjector:m,vertexToRenderProjector:d}=n,E=y._malloc(c.byteLength),h=33,g=y._malloc(h*Float64Array.BYTES_PER_ELEMENT),w=new Uint8Array(y.HEAPU8.buffer,E,c.byteLength);w.set(new Uint8Array(c));const A=new Float64Array(y.HEAPU8.buffer,g,h);p(A,f);let _=A.byteOffset+3*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_);p(L,i),_+=16*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_),p(L,a),_+=4*A.BYTES_PER_ELEMENT,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(u)&&(L=new Float64Array(A.buffer,_),p(L,u.center),_+=3*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_),p(L,u.halfSize),_+=3*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_),p(L,u.quaternion));const I=b,T={isDraco:!1,isLegacy:!1,color:n.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:n.needNormals&&n.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:n.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:n.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:I.featureIndex},P=y.process(s,!!n.obb,E,w.byteLength,I,T,g,l,m,d,n.normalReferenceFrame);if(y._free(g),y._free(E),P.error.length>0)throw`i3s.wasm: ${P.error}`;if(P.discarded)return null;const U=P.componentOffsets.length>0?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(P.componentOffsets):null,B=P.featureIds.length>0?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(P.featureIds):null,F=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(P.interleavedVertedData).buffer,M=P.indicesType===_libs_i3s_enums_js__WEBPACK_IMPORTED_MODULE_2__["IndexType"].Int16?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(new Uint16Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/2)):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(new Uint32Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/4)),S=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(P.positions),v=P.positionIndicesType===_libs_i3s_enums_js__WEBPACK_IMPORTED_MODULE_2__["IndexType"].Int16?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(new Uint16Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/2)):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["slice"])(new Uint32Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/4)),x={layout:n.layouts[0],interleavedVertexData:F,indices:M,hasColors:P.hasColors,hasModifications:P.hasModifications,positionData:{data:S,indices:v}};return B&&o.push(B.buffer),U&&o.push(U.buffer),o.push(F),o.push(M.buffer),o.push(S.buffer),o.push(v.buffer),{componentOffsets:U,featureIds:B,transformedGeometry:x,obb:P.obb}}function d(e){return 0===e?_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_4__["NodeIMModificationImpact"].Unmodified:1===e?_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_4__["NodeIMModificationImpact"].PotentiallyModified:2===e?_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_4__["NodeIMModificationImpact"].Culled:_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_4__["NodeIMModificationImpact"].Unknown}function E(e){const{context:t,buffer:r}=e,n=y._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(y.HEAPU8.buffer,n,o),f=new Float64Array(r);s.set(f),y.filterOBBs(t,n,o),f.set(s),y._free(n)}function h(e){y&&y.destroy(e)}function p(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function g(){return y?Promise.resolve():(c||(c=Object(_libs_i3s_I3SModule_js__WEBPACK_IMPORTED_MODULE_3__["get"])().then((e=>{y=e,c=null}))),c)}const w={transform:m,destroy:h};


/***/ }),

/***/ "eokS":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/i3s/enums.js ***!
  \*****************************************************/
/*! exports provided: IndexType, ModificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexType", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationType", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var n,e;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32"}(n||(n={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished"}(e||(e={}));


/***/ }),

/***/ "xFPU":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js ***!
  \******************************************************************/
/*! exports provided: CacheState, LodMetric, Node, NodeBase, NodeFilterImpact, NodeIMModificationImpact, NodeState, NodeTraversalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheState", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodMetric", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeBase", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeFilterImpact", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeIMModificationImpact", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeState", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeTraversalState", function() { return d; });
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class t{constructor(t,i){this.id=t,this.mbs=i,this.renderMbs=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])([0,0,0,-1]),this.imModificationImpact=n.NotChecked}}var i,n,o,s,a;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(i||(i={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(n||(n={}));class c extends t{constructor(e,t,i,n,s,a,c,d,h,r){super(e,i),this.index=t,this.childCount=n,this.level=s,this.resources=a,this.version=c,this.lodMetric=d,this.maxError=h,this.numFeatures=r,this.failed=!1,this.hasModifications=!1,this.cacheState=o.Unknown,this.vertexCount=0,this.memory=0}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(o||(o={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(s||(s={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(a||(a={}));class d{constructor(e,t,i,n){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=i,this.version=n}}


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-SceneLayerWorker-js.js.map