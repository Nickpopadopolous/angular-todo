angular
    .module('toDoList.create')
    .config(CreateConfig);

function CreateConfig($stateProvider) {
    $stateProvider.state({
        name: 'create',
        url: '/create',
        templateUrl: 'toDoList/features/create/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'
    });
}