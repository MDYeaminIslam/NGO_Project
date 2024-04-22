import { useState } from "react";
import { Link } from "react-router-dom";

const HRMNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-teal-700 text-white">
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
                      <Link to={'/advance'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Advance</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/attendance'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Attendance</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/extra_bill'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Extra Bill</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/fixation'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Fixation</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/leave_application'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Leave Application</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/pay_slip'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Pay Slip</p>
                      </Link>

                      </li>

                      <li>
                      <Link to={'/profile'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Profile</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/salary_posting'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Salary Posting</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/salary_sheet'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Salary Sheet</p>
                      </Link>
                      </li>

                      <li>
                      <Link to={'/paying_amount_application'}>
                      <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Paying Amount Application</p>
                      </Link>
                      </li>

                    </ul>
                  </div>
                )}
              </div>



          <div className="hidden sm:block sm:ml-6">
            <div className="flex flex-wrap gap-2">
              
              <Link to={'/advance'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Advance</p>
              </Link>

              <Link to={'/attendance'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Attendance</p>
              </Link>

              <Link to={'/extra_bill'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Extra Bill</p>
              </Link>

              <Link to={'/fixation'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Fixation</p>
              </Link>

              <Link to={'/leave_application'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Leave Application</p>
              </Link>

              <Link to={'/pay_slip'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pay Slip</p>
              </Link>

              <Link to={'/profile'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</p>
              </Link>

              <Link to={'/salary_posting'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Salary Posting</p>
              </Link>

              <Link to={'/salary_sheet'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Salary Sheet</p>
              </Link>

              <Link to={'/paying_amount_application'}>
              <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Paying Amount Application</p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default HRMNav;