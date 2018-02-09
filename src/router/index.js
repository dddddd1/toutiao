import Vue from 'vue'
import Router from 'vue-router'
import indexList from '@/components/indexList/indexList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: indexList
    },
    { 
      path: '/indexList/:id',
      component: indexList ,
      props: true
    }
  ]
})
