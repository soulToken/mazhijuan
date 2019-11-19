<template>
    <div class="box" style="min-width:1200px;">
      <p>资金管理</p>
      <div class="captop">
        <div>
          <img src="../../../static/img/ye.png" alt="">
          <div>
            <p>账户余额</p>
            <p>￥{{zijinarr.balance}}</p>
          </div>
        </div>
        <div>
          <img src="../../../static/img/bye.png" alt="">
          <div>
            <p>不可用余额</p>
            <p>￥{{zijinarr.frozenBalance}}</p>
          </div>
        </div>
        <div>
          <img src="../../../static/img/jl.png" alt="">
          <div>
            <p>资金明细</p>
            <p>共<span>5</span>条记录</p>
          </div>
          <p style="cursor: pointer" @click="detailed=true">查看</p>
        </div>
        <div>
          <div @click="czshow = true;currentType=1" style="cursor: pointer">充值</div>
          <div @click="Presentation = true;currentType=2" style="cursor: pointer">提现</div>
          <div @click="Transfer = true" style="cursor: pointer">转账</div>
          <div @click="szpass = true" v-if="zijinarr.setPayPassword == false" style="cursor: pointer">设置支付密码</div>
          <div @click="szpass = true" v-else style="cursor: pointer">设置支付密码</div>
        </div>
      </div>
      <div class="twh">
        <p>收支趋势</p>
        <div>
          <p>近一月</p>
          <p>近三月</p>
          <p>近半年</p>
          <p>近一年</p>
          <p>近三年</p>
        </div>
        <div id="main"></div>
      </div>
      <div class="back">
        <div>
          <p>银行卡<span style="color:#ff0000">（0）</span></p>
          <p @click="backbd=true" style="cursor: pointer">绑定银行卡</p>
        </div>
        <el-table
          :data="back"
          :stripe='true'
          border
          style="width: 100%;text-align: center">
          <el-table-column
            label="账户类型"
          >
            对公银行账户
          </el-table-column>
          <el-table-column
            prop="accountName"
            label="开户名"
          >
          </el-table-column>
          <el-table-column
            prop="cardNo"
            label="银行账号"
          >
          </el-table-column>
          <el-table-column
            prop="areaName"
            label="开户银行地区"
          >
          </el-table-column>
          <el-table-column
            prop="branchName"
            label="开户银行">
          </el-table-column>
          <el-table-column
            prop="bankName"
            label="开户支行名称">
          </el-table-column>
        </el-table>
      </div>

      <div class="cx_message" v-if="czshow">
      <div>
        <p>充值</p><img @click="czshow=false" src="../../../static/img/esc.png" alt="">
      </div>
      <div class="message_val">
        <p>【充值】</p>
        <div>
          <img src="../../../static/img/back.png" alt="">
          <p>中国工商银行（2391）</p>
          <img src="../../../static/img/xzj.png" alt="">
        </div>
        <p>充值金额：</p>
        <div class="je">
          <p>￥500</p>
          <p>￥1000</p>
          <p>￥2000</p>
          <p>￥5000</p>
          <p>￥10000</p>
          <p>￥20000</p>
        </div>
        <div class="qtje">
          <span>￥</span><input type="text" placeholder="请输入其他金额">
        </div>
        <p class="xy" @click="next">下一步</p>
      </div>
    </div>
      <div class="cx_message cz_message" v-if="czpass">
        <div>
          <p>充值</p><img @click="czpass=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <p>请输入充值密码</p>
          <div class="qtje">
          <input type="text" v-model="CpayPassword" placeholder=""><span @click="wjpass=true">忘记密码？</span>
          </div>
          <p class="xy" @click="goToPay">下一步</p>
        </div>
      </div>
      <div class="cx_message cz_message" v-if="czgood">
        <div>
          <p>{{currentType==2?'提现':''}}{{currentType==1?'充值':''}}</p><img @click="czgood=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val czgood_val">
          <div class="ts">
            <img src="../../../static/img/good.png" alt=""><p>{{currentType==1?'充值成功':''}}{{currentType==2?'提现成功':''}}</p>
          </div>
          <p>{{currentType==1?'充值成功':''}}{{currentType==2?'提现成功':''}}，进入资金管理中心查看账户余额</p>
          <p class="xy" @click="czgood=false">关闭</p>
        </div>
      </div>
      <div class="cx_message cz_message" v-if="szpass">
        <div>
          <p>设置充值密码</p><img @click="szpass=false" src="../../../static/img/esc.png" alt="">
        </div>
          <div class="szpass">
            <p>【设置充值密码】</p>
            <div>
              <p>支付密码：</p><input type="text" v-model="password" placeholder="请输入支付密码">
            </div>
            <div>
              <p>确认支付密码：</p><input type="text" v-model="newPassword" placeholder="请再次输入支付密码">
            </div>
            <p>此密码为充值、转账、提现统一支付密码。请妥善保管</p>
          </div>
          <p class="xy" @click="confirmPassword">确定</p>
      </div>
      <div class="cx_message cz_message" v-if="passgd">
        <div>
          <p>充值</p><img @click="passgd=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val czgood_val">
          <div class="ts">
            <img src="../../../static/img/good.png" alt=""><p>设置成功</p>
          </div>
          <p>此密码为充值、转账、提现统一支付密码。请妥善保管</p>
          <p class="xy" @click="passgd=false">确定</p>
        </div>
      </div>
      <div class="cx_message back_message" v-if="backbd">
        <div>
          <p>绑定银行卡</p><img @click="backbd=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="szpass backdb">
          <p style="margin-bottom: 30px">【绑定银行卡】</p>
          <div>
            <p>银行账户类型：</p><input type="text" v-model="accountType" readonly="readonly">
          </div>
          <div>
            <p>开户名：</p><input type="text" v-model="accountName" readonly="readonly">
          </div>
          <div>
            <p>银行账户：</p><input type="text" v-model="cardNo" placeholder="请输入支付密码">
          </div>
          <div>
            <p>开户银行所在地：</p><input type="text" v-model="areaName" placeholder="请再次输入支付密码">
          </div>
          <div>
            <p>开户银行：</p><input type="text" v-model="bankName" placeholder="请输入支付密码">
          </div>
          <div>
            <p>开户银行支行名称：</p><input type="text" v-model="branchName" placeholder="请再次输入支付密码">
          </div>
          <div>
            <p>银行预留手机号码：</p><input type="text" v-model="mobile" placeholder="请输入支付密码">
          </div>
          <div>
            <p>验证码：</p><input type="text" v-model="checkCode" placeholder="请再次输入支付密码">
          </div>
          <p></p>
        </div>
        <ul>
          <li @click="tobackbd">绑定</li>
          <li @click="backbd=false">取消</li></ul>
      </div>
      <div class="cx_message cz_message" v-if="backgd">
        <div>
          <p>绑定银行卡</p><img @click="backgd=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val czgood_val">
          <div class="ts">
            <img src="../../../static/img/good.png" alt=""><p>充值成功</p>
          </div>
          <p>交易前请前往“资金管理”页面设置支付密码，若已设置，请忽略。</p>
          <p class="xy" @click="backgd=false">确定</p>
        </div>
      </div>
      <div class="cx_message cz_message" v-if="wjpass">
        <div>
          <p>找回密码</p><img @click="wjpass=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="szpass wjpass">
          <p>【找回支付密码】</p>
          <div>
            <p>手机号：</p><input type="text" >
          </div>
          <div>
            <p>验证码：</p><input type="text" ><p>发送验证码</p>
          </div>
          <p></p>
        </div>
        <p class="xy" @click="next2">下一步</p>
      </div>
      <div class="cx_message cz_message" v-if="zhpass">
        <div>
          <p>找回密码</p><img @click="zhpass=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="szpass">
          <p>【找回支付密码】</p>
          <div>
            <p>新密码：</p><input type="text" placeholder="请输入新密码">
          </div>
          <div>
            <p>确认密码：</p><input type="text" placeholder="请再次输入新密码">
          </div>
          <p></p>
        </div>
        <p class="xy" @click="zhpass=false,zhpassgd=true">下一步</p>
      </div>
      <div class="cx_message cz_message" v-if="zhpassgd">
        <div>
          <p>找回密码</p><img @click="zhpassgd=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val czgood_val">
          <div class="ts">
            <img src="../../../static/img/good.png" alt=""><p>密码设置成功</p>
          </div>
          <p></p>
          <p class="xy" @click="zhpassgd=false">确定</p>
        </div>
      </div>
      <div class="cx_message back_message" v-if="Transfer">
        <div>
          <p>转账</p><img @click="Transfer=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="Transfer">
          <p style="margin-bottom: 10px;padding-top: 20px">【转账】</p>
          <div>
          <div>
            <p>收款方开户名：</p><input type="text" placeholder="请输入收款方开户名">
          </div>
          <div>
            <p>收款方银行账户：</p><input type="text" placeholder="请输入收款方银行账户">
          </div>
          <div>
            <p>收款方开户银行：</p><input type="text" placeholder="请选择开户银行">
          </div>
          </div>
          <p>充值金额：</p>
          <div class="je">
            <p>￥500</p>
            <p>￥1000</p>
            <p>￥2000</p>
            <p>￥5000</p>
            <p>￥10000</p>
            <p>￥20000</p>
          </div>
          <div class="qtje">
            <span>￥</span><input type="text" placeholder="请输入其他金额">
          </div>
          <p class="xy" @click="Transfer=false,TransferYes=true">下一步</p>
        </div>
      </div>
      <div class="cx_message cz_Transferyes" v-if="TransferYes">
        <div>
          <p>转账</p><img @click="TransferYes=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="Transfer Transferyes">
          <p>【转账】</p>
          <div>
            <div>
              <p>收款方开户名：</p><input type="text" placeholder="请输入收款方开户名" readonly="readonly">
            </div>
            <div>
              <p>收款方银行账户：</p><input type="text" placeholder="请输入收款方银行账户" readonly="readonly">
            </div>
            <div>
              <p>收款方开户银行：</p><input type="text" placeholder="请选择开户银行" readonly="readonly">
            </div>
          </div>
          <p style="text-align: right;padding-right: 30px;font-size: 14px">转账金额：<span style="color: #ff0000;font-size: 16px">￥30000.00</span></p>
        </div>
        <div class="TransferTs">
          <span style="font-weight: bold">温馨提示：</span>请仔细核对收款方信息
        </div>
        <p class="xy" @click="TransferYes=false,czpass=true">确认转账</p>
      </div>
      <div class="cx_message" v-if="Presentation">
        <div>
          <p>提现</p><img @click="Presentation=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <p>【提现】</p>
          <div>
            <img src="../../../static/img/back.png" alt="">
            <p>中国工商银行（2391）</p>
            <img src="../../../static/img/xzj.png" alt="">
          </div>
          <p style="padding-top: 40px">提现金额：</p>
          <div class="je">
            <p v-for="(a,index) in withdraw" @click="Tchange(a,index)" :class="{Selection:Tnumber == index}">￥{{a}}</p>
          </div>
          <div class="qtje">
            <span>￥</span><input type="text" v-model="cashValue" placeholder="请输入其他金额">
          </div>
          <p style="font-size: 14px;color: #666;margin-left: 110px">当前用户可用余额：{{zijinarr.balance-zijinarr.frozenBalance}}</p>
          <p class="xy" @click="goPay2">下一步</p>
        </div>
      </div>
      <div class="cx_message" v-if="czshow">
        <div>
          <p>充值</p><img @click="czshow=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <p>【充值】</p>
          <div>
            <img src="../../../static/img/back.png" alt="">
            <p>中国工商银行（2391）</p>
            <img src="../../../static/img/xzj.png" alt="">
          </div>
          <p>充值金额：</p>
          <div class="je">
            <p v-for="(a,index) in recharge" @click="Cchange(a,index)" :class="{Selection:Cnumber == index}">￥{{a}}</p>
          </div>
          <div class="qtje">
            <span>￥</span><input type="text" v-model="Cpay" placeholder="请输入其他金额">
          </div>
          <p class="xy" @click="goPay">下一步</p>
        </div>
      </div>
      <div class="cx_message detailed" v-if="detailed">
        <div>
          <p>资金明细</p><img @click="detailed=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="detailed_val">
          <div>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <p>TO</p>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Capital",
      data(){
          return{
            Cpay:null,
            cashValue:null,
            CpayPassword:'',
            cardNo:'',
            password:'',
            newPassword:'',
            areaName:'',
            bankName:'',
            branchName:'',
            mobile:'',
            checkCode:'',
            currentType:1, //2 代表提现
            czshow:false,
            czpass:false,
            czgood:false,
            szpass:false,
            passgd:false,
            backbd:false,
            backgd:false,
            wjpass:false,
            zhpass:false,
            zhpassgd:false,
            Transfer:false,
            TransferYes:false,
            Presentation:false,
            detailed:false,
            Cnumber:-1,
            Tnumber:-1,
            accountType:'对公银行账户',
            accountName:'上海迅阔电子科技有限公司',
            recharge:['500','1000','2000','5000','10000','20000'],
            withdraw:['500','1000','2000','5000','10000','20000'],
            options: [{
              value: '选项1',
              label: '全部'
            }, {
              value: '选项2',
              label: '昨天'
            }],
            zijinarr:'',
            back:'',
          }
        
      },
      watch:{
          Tnumber(){
            this.cashValue='';
          },
          Cnumber(){
            this.Cpay="";
          }
      },
      mounted() {
        this.getBanlance()
       
        let echarts = require('echarts');
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
          legend:{
            data:['隐藏收入','隐藏支出'],
            icon:'rect',
            itemWidth:15,
            itemHeight:15
          },
          grid:{
            left:'3%',
            right:'4%',
            bottom:'3%',
            containLabel:true
          },

          xAxis: {
            type: 'category',
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name:'隐藏支出',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          },{
            name:'隐藏收入',
            data: [1333, 1111, 777, 666, 1290, 1112, 1500],
            type: 'line'
          },
          ]
      })
      },
      methods:{
        getBanlance(){
            this.$http.get('/api/api/fund/accountInfo/getBalance').then(function (res) {
            if (res.body.code == 200){
              this.zijinarr = res.body.data;
            }else {
              this.$message.error(res.body.msg)
            }
           this.$http.get('/api/api/fund/bankcard/company/findAll').then(function (res) {
                if (res.body.code == 200){
                  this.back = res.body.data;
                }else {
                  this.$message.error(res.body.msg)
                }
              })
        })
        },
        confirmPassword(){
          if(!this.password){
               this.$message.error('请输入密码')
            return 
          }
          if(!this.newPassword){
            this.$message.error('请输入确认密码')
            return 
          }
          if(this.password!=this.newPassword){
            this.$message.error('未输入密码或两次密码不一致')
            return 
          }


          this.$http.post('/api/api/fund/accountInfo/setPayPassword',{
            payPassword:this.password,
            confirmPayPassword:this.newPassword
          }).then(function (res) {
            if(res.body.code==200){
                  this.szpass=false;this.passgd=true
            }else{
              this.$message.error(res.body.msg)
            }
          })
        },
        goPay(){
          if(this.Cpay){
            this.Cnumber=-1
          }
          if(!this.Cpay&&this.Cnumber==-1){
            this.$message.error('请选择金额或者输入金额')
            return
          }
          this.czshow=false;this.czpass=true;
        },
        goPay2(){
           if(this.cashValue){
            this.Tnumber=-1
          }
           if(!this.cashValue&&this.Tnumber==-1){
            this.$message.error('请选择金额或者输入金额')
            return
          }
          let  currentMoney=this.zijinarr.balance-this.zijinarr.frozenBalance;
           let money=this.Tnumber>-1?this.withdraw[this.Tnumber]:this.cashValue
         
         if(money>currentMoney){
             this.$message.error('超出可用余额')
            return
         }
            this.Presentation=false;this.czpass=true;
        },
        goToPay(){
         
          let type=this.currentType;
          let url=null;
          switch(type){
              case 2 :
              url='/api/api/fund/accountInfo/withdrawBalance';
              break;
              case 1:
              url='/api/api/fund/accountInfo/rechargeBalance'
              break;
          } 
            let money=0;
          if(this.currentType==2){
              money=this.Tnumber>-1?this.withdraw[this.Tnumber]:this.cashValue
          }else if(this.currentType==1){
              money=this.Cnumber>-1?this.recharge[this.Cnumber]:this.Cpay
          }
          this.$http.post(url,{
            bankcardId:2,
            payPassword:this.CpayPassword,
            amount:money
          }).then(function (res) {
            if(res.body.code==200){
                this.czpass=false;
                this.czgood=true;
                this.getBanlance()
            }else{
              this.$message.error(res.body.msg)
            }
          })


        },
        tobackbd(){
          this.backbd=false;
          this.backgd=true
          var self=this;
          this.$http.post('/api/api/fund/bankcard/company/bindCard',{
            cardNo:this.cardNo,
            areaName:this.areaName,
            bankName:this.bankName,
            branchName:this.branchName,
            mobile:this.mobile,
            checkCode:this.checkCode,
          }).then(function (res) {
            if(res.body.code==200){
              self.getBanlance()
            }
          })
        },
        next(){
          debugger;
            this.czshow=false;this.czpass=true
        },
        next2(){
          debugger;
            this.wjpass=false;this.zhpass=true
        },
        Tchange(a,index) {
          this.Tnumber= index;    //重要处
        },
        Cchange(a,index) {
          this.Cnumber= index;    //重要处
        },
      }
    }
</script>

<style scoped>
  .twh{
    margin-top: 20px;
    background: #fff;
    height: 420px;
    border-radius: 5px;
  }
  .twh>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
    padding-left: 30px;
    padding-top: 30px;
  }
  .twh>div:nth-of-type(1){
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
  }
  .twh>div:nth-of-type(1)>p{
    width: 80px;
    height: 30px;
    background: #f5f5f5;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
  }
  .twh>div:nth-of-type(2){
    width: 95%;
    height: 320px;
    margin: auto;
  }
  .box>p{
    font-weight: bold;
    margin-bottom: 30px;
  }
  .captop{
    display: flex;
    justify-content: space-between;
  }
  .captop>div{
    width: 24.6%;
    height: 120px;
    background: #358ed7;
    display: flex;
  }
  .captop>div>img{
    width: 50px;
    height: 50px;
    position: relative;
    top: 35px;
    margin-left: 30px;
  }
  .captop>div>div{
    width: 100%;
    margin-right: 50px;
    text-align: right;
    padding-top: 35px;
  }
  .captop>div>div>p:nth-of-type(1){
    color: #b6d6f1;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .captop>div>div>p:nth-of-type(2){
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
  .captop>div:nth-of-type(3)>div{
    width: 58%;
    margin-right: 15px;
  }
  .captop>div>p{
    width: 50px;
    height: 50px;
    background: #26689d;
    text-align: center;
    line-height: 50px;
    position: relative;
    top: 35px;
    color: #fff;
    font-weight: bold;
  }
  .captop>div:nth-of-type(4){
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    width: 20%;
  }
  .captop>div:nth-of-type(4)>div{
    width: 100px;
    height: 50px;
    background: #26c6da;
    color: #fff;
    text-align: center;
    line-height: 50px;
    padding: 0;
    font-size: 14px;
    margin-right: 20px;
  }
  .captop>div:nth-of-type(4)>div:nth-of-type(3), .captop>div:nth-of-type(4)>div:nth-of-type(4){
    margin-top: 20px;
  }
  .back>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    margin-top: 20px;
    background: #fff;
    font-weight: bold;
    padding-top: 20px;
  }
  .back>div:nth-of-type(1)>p:nth-of-type(1)>span{
    color: red;
  }
  .back>div:nth-of-type(1)>p:nth-of-type(2){
    color: #358ed7;
  }
  .message_val{
    height: calc(640px - 85px);
    padding: 0 20px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 20px 20px 30px 0;
    padding-right: 0;
  }
  .message_val>p:nth-of-type(1){
    text-align: center;
    font-weight: bold;
    padding-top: 30px;
  }
  .message_val>p:nth-of-type(2){
    font-weight: bold;
    padding-left: 60px;
    padding-top: 60px;
  }
  .je{
    width: 380px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
  }
  .je>p{
    width: 120px;
    height: 70px;
    background: #ececec;
    text-align: center;
    line-height: 70px;
    margin-top: 20px;
    border-radius: 10px;
  }
  .message_val>div:nth-of-type(1){
    width: 380px;
    height: 80px;
    background: #26c6da;
    margin: auto;
    margin-top: 20px;
    position: relative;
  }
  .message_val>div:nth-of-type(1)>img:nth-of-type(1){
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 30px;
  }
  .message_val>div:nth-of-type(1)>img:nth-of-type(2){
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 30px;
  }
  .message_val>div:nth-of-type(1)>p{
    width: 170px;
    height: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-weight: 600;
    margin: auto;
  }
  .message_val>div:nth-of-type(1)>p{
    width: 170px;
    height: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-weight: 600;
    margin: auto;
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
    width: 550px;
    height: 640px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
  }
  .cz_message{
    height: 320px;
  }
  .cz_message>.message_val{
    height: calc(320px - 85px);
  }
  .cz_message>.message_val>p:nth-of-type(1){
    text-align: left;
    padding-left: 60px;
  }
  .cz_message>.message_val>p:nth-of-type(2){
    padding: 0px;
  }
  .cz_message>.message_val>div{
    background: transparent;
  }
  .cz_message>.message_val>div>span{
    font-weight: initial;
    font-size: 16px;
    color: #999999;
    position: relative;
    bottom: 8px;
    left: 16px;
  }
  .cz_message>.message_val>div>input{
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    width: 260px;
  }
  .qtje{
    width: 380px;
    margin: auto;
    padding-top: 20px;
  }
  .qtje>span{
    font-size: 50px;
    font-weight: bold;
  }
  .qtje>input{
    width: 310px;
    padding: 10px 0;
    border-left: 0;
    border-top:0 ;
    border-right: 0;
    position: relative;
    bottom: 10px;
    font-size: 16px;
    padding-left: 20px;
    outline: none;
  }
  .xy{
    width: 160px!important;
    height: 40px !important;
    background: #358ed7;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    margin: auto;
    margin-top: 10px;
  }
  .ts{
    display: flex;
    width: 330px !important;
    position: relative;
    left: 70px;
  }
  .ts>img{
    width: 35px;
    height: 35px;
  }
  .ts>p{
    color: #ff3300 !important;
    font-weight: bold!important;
    font-size: 20px!important;
  }
  .czgood_val>p:nth-of-type(1){
    font-weight: initial;
    font-size: 16px;
    text-align: center !important;
    color: #666;
    padding: 0 !important;
    margin-bottom: 50px;
  }
  .szpass>p:nth-of-type(1){
    text-align: center;
    padding-top: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .szpass>p:nth-of-type(2){
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .szpass>div{
    display: flex;
    margin-bottom: 15px;
  }
  .szpass>div>p{
    width: 100px;
    font-weight: bold;
    font-size: 14px;
    margin-left: 30px;
    text-align: right;
    line-height: 36px;
  }
  .szpass>div>input{
    width: 330px;
    height: 36px;
    border-radius: 5px;
    border:1px solid #d7d7d7;
    padding-left: 10px;
  }
  .Transfer>p:nth-of-type(1){
    text-align: center;
    padding-top: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .Transfer>p:nth-of-type(2){
      text-align: left;
      padding-top: 20px;
    font-weight: bold;
    margin-left: 80px;
  }
  .Transfer>div:nth-of-type(1){
    background: #f3f3f3;
    margin: 0 30px;
    padding: 20px 0;
    padding-right: 30px;
    border-radius: 10px;
  }
  .Transfer>div>div{
    display: flex;
    margin-bottom: 10px;
  }
  .Transfer>div>div>p{
    width: 120px;
    font-weight: bold;
    font-size: 14px;
    margin-left: 30px;
    text-align: right;
    line-height: 36px;
    margin-right: 10px;
  }
  .Transfer>div>div>input{
    width: 300px;
    height: 36px;
    border-radius: 5px;
    border:1px solid #d7d7d7;
    padding-left: 10px;
  }
  .cz_Transferyes{
    height: 400px;
  }
  .TransferTs{
    width: 480px;
    box-sizing: border-box;
    margin: auto;
    justify-content: space-between;
    padding: 10px ;
    padding-left: 0;
    border-top: 1px solid #d7d7d7;
    font-size: 14px;
    color: #999;
    margin-top: 15px;
  }
  .Transferyes>div>div{
    display: flex;
    margin-bottom: 0px;
  }
  .Transferyes>div>div>input{
    outline: none;
    border: none;
    font-size: 14px;
    background: #f3f3f3;
  }
  .back_message{
    height: 640px;
    width: 550px;
  }
  .backdb input{
    outline: none;
  }
  .backdb>div>p{
    width: 130px;
    margin-right: 10px;
  }
  .backdb>div:nth-of-type(1)>input{
    background: #f3f3f3;
    border: none;
    color: #358ed7;
    font-weight: bold;
  }
  .backdb>div:nth-of-type(2)>input{
    background: #f3f3f3;
    border: none;
    color: #ff0000;
    font-weight: bold;
  }
  .back_message>ul{
    width: 480px;
    display: flex;
    box-sizing: border-box;
    margin: auto;
    justify-content: space-between;
    padding: 30px 60px 0 60px;
    border-top: 1px solid #d7d7d7;
  }
  .back_message>ul>li{
    width: 160px;
    height: 40px;
    background: #358ed7;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    display: block;
  }
  .back_message>ul>li:nth-of-type(2){
    background: #999;
  }
  .wjpass>div:nth-of-type(2)>input{
    width: 206px;
  }
  .wjpass>div:nth-of-type(2)>p:nth-of-type(2){
    width: 110px;
    border: 1px solid #d2e3f4;
    background: #ecf3fb;
    color: #87b5e1;
    text-align: center;
    height: 35px;
    border-radius: 4px;
    margin-left: 10px;
  }
  .Selection{
    background: #def7fa !important;
    border: 1px solid #26c6da;
    color: #26c6da;
  }
  .detailed{
    width: 800px;
    height: 600px;
  }
  .detailed_val>div:nth-of-type(1){
    display: flex;
  }
  .block{
    width: 130px;
    height: 26px;
  }
</style>
