<template>
  <q-input :dense="storeMain.dense" v-model="dateText" clearable @clear="clear">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date range :locale="thLocale" v-model="date" mask="DD-MM-YYYY">
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
let thLocale = $ref({
  /* starting with Sunday */
  days: 'อาทิตย์_วัันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์่'.split('_'),
  daysShort: 'อา_จ_อ_พ_พฤ_ศ_ส'.split('_'),
  months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
  monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
  firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
  format24h: true,
  pluralDay: 'วัน',
});

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
