import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashBoardAdmin from "../component/dashboard/DashBoardAdmin";
import AddMember from "../pages/Member/AddMember";
import MembersList from "../pages/Member/MembersList";
import MemberClosing from "../pages/Member/MemberClosing";
import MemberRequest from "../pages/Member/MemberRequest";
import CloseSavingAccount from "../pages/Saving Account/CloseSavingAccount";
import Deposit from "../pages/Saving Account/Deposit";
import SavingAccountRequest from "../pages/Saving Account/SavingAccountRequest";
import WithdrawMoney from "../pages/Saving Account/WithdrawMoney";
import AddLoanPlan from "../pages/Loan Management/AddLoanPlan";
import AllCollection from "../pages/Loan Management/AllCollection";
import AllLoan from "../pages/Loan Management/AllLoan";
import ApplyLoan from "../pages/Loan Management/ApplyLoan";
import LoanCollection from "../pages/Loan Management/LoanCollection";
import LoanEvaluation from "../pages/Loan Management/LoanEvaluation";
import LoanRequest from "../pages/Loan Management/LoanRequest";
import PaidLoan from "../pages/Loan Management/PaidLoan";
import RunningLoan from "../pages/Loan Management/RunningLoan";
import AllExpense from "../pages/Expense/AllExpense";
import MonthlyExpense from "../pages/Expense/MonthlyExpense";
import Purchase from "../pages/Expense/Purchase";
import EmployeeAdd from "../pages/Employee/EmployeeAdd";
import EmployeeList from "../pages/Employee/EmployeeList";
import EmployeePosting from "../pages/Employee/EmployeePosting";
import AnyCharges from "../pages/Income/AnyCharges";
import CategoryWiseIncome from "../pages/Income/CategoryWiseIncome";
import LoanProfit from "../pages/Income/LoanProfit";
import Memberfees from "../pages/Income/Memberfees";
import Penalty from "../pages/Income/Penalty";
import Advance from "../pages/HRM/Advance";
import Attendance from "../pages/HRM/Attendance";
import ExtraBill from "../pages/HRM/ExtraBill";
import Fixation from "../pages/HRM/Fixation";
import LeaveApplication from "../pages/HRM/LeaveApplication";
import PaySlip from "../pages/HRM/PaySlip";
import Profile from "../pages/HRM/Profile";
import SalaryPosting from "../pages/HRM/SalaryPosting";
import SalarySheet from "../pages/HRM/SalarySheet";
import AddNewBranch from "../pages/Branches/AddNewBranch";
import AddNewSamity from "../pages/Branches/AddNewSamity";
import BranchList from "../pages/Branches/BranchList";
import BranchSubNavbar from "../pages/Branches/BranchSubNavbar";
import SamityList from "../pages/Branches/SamityList";
import DrawerCash from "../pages/Manage Drawer Cash/DrawerCash";
import DrawerCashtoBank from "../pages/Manage Drawer Cash/DrawerCashtoBank";
// import BankCash from "../pages/Manage Bank Cash/BankCash";
// import BankCashtoDrawer from "../pages/Manage Bank Cash/BankCashtoDrawer";
// import AddNewUser from "../pages/User Maintenance/AddNewUser";
// import AddNewUserType from "../pages/User Maintenance/AddNewUserType";
// import UserList from "../pages/User Maintenance/UserList";
// import UserType from "../pages/User Maintenance/UserType";
import Upcoming from "../pages/Liabilities/Upcoming";
import Asset from "../pages/Report/Asset";
import BalanceSheet from "../pages/Report/BalanceSheet";
import Credit from "../pages/Report/Credit";
import Debit from "../pages/Report/Debit";
import DebitvsCredit from "../pages/Report/DebitvsCredit";
import Liabilities from "../pages/Report/Liabilities";
import TdsTaxVat from "../pages/Report/TdsTaxVat";
import GeneralSettings from "../pages/Setting General/GeneralSettings";
import TransactionnPosting from "../pages/Saving Account/TransactionnPosting";
import AccountClosing from "../pages/Saving Account/AccountClosing";
import ClosingAccountRequest from "../pages/Saving Account/ClosingAccountRequest";
import OpenLoanAccount from "../pages/Loan Management/OpenLoanAccount";
import LoanAccountList from "../pages/Loan Management/LoanAccountList";
import Loan_transaction_posting from "../pages/Loan Management/Loan_transaction_posting";
import LoanAccountClosing from "../pages/Loan Management/LoanAccountClosing";
import LoanAccountRequest from "../pages/Loan Management/LoanAccountRequest";
import LoanClosingAccountRequest from "../pages/Loan Management/LoanClosingAccountRequest";
import EmployeeLoginCredentials from "../pages/Employee/EmployeeLoginCredentials";
import EditFixedAsset from "../pages/Assets/Fixed Asset/EditFixedAsset";
import RemoveWastedAsset from "../pages/Assets/Fixed Asset/RemoveWastedAsset";
import FixedAssetList from "../pages/Assets/Fixed Asset/FixedAssetList";
import AddNewFixedAsset from "../pages/Assets/Fixed Asset/AddNewFixedAsset";
import FixedAssetItem from "../pages/Assets/Fixed Asset/FixedAssetItem";
import FixedAssetTypes from "../pages/Assets/Fixed Asset/FixedAssetTypes";
import PayingAmountApplication from "../pages/HRM/PayingAmountApplication";
import LoanReceivedMoney from "../pages/Loan Management/LoanReceivedMoney";
import AddNewTemporaryAsset from "../pages/Assets/Temporary Asset/AddNewTemporaryAsset";
import EditTemporaryAsset from "../pages/Assets/Temporary Asset/EditTemporaryAsset";
import RemoveWastedTemporaryAsset from "../pages/Assets/Temporary Asset/RemoveWastedTemporaryAsset";
import TemporaryAssetItem from "../pages/Assets/Temporary Asset/TemporaryAssetItem";
import TemporaryAssetList from "../pages/Assets/Temporary Asset/TemporaryAssetList";
import TemporaryAssetTypes from "../pages/Assets/Temporary Asset/TemporaryAssetTypes";
import IMWFundCollection from "../pages/Branches/IMWFundCollection";
import AddBank from "../pages/Manage Drawer Cash/AddBank";
import MemberDetailsPage from "../pages/Member/MemberDetailsPage";
import EmployeeDetailsPage from "../pages/Employee/EmployeeDetailsPage";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import ForgotPass from "../pages/Login/ForgotPass";
import RegPage from "../pages/Login/RegPage";
import Registration from "../pages/Registration/Registration";
import AdminRoute from "./AdminRoute";
import ROLES from "../../config/roles";
import LoanPayList from "../pages/Loan Management/LoanPayList";
import LoanPayDetails from "../pages/Loan Management/LoanPayDetails";
import SavingAccountList from "../pages/Saving Account/SavingAccountList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //admin dashboard
      {
        path: "/",
        element: (
          <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}>
            <DashBoardAdmin />
          </AdminRoute>
        ),
      },
      // members routes
      {
        path: "add_member",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><AddMember /></AdminRoute>,
      },
      {
        path: "members_list",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><MembersList /></AdminRoute>,
      },
      {
        path: "member_closing",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><MemberClosing /></AdminRoute>,
      },
      {
        path: "member_request",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><MemberRequest /></AdminRoute>,
      },
      {
        path: "members_details/:id",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><MemberDetailsPage /></AdminRoute>,
      },

      //Branches routes
      {
        path: "add_new_branch",
        element: <AdminRoute roles={[ROLES.Admin]}><AddNewBranch /></AdminRoute>,
      },
      {
        path: "add_new_samity",
        element: <AdminRoute roles={[ROLES.Admin]}><AddNewSamity /></AdminRoute>,
      },
      {
        path: "branch_list",
        element: <AdminRoute roles={[ROLES.Admin]}><BranchList /></AdminRoute>,
      },
      {
        path: "branch_sub_navbar",
        element: <AdminRoute roles={[ROLES.Admin]}><BranchSubNavbar /></AdminRoute>,
      },
      {
        path: "samity_list",
        element: <AdminRoute roles={[ROLES.Admin]}><SamityList /></AdminRoute>,
      },
      {
        path: "imw_fund_collection",
        element: <AdminRoute roles={[ROLES.Admin]}><IMWFundCollection /></AdminRoute>,
      },

      //Saving Accounts routes
      {
        path: "close_saving_account",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><CloseSavingAccount /></AdminRoute>,
      },
      {
        path: "deposit",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><Deposit /></AdminRoute>,
      },

      {
        path: "withdraw_money",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><WithdrawMoney /></AdminRoute>,
      },
      {
        path: "transactionn_posting",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><TransactionnPosting /></AdminRoute>,
      },
      {
        path: "account_closing",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><AccountClosing /></AdminRoute>,
      },
      {
        path: "saving_account_request",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><SavingAccountRequest /></AdminRoute>,
      },
      {
        path: "closing_account_request",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}> <ClosingAccountRequest /></AdminRoute>,
      },
      {
        path: "saving_account_list",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><SavingAccountList/> </AdminRoute>
      },

      // loan handling routes
      {
        path: "open_loan_account",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><OpenLoanAccount /></AdminRoute>,
      },
      {
        path: "loan_account_list",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanAccountList /></AdminRoute>,
      },
      {
        path: "loan_evaluation",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanEvaluation /></AdminRoute>,
      },
      {
        path: "loan_transaction_posting",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><Loan_transaction_posting /></AdminRoute>,
      },
      {
        path: "loan_account_closing",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanAccountClosing /></AdminRoute>,
      },
      {
        path: "loan_received_money",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanReceivedMoney /></AdminRoute>,
      },

      {
        path: "loan_account_request",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanAccountRequest /></AdminRoute>,
      },
      {
        path: "loan_closing_account_request",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanClosingAccountRequest /></AdminRoute>,
      },

      {
        path: "add_loan_plan",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><AddLoanPlan /></AdminRoute>,
      },
      {
        path: "all_collection",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><AllCollection /></AdminRoute>,
      },
      {
        path: "all_loan",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><AllLoan /></AdminRoute>,
      },
      {
        path: "apply_loan",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><ApplyLoan /></AdminRoute>,
      },
      {
        path: "loan_collection",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanCollection /></AdminRoute>,
      },

      {
        path: "loan_request",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanRequest /></AdminRoute>,
      },
      {
        path: "paid_loan",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><PaidLoan /></AdminRoute>,
      },
      {
        path: "running_loan",
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><RunningLoan /></AdminRoute>,
      },
      {
        path: 'ngo_loan_pay_list',
        element: <AdminRoute roles={[ROLES.Admin, ROLES.Collector]}><LoanPayList /></AdminRoute>,
      },
      {
        path: 'loan_pay_details/:id',
        element: <LoanPayDetails />,
      },

      // Expense routes
      {
        path: "all_expense",
        element: <AdminRoute roles={[ROLES.Admin]}><AllExpense /></AdminRoute>,
      },
      {
        path: "monthly_expense",
        element: <AdminRoute roles={[ROLES.Admin]}><MonthlyExpense /></AdminRoute>,
      },
      {
        path: "purchase",
        element: <AdminRoute roles={[ROLES.Admin]}><Purchase /></AdminRoute>,
      },

      //Employee routs
      {
        path: "employee_add",
        element: <AdminRoute roles={[ROLES.Admin]}><EmployeeAdd /></AdminRoute>,
      },
      {
        path: "employee_login_credentials",
        element: <AdminRoute roles={[ROLES.Admin]}><EmployeeLoginCredentials /></AdminRoute>,
      },
      {
        path: "employee_list",
        element: <AdminRoute roles={[ROLES.Admin]}><EmployeeList /></AdminRoute>,
      },
      {
        path: "employee_posting",
        element: <AdminRoute roles={[ROLES.Admin]}><EmployeePosting /></AdminRoute>,
      },
      {
        path: "employee_details/:id",
        element: <AdminRoute roles={[ROLES.Admin]}><EmployeeDetailsPage /></AdminRoute>,
      },

      //  Income routes
      {
        path: "any_charges",
        element: <AdminRoute roles={[ROLES.Admin]}><AnyCharges /></AdminRoute>,
      },
      {
        path: "category_wise_income",
        element: <AdminRoute roles={[ROLES.Admin]}><CategoryWiseIncome /></AdminRoute>,
      },
      {
        path: "loan_profit",
        element: <AdminRoute roles={[ROLES.Admin]}><LoanProfit /></AdminRoute>,
      },
      {
        path: "member_fees",
        element: <AdminRoute roles={[ROLES.Admin]}><Memberfees /></AdminRoute>,
      },
      {
        path: "penalty",
        element: <AdminRoute roles={[ROLES.Admin]}><Penalty /></AdminRoute>,
      },

      //manage drawer cash routes
      {
        path: "drawer_cash",
        element: <AdminRoute roles={[ROLES.Admin]}><DrawerCash /></AdminRoute>,
      },
      {
        path: "drawer_cash_to_bank",
        element: <AdminRoute roles={[ROLES.Admin]}><DrawerCashtoBank /></AdminRoute>,
      },
      {
        path: "add_bank",
        element: <AdminRoute roles={[ROLES.Admin]}><AddBank /></AdminRoute>,
      },
      //manage bank cash routes
      // {
      //   path: "bank_cash",
      //   element: <BankCash />,
      // },
      // {
      //   path: "bank_cash_to_drawer",
      //   element: <BankCashtoDrawer />,
      // },

      //user maintenance routes
      // {
      //   path: "add_new_user",
      //   element: <AddNewUser />,
      // },
      // {
      //   path: "add_new_user_type",
      //   element: <AddNewUserType />,
      // },
      // {
      //   path: "user_list",
      //   element: <UserList />,
      // },
      // {
      //   path: "user_type",
      //   element: <UserType />,
      // },

      //HRM routs
      {
        path: "advance",
        element: <AdminRoute roles={[ROLES.Admin]}><Advance /></AdminRoute>,
      },
      {
        path: "attendance",
        element: <AdminRoute roles={[ROLES.Admin]}><Attendance /></AdminRoute>,
      },
      {
        path: "extra_bill",
        element: <AdminRoute roles={[ROLES.Admin]}><ExtraBill /></AdminRoute>,
      },
      {
        path: "fixation",
        element: <AdminRoute roles={[ROLES.Admin]}><Fixation /></AdminRoute>,
      },
      {
        path: "leave_application",
        element: <AdminRoute roles={[ROLES.Admin]}><LeaveApplication /></AdminRoute>,
      },
      {
        path: "pay_slip",
        element: <AdminRoute roles={[ROLES.Admin]}><PaySlip /></AdminRoute>,
      },
      {
        path: "profile",
        element: <AdminRoute roles={[ROLES.Admin]}><Profile /></AdminRoute>,
      },
      {
        path: "salary_posting",
        element: <AdminRoute roles={[ROLES.Admin]}><SalaryPosting /></AdminRoute>,
      },
      {
        path: "salary_sheet",
        element: <AdminRoute roles={[ROLES.Admin]}><SalarySheet /></AdminRoute>,
      },
      {
        path: "paying_amount_application",
        element: <AdminRoute roles={[ROLES.Admin]}><PayingAmountApplication /></AdminRoute>,
      },

      //Assets routes
      {
        path: "edit_fixed_asset",
        element: <AdminRoute roles={[ROLES.Admin]}><EditFixedAsset /></AdminRoute>,
      },
      {
        path: "remove_wasted_asset",
        element: <AdminRoute roles={[ROLES.Admin]}><RemoveWastedAsset /></AdminRoute>,
      },
      {
        path: "fixed_asset_list",
        element: <AdminRoute roles={[ROLES.Admin]}><FixedAssetList /></AdminRoute>,
      },
      {
        path: "add_new_fixed_asset",
        element: <AdminRoute roles={[ROLES.Admin]}><AddNewFixedAsset /></AdminRoute>,
      },
      {
        path: "fixed_asset_item",
        element: <AdminRoute roles={[ROLES.Admin]}><FixedAssetItem /></AdminRoute>,
      },
      {
        path: "fixed_asset_types",
        element: <AdminRoute roles={[ROLES.Admin]}><FixedAssetTypes /></AdminRoute>,
      },
      // temporary asset
      {
        path: "add_new_temporary_asset",
        element: <AdminRoute roles={[ROLES.Admin]}><AddNewTemporaryAsset /></AdminRoute>,
      },
      {
        path: "edit_temporary_asset",
        element: <AdminRoute roles={[ROLES.Admin]}><EditTemporaryAsset /></AdminRoute>,
      },
      {
        path: "remove_wasted_temporary_asset",
        element: <AdminRoute roles={[ROLES.Admin]}><RemoveWastedTemporaryAsset /></AdminRoute>,
      },
      {
        path: "temporary_asset_item",
        element: <AdminRoute roles={[ROLES.Admin]}><TemporaryAssetItem /></AdminRoute>,
      },
      {
        path: "temporary_asset_list",
        element: <AdminRoute roles={[ROLES.Admin]}><TemporaryAssetList /></AdminRoute>,
      },
      {
        path: "temporary_asset_types",
        element: <AdminRoute roles={[ROLES.Admin]}><TemporaryAssetTypes /></AdminRoute>,
      },

      //Liabilities routes
      {
        path: "upcoming",
        element: <AdminRoute roles={[ROLES.Admin]}><Upcoming /></AdminRoute>,
      },

      //Report routes
      {
        path: "asset",
        element: <AdminRoute roles={[ROLES.Admin]}><Asset /></AdminRoute>,
      },
      {
        path: "balance_sheet",
        element: <AdminRoute roles={[ROLES.Admin]}><BalanceSheet /></AdminRoute>,
      },
      {
        path: "credit",
        element: <AdminRoute roles={[ROLES.Admin]}><Credit /></AdminRoute>,
      },
      {
        path: "debit",
        element: <AdminRoute roles={[ROLES.Admin]}><Debit /></AdminRoute>,
      },
      {
        path: "debit_vs_credit",
        element: <AdminRoute roles={[ROLES.Admin]}><DebitvsCredit /></AdminRoute>,
      },
      {
        path: "liabilities",
        element: <AdminRoute roles={[ROLES.Admin]}><Liabilities /></AdminRoute>,
      },
      {
        path: "tds_tax_vat",
        element: <AdminRoute roles={[ROLES.Admin]}><TdsTaxVat /></AdminRoute>,
      },

      //settings routes
      {
        path: "settings",
        element: <AdminRoute roles={[ROLES.Admin]}><GeneralSettings /></AdminRoute>,
      },

      //Registration Routes
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  // login routes
  {
    path: "auth",
    element: <LoginLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot_pass",
        element: <ForgotPass />,
      },
      {
        path: "registration",
        element: <RegPage />,
      },
    ],
  },
]);

export default router;
