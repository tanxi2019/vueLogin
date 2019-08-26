<template>
  <div class="login_cont">
    <div class="login_center">
      <div class="login_input">
        <el-input placeholder="请输入账户名" v-model="userName">
          <template slot="prepend">账号</template>
        </el-input>
        <el-input placeholder="请输入密码" v-model="passWord">
          <template slot="prepend">密码</template>
        </el-input>
        <el-button type="primary"  @click="login">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      userName:'',
      passWord:'',
    }
  },
  methods:{
    login:function(){//登陆验证
      if(this.userName==''||this.passWord==''){
        this.$message({
          message: '账号密码不能为空！',
          type: 'warning'
        });
        return;
      }
      //axios的get方法，和ajax没啥区别
      axios.get('http://localhost:3000/users?username='+this.userName+'&password='+this.passWord).then((res)=>{
        //拿到返回值 这里的res就相当于ajax中成功的返回
        if(res.data.length>0){
          var ses=window.sessionStorage;
          //sessionStorage接收的好像是string所以这里吧data解析一下变成json字符串
          // var d=JSON.stringify(res.data[0].username)
          var d=res.data[0].username
          //把拿到的data放在sessionStorage中
          ses.setItem('data',d)
          //验证成功进入首页
          this.$router.push('/');
          //这里有个小bug，登陆成功后导航上面需要刷新才能显示当前用户，暂时手动刷新
          window.location.reload()
        }else{
          this.$message({
            message: '请输入正确的账号密码！',
            type: 'warning'
          });
        }
      }).catch(error=>console.log(error))
    }
  }
}
</script>

<style scope>
  .login_cont{
    background:#e5e5e5;
    height:100%;
    position: relative;
    top:-60px;
    padding-bottom:60px
  }
  .login_center{
    width:400px;
    height:230px;
    border:1px solid #fff;
    position:absolute;
    top:20%;
    left:50%;
    margin-left:-200px;
    border-radius:10px;
    padding:10px;
    background:#fff
  }
  .login_input{
    padding:20px
  }
  .login_input .el-input{
    margin-bottom:40px
  }
</style>
