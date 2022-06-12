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
import { DateRange } from '../../types/date-range';
import { onActivated, onBeforeMount, onMounted, watchEffect } from 'vue';
import { useMainLayoutStore } from '../../stores/main-layout';
import { isString } from '@vue/shared';
//emit
const emit = defineEmits(['update:startdate', 'update:enddate']);
//prop
interface DateRangeProp {
  startdate: string;
  enddate: string;
}
const p = defineProps<DateRangeProp>();
//withDefaults(defineProps<DateRangeProp>(), {
//   startdate: '',
//   enddate: '',
// });
// defineProps<DateRangeProp>();

onMounted(() => {
  console.log('onMounted', date);
  date.from = p.startdate;
  date.to = p.enddate;
});

onBeforeMount(() => {
  console.log('onBeforeMount', date);
});

onActivated(() => {
  console.log('onActivated', date);
});

//use => value || store
const storeMain = useMainLayoutStore();

let date = $ref(<DateRange>{ from: '', to: '' });
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
  console.log('watch', date);
  if (date == null) {
    emit('update:startdate', '');
    emit('update:enddate', '');
    return (dateText = '');
  }
  if (date && isString(date)) {
    emit('update:startdate', date);
    emit('update:enddate', '');
    return (dateText = date);
  }
  if (date && date.from && date.to) {
    emit('update:startdate', date.from);
    emit('update:enddate', date.to);
    return (dateText = `${date.from} - ${date.to}`);
  }

  emit('update:startdate', '');
  emit('update:enddate', '');
  return (dateText = '');
});

const clear = () => (date = { from: '', to: '' });
</script>
