import { defineStore } from 'pinia';
import { MainLayout, Menu } from './type';

export const useMainLayoutStore = defineStore('mainLayout', {
  state: (): MainLayout => ({
    DrawerOpen: false,
    Menus: [
      // {
      //   Icon: 'inbox',
      //   Label: 'Inbox',
      //   Separator: true,
      //   To: '',
      // },
      {
        Icon: 'send',
        Label: 'Home',
        Separator: false,
        To: 'home',
      },
      {
        Icon: 'delete',
        Label: 'Login',
        Separator: false,
        To: '/',
      },
    ],
  }),
  // getters: {
  //   menus: (state) => state.Menus,
  // },
  actions: {
    Add(menu: Menu) {
      this.Menus.push(menu);
    },
    ToggleDrawer() {
      this.DrawerOpen = !this.DrawerOpen;
    },
  },
});
