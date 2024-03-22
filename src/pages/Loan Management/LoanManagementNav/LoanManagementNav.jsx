import { Link } from "react-router-dom";

const LoanManagementNav = () => {
  return (
    <div>
      <nav className="bg-gray-800">
      <div className=" px-2  ">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block ">
            <div className="flex flex-wrap items-center justify-center gap-1">
              
              <Link to={'/add_loan_plan'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Loan Plan</p>
              </Link>

              <Link to={'/all_collection'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Collection</p>
              </Link>

              <Link to={'/all_loan'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Loan</p>
              </Link>

              <Link to={'/apply_loan'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Apply Loan</p>
              </Link>

              <Link to={'/loan_collection'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loan Collection</p>
              </Link>

              <Link to={'/loan_evaluation'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loan Evaluation</p>
              </Link>

              <Link to={'/loan_request'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loan Request</p>
              </Link>

              <Link to={'/paid_loan'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Paid Loan</p>
              </Link>

              <Link to={'/running_loan'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Running Loan</p>
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