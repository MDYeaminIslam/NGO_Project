import {
    createBrowserRouter,
} from "react-router-dom";
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
import BankCash from "../pages/Manage Bank Cash/BankCash";
import BankCashtoDrawer from "../pages/Manage Bank Cash/BankCashtoDrawer";
import AddNewUser from "../pages/User Maintenance/AddNewUser";
import AddNewUserType from "../pages/User Maintenance/AddNewUserType";
import UserList from "../pages/User Maintenance/UserList";
import UserType from "../pages/User Maintenance/UserType";
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
import AddNewTemporaryAsset from "../pages/Assets/Temporary Asset/AddNewTemporaryAsset";
import EditTemporaryAsset from "../pages/Assets/Temporary Asset/EditTemporaryAsset";
import RemoveWastedTemporaryAsset from "../pages/Assets/Temporary Asset/RemoveWastedTemporaryAsset";
import TemporaryAssetItem from "../pages/Assets/Temporary Asset/TemporaryAssetItem";
import TemporaryAssetList from "../pages/Assets/Temporary Asset/TemporaryAssetList";
import TemporaryAssetTypes from "../pages/Assets/Temporary Asset/TemporaryAssetTypes";
import LoanReceivedMoney from "../pages/Loan Management/LoanReceivedMoney";
import IMWFundCollection from "../pages/Branches/IMWFundCollection";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            //admin dashboard
            {
                path: '/',
                element: <DashBoardAdmin />
            },
            // members routes
            {
                path: 'add_member',
                element: <AddMember />
            },
            {
                path: 'members_list',
                element: <MembersList />
            },
            {
                path: 'member_closing',
                element: <MemberClosing />
            },
            {
                path: 'member_request',
                element: <MemberRequest />
            },

            //Branches routes
            {
                path: 'add_new_branch',
                element: <AddNewBranch />
            },
            {
                path: 'add_new_samity',
                element: <AddNewSamity />
            },
            {
                path: 'branch_list',
                element: <BranchList />
            },
            {
                path: 'branch_sub_navbar',
                element: <BranchSubNavbar />
            },
            {
                path: 'samity_list',
                element: <SamityList />
            },
            {
                path: 'imw_fund_collection',
                element: <IMWFundCollection/>
            },



            //Saving Accounts routes
            {
                path: 'close_saving_account',
                element: <CloseSavingAccount />
            },
            {
                path: 'deposit',
                element: <Deposit />
            },

            {
                path: 'withdraw_money',
                element: <WithdrawMoney />
            },
            {
                path: 'transactionn_posting',
                element: <TransactionnPosting />

            },
            {
                path: 'account_closing',
                element: <AccountClosing />
            },
            {
                path: 'saving_account_request',
                element: <SavingAccountRequest />
            },
            {
                path: 'closing_account_request',
                element: <ClosingAccountRequest />
            },


            // loan handling routes
            {
                path: 'open_loan_account',
                element: <OpenLoanAccount />
            },
            {
                path: 'loan_account_list',
                element: <LoanAccountList />
            },
            {
                path: 'loan_evaluation',
                element: <LoanEvaluation />
            },
            {
                path: 'loan_transaction_posting',
                element: <Loan_transaction_posting />
            },
            {
                path: 'loan_account_closing',
                element: <LoanAccountClosing />
            },
            {
                path: 'loan_received_money',
                element: <LoanReceivedMoney/>
            },

            {
                path: 'loan_account_request',
                element: <LoanAccountRequest />
            },
            {
                path: 'loan_closing_account_request',
                element: <LoanClosingAccountRequest />
            },


            {
                path: 'add_loan_plan',
                element: <AddLoanPlan />
            },
            {
                path: 'all_collection',
                element: <AllCollection />
            },
            {
                path: 'all_loan',
                element: <AllLoan />
            },
            {
                path: 'apply_loan',
                element: <ApplyLoan />
            },
            {
                path: 'loan_collection',
                element: <LoanCollection />
            },

            {
                path: 'loan_request',
                element: <LoanRequest />
            },
            {
                path: 'paid_loan',
                element: <PaidLoan />
            },
            {
                path: 'running_loan',
                element: <RunningLoan />
            },


            // Expense routes
            {
                path: 'all_expense',
                element: <AllExpense />
            },
            {
                path: 'monthly_expense',
                element: <MonthlyExpense />
            },
            {
                path: 'purchase',
                element: <Purchase />
            },


            //Employee routs
            {
                path: 'employee_add',
                element: <EmployeeAdd />
            },
            {
                path: 'employee_login_credentials',
                element: <EmployeeLoginCredentials />
            },
            {
                path: 'employee_list',
                element: <EmployeeList />
            },
            {
                path: 'employee_posting',
                element: <EmployeePosting />
            },



            //  Income routes
            {
                path: 'any_charges',
                element: <AnyCharges />
            },
            {
                path: 'category_wise_income',
                element: <CategoryWiseIncome />
            },
            {
                path: 'loan_profit',
                element: <LoanProfit />
            },
            {
                path: 'member_fees',
                element: <Memberfees />
            },
            {
                path: 'penalty',
                element: <Penalty />
            },

            //manage drawer cash routes
            {
                path: 'drawer_cash',
                element: <DrawerCash />
            },
            {
                path: 'drawer_cash_to_bank',
                element: <DrawerCashtoBank />
            },


            //manage bank cash routes
            {
                path: 'bank_cash',
                element: <BankCash />
            },
            {
                path: 'bank_cash_to_drawer',
                element: <BankCashtoDrawer />
            },


            //user maintenance routes
            {
                path: 'add_new_user',
                element: <AddNewUser />
            },
            {
                path: 'add_new_user_type',
                element: <AddNewUserType />
            },
            {
                path: 'user_list',
                element: <UserList />
            },
            {
                path: 'user_type',
                element: <UserType />
            },


            //HRM routs
            {
                path: 'advance',
                element: <Advance />
            },
            {
                path: 'attendance',
                element: <Attendance />
            },
            {
                path: 'extra_bill',
                element: <ExtraBill />
            },
            {
                path: 'fixation',
                element: <Fixation />
            },
            {
                path: 'leave_application',
                element: <LeaveApplication />
            },
            {
                path: 'pay_slip',
                element: <PaySlip />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'salary_posting',
                element: <SalaryPosting />
            },
            {
                path: 'salary_sheet',
                element: <SalarySheet />
            },
            {
                path: 'paying_amount_application',
                element: <PayingAmountApplication />
            },

            //Assets routes
            {
                path: 'edit_fixed_asset',
                element: <EditFixedAsset />
            },
            {
                path: 'remove_wasted_asset',
                element: <RemoveWastedAsset />
            },
            {
                path: 'fixed_asset_list',
                element: <FixedAssetList />
            },
            {
                path: 'add_new_fixed_asset',
                element: <AddNewFixedAsset />
            },
            {
                path: 'fixed_asset_item',
                element: <FixedAssetItem />
            },
            {
                path: 'fixed_asset_types',
                element: <FixedAssetTypes />
            },
            // temporary asset
            {
                path: 'add_new_temporary_asset',
                element: <AddNewTemporaryAsset />
            },
            {
                path: 'edit_temporary_asset',
                element: <EditTemporaryAsset />
            },
            {
                path: 'remove_wasted_temporary_asset',
                element: <RemoveWastedTemporaryAsset />

            },
            {
                path: 'temporary_asset_item',
                element: <TemporaryAssetItem />
            },
            {
                path: 'temporary_asset_list',
                element: <TemporaryAssetList />
            },
            {
                path: 'temporary_asset_types',
                element: <TemporaryAssetTypes />
            },


            //Liabilities routes
            {
                path: 'upcoming',
                element: <Upcoming />
            },


            //Report routes
            {
                path: 'asset',
                element: <Asset />
            },
            {
                path: 'balance_sheet',
                element: <BalanceSheet />
            },
            {
                path: 'credit',
                element: <Credit />
            },
            {
                path: 'debit',
                element: <Debit />
            },
            {
                path: 'debit_vs_credit',
                element: <DebitvsCredit />
            },
            {
                path: 'liabilities',
                element: <Liabilities />
            },
            {
                path: 'tds_tax_vat',
                element: <TdsTaxVat />
            },

            //settings routes
            {
                path: 'settings',
                element: <GeneralSettings />

            }

        ]
    },
]);

export default router;