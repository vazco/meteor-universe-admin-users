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
        'universe:admin@0.1.1',
        'universe:collection@2.0.6',
        'universe:i18n@1.2.2',
        'universe:ui-react@0.1.0',
        'universe:ui-react-forms@0.1.0',
        'universe:utilities-react',
        'ecmascript'
    ]);


    api.addFiles([
        'lib/UniUsers.js'
    ]);

    api.addFiles([
        'server/methods.js',
        'server/publications.js'
    ], ['server']);

    api.mainModule('index.js');
});
