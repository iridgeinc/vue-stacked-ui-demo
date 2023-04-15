import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { stackedUI } from 'vue-stacked-ui'

import './assets/main.css'
import 'vue-stacked-ui/dist/vue-stacked-ui.css'

const app = createApp(App)

app.use(router)
app.use(stackedUI, {router: router});

app.mount('#app')
