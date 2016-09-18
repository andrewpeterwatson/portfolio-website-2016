'use strict';

require('./_resume-modal.scss');

const angular = require('angular');
angular.module('portApp').directive('resumeModal', function() {
  return {
    restrict: 'E',
    template: require('./resume-modal.html'),
    scope: {
      closeModal: '&'
    }
  };
});
