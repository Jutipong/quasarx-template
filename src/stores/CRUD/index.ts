import { defineStore } from 'pinia';
import { Search } from './type';

export const useCrudStore = defineStore('crudStore', {
  state: () => ({
    Search: <Search>{
      UserName: '',
      LastNaem: '',
      DateStart: null,
      DateEnd: null,
    },
  }),
  getters: {},
  actions: {},
});
