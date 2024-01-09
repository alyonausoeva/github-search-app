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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { block, classNames } from 'common/utils/classNames';
import './Spinner.less';
var cnSpinner = block('spinner');
export var Spinner = function (_a) {
    var className = _a.className;
    return (_jsx("div", __assign({ className: classNames(className, cnSpinner()) }, { children: _jsxs("div", __assign({ className: cnSpinner('wrapper') }, { children: [_jsx("div", { className: cnSpinner('view') }, void 0), _jsx("div", { className: cnSpinner('view') }, void 0), _jsx("div", { className: cnSpinner('view') }, void 0)] }), void 0) }), void 0));
};
