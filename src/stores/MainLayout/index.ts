import { defineStore } from 'pinia';
import { MainLayout, Menu } from './type';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
//user
const $q = useQuasar();
const router = useRouter();

export const useMainLayoutStore = defineStore('mainLayout', {
  state: (): MainLayout => ({
    DrawerOpen: true,
    Menus: [
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
    ],
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
    Logout() {
      $q.dialog({
        html: true,
        title: '<div class="text-red"> Confirm</div>',
        message: 'Are you sure you want to log out?',
        cancel: true,
        persistent: true,
        ok: {
          flat: true,
          label: 'YES',
          color: 'negative',
        },
        // cancel: {
        //   flat: true,
        //   label: 'NO',
        // },
      }).onOk(() => {
        router.push('/login');
      });
    },
  },
});

// const MenuMock = () => {
//   const menus: Menu[] = [
//     {
//       Name: 'home',
//       Path: '/home',
//       Component: '',
//     },
//     {
//       Name: 'dashboard',
//       Path: '/dashboard',
//       Component: '',
//     },
//   ];
//   return menus;
// };
