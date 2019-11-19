<template>
    <div class="box">
      <div>
        <ul>
          <li v-for="(a,index) in arr" @click="change(a,index)" :class="{ red:number == index}">{{a}}</li>
        </ul>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="searchVal">
            <el-button slot="append" icon="el-icon-search" style="background: #1d89e4;color: #fff;" @click="searchs()"></el-button>
          </el-input>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
      data(){
          return{
            arr:['企业','法人/股东','律所','律师','法律法规'],
            number: 0,
            searchVal:'',
            sign:'企业',
          }
      },
      methods: {
        change(a,index) {
          this.sign= a;
          this.number= index;    //重要处
        },
        searchs(){
          let that = this;
          if (that.sign == '企业'){
            that.$router.push({
              path:'/index/Enterprise',
              query: {
                val:that.searchVal
              }
            })
          }else  if (that.sign == '法人/股东'){
            that.$router.push({
              path:'/index/Shareholder',
              query: {
                val:that.searchVal
              }
            })
          }else  if (that.sign == '律所'){
            that.$router.push({
              path:'/index/Lawfirm',
              query: {
                val:that.searchVal
              }
            })
          }else  if (that.sign == '律师'){
            that.$router.push({
              path:'/index/Lawyer',
              query: {
                val:that.searchVal
              }
            })
          }else  if (that.sign == '法律法规'){
            that.$router.push({
              path:'/index/Statute',
              query: {
                val:that.searchVal
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .box>div{
    width: 540px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .box>div>ul{
    display: flex;
  }
  .box>div>ul>li{
    height: 16px;
    font-size: 16px;
    line-height: 16px;
    color: #333;
    padding: 0 9px;
    display: block;
    border-right: 2px solid #cccccc;
    font-weight: bold;
    cursor:pointer;
  }
  .box>div>ul>li:nth-of-type(5){
    border-right-color: transparent;
  }
  .red{
    color: #1d89e4 !important;
  }
</style>
