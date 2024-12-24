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
    
</div>
</template>

<style>
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