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
import { block, classNames } from 'common/utils/classNames';
import './Pagination.less';
var cnPagination = block('pagination');
export var Pagination = function (_a) {
    var className = _a.className, activePage = _a.activePage, total = _a.total, onClick = _a.onClick;
    var pages = [];
    for (var i = 1; i <= Math.ceil(total / 10); i++) {
        pages.push(i);
    }
    return (_jsx("div", __assign({ className: classNames(className, cnPagination()) }, { children: pages.map(function (page) { return (_jsx("div", __assign({ className: cnPagination('page', { active: page === activePage }), onClick: function () { return onClick(page); }, "aria-hidden": "true" }, { children: page }), page)); }) }), void 0));
};
