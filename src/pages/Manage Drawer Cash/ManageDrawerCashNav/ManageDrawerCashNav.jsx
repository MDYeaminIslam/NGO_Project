import { Link } from "react-router-dom";

const ManageDrawerCashNav = () => {
  return (
    <div>
      <nav className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to={"/drawer_cash"}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">
                    Drawer Cash
                  </p>
                </Link>

                <Link to={"/drawer_cash_to_bank"}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">
                    Drawer Cash to Bank
                  </p>
                </Link>
                <Link to={"/add_bank"}>
                  <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">
                    Add Bank
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ManageDrawerCashNav;
