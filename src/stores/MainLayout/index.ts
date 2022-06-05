import { defineStore } from 'pinia';
import { MainLayout, Menu } from './type';

export const useMainLayoutStore = defineStore('mainLayout', {
  state: (): MainLayout => ({
    DrawerOpen: true,
    Menus: [
      {
        path: '/home',
        label: 'Home',
        meta: {
          title: 'Home',
          icon: 'home',
          active: false,
        },
      },
      {
        path: '/dashboard',
        label: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'send',
          active: false,
        },
      },
      {
        path: '',
        label: 'Demo',
        meta: {
          title: 'Demo',
          icon: 'design_services',
          active: false,
        },
        children: [
          {
            path: '/dashboard',
            label: 'CRUD',
            meta: {
              title: 'dashboard',
              icon: 'tune',
              active: false,
            },
          },
          {
            path: '/home',
            label: 'UploadFile',
            meta: {
              title: 'Home',
              icon: 'tune',
              active: false,
            },
          },
        ],
      },
      // {
      //   path: '/menu-1',
      //   name: 'menu-1',
      //   meta: {
      //     roles: [],
      //     title: '三级菜单',
      //     icon: 'filter_3',
      //   },
      //   component: 'Layout',
      //   children: [
      //     {
      //       path: 'menu-2',
      //       meta: {
      //         roles: [],
      //         title: '菜单 1-1',
      //         icon: 'filter_2',
      //         keepAlive: true,
      //       },
      //       component: 'Layout',
      //       children: [
      //         {
      //           path: 'menu-3',
      //           meta: {
      //             roles: [],
      //             title: '菜单 1-2',
      //             icon: 'filter_1',
      //             keepAlive: true,
      //           },
      //           component: 'components/menu3.vue',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  }),
  getters: {
    menus: (state) => state.Menus,
  },
  actions: {
    Add(menu: Menu) {
      this.Menus.push(menu);
    },
    ToggleDrawer() {
      this.DrawerOpen = !this.DrawerOpen;
    },
  },
});

// const MenuMock = () => {
//   const menus: Menu[] = [
//     {
//       Name: 'home',
//       Path: '/home',
//       Component: '',
//     },
//     {
//       Name: 'dashboard',
//       Path: '/dashboard',
//       Component: '',
//     },
//   ];
//   return menus;
// };
