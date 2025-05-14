<script  setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights = ref();
lights.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 2,
  }
];
</script>

<template>
<div class="AppNav">
  <nav class="navbar navbar-expand-lg" style="background-color: rgb(57, 57, 57);" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="">
      <img src="./assets/mai.png" alt="" style="height: 75px;">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <a class="nav-link active nav-text" href="">Главная</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link active nav-text" href="#about">О нас</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active nav-text" href="#projects">Наши проекты</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link active nav-text" href="">Наша команда</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link active nav-text" href="#contacts">Контакты</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

<div class="body-1">
    <div>
    <div class="main-content-container">
        <div class="sky-high-flight">
            <p class="majestic-heading1">“Only birds can fly without MAI”</p>
            <div class="it-project-welcome-section">
                <p class="welcome-message-text-style">Добро пожаловать в мир нашего IT-проекта</p>
                <div class="explore-section">
                    <div class="vertical-centered-text-container">
                            <p class="majestic-heading"><a href="#about" style="color: white; text-decoration: none;">Исследуйте!</a></p>
                            <div class="gradient-background-container"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="about">
    <div class="gap-container">
        <img src="./assets/gap.png" alt="" class="gap">
    </div>
    <div class="title-1">
        <p class="hero-title1">IT Проект</p>
        <div class="title-img-container">
            <img src="./assets/plane-header_2.jpeg" alt="" class="title-img">
        </div>
    </div>
    <div class="about-container" style="text-align: center;">
        <div class="about-text-container">
            <div class="image-view">
                <img src="./assets/viewer.png" alt="" class="viewer">
            </div>
            <div class="about-text">
                <p class="aero-innovations-text-style">Мы – команда увлеченных инженеров и дизайнеров из Московского Авиационного Института. Мы стремимся расширить границы аэрокосмических инноваций с помощью передовых цифровых технологий.</p>
                <p class="aero-innovations-text-style">Мы посвятили себя проектированию, моделированию, симуляции и 3D-печати передовых аэрокосмических аппаратов. Используя современное программное обеспечение и технологии 3D-печати, мы стремимся:</p>
                <div class="about-card-container">
                    <div class="about-card">Инновации</div>
                    <div class="about-card">Моделирование</div>
                    <div class="about-card">Визуализация</div>
                    <div class="about-card">Прототипирование</div>
                    <div class="about-card">Конструирование самолётов</div>
                    <div class="about-card">Разработка дронов</div>
                    <div class="about-card">Аддитивное производство</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="gap-container">
    <img src="./assets/gap.png" alt="" class="gap">
</div>
<div class="title-1">
    <p class="hero-title1">Наши проекты</p>
</div>

<div id="projects" class="">
  <div class="about-card-container" style="margin-top: 15px; margin-bottom: 35px;">
    <div class="about-card"><a href="#mig-35" style="text-decoration: none; color: white;">МиГ-35</a></div>
  </div>
  <div class="model" id="mig-35">
    <div class="">
      <vue3dLoader
      filePath="models/mig35.fbx"
      :cameraPosition="{ x: 0, y: 0, z: -15000}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">МиГ-35</p>
      <p class="aero-innovations-text-style">МиГ-35 — российский многоцелевой истребитель поколения 4++, разработанный ОАО «РСК МиГ» на базе МиГ-29. Предназначен для завоевания превосходства в воздухе и нанесения ударов по наземным и морским целям в любых погодных условиях. Оснащён современной авионикой, радиолокационной станцией с активной фазированной антенной решёткой (АФАР), улучшенными системами наведения и защиты. Отличается высокой манёвренностью, боевой эффективностью и возможностью применения широкого спектра вооружений. МиГ-35 ориентирован как на российские ВКС, так и на экспорт.
      </p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: Минайлов Пётр</p>
    </div>
  </div>
</div>
</div>

<div class="AppFooter" id="contacts">
  <div class="footer-container">
    <img src="./assets/dot.png" class="mini-text-block" />
    <p class="vibrant-heading">Будьте в курсе!</p>
    <div class="society-container">
        <div class="social-media-icons-container">
            <img src="./assets/telegram.png" class="image-container-with-text" />
            <img src="./assets/vk.png" class="image-container-with-text" />
        </div>
        <p class="social-media-conversation-tracking">Следите за нами в социальных сетях</p>
    </div>
</div>
</div>
</template>

<style>
/* .AppNav {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}

.body-1 {
  padding-top: 100px;
} */

.title-2 {
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
}

.aero-innovations-text-style-2 {
  font: 500 20px/35px Poppins, sans-serif;
  color: white;
  margin-right: 70px;
}

.hero-title2 {
  font: 900 50px/75px Poppins, sans-serif;
  color: white;
  margin-bottom: 0px;
}

.card {
    border-radius: 15px;
    background: #1b1b3a;
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
}
.card img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    max-height: 200px;
    object-fit: cover;
}
.card-footer {
    background: #0a0a23;
    color: white;
    font-weight: bold;
}
.about-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin-bottom: 20px;

}
.about-card {
    background: rgb(12,17,44);
    background: linear-gradient(90deg, rgba(12,17,44,1) 10%, rgba(42,12,102,1) 70%);
    color: white;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    transition: transform 0.3s ease-in-out;
    font: 500 25px/35px Poppins, sans-serif;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}
.about-card:hover {
    transform: scale(1.1);
    cursor: default;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
}
@media (max-width: 0px) {
    .about-card-container {
        flex-direction: column;
        align-items: center;
    }
}
.about-text-container {
    margin-top: 10px;
    padding-top: 10px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    gap: 20px;
}
.aero-innovations-text-style {
    font: 500 25px/35px Poppins, sans-serif;
    color: white;
    margin-right: 70px;
}
.viewer {
    width: 100%;
    height: auto;
}
.hero-title {
    padding-top: 15px;
    margin-bottom: -25px;
    font: 700 52px/75px Poppins, sans-serif;
    color: white;
}
.about-container {
    margin-top: 7px;
    margin-left: 50px;
    margin-right: 50px;
    background: rgb(13,165,189);
    background: linear-gradient(90deg, rgba(13,165,189,1) 10%, rgba(90,75,158,1) 75%);
    border-radius: 50px;
}
.gap-container {
    text-align: center;
    margin-top: 25px;
}
.gap {
    width: 80vw;
    height: auto;   
}
.title-img {
    width: 75vw;
    height: auto;
}
.title-1 {
    text-align: center;
}
.hero-title1 {
    font: 900 64px/75px Poppins, sans-serif;
    color: white;
    margin-bottom: 0px;
}
.main-content-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-right: 11.5px;
    margin-top: -5px;
    background: url("./assets/plane_header.jpeg") 50% / cover no-repeat;
    border: none;
    text-align: center;
}
.sky-high-flight {
    padding-top: 418px;
    padding-bottom: 211px;
}
.majestic-heading1 {
    padding: 0;
    margin: 0;
    font: 800 60px/75px Poppins, sans-serif;
    color: white;
}
.it-project-welcome-section {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;
    margin-top: 12.5px;
}
.welcome-message-text-style {
    flex: 0 0 auto;
    align-self: center;
    padding: 0;
    margin: 0;
    margin-left: 0;
    font: 800 36px Poppins, sans-serif;
    color: rgba(0, 0, 0, 0.92);
}
.explore-section {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 11.5px;
    margin-top: 10.5px;
}
.vertical-centered-text-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 274px;
    transition: transform 0.3s ease;
}
.vertical-centered-text-container:hover {
    transform: scale(1.25);
}
.majestic-heading {
    flex: 0 0 auto;
    align-self: center;
    padding: 0;
    margin: 0;
    font: 500 36px Poppins, sans-serif;
    color: white;
    z-index: 1;
}
.gradient-background-container {
    box-sizing: border-box;
    flex: 0 0 auto;
    height: 64px;
    margin-top: -60px;
    background: linear-gradient(90deg, rgba(0, 31, 85, 1) 0%, rgba(120, 44, 150, 1) 100%);
    border-radius: 22px;
}

.society-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.footer-container {
    background-color: #141414;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
}
.vibrant-heading {
    font: 800 30px Poppins, sans-serif;
    color: #3aedf7;
}
.mini-text-block {
        height: 7.25px;
}
.image-container-with-text {
    box-sizing: border-box;
    display: block;
    width: 64px;
    max-width: initial;
    height: 50px;
    border: none;
    object-fit: contain;
}
.social-media-icons-container {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3.75px;
}
.social-media-conversation-tracking {
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    margin-top: 8px;
    margin-left: -6px;
    font: 500 18px Poppins, sans-serif;
    color: white;
    text-align: left;
}
</style>
