/***
 * @Author:Ivan
 * @Date:2019-12-25 09:15:37
 * @LastModifiedBy:Ivan
 * @Last Modified time:2019-12-25 09:29:55
 */



/*
 * @Author: liuyr 
 * 商家模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: liuyr
 * @Last Modified time: 2019-12-22 19:53:09
 */

import axios from '@/utils/axios'


 /**
  * 根据id删除商家
  * @param {object} param {id:''} 
  */
export function deleteBusinessById(id) {
  return axios.post('/Business/deleteById',id);
}

/**
 * 查找所有商家信息
 */
export  function findAllBusiness() {
  return axios.get('/Business/findAll'); 
}

/**
 * 根据城市找商家
 * @param {object} city 
 */

export function findBusinessByCity(city) {
  return axios.get('/Business/findByCity',{params:city});
}
//根据id找商家
export function findBusinessById(id) {
  return axios.get('/Business/findById',{params:id});
}
//根据行业找商家
export function findBusinessByIndustry(industry) {
  return axios.get('/Business/findByIndustry',{params:industry});
}
//根据地区找商家
export function findBusinessByLocation(location) {
  return axios.get('/Business/findByLocation',{params:location});
}
//根据省份找商家
export function findBusinessByProvince(province) {
  return axios.get('/Business/findByProvince',{params:province});
}
//根据规模找商家
export function findBusinessByScale(scale) {
  return axios.get('/Business/findByScale',{params:scale});
}
//添加或修改商家信息
export function saveOrUpdateBusiness(infor) {
  return axios.post('/Business/saveOrUpdate',infor);
}




//post.('',params)