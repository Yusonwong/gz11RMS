<template>
  <div class="tmpl">
    <!-- layout的职责是1.左边菜单2.顶部栏 -->
    <!-- 具体内容使用router-view，将来靠router-view去导航出具体的业务功能页面替换值 -->
    <el-row>
     <el-col :span="leftcol">
       <img  src="../../../static/imgs/logo.png" alt="">
       <div class="layout menu">
        <el-menu default-active="1-2" class="el-menu-vertical-demo" :collapse="iscollapse">
          <!--/购物商城-->
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>购物商城</template>
        <el-menu-item-group>
           <router-link to="/admin/goodslist">
          <el-menu-item index="1-1">内容管理</el-menu-item>
         </router-link>
          <el-menu-item index="1-2">类别管理</el-menu-item>
          <el-menu-item index="1-3">评论管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
<!--订单管理-->
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>订单管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">订单列表</el-menu-item>
        
        </el-menu-item-group>
      </el-submenu>
  
    </el-menu>
    </div>
  </el-col>
<!--右边区域-->
     <el-col :span="rightcol">
       <el-row>
         
         <el-col :span="24">
           <div class="topbg">
           <el-row>
             <el-col :span="1">
               <!--控制菜单的展开和收缩的图标-->
               <i class="el-icon-menu layout area" @click="showhide"></i>
             </el-col>
             <el-col :span="23">
               <span>欢迎yuson登陆</span>
               <el-dropdown split-button type="primary">
 更多功能
  <el-dropdown-menu slot="dropdown">  
    <el-dropdown-item>修改密码</el-dropdown-item>
    <el-dropdown-item>注销登陆</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
             </el-col>
           </el-row>
         </div>
         </el-col>
       </el-row>
       <el-row>
         <el-col :span="24">
           <router-view></router-view>
         </el-col>
       </el-row>
     </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
 
  data () {
    return {
      //这个属性是用来控制el-menu菜单的展开和收缩的
      //false：展开  true：收缩
     iscollapse:false,
    //  控制左边菜单
     leftcol:4,
     //控制右边菜单
     rightcol:20
    }
  },
  methods:{
    showhide(){
      //控制菜单的展开和收缩
      //当菜单是收缩状态的时候，left等于1，rightcol等于23
      //当菜单张展开的时候复原
this.iscollapse=!this.iscollapse;
if(this.iscollapse){
this.leftcol=1;
this.rightcol=23;
}else{
this.leftcol=4;
this.rightcol=20;
}
    }
  }
}
</script>