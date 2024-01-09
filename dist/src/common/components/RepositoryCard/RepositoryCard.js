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
import { Button, ButtonSize, ButtonStyle, ButtonType } from 'common/components/Button';
import './RepositoryCard.less';
var cnRepositoryCard = block('repository-card');
export var RepositoryCard = function (_a) {
    var className = _a.className, name = _a.name, url = _a.url, avatarUrl = _a.avatarUrl, stargazerCount = _a.stargazerCount, updatedAt = _a.updatedAt, languages = _a.languages, owner = _a.owner, ownerUrl = _a.ownerUrl, description = _a.description;
    var programmingLanguages = languages.length
        && "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u044F\u0437\u044B\u043A\u0438: ".concat(languages.map(function (language) { return " ".concat(language.name); }));
    return (_jsxs("div", __assign({ className: classNames(className, cnRepositoryCard()) }, { children: [_jsx("h1", __assign({ className: cnRepositoryCard('title') }, { children: name }), void 0), _jsxs("div", __assign({ className: cnRepositoryCard('header') }, { children: [_jsxs("div", { children: [_jsx("div", __assign({ className: cnRepositoryCard('img') }, { children: avatarUrl
                                    ? (_jsx("img", { src: avatarUrl, alt: "repository owner" }, void 0)) : (_jsx(Icon.RepositoryOwner, { width: 200, height: 200 }, void 0)) }), void 0), _jsx(Button, __assign({ className: cnRepositoryCard('button'), type: ButtonType.link, size: ButtonSize.l, style: ButtonStyle.secondary, href: url }, { children: "git-hub" }), void 0)] }, void 0), _jsxs("div", __assign({ className: cnRepositoryCard('info') }, { children: [_jsxs("div", { children: ["\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446:", _jsx("a", __assign({ className: "link", href: ownerUrl, target: "_blank", rel: "noreferrer" }, { children: " ".concat(owner) }), void 0)] }, void 0), _jsx("div", { children: updatedAt && "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043A\u043E\u043C\u043C\u0438\u0442: ".concat(moment(updatedAt).format('DD MMMM, HH:mm')) }, void 0), _jsx("div", { children: programmingLanguages }, void 0), _jsxs("div", __assign({ className: cnRepositoryCard('stargazer-count') }, { children: [_jsx(Icon.Star, { width: "8", height: "8" }, void 0), " ".concat(stargazerCount)] }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: cnRepositoryCard('description') }, { children: [_jsx("h4", { children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }, void 0), _jsx("p", { children: description || 'Владелец репозитория не оставил описания' }, void 0)] }), void 0)] }), void 0));
};
