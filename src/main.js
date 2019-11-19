// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

let tokenVal =localStorage.getItem("token");
Vue.http.headers.common['Authorization']=localStorage.getItem("token");
Vue.http.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Vue.http.interceptors.push((request, next) => {
  let timeout;
  if (request.timeout) {
    timeout = setTimeout(() => {
      //自定义响应体 status:408,statustext:"请求超时"，并返回给下下边的next
      next(request.respondWith(request.body, {
        status: 408,
        statusText: '请求超时'
      }));

    }, request.timeout);
  }
  next((response) => {
    return response;
  })
})
// router.beforeEach((to, from, next) => { 
//   if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆 
//    if (localStorage.getItem('token')) { // 查询本地存储信息是否已经登陆 
//     next(); 
//    } else { 
//     next({ 
//      path: '/', // 未登录则跳转至login页面 
//      query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面 
//      }); 
//    } 
//   } else { 
//    next(); 
//   } 
// });
new Vue({
  el: '#app',
  router,
  $,
  render(h)   {
    return h(App);
  },
});
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
