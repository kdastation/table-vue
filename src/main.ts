import { createApp } from "vue";
import "vuetify/styles";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import router from "./router";
import { store, key } from "@/store";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(store, key).use(router).mount("#app");
