import axiosAdmin from "../axios/admin";
import url from "../config/main-url";
// Add Branch
export async function addBranch(data) {
  console.log(data);
  const response = await axiosAdmin.post(`${url}/branch/add`, data);
  return response.data;
}
