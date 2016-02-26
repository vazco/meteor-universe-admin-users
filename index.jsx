import React from 'react';
import {_i18n as i18n} from "meteor/universe:i18n";
import {AdminMenu} from 'meteor/universe:admin';
import {Modals} from 'meteor/universe:ui-react';

import './lib/UniUsers';
import './localization/en';

import './components/InsertModal.jsx';
import './components/UpdateModal.jsx';

import AdminView from './components/AdminView.jsx';

AdminMenu.add({
    icon: 'users',
    link: '/admin/users',
    text: 'Users',
    type: 'menu',

    view: <AdminView />,

    items: [
        {text: i18n.__('admin.users.actions.add'), type: 'link', icon: 'plus', action: () => {
            Modals.show('admin.users.insert');
        }}
    ]
});
