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
//import
import { watchEffect } from 'vue';
import { useMainLayoutStore } from '../../stores/MainLayout';
import { isString } from '@vue/shared';

//use => value || store
const storeMain = useMainLayoutStore();
let date = $ref({ from: '', to: '' });
let dateText = $ref('');

//logic
watchEffect(() => {
  if (date == null) {
    return (dateText = '');
  }
  if (date && isString(date)) {
    return (dateText = date);
  }
  if (date && date.from && date.to) {
    return (dateText = `${date.from} - ${date.to}`);
  }
  return (dateText = '');
});

const clear = () => (date = { from: '', to: '' });
</script>
