"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/data_fetching/getstaticprops",{

/***/ "./pages/data_fetching/getstaticprops/index.tsx":
/*!******************************************************!*\
  !*** ./pages/data_fetching/getstaticprops/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSG = true;\nfunction Page(param) {\n    let { repo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"If you export a function called getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingpagerouter\\\\pages\\\\data_fetching\\\\getstaticprops\\\\index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"As getStaticProps runs only on the server-side, it will never run on the client-side. It won’t even be included in the JS bundle for the browser, so you can write direct database queries without them being sent to browsers.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingpagerouter\\\\pages\\\\data_fetching\\\\getstaticprops\\\\index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"An API route is used to fetch some data from a CMS. That API route is then called directly from getStaticProps. This produces an additional call, reducing performance. Instead, the logic for fetching the data from the CMS can be shared by using a lib/ directory. Then it can be shared with getStaticProps.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingpagerouter\\\\pages\\\\data_fetching\\\\getstaticprops\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingpagerouter\\\\pages\\\\data_fetching\\\\getstaticprops\\\\index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: repo.stargazers_count\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingpagerouter\\\\pages\\\\data_fetching\\\\getstaticprops\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingpagerouter\\\\pages\\\\data_fetching\\\\getstaticprops\\\\index.tsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXRhX2ZldGNoaW5nL2dldHN0YXRpY3Byb3BzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFlZSxTQUFTQSxLQUFLLEtBRW9CO1FBRnBCLEVBQzNCQyxJQUFJLEVBQzJDLEdBRnBCO0lBRzNCLHFCQUNFO2tCQUNBLDRFQUFDQzs7OEJBQ0MsOERBQUNDOzhCQUFHOzs7Ozs7OEJBR0osOERBQUNDOzhCQUFHOzs7Ozs7OEJBR0osOERBQUNDOzhCQUFHOzs7Ozs7OEJBR0osOERBQUNBOzs7Ozs4QkFHRCw4REFBQ0M7OEJBQ0FMLEtBQUtNLGdCQUFnQjs7Ozs7Ozs7Ozs7OztBQUs1QjtLQXhCd0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RhdGFfZmV0Y2hpbmcvZ2V0c3RhdGljcHJvcHMvaW5kZXgudHN4Pzg1MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSwgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG4gXHJcbnR5cGUgUmVwbyA9IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGFyZ2F6ZXJzX2NvdW50OiBudW1iZXJcclxufVxyXG4gXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IChhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzJylcclxuICBjb25zdCByZXBvID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiB7IHByb3BzOiB7IHJlcG8gfSB9XHJcbn0pIHNhdGlzZmllcyBHZXRTdGF0aWNQcm9wczx7XHJcbiAgcmVwbzogUmVwb1xyXG59PlxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe1xyXG4gIHJlcG8sXHJcbn06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5cclxuICAgICAgSWYgeW91IGV4cG9ydCBhIGZ1bmN0aW9uIGNhbGxlZCBnZXRTdGF0aWNQcm9wcyAoU3RhdGljIFNpdGUgR2VuZXJhdGlvbikgZnJvbSBhIHBhZ2UsIE5leHQuanMgd2lsbCBwcmUtcmVuZGVyIHRoaXMgcGFnZSBhdCBidWlsZCB0aW1lIHVzaW5nIHRoZSBwcm9wcyByZXR1cm5lZCBieSBnZXRTdGF0aWNQcm9wcy5cclxuICAgICAgPC9oMT5cclxuICAgICAgPGgyPlxyXG4gICAgICBBcyBnZXRTdGF0aWNQcm9wcyBydW5zIG9ubHkgb24gdGhlIHNlcnZlci1zaWRlLCBpdCB3aWxsIG5ldmVyIHJ1biBvbiB0aGUgY2xpZW50LXNpZGUuIEl0IHdvbuKAmXQgZXZlbiBiZSBpbmNsdWRlZCBpbiB0aGUgSlMgYnVuZGxlIGZvciB0aGUgYnJvd3Nlciwgc28geW91IGNhbiB3cml0ZSBkaXJlY3QgZGF0YWJhc2UgcXVlcmllcyB3aXRob3V0IHRoZW0gYmVpbmcgc2VudCB0byBicm93c2Vycy5cclxuICAgICAgPC9oMj5cclxuICAgICAgPGgzPlxyXG4gICAgICBBbiBBUEkgcm91dGUgaXMgdXNlZCB0byBmZXRjaCBzb21lIGRhdGEgZnJvbSBhIENNUy4gVGhhdCBBUEkgcm91dGUgaXMgdGhlbiBjYWxsZWQgZGlyZWN0bHkgZnJvbSBnZXRTdGF0aWNQcm9wcy4gVGhpcyBwcm9kdWNlcyBhbiBhZGRpdGlvbmFsIGNhbGwsIHJlZHVjaW5nIHBlcmZvcm1hbmNlLiBJbnN0ZWFkLCB0aGUgbG9naWMgZm9yIGZldGNoaW5nIHRoZSBkYXRhIGZyb20gdGhlIENNUyBjYW4gYmUgc2hhcmVkIGJ5IHVzaW5nIGEgbGliLyBkaXJlY3RvcnkuIFRoZW4gaXQgY2FuIGJlIHNoYXJlZCB3aXRoIGdldFN0YXRpY1Byb3BzLlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxwPlxyXG4gICAgICB7cmVwby5zdGFyZ2F6ZXJzX2NvdW50fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJQYWdlIiwicmVwbyIsImRpdiIsImgxIiwiaDIiLCJoMyIsInAiLCJzdGFyZ2F6ZXJzX2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/data_fetching/getstaticprops/index.tsx\n"));

/***/ })

});