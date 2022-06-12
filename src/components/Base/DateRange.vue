<template>
  <q-input :dense="storeMain.dense" v-model="dateText" clearable @clear="OnClear">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date range :locale="Locale_Th" v-model="datex" mask="DD-MM-YYYY" @update:model-value="OnUpdate">
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
import { onMounted, watch, watchEffect } from 'vue';
import { useMainLayoutStore } from '../../stores/main-layout';
import { colors } from 'quasar';
//use => value || store
const storeMain = useMainLayoutStore();
let datex = $ref({} as DateRange);
let dateText = $ref('');
//emit
const emit = defineEmits(['update:start', 'update:end']);
//prop
interface DateRangeProp {
  start: string;
  end: string;
}
const props = withDefaults(defineProps<DateRangeProp>(), {
  start: '',
  end: '',
});

const OnClear = () => clear();
const OnUpdate = (obj: any) => {
  if (obj?.from && obj?.to) {
    emit('update:start', obj.from ?? '');
    emit('update:end', obj.to ?? '');
    obj.from && obj.to ? (dateText = `${obj.from} - ${obj.to}`) : (dateText = '');
    return;
  } else {
    if (obj) {
      emit('update:start', obj);
      emit('update:end', '');
      dateText = `${obj}`;
      return;
    }
    clear();
    return;
  }
};

watch(props, () => {
  if (props && props.start === '' && props.end === '') {
    clear();
  }
});

const clear = () => {
  datex = { from: '', to: '' };
  dateText = '';
  emit('update:start', '');
  emit('update:end', '');
};

onMounted(() => {
  datex.from = props.start;
  datex.to = props.end;
});
</script>
