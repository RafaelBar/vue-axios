import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-ed9e4.firebaseio.com';
axios.defaults.headers.common['Authorizations'] = 'Rafael Bar';
axios.defaults.headers.get['accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
  console.log(res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
