import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as Default } from '../imports/ui/components/default/default';

function onReady() {
  angular.bootstrap(document, [
    Default
  ], {
    strictDi: true
  });
}