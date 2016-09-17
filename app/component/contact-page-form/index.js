'use strict';

require('./contact-form.scss');

const angular = require('angular');
angular.module('portApp').directive('contactForm', function() {
  return {
    restrict: 'E',
    template: require('./contact-form.html'),
    controller: [ContactFormController],
    controllerAs: 'contactFormCtrl',
    bindToController: true,
    scope: {}
  };
});

function ContactFormController(){}
