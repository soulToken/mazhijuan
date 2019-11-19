<template>
    <div class="box">
      <p>历史合同</p>
      <div>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2">
        </el-input>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">刷新</el-button>
      </div>
      <div class="ht">
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
            label="评价">
            <template slot-scope="scope">
              <el-button style="background: #ff6600;border-color: #ff6600" type="primary" size="small">评价</el-button>
            </template>
          </el-table-column>
        </el-table>
        </div>
        <div class="pj">
          <div>
            <div>
              评价内容
            </div>
            <div>
              <textarea name="" placeholder="请在这里写下您的真实评价，我们将用心为您服务!"></textarea>
            </div>
          </div>
          <div>
            <div>上传图片</div>
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary" style="background: transparent;border: none"> <img src="../../../static/img/tp.png" alt=""></el-button>
              <div slot="tip" class="el-upload__tip" style="color: #878b8c; font-size: 14px;">0/5</div>
            </el-upload>
          </div>
        </div>
        <el-button style="float: right; margin-top: 20px;margin-right: 20px" type="primary" size="small" @click="submitUpload">提交</el-button>
      </div>
      <div class="ht" style="padding-bottom: 20px;margin-bottom: 20px">
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
              label="评价">
              <template slot-scope="scope">
                <el-button type="primary" style="background: #ff6600;border-color: #ff6600" size="small">评价</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <p style="padding-left: 20px;margin-bottom: 10px;font-weight: bold">历史评价：</p>
        <div class="pj">
          <div>
            <div style="width: 125px">
              <img style="width: 100%;height: 100%;" src="../../../static/img/lspj.png" alt="">
            </div>
            <div style="padding: 20px 20px">
              <p style="margin-bottom: 15px"><span style="font-weight: bold">甲方:</span> <span>合作愉快</span></p>
              <p style="margin-bottom: 15px"><span style="font-weight: bold">乙方:</span> <span>合作愉快</span></p>
              <p style="margin-bottom: 15px"><span style="font-weight: bold">丙方:</span> <span>合作愉快</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="ht" style="padding-bottom: 20px;margin-bottom: 20px">
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
              label="评价">
              <template slot-scope="scope">
                <el-button style="background: #ff6600;border-color: #ff6600" type="primary" size="small">评价</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-pagination style="text-align: center;margin-bottom: 30px"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "history",
      data() {
        return {
          input2:'',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          fileList:[],
        }
      },
      methods: {
        submitUpload() {
          this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        }
      }
    }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .box{
    width: 100%;
    height: 100%;
  }
  .box>p{
    font-weight: bold;
    margin-bottom: 30px;
  }
  .el-input{
    width: 340px;
    height: 40px;
    margin-right: 10px;
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
  .upload-demo{
    display: flex;
  }
  .upload-demo>ul{
    display: flex;
  }
</style>
<style>
  .el-upload-list{
    display: flex;
  }
  .el-upload-list__item{
    margin-top: 10px;
  }
</style>
