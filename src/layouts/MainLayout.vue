<template>
  <q-layout view="hHr Lpr lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="() => store.ToggleDrawer()" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="store.DrawerOpen" side="left" elevated :width="240" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in store.Menus" :key="index">
            <q-item clickable :active="menuItem.Label === 'Outbox'" v-ripple :to="menuItem.To">
              <q-item-section avatar>
                <q-icon :name="menuItem.Icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.Label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.Separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMainLayoutStore } from '../stores/MainLayout';
export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {
      store: useMainLayoutStore(),
    };
  },
});
</script>
