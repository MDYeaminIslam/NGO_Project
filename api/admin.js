import axiosAdmin from "../axios/admin";
import url from "../config/main-url";
import { uploadPhoto } from "./upload-photo";
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
//Add Samity
export async function addSamity(data) {
  const response = await axiosAdmin.post(`${url}/samity/add`, data);
  return response.data;
}

//create member
export async function createMember(data) {
  const photoUrl = await uploadPhoto(data.photo);
  data["photo"] = photoUrl;
  console.log(data);
  const response = await axiosAdmin.post(`${url}/localuser/add`, data);
  return response.data;
}

//get member using phoneNumber
export async function searchUserByPhoneNumber(number) {
  const response = await axiosAdmin.get(`${url}/localuser/${number}`);
  return response.data.data;
}
