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
              <q-input :dense="stroeMain.dense" clearable v-model="obj.UserName" label="UserName" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :dense="stroeMain.dense" clearable v-model="obj.LastNaem" label="LastName" />
            </div>
            <div class="col-12 col-md-3">
              <DateRange v-model:start="obj.DateStart" v-model:end="obj.DateEnd" />
            </div>
            <div class="col-12 col-md-3">
              <SelectSingle :options="options" v-model="obj.IsStatud" clearable />
            </div>
          </div>
        </q-card-section>

        <q-card-actions class="">
          <q-toggle v-model="stroeMain.dense" label="stroeMain.dense" />
          <q-space />
          <q-btn type="button" flat class="btn-120" icon="eva-refresh-outline" label="Clear" color="negative" @click="clear" />
          <q-btn type="submit" flat class="btn-120" color="primary" icon="eva-search-outline" label="Search" />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>

<script setup lang="ts">
//Component
import DateRange from '../Base/DateRange.vue';
import SelectSingle from '../Base/SelectSingle.vue';
import { Search } from 'src/types/crud';
//Store
import { useMainLayoutStore } from '../../stores/main-layout';
import { useCrudStore } from '../../stores/crud';
const stroeMain = useMainLayoutStore();
// const store = useCrudStore();
//Defind value
let obj = $ref({} as Search);

//logic
const OnSearch = () => {
  console.log('obj :>> ', obj);
};

const clear = () => {
  obj = {} as Search;
};

let options = $ref([
  {
    label: 'Google',
    value: 'goog',
    icon: 'mail',
  },
  {
    label: 'Facebook',
    value: 'fb',
    icon: 'bluetooth',
  },
  {
    label: 'Twitter',
    value: 'twt',
    icon: 'map',
  },
  {
    label: 'Apple',
    value: 'app',
    description: 'iStuff',
    icon: 'golf_course',
  },
  {
    label: 'Oracle',
    value: 'ora',
    disable: true,
    description: 'Databases',
    icon: 'casino',
  },
]);
</script>
