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
        {{ menuList }}
      </q-list>

      <!-- 底部说明 -->
      <!-- <bottom-link /> -->
    </div>
  </q-scroll-area>
</template>

<script>
// import { thumbStyleOfMenu } from '../BaseContent/ThumbStyle'
// import BaseMenuItem from './BaseMenuItem'
// import BottomLink from './BottomLink'
import { useMainLayoutStore } from '../../stores/MainLayout/index';
const store = useMainLayoutStore();
export default {
  name: 'BaseMenu',
  // components: { BaseMenuItem, BottomLink },
  data() {
    return {
      menuList: store.menus,
      bgColor: 'bg-white',
      // thumbStyleOfMenu
    };
  },
};
</script>
