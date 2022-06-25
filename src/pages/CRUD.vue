<template>
  <q-page class="q-pa-sm">
    <Search />
    <Table />
    <Modal/>
  </q-page>
</template>

<script setup>
import Table from '../components/CRUD/Table.vue';
import Search from '../components/CRUD/Search.vue';
import Modal from '../components/CRUD/Modal.vue'
</script>
