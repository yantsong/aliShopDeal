import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
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
      component: () => import('@/views/center/center.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/message/Message.vue')
    },
    {
      path: '/message/:id',
      name: 'MessageItem',
      component: () => import('@/views/message/MessageDetail.vue')
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: () => import('@/views/tasks/tasks.vue')
    },
    {
      path: '/apprentice',
      name: 'Apprentice',
      component: () => import('@/views/apprentice/apprentice.vue')
    }
  ]
})
