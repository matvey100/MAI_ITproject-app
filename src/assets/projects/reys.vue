<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_reys = ref();
lights_reys.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 0.9,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.05
  }]
</script>

<template>
    <div class="model" id="mig-35">
    <div class="">
      <vue3dLoader
      filePath="models/reys.fbx"
      :cameraPosition="{ x: -15000, y: 5000, z: 10000}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_reys"
      :pointLightFollowCamera="true"
      :minDistance="11250"
      :maxDistance="40000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">БПЛА Ту-143 «Рейс»</p>
      <p class="aero-innovations-text-style-2">Ту-143 «Рейс» — советский разведывательный беспилотный летательный аппарат (БПЛА). Предназначен для ведения тактической маловысотной разведки в прифронтовой полосе путём фото- и телеразведки площадных целей и отдельных маршрутов, а также наблюдения за радиационной обстановкой по маршруту полёта. Входит в состав комплекса ВР-3.

Первый полёт БПЛА Ту-143 состоялся в декабре 1970 года. В 1972 году начались совместные государственные испытания, которые закончились в 1976 году, после чего комплекс «Рейс» был принят на вооружение.

Всего разведывательных БПЛА типа Ту-143 было выпущено 950 штук, серийное производство было прекращено в 1989 году.</p>
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