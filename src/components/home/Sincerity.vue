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
      <el-dialog title="收货地址" :visible.sync="dialogVisible">
         <p>{{bodyget.title}}</p>
          <p>发布时间：{{bodyget.puhlishDate}}</p>
          <pre v-html="bodyget.content">
             　
          </pre>
          
      </el-dialog>
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
