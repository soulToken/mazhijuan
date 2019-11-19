<template>
    <div class="box">
      <div>
        <ul>
          <li v-for="(a,index) in arr" @click="change(a,index)" :class="{ red:snumber == index}">{{a}}</li>
        </ul>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="searchVal">
            <el-button slot="append" icon="el-icon-search" style="background: #1d89e4;color: #fff;" @click="search()"></el-button>
          </el-input>
        </div>
      </div>
      <div class="condition">
        <div>
          <div>所属地区</div>
          <div>
            <ul>
              <li v-for="(a,index) in conditiond" @click="dchange(a,index)" :class="{ k:dnumber == index}">{{a}}</li>
            </ul>
          </div>
        </div>
        <div>
          <div>所属行业</div>
          <div>
            <ul>
              <li v-for="(a,index) in conditionh" @click="hchange(a,index)" :class="{ k:hnumber == index}">{{a}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="Enterprises gs-val" @click="showqy=true">
          <img src="../../../static/img/ht.png" alt="">
          <div class="gs-xx">
            <p>迅阔电子科技有限公司</p>
            <ul>
              <li><span>企业法人:</span><span>戴老板</span></li>
              <li><span>成立日期:</span><span>2009-10-25</span></li>
              <li><span>注册资本:</span><span>￥500,000</span></li>
              <li><span>企业电话:</span><span>021-87654321</span></li>
            </ul>
            <p><span>公司地址:</span><span>上海市普陀区曹杨路</span></p>
          </div>
        </div>
        <div class="Enterprises gs-val">
          <img src="../../../static/img/ht.png" alt="">
          <div class="gs-xx">
            <p>迅阔电子科技有限公司</p>
            <ul>
              <li><span>企业法人:</span><span>戴老板</span></li>
              <li><span>成立日期:</span><span>2009-10-25</span></li>
              <li><span>注册资本:</span><span>￥500,000</span></li>
              <li><span>企业电话:</span><span>021-87654321</span></li>
            </ul>
            <p><span>公司地址:</span><span>上海市普陀区曹杨路</span></p>
          </div>
        </div>
        <div class="Enterprises gs-val">
          <img src="../../../static/img/ht.png" alt="">
          <div class="gs-xx">
            <p>迅阔电子科技有限公司</p>
            <ul>
              <li><span>企业法人:</span><span>戴老板</span></li>
              <li><span>成立日期:</span><span>2009-10-25</span></li>
              <li><span>注册资本:</span><span>￥500,000</span></li>
              <li><span>企业电话:</span><span>021-87654321</span></li>
            </ul>
            <p><span>公司地址:</span><span>上海市普陀区曹杨路</span></p>
          </div>
        </div>
      </div>
      <div class="block" style="text-align: center;margin-top: 20px">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="tableData.pageSize"
          layout="prev, pager, next, jumper"
          :total="tableData.totalSize">
        </el-pagination>
      </div>
      <div class="cx_message" v-if="showqy">
        <div>
          <p>诚信动态</p><img @click="showqy=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <div>
            <p>企业信息</p>
            <div>
              <div>
                <p>企业全称</p>
                <p>社会信用代码</p>
                <p>企业电话</p>
                <p>企业传真</p>
                <p>办公地址</p>
                <p>企业介绍</p>
              </div>
              <div>
                <p>寻个撒打双打</p>
                <p>123684685</p>
                <p>010-185465</p>
                <p>010-185465</p>
                <p>撒旦基数大阿里斯顿</p>
                <p>阿三打扫家打扫打扫打扫大大缩短阿三打扫打扫打扫打扫的撒旦阿三打扫家打扫打扫打扫大大缩短阿三打扫打扫打扫打扫的撒旦阿三打扫家打扫打扫打扫大大缩短阿三打扫打扫打扫打扫的撒旦</p>
              </div>
              <div>
                <img src="../../../static/img/ht.png" alt="">
              </div>
            </div>
          </div>
          <div>
            <p>法人信息</p>
            <div>
              <div style="width: 160px;">
                <p>姓名</p>
                <p>性别</p>
                <p>身份证号码</p>
                <p>手机</p>
              </div>
              <div style="width: 260px;">
                <p>房建</p>
                <p>男</p>
                <p>010-185465</p>
                <p>010-185465</p>
               </div>
              <div class="shenid">
                <img src="../../../static/img/ht.png" alt="">
                <img src="../../../static/img/ht.png" alt="">
              </div>
            </div>
          </div>
          <div>
            <p>联系人信息</p>
            <div>
              <div style="width: 160px;">
                <p>姓名</p>
                <p>手机</p>
                <p>邮箱</p>
              </div>
              <div style="width: 260px;">
                <p>房建</p>
                <p>男</p>
                <p>010-185465</p>
              </div>
              <div class="shenid">
                <img src="../../../static/img/ht.png" alt="">
                <img src="../../../static/img/ht.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Enterprise",
      data(){
          return{
            arr:['企业','法人/股东','律所','律师','法律法规'],
            snumber: 0,
            dnumber: 0,
            hnumber: 0,
            searchVal:'',
            showqy:false,
            sign:'企业',
            conditiond:['全部','北京','江苏','浙江','福建','广东','上海','重庆','四川'],
            conditionh:['全部','制造业','批发和零售业','金融业'],
            currentPage: 1,
            tableData:{
              pageNum:1,
              pageSize:15,
              totalSize:183,
              totalPages:13,
              result:[{
                companyId:1002,
                companyName: "上海迅阁电子科技有限公司",
                corpName:"戴旭宏-06-29",
              },{
                companyId:1003,
                companyName: "上海迅阁电子科技有限公司",
                corpName:"戴旭宏-06-29",
              },]
            }
          }
      },
      methods:{
        handleCurrentChange(val) {
          this.$http.post('../api/user/companyInfo/blacklist/findPage',{pageNum:val,pageSize:15,}).then(function (res) {
            if (res.body.data==200){
              that.tableData=res.body.data;
            }else{
              this.$message.error(res.body.msg);
            }
          });
        },
          //搜索
        change(a,index) {
          this.sign= a;
          this.snumber= index;    //重要处
          if (this.sign == '企业'){
            this.$router.push({
              path:'/index/Enterprise',
              query: {
                val:this.searchVal
              }
            })
          }else  if (this.sign == '法人/股东'){
            this.$router.push({
              path:'/index/Shareholder',
              query: {
                val:this.searchVal
              }
            })
          }else  if (this.sign == '律所'){
            this.$router.push({
              path:'/index/Lawfirm',
              query: {
                val:this.searchVal
              }
            })
          }else  if (this.sign == '律师'){
            this.$router.push({
              path:'/index/Lawyer',
              query: {
                val:this.searchVal
              }
            })
          }else  if (this.sign == '法律法规'){
            this.$router.push({
              path:'/index/Statute',
              query: {
                val:this.searchVal
              }
            })
          }
        },
        dchange(a,index) {
          this.sign= a;
          this.dnumber= index;    //重要处
        },
        hchange(a,index) {
          this.sign= a;
          this.hnumber= index;    //重要处
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
  .box>div:nth-of-type(1){
    width: 540px;
    height: 90px;
    margin: auto;
  }
  .box>div:nth-of-type(1)>ul{
    display: flex;
  }
  .box>div:nth-of-type(1)>ul>li{
    height: 16px;
    font-size: 16px;
    line-height: 16px;
    color: #333;
    padding: 0 9px;
    display: block;
    border-right: 2px solid #cccccc;
    font-weight: bold;
    cursor: pointer;
  }
  .box>div:nth-of-type(1)>ul>li:nth-of-type(5){
    border-right-color: transparent;
  }
  .red{
    color: #1d89e4 !important;
  }

  .condition{
    width: 100%;
  }
  .condition>div{
    display: flex;
    border:1px solid #ccc;
    height: 45px;
    line-height: 50px;
    position: relative;
  }
  .condition>div:nth-of-type(1){
    border-bottom: none;
  }
  .condition>div>div:nth-of-type(1){
    width: 120px;
    text-align: center;
    background: #f9f9f9;
    color: #666;
    font-weight: bold;
  }
  .condition>div>div:nth-of-type(2){
    background: #fff;
    width: 100%;
  }
  .condition>div ul{
    display: flex;
    position: relative;
    top: 8px;
  }
  .condition>div ul>li{
    padding: 4px 8px;
    /*background: #17a1ff;*/
    line-height: 22px;
    text-align: center;
    margin-left: 20px;
    border-radius: 3px;
    color: #666;
    display: block;
    cursor: pointer;
  }
  .Enterprises{
    background: #fff;
    width: 100%;
    height: 165px;
    margin-top: 15px;
    cursor: pointer;
  }
  .gs-val{
    display: flex;
    position: relative;
  }
  .gs-val>img{
    width: 100px;
    height: 140px;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 20px;
  }
  .gs-val>div{
    font-size: 14px;
    padding-top: 5px;
  }
  .gs-val>div>p{
    margin-bottom: 14px;
  }

  .gs-xx>p:nth-of-type(1){
    font-size: 18px;
    font-weight: bold;
    padding-top: 30px;
  }
  .gs-xx>p:nth-of-type(2){
    padding-top: 15px;
  }
  .gs-xx>ul{
    display: flex;
  }
  .gs-xx>ul>li{
    display: block;
  }
  .gs-xx>p>span:nth-of-type(1){
    color: #666666;
    font-weight: bold;
    margin-right: 10px;
  }
  .gs-xx>p>span:nth-of-type(2){
    color: #666666;
    margin-right: 20px;
  }
  .gs-xx>ul>li>span:nth-of-type(1){
    color: #666666;
    font-weight: bold;
    margin-right: 10px;
  }
  .gs-xx>ul>li>span:nth-of-type(2){
    color: #666666;
    margin-right: 20px;
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
    width: 1000px;
    height: 810px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
    z-index: 10;
  }
  .message_val{
    margin: 20px;
    height: 740px;
    overflow-y: auto;
  }
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
  .message_val>div{
    border: 1px solid #ccc;
    margin: 0 15px;
    margin-top: 20px;
  }
  .message_val>div>p{
    margin: 0 10px;
    padding: 10px 15px;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    font-size: 16px;
    box-sizing: border-box;
  }
  .message_val>div>div{
    display: flex;
    padding: 30px 20px;
  }
  .message_val>div>div>div:nth-of-type(1){
    width: 270px;
    text-align: right;
    padding-right: 30px;
    border-right: 1px solid #ccc;
    color: #999;
    font-weight: bold;
    box-sizing: border-box;
  }
  .message_val>div>div>div:nth-of-type(1)>p{
    margin-bottom: 10px;
  }
  .message_val>div>div>div:nth-of-type(2){
    text-align: left;
    padding-left: 30px;
    box-sizing: border-box;
    margin-right: 10px;
  }
  .message_val>div>div>div:nth-of-type(2)>p{
    margin-bottom: 10px;
  }
  .shenid>img{
    width: 200px;
    height: 120px;
    margin-left: 20px;
  }
  .lsbox{
    display: flex;
    border: none !important;
  }
  .lsbox>img{
    height: 50px;
    width: 50px;
    margin-left: 80px;
    position: relative;
    top: 50px;
    margin-right: 80px;
  }
  .lsbox>div{
    padding: 0!important;
  }
  .lsbox>div>p{
    font-size: 14px;
    margin-bottom: 5px;
  }
  .lsbox>div>p>span{
    font-weight: bold;
  }
  .lsbox>div>p:nth-of-type(1){
    font-size: 18px;
    font-weight: bold;
  }
  .lsjj{
    border-left: none !important;
    border-right: none !important;
    margin-top: 10px!important;
    padding: 10px 0;
  }
  .lsjj>p:nth-of-type(1),.lstd>p:nth-of-type(1){
    font-size: 14px;
    border: none!important;
  }
  .lsjj>p:nth-of-type(2){
    font-weight: normal !important;
    text-indent:30px;
    border: none!important;
  }
  .lstd{
    border: none !important;
    margin-top: 0 !important;
  }
  .lstd>p,.lsjj>p{
    padding-left: 0!important;
    margin-left: 0!important;
  }
  .lsk{
    display: flex;
    flex-flow: wrap;
    padding: 0!important;
  }
  .lsk>div{
    width: 300px !important;
    height: 120px !important;
    border: 1px solid #ccc;
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
    text-align: left!important;
    display: flex;
    padding: 8px !important;
    box-sizing: border-box;
  }
  .timebox{
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 26px;
    background: url("../../../static/lawImage/year.png") no-repeat 0 0 / 100% 100%;
    position: absolute;
    right: 30px;
    top: 0px;
    font-size: 12px;
    color: #fff;
  }
  .character{
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .characterxx{
    padding-top: 15px;
    font-size: 14px;
  }
  .characterxx>p{
  }
  .characterxx>p:nth-of-type(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .characterxx>p:nth-of-type(2){
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .k{
    background: #17a1ff;
    color: #ffffff !important;
  }
</style>
