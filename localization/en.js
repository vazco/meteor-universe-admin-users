import {_i18n as i18n} from "meteor/universe:i18n";

i18n.addTranslation('en', {
    admin: {
        users: {
            actions: {
                add: 'Add new user',

                save:  'Save',
                close: 'Close',
                reset: 'Reset',

                remove:   'Remove user {$name}?',
                password: 'Send reset password email to {$name}?'
            },

            fields: {
                email:     'Email',
                username:  'Username',
                fullname:  'Full name',
                password:  'Password'
            },

            errors: {
                userExists: 'User exists, please change email or/and username'
            }
        }
    }
});