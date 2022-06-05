<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <!-- HEADER START -->
    <q-header elevated class="bg-primary text-white">
      <!-- toolbar - title -->
      <q-toolbar style="margin-top: -4px" class="q-electron-drag">
        <q-btn flat dense round :icon="store.DrawerOpen === true ? 'menu_open' : 'menu'" @click="store.ToggleDrawer" />
        <!-- end toolbar - title -->

        <!-- <toolbar-title /> -->

        <!-- breadcrumbs -->
        <!-- <breadcrumbs v-if="$q.screen.gt.sm" /> -->
        <!-- breadcrumbs -->

        <q-space />
        <!-- <toolbar-item-right /> -->
        <ToolbarItemRight class="q-mr-sm" />

        <q-btn align="around" :label="$q.screen.gt.sm ? 'Logout' : ''" flat icon="logout" @click="logout"></q-btn>
      </q-toolbar>

      <q-separator color="grey-3" />

      <!-- TAGVIEW -->
      <!-- <tag-view /> -->
    </q-header>
    <!-- HEADER END -->

    <!-- slideBar START -->
    <q-drawer class="shadow-1" v-model="store.DrawerOpen" show-if-above content-class="bg-white" :width="240" side="left" bordered>
      <Menus />
    </q-drawer>

    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->

    <!-- container START -->
    <q-page-container class="app-main full-height">
      <transition name="fade-transform" mode="out-in">
        <!-- <keep-alive :max="Max_keepAlive" :include="keepAliveList"> -->
        <router-view :key="$route.fullPath" />
        <!-- </keep-alive> -->
      </transition>
    </q-page-container>
    <!-- container END -->
  </q-layout>
</template>
<script>
import ToolbarItemRight from '../components/MainLayout/ToolbarItemRight.vue';
import Menus from '../components/MainLayout/Menus.vue';
import { useMainLayoutStore } from '../stores/MainLayout';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    ToolbarItemRight,
    Menus,
  },
  setup() {
    const store = useMainLayoutStore();
    const $q = useQuasar();
    const router = useRouter();
    const logout = () => {
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
        cancel: {
          flat: true,
          label: 'NO',
        },
      }).onOk(() => {
        router.push('/');
      });
    };

    return {
      store,
      logout,
    };
  },
});
</script>
