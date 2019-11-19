<template>
  <el-container>
    <el-aside :width="isCollapse?'64px':'200px'">
      <!--      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <!--        <el-radio-button :label="false">展开</el-radio-button>-->
      <!--        <el-radio-button :label="true">收起</el-radio-button>-->
      <!--      </el-radio-group>-->
      <img class="logo" src="../../static/img/logo.png" alt="">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="1" @click="toroute('/index/home')">
          <i class="el-icon-office-building"></i>
          <span slot="title">企业首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="toroute('/index/Search')">
          <i class="el-icon-search"></i>
          <span slot="title">站内搜索</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span slot="title">合同管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="toroute('/index/AddContract')">创建合同</el-menu-item>
            <el-menu-item index="3-2" @click="toroute('/index/Signed')">待签合同</el-menu-item>
            <el-menu-item index="3-3" @click="toroute('/index/Conduct')">进行合同</el-menu-item>
            <el-menu-item index="3-4" @click="toroute('/index/history')">历史合同</el-menu-item>
            <el-menu-item index="3-4" @click="toroute('/index/Template')">模板管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-umbrella"></i>
            <span slot="title">法律支持</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="toroute('/index/attorney')">找律师</el-menu-item>
            <el-menu-item index="4-2" @click="toroute('/index/lecture')">律师讲堂</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">账户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1" @click="toroute('/index/authentication')">企业认证</el-menu-item>
            <el-menu-item index="5-2" @click="toroute('/index/employee')">员工管理</el-menu-item>
            <el-menu-item index="5-3" @click="toroute('/index/securityCenter')">安全中心</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6" @click="toroute('/index/Capital')">
          <i class="el-icon-coin"></i>
          <span slot="title">资金管理</span>
        </el-menu-item>
        <el-menu-item index="7" @click="toroute('/index/OpinionList')">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">意见及建议</span>
        </el-menu-item>
      </el-menu>
      <!--  接口数据动态导航菜单-->
      <!--      <el-menu-->
      <!--        :collapse="isCollapse"-->
      <!--        class="el-menu-vertical-demo"-->
      <!--        @open="handleOpen"-->
      <!--        @close="handleClose">-->
      <!--        <div  v-for="item in routers" :key="item.name">-->
      <!--          <el-submenu :index="item.url" v-if="item.key">-->
      <!--            <template slot="title">-->
      <!--              <i :class="item.menuIcon"></i>-->
      <!--              <span>{{item.menuName}}</span>-->
      <!--            </template>-->
      <!--            <el-menu-item :index="val.url" v-for="val in item.children" :key="val.menuName">-->
      <!--              <template slot="title">-->
      <!--                <i class="icon iconfont">*</i>-->
      <!--                <span>{{val.menuName}}</span>-->
      <!--              </template>-->
      <!--            </el-menu-item>-->
      <!--          </el-submenu>-->
      <!--          <el-menu-item :index="item.url" v-else>-->
      <!--            <template slot="title">-->
      <!--              <i :class="item.menuIcon"></i>-->
      <!--              <span>{{item.menuName}}</span>-->
      <!--            </template>-->
      <!--          </el-menu-item>-->
      <!--        </div>-->
      <!--      </el-menu>-->
    </el-aside>
    <el-container>
      <el-header>
        <p><i class="el-icon-s-operation" @click="isCollapse=!isCollapse"></i>
          <span class="gs">你好，{{arr.companyName}}</span><span>{{arr.trueName}}</span></p>
        <p style="border-left: 1px solid #dfdfdf;position: relative;left: 30px;cursor: pointer;">
          <i style="position: relative;right: 50px" class="el-icon-message-solid"></i>
          <i style="position: relative;right: 35px" class="el-icon-switch-button
"></i><span style="position: relative;right: 30px;cursor: pointer;" @click="toroute('/')">退出</span>
        </p>
      </el-header>
      <el-main>
        <router-view @getMessage="getMsg" />
      </el-main>
      <el-footer>Copynght @ 2019-2030 Xunge.com All Right Reserved <span style="color: #0265cd;">上海迅阁电子科技有限公司</span></el-footer>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        isCollapse: false,
        trueName:'',
        companyName:'',
        arr:[],
        routers:[
          {
            "name": "首页",
            "path": "/index/home",
            "icon": "icon iconfont icon-home",
            "key": false,
            "son": []
          },
          {
            "name": "工单管理",
            "path": "/index/orders",
            "icon": "icon iconfont icon-order",
            "key": true,
            "son": [
              {
                "name": "订单审核",
                "path": "/index/orders/orderCheck",
                "icon": "icon iconfont icon-dui"
              },
              {
                "name": "财务审核",
                "path": "/index/orders/finanCheck",
                "icon": "icon iconfont icon-dui"
              },
              {
                "name": "全部订单",
                "path": "/index/orders/allOrders",
                "icon": "icon iconfont icon-dui"
              }
            ]
          },
          {
            "name": "商家管理",
            "path": "/index/seller",
            "icon": "icon iconfont icon-shangjia",
            "key": true,
            "son": [
              {
                "name": "商家列表",
                "path": "/index/seller/business",
                "icon": "icon iconfont icon-dui"
              }
            ]
          },
          {
            "name": "权限设置",
            "path": "/index/power",
            "icon": "icon iconfont icon-yuechi",
            "key": false,
            "son": []
          },
          {
            "name": "财务统计",
            "path": "/index/finanCount",
            "icon": "icon iconfont icon-caiwu",
            "key": false,
            "son": []
          }
        ]
      };
    },
    mounted(){
      let that = this;
      this.$http.get('/api/api/admin/auth/menu/findNavTree').then(function (res) {
        if (res.body.code == 200){
          that.routers = res.body.data;
        }else{
          this.$message.error(res.body.msg);
        }
      })
    },
    methods: {
      getMsg(data){
        this.arr=data
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toroute(v){
        this.$router.push(v)
      }
    }
  }
</script>

<style>
  .el-container{
    width: 100%;
    height: 100vh;
    overflow: hidden
  }
  .el-menu-item i{
    color: #fff !important;
  }
  .el-submenu__title i{
    color: #fff !important;
  }
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    line-height: 60px;
    position: relative;
    font-weight: bold;
  }
  .el-header{
    display: flex;
    justify-content: space-between;
  }
  .el-footer{
    text-align: right;
    font-weight: inherit;
    font-size: 14px;
  }
  .el-menu-item-group__title{
    padding:0!important;
  }
  .el-submenu__title:hover{
    background: #0265cd !important;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background: #0265cd !important;
  }
  el-menu-vertical-demo el-menu>li:hover{
    background: #0265cd !important;
  }
  .el-menu{
    border-right: none!important;
  }
  .logo{
    width: 100px;
    margin-bottom: 20px;
    position: relative;
    top: 5px;
  }
  .el-aside {
    background-color: #015293;
    color: #ffffff;
    text-align: center;
    /*line-height: 200px;*/
    overflow: hidden;
  }
  .el-menu-item{
    background-color:#015293 !important;
    color: #ffffff !important;
    text-align: left;
    /*padding-left: 50px !important;*/
  }
  .el-submenu__title{
    background: #015293!important;
    color: #ffffff!important;
    text-align: left;
    /*padding-left: 50px !important;*/
  }
  .el-submenu .el-menu-item{
    padding-left: 70px !important;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /*width: 200px;*/
    min-height: 400px;
    background-color:#015293 !important;
  }
  .el-main {
    background-color: #ececec;
    color: #333;
    padding: 55px 30px 0px 30px;

  }
  .cx_message>div:nth-of-type(1)>img{
    cursor: pointer;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-icon-s-operation,.el-icon-message-solid{
    font-size: 25px;
    line-height: 20px;
    position: relative;
    top: 2px;
    margin-right: 20px;
  }
  .el-icon-switch-button
  {
    font-size: 20px;
    line-height: 25px;
    position: relative;
    top: 2px;
  }
  .gs{
    margin-right: 25px;
  }
</style>
