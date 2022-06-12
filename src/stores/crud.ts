import { defineStore } from 'pinia';
import { Search } from '../types/crud';

export const useCrudStore = defineStore('crudStore', {
  state: () => ({
    datas: [],
  }),
  getters: {},
  actions: {},
});
