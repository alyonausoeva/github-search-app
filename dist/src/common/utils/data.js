export var getNewCurrentRepositories = function (allRepositories, page) { return allRepositories.slice((page - 1) * 10, ((page - 1) * 10) + 10); };
