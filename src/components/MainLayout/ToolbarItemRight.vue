@@ -0,0 +1,129 @@
<template>
  <div class="q-gutter-sm row items-center no-wrap">
    <!-- <q-btn round dense flat :icon="this.$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" v-if="$q.screen.gt.sm" @click="fullScreen"> -->

    <q-btn flat @click="$q.fullscreen.toggle()" :icon="iconFullscreen" :label="lableFullscreen" />
    <q-separator vertical />
    <!-- <q-btn round flat>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column items-center">
            <q-avatar size="72px">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">Hi！ CIMO</div>

            <q-btn color="primary" label="Logout" size="sm" v-close-popup @click="logout" />
          </div>
        </div>
      </q-menu>
      <q-avatar size="26px">
      </q-avatar>
      <q-tooltip>账号</q-tooltip>
    </q-btn> -->

    <!-- <div class="electron-only">
      <q-btn dense flat icon="minimize" @click="minimize" />
      <q-btn dense flat :icon="isMaximize ? 'crop_square' : 'flip_to_front'" @click="maximize" />
      <q-btn dense flat icon="close" @click="closeApp" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';
//User
const $q = useQuasar();
//fn
const iconFullscreen = computed(() => ($q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'));
const lableFullscreen = computed(() => ($q.screen.gt.sm ? ($q.fullscreen.isActive ? 'Exit Fullscreen' : 'Fullscreen') : ''));
</script>
