import { lazy } from 'react';
import { URLS } from 'common/constants/urls';
var SearchPage = lazy(function () { return import('pages/SearchPage'); });
var RepositoryPage = lazy(function () { return import('pages/RepositoryPage'); });
export var ROUTES = [
    {
        path: URLS.search,
        Component: SearchPage,
        exact: true
    },
    {
        path: URLS.repositoryPage,
        Component: RepositoryPage,
        exact: true
    }
];
