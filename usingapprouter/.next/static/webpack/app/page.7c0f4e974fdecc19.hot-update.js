"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./componets/usedeffer.tsx":
/*!*********************************!*\
  !*** ./componets/usedeffer.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AppSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _searchresult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchresult */ \"(app-pages-browser)/./componets/searchresult.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AppSearch() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const deferredQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useDeferredValue)(query);\n    console.log(deferredQuery, \"real value ==\", query);\n    const isStale = query !== deferredQuery;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Search albums:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingapprouter\\\\componets\\\\usedeffer.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingapprouter\\\\componets\\\\usedeffer.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    opacity: query !== deferredQuery ? 0.5 : 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingapprouter\\\\componets\\\\usedeffer.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 27\n                    }, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchresult__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        query: deferredQuery\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingapprouter\\\\componets\\\\usedeffer.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingapprouter\\\\componets\\\\usedeffer.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Planet\\\\SampleProjects\\\\NextConcepts\\\\usingapprouter\\\\componets\\\\usedeffer.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AppSearch, \"aM0REM7GAI+x2QmxhdDGahtoXuQ=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_1__.useDeferredValue\n    ];\n});\n_c = AppSearch;\nvar _c;\n$RefreshReg$(_c, \"AppSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmV0cy91c2VkZWZmZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHNkQ7QUFDbEI7QUFFNUIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNSyxnQkFBZ0JOLHVEQUFnQkEsQ0FBQ0k7SUFDekNHLFFBQVFDLEdBQUcsQ0FBQ0YsZUFBYyxpQkFBZ0JGO0lBQzFDLE1BQU1LLFVBQVVMLFVBQVVFO0lBRXhCLHFCQUNFOzswQkFDRSw4REFBQ0k7O29CQUFNO2tDQUVMLDhEQUFDQzt3QkFBTUMsT0FBT1I7d0JBQU9TLFVBQVVDLENBQUFBLElBQUtULFNBQVNTLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUU3RCw4REFBQ0k7Z0JBQUlDLE9BQU87b0JBQ2hCQyxTQUFTZCxVQUFVRSxnQkFBZ0IsTUFBTTtnQkFDM0M7MEJBQ00sNEVBQUNQLDJDQUFRQTtvQkFBQ29CLHdCQUFVLDhEQUFDQztrQ0FBRzs7Ozs7OzhCQUd0Qiw0RUFBQ2xCLHFEQUFhQTt3QkFBQ0UsT0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtHQXZCd0JIOztRQUVBSCxtREFBZ0JBOzs7S0FGaEJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmV0cy91c2VkZWZmZXIudHN4P2RmODgiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBTdXNwZW5zZSwgdXNlRGVmZXJyZWRWYWx1ZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJy4vc2VhcmNocmVzdWx0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFNlYXJjaCgpIHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBkZWZlcnJlZFF1ZXJ5ID0gdXNlRGVmZXJyZWRWYWx1ZShxdWVyeSk7XHJcbmNvbnNvbGUubG9nKGRlZmVycmVkUXVlcnksXCJyZWFsIHZhbHVlID09XCIscXVlcnkpXHJcbmNvbnN0IGlzU3RhbGUgPSBxdWVyeSAhPT0gZGVmZXJyZWRRdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBTZWFyY2ggYWxidW1zOlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17cXVlcnl9IG9uQ2hhbmdlPXtlID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gIG9wYWNpdHk6IHF1ZXJ5ICE9PSBkZWZlcnJlZFF1ZXJ5ID8gMC41IDogMSxcclxufX0+XHJcbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGgyPkxvYWRpbmcuLi48L2gyPn0+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxTZWFyY2hSZXN1bHRzIHF1ZXJ5PXtkZWZlcnJlZFF1ZXJ5fSAvPlxyXG4gICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJTdXNwZW5zZSIsInVzZURlZmVycmVkVmFsdWUiLCJ1c2VTdGF0ZSIsIlNlYXJjaFJlc3VsdHMiLCJBcHBTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwiZGVmZXJyZWRRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJpc1N0YWxlIiwibGFiZWwiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2Iiwic3R5bGUiLCJvcGFjaXR5IiwiZmFsbGJhY2siLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./componets/usedeffer.tsx\n"));

/***/ })

});