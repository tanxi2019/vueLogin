<template>
  <div class="edit_content">
    <div class="detail_first_part">
      <div class="user_icon">
        <img :src="user_message.u_icon" alt="">
        <p>{{user_message.u_name}}</p>
      </div>
      <ul class="user_list">
        <li>
          <q>用户ID:</q>
          <span>{{user_message.userid}}</span>
        </li>
        <li>
          <q>用户类型:</q>
          <span v-if="original" v-text="u_type[user_message.u_type]"></span>
          <el-input class="maxlength" v-else size="mini" v-model="user_message.u_type"></el-input>
          <el-button type="primary" icon="edit" v-if="original" size="mini" @click="edit_type"></el-button>
          <el-button type="primary" icon="circle-check" v-else size="mini" @click="submit_type"></el-button>
        </li>
        <li>
          <q>联系方式:</q>
          <span v-if="user_phone" v-text="user_message.u_phone"></span>
          <el-input class="maxlength" v-else size="mini" v-model="user_message.u_phone"></el-input>
          <el-button type="primary" icon="edit" v-if="user_phone" size="mini" @click="edit_phone"></el-button>
          <el-button type="primary" icon="circle-check" v-else size="mini" @click="submit_phone"></el-button>
        </li>
        <li>
          <q>邮箱:</q>
          <span v-if="user_email" v-text="user_message.u_email"></span>
          <el-input class="maxlength" v-else size="mini" v-model="user_message.u_email"></el-input>
          <el-button type="primary" icon="edit" v-if="user_email" size="mini" @click="edit_email"></el-button>
          <el-button type="primary" icon="circle-check" v-else size="mini" @click="edit_email"></el-button>
        </li>
        <li>
          <q>注册时间:</q>
          <span v-text="user_message.reg_time"></span>
        </li>
      </ul>
      <ul class="user_list">
        <li>
          <q>活动数:</q>
          <span v-text="user_message.act_num"></span>
        </li>
        <li>
          <q>消费金额:</q>
          <span v-text="user_message.consume"></span>
        </li>
        <li>最后登录时间:
          <span v-text="user_message.last_login"></span>
        </li>
        <li>是否开通该用户个人主页
          <el-button type="primary" size="mini" icon="circle-check" @click="pageBlock"></el-button>
          <el-button type="primary" size="mini" icon="circle-cross" @click="pageNone"></el-button>
        </li>
        <li>个人主页url:
          <span v-if="homePage" v-text="user_message.user_web"></span>
        </li>
      </ul>
    </div>
    <div class="rty_hr"></div>
    <div class="detail_second_part clear_flex">
      <p class="part_title">钱包信息</p>
      <ul class="flex_center">
        <li>
          <q>账户余额:</q>
          <span class="hotCol">
            <b>￥</b>{{user_message.acc_balance}}</span>
        </li>
        <li>
          <q>收益余额:</q>
          <span class="hotCol">
            <b>￥</b>{{user_message.earn_balance}}</span>
        </li>
        <li>
          <q>历史收益:</q>
          <span class="hotCol">
            <b>￥</b>{{user_message.all_balance}}</span>
        </li>
        <li>
          <q>支付宝:</q>
          <span v-text="ali_bind[user_message.ali_bind]"></span>
        </li>
      </ul>
    </div>
    <div class="rty_hr"></div>
    <div class="detail_third_part">
      <p class="part_title">实名认证信息</p>
      <div class="third-part ">
        <div class="approve_icon fl_left">
          <img :src="user_message.u_identity" alt="">
        </div>
        <ul class="listform fl_left pad-top user_list">
          <li>
            <q>姓名:</q>
            <span v-text="user_message.real_name"></span>
          </li>
          <li>
            <q>身份证:</q>
            <span v-text="user_message.identity"></span>
          </li>
        </ul>
        <ul class="listform fl_left pad-top user_list">
          <li>
            <q>所在区域:</q>
            <span v-if="user_position" v-text="user_message.position"></span>
            <el-input class="maxlength" v-else size="mini" v-model="user_message.position"></el-input>
            <el-button type="primary" icon="edit" v-if="user_position" size="mini" @click="edit_position"></el-button>
            <el-button type="primary" icon="circle-check" v-else size="mini" @click="edit_position"></el-button>
          </li>
          <li>
            <q>详细地址:</q>
            <span v-if="user_posi_detail" v-text="user_message.posi_detail"></span>
            <el-input class="maxlength" v-else size="mini" v-model="user_message.posi_detail"></el-input>
            <el-button type="primary" icon="edit" v-if="user_posi_detail" size="mini" @click="edit_posi_detail"></el-button>
            <el-button type="primary" icon="circle-check" v-else size="mini" @click="edit_posi_detail"></el-button>
          </li>
        </ul>
      </div>
    </div>
    <div class="rty_hr"></div>
    <div class="detail_four_part">
      <p class="part_title fl_left edit_left">备注信息</p>
      <div class="edit_remark fl_left edit_input">
        <el-input class="maxlength2" size="small" v-model="remarkText" placeholder="请输入内容"></el-input>
        <el-button type="primary" size="small" icon="circle-check" @click="enterRemark"></el-button>
        <el-button type="primary" size="small" icon="circle-cross" @click="deleteRemark"></el-button>
      </div>
      <ul class="user_list">
        <li v-for="list in remarkList">{{list.id+':'}}{{list.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user_message: [],
      original: true,
      user_phone: true,
      user_email: true,
      user_position: true,
      user_posi_detail: true,
      homePage: false,
      //用户类型
      u_type: ['个人用户', '个人Pro', '企业用户', '企业Pro'],
      //支付绑定
      ali_bind: ['未绑定', '已绑定'],
      remarkText:'',
      remarkId:1,
      remarkList:[]
    }
  },
  // computed:{
  //   user_type:function(){
  //     if(this.user_message.u_type==1){
  //       return '个人用户'
  //     }else if(this.user_message.u_type==2){
  //       return '个人Pro'
  //     }
  //   }
  // },
  mounted: function() {
    this.getUser_message()
  },
  methods: {
    // getUser_message: function() {
    //   axios.get('http://localhost:3000/user_message?id=' + this.$route.query.id).then((res) => {
    //     this.user_message = res.data[0];
    //     console.log(this.user_message)
    //   })
    // },
    getUser_message: function() {

      // console.log(window.sessionStorage.uid)
      let uid=window.sessionStorage.uid;
      axios.get('http://localhost:3000/user_message?id='+uid).then((res) => {
        // console.log(res)
        this.user_message = res.data[0];
        // console.log(this.user_message)
      })
    },
    //编辑用户类型
    edit_type: function() {
      this.original = !this.original
    },
    submit_type: function() {
      let uid=window.sessionStorage.uid;
      this.original = !this.original;
      // console.log(this.user_message.u_type)
      let change_type=this.user_message.u_type;
      // if(change_type=='个人用户'){
      //   change_type=0
      // }else if(change_type=='个人pro'){
      //   change_type=1
      // }else if(change_type=='企业用户'){
      //   change_type=2
      // }else if(change_type=='企业pro'){
      //   change_type=3
      // }else{
      //   alert('没有选项');
      // }
      //添加
      // axios.post('http://localhost:3000/user_message',{
      //   u_type:999
      // }).then((res) => {
      //   console.log(res)
      // }).catch(function(e){
      //   console.log(e)
      // })
      //修改
      axios.patch('http://localhost:3000/user_message/'+uid,{
        u_type:Number(change_type)
      }).then((res) => {
        console.log(res.data.u_type)
      }).catch(function(e){
        console.log(e)
      })
      //删除
      // axios.delete('http://localhost:3000/user_message/'+6,{}).then((res) => {
      //   console.log(res)
      // })
    },
    //编辑手机号
    edit_phone: function() {
      // console.log(this.user_message.u_phone!==Number)
      // if(this.user_message.u_phone=='aaa'){
      //   this.$message({
      //     message: '输入格式错误',
      //     type: 'warning'
      //   });
      //   return;
      // }

      this.user_phone = !this.user_phone;

    },
    //提交编辑手机号
    submit_phone:function(){
      let phone_reg = /^1[3|4|5|7|8][0-9]{9}$/;
      let uid=window.sessionStorage.uid;
      let change_phone=this.user_message.u_phone;
      // console.log(typeof(change_phone))
      if(!phone_reg.test(change_phone)){
        console.log(change_phone)
        this.$message({
          message: '请输入正确手机号 ',
          type: 'warning'
        });
        return;
      }
      this.user_phone = !this.user_phone;
      axios.patch('http://localhost:3000/user_message/'+uid,{
        u_phone:Number(change_phone)
      }).then((res) => {
        console.log(res.data.u_phone)
      }).catch(function(e){
        console.log(e)
      })
    },
    //编辑邮箱
    edit_email: function() {
      this.user_email = !this.user_email
    },
    //开通用户主页
    pageBlock: function() {
      this.homePage = true
    },
    pageNone: function() {
      this.homePage = false
    },
    //编辑用户地址
    edit_position: function() {
      this.user_position = !this.user_position
    },
    edit_posi_detail: function() {
      this.user_posi_detail = !this.user_posi_detail
    },
    //备注信息
    enterRemark: function() {
      if (this.remarkList.length < 3) {
        this.remarkList.push({
          id: '备注' + this.remarkId++,
          title: this.remarkText
        })
      } else {
        this.$message({
          message: '最多添加三条备注',
          type: 'warning'
        });
      }
    },
    deleteRemark: function() {
      this.remarkText = ''
    },
  }
}
</script>

<style scoped>
.detail_first_part,
.third-part {
  display: flex;
  justify-content: space-around;
}
.third-part {
  padding:20px
}




/* part1 */

.user_icon img {
  width: 100px;
  height: 100px
}

.maxlength {
  width: 100px
}

.user_list {
  text-align: left
}

.user_list li {
  line-height: 25px
}

.user_list li q {
  width: 80px;
  display: inline-block
}

.rty_hr {
  border-top: 1px solid #e4e4e4;
  margin: 15px 0 15px 0
}



/* part2 */

.hotCol {
  color: #d4333c
}

.clear_flex {
  display: block;
}

.flex_center {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}

.part_title {
  color: #48576a;
  text-align: left;
  font-size: 20px
}

.approve_icon img {
  width: 150px;
  height: 100px
}

.pad-top {
  padding-top: 25px
}
/* //备注 */
.edit_remark{
  padding-left:20px;
}
.edit_left{
  width:8%
}
.edit_input{
  width:90%;
}
.maxlength2{
  width:500px;
}
.detail_four_part{
  padding:20px;
  text-align:left;
  overflow:hidden
}
.detail_four_part ul{
  padding:40px 0 0 115px;
}
</style>
