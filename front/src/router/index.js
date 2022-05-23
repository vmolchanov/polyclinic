import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import Signup from '../views/signup/signup';
import Catalog from '../views/catalog/catalog';
import CatalogDoctorCard from '../views/doctor-card/doctor-card';

// Admin
import Admin from '../views/admin/admin';

import AdminOrganizationList from '../views/admin/views/organization/organization-list/organization-list';
import AdminOrganizationEdit from '../views/admin/views/organization/organization-edit/organization-edit';
import AdminOrganizationDetail from '../views/admin/views/organization/organization-detail/organization-detail';

import AdminPersonList from '../views/admin/views/person/person-list/person-list';
import AdminPersonEdit from '../views/admin/views/person/person-edit/person-edit';
import AdminPersonDetail from '../views/admin/views/person/person-detail/person-detail';

import AdminPostList from '../views/admin/views/post/post-list/post-list';
import AdminPostEdit from '../views/admin/views/post/post-edit/post-edit';
import AdminPostDetail from '../views/admin/views/post/post-detail/post-detail';

import AdminRoleList from '../views/admin/views/role/role-list/role-list';
import AdminRoleEdit from '../views/admin/views/role/role-edit/role-edit';
import AdminRoleDetail from '../views/admin/views/role/role-detail/role-detail';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/doctor-card/:userId',
    name: 'CatalogDoctorCard',
    component: CatalogDoctorCard,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'organization',
        name: 'OrganizationList',
        component: AdminOrganizationList,
      },
      {
        path: 'organization/new',
        name: 'OrganizationNew',
        component: AdminOrganizationEdit,
      },
      {
        path: 'organization/:organizationId/edit',
        name: 'OrganizationEdit',
        component: AdminOrganizationEdit,
      },
      {
        path: 'organization/:organizationId/view',
        name: 'OrganizationDetail',
        component: AdminOrganizationDetail,
      },
      {
        path: 'person',
        name: 'PersonList',
        component: AdminPersonList,
      },
      {
        path: 'person/new',
        name: 'PersonNew',
        component: AdminPersonEdit,
      },
      {
        path: 'person/:personId/edit',
        name: 'PersonEdit',
        component: AdminPersonEdit,
      },
      {
        path: 'person/:personId/view',
        name: 'PersonDetail',
        component: AdminPersonDetail,
      },
      {
        path: 'post',
        name: 'PostList',
        component: AdminPostList,
      },
      {
        path: 'post/new',
        name: 'PostNew',
        component: AdminPostEdit,
      },
      {
        path: 'post/:postId/edit',
        name: 'PostEdit',
        component: AdminPostEdit,
      },
      {
        path: 'post/:postId/view',
        name: 'PostDetail',
        component: AdminPostDetail,
      },
      {
        path: 'role',
        name: 'RoleList',
        component: AdminRoleList,
      },
      {
        path: 'role/new',
        name: 'RoleNew',
        component: AdminRoleEdit,
      },
      {
        path: 'role/:roleId/edit',
        name: 'RoleEdit',
        component: AdminRoleEdit,
      },
      {
        path: 'role/:roleId/view',
        name: 'RoleDetail',
        component: AdminRoleDetail,
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
