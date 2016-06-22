'use strict'; // eslint-disable-line strict

//Remote methods on collection
UniUsers.methods({
    'universe:admin-users/createUser': function (userRaw, password) {
        var user;

        try {
            user = UniUsers.create(userRaw, true);
        } catch (e) {
            throw new Meteor.Error(400, i18n.__('admin.users.errors.userExists'));
        }

        user.call('universe:admin-users/setPassword', password);

        return user._id;
    }
});

//Remote methods on docs
UniUsers.docMethods({
    'universe:admin-users/resetPassword': function () {
        return Accounts.sendResetPasswordEmail(this.document._id);
    },

    'universe:admin-users/setPassword': function (password) {
        return Accounts.setPassword(this.document._id, password);
    }
});

UniUsers.allow({
    //access for remote methods
    'universe:admin-users/createUser': function (userId, document, args) {
        check(args, Match.Where(function (x) {
            return x.length > 1;
        }));

        check(args[0], UniUsers.getSchema());
        check(args[1], String);

        if (!UniUsers.isAdminLoggedIn()) {
            return;
        }

        return true;
    },

    'universe:admin-users/resetPassword': function () {
        if (!UniUsers.isAdminLoggedIn()) {
            return;
        }

        return true;
    },

    'universe:admin-users/setPassword': function () {
        if (!UniUsers.isAdminLoggedIn()) {
            return;
        }

        return true;
    }
});
