var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql, useQuery } from '@apollo/client';
export var getAllRepositories = function (value) {
    var _a, _b;
    var allRepositories = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ($value: String = \"is:public\") { \n  search( type: REPOSITORY, query: $value, first: 100) {\n    repos: edges{\n      repo:node{\n        ... on Repository {\n          id,\n          url,\n          name,\n          updatedAt,\n          stargazerCount,\n          languages(first: 100) {\n          nodes {\n            name\n          }\n          },\n          owner {\n            login,\n            url,\n            avatarUrl\n          },\n          description\n        },\n      }\n    },\n  }\n}\n"], ["\n  query ($value: String = \"is:public\") { \n  search( type: REPOSITORY, query: $value, first: 100) {\n    repos: edges{\n      repo:node{\n        ... on Repository {\n          id,\n          url,\n          name,\n          updatedAt,\n          stargazerCount,\n          languages(first: 100) {\n          nodes {\n            name\n          }\n          },\n          owner {\n            login,\n            url,\n            avatarUrl\n          },\n          description\n        },\n      }\n    },\n  }\n}\n"])));
    var data = useQuery(allRepositories, { variables: { value: value } }).data;
    return (_b = (_a = data === null || data === void 0 ? void 0 : data.search) === null || _a === void 0 ? void 0 : _a.repos) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
        var repo = _a.repo;
        return repo;
    });
};
export var getCurrentRepository = function (id) {
    var currentRepository = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query repository($id:  ID!){ \n    node(id: $id){\n    ... on Repository {\n          id,\n          url,\n          name,\n          updatedAt,\n          stargazerCount,\n          languages(first: 100) {\n          nodes {\n            name\n          }\n          },\n          owner {\n            login,\n            url,\n            avatarUrl\n          },\n          description\n    }\n  }\n}  \n"], ["\n  query repository($id:  ID!){ \n    node(id: $id){\n    ... on Repository {\n          id,\n          url,\n          name,\n          updatedAt,\n          stargazerCount,\n          languages(first: 100) {\n          nodes {\n            name\n          }\n          },\n          owner {\n            login,\n            url,\n            avatarUrl\n          },\n          description\n    }\n  }\n}  \n"])));
    var data = useQuery(currentRepository, { variables: { id: id } }).data;
    return data === null || data === void 0 ? void 0 : data.node;
};
export var getCurrentUserRepositories = function (owner) {
    var _a, _b;
    var currentUserRepositories = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query Repos($owner: String!) {\n    repositoryOwner(login: $owner) {\n      repositories(\n              first: 100\n      ownerAffiliations: OWNER\n      privacy: PUBLIC\n      orderBy: { field: NAME, direction: ASC }\n    ) {\n        nodes {\n          id,\n          url,\n          name,\n          updatedAt,\n          stargazerCount,\n          languages(first: 100) {\n          nodes {\n            name\n          }\n          },\n          owner {\n            login,\n            url,\n            avatarUrl\n          },\n          description\n        }\n      }\n    }\n  }\n"], ["\n  query Repos($owner: String!) {\n    repositoryOwner(login: $owner) {\n      repositories(\n              first: 100\n      ownerAffiliations: OWNER\n      privacy: PUBLIC\n      orderBy: { field: NAME, direction: ASC }\n    ) {\n        nodes {\n          id,\n          url,\n          name,\n          updatedAt,\n          stargazerCount,\n          languages(first: 100) {\n          nodes {\n            name\n          }\n          },\n          owner {\n            login,\n            url,\n            avatarUrl\n          },\n          description\n        }\n      }\n    }\n  }\n"])));
    var data = useQuery(currentUserRepositories, { variables: { owner: owner } }).data;
    return (_b = (_a = data === null || data === void 0 ? void 0 : data.repositoryOwner) === null || _a === void 0 ? void 0 : _a.repositories) === null || _b === void 0 ? void 0 : _b.nodes;
};
var templateObject_1, templateObject_2, templateObject_3;
