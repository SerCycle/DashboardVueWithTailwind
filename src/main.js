import { createApp } from 'vue';
import App from './App.vue';

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// import tailwind
import './assets/tailwind.css'

// import apexchart
import VueApexCharts from "vue3-apexcharts";

// import vue router
import router from './router'

const app = createApp(App)
    app.use(router)
    app.mount('#app')
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(VueApexCharts)
