import { defineStore } from 'pinia';
import { Search } from './type';

export const useCrudStore = defineStore('crudStore', {
  state: () => ({
    Search: (<Search>{}) as Search,
  }),
  getters: {},
  actions: {
    resetSearch() {
      this.Search = {} as Search;
    },
  },
});
