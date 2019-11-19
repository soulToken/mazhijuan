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
    </div>
      <template>
        <el-table
          :data="tableData"
          @cell-click="handle"
          border
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="律所名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="团队规模"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="所属地区">
          </el-table-column>
          <el-table-column
            prop="address"
            label="成立日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="电话">
          </el-table-column>
        </el-table>
      </template>
    <el-pagination style="text-align: center;margin-top: 30px;"
                   background
                   layout="prev, pager, next"
                   :total="1000">
    </el-pagination>
      <div class="cx_message" style="width: 700px;height: 750px;" v-if="showls">
        <div>
          <p>上海某某律所</p><img @click="showls=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <div class="lsbox">
            <img src="../../../static/img/esc.png" alt="">
            <div style="display: block">
              <p>上海某某律所</p>
              <p><span>执业证号:</span></p>
              <p><span>联系地址：</span></p>
              <p><span>成立时间：</span></p>
              <p><span>律所人数：</span></p>
              <p><span>所属地区：</span></p>
              <p><span>电话：</span></p>
            </div>
          </div>
          <div class="lsjj">
            <p>机构简介：</p>
            <p>
              XXX第世达世达世达世达撒大大阿达XXX第世达世
              达世达世达撒大大阿达XXX第世达世达世达世达撒大大阿达
              XXX第世达世达世达世达撒大大阿达
            </p>
          </div>
          <div class="lstd">
            <p>律师团队：</p>
            <div class="lsk">
              <div>
                <div class="timebox">
                  10年
                </div>
                <img class="character" src="../../../static/img/esc.png" alt="">
                <div class="characterxx">
                  <p>欧阳房建</p>
                  <p>执业证号：</p>
                  <p>6854645646546554645</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "Lawfirm",
    data(){
      return{
        arr:['企业','法人/股东','律所','律师','法律法规'],
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
        }],
        snumber: 2,
        dnumber: 0,
        hnumber: 0,
        searchVal:'',
        showls:false,
        sign:'律所',
        conditiond:['全部','北京','江苏','浙江','福建','广东','上海','重庆','四川'],
        conditionh:['全部','制造业','批发和零售业','金融业']
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
      handle(row, column, cell, event){
        console.log(row, column, cell, event)
        this.showls = true;
      }
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
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .condition>div{
    display: flex;
    border:1px solid #dfdfdf;
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
    font-size: 14px;
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
</style>
