<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> LABORATORIO IUB </q-toolbar-title>

        <div>FÍSICA</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menú </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Guías de Laboratorio',
    caption: 'Guías de lab. física',
    icon: 'school',
    routeName: 'guias-lab',
  },
  {
    title: 'Simulaciones',
    caption: 'Simulación de física',
    icon: 'code',
    routeName: 'sim-test',
  },
  {
    title: 'Laboratorio virtual',
    caption: 'Modelo 3D',
    icon: 'code',
    routeName: 'modelo-1',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
