<template>
    <div class="box">
      <div class="change">
        <p>修改密码</p>
        <div>
          <p>旧密码：</p><input type="text" v-model="oldPassword" placeholder="请输入旧密码"><span>*</span>
        </div>
        <div>
          <p>新密码：</p><input type="text" v-model="newPassword" placeholder="请输入新密码"><span>*</span>
        </div>
        <div>
          <p>确认密码：</p><input type="text" v-model="confirmPassword" placeholder="请再次输入新密码"><span>*</span>
        </div>
        <div class="bnt">
          <button @click="btn()">确定</button>
          <button @click="fan()">取消</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ChangePass",
        data(){
          return{
            oldPassword:'',
            newPassword:'',
            confirmPassword:'',
          }
        },
      methods:{
        btn(){
          this.$http.post('/api/api/admin/auth/user/changePwd',{
            oldPassword:this.oldPassword,
            newPassword:this.newPassword,
            confirmPassword:this.confirmPassword
          }).then(function (res) {
            if (res.body.code == 200){
              this.$message.success('密码修改成功');
              this.$router.push('/index/home')
            }else{
              this.$message.error(res.body.msg);
            }
          })
        },
        fan(){
          this.$router.push('/index/home')
        },
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .change{
    width: 450px;
    height: 300px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .change>p{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding-top: 30px;
    margin-bottom: 10px;
  }
  .change>div{
    display: flex;
    margin-top: 10px;
  }
  .change>div>p{
    width: 120px;
    text-align: right;
    line-height: 38px;
  }
  .change>div>input{
    width: 60%;
    height: 36px;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    padding-left: 10px;
  }
  .change>div>span{
    color: #ff0000;
    line-height: 38px;
    margin-left: 4px;
  }
  .bnt{
    margin: 0 15px;
    border-top: 1px solid #d7d7d7;
    box-sizing: border-box;
    padding: 0 60px;
    padding-top: 20px;
    margin-top: 20px !important;
  }
  .bnt>button{
    width: 160px;
    height: 38px;
    border-radius: 5px;
    outline: none;
    border:none;
    background: #358ed7;
    color: #fff;
    cursor: pointer;
  }
  .bnt>button:nth-of-type(2){
    background: #999;
    margin-left: 20px;
  }
</style>
