'use strict';

require('./contact.scss');

const angular = require('angular');
angular.module('portApp').directive('contactPage', function() {
  return {
    restrict: 'E',
    template: require('./contact.html'),
    controller: [ContactPageController],
    controllerAs: 'aboutCtrl',
    bindToController: true,
    scope: {}
  };
});

function ContactPageController(){}
