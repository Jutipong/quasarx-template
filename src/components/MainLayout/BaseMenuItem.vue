<template>
  <div>
    <template v-for="(item, index) in menus" :key="'root_' + index">
      <!-- <template v-if="item.meta.isHidden !== true"> -->
      <!-- <q-item-label v-if="item.meta.itemLabel" header class="text-weight-bold text-uppercase" :key="item.meta.itemLabel">
        {{ item.meta.itemLabel }}
      </q-item-label> -->
      {{ item }}
      <q-item
        v-if="item?.Children"
        clickable
        v-ripple
        :key="'children_' + index"
        :exact="item.Path === '/'"
        :class="baseItemClass"
        :inset-level="initLevel"
        :style="isWeChart ? ' line-height: normal' : ''"
        active-class="baseItemActive"
        :to="handleLink(basePath, item.Path)"
        @click="externalLink(basePath, item.Path)"
      >
        <q-item-section avatar>
          <q-icon :name="item.Meta?.Icon" />
        </q-item-section>
        <q-item-section>
          {{ item?.Meta?.Title }}
        </q-item-section>
      </q-item>

      <!-- <q-expansion-item
          v-else
          :duration="duration"
          :class="baseItemClassWithNoChildren(item.path)"
          :default-opened="item.meta.isOpen"
          :header-inset-level="initLevel"
          :key="item.path + item.meta.icon + item.meta.title"
          :icon="item.meta.icon"
          :label="item.meta.title"
          :style="isWeChart ? ' line-height: normal' : ''"
        >
          <base-menu-item
            :my-router="item.children"
            :init-level="initLevel + 0.2"
            :bg-color-level="bgColorLevel + 1"
            :bg-color="bgColor"
            :base-path="basePath === undefined ? item.path : basePath + '/' + item.path"
          />
        </q-expansion-item> -->
      <!-- </template> -->
    </template>
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'src/stores/MainLayout/type';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const { menus, initLevel, bgColor, duration, bgColorLevel, basePath } = defineProps<{
  menus: Menu[];
  basePath?: string;
  initLevel: number;
  bgColor: string;
  duration?: number;
  bgColorLevel: number;
}>();

const router = useRouter();

const baseItemClass = ref<string>(`${bgColor}-${bgColorLevel} base-menu-item`);
const baseItemClassWithNoChildren = computed(() => {
  return (path: string) => {
    let rootPath = router.currentRoute.value.matched[0].path;
    let obj = menus.find((r) => r.Path === rootPath);
    // if (obj) {
    //   obj.isOpen = true;
    // }
    return router.currentRoute.value.fullPath.startsWith(path) ? 'baseRootItemActive base-menu-item' + baseItemClass : baseItemClass;
  };
});

const isWeChart = computed(() => {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
});
function handleLink(basePath: string = '', itemPath: string) {
  let link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
  if (link.indexOf('http') !== -1) {
    return '#';
  }
  return link.replace('//', '/');
}
function externalLink(basePath: string = '', itemPath: string) {
  const link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
  const i = link.indexOf('http');
  if (i !== -1) {
    const a = document.createElement('a');
    a.setAttribute('href', link.slice(i));
    a.setAttribute('target', '_blank');
    a.click();
    return false;
  }
}
</script>

<!-- 
<script>
export default {
  name: 'base-menu-item',
  data() {
    return {
      baseItemClass: this.bgColor + '-' + this.bgColorLevel + ' base-menu-item',
    };
  },
  computed: {
    baseItemClassWithNoChildren() {
      return (path) => {
        return this.$route.fullPath.startsWith(path) ? 'baseRootItemActive base-menu-item' + this.baseItemClass : this.baseItemClass;
      };
    },

    isWeChart() {
      return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
    },
  },
  props: ['myRouter', 'initLevel', 'bgColor', 'bgColorLevel', 'duration', 'basePath'],
  methods: {
    handleLink(basePath, itemPath) {
      const link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
      if (link.indexOf('http') !== -1) {
        return '#';
      }
      return link;
    },

    externalLink(basePath, itemPath) {
      const link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
      const i = link.indexOf('http');
      if (i !== -1) {
        const a = document.createElement('a');
        a.setAttribute('href', link.slice(i));
        a.setAttribute('target', '_blank');
        a.click();
        return false;
      }
    },
  },
};
</script> -->
<!-- <style lang="sass">
$ITEM_COLOR: #2c3e50

$ACTIVE_COLOR: #1976d2
$ACTIVE_BACKGROUND: rgba(25, 118, 210, 0.0618)

.base-menu-item
  color: $ITEM_COLOR !important

.baseRootItemActive
  color: $ACTIVE_COLOR !important

.baseItemActive
  color: $ACTIVE_COLOR !important
  background: $ACTIVE_BACKGROUND
  transition: all .618s
  &:after
    content: ''
    position: absolute
    width: 3px
    height: 100%
    background: $ACTIVE_COLOR !important
    top: 0
    right: 0
</style> -->
