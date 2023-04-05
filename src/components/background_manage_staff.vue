
<template>
  <el-container style="height: 80%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>社区A</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>社区B</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>社区C</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <el-button type="primary">
            医护管理<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item @click.native="dialogFormVisible = true">新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            <el-dropdown-item @click.native="dialogFormVisibleMultiple = true">批量添加</el-dropdown-item>


          </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->


      </el-header>
      <!-- TODO https://developer.aliyun.com/article/978054 根据内容修改样式 -->
      <el-main>
        <el-table :data="tableData" label-width="auto">
          <el-table-column fixed="left" prop="id" label="编号" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="gender" label="性别" width="120">
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="120">
          </el-table-column>
          <el-table-column prop="IdCard" label="身份证" width="200">
          </el-table-column>
          <el-table-column prop="phone" label="手机号" width="150">
          </el-table-column>
          <el-table-column prop="Status" label="职务" width="120">
          </el-table-column>
          <el-table-column prop="FromDate" label="主科室" width="130">
          </el-table-column>
          <el-table-column prop="ToDate" label="其他科室">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

    </el-container>
    <el-dialog title="新增档案" :visible.sync="dialogFormVisible" style="height: auto;">
      <addPopupStaff></addPopupStaff>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="批量添加" :visible.sync="dialogFormVisibleMultiple" style="height: auto;">
      <!-- <addPopupStaff></addPopupStaff> -->
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="fileList"
        align="left">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传sql/csv文件，且不超过500kb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleMultiple = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleMultiple = false">确 定</el-button>
      </div>
    </el-dialog>

  </el-container>
</template>
  
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
  
<script>
import addPopupStaff from './add_popup_staff.vue'

export default {
  name: 'bgM',
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  components: {
    'addPopupStaff': addPopupStaff
  }
  , data() {
    const item1 = {
      id: '4145',
      issue: 'A',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
      , age: '41'
      , IdCard: '320582xx'
      , phone: '138xxx'
      , Status: '专家'
      , FromDate: 'C'
      , ToDate: 'D'
      , gender: '男'
    };
    const item2 = {
      id: '4146',
      issue: 'B',
      name: '王大虎',
      address: '上海市普陀区金沙江路 1518 弄'
      , age: '42'
      , IdCard: '320582xx'
      , phone: '138xxx'
      , Status: '普通'
      , FromDate: 'A'
      , ToDate: 'B'
      , gender: '男'

    };
    return {
      tableData: Array(5).fill(item1).concat(Array(5).fill(item2)),
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogFormVisible: false,
      dialogFormVisibleMultiple: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        date: ''
      },
      formLabelWidth: '150px',
      fileList: [{ name: 'name1.csv', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'name2.csv', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],

    }
  }
};
</script>