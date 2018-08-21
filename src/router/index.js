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
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/center',
      name: 'Center',
      component: () =>
        import ('@/views/center/center.vue'),
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import ('@/views/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () =>
        import ('@/views/Register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/orderOk/:id',
      name: 'OrderOk',
      component: () =>
        import ('@/views/order/OrderOk.vue')
    },
    {
      path: '/orderCancel/:id',
      name: 'OrderCancel',
      component: () =>
        import ('@/views/order/OrderCancel.vue'),
      meta: {
        title: '选择取消原因'
      }
    },
    {
      path: '/submitOrder/:id',
      name: 'SubmitOrder',
      component: () =>
        import ('@/views/order/SubmitOrder.vue')
    },
    {
      path: '/getOrder/:id',
      name: 'GetOrder',
      component: () =>
        import ('@/views/order/GetOrder.vue')
    },
    {
      path: '/OrderDetail/:id',
      name: 'OrderDetail',
      component: () =>
        import ('@/views/order/OrderDetail.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () =>
        import ('@/views/message/Message.vue'),
      meta: {
        title: '消息'
      }
    },
    {
      path: '/message/:id',
      name: 'MessageItem',
      component: () =>
        import ('@/views/message/MessageDetail.vue'),
      meta: {
        title: '消息详情'
      }
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: () =>
        import ('@/views/tasks/tasks.vue')
    },
    {
      path: '/waitReview',
      name: 'WaitReview',
      component: () =>
        import ('@/views/tasks/waitReview.vue'),
      meta: {
        title: '等待审核'
      }
    },
    {
      path: '/apprentice',
      name: 'Apprentice',
      component: () =>
        import ('@/views/apprentice/apprentice.vue'),
      meta: {
        title: '徒弟'
      }
    },
    {
      path: '/integralDetail',
      name: 'IntegralDetail',
      component: () =>
        import ('@/views/apprentice/IntegralDetail.vue'),
      meta: {
        title: '积分明细'
      }
    },
    {
      path: '/historyCode',
      name: 'HistoryCode',
      component: () =>
        import ('@/views/apprentice/HistoryCode.vue'),
      meta: {
        title: '历史邀请码'
      }
    },
    {
      path: '/bindInfo',
      name: 'BindInfo',
      component: () =>
        import ('@/views/center/bindInfo.vue'),
      meta: {
        title: '信息绑定'
      }
    },
    {
      path: '/changenumber',
      name: 'Changenumber',
      component: () =>
        import ('@/views/center/ChangeNumber.vue'),
      meta: {
        title: '修改号码'
      }
    },
    {
      path: '/bindcard',
      name: 'BindCard',
      component: () =>
        import ('@/views/center/BindCard.vue'),
      meta: {
        title: '绑定银行卡'
      }
    },
    {
      path: '/apprenticesList',
      name: 'ApprenticeList',
      component: () =>
        import ('@/views/apprentice/ApprenticesList.vue'),
      meta: {
        title: '徒弟列表'
      }
    }
  ]
})
router.beforeEach(
  (to, from, next) => {
    console.log(to);
    document.title = to.meta.title
    let storage = localStorage.getItem('token')
    if (to.path === '/login') {
      next()
    } else {
      if (!storage) {
        next({
          path: '/login'
        });
      } else {
        next()
      }
    }
  }
)
export default router
