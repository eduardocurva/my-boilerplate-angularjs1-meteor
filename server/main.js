import { Meteor } from 'meteor/meteor';
import { Objects } from '../imports/collections/objects';

Meteor.startup(() => {
    if (Objects.find().count() === 0) {
        const objects = [{
            'name': 'Name 1',
            'description': 'Description 1.'
        }, {
            'name': 'Name 2',
            'description': 'Description 2.'
        }, {
            'name': 'Name 3',
            'description': 'Description 3.'
        }];

        objects.forEach((party) => {
            Objects.insert(party)
        });
    }

});