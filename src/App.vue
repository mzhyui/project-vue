<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/manage">Manage</router-link> |
      <router-link to="/manageStaff">ManageStaff</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/form">Form</router-link> -->
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <router-link to="/manage" style="font-size: x-large;">患者管理</router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"><router-link to="/manageStaff" style="font-size: x-large;">医护管理</router-link></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"><router-link to="/add" style="font-size: x-large;">添加档案</router-link></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"><router-link to="/form" style="font-size: x-large;">表格视图</router-link></div>
        </el-col>
      </el-row>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
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