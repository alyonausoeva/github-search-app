var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect, useContext } from 'react';
var ViewportContext = React.createContext(window.innerWidth);
var ViewportProvider = function (_a) {
    var children = _a.children;
    var _b = useState(window.innerWidth), width = _b[0], setWidth = _b[1];
    function handleResize() {
        setWidth(window.innerWidth);
    }
    useEffect(function () {
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [handleResize]);
    return (_jsx(ViewportContext.Provider, __assign({ value: width }, { children: children }), void 0));
};
function useViewport() {
    var width = useContext(ViewportContext);
    return {
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 768,
        width: width
    };
}
export { ViewportProvider, useViewport };
