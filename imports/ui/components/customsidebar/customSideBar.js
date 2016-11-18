import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import template from './customSideBar.html';


class CustomSideBar {

 constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
     $scope.toggleLeft = function() {
       // $mdSidenav('left').toggle();        
       console.log('cheguei');

    }
    
    
  };

}

const name = 'customSideBar';

// create a module
export default angular.module(name, [
    angularMeteor,
    ngMaterial
]).component(name, {
    template,
    controllerAs: name,
    controller: CustomSideBar
});