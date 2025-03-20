(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_homepage_sections_mobileCaraouse_page_tsx_aaa4e70e._.js", {

"[project]/src/app/homepage/sections/mobileCaraouse/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MobileCaraousel = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const images = [
        "/images/frame1.png",
        "/images/frame2.png",
        "/images/frame3.png",
        "/images/frame4.png",
        "/images/frame5.png",
        "/images/frame7.png",
        "/images/frame6.png"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileCaraousel.useEffect": ()=>{
            const timer = setInterval({
                "MobileCaraousel.useEffect.timer": ()=>{
                    setCurrentIndex({
                        "MobileCaraousel.useEffect.timer": (prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1
                    }["MobileCaraousel.useEffect.timer"]);
                }
            }["MobileCaraousel.useEffect.timer"], 4000); // Increased time to allow for sequential animations
            return ({
                "MobileCaraousel.useEffect": ()=>clearInterval(timer)
            })["MobileCaraousel.useEffect"];
        }
    }["MobileCaraousel.useEffect"], [
        images.length
    ]);
    const getAdjacentIndexes = ()=>{
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        return {
            prevIndex,
            nextIndex
        };
    };
    const getMultipleAdjacentIndexes = ()=>{
        const prevIndex2 = (currentIndex - 2 + images.length) % images.length;
        const prevIndex1 = (currentIndex - 1 + images.length) % images.length;
        const nextIndex1 = (currentIndex + 1) % images.length;
        const nextIndex2 = (currentIndex + 2) % images.length;
        return {
            prevIndex2,
            prevIndex1,
            nextIndex1,
            nextIndex2
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8 pt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3674] mb-3",
                        children: "Our Mobile App Showcase"
                    }, void 0, false, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4",
                        children: "Experience our intuitive and beautifully designed mobile application interface"
                    }, void 0, false, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[100vh] md:h-screen w-full overflow-hidden bg-white-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    w-[300px] sm:w-[290px] h-[510px] sm:h-[510px] bg-black rounded-[40px] z-20    border-6 sm:border-8 border-[rgb(164, 89, 235)] shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-1/2 transform -translate-x-1/2    w-24 sm:w-32 h-4 sm:h-6 bg-black rounded-b-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                                lineNumber: 64,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full w-full overflow-hidden rounded-[32px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -100
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: 100
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "h-full w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: images[currentIndex],
                                            alt: `Main ${currentIndex + 1}`,
                                            className: "h-full w-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 41
                                        }, this)
                                    }, currentIndex, false, {
                                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                                lineNumber: 68,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hidden lg:block absolute top-1/2 left-[2%] xl:left-[5%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",
                        initial: {
                            x: -100
                        },
                        animate: {
                            x: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: images[getMultipleAdjacentIndexes().prevIndex2],
                            alt: "Previous 2",
                            className: "w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                            lineNumber: 97,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 90,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hidden md:block absolute top-1/2 left-[20%] lg:left-[22%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",
                        initial: {
                            x: -100
                        },
                        animate: {
                            x: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: images[getMultipleAdjacentIndexes().prevIndex1],
                            alt: "Previous 1",
                            className: "w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                            lineNumber: 112,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 105,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hidden md:block absolute top-1/2 right-[20%] lg:right-[22%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",
                        initial: {
                            x: 100
                        },
                        animate: {
                            x: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: images[getMultipleAdjacentIndexes().nextIndex1],
                            alt: "Next 1",
                            className: "w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                            lineNumber: 127,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 120,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hidden lg:block absolute top-1/2 right-[2%] xl:right-[5%] transform -translate-y-1/2    w-[180px] xl:w-[220px] h-[380px] xl:h-[460px]",
                        initial: {
                            x: 100
                        },
                        animate: {
                            x: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: images[getMultipleAdjacentIndexes().nextIndex2],
                            alt: "Next 2",
                            className: "w-full h-full object-cover rounded-lg shadow-xl opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                            lineNumber: 142,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 135,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[85%] sm:top-[90%] left-1/2 transform -translate-x-1/2 flex space-x-2 z-30",
                        children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentIndex(index),
                                className: `w-3 h-3 rounded-full transition-all duration-300 
                                            ${currentIndex === index ? 'bg-purple-600 scale-125' : 'bg-gray-300'}`
                            }, index, false, {
                                fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                                lineNumber: 152,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                        lineNumber: 150,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/homepage/sections/mobileCaraouse/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(MobileCaraousel, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = MobileCaraousel;
const __TURBOPACK__default__export__ = MobileCaraousel;
var _c;
__turbopack_context__.k.register(_c, "MobileCaraousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/homepage/sections/mobileCaraouse/page.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/homepage/sections/mobileCaraouse/page.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_app_homepage_sections_mobileCaraouse_page_tsx_aaa4e70e._.js.map