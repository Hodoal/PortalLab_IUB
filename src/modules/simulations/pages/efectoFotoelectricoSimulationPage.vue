<template>
  <div class="size-simulation-main">
    <!-- Presentación con barra de carga y fondo opaco -->
    <div v-if="showPresentation" style="width: 100%; height: 100%" class="row flex-center">
      <div class="presentation-content">
        <span class="presentation-title">Simulador Efecto Fotoeléctrico</span>
        <div class="progress-bar-container">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
    <!-- Cargando o Iframe -->
    <div v-else style="width: 100%; height: 100%">
      <div
        v-if="loading"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 600px;
        "
      >
        <img
          :src="loadingImg"
          alt="Cargando"
          style="width: 80px; height: 80px; margin-bottom: 1rem"
        />
        <span style="font-size: 1rem; color: #555">Cargando simulador...</span>
      </div>
      <iframe
        v-show="!loading"
        src="https://hodoal.github.io/simulations-fotoelectric_effect/"
        style="border: none; width: 100%; height: 100%"
        @load="loading = false"
      ></iframe>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
const loadingImg = '/images/labs/labTest/panel.jpg';

const loading = ref(true);
const showPresentation = ref(false);
const progress = ref(0);

let progressInterval: number | undefined;
const showIframe = ref(false);

function abrirSimulador() {
  loading.value = true;
  showIframe.value = true;
  showPresentation.value = true;
  progress.value = 0;
  progressInterval = window.setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.random() * 7 + 2;
      if (progress.value >= 100) {
        progress.value = 100;
        showPresentation.value = false; // OCULTA presentación INMEDIATAMENTE
        clearInterval(progressInterval);
      }
    }
  }, 80);
}

onBeforeMount(() => {
  abrirSimulador();
});
</script>
<style scoped>
.presentation-bg {
  position: relative;
  width: 100%;
  height: 600px;
  background: url('/images/labs/labTest/panel.jpg') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.presentation-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(30, 41, 59, 0.65);
  z-index: 1;
}
.presentation-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.presentation-title {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px #0008;
}
.progress-bar-container {
  width: 220px;
  height: 10px;
  background: rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px #0002;
}
.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
  border-radius: 8px 0 0 8px;
  transition: width 0.25s cubic-bezier(0.4, 2, 0.6, 1);
}
</style>
