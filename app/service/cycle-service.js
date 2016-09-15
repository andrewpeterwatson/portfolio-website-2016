'use strict';


const angular = require('angular');

angular.module('portApp').factory('cycleService', [cycleService]);


function cycleService(){

  let service = {};
  let idx = 0;
  let testArr = ['1', '2', '3', '4'];
  service.changeImage = function(idx){
    return service.showImage = testArr[idx];
  };
  service.nextImage = function(){
    service.changeImage(testArr[idx]);
    idx = (idx + 1) % testArr.length;
  };
  service.nextImage();

  return service;
}
