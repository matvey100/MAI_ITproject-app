<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_tu144 = ref();
lights_tu144.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.1
  }]
</script>

<template>
    <div class="model" id="mig-35">
    <div class="">
      <vue3dLoader
      filePath="models/tu144.fbx"
      :cameraPosition="{ x: -5000, y: 2500, z: -3500}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_tu144"
      :pointLightFollowCamera="true"
      :minDistance="4000"
      :maxDistance="16000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Ту-144</p>
      <p class="aero-innovations-text-style-2">Ту-144 (по кодификации НАТО: Charger) — советский сверхзвуковой пассажирский самолёт 1-го класса, разработанный КБ «Туполев» в 1960-х годах и производившийся в Воронеже.

Первый испытательный полёт совершил 31 декабря 1968 года, что стало первым в мире полётом сверхзвукового пассажирского самолёта. 5 июня 1969 года впервые в истории сверхзвуковой самолёт пассажирской авиации преодолел звуковой барьер.

Коммерческая эксплуатация началась в 1975 году и продолжалась до 1978 года.</p>
      <p class="aero-innovations-text-style-2"><img src="/src/assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: <b>Цуканов Иван</b></p>
    </div>
  </div>
</template>

<style>
.title-2 {
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}
.hero-title2 {
  font: 900 50px/75px Poppins, sans-serif;
  color: white;
  margin-bottom: 0px;
}
.aero-innovations-text-style-2 {
  font: 500 20px/35px Poppins, sans-serif;
  color: white;
  /* margin-right: 70px; */
  text-align: justify;
}
</style>