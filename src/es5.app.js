angular.module('legacy-app', [])

angular
  .module('legacy-app')
  .component('rootNg1Legacy', {
    template: '<div>Hello from legacy module!</div>',
    controllerAs: 'vm',
    controller: function() {
      var vm = this;

      vm.$onInit = function() {
        console.log("mounting root angular component")
      }

      vm.$onDestroy = function() {
        console.log('unmounting root angular component!')
      }
    }
  })
