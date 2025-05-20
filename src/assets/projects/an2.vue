<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_an2 = ref();
lights_an2.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1.1,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.1
  }]
</script>

<template>
    <div class="model" id="an-2">
    <div class="">
      <vue3dLoader
      filePath="models/an2.fbx"
      :cameraPosition="{ x: 1000, y: 500, z: -1500}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_an2"
      :pointLightFollowCamera="true"
      :minDistance="1000"
      :maxDistance="5000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Ан-2</p>
      <p class="aero-innovations-text-style-2">Ан-2 — советский лёгкий многоцелевой самолёт, разработанный в 1947 году ОКБ-153 под руководством О. К. Антонова.

Представляет собой однодвигательный биплан с расчалочным крылом. Оборудован поршневым двигателем АШ-62ИР конструкции А. Д. Швецова.

Ан-2 используется как сельскохозяйственный, спортивный, транспортный, учебный, пассажирский самолёт; в ряде стран используется в качестве военного.</p>
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