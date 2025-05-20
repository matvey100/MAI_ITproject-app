<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_j10 = ref();
lights_j10.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1.75,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.25
  }]
</script>

<template>
    <div class="model" id="j-10">
    <div class="">
      <vue3dLoader
      filePath="models/j10.fbx"
      :cameraPosition="{ x: 1000, y: 500, z: 1000}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_j10"
      :pointLightFollowCamera="true"
      :minDistance="900"
      :maxDistance="4000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Chengdu J-10</p>
      <p class="aero-innovations-text-style-2">Chengdu J-10 — китайский многоцелевой всепогодный истребитель. Разработан и производится компанией Chengdu Aircraft Industry Group (CAIG). Экспортный вариант истребителя имеет обозначение F-10. На Западе машина также известна под названием Vigorous Dragon — «Стремительный дракон».

Истребитель был принят на вооружение не только китайской армии, но и армии Пакистана.</p>
      <p class="aero-innovations-text-style-2"><img src="/src/assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: <b>Овчинников Алексей</b></p>
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