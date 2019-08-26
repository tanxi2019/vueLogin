<template>
  <el-col :span="21">
    <div class="search fl_right">
      <el-input
        placeholder="请输入搜索项"
        icon="search"
        v-model="input"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>
    <ul class="topSelect">
      <li class="fl_left">
        <el-select v-model="value" placeholder="用户类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </li>
      <li class="fl_left">
        <el-select v-model="value2" placeholder="账号状态">
          <el-option
            v-for="item in options2"
            :key="item.value2"
            :label="item.label2"
            :value="item.value2">
          </el-option>
        </el-select>
      </li>
      <li class="fl_left">
        <el-select v-model="value3" placeholder="排列顺序">
          <el-option
            v-for="item in options3"
            :key="item.value3"
            :label="item.label3"
            :value="item.value3">
          </el-option>
        </el-select>
      </li>
      <li class="fl_left">
        <el-date-picker
          v-model="pickDate"
          type="daterange"
          align="right"
          placeholder="选择日期范围"
          :picker-options="pickerOptions">
        </el-date-picker>
      </li>
    </ul>
    <div class="user-table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="nickName"
          label="昵称"
          width="130">
        </el-table-column>
        <el-table-column
          prop="uGroup"
          label="用户组"
          width="130">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width="130">
        </el-table-column>
        <el-table-column
          prop="regTime"
          label="注册时间"
          width='120'>
        </el-table-column>
        <el-table-column
          prop="nameApprove"
          label="实名认证"
          width='110'>
        </el-table-column>
        <el-table-column
          prop="cardApprove"
          label="名片认证"
          width='110'>
        </el-table-column>
        <el-table-column
          prop="company"
          label="认证公司">
        </el-table-column>
        <el-table-column
          prop="VIPtime"
          label="会员到期时间"
          width='140'>
        </el-table-column>
        <el-table-column
          prop="idState"
          label="账号状态"
          width='120'>
        </el-table-column>
        <el-table-column
          label="操作"
          width="80"
          prop="id">
          <template scope="scope">
            <el-button type="text" size="small" @click="editDetail(scope)">操作</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pageNation">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="50"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      input:'',
      options:[
        {value:'1',label:'个人用户'},
        {value:'2',label:'个人pro'},
        {value:'3',label:'企业用户'},
        {value:'4',label:'企业pro'},
        {value:'5',label:'全部'},
      ],
      value:'',
      options2:[
        {value2:'1',label2:'正常'},
        {value2:'2',label2:'欠费'},
        {value2:'3',label2:'禁止登陆'},
        {value2:'4',label2:'注销'},
        {value2:'5',label2:'会员过期'},
        {value2:'6',label2:'全部'},
      ],
      value2:'',
      options3:[
        {value3:'1',label3:'升序'},
        {value3:'2',label3:'降序'}
      ],
      value3:'',
      //日期选择
      pickerOptions:{
        shortcuts:[
          {
            text:'最近一周',
            onClick(picker){
              const end=new Date();
              const start= new Date();
              start.setTime(start.getTime()-3600*1000*24*7);
              picker.$emit('pick',[start,end])
            }
          },
          {
            text:'最近一个月',
            onClick(picker){
              const end=new Date();
              const start= new Date();
              start.setTime(start.getTime()-3600*1000*24*30);
              picker.$emit('pick',[start,end])
            }
          },
          {
            text:'最近三个月',
            onClick(picker){
              const end=new Date();
              const start= new Date();
              start.setTime(start.getTime()-3600*1000*24*90);
              picker.$emit('pick',[start,end])
            }
          }
        ]
      },
      pickDate:'',
      //表格数据
      tableData:[],
      //分页
      currentPage:1,
      total:500
    }
  },
  mounted:function(){
    this.getTableData()
  },
  methods:{
    handleIconClick(ev){
      console.log(ev)
    },
    handleSizeChange(val){
      console.log(`每页${val}条`)
    },
    handleCurrentChange(val){
      console.log(`当前页:${val}`)
    },
    editDetail(scope){
      // console.log(scope.row.id)
      let ses=window.sessionStorage;
      ses.setItem('uid',scope.row.id)
      // this.$router.push({path:'/pages/userEdit',query: {id: scope.row.id}})
      this.$router.push({path:'/pages/userEdit'})
      // console.log(scope.row.id)
    },
    //获取列表数据
    getTableData(){
      // axios.get('http://localhost:3000/users?username='
      axios.get('http://localhost:3000/tableData').then((res)=>{
        this.tableData=res.data;
        console.log(this.tableData)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-cont{
  clear:both
}
.search{
  width:15%;
  margin:10px;
}
.topSelect li{
  margin-right:10px
}
.topSelect{
  overflow:hidden;
  background:#e5e5e5;
  padding:10px
}
.pageNation{
  text-align:center
}
</style>
