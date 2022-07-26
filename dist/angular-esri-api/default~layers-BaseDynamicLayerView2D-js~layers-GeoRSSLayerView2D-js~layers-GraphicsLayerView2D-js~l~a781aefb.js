(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~a781aefb"],{

/***/ "0bwe":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ShaderTranspiler.js ***!
  \*******************************************************************/
/*! exports provided: test, transpileShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpileShader", function() { return G; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _reservedWordsGLSL3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservedWordsGLSL3.js */ "g9fX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var a,o={exports:{}};void 0!==(a=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(o.exports=a);const n=o.exports;var i,l={exports:{}};i=l,function(e){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];void 0!==t&&(i.exports=t)}();const s=l.exports;var c={exports:{}};!function(e){!function(t){var r=function(){return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]}();void 0!==r&&(e.exports=r)}()}(c);const d=c.exports;var u=999,g=9999,p=0,f=1,_=2,h=3,x=4,m=5,y=6,w=7,M=8,v=9,T=10,b=11,P=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function E(){var e,t,r,a=0,o=0,i=u,l=[],c=[],E=1,C=0,k=0,D=!1,j=!1,F="";return function(e){return c=[],null!==e?S(e.replace?e.replace(/\r\n/g,"\n"):e):R()};function L(e){e.length&&c.push({type:P[i],data:e,position:k,line:E,column:C})}function S(t){var n;for(a=0,r=(F+=t).length;e=F[a],a<r;){switch(n=a,i){case p:a=I();break;case f:a=G();break;case _:a=A();break;case h:a=O();break;case x:a=H();break;case b:a=B();break;case m:a=N();break;case g:a=U();break;case v:a=X();break;case u:a=V()}if(n!==a)if("\n"===F[n])C=0,++E;else++C}return o+=a,F=F.slice(a),c}function R(e){return l.length&&L(l.join("")),i=T,L("(eof)"),c}function V(){return l=l.length?[]:l,"/"===t&&"*"===e?(k=o+a-1,i=p,t=e,a+1):"/"===t&&"/"===e?(k=o+a-1,i=f,t=e,a+1):"#"===e?(i=_,k=o+a,a):/\s/.test(e)?(i=v,k=o+a,a):(D=/\d/.test(e),j=/[^\w_]/.test(e),k=o+a,i=D?x:j?h:g,a)}function X(){return/[^\s]/g.test(e)?(L(l.join("")),i=u,a):(l.push(e),t=e,a+1)}function A(){return"\r"!==e&&"\n"!==e||"\\"===t?(l.push(e),t=e,a+1):(L(l.join("")),i=u,a)}function G(){return A()}function I(){return"/"===e&&"*"===t?(l.push(e),L(l.join("")),i=u,a+1):(l.push(e),t=e,a+1)}function O(){if("."===t&&/\d/.test(e))return i=m,a;if("/"===t&&"*"===e)return i=p,a;if("/"===t&&"/"===e)return i=f,a;if("."===e&&l.length){for(;q(l););return i=m,a}if(";"===e||")"===e||"("===e){if(l.length)for(;q(l););return L(e),i=u,a+1}var r=2===l.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;q(l););return i=u,a}return l.push(e),t=e,a+1}function q(e){for(var t,r,a=0;;){if(t=s.indexOf(e.slice(0,e.length+a).join("")),r=s[t],-1===t){if(a--+e.length>0)continue;r=e.slice(0,1).join("")}return L(r),k+=r.length,(l=l.slice(r.length)).length}}function B(){return/[^a-fA-F0-9]/.test(e)?(L(l.join("")),i=u,a):(l.push(e),t=e,a+1)}function H(){return"."===e||/[eE]/.test(e)?(l.push(e),i=m,t=e,a+1):"x"===e&&1===l.length&&"0"===l[0]?(i=b,l.push(e),t=e,a+1):/[^\d]/.test(e)?(L(l.join("")),i=u,a):(l.push(e),t=e,a+1)}function N(){return"f"===e&&(l.push(e),t=e,a+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(l.push(e),t=e,a+1):/[^\d]/.test(e)?(L(l.join("")),i=u,a):(l.push(e),t=e,a+1)}function U(){if(/[^\d\w_]/.test(e)){var r=l.join("");return i=n.indexOf(r)>-1?M:d.indexOf(r)>-1?w:y,L(l.join("")),i=u,a}return l.push(e),t=e,a+1}}function C(e){var t=E(),r=[];return r=(r=r.concat(t(e))).concat(t(null))}function k(e){return C(e)}function D(e){return e.map((e=>"eof"!==e.type?e.data:"")).join("")}const j=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function F(e,t="100",r="300 es"){const a=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const o of e)if("preprocessor"===o.type){const e=a.exec(o.data);if(e){const a=e[1].replace(/\s\s+/g," ");if(a===r)return a;if(a===t)return o.data="#version "+r,t;throw new Error("unknown glsl version: "+a)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}function L(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function S(e,t,r,a){a=a||r;for(const o of e)if("ident"===o.type&&o.data===r){a in t?t[a]++:t[a]=0;return S(e,t,a+"_"+t[a],a)}return r}function R(e,t,r="afterVersion"){function a(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}function o(e){let t=-1,o=0,n=-1;for(let i=0;i<e.length;i++){const l=e[i];if("preprocessor"===l.type&&(l.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++o:l.data.match(/\#endif\s*.*/)&&--o),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===l.type&&/^#version/.test(l.data)&&(n=Math.max(n,i)),"afterPrecision"===r&&"keyword"===l.type&&"precision"===l.data){const t=a(e,i);if(null===t)throw new Error("precision statement not followed by any semicolons!");n=Math.max(n,t)}t<n&&0===o&&(t=i)}return t+1}const n={data:"\n",type:"whitespace"},i=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let l=o(e);i(l-1)&&e.splice(l++,0,n);for(const s of t)e.splice(l++,0,s);i(l-1)&&i(l)&&e.splice(l,0,n)}function V(e,t,r,a="lowp"){R(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function X(e,t,r,a,o="lowp"){R(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:a.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function A(e,t){let r,a,o=-1;for(let n=t;n<e.length;n++){const t=e[n];if("operator"===t.type&&("["===t.data&&(r=n),"]"===t.data)){a=n;break}"integer"===t.type&&(o=parseInt(t.data,10))}return r&&a&&e.splice(r,a-r+1),o}function G(a,o){const n=q(a);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n))return n;const i=k(a);if("300 es"===F(i,"100","300 es"))return a;let l=null,s=null;const c={},d={};for(let e=0;e<i.length;++e){const a=i[e];switch(a.type){case"keyword":o===_enums_js__WEBPACK_IMPORTED_MODULE_2__["ShaderType"].VERTEX_SHADER&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data=o===_enums_js__WEBPACK_IMPORTED_MODULE_2__["ShaderType"].VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replace(/(2D|Cube|EXT)/g,"")),o===_enums_js__WEBPACK_IMPORTED_MODULE_2__["ShaderType"].FRAGMENT_SHADER&&"gl_FragColor"===a.data&&(l||(l=S(i,c,"fragColor"),V(i,l,"vec4")),a.data=l),o===_enums_js__WEBPACK_IMPORTED_MODULE_2__["ShaderType"].FRAGMENT_SHADER&&"gl_FragData"===a.data){const t=A(i,e+1),r=S(i,c,"fragData");X(i,r,"vec4",t,"mediump"),a.data=r}else o===_enums_js__WEBPACK_IMPORTED_MODULE_2__["ShaderType"].FRAGMENT_SHADER&&"gl_FragDepthEXT"===a.data&&(s||(s=S(i,c,"gl_FragDepth")),a.data=s);break;case"ident":if(_reservedWordsGLSL3_js__WEBPACK_IMPORTED_MODULE_3__["default"].indexOf(a.data)>=0){if(o===_enums_js__WEBPACK_IMPORTED_MODULE_2__["ShaderType"].VERTEX_SHADER&&L(i,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in d||(d[a.data]=S(i,c,a.data)),a.data=d[a.data]}}}for(let e=i.length-1;e>=0;--e){const t=i[e];if("preprocessor"===t.type){const r=t.data.match(/\#extension\s+(.*)\:/);if(r&&r[1]&&j.indexOf(r[1].trim())>=0){const t=i[e+1];i.splice(e,t&&"whitespace"===t.type?2:1)}const a=t.data.match(/\#ifdef\s+(.*)/);a&&a[1]&&j.indexOf(a[1].trim())>=0&&(t.data="#if 1");const o=t.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&j.indexOf(o[1].trim())>=0&&(t.data="#if 0")}}return B(a,D(i))}const I={enableCache:!1},O=new Map;function q(e){return I.enableCache?O.get(e):null}function B(e,t){return I.enableCache&&O.set(e,t),t}


/***/ }),

/***/ "SfCL":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js ***!
  \*****************************************************************/
/*! exports provided: ShaderCompiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderCompiler", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class e{constructor(e){this.readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const l=[];for(;null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let a=0,h="";return l.forEach((e=>{h+=r.slice(a,e.start),h+=t.has(e.path)?"":this._resolve(e.path,t),a=e.start+e.length})),h+=r.slice(a),t.set(e,h),h}_read(e){return this.readFile(e)}}


/***/ }),

/***/ "aB/g":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramTemplate.js ***!
  \******************************************************************/
/*! exports provided: createProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return e; });
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program.js */ "jjdI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e,t,a=""){return new _Program_js__WEBPACK_IMPORTED_MODULE_0__["Program"](e,a+t.shaders.vertexShader,a+t.shaders.fragmentShader,t.attributes)}


/***/ }),

/***/ "g9fX":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/reservedWordsGLSL3.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const e=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];


/***/ }),

/***/ "jjdI":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Program.js ***!
  \**********************************************************/
/*! exports provided: Program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return a; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWebGLError.js */ "GVa1");
/* harmony import */ var _context_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-util.js */ "zBXm");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShaderTranspiler.js */ "0bwe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const m=4294967295;class a{constructor(t,o,m,a,h=new Map){this._context=t,this._locations=a,this._uniformBlockBindings=h,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===o.length&&console.error("Shaders source should not be empty!"),this._context.type===_context_util_js__WEBPACK_IMPORTED_MODULE_3__["ContextType"].WEBGL2&&(o=Object(_ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_5__["transpileShader"])(o,_enums_js__WEBPACK_IMPORTED_MODULE_4__["ShaderType"].VERTEX_SHADER),m=Object(_ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_5__["transpileShader"])(m,_enums_js__WEBPACK_IMPORTED_MODULE_4__["ShaderType"].FRAGMENT_SHADER)),this._vShader=f(this._context,_enums_js__WEBPACK_IMPORTED_MODULE_4__["ShaderType"].VERTEX_SHADER,o),this._fShader=f(this._context,_enums_js__WEBPACK_IMPORTED_MODULE_4__["ShaderType"].FRAGMENT_SHADER,m),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_4__["ResourceType"].Shader,this),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["webglValidateShadersEnabled"])()&&(this.vertexShader=o,this.fragmentShader=m)}get glName(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._glName))return this._glName;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._vShader))return null;const n=this._context.gl,s=n.createProgram();if(n.attachShader(s,this._vShader),n.attachShader(s,this._fShader),this._locations.forEach(((t,o)=>n.bindAttribLocation(s,t,o))),n.linkProgram(s),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["webglValidateShadersEnabled"])()&&!n.getProgramParameter(s,n.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${n.getProgramParameter(s,n.VALIDATE_STATUS)}, gl error ${n.getError()}, vertex: ${n.getShaderParameter(this._vShader,n.COMPILE_STATUS)}, fragment: ${n.getShaderParameter(this._fShader,n.COMPILE_STATUS)}, info log: ${n.getProgramInfoLog(s)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===_context_util_js__WEBPACK_IMPORTED_MODULE_3__["ContextType"].WEBGL2){const t=n;for(const[o,i]of this._uniformBlockBindings){const r=t.getUniformBlockIndex(s,o);r<m&&t.uniformBlockBinding(s,r,i)}}return this._glName=s,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_4__["ResourceType"].Program,this),s}get hasGLName(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._glName)}get isCompiled(){if(this._compiled)return!0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==t?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl;this._vShader&&(t.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_4__["ResourceType"].Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_4__["ResourceType"].Program,this))}ref(){++this._refCount}_getUniformLocation(t){return void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this.glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this._getUniformLocation(t)}setUniform1i(t,o){const i=this._nameToUniform1[t];if(void 0===i||o!==i){this._context.gl.uniform1i(this._getUniformLocation(t),o),this._nameToUniform1[t]=o}}setUniform1iv(t,o){const i=this._nameToUniform1v[t];if(h(i,o)){this._context.gl.uniform1iv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform1v[t]=Array.from(o):l(o,i)}}setUniform2iv(t,o){const i=this._nameToUniform2[t];if(h(i,o)){this._context.gl.uniform2iv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform2[t]=Array.from(o):l(o,i)}}setUniform3iv(t,o){const i=this._nameToUniform3[t];if(h(i,o)){this._context.gl.uniform3iv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform3[t]=Array.from(o):l(o,i)}}setUniform4iv(t,o){const i=this._nameToUniform4[t];if(h(i,o)){this._context.gl.uniform4iv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform4[t]=Array.from(o):l(o,i)}}setUniform1f(t,o){const i=this._nameToUniform1[t];if(void 0===i||o!==i){this._context.gl.uniform1f(this._getUniformLocation(t),o),this._nameToUniform1[t]=o}}setUniform1fv(t,o){const i=this._nameToUniform1v[t];if(h(i,o)){this._context.gl.uniform1fv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform1v[t]=Array.from(o):l(o,i)}}setUniform2f(t,o,i){const r=this._nameToUniform2[t];if(void 0===r||o!==r[0]||i!==r[1]){this._context.gl.uniform2f(this._getUniformLocation(t),o,i),void 0===r?this._nameToUniform2[t]=[o,i]:(r[0]=o,r[1]=i)}}setUniform2fv(t,o){const i=this._nameToUniform2[t];if(h(i,o)){this._context.gl.uniform2fv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform2[t]=Array.from(o):l(o,i)}}setUniform3f(t,o,i,r){const n=this._nameToUniform3[t];if(void 0===n||o!==n[0]||i!==n[1]||r!==n[2]){this._context.gl.uniform3f(this._getUniformLocation(t),o,i,r),void 0===n?this._nameToUniform3[t]=[o,i,r]:(n[0]=o,n[1]=i,n[2]=r)}}setUniform3fv(t,o){const i=this._nameToUniform3[t];if(h(i,o)){this._context.gl.uniform3fv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform3[t]=Array.from(o):l(o,i)}}setUniform4f(t,o,i,r,n){const e=this._nameToUniform4[t];if(void 0===e||o!==e[0]||i!==e[1]||r!==e[2]||n!==e[3]){this._context.gl.uniform4f(this._getUniformLocation(t),o,i,r,n),void 0===e?this._nameToUniform4[t]=[o,i,r,n]:(e[0]=o,e[1]=i,e[2]=r,e[3]=n)}}setUniform4fv(t,o){const i=this._nameToUniform4[t];if(h(i,o)){this._context.gl.uniform4fv(this._getUniformLocation(t),o),void 0===i?this._nameToUniform4[t]=Array.from(o):l(o,i)}}setUniformMatrix3fv(t,o,i=!1){const r=this._nameToUniformMatrix3[t];if(g(r,o)){this._context.gl.uniformMatrix3fv(this._getUniformLocation(t),i,o),void 0===r?this._nameToUniformMatrix3[t]=Array.from(o):l(o,r)}}setUniformMatrix4fv(t,o,i=!1){const r=this._nameToUniformMatrix4[t];if(d(r,o)){this._context.gl.uniformMatrix4fv(this._getUniformLocation(t),i,o),void 0===r?this._nameToUniformMatrix4[t]=Array.from(o):l(o,r)}}stop(){}}function h(t,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)||t.length!==i.length)return!0;for(let o=0;o<t.length;++o)if(t[o]!==i[o])return!0;return!1}function f(t,o,e){const s=t.gl,m=s.createShader(o);return s.shaderSource(m,e),s.compileShader(m),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["webglValidateShadersEnabled"])()&&!s.getShaderParameter(m,s.COMPILE_STATUS)&&(console.error("Compile error in ".concat(o===_enums_js__WEBPACK_IMPORTED_MODULE_4__["ShaderType"].VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(s.getShaderInfoLog(m)),console.error(_(e)),t.type===_context_util_js__WEBPACK_IMPORTED_MODULE_3__["ContextType"].WEBGL2&&(console.log("Shader source before transpilation:"),console.log(e))),m}function _(t){let o=2;return t.replace(/\n/g,(()=>"\n"+c(o++)+":"))}function c(t){return t>=1e3?t.toString():("  "+t).slice(-3)}function l(t,o){for(let i=0;i<t.length;++i)o[i]=t[i]}function g(t,i){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)||(9!==t.length?h(t,i):9!==t.length||t[0]!==i[0]||t[1]!==i[1]||t[2]!==i[2]||t[3]!==i[3]||t[4]!==i[4]||t[5]!==i[5]||t[6]!==i[6]||t[7]!==i[7]||t[8]!==i[8])}function d(t,i){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)||(16!==t.length?h(t,i):16!==t.length||t[0]!==i[0]||t[1]!==i[1]||t[2]!==i[2]||t[3]!==i[3]||t[4]!==i[4]||t[5]!==i[5]||t[6]!==i[6]||t[7]!==i[7]||t[8]!==i[8]||t[9]!==i[9]||t[10]!==i[10]||t[11]!==i[11]||t[12]!==i[12]||t[13]!==i[13]||t[14]!==i[14]||t[15]!==i[15])}


/***/ })

}]);
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~a781aefb.js.map