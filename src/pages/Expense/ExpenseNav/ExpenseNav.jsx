import { Link } from "react-router-dom";
const ExpenseNav = () => {
  return (
    <div>
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              
              <Link to={'/all_expense'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Expense</p>
              </Link>

              <Link to={'/monthly_expense'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Monthly Expense</p>
              </Link>

              <Link to={'/purchase'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Purchase</p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default ExpenseNav;