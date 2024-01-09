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
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchInput } from 'common/components/SearchInput';
import { SearchResult } from 'common/components/SearchResult';
import { block, classNames } from 'common/utils/classNames';
import { getAllRepositories, getCurrentUserRepositories } from 'common/sources/pages';
import { URLS } from 'common/constants/urls';
import { getActionCreators } from 'store/actions';
import { Pagination } from 'common/components/Pagination/Pagination';
import { Spinner } from 'common/components/Spinner';
import { getNewCurrentRepositories } from 'common/utils/data';
import { NO_RESULTS_TEXT, PLACEHOLDER } from 'common/constants/text';
import { CURRENT_USER } from 'common/constants/user';
import './SearchPage.less';
var cnSearchPage = block('search-page');
export var SearchPage = function () {
    var _a;
    var navigate = useNavigate();
    var location = useLocation();
    var actionCreators = getActionCreators();
    var _b = useState([]), currentSearchResults = _b[0], setCurrentSearchResults = _b[1];
    var _c = useState((_a = location.state) === null || _a === void 0 ? void 0 : _a.value), value = _c[0], setValue = _c[1];
    var _d = useState(1), activePage = _d[0], setActivePage = _d[1];
    var allSearchResults = value
        ? getAllRepositories(value) : getCurrentUserRepositories(CURRENT_USER);
    if (allSearchResults && !(currentSearchResults === null || currentSearchResults === void 0 ? void 0 : currentSearchResults.length)) {
        setCurrentSearchResults(allSearchResults === null || allSearchResults === void 0 ? void 0 : allSearchResults.slice(0, 10));
    }
    var updateCurrentSearchResults = function (page) {
        var newCurrentSearchResults = allSearchResults && getNewCurrentRepositories(allSearchResults, page);
        setCurrentSearchResults(newCurrentSearchResults);
    };
    var handlePagination = function (page) {
        updateCurrentSearchResults(page);
        setActivePage(page);
    };
    var onRepositoryNameClick = function (repository) {
        actionCreators.setCurrentRepository(repository);
        navigate(URLS.repositoryPage, { state: { id: repository.id } });
    };
    var onSearch = function (q) {
        setValue(q);
        navigate(URLS.search, { state: { value: q } });
    };
    useEffect(function () {
        if (value) {
            updateCurrentSearchResults(1);
        }
    }, [value]);
    var Results = (allSearchResults === null || allSearchResults === void 0 ? void 0 : allSearchResults.length)
        ? currentSearchResults === null || currentSearchResults === void 0 ? void 0 : currentSearchResults.map(function (repositoryInfo) { return (_jsx(SearchResult, { name: repositoryInfo.name, url: repositoryInfo.url, updatedAt: repositoryInfo.updatedAt, stargazerCount: repositoryInfo.stargazerCount, onNameClick: function () { return onRepositoryNameClick(repositoryInfo); } }, repositoryInfo.id)); })
        : NO_RESULTS_TEXT;
    return (_jsxs("div", __assign({ className: classNames(cnSearchPage(), 'page') }, { children: [_jsx(SearchInput, { className: cnSearchPage('input'), onSearch: onSearch, placeholder: PLACEHOLDER, fixedValue: value }, void 0), !(currentSearchResults === null || currentSearchResults === void 0 ? void 0 : currentSearchResults.length)
                ? (_jsx(Spinner, { className: cnSearchPage('spinner') }, void 0))
                : (_jsx("div", __assign({ className: cnSearchPage('results') }, { children: Results }), void 0)), _jsx(Pagination, { activePage: activePage, total: allSearchResults === null || allSearchResults === void 0 ? void 0 : allSearchResults.length, onClick: handlePagination }, void 0)] }), void 0));
};
