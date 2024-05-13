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
//get users using samity and branch id
export async function getLocalUsersByBranchIdAndSmityId(data) {
  const { branchId, samityId } = data;
  const response = await axiosAdmin.get(
    `/localuser/all?branchId=${branchId}&samityId=${samityId}`
  );
  return response.data;
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
//pay loan account
export async function payLoanAccount(data) {
  const response = await axiosAdmin.post("/loan/pay", data);
  return response.data;
}
//get loan accounts using samity and branch id adn type
export async function getAllLoanAccountByBranchIdAndSmityId(data) {
  const { branchId, samityId, paymentTerm } = data;
  const response = await axiosAdmin.get(
    `/loan/all?branchId=${branchId}&samityId=${samityId}&paymentTerm=${paymentTerm}`
  );
  return response.data;
}
//search deposit account
export async function searchLoanAccount(number) {
  const response = await axiosAdmin.get(`/loan/search/${number}`);
  return response.data.data;
}
export async function searchDepositAccountByBranchAndSamity(body) {
  const { branchId, samityId } = body;
  const response = await axiosAdmin.get(
    `/deposit/list?branchId=${branchId}&samityId=${samityId}`
  );
  return response.data;
}

//create employee
export async function createEmployee(data) {
  const photoUrl = await uploadPhoto(data.photo);
  data["photo"] = photoUrl;
  const response = await axiosAdmin.post(`/employee/create`, data);

  return response.data;
}
//get empolyee using samity and branch id
export async function getAllEmployeeByBranchIdAndSmityId(data) {
  const { branchId, samityId } = data;
  const response = await axiosAdmin.get(
    `/employee/all?branchId=${branchId}&samityId=${samityId}`
  );
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
// get all expense list
export async function getAllExpenses(data) {
  const { branchId, samityId, type } = data;
  const response = await axiosAdmin.get(
    `/expense/all?branchId=${branchId}&samityId=${samityId}&type=${type}`
  );
  return response.data.data;
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
//get attendance sheet
export async function getAttendeesSheet(branch, samity, date) {
  const response = await axiosAdmin.get(
    `/employee/attendance?branchId=${branch}&samityId=${samity}&date=${date}`
  );
  return response.data;
}
//set attendance sheet
export async function setAttendeesSheet(data, other) {
  const { branchId, samityId, date } = other;
  console.log(data);
  const response = await axiosAdmin.post(
    `/employee/set-attendance?branchId=${branchId}&samityId=${samityId}&date=${date}`,
    data
  );
  return response;
}

//create praying amount application
export async function createPrayingAmountApplication(data) {
  const response = await axiosAdmin.post("/praying-application/create", data);
  console.log(response.data);
  return response.data;
}

//create monthly payslip
export async function createMonthlyPaySlipApplication(data) {
  const response = await axiosAdmin.post("/pay-slip/monthly/create", data);
  return response.data;
}
// add asset
export async function addAsset(data) {
  const response = await axiosAdmin.post("/asset/add", data);
  return response.data;
}
//get all assets
export async function getAllAssets(data) {
  const { branchId, samityId } = data;
  const response = await axiosAdmin.get(
    `/asset/all?branchId=${branchId}&samityId=${samityId}`
  );
  return response.data.data;
}

//get income
export async function getIncome(data) {
  const { branchId, samityId } = data;
  const response = await axiosAdmin.get(
    `/loan/profit?branchId=${branchId}&samityId=${samityId}`
  );
  return response.data;
}

//admin registration

export async function adminRegistration(data) {
  delete data["confirmPassword"];
  const response = await axiosAdmin.post("/admin/create", data);
  return response.data;
}
//login
export async function loginAdminCollector(data) {
  const response = await axiosAdmin.post("/auth/user", data);
  return response.data;
}

//ngo loan create
export async function ngoLoansCreate(data) {
  const response = await axiosAdmin.post("/loan/ngo-loan/create", data);
  return response.data;
}
//ngo loan list
export async function ngoLoanList() {
  const response = await axiosAdmin.get("/loan/ngo-loan/list");
  return response.data.data;
}

//ngo loan transaction by id
export async function ngoLoanTransaction(id) {
  const response = await axiosAdmin.get(`/loan/ngo-loan/${id}`);
  return response.data.data;
}
//ngo loan pay
export async function ngoLoanPayment(data) {
  const response = await axiosAdmin.post("/loan/ngo-loan/pay", data);
  return response.data;
}
