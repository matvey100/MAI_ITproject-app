<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_mig35 = ref();
lights_mig35.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1.7,
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
      filePath="models/mig35.fbx"
      :cameraPosition="{ x: 5750, y: 3000, z: -11000}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_mig35"
      :pointLightFollowCamera="true"
      :minDistance="10000"
      :maxDistance="40000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">МиГ-35</p>
      <p class="aero-innovations-text-style-2">МиГ-35 — российский многоцелевой истребитель поколения 4++, разработанный ОАО «РСК МиГ» на базе МиГ-29. Предназначен для завоевания превосходства в воздухе и нанесения ударов по наземным и морским целям в любых погодных условиях. Оснащён современной авионикой, радиолокационной станцией с активной фазированной антенной решёткой (АФАР), улучшенными системами наведения и защиты. Отличается высокой манёвренностью, боевой эффективностью и возможностью применения широкого спектра вооружений. МиГ-35 ориентирован как на российские ВКС, так и на экспорт.
      </p>
      <p class="aero-innovations-text-style-2"><img src="/src/assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: <b>Минайлов Пётр</b></p>
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