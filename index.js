import {AdminMenu} from 'meteor/universe:admin';
import {Modals} from 'meteor/universe:ui-react';
import React from 'react';
import './lib/UniUsers';
import './localization/en';

import './components/InsertModal';
import './components/UpdateModal';

import AdminView from './components/AdminView';

const defaultButtons = [
    {text: i18n.__('admin.users.actions.add'), type: 'link', icon: 'plus', action: () => {
        Modals.show('admin.users.insert');
    }}
];

export default function attachToAdminMenu (children, items = defaultButtons) {
    AdminMenu.add({
        icon: 'users',
        link: '/admin/users',
        text: 'Users',
        type: 'menu',

        view: (
            <AdminView>
                {children}
            </AdminView>
        ),

        items
    });
};