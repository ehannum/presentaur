var app = angular.module('myApp', ['ngRoute', 'btford.socket-io'])

.config(['$routeProvider', function ($routeProvider) {
  // all of these just append to <div ng-view> in index.html
  $routeProvider.when('/', {
    controller: 'SplashController',
    templateUrl: 'templates/splash.html'
  }).when('/new', {
    controller: 'NewController',
    templateUrl: 'templates/new.html'
  }).when('/account/:id', {
    controller: 'AccountController',
    templateUrl: 'templates/account.html'
  }).when('/signup/:id', {
    controller: 'SignupController',
    templateUrl: 'templates/signup.html'
  }).when('/dj/:id', {
    controller: 'DjController',
    templateUrl: 'templates/dj.html'
  }).when('/present/:id', {
    controller: 'PresentController',
    templateUrl: 'templates/present.html'
  }).when('/404', {
    templateUrl: 'templates/404.html'
  }).when('/test', {
    templateUrl: 'templates/login.html'
  })
  .otherwise({redirectTo: '/new'});
}])

.run(function ($rootScope) {
  $rootScope.id = '';
});