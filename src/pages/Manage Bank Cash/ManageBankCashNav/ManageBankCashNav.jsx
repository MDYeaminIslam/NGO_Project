import { Link } from "react-router-dom";

const ManageBankCashNav = () => {
  return (
    <div>
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              
              <Link to={'/bank_cash'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bank Cash</p>
              </Link>

              <Link to={'/bank_cash_to_drawer'}>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bank Cash to Drawer</p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default ManageBankCashNav;