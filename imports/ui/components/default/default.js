import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import template from './default.html';
import { name as ObjectList } from '../list/objectList';
import { name as CustomSideBar} from '../customsidebar/customSideBar';

class Default {


 constructor($scope, $reactive, $mdSidenav) {
        'ngInject';

        $reactive(this).attach($scope);
     $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();        
       console.log('hey');

    }
    
  }

  
}

const name = 'default';

// create a module
export default angular.module(name, [
    angularMeteor,
    ObjectList,
    ngMaterial,
    CustomSideBar   
]).component(name, {
    template,
    controllerAs: name,
    controller: Default
})
  .config(config);

  function config($mdIconProvider) {
  'ngInject';
 
  const iconPath = '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
  
  $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',
      iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',
      iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',
      iconPath + 'svg-sprite-image.svg');
 
  }