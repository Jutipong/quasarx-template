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

    <q-drawer v-model="store.DrawerOpen" show-if-above bordered class="bg-grey-2" :width="240">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <!-- ###################################################### -->

          <q-expansion-item :duration="500" icon="perm_identity" label="Account settings" caption="John Doe">
            <q-item :inset-level="0.4" v-for="link in links2" :key="link.text" v-ripple clickable>
              <q-item-section avatar>
                <q-icon color="grey" :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <!-- ###################################################### -->
          <q-separator />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- container START -->
    <!-- <q-page-container class="app-main full-height">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :max="Max_keepAlive" :include="keepAliveList">
          <router-view :key="$route.fullPath" />
        </keep-alive>
      </transition>
    </q-page-container> -->
    <!-- container END -->
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { fabYoutube } from '@quasar/extras/fontawesome-v6';
import ToolbarItemRight from '../components/MainLayout/ToolbarItemRight.vue';
import { useMainLayoutStore } from '../stores/MainLayout/index';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
export default {
  name: 'MyLayout',
  components: { ToolbarItemRight },
  setup() {
    //Use
    const $q = useQuasar();
    const router = useRouter();
    const store = useMainLayoutStore();
    const search = ref('');

    // function toggleLeftDrawer() {
    //   leftDrawerOpen.value = !leftDrawerOpen.value;
    // }

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
      fabYoutube,
      logout,
      search,
      store,

      links1: [{ icon: 'home', text: 'Home' }],
      links2: [
        { icon: 'folder', text: 'Library' },
        { icon: 'restore', text: 'History' },
        { icon: 'watch_later', text: 'Watch later' },
        { icon: 'thumb_up_alt', text: 'Liked videos' },
      ],
    };
  },
};
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  // &__drawer-footer-link
  //   color: inherit
  //   text-decoration: none
  //   font-weight: 500
  //   font-size: .75rem

    &:hover
      color: #000
</style>
