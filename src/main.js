import { createApp } from 'vue'
import App from './App.vue'
import router from './router';  // Asegúrate de importar el router correctamente

createApp(App)
.use(router)  // Usa el enrutador
.mount('#app')
