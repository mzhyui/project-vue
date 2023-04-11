<template>
    <el-container style="height: 850px;">
        <!-- <el-header style="background-color: lightgray;">
            <el-menu default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                background-color="lightgray" text-color="black" active-text-color="#0fd04b">
                <el-menu-item index="1">科室设置</el-menu-item>
                <el-menu-item index="2">数据概览</el-menu-item>
                <el-submenu index="3">
                    <template #title>职员数据</template>
                    <el-menu-item index="3-1">医护管理</el-menu-item>
                    <el-menu-item index="3-2">人员统计</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header> -->
        <el-container>
            <el-aside width="200px" height="auto" style="background-color: lightgray; align-items: start;">
                <el-menu default-active="2" class="el-menu-demo" mode="vertical" @select="handleSelect"
                background-color="lightgray" text-color="black" active-text-color="#0fd04b">
                <el-menu-item index="1">科室设置</el-menu-item>
                <el-menu-item index="2">数据概览</el-menu-item>
                <el-submenu index="3">
                    <template #title>职员数据</template>
                    <el-menu-item index="3-1">医护管理</el-menu-item>
                    <el-menu-item index="3-2">人员统计</el-menu-item>
                </el-submenu>
            </el-menu>
                <!-- <el-menu default-active="1" class="el-menu-vertical-demo" background-color="lightgray" text-color="black"
                    active-text-color="#0fd04b">
                    <el-submenu index="1">
                        <template #title>
                            <i class="el-icon-location"></i>
                            <span>医疗数据</span>
                        </template>
                        <el-menu-item index="1-1">基本信息</el-menu-item>
                        <el-menu-item index="1-2">处方信息</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template #title>
                            <i class="el-icon-menu"></i>
                            <span>随访信息</span>
                        </template>
                        <el-menu-item index="2-1">随访记录</el-menu-item>
                        <el-menu-item index="2-2">随访统计</el-menu-item>
                    </el-submenu>
                </el-menu> -->
            </el-aside>
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <span>当前目标</span>
                        <div>
                            <el-row>
                                <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                            </el-row>
                            <el-row>
                                <el-progress :text-inside="true" :stroke-width="24" :percentage="100"
                                    status="success"></el-progress>
                            </el-row>
                            <el-row>
                                <el-progress :text-inside="true" :stroke-width="22" :percentage="80"
                                    status="warning"></el-progress>
                            </el-row>
                            <el-row>
                                <el-progress :text-inside="true" :stroke-width="20" :percentage="50"
                                    status="exception"></el-progress>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <p>考核人数</p>
                            <el-progress :percentage="50" type="circle"></el-progress>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <p>绩效完成率</p>
                            <el-progress :percentage="100" type="circle"></el-progress>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <v-chart class="chart" :option="option1" autoresize />
                        </div>

                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <v-chart class="chart" :option="option2" autoresize />
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <v-chart class="chart" :option="option3" autoresize />
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <v-chart class="chart" :option="option1" autoresize />
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <!-- <el-footer></el-footer> -->
        </el-container>
    </el-container>
</template>
  
<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, BarChart, LineChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

use([
    CanvasRenderer,
    PieChart,
    BarChart,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
]);

export default defineComponent({
    name: 'HelloWorld',
    components: {
        VChart,
    },
    provide: {
        [THEME_KEY]: 'dark',
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        },
    },
    setup() {
        const option1 = ref({
            title: {
                text: '柱状图示例',
                textStyle: {
                    color: '#333', // set your preferred title text color here
                },
            },
            backgroundColor: '#f5f5f5',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['人数'],
                textStyle: {
                    color: '#999', // set your preferred legend text color here
                },
            },
            xAxis: {
                data: ["糖尿病", "高血压", "心脏病", "血栓", "肺炎", "哮喘"],
                nameTextStyle: {
                    color: '#666', // set your preferred X axis text color here
                },
                axisLabel: {
                    color: '#777', // set your preferred X axis label text color here
                },
            },
            yAxis: {

                nameTextStyle: {
                    color: '#666', // set your preferred X axis text color here
                },
                axisLabel: {
                    color: '#777', // set your preferred X axis label text color here
                },
            },
            series: [{
                name: '人数',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]

        });
        const option2 = ref({
            title: {
                text: '饼图示例',
                left: 'left',
                textStyle: {
                    color: '#333', // set your preferred title text color here
                },
            },
            backgroundColor: '#f5f5f5',
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['直接访问', '电子邮件', '广告', '视频推广', '搜索'],
                textStyle: {
                    color: '#999', // set your preferred legend text color here
                },
            },
            series: [
                {
                    name: 'Traffic Sources',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '电子邮件' },
                        { value: 234, name: '广告' },
                        { value: 135, name: '视频推广' },
                        { value: 1548, name: '搜索' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],

        });
        const option3 = ref({
            title: {
                text: '折线图示例',
                left: 'left',
                textStyle: {
                    color: '#333', // set your preferred title text color here
                },
            },
            backgroundColor: '#f5f5f5',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['邮件', '广告', '视频推广', '直接访问', '搜索'],
                top: '10%',
                textStyle: {
                    color: '#999', // set your preferred legend text color here
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                nameTextStyle: {
                    color: '#666', // set your preferred X axis text color here
                },
                axisLabel: {
                    color: '#777', // set your preferred X axis label text color here
                },
            },
            yAxis: {
                type: 'value',
                nameTextStyle: {
                    color: '#666', // set your preferred X axis text color here
                },
                axisLabel: {
                    color: '#777', // set your preferred X axis label text color here
                },
            },
            series: [
                {
                    name: '邮件',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频推广',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]

        });

        return { option1, option2, option3 };
    },
});
</script>
  
<style scoped>
.chart {
    height: 250px;
}
</style>
<style>
.el-row {
    margin-bottom: 20px;

    /* &:last-child {
        margin-bottom: 0;
    } */
}

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