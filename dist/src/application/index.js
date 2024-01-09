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
import React, { Suspense } from 'react';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ViewportProvider } from 'common/hooks/useViewport';
import { ROUTES } from './routes';
import { store } from '../store';
var container = document.getElementById('root');
var root = container && createRoot(container);
var ACCESS_KEY = import.meta.env.VITE_SOME_KEY;
var httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});
var authLink = setContext(function (_, _a) {
    var headers = _a.headers;
    return ({
        headers: __assign(__assign({}, headers), { authorization: "Bearer ".concat(ACCESS_KEY) }),
    });
});
var client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    search: relayStylePagination(['query']),
                },
            },
        },
    }),
});
var Application = function () { return (_jsx(React.StrictMode, { children: _jsx(Provider, __assign({ store: store }, { children: _jsx(ViewportProvider, { children: _jsx(BrowserRouter, { children: _jsx(ApolloProvider, __assign({ client: client }, { children: _jsx(Suspense, { children: _jsx(Routes, { children: ROUTES.map(function (route) { return (_jsx(Route, __assign({}, route), route.path)); }) }, void 0) }, void 0) }), void 0) }, void 0) }, void 0) }), void 0) }, void 0)); };
root === null || root === void 0 ? void 0 : root.render(_jsx(Application, {}, void 0));
