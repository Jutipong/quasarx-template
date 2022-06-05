<template>
  <q-scroll-area :visible="false" class="fit" :thumb-style="{ right: '0px', borderRadius: '5px', backgroundColor: '#616161', width: '5px' }">
    <div>
      <q-list>
        <MenuItem :myRouter="menus" :init-level="0" :bg-color="bgColor" :duration="300" :bg-color-level="1" />
      </q-list>
    </div>
  </q-scroll-area>
</template>

<script>
import MenuItem from './MenuItem.vue';
import { useMainLayoutStore } from '../../stores/MainLayout/index';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Menus',
  components: {
    MenuItem,
  },
  setup() {
    const store = useMainLayoutStore();
    let bgColor = $ref('bg-white');
    let menus = $ref([
      {
        path: '/home',
        meta: {
          roles: [],
          title: 'Home',
          icon: 'home',
          keepAlive: true,
        },
        component: 'home/home.vue',
      },
      {
        path: '/dashboard',
        meta: {
          roles: [],
          title: 'Dashboard',
          icon: 'send',
        },
      },
      {
        path: '',
        meta: {
          isOpen: false,
          roles: [],
          title: 'Demo',
          icon: 'design_services',
          keepAlive: true,
        },
        component: 'Layout',
        children: [
          {
            path: '/dashboard',
            meta: {
              roles: [],
              title: 'dashboard',
              icon: 'tune',
            },
          },
          {
            path: '/home',
            meta: {
              roles: [],
              title: 'Home',
              icon: 'tune',
            },
          },
        ],
      },
      // {
      //   path: '/menu-1',
      //   name: 'menu-1',
      //   meta: {
      //     roles: [],
      //     title: '三级菜单',
      //     icon: 'filter_3',
      //   },
      //   component: 'Layout',
      //   children: [
      //     {
      //       path: 'menu-2',
      //       meta: {
      //         roles: [],
      //         title: '菜单 1-1',
      //         icon: 'filter_2',
      //         keepAlive: true,
      //       },
      //       component: 'Layout',
      //       children: [
      //         {
      //           path: 'menu-3',
      //           meta: {
      //             roles: [],
      //             title: '菜单 1-2',
      //             icon: 'filter_1',
      //             keepAlive: true,
      //           },
      //           component: 'components/menu3.vue',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ]);
    return {
      store,
      menus,
      bgColor,
    };
  },
});
</script>
