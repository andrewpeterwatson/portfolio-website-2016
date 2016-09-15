'use strict';

require('./about-me.scss');

const angular = require('angular');
angular.module('portApp').directive('aboutMe', function() {
  return {
    restrict: 'E',
    template: require('./about-me.html'),
    controller: [AboutMeController],
    controllerAs: 'aboutCtrl',
    bindToController: true,
    scope: {}
  };
});

function AboutMeController(){}
