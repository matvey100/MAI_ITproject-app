<script>
export default {
    methods: {

    }
}
</script>

<template>
<div class="footer-container">
    <img src="../assets/dot.png" class="mini-text-block" />
    <p class="vibrant-heading">Будьте в курсе!</p>
    <div class="society-container">
        <div class="social-media-icons-container">
            <img src="../assets/telegram.png" class="image-container-with-text" />
            <img src="../assets/vk.png" class="image-container-with-text" />
        </div>
        <p class="social-media-conversation-tracking">Следите за нами в социальных сетях</p>
    </div>
</div>
</template>

<style>
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