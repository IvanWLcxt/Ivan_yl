/***
 * @Author:Ivan
 * @Date:2019-12-25 09:39:25
 * @LastModifiedBy:Ivan
 * @Last Modified time:2019-12-25 16:15:06
 */

/*
 * @Author: liuyr 
 * 省份模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: liuyr
 * @Last Modified time: 2019-12-22 19:53:09
 */
import axios from '@/utils/axios'

 /**
  * 根据id删除省份
  * @param {object} param {id:''} 
  */
 export function deleteProvinceById(id) {
  return axios.post('/Province/deleteById',id);
}

/* 查找所有省份信息 */
export  function findAllProvince() {
  return axios.get('/Province/findAll'); 
}

//根据id查找省份
export function findByIdProvince(id) {
  return axios.get('/Province/findById',{params:{id}});
}
//新增或更新省份信息
export function saveOrUpdateProvince(infor) {
  return axios.post('/Province/saveOrUpdate',infor);
}


//post.('',params)