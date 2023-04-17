<!-- <template>
    <div class="modal-bg" v-show="show">
        <div class="modal-container">
            <div class="modal-header">
                {{ title }}
            </div>
            <div class="modal-main">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <el-button round @click="hideModal">取消</el-button>
                <el-button type="primary" round @click="submit">确认</el-button>
            </div>
        </div>
    </div>
</template> -->
<template>
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
        <el-form-item label="婚姻状况" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择婚姻状况">
            <el-option label="已婚" value="shanghai"></el-option>
            <el-option label="未婚" value="beijing"></el-option>
          </el-select>
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
    </el-tabs>
  </el-form>
</template>

<script>
export default {
  name: 'addPopupStaff'

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
      // dialogTableVisible: false,
      // dialogFormVisible: false,
      // dialogFormVisibleDelete: false,

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
}
</script>