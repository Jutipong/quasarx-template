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
//Interface
export interface DateRangeProp {
  start: string | null;
  end: string | null;
}
//import
import { Locale_Th } from '../../constant/q-date-picker';
import { DateRange } from '../../types/date-range';
import { onMounted, watch } from 'vue';
//Store
import { useMainLayoutStore } from '../../stores/main-layout';
const storeMain = useMainLayoutStore();
//Value
const emit = defineEmits(['update:start', 'update:end']);
const props = withDefaults(defineProps<DateRangeProp>(), { start: null, end: null });
let datex = $ref({} as DateRange);
let dateText = $ref<string | null>('');

const OnUpdate = (obj: any) => {
  if (obj?.from && obj?.to) {
    emit('update:start', obj.from ?? null);
    emit('update:end', obj.to ?? null);
    obj.from && obj.to ? (dateText = `${obj.from} - ${obj.to}`) : (dateText = null);
    return;
  } else {
    if (obj) {
      emit('update:start', obj);
      emit('update:end', null);
      dateText = `${obj}`;
      return;
    }
    OnClear();
    return;
  }
};

watch(props, () => {
  if (props && props.start === null && props.end === null) {
    OnClear();
  }
});

const OnClear = () => {
  datex = { from: null, to: null };
  dateText = null;
  emit('update:start', null);
  emit('update:end', null);
};

onMounted(() => {
  datex.from = props.start;
  datex.to = props.end;
});
</script>
