<template>
  <q-scroll-area :visible="false" class="fit" :thumb-style="{ right: '0px', borderRadius: '5px', backgroundColor: '#616161', width: '5px' }">
    <div>
      <q-list>
        <MenuItem :myRouter="store.menus" :init-level="0" :bg-color="bgColor" :duration="300" :bg-color-level="1" />
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

    return {
      store,
      bgColor,
    };
  },
});
</script>
