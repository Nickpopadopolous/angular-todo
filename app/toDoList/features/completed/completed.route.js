
angular
    .module('toDoList.completed')
    .config(CompletedConfig);

function CompletedConfig($stateProvider) {
    $stateProvider.state({
        name: 'complete',
        url: '/complete',
        templateUrl: 'toDoList/features/completed/completed.html',
        controller: 'CompletedCtrl',
        controllerAs: 'CompletedVM'
    });
}