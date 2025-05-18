<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_su25 = ref();
lights_su25.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 2.25,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.35
  }
];
</script>

<template>
    <div class="model" id="su-25">
        <div class="">
        <vue3dLoader
        filePath="models/su25.fbx"
        :cameraPosition="{ x: 1250, y: 250, z: 500}"
        :position="{ x: -400, y: 0, z: 0}"
        ref="vueRef"
        :height="500"
        :backgroundColor="'#0a0a0a'"
        :lights="lights_su25"
        :pointLightFollowCamera="true"
        :minDistance="750"
        :maxDistance="4000"
        />
        </div>
        <div class="title-2">
        <p class="hero-title2">Су-25</p>
        <p class="aero-innovations-text-style-2">
            Су-25 — бронированный дозвуковой самолёт-штурмовик. Предназначен для оказания непосредственной авиационной поддержки войскам в ходе боевых действий днём и ночью при визуальной видимости цели, а также для круглосуточного поражения объектов с известными координатами в любых метеорологических условиях.
            В войсках Су-25 получил прозвище «Грач». По одной из версий, в честь птицы рода воронов советский штурмовик назвали лётчики. Сходство с грачом, по мнению пилотов, самолёту придавали его форма с необычным широким крылом и толстыми мотогондолами по бокам от фюзеляжа.
            В настоящее время различные варианты Су-25 находятся на вооружении ВВС России, Украины, Белоруссии, Грузии, Узбекистана, Чехии, Словакии, Болгарии, Анголы, Афганистана, КНДР и Ирака и других стран.
            </p>
        <p class="aero-innovations-text-style-2"><img src="/src/assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработали: <b>Улыбин Егор, Старикова Дарья</b></p>
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