'use strict';
angular.module('templateApp')
  .controller('MainController', [MainController]);

function MainController () {
  var vm = this;
  vm.curIndex = 0;
  vm.questions = [
    "Are you sure?",
    "Ya like rum mon?",
    "What's your zip?",
    "D'ya wanna leave today mon?",
    "Wanna take a train mon?"
  ];

  vm.cur = vm.questions[0];
  vm.change = function(){
    console.log("clicked");
    vm.curIndex++;
    vm.cur = vm.questions[vm.curIndex];
  };

}
