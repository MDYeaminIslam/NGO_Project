import { Link } from "react-router-dom";

const BranchesNav = () => {
  return (
    <div>
      <nav className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">


            <div className="block sm:hidden">
                  <details className="dropdown">
                      <summary className="m-1 btn">Select</summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        
                        <li><a>Item 2</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 2</a></li>
                      </ul>
                    </details>
            </div>

            
              <div className="hidden sm:block sm:ml-6">

            


              <div className="flex space-x-4">

                <Link to={'/add_new_branch'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Branch</p>
                </Link>

                <Link to={'/add_new_samity'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Samity</p>
                </Link>

                <Link to={'/branch_list'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Branch List</p>
                </Link>

                <Link to={'/samity_list'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Samity List</p>
                </Link>

                <Link to={'/imw_fund_collection'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">IMW Fund Collection</p>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BranchesNav;