<template>
  <div class="accounttmpl">
    <el-row>
      <el-col :span="8":offset="6">
<el-from :model="from" :rules="rules" ref="from1">
  <el-from-item>
    <el-from-item label="账号" prop="uname">
<el-input v-model="form.uname"></el-input>
</el-from-item>
 <el-from-item label="密码" prop="upwd">
<el-input v-model="form.upwd"></el-input>
</el-from-item>
<el-from-item label="">
  <el-button type="success" @click="login">登陆</el-button>
</el-from-item>
  </el-from-item>
</el-from>

      </el-col>

    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
 
     
  data () {
    return {
      from:{
        uname:'',
        upwd:''
      },
      rules:{
        uname:[
          {
            required:true,message:'请输入账号',trigger:'blur'
          },
        ],
          upwd:[
          {
            required:true,message:'请输入密码',trigger:'blur'
          },
        ],
      }
    }
  },
  methods:{
login(){
  this.$refs.form1.validate(valid=>{
    if(valid){
      this.$http.post('/admin/account/login',this.form)
      .then(res=>{
        if(res.data.status == 1){
          this.$message.error(res.data.message);

        }

        this.$router.push({
          name:'layout'
        });
      });
    }else{
      return false;
    }
  })
}
  }
}
</script>