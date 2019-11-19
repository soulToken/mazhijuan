<template>
    <div class="box">
      <p>进行合同</p>
      <div class="ht" style="padding-bottom: 0px;margin-bottom: 20px">
        <div>
          <p><i style="color: #055091;font-size: 18px;margin-right: 10px;position: relative;top: 1px;" class="el-icon-s-order"></i>合同号 : 201907082347</p>
          <p><i style="font-size: 16px;margin-right: 5px;position: relative;top: 1px;" class="el-icon-time"></i>创建时间 : 2019-02-22 22:22:22</p>
        </div>
        <div class="bd">
          <el-table
            :data="tableData"
            :stripe='true'
            border
            style="width: 100%;text-align: center">
            <el-table-column
              label="合同标题"
            >
              建设工程合同
            </el-table-column>
            <el-table-column
              label="合同金额（万元）"
            >
              1869.00
            </el-table-column>
            <el-table-column
              label="企业名称"
            >
              <p>甲方：讯阔电子科技有限公司</p>
              <p>乙方：上汽大众汽车有限公司</p>
            </el-table-column>
            <el-table-column
              label="合同负责人">
              <p>甲方：方健</p>
              <p>乙方：方健</p>
            </el-table-column>
            <el-table-column
              prop="address"
              label="负责人电话">
              <p>甲方：18768859588</p>
              <p>乙方：18738013188</p>
            </el-table-column>
            <el-table-column
              prop="address"
              label="合同状态">
              合同终止
            </el-table-column>
            <el-table-column
              label="留言">
              <template slot-scope="scope">
                <p style="color: #0066ff;  cursor: pointer;" @click="stay=true">查看留言（8）</p>
              </template>
            </el-table-column>
          </el-table>
          <div style="text-align: right;padding-top: 20px">
            <el-button type="primary">缴费</el-button>
            <el-button type="primary">确收</el-button>
            <el-button type="primary">验收</el-button>
            <el-button type="primary">执行</el-button>
            <el-button type="primary">律师</el-button>
          </div>
        </div>
      </div>
      <div class="ht" style="padding-bottom: 0px;margin-bottom: 20px">
        <div>
          <p><i style="color: #055091;font-size: 18px;margin-right: 10px;position: relative;top: 1px;" class="el-icon-s-order"></i>合同号 : 201907082347</p>
          <p><i style="font-size: 16px;margin-right: 5px;position: relative;top: 1px;" class="el-icon-time"></i>创建时间 : 2019-02-22 22:22:22</p>
        </div>
        <div class="bd">
          <el-table
            :data="tableData"
            :stripe='true'
            border
            style="width: 100%;text-align: center">
            <el-table-column
              label="合同标题"
            >
              建设工程合同
            </el-table-column>
            <el-table-column
              label="合同金额（万元）"
            >
              1869.00
            </el-table-column>
            <el-table-column
              label="企业名称"
            >
              <p>甲方：讯阔电子科技有限公司</p>
              <p>乙方：上汽大众汽车有限公司</p>
            </el-table-column>
            <el-table-column
              label="合同负责人">
              <p>甲方：方健</p>
              <p>乙方：方健</p>
            </el-table-column>
            <el-table-column
              prop="address"
              label="负责人电话">
              <p>甲方：18768859588</p>
              <p>乙方：18738013188</p>
            </el-table-column>
            <el-table-column
              prop="address"
              label="合同状态">
              合同终止
            </el-table-column>
            <el-table-column
              fixed="right"
              label="留言">
              <template slot-scope="scope">
                <p style="color: #0066ff;  cursor: pointer;">查看留言（8）</p>
              </template>
            </el-table-column>
          </el-table>
          <div style="text-align: right;padding-top: 20px">
            <el-button type="primary">缴费</el-button>
            <el-button type="primary">确收</el-button>
            <el-button type="primary">验收</el-button>
            <el-button type="primary">执行</el-button>
            <el-button type="primary">律师</el-button>
          </div>
        </div>
      </div>
      <div class="cx_message" v-if="stay">
        <div>
          <p>查看留言</p><img @click="stay=false" src="../../../static/img/esc.png" alt="">
        </div>
        <p>建筑工程合同</p>
        <p>关于XXXXXXXXXXX</p>
        <div class="message_val">
          <div class="opiniondata" @click="detailed = true">
            <div>
              <p>对于平台我有一个中肯的建议</p>
              <p>首先感谢您对企业社区的支持与信任！请在这里写下你宝贵的意见和建议，我们将在成长中不断进步！</p>
            </div>
            <p><img src="../../../static/img/sj.png" alt="">2019.08.01</p>
          </div>
          <div class="signedBox">
            <div class="block" style="margin-top: 30px">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
              </el-pagination>
            </div>
            <textarea placeholder="留言内容"></textarea>
            <p style="  cursor: pointer;">发表留言</p>
          </div>
        </div>
      </div>
      <div class="block" style="margin-top: 30px;text-align: center">
        <el-pagination
          style="width: 100%;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Conduct",
      data(){
        return{
          stay:false,
          edit:false,
          show:false,
          Choice:false,
          currentPage3: 1,
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
        }
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
    }
</script>

<style scoped>
  .box>p{
    font-weight: bold;
  }
  .ht{
    width: 100%;
    background: #ffffff;
    border-radius: 2px;
    margin-top: 30px;
    position: relative;
    padding-bottom: 60px;
  }
  .ht>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    padding-top: 25px ;
  }
  .ht>div:nth-of-type(1)>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
  }
  .ht>div:nth-of-type(1)>p:nth-of-type(2){
    color: #777;
  }
  .bd{
    padding: 20px 20px;
  }
  .pj{
    padding: 0 20px;
  }
  .pj>div{
    border: 1px solid #eee;
  }
  .pj>div{
    display: flex;
  }
  .pj>div:nth-of-type(1)>div{
    height: 176px;
  }
  .pj>div:nth-of-type(1)>div:nth-of-type(1){
    width: 115px;
    border-right: 1px solid #eee;
    background: #f7f7f7;
    text-align: center;
    line-height: 176px;
    font-weight: bold;
  }
  .pj>div:nth-of-type(1)>div:nth-of-type(2){
    width: calc(100% - 115px);
  }
  .pj>div:nth-of-type(2)>div{
    height: 75px;
  }
  .pj>div:nth-of-type(2)>div:nth-of-type(1){
    width: 115px;
    border-right: 1px solid #eee;
    background: #f7f7f7;
    text-align: center;
    line-height: 75px;
    font-weight: bold;
  }
  .pj>div:nth-of-type(2)>div:nth-of-type(2){
    width: calc(100% - 115px);
    padding: 15px 0 15px 15px;
    line-height: 75px;
  }
  .pj>div:nth-of-type(1)>div:nth-of-type(2)>textarea{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    resize:none;
    padding: 20px 15px;
    box-sizing: border-box;
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
  .opiniondata{
    display: flex;
    border: 1px solid #dfdfdf;
    position: relative;
  }
  .opiniondata>div{
    padding: 20px;
    width: 70%;
  }
  .opiniondata>div>p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  .opiniondata>div>p:nth-of-type(2){
    color: #666;
    margin-bottom: 10px;
  }
  .opiniondata>p{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    line-height: 120px;
    color: #999;
    font-size: 14px;
  }
  .signedBox{
    width: 750px;
    background: #fff;
    height: 300px;
    position: absolute;
    bottom: 0;
    text-align: right;
  }
  .signedBox>textarea{
    height: 110px;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    width: 100%;
    background: #f7f7f7;
    padding-left: 20px;
    padding-top: 10px;
    resize:none;
    font-family: "微软雅黑";
    margin-top: 30px;
  }
  .signedBox>p{
    width: 90px;
    height: 38px;
    background: #26c6da;
    text-align: center;
    line-height: 38px;
    color: #fff;
    border-radius: 5px;
    float: right;
    margin-top: 20px;
  }
</style>
