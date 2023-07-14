exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 58312:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13435))

/***/ }),

/***/ 13435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@carbon/react/lib/index.js
var lib = __webpack_require__(57633);
// EXTERNAL MODULE: ./node_modules/@carbon/icons-react/lib/index.js
var icons_react_lib = __webpack_require__(61865);
;// CONCATENATED MODULE: ./src/components/Info/Info.js


// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
    const splitPhrase = phrase.split(" ");
    const thirdWord = splitPhrase.pop();
    return [
        splitPhrase.join(" "),
        thirdWord
    ];
}
const InfoSection = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Grid */.rjZ, {
        className: `${props.className} info-section`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Column */.sgG, {
                md: 8,
                lg: 4,
                xlg: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "info-section__heading",
                    children: props.heading
                })
            }),
            props.children
        ]
    });
const InfoCard = (props)=>{
    const splitHeading = createArrayFromPhrase(props.heading);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Column */.sgG, {
        sm: 4,
        md: 8,
        lg: 4,
        className: "info-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                className: "info-card__heading",
                children: [
                    `${splitHeading[0]} `,
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: splitHeading[1]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "info-card__body",
                children: props.body
            }),
            props.icon()
        ]
    });
};


;// CONCATENATED MODULE: ./src/app/home/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function LandingPage() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Grid */.rjZ, {
        className: "landing-page",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Column */.sgG, {
                lg: 16,
                md: 8,
                sm: 4,
                className: "landing-page__banner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Breadcrumb */.aGc, {
                        noTrailingSlash: true,
                        "aria-label": "Page navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* BreadcrumbItem */.gN6, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                children: "Getting started"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "landing-page__heading",
                        children: "Design & build with Carbon"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Column */.sgG, {
                lg: 16,
                md: 8,
                sm: 4,
                className: "landing-page__r2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Tabs */.mQc, {
                    defaultSelectedIndex: 0,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* TabList */.tdY, {
                            className: "tabs-group",
                            "aria-label": "Page navigation",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Tab */.OK9, {
                                    children: "About"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Tab */.OK9, {
                                    children: "Design"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* Tab */.OK9, {
                                    children: "Develop"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* TabPanels */.nPR, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* TabPanel */.x45, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Grid */.rjZ, {
                                        className: "tabs-group-content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib/* Column */.sgG, {
                                                md: 4,
                                                lg: 7,
                                                sm: 4,
                                                className: "landing-page__tab-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "landing-page__subheading",
                                                        children: "What is Carbon?"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "landing-page__p",
                                                        children: "Carbon is IBM’s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Button */.zxk, {
                                                        children: "Learn more"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Column */.sgG, {
                                                md: 4,
                                                lg: {
                                                    span: 8,
                                                    offset: 7
                                                },
                                                sm: 4,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "landing-page__illo",
                                                    src: `tab-illo.png`,
                                                    layout: "fixed",
                                                    alt: "Carbon illustration"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* TabPanel */.x45, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Grid */.rjZ, {
                                        className: "tabs-group-content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Column */.sgG, {
                                            lg: 16,
                                            md: 8,
                                            sm: 4,
                                            className: "landing-page__tab-content",
                                            children: "Rapidly build beautiful and accessible experiences. The Carbon kit contains all resources you need to get started."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(lib/* TabPanel */.x45, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Grid */.rjZ, {
                                        className: "tabs-group-content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* Column */.sgG, {
                                            lg: 16,
                                            md: 8,
                                            sm: 4,
                                            className: "landing-page__tab-content",
                                            children: "Carbon provides styles and components in Vanilla, React, Next, Angular, and Vue for anyone building on the web."
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Column */.sgG, {
                lg: 16,
                md: 8,
                sm: 4,
                className: "landing-page__r3",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InfoSection, {
                    heading: "The Principles",
                    className: "landing-page__r3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(InfoCard, {
                            heading: "Carbon is Open",
                            body: "It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute.",
                            icon: ()=>/*#__PURE__*/ jsx_runtime_.jsx(icons_react_lib.PersonFavorite, {
                                    size: 32
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InfoCard, {
                            heading: "Carbon is Modular",
                            body: "Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user.",
                            icon: ()=>/*#__PURE__*/ jsx_runtime_.jsx(icons_react_lib.Application, {
                                    size: 32
                                })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(InfoCard, {
                            heading: "Carbon is Consistent",
                            body: "Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.",
                            icon: ()=>/*#__PURE__*/ jsx_runtime_.jsx(icons_react_lib.Globe, {
                                    size: 32
                                })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const page = (LandingPage);


/***/ }),

/***/ 87961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jeremycaine/Documents/code/github.com/jeremycaine/carbon-tutorial-next/src/app/home/page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;