import i18n from 'meteor/universe:i18n';

i18n.addTranslations('en-US', {
    admin: {
        users: {
            actions: {
                add: 'Add new user',

                save:  'Save',
                close: 'Close',
                reset: 'Reset',

                remove:   'Remove user {$1}?',
                password: 'Send reset password email to {$1}?'
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