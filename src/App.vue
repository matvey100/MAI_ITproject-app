<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3005';
import {RouterView} from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        RouterView
    }
}
</script>

<template>
  <app-header class="AppNav"></app-header>
  <div class="body-1">
    <router-view class="AppBody"></router-view>
  </div>
  <app-footer class="AppFooter"></app-footer>
</template>

<style>
.AppNav {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}

.body-1 {
  padding-top: 100px;
}
</style>
