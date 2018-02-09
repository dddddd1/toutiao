import Vue from 'vue'
import Router from 'vue-router'
import indexList from '@/components/indexList/indexList'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页重定向
    {
      path: '',
      redirect: '/indexList/__all__'
  },
  //动态路由传nav参数
    { 
      path: '/indexList/:id',
      component: indexList ,
      props: true
    }
  ],
  
})
