import { Link } from "react-router-dom";

const LoanManagementNav = () => {
  return (
    <div>
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              
              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Loan Plan</p>
              </Link>

              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Collection</p>
              </Link>

              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Loan</p>
              </Link>

              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Apply Loan</p>
              </Link>

              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loan Collection</p>
              </Link>

              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loan Evaluation</p>
              </Link>

              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loan Request</p>
              </Link>

              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Paid Loan</p>
              </Link>

              <Link>
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