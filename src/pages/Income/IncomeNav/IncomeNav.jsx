import { useState } from "react";
import { Link } from "react-router-dom";

const IncomeNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">


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
                      <Link to={'/any_charges'}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Any Charges</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/category_wise_income'}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Catagory Wise Income</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/loan_profit'}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Loan Profit</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/member_fees'}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Member Fees</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/penalty'}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Penalty</p>
                      </Link>
                    </li>

                  </ul>
                </div>
              )}
            </div>



            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">

                <Link to={'/any_charges'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Any Charges</p>
                </Link>

                <Link to={'/category_wise_income'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Catagory Wise Income</p>
                </Link>

                <Link to={'/loan_profit'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loan Profit</p>
                </Link>

                <Link to={'/member_fees'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Member Fees</p>
                </Link>

                <Link to={'/penalty'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Penalty</p>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default IncomeNav;