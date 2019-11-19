<template>
    <div class="afresh_box">
        <div class="afresh_lift">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <!--企业信息-->
                <div class="box">
                    <div class="afresh_title">
                        企业信息
                    </div>
                    <div class="afresh_list">
                        <div class="afresh_content">
                            <el-form-item label="企业名称" prop="enterpriseName" class="name">
                                <el-input v-model="ruleForm.enterpriseName"></el-input>
                            </el-form-item>
                            <el-form-item label="社会信用代码" prop="enterpriseCode" class="second name">
                                <el-input v-model="ruleForm.enterpriseCode"></el-input>
                            </el-form-item>
                            <el-form-item label="企业电话" prop="enterprisePhone" class="name">
                                <el-input v-model="ruleForm.enterprisePhone"></el-input>
                            </el-form-item>
                            <el-form-item label="企业传真" prop="enterpriseEmail" class="second name">
                                <el-input v-model="ruleForm.enterpriseEmail"></el-input>
                            </el-form-item>
                            <el-form-item label="办公地址" prop="enterpriseAddress">
                                <el-input v-model="ruleForm.enterpriseAddress"></el-input>
                            </el-form-item>
                            <el-form-item label="企业介绍" prop="enterpriseDesc">
                                <el-input type="textarea" v-model="ruleForm.enterpriseDesc"></el-input>
                            </el-form-item>
                        </div>
                        <div class="upload">
                            <p>营业执照</p>
                            <el-upload
                                    class="avatar-uploader"
                                    action="http://192.168.1.201:8888/api/file/company/businessLicense/upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" prop="imageUrl" class="avatar">

                                <i v-else class="el-icon-plus avatar-uploader-icon"><img
                                        src="../../../static/accountManagement/photo.png" alt="" class="photo">
                                    <p class="clickUpload">点击上传</p>
                                </i>
                            </el-upload>
                        </div>
                    </div>
                </div>

                <!--法人-->
                <div class="box">
                    <div class="afresh_title">
                        法人信息
                    </div>
                <div class="afresh_list">
                    <div class="icCard afresh_content">
                        <el-form-item label="姓名" prop="legalName" class="name">
                            <el-input v-model="ruleForm.legalName"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" class="sex second name" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="身份证号码" prop="legalCode" class="name">
                            <el-input v-model="ruleForm.legalCode"></el-input>
                        </el-form-item>
                        <el-form-item label="手机" prop="legalPhone" class="second name">
                            <el-input v-model="ruleForm.legalPhone"></el-input>
                        </el-form-item>
                    </div>
                    <div style="display: flex;">
                        <div class="contacts upload">
                            <p>上传身份证正面</p>
                            <el-upload
                                    class="contacted avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="legalSuccessed"
                                    :before-upload="legalUploads">
                                <img v-if="ruleForm.legalImageUrl" :src="ruleForm.legalImageUrl" prop="imageUrl" class="avatar">

                                <i v-else class="uploadCard el-icon-plus avatar-uploader-icon"><img
                                        src="../../../static/accountManagement/photo.png" alt=""
                                        class="uploadCards photo">
                                </i>
                            </el-upload>
                        </div>
                        <div class="contacts upload">
                            <p>上传身份证背面</p>
                            <el-upload
                                    class="contacted avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="legalSuccess"
                                    :before-upload="legalUpload">
                                <img v-if="ruleForm.legalImageUrl2" :src="ruleForm.legalImageUrl2" prop="imageUrl" class="avatar">

                                <i v-else class="uploadCard el-icon-plus avatar-uploader-icon"><img
                                        src="../../../static/accountManagement/photo.png" alt=""
                                        class="uploadCards photo">
                                </i>
                            </el-upload>
                        </div>
                    </div>
                </div>
                </div>
                <!--联系人-->
                <div class="box">
                    <div class="afresh_title">
                        联系人信息
                    </div>
                <div class="afresh_list">
                    <div class="icCard afresh_content">
                        <el-form-item label="姓名" prop="contactsName" class="name">
                            <el-input v-model="ruleForm.contactsName"></el-input>
                        </el-form-item>
                        <el-form-item label="手机" prop="contactsPhone" class="second name">
                            <el-input v-model="ruleForm.contactsPhone"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="contactsCode" class="name">
                            <el-input v-model="ruleForm.contactsCode"></el-input>
                        </el-form-item>

                    </div>
                    <div style="display: flex;">
                        <div class="contacts upload">
                            <p>上传身份证正面</p>
                            <el-upload
                                    class="contacted avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="contactsHandleAvatarSuccess"
                                    :before-upload="contactsBeforeAvatarUpload">
                                <img v-if="ruleForm.contactsImageUrl" :src="ruleForm.contactsImageUrl" prop="imageUrl" class="avatar">

                                <i v-else class="uploadCard el-icon-plus avatar-uploader-icon"><img
                                        src="../../../static/accountManagement/photo.png" alt=""
                                        class="uploadCards photo">
                                </i>
                            </el-upload>
                        </div>
                        <div class="contacts upload">
                            <p>上传身份证背面</p>
                            <el-upload
                                    class="contacted avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="contactsHandleAvatarSuccessed"
                                    :before-upload="contactsBeforeAvatarUploads">
                                <img v-if="ruleForm.contactsImageUrl2" :src="ruleForm.contactsImageUrl2" prop="imageUrl" class="avatar">

                                <i v-else class="uploadCard el-icon-plus avatar-uploader-icon"><img
                                        src="../../../static/accountManagement/photo.png" alt=""
                                        class="uploadCards photo">
                                </i>
                            </el-upload>
                        </div>
                    </div>
                </div>
                </div>

                <el-form-item class="button_post">
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        name: "reauthentication",
        data() {
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
            //验证邮箱
            var email = (rule, emails, callback) => {
                if (emails == '' || emails == null || emails == undefined) {
                    callback(new Error('请输入邮箱'));
                } else {
                    if (new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(emails)) {
                        callback();
                    } else {
                        callback(new Error('邮箱输入有误'));
                    }
                }
            };
            //社会信用代码
            var code = (rule, codes, callback) => {
                if (codes == '' || codes == null || codes == undefined) {
                    callback(new Error('请输入社会信用代码'));
                } else {
                    if (codes.length==18 && /^[0-9A-Z]+$/.test(codes)) {
                        callback();
                    } else {
                        callback(new Error('社会信用代码输入有误'));
                    }
                }
            };
            return {
                ruleForm: {
                    enterpriseName: '',
                    enterpriseCode: '',
                    enterprisePhone: '',
                    enterpriseEmail: '',
                    enterpriseAddress: '',
                    enterpriseDesc: '',
                    imageUrl: '',
                    legalImageUrl: '',
                    legalImageUrl2: '',
                    contactsImageUrl: '',
                    contactsImageUrl2: '',
                    resource: "",
                    legalName: '',
                    legalCode: '',
                    legalPhone: '',
                    contactsName: '',
                    contactsCode: '',
                    contactsPhone: '',
                },
                rules: {
                    enterpriseName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 1, max: 20, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    legalName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 1, max: 20, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    contactsName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 1, max: 20, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    enterpriseCode: [
                        {required: true, validator: code, trigger: 'blur'}
                    ],
                    legalCode: [
                        {required: true, validator: idcardReg, trigger: 'blur'}
                    ],
                    contactsCode: [
                        {required: true, validator: email, trigger: 'blur'}
                    ],
                    enterprisePhone: [
                        {required: true, validator: validatePhoneNumber, trigger: 'blur'}
                    ],
                    legalPhone: [
                        {required: true, validator: validatePhoneNumber, trigger: 'blur'}
                    ],
                    contactsPhone: [
                        {required: true, validator: validatePhoneNumber, trigger: 'blur'}
                    ],
                    enterpriseEmail: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {min: 1, max: 20, message: '邮箱不能为空', trigger: 'blur'}
                    ],
                    enterpriseAddress: [
                        {required: true, message: '请输入地址', trigger: 'blur'},
                        {min: 1, max: 20, message: '地址不能为空', trigger: 'blur'}
                    ],
                    resource: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    enterpriseDesc: [
                        {required: false, message: '请填写介绍', trigger: 'blur'}
                    ],
                    imageUrl: [
                        {required: true, message: '不能为空', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
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

            //营业执照 上传
            handleAvatarSuccess(res, file) {
                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },

            //联系人正面照
            contactsHandleAvatarSuccess(res, file) {
                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            //联系人背面照
            contactsHandleAvatarSuccessed(res, file) {
                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
            },
            contactsBeforeAvatarUploads(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            //法人正面照
            legalSuccessed(res, file) {
                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
            },
            legalUploads(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            //法人背面照
            legalSuccess(res, file) {
                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
            },
            legalUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },


        }
    }
</script>

<style scoped>
    .afresh_box {
        width: 100%;
        margin: 0 auto;
        min-width:1250px;
    }

   .afresh_box .afresh_lift {
        width: 100%;
    }
    .afresh_box .box{
        width: 90%;
        margin: 20px auto 0 auto;
        background: #ffffff;
    }
    .afresh_box .afresh_list {
        width: 98%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
    }

    .afresh_box .afresh_content {
        width: 60%;
    }

    .afresh_box .upload p {
        text-align: center;
        margin-bottom: 10px;
        font-size: 14px;
    }

</style>
<style>
    .afresh_box .name {
        width: 48%;
    }

    .afresh_box .second {
        position: relative;
        margin-top: -62px;
        margin-left: 440px;
    }

    .afresh_box .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .afresh_box .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .afresh_title{
        width: 98%;
        margin: 0 auto;
        height: 30px;
        padding-top: 10px;
        border-bottom: 1px solid #dfdfdf;
    }
    .afresh_box .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .afresh_box .avatar {
        width: 178px;
        height: 250px;
        display: block;
    }

    .afresh_box .avatar-uploader-icon {
        width: 220px;
        height: 250px;
    }

    .afresh_box .uploadCard {
        width: 250px;
        height: 200px;
    }

    .afresh_box .photo {
        width: 220px;
        height: 180px;
        margin-left: -30px;
    }

    .afresh_box .el-icon-plus:before {
        position: relative;
        top: 10px;
        left: 45%;
        border: 1px solid #dfdfdf;
        border-radius: 50%;
        background: #9999;
        color: #fff;
    }

    .afresh_box .uploadCards {
        width: 250px;
        height: 200px;
    }

    .afresh_box .uploadCard:before {
        position: relative;
        top: -54px;
        left: 69%;
        border: 1px solid #dfdfdf;
        border-radius: 50%;
        background: #9999;
        color: #fff;
    }

    .afresh_box .clickUpload {
        font-size: 14px;
        position: absolute;
        bottom: -60px;
        left: 40%;
    }

    .afresh_box .el-textarea__inner {
        min-height: 100px !important;
    }

    .afresh_box .contacted div.el-upload {
        border: 0 !important;
    }

    .afresh_box .icCard {
        width: 50% !important;
    }

    .afresh_box .icCard .second {
        margin-left: 340px;
    }

    .afresh_box .icCard .name {
        width: 50%;
    }

    .afresh_box .el-radio__inner {
        /*border-radius: 0;*/
    }

    .afresh_box div.button_post {
        margin-top: 40px;
        text-align: center;
        margin-bottom: 30px;
    }

    .afresh_box .el-button--primary {
        width: 220px;
    }
    .afresh_box .el-form-item__label,.afresh_box .el-radio{
        color: #000;
        font-weight: bold;
    }
    .el-form-item__label{
        padding: 0 10px 0 0;
        font-size: 13px;
    }
</style>
