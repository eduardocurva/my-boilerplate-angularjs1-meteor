import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './default.html';
import { name as ObjectList } from '../list/objectList';

class Default {
}

const name = 'default';

// create a module
export default angular.module(name, [
    angularMeteor,
    ObjectList
]).component(name, {
    template,
    controllerAs: name,
    controller: Default
});