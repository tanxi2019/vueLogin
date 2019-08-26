<template>
  <el-col :span="21">
    <div class="manage_contain">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="个人用户" name="first">
          <div class="usertable">
            <el-table :data="userGroup[0].ordinary" style="width: 100%">
              <el-table-column prop="nickName" label="用户昵称">
              </el-table-column>
              <el-table-column prop="phone" label="手机号">
              </el-table-column>
              <el-table-column prop="userStore" label="存储空间剩余">
              </el-table-column>
              <el-table-column prop="userFlow" label="免费流量剩余">
              </el-table-column>
              <el-table-column prop="userCard" label="名片容量剩余">
              </el-table-column>
            </el-table>
          </div>
          <el-pagination
            :page-size="15"
            small
            layout="prev, pager, next"
            :total="15">
          </el-pagination>
          <!-- <div class="ordinaryPage text-center">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next" :total="total">
            </el-pagination>
          </div> -->
        </el-tab-pane>
        <el-tab-pane label="个人pro" name="second">
          <div class="usertable">
            <el-table :data="userGroup[1].profession" style="width: 100%">
              <el-table-column prop="nickName" label="用户昵称">
              </el-table-column>
              <el-table-column prop="phone" label="手机号">
              </el-table-column>
              <el-table-column prop="userStore" label="存储空间剩余">
              </el-table-column>
              <el-table-column prop="userFlow" label="免费流量剩余">
              </el-table-column>
              <el-table-column prop="userCard" label="名片容量剩余">
              </el-table-column>
            </el-table>
          </div>
          <!-- <div class="ordinaryPage text-center">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage_pro" :page-size="10" layout="prev, pager, next" :total="total_pro">
            </el-pagination>
          </div> -->
        </el-tab-pane>
        <el-tab-pane label="企业用户" name="third">
          <div class="usertable">
            <el-table :data="userGroup[2].company" style="width: 100%">
              <el-table-column prop="nickName" label="用户昵称">
              </el-table-column>
              <el-table-column prop="phone" label="手机号">
              </el-table-column>
              <el-table-column prop="userStore" label="存储空间剩余">
              </el-table-column>
              <el-table-column prop="userFlow" label="免费流量剩余">
              </el-table-column>
              <el-table-column prop="userCard" label="名片容量剩余">
              </el-table-column>
            </el-table>
          </div>
          <!-- <div class="ordinaryPage text-center">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage_com" :page-size="10" layout="prev, pager, next" :total="total_com">
            </el-pagination>
          </div> -->
        </el-tab-pane>
        <el-tab-pane label="企业pro" name="fourth">
          <div class="usertable">
            <el-table :data="userGroup[3].company_pro" style="width: 100%">
              <el-table-column prop="nickName" label="用户昵称">
              </el-table-column>
              <el-table-column prop="phone" label="手机号">
              </el-table-column>
              <el-table-column prop="userStore" label="存储空间剩余">
              </el-table-column>
              <el-table-column prop="userFlow" label="免费流量剩余">
              </el-table-column>
              <el-table-column prop="userCard" label="名片容量剩余">
              </el-table-column>
            </el-table>
          </div>
          <!-- <div class="ordinaryPage text-center">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage_compro" :page-size="10" layout="prev, pager, next" :total="total_compro">
            </el-pagination>
          </div> -->
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      userGroup: [],
      activeName: 'first',
    }
  },
  mounted: function() {
    axios.get('http://localhost:3000/userGroup').then(res => {
        // console.log(res.data[0].ordinary)
        this.userGroup = res.data
      })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSizeChange(val) {
      console.log(`每页${val}条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页:${val}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
