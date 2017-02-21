angular.module('app', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
  (
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider
  ) => {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/contactList.html',
        controller: App.controllers.ContactList,
        controllerAs: 'vm'
      })
      .state('details', {
        url: '/details/:firstName',
        templateUrl: '/views/contactDetails.html',
        controller: App.controllers.ContactDetails,
        controllerAs: 'vm'
      })

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }])
