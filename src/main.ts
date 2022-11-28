import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'

// test Tree-Shaking about vite-plugin-require@1.1.10
if (true) {
  require('vconsole');
  console.log('test tree-shaking');
}

new Vue({
  render: (h) => h(App)
}).$mount('#app')
