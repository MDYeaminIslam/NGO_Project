import { useState } from "react";
import { Link } from "react-router-dom";

const LoanManagementNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-teal-700 text-white">
        <div className=" px-2  ">
          <div className="relative flex items-center justify-between h-24">


            <div className="block sm:hidden relative">
              <button
                onClick={toggleDropdown}
                className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button">

                --Select Menu--
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">

                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">


                  <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">


                    <li>
                      <Link to={'/open_loan_account'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Open Loan Account</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_account_list'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Loan Account List</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_evaluation'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Loan Evaluation</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_transaction_posting'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Transaction Posting</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_account_closing'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Account Closing</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_received_money'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Loan Received Money</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_account_request'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Loan Account Request</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_closing_account_request'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Closing  Account Request</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_pay_list'}>
                        <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-normal">Loan Pay List</p>
                      </Link>
                    </li>


                  </ul>
                </div>
              )}
            </div>



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

                <Link to={'/loan_received_money'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Loan Received Money</p>
                </Link>

                <Link to={'/loan_account_request'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Loan Account Request</p>
                </Link>

                <Link to={'/loan_closing_account_request'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Closing Account Request</p>
                </Link>

                <Link to={'/loan_pay_list'}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Loan Pay List</p>
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