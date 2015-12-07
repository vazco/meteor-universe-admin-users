import {AdminMenu} from '{universe:admin}';
import {Modals} from '{universe:ui-react}';

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
        {text: i18n('admin.users.actions.add'), type: 'link', icon: 'plus', action: () => {
            Modals.show('admin.users.insert');
        }}
    ]
});
