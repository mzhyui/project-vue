<template>
  <div id="app">
    <div>
      <div style="margin-top: 20px; height: auto;">
        <el-collapse-transition>
          <div v-show="show3">
            <nav>
              <!-- <router-link to="/manage">Manage</router-link> |
      <router-link to="/manageStaff">ManageStaff</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/form">Form</router-link> -->
              <el-row :gutter="20" style="height: 20px;">
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <router-link to="/manage" style="font-size: x-large;">患者管理</router-link>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <router-link to="/manageStaff" style="font-size: x-large;">医护管理</router-link>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple"><router-link to="/add"
                      style="font-size: x-large;">添加档案</router-link></div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple"><router-link to="/form"
                      style="font-size: x-large;">表格视图</router-link></div>
                </el-col>
              </el-row>
            </nav>
          </div>
        </el-collapse-transition>
      </div>
    </div>

    <router-view />
    <el-button @click="show3 = !show3">切换导航栏</el-button>
    <!-- <el-button>
      <router-link to="/manageStaff" style="font-size: x-large;">医护管理</router-link>
    </el-button> -->
  </div>
  
</template>
<script>
export default {
  data: () => ({
    show3: true
  })
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

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
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

.el-col {
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
}
</style>