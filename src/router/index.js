import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/center',
      name: 'Center',
      component: () =>
        import ('@/views/center/center.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import ('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () =>
        import ('@/views/Register.vue')
    },
    {
      path: '/orderOk',
      name: 'OrderOk',
      component: () =>
        import ('@/views/order/OrderOk.vue')
    },
    {
      path: '/orderCancel',
      name: 'OrderCancel',
      component: () =>
        import ('@/views/order/OrderCancel.vue')
    },
    {
      path: '/getOrder',
      name: 'GetOrder',
      component: () =>
        import ('@/views/order/GetOrder.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () =>
        import ('@/views/message/Message.vue')
    },
    {
      path: '/message/:id',
      name: 'MessageItem',
      component: () =>
        import ('@/views/message/MessageDetail.vue')
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: () =>
        import ('@/views/tasks/tasks.vue')
    },
    {
      path: '/apprentice',
      name: 'Apprentice',
      component: () =>
        import ('@/views/apprentice/apprentice.vue')
    },
    {
      path: '/integralDetail',
      name: 'IntegralDetail',
      component: () =>
        import ('@/views/apprentice/IntegralDetail.vue')
    },
    {
      path: '/historyCode',
      name: 'HistoryCode',
      component: () =>
        import ('@/views/apprentice/HistoryCode.vue')
    },
    {
      path: '/bindInfo',
      name: 'BindInfo',
      component: () =>
        import ('@/views/center/bindInfo.vue')
    },
    {
      path: '/changenumber',
      name: 'Changenumber',
      component: () =>
        import ('@/views/center/ChangeNumber.vue')
    },
    {
      path: '/bindcard',
      name: 'BindCard',
      component: () =>
        import ('@/views/center/BindCard.vue')
    },
    {
      path: '/apprenticesList',
      name: 'ApprenticeList',
      component: () =>
        import ('@/views/apprentice/ApprenticesList.vue')
    }
  ]
})
router.beforeEach(
  (to, from, next) => {
    if (!window.localStorage.getItem('token')) {
      next({
        path: '/login'
      });
    } else {
      if (to === '/login') {
        next({
          path: '/'
        });
      } else {
        next()
      }
    }
  }
)
export default router
