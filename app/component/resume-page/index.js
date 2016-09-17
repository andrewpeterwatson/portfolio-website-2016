'use strict';

require('./resume.scss');

const angular = require('angular');
angular.module('portApp').directive('resumePage', function() {
  return {
    restrict: 'E',
    template: require('./resume.html'),
    controller: [ResumePageController],
    controllerAs: 'resumeCtrl',
    bindToController: true,
    scope: {}
  };
});

function ResumePageController(){}
