<template>
  <div>
    <template v-for="(item, index) in myRouter">
      <q-item-label v-if="item.meta.itemLabel" header class="text-weight-bold text-uppercase" :key="item.meta.itemLabel">
        {{ item.meta.itemLabel }}
      </q-item-label>

      <!-- no children -->
      <q-item
        v-if="!item.children"
        clickable
        v-ripple
        :key="index"
        :exact="item.path === '/'"
        :class="baseItemClass"
        :inset-level="initLevel"
        :style="isWeChart ? ' line-height: normal' : ''"
        active-class="baseItemActive"
        :to="item.path"
      >
        <q-item-section avatar>
          <q-icon :name="item.meta.icon" />
        </q-item-section>
        <q-item-section>
          {{ item.meta.title }}
        </q-item-section>
      </q-item>

      <!-- has children -->
      <q-expansion-item
        v-else
        :duration="duration"
        :class="baseItemClassWithNoChildren(item.path)"
        :default-opened="item.meta.isOpen"
        :header-inset-level="initLevel"
        :key="initLevel + index"
        :icon="item.meta.icon"
        :label="item.meta.title"
        :style="isWeChart ? ' line-height: normal' : ''"
      >
        <!-- menu item indent + 0.2 ; background color depth + 1 ; if the parent menu path exists, splicing the parent menu path -->
        <MenuItem
          :my-router="item.children"
          :init-level="initLevel + 0.2"
          :bg-color-level="bgColorLevel + 1"
          :bg-color="bgColor"
          :base-path="basePath === undefined ? item.path : basePath + '/' + item.path"
        />
      </q-expansion-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  data() {
    return {
      baseItemClass: this.bgColor + '-' + this.bgColorLevel + ' MenuItem',
    };
  },
  computed: {
    baseItemClassWithNoChildren() {
      return (path) => {
        let reuslt = this.$route.fullPath.startsWith(path) ? 'baseRootItemActive MenuItem' + this.baseItemClass : this.baseItemClass;
        console.log(reuslt);
        return reuslt;
      };
    },

    isWeChart() {
      return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
    },
  },
  props: ['myRouter', 'initLevel', 'bgColor', 'bgColorLevel', 'duration', 'basePath'],
  methods: {
    // handleLink(basePath, itemPath) {
    //   debugger
    //   const link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
    //   if (link.indexOf('http') !== -1) {
    //     return '#';
    //   }
    //   return link;
    // },
    // externalLink(basePath, itemPath) {
    //   const link = basePath === undefined ? itemPath : basePath + '/' + itemPath;
    //   const i = link.indexOf('http');
    //   if (i !== -1) {
    //     const a = document.createElement('a');
    //     a.setAttribute('href', link.slice(i));
    //     a.setAttribute('target', '_blank');
    //     a.click();
    //     return false;
    //   }
    // },
  },
};
</script>
<style lang="sass">

$ITEM_COLOR: #2c3e50

$ACTIVE_COLOR: #1976d2
$ACTIVE_BACKGROUND: rgba(25, 118, 210, 0.0618)

.MenuItem
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
</style>
