<template>
  <el-col :span="21">
    <ul class="index_detail">
      <li class="part_list" v-for='list in index_list'>
        <h3>{{list.title}}</h3>
        <el-row>
          <el-col :span="6" v-for="(lists,index) in list.detail"><div class="grid-content bg-purple">
            <el-button @click="user_list_detail(index)" type="danger">{{lists.name}}</el-button><span class="list_num">{{lists.number}}</span>
          </div></el-col>
        </el-row>
      </li>
    </ul>
    <!-- <el-dialog title="总注册数" :visible.sync="dialogTableVisible">
      <el-table :data="index_list.sumNum.detail.number_list">
        <el-table-column property="userid" label="用户ID"></el-table-column>
        <el-table-column property="u_nickname" label="用户昵称"></el-table-column>
        <el-table-column property="u_regtime" label="注册时间"></el-table-column>
      </el-table>
    </el-dialog> -->
  </el-col>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      dialogTableVisible:false,
      //总注册数
      register:[
        {userid:199199,u_nickname:'千麦用户',u_regtime:'2016-06-06'},
        {userid:199199,u_nickname:'千麦用户',u_regtime:'2016-06-06'},
        {userid:199199,u_nickname:'千麦用户',u_regtime:'2016-06-06'}
      ],

      index_list:{
        sumNum:{
          title:'总人数',
          detail:[
            {name:'总注册数',number:'100W',number_list:[
              {userid:199199,u_nickname:'千麦用户',u_regtime:'2016-06-06'},
              {userid:199199,u_nickname:'千麦用户',u_regtime:'2016-06-06'},
              {userid:199199,u_nickname:'千麦用户',u_regtime:'2016-06-06'}
            ]},
            {name:'个人用户',number:'100W'},
            {name:'个人pro用户',number:'100W'},
            {name:'企业用户',number:'100W'},
            {name:'企业pro用户',number:'100W'},
            {name:'名片认证数',number:'100W'},
            {name:'企业实名认证总数',number:'100W'},
            {name:'个人实名认证总数',number:'100W'},
            {name:'今日新注册数',number:'100W'}
          ]
        },
        pending:{
          title:'待审核数',
          detail:[
            {name:'企业实名认证待审核',number:'100W'},
            {name:'个人实名认证待审核',number:'100W'},
            {name:'名片认证待审核',number:'100W'}
          ]
        },
        loginNum:{
          title:'登录人数',
          detail:[
            {name:'今日登陆',number:'100W'},
            {name:'近7日登陆',number:'100W'},
            {name:'近30日登陆',number:'100W'}
          ]
        },
        yestVideo:{
          title:'昨日视频播放情况',
          detail:[
            {name:'昨日视频开播量',number:'100W'},
            {name:'昨日视频开播总时长',number:'100W'},
            {name:'昨日视频观看总人数',number:'100W'},
            {name:'昨日视频总流量',number:'100W'},
            {name:'昨日峰值宽带',number:'100W'}
          ]
        },
        todayVideo:{
          title:'今日视频播放情况',
          detail:[
            {name:'今日视频开播量',number:'100W'},
            {name:'今日视频开播总时长',number:'100W'},
            {name:'今日视频观看总人数',number:'100W'},
            {name:'今日视频总流量',number:'100W'},
            {name:'今日峰值宽带',number:'100W'}
          ]
        },
        appointment:{
          title:'明日预约情况',
          detail:[
            {name:'明日预约数',number:'100W'}
          ]
        }
      }
    }
  },
  methods:{
    user_list_detail:function(index){
      this.dialogTableVisible = true;
      console.log(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.part_list{
  margin:10px;
  padding:10px;
  border:1px solid #e5e5e5
}
.part_list h3{
  font-size:22px;
  font-weight:bold;
  text-align:center
}
.list_num{
  display:inline-block;
  width:60px;
  height:34px;
  border:1px solid #e5e5e5;
  border-left:none;
  vertical-align:top;
  line-height:36px;
  border-radius:5px;
  text-align:center
}
.grid-content{
  margin-top:10px;
}
</style>
