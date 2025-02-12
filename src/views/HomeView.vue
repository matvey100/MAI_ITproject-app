<script>
export default {
    methods: {

    }
}
</script>

<template>
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
        <img src="../assets/gap.png" alt="" class="gap">
    </div>
    <div class="title-1">
        <p class="hero-title1">IT Проект</p>
        <div class="title-img-container">
            <img src="../assets/plane-header_2.jpeg" alt="" class="title-img">
        </div>
    </div>
    <div class="about-container" style="text-align: center;">
        <div class="about-text-container">
            <div class="image-view">
                <img src="../assets/viewer.png" alt="" class="viewer">
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
    <img src="../assets/gap.png" alt="" class="gap">
</div>
<div class="title-1">
    <p class="hero-title1">Наши проекты</p>
</div>

<div id="projects" class="container py-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Aircraft">
                <div class="card-footer">Aircraft Ad5e33</div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Сухой Су-27">
                <div class="card-footer">Сухой Су-<strong>27</strong></div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Aircraft A44e33">
                <div class="card-footer">Aircraft A44e33</div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Aircraft A3we33">
                <div class="card-footer">Aircraft A3we33</div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Aircraft su325i3">
                <div class="card-footer">Aircraft su325i3</div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Aircraft Ad5e33">
                <div class="card-footer">Aircraft Ad5e33</div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
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
    background: url("../assets/plane_header.jpeg") 50% / cover no-repeat;
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

</style>