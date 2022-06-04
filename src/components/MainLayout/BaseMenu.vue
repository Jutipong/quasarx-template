<template>
  <q-scroll-area :visible="false" class="fit" :thumb-style="{ right: '5px', borderRadius: '5px', backgroundColor: '#616161', width: '5px' }">
    <div>
      <q-list>
        <!-- <base-menu-item
        :my-router="menuList"
        :init-level="0"
        :bg-color="bgColor"
        :duration="300"
        :bg-color-level="1"/> -->
        <BaseMenuItem :menus="store.menus" :init-level="0" :bg-color="bgColor" :duration="300" :bg-color-level="1" />
      </q-list>

      <!-- 底部说明 -->
      <!-- <bottom-link /> -->
    </div>
  </q-scroll-area>
</template>

<script setup lang="ts">
import BaseMenuItem from './BaseMenuItem.vue';
import { useMainLayoutStore } from '../../stores/MainLayout/index';
const store = useMainLayoutStore();
let bgColor = $ref('bg-white');
</script>
