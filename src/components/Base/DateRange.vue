<template>
  <q-input :dense="storeMain.dense" v-model="dateText" clearable @clear="clear">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date range v-model="date" mask="DD-MM-YYYY">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
    <!-- 
    <template v-if="dateText" v-slot:append>
      <q-icon name="cancel" class="cursor-pointer" @click="clear"></q-icon>
    </template> -->
  </q-input>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useMainLayoutStore } from '../../stores/MainLayout';
// import { DatePicker } from 'src/types/datePicker';
import { isString } from '@vue/shared';
//use => value || store
const storeMain = useMainLayoutStore();
const date = ref({ from: '', to: '' });
//
const dateText = ref('');

watch(date, () => {
  if (date.value == null) {
    return (dateText.value = '');
  }
  if (date.value && isString(date.value)) {
    return date.value;
  }
  if (date.value && date.value.from && date.value.to) {
    return (dateText.value = `${date.value.from} - ${date.value.to}`);
  }
  return (dateText.value = '');
});

// const dateText = $computed(() => {
//   if (date == null) {
//     return '';
//   }
//   if (date && isString(date)) {
//     return date;
//   }
//   if (date && date.from && date.to) {
//     return `${date.from} - ${date.to}`;
//   }
//   return '';
// });
const clear = (obj: any) => (date.value = { from: '', to: '' });
</script>
