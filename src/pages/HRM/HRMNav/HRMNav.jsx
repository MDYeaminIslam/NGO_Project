import { Link } from "react-router-dom";

const HRMNav = () => {
  return (
    <div>
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex flex-wrap gap-2">
              
              <Link to={'/advance'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Advance</p>
              </Link>

              <Link to={'/attendance'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Attendance</p>
              </Link>

              <Link to={'/extra_bill'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Extra Bill</p>
              </Link>

              <Link to={'/fixation'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Fixation</p>
              </Link>

              <Link to={'/leave_application'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Leave Application</p>
              </Link>

              <Link to={'/pay_slip'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pay Slip</p>
              </Link>

              <Link to={'/profile'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</p>
              </Link>

              <Link to={'/salary_posting'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Salary Posting</p>
              </Link>

              <Link to={'/salary_sheet'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Salary Sheet</p>
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