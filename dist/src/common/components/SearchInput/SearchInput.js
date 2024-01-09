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
import { useRef, useState } from 'react';
import { block, classNames } from 'common/utils/classNames';
import { Button, ButtonSize, ButtonType } from 'common/components/Button';
import { KeyboardKey } from 'common/constants/keyCode';
import { Icon } from 'common/components/Icon';
import { useViewport } from 'common/hooks/useViewport';
import './SearchInput.less';
var cnSearchInput = block('search-input');
export var SearchInput = function (_a) {
    var className = _a.className, placeholder = _a.placeholder, fixedValue = _a.fixedValue, switchSuggestions = _a.switchSuggestions, onSearch = _a.onSearch;
    var inputRef = useRef(null);
    var isMobile = useViewport().isMobile;
    var _b = useState(fixedValue || ''), value = _b[0], setValue = _b[1];
    var handleChange = function () {
        var _a;
        var newValue = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value;
        setValue(newValue || '');
    };
    var handleFocus = function () {
        if (value && switchSuggestions) {
            switchSuggestions(true);
        }
    };
    var clearInput = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setValue('');
    };
    var handleSearch = function () {
        if (onSearch) {
            onSearch(value);
        }
        if (switchSuggestions) {
            switchSuggestions(false);
        }
    };
    var handleKeyDown = function (evt) {
        if (evt.key === KeyboardKey.arrowUp || evt.key === KeyboardKey.arrowDown) {
            evt.preventDefault();
        }
    };
    var handleKeyUp = function (evt) {
        if (evt.key === KeyboardKey.arrowUp || evt.key === KeyboardKey.arrowDown) {
            evt.preventDefault();
        }
        if (evt.key === KeyboardKey.enter) {
            handleSearch();
        }
        if (evt.key === KeyboardKey.esc) {
            clearInput();
        }
    };
    return (_jsxs("div", __assign({ className: classNames(className, cnSearchInput()) }, { children: [_jsxs("div", __assign({ className: cnSearchInput('field-wrapper', { 'has-value': !!value }) }, { children: [_jsx("input", { className: cnSearchInput('field'), ref: inputRef, value: value, type: "text", placeholder: placeholder, onKeyDown: handleKeyDown, onKeyUp: handleKeyUp, onChange: handleChange, onFocus: handleFocus }, void 0), _jsx("button", __assign({ className: cnSearchInput('clear', { visible: !!value }), type: "button", onClick: clearInput, "aria-label": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" }, { children: _jsx(Icon.CrossGray, { className: cnSearchInput('clear-icon') }, void 0) }), void 0)] }), void 0), isMobile ? (_jsx(Button, __assign({ className: cnSearchInput('lens'), type: ButtonType.invisible, onClick: handleSearch }, { children: _jsx(Icon.Lens, { width: 35, height: 35 }, void 0) }), void 0)) : (_jsx(Button, __assign({ size: ButtonSize.l, onClick: handleSearch }, { children: "\u041D\u0430\u0439\u0442\u0438" }), void 0))] }), void 0));
};
