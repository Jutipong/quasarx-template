<template>
  <q-page class="q-pa-sm">
    <!-- <h1>{{ Msg }}</h1> -->
    <Search />
    <Table />
  </q-page>
</template>

<script setup>
import Table from '../components/CRUD/Table.vue';
import Search from '../components/CRUD/Search.vue';
let Msg = $ref('CRUD');
</script>
