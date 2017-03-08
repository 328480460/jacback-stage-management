import Vue from 'vue'
import Router from 'vue-router'
import MainIndex from 'components/pageComponents/mainIndex'
import ChangePassword from 'components/pageComponents/changePassword'
import UserInfo from 'components/pageComponents/userInfo'
import LogInfo from 'components/pageComponents/logInfo'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      component: MainIndex
    },{
      path: '/后台首页',
      component: MainIndex
    },{
      path: '/个人信息',
      component: UserInfo
    },{
      path: '/修改密码',
      component: ChangePassword
    },{
      path: '/日志信息',
      component: LogInfo
    }
  ]
})
