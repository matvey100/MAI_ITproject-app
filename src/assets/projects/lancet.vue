<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_lancet = ref();
lights_lancet.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 0.8,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.2
  }
];
</script>

<template>
    <div class="model" id="su-25">
        <div class="">
        <vue3dLoader
        filePath="models/lancet.fbx"
        :cameraPosition="{ x: 1700, y: 750, z: 1000}"
        ref="vueRef"
        :height="500"
        :backgroundColor="'#0a0a0a'"
        :lights="lights_lancet"
        :pointLightFollowCamera="true"
        :minDistance="1000"
        :maxDistance="3000"
        />
        </div>
        <div class="title-2">
        <p class="hero-title2">БПЛА «Ланцет»</p>
        <p class="aero-innovations-text-style-2">
            БПЛА «Ланцет» — это беспилотный барражирующий боеприпас, разработанный российской компанией ZALA. Он предназначен для поражения наземной техники и других важных целей на переднем крае и в ближнем тылу противника. « Ланцет» может использоваться как для ударных, так и для разведывательных задач. Он оснащён интеллектуальными, навигационными и коммуникационными модулями, а также приборами оптико-электронного и телевизионного наведения. « Ланцет» имеет видеокамеры в инфракрасном и видимом диапазоне, наведение на лазерный целеуказатель, а также датчик поиска целей газоанализатором и радиометром.</p>
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