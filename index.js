import {AdminMenu} from 'meteor/universe:admin';
import {Modals} from 'meteor/universe:ui-react';
import React from 'react';
import './lib/UniUsers';
import './localization/en';

import './components/InsertModal';
import './components/UpdateModal';

import AdminView from './components/AdminView';

AdminMenu.add({
    icon: 'users',
    link: '/admin/users',
    text: 'Users',
    type: 'menu',

    view: <AdminView />,

    items: [
        {text: 'aaaaaa', type: 'link', icon: 'plus', action: () => {
            Modals.show('admin.users.insert');
        }}
    ]
});

export default AdminMenu;
