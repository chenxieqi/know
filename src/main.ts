import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'



createApp(App)
  .use(router)
  .mount('#app')

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status === 0){
    return res.data;
  } else if (res.status === 10){
    //
  } else {
    //this.$message.warning(res.msg);
    return Promise.reject(res);
  }
},(error) => {
  let res = error.response;
  //this.$message.error(res.data.message)
  return Promise.reject(res);
});
