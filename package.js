Package.describe({
    name: 'universe:admin-users',
    summary: 'Users manager module for UniCMS admin panel.',
    version: '0.1.1',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2.1');

    api.use([
        'accounts-base',
        'accounts-password',

        'universe:admin@0.1.0',
        'universe:collection@2.0.6',
        'universe:i18n@1.2.2',
        'universe:modules@0.6.7',
        'universe:ui-react@0.1.0',
        'universe:ui-react-forms@0.1.0',
        'universe:utilities-react@0.5.6'
    ]);


    api.addFiles([
        'index.import.jsx',

        'lib/UniUsers.import.js',

        'localization/en.import.js',

        'components/AdminView.import.jsx',
        'components/InsertModal.import.jsx',
        'components/UpdateModal.import.jsx'
    ]);

    api.addFiles([
        'server/methods.js',
        'server/publications.js'
    ], ['server']);
});
