
angular
    .module('toDoList', [
        'ui.router',

        // Features
        'toDoList.create',
        'toDoList.list',
        'toDoList.completed'


    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    // Here we configure the application

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/');
}
