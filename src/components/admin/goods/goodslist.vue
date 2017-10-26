<template>
  <div class="arttmpl">
    <el-row>
      <el-col :span="24">
        <div class="abread bt-line">
          <!--面包屑导航，使用elementUI实现-->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <div class="operation">
      <el-row>
        <el-col :span="5">
          <!--新增，删除，全选-->
          <el-button>全选</el-button>
          <el-button>新增</el-button>
          <el-button>删除</el-button>
        </el-col>
        <el-col :span="3" :offset="16">
          <!--搜索框-->
          <el-input placeholder="请输入搜索条件" icon="search" v-model="searchValue" :on-icon-click="getlist">
          </el-input>

        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="24">
        <el-table :data="list" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="date" label="全选" width="80">
          </el-table-column>
          <el-table-column prop="title" label="标题">
          </el-table-column>
          <el-table-column prop="categoryname" label="类别" width="100">
          </el-table-column>
          <el-table-column label="发布人/发布时间" width="200">
          <!--scope作用域,elementUI的一个固定写法-->
            <template scope="scope">
              {{scope.row.user_name}} / {{scope.row.add_time}}
            </template>
          </el-table-column>
          <el-table-column prop="name" label="属性" width="100">
          </el-table-column>
          <el-table-column label="操作" width="80">
            <template scope="scope">
              <a href="#">修改</a>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {

  data() {
    return {
      //判断搜索框绑定属性
      searchValue: '',
      //表格中的每行数据来源于list，而这个list将来是通过getlist（）方法请求后台api接口获取到的

      list: []
    }
  },
  // 生命周期默认获取方法
  created(){
    this.getlist();
  },
  methods: {
    getlist() {
      var url = '/admin/goods/getlist?pageIndex=1&pageSize=10&searchvalue='
      this.$http.get(url).then(res => {
        console.log(54654)
        //判断服务器返回的状态status
        if (res.data.status == 1) {
          this.$message.error(res.data.message);
          return;
        }
        this.list = res.data.message;
      })
    },
    //控制表格的隔行变色
    tableRowClassName(row, index) {
      //控制基数行和偶数行的颜色
      if (index % 2 == 0) {
        return 'info-row';
      } else {
        return 'positive-row';
      }
    }
  }
}
</script>
<style scoped>

</style>
