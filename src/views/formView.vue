<template>
    <el-container style="height: 80vh;">
        <el-header style="background-color: lightgray;">
            <el-menu default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                background-color="lightgray" text-color="black" active-text-color="#0fd04b">
                <el-menu-item index="1">院系设置</el-menu-item>
                <el-menu-item index="2">数据概览</el-menu-item>
                <el-submenu index="3">
                    <template #title>职员数据</template>
                    <el-menu-item index="3-1">医护管理</el-menu-item>
                    <el-menu-item index="3-2">人员统计</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header>
        <el-container>
            <el-aside width="150px" height="auto" style="background-color: lightgray; align-items: start;">
                <el-menu default-active="1" class="el-menu-vertical-demo" background-color="lightgray"
                    text-color="black" active-text-color="#0fd04b">
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
                </el-menu>
            </el-aside>
            <el-main>
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
    },
    setup() {
        const option1 = ref({
            title: {
                text: '柱状图示例'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]

        });
        const option2 = ref({
            title: {
                text: '饼图示例',
                left: 'left',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
            },
            series: [
                {
                    name: 'Traffic Sources',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'Direct' },
                        { value: 310, name: 'Email' },
                        { value: 234, name: 'Ad Networks' },
                        { value: 135, name: 'Video Ads' },
                        { value: 1548, name: 'Search Engines' },
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
            },
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
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
                top: '10%'
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
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
                    name: '搜索引擎',
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
    height: 200px;
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