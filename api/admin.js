import axiosAdmin from "../axios/admin";
import { uploadPhoto } from "./upload-photo";
// Add Branch
export async function addBranch(data) {
  console.log(data);
  const response = await axiosAdmin.post(`/branch/add`, data);
  return response.data;
}
//Get all branches
export async function getAllBranches() {
  const response = await axiosAdmin.get(`/branch/all`);
  return response.data.data;
}
//Add Samity
export async function addSamity(data) {
  const response = await axiosAdmin.post(`/samity/add`, data);
  return response.data;
}

//create member
export async function createMember(data) {
  const photoUrl = await uploadPhoto(data.photo);
  data["photo"] = photoUrl;
  console.log(data);
  const response = await axiosAdmin.post(`/localuser/add`, data);
  return response.data;
}

//get member using phoneNumber
export async function searchUserByPhoneNumber(number) {
  const response = await axiosAdmin.get(`/localuser/${number}`);
  return response.data.data;
}
//create Deposit Account
export async function createDepositAccount(data) {
  const response = await axiosAdmin.post(`/deposit/create`, data);
  return response.data;
}

//search deposit account
export async function searchDepositAccount(number) {
  try {
    const response = await axiosAdmin.get(`/deposit/search/${number}`);
    return response.data.data;
  } catch (error) {
    return [];
  }
}
// make deposit
export async function makeDeposit(data) {
  const response = await axiosAdmin.post(`/deposit/makeDeposit`, data);
  return response.data;
}

// make withdraw
export async function makeWithdraw(data) {
  const response = await axiosAdmin.post(`/deposit/makeWithdraw`, data);
  return response.data;
}
//create loan account
export async function createLoanAccount(data) {
  const response = await axiosAdmin.post(`/loan/create`, data);
  return response.data;
}
//search deposit account
export async function searchLoanAccount(number) {
  try {
    const response = await axiosAdmin.get(`/loan/search/${number}`);
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

//get member using phoneNumber
export async function searchEmployeeByPhoneNumber(number) {
  try {
    const response = await axiosAdmin.get(`/employee/search/${number}`);
    return response.data.data;
  } catch (err) {
    return [];
  }
}

//set employee credentials
export async function setEmployeeCredentials(data) {
  const response = await axiosAdmin.post("/employee/credentials", data);
  return response.data;
}

//add monthly expense

export async function addMonthlyExpense(data) {
  const response = await axiosAdmin.post("/expense/monthly/add", data);
  return response.data;
}

//create purchase expense
export async function createPurchaseExpense(data) {
  const response = await axiosAdmin.post("/expense/purchase/add", data);
  return response.data;
}

//create bank
export async function createBank(data) {
  const response = await axiosAdmin.post("/bank/add", data);
  return response.data;
}

// get all bank
export async function getAllBank() {
  const response = await axiosAdmin.get("/bank/all");
  return response.data.data;
}
// add drawerToBank transaction
export async function addDrawerToBank(data) {
  const response = await axiosAdmin.post(
    "/bank/from_drawer_to_bank/transaction",
    data
  );
  return response.data;
}

//add drawer cash
export async function addDrawerCashInOut(data) {
  const response = await axiosAdmin.post("/drawer/add", data);
  return response.data;
}
