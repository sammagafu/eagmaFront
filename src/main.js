import './assets/main.css'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import instance from './service';
import ToastService from 'primevue/toastservice';
// theme
import 'primevue/resources/themes/lara-light-green/theme.css';
import '@/assets/main.css'




const app = createApp(App)
app.use(VueAxios, instance)
app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.use(ToastService);

app.use(PrimeVue, { unstyled: true });

app.mount('#app')
