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
              <q-input :dense="dense" v-model="store.Search.DateStart" readonly>
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="store.Search.DateStart" mask="DD-MMYYYY">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
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

        <q-card-actions class="">
          <q-toggle v-model="dense" label="Dense" />
          <q-space />
          <q-btn type="button" flat class="btn-120" icon="eva-refresh-outline" label="Clear" color="negative" @click="store.resetSearch" />
          <q-btn type="submit" flat class="btn-120" color="primary" icon="eva-search-outline" label="Search" />
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
