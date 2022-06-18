import { defineStore } from 'pinia';
import { Option, Login, User } from '../types/login';

export const useLoginStore = defineStore('loginStore', {
  state: (): Login => ({
    User: <User>{
      UserName: 'admin',
      Password: '1234',
    },
    Option: <Option>{
      Loading: false,
      ShowPassword: false,
    },
  }),
  getters: {},
  actions: {
    toggleLoading() {
      this.Option.Loading = !this.Option.Loading;
    },
  },
});
