(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js"],{

/***/ "/OIm":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/meshProcessing.js ***!
  \**********************************************************************/
/*! exports provided: computeNeighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeNeighbors", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o)}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n}else{const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x)}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++)}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++}}return A}


/***/ }),

/***/ "ABOp":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js ***!
  \************************************************************************************************/
/*! exports provided: EdgeType, extractEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeType", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractEdges", function() { return h; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const p=-1;var u;function h(n,i,l,g=N){const f=n.vertices.position,m=n.vertices.componentIndex,u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["deg2rad"])(g.anglePlanar),h=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["deg2rad"])(g.angleSignificantEdge),V=Math.cos(h),S=Math.cos(u),j=I.edge,x=j.position0,E=j.position1,D=j.faceNormal0,F=j.faceNormal1,L=y(n),U=w(n),k=U.length/4,C=i.allocate(k);let H=0;const K=k,M=l.allocate(K);let O=0,P=0,T=0;const b=Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["range"])(0,k),q=new Float32Array(k);Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__["forEach"])(q,((e,t,n)=>{f.getVec(U[4*t+0],x),f.getVec(U[4*t+1],E),n[t]=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["i"])(x,E)})),b.sort(((e,t)=>q[t]-q[e]));const z=new Array,B=new Array;for(let e=0;e<k;e++){const t=b[e],n=q[t],o=U[4*t+0],r=U[4*t+1],g=U[4*t+2],h=U[4*t+3],w=h===p;if(f.getVec(o,x),f.getVec(r,E),w)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(D,L[3*g+0],L[3*g+1],L[3*g+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(F,D),j.componentIndex=m.get(o),j.cosAngle=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(D,F);else{if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(D,L[3*g+0],L[3*g+1],L[3*g+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(F,L[3*h+0],L[3*h+1],L[3*h+2]),j.componentIndex=m.get(o),j.cosAngle=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(D,F),v(j,S))continue;j.cosAngle<-.9999&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(F,D)}P+=n,T++,w||d(j,V)?(i.write(C,H++,j),z.push(n)):A(j,u)&&(l.write(M,O++,j),B.push(n))}const G=new Float32Array(z.reverse()),J=new Float32Array(B.reverse());return{regular:{instancesData:i.trim(C,H),lodInfo:{lengths:G}},silhouette:{instancesData:l.trim(M,O),lodInfo:{lengths:J}},averageEdgeLength:P/T}}function d(e,t){return e.cosAngle<t}function v(e,t){return e.cosAngle>t}function A(e,t){const o=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["acosClamped"])(e.cosAngle),r=I.fwd,s=I.ortho;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["r"])(r,e.position1,e.position0);return o*(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(s,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function w(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],s=o[3*a+2],c=n[3*a+0],i=n[3*a+1],l=n[3*a+2];r+=e===p||c<i?1:0,r+=t===p||i<l?1:0,r+=s===p||l<c?1:0}const s=new Int32Array(4*r);let c=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],r=o[3*a+2],i=n[3*a+0],l=n[3*a+1],g=n[3*a+2];(e===p||i<l)&&(s[c++]=i,s[c++]=l,s[c++]=a,s[c++]=e),(t===p||l<g)&&(s[c++]=l,s[c++]=g,s[c++]=a,s[c++]=t),(r===p||g<i)&&(s[c++]=g,s[c++]=i,s[c++]=a,s[c++]=r)}return s}function y(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=V.v0,s=V.v1,c=V.v2,a=new Float32Array(3*t);for(let i=0;i<t;i++){const e=o[3*i+0],t=o[3*i+1],m=o[3*i+2];n.getVec(e,r),n.getVec(t,s),n.getVec(m,c),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(s,s,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c,c,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(r,s,c),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(r,r),a[3*i+0]=r[0],a[3*i+1]=r[1],a[3*i+2]=r[2]}return a}!function(e){e[e.SOLID=0]="SOLID",e[e.SKETCH=1]="SKETCH"}(u||(u={}));const I={edge:{position0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),position1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),faceNormal0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),faceNormal1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),componentIndex:0,cosAngle:0},ortho:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),fwd:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])()},V={v0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),v1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),v2:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])()},N={anglePlanar:4,angleSignificantEdge:35};


/***/ }),

/***/ "BICm":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js ***!
  \***************************************************************************/
/*! exports provided: packInterleavedBuffer, packLayout, unpackInterleavedBuffer, unpackLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packInterleavedBuffer", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packLayout", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackInterleavedBuffer", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackLayout", function() { return G; });
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterleavedLayout.js */ "/ADo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function D(e){return G(e.layout).createView(e.buffer)}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const o={...e,constructor:J(e.constructor)};t.push([r,o])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function G(e){const t=Object(_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((e=>t.fields.set(e[0],{...e[1],constructor:K(e[1].constructor)}))),t}const H=[_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u32"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u32"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u32"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i8"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i16"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt32"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i32"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i32"],_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i32"]];function J(e){return`${e.ElementType}_${e.ElementCount}`}function K(e){return O.get(e)}const O=new Map;H.forEach((e=>O.set(J(e),e)));


/***/ }),

/***/ "DJ1h":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js ***!
  \********************************************************************************************/
/*! exports provided: CommonInstancesLayout, EdgeInputBufferLayout, EdgeShaderAttributeLocations, RegularEdgeInstancesLayout, SilhouetteEdgeInstancesLayout, VertexLayout, glVertexLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonInstancesLayout", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeInputBufferLayout", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeShaderAttributeLocations", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularEdgeInstancesLayout", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeInstancesLayout", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexLayout", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVertexLayout", function() { return T; });
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "Lrt+");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "/ADo");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexAttribute.js */ "t73S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const A=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].POSITION).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].COMPONENTINDEX).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].U16PADDING),e=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec2u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].SIDENESS),T=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__["glLayout"])(e),E=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].POSITION1).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].COMPONENTINDEX).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].VARIANTOFFSET,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].VARIANTSTROKE).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].VARIANTEXTENSION,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].U8PADDING,{glPadding:!0}).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].U16PADDING,{glPadding:!0}),S=E.clone().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMAL),r=E.clone().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMALA).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMALB),o=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].POSITION0,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].POSITION1,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].COMPONENTINDEX,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].VARIANTOFFSET,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].VARIANTSTROKE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].VARIANTEXTENSION,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMAL,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMALA,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].NORMALB,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttribute"].SIDENESS,8]]);


/***/ }),

/***/ "InNl":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js ***!
  \***************************************************************************************************/
/*! exports provided: work, wrappedWork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "work", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrappedWork", function() { return a; });
/* harmony import */ var _geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/meshUtils/deduplicate.js */ "jEtK");
/* harmony import */ var _support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/meshProcessing.js */ "/OIm");
/* harmony import */ var _support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../support/buffer/workerHelper.js */ "BICm");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bufferLayouts.js */ "DJ1h");
/* harmony import */ var _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edgeBufferWriters.js */ "fgxy");
/* harmony import */ var _edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edgePreprocessing.js */ "ABOp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
async function a(e){const t=u(e),n=f(t),r=[t.data.buffer];return{result:c(n,r),transferList:r}}function f(e){const t=g(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return d.updateSettings(e.writerSettings),l.updateSettings(e.writerSettings),Object(_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__["extractEdges"])(t,d,l)}function u(e){return{data:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_3__["EdgeInputBufferLayout"].createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function c(e,t){t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer);return{regular:{instancesData:Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__["packInterleavedBuffer"])(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__["packInterleavedBuffer"])(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function g(n,i,s,o){if(i){return{faces:s,facesLength:o,neighbors:Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__["computeNeighbors"])(s,o,n.count),vertices:n}}const a=Object(_geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__["deduplicate"])(n.buffer,n.stride/4,{originalIndices:s,originalIndicesLength:o}),f=Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__["computeNeighbors"])(a.indices,o,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:f,vertices:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_3__["EdgeInputBufferLayout"].createView(a.buffer)}}const d=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeBufferWriter"],l=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeBufferWriter"];


/***/ }),

/***/ "Lrt+":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js ***!
  \*********************************************************************/
/*! exports provided: glLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glLayout", function() { return o; });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/VertexElementDescriptor.js */ "Pz5D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function o(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return!(o&&o.glPadding)})).map((i=>{const s=t.fields.get(i),l=s.constructor.ElementCount,u=r(s.constructor.ElementType),f=s.offset,c=!(!s.optional||!s.optional.glNormalized);return new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["VertexElementDescriptor"](i,l,u,f,n,c,o)}))}function r(t){const e=n[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const n={u8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DataType"].UNSIGNED_BYTE,u16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DataType"].UNSIGNED_SHORT,u32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DataType"].UNSIGNED_INT,i8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DataType"].BYTE,i16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DataType"].SHORT,i32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DataType"].INT,f32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["DataType"].FLOAT};


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

/***/ "fgxy":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js ***!
  \************************************************************************************************/
/*! exports provided: CommonBufferWriter, RegularEdgeBufferWriter, SilhouetteEdgeBufferWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBufferWriter", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularEdgeBufferWriter", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeBufferWriter", function() { return w; });
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "iA3P");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "Lrt+");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bufferLayouts.js */ "DJ1h");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class a{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?f:p}write(t,o,e){const n=this.edgeHashFunction(e);W.seed=n;const i=W.getIntRange(0,255),r=W.getIntRange(0,this.settings.variants-1),s=.7,a=W.getFloat(),c=255*(.5*g(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c)}trim(t,o){return t.slice(0,o)}}const c=new Float32Array(6),m=new Uint32Array(c.buffer),u=new Uint32Array(1);function p(t){const o=c;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u[0]=5381;for(let e=0;e<m.length;e++)u[0]=31*u[0]+m[e];return u[0]}function f(t){const o=c;o[0]=h(t.position0[0]),o[1]=h(t.position0[1]),o[2]=h(t.position0[2]),o[3]=h(t.position1[0]),o[4]=h(t.position1[1]),o[5]=h(t.position1[2]),u[0]=5381;for(let e=0;e<m.length;e++)u[0]=31*u[0]+m[e];return u[0]}const l=1e4;function h(t){return Math.round(t*l)/l}function g(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d{constructor(){this.commonWriter=new a}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"].createBuffer(t)}write(t,n,i){this.commonWriter.write(t,n,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(y,i.faceNormal0,i.faceNormal1),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(y,y),t.normal.setVec(n,y)}trim(t,o){return this.commonWriter.trim(t,o)}}d.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"],d.glLayout=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"],1);class w{constructor(){this.commonWriter=new a}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"].createBuffer(t)}write(t,o,e){this.commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1)}trim(t,o){return this.commonWriter.trim(t,o)}}w.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"],w.glLayout=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"],1);const y=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),W=new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "xqxP":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/types.js ***!
  \********************************************************************/
/*! exports provided: elementTypeSize, isInteger, isSigned, maximumValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementTypeSize", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSigned", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumValue", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function c(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function u(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}


/***/ })

}]);
//# sourceMappingURL=views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js.js.map