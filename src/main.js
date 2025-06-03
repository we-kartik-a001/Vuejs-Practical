import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './components/router'
import './style.css'    
import TemplateRef from './components/Pages/TemplateRef.vue'

const app = createApp(App);

//Globally accessible
app.component('TemplateRef', TemplateRef)

app.use(Router).mount('#app')

