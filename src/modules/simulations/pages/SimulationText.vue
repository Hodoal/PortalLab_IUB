<template>
  <div>
    <div
      v-if="!showIframe"
      class="card"
      style="
        max-width: 340px;
        margin: 2rem auto;
        box-shadow: 0 2px 8px #0002;
        border-radius: 12px;
        padding: 1.2rem;
        background: #fff;
        text-align: center;
      "
    >
      <img
        src="/images/labs/labTest/panel.jpg"
        alt="Simulador"
        style="width: 200px; height: 200px; object-fit: contain; margin-bottom: 0.7rem;"
      />
      <h3 style="margin-bottom: 0.5rem; font-size: 1.1rem;">Simulador Efecto Fotoeléctrico</h3>
      <p style="margin-bottom: 1rem; font-size: 0.95rem; color: #444;">
        Haz clic para abrir el simulador interactivo del efecto fotoeléctrico.
      </p>
      <button
        @click="abrirSimulador"
        style="
          padding: 0.4rem 1.1rem;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 0.98rem;
          cursor: pointer;
        "
      >
        Abrir simulador
      </button>
    </div>
    <div v-else>
      <button
        @click="volver"
        style="
          margin-bottom: 1rem;
          padding: 0.3rem 1rem;
          background: #e5e7eb;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        "
      >
        ← Volver
      </button>
      <!-- Presentación con barra de carga y fondo opaco -->
      <div v-if="showPresentation" class="presentation-bg">
        <div class="presentation-content">
          <span class="presentation-title">Simulador Efecto Fotoeléctrico</span>
          <div class="progress-bar-container">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
      </div>
      <!-- Cargando o Iframe -->
      <div v-else>
        <div v-if="loading" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 600px;">
          <img
            :src="loadingImg"
            alt="Cargando"
            style="width: 80px; height: 80px; margin-bottom: 1rem;"
          />
          <span style="font-size: 1rem; color: #555;">Cargando simulador...</span>
        </div>
        <iframe
          v-show="!loading"
          src="https://hodoal.github.io/simulations-fotoelectric_effect/"
          width="100%"
          height="600"
          style="border: none"
          @load="loading = false"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loadingImg = '/images/labs/labTest/panel.jpg'

const showIframe = ref(false)
const loading = ref(true)
const showPresentation = ref(false)
const progress = ref(0)
let progressInterval: number | undefined

function abrirSimulador() {
  loading.value = true
  showIframe.value = true
  showPresentation.value = true
  progress.value = 0
  progressInterval = window.setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.random() * 7 + 2
      if (progress.value >= 100) {
        progress.value = 100
        showPresentation.value = false // OCULTA presentación INMEDIATAMENTE
        clearInterval(progressInterval)
      }
    }
  }, 80)
}

function volver() {
  showIframe.value = false
  loading.value = true
  showPresentation.value = false
  progress.value = 0
  clearInterval(progressInterval)
}
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
  content: "";
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
  background: rgba(255,255,255,0.18);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px #0002;
}
.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
  border-radius: 8px 0 0 8px;
  transition: width 0.25s cubic-bezier(.4,2,.6,1);
}
</style>
