import 'meteor/universe:ui-react-forms';

const defaultSchema = new SimpleSchema({
    username: {
        type: String,
        uniUI: {
            edit: {
                label: false
            }
        }
    },

    profile: {
        type: Object,
        uniUI: {
            component: 'none'
        }
    },

    'profile.name': {
        type: String,
        label: 'Full name',
        uniUI: {
            edit: {
                label: false
            }
        }
    },

    is_admin: {
        type: Boolean,
        label: 'Make this user administrator',
        optional: true
    },

    emails: {
        type: [Object],
        minCount: 1,
        uniUI: {
            component: ['composite.email']
        }
    },

    'emails.$.address': {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },

    'emails.$.verified': {
        type: Boolean,
        optional: true
    },

    disabled: {
        type: Boolean,
        optional: true,
        uniUI: {
            component: 'none'
        }
    }
});

const passwordSchema = new SimpleSchema([
    defaultSchema.pick(['username', 'profile', 'profile.name']),
    {
        password: {
            type: String,
            uniUI: {
                component: 'text.password',
                edit: {
                    label: false
                }
            }
        }
    },
    defaultSchema.pick(['emails', 'emails.$', 'emails.$.address', 'emails.$.verified'])
]);

UniUsers.setSchema(defaultSchema);
UniUsers.setSchema('password', passwordSchema);

UniUsers._mixinInstances = UniUsers._mixinInstances || {};

if (UniUsers._mixinInstances.PublishAccessMixin === undefined) {
    UniUsers._mixinInstances.PublishAccessMixin = new UniCollection.mixins.PublishAccessMixin();
    UniUsers._mixinInstances.PublishAccessMixin.mount(UniUsers);
}

UniUsers.allow({
    publish: () => true,
    remove: () => true,
    insert: () => UniUsers.isAdminLoggedIn(),
    update: () => UniUsers.isAdminLoggedIn()
});
