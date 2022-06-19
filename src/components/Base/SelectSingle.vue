<template>
  <q-select
    v-model="model"
    label="Status"
    transition-show="jump-up"
    transition-hide="jump-up"
    :dense="storeMain.dense"
    :options="options"
    :behavior="'menu'"
    emit-value
    map-options
  />
</template>

<script setup lang="ts">
//interface
export interface SelectSingle {
  label: string;
  value: any;
  disable?: boolean;
}
export interface SelectSingleProps {
  modelValue: any;
  options: SelectSingle[];
}
//import
import { computed } from 'vue';
//Store
import { useMainLayoutStore } from '../../stores/main-layout';
const storeMain = useMainLayoutStore();
//emit
const emit = defineEmits(['update:modelValue']);
//prop
const props = withDefaults(defineProps<SelectSingleProps>(), { modelValue: null });
const model = computed({
  get: () => props.modelValue,
  set: (model) => emit('update:modelValue', model),
});
</script>
