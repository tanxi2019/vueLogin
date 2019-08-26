<template>
  <el-col :span="21">
    <div class="cont-center">
      <p>{{head}}</p>
      <p>{{title}}</p>
    </div>
  </el-col>
</template>

<script>
export default {
  data(){
    return{
      head:"千麦直播",
      title:"商业连麦直播先行者"
    }
  }
}
</script>


<style scoped>
.cont-center{
  font-weight:bold;
  font-size:24px;
  line-height:35px;
  position: absolute;
  left:50%;
  top:20%;
}
</style>

