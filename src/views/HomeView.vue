<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <!-- <el-row>
    <el-col :span="12">
      <img src="@/assets/homepage.png" alt="My Image">
    </el-col>
    <el-col :span="12">

      <login></login>
    </el-col>
  </el-row> -->
  <login></login>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LoginComponents from '@/components/login_page.vue'
// import { MessageBox } from 'element-ui'


export default {
  name: 'HomeView',
  mounted() {
    const h = this.$createElement;
    this.$msgbox({
      title: '测试版本23-4-9',
      message: h('p', null, [
        h('span', null, '仓库地址 '),
        h('a', { attrs: { href: 'https://gitee.com/mzhyui/project-vue', target: '_blank' } }, 'https://gitee.com/mzhyui/project-vue')
      ]),
    })

    // MessageBox.alert('仓库地址https://gitee.com/mzhyui/project-vue', '测试版本23-4-9', {
    //   confirmButtonText: 'OK'
    // });
  },
  components: {
    // HelloWorld,
    'login': LoginComponents
  }
}
</script>
