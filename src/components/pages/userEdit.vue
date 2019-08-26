<template>
  <el-col :span="21">
    <div class="edit_detail">
      <p class="header_bord"><el-button type="primary" @click="backPage"><&nbsp;返回</el-button></p>
      <ul class="user_state">
        <li v-for='list in userState' :key="list.id">{{list.name}}<span v-text="list.detail" :class="list.hotCol?'hotCol':''"></span></li>
      </ul>
      <ul class="edit_tabs_head">
        <router-link name="first" :to="{name:'userDetail'}" tag="li">个人信息</router-link>
        <router-link :to="{name:'userDiscount'}" tag="li">优惠券</router-link>
        <router-link :to="{name:'userExpense'}" tag="li">消费记录</router-link>
        <router-link :to="{name:'userAct'}" tag="li">活动</router-link>
        <router-link :to="{name:'userGetCash'}" tag="li">申请提现</router-link>
        <router-link :to="{name:'userWorkOrder'}" tag="li">工单</router-link>
      </ul>
      <div class="edit_tabs_cont">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

  </el-col>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      userState:[]
    }
  },
  mounted:function(){
    // console.log(this.$route.params.id)
    // console.log(this.$route.query.id)
    this.getUserState()//获取用户状态
  },
  methods:{
    //获取用户状态信息
    // ?id='+this.$route.query.id
    getUserState:function(){
      axios.get('http://localhost:3000/userState').then((res)=>{
        this.userState=res.data
      })
    },
    backPage:function(){
      // window.history.back()
      this.$router.push({path:'/pages/userList'})
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.edit_detail{
  padding:10px
}
.header_bord{
  text-align:left;
}
/* 子组件tab标签 */
.edit_tabs_head{
  display:flex;
  justify-content:space-around
}

.edit_tabs_head li{
  border:1px solid #e4e4e4;
  border-bottom:1px solid #fff;
  padding:20px 30px 10px 30px;
  cursor:pointer;
}
.edit_content{
  border:1px solid #e4e4e4;
  margin-top:-1px;
  padding:20px;
}
.router-link-exact-active{
  background:#8391a5;
}
/* userState */
.user_state{
  overflow:hidden;
  padding:20px;
  color:#8391a5;
  display:flex;
  justify-content:space-around;
}
.user_state li{
  float:left;
  padding:0 10px 0 10px;
}
.hotCol{
  color:#d4333c
}
</style>

