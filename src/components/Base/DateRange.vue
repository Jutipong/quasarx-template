<template>
  <q-input :dense="storeMain.dense" v-model="dateText" clearable @clear="clear">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date range :locale="Locale_Th" v-model="date" mask="DD-MM-YYYY">
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
import { Locale_Th } from '../../constant/q-date-picker';
import { DateRange } from '../../types/date-range';
import { onMounted, watchEffect } from 'vue';
import { useMainLayoutStore } from '../../stores/main-layout';
import { isString } from '@vue/shared';
//use => value || store
const storeMain = useMainLayoutStore();
//emit
const emit = defineEmits(['update:startdate', 'update:enddate']);
//prop
interface DateRangeProp {
  startdate: string;
  enddate: string;
}
const props = withDefaults(defineProps<DateRangeProp>(), {
  startdate: '',
  enddate: '',
});

let date = $ref({} as DateRange);
let dateText = $ref('');
const clear = () => (date = {} as DateRange);

onMounted(() => {
  date.from = props.startdate;
  date.to = props.enddate;

  watchEffect(() => {
    debugger;
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
});
</script>
