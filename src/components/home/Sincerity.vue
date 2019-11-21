<template>
    <div class="box">
      <div>
        <div class="ts">
          <p>诚信动态</p>
          <p></p>
        </div>
        <ul class="dt-xx">
          <li @click="getById(item.id);showcx=true" v-for="item in Sincerity.result">
            <p><span>·&nbsp{{item.title}}</span><span>{{item.puhlishDate}}</span></p>
            <p>访问次数:{{item.visitCount}}</p>
          </li>
        </ul>
      </div>
      <div class="block" style="text-align: center;margin-top: 20px">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="Sincerity.pageSize"
            layout="prev, pager, next, jumper"
          :total="Sincerity.totalSize">
        </el-pagination>
      </div>
      <!-- 详情 -->
          <div class="cx_message" v-if="dialogVisible">
        <div>
          <p>诚信动态</p><img @click="dialogVisible=false" src="../../../static/img/esc.png" alt="">
        </div>
        <div class="message_val">
          <p>{{bodyget.title}}</p>
          <p>发布时间：{{bodyget.puhlishDate}}</p>
          <pre v-html="bodyget.content">
             　
          </pre>
        </div>
      </div>
    </div>
    
</template>

<script>
    export default {
        name: "Sincerity",
      data() {
        return {
          currentPage: 1,
          Sincerity:{},
          bodyget:{},
          dialogVisible:false
        };
      },
      mounted() {
          let that = this;
        //2.9.诚信动态/更多
        this.$http.post('/api/api/data/news/honesty/findPage',{pageNum:this.currentPage,pageSize:that.Sincerity.pageSize,}).then(function (res) {
          if (res.body.code==200){
            that.Sincerity=res.body.data;
          }else{
            this.$message.error(res.body.msg);
          }
        });
      },
      methods: {
        getById(id){
        console.log(id)
          this.$http.get('/api/api/data/news/getById?id='+id).then(function (res) {
            if (res.body.code==200){
              this.bodyget=res.body.data;
              this.dialogVisible = true;
            }else{
              this.$message.error(res.body.msg);
            }
          });
        },
        handleCurrentChange(val) {
          this.$http.post('/api/api/data/news/honesty/findPage',{pageNum:val,pageSize:this.Sincerity.pageSize,}).then(function (res) {
            if (res.body.code==200){
              that.Sincerity=res.body.data;
            }else{
              this.$message.error(res.body.msg);
            }
          });
        }
      },
    }
</script>

<style scoped>

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
    height: calc(810px - 85px);
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
    /* height: 810px; */
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
  }
  .dt-xx>li{
    width: 100%;
    font-size: 14px;
    color: #333;
    display: flex;
    justify-content: space-between;
    line-height: 38px;
    padding-left: 20px;
    box-sizing: border-box;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .dt-xx>li:nth-of-type(2n+2){
    background: #f9f9f9;
  }
  .dt-xx>li:hover{
    color: #0265cd !important;
    font-weight: initial;
    cursor:pointer;
  }
  .dt-xx>li>p>:hover{
    color: #0265cd !important;
    font-weight: initial;
  }
  .bt-xx>li>p{
    min-width: 100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .dt-xx>li:nth-of-type(1)>p:nth-of-type(1){
    color: #0464ca;
    font-weight: bold;
  }
  .dt-xx>li>p:nth-of-type(2){
    margin-right: 40px;
  }
  .dt-xx>li>p>span:nth-of-type(1){
    margin-right: 20px;
  }
  .box>div:nth-of-type(1){
    width: 100%;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 5px;
    background: #ffffff;
    padding: 0 20px;
    overflow: hidden;
  }
  .box>div:nth-of-type(1){
    height: 55%;
  }
  .box>div:nth-of-type(2){
    height: 42%;
  }
  .ts{
    height: 45px;
    border-bottom: 1px solid #dfdfdf;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
  }
  .ts>p:nth-of-type(1){
    width: 80px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    border-bottom: 1px solid #1f88e4;
  }
  .ts>p:nth-of-type(2){
    color: #777;
    font-size: 15px;
  }
</style>
