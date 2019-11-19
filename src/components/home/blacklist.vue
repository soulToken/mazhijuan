<template>
<div class="blacklist_box">
    <div class="blacklist_list">
<div class="blacklist_title">
    <p>企业黑名单</p>
    <p>共计<span class="blacklist_number">128</span>家</p>
</div>
<div class="list_box">
<div class="blacklist_tabel" v-for="arr in tableData.result">
    <div>
    <p>{{arr.companyName}}</p>
    </div>
    
</div>
</div>
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
</template>




<script>
    export default {
        name: "blacklist_tabel",
      data() {
        return {
          currentPage: 1,
          tableData:{},
        }
      },
      mounted(){
         var ary=$('.blacklist_tabel');
        for(var i = 0; i < ary.length; i++){
           if (i % 2 != 0) {
              $('.blacklist_tabel').eq(3*i).css("background","#fafafa");
              $('.blacklist_tabel').eq(3*i+1).css("background","#fafafa");
              $('.blacklist_tabel').eq(3*i+2).css("background","#fafafa");
           }
        }
        this.$http.post('/api/api/user/company/blacklist/findPage',{pageNum:this.currentPage,pageSize:15,}).then(function (res) {
          if (res.body.code==200){
            this.tableData=res.body.data;
          }else{
            this.$message.error(res.body.msg);
          }
        });
      },
      methods: {
        handleCurrentChange(val) {
          this.$http.post('/api/api/user/company/blacklist/findPage',{pageNum:val,pageSize:15,}).then(function (res) {
            if (res.body.code==200){
              this.tableData=res.body.data;
            }else{
              this.$message.error(res.body.msg);
            }
          });
        }
      },
    }
</script>
<style scoped>
.blacklist_box{
    width: 100%;
    height: 100%;
}
.blacklist_list{
    background-color: #ffffff;
    width: 100%;
    border: 1px solid #dfdfdf;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 5px;
    background: #ffffff;
    padding: 0 20px;
    overflow: hidden;

}
.blacklist_title{
    height: 45px;
    border-bottom: 1px solid #dfdfdf;
    line-height: 45px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 30px;
}

.blacklist_title p{
    font-weight: bold;
    font-size: 16px;
    width: 80px;
    text-align: center;
    border-bottom: 0.5px solid #1f88e4;
}
.blacklist_title>p:nth-of-type(2){
    border: transparent;
}
.blacklist_number{
    color: #ff3300;
}
.tabel_box{
    display: flex;
    border-bottom: 1px solid #dfdfdf;
}

.list_box{
    margin-bottom: 30px;
    border-radius: 5px;
    border: 0.5px solid #dfdfdf;
    display: flex;
    flex-wrap: wrap;
}

.list_box div div p{
    text-align: center;
    font-size: 15px;
}
.blacklist_tabel{
    line-height: 60px;
    width: 33.33%;
    border-bottom: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-right: 1px solid #dfdfdf;
}
.list_box div>div:nth-of-type(even){
    border-right: 0.5px solid #dfdfdf;
    border-left: 0.5px solid #dfdfdf;
}
</style>
