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


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <DashBoardAdmin />
            },
            {
                path: 'add_member',
                element: <AddMember/>
            },
            {
                path: 'members_list',
                element: <MembersList/>
            },
            {
                path: 'member_closing',
                element: <MemberClosing/>
            },
            {
                path: 'member_request',
                element: <MemberRequest/>
            },



            {
                path: 'close_saving_account',
                element: <CloseSavingAccount/>
            },
            {
                path: 'deposit',
                element: <Deposit/>
            },
            {
                path: 'saving_account_request',
                element: <SavingAccountRequest/>
            },
            {
                path: 'withdraw_money',
                element: <WithdrawMoney/>
            },



            {
                path: 'add_loan_plan',
                element: <AddLoanPlan/>
            },
            {
                path: 'all_collection',
                element: <AllCollection/>
            },
            {
                path: 'all_loan',
                element: <AllLoan/>
            },
            {
                path: 'apply_loan',
                element: <ApplyLoan/>
            },
            {
                path: 'loan_collection',
                element: <LoanCollection/>
            },
            {
                path: 'loan_evaluation',
                element: <LoanEvaluation/>
            },
            {
                path: 'loan_request',
                element: <LoanRequest/>
            },
            {
                path: 'paid_loan',
                element: <PaidLoan/>
            },
            {
                path: 'running_loan',
                element: <RunningLoan/>
            },




            




            {
                path: 'all_expense',
                element: <AllExpense/>
            },
            {
                path: 'monthly_expense',
                element: <MonthlyExpense/>
            },
            {
                path: 'purchase',
                element: <Purchase/>
            },




            {
                path: 'employee_add',
                element: <EmployeeAdd/>
            },
            {
                path: 'employee_list',
                element: <EmployeeList/>
            },
            {
                path: 'employee_posting',
                element: <EmployeePosting/>
            },




            {
                path: 'any_charges',
                element: <AnyCharges/>
            },
            {
                path: 'category_wise_income',
                element: <CategoryWiseIncome/>
            },
            {
                path: 'loan_profit',
                element: <LoanProfit/>
            },
            {
                path: 'member_fees',
                element: <Memberfees/>
            },
            {
                path: 'penalty',
                element: <Penalty/>
            },




            




            {
                path: 'advance',
                element: <Advance/>
            },
            {
                path: 'attendence',
                element: <Attendance/>
            },
            {
                path: 'extra_bill',
                element: <ExtraBill/>
            },
            {
                path: 'fixation',
                element: <Fixation/>
            },
            {
                path: 'leave_application',
                element: <LeaveApplication/>
            },
            {
                path: 'pay_slip',
                element: <PaySlip/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'salary_posting',
                element: <SalaryPosting/>
            },
            {
                path: 'salary_sheet',
                element: <SalarySheet/>
            },






        ]
    },
]);

export default router;