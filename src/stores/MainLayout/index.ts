import { defineStore } from 'pinia';
import { MainLayout, Menu } from './type';

export const useMainLayoutStore = defineStore('mainLayout', {
  state: (): MainLayout => ({
    DrawerOpen: true,
    Menus: MenuMock(),
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

const MenuMock = () => {
  const menus: Menu[] = [
    {
      Name: 'home',
      Path: '/home',
      Component: '',
    },
    {
      Name: 'dashboard',
      Path: '/dashboard',
      Component: '',
    },
  ];
  return menus;
};
