<template>
    <div class="box">
      <div class="opinionswitch">
        <p @click="show=false" :style="{'background':show==false?'#1e88e5':'#fff','color':show==false?'#fff':'#666'}">列表</p>
        <p @click="show=true" :style="{'background':show==true?'#1e88e5':'#fff','color':show==false?'#666':'#fff'}">新增</p>
      </div>
      <div class="opinion">
        <div class="opinionval" v-if="show==false">
          <div class="employee_list">
            <el-table
              :data="tableData.result"
              :stripe="true"
              border
              style="width: 100%;text-align: center;">
              <el-table-column
                prop="title"
                label="标题"
              >
              </el-table-column>
              <el-table-column
                prop="handTm"
                label="提交时间">
              </el-table-column>
              <el-table-column
                prop="lastReplyTm"
                label="回复时间">
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态"
                width="80">
                <template slot-scope="scope">
                <p v-if="scope.row.status == 2">已回复</p>
                <p v-else>待回复</p>
                </template>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="getis(scope.row.id)">查看</el-button>
                  <el-button type="text" size="small" @click="deleted()">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="block" style="text-align: center;margin-top: 20px">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="tableData.pageSize"
              layout="prev, pager, next, jumper"
              :total="tableData.totalSize">
            </el-pagination>
          </div>
        </div>
        <div v-else class="addOpinion">
          <div>
          <p>标题：</p><input type="text" v-model="tite" placeholder="请在此输入标题">
        </div>
          <div>
            <p>内容：</p><textarea v-model="val"  placeholder="请再此输入意见及建议内容"></textarea>
          </div>
          <p style="cursor: pointer" @click="btn">提交</p>
        </div>
        <div class="Community">
          <div><img src="../../../static/img/yjb.png" alt=""><p>WELCOME</p></div>
          <p>上海迅阔电子科技有限公司</p>
          <p>您好！</p>
          <p>首先感谢你对企业社区的支持与信任！请在这里写下你宝贵的意见和建议，我们将在成长中不断进步！</p>
          <p>再次感谢你对企业社区的支持与信任！请在这里写下你宝贵的意见和建议，我们将和你一起成长，共同进步！</p>
        </div>
      </div>
      <div class="cx_message" v-if="detailed">
        <div>
          <p>意见及建议</p><img @click="detailed=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <div class="messagelist darkBg"> 
            <span class="jiantou right"><img src="../../../static/img/right.png" alt=""></span>
            <p class="top"><b>我的意见及建议：</b><span> <img src="../../../static/img/time.png" alt=""> {{help.handTm}}</span></p>
            <p class="tit">标题：{{help.title}}</p>
            <p class="content">内容：{{help.content}}</p>
          </div>
          <div class="messagelist" v-for="item in help.replies"> 
            <span class="jiantou"><img src="../../../static/img/left.png" alt=""></span>
            <p class="top"><b><span style="color:#f00;">{{item.replyName}}</span>回复：</b><span> <img src="../../../static/img/time.png" alt="">{{item.replyTm}}</span></p>
            <p class="content" style="padding-top:10px;">内容：{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "OpinionList",
        data(){
          return{
            show:false,
            detailed:false,
            tableData:'',
            currentPage: 1,
            help:'',
            tite:'',
            val:''
          }
        },
      mounted() {
          this.$http.post('/api/api/help/suggestionHand/findPage',{pageNum:1,pageSize:15}).then(function (res) {
            if (res.body.code==200){
              this.tableData=res.body.data;
            }else{
              this.$message.error(res.body.msg);
            }
          });
      },
      methods:{
        handleCurrentChange(val) {
          this.$http.post('/api/api/help/suggestionHand/findPage',{pageNum:val,pageSize:15,}).then(function (res) {
            if (res.body.code==200){
              this.tableData=res.body.data;
            }else{
              this.$message.error(res.body.msg);
            }
          });
        },
        getis(id){
          this.$http.get('/api/api/help/suggestionHand/getById',{params:{id:id,token:localStorage.getItem("token")}}).then(function (res) {
            if (res.body.code == 200){
              this.detailed = true;
              this.help = res.body.data;
            }else {
              this.$message.error(res.body.msg)
            }
          })
        },
        btn(){
          this.$http.post('/api/api/help/suggestionHand/save',{title:this.tite,content:this.val}).then(function (res) {
            if (res.body.code == 200){
              this.show = false;
              this.$http.post('/api/api/help/suggestionHand/findPage',{pageNum:1,pageSize:15}).then(function (res) {
                if (res.body.code==200){
                  this.tableData=res.body.data;
                }else{
                  this.$message.error(res.body.msg);
                }
              });
            } else {
              this.$message.error(res.body.msg);
            }
          })
        },
      }
    }
</script>

<style scoped>
  .messagelist{
    padding:15px;
    border:1px solid #e0e0e0;
    font-size: 13px;
    position: relative;
    margin-bottom: 10px;
  }
  .darkBg{
    background:#f6f6f6;
    border:none;
  }
  .messagelist .jiantou{
    position: absolute;
    top:50%;
    margin-top:-10px;
    left:-11px;
    padding-right: 1px;
    background:#fff;
  }
  .messagelist .jiantou img{
     width: 10px;
    height: 20px;
  }
  .messagelist .right{
    top:20px;
    margin:0;
    right:-9px;
    left: auto;
    padding:0;
  }
  .messagelist .top{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    line-height: 20px;
  }
  .messagelist .top b{
    font-weight: normal;
    color: #222;
  }
  .messagelist .top span{
    color: #999;
  }
  .messagelist .top span img{
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
  .messagelist .tit{
    padding:15px 0 10px;
    color:#222;
  }
  .messagelist .content{
    color:#666;
    line-height: 20px;
  }
  .messagelist .top span{
    color:#999;
  }
  .opinionswitch{
    display: flex;
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
  .opinion{
    display: flex;
    margin-top: 20px;
  }
  .opinion>div:nth-of-type(1){
    background: #fff;
    width: 1100px;
    height: 700px;
    margin-right: 30px;
    border-radius: 5px;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .opinion>div:nth-of-type(2){
    background: #fff;
    width: 500px;
    height: 500px;
    border-radius: 5px;
  }
  .opiniondata{
     display: flex;
     border-bottom: 1px dashed;
     position: relative;
     padding-top: 20px;
   }
  .opinionval>div>div>p:nth-of-type(1){
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
   cursor: pointer;
  }
  .opinionval>div>div>p:nth-of-type(2){
    color: #666;
    margin-bottom: 10px;
  }
  .opinionval>div>p{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5px;
    line-height: 95px;
    color: #999;
    font-size: 14px;
  }
  .opinionval>div>p>img{
    margin-right: 5px;
  }
  .Community>div:nth-of-type(1){
    height: 45px;
    display: flex;
    font-weight: bold;
    line-height: 45px;
    color: #358ed7;
    padding: 20px;
    font-size: 18px;
  }
  .Community>div:nth-of-type(1)>img{
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }
  .Community>p:nth-of-type(1){
    color: #358ed7;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .Community>p:nth-of-type(2){
    color: #666;
    padding-left: 40px;
    font-size: 16px;
    font-weight: bold;
    padding-top: 5px;
  }
  .Community>p:nth-of-type(3){
    color: #666;
    padding: 5px 20px;
    font-size: 16px;
    text-indent: 20px;
  }
  .Community>p:nth-of-type(4){
    color: #666;
    padding: 5px 20px;
    font-size: 16px;
    text-indent: 20px;
  }
  .message_val>pre{
    white-space: pre-wrap;
    word-wrap: break-word;
    padding-top: 30px;
  }
  .message_val>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    padding-top: 22px;
  }
  .message_val>p:nth-of-type(2){
    font-size: 14px;
    color: #999999;
    text-align: center;
    padding: 11px;
    border-bottom: 1px solid #ccc;
  }
  .message_val{
    height: calc(530px - 85px);
    padding: 0 20px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 20px 20px 30px 0;
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
    height: 530px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
  }
  .addOpinion{
    padding: 0 60px!important;
    padding-top: 40px !important;
    box-sizing: border-box;
  }
  .addOpinion>div{
    display: flex;
    margin-top: 20px;
  }
  .addOpinion>div>p{
    width: 60px;
    line-height: 36px;
  }
  .addOpinion>div>input{
    height: 36px;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    width: 100%;
    padding-left: 20px;
  }
  .addOpinion>div>textarea{
    height: 320px;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    width: 100%;
    padding-left: 20px;
    padding-top: 10px;
    resize:none;
    font-family: "微软雅黑";
  }
  .addOpinion>p{
    width: 220px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin: auto;
    background: #358ed7;
    color: #fff;
    border-radius: 5px;
    margin-top: 30px;
  }
</style>
