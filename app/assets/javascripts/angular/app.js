var myApp = angular.module('RailsWithAngular', ['ngRoute', 'ngResource']);

//Routes

//myApp.config([
//    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//        $routeProvider.when('/users/sign_up', {
//            templateUrl: '/templates/users/registration.html',
//            controller: 'SignUpCtr'
//        });
//        $routeProvider.when('/profile', {
//            templateUrl: '/templates/users/index.html',
//            controller: 'GetUserCtr'
//        });
//
//        $routeProvider.when('/products', {
//            templateUrl: '/templates/products/index.html',
//            controller: 'ProductListCtr'
//        });
//        $routeProvider.when('/products/new', {
//            templateUrl: '/templates/products/new.html',
//            controller: 'ProductAddCtr'
//        });
//        $routeProvider.when('/products/:id/edit', {
//            templateUrl: '/templates/products/edit.html',
//            controller: "ProductUpdateCtr"
//        });
//        $routeProvider.otherwise({
//            redirectTo: '/products'
//        });
//    }
//])
//;