<template>
  <div class="q-ma-md bg-body-card-main row">
    <q-card class="card-main q-ma-xs" @click="toRouteName('sim-efecto-fotoelectrico')">
      <img src="/public/images/labs/labTest/panel.jpg" />

      <q-card-section>
        <div class="text-h6">Efecto Fotoeléctrico</div>
        <div class="text-subtitle2">Física moderna</div>
      </q-card-section>
    </q-card>

    <q-card class="card-main q-ma-xs" @click="toRouteName('sim-gases')">
      <img src="/public/images/labs/labTest/circuito-sere-paralelo.jpg" />

      <q-card-section>
        <div class="text-h6">Simulador de gases</div>
        <div class="text-subtitle2">Física térmica</div>
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

<style scoped></style>
