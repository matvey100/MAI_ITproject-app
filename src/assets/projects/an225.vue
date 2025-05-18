<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_an225 = ref();
lights_an225.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 0.6,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.01
  }
];
</script>

<template>
    <div class="model" id="an-225">
    <div class="">
      <vue3dLoader
      filePath="models/225-5.fbx"
      :cameraPosition="{ x: -5000, y: 2000, z: -4000}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_an225"
      :pointLightFollowCamera="true"
      :minDistance="4000"
      :maxDistance="15000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Ан-225</p>
      <p class="aero-innovations-text-style-2">Ан-225 — советский транспортный реактивный самолёт сверхбольшой грузоподъёмности разработки ОКБ имени О. К. Антонова.

Первый полёт был совершён 21 декабря 1988 года. Самолёт создавался как элемент авиационной транспортной системы для советской космической программы «Энергия — Буран».

Единственный лётный экземпляр Ан-225 был разрушен в ангаре 25 февраля 2022 года в ходе боевых действий.</p>
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