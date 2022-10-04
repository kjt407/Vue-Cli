import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import StatusComponent from "./Status";

Vue.component('AppStatus', StatusComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  StatusComponent,
  render: (h) => h(App),
}).$mount("#app");
