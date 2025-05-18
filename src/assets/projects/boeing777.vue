<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_boeing777 = ref();
lights_boeing777.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1,
  }
];
</script>

<template>
    <div class="model" id="boeing-777">
    <div class="">
      <vue3dLoader
      filePath="models/777.dae"
      :cameraPosition="{ x: 50, y: 25, z: 25}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_boeing777"
      :minDistance="35"
      :maxDistance="150"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Boeing 777</p>
      <p class="aero-innovations-text-style-2">Boeing 777 — семейство двухдвигательных широкофюзеляжных пассажирских самолётов для авиалиний большой протяжённости. Самолёты семейства входят в число самых крупных пассажирских воздушных судов.
Boeing 777 — двухмоторный турбореактивный низкоплан со стреловидным крылом и однокилевым оперением. Он является первым самолётом, полностью разработанным без бумажных чертежей, а только с использованием трёхмерной компьютерной графики.
      </p>
      <p class="aero-innovations-text-style-2"><img src="/src/assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработала: <b>Коротина Василиса</b></p>
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