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
    use-input
    input-debounce="0"
    @filter="filterFn"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
  </q-select>
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
import { watch } from 'vue';
//import
import { useMainLayoutStore } from '../../stores/main-layout';
const storeMain = useMainLayoutStore();
const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<SelectSingleProps>(), { modelValue: null });
let model = $ref<string | null>(null);
let options = $ref(props.options);

watch(
  () => model,
  (val) => emit('update:modelValue', val)
);

watch(
  () => props.modelValue,
  (val: string | null) => {
    emit('update:modelValue', val);
    model = val;
  }
);

const filterFn = (val: string | null, update: any) => {
  update(() => (options = props.options.filter((v: any) => v.label.toLowerCase().indexOf(val?.toLowerCase()) > -1)));
};
</script>
