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
//create Deposit Account
export async function createDepositAccount(data) {
  const response = await axiosAdmin.post(`${url}/deposit/create`, data);
  return response.data;
}

//search deposit account
export async function searchDepositAccount(number) {
  try {
    const response = await axiosAdmin.get(`${url}/deposit/search/${number}`);
    return response.data.data;
  } catch (error) {
    return [];
  }
}
// make deposit
export async function makeDeposit(data) {
  const response = await axiosAdmin.post(`${url}/deposit/makeDeposit`, data);
  return response.data;
}

// make withdraw
export async function makeWithdraw(data) {
  const response = await axiosAdmin.post(`${url}/deposit/makeWithdraw`, data);
  return response.data;
}
//create loan account
export async function createLoanAccount(data) {
  const response = await axiosAdmin.post(`${url}/loan/create`, data);
  return response.data;
}
//search deposit account
export async function searchLoanAccount(number) {
  try {
    const response = await axiosAdmin.get(`${url}/loan/search/${number}`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    return [];
  }
}

//create employee
export async function createEmployee(data) {
  const photoUrl = await uploadPhoto(data.photo);
  data["photo"] = photoUrl;
  const response = await axiosAdmin.post(`/employee/create`, data);

  return response.data;
}
