'use strict';

require('./_resume.scss');

const angular = require('angular');
angular.module('portApp').directive('resumePage', function() {
  return {
    restrict: 'E',
    template: require('./resume.html'),
    scope: {
      showModal: '&'
    }
  };
});
