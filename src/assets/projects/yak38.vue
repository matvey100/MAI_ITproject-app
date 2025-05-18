<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_yak38 = ref();
lights_yak38.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 3.75,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: -500 },
    intensity: 0.25
  }];
</script>

<template>
    <div class="model" id="su-30">
    <div class="">
      <vue3dLoader
      filePath="models/yak38.fbx"
      :cameraPosition="{ x: -1000, y: 500, z: -500 }"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_yak38"
      :pointLightFollowCamera="true"
      :minDistance="800"
      :maxDistance="5000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Як-38</p>
      <p class="aero-innovations-text-style-2">Як-38 (до 1976 года обозначался «Як-36М») — советский лёгкий палубный штурмовик, первый в СССР серийный самолёт вертикального взлёта и посадки.

Предназначался для поражения береговых объектов и кораблей водоизмещением до 4000–5000 т, для авиационной поддержки боевых действий сухопутных сил в тактической и ближайшей оперативной глубине расположения противника, для борьбы с самолётами ДРЛО, транспортными самолётами и вертолётами и для ведения визуальной разведки.

Самолёт был рассчитан для базирования на авианесущих крейсерах проекта 1143 («Киев», «Минск», «Новороссийск», «Баку»).

Всего был построен 231 самолёт Як-38 различных модификаций в 1974–1989 годах. Серийный выпуск машины осуществлялся на Саратовском авиазаводе.</p>
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