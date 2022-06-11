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
              <q-input :dense="dense" clearable v-model="store.Search.UserName" label="UserName" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :dense="dense" clearable v-model="store.Search.LastNaem" label="LastName" />
            </div>
            <div class="col-12 col-md-3">
              <q-input :dense="dense" clearable v-model="store.Search.LastNaem" label="DateTime" />
            </div>
            <div class="col-12 col-md-3">
              <q-select
                v-model="store.Search.IsStatud"
                label="Status"
                transition-show="scale"
                transition-hide="scale"
                :dense="dense"
                :options="stringOptions"
                behavior="menu"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md">
          <q-toggle v-model="dense" label="Dense" />
          <q-space />
          <q-btn type="submit" class="btn-search" color="primary" icon="eva-search-outline" label="Search" />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useCrudStore } from '../../stores/CRUD/';
const store = useCrudStore();
let dense = $ref(true);
const stringOptions = ['Active', 'InActive'];
const OnSearch = () => {
  console.log('search');
};
</script>
<!-- 
<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
</style> -->
