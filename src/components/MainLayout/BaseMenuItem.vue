<template>
  <div>
    <template v-for="item in props.menus">
      <template v-if="item.meta.isHidden !== true">
        <q-item-label v-if="item.meta.itemLabel" header class="text-weight-bold text-uppercase" :key="item.meta.itemLabel">
          {{ item.meta.itemLabel }}
        </q-item-label>

        <!-- no children -->
        <!-- <q-item
          v-if="!item.children"
          clickable
          v-ripple
          :key="index"
          :class="baseItemClass"
          :inset-level="initLevel"
          :style="isWeChart ? ' line-height: normal' : ''"
          active-class="baseItemActive"
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>
          <q-item-section>
            {{ item.meta.title }}
          </q-item-section>
        </q-item> -->
        <!-- <q-item
          v-if="!item.children"
          clickable
          v-ripple
          :key="index"
          :exact="item.path === '/'"
          :class="baseItemClass"
          :inset-level="initLevel"
          :style="isWeChart ? ' line-height: normal' : ''"
          active-class="baseItemActive"
          :to="handleLink(props.basePath, item.path)"
          @click="externalLink(props.basePath, item.path)"
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>
          <q-item-section>
            {{ item.meta.title }}
          </q-item-section>
        </q-item> -->

        <!-- has children -->
        <!-- <q-expansion-item
          v-else
          :duration="duration"
          :class="baseItemClassWithNoChildren(item.path)"
          :default-opened="item.meta.isOpen"
          :header-inset-level="props.initLevel"
          :key="'oo' + index"
          :icon="item.meta.icon"
          :label="item.meta.title"
          :style="isWeChart ? ' line-height: normal' : ''"
        > -->
        <!-- menu item indent + 0.2 ; background color depth + 1 ; if the parent menu path exists, splicing the parent menu path -->
        <!-- <base-menu-item
            :menus="item.children"
            :init-level="props.initLevel + 0.2"
            :bg-color-level="props.bgColorLevel + 1"
            :bg-color="bgColor"
            :base-path="props.basePath === undefined ? item.path : props.basePath + '/' + item.path"
          />
        </q-expansion-item> -->
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
// import { Menu } from 'src/stores/MainLayout/type';
// import { computed } from 'vue';
// import { useRouter } from 'vue-router';
const props = defineProps<{
  menus: any[];
  basePath?: string;
  initLevel: number;
  bgColor: string;
  duration?: number;
  bgColorLevel: number;
}>();

// const router = useRouter();

// const baseItemClass = $ref<string>(`${props.bgColor}-${props.bgColorLevel} base-menu-item`);
// const baseItemClassWithNoChildren = computed(() => {
//   return (path: string) => {
//     let rootPath = router.currentRoute.value.matched[0].path;
//     // let obj = props.menus.find((r) => r.Path === rootPath);
//     // if (obj) {
//     //   obj.isOpen = true;
//     // }
//     return router.currentRoute.value.fullPath.startsWith(path) ? 'baseRootItemActive base-menu-item' + baseItemClass : baseItemClass;
//   };
// });

// const isWeChart = computed(() => {
//   return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
// });
// function handleLink(basePath: string = '', itemPath: string) {
//   let link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
//   if (link.indexOf('http') !== -1) {
//     return '#';
//   }
//   return link.replace('//', '/');
// }
// function externalLink(basePath: string = '', itemPath: string) {
//   const link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
//   const i = link.indexOf('http');
//   if (i !== -1) {
//     const a = document.createElement('a');
//     a.setAttribute('href', link.slice(i));
//     a.setAttribute('target', '_blank');
//     a.click();
//     return false;
//   }
// }
</script>

<style scoped>
.base-menu-item {
  color: #2c3e50 !important;
}
.baseRootItemActive {
  color: #1976d2 !important;
}
.baseItemActive {
  color: #1976d2 !important;
  background: rgba(25, 118, 210, 0.0618);
  transition: all 0.618s;
}
.baseItemActive:after {
  content: '';
  position: absolute;
  width: 4px;
  height: 100%;
  background: #1976d2 !important;
  top: 0;
  right: 0;
}
</style>

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
