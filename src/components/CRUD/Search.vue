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
              <q-input :dense="stroeMain.dense" clearable v-model="search.UserName" label="UserName" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :dense="stroeMain.dense" clearable v-model="search.LastNaem" label="LastName" />
            </div>
            <div class="col-12 col-md-3">
              <DateRange v-model:start="search.DateStart" v-model:end="search.DateEnd" />
            </div>
            <div class="col-12 col-md-3">
              <SelectSingle :options="options" v-model="search.IsStatud" clearable />
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
import DateRange from '../Base/DateRange.vue';
import SelectSingle from '../Base/SelectSingle.vue';
import { Search } from 'src/types/crud';
import { useMainLayoutStore } from '../../stores/main-layout';
import { SelectSingle as SelectSingle_Type } from 'src/types/select-single';
const stroeMain = useMainLayoutStore();
let search = $ref({} as Search);

const OnSearch = () => {
  console.log('obj :>> ', search);
};

const clear = () => (search = {} as Search);

const options = $ref<SelectSingle_Type[]>([
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
    icon: 'golf_course',
  },
  {
    label: 'Oracle',
    value: 'ora',
    disable: true,
    icon: 'casino',
  },
]);
</script>
