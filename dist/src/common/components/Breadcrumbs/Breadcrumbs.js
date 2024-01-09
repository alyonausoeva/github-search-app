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
import { Icon } from 'common/components/Icon';
import { block, classNames } from 'common/utils/classNames';
import './Breadcrumbs.less';
var cnBreadcrumbs = block('breadcrumbs');
var renderBreadcrumb = function (_a) {
    var title = _a.title, onClick = _a.onClick;
    return (_jsxs("div", __assign({ className: cnBreadcrumbs('breadcrumb') }, { children: [_jsx(Icon.Arrow, { width: "20", height: "20" }, void 0), onClick
                ? (_jsx("span", __assign({ onClick: onClick, "aria-hidden": "true" }, { children: title }), void 0))
                : title] }), title));
};
export var Breadcrumbs = function (_a) {
    var className = _a.className, items = _a.items;
    return (_jsx("div", __assign({ className: classNames(className, cnBreadcrumbs()) }, { children: items.map(function (item) { return renderBreadcrumb(item); }) }), void 0));
};
