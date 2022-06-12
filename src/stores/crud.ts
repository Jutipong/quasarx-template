import { defineStore } from 'pinia';
import { Search } from '../types/crud';

export const useCrudStore = defineStore('crudStore', {
  state: () => ({
    Search: (<Search>{
      DateStart: '02-06-2022',
      DateEnd: '12-06-2022',
    }) as Search,
  }),
  getters: {},
  actions: {
    resetSearch() {
      this.Search = {} as Search;
    },
  },
});
