<template>
  <div class="q-pa-md">
    <q-card :bordered="true">
      <q-form @submit="OnSearch" class="q-gutter-md">
        <q-card-section>
          <q-chip square>
            <q-avatar icon="eva-search-outline" color="positive" text-color="white" />
            SEARCH
          </q-chip>
        </q-card-section>

        <!-- <q-separator /> -->

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-3">
              <q-input :dense="stroeMain.dense" clearable v-model="store.Search.UserName" label="UserName" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :dense="stroeMain.dense" clearable v-model="store.Search.LastNaem" label="LastName" />
            </div>
            <div class="col-12 col-md-3">
              <DateRange />
            </div>
            <div class="col-12 col-md-3">
              <q-select
                v-model="store.Search.IsStatud"
                label="Status"
                transition-show="scale"
                transition-hide="scale"
                :dense="stroeMain.dense"
                :options="stringOptions"
                behavior="menu"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions class="">
          <q-toggle v-model="stroeMain.dense" label="stroeMain.dense" />
          <q-space />
          <q-btn type="button" flat class="btn-120" icon="eva-refresh-outline" label="Clear" color="negative" @click="store.resetSearch" />
          <q-btn type="submit" flat class="btn-120" color="primary" icon="eva-search-outline" label="Search" />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>

<script setup lang="ts">
//impurt
import { useMainLayoutStore } from '../../stores/mainLayout';
import DateRange from '../Base/DateRange.vue';
import { DatePicker } from '../../types/datePicker';
import { useCrudStore } from '../../stores/crud';

//use value || store
const stroeMain = useMainLayoutStore();
const store = useCrudStore();
const stringOptions = ['Active', 'InActive'];

//logic
const OnSearch = () => {
  console.log('search');
};
const dateStart = (dIn: any) => {
  console.log('dateStart:', dIn);
};
const dateEnd = (dIn: any) => {
  console.log('dateEnd:', JSON.stringify(dIn));
};

const rangex = $ref({} as DatePicker);
</script>
