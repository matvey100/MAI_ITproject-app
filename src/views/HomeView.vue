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
            <img src="../assets/tu-154.png" alt="" class="title-img">
        </div>
    </div>
    <div class="about-container" style="text-align: center;">
        <div class="about-text-container">
            <div class="image-view">
                <img src="../assets/viewer.png" alt="" class="viewer">
            </div>
            <div class="about-text">
                <p class="aero-innovations-text-style">Мы – команда увлеченных инженеров и дизайнеров из Московского Авиационного Института. Мы стремимся расширить границы аэрокосмических инноваций с помощью передовых цифровых технологий</p>
            </div>
        </div>
    </div>
</div>
</template>

<style>
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