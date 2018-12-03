/**
 * Created by wangchunwei on 2018/6/8.
 */
/* global window:true document:true */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/login'

import MemberView from '../views/memberCenter'
import MemberCenter from '../views/memberCenter/memberCenter'
import AddressList from '../views/memberCenter/addressList'
import AddAddress from '../views/memberCenter/addAddress'
import EditAddress from '../views/memberCenter/editAddress'
import Coupon from '../views/memberCenter/coupon'
import Recharge from '../views/memberCenter/recharge'
import BindPhone from '../views/memberCenter/bindPhone'
import Video from '../views/video'
import Test from '../views/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'member'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // video测试
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/member',
      name: 'MemberView',
      component: MemberView,
      children: [
        {
          path: '',
          name: 'MemberCenter',
          component: MemberCenter
        },
        {
          path: 'address_list',
          name: 'AddressList',
          component: AddressList
        },
        {
          path: 'add_address',
          name: 'AddAddress',
          component: AddAddress
        },
        {
          path: 'edit_address',
          name: 'EditAddress',
          component: EditAddress
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: Coupon
        },
        {
          path: 'recharge',
          name: 'Recharge',
          component: Recharge
        },
        {
          path: 'bind_phone',
          name: 'BindPhone',
          component: BindPhone
        }
      ]
    }
  ]
})
