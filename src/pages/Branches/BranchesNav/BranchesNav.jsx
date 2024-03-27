import { Link } from "react-router-dom";

const BranchesNav = () => {
  return (
    <div>
<<<<<<< HEAD
      <nav className="bg-teal-700">
=======
      <nav className="bg-teal-700 text-white">
>>>>>>> aa1d637e03d30816f4e916a0fbd1d5eca5b6e702
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">

                <Link to={'/add_new_branch'}>
<<<<<<< HEAD
                  <p className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Branch</p>
                </Link>

                <Link to={'/add_new_samity'}>
                  <p className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Samity</p>
                </Link>

                <Link to={'/branch_list'}>
                  <p className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Branch List</p>
                </Link>

                <Link to={'/samity_list'}>
                  <p className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Samity List</p>
=======
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
>>>>>>> aa1d637e03d30816f4e916a0fbd1d5eca5b6e702
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