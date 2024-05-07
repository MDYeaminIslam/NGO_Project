import { useState } from "react";
import { Link } from "react-router-dom";

const ReportNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

        <div className="block sm:hidden relative">
                <button
                  onClick={toggleDropdown}
                  className="ml-4 text-black bg-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button">

                  Select Menu
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
                  <div className="ml-4 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">


                    <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">


                      <li>
                      <Link to={'/asset'}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Asset</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/balance_sheet'}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Balance Sheet</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/credit'}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Credit</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/debit'}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Debit</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/debit_vs_credit'}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Debit vs Credit</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/liabilities'}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Liabilities</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/tds_tax_vat'}>
                      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">TDX, TAX, VAT</p>
                      </Link>
                      </li>

                    </ul>
                  </div>
                )}
              </div>




          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              
              <Link to={'/asset'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Asset</p>
              </Link>

              <Link to={'/balance_sheet'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Balance Sheet</p>
              </Link>

              <Link to={'/credit'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Credit</p>
              </Link>

              <Link to={'/debit'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Debit</p>
              </Link>

              <Link to={'/debit_vs_credit'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Debit vs Credit</p>
              </Link>

              <Link to={'/liabilities'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Liabilities</p>
              </Link>

              <Link to={'/tds_tax_vat'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">TDX, TAX, VAT</p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default ReportNav;