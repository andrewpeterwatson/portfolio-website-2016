'use strict';

require('./_main.scss');

const angular = require('angular');
angular.module('portApp')
.directive('appMain', function() {
  return {
    restrict: 'E',
    template: require('./main.html'),
    controller: 'MainController',
    controllerAs: 'mainCtrl',
    bindToController: true,
    scope: {}
  };
})
.controller('MainController', [MainController]);

function MainController(){
  var $ = require('jquery');

  $('.aboutBtn').click(function() {
    $('.moveAbout').toggleClass('moveAboutActive');
    $('.aboutBackBtnMove').toggleClass('aboutBackBtnMoveActive');
  });
  $('.aboutBackBtn').click(function() {
    console.log('clicked');
    $('.moveAboutActive').toggleClass('moveAbout');
    // $('.aboutBackBtnMoveActive').toggleClass('aboutBackBtnMove');
  });


}
