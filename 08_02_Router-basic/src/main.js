import { createApp } from 'vue'
import App from './App.vue'
import router from './router/01_router'

const app = createApp(App)

app.use(router)

app.mount('#app')
