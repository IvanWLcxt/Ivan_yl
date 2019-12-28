<!--
 @Author:Ivan
 @Date:2019-12-27 14:53:40
 @LastModifiedBy:Ivan
 @Last Modified time:2019-12-27 14:53:40
-->

 @Last Modified time:2019-12-27 14:51:15
-->

 @Last Modified time:2019-12-27 14:51:12
-->

 @Last Modified time:2019-12-27 14:50:25
-->

 @Last Modified time:2019-12-27 14:49:43
-->

 @Last Modified time:2019-12-27 14:41:21
-->

 @Last Modified time:2019-12-27 14:39:46
-->

 @Last Modified time:2019-12-27 11:38:49
-->

 @Last Modified time:2019-12-27 11:31:33
-->

 @Last Modified time:2019-12-27 11:29:56
-->

 @Last Modified time:2019-12-27 11:28:36
-->

 @Last Modified time:2019-12-27 11:27:40
-->

 @Last Modified time:2019-12-27 11:21:43
-->

 @Last Modified time:2019-12-27 11:20:39
-->

 @Last Modified time:2019-12-27 11:19:39
-->

 @Last Modified time:2019-12-27 11:18:47
-->

 @Last Modified time:2019-12-27 10:26:24
-->

 @Last Modified time:2019-12-27 10:25:39
-->

 @Last Modified time:2019-12-27 10:24:23
-->

 @Last Modified time:2019-12-27 10:16:50
-->

 @Last Modified time:2019-12-27 10:05:09
-->

 @Last Modified time:2019-12-27 10:00:25
-->

 @Last Modified time:2019-12-27 09:57:20
-->

 @Last Modified time:2019-12-27 09:57:07
-->

 @Last Modified time:2019-12-27 09:56:32
-->

 @Last Modified time:2019-12-27 09:56:00
-->

 @Last Modified time:2019-12-27 09:54:22
-->

 @Last Modified time:2019-12-27 09:51:01
-->

 @Last Modified time:2019-12-27 09:50:06
-->

 @Last Modified time:2019-12-27 09:49:30
-->

 @Last Modified time:2019-12-27 09:46:04
-->

 @Last Modified time:2019-12-27 09:43:08
-->

 @Last Modified time:2019-12-27 09:37:12
-->

 @Last Modified time:2019-12-27 09:35:37
-->

 @Last Modified time:2019-12-27 09:35:05
-->

 @Last Modified time:2019-12-27 09:33:10
-->

 @Last Modified time:2019-12-27 09:28:21
-->

 @Last Modified time:2019-12-27 09:25:01
-->

 @Last Modified time:2019-12-27 09:14:34
-->

 @Last Modified time:2019-12-27 09:12:44
-->

 @Last Modified time:2019-12-27 09:12:30
-->

 @Last Modified time:2019-12-27 09:12:17
-->

 @Last Modified time:2019-12-27 09:11:05
-->

 @Last Modified time:2019-12-27 09:10:42
-->

 @Last Modified time:2019-12-27 09:10:25
-->

 @Last Modified time:2019-12-27 09:09:59
-->

 @Last Modified time:2019-12-27 09:09:36
-->

 @Last Modified time:2019-12-27 09:08:49
-->

 @Last Modified time:2019-12-27 09:08:35
-->

 @Last Modified time:2019-12-27 09:08:15
-->

 @Last Modified time:2019-12-27 09:00:02
-->

 @Last Modified time:2019-12-27 08:55:26
-->

 @Last Modified time:2019-12-26 18:58:44
-->

 @Last Modified time:2019-12-26 18:53:20
-->

 @Last Modified time:2019-12-26 18:51:38
-->

 @Last Modified time:2019-12-26 17:34:52
-->

 @Last Modified time:2019-12-26 17:33:20
-->

 @Last Modified time:2019-12-26 17:31:04
-->

 @Last Modified time:2019-12-26 17:30:14
-->




<template>
  <div id="businessList">
    <div class="searchDiv">
      <!-- {{provinceData}} -->
      <!-- {{cityData}}{{city}} -->
      <!-- {{industryData}}{{scaleData}}{{industry}}{{scale}} -->
      <el-select v-model="province" clearable placeholder="省份" size="mini" @change='provinceChange'>
        <el-option
          v-for="item in provinceData"
          :key="item.id"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
      <el-select v-model="city" clearable placeholder="城市" size="mini" @change='cityChange'>
        <el-option
          v-for="item in cityData"
          :key="item.id"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
      <el-select v-model="industry" clearable placeholder="行业" size="mini" @change='industryChange'>
        <el-option
          v-for="item in industryData"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-select v-model="scale" clearable placeholder="规模" size="mini" @change='scaleChange'>
        <el-option
          v-for="item in scaleData"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      
    </div>
    <div class="infortable">
      <template>
        <el-table
          ref="multipleTable"
          :data="businessList"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="selectionChange">
          <!-- 复选框 -->
          <el-table-column align="center"
            type="selection"
            width="55">
          </el-table-column>
          <!-- 名称 -->
          <el-table-column align="center"
            prop="name"
            label="企业名称">
          </el-table-column>
          <!-- 联系人 -->
          <el-table-column align="center"
            prop="contactName"
            label="联系人">
          </el-table-column>
          <!-- 行业 -->
          <el-table-column align="center"
            prop="industry"
            label="行业">
          </el-table-column>
          <!-- 所在地 -->
          <el-table-column align="center"
            label="所在地">
            <!-- 通过scope.row拿到这一行的对象 -->
            <template slot-scope="scope">{{ scope.row.province }}-{{scope.row.city}}</template>
          </el-table-column>
          <!-- 公司规模 -->
          <el-table-column align="center"
            prop="scale"
            label="公司规模">
          </el-table-column>
          <!-- 详情 -->
          <el-table-column align="center"
            label="详情">
            <!-- 通过scope.row拿到这一行的对象 -->
            <template slot-scope="scope"> <el-button @click="toSee(scope.row)" type="text" size="small">查看</el-button></template>
          </el-table-column>
          <el-table-column align="center"
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="toEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="toDelect(scope.row.id)">删除</el-button>
          </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="delandpage">
      <div class="btndiv" >
         <el-button type="danger" plain size="mini" @click="toBatchDelete()">批量删除</el-button>
      </div>
      <div class="pagediv">
        <el-pagination
          @current-change="pageChange"
          :current-page.sync="currentpage" 
          :page-size="pageSize"
          background
          layout="prev, pager, next"
          :total="businessData.length">
        </el-pagination>
      </div>
    </div>
    <!-- 查看弹框 -->
    <el-dialog
      :title="currentBus.name"
      :visible.sync="seeVisible">
      <div class="seeDiv">
        <span>行业类型：</span>
        {{currentBus.industry}}
      </div>
      <div class="seeDiv">
        <span>成立时间：</span>
        {{currentBus.establishedTime}}
      </div>
      <div class="seeDiv">
        <span>注册资本：</span>
        {{currentBus.registeredCapital}}
      </div>
      <div class="seeDiv">
        <span>公司规模：</span>
        {{currentBus.scale}}
      </div>
      <div class="descDiv">&nbsp;&nbsp;&nbsp;&nbsp;
        {{currentBus.description}}
      </div>
      <div class="imgDiv">
        <a href="currentBus.businessLicense" target="_blank">
          <img src="currentBus.businessLicense" alt="" width="200" height="150">
        </a>
      </div>
    </el-dialog>
    <!-- 编辑框，修改框 -->
    <el-dialog title="修改商家信息" :visible.sync="editVisible" width="60%" :before-close="beforeClose">
      <el-form :model="currentBus" :rules="rules" ref="ruleForm">
        <!-- 第一行 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="公司名称" prop="name" :label-width="formLabelWidth">
                <el-input v-model="currentBus.name"></el-input>
              </el-form-item>
            </div>
            </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item prop="industry" label="所属行业" :label-width="formLabelWidth">
                <el-input v-model="currentBus.industry"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
  <!-- 第二行 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item prop="scale" label="公司规模" :label-width="formLabelWidth">
                <el-input v-model="currentBus.scale"></el-input>
              </el-form-item>
            </div>
            </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="所在城市" :label-width="formLabelWidth" required>               
                <el-row>
                  <el-col :span="12">
                    
                    <div class="grid-content bg-purple">
                      <!-- 省份 -->
                      <el-form-item prop="province">
                        <el-select clearable v-model="currentBus.province" placeholder="请选择省份" @change="dialogprovinceChange">
                          <el-option
                            v-for="item in provinceData"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                          </el-option>
                          </el-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <!-- 城市 -->
                      <el-form-item prop="city">
                        <el-select clearable v-model="currentBus.city" placeholder="请选择城市">
                          <el-option
                            v-for="item in provincecityData"
                            :key="item.id"
                            :label="item.name"
                            :value="item.name">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item prop="contactName" label="联系人" :label-width="formLabelWidth">
                <el-input v-model="currentBus.contactName"></el-input>
              </el-form-item>
            </div>
            </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item prop="contactPhone" label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="currentBus.contactPhone"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <!-- 第四行 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item prop="location" label="详细地址" :label-width="formLabelWidth">
                <el-input :rows="4" type="textarea" v-model="currentBus.location"></el-input>
              </el-form-item>
            </div>
            </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item prop="description" label="公司简介" :label-width="formLabelWidth">
                <el-input :rows="4" type="textarea" v-model="currentBus.description"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="toCancel('ruleForm')" size='mini'>取 消</el-button> 
        <el-button type="primary" @click="toSave('ruleForm')" size='mini'>确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { findAllProvince,findByIdProvince} from "@/api/province.js";
import { findAllCity,findCityByProvinceId} from "@/api/city.js";
import { findAllBusiness,findBusinessByProvince,findBusinessByCity,findBusinessByIndustry,findBusinessByScale,deleteBusinessById,saveOrUpdateBusiness } from "@/api/business.js";
import config from '@/utils/config.js'
export default {
  data() {
    return {
      //省份
      province:'',
      //城市
      city:'',
      //行业
      industry:'',
      //规模
      scale:'',
      //省份数组
      provinceData:[],
      //城市数组
      cityData:[],
      //行业数据
      industryData:[],
      //规模数据
      scaleData:[],
      //商家列表（最后显示的）
      // businessList:[],
      //商家数组
      businessData:[],
      currentpage:1,
      //每页条数
      pageSize:config.pageSize,
      //批量删除的ids
      ids:[],
      //当前查看或修改对象
      currentBus:{},
      //查看模态框显示与否
      seeVisible:false,
      //修改模态框的宽度
      formLabelWidth:'80px',
      //修改模态框显示与否
      editVisible:false,
      //省份对应的城市信息
      provincecityData:[],
      //校验规则
       rules: {
          name: [
            { required: true, message: '请输入公司名称', trigger: 'blur' },
          ],
          industry: [
            { required: true, message: '请输入行业类型', trigger: 'blur' },
          ],
          scale: [
            { required: true, message: '请输入公司规模', trigger: 'blur' },
          ],
          contactName: [
            { required: true, message: '请输入联系人', trigger: 'blur' },
          ],
          contactPhone: [
            { required: true, message: '请输入联系人电话', trigger: 'blur' },
          ],
          location: [
            { required: true, message: '请输入详细地址', trigger: 'blur' },
          ],
          description: [
            { required: true, message: '请输入公司描述', trigger: 'blur' },
          ],
          //选择框的判定是change事件
          province: [
            { required: true, message: '请选择省份', trigger: 'change' },
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' },
          ],
          // date1: [
          //   {  required: true, message: '请选择日期', trigger: 'change' }
          // ],

          
        }
    
    };
  },
  computed: {
    businessList(){
      let temp=[...this.businessData];
      let page=this.currentpage;
      let pageSize=config.pageSize;
      return temp.slice((page-1)*pageSize,page*pageSize);
    },
  },
  methods: {
    //async最外层的用await
    //右上角模态框关闭之前
    beforeClose(){
      this.$refs['ruleForm'].resetFields();
      this.editVisible = false;
    },
    //取消模态框
    toCancel(forName){
      this.$refs[forName].resetFields();
      this.editVisible = false;
    },

    //保存更新的商家信息
     
    toSave(formName){

      this.$refs[formName].validate((valid) => {
          if (valid) {
            //通过验证
             let province = this.currentBus.province;
              //改了进if
              if(+province){
                //将省份id处理成省份名字再保存
                //过滤省份数组，找出id对应的省份
                let result=this.provinceData.filter((item)=>{
                  return item.id==+province;
                })[0];//因为过滤出来肯定只有一个，而filter找出来的数组，用[0]拿数组的第一个值
                this.currentBus.province=result.name;
              }
              saveOrUpdateBusiness(this.currentBus)
              .then((res)=>{
                if(res.status==200){
                  config.successMsg(this,'修改商家信息成功');
                this.editVisible = false;
                this.getallbus();
                }else{
                  config.errorMsg(this, "保存商家信息失败");
                  this.editVisible = false;
                }
              })
              .catch((error)=>{config.errorMsg(this, "保存商家信息失败");this.editVisible = false;});
              
            
          } else {
            config.errorMsg(this, "表单验证不通过");
            return false;
          }
        });
      
     
      
    },
    //分页
    pageChange(page){
      this.currentpage=page;
    },
    //规模发生改变
    scaleChange(val){
      this.city='';
      this.industry='';
      this.province='';
      //this.scale='';
       if(val!=""){
        findBusinessByScale({scale:val})
      .then((res)=>{
        this.businessData=res.data;
        this.currentpage=1;
      })
      .catch(
        (error)=>{config.errorMsg(this, "查找错误")}
        //(error)=>{console.log(error);}
        );
      }else{
        this.getallbus();
      }
    },

    //行业发生改变
    industryChange(val){
      this.city='';
      //this.industry='';
      this.province='';
      this.scale='';
       if(val!=""){
        findBusinessByIndustry({industry:val})
      .then((res)=>{
        this.businessData=res.data;
        this.currentpage=1;
      })
      .catch(
        (error)=>{config.errorMsg(this, "查找错误")}
        //(error)=>{console.log(error);}
        );
      }else{
        this.getallbus();
      }
    },
    //城市发生改变
    cityChange(val){
      //this.city='';
      this.industry='';
      this.province='';
      this.scale='';
      if(val!=""){
        findBusinessByCity({city:val})
      .then((res)=>{
        this.businessData=res.data;
        this.currentpage=1;
      })
      .catch(
        (error)=>{config.errorMsg(this, "查找错误")}
        //(error)=>{console.log(error);}
        );
      }else{
        this.getallbus();
      }
    },
    //省份发生改变
    provinceChange(val){
      //val select选中的值
      //console.log(val);
      this.city='';
      this.industry='';
      //this.province='';
      this.scale='';
      if(val!=""){
        findBusinessByProvince({province:val})
      .then((res)=>{
        this.businessData=res.data;
        this.currentpage=1;
      })
      .catch(
        (error)=>{config.errorMsg(this, "查找错误")}
        //(error)=>{console.log(error);}
        );
      }else{
        this.getallbus();
      }
    },
    //复选框事件处理
    selectionChange(val){
      //提取id
      let ids=val.map((item)=>{
        return item.id;
      })
      this.ids=ids;
    },
    getallprovince(){
      findAllProvince().then((res)=>{
        this.provinceData=res.data;
        // config.successMsg(this,'查找成功');
      }).catch((error)=>{config.errorMsg(this, "查找错误")});
    },
    getallcity(){
      findAllCity().then((res)=>{
        this.cityData=res.data;
        // config.successMsg(this,'查找成功');
      }).catch((error)=>{config.errorMsg(this, "查找错误")});
    },
    getallbus(){
      findAllBusiness().then((res)=>{
        this.businessData=res.data;
        // config.successMsg(this,'查找成功');
        //行业数组
        let temp= res.data.map((item)=>{
          return item.industry;
        });
        this.industryData=[...new Set(temp)];
        //规模数组
        let scalearr= res.data.map((item)=>{
          return item.scale;
        });
        this.scaleData=[...new Set(scalearr)];
        this.currentpage=1;//当前页数要改回第一页
      }).catch((error)=>{config.errorMsg(this, "查找错误")});
    },
    toEdit(row){
      this.currentBus={...row};
      this.editVisible=true;
    },
    toSee(row){
      this.currentBus={...row};
      this.seeVisible=true;
    },
    toDelect(id){
      // console.log(id);
      this.$confirm('是否确认删除该信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteBusinessById({id}).then((res)=>{
            if (res.status === 200) {
              config.successMsg(this, "删除成功");
              this.getallbus();
            } else {
              config.errorMsg(this, "删除失败");
            }
          }).catch((error)=>{  config.errorMsg(this, "删除失败");});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });      
        });
       //尾
    },
    //批量删除
    toBatchDelete(){
      //获取被选中的数据 this.ids
    let ids=this.ids;
    if(ids.length>0){
      this.$alert('是否删除？', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            if(action=='confirm'){
              let result=[];
              ids.forEach((id)=>{
                 deleteBusinessById({id})
                 .then((res)=>{
                  result.push(res.status);
                 })
                 .catch((error)=>{
                   result.push(500);
                   //config.errorMsg(this, "查找错误");
                   })
              })
              setTimeout(()=>{
                //console.log(result);
                let resu =result.every((item)=>{return item===200})
                if(resu){
                  config.successMsg(this,'批量成功');
                }else{
                  config.errorMsg(this, "批量删除失败");
                }
                this.getallbus();
              },2000)
              //every用于遍历判断是不是全部都符合return的条件

            }

          }
        });
    }else{
      this.$message({
          message: '请选择要删除的对象',
          type: 'warning'
        });
    }
  },
  dialogprovinceChange(val){
    findCityByProvinceId(val)
    .then((res)=>{
      this.provincecityData=res.data;
      this.currentBus.city='';
    })
    .catch((error)=>{  config.errorMsg(this, "查找省份对应城市失败");});
    
  }
  

  },
  created() {
    this.getallprovince();
    this.getallcity();
    this.getallbus();
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
  .infortable{
    margin-top: 10px;
  }
  .delandpage{
    overflow: hidden;
    margin-top: 10px;
    .btndiv{
      float: left;
    }
    .pagediv{
      float: right;
    }
  }
.seeDiv{
  border-bottom: 1px solid #ccc;
  line-height: 30px;
  font-weight: bold;
  span{
    color: #999;
  }

}
.descDiv{
  color: #777;
  font-size: 12px;
  line-height: 30px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
}
.imgDiv{
  text-align: center;
}
.dialog-footer{
  text-align: center;
  margin-top: -40px;
}
</style>