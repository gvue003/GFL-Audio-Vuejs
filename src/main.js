import { createApp } from "vue";
import App from "./App.vue";
import { AVPlugin } from "vue-audio-visual";

const app = createApp(App);
app.use(AVPlugin);

app.mount("#app");
