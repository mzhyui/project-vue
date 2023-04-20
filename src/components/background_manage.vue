
<template>
  <el-container style="height: 850px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
      <el-menu :default-openeds="['1',]">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>社区划分</template>
          <el-menu-item-group>
            <!-- <template slot="title">社区A</template> -->
            <el-menu-item index="1-1">社区A</el-menu-item>
            <el-menu-item index="1-2">社区B</el-menu-item>
            <el-menu-item index="1-3">社区C</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>疾病划分</template>
          <el-menu-item-group title="慢病">
            <!-- <template slot="title">慢病</template> -->
            <el-menu-item index="2-1">糖尿病</el-menu-item>
            <el-menu-item index="2-2">高血压</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="其他">
            <el-menu-item index="2-3">肺炎</el-menu-item>
          </el-menu-item-group>
        <!-- <el-submenu index="2-4">
            <template slot="title">其他</template>
            <el-menu-item index="2-4-1">分组4-1</el-menu-item>
                </el-submenu> -->
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>服务状态</template>
          <el-menu-item index="3-1">签约期内</el-menu-item>
          <el-menu-item index="3-2">已过期</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="font-size: 12px">
        <el-row :gutter="5">
          <el-col :span="12" style="text-align: left;">
            <div>
              <el-input placeholder="请输入内容" v-model="searchinput" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="病种" value="1"></el-option>
                  <el-option label="姓名" value="2"></el-option>
                  <el-option label="编号" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
          <el-col :span="12" style="text-align: right;">
            <el-button @click.native="dialogFormVisible = true">新增患者档案</el-button>
            <el-button @click.native="dialogFormVisibleMultiple = true">批量添加</el-button>
            <el-button>批量删除</el-button>
            <el-button>数据导出</el-button>

          </el-col>
        </el-row>
      </el-header>
      <!-- TODO https://developer.aliyun.com/article/978054 根据内容修改样式 -->
      <el-main>
        <el-table :data="tableData" label-width="auto" height="700">
          <el-table-column fixed="left" prop="id" label="档案编号" width="140">
          </el-table-column>
          <el-table-column prop="issue" label="病种" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="120">
          </el-table-column>
          <el-table-column prop="IdCard" label="身份证" width="200">
          </el-table-column>
          <el-table-column prop="phone" label="手机号" width="150">
          </el-table-column>
          <el-table-column prop="Status" label="服务状态" width="120">
          </el-table-column>
          <el-table-column prop="FromDate" label="服务开始日期" width="130">
          </el-table-column>
          <el-table-column prop="ToDate" label="服务结束日期">
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
      <addPopup></addPopup>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="批量添加" :visible.sync="dialogFormVisibleMultiple" style="height: auto;">
      <!-- <addPopupStaff></addPopupStaff> -->
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
        :file-list="fileList" align="left">
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
  
<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-select .el-input {
    width: 130px;
  }
.input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
.el-input .el-select {
    width: 130px;
  }
</style>
  
<script>
import addPopup from './add_popup.vue'
// not import { addPopup } from './add_popup.vue' because there's only the default export


export default {
  name: 'bgM',
  components: {
    'addPopup': addPopup
  },
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
  data() {
    const item1 = {
      id: '4145',
      issue: '高血压，心脏病',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
      , age: '41'
      , IdCard: '320582xx'
      , phone: '138xxx'
      , Status: '已签约'
      , FromDate: '2021'
      , ToDate: '2022'
    };
    const item2 = {
      id: '4146',
      issue: '糖尿病',
      name: '王大虎',
      address: '上海市普陀区金沙江路 1518 弄'
      , age: '42'
      , IdCard: '320582xx'
      , phone: '138xxx'
      , Status: '已签约'
      , FromDate: '2021'
      , ToDate: '2022'
    };
    return {
      tableData: Array(5).fill(item1).concat(Array(5).fill(item2)).concat(Array(5).fill(item1)),
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
      dialogFormVisibleMultiple: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        date: '',
        sibling_history: [],
        father_history: [],
        mother_history: [],
        children_history: [],
        high_risk_disease: []

      },
      formLabelWidth: '150px',
      fileList: [{ name: 'name1.csv', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'name2.csv', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      searchinput: '',
      select: ''
    }
  }
};
</script>