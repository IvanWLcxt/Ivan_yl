<!--
 @Author:Ivan
 @Date:2019-12-28 10:11:54
 @LastModifiedBy:Ivan
 @Last Modified time:2019-12-28 10:11:54
-->

 @Last Modified time:2019-12-28 10:08:37
-->

 @Last Modified time:2019-12-28 10:08:23
-->

 @Last Modified time:2019-12-28 10:08:10
-->

 @Last Modified time:2019-12-28 10:07:56
-->

 @Last Modified time:2019-12-28 10:07:15
-->

 @Last Modified time:2019-12-28 10:06:42
-->

 @Last Modified time:2019-12-28 10:05:36
-->

 @Last Modified time:2019-12-28 10:05:23
-->

 @Last Modified time:2019-12-28 10:04:54
-->

 @Last Modified time:2019-12-28 10:02:47
-->

 @Last Modified time:2019-12-28 09:15:43
-->




/*
 * @Author: liuyr 
 * 客服列表页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: liuyr
 * @Last Modified time: 2019-12-23 21:10:39
 */
<template>
  <div id="waiterList">
    <!-- 状态下拉框 -->
    <el-select v-model="status" clearable placeholder="状态">
      <!-- <el-option
        v-for="item in statusData"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option> -->
      <el-option key="1" label="在线" value="在线"></el-option>
      <el-option key="2" label="离线" value="离线"></el-option>
      
    </el-select>
    <!-- 性别下拉框 -->
    <el-select v-model="gender" clearable placeholder="性别">
      <el-option key="1" label="男" value="男"></el-option>
      <el-option key="2" label="女" value="女"></el-option>
    </el-select>
    <span style="margin-left: 20px;">（当前标准为</span>
      <template>
          <el-input style="width:50px;display:inline-block" v-model="peopletotal" placeholder="" ></el-input>
      </template>
    <span>人）</span>
    
    <!-- 搜索框 -->
    <div class="searchDiv">
      <el-input placeholder="请输入关键字" v-model="secondinputSearch" class="input-with-select"  style="width:400px;">
        <el-select v-model="firstinputSearch" slot="prepend" placeholder="关键字" style="width:100px;">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <!-- 表格 -->
    <div >
      <el-table
      class="theform"
    ref="multipleTable"
    :data="waiterData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="SelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="用户名"
          prop="username"
        >
          <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
        </el-table-column>
        <el-table-column
          prop="realname"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="分配工作">
          <template slot-scope="scope">
            <el-button @click="giveWork(scope.row)" type="text" size="small">分配</el-button>
          </template>
        </el-table-column>
          <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="toDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pageStyle">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="waiterData.length">
        </el-pagination>
      </div>
    </div>
    <!-- 自动处理 -->
      <div style="margin-top: 20px">
        <el-button>自动分配</el-button>
        <el-button>自动填满</el-button>
      </div>
      <!-- 添加与导入客服信息 -->
      <div class="add_or_lead">
        <el-button type="primary" @click="addWaiter()" size="mini" icon="el-icon-info">添加客服</el-button>
         <el-button type="warning" @click="leadWaiter()" size="mini" icon="el-icon-info">导入客服</el-button>
      </div>
      <!-- 点击按钮后打开的添加客服对话框表单 -->
      <div>
        <el-dialog title="添加客服" :visible.sync="adddialogFormVisible">
          <span id="addinfor">客服的手机号将作为客服的用户名</span>
          <el-form :model="addform">
            <el-form-item label="手机号" :label-width="formLabelWidth">
              <el-input v-model="addform.username"  placeholder="请输入客服手机号"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="addform.realname" placeholder="请输入客服姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别"  :label-width="formLabelWidth">
              <el-radio-group v-model="addform.gender">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
          </el-form-item>
          </el-form>
          
          <div slot="footer" class="dialog-footer">
            <el-button @click="adddialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="adddialogFormVisible = false">添加</el-button>
          </div>
        </el-dialog>
      </div>
      <!-- 点击导入客服信息打开的对话框 -->
      <div>
        <el-dialog title="导入客服" :visible.sync="leaddialogFormVisible">
          <h3>导入说明</h3>
          <span id="leadinfor">使用导入功能时，请按照模板表格规定的字段去填写对应信息，<br>您可以点击按钮下载模板表格，填写完后在下提交 ：</span>
           <el-button type="primary" size="mini" id="dLoadbtn">下载模板</el-button>
          <!-- <el-form :model="addform">
            <el-form-item label="手机号" :label-width="formLabelWidth">
              <el-input v-model="addform.username"  placeholder="请输入客服手机号"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="addform.realname" placeholder="请输入客服姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别"  :label-width="formLabelWidth">
              <el-radio-group v-model="addform.gender">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
          </el-form-item>
          </el-form> -->
          <div slot="footer" class="dialog-footer" id="startLeadbtn">
            <el-button type="success" @click="leaddialogFormVisible = false" size="mini" >开始导入</el-button>
          </div>
        </el-dialog>
      </div>
    <!-- wei -->
    </div>
</template>

<script>
import { findAllCustomerService} from "@/api/customerService.js";
import config from '@/utils/config.js'
export default {
  data() {
    return {
      //当前标准人数
      peopletotal:'',
      //状态数组
      statusData:[],
      //状态下拉框选择值
      status:'',
      //第一个搜索框
      firstinputSearch:'',
      //第二个搜索框
      secondinputSearch:'',
      //被选择的性别
      gender:'',
      //总客服信息
      waiterData:[],
      //添加客服对话框显示
      adddialogFormVisible:false,
      //性别单选框
      gender:'',
      //添加客服的表单
      addform:{},
      //字体宽度
      formLabelWidth:'120px',
      //导入客服对话框显示
      leaddialogFormVisible:false,

    };
  },
  computed: {},
  methods: {
    //多选处理
    SelectionChange(){},
    //删除单行
    toDelete(){},
    //分配工作
    giveWork(){},
    //添加客服事件处理
    addWaiter(){
      this.adddialogFormVisible=true;
    },
    //导入客服事件处理
    leadWaiter(){
      this.leaddialogFormVisible=true;
    },
    //获取全部客服信息
    getallwaiter(){
      findAllCustomerService().then((res)=>{
        this.waiterData=res.data;
      }).catch((error)=>{config.errorMsg(this, "获取客服信息失败");});
    }
  },
  created() {
    this.getallwaiter();
  },
  mounted() {}
};
</script>
<style  scoped>
.searchDiv{
  float: right;
  overflow: hidden;
}
.peopletotal{
    width: 50px;
  }
  .el-select .el-input {
    width: 130px;
    
  }
  .theform{
    margin-top: 15px;
    overflow: hidden;
  }
  .pageStyle{
    float: right;
    overflow: hidden;
  }
  .add_or_lead{
    position: absolute;
    top: 5px;
    right: 0;
    overflow: hidden;
  }
  #addinfor{
    color: red;
    position: relative;
    top: -50px;
    left: 80px;
  }
  #leadinfor{
    color: red;
    position: relative;
    /* top: -50px; */
  }
  #dLoadbtn{
    position: relative;
    top: -70px;
    left: 320px;
  }
  #startLeadbtn{
    /* position: relative;
    
    left: -400px; */
    text-align: center;
  }


</style>