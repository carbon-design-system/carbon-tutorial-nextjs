exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 33238:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 70614:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37911))

/***/ }),

/***/ 37911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@carbon/react/lib/index.js
var lib = __webpack_require__(57633);
// EXTERNAL MODULE: ./node_modules/@carbon/icons-react/lib/index.js
var icons_react_lib = __webpack_require__(61865);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/TutorialHeader/TutorialHeader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const TutorialHeader = ()=>/*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderContainer */.gMZ, {
        render: ({ isSideNavExpanded, onClickSideNavExpand })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Header */.h4i, {
                "aria-label": "Carbon Tutorial",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* SkipToContent */.zl5, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderMenuButton */.wID, {
                        "aria-label": "Open menu",
                        onClick: onClickSideNavExpand,
                        isActive: isSideNavExpanded
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        passHref: true,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderName */.nho, {
                            prefix: "IBM",
                            children: "Carbon Tutorial"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderNavigation */.F1E, {
                        "aria-label": "Carbon Tutorial",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/repos",
                            passHref: true,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderMenuItem */.h1_, {
                                children: "Repositories"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* SideNav */.kwZ, {
                        "aria-label": "Side navigation",
                        expanded: isSideNavExpanded,
                        isPersistent: false,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* SideNavItems */.LDp, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderSideNavItems */.YJg, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/repos",
                                    passHref: true,
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderMenuItem */.h1_, {
                                        children: "Repositories"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* HeaderGlobalBar */.sLE, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderGlobalAction */.JMr, {
                                "aria-label": "Notifications",
                                tooltipAlignment: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_lib.Notification, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderGlobalAction */.JMr, {
                                "aria-label": "User Avatar",
                                tooltipAlignment: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_lib.UserAvatar, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* HeaderGlobalAction */.JMr, {
                                "aria-label": "App Switcher",
                                tooltipAlignment: "end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_lib.Switcher, {
                                    size: 20
                                })
                            })
                        ]
                    })
                ]
            })
    });
/* harmony default export */ const TutorialHeader_TutorialHeader = (TutorialHeader);

;// CONCATENATED MODULE: ./src/app/providers.js
/* __next_internal_client_entry_do_not_use__ Providers auto */ 


function Providers({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Theme */.Q2A, {
                theme: "g100",
                children: /*#__PURE__*/ jsx_runtime_.jsx(TutorialHeader_TutorialHeader, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Content */.VYI, {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 33423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(39675);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./src/app/providers.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/jeremycaine/Documents/code/github.com/jeremycaine/carbon-tutorial-next/src/app/providers.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

;// CONCATENATED MODULE: ./src/app/layout.js



const metadata = {
    title: "Carbon + Next13",
    description: "IBM Carbon Tutorial with NextJS 13"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 39675:
/***/ (() => {



/***/ })

};
;