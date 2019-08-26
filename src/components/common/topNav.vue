<template>
  <div class="topnav" id="topnav">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">QmaiBack</el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户：{{username}}</template>
        <el-menu-item index="2-1" @click="loginOut">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.qmai.cc" target="_blank">千麦直播</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default{
  data () {
    return {
      activeIndex:'1',
      username:''
    }
  },
  mounted:function(){
    //sessionStorage中获取用户名
    if(sessionStorage.length!=0){
      // var user_detail=JSON.parse(sessionStorage.getItem('data'));
      let user_detail=sessionStorage.getItem('data')
      console.log(sessionStorage)
      this.username=user_detail;
    }
  },
  methods:{
    //退出登录
    loginOut:function(){
      window.sessionStorage.removeItem('data');
      window.location.reload()
    },
    //登录选项
    handleSelect:function(key,keypath){
      console.log(1)
    }
  }
}
</script>
