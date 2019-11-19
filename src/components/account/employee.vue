<template>
<div class="employee">
    <p>员工管理</p>
<div class="search_title">
    <img src="../../../static/accountManagement/index_search.png" alt="" class="search_icon">
    <input type="text" class="search_input" placeholder="请输入员工姓名"/>
       <button class="search_button" style="cursor: pointer">查询</button>
    <button class="search_second" style="cursor: pointer" @click="addEmployeed()">新增</button>
    <button class="search_thired" style="cursor: pointer" @click="uploadButton()">刷新</button>
  </div>
  <div class="employee_list">
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
      label="员工姓名">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号码">
    </el-table-column>
    <el-table-column
      prop="card"
      label="身份证号码">
    </el-table-column>
     <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
     <el-table-column
      prop="date"
      label="创建时间">
    </el-table-column>
     <el-table-column
             fixed="right"
             label="操作"
             width="200">
         <template slot-scope="scope">
             <el-button @click="handleClick(scope.row)" type="text" size="small"><img src="../../../static/accountManagement/write.png" alt="" class="icon">编辑</el-button>
             <el-button type="text" size="small" @click="status()"><img src="../../../static/accountManagement/forbidden.png" alt="" class="statused icon">禁用</el-button>
             <el-button type="text" size="small" @click="deleted()"><img src="../../../static/accountManagement/delete.png" alt="" class="icon">删除</el-button>
         </template>
     </el-table-column>
  </el-table>
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
                    <p class="code_get" style="cursor: pointer">获取验证码</p>
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
                <p class="code_get" style="cursor: pointer">获取验证码</p>
            </el-form-item>

            <el-form-item class="button_post">
                <el-button type="primary" @click="addSubmitForm('addEmployees')">确定</el-button>
                <el-button @click="addResetForm('addEmployees')" class="cacenl">取消</el-button>
            </el-form-item>

        </el-form>

    </el-dialog>



    <div class="block">
        <el-pagination style="text-align: center;margin-top: 30px;"
                       background
                       layout="prev, pager, next"
                       :total="1000">
        </el-pagination>
    </div>
</div>
  
</template>

<script>
export default {
  name: 'employee',
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
