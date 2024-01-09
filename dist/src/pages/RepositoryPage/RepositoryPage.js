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
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { RepositoryCard } from 'common/components/RepositoryCard';
import { block, classNames } from 'common/utils/classNames';
import { Breadcrumbs } from 'common/components/Breadcrumbs';
import { selectCurrentRepository } from 'store/selectors/selectors';
import { URLS } from 'common/constants/urls';
import { getCurrentRepository } from 'common/sources/pages';
import './RepositoryPage.less';
var cnRepositoryPage = block('repository-page');
export var RepositoryPage = function () {
    var _a;
    var navigate = useNavigate();
    var location = useLocation();
    var currentRepository = useSelector(selectCurrentRepository) || getCurrentRepository((_a = location.state) === null || _a === void 0 ? void 0 : _a.id);
    var breadcrumbs = [{
            title: 'поиск',
            onClick: function () { return navigate(URLS.search); }
        },
        {
            title: 'страница репозитория',
        }];
    return (_jsxs("div", __assign({ className: classNames(cnRepositoryPage(), 'page') }, { children: [_jsx(Breadcrumbs, { className: cnRepositoryPage('breadcrumbs'), items: breadcrumbs }, void 0), currentRepository && (_jsx(RepositoryCard, { name: currentRepository.name, url: currentRepository.url, stargazerCount: currentRepository.stargazerCount, updatedAt: currentRepository.updatedAt, languages: currentRepository.languages.nodes, owner: currentRepository.owner.login, avatarUrl: currentRepository.owner.avatarUrl, ownerUrl: currentRepository.owner.url, description: currentRepository.description }, void 0))] }), void 0));
};
