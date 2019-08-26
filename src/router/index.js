import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'
import Login from '@/components/login'
import Uindex from '@/components/pages/index'
import Ulist from '@/components/pages/userList'
import Uedit from '@/components/pages/userEdit'
import Ugroup from '@/components/pages/userGroup'
//用户编辑
import Udetail from '@/components/common/userDetail'
import Udiscount from '@/components/common/userDiscount'
import Uexpense from '@/components/common/userExpense'
import Uact from '@/components/common/userAct'
import UgetCash from '@/components/common/userGetCash'
import UworkOrder from '@/components/common/userWorkOrder'

Vue.use(Router)

export default new Router({
  routes: [
    //欢迎页
    {path: '/',name: 'welcome',component: Welcome,meta:{needLogin:true}},
    //登陆
    {path: '/login',name: 'login',component: Login},
    //首页
    {
      path: '/pages/index',
      name: 'index',
      component: Uindex,
      meta:{
        needLogin:true
      }
    },
    //用户列表
    {
      path: '/pages/userList',
      name: 'userList',
      component: Ulist,
      meta:{
        needLogin:true
      }
    },
    //用户列表->用户编辑
    {
      path: '/pages/userEdit',
      name: 'userEdit',
      component: Uedit,
      meta:{
        needLogin:true
      },
      children:[
        {path:'/',name:'userDetail',component: Udetail,meta:{needLogin:true}},//个人信息
        {path:'userDiscount',name:'userDiscount',component: Udiscount,meta:{needLogin:true}},//优惠券
        {path:'userExpense',name:'userExpense',component: Uexpense,meta:{needLogin:true}},//消费记录
        {path:'userAct',name:'userAct',component: Uact,meta:{needLogin:true}},//活动
        {path:'userGetCash',name:'userGetCash',component: UgetCash,meta:{needLogin:true}},//提现
        {path:'userWorkOrder',name:'userWorkOrder',component: UworkOrder,meta:{needLogin:true}}//工单
      ]
    },
    //用户组管理
    {
      path: '/pages/userGroup',
      name: 'userGroup',
      component: Ugroup,
      meta:{
        needLogin:true
      }
    }
  ]
})
