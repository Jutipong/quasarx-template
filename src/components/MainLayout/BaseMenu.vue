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
import MenuItem from './BaseMenuItem.vue';
import { useMainLayoutStore } from '../../stores/MainLayout/index';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainLayout',
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
        path: '/start',
        meta: {
          isOpen: false,
          roles: [],
          title: '快速起步',
          icon: 'design_services',
          keepAlive: true,
        },
        component: 'Layout',
        children: [
          {
            path: 'getting-started',
            meta: {
              roles: [],
              title: '基础配置',
              icon: 'tune',
              keepAlive: true,
            },
            component: 'router/gettingStarted.vue',
          },
          {
            path: 'router-config',
            meta: {
              roles: [],
              title: '路由配置',
              icon: 'multiple_stop',
              keepAlive: true,
            },
            component: 'router/routerConfig.vue',
          },
          {
            path: 'my-menu',
            meta: {
              roles: [],
              title: '关于菜单',
              icon: 'menu',
              keepAlive: true,
            },
            component: 'router/myMenu.vue',
          },
          {
            path: 'async-router',
            meta: {
              roles: [],
              title: '动态路由',
              icon: 'all_inclusive',
              keepAlive: true,
            },
            component: 'router/asyncRouter.vue',
          },
          {
            path: 'async-router-impl',
            meta: {
              roles: [],
              title: '动态路由实现思路',
              keepAlive: true,
            },
            component: 'router/asyncRouterImpl.vue',
          },
        ],
      },

      {
        path: '/menu-1',
        name: 'menu-1',
        meta: {
          roles: [],
          title: '三级菜单',
          icon: 'filter_3',
        },
        component: 'Layout',
        children: [
          {
            path: 'menu-2',
            meta: {
              roles: [],
              title: '菜单 1-1',
              icon: 'filter_2',
              keepAlive: true,
            },
            component: 'Layout',
            children: [
              {
                path: 'menu-3',
                meta: {
                  roles: [],
                  title: '菜单 1-2',
                  icon: 'filter_1',
                  keepAlive: true,
                },
                component: 'components/menu3.vue',
              },
            ],
          },
        ],
      },
      {
        path: '/dashboard',
        meta: {
          roles: [],
          title: 'Dashboard',
          icon: 'send',
        },
      },
    ]);
    return {
      store,
      menus,
      bgColor,
    };
  },
});
</script>
