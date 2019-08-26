<template>
  <div class="edit_content">
    <el-table :data="consume_detail" style="width: 100%" @row-click='handleRowHandle'>
      <el-table-column prop="con_time" label="消费时间">
      </el-table-column>
      <el-table-column prop="con_pro" label="产品">
      </el-table-column>
      <el-table-column prop="con_bill" label="账单号">
      </el-table-column>
      <el-table-column prop="con_should" label="应付金额">
      </el-table-column>
      <el-table-column prop="con_real" label="实付金额">
      </el-table-column>
      <el-table-column prop="con_state" label="支付状态">
      </el-table-column>
      <el-table-column prop="remark" label="备注">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template scope="scope">
          <el-button type="text" size="small" @click="consume_btn">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 消费记录dialog -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      size="large">
      <el-row class='pay_dialog'>
        <el-col :span='24'><q>账单号：</q><span>{{dialog_detail.orderNumber}}</span></el-col>
        <el-col :span='12'><q>产品：</q><span>{{dialog_detail.con_pro}}</span></el-col>
        <el-col :span='12'><q>账单号：</q><span>{{dialog_detail.con_bill}}</span></el-col>
        <el-col :span='12'><q>消费时间：</q><span>{{dialog_detail.con_time}}</span></el-col>
        <el-col :span='12'><q>优惠券编号：</q><span>{{dialog_detail.discount_num}}</span></el-col>
        <el-col :span='24'>
          <q>支付状态：</q><span>{{dialog_detail.con_state}}</span>
          <q>现金支付：</q><span>{{dialog_detail.cash_pay}}</span>
          <q>折扣支付：</q><span>{{dialog_detail.discount_pay}}</span>
          <q>实际支付：</q><span>{{dialog_detail.total_pay}}</span>
        </el-col>
        <!-- <el-col :span='18'><el-input v-model="consume_detail.remark"></el-input></el-col>
        <el-col :span='6'><el-button type="primary">添加备注</el-button></el-col> -->
        <!-- <el-col :span="24"><q>备注信息：</q>{{remark_detail}}</el-col> -->
      </el-row>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      consume_detail: [],
      //消费记录详情
      dialogVisible:false,
      //消费记录dialog数据
      dialog_detail:[]
    }
  },
  mounted: function() {
    this.getConsume()
  },
  methods: {
    getConsume: function() {
      axios.get('http://localhost:3000/consume_detail').then((res) => {
        // console.log(res.data)
        this.consume_detail = res.data
      })
    },
    // 消费记录详情
    consume_btn:function(){
      this.dialogVisible=true;
    },
    handleRowHandle: function(column) {
      this.dialogVisible=true;
      // console.log(column.order_detail)
      this.dialog_detail=column.order_detail
    },
  }
}
</script>

<style scoped>
.pay_dialog{
  border:1px solid #e4e4e4;
  padding:20px;
}
.pay_dialog .el-col{
  padding:10px
}
</style>
