<template>
  <div>
    <!-- <h1>{{ Msg }}</h1> -->
    <pre>{{ store.Menus.filter((r) => r.label == 'Demo') }}</pre>
  </div>
</template>

<script setup>
import { useMainLayoutStore } from '../stores/main-layout';
let store = useMainLayoutStore();
let Msg = $ref('Dashboard');
</script>
