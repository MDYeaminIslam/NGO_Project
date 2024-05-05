import { useState } from "react";
import { Link } from "react-router-dom";

const SavingAccountNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
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
                      <Link to={'/deposit'}>
                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Deposit</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/transactionn_posting'}>
                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Transaction Posting</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/withdraw_money'}>
                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Withdraw Money</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/account_closing'}>
                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Account Closing</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/saving_account_request'}>
                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Saving Account Request</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/closing_account_request'}>
                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Closing Account Request</p>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/saving_account_list'}>
                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Saving Account List</p>
                      </Link>
                    </li>

                  </ul>
                </div>
              )}
            </div>



            <div className="hidden md:block ">
              <div className="flex flex-wrap w-full  ">



                <Link to={'/deposit'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deposit</p>
                </Link>

                <Link to={'/transactionn_posting'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Transaction Posting</p>
                </Link>

                <Link to={'/withdraw_money'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Withdraw Money</p>
                </Link>

                <Link to={'/account_closing'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Account Closing</p>
                </Link>

                <Link to={'/saving_account_request'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Saving Account Request</p>
                </Link>


                <Link to={'/closing_account_request'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Closing Account Request</p>
                </Link>



                <Link to={'/saving_account_list'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Saving Account List</p>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SavingAccountNav;