angular
    .module('toDoList.list')
    .config(ListConfig);

function ListConfig($stateProvider) {
    $stateProvider.state({
        name: 'list',
        url: '/',
        templateUrl: 'toDoList/features/list/list.html',
        controller: 'ListCtrl',
        controllerAs: 'ListVM'
    });
}