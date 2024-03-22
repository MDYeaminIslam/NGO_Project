import { Link } from "react-router-dom";

const SavingAccountNav = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex flex-wrap space-x-4">

                <Link to={'/close_saving_account'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Close Saving Account</p>
                </Link>

                <Link to={'/deposit'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deposit</p>
                </Link>

                <Link to={'/saving_account_request'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Saving Account Request</p>
                </Link>

                <Link to={'/withdraw_money'}>
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Withdraw Money</p>
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