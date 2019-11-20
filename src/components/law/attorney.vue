<template>
  <div class="box harry">
    <div class="search_title">
      <div class="title">
        <button
          @click="handleCurrentChange();show=false"
          class="look_law active"
          style="cursor: pointer"
        >找律师</button>
        <button @click="myfollow()" class="attention" style="cursor: pointer">已关注</button>
      </div>
      <div class="area" v-show="show==false">
        <div class="city">
          <div class="choose_city">
            <p>所属地区</p>
          </div>
          <div class="city_list">
            <div class="city_area" :class="!currentArea?'active':''">
              <p style="cursor: pointer" @click="getarea()">全部</p>
            </div>
            <div class="city_area" :class="currentArea==item.id?'active':''" :key="index" v-for="(item,index) in area">
              <p style="cursor: pointer" @click="getarea(index,item.id)">{{item.areaName}}</p>
            </div>
          </div>
        </div>
        <!--        </div>-->
        <div class="condition" v-if="areasshow">
          <div>
            <div></div>
            <div>
              <ul>
                <li
                  v-for="(a,index) in areas"
                  :key="index"
                  @click="dchange(a.id,index)"
                  :class="{ k:dnumber == index}"
                >{{a.areaName}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="city">
          <div class="choose_city">
            <p>所属行业</p>
          </div>
          <div class="jobe">
            <div class="city_area " :class="!industryId?'active':''" @click="getjode()">
              <p style="cursor: pointer">全部</p>
            </div>
            <div class="city_area" :class="industryId==item.id?'active':''" :key="item.id" @click="getjode(item.id)" v-for="item in jobe">
              <p style="cursor: pointer">{{item.industryName}}</p>
            </div>
          </div>
        </div>
        <div class="city">
          <div class="choose_city">
            <p>擅长领域</p>
          </div>
          <div class="territory">
            <!-- <div class="city_area" @click="getTerriory()">
        <p style="cursor: pointer">全部</p>
            </div>-->
            <div
              class="city_area"
              :class="goodAt.indexOf(item.id)>-1?'active':''"
              :key="item.id"
              v-for="(item,index) in territory"
              @click="getTerriory(item.id,index)"
              ref="liId"
            >
              <span style="display:none;">{{item.id}}</span>
              <p style="cursor: pointer">{{item.fieldName}}</p>
            </div>
          </div>
        </div>
        <div class="city">
          <div class="choose_city">
            <p>排序</p>
          </div>
          <div class="hot_list">
            <div class="new city_area" style="cursor: pointer">
              <img src="../../../static/lawImage/new.png" alt />
              <p @click="getorderBy('follow')">热度</p>
            </div>
            <div class="city_area" style="cursor: pointer">
              <p @click="getorderBy('work')">年限</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="people_list">
      <div
        style="cursor:pointer;"
        class="list"
        v-for="(item,index) in list.result"
        :data-id="item.attention"
        @click="lawDetails(item.id)"
      >
        <div class="list_detail">
          <img :src="picArr[index].url" alt />
          <img src="../../../static/lawImage/year.png" alt />
          <span>{{item.workYear}}</span>
          <p class="fouce" v-show="item.follow == 1">已关注</p>
        </div>
        <div class="law_names">
          <p>{{item.name}}</p>
          <p>
            <span>
              <img src="../../../static/lawImage/heart.png" alt class="heart" />
            </span>
            <span class="num">{{item.followCount}}</span>
          </p>
          <p>{{item.firmName}}</p>
        </div>
      </div>
    </div>
    <div class="block" style="text-align: center;margin-top: 20px">
      <el-pagination
      background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="list.pageSize"
        layout="prev, pager, next, jumper"
        :total="list.totalSize"
      ></el-pagination>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="lawDetail"
      width="70%"
      top="5vh"
      :before-close="handleClose"
    >
      <div class="law_detail">
        <div class="titles">
          <p>律师详情</p>
          <img src="../../../static/lawImage/close.png" alt @click="closeBox()" />
        </div>
        <div class="scroll_box">
          <div class="law_datum">
            <div class="datum_left">
              <div class="header">
                <div>
                  <div class="pic">
                    <img src="../../../static/lawImage/header.png" alt />
                  </div>
                  <p class="add_attention" @click="escfollow(lvsID)" v-if="lawDetailArr.follow">已关注</p>
                  <p class="add_attention" @click="tofollow(lvsID)" v-else>关注</p>
                </div>
                <div class="details">
                  <p>
                    <span class="name">{{lawDetailArr.name}}</span>
                    <span>
                      <img src="../../../static/lawImage/attention.png" alt />
                    </span>
                    <span class="attention_num">258人已关注</span>
                  </p>
                  <p>已执证</p>
                  <div class="years">
                    <div class="line"></div>
                    <div class="line_color"></div>
                    <p>
                      <span style="color: #ff6600; margin-right: 3px;">{{lawDetailArr.workYear}}</span>
                      <span>年</span>
                    </p>
                  </div>
                  <p>
                    <span class="name">执行证号：</span>
                    {{lawDetailArr.licenseNo}}
                  </p>
                  <p>
                    <span class="name">执行机构：</span>
                    {{lawDetailArr.firmName}}
                  </p>
                  <p>
                    <span class="name">联系电话：</span>
                    {{lawDetailArr.mobile}}
                  </p>
                  <p>
                    <span>
                      {{lawDetailArr.areaName}} |
                      <span v-if="lawDetailArr.Sex==1">男</span>
                      <span v-else>女</span>
                      | {{lawDetailArr.age}}岁 ({{lawDetailArr.birthDate}})
                    </span>
                  </p>
                  <p>
                    处理
                    <span style="color: #ff6600;">{{lawDetailArr.handleContractCount}}</span>件合同
                  </p>
                </div>
              </div>
            </div>
            <div class="datum_right">
              <img src="../../../static/lawImage/card.png" alt />
            </div>
          </div>
          <div class="introduce">
            <p>自我介绍：</p>
            <p>{{lawDetailArr.description}}</p>
          </div>

          <div class="experience">
            <div class="experience_title">
              <p data-id="1" :class="experience?'active':''" @click="experiences(lawDetailArr.id)">
                案例
                <span>15</span>  
              </p>
              <p data-id="2" :class="record?'active':''" @click="records(lawDetailArr.id)">履历</p>
              <p
                data-id="4"
                :class="certificate?'active':''"
                @click="handleClick(lawDetailArr.id)"
              >证书</p>
              <p data-id="3" :class="evaluate?'active':''" @click="evaluates(lawDetailArr.id)">
                评论
                <span>156</span>
              </p>
            </div>
            <div class="experience_detail" v-show="experience">
              <div class="experience_list" v-for="item in experience_list.result">
                <p style="width:110px;text-align:center">{{item.judgeDate}}</p>
                <p style="flex:1;width:auto;">{{item.title}}</p>
                <p style="width:110px;text-align:center;">浏览{{item.readCount}}次</p>
              </div>
              <div style="text-align:right;">
                <el-pagination
                   background
                  @size-change="handleSizeChange1"
                  @current-change="handleCurrentChange1"
                  :current-page="currentPage1"
                 
                  :page-size="pageSize1"
                  layout="total,  prev, pager, next, jumper"
                  :total="total1"
                ></el-pagination>
              </div>
            </div>
            <div class="experience_detail" v-show="record">
              <div class="record" v-for="item in record_list.result" @click="item.show=!item.show">
                <div class="record_th experience_list">
                  <p class="record_tit" style="text-align:center">{{item.startDate}} ~ {{item.endDate==''?'至今':item.endDate}}</p>
                  <p>{{item.firmName}}</p>
                </div>
                <div class="more" v-if="item.show==true">
                  <div class="recordList experience_list">
                    <p class="record_tit">公司职务：</p>
                    <p v-if="item.position==1">实习律师</p>
                    <p v-if="item.position==2">律师助理</p>
                    <p v-if="item.position==3">律师</p>
                    <p v-if="item.position==4">主任律师</p>
                    <p v-if="item.position==5">合伙人律师</p>
                    <p v-if="item.position==6">高级合伙人律师</p>
                  </div>
                  <div class="recordList experience_list">
                    <p>项目名称：</p>
                    <p>{{item.projectName}}</p>
                  </div>
                  <div class="recordList experience_list">
                    <p>项目描述：</p>
                    <p>{{item.content}}</p>
                  </div>
                </div>
              </div>
              <div style="text-align:right;">
                <el-pagination
                  background
                  @size-change="handleSizeChange2"
                  @current-change="handleCurrentChange2"
                  :current-page="currentPage2"
               
                  :page-size="pageSize2"
                  layout="total, prev, pager, next, jumper"
                  :total="total2"
                ></el-pagination>
              </div>
            </div>
            <div class="experience_detail" v-show="evaluate">
              <div class="choose_evaluate">
                  <div style="padding-left:20px;">
                    <el-radio v-model="radio" label="0">全部</el-radio>
                    <el-radio v-model="radio" label="1">满意（180）</el-radio>
                    <el-radio v-model="radio" label="2">一般</el-radio>
                    <el-radio v-model="radio" label="3">不满意（20）</el-radio>
                  </div>
              </div>
              <div class="evaluate experience_list" v-for="item in evaluate_list.result">
                <p>
                  <span>{{item.content}}</span>
                  <span class="date">{{item.crtTm}}</span>
                </p>
                <p>
                  <span class="company">{{item.companyName}}</span>
                </p>
              </div>

              <div style="text-align:right;">
                <el-pagination
                background
                  @size-change="handleSizeChange4"
                  @current-change="handleCurrentChange4"
                  :current-page="currentPage4"
                  
                  :page-size="pageSize4"
                  layout="total, prev, pager, next, jumper"
                  :total="total4"
                ></el-pagination>
              </div>
            </div>
            <div class="experience_detail" v-show="certificate">
              <div class="record experience_list" v-for="item in certificate_list.result">
                <p>{{item.getDate}}</p>
                <p>{{item.name}}</p>
              </div>
              <!-- 分页 -->

              <div style="text-align:right;">
                <el-pagination
                background
                  @size-change="handleSizeChange3"
                  @current-change="handleCurrentChange3"
                  :current-page="currentPage3"
               
                  :page-size="pageSize3"
                  layout="total, prev, pager, next, jumper"
                  :total="total3"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "attorney",
  data() {
    return {
      pageSize1: 10,
      currentPage1: 1,
      total1: 10,
      pageSize2: 10,
      currentPage2: 1,
      total2: 10,
      radio: "0",
      currentArea:'',
      pageSize3: 10,
      currentPage3: 1,
      picArr:[
          {url:require('../../../static/team/1.jpg')},
          {url:require('../../../static/team/2.jpg')},
           {url:require('../../../static/team/3.jpg')},
            {url:require('../../../static/team/4.jpg')},
            {url:require('../../../static/team/5.jpg')},
            {url:require('../../../static/team/6.jpg')},
            {url:require('../../../static/team/7.jpg')},
            {url:require('../../../static/team/8.jpg')},
            {url:require('../../../static/team/9.jpg')},
            {url:require('../../../static/team/10.jpg')},
            {url:require('../../../static/team/11.jpg')},
            {url:require('../../../static/team/12.jpg')},
            {url:require('../../../static/team/13.jpg')},
            {url:require('../../../static/team/14.jpg')},
            {url:require('../../../static/team/15.jpg')},
        
      ],
      total3: 10,
       pageSize4: 10,
      currentPage4: 1,
      total4: 10,
      currentPage: 1,
      attention: false,
      experience: true,
      record: false,
      evaluate: false,
      lawDetail: false,
      certificate: false,
      areasshow: false,
      show: false,
      dnumber: -1,
      areaId: "",
      industryId: "",
      fieldIds: "",
      orderBy: "",
      lvsID: "",
      fieldIdsStr: "",
      goodAt: [], //擅长数组
      lawDetailArr: [],
      area: [],
      areas: [],
      jobe: [],
      territory: [],
      list: [],
      experience_list: [],
      record_list: [],
      satisfiedStatus: 0,
      evaluate_list: [],
      certificate_list: []
    };
  },
  watch:{
    radio(val){
        this.evaluates(this.lawDetailArr.id)
    }
  },
  mounted() {
    this.$http.get("/api/api/data/area/findArea").then(function(res) {
      if (res.body.code == 200) {
        this.area = res.body.data;
      } else {
        this.$message.error(res.body.msg);
      }
    });
    this.$http
      .get("/api/api/data/industry/findFirstIndustry")
      .then(function(res) {
        if (res.body.code == 200) {
          this.jobe = res.body.data;
        } else {
          this.$message.error(res.body.msg);
        }
      });
    this.$http.get("/api/api/data/field/findField").then(function(res) {
      if (res.body.code == 200) {
        this.territory = res.body.data;
      } else {
        this.$message.error(res.body.msg);
      }
    });
    this.handleCurrentChange();
    var id = $(".people_list div").attr("data-id");
    if (id === 1) {
      this.attention = true;
    }
    // $(".experience_title p").click(function() {
    //   $(this).css({ borderTop: "1px solid #1e88e5", background: "#dfdfdf" });
    //   $(".experience_title p")
    //     .not($(this))
    //     .css({ borderTop: "0", background: "#ffffff" });
    // });
    var radio = $(".choose_evaluate div input").attr("data-id");
    $(".choose_evaluate div").click(function() {
      radio = $(this)
        .children()
        .children("input")
        .attr("data-id");
      console.log(radio);
      $(this)
        .children()
        .children("input")
        .prop("checked", true);
      $(".choose_evaluate div")
        .not($(this))
        .children()
        .children("input")
        .prop("checked", false);
    });
    //找律师和关注切换
    $(".title button").click(function() {
      $(this).css({ background: "#1e88e5", color: "#ffffff" });
      $(".title button")
        .not($(this))
        .css({ background: "#ffffff", color: "#000000" });
    });
    //所属地区
    // $('#area').click(function () {
    //   console.log(this)
    //   $(this).css({background:"#1e88e5",color:"#ffffff",borderRadius:"5px"})
    //   $('#area').not($(this)).css({background:"#fff",color:"#000"})
    // });
    // $(".city_list div").click(function() {
    //   console.log($(this));
    //   $(this).css({
    //     background: "#1e88e5",
    //     color: "#ffffff",
    //     borderRadius: "5px"
    //   });
    //   $(".city_list div")
    //     .not($(this))
    //     .css({ background: "#fff", color: "#000" });
    // });
    //擅长领域
    // $('.territory div').click(function () {
    //   // $(this).css({background:"#1e88e5",color:"#ffffff",borderRadius:"5px"})
    //   // $('.territory div').not($(this)).css({background:"#fff",color:"#000"})
    //   // $(this).toggleClass("active")
    // });
    //所属行业
    // $(".jobe div").click(function() {
    //   $(this).css({
    //     background: "#1e88e5",
    //     color: "#ffffff",
    //     borderRadius: "5px"
    //   });
    //   $(".jobe div")
    //     .not($(this))
    //     .css({ background: "#fff", color: "#000" });
    // });
    //排序
    $(".hot_list div").click(function() {
      $(this).css({
        background: "#1e88e5",
        color: "#ffffff",
        borderRadius: "5px"
      });
      $(".hot_list div")
        .not($(this))
        .css({ background: "#fff", color: "#000" });
    });
  },
  methods: {
    handleClose() {
      this.lawDetail = false;
    },
    //相关分页
    handleSizeChange1(val) {
      this.pageSize1 = val;
      this.experiences(this.lawDetailArr.id, this.pageSize1, this.currentPage1);
    },
    handleCurrentChange1(val) {
      this.currentPage1 = val;
      this.experiences(this.lawDetailArr.id, this.pageSize1, this.currentPage1);
    },
    handleSizeChange2(val) {
      this.pageSize2 = val;
      this.records(this.lawDetailArr.id);
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val;
      this.records(this.lawDetailArr.id);
    },
    handleSizeChange3(val) {
      this.pageSize3 = val;
      this.handleClick(this.lawDetailArr.id);
    },
    handleCurrentChange3(val) {
      this.currentPage3 = val;
      this.handleClick(this.lawDetailArr.id);
    },
      handleSizeChange4(val) {
      this.pageSize4 = val;
      this.evaluates(this.lawDetailArr.id)
    
    },
    handleCurrentChange4(val) {
      this.currentPage4 = val;
      this.evaluates(this.lawDetailArr.id)
    },
    dchange(id, index) {
      // this.sign= a;
      this.areaId = id;
      this.dnumber = index; //重要处
      this.handleCurrentChange();
    },
    getarea(index, id) {
      if (index != undefined) {
        this.areas = this.area[index].childAreas;
        this.areasshow = true;
        this.areaId = id;
        this.currentArea=id;
      } else {
        this.areasshow = false;
        this.areaId = "";
         this.currentArea=''
      }
      this.handleCurrentChange();
    },
    getjode(id) {
      // debugger;
      this.industryId = id;
      this.handleCurrentChange();
    },
    getTerriory(id, index) {
      var chooseNumStr = "";

      if (this.goodAt.indexOf(id) > -1) {
        this.goodAt = this.goodAt.filter(item => {
          return item != id;
        });
      } else {
        if (this.goodAt.length >= 3) {
          this.$message.error("最多选择三个");
          return;
        }
        this.goodAt.push(id);
      }

      this.fieldIdsStr = this.goodAt.join(",");

      this.handleCurrentChange();
    },
    getorderBy(val) {
      this.orderBy = val;
      this.handleCurrentChange();
    },
    tofollow(id) {
      this.$http
        .get("/api/api/user/lawyerInfo/follow?id=" + id)
        .then(function(res) {
          if (res.body.code == 200) {
            this.$message.success("关注成功");
            this.lawDetails(id);
          } else {
            this.$message.error(res.body.msg);
          }
        });
    },

    escfollow(id) {
      this.$http
        .get("/api/api/user/lawyerInfo/unfollow?id=" + id)
        .then(function(res) {
          if (res.body.code == 200) {
            this.$message.success("取消关注");
            this.lawDetails(id);
          } else {
            this.$message.error(res.body.msg);
          }
        });
    },
    myfollow() {
      this.show = true;
      this.$http
        .post("/api/api/user/lawyerInfo/findFollowedPage", {
          pageNum: 1,
          pageSize: this.list.pageSize
        })
        .then(function(res) {
          if (res.body.code == 200) {
            this.list = res.body.data;
          } else {
            this.$message.error(res.body.msg);
          }
        });
    },
    handleCurrentChange(val) {
      this.$http
        .post("/api/api/user/lawyerInfo/findPage", {
          pageNum: val,
          pageSize: this.list.pageSize,
          columnFilters: {
            areaId: {
              name: "areaId",
              value: this.areaId
            },
            industryId: {
              name: "industryId",
              value: this.industryId
            },
            fieldIds: {
              name: "fieldIds",
              value: this.fieldIdsStr
            },
            orderBy: {
              name: "orderBy",
              value: this.orderBy
            }
          }
        })
        .then(function(res) {
          if (res.body.code == 200) {
            this.list = res.body.data;
          } else {
            this.$message.error(res.body.msg);
          }
        });
    },
    closeBox() {
      this.lawDetail = false;
    },
    //案例
    experiences(id, pageNum = 1, pageSize = 10) {
      this.experience = true;
      this.record = false;
      this.certificate = false;
      this.evaluate = false;
      this.$http
        .post(
          "/api/api/cases/judgmentInfo/company/findPage",
          {
            pageNum: pageNum,
            pageSize: pageSize,
            columnFilters: {
              lawyerId: {
                name: "lawyerId",
                value: id
              }
            }
          },
          function(res) {
            if (res.body.code == 200) {
              this.experience_list = res.body.data;
            } else {
              this.$message.error(res.body.msg);
            }
          }
        )
        .then(res => {
          if (res.body.code == 200) {
            this.total1 = res.body.data.totalSize;
          }
        });
    },
    //评价
    evaluates(id) {
      this.evaluate = true;
      this.experience = false;
      this.certificate = false;
      this.record = false;
      var that = this;
      this.$http
        .post("/api/api/user/lawyerEvaluate/company/findPage", {
          pageNum: this.currentPage4,
          pageSize:this.pageSize4,
          columnFilters: {
            lawyerId: {
              name: "lawyerId",
              value: id
            },
            satisfiedStatus: {
              name: "satisfiedStatus",
              value: that.radio
            }
          }
        })
        .then(res => {
          if (res.body.code == 200) {
            this.evaluate_list = res.body.data;
            this.total4=res.body.data.totalSize;
          } else {
            tis.$message.error(res.body.msg);
          }
        });
    },
    handleInput(e) {
      console.log(e);
    },
    //履历
    records(id) {
      this.record = true;
      this.certificate = false;
      this.experience = false;
      this.evaluate = false;
      this.$http
        .post("/api/api/user/lawyerResume/getByLawyerId", {
          pageNum: this.currentPage2,
          pageSize: this.pageSize2,
          columnFilters: {
            lawyerId: {
              name: "lawyerId",
              value: id
            }
          }
        })
        .then(res => {
          if (res.body.code == 200) {
            if (
              res.body.data.result.length > 0 &&
              res.body.data.result != null
            ) {
              var data = res.body.data.result;
              for (var i = 0; i < data.length; i++) {
                data[i].show = false;
              }
            }
            console.log(res.body.data.result);
            this.record_list = res.body.data;
            this.total2 = res.body.data.totalSize;
          } else {
            this.$message.error(res.body.msg);
          }
        });
    },
    // 履历分页
    handleCurrentRecordChange(val) {},
    //证书
    handleClick(id) {
      console.log("000");
      this.certificate = true;
      this.record = false;
      this.experience = false;
      this.evaluate = false;
      this.$http
        .post("/api/api/user/lawyerCert/getByLawyerId", {
          pageNum: this.currentPage3,
          pageSize: this.pageSize3,
          columnFilters: {
            lawyerId: {
              name: "lawyerId",
              value: id
            }
          }
        })
        .then(res => {
          if (res.body.code == 200) {
            this.certificate_list = res.body.data;
            this.total3 = res.body.data.totalSize;
          } else {
            this.$message.error(res.body.msg);
          }
        });
    },
    //
    lawDetails(id) {
      this.$http
        .get("/api/api/user/lawyerInfo/getById?id=" + id)
        .then(function(res) {
          this.lawDetail = true;
          this.lvsID = id;
          if (res.body.code == 200) {
            this.lawDetailArr = res.body.data;
          } else {
            this.$message.error(res.body.msg);
          }
        });
      this.$http
        .post("/api/api/cases/judgmentInfo/company/findPage", {
          pageNum: 1,
          pageSize: 10,
          columnFilters: {
            lawyerId: {
              name: "lawyerId",
              value: id
            }
          }
        })
        .then(function(res) {
          if (res.body.code == 200) {
            this.experience_list = res.body.data;
            this.total1 = res.body.data.totalSize;
          } else {
            this.$message.error(res.body.msg);
          }
        });
    }
  }
};
</script>
<style>
.harry .el-dialog__header {
  display: none;
}
</style>
<style scoped>
.look_law,
.attention {
  width: 200px;
  height: 35px;
  text-align: center;
  background-color: #ffffff;
  font-size: 15px;
  border: 0;
}
.attention {
  margin-left: -5px;
}
.active {
  background-color: #1e88e5;
  color: #ffffff;
}
.area {
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin-top: 30px;
}
.city {
  display: flex;
  border-bottom: 1px solid #dfdfdf;
}
.choose_city {
  width: 150px;
  background: #f9f9f9;
  height: 40px;
}
.choose_city p {
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}
.city_list,
.territory,
.jobe,
.hot_list {
  height: 40px;
  border-left: 1px solid #dfdfdf;
  display: flex;
  width: 80%;
}
.territory div.active {
  background: #1e88e5;
  color: #ffffff;
  border-radius: 5px;
}
.city_area p {
  font-size: 16px;
  width: 85px;
  text-align: center;
  padding: 2px;
}
.city_area {
  margin: 8px 12px;
  height: 26px;
}
/* ,.territory>div:nth-of-type(1) */
/* .city_list > div:nth-of-type(1),
.jobe > div:nth-of-type(1) {
  background: #1e88e5;
  color: #ffffff;
  border-radius: 5px;
} */
.city_list.active{
   background: #1e88e5;
  color: #ffffff;
  border-radius: 5px;
}
.city_area.active{
   background: #1e88e5;
  color: #ffffff;
  border-radius: 5px;
}
.new {
  position: relative;
  background: transparent;
  color: #000;
}
.new img {
  position: absolute;
  top: -7px;
  right: 4px;
}
.people_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.list {
  width: 220px;
  height: 300px;
  background: #f9f9f9;
  border-radius: 5px;
  margin-right: 50px;
  margin-top: 15px;
}
/* .list:nth-of-type(4n) {
  margin-right: 0;
} */
.list_detail {
  padding: 15px 8px;
  position: relative;
  height: 180px;
  background: #fff;
}
.list_detail > img:nth-of-type(1) {
  width: 90%;
  height: 180px;
  display: inherit;
  margin: auto;
}
.list_detail > img:nth-of-type(2) {
  position: absolute;
  left: 25px;
  top: 15px;
}
.list_detail span {
  font-size: 14px;
  color: #ffffff;
  position: absolute;
  top: 18px;
  left: 33px;
}
.list_detail p {
  font-size: 12px;
  padding: 1px 4px;
  background: #d22f08;
  position: absolute;
  bottom: 15px;
  left: 8px;
  color: #ffffff;
  border-radius: 2px;
}
.law_names {
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #dfdfdf;
  background: #f9f9f9;
  position: relative;
}
.law_names p {
  font-size: 12px;
}
.law_names p:nth-of-type(1) {
  font-size: 13px;
  font-weight: bold;
  padding-top: 10px;
  margin-left: 20px;
}
.law_names p:nth-of-type(2) {
  position: absolute;
  top: 10px;
  right: 10px;
}
.num {
  color: #d22f08;
}
.law_names p:nth-of-type(3) {
  padding-top: 7px;
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 13px;
}
.law_detail {
  width: 100%;
  height: 600px;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0.2px 0.3px 0px 0.3px #dfdfdf;
}
.scroll_box {
  overflow: auto;
  height: 95%;
}
.titles {
  background: #1e88e5;
  display: flex;
  justify-content: space-between;
}
.titles p {
  font-size: 14px;
  color: #ffffff;
  padding: 5px;
}

.titles img {
  width: 15px;
  height: 15px;
  position: relative;
  top: 8px;
  right: 5px;
}
.law_datum {
  width: 93%;
  margin: 40px auto 15px auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 15px;
}
.header {
  display: flex;
}
.pic {
  width: 90px;
  height: 90px;
  border: 2px solid #dfdfdf;
  border-radius: 50%;
}
.pic img {
  width: 100%;
  height: 100%;
}
.add_attention {
  width: 85px;
  padding: 8px;
  background: #ff6600;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  margin-top: 30px;
  border-radius: 5px;
  text-align: center;
}
.years {
  width: 60%;
}
.years div {
  height: 5px;
  border-radius: 5px;
}
.years div:nth-of-type(1) {
  background: #dfdfdf;
  width: 90%;
}
.details {
  position: relative;
  margin-left: 10px;
}
.details p {
  font-size: 14px;
  padding-top: 5px;
}
.name {
  font-size: 16px;
  font-weight: bold;
}
.details p img {
  position: absolute;
  top: 5px;
}
.attention_num {
  position: absolute;
  top: 10px;
  margin-left: 14px;
  font-size: 12px;
}
.years {
  position: relative;
}
.line_color {
  position: absolute;
  top: 0px;
  background: #66cc00;
  width: 10%;
}
.introduce {
  width: 93%;
  margin: 20px auto 15px auto;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 15px;
}
.introduce p:nth-of-type(1) {
  font-weight: bold;
}
.introduce p:nth-of-type(2) {
  font-size: 13px;
  margin-top: 10px;
}
.experience {
  width: 93%;
  margin: 15px auto 10px auto;
  border: 1px solid #dfdfdf;
}
.experience_title {
  width: 100%;
  display: flex;
}
.experience_title p {
  padding: 18px 35px;
  font-size: 12px;
  font-weight: bold;
  border-right: 1px solid #dfdfdf;
}
.experience_title p.active {
  border-top: 1px solid #1e88e5;
  background: #dfdfdf;
}
.experience_title p:nth-of-type(2) {
  padding: 18px 57px;
}

.experience_title p span {
  background: #ff3300;
  padding: 0 7px;
  color: #ffffff;
  margin-left: 5px;
}
.experience_detail {
  width: 100%;
  border-top: 1px solid #dfdfdf;
}
.experience_list {
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #dfdfdf;
}
.experience_list p {
  font-size: 13px;
  padding: 20px 0 20px 8px;
}
.experience_list p:nth-of-type(1) {
  width: 25.2%;
}
.experience_list p:nth-of-type(2) {
  width: 56%;
  font-weight: bold;
  border-left: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
}
.experience_list p:nth-of-type(3) {
  width: 19%;
}
/* .record p:nth-of-type(2){
    border-right:0;
  } */

.record p:nth-of-type(2) {
  width: 74%;
}
.more .recordList p {
  color: #999;
}

.choose_evaluate {
  display: flex;
  height: 30px;
  background: #fafafa;
  padding-top: 10px;
  border-top: 1px solid #dfdfdf;
}
.choose_evaluate div {
  margin: 0 5px 0 10px;
  font-size: 14px;
}
.choose_evaluate div p input {
  position: relative;
  top: 2px;
  left: -2px;
}
.evaluate p:nth-of-type(1) {
  width: 90%;
}
.evaluate p:nth-of-type(2) {
  position: relative;
}
.company {
  position: absolute;
  top: 39%;
}
.date {
  display: inherit;
  color: #999999;
  margin-top: 5px;
}
.scroll {
  margin-bottom: 20px;
}
/* .experience_title p:nth-of-type(1) {
  border-top: 1px solid #1e88e5;
  background: #dfdfdf;
} */
#list div:nth-of-type(1) {
  background: #ffffff;
  color: #000;
}
.heart {
  position: relative;
  top: 4px;
}
.condition {
  width: 100%;
}
.condition > div {
  display: flex;
  border: 1px solid #ccc;
  height: 45px;
  line-height: 50px;
  position: relative;
}
.condition > div:nth-of-type(1) {
  border-bottom: none;
}
.condition > div > div:nth-of-type(1) {
  width: 170px;
  background: #f9f9f9;
  text-align: center;
  color: #666;
  font-weight: bold;
  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
}
.condition > div > div:nth-of-type(2) {
  background: #fff;
  /* width: 100%; */
}
.condition > div ul {
  display: flex;
  position: relative;
  top: 8px;
}
.condition > div ul > li {
  font-size: 16px;
  width: 85px;
  text-align: center;
  padding: 2px;
  /*background: #17a1ff;*/
  line-height: 22px;
  margin-left: 20px;
  border-radius: 3px;
  color: #666;
  display: block;
  cursor: pointer;
}
.condition > div ul > li:nth-of-type(1) {
  margin-left: 11px;
}
.k {
  background: #1d89e4;
  color: #ffffff !important;
}
</style>
