'use strict'; // eslint-disable-line strict

Meteor.publish('universe:admin-users', function () {
    if (!UniUsers.isAdminLoggedIn()) {
        return [];
    }

    return UniUsers.find({
        disabled: {
            $ne: true
        }
    });
});