<template></template>

<script setup lang="ts">
//import
import { DateRange } from '../../types/date-range';
import { onMounted, watch } from 'vue';
import { useMainLayoutStore } from '../../stores/main-layout';
//use => value || store
const storeMain = useMainLayoutStore();
//emit
// const emit = defineEmits(['update:start', 'update:end']);
//prop
interface DateRangeProp {
  start: string;
  end: string;
}
const props = withDefaults(defineProps<DateRangeProp>(), {
  start: '',
  end: '',
});

watch(props, () => {});

onMounted(() => {
});
</script>
