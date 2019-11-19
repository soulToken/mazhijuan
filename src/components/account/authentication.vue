<template>
    <div class="authentication_box">
        <p class="authentication_title">企业认证</p>
        <div class="authentication_first">
            <div class="first_title">
                <p>企业信息</p>
<!--                <router-link to="/reauthentication">-->
                    <p class="again" style="cursor: pointer" @click="reauthentication">重新认证</p>
<!--                </router-link>-->

            </div>
            <div class="first_detail">
                <div class="detail_box">
                    <div class="name_company"><p>企业全称</p>
                        <p>社会信用代码</p>
                        <p>企业电话</p>
                        <p>企业传真</p>
                        <p>办公地址</p>
                        <p>企业介绍</p>
                    </div>
                    <div class="name_detail">
                        <p>迅阁电子科技有限公司</p>
                        <p> 123456789</p>
                        <p>021-666666</p>
                        <p>021-666666</p>
                        <p> 上海</p>
                        <p> 凯米一直关注中国市场，2002年凯米中国凯米一直关注中国市场，2002年凯米中国凯米一直关注中国市场，2002年凯米中国凯米一直关注中国市场，2002年凯米中国</p>
                    </div>
                </div>
                
                <div class="name_card">
                    <img src="../../../static/accountManagement/license.png" alt="">
                </div>

        </div>
    </div>
        <div class="authentication_first">
            <div class="second first_title">
                <p>法人信息</p>
            </div>
            <div class="first_detail">
                <div class="detail_box">
                    <div class="second name_company"><p>姓名</p>
                        <p>性别</p>
                        <p>身份证号码</p>
                        <p>手机</p>
                    </div>
                    <div class="name_detail">
                        <p>方健</p>
                        <p> 男</p>
                        <p>1302719860325112x</p>
                        <p>1302719860</p>
                    </div>
                </div>

                <div class="card">
                    <img src="../../../static/accountManagement/card.png" alt="">
                    <img src="../../../static/accountManagement/card1.png" alt="">
                </div>

        </div>
    </div><div class="authentication_first">
            <div class="second first_title">
                <p>联系人信息</p>
            </div>
            <div class="first_detail">
                <div class="detail_box">
                    <div class="second name_company"><p>姓名</p>
                        <p>手机号</p>
                        <p>邮箱</p>
                    </div>
                    <div class="name_detail">
                        <p>方健</p>
                        <p> 123456789</p>
                        <p>manag@163.com</p>
                    </div>
                </div>

                <div class="card">
                    <img src="../../../static/accountManagement/card.png" alt="">
                    <img src="../../../static/accountManagement/card1.png" alt="">
                </div>

        </div>
    </div>


    </div>
</template>

<script>
    export default {
        name: "authentication",
        data(){
          return{
            arr:'',
          }
        },
        mounted(){
            this.$http.post('/api/api/user/companyInfo/get').then(function (res) {
              if (res.body.code == 200){
                this.arr = res.body.data;
              }else{
                this.$message.error(res.body.msg);
              }
            })
        },
        methods:{
            reauthentication(){
                this.$router.push({
                    path:'reauthentication',
                })
            }
        }
    }
</script>

<style scoped>
.authentication_box{
    width: 100%;
}
    .authentication_title{
        font-size: 16px;
        font-weight: bold;
    }
    .authentication_first{
        width: 100%;
        background: #ffffff;
        padding: 10px 10px;
        margin-top: 20px;
    }
    .first_title{
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dfdfdf;
        padding-bottom: 10px;
    }
    .first_title>p:nth-of-type(1){
        padding-top: 5px;
        font-size: 13px;
        font-weight: bold;
    }
    .again{
        background: #358ed7;
        color: #ffffff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
    }
    .first_detail{
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
    }
    .detail_box{
        display: flex;
        width: 60%;
    }
    .name_company{
        width: 330px;
    }
    .name_company p{
        text-align: right;
        padding: 5px 0;
        font-size: 13px;
        color: #999999;
    }
    .name_detail{
        margin-left: 15px;
        border-left: 1px solid #dfdfdf;
    }
    .name_detail p{
        margin-left: 15px;
        padding: 5px 0;
        font-size: 13px;
    }
    .name_card{
        width: 200px;
        height: 300px;
    }
    .name_card img{
        width: 100%;
        height: 100%;
    }
    .name_company{
        width: 115px;
    }
    .card{
        display: flex;
    }
    .card img{
        width: 222px;
        height: 144px;
    }
    .card>img:nth-of-type(1){
        margin-right: 20px;
    }
</style>
