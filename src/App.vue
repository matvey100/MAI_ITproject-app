<script  setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const vueRef = ref<any>(null);
const lights_mig35 = ref();
lights_mig35.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1.7,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.1
  }]
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
const lights_mirage = ref();
lights_mirage.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1.75,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.25
  }
];
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
const lights_boeing777 = ref();
lights_boeing777.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1,
  }
];
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
const lights_su30 = ref();
lights_su30.value=[
  {
    type: "AmbientLight",
    color: "white",
    intensity: 1.2,
  },
  {
    type: "point",
    color: "#ffffff",
    position: { x: 0, y: 0, z: 500 },
    intensity: 0.2
  }]
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
        <p class="hero-title1">О нас</p>
    </div>
    <div class="about-container" style="text-align: center;">
        <div class="">
            <!-- <div class="image-view">
                <img src="./assets/viewer.png" alt="" class="viewer">
            </div> -->
            <div class="about-text">
                <p class="aero-innovations-text-style">
                    Добро пожаловать на сайт проекта "Анимация подвижных частей летательных аппаратов"! 
                    Здесь вы можете найти 3D-модели различных самолетов и наглядно увидеть работу закрылков, 
                    элеронов, рулей высоты и других механизмов, которые обеспечивают управление летательным аппаратом.
                </p>
                <p class="aero-innovations-text-style">
                    В нашем проекте используются технологии 3D-визуализации,  
                    что делает изучение авиации более наглядным, увлекательным и эффективным.
                </p>
                <p class="aero-innovations-text-style">
                   Присоединяйтесь к нам и открывайте удивительный мир авиационных технологий!
                </p>
            </div>
        </div>
    </div>
</div>

<div class="gap-container">
    <img src="./assets/gap.png" alt="" class="gap">
</div>
<div class="title-1">
    <p class="hero-title1">Наши проекты</p>
    <p style="color: gray;">Время загрузки моделей займёт несколько минут, пожалуйста подождите.</p>
</div>

<div id="projects" class="">
  <div class="about-card-container" style="margin-top: 15px; margin-bottom: 35px;">
    <div class="about-card"><a href="#su-25" style="text-decoration: none; color: white;">Су-25</a></div>
    <div class="about-card"><a href="#mig-35" style="text-decoration: none; color: white;">МиГ-35</a></div>
    <div class="about-card"><a href="#mirage-2000" style="text-decoration: none; color: white;">Mirage 2000</a></div>
    <div class="about-card"><a href="#geran" style="text-decoration: none; color: white;">БПЛА «Герань»</a></div>
    <div class="about-card"><a href="#boeing-777" style="text-decoration: none; color: white;">Boeing 777</a></div>
    <div class="about-card"><a href="#an-225" style="text-decoration: none; color: white;">Ан-225</a></div>
    <div class="about-card"><a href="#su-30" style="text-decoration: none; color: white;">Су-30</a></div>
  </div>

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
      :maxDistance="2000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Су-25</p>
      <p class="aero-innovations-text-style-2">
        Су-25 — бронированный дозвуковой самолёт-штурмовик. Предназначен для оказания непосредственной авиационной поддержки войскам в ходе боевых действий днём и ночью при визуальной видимости цели, а также для круглосуточного поражения объектов с известными координатами в любых метеорологических условиях.
        В войсках Су-25 получил прозвище «Грач». По одной из версий, в честь птицы рода воронов советский штурмовик назвали лётчики. Сходство с грачом, по мнению пилотов, самолёту придавали его форма с необычным широким крылом и толстыми мотогондолами по бокам от фюзеляжа.
        В настоящее время различные варианты Су-25 находятся на вооружении ВВС России, Украины, Белоруссии, Грузии, Узбекистана, Чехии, Словакии, Болгарии, Анголы, Афганистана, КНДР и Ирака и других стран.
        </p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработали: <b>Улыбин Егор, Старикова Дарья</b></p>
    </div>
  </div>

  <div class="model" id="mig-35">
    <div class="">
      <vue3dLoader
      filePath="models/mig35.fbx"
      :cameraPosition="{ x: 5750, y: 3000, z: -11000}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_mig35"
      :pointLightFollowCamera="true"
      :minDistance="10000"
      :maxDistance="20000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">МиГ-35</p>
      <p class="aero-innovations-text-style-2">МиГ-35 — российский многоцелевой истребитель поколения 4++, разработанный ОАО «РСК МиГ» на базе МиГ-29. Предназначен для завоевания превосходства в воздухе и нанесения ударов по наземным и морским целям в любых погодных условиях. Оснащён современной авионикой, радиолокационной станцией с активной фазированной антенной решёткой (АФАР), улучшенными системами наведения и защиты. Отличается высокой манёвренностью, боевой эффективностью и возможностью применения широкого спектра вооружений. МиГ-35 ориентирован как на российские ВКС, так и на экспорт.
      </p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: <b>Минайлов Пётр</b></p>
    </div>
  </div>

  <div class="model" id="mirage-2000">
    <div class="">
      <vue3dLoader
      filePath="models/mirage.fbx"
      :cameraPosition="{ x: 1000, y: 250, z: 700}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_mirage"
      :pointLightFollowCamera="true"
      :minDistance="750"
      :maxDistance="2000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Dassault Mirage 2000</p>
      <p class="aero-innovations-text-style-2">Dassault Mirage 2000 — французский многоцелевой истребитель четвёртого поколения. Разработан в 1970-х годах фирмой «Дассо». На вооружении с 1984 года. Основной боевой самолёт ВВС Франции в конце XX — начале XXI века. Состоит на вооружении нескольких стран Азии, Европы и Латинской Америки.
Вооружён двумя пушками калибра 30 мм с боекомплектом в 125 снарядов на каждую. У самолёта девять точек подвески: пять — под фюзеляжем и четыре — под крылом. Может нести до четырёх ракет «воздух-земля», четыре-шесть ракет класса «воздух-воздух», четыре блока неуправляемых ракет, а также корректируемые или свободнопадающие бомбы.
Также самолёт может быть оснащён подвесными топливными баками для увеличения дальности полёта.
      </p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: <b>Улыбин Егор</b></p>
    </div>
  </div>

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
      :maxDistance="750"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">БПЛА «Герань»</p>
      <p class="aero-innovations-text-style-2">Shahed 131 или же Герань-1 (для дронов, состоящих на вооружении Российской армии) — иранский БПЛА-камикадзе или же барражирующий боеприпас, наиболее широкое применение которого началось с октября 2022 года. Он оснащён двигателем модели Shahed-783/788. Масса боевой части 15 кг, а дальность полёта около 900 км.
      </p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработали: <b>Минайлов Пётр, Каюмов Матвей</b></p>
    </div>
  </div>
</div>
</div>

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
      :maxDistance="100"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Boeing 777</p>
      <p class="aero-innovations-text-style-2">Boeing 777 — семейство двухдвигательных широкофюзеляжных пассажирских самолётов для авиалиний большой протяжённости. Самолёты семейства входят в число самых крупных пассажирских воздушных судов.
Boeing 777 — двухмоторный турбореактивный низкоплан со стреловидным крылом и однокилевым оперением. Он является первым самолётом, полностью разработанным без бумажных чертежей, а только с использованием трёхмерной компьютерной графики.
      </p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработала: <b>Коротина Василиса</b></p>
    </div>
</div>

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
      :maxDistance="10000"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Ан-225</p>
      <p class="aero-innovations-text-style-2">Ан-225 — советский транспортный реактивный самолёт сверхбольшой грузоподъёмности разработки ОКБ имени О. К. Антонова.

Первый полёт был совершён 21 декабря 1988 года. Самолёт создавался как элемент авиационной транспортной системы для советской космической программы «Энергия — Буран».

Единственный лётный экземпляр Ан-225 был разрушен в ангаре 25 февраля 2022 года в ходе боевых действий.</p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: <b>Цуканов Иван</b></p>
    </div>
</div>

<div class="model" id="su-30">
    <div class="">
      <vue3dLoader
      filePath="models/su30.fbx"
      :cameraPosition="{ x: 1250, y: 750, z: 750}"
      ref="vueRef"
      :height="500"
      :backgroundColor="'#0a0a0a'"
      :lights="lights_su30"
      :pointLightFollowCamera="true"
      :minDistance="1200"
      :maxDistance="2500"
      />
    </div>
    <div class="title-2">
      <p class="hero-title2">Су-30</p>
      <p class="aero-innovations-text-style-2">Су-30 — советский и российский двухместный многоцелевой истребитель поколения 4+. Предназначен для уничтожения воздушных целей в простых и сложных метеорологических условиях, блокирования вражеских аэродромов и управления групповыми боевыми действиями при завоевании господства в воздухе.

Разработка самолёта началась в 1988 году на базе Конструкторского бюро Сухого. Основой для Су-30 послужил учебно-боевой истребитель Су-27. Работы велись на Иркутском производственном объединении и завершились в 1992 году.

Су-30 предполагает наличие двух пилотов, что вместе с новой системой управления истребителями в группе позволяло более эффективно использовать сразу несколько самолётов. Кроме того, истребитель оснащён системой дозаправки в воздухе.</p>
      <p class="aero-innovations-text-style-2"><img src="./assets/user-svgrepo-com.svg" alt="" style="width: 25px; margin-bottom: 5px;"> Модель разработал: <b>Каюмов Матвей</b></p>
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
        <p style="color: gray; margin-top: 15px;">© Матвей Севастьянов, Мойо Онест Мпуме<br>2025</p>
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

.about-text {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 3px;
}

.title-2 {
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}

.aero-innovations-text-style-2 {
  font: 500 20px/35px Poppins, sans-serif;
  color: white;
  /* margin-right: 70px; */
  text-align: justify;
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
    grid-template-columns: 0.5fr 5fr;
    align-items: center;
    gap: px;
}
.aero-innovations-text-style {
    font: 500 25px/35px Poppins, sans-serif;
    color: white;
    margin-right: 10px;
    
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
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    background: rgb(13,165,189, 0.5);
    background: linear-gradient(90deg, rgba(13,165,189, 0.5) 10%, rgba(90,75,158, 0.5) 75%);
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
