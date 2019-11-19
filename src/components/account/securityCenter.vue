<template>
    <div class="security_center ">
        <p>安全中心</p>
        <div class="search_title">
            <img src="../../../static/accountManagement/index_search.png" alt="" class="search_icon">
            <input type="text" class="search_input" placeholder="请输入手机号码"/>
            <button class="search_button" style="cursor: pointer">查询</button>
        </div>
        <div class="security_list">
            <el-table
                    :data="tableData.result"
                    :stripe="true"
                    border
                    style="width: 100%;text-align: center;">
                <el-table-column
                        type="index"
                        label="ID"
                        width="80"
                >
                </el-table-column>
                <el-table-column
                        prop="ipAddr"
                        label="登录IP">
                </el-table-column>
                <el-table-column
                        prop="loginTm"
                        label="登录时间">
                </el-table-column>
                <el-table-column class="site"
                        prop="status"
                        label="风险"
                        width="200">
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

</template>

<script>
    export default {
        name: 'securityCenter',
        data () {
            return {
              currentPage: 1,
                tableData: [],
            }
        },
        mounted(){
          this.$http.post('/api/api/admin/auth/logonRecord/company/findPage',{pageNum:this.currentPage,pageSize:this.pageSize}).then(function (res) {
            if (res.body.code == 200){
              this.tableData = res.body.data;
            } else{
              this.$message.error(res.body.msg);
            }
          })
        },
        methods:{
          handleCurrentChange(val) {
            this.$http.post('/api/api/admin/auth/logonRecord/company/findPage',{pageNum:val,pageSize:this.pageSize,}).then(function (res) {
              if (res.body.code==200){
                this.tableData=res.body.data;
              }else{
                this.$message.error(res.body.msg);
              }
            });
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .security_center{
        width: 100%;
    }
    .security_center>p{
        font-weight: bold;
    }
    .security_center .search_title{
        width: 100%;
        padding: 8px 0;
        position: relative;
        margin-top: 20px;
    }
    .security_center .search_icon{
        position: absolute;
        width: 26px;
        height: 26px;
        top: 14px;
        left: 0;
    }
    .security_center .search_title input{
        width: 300px;
        height: 30px;
        border: 1px solid #dfdfdf;
        padding-left: 25px;
    }
    .security_center .search_title button{
        width: 80px;
        height: 35px;
        text-align: center;
        border: 0;
        outline: none;
        margin-left: 20px;
        background: #26c6da;
        color: #ffffff;
        border-radius: 5px;
    }
    .security_center .security_list{
        margin-top: 25px;
    }
</style>

<style>
    .security_center .security_list .el-table--border th{
        text-align: center;
    }
    .security_center .security_list .el-table--border td{
        text-align: center;
    }
    .security_center .security_list .icon{
        position: relative;
        top: 2px;
        margin-right: 8px;
    }
    .security_center .el-table__row td:nth-last-child(1){
        color: #ff0000;
    }
</style>
