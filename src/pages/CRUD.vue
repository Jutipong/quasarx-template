<template>
  <q-page class="q-pa-sm">
    <!-- <h1>{{ Msg }}</h1> -->
    <Table />
  </q-page>
</template>

<script setup>
import Table from '../components/CRUD/Table.vue';
let Msg = $ref('CRUD');
</script>
