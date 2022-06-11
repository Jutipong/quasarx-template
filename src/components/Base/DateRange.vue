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
  </q-input>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useMainLayoutStore } from '../../stores/MainLayout';
import { isString } from '@vue/shared';
//use => value || store
const storeMain = useMainLayoutStore();
const date = ref({ from: '', to: '' });
const dateText = ref('');

watchEffect(() => {
  if (date.value == null) {
    return (dateText.value = '');
  }
  if (date.value && isString(date.value)) {
    return (dateText.value = date.value);
  }
  if (date.value && date.value.from && date.value.to) {
    return (dateText.value = `${date.value.from} - ${date.value.to}`);
  }
  return (dateText.value = '');
});

const clear = () => (date.value = { from: '', to: '' });
</script>
