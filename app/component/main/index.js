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
  const $ = require('jquery');
  this.displayResumeModal = false;

  this.showResumeModal = function(){
    this.displayResumeModal = true;
  };
  this.hideResumeModal = function(){
    this.displayResumeModal = false;
  };
  $('.aboutBtn').click(function() {
    $('.moveAbout').toggleClass('moveAboutActive');
    $('.aboutBackBtnMove').toggleClass('aboutBackBtnMoveActive');
  });

  $('.resumeBtn').click(function() {
    $('.moveResume').toggleClass('moveResumeActive');
    $('.resumeBackBtnMove').toggleClass('resumeBackBtnMoveActive');
  });
}
