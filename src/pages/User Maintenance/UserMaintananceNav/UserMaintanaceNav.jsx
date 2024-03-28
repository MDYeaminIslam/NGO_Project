import { Link } from "react-router-dom";

const UserMaintanaceNav = () => {
  return (
    <div>
      <nav className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              
              <Link to={'/add_new_user'}>
              <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Add New User</p>
              </Link>

              <Link to={'/add_new_user_type'}>
              <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">Add New User Type</p>
              </Link>

              <Link to={'/user_list'}>
              <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">User List</p>
              </Link>

              <Link to={'/user_type'}>
              <p className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">User Type</p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default UserMaintanaceNav;