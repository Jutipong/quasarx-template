import { defineStore } from 'pinia';
import { Option, Login, User } from './type';

export const useLoginStore = defineStore('login', {
  state: (): Login => ({
    User: <User>{
      UserName: 'admin',
      Password: '',
    },
    Option: <Option>{
      Loading: false,
      ShowPassword: false,
    },
  }),
  getters: {
    // user: (User) => User,
    // option: (Option) => Option,
  },
  actions: {
    toggleLoading() {
      this.Option.Loading = !this.Option.Loading;
    },
    // Add(menu: Menu) {
    //   this.Menus.push(menu);
    // },
    // ToggleDrawer() {
    //   console.log('ToggleDrawerOpen: ', this.DrawerOpen);
    //   this.DrawerOpen = !this.DrawerOpen;
    // },
  },
});
