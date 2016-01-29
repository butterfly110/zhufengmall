import angular from 'angular'
import template from './ware.jade'
import controller from './ware.controller'

function routes($stateProvider) {
    $stateProvider
        .state('ware', {
            url: '/ware',
            template: template,
            controller: controller,
            controllerAs: 'wareCtrl',
            bindToController: true
        });
}

routes.$inject = ['$stateProvider'];

export default routes;

