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
      <div class="Enterprises gs-val" @click="showcx=true">
        <div class="gs-xx">
          <p>迅阔电子科技有限公司</p>
          <ul>
            <li>法律</li>
            <li>法律</li>
            <li>法律</li>
            <li>法律</li>
            <li>法律</li>
          </ul>
          <p>2018年关于阅读作文的汇总（高中）用心阅读_1000字阅读是一种幸福_900字活着就要阅读_1200字浅谈你的阅读成就了你_1500字阅读的奇幻旅程_1500字阅读的色彩_1000字快乐的家庭阅读PK赛_800字阅读随想_900字阅读_1500字阅读的奇幻旅程_1500字阅读的色彩_1000字快乐的家庭阅读PK赛_800字阅读随想_900字阅读</p>
        </div>
      </div>
    </div>
    <el-pagination style="text-align: center;margin-top: 30px;"
                   background
                   layout="prev, pager, next"
                   :total="1000">
    </el-pagination>
    <div class="cx_message" v-if="showcx">
      <div>
        <p>法规详情</p><img @click="showcx=false" src="../../../static/img/esc.png" alt="">
      </div>
      <div class="message_val">
        <p>关于全面推开行业协会商会与行政机关脱钩改</p>
        <p>发布时间：2019.07.26</p>
        <pre>
             　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

             　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

             　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

             　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

             　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.


 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.


 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

 　　据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.
            据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.据国家统计局数据：截止 2018?.

          </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "statute",
    data(){
      return{
        arr:['企业','法人/股东','律所','律师','法律法规'],
        snumber: 4,
        dnumber: 0,
        hnumber: 0,
        searchVal:'',
        showcx:false,
        sign:'法律法规',
        conditiond:['全部','北京','江苏','浙江','福建','广东','上海','重庆','四川'],
        conditionh:['全部','制造业','批发和零售业','金融业'],
      }
    },
    methods:{
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
  .k{
    background: #17a1ff;
    color: #ffffff !important;
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
    margin-left: 20px;
  }
  .gs-xx>p:nth-of-type(2){
    padding-top: 15px;
    margin-left: 20px;
  }
  .gs-xx>ul{
    display: flex;
  }
  .gs-xx>ul>li{
    display: block;
    border-left: 1px solid #666;
    padding: 0 10px;
    color: #666666;
  }
  .gs-xx>ul>li:nth-of-type(1){
    border-left: none;
    margin-left: 10px;
  }
  .gs-xx>p>span:nth-of-type(1){
    color: #a3a3a3;
    margin-right: 10px;
  }
  .gs-xx>p>span:nth-of-type(2){
    color: #333;
    margin-right: 20px;
  }
  .gs-xx>ul>li>span:nth-of-type(1){
    color: #a3a3a3;
    margin-right: 10px;
  }
  .gs-xx>ul>li>span:nth-of-type(2){
    color: #333;
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
    /* height: 810px; */
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
    z-index: 10;
  }
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
    height: 810px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
  }
</style>
