angular.module('templateApp')
  .controller('MainController', [MainController]);



function MainController () {
  var vm = this;
  vm.title = 'Do you want to go to Jamaica?';
  vm.subtitle = 'Of course you do!';
}
