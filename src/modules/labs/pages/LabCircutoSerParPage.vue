<template>
  <div class="bg-body row flex-center">
    <div class="q-ma-md" style="width: 100%; height: 100%">
      <q-stepper class="content-stepper" v-model="step" ref="stepper" color="primary" animated>
        <q-step :name="1" title="Introducción" icon="settings" :done="step > 1">
          <!-- TITLE DEL STEP -->
          <section class="text-center step-title-main">
            <div class="text-h6">FACULTAD DE CIENCIAS, EDUCACIÓN, ARTE Y HUMANIDADES</div>
            <div class="text-subtitle2">FÍSICA ELÉCTRICA: EXPERIMENTO No 4</div>
            <div class="text-subtitle2">CIRCUITOS SERIE Y PARALELOS</div>
          </section>
          <!-- BODY DEL STEP -->
          <section class="step-body-main q-mt-md">
            <div>
              Los circuitos eléctricos son configuraciones de componentes conectados por conductores
              que permiten el flujo de corriente. Dos de las formas más comunes de conexión son
              serie y paralelo, cada una con propiedades únicas que afectan cómo se distribuyen la
              corriente, el voltaje y la energía.
            </div>
            <div>
              ¿Se conservan la carga y la energía totales en un circuito eléctrico? ¿La suma de las
              caídas de voltaje a través de cada componente del circuito es igual a cero? ¿La suma
              de las corrientes que entran en una unión del circuito es igual a la suma de las
              corrientes que salen de la unión?
            </div>
            <div class="row flex-center q-mt-md">
              <iframe width="400" height="300" src="https://www.youtube.com/embed/loiitLe61nc">
              </iframe>
            </div>
          </section>
        </q-step>

        <q-step :name="2" title="Objetivos y materiales" icon="create_new_folder" :done="step > 2">
          <section class="step-title text-center">
            <div class="text-h6 text-bold">Objetivos - Materiales y Equipos - Seguridad</div>
          </section>

          <section class="step-body row flex-center">
            <div>
              <div>
                <div class="text-subtitle2">Objetivos</div>
                <ul>
                  <li>Construir circuitos simples de resistores.</li>
                  <li>
                    Recoger datos de corriente y voltaje en varios puntos de un circuito con
                    precisión.
                  </li>
                  <li>
                    Analizar datos para apoyar la regla de lazo de Kirchhoff y la regla de unión de
                    Kirchhoff.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-subtitle2">Materiales y Equipos</div>
                <ul>
                  <li>Sistema de recolección de datos</li>
                  <li>Módulo de Corriente Inalámbrico PASCO</li>
                  <li>Kit de Circuitos Modulares Básicos PASCO</li>
                  <li>Sensor de Voltaje Inalámbrico PASCO</li>
                </ul>
              </div>

              <div>
                <div class="text-subtitle2">Seguridad</div>
                <ul>
                  <li>
                    No conectes los terminales de una batería sin una carga; esto causará un
                    cortocircuito.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </q-step>

        <q-step :name="3" title="Procedimientos" icon="assignment" :done="step > 3">
          <section class="step-title text-center">
            <div class="text-h6 text-bold">Procedimientos</div>
          </section>
          <section class="step-body">
            <q-tabs
              v-model="tab"
              narrow-indicator
              dense
              align="justify"
              class="text-primary"
              style="width: auto"
            >
              <q-tab :ripple="false" name="p1" label="Procedimiento 1: Resistores en Serie" />
              <q-tab :ripple="false" name="p2" label="Procedimiento 2: Resistores en paralelo" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="p1" class="row flex-center">
                <div style="width: 40%">
                  <ol>
                    <li>
                      Ensambla el circuito como se muestra en la Figura 1, usando los resistores de
                      <strong>33 Ω</strong> y <strong>100 Ω</strong>.
                    </li>
                    <li>
                      Conecta los cables del sensor de voltaje inalámbrico a través de la batería en
                      tu circuito (<span style="color: red">rojo</span> a positivo;
                      <span style="color: black">negro</span> a negativo).
                    </li>
                    <li>
                      Asegúrate de que el módulo de corriente esté conectado con el lado
                      <strong>+</strong> conectado a los resistores y el <strong>-</strong> a las
                      baterías. Ver Figura 1.
                    </li>
                    <li>
                      Conecta ambos sensores al sistema de recolección de datos, y luego crea dos
                      pantallas digitales: una mostrando voltaje y la otra mostrando corriente.
                    </li>
                    <li>
                      Comienza a registrar datos, y luego cierra el interruptor permitiendo que la
                      carga fluya por varios segundos.
                    </li>
                    <li>
                      Registra el voltaje a través de la batería y la corriente a través del
                      circuito en la Tabla 1.
                    </li>
                    <li>
                      Retira los cables del sensor de voltaje de la batería y conéctalos a través
                      del resistor de <strong>33 Ω</strong>, teniendo en cuenta la polaridad del
                      circuito (<span style="color: red">rojo</span> a positivo;
                      <span style="color: black">negro</span> a negativo).
                    </li>
                    <li>
                      Registra el voltaje a través del resistor de <strong>33 Ω</strong> en la Tabla
                      1.
                    </li>
                  </ol>
                </div>
                <div style="width: 40%">
                  <q-img src="/public/images/labs/labTest/fig_1.png" fit="contain" height="300px" />
                </div>
              </q-tab-panel>
              <q-tab-panel name="p2" class="row flex-center">
                <div style="width: 40%">
                  <ol>
                    <li>
                      Ensambla el circuito como se muestra, usando los resistores de 33 Ω y 100 Ω.
                      Conecta los cables del sensor de voltaje a través de ambos resistores. Ver
                      Figura 2.
                    </li>
                    <li>
                      Asegúrate de que el módulo de corriente esté conectado con su lado + conectado
                      en el lado del resistor y el - en el lado de la batería. Ver Figura 2.
                    </li>
                    <li>
                      Cierra el interruptor, espera unos segundos, y luego registra el voltaje y la
                      corriente (𝐼𝑜𝑢𝑡) en la Tabla 2. Abre el interruptor.
                    </li>
                    <li>
                      Retira el módulo de corriente y reemplázalo con un módulo de esquina y clips.
                      Retira el módulo de cable recto junto al resistor de 33 Ω y conecta el módulo
                      de corriente inalámbrico en su lugar. Ver Figura 2.
                    </li>
                    <li>
                      Cierra el interruptor, y luego registra la corriente a través del resistor de
                      33 Ω en la Tabla 2. Abre el interruptor.
                    </li>
                    <li>
                      Repite los mismos pasos de recolección de datos para el resistor de 100 Ω.
                      Registra la corriente en la Tabla 2.
                    </li>
                    <li>
                      Retira el módulo de corriente inalámbrico y reemplaza el módulo de cable recto
                      y clips. Retira el módulo de interruptor SPST junto al terminal negativo de la
                      batería y conecta el módulo de corriente inalámbrico en su lugar.
                    </li>
                    <li>Cierra el interruptor y registra la corriente (𝐼𝑖𝑛) en la Tabla 2.</li>
                  </ol>
                </div>
                <div style="width: 40%">
                  <q-img src="/public/images/labs/labTest/fig_2.png" fit="contain" height="350px" />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </section>
        </q-step>

        <q-step :name="4" title="Preguntas y análisis" icon="add_comment">
          <section class="step-title text-center">
            <div class="text-h6 text-bold">Preguntas y Análisis</div>
          </section>
          <section class="step-body">
            <q-tabs v-model="tab" narrow-indicator dense align="justify" class="text-primary">
              <q-tab :ripple="false" name="p1" label="Parte 1: Resistores en Serie" />
              <q-tab :ripple="false" name="p2" label="Parte 2: Resistores en paralelo" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="p1" class="row flex-center">
                <div style="width: 40%">
                  <ol>
                    <li>
                      Para el circuito en serie que probaste en la Parte 1, ¿cómo se comparó la suma
                      de las caídas de voltaje a través de cada resistor individual con el voltaje
                      de la batería?
                    </li>
                    <li>
                      ¿Cambiar el orden de los resistores en serie habría afectado las mediciones
                      que hiciste en la Parte 1? Si es así, explica cómo. Si no, explica por qué no.
                    </li>
                    <li>
                      Usa la Ley de Ohm para calcular la corriente que debería estar presente en el
                      circuito en serie cuando el interruptor estaba cerrado. ¿Cómo se compara esto
                      con la corriente que mediste? ¿Cuál es el porcentaje de error entre los
                      valores teóricos y medidos?
                    </li>
                  </ol>
                </div>
                <div style="width: 40%" class="q-ml-lg">
                  <q-img
                    src="/public/images/labs/labTest/tabla_1.png"
                    fit="contain"
                    height="300px"
                  />
                </div>
              </q-tab-panel>
              <q-tab-panel name="p2" class="row flex-center">
                <div style="width: 40%">
                  <ol>
                    <li>
                      ¿Cómo se comparó la corriente que mediste saliendo de las baterías con la
                      corriente que regresaba a las baterías? ¿Tus datos apoyan la conservación de
                      la carga? Si es así, explica cómo. Si no, explica por qué no.
                    </li>
                    <li>
                      Para el circuito en paralelo que probaste en la Parte 2, ¿cómo se comparó la
                      suma de las corrientes a través de cada resistor individual con la corriente
                      total que sale de la batería?
                    </li>
                    <li>
                      Usa la ecuación a continuación para determinar la resistencia equivalente de
                      ambos resistores en paralelo. Luego usa la resistencia equivalente y la Ley de
                      Ohm para calcular la corriente que debería estar presente.
                    </li>
                    <li>
                      Basado en tu respuesta a la pregunta anterior, compara la corriente teórica
                      calculada para el circuito en paralelo con la corriente que mediste (𝐼𝑜𝑢𝑡) en
                      el circuito en la Parte 2. ¿Cuál es el porcentaje de error entre los valores
                      teóricos y medidos?
                    </li>
                  </ol>
                </div>
                <div style="width: 40%" class="q-ml-lg">
                  <q-img
                    src="/public/images/labs/labTest/tabla_2.png"
                    fit="contain"
                    height="350px"
                  />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </section>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation class="row justify-end">
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="($refs.stepper as StepperRef).previous()"
              label="Atras"
              class="q-ml-sm"
            />
            <q-btn
              class="self-center"
              @click="($refs.stepper as StepperRef).next()"
              color="primary"
              :label="step === 4 ? 'Filalizar' : 'Continue'"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
interface StepperRef {
  next: () => void;
  previous: () => void;
}

const step = ref(1);
const tab = ref('p1');
</script>
<style lang="css">
.bg-body {
  width: 100%;
  height: 90vh;
  text-align: justify;
}

.content-stepper {
  width: 100%;
  height: 700px;
}

.content-step {
  height: 570px;
}

.step-title-main {
  height: 80px;
}
.step-title {
  height: 50px;
}

.step-body {
  height: 450px;
}

.step-body-main {
  height: 400px;
}
</style>
