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
import moment from 'moment';
import { block, classNames } from 'common/utils/classNames';
import { Icon } from 'common/components/Icon';
import './SearchResult.less';
var cnSearchResult = block('search-result');
export var SearchResult = function (_a) {
    var className = _a.className, name = _a.name, url = _a.url, updatedAt = _a.updatedAt, stargazerCount = _a.stargazerCount, onNameClick = _a.onNameClick;
    return (_jsxs("div", __assign({ className: classNames(className, cnSearchResult()) }, { children: [_jsx("h3", __assign({ className: classNames('link', cnSearchResult('title')), onClick: onNameClick, "aria-hidden": "true" }, { children: name }), void 0), _jsx("a", __assign({ className: cnSearchResult('url'), href: url, target: "_blank", rel: "noreferrer" }, { children: url }), void 0), _jsxs("span", { children: ["\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043C\u0438\u0442\u0430:", " ".concat(moment(updatedAt).format('DD MMMM, HH:mm'))] }, void 0), _jsxs("div", __assign({ className: cnSearchResult('rating') }, { children: [_jsx(Icon.Star, { width: "8", height: "8" }, void 0), ' ', stargazerCount] }), void 0)] }), void 0));
};
