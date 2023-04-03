<template>
    <el-container style="height: 80vh; border: 1px solid #eee">
        <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
                <div>
                    <el-button style="margin-top: 12px;" @click="submitForm('ruleForm')">保存草稿</el-button>
                </div>
                <div>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                </div>
                <div>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </div>
            </el-menu>
        </el-aside> -->

        <el-container>
            <el-header style="text-align: left; font-size: 12px">
                <!-- <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>
                            <el-button type="text" @click="dialogFormVisible = true">新增</el-button>


                        </el-dropdown-item>

                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>管理员</span> -->
                <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

                <span style="font-size: large;">新增档案</span>
            </el-header>
            <el-main align="left">
                <div>
                    <el-tabs type="border-card">
                        <el-tab-pane label="医疗数据">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px"
                                class="demo-ruleForm" :cell-style="{ 'text-align': 'left' }" labelPosition="left">
                                <h1>基础数据</h1>
                                <hr>
                                <el-row type="flex" class="row-bg">
                                    <el-col>
                                        <el-form-item label="编号" prop="id">
                                            <el-input v-model="ruleForm.Id"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col>
                                        <el-form-item label="档案编号" prop="id">
                                            <el-input v-model="ruleForm.archiveId"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row type="flex" class="row-bg">
                                    <el-col>
                                        <el-form-item label="基础检查" prop="id">
                                            <el-input v-model="ruleForm.basicCheck"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col>
                                        <el-form-item label="辅助检查" prop="id">
                                            <el-input v-model="ruleForm.id"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-form-item label="并发症筛查" prop="id">
                                    <el-input v-model="ruleForm.id"></el-input>
                                </el-form-item>
                                <el-form-item label="诊疗方案" prop="id">
                                    <el-input v-model="ruleForm.id"></el-input>
                                </el-form-item>
                                <el-form-item label="健教处方" prop="id">
                                    <el-input v-model="ruleForm.id"></el-input>
                                </el-form-item>
                                <el-form-item label="创建时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>基础检查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="id">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="症状" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择症状">
                                        <el-option label="视力模糊" value="shanghai"></el-option>
                                        <el-option label="其他" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="生活方式" prop="id">
                                    <el-input v-model="ruleForm.lifestyle"></el-input>
                                </el-form-item>

                                <el-form-item label="体格检查" prop="id">
                                    <el-input v-model="ruleForm.physicalExam"></el-input>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>


                                <h1>生活方式</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="吸烟史" prop="smoke">
                                    <el-switch v-model="ruleForm.smoke"></el-switch>
                                </el-form-item>
                                <el-form-item label="吸烟年限" prop="smokeyaer">
                                    <el-input v-model="ruleForm.smokeYear"></el-input>
                                </el-form-item>
                                <el-form-item label="每日吸烟量" prop="smokeaount">
                                    <el-input v-model="ruleForm.smokeAmount"></el-input>
                                </el-form-item>

                                <el-form-item label="饮酒史" prop="drink">
                                    <el-switch v-model="ruleForm.drink"></el-switch>
                                </el-form-item>
                                <el-form-item label="饮酒年限" prop="drinkyear">
                                    <el-input v-model="ruleForm.drinkYear"></el-input>
                                </el-form-item>
                                <el-form-item label="每日饮酒量" prop="drinkamount">
                                    <el-input v-model="ruleForm.drinkAmount"></el-input>
                                </el-form-item>
                                <el-form-item label="饮食习惯" prop="diet">
                                    <el-select v-model="ruleForm.diet" placeholder="请选择">
                                        <el-option label="均衡" value="balanced"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="锻炼习惯" prop="region">
                                    <el-select v-model="ruleForm.sport" placeholder="请选择">
                                        <el-option label="有" value="yes"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="锻炼频率" prop="sportfrequency">
                                    <el-input v-model="ruleForm.sportFrequency"></el-input>
                                </el-form-item>
                                <el-form-item label="锻炼时间" prop="sporttime">
                                    <el-input v-model="ruleForm.sportTime"></el-input>
                                </el-form-item>
                                <el-form-item label="睡眠情况" prop="sleep">
                                    <el-select v-model="ruleForm.sleep" placeholder="请选择">
                                        <el-option label="良好" value="good"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>


                                <h1>体格检查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="身高" prop="height">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.height"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>cm</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="体重" prop="weight">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.weight"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>kg</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="体质指数" prop="bmi">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.bmi"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>kg/m2</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="腰围" prop="waistline">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.waistline"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>cm</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="臀围" prop="hipline">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.hipline"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>cm</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="腰臀比" prop="whratio">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.whratio"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>cm</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="收缩压" prop="systolic">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.systolic"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>mmHg</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="舒张压" prop="diastolic">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.diastolic"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>mmHg</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="心率" prop="heartRate">
                                    <div style="float: left;">
                                        <el-input v-model="ruleForm.heartRate"></el-input>
                                    </div>
                                    <div style="float: left;">
                                        <span>bpm</span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="备注" prop="remark">
                                    <el-input type="textarea" v-model="ruleForm.remark"></el-input>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>额外体格检查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="左腿足部外观" prop="leftLeg">
                                    <el-select v-model="ruleForm.leftLeg" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="右腿足部外观" prop="rightLeg">
                                    <el-select v-model="ruleForm.rightLeg" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左侧足背动脉搏动" prop="leftLegStrength">
                                    <el-select v-model="ruleForm.leftLegStrength" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="右侧足背动脉搏动" prop="rightLegStrength">
                                    <el-select v-model="ruleForm.rightLegStrength" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左腿周围神经病变筛查" prop="leftLegStrength">
                                    <el-input v-model="ruleForm.leftLegAbnormal"></el-input>
                                </el-form-item>
                                <el-form-item label="右腿周围神经病变筛查" prop="rightLegStrength">
                                    <el-input v-model="ruleForm.rightLegAbnormal"></el-input>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>周围神经病变筛查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="10g尼龙丝刺激" prop="leftLegFeel">
                                    <el-select v-model="ruleForm.leftLegFeel" placeholder="请选择">
                                        <el-option label="0个点" value="0"></el-option>
                                        <el-option label="1个点" value="1"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="温凉感觉" prop="leftLegWarm">
                                    <el-select v-model="ruleForm.leftLegWarm" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="针刺感觉" prop="leftLegPain">
                                    <el-select v-model="ruleForm.leftLegPain" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="脚踝反射" prop="leftLegAnkle">
                                    <el-select v-model="ruleForm.leftLegAnkle" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="音叉刺激" prop="leftLegSound">
                                    <el-select v-model="ruleForm.leftLegSound" placeholder="请选择">
                                        <el-option label="正常" value="normal"></el-option>
                                        <el-option label="其他" value="other"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>辅助检查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="血糖监测" prop="bloodSugar">
                                    <el-input v-model="ruleForm.bloodSugar"></el-input>
                                </el-form-item>
                                <el-form-item label="血生化实验室检查" prop="bloodChemistry">
                                    <el-input v-model="ruleForm.bloodChemistry"></el-input>
                                </el-form-item>
                                <el-form-item label="尿常规" prop="urineRoutine">
                                    <el-input v-model="ruleForm.urineRoutine"></el-input>
                                </el-form-item>
                                <el-form-item label="75goctt" prop="octt">
                                    <el-input v-model="ruleForm.octt"></el-input>
                                </el-form-item>
                                <el-form-item label="胰岛素抗体四项" prop="insulin">
                                    <el-input v-model="ruleForm.insulin"></el-input>
                                </el-form-item>
                                <el-form-item label="甲状腺功能" prop="thyroid">
                                    <el-input v-model="ruleForm.thyroid"></el-input>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>血糖监测</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="空腹血糖" prop="bloodSugar">
                                    <el-input v-model="ruleForm.bloodSugar"></el-input>
                                </el-form-item>
                                <el-form-item label="餐后2小时血糖" prop="bloodSugar2">
                                    <el-input v-model="ruleForm.bloodSugar2"></el-input>
                                </el-form-item>
                                <el-form-item label="餐后随机血糖" prop="bloodSugar3">
                                    <el-input v-model="ruleForm.bloodSugar3"></el-input>
                                </el-form-item>
                                <el-form-item label="中餐前血糖" prop="bloodSugar3">
                                    <el-input v-model="ruleForm.bloodSugar3"></el-input>
                                </el-form-item>
                                <el-form-item label="中餐后血糖" prop="bloodSugar3">
                                    <el-input v-model="ruleForm.bloodSugar3"></el-input>
                                </el-form-item>
                                <el-form-item label="晚餐前血糖" prop="bloodSugar3">
                                    <el-input v-model="ruleForm.bloodSugar3"></el-input>
                                </el-form-item>
                                <el-form-item label="晚餐后血糖" prop="bloodSugar3">
                                    <el-input v-model="ruleForm.bloodSugar3"></el-input>
                                </el-form-item>
                                <el-form-item label="睡前血糖" prop="bloodSugar3">
                                    <el-input v-model="ruleForm.bloodSugar3"></el-input>
                                </el-form-item>
                                <el-form-item label="随机血糖" prop="bloodSugar3">
                                    <el-input v-model="ruleForm.bloodSugar3"></el-input>
                                </el-form-item>
                                <el-form-item label="糖化血红蛋白" prop="bloodSugar4">
                                    <el-input v-model="ruleForm.bloodSugar4"></el-input>
                                </el-form-item>
                                <el-form-item label="糖化白蛋白" prop="aigc">
                                    <el-input v-model="ruleForm.aigc"></el-input>
                                </el-form-item>
                                <el-form-item label="葡萄糖水平平均值" prop="avgSug">
                                    <el-input v-model="ruleForm.avgSug"></el-input>
                                </el-form-item>
                                <el-form-item label="葡萄糖水平标准差" prop="stdSug">
                                    <el-input v-model="ruleForm.stdSug"></el-input>
                                </el-form-item>
                                <el-form-item label="静脉空腹血糖" prop="bloodSugar5">
                                    <el-input v-model="ruleForm.bloodSugar5"></el-input>
                                </el-form-item>
                                <el-form-item label="静脉餐后2H血糖" prop="bloodSugar6">
                                    <el-input v-model="ruleForm.bloodSugar6"></el-input>
                                </el-form-item>
                                <el-form-item label="检查日期" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>血生化实验室检查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>

                                <el-form-item label="总胆固醇" prop="totalCholesterol">
                                    <el-input v-model="ruleForm.totalCholesterol"></el-input>
                                </el-form-item>
                                <el-form-item label="甘油三酯" prop="triglyceride">
                                    <el-input v-model="ruleForm.triglyceride"></el-input>
                                </el-form-item>
                                <el-form-item label="高密度脂蛋白胆固醇" prop="highDensityLipoprotein">
                                    <el-input v-model="ruleForm.highDensityLipoprotein"></el-input>
                                </el-form-item>
                                <el-form-item label="低密度脂蛋白胆固醇" prop="lowDensityLipoprotein">
                                    <el-input v-model="ruleForm.lowDensityLipoprotein"></el-input>
                                </el-form-item>
                                <el-form-item label="血清谷丙转氨酶" prop="serumAlanineAminotransferase">
                                    <el-input v-model="ruleForm.serumAlanineAminotransferase"></el-input>
                                </el-form-item>
                                <el-form-item label="血清谷草转氨酶" prop="serumAspartateAminotransferase">
                                    <el-input v-model="ruleForm.serumAspartateAminotransferase"></el-input>
                                </el-form-item>
                                <el-form-item label="天冬氨酸转移酶" prop="serumGlutamicOxaloaceticTransaminase">
                                    <el-input v-model="ruleForm.serumGlutamicOxaloaceticTransaminase"></el-input>
                                </el-form-item>
                                <el-form-item label="血清总胆红素" prop="serumTotalBilirubin">
                                    <el-input v-model="ruleForm.serumTotalBilirubin"></el-input>
                                </el-form-item>
                                <el-form-item label="血清直接胆红素" prop="serumDirectBilirubin">
                                    <el-input v-model="ruleForm.serumDirectBilirubin"></el-input>
                                </el-form-item>

                                <el-form-item label="血清肌酐" prop="serumCreatinine">
                                    <el-input v-model="ruleForm.serumCreatinine"></el-input>
                                </el-form-item>
                                <el-form-item label="血清尿酸" prop="serumUricAcid">
                                    <el-input v-model="ruleForm.serumUricAcid"></el-input>
                                </el-form-item>
                                <el-form-item label="血清尿素氮" prop="serumUreaNitrogen">
                                    <el-input v-model="ruleForm.serumUreaNitrogen"></el-input>
                                </el-form-item>
                                <el-form-item label="LEGFR" prop="legfr">
                                    <el-input v-model="ruleForm.legfr"></el-input>
                                </el-form-item>
                                <el-form-item label="肌酸激酶" prop="creatineKinase">
                                    <el-input v-model="ruleForm.creatineKinase"></el-input>
                                </el-form-item>
                                <el-form-item label="肌酸激酶同工酶" prop="creatineKinaseMb">
                                    <el-input v-model="ruleForm.creatineKinaseMb"></el-input>
                                </el-form-item>
                                <el-form-item label="同型半胱氨酸" prop="homocysteine">
                                    <el-input v-model="ruleForm.homocysteine"></el-input>
                                </el-form-item>
                                <el-form-item label="红细胞计数" prop="redBloodCellCount">
                                    <el-input v-model="ruleForm.redBloodCellCount"></el-input>
                                </el-form-item>
                                <el-form-item label="白细胞计数" prop="whiteBloodCellCount">
                                    <el-input v-model="ruleForm.whiteBloodCellCount"></el-input>
                                </el-form-item>

                                <el-form-item label="血红蛋白" prop="hemoglobin">
                                    <el-input v-model="ruleForm.hemoglobin"></el-input>
                                </el-form-item>
                                <el-form-item label="血小板计数" prop="plateletCount">
                                    <el-input v-model="ruleForm.plateletCount"></el-input>
                                </el-form-item>
                                <el-form-item label="中性粒细胞" prop="neutrophil">
                                    <el-input v-model="ruleForm.neutrophil"></el-input>
                                </el-form-item>
                                <el-form-item label="淋巴细胞" prop="lymphocyte">
                                    <el-input v-model="ruleForm.lymphocyte"></el-input>
                                </el-form-item>
                                <el-form-item label="红细胞比容" prop="redBloodCellVolume">
                                    <el-input v-model="ruleForm.redBloodCellVolume"></el-input>
                                </el-form-item>
                                <el-form-item label="中性粒细胞比率" prop="neutrophilRatio">
                                    <el-input v-model="ruleForm.neutrophilRatio"></el-input>
                                </el-form-item>
                                <el-form-item label="淋巴细胞比率" prop="lymphocyteRatio">
                                    <el-input v-model="ruleForm.lymphocyteRatio"></el-input>
                                </el-form-item>
                                
                                
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>尿液检查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>
                                <el-form-item label="尿葡萄糖" prop="urineGlucose">
                                    <el-input v-model="ruleForm.urineGlucose"></el-input>
                                </el-form-item>
                                <el-form-item label="尿潜血" prop="urineBlood">
                                    <el-input v-model="ruleForm.urineBlood"></el-input>
                                </el-form-item>
                                <el-form-item label="尿白细胞" prop="urineWhiteBloodCell">
                                    <el-input v-model="ruleForm.urineWhiteBloodCell"></el-input>
                                </el-form-item>
                                <el-form-item label="尿酮体" prop="urineKetoneBody">
                                    <el-input v-model="ruleForm.urineKetoneBody"></el-input>
                                </el-form-item>
                                <el-form-item label="尿蛋白" prop="urineProtein">
                                    <el-input v-model="ruleForm.urineProtein"></el-input>
                                </el-form-item>


                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>

                                <h1>周围神经病变筛查</h1>
                                <hr>
                                <el-form-item label="编号" prop="id">
                                    <el-input v-model="ruleForm.Id"></el-input>
                                </el-form-item>
                                <el-form-item label="档案编号" prop="archiveId">
                                    <el-input v-model="ruleForm.archiveId"></el-input>
                                </el-form-item>

                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>


                                <el-form-item label="活动区域" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="更新时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>


                                <el-form-item label="活动时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-form-item prop="date2">
                                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2"
                                                style="width: 200px;;"></el-time-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="即时配送" prop="delivery">
                                    <el-switch v-model="ruleForm.delivery"></el-switch>
                                </el-form-item>
                                <el-form-item label="活动性质" prop="type">
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="特殊资源" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="线上品牌商赞助"></el-radio>
                                        <el-radio label="线下场地免费"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="活动形式" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                </el-form-item>
                                <h1>体格检查</h1>
                                <hr>
                                <el-form-item label="活动名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="活动区域" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="活动时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                                style="width: 200px;;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-form-item prop="date2">
                                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2"
                                                style="width: 200px;;"></el-time-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="即时配送" prop="delivery">
                                    <el-switch v-model="ruleForm.delivery"></el-switch>
                                </el-form-item>
                                <el-form-item label="活动性质" prop="type">
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="特殊资源" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="线上品牌商赞助"></el-radio>
                                        <el-radio label="线下场地免费"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="活动形式" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                </el-form-item>
                                <!-- <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item> -->
                                <h1>体格检查</h1>
                                <hr>
                                <el-form-item label="活动名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="处方信息">

                        </el-tab-pane>
                        <el-tab-pane label="随访信息">

                        </el-tab-pane>
                        <el-tab-pane label="签约记录">

                        </el-tab-pane>
                    </el-tabs>

                </div>
            </el-main>
            <el-footer style="height: 15vh;background-color: aliceblue;">
                <el-steps :active="2" align-center>
                    <el-step title="步骤1" description="25%"></el-step>
                    <el-step title="步骤2" description="50%"></el-step>
                    <el-step title="步骤3" description="75%"></el-step>
                    <el-step title="步骤4" description="100%"></el-step>
                </el-steps>
                <el-button style="margin-top: 12px;" @click="submitForm('ruleForm')">保存草稿</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>

            </el-footer>
        </el-container>
    </el-container>
</template>
<style>
.el-form-item__label-wrap {
    margin-left: 0px !important;

}

/* .el-form-item__label {
    word-break: keep-all !important;
} */

.el-form-item__content {
    /* margin: 0 !important; */
    width: 300px;
    ;
}

.el-input.el-input--medium,
/* .el-select.el-select--medium {
    width: 100%;
} */

.el-form-item.el-form-item--medium {
    display: flex-start;
    justify-content: flex-start;
}
</style>
<script>
import 'element-ui/lib/theme-chalk/index.css'
// import 'el-form-model/lib/index.css'

// import Vue from 'vue'
// import ElFormModel from 'el-form-model'
// Vue.use(ElFormModel)

export default {
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>