<template>
    <div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="编号" width="120">
                <template slot-scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button> -->
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'addPopupDelete',
    data() {
        const item1 = {
            id: '4145',
            issue: 'A',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            age: '41',
            IdCard: '320582xx',
            phone: '138xxx',
            Status: '专家',
            FromDate: 'C',
            ToDate: 'D',
            gender: '男'
        };
        const item2 = {
            id: '4146',
            issue: 'B',
            name: '王大虎',
            address: '上海市普陀区金沙江路 1518 弄',
            age: '42',
            IdCard: '320582xx',
            phone: '138xxx',
            Status: '普通',
            FromDate: 'A',
            ToDate: 'B',
            gender: '男'

        };
        const item3 = {
            id: '4147',
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
        const item4 = {
            id: '4148',
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

            tableData: [
                item1,
                item2,
                item3,
                item4
            ],
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
            formLabelWidth: '150px',
            multipleSelection: []

        }
    },

    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>  