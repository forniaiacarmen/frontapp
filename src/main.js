import { createApp } from 'vue';
import App from './App.vue';
import store from './store';  // Asegúrate de importar el store desde './store'
import router from './router'; // Asegúrate de importar el router desde './router'

createApp(App)
  .use(store)  // Usa la tienda Vuex
  .use(router)  // Usa el enrutador
  .mount('#app');
