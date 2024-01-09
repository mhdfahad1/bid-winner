import { Base_url } from "./BaseUrl";
import { commonAPI } from "./commonApi";

export const getAssembliesAPI = async () => {
    return await commonAPI("GET", `${Base_url}/get/assemblies`, "", "")
}