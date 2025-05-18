<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_geran = ref();
lights_geran.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1.25,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 50 },
    intensity: 0.1
  }
];
</script>

<template>
    <div class="model" id="geran">
    <div class="">
      <vue3dLoader
      filePath="models/geran.fbx"
      :cameraPosition="{ x: -200, y: 200, z: 350}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_geran"
      :pointLightFollowCamera="true"
      :minDistance="250"
      :maxDistance="1000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">БПЛА «Герань»</p>
      <p class="aero-innovations-text-style-2">Shahed 131 или же Герань-1 (для дронов, состоящих на вооружении Российской армии) — иранский БПЛА-камикадзе или же барражирующий боеприпас, наиболее широкое применение которого началось с октября 2022 года. Он оснащён двигателем модели Shahed-783/788. Масса боевой части 15 кг, а дальность полёта около 900 км.
      </p>
      <p class="aero-innovations-text-style-2"><img src="/src/assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработали: <b>Минайлов Пётр, Каюмов Матвей</b></p>
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