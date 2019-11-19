<template>
  <div class="box">
    <p>待签合同</p>
    <div class="ht" style="padding-bottom: 0px;margin-bottom: 20px">
      <div>
        <p><i style="color: #055091;font-size: 18px;margin-right: 10px;position: relative;top: 1px;" class="el-icon-s-order"></i>合同号 : 201907082347</p>
        <p><i style="font-size: 16px;margin-right: 5px;position: relative;top: 1px;" class="el-icon-time"></i>创建时间 : 2019-02-22 22:22:22</p>
      </div>
      <div class="bd">
        <el-table
          :data="tableData"
          :stripe='true'
          border
          style="width: 100%;text-align: center">
          <el-table-column
            label="合同标题"
          >
            建设工程合同
          </el-table-column>
          <el-table-column
            label="合同金额（万元）"
          >
            1869.00
          </el-table-column>
          <el-table-column
            label="企业名称"
          >
            <p>甲方：讯阔电子科技有限公司</p>
            <p>乙方：上汽大众汽车有限公司</p>
          </el-table-column>
          <el-table-column
            label="合同负责人">
            <p>甲方：方健</p>
            <p>乙方：方健</p>
          </el-table-column>
          <el-table-column
            prop="address"
            label="负责人电话">
            <p>甲方：18768859588</p>
            <p>乙方：18738013188</p>
          </el-table-column>
          <el-table-column
            prop="address"
            label="合同状态">
            合同终止
          </el-table-column>
          <el-table-column
            label="留言">
            <template slot-scope="scope">
              <p style="color: #0066ff;cursor: pointer;" @click="stay=true">查看留言（8）</p>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right;padding-top: 20px">
          <el-button type="primary" @click="edit=true">编辑</el-button>
          <el-button type="primary">签章</el-button>
          <el-button type="primary">退回</el-button>
          <el-button type="primary">评估</el-button>
        </div>
      </div>
    </div>
    <div class="ht" style="padding-bottom: 0px;margin-bottom: 20px">
      <div>
        <p><i style="color: #055091;font-size: 18px;margin-right: 10px;position: relative;top: 1px;" class="el-icon-s-order"></i>合同号 : 201907082347</p>
        <p><i style="font-size: 16px;margin-right: 5px;position: relative;top: 1px;" class="el-icon-time"></i>创建时间 : 2019-02-22 22:22:22</p>
      </div>
      <div class="bd">
        <el-table
          :data="tableData"
          :stripe='true'
          border
          style="width: 100%;text-align: center">
          <el-table-column
            label="合同标题"
          >
            建设工程合同
          </el-table-column>
          <el-table-column
            label="合同金额（万元）"
          >
            1869.00
          </el-table-column>
          <el-table-column
            label="企业名称"
          >
            <p>甲方：讯阔电子科技有限公司</p>
            <p>乙方：上汽大众汽车有限公司</p>
          </el-table-column>
          <el-table-column
            label="合同负责人">
            <p>甲方：方健</p>
            <p>乙方：方健</p>
          </el-table-column>
          <el-table-column
            prop="address"
            label="负责人电话">
            <p>甲方：18768859588</p>
            <p>乙方：18738013188</p>
          </el-table-column>
          <el-table-column
            prop="address"
            label="合同状态">
            合同终止
          </el-table-column>
          <el-table-column
            fixed="right"
            label="留言">
            <template slot-scope="scope">
              <p style="color: #0066ff;cursor: pointer;">查看留言（8）</p>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right;padding-top: 20px">
          <el-button type="primary">编辑</el-button>
          <el-button type="primary">签章</el-button>
          <el-button type="primary">退回</el-button>
          <el-button type="primary">评估</el-button>
        </div>
      </div>
    </div>
    <div class="block" style="margin-top: 30px;text-align: center">
      <el-pagination
        style="width: 100%;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
    <div class="cx_message" v-if="stay">
      <div>
        <p>查看留言</p><img @click="stay=false" src="../../../static/img/esc.png" alt="">
      </div>
      <p>建筑工程合同</p>
      <p>关于XXXXXXXXXXX</p>
      <div class="message_val">
        <div class="opiniondata" @click="detailed = true">
          <div>
            <p>对于平台我有一个中肯的建议</p>
            <p>首先感谢您对企业社区的支持与信任！请在这里写下你宝贵的意见和建议，我们将在成长中不断进步！</p>
          </div>
          <p><img src="../../../static/img/sj.png" alt="">2019.08.01</p>
        </div>
        <div class="signedBox">
          <div class="block" style="margin-top: 30px">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
          <textarea placeholder="留言内容"></textarea>
          <p style="  cursor: pointer;">发表留言</p>
        </div>
      </div>
    </div>
    <div class="cx_message deit_message" v-if="edit">
      <div>
        <p>编辑合同</p><img @click="edit = false" src="../../../static/img/esc.png" alt="">
      </div>
      <div class="message_val" style="padding-top: 20px;background: #f9f9f9;">
        <div class="Addbox">
          <div class="addLfet">
            <!--          <div class="opinionswitch">-->
            <!--          <p @click="show=false" :style="{'background':show==false?'#1e88e5':'#fff','color':show==false?'#fff':'#666'}">模板创建</p>-->
            <!--          <p @click="show=true" :style="{'background':show==true?'#1e88e5':'#fff','color':show==false?'#666':'#fff'}">律师代写</p>-->
            <!--        </div>-->
            <div @click="Choice=true"><p>模板选择</p><img src="../../../static/img/add.png" alt=""></div>
            <div><p>合同标题:</p><input type="text" v-model="title" placeholder="请输入合同标题"><span>*</span></div>
            <div><p>甲方名称:</p><input type="text" v-model="aname" placeholder="请输入甲方名称"><span>*</span></div>
            <div><p>乙方名称:</p><input type="text" v-model="bname" placeholder="请输入乙方名称"><span>*</span></div>
            <div><p>丙方名称:</p><input type="text" v-model="cname" placeholder="请输入丙方名称"><span>*</span></div>
            <div><p>合同编号:</p><input type="text" v-model="number" placeholder="请输入合同编号"><span>*</span></div>
            <div><p>合同签约地点:</p><input type="text" v-model="place" placeholder="请输入合同签约地点"><span>*</span></div>
            <div><p>合同签定日期:</p><input type="text" v-model="signdata" placeholder="请输入合同签定日期"><span>*</span></div>
            <div><p>合同执行人员:</p><input type="text" v-model="executor" placeholder="请输入合同执行人员姓名"><span>*</span></div>
            <div><p>付款账户</p><input type="text" v-model="payer" placeholder="请输入付款账户"><span>*</span></div>
            <div><p>收款账户</p><input type="text" v-model="Payee" placeholder="请输入收款账户"><span>*</span></div>
            <p class="bnt" @click="Submission">提交合同</p>
          </div>
          <div class="addright" >
            <input type="text" placeholder="【合同标题】" v-model="title" onfocus=this.blur()>
            <div>
              <p>甲方：</p>
              <input type="text" placeholder="【甲方名称】" v-model="aname" onfocus=this.blur()>
            </div>
            <div>
              <p>乙方：</p>
              <input type="text" placeholder="【乙方名称】" v-model="bname" onfocus=this.blur()>
            </div>
            <div>
              <p>丙方：</p>
              <input type="text" placeholder="【丙方名称】" v-model="cname" onfocus=this.blur()>
            </div>
            <div>
              <p>合同编号：</p>
              <input type="text" placeholder="【合同编号】" v-model="number" onfocus=this.blur()>
            </div>
            <div>
              <p>合同签约地点：</p>
              <input type="text" placeholder="【合同签约地点】" v-model="place" onfocus=this.blur()>
            </div>
            <div>
              <p>合同签定日期：</p>
              <input type="text" placeholder="【合同签定日期】" v-model="signdata" onfocus=this.blur()>
            </div>
            <p>合同申明</p>
            <p>
              甲乙双方本着平等互利的原则，根据《中华人民共和国》及有关规定，为保证项目的顺利进行、明确双方在权利义务，
              经协商一致，达成本合同。根据《中华人民共和国》及有关规定，为保证项目的顺利进行
            </p>
            <p>合同服务内容</p>
            <p>
              甲乙双方本着平等互利的原则，根据《中华人民共和国》及有关规定，为保证项目的顺利进行、明确双方在权利义务，
              经协商一致，达成本合同。根据《中华人民共和国》及有关规定，为保证项目的顺利进行
            </p>
            <p>合同执行人员</p>
            <div style="margin-left: 50px;margin-top: 10px">
              <p>本项目交于乙方的</p>
              <input type="text" placeholder="【合同执行人员】" v-model="executor" onfocus=this.blur()>
            </div>
            <p>合同奖金收付账户</p>
            <div style="margin-top: 10px">
              <p>甲方</p>
              <input type="text" placeholder="【付款账户】" v-model="payer" onfocus=this.blur()>
            </div>
            <div>
              <p>乙方</p>
              <input type="text" placeholder="【收款账户】" v-model="Payee" onfocus=this.blur()>
            </div>
            <p>合同双方义务</p>
            <p>
              甲乙双方本着平等互利的原则，根据《中华人民共和国》及有关规定，为保证项目的顺利进行、明确双方在权利义务，
              经协商一致，达成本合同。根据《中华人民共和国》及有关规定，为保证项目的顺利进行
            </p>
            <p>
              甲乙双方本着平等互利的原则，根据《中华人民共和国》及有关规定，为保证项目的顺利进行、明确双方在权利义务，
              经协商一致，达成本合同。根据《中华人民共和国》及有关规定，为保证项目的顺利进行
            </p>
            <p>
              甲乙双方本着平等互利的原则，根据《中华人民共和国》及有关规定，为保证项目的顺利进行、明确双方在权利义务，
              经协商一致，达成本合同。根据《中华人民共和国》及有关规定，为保证项目的顺利进行
            </p>
            <p>合同生效认定</p>
            <p>生效一</p>
            <p>生效二</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Signed",
      data(){
          return{
            stay:false,
            edit:false,
            show:false,
            Choice:false,
            title:'',
            aname:'',
            bname:'',
            cname:'',
            number:'',
            executor:'',
            place:'',
            signdata:'',
            payer:'',
            Payee:'',
            currentPage3: 1,
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }]
          }
      },
      methods: {
        Submission(){},
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
    }
</script>

<style scoped>
  .box>p{
    font-weight: bold;
  }
  .ht{
    width: 100%;
    background: #ffffff;
    border-radius: 2px;
    margin-top: 30px;
    position: relative;
    padding-bottom: 60px;
  }
  .ht>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    padding-top: 25px ;
  }
  .ht>div:nth-of-type(1)>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
  }
  .ht>div:nth-of-type(1)>p:nth-of-type(2){
    color: #777;
  }
  .bd{
    padding: 20px 20px;
  }
  .pj{
    padding: 0 20px;
  }
  .pj>div{
    border: 1px solid #eee;
  }
  .pj>div{
    display: flex;
  }
  .pj>div:nth-of-type(1)>div{
    height: 176px;
  }
  .pj>div:nth-of-type(1)>div:nth-of-type(1){
    width: 115px;
    border-right: 1px solid #eee;
    background: #f7f7f7;
    text-align: center;
    line-height: 176px;
    font-weight: bold;
  }
  .pj>div:nth-of-type(1)>div:nth-of-type(2){
    width: calc(100% - 115px);
  }
  .pj>div:nth-of-type(2)>div{
    height: 75px;
  }
  .pj>div:nth-of-type(2)>div:nth-of-type(1){
    width: 115px;
    border-right: 1px solid #eee;
    background: #f7f7f7;
    text-align: center;
    line-height: 75px;
    font-weight: bold;
  }
  .pj>div:nth-of-type(2)>div:nth-of-type(2){
    width: calc(100% - 115px);
    padding: 15px 0 15px 15px;
    line-height: 75px;
  }
  .pj>div:nth-of-type(1)>div:nth-of-type(2)>textarea{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    resize:none;
    padding: 20px 15px;
    box-sizing: border-box;
  }
  .message_val{
    height: calc(810px - 85px);
    padding: 0 20px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0px 20px 30px 0;
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
  .cx_message>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    padding-top: 22px;
  }
  .cx_message>p:nth-of-type(2){
    font-size: 14px;
    color: #999999;
    text-align: center;
    padding: 11px;
  }
  .opiniondata{
    display: flex;
    border: 1px solid #dfdfdf;
    position: relative;
  }
  .opiniondata>div{
    padding: 20px;
    width: 70%;
  }
  .opiniondata>div>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  .opiniondata>div>p:nth-of-type(2){
    color: #666;
    margin-bottom: 10px;
  }
  .opiniondata>p{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    line-height: 120px;
    color: #999;
    font-size: 14px;
  }
  .signedBox{
    width: 750px;
    background: #fff;
    height: 300px;
    position: absolute;
    bottom: 0;
    text-align: right;
  }
  .signedBox>textarea{
    height: 110px;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    width: 100%;
    background: #f7f7f7;
    padding-left: 20px;
    padding-top: 10px;
    resize:none;
    font-family: "微软雅黑";
    margin-top: 30px;
  }
  .signedBox>p{
    width: 90px;
    height: 38px;
    background: #26c6da;
    text-align: center;
    line-height: 38px;
    color: #fff;
    border-radius: 5px;
    float: right;
    margin-top: 20px;
  }
  .Addbox{
    display: flex;
  }
  .Addbox>div:nth-of-type(1){
    width: 600px;
  }
  .opinionswitch{
    display: flex;
    margin-right: 15px;
  }
  .opinionswitch>p{
    width: 210px;
    background: #1e88e5;
    color: #fff;
    text-align: center;
    line-height: 30px;
  }
  .addLfet>div:nth-of-type(1){
    height: 34px;
    line-height: 34px;
    display: flex;
    border: 1px solid #29c7da;
    color: #29c7da;
    background: #fff;
    border-radius: 3px;
    text-align: center;
    margin-top: 20px;
    margin-right: 15px;
    cursor: pointer;
    display: none;
  }
  .addLfet>div:nth-of-type(1)>p{
    text-align: center;
    width: 100%;
  }
  .addLfet>div:nth-of-type(1)>img{
    position: relative;
    right: 5px;
    top: 5px;
    width: 25px;
    height: 25px;
  }
  .addLfet>div>span{
    color: #ff0000;
  }
  .addLfet>div{
    display: flex;
    line-height: 38px;
    margin-top: 20px;
  }
  .addLfet>div>p{
    width: 180px;
    text-align: right;
    margin-right: 20px;
  }
  .addLfet>div>input{
    width: 100%;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #d7d7d7;
    padding-left: 10px;
    box-sizing: border-box;
    margin-right: 10px;
  }
  .bnt{
    height: 36px;
    display: block !important;
    background: #358ed7 !important;
    text-align: center !important;
    line-height: 36px !important;
    color: #fff!important;
    margin-right: 20px;
    border-radius: 5px;
    margin-top: 100px !important;
    cursor: pointer;
  }
  .addright{
    background: #fff;
    width: 100%;
    margin-left: 40px;
    padding: 0 60px;
    padding-top: 60px;
    padding-bottom: 130px;
  }
  .addright>input:nth-of-type(1){
    display: block;
    width: 160px;
    text-align: center;
    border: none;
    border-bottom: 1px solid;
    padding-bottom: 5px;
    margin: auto;
    margin-bottom: 50px;
    font-size: 18px;
    outline: none;
  }
  .addright>div{
    display: flex;
    margin-bottom: 20px;
  }
  .addright>div>p:nth-of-type(1){
    width: 140px;
    text-align: right;
    font-weight: bold;
  }
  .addright>div>input{
    width: 300px;
    padding-left: 30px;
    border: none;
    border-bottom: 1px solid;
    font-size: 18px;
    outline: none;
  }
  .addright>p{
    margin-left: 28px;
    margin-top: 10px;
  }
  .addright>p:nth-of-type(1), .addright>p:nth-of-type(3), .addright>p:nth-of-type(5), .addright>p:nth-of-type(6),
  .addright>p:nth-of-type(7), .addright>p:nth-of-type(11){
    font-weight: bold;
    margin-top: 30px;
  }
  .addright>p:nth-of-type(2), .addright>p:nth-of-type(4), .addright>p:nth-of-type(8), .addright>p:nth-of-type(9),
  .addright>p:nth-of-type(10), .addright>p:nth-of-type(12), .addright>p:nth-of-type(13){
    text-indent: 36px;
  }
  .deit_message{
    width: 1300px;
  }
</style>
