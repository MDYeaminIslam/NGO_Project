import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LiabilitiesNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-teal-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="block sm:hidden relative">
              <button
                onClick={toggleDropdown}
                className="ml-4 text-black bg-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Select Menu
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="ml-4 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <NavLink to={"/liabilities/expense"}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">
                          Expense Liabilities
                        </p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/liabilities/asset"}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">
                          Asset Liabilities
                        </p>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/add_expense_liability"}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">
                          Add Expense Liability
                        </p>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/add_asset_liability"}>
                        <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">
                          Add Asset Liability
                        </p>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to={"/liabilities/expense"}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Expense Liabilities
                  </p>
                </NavLink>
                <NavLink to={"/liabilities/asset"}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Asset Liabilities
                  </p>
                </NavLink>

                <NavLink to={"/add_expense_liability"}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Add Expense Liability
                  </p>
                </NavLink>

                <NavLink to={"/add_asset_liability"}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Add Asset Liability
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LiabilitiesNav;
