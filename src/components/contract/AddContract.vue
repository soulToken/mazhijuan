<template>
    <div class="box" style="width:100%;height:100%;min-width:1000px;">
      <!-- <p>创建合同</p> -->
      <div class="Addbox">
        <div class="addLfet">
<!--          <div class="opinionswitch">-->
<!--          <p @click="show=false" :style="{'background':show==false?'#1e88e5':'#fff','color':show==false?'#fff':'#666'}">模板创建</p>-->
<!--          <p @click="show=true" :style="{'background':show==true?'#1e88e5':'#fff','color':show==false?'#666':'#fff'}">律师代写</p>-->
<!--        </div>-->
          <p>创建合同</p> 
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
          <el-button class="xg-zl" style="margin-top: 20px" type="primary" @click="payment=true">付款方式</el-button>
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
      <div class="cx_message cz_message" v-if="Choice">
        <div>
          <p>模板选择</p><img @click="Choice=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <template>
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                label="ID"
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="类别"
                width="180">
              </el-table-column>
              <el-table-column
              prop="address"
              label="模板名称">
            </el-table-column>
              <el-table-column
                label="操作"
                width="100">
                <template >
                  <el-button @click="handleClick(scope.row)" type="primary" size="small">选择</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
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
        </div>
      </div>
      <div class="cx_message cz_message" v-if="payment">
        <div>
          <p>付款方式</p><img @click="Choice=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <div>
            <p>付款方式：</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AddContract",
      data(){
          return{
            show:false,
            Choice:false,
            payment:false,
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
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀'
            }],
          }
      },
      methods:{
        Submission(){
          this.title='';
          this.aname='';
          this.bname='';
          this.cname='';
          this.number='';
          this.executor='';
          this.place='';
          this.signdata='';
          this.payer='';
          this.Payee='';
          this.$message({
            message: '合同创建成功',
            type: 'success'
          });
        }
      }
    }
</script>

<style scoped>
  .box>p{
    font-weight: bold;
    margin-bottom: 30px;
  }
  .Addbox{
    display: flex;
    flex-direction: row;
    width:100%;
    height: 100%;
  }
  .Addbox>div:nth-of-type(1){
    width: 600px;
  }
  .opinionswitch{
    display: flex;
    margin-right: 15px;
    cursor: pointer;
  }
  .opinionswitch>p{
    width: 210px;
    background: #1e88e5;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
  }
  .addLfet{
    height:100%;
    width:600px!important;
    overflow-y:auto; 
  }
  .addLfet div:nth-of-type(1){
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
    margin-top: 50px !important;
    cursor: pointer;
  }
  .addright{
    background: #fff;
    width: 100%;
    height:100%;
    margin-left: 40px;
    padding: 0 60px;
    padding-top: 60px;
    padding-bottom: 130px;
    box-sizing: border-box;
    overflow: auto;
    min-width: 600px;
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
    height: 420px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
  }
  .message_val{
    padding: 0 15px;
    box-sizing: border-box;
  }
</style>
