'use strict';

angular.module('app').controller('HomeIndexCtrl', function HomeIndexCtrl($scope) {
  var vm = $scope.vm = {};
  vm.clear = function() {
    vm.name = '';
  }
});
