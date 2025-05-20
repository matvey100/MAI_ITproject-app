<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_tahion = ref();
lights_tahion.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.07
  }]
</script>

<template>
    <div class="model" id="mig-35">
    <div class="">
      <vue3dLoader
      filePath="models/tahion.fbx"
      :cameraPosition="{ x: 15000, y: 5000, z: 10000}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_tahion"
      :pointLightFollowCamera="true"
      :minDistance="11000"
      :maxDistance="35000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">БПЛА «Тахион»</p>
      <p class="aero-innovations-text-style-2">«Тахион» — малый электрический беспилотный летательный аппарат (БПЛА).

БПЛА предназначен для наблюдения, целеуказания, корректировки огня, оценки ущерба. Эффективен в проведении аэрофото- и видеосъемки на удалении. Может использоваться в качестве ретранслятора связи. Аппарат создан компанией ООО «Ижмаш — Беспилотные системы» и представлен в 2012 году. В январе 2015 года начались государственные испытания модификации БПЛА работающим от топливных элементов, а не от аккумуляторов. На вооружение разведывательных подразделений Центрального военного округа (ЦВО) ВС России, в начале 2015 года поступили беспилотные летательные аппараты «Тахион». В начале 2016 года аппараты поступили на вооружение российской военной базы в Армении.

Беспилотный летательный аппарат разработан по аэродинамической схеме «летающее крыло» и состоит из планера с системой автоматического управления автопилотом, органов управления и силовой установки, бортовой системы питания, системы посадки на парашюте и съемных блоков целевой нагрузки. Запускается с помощью катапульты. Метод посадки — автоматически с парашютом.</p>
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