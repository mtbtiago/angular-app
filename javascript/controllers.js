'use strict';

/* Controllers */

var peopleApp = angular.module('angularApp', []);

peopleApp.controller('PeopleListCtrl', function($scope, $http) { // peopleApp is controller
  $http.get('http://tinder-api.herokuapp.com/people').success(function(data) {
    var people = data;

    people.forEach(function(person) {
      var latitude = person.latitude;
      var longitude = person.longitude;
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true_or_false';

      ajax(url, {}, function(response) {
        var city = response.results[0].address_components[3].long_name;
        person.city = city;
        $scope.$apply();
      });
    });

    $scope.people = people;
  });
});

function ajax(url, data, callback) {
  var xhr = new XMLHttpRequest();

  xhr.open("POST", url);
  xhr.send(data);
  xhr.onload = function(event) {
    var response = JSON.parse(event.target.response);
    callback(response);
  };
};

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
