<template>
  <div class="q-ma-md bg-body row">
    <q-card class="my-card q-ma-xs" @click="toRouteName('lab-circuito-serie-paralelo')">
      <img src="/public/images/labs/labTest/circuito-sere-paralelo.jpg" />

      <q-card-section>
        <div class="text-h6">Circuitos serie y paralelo</div>
        <div class="text-subtitle2">Física eléctrica</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const route = useRouter();

async function toRouteName(routeName: string) {
  await route.push({ name: routeName });
}
</script>
<style lang="css">
.my-card {
  width: 100%;
  max-width: 250px;
  max-height: 300px;
}
.bg-body {
  width: 100%;
  height: 90vh;
}
</style>
