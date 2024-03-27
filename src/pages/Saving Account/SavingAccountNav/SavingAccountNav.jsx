import { Link } from "react-router-dom";

const SavingAccountNav = () => {
  return (
    <div>
      <nav className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex flex-wrap space-x-4">

                

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


              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SavingAccountNav;