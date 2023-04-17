<template>
    <!-- todo:内容溢出div -->
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
            <el-aside width="200px" height="auto" style="background-color: #99cccc; align-items: start;">
                <el-menu default-active="2" class="el-menu-demo" mode="vertical" @select="handleSelect"
                    background-color="#ccffff" text-color="black" active-text-color="#409EFF">
                    <el-menu-item index="1">个人信息</el-menu-item>
                    <el-menu-item index="2">隐私设置</el-menu-item>
                    <!-- <el-submenu index="3">
                        <template #title>职员数据</template>
                        <el-menu-item index="3-1">医护管理</el-menu-item>
                        <el-menu-item index="3-2">人员统计</el-menu-item>
                    </el-submenu> -->
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
                        <div class="block"><el-avatar shape="square" :size="100" :src="squareUrl"></el-avatar></div>
                        <!-- <el-skeleton :rows="2" /> -->
                        <p>用户名：</p>
                        <p>邮箱：</p>
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <div class="block">
                                    <el-timeline>
                                        <el-timeline-item v-for="(activity, index) in activities" :key="index"
                                            :icon="activity.icon" :type="activity.type" :color="activity.color"
                                            :size="activity.size" :timestamp="activity.timestamp">
                                            {{ activity.content }}
                                        </el-timeline-item>
                                    </el-timeline>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <el-carousel height="200px">
                                    <el-carousel-item v-for="item in 4" :key="item">
                                        <h3 class="small">{{ item }}</h3>
                                    </el-carousel-item>
                                </el-carousel>
                            </el-col>
                            <el-col :span="12">
                                <el-card class="box-card">
                                    <div slot="header" class="clearfix">
                                        <span>事件卡片</span>
                                        <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                                    </div>
                                    <div v-for="o in 4" :key="o" class="text item">
                                        {{ '列表内容 ' + o }}
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12" style="height: 600px;">
                        <el-calendar v-model="value">
                        </el-calendar>
                    </el-col>

                </el-row>
            </el-main>
            <!-- <el-footer></el-footer> -->
        </el-container>
    </el-container>
</template>
  
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>

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

export default ({
    name: 'MyPage',
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        },
    },
    setup() {

    },
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            sizeList: ["large", "medium", "small"],
            activities: [{
                content: '多邮箱功能用于管理控制与您的帐号关联的电子邮箱地址和相关功能。',
                timestamp: '2018-04-12 20:46',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more'
            }, {
                content: '支持自定义颜色',
                timestamp: '2018-04-03 20:46',
                color: '#0bbd87'
            }, {
                content: '提交邮箱将用于您在 Gitee 网页端 / WebIDE 上 创建/修改/提交内容到仓库时作为 git config 邮件地址配置使用。',
                timestamp: '2018-04-03 20:46',
                size: 'large'
            },],
            value: new Date(),
        };
    }
});
</script>
  
<style scoped>
.el-row {
    margin-bottom: 20px;

    /* &:last-child {
        margin-bottom: 0;
    } */
}

.el-col {
    border-radius: 4px;
    height: 250px;
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

.el-timeline-item {
    text-align: left;
}

.el-timeline {
    padding-left: 20%;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    text-align: left;
  }
</style>