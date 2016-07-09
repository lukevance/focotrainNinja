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
    "Wassya name mon?",
    "How d'ya identify mon? (M/F/*)",
    "Gimme ya digits mon?",
    "Wassya address mon?",
    "Howabowt ya email mon?",
    "Ya sure yawanna go to Jamaica?",
    "YA CAHNT TAKE A TRAIN TO JAMAICA MON!"
  ];


}
