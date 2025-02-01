import { createApp } from "vue";
import "@/assets/css/index.css";
import App from "./App.vue";
import router from "./router";
// import pinia from "./store";
import Antd from "ant-design-vue";
// import i18n from "./i18n";
// import "@/mock/index.js";

const app = createApp(App);
app.use(Antd);
app.use(router).mount('#app').mount('#search').mount('#home'); // 修正位置
