'use strict';

require('./_main.scss');
const angular = require('angular');
angular.module('portApp').directive('appMain', function() {
  return {
    restrict: 'E',
    template: require('./main.html'),
    controller: [MainController],
    controllerAs: 'mainCtrl',
    bindToController: true,
    scope: {}
  };
});


function MainController(){

}
