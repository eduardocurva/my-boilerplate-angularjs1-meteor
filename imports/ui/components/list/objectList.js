import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './objectList.html';
import { Objects } from '../../../collections/objects';

class ObjectList {
    constructor($scope, $reactive) {
        'ngInject';


        $reactive(this).attach($scope);


        this.helpers({
            objects() {

                return Objects.find({});
            }
        });
    }
}

const name = 'objectList';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: ObjectList
});