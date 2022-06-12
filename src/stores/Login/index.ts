import { defineStore } from 'pinia';
import { Option, Login, User } from '../../types/login';

export const useLoginStore = defineStore('loginStore', {
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
  getters: {},
  actions: {
    toggleLoading() {
      this.Option.Loading = !this.Option.Loading;
    },
  },
});
