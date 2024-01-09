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
import './Button.less';
var cnButton = block('button');
export var ButtonType;
(function (ButtonType) {
    ButtonType["link"] = "link";
    ButtonType["invisible"] = "invisible";
})(ButtonType || (ButtonType = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["s"] = "s";
    ButtonSize["m"] = "m";
    ButtonSize["l"] = "l";
})(ButtonSize || (ButtonSize = {}));
export var ButtonStyle;
(function (ButtonStyle) {
    ButtonStyle["secondary"] = "secondary";
})(ButtonStyle || (ButtonStyle = {}));
export var Button = function (_a) {
    var children = _a.children, className = _a.className, type = _a.type, _b = _a.size, size = _b === void 0 ? ButtonSize.m : _b, style = _a.style, href = _a.href, onClick = _a.onClick;
    var buttonClassName = classNames(className, cnButton({ type: type, size: size, style: style }));
    switch (type) {
        case ButtonType.link:
            return (_jsx("a", __assign({ className: buttonClassName, href: href, target: "_blank", rel: "noopener noreferrer" }, { children: children }), void 0));
        case ButtonType.invisible:
        default:
            return (_jsx("button", __assign({ className: buttonClassName, type: "button", onClick: onClick }, { children: _jsx("span", __assign({ className: cnButton('wrapper') }, { children: children }), void 0) }), void 0));
    }
};
