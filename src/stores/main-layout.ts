import { defineStore } from 'pinia';
import { MainLayout, Menu } from '../types/main-layout';

export const useMainLayoutStore = defineStore('mainLayout', {
  state: (): MainLayout => ({
    DrawerOpen: true,
    dense: true,
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
        path: '/demo',
        label: 'Demo',
        meta: {
          title: 'Demo',
          icon: 'flutter_dash',
          active: false,
        },
        children: [
          {
            path: 'crud',
            label: 'CRUD',
            meta: {
              title: 'CRUD',
              icon: 'save_as',
              active: false,
            },
          },
          {
            path: 'uploadfile',
            label: 'UploadFile',
            meta: {
              title: 'UploadFile',
              icon: 'upload_file',
              active: false,
            },
          },
        ],
      },
      {
        path: '/demo2',
        label: 'Demo2',
        meta: {
          title: 'Demo2',
          icon: 'flutter_dash',
          active: false,
        },
        children: [
          {
            path: 'crud2',
            label: 'CRUD2',
            meta: {
              title: 'CRUD2',
              icon: 'save_as',
              active: false,
            },
          },
          {
            path: 'uploadfile2',
            label: 'UploadFile2',
            meta: {
              title: 'UploadFile2',
              icon: 'upload_file',
              active: false,
            },
          },
        ],
      },
    ],
  }),
  persist: {
    storage: window.localStorage,
    paths: ['Menus', 'dense'],
  },
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
    MenusReset() {
      this.Menus.forEach((item) => {
        // no children
        if (!item?.children) {
          item.meta.active = false;
        } else {
          item.children.forEach((r) => (r.meta.active = false));
        }
      });
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
