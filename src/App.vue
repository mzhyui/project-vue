<template>
  <div id="app">
    <div>
      <div style="margin-top: 20px; height: auto;">
        <el-collapse-transition>
          <div v-show="show">
            <navBar></navBar>
          </div>
        </el-collapse-transition>
      </div>
    </div>

    <router-view />
    <el-button @click="show = !show">切换导航栏</el-button>
    <el-button><router-link to="/login">返回登录页</router-link></el-button>
    <!-- <el-button>
      <router-link to="/manageStaff" style="font-size: x-large;">医护管理</router-link>
    </el-button> -->
  </div>
</template>
<script>
// import Vue from 'vue'
import navBar from '@/components/nav.vue';
// import { MessageBox } from 'element-ui'

// Vue.component(Message.name, Message)
// Vue.prototype.$message = Message

export default {
  data: () => ({
    show: true
  }),
  mounted() {
    // MessageBox.alert('仓库地址https://gitee.com/mzhyui/project-vue', '测试版本23-4-9', {
    //   confirmButtonText: 'OK'
    // });
  },
  components:{
    'navBar' : navBar
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style>
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */

/* .el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
} */
</style>