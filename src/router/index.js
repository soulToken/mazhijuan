import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';

Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/Sign_in'], resolve),
    },
    { path: '/index',  component: resolve => require(['../components/index'], resolve),
      children: [
        //首页
        {
          path: 'home',
          meta: { 
            requireAuth: true // 配置此条，进入页面前判断是否需要登陆 
           },
          component: resolve => require(['../components/home/home'], resolve),
        },
        //创建合同
        {
          path: 'AddContract',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/contract/AddContract'], resolve),
        },
        //创建合同
        {
          path: 'Signed',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/contract/Signed'], resolve),
        },
        //进行合同
        {
          path: 'Conduct',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/contract/Conduct'], resolve),
        },
        //历史合同
        {
          path: 'history',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/contract/history'], resolve),
        },
        //合同模板
        {
          path: 'Template',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/contract/Template'], resolve),
        },
        //诚信动态
        {
          path: 'Sincerity',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/home/Sincerity'], resolve),
        },
        //法律法规
        {
          path: 'Morepolicy',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/home/Morepolicy'], resolve),
        },
        //修改密码
        {
          path: 'ChangePass',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/home/ChangePass'], resolve),
        },
        // 黑名单  blacklist
        {
          path: 'blacklist',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/home/blacklist'], resolve),
        },
        //站内搜索
        {
          path: 'Search',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/Search/Search'], resolve),
        },
        //站内搜索之企业
        {
          path: 'Enterprise',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/Search/Enterprise'], resolve),
        },
        //站内搜索之律所
        {
          path: 'Lawfirm',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/Search/Lawfirm'], resolve),
        },
        //站内搜索之律师
        {
          path: 'Lawyer',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/Search/Lawyer'], resolve),
        },
        //法律支持--找律师
        {
          path: 'attorney',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/law/attorney'], resolve)
        },
        //站内搜索之法规
        {
          path: 'Statute',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/Search/Statute'], resolve),
        },
        //  法律讲堂
        {
          path: 'lecture',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/law/lecture'], resolve)
        },
        //  企业认证
        {
          path: 'authentication',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/account/authentication'], resolve)
        },
        //  员工管理
        {
          path: 'employee',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/account/employee'], resolve)
        },
        //  安全中心
        {
          path: 'securityCenter',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/account/securityCenter'], resolve)
        },
        //  重新认证
        {
          path: 'reauthentication',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/account/reauthentication'], resolve)
        },
        //  资金管理
        {
          path: 'Capital',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/capital/Capital'], resolve)
        },
        //  资金管理
        {
          path: 'OpinionList',
          meta: { 
            requireAuth: true
           },
          component: resolve => require(['../components/Opinion/OpinionList'], resolve)
        },
    ]
    },
    {
      path: "*", // 此处需特别注意置于最底部
      redirect: "/404"
    }
  ]
})
