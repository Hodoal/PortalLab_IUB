<template>
  <q-item clickable tag="a" target="_blank" @click="toRoute(routeName)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  routeName: string;
  icon?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  routeName: '',
  icon: '',
});

const route = useRouter();

async function toRoute(routeName: string) {
  await route.push({ name: routeName });
}
</script>
