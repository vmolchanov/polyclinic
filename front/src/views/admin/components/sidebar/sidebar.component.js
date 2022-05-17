export default {
    name: 'sidebar',
    data: () => ({
        items: [
            {icon: null, title: 'Организации', routeName: 'OrganizationList'},
            {icon: null, title: 'Персоны', routeName: 'PersonList'},
            {icon: null, title: 'Должности', routeName: 'PostList'},
            {icon: null, title: 'Роли', routeName: 'RoleList'},
        ],
    }),
};
