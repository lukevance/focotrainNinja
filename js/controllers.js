'use strict';
angular.module('templateApp')
  .controller('MainController', [MainController]);

function MainController() {
  var vm = this;
  vm.input = "";
  vm.curIndex = 0;
  vm.questions = [
    "",
    "No problem mon, can you ansah some questions?",
    "Yawanna leave today mon?",
    "Wanna take a train mon?",
    "Wassya name mon?",
    "How d'ya identify mon? (M/F/*)",
    "Gimme ya digits mon?",
    "Wassya address mon?",
    "Howabowt ya email mon?",
    "Ya sure yawanna go to Jamaica?",
    "YA CAHNT TAKE A TRAIN TO JAMAICA MON!"
  ];
  vm.cur = vm.questions[0];
  vm.change = function() {
    console.log("clicked");
    vm.curIndex++;
    vm.cur = vm.questions[vm.curIndex];
    vm.input = "";
  };
  console.log(vm.curIndex);
}
