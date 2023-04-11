<template>
  <div id="app">
    <div v-show="shouldShowDiv">
      <!-- <el-row :gutter="10" style="margin: 0;" type="flex">
        <el-col :span="20">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/login">首页</el-menu-item>
            <el-menu-item index="/manage">
              患者管理
            </el-menu-item>
            <el-menu-item index="/manageStaff">
              医护管理
            </el-menu-item>
            <el-menu-item index="/add">添加档案</el-menu-item>
            <el-menu-item index="/form">数据视图</el-menu-item>
          </el-menu></el-col>
        <el-col :span="4" style="display: flex; justify-content: center; align-items: center;">
          <div style="display: flex; justify-content: center; align-items: center;">
            <el-dropdown>
              <span class="el-dropdown-link">
                欢迎访问， {{ username }} <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>

      </el-row> -->
      <navBar style="padding: 0;"></navBar>

    </div>

    <router-view />
    <!-- <el-button @click="show = !show">切换导航栏</el-button> -->
    <!-- <el-button @click="isCollapse = !isCollapse">{{ isCollapse ? 'Collapse' : 'Expand' }}</el-button> -->
    <el-button v-show="shouldShowDiv"><router-link to="/">返回登录页</router-link></el-button>
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
    // show: true,
  }),
  mounted() {
    // MessageBox.alert('仓库地址https://gitee.com/mzhyui/project-vue', '测试版本23-4-9', {
    //   confirmButtonText: 'OK'
    // });
    // this.show = !(this.activeIndex === '/login')
  },
  components: {
    'navBar': navBar
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    shouldShowDiv() {
      const currentPath = this.$route.path;
      // check if the current path is the login page
      const isLoginPage = currentPath === '/login' || currentPath === '/';
      // return true if the div should be shown (not on the login page), false otherwise
      return !isLoginPage;
    }
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