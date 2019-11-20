<template>
    <div class="box">
      <div class="hm-lef">
        <div style="height:auto;">
          <div style="padding-bottom:5px;">
            <div class="ts">
              <p>公司信息</p>
            </div>
            <div style="padding-top: 15px" class="gs-val">
              <img src="../../../static/img/ht.png" alt="">
              <div class="gs-xx">
                <p><span>公司名称:</span><span style="color: #055091;font-weight: bold">{{panyArr.companyName}}</span><span style="color: #00cc00;">【已认证】</span></p>
                <p><span>企业法人:</span><span>{{panyArr.corpName}}</span></p>
                <p><span>注册资本:</span><span>￥500,000</span></p>
                <p><span>公司地址:</span><span>{{panyArr.officeAddress}}</span></p>
                <p><span>企业电话:</span><span>{{panyArr.phone}}</span></p>
              </div>
              <el-button class="xg-zl" type="primary" @click="toroute('/index/authentication')">修改资料</el-button>
            </div>
          </div>
          <div style="position: relative;">
            <div class="ts">
              <p>密码强度</p>
            </div>
            <div class="qr">
              <el-progress  type="circle" :width='100':percentage="value" :format="format"></el-progress>
              <div class="zt">
                <div>
                  <p></p>
                  <p>弱</p>
                </div>
                <div>
                  <p></p>
                  <p>中</p>
                </div>
                <div>
                  <p></p>
                  <p>强</p>
                </div>
              </div>
              <el-button type="primary" class="" @click="toroute('/index/ChangePass')" style="width: 100px;height: 40px; position: absolute; bottom: 5px; left: 50%;margin-left:-50px;background: #26c6da;border-color: #26c6da;">修改密码</el-button>
            </div>

          </div>
        </div>
        <div style="margin:5px 0;">
          <div class="ts">
            <p>诚信动态</p>
            <p @click="toroute('/index/Sincerity')">+更多</p>
          </div>
          <ul class="dt-xx">
            <li @click="getById(item.id),showcx=true" v-for="item in honestyArr">
              <p><span>·&nbsp{{item.title}}</span><span>{{item.puhlishDate}}</span></p>
              <p>访问次数:{{item.visitCount}}</p>
            </li>
          </ul>
        </div>
        <div>
          <div class="ts">
            <p>政策法规</p>
            <p @click="toroute('/index/Morepolicy')">+更多</p>
          </div>
          <ul class="dt-xx">
            <li @click="getById(item.id),showcx=true" v-for="item in policyArr">
              <p><span>·&nbsp{{item.title}}</span><span>{{item.puhlishDate}}</span></p>
              <p>访问次数:{{item.visitCount}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="hm-rig">
        <div>
          <div class="ts">
            <p>企业黑名单</p>
            <p @click="toroute('/index/blacklist')">+更多</p>
          </div>
          <ul class="dt-xx xt-gg">
            <li v-for="item in blacklistArr">
              <p style="font-weight: inherit"><span style="color: #333;font-weight: inherit">·&nbsp{{item.companyName}}</span></p>
            </li>
          </ul>
        </div>
        <div>
          <div class="ts">
            <p>系统公告</p>
            <p>+更多</p>
          </div>
          <ul class="dt-xx xt-gg">
            <li v-for="item in noticeArr" @click="getById(item.id);showcx=true">
              <p><span>·&nbsp{{item.title}}</span></p>
              <p>{{item.puhlishDate}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="cx_message" v-if="showcx">
        <div>
          <p>诚信动态</p><img @click="showcx=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <p>{{bodyget.title}}</p>
          <p>发布时间：{{bodyget.puhlishDate}}</p>
          <pre v-html="bodyget.content">
             　
          </pre>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
          return {
            value: 30,
            showcx: false,
            bodyget:'',
            panyArr:[],
            honestyArr:[],
            policyArr:[],
            noticeArr:[],
            blacklistArr:[],
          }
      },
      mounted() {
        let that = this;
        //2.2.公司信息
        this.$http.get('/api/api/user/companyInfo/getBaseCompanyInfo').then(function (res) {
          if (res.body.code==200){
            that.panyArr = res.body.data;
            if (that.panyArr.strength == 1) {
              that.value = 30;
            }else if (that.panyArr.strength == 2) {
              that.value = 60;
            } else{
              that.value = 90;
            }
            that.$emit('getMessage',this.panyArr)
          }else{
            this.$message.error(res.body.msg);
          }
        });
        //2.3.诚信动态
        this.$http.get('/api/api/data/news/honesty/smallList').then(function (res) {
          if (res.body.code==200){
            that.honestyArr=res.body.data;
          }else{
            this.$message.error(res.body.msg);
          }
        });
        //2.4.政策法规
        this.$http.get('/api/api/data/news/policy/smallList').then(function (res) {
          if (res.body.code==200){
            that.policyArr=res.body.data;
          }else{
            this.$message.error(res.body.msg);
          }
        });
        //2.5.系统公告
        this.$http.get('/api/api/data/news/notice/smallList').then(function (res) {
          if (res.body.code==200){
            that.noticeArr=res.body.data;
          }else{
            this.$message.error(res.body.msg);
          }
        });

        //2.6.企业黑名单
        this.$http.get('/api/api/user/company/blacklist/smallList').then(function (res) {
          if (res.body.code==200){
            that.blacklistArr=res.body.data;
          }else{
            this.$message.error(res.body.msg);
          }
        });
      },
      methods: {
        getById(id){
          this.$http.get('/api/api/data/news/getById?id='+id).then(function (res) {
            if (res.body.code==200){
              this.bodyget=res.body.data;
            }else{
              this.$message.error(res.body.msg);
            }
          });
        },
        format(percentage) {
          return percentage <=50 ? '弱' : '强';
        },
        toroute(v){
          this.$router.push(v)
        }
      }
    }
</script>
<style scoped>
  .message_val>pre{
    white-space: pre-wrap;
    word-wrap: break-word;
    padding-top: 30px;
  }
  .message_val>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    padding-top: 22px;
  }
  .message_val>p:nth-of-type(2){
    font-size: 14px;
    color: #999999;
    text-align: center;
    padding: 11px;
    border-bottom: 1px solid #ccc;
  }
  .message_val{
    height: calc(810px - 85px);
    padding: 0 20px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 20px 20px 30px 0;
  }
  /*滚动条样式*/
  .message_val::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .message_val::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #1d89e4;
  }
  .message_val::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .cx_message>div:nth-of-type(1)>img{
    width: 20px;
    height: 20px;
    position: relative;
    top: 7px;
    margin-right: 10px;
  }
  .cx_message>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    height: 35px;
    background: #1d89e4;
    color: #ffffff;
    line-height: 35px;
    padding-left: 20px;
  }
  .cx_message{
    width: 810px;
    /* height: 810px; */
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
  }
  .box{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
  .hm-lef{
    width: 72%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hm-lef>div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
  }
  .hm-lef>div:nth-of-type(1)>div:nth-of-type(1){
    width: 71%;
    height: 100%;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 20px;
    background: #ffffff;
    overflow: hidden;
  }
  .hm-lef>div:nth-of-type(1)>div:nth-of-type(2){
    width: 26%;
    height: 100%;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 5px;
    background: #ffffff;
    padding: 0 20px;
    overflow: hidden;
  }
  .hm-lef>div:nth-of-type(1){
    width: 100%;
    height: 32%;
  }

  .hm-lef>div:nth-of-type(2){
    width: 100%;
    height: 32%;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 5px;
    background: #ffffff;
    padding: 0 10px;
    overflow: hidden;
  }
  .hm-lef>div:nth-of-type(3){
    width: 100%;
    height: 32%;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 5px;
    background: #ffffff;
    padding: 0 10px;
    overflow: hidden;
  }
  .hm-rig{
    width: 25.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hm-rig>div{
    width: 100%;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 5px;
    background: #ffffff;
    padding: 0 20px;
    overflow: hidden;
  }
  .hm-rig>div:nth-of-type(1){
    height: 55%;
  }
  .hm-rig>div:nth-of-type(2){
    height: 42%;
  }
  .ts{
    height: 45px;
    border-bottom: 1px solid #dfdfdf;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
  }
  .ts>p:nth-of-type(1){
    width: 80px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    border-bottom: 1px solid #1f88e4;
  }
  .ts>p:nth-of-type(2){
    color: #777;
    font-size: 15px;
    cursor: pointer;
  }
  .gs-val{
    display: flex;
    position: relative;
  }
  .gs-val>img{
     margin-left: 5px;
    margin-right: 20px;
  }
  .gs-val>div{
    font-size: 14px;
    padding-top: 5px;
  }
  .gs-val>div>p{
    margin-bottom: 14px;
  }
  .gs-val>div>p>span:nth-of-type(1){
    color: #a3a3a3;
    margin-right: 10px;
  }
  .gs-val>div>p>span:nth-of-type(2){
    color: #333;
    margin-right: 20px;
  }
  .xg-zl{
    width: 100px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #26c6da;
    border-color: #26c6da;
  }
  .bg{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: #ccc;
    position: relative;
    margin: 20px auto;
  }
  .circle-right, .circle-left, .mask-right, .mask-left{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .circle-right, .circle-left{
    background: skyblue;
  }
  .mask-right, .mask-left{
    background: #ccc;
  }
  .circle-right, .mask-right{
    clip: rect(0,200px,200px,100px);
  }
  .circle-left, .mask-left{
    clip: rect(0,100px,200px,0);
  }
  .text{
    width: 160px;
    height: 160px;
    line-height: 160px;
    text-align: center;
    font-size: 34px;
    color: deepskyblue;
    border-radius: 100%;
    background: #fff;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .qr{
    text-align: center;
    margin-top: 10px;
  }
  .zt{
    display: flex;
    justify-content: space-between;
    box-sizing:border-box;
    padding: 0 40px;
  }
  .zt>div{
    display: flex;
    font-size: 14px;
    line-height: 14px;
    color: #777;
  }
  .zt>div>p:nth-of-type(1){
    height: 10px;
    width: 10px;
    margin-right: 5px;
    background: #1f88e4;
    position: relative;
    top: 2px;
  }
  .zt>div:nth-of-type(2)>p:nth-of-type(1){
    height: 10px;
    width: 10px;
    margin-right: 5px;
    background: #ff9800;
    position: relative;
    top: 2px;
  }
  .zt>div:nth-of-type(3)>p:nth-of-type(1){
    height: 10px;
    width: 10px;
    margin-right: 5px;
    background: #ff3300;
    position: relative;
    top: 2px;
  }
  .dt-xx>li{
    width: 100%;
    font-size: 14px;
    color: #333;
    display: flex;
    justify-content: space-between;
    line-height: 38px;
    padding-left: 20px;
    box-sizing: border-box;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .dt-xx>li:hover{
    color: #0265cd !important;
    font-weight: initial;
    cursor:pointer;
  }
  .dt-xx>li>p>:hover{
    color: #0265cd !important;
    font-weight: initial;
  }
  .bt-xx>li>p{
    min-width: 100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .dt-xx>li:nth-of-type(1)>p:nth-of-type(1){
    color: #0464ca;
    font-weight: bold;
  }
  .dt-xx>li>p:nth-of-type(2){
    margin-right: 40px;
  }
  .dt-xx>li>p>span:nth-of-type(1){
    margin-right: 20px;
  }
  .xt-gg>li{
    border-bottom: 1px solid #dfdfdf;
    padding: 0;
  }
  .xt-gg>li>p:nth-of-type(2){
    margin-right: 0;
    color: #777;
  }
</style>
