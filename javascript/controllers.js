'use strict';

/* Controllers */

var peopleApp = angular.module('angularApp', []);

peopleApp.controller('PeopleListCtrl', function($scope, $http) { // peopleApp is controller
  $http.get('http://tinder-api.herokuapp.com/people').success(function(data) {
    $scope.people = data;
  });
});

/* version with hardcoded model
peopleApp.controller('PeopleListCtrl', function ($scope) { // peopleApp is controller
  $scope.people = [ // people is model. See it's in plural (rails would be singular)
    {'name': 'Max',
     'avatar': 'http://xoart.link/200/200/man/12',
     'description': 'On the weekends I play cricket.'},
    {'name': 'Zilla',
     'avatar': 'http://xoart.link/200/200/woman/22',
     'description': 'I like pizza and icecream.'},
    {'name': 'Stan',
     'avatar': 'http://xoart.link/200/200/man/26',
     'description': 'Amazing double rainbow.'}
  ];

});

*/
