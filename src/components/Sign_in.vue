<template>
    <div class="box">
      <div class="topk">
        <div class="flex_center">
          <span>
             <img src="../../static/img/logo.png" alt="">
          </span>
         
          <div class="lx">
            <p><i class="el-icon-info"></i>服务热线：021-66699888 | 15800595098</p>
            <p style="padding-right:20px;"><i class="el-icon-info"></i>微信公众号</p>
          </div>
        </div>
      </div>
      <div class="signk">
        <div>
          <img src="../../static/img/index-p.png" alt="">
          <div class="login_k">
            <img :src="showdl?'../../static/img/zhdl.png':'../../static/img/sjdl.png'" @click="showdl=!showdl" alt="">
            <div>
              <p @click="role=false" :style="{'color':role?'#767676':'#0363b1'}"><i class="el-icon-s-home" :style="{'color':role?'#767676':'#0363b1'}"></i>企业登录</p>
              <p @click="role=true" :style="{'color':role?'#0363b1':'#767676'}"><i class="el-icon-s-custom" :style="{'color':role?'#0363b1':'#767676'}"></i>律师登录</p>
            </div>
            <div class="input_q">
              <el-input class="login_in"
                        placeholder="请输入内容"
                        prefix-icon="el-icon-mobile-phone"
                        v-model="userName">
              </el-input>
            </div>
            <div class="input_q">
              <el-input :style="{width:showdl?'210px':'100%'}" class="login_in"
                placeholder="请输入内容"
                prefix-icon="el-icon-document-checked"
                v-model="password">
              </el-input>
              <div class="code" @click="refreshCode" v-if="showdl">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
            </div>
            <div class="input_q">
                <el-input class="login_in"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-lock"
                  v-model="checkCode">
                </el-input>
                <el-button type="primary" class="login_bnt" v-if="showdl">发送验证码</el-button>
              <div class="code" @click="refreshCode" v-if="showdl==false">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
              </div>
            <el-button type="primary" class="login_bnt logbnt" @click="MobileLogin" v-if="showdl">登录</el-button>
            <el-button type="primary" class="login_bnt logbnt" @click="AccountLogin" v-else>登录</el-button>
            <p>没有账号？请<span style="color: #1aa9ed;cursor: pointer">立即注册</span></p>
          </div>
        </div>
      </div>
      <p>沪ICP备36589628548号  沪网安备51190202000002号</p>
      <p>Copyright @ 2019-2030 Xunge.com All Right Reserved 上海迅阁电子科技有限公司</p>
    </div>
</template>

<script>
  import SIdentify from './home/SIdentify'
    export default {
      name: "Sign_in",
      components: { SIdentify },
      data(){
        return{
          showdl:false,
          role:false,
          identifyCodes: "1234567890",
          identifyCode: "",
          userName:"",
          password:'',
          checkCode:"",
        }
      },
      mounted() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      methods: {
        MobileLogin(){
          // this.$router.push({
          //   path:'/index/home'
          // })
          alert(111)
        },
        AccountLogin(){
          this.$http.post('/api/api/auth/login/company',
            {userName:this.userName,password:this.password}).then(function (res) {
            if (res.body.code == 200) {
              localStorage.setItem("token",res.body.data.token);
              console.log(localStorage.getItem('token'))
              this.$router.push({
                path:'/index/home',
                query: {
                  token:res.body.data.token
                }
              })
            }else{
              this.$message.error(res.body.msg);
            }
          })
        },
        randomNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
          this.identifyCode = "";
          this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
          for (let i = 0; i < l; i++) {
            this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
              ];
          }
          console.log(this.identifyCode);
        }
      },
    }
</script>

<style scoped>
.flex_center{
  display: flex;
  flex-direction: row;
  align-items: center;
}
  .box{
    width: 100%;
    height: 100vh;
    background: #002349;
  }
  .box>p{
    text-align: center;
    color: #fff;
    margin-top: 5px;
  }
  .box>p:nth-of-type(1){
    margin-top: 80px;
  }
  .topk{
    width: 100%;
    /* min-width: 670px; */
    height: 120px;
    background: #ffffff;
    box-sizing: border-box;
  }
  .topk>div{
    /* width: 1200px; */
    width:100%;
    height: 120px;
    /* line-height: 120px; */
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .topk img{
    width: 214px;
    height: 71px;
    position: relative;
    /* top: 25px; */
  }
  .signk{
    width: 100%;
    /* min-width: 670px; */
    height: 600px;
    background: url("../../static/img/index-bg.jpg") no-repeat 0 0 / 100% 100%;
  }
  .signk>div{
    /* width: 1200px; */
    width:100%;
    height: 600px;
    display: flex;
    margin: auto;
  }
  .signk>div>img{
    width: 397px;
    height: 358px;
    display: block;
    /* margin: auto; */
    margin:auto 100px;
    margin-right: 100px;
  }
  .login_k{
    width: 402px;
    height: 436px;
    background: #ffffff;
    border-radius: 5px;
    margin: auto;
    position: absolute;
    right: 100px;
    top:180px;
    padding: 60px 36px 0 36px;
    box-sizing: border-box;
  }
  .login_k>img:nth-of-type(1){
    position: absolute;
    top: 28px;
    right: 10px;
    cursor: pointer;
  }
  .login_k>div:nth-of-type(1){
    display: flex;
    font-size: 14px;
    color: #666;
    cursor: pointer;
  }
  .login_k>div:nth-of-type(1)>p:nth-of-type(1){
    padding-right: 15px;
    border-right: 1px solid #cdcdcd;
  }
  .login_k>div:nth-of-type(1)>p:nth-of-type(2){
    padding-left: 15px;
    border-left: 1px solid #cdcdcd;
  }
  .login_k>div:nth-of-type(1) i{
    font-size: 18px;
    margin-right: 5px;
    color: #d0d0d0;
  }
  .login_k>p{
    text-align: right;
    margin-top: 20px;
    color: #767676;
  }
  .lx{
    display: flex;
    font-size: 14px;
    color: #323232;
  }
  .lx>p:nth-of-type(2){
    color: #656565;
    margin-left: 30px;
  }
  .lx i{
    font-size: 25px;
    margin-right: 10px;
    position: relative;
    top: 4px;
  }
  .login_in{
    margin-top: 20px;
    margin-right: 10px;
  }
  .login_bnt{
    width: 100%;
    margin-top: 20px;
    background: #ecf3fb;
    color: #87b5e1;
  }
  .input_q{
    display: flex;
  }
  .input_q:nth-of-type(3)>.login_in, .input_q:nth-of-type(4)>.login_in{
    width: 210px ;
  }
  .input_q>.login_bnt{
    width: 100px;
    text-align: center;
  }
  .code {
    width: 90px;
    height: 40px;
    margin-top: 20px;
  }
  .logbnt{
    background: #0363b1;
    color: #fff;
  }
</style>
