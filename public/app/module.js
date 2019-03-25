angular
    .module("HomeBrewReddit", ['ngRoute'])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/earthPorn", {
                template: "<earth-porn></earth-porn>"
            })

            .when("/intro", {
                template: "<intro></intro>"
            })

            .when("/aww", {
                template: "<aww></aww>"
            })

            .when("/", {
                template: "<intro></intro>"
            })
    }]);