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
    <div class="people_list">
      <div class="list" v-for="item in list" :data-id="item.attention" @click="lawDetails()">
        <div class="list_detail">
          <img :src="item.pic" alt="">
          <img src="../../../static/lawImage/year.png" alt="">
          <span>{{item.year}}</span>
        </div>
        <div class="law_names">
          <p>{{item.name}}</p>
          <p></p>
          <p>{{item.company}}</p>
          <p>{{item.company}}</p>
        </div>
      </div>
      <div class="law_detail" v-show="lawDetail">
        <div class="titles">
          <p>律师详情</p>
          <img src="../../../static/lawImage/close.png" alt="" @click="closeBox()">
        </div>
        <div class="scroll_box">
          <div class="law_datum">
            <div class="datum_left">
              <div class="header">
                <div>
                  <div class="pic">
                    <img src="../../../static/lawImage/header.png" alt="">
                  </div>
                  <p class="add_attention">+ 点击关注</p>
                </div>
                <div class="details">
                  <p><span class="name">欧阳方健</span><span><img src="../../../static/lawImage/attention.png" alt=""></span><span class="attention_num">258人已关注</span></p>
                  <p>已执证</p>
                  <div class="years">
                    <div class="line"></div>
                    <div class="line_color"></div>
                    <p><span style="color: #ff6600; margin-right: 3px;font-weight: bold;font-size: 18px">13</span><span>年</span></p>
                  </div>
                  <p><span class="name">执行证号：</span>1469020061039XX</p>
                  <p><span class="name">执行机构：</span>海南XXX律师事务所</p>
                  <p><span class="name">联系电话：</span>15800595098</p>
                  <p><span>上海  |  男  |  32岁 (1990.01.3)</span></p>
                  <p>处理<span style="color: #ff6600;"> 213 </span>件合同</p>
                </div>
              </div>
            </div>
            <div class="datum_right">
              <img src="../../../static/lawImage/card.png" alt="">
            </div>
          </div>
          <div class="introduce">
            <p>自我介绍：</p>
            <p>XX法学硕士，曾为多家企事业单位，包过大型企业公司，高科技公司，金融以及中小型公司等担任常年法律顾问，包过大型企业公司，高科技公司，金融以及中小型公司等担任常年法律顾问包过大型企业公司，高科技公司，金融以及中小型公司等担任常年法律顾问</p>
          </div>

          <div class="experience">
            <div class="experience_title">
              <p data-id="1" @click="experiences()">案例<span>15</span></p>
              <p data-id="2" @click="records()">履历</p>
              <p data-id="3" @click="evaluates()">评论<span>156</span></p>
            </div>
            <div class="experience_detail" v-show="experience">
              <div class="experience_list" v-for="item in experience_list">
                <p>{{item.date}}</p>
                <p>{{item.content}}</p>
                <p>{{item.num}}</p>
              </div>
            </div>
            <div class="experience_detail" v-show="record">
              <div class="record experience_list" v-for="item in record_list">
                <p>{{item.date}}</p>
                <p>{{item.content}}</p>
              </div>
            </div>
            <div class="experience_detail" v-show="evaluate">
              <div class="choose_evaluate">
                <div>
                  <p><input type="radio" checked="true" data-id="1">全部</p>
                </div>
                <div>
                  <p><input type="radio" data-id="2">好评（180）</p>
                </div>
                <div>
                  <p><input type="radio" data-id="3" >差评（20）</p>
                </div>
              </div>
              <div class="evaluate experience_list" v-for="item in evaluate_list">
                <p><span>{{item.content}}</span><span class="date">{{item.date}}</span></p>
                <p><span class="company">{{item.company}}</span></p>
              </div>
            </div>
          </div>
          <div class="scroll block">
            <el-pagination style="text-align: center;margin-top: 30px;"
                           background
                           layout="prev, pager, next"
                           :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
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
    name: "Lawyer",
    data(){
      return{
        arr:['企业','法人/股东','律所','律师','法律法规'],
        snumber: 3,
        dnumber: 0,
        hnumber: 0,
        searchVal:'',
        showls:false,
        attention:false,
        experience:true,
        record:false,
        evaluate:false,
        lawDetail:false,
        sign:'律师',
        conditiond:['全部','北京','江苏','浙江','福建','广东','上海','重庆','四川'],
        conditionh:['全部','制造业','批发和零售业','金融业'],
        list:[
          {
            pic:"../../../static/lawImage/people.png",
            year:"5年",
            attention:1,
            name:"欧阳方健",
            num:"345",
            company:"上海律师事务所"
          },
          {
            pic:"../../../static/lawImage/people.png",
            year:"5年",
            name:"欧阳方健",
            num:"345",
            company:"上海律师事务所"
          },
          {
            pic:"../../../static/lawImage/people.png",
            year:"5年",
            name:"欧阳方健",
            num:"345",
            company:"上海律师事务所"
          },
          {
            pic:"../../../static/lawImage/people.png",
            year:"5年",
            name:"欧阳方健",
            num:"345",
            company:"上海律师事务所"
          },
          {
            pic:"../../../static/lawImage/people.png",
            year:"5年",
            name:"欧阳方健",
            num:"345",
            company:"上海律师事务所"
          },
          {
            pic:"../../../static/lawImage/people.png",
            year:"5年",
            name:"欧阳方健",
            num:"345",
            company:"上海律师事务所"
          }
        ],
        experience_list:[
          {
            date:"2020.10.18 ~ 至今",
            content:"用友服务外包协议",
            num:"浏览3698次"
          },
          {
            date:"2020.10.18 ~ 2020.12",
            content:"用友服务外包协议",
            num:"浏览3698次"
          },
          {
            date:"2020.10.18 ~ 至今",
            content:"用友服务外包协议",
            num:"浏览3698次"
          },
          {
            date:"2020.10.18 ~ 至今",
            content:"用友服务外包协议",
            num:"浏览3698次"
          },
          {
            date:"2020.10.18 ~ 至今",
            content:"用友服务外包协议",
            num:"浏览3698次"
          },
        ],
        record_list:[
          {
            date:"2020.10 ~ 至今",
            content:"从事于 上海高低律所事务所"
          },
          {
            date:"2019.10",
            content:"律师事务所 颁发的 '2017年度盈科律"
          },
          {
            date:"2018.04",
            content:"盈科律师事务所 颁发的 '2017年度盈"
          }
        ],
        evaluate_list:[
          {
            company:"上海迅阁电子科技有限公司",
            content:"服务很到位，实力很强。服务很到位，实力很服务很到位，实力很强。服务很到位，实力很服务很到位，实力很强。服务很到位，实力很",
            date:"2018.9.09"
          },
          {
            company:"上海迅阁电子科技有限公司",
            content:"服务很到位，实力很强。服务很到位，实力很服务很到位，实力很强。服务很到位，实力很",
            date:"2018.9.09"
          },
          {
            company:"上海迅阁电子科技有限公司",
            content:"服务很到位，实力很强。服务很到位，实力很服务很到位，实力很强。服务很到位，实力很服务很到位，实力很强。服务很到位，实力很",
            date:"2018.9.09"
          }
        ],
      }
    },
    mounted(){
      var id=$('.people_list div').attr('data-id');
      if(id===1){
        this.attention=true;
      };
      $('.experience_title p').click(function () {
        $(this).css({borderTop:"1px solid #1e88e5",background:"#dfdfdf"})
        $('.experience_title p').not($(this)).css({borderTop:"0",background:"#ffffff"})
      });
      var radio=$('.choose_evaluate div input').attr("data-id");
      $('.choose_evaluate div').click(function () {
        radio=$(this).children().children('input').attr("data-id");
        console.log(radio)
        $(this).children().children('input').prop("checked",true);
        $('.choose_evaluate div').not($(this)).children().children('input').prop("checked",false);
      })
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
      },
      closeBox(){
        this.lawDetail=false;
      },
      //案例
      experiences(){
        this.experience=true;
        this.record=false;
        this.evaluate=false;
      },
      //履历
      evaluates(){
        this.evaluate=true;
        this.experience=false;
        this.record=false;
      },
      //评论
      records(){
        this.record=true;
        this.experience=false;
        this.evaluate=false;
      },
      //
      lawDetails(){
        this.lawDetail=true;
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
  /*lshhhh*/
  .people_list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .list{
    width: 220px;
    height: 300px;
    background: #f9f9f9;
    border-radius: 5px;
    margin-right: 50px;
    margin-top: 15px;
  }
  .list:nth-of-type(6n){
    margin-right: 0;
  }
  .list_detail{
    padding:15px 8px;
    position: relative;
    height: 180px;
    background: #fff;
  }
  .list_detail>img:nth-of-type(1){
    width: 90%;
    height: 180px;
    display: inherit;
    margin: auto;
  }
  .list_detail>img:nth-of-type(2){
    position: absolute;
    left: 25px;
    top: 15px;
  }
  .list_detail span{
    font-size: 14px;
    color: #ffffff;
    position: absolute;
    top: 18px;
    left: 33px;
  }
  .list_detail p {
    font-size: 12px;
    padding: 1px 4px;
    background: #d22f08;
    position: absolute;
    bottom: 15px;
    left: 8px;
    color: #ffffff;
    border-radius: 2px;
  }
  .law_names{
    width: 100%;
    border-top: 1px solid #dfdfdf;
    background: #f9f9f9;
    position: relative;
  }
  .law_names p{
    font-size: 12px;
  }
  .law_names p:nth-of-type(1){
    font-size: 13px;
    font-weight: bold;
    padding-top: 10px;
    margin-left: 20px;
  }
  .law_names p:nth-of-type(2){
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .num{
    color: #d22f08;
  }
  .law_names p:nth-of-type(3),.law_names p:nth-of-type(4){
    padding-top: 7px;
    padding-left: 20px;
    font-size: 13px;
    color: #666;
  }
  .law_detail{
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 900px;
    height: 800px;
    z-index: 10;
    background: #ffffff;
    box-shadow: 0.2px 0.3px 0px 0.3px #dfdfdf;
  }
  .scroll_box{
    overflow: auto;
    height: 95%;
  }
  .titles{
    background: #1e88e5;
    display: flex;
    justify-content: space-between;
  }
  .titles p {
    font-size: 14px;
    color: #ffffff;
    padding: 5px;
  }

  .titles img {
    width: 15px;
    height: 15px;
    position: relative;
    top: 8px;
    right: 5px;
  }
  .law_datum{
    width: 93%;
    margin: 40px auto 15px auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 15px;
  }
  .header{
    display: flex;
  }
  .pic{
    width: 90px;
    height: 90px;
    border: 2px solid #dfdfdf;
    border-radius: 50%;
  }
  .pic img{
    width: 100%;
    height: 100%;
  }
  .add_attention{
    width: 85px;
    padding: 8px;
    background: #ff6600;
    color: #ffffff;
    font-size: 13px;
    font-weight: bold;
    margin-top: 30px;
    border-radius: 5px;
    text-align: center;
  }
  .years{
    width: 60%;
  }
  .years div{
    height: 5px;
    border-radius: 5px;
  }
  .years div:nth-of-type(1){
    background: #dfdfdf;
    width: 90%;
  }
  .years>p{
    position: absolute;
    top: -18px;
    right: -35px;
  }
  .details{
    position: relative;
    margin-left: 10px;
  }
  .details p{
    font-size: 14px;
    padding-top: 5px;
  }
  .name{
    font-size: 16px;
    font-weight: bold;
  }
  .details p img{
    position: absolute;
    top: 5px;

  }
  .attention_num{
    position: absolute;
    top: 10px;
    margin-left: 14px;
    font-size: 12px;
  }
  .years{
    position: relative;
  }
  .line_color{
    position: absolute;
    top: 0px;
    background: #66cc00;
    width: 10%;
  }
  .introduce{
    width: 93%;
    margin: 20px auto 15px auto;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 15px;
  }
  .introduce p:nth-of-type(1){
    font-weight: bold;
  }
  .introduce p:nth-of-type(2){
    font-size: 13px;
    margin-top: 10px;
  }
  .experience{
    width: 93%;
    margin: 15px auto 10px auto;
    border: 1px solid #dfdfdf;
  }
  .experience_title{
    width: 100%;
    display: flex;
  }
  .experience_title p{
    padding: 18px 35px;
    font-size: 12px;
    font-weight:bold ;
    border-right: 1px solid #dfdfdf;
  }
  .experience_title p:nth-of-type(2){
    padding: 18px 57px;
  }

  .experience_title p span{
    background: #ff3300;
    padding: 0 7px;
    color: #ffffff;
    margin-left: 5px;
  }
  .experience_detail{
    width: 100%;
  }
  .experience_list{
    display: flex;
    border-top: 1px solid #dfdfdf;
    box-sizing: border-box;
  }
  .experience_list p{
    font-size: 13px;
    padding: 20px 0 20px 8px;
  }

  .experience_list p:nth-of-type(1){
    width: 25.2%;
  }
  .experience_list p:nth-of-type(2){
    width: 56%;
    font-weight: bold;
    border-left: 1px solid #dfdfdf;
    border-right: 1px solid #dfdfdf;
  }
  .experience_list p:nth-of-type(3){
    width: 19%;
  }
  .record p:nth-of-type(2){
    border-right:0;
  }
  .choose_evaluate{
    display: flex;
    height: 30px;
    background: #fafafa;
    padding-top: 10px;
    border-top: 1px solid #dfdfdf;
  }
  .choose_evaluate div{
    margin:0 5px 0 10px;
    font-size: 14px;
  }
  .choose_evaluate div p input{
    position: relative;
    top: 2px;
    left: -2px;
  }
  .evaluate p:nth-of-type(1){
    width: 90%;
  }
  .evaluate p:nth-of-type(2){
    position: relative;
  }
  .company{
    position: absolute;
    top: 39%;
  }
  .date{
    display: inherit;
    color: #999999;
    margin-top: 5px;
  }
  .scroll{
    margin-bottom: 20px;
  }
  .experience_title p:nth-of-type(1){
    border-top: 1px solid #1e88e5;
    background: #dfdfdf;
  }
  #list div:nth-of-type(1){
    background: #ffffff;
    color: #000;
  }
  .heart{
    position: relative;
    top: 4px;
  }
</style>
