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
import Address from '../views/memberCenter/address'
import AddAddress from '../views/memberCenter/addAddress'
import Coupon from '../views/memberCenter/coupon'
import Recharge from '../views/memberCenter/recharge'
import BindPhone from '../views/memberCenter/bindPhone'

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
          path: 'address',
          name: 'Address',
          component: Address
        },
        {
          path: 'add_address',
          name: 'AddAddress',
          component: AddAddress
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
    // {
    //   path: '/address',
    //   name: 'Address',
    //   component: Address
    // },
    // {
    //   path: '/add_address',
    //   name: 'AddAddress',
    //   component: AddAddress
    // },
    // {
    //   path: '/coupon',
    //   name: 'Coupon',
    //   component: Coupon
    // },
    // {
    //   path: '/recharge',
    //   name: 'Recharge',
    //   component: Recharge
    // },
    // {
    //   path: '/bind_phone',
    //   name: 'BindPhone',
    //   component: BindPhone
    // }
  ]
})
