<template>
  <div class="employee">
    <p>模板管理</p>
    <div class="opinionswitch">
      <p @click="templateswitch=false,show=false" :style="{'background':show==false?'#1e88e5':'#fff','color':show==false?'#fff':'#666'}">我的模板</p>
      <p @click="templateswitch=true,show=true" :style="{'background':show==true?'#1e88e5':'#fff','color':show==false?'#666':'#fff'}">公共模板</p>
    </div>
    <div>
      <div v-if="templateswitch == false" class="search_title">
        <img src="../../../static/accountManagement/index_search.png" alt="" class="search_icon">
        <input type="text" class="search_input" placeholder="请输入员工姓名"/>
        <button class="search_button" style="cursor: pointer;">查询</button>
        <button class="search_second" style="cursor: pointer;" @click="addEmployeed()">新增</button>
        <button class="search_thired" style="cursor: pointer;" @click="uploadButton()">刷新</button>
      </div>
      <div v-if="templateswitch == false" class="employee_list">
        <el-table
          v-if="templateswitch == false"
          :data="tableData"
          :stripe="true"
          border
          style="width: 100%;text-align: center;">
          <el-table-column
            type="index"
            label="ID"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="类别">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="模板名称">
          </el-table-column>
          <el-table-column
            prop="card"
            label="最后修改时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="250">
            <template slot-scope="scope">
              <el-button @click="preview=true" type="text" size="small"><img src="../../../static/accountManagement/write.png" alt="" class="icon">预览</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small"><img src="../../../static/accountManagement/write.png" alt="" class="icon">编辑</el-button>
              <el-button type="text" size="small" @click="status()"><img src="../../../static/accountManagement/forbidden.png" alt="" class="statused icon">禁用</el-button>
              <el-button type="text" size="small" @click="deleted()"><img src="../../../static/accountManagement/delete.png" alt="" class="icon">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-if="templateswitch" class="search_title">
        <div class="condition">
          <div>
            <div>所属行业</div>
            <div>
              <ul>
                <li v-for="(a,index) in conditionh" @click="hchange(a,index)" :class="{ k:hnumber == index}">{{a}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-if="templateswitch" class="employee_list">
        <el-table
          :data="tableData"
          :stripe="true"
          border
          style="width: 100%;text-align: center;">
          <el-table-column
            type="index"
            label="ID"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="类别">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="模板名称">
          </el-table-column>
          <el-table-column
            prop="card"
            label="最后修改时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="250">
            <template slot-scope="scope">
              <el-button @click="preview=true" type="text" size="small"><img src="../../../static/accountManagement/write.png" alt="" class="icon">预览</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination style="text-align: center;margin-top: 30px;"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page.sync="currentPage3"
                       :page-size="100"
                       layout="prev, pager, next, jumper"
                       :total="1000">
        </el-pagination>
      </div>
    </div>
    <!--    编辑-->
    <el-dialog title="员工编辑"  width="800px" :visible.sync="operateSpatialDataAdd" center class="productSpatial">
      <p class="title">[员工编辑]</p>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="员工姓名：" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入员工姓名"></el-input>
        </el-form-item>
        <el-form-item label="身份证号：" prop="card">
          <el-input v-model="ruleForm.card" placeholder="请输入员工身份证号"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入员工手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code">
          <el-input v-model="ruleForm.code" class="code" placeholder="请输入验证码"></el-input>
          <p class="code_get">获取验证码</p>
        </el-form-item>

        <el-form-item class="button_post">
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')" class="cacenl">取消</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>

    <!--    新增-->
    <el-dialog title="新增员工"  width="800px" :visible.sync="addEmployee" center class="productSpatial">
      <p class="title">[新增员工]</p>

      <el-form :model="addEmployees" :rules="addEmployeeRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="员工姓名：" prop="name">
          <el-input v-model="addEmployees.name" placeholder="请输入员工姓名"></el-input>
        </el-form-item>
        <el-form-item label="身份证号：" prop="card">
          <el-input v-model="addEmployees.card" placeholder="请输入员工身份证号"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="phone">
          <el-input v-model="addEmployees.phone" placeholder="请输入员工手机号码"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code">
          <el-input v-model="addEmployees.code" class="code" placeholder="请输入验证码"></el-input>
          <p class="code_get">获取验证码</p>
        </el-form-item>

        <el-form-item class="button_post">
          <el-button type="primary" @click="addSubmitForm('addEmployees')">确定</el-button>
          <el-button @click="addResetForm('addEmployees')" class="cacenl">取消</el-button>
        </el-form-item>

      </el-form>

    </el-dialog>
    <div class="cx_message deit_message" v-if="preview">
      <div>
        <p>合同预览：模板名称一</p><img @click="preview=false" src="../../../static/img/esc.png" alt="">
      </div>
      <div class="message_val" style="padding-top: 20px;">
        <div class="Addbox">
          <div class="addright" >
            <p>【合同标题】</p>
            <div>
              <p>甲方：</p>
              <p>【甲方名称】</p>
            </div>
            <div>
              <p>乙方：</p>
              <p>【乙方名称】</p>
            </div>
            <div>
              <p>丙方：</p>
              <p>【丙方名称】</p>
            </div>
            <div>
              <p>合同编号：</p>
              <p>【合同编号】</p>
            </div>
            <div>
              <p>合同签约地点：</p>
              <p>【合同签约地点】</p>
            </div>
            <div>
              <p>合同签定日期：</p>
              <p>【合同签定日期】</p>
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
              <p>【合同签定日期】</p>
            </div>
            <p>合同奖金收付账户</p>
            <div style="margin-top: 10px">
              <p>甲方</p>
              <p>【付款账户】</p>
            </div>
            <div>
              <p>乙方</p>
              <p>【收款账户】</p>
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
    name: 'Template ',
    data () {
      // 校验手机号码
      var validatePhoneNumber = (rule, phoneNumber, callback) => {
        if (phoneNumber == '' || phoneNumber == null || phoneNumber == undefined) {
          callback(new Error('请输入手机号码'));
        } else {
          if (phoneNumber.length == 11 && /^((13|14|15|17|18|19)[0-9]{1}\d{8})$/.test(phoneNumber)) {
            callback();
          } else {
            callback(new Error('手机号码输入有误'));
          }
        }
      };
      //验证身份证
      var idcardReg = (rule, code, callback) => {
        if (code == '' || code == null || code == undefined) {
          callback(new Error('请输入身份证号'));
        } else {
          if (code.length == 18 && /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(code)) {
            callback();
          } else {
            callback(new Error('身份证号码输入有误'));
          }
        }
      };
      return {
        operateSpatialDataAdd:false,
        addEmployee:false,
        show:false,
        detailed:false,
        preview:false,
        templateswitch:false,
        hnumber: 0,
        conditionh:['全部','制造业','批发和零售业','金融业'],
        tableData: [{
          name: '王小虎',
          phone:"13652891454",
          card:"41142219900844X",
          status:"启用",
          date: '2016-05-03 11:00'

        }, {
          name: '王小虎',
          phone:"13652891454",
          card:"41142219900844X",
          status:"启用",
          date: '2016-05-03 11:00'

        }, {
          name: '王小虎',
          phone:"13652891454",
          card:"41142219900844X",
          status:"启用",
          date: '2016-05-03 11:00'

        }, {
          name: '王小虎',
          phone:"13652891454",
          card:"41142219900844X",
          status:"启用",
          date: '2016-05-03 11:00'
        }],
        ruleForm: {
          name: '',
          phone: '',
          card: '',
          code: ''
        },
        addEmployees: {
          name: '',
          phone: '',
          card: '',
          code: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '姓名不能为空', trigger: 'blur' }
          ], phone: [
            {required: true, validator: validatePhoneNumber, trigger: 'blur'}
          ],
          card: [
            {required: true, validator: idcardReg, trigger: 'blur'}
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 1, max: 20, message: '验证码不能为空', trigger: 'blur' }
          ]
        },
        addEmployeeRules: {
          name: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '姓名不能为空', trigger: 'blur' }
          ], phone: [
            {required: true, validator: validatePhoneNumber, trigger: 'blur'}
          ],
          card: [
            {required: true, validator: idcardReg, trigger: 'blur'}
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 1, max: 20, message: '验证码不能为空', trigger: 'blur' }
          ]
        },
      }
    },
    methods:{
      hchange(a,index) {
        this.sign= a;
        this.hnumber= index;    //重要处
      },
      //编辑
      handleClick(){
        this.operateSpatialDataAdd=true;
      },
      //状态
      status(){

      },
      //删除
      deleted(){

      },

      addSubmitForm(addEmployees) {
        this.$refs[addEmployees].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      addResetForm(addEmployees) {
        this.addEmployee=false;
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.operateSpatialDataAdd=false;
      },

      addEmployeed(){
        this.addEmployee=true;
      },
      uploadButton(){
        location.reload();
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .employee{
    width: 100%;
  }
  .employee>p{
    font-weight: bold;
  }
  .opinionswitch{
    display: flex;
    margin-top: 20px;
    cursor: pointer;
  }
  .opinionswitch>p{
    width: 170px;
    height: 30px;
    background: #1e88e5;
    color: #fff;
    text-align: center;
    line-height: 30px;
  }
  .employee .search_title{
    width: 100%;
    padding: 8px 0;
    position: relative;
    margin-top: 10px;
  }
  .employee .search_icon{
    position: absolute;
    width: 26px;
    height: 26px;
    top: 14px;
    left: 0;
  }
  .employee .search_title input{
    width: 300px;
    height: 30px;
    border: 1px solid #dfdfdf;
    padding-left: 25px;
  }
  .employee .search_title button{
    width: 100px;
    height: 35px;
    text-align: center;
    border: 0;
    outline: none;
    margin-left: 20px;
    background: #26c6da;
    color: #ffffff;
    border-radius: 5px;
  }
  .employee .employee_list{
    margin-top: 25px;
  }
  .write_detail{
    position: fixed;
    top: 150px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 50%;
    background: #ffffff;
  }
  .write_title{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    background: #1e88e5;
  }
  .write_title p{
    color: #ffffff;
    padding: 5px 0 5px 10px;
  }
  .write_title img{
    width: 15px;
    height: 15px;
    position: relative;
    top: 8px;
    right: 15px;
  }
  .write_content{
    width: 80%;
    margin: 15px auto 0 auto;
  }
  .write_content>p{
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .title{
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    color: #000000;
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
  .k{
    background: #17a1ff;
    color: #ffffff !important;
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
  .addright{
    background: #fff;
    width: 100%;
    padding-bottom: 130px;
  }
  .addright>p:nth-of-type(1){
    width: 160px;
    text-align: center;
    border-bottom: 1px solid;
    padding-bottom: 5px;
    margin: auto;
    margin-bottom: 50px;
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
  .addright>div>p:nth-of-type(2){
    width: 300px;
    padding-left: 30px;
    border-bottom: 1px solid;
  }
  .addright>p{
    margin-left: 28px;
    margin-top: 10px;
  }
  .addright>p:nth-of-type(2), .addright>p:nth-of-type(4), .addright>p:nth-of-type(6), .addright>p:nth-of-type(7),
  .addright>p:nth-of-type(8), .addright>p:nth-of-type(12){
    font-weight: bold;
    margin-top: 30px;
  }
  .addright>p:nth-of-type(3), .addright>p:nth-of-type(5), .addright>p:nth-of-type(9), .addright>p:nth-of-type(10),
  .addright>p:nth-of-type(11), .addright>p:nth-of-type(13), .addright>p:nth-of-type(14){
    text-indent: 36px;
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
    cursor: pointer;
    display: block;
  }
</style>

<style>
  .employee .employee_list .el-table--border th{
    text-align: center;
  }
  .employee .employee_list .el-table--border td{
    text-align: center;
  }
  .employee .employee_list .icon{
    position: relative;
    top: 2px;
    margin-right: 8px;
  }
  .employee .el-button--text{
    color: #000;
  }
  .el-form demo-ruleForm{
    margin-top: 37px;
    width: 80%;
    margin: 20px auto 0 auto;
  }
  .el-dialog__header{
    background: #1e88e5;
    color: #ffffff;
  }
  .el-icon-close:before{
    color: #ffffff;
  }
  .el-dialog--center{
    text-align: left;
    color: #ffffff !important;
  }
  .el-dialog__title{
    color: #ffffff;
  }
  .code .el-input__inner{
    width: 45%;
  }
  .code_get{
    position: absolute;
    top: 0;
    left: 278px;
    width: 120px;
    line-height: 35px;
    background: #1e88e5;
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
  }
  .demo-ruleForm{
    width: 80%;
    margin: 30px auto 0 auto;
  }
  .el-button--primary{
    width: 150px;
  }
  .cacenl{
    width: 150px;
    background: #999999;
    color: #ffffff;
    margin-left: 50px;
  }
  .button_post{
    margin-top: 30px;
    width: 90%;
    border-top: 1px solid #dfdfdf;
    padding-top: 30px;
  }
  .el-dialog el-dialog--center{
    margin-top: 25vh;
  }
</style>
