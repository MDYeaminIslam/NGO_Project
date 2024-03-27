import { Link } from "react-router-dom";

const LoanManagementNav = () => {
  return (
    <div>
      <nav className="bg-teal-700 text-white">
        <div className=" px-2  ">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block ">
              <div className="flex flex-wrap items-center justify-center gap-1">

                <Link to={'/open_loan_account'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Open Loan Account</p>
                </Link>

                <Link to={'/loan_account_list'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Loan Account List</p>
                </Link>

                <Link to={'/loan_evaluation'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Loan Evaluation</p>
                </Link>

                <Link to={'/loan_transaction_posting'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Transaction Posting</p>
                </Link>

                <Link to={'/loan_account_closing'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Account Closing</p>
                </Link>

                <Link to={'/loan_account_request'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Loan Account Request</p>
                </Link>

                <Link to={'/loan_closing_account_request'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Closing Account Request</p>
                </Link>



              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoanManagementNav;