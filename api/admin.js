import axiosAdmin from "../axios/admin";
import url from "../config/main-url";
// Add Branch
export async function addBranch(data) {
  console.log(data);
  const response = await axiosAdmin.post(`${url}/branch/add`, data);
  return response.data;
}
//Get all branches
export async function getAllBranches() {
  const response = await axiosAdmin.get(`${url}/branch/all`);
  return response.data.data;
}

export async function addSamity(data) {
  const response = await axiosAdmin.post(`${url}/samity/add`, data);
  return response.data;
}
