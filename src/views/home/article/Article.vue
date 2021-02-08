<template>
  <div id="article">
    <div class="search">
      <div class="search-item">
      <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
      </el-select>
      </div>
      <div class="search-item">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="search-item">
        <el-button type="danger">查询</el-button>
      </div>
      <div class="search-item" style="margin-left: auto; margin-right:20px">
        <el-button type="primary" @click="$router.push('/addArticle')">添加</el-button>
      </div>
    </div>
    <div class="main">
       <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="280">
        </el-table-column>
        <el-table-column
          label="操作">
          <el-button class="delete">修改</el-button>
          <el-button class="stop">停止</el-button>
          <el-button class="delete">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      input: "23156",
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  }
}
</script>

<style scoped>
  #article {
    margin: 14px;
  }
  .search {
    display: flex;
    padding: 20px 0;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgb(219, 219, 219);
  }
  .search .search-item {
    margin-left: 12px;
  }
  .main {
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgb(219, 219, 219);
  }
  .delete:hover{
    background: rgb(245,139,68);
    color:#fff
  }
  .stop:hover{
    background: rgb(197, 69, 94);
    color:#fff
  }
</style>