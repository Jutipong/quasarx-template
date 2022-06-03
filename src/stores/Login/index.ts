import { defineStore } from 'pinia';
import { Option, Login, User } from './type';

export const useLoginStore = defineStore('login', {
  state: (): Login => ({
    User: <User>{
      UserName: 'test',
      Password: '',
    },
    Option: <Option>{
      Loading: false,
      ShowPassword: false,
    },
  }),
  getters: {
    user: (User) => User,
    option: (Option) => Option,
  },
  actions: {
    // Add(menu: Menu) {
    //   this.Menus.push(menu);
    // },
    // ToggleDrawer() {
    //   console.log('ToggleDrawerOpen: ', this.DrawerOpen);
    //   this.DrawerOpen = !this.DrawerOpen;
    // },
  },
});
