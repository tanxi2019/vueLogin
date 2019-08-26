<template>
  <div id="app">
    <topnav></topnav>
    <div class="center_part" id="center_part">
      <el-row class="el-center">
        <el-col :span="3" id="leftnav">
          <el-menu router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="/pages/index">
              <i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>用户管理</template>
              <el-menu-item-group>
                <el-menu-item index="/pages/userList">用户列表</el-menu-item>
                <el-menu-item index="/pages/userGroup">用户组管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/pages/1">
              <i class="el-icon-menu"></i>---</el-menu-item>
          </el-menu>
        </el-col>

        <!-- router-view -->
        <router-view></router-view>
      </el-row>
    </div>
  </div>
</template>

<script>
import topnav from '@/components/common/topNav'
export default {
  name: 'app',
  components: {
    topnav
  },
  mounted:function(){
    var htmlHeight=document.body.clientHeight,//拿到页面高度
        tnavHeight=document.getElementById('topnav').offsetHeight;//拿到顶导航高度
    document.getElementById('center_part').style.height=htmlHeight-tnavHeight+'px';//得到内容高度
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
html,
body {
  height: 100%
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}


/* 初始化 */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}


/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: #fff
}
.el-center,#leftnav{
  height:100%
}
#leftnav{
  background:#eef1f6
}
.fl_left{
  float:left
}
.fl_right{
  float:right
}
.el-table th{
  text-align:center
}
</style>
