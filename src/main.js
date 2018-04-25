import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "slick-carousel/slick/slick.css"
import inViewportDirective from 'vue-in-viewport-directive'

Vue.use(BootstrapVue);

Vue.directive('in-viewport', inViewportDirective);
new Vue({
  el: '#app',
  render: h => h(App)
})
