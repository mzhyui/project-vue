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
    <el-dialog title="新增档案">
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
              <el-input v-model="form.others" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="既往史">
            <el-form-item label="档案编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="药物过敏史" :label-width="formLabelWidth">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="青霉素" value="青霉素"></el-checkbox>
                <el-checkbox label="黄胺" value="黄胺"></el-checkbox>
                <el-checkbox label="头孢类" value="头孢类"></el-checkbox>
                <el-checkbox label="其他" value="其他"></el-checkbox>
                <el-checkbox label="无" value="无"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="暴露史" :label-width="formLabelWidth">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="化学" value="化学"></el-checkbox>
                <el-checkbox label="放射" value="放射"></el-checkbox>
                <el-checkbox label="毒性" value="毒性"></el-checkbox>
                <el-checkbox label="无" value="无"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="父亲疾病史" :label-width="formLabelWidth">
              <el-checkbox-group v-model="form.father_history">
                <el-checkbox label="高血压" value="高血压"></el-checkbox>
                <el-checkbox label="糖尿病" value="糖尿病"></el-checkbox>
                <el-checkbox label="冠心病" value="冠心病"></el-checkbox>
                <el-checkbox label="其他" value="其他"></el-checkbox>
                <el-checkbox label="无" value="无"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="母亲疾病史" :label-width="formLabelWidth">
              <el-checkbox-group v-model="form.mother_history">
                <el-checkbox label="高血压" value="高血压"></el-checkbox>
                <el-checkbox label="糖尿病" value="糖尿病"></el-checkbox>
                <el-checkbox label="冠心病" value="冠心病"></el-checkbox>
                <el-checkbox label="其他" value="其他"></el-checkbox>
                <el-checkbox label="无" value="无"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="兄弟姐妹疾病史" :label-width="formLabelWidth">
              <el-checkbox-group v-model="form.sibling_history">
                <el-checkbox label="高血压" value="高血压"></el-checkbox>
                <el-checkbox label="糖尿病" value="糖尿病"></el-checkbox>
                <el-checkbox label="冠心病" value="冠心病"></el-checkbox>
                <el-checkbox label="其他" value="其他"></el-checkbox>
                <el-checkbox label="无" value="无"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="子女疾病史" :label-width="formLabelWidth">
              <el-checkbox-group v-model="form.children_history">
                <el-checkbox label="高血压" value="高血压"></el-checkbox>
                <el-checkbox label="糖尿病" value="糖尿病"></el-checkbox>
                <el-checkbox label="冠心病" value="冠心病"></el-checkbox>
                <el-checkbox label="其他" value="其他"></el-checkbox>
                <el-checkbox label="无" value="无"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

          </el-tab-pane>
          <el-tab-pane label="高危人群">
            <el-form-item label="档案编号" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="高危疾病" :label-width="formLabelWidth">
              <el-checkbox-group v-model="form.high_risk_disease">
                <el-checkbox label="肺癌" value="肺癌"></el-checkbox>
                <el-checkbox label="胃癌" value="胃癌"></el-checkbox>
                <el-checkbox label="肝癌" value="肝癌"></el-checkbox>
                <el-checkbox label="其他" value="其他"></el-checkbox>
              </el-checkbox-group>
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
              <el-checkbox-group v-model="form.region" placeholder="请选择慢性疾病">
                <el-checkbox label="支气管炎" value="支气管炎"></el-checkbox>
                <el-checkbox label="高血压" value="高血压"></el-checkbox>
                <el-checkbox label="糖尿病" value="糖尿病"></el-checkbox>
                <el-checkbox label="冠心病" value="冠心病"></el-checkbox>
                <el-checkbox label="慢性阻塞性肺疾病" value="慢性阻塞性肺疾病"></el-checkbox>
                <el-checkbox label="恶性肿瘤" value="恶性肿瘤"></el-checkbox>
                <el-checkbox label="脑血管疾病" value="脑血管疾病"></el-checkbox>
                <el-checkbox label="重性精神疾病" value="重性精神疾病"></el-checkbox>
                <el-checkbox label="结核病" value="结核病"></el-checkbox>
                <el-checkbox label="肝炎" value="肝炎"></el-checkbox>
              </el-checkbox-group>
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
</template>

<script>
export default {
    name: 'addPopup',
    // props: {
    //     show: {
    //         type: Boolean,
    //         default: false
    //     },
    //     title: {
    //         type: String,
    //         default: ''
    //     },
    // },
    // methods: {
    //     hideModal() {
    //         this.$emit('hideModal')
    //     },

    //     submit() {
    //         this.$emit('submit')
    //     },
    // }
    data() {
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
        date: '',
        sibling_history: [],
        father_history: [],
        mother_history: [],
        children_history: [],
        high_risk_disease: []

      },
      formLabelWidth: '150px'
    }
  }
}
</script>