"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Loading.js


// import styles from "../styles//Loading.module.css";
function Loading(props) {
    return(// <div className={props.loading ? styles.body_loading : styles.none}>
    // {/* <style jsx>{`
    //   `}</style>
    //   <div
    //     className={styles.lds_ellipsis}
    //   >
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //   </div> */}
    // </div>
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
    }));
}
/* harmony default export */ const components_Loading = (Loading);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./pages/_app.js









function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleStart = (url)=>{
            url !== router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url)=>setLoading(false)
        ;
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [
        router
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Loading, {
                loading: loading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3740));
module.exports = __webpack_exports__;

})();