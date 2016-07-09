angular.module('templateApp')
  .controller('MainController', [MainController]);

function MainController () {
  var vm = this;

  vm.questions = [
    "Are you sure?",
    "Ya like rum mon?",
    "What's your zip?",
    "D'ya wanna leave today mon?",
    "Wanna take a train mon?",

  ];

  
}
