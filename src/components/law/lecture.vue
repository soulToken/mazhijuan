<template>
    <div class="class_box haddd">
        <p class="box_title">律师讲堂</p>


        <div class="lecture_box">
            <p class="choose_type" v-for="item in chooseType" @click="handleNav(item.id)" :data-id="item.id">{{item.name}}</p>
        </div>

        <div class="lecture_list">


            <el-row>

        
        
            <el-col  :xs="8"  :sm="6"  :md="6" :lg="6"	:xl="6"  v-for="(item,index) in contentList" :key="index">

          
            <div class="lecture_content"   @click="detailButton(item.id)" style="cursor:pointer;">
                <img :src="listPicArr[0].src" alt="" class="pic"/>
<!--                <video id="pic" :src="item.img" :poster="item.videoImg" :muted="muteStatus" :autoplay="playStatused" controls height="414" width="720" class="pic">-->
<!--                    your browser does not support the video tag-->
<!--                </video>-->
                <p class="title">{{item.title}}</p>
                <p class="picese" v-if="id!=3"><span>课程价格：</span><span class="money">￥{{item.price}}</span><span class="people_num">{{item.paidCount}}</span>
                <span class="icon"><img
                        src="../../../static/lawImage/people_icon.png" alt=""></span>
                </p>
                <p class="lecture_detail" id='con'><span class="details">{{item.description}}
                       <!-- <span
                        class="detail_button"  v-if="id!=3">[详情]</span> -->
                    </span>
                </p>
                <div class="list_button" v-if="id==3">
                    <el-button type="success" size="medium">开始学习</el-button>
                </div>
                <div v-else class="list_button">
                    <p class="first" @click.stop="tryLook2()"><span class="text"><img :src="item.coverUrl" alt=""></span><span
                            class="collect_text">{{item.payStatus==2?'试看':"播放"}}</span></p>
                    <p class="second" v-if="item.enjoyStatus==2" @click.stop="handleCollect(item.id,index);"><span class="text"><img src="../../../static/lawImage/collect.png"
                                                              alt=""></span><span class="collect_text">收藏</span></p>
                    <p class="second" v-if="item.enjoyStatus==1" @click.stop="cancleCollect(item.id,index)" style="background: rgb(125, 200, 85)"><span class="text"><img src="../../../static/lawImage/collect.png"
                                                              alt=""> </span><span class="collect_text">取消收藏</span></p>
                    <p class="thired" v-if="item.payStatus==2" @click.stop="pay(item)"><span class="text"><img src="../../../static/lawImage/pay.png"
                                                                                 alt=""></span><span
                            class="pay_text">购买</span></p>
                    <p class="thired" v-if="item.payStatus==1" style="background: rgb(125, 200, 85)" @click.stop="pay(item)"><span class="text"><img src="../../../static/lawImage/pay.png"
                                                                                 alt=""></span><span
                            class="pay_text">已购买</span></p>
                </div>
                

            </div>
            </el-col>
            </el-row>
        </div>

         <!-- 详情-->
        <div class="class_detail" v-show="classDetail">
            <div class="flow_title">
                <p>法律讲堂-{{classHomeDetail.title}}</p>
                <img src="../../../static/lawImage/close.png" alt="" @click="closed()">
            </div>
            <div class="scroll_box">
                <div class="video">
                    <div class="video_pic">
                        <video id="myvideo" :src="videoArr[0].src" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus" controls height="414" width="720">
                            your browser does not support the video tag
                        </video>

                        <img  src="../../../static/lawImage/play_video.png" alt="">
                        <div class="cover"  ></div>
                    </div>


                    <div class="video_detail">
                        <p>{{classHomeDetail.tit}}</p>
                        <p class="video_title">课程价格：<span class="video_color">￥{{classHomeDetail.price}}</span></p>
                        <p class="video_title">有效期：<span>永久</span></p>
                        <p class="video_title">时长：<span>120分钟</span></p>
                        <p class="video_title">已购买：<img src="../../../static/lawImage/people_icon.png" alt=""><span>12345</span></p>
                        <div class="video_list">
                            <div @click="tryLook2()">
                                <img src="../../../static/lawImage/looks.png" alt="">
                                <p>{{classHomeDetail.payStatus==2?"试看":'播放'}}</p>
                            </div>
                            <div @click="handleCollect2(classHomeDetail.id)" :class="classHomeDetail.enjoyStatus==1?'active':''">
                                <img src="../../../static/lawImage/collects.png" alt="">
                                <p>{{classHomeDetail.enjoyStatus==1?'取消收藏':'收藏'}}</p>
                            </div>
                            <div @click="pay(classHomeDetail)" :class="classHomeDetail.payStatus==1?'active':''">
                                <img src="../../../static/lawImage/pays.png" alt="">
                                 <p>{{classHomeDetail.payStatus==1?'已购买':'购买'}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="video_list_title">课程概述</p>
                <p class="video_content" style="padding-top:15px;">
                  {{classHomeDetail.description}}
                </p>
                <p class="video_list_title">课程列表</p>
                 <p class="video_content" style="padding-top:15px;">
                    <span class="chapterTitle" :class="chapterTitle==index?'active':''" @click="changechapterTitle(item,index)" v-for="(item,index) in classHomeDetail.chapters" :key="index">
                      {{item.chapterTitle}}
                    </span>
                 </p>
                <!-- <p class="video_list_title">热门课程</p>


                <div class="recommend">
                    <div class="recommend_list" v-for="item in recommend_list">
                        <img :src="item.img" alt="">
                        <p>{{item.detail}}</p>
                        <p><span>课程价格：</span><span style="color: #ff3300;">{{item.money}}</span><span class="look_num"><img src="../../../static/lawImage/people_icon.png" alt="" style="margin-right: 4px;">{{item.num}}</span></p>
                    </div>
                </div> -->
            </div>

        </div>

        <div class="pay_flow" v-if="pay_float">
            <div class="flow_title">
                <p>购买课程</p>
                <img src="../../../static/lawImage/close.png" alt="" @click="close()">
            </div>
            <div class="flow_line"></div>
            <div class="flow_content">
                <div class="active flow_type" data-id="1">
                    <p class="pay_num">1</p>
                    <p class="pay_texts">订单确定</p>
                </div>
                <div class="flow_type" data-id="2">
                    <p class="pay_num">2</p>
                    <p class="pay_texts">选择支付</p>
                </div>
                <div class="flow_type" data-id="3">
                    <p class="pay_num">3</p>
                    <p class="pay_texts">购买成功</p>
                </div>
            </div>
            <div v-if="first">
                <div class="law_flow">
                    <el-table
                            :data="[...classHomeDetail]"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="pic"
                                label="课程图片">
                            <template slot-scope="scope">
                                <img src="../../../static/lawImage/classroom.png" alt="" style="width: 150px;height: 100px;">
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="title"
                                label="课程名称"
                        >
                        </el-table-column>
                        <el-table-column
                              
                                label="课程时长">
                                   <template slot-scope="scope">
                                       120分钟
                                   </template>
                        </el-table-column>
                        <el-table-column
                                prop="price"
                                label="价格"
                        >
                        </el-table-column>
                    </el-table>
                </div>
                <div class="flow_pay">
                    <p><span>应该支付：</span><span>￥{{classHomeDetail.price}}</span></p>
                    <button class="pay_btn" @click="payBtn()">确认支付</button>
                </div>
            </div>
            <div>
                <div class="law_pay" v-if="second">
                    <p> </p>
                    <div class="law_class">
                        <div>课程名称：{{classHomeDetail.title}}</div>
                        <div>课程时长：120分钟</div>
                        <div>全额：{{classHomeDetail.price}}</div>
                    </div>
                    <div class="law_money">
                        <div class="pay_nums">
                            <p>账户余额支付</p>
                            <p>修改为你的账户可用余额：xxxxx</p>
                        </div>

                        <div class="change_number" v-show="success">
                            <div class="choose_way">
                                <input type="radio" checked class="radio_success"/><i></i>
                                <p><span>用账户余额支付：</span><span>{{classHomeDetail.price}}元</span></p>
                            </div>
                            <div class="phone" v-if="phone">
                                <el-form :model="userValidateForm" :rules="rules" ref="userValidateForm"
                                         class="userValidateForm">
                                    <div class="my divAccount"></div>
                                    <el-form-item  class="phoneNumber">
                                        <img src="../../../static/lawImage/phone.png" alt="">
                                        <el-input v-model="userValidateForm.payPassword" placeholder="请输入支付密码"
                                                  value=""></el-input>
                                    <!-- <el-form-item prop="phoneNumber" class="phoneNumber">
                                        <img src="../../../static/lawImage/phone.png" alt="">
                                        <el-input v-model="userValidateForm.phoneNumber" placeholder="请输入手机号"
                                                  value=""></el-input>
                                    </el-form-item>
                                    <div class="my divPassword"></div>
                                    <el-form-item prop="password" class="vcode">
                                        <img src="../../../static/lawImage/lock.png" alt="">
                                        <el-input v-model="userValidateForm.password" placeholder="请输入验证码"
                                                  maxLenght="10"
                                                  type="number" value=""></el-input>
                                    </el-form-item> -->
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm('userValidateForm')">确认支付</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>


                        </div>
                        <div v-if="fail" class="fail_box" >
                            <p class="pay_fail" >
                                您的账户余额不足，请先充值 <button>去充值</button>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div class="thied" v-if="thirdly">
                <p>支付成功</p>
                <p>订单号：XG20190730234410</p>
                <p>恭喜您，你已支付成功，点击确定即可观看相应课程，若有疑问请致电：400-800-555</p>

                <button class="sure_succese" @click="pay_float=false,first=true,second = false,thirdly = false">确定</button>
            </div>

        </div>

<el-dialog

  :visible.sync="dialogVisible"
  width="60%"
  :before-close="handleClose">
    <video id="myvideo" v-if="dialogVisible" :src="videoArr[0].src" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus" controls height="414" width="720">
                          
    </video>
</el-dialog>


        <div class="block">
            <el-pagination style="text-align: center;margin-top: 30px;"
                           background
                           @current-change="currentChange"
                           layout="prev, pager, next"
                           :total="total">
            </el-pagination>
        </div>

    </div>

</template>


<script>
import { join } from 'path';
import { debug } from 'util';
    export default {
        name: "lecture",
        data() {
            var video;
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
            return {
                id:1,
                dialogVisible:false,
                currentPage:1,
                pageSize:10,
                total:0,
                chapterTitle:0,
                detail: false,
                pay_float: false,
                second: false,
                first: true,
                thirdly: false,
                classDetail: false,
                success: true,
                fail: false,
                phone: true,
                _dom:"",
                videoSrc:'../../../static/lawImage/video.mp4',
                videoImg:'',
                playStatus:false,
                playStatused:false,
                muteStatus:'',
                isMute:true,
                isPlay:false,
                isPlays:false,
                chooseType: [
                    {
                        name: "讲堂市场",
                        id: 1
                    },
                    {
                        name: "已收藏",
                        id: 2
                    },
                    {
                        name: "已购买",
                        id: 3
                    }
                ],
                listPicArr:[
                    {
                    src:require('../../../static/video/1.jpg')
                  },
                    {
                    src:require('../../../static/video/2.jpg')
                  },
                    {
                    src:require('../../../static/video/3.jpg')
                  }
                ],
                videoArr:[
                  {
                    src:require('../../../static/video/1.mp4')
                  },
                   {
                    src:require('../../../static/video/2.mp4')
                  },
                   {
                    src:require('../../../static/video/2.mp4')
                  }
                ],
                classHomeDetail:{},
                contentList: [],
                tableData: [{
                    pic: '../../../static/lawImage/classroom.png',
                    name: '关于合同风险与合同签订',
                    time: '168分钟',
                    price: 1890.55,
                    color: "#ff3300"

                }],
                userValidateForm: {
                    phoneNumber: '',
                    password: '',
                    payPassword:''
                },
                rules: {
                    phoneNumber: [
                        {required: false, validator: validatePhoneNumber, trigger: 'blur'}
                    ],
                    password: [
                        {required: false, message: '请输入验证码', trigger: 'blur'}
                    ]
                },
                recommend_list:[
                    {
                        img:"../../../static/lawImage/classroom.png",
                        detail:"关于合同风险与合同签订",
                        money:"￥99.00",
                        num:"7866"
                    },{
                        img:"../../../static/lawImage/classroom.png",
                        detail:"关于合同风险与合同签订",
                        money:"￥99.00",
                        num:"7866"
                    },{
                        img:"../../../static/lawImage/classroom.png",
                        detail:"关于合同风险与合同签订",
                        money:"￥99.00",
                        num:"7866"
                    },{
                        img:"../../../static/lawImage/classroom.png",
                        detail:"关于合同风险与合同签订",
                        money:"￥99.00",
                        num:"7866"
                    },
                ],


            }
        },
        // document.getElementsByTagName('video')[0]
      watch:{
          dialogVisible(val){
            
              if(!val){

              }
          }
      },
        methods: {
          handleClose(){
              this.dialogVisible=false;
          },
          //初始化
            init(){
                   this.$http.post("/api/api/vedio/lectureColumn/findPageForMarket",{
                          pageNum: this.currentPage,
                          pageSize: this.pageSize}).then(function(res) {
                      if (res.body.code == 200) {
                        this.contentList = res.body.data.result;
                        this.total=res.body.data.totalSize;
                      } else {
                        this.$message.error(res.body.msg);
                      }
                    });
            },
            // 点击收藏
            handleCollect(id,index){
             
                this.$http.get("/api/api/vedio/lectureColumn/collectColumn",{params:{
                    columnId: id,
                    token:localStorage.getItem("token")}
                }).then(function(res) {
                      if (res.body.code == 200) {
                        this.contentList[index].enjoyStatus=1;
                        this.$message({
                            showClose: true,
                            message: '收藏成功',
                            type: 'success'
                        });
                      } else {
                        this.$message.error(res.body.msg);
                      }
                    });
            },
            handleCollect2(id){
              if(this.classHomeDetail.enjoyStatus==1){
                  this.cancleCollect(id)
                return; 
              }
                this.$http.get("/api/api/vedio/lectureColumn/collectColumn",{params:{
                    columnId: id,
                    token:localStorage.getItem("token")}
                }).then(function(res) {
                      if (res.body.code == 200) {
                        this.classHomeDetail.enjoyStatus=1;
                        this.$message({
                            showClose: true,
                            message: '收藏成功',
                            type: 'success'
                        });
                      } else {
                        this.$message.error(res.body.msg);
                      }
                    });
            },
            cancleCollect(id,index){
                this.$http.get("/api/api/vedio/lectureColumn/cancelCollectColumn",{params:{
                    columnId: id,
                    token:localStorage.getItem("token")}
                }).then(function(res) {
                      if (res.body.code == 200) {
                        if(index||index==0){
                             this.contentList[index].enjoyStatus=2;
                        }
                          this.classHomeDetail.enjoyStatus=2;
                        this.$message({
                            showClose: true,
                            message: '取消收藏成功',
                            type: 'success'
                        });
                      } else {
                        this.$message.error(res.body.msg);
                      }
                    });
            },
            handleNav(id){
                this.id=id;
                if(id==1){
                    this.init();
                }else if(id==2){
                    this.$http.post("/api/api/vedio/lectureColumn/findPageForCollection",{
                        pageNum: this.currentPage,
                        pageSize: this.pageSize}).then(function(res) {
                        if (res.body.code == 200) {
                            var result=res.body.data.result;
                            if(result!=0&&result!=null){
                                for(var i=0;i<result.length;i++){
                                    result[i].enjoyStatus=1;
                                }
                            }
                        this.contentList = result;
                        this.total=res.body.data.totalSize;
                        } else {
                        this.$message.error(res.body.msg);
                        }
                    });
                }else if(id==3){
                    this.$http.post("/api/api/vedio/lectureColumn/findPageForPurchase",{
                        pageNum: this.currentPage,
                            pageSize: this.pageSize}).then(function(res) {
                        if (res.body.code == 200) {
                        this.contentList = res.body.data.result;
                        this.total=res.body.data.totalSize;
                        } else {
                        this.$message.error(res.body.msg);
                        }
                    });
                }
                
            },
            // 购买
            handlePay(){
                this.pay_float = true;
            },
            currentChange(val){
                this.currentPage=val;
                this.init();
            }, 
            //购买按钮
              pay(item) {
             
                if(item.payStatus==1){
                  return 
                }

                  this.second =false;
                this.first = true;
                this.thirdly = false; 
                this.pay_float = true;
                this.$http.get("/api/api/vedio/lectureColumn/getByColumnId",{params:{columnId:item.id,token:localStorage.getItem("token")}}).then(res=>{
                    if (res.body.code == 200) {
                        this.classHomeDetail = res.body.data;
                    } else {
                        this.$message.error(res.body.msg);
                    }
                })
            },
            //    购买课程关闭图标
            close() {
                this.pay_float = false;
            },
            //详情
            closed() {
                this.classDetail = false;
            },
            //    确认订单
            payBtn() {
                this.first = false;
                this.second = true;
                this.thirdly=false;
                $('.flow_content>div:nth-of-type(2)').css({background: "#7dc855"});
                $('.flow_content>div:nth-of-type(2)').children('p').css({color: "#ffffff"});
                $('.flow_content>div:nth-of-type(1)').css({background: "#dfdfdf"});
                $('.flow_content>div:nth-of-type(1)').children('p').css({color: "#000"});
            },
            detailButton(id) {
                this.classDetail = true;
                this.$http.get("/api/api/vedio/lectureColumn/getByColumnId",{params:{columnId:id,token:localStorage.getItem("token")}}).then(res=>{
                    if (res.body.code == 200) {
                        this.classHomeDetail = res.body.data;
                    } else {
                        this.$message.error(res.body.msg);
                    }
                })
                
            },
            //确认支付
            submitForm(formName) {
                // this.second = false;
                // this.first = false;
                // this.thirdly = true;
                var id= this.classHomeDetail.id;
             
                var self=this;
               
                
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('/api/api/vedio/lectureColumn/buyColumn',{
                            columnId:id,
                            payPassword:self.userValidateForm.payPassword
                        }).then((res)=>{
                            
                                    if(res.body.code==200){
                                           self.second = false;
                                            self.first = false;
                                            self.thirdly = true;  
                                            self.userValidateForm.payPassword="";
                                            $('.flow_content>div:nth-of-type(3)').css({background: "#7dc855"});
                $('.flow_content>div:nth-of-type(3)').children('p').css({color: "#ffffff"});
                $('.flow_content>div:nth-of-type(1)').css({background: "#dfdfdf"});
                $('.flow_content>div:nth-of-type(1)').children('p').css({color: "#000"});
                $('.flow_content>div:nth-of-type(2)').css({background: "#dfdfdf"});
                $('.flow_content>div:nth-of-type(2)').children('p').css({color: "#000"});
                                        self.init();
                                    }else{
                                        self.$message.error(res.body.msg)
                                    }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            changechapterTitle(item,index){
                this.chapterTitle=index
            },
            //    详情内试看
            playClick() {
                $('.cover').hide();
                $('.video_pic img').hide();
                this.isPlay = !this.isPlay;
                this.playStatus= true;
            },
            tryLook(){
                // this.isPlays = !this.isPlays;
                // this.playStatused= true;
                this.dialogVisible=true;
            },
            tryLook2(){
               this.isPlays = !this.isPlays;
                this.playStatused= true;
              this.dialogVisible=true;
            }
        },
        mounted() {
          this.init();
            var str = "";
            //文本省略
            $('.details').each(function () {
                var len = $(this).text().length;

                if (len > 68) {
                    this.detail = true;
                }
                if (len > 68) {
                    var str = "";
                    str = $(this).text().substring(0, 68) + "...";
                    $(this).html(str);
                    this.detail = true;
                    $(this).parent().children('.detail_button').css({display: "block"});
                }
            });

            //导航栏点击切换
            var content = $(".lecture_box p").attr("data-id");
            $(".lecture_box p").click(function () {
                content = $(this).attr("data-id");
                console.log(content);
                $(this).css({background: "#1e88e5", color: "#ffffff"});
                $(".lecture_box p").not($(this)).css({background: "#ffffff", color: "#000"});
                if (content == 1) {
                } else if (content == 2) {
                    // $('.collect_text').text("取消收藏");
                    $('.second').css({background: "#7dc855"});

                } else {
                    $('.thired').css({background: "#7dc855"});
                    $('.pay_text').text("已购买");
                }
            });

            //  收藏未收藏
            var collect = true;
            $('.second').click(function () {
                if (collect == true) {
                    collect = false;
                    $(this).css({background: "#7dc855"});
                    $(this).children('.collect_text').text("取消收藏");
                } else {
                    collect = true;
                    $(this).css({background: "#1e88e5"});
                    $(this).children('.collect_text').text("收藏");
                }
            })

            //    支付流程
            var flow = $('.flow_type').attr("data-id");
            if (flow == 1) {
                $('.active').css({background: "#7dc855"})
                $('.active').children('p').css({color: "#ffffff"})
            }
        }

    };
</script>
<style >
.haddd .el-dialog__body{
  padding:0;
}
.haddd .el-dialog__body video{
  width:100%;
}
</style>
<style scoped>
.chapterTitle{
  display: inline-block;
  padding:5px 10px;
  border-radius:5px;
  border:1px solid #eee;
  margin-right:10px;
  min-width: 150px;
  text-align: center;

}
.chapterTitle.active{
  background: #1e88e5;
  color: #ffffff;
}
.details{
  display: block;
  height:36px;
  line-height:16px;
     text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
    p {
        cursor: pointer;
    }

    .class_box {
        width: 100%;
    }

    .box_title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .lecture_box {
        display: flex;
    }

    .lecture_box p {
        padding: 7px 65px;
        background: #ffffff;
        cursor: pointer;
    }

    .lecture_box > p:nth-of-type(1) {
        background: #1e88e5;
        color: #ffffff;
    }

    .lecture_list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
    }
.fail_box{
    width: 100%;
    height:200px;
    border: 1px solid #dfdfdf;
}
    .lecture_content {
        /* width: 24%; */
        background: #ffffff;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
        margin: 10px 10px 0 0;
    }

    .pic {
        width: 90%;
        margin: 20px 5%;
        height: 230px;
    }

    .title {
        font-size: 15px;
        font-weight: bold;
        width: 90%;
        margin: 0 5% 10px 5%;
    }

    .picese {
        width: 90%;
        margin: 0 5% 10px 5%;
    }

    .icon {
        /* margin-left: 50px; */
      float:right;
    }

    .people_num {
        font-size: 13px;
        margin-left: 3px;
        color: #999999;
        float: right;
        line-height: 23px;
    }

    .money {
        color: #ff3300;
    }

    .lecture_detail_box {
        width: 90%;
        margin: 0 5% 10px 5%;
        position: relative;
        display: flex;
    }

    .lecture_detail {
        width: 90%;
        font-size: 13px;
        color: #999999;
        margin: 0 5% 10px 5%;
        display: flex;
        position: relative;
        justify-content: space-around;
    }

    .detail_button {
        font-size: 13px;
        color: #ff3300;
        margin-left: 5px;
        /* display: none; */
    }

    .list_button {
        width: 90%;
        display: flex;
        justify-content: space-around;
        margin: 0 5% 20px 5%;
    }

    .list_button p {
        padding: 12px 0;
        font-size: 14px;
        color: #ffffff;
        background: #1e88e5;
        width: 30%;
        border-radius: 5px;
        text-align: center;
        min-width: 70px;
    }

    .text img {
        position: relative;
        top: 1px;
        right: 1px;
    }

    .pay_flow,.class_detail{
        position: fixed;
        top: 155px;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 50%;
        height:600px;
        z-index: 10;
        background: #ffffff;
        box-shadow: 0.2px 0.3px 0px 0.3px #999999;
    }
.scroll_box{
    height: 95%;
    overflow: auto;
}
    .flow_title {
        background: #1e88e5;
        display: flex;
        justify-content: space-between;
    }

    .flow_title p {
        font-size: 14px;
        color: #ffffff;
        padding: 5px;
    }

    .flow_title img {
        width: 15px;
        height: 15px;
        position: relative;
        top: 8px;
        right: 5px;
    }

    .flow_line {
        width: 60%;
        height: 3px;
        text-align: center;
        background: #dfdfdf;
        margin: 80px auto 10px auto;
    }

    .flow_content {
        margin: -60px auto 0 auto;
        width: 70%;
        display: flex;
        justify-content: space-between;
    }
.flow_content div.active{
    background:rgb(125, 200, 85);
    
}
.flow_content div.active p{
    color:#fff;
}
    .flow_type {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #dfdfdf;
    }

    .flow_type p {
        text-align: center;
        z-index: 11;

    }

    .pay_num {
        font-size: 28px;
        font-weight: bold;
        padding-top: 20px;
        color: #999999;
    }

    .pay_texts {
        font-size: 12px;
        color: #000;
    }

    .law_flow {
        width: 80%;
        margin: 30px auto 20px auto;
    }

    .flow_pay {
        width: 90%;
        text-align: right;
        margin-right: 15px;
    }

    .flow_pay p span:nth-of-type(1) {
        font-size: 12px;
    }

    .flow_pay p span:nth-of-type(2) {
        color: #ff3300;
    }

    .flow_pay button {
        width: 100px;
        height: 30px;
        text-align: center;
        background: #ff6600;
        color: #ffffff;
        text-align: center;
        margin-top: 10px;
        border: 0;
    }

    .law_pay {
        width: 80%;
        margin: 30px auto 10px auto;
    }

    .law_pay > p:nth-of-type(1) {
        background: #dfdfdf;
        padding: 5px;
        width: 98.85%;
    }

    .law_class {
        width: 100%;
        display: flex;
        box-sizing: border-box;
    }

    .law_class div {
        width: 33.33%;
        text-align: center;
        padding: 15px 0;
        border: 1px solid #dfdfdf;
    }

    .law_class div:nth-of-type(2) {
        border-left: 1px solid #dfdfdf;
        border-right: 1px solid #dfdfdf;
    }

    .law_money {
        width: 100%;
        margin: 30px auto 15px auto;
    }

    .pay_nums {
        display: flex;
        background: #f9f9f9;
        padding: 10px;
        border: 0;
        justify-content: space-between;
    }

    .pay_nums p:nth-of-type(1) {
        font-size: 15px;
        font-weight: bold;
    }

    .balance {
        color: #ff3300;
    }

    .choose_way {
        display: flex;
        margin-top: 10px;
        position: relative;
    }

    .thied {
        width: 80%;
        margin: 30px auto 20px auto;
        position: relative;
    }

    .thied p {
        text-align: center;
        margin-top: 15px;
    }

    .thied p:nth-of-type(1) {
        color: #ff3300;
        font-size: 20px;
        font-weight: bold;
    }

    .thied p:nth-of-type(2) {
        color: #ff3300;
        font-size: 16px;
    }

    .thied p:nth-of-type(3) {
        color: #999999;
        font-size: 14px;
    }

    .sure_succese {
        width: 80px;
        height: 40px;
        text-align: center;
        font-size: 16px;
        color: #ffffff;
        background: #ff6600;
        text-align: center;
        border: 0;
        position: absolute;
        left: 46%;
        margin-top: 55px;
        border-radius: 5px;
    }
    .video_pic{
        width: 60%;
        height: 20%;
        position: relative;
    }
    .video_pic video{
        width: 100%;
        height: 300px;
    }
    .video_pic img:nth-of-type(1){
        position: absolute;
        top: 37%;
        left: 36%;
    }
    .cover{
        width: 100%;
        height: 100%;
        position: absolute;
        background: #000;
        opacity: 0.5;
        top: 0;
        left: 0;
    }
    .video_list{
        display: flex;
        margin-top: 20px;
    }
    .video_list div{
        width: 80px;
        height: 80px;
        background: #1e88e5;
        border-radius: 5px;
    }
    .video_list div.active{
        background: rgb(125, 200, 85); 
    }
    .video_list div:nth-of-type(2){
        margin: 0 20px;
    }
    .video_list div img{
        margin: 13px 0 0 24px;
    }
    .video_list div p{
        text-align: center;
        margin-top: 10px;
        color: #ffffff;
    }
    .video{
        display: flex;
    }
    .video_detail{
        margin-left: 20px;
    }
    .video_detail>p:nth-of-type(1){
        font-weight: bold;
        padding-bottom: 15px;
        border-bottom: 1px dashed #dfdfdf;
        font-size: 20px;
    }
    .video_title{
        color: #999999;
        margin-top: 10px;
    }
    .video_color{
        color: #ff3300;
        font-size: 18px;
    }
    .video_detail>p:nth-last-of-type(1){
        padding-bottom: 15px;
        border-bottom: 1px dashed #dfdfdf;
    }
    .video_list_title{
        border-left: 2px solid #ff3300;
        font-size: 18px;
        font-weight: bold;
        width: 90%;

        margin: 20px auto 0 auto;
        padding-left: 10px;
    }
    .video_content{
        width: 90%;
        border-top: 1px dashed #dfdfdf;
        margin: 10px auto 30px auto;
    }
    .recommend{
        width: 90%;
        margin: 20px auto 10px auto;
        display: flex;
        flex-wrap: wrap;
    }
    .recommend_list{
        width: 30%;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
        margin: 10px 10px;
    }
    .recommend_list>img{
        width: 90%;
        display: initial;
        margin: 10px;
    }
    .recommend_list p{
        width: 90%;
        margin: 5px auto 0 auto;
    }
    .recommend_list p:nth-of-type(1){
       font-weight: bold;
    }
    .recommend_list p:nth-of-type(2){
        font-size: 12px;
        position: relative;
        margin-bottom: 10px;
    }
    .look_num{
        position: absolute;
        right: 0;
    }
    .change_number{
        border: 1px solid #d0d0d0;
        padding: 0 15px;
    }
    .radio_success{
        position: relative;
        top: 5px;
        margin-right: 8px;
        opacity: 0;
        left: -10000000000px;
    }
    .choose_way i{
        display: block;
        position: absolute;
        top: 6px;
        left: 0;
        width: 10px;
        height: 10px;
        outline: 0;
        border: 1px solid #e4e4e4;
        background: #ffffff;
        border-radius: 50%;
        transition: border-color .3s;
        -webkit-transition: border-color .3s;
    }
    .choose_way i::after{
        position: absolute;
        content: '';
        top: 2px;
        left: 2px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #178ac7;
        opacity: 0;
        transition: opacity .1s;
        -webkit-transition: opacity .1s;
    }
    .choose_way i::after{
        opacity: 1;
    }
</style>
<style>
    .class_box .law_flow tr.el-table__row td div.cell {
        text-align: center;
    }

    .class_box .law_flow tr.el-table__row td.el-table_1_column_4 {
        color: #ff3300;
    }

    .class_box .law_flow th {
        background: #f9f9f9;
    }
 .class_box  .el-form-item .el-input__inner{

     width: 280px !important;
     height: 42px !important;
     outline: none !important;
    }
    .class_box .el-form-item__content img{
        width: 20px;
        position: relative;
        top: 32px;
        z-index: 26;
        margin-left: 7px;
    }
  .class_box  .el-form-item vcode{
        width: 30%;
    }
.class_box .video{
    width: 90%;
    margin: 15px auto 10px auto;
}
    .class_box  .el-form-item__content{
        line-height: 0;
        margin-bottom: 0;
    }
    .class_box .el-form-item__content .el-button{
        margin-top: 20px;
        background: #ff6600;
        border: 1px solid #ff6600;
        position: absolute;
        right: 0;
        bottom: -50px;
    }
    .class_box .el-form-item{
        margin-bottom: 7px;
    }
    .class_box .el-input__inner{
        padding: 0 29px;
    }
    .class_box .pay_fail{
        text-align: center;
        margin-top: 50px;
        color: #ff3300;
    }
    .class_box .pay_fail button{
        width: 60px;
        height: 30px;
        background:#ff3300;
        text-align: center;
        color: #ffffff;
        border: 0;
        border-radius: 5px;
    }
    .class_box .el-button{
        padding: 8px 10px;
        background:#ff6600;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background: #1e88e5!important;
    }
</style>
