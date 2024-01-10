import { Base_url } from "./BaseUrl";
import { commonAPI } from "./commonApi";

export const getAssembliesAPI = async (searchkey) => {
    return await commonAPI("GET", `${Base_url}/get/assemblies?search=${searchkey}`, "", "")
}

export const getCategoryAPI = async (searchkey) => {
    return await commonAPI("GET", `${Base_url}/get/categories?search=${searchkey}`, "", "")
}
export const getSubcategoryAPI = async (searchkey) => {
    return await commonAPI("GET", `${Base_url}/get/subcats?search=${searchkey}`, "", "")
}

export const addProjectAPI = async (project) => {
    return await commonAPI("POST", `${Base_url}/add/project`, project, "")
}
export const getProjectsAPI=async(searchKey)=>{
    return await commonAPI("GET",`${Base_url}/get/projects?search=${searchKey}`,"","")
}

export const deleteProjectAPI=async(item)=>{
    return await commonAPI("DELETE",`${Base_url}/delete/project`,item,"")
}
