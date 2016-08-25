'use strict';

require('./project-preview.scss');

const angular = require('angular');
angular.module('portApp').directive('projectPreview', function() {
  return {
    restrict: 'E',
    template: require('./project-preview.html'),
    controller: [PreviewController],
    controllerAs: 'preCtrl',
    bindToController: true,
    scope: {}
  };
});

function PreviewController(){}
