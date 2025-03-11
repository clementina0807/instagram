import { createApp } from "vue";
import "@/assets/css/index.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";

const app = createApp(App);
app.use(Antd);
app.use(router).mount('#app').mount('#search').mount('#home'); // 修正位置
