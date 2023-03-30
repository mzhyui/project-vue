
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
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>
              <!-- 新增 -->
              <el-button type="text" @click="dialogFormVisible = true">新增</el-button>


            </el-dropdown-item>

            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>患者管理</span>
        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->


      </el-header>
      <!-- TODO https://developer.aliyun.com/article/978054 根据内容修改样式 -->
      <el-main>
        <el-table :data="tableData" label-width="auto">
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
      <el-form :model="form" align="left">
      <!-- <el-form-item label="档案编号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择婚姻状况">
            <el-option label="已婚" value="shanghai"></el-option>
            <el-option label="未婚" value="beijing"></el-option>
          </el-select>
              </el-form-item> -->
        <el-tabs type="border-card">
          <el-tab-pane label="基本信息">
            <el-form-item label="档案编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择性别">
                <el-option label="男" value="shanghai"></el-option>
                <el-option label="女" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="民族" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择婚姻状况">
                <el-option label="汉族" value="shanghai"></el-option>
                <el-option label="其他" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="文化程度" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择婚姻状况">
                <el-option label="研究生" value="shanghai"></el-option>
                <el-option label="其他" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="婚姻状况" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择婚姻状况">
                <el-option label="已婚" value="shanghai"></el-option>
                <el-option label="未婚" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件类型" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择证件类型">
                <el-option label="身份证" value="shanghai"></el-option>
                <el-option label="护照" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件号码" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="职业" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择职业">
                <el-option label="学生" value="shanghai"></el-option>
                <el-option label="其他" value="beijing"></el-option>
              </el-select>
            </el-form-item>

          </el-tab-pane>
          <el-tab-pane label="详细信息">
            <el-form-item label="出生日期" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="籍贯" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="户籍地址" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="现居住地址" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="医疗费用支付途径" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择医疗费用支付途径">
                <el-option label="城镇职工基本医疗保险" value="shanghai"></el-option>
                <el-option label="其他" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="abo血型" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择abo血型">
                <el-option label="A" value="shanghai"></el-option>
                <el-option label="B" value="beijing"></el-option>
                <el-option label="AB" value="beijing"></el-option>
                <el-option label="O" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="rh血型" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择rh血型">
                <el-option label="阴性" value="shanghai"></el-option>
                <el-option label="阳性" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="建档单位" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="建档日期" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>

          </el-tab-pane>
          <el-tab-pane label="其他信息">
            <el-form-item label="备注" :label-width="formLabelWidth">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="既往史">
            <el-form-item label="档案编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="药物过敏史" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择药物过敏史">
                <el-option label="青霉素" value="青霉素"></el-option>
                <el-option label="黄胺" value="黄胺"></el-option>
                <el-option label="头孢类" value="头孢类"></el-option>
                <el-option label="其他" value="other"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="暴露史" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择暴露史">
                <el-option label="化学" value="化学"></el-option>
                <el-option label="放射" value="放射"></el-option>
                <el-option label="毒性" value="毒性"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="父亲疾病史" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择父亲疾病史">
                <el-option label="高血压" value="高血压"></el-option> 
                <el-option label="糖尿病" value="糖尿病"></el-option>
                <el-option label="冠心病" value="冠心病"></el-option>
                <el-option label="慢性阻塞性肺疾病" value="慢性阻塞性肺疾病"></el-option>
                <el-option label="恶性肿瘤" value="恶性肿瘤"></el-option>
                <el-option label="脑血管疾病" value="脑血管疾病"></el-option>
                <el-option label="重性精神疾病" value="重性精神疾病"></el-option>
                <el-option label="结核病" value="结核病"></el-option>
                <el-option label="肝炎" value="肝炎"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="母亲疾病史" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择母亲疾病史">
                <el-option label="高血压" value="高血压"></el-option> 
                <el-option label="糖尿病" value="糖尿病"></el-option>
                <el-option label="冠心病" value="冠心病"></el-option>
                <el-option label="慢性阻塞性肺疾病" value="慢性阻塞性肺疾病"></el-option>
                <el-option label="恶性肿瘤" value="恶性肿瘤"></el-option>
                <el-option label="脑血管疾病" value="脑血管疾病"></el-option>
                <el-option label="重性精神疾病" value="重性精神疾病"></el-option>
                <el-option label="结核病" value="结核病"></el-option>
                <el-option label="肝炎" value="肝炎"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="兄弟姐妹疾病史" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择兄弟姐妹疾病史">
                <el-option label="高血压" value="高血压"></el-option> 
                <el-option label="糖尿病" value="糖尿病"></el-option>
                <el-option label="冠心病" value="冠心病"></el-option>
                <el-option label="慢性阻塞性肺疾病" value="慢性阻塞性肺疾病"></el-option>
                <el-option label="恶性肿瘤" value="恶性肿瘤"></el-option>
                <el-option label="脑血管疾病" value="脑血管疾病"></el-option>
                <el-option label="重性精神疾病" value="重性精神疾病"></el-option>
                <el-option label="结核病" value="结核病"></el-option>
                <el-option label="肝炎" value="肝炎"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="子女疾病史" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择子女疾病史">
                <el-option label="高血压" value="高血压"></el-option> 
                <el-option label="糖尿病" value="糖尿病"></el-option>
                <el-option label="冠心病" value="冠心病"></el-option>
                <el-option label="慢性阻塞性肺疾病" value="慢性阻塞性肺疾病"></el-option>
                <el-option label="恶性肿瘤" value="恶性肿瘤"></el-option>
                <el-option label="脑血管疾病" value="脑血管疾病"></el-option>
                <el-option label="重性精神疾病" value="重性精神疾病"></el-option>
                <el-option label="结核病" value="结核病"></el-option>
                <el-option label="肝炎" value="肝炎"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="高危人群">
            <el-form-item label="档案编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="高危疾病" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择高危疾病">
                <el-option label="高血压高危人群" value="高血压"></el-option> 
                <el-option label="糖尿病高危人群" value="糖尿病"></el-option>
                <el-option label="慢性阻塞性肺高危人群" value="慢性阻塞性肺疾病"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="危险因素" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择危险因素">
                <el-option label="妊娠期妇女" value="妊娠期妇女"></el-option> 
              </el-select>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="慢病人群">
            <el-form-item label="档案编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="慢性疾病" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择慢性疾病">
                <el-option label="支气管炎" value="支气管炎"></el-option>
                <el-option label="高血压" value="高血压"></el-option> 
                <el-option label="糖尿病" value="糖尿病"></el-option>
                <el-option label="冠心病" value="冠心病"></el-option>
                <el-option label="慢性阻塞性肺疾病" value="慢性阻塞性肺疾病"></el-option>
                <el-option label="恶性肿瘤" value="恶性肿瘤"></el-option>
                <el-option label="脑血管疾病" value="脑血管疾病"></el-option>
                <el-option label="重性精神疾病" value="重性精神疾病"></el-option>
                <el-option label="结核病" value="结核病"></el-option>
                <el-option label="肝炎" value="肝炎"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="确诊日期" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="附件记录">
            <el-form-item label="编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="档案编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="上传人编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="原始附件名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="远程附件名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="远程文件路径" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="远程文件大小" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="上传时间" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="录入时间" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>

          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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

export default {
  name: 'bgM'
  , methods: {
    handleClick(row) {
      console.log(row);
    }
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
      , Status: '已签约'
      , FromDate: '2021'
      , ToDate: '2022'
    };
    const item2 = {
      id: '4146',
      issue: 'B',
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
      dialogTableVisible: false,
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
        date: ''
      },
      formLabelWidth: '150px'
    }
  }
};
</script>