<template>
  <div class="edit_content">
    <p class="text-left">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-button type="primary" icon="delete" size="small" @click="deleteSelect"></el-button>
    </p>
    <div class="act_contain">
      <el-checkbox-group v-model="checkedAct" @change="handleCheckedCitiesChange">
        <el-checkbox class="act_list text-left" v-for="(actL,index) in actList" :label="actL">
          <ul class="act_once">
            <li class="act_icon"><img :src="actL.act_icon" alt=""></li>
            <li>
              <p class="mar-top">{{actL.act_title}}</p>
              <p>{{actL.act_time}}</p>
            </li>
            <li>
              <p class="line-seven">{{actL.act_state}}</p>
            </li>
            <li>
              <p class="line-seven">{{actL.act_data}}</p>
            </li>
            <li>
              <p class="line-seven">
                <span>{{actL.act_report}}</span>次举报</p>
            </li>
            <li>
              <el-button class="mar-top" type="primary" icon="delete" @click="detele_act(index)"></el-button>
            </li>
          </ul>
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <el-pagination
      small
      :page-size="4"
      layout="prev, pager, next"
      :total="6"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      actList: [],
      isIndeterminate:false,
      checkAll:false,
      checkedAct:[]
    }
  },
  mounted: function() {
    this.getActList()
  },
  methods: {
    getActList() {
      axios.get('http://localhost:3000/actList?page=1').then((res) => {
        console.log(res.data[0])
        this.actList = res.data[0].actDetail
      })
    },
    //活动-多选-单选-删除
    handleCheckAllChange:function(event){
      this.checkedAct=event.target.checked?this.actList:[];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange:function(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.actList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.actList.length;
    },
    //活动-删除活动
    detele_act:function(index){
      // this.actList.splice(index,1)
      this.$confirm('此操作将永久删除该活动,确定删除?','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        this.$message({
          type:'success',
          message:'删除成功！'
        });
        this.actList.splice(index,1);
        this.isIndeterminate = false;
      }).catch(()=>{
        this.$message({
          type:'info',
          message:'已取消'
        })
      })
    },
    deleteSelect(){
      if(this.checkedAct.length==0){
        this.$message({
          type:'info',
          message:'未选择删除项'
        })
      }else{
        this.$confirm('永久删除活动，确定删除？','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }).then(()=>{
          for(var i=0;i<this.checkedAct.length;i++){
            for(var j=0;j<this.actList.length;j++){
              if(this.actList[j]==this.checkedAct[i]){
                this.actList.splice(j,1);
                j=j-1;
              }
            }
          }
          this.isIndeterminate = false;
          this.checkedAct=[];
          this.$message({
            type:'success',
            message:'删除成功！'
          });
        }).catch(()=>{
          this.$message({
            type:'info',
            message:'已取消'
          })
        })
      }
    },
    //分页
    handleCurrentChange(val){
      axios.get('http://localhost:3000/actList?page='+val).then((res) => {
        console.log(res.data[0])
        this.actList = res.data[0].actDetail
      })
    }
  }
}
</script>

<style scoped>
.act_contain {
  padding: 20px
}

.act_list {
  display: block;
  border: 1px solid #e4e4e4;
  padding: 10px;
  margin-bottom: 10px;
}

.act_once {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}

.act_once li {
  float: left
}
.text-left{
  text-align:left
}
.el-checkbox+.el-checkbox{
  margin-left:0;
}
.act_icon img{
  width:130px;
  height:70px
}
</style>


