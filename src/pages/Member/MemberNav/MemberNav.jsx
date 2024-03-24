import { Link } from "react-router-dom";

const MemberNav = () => {
  return (
    <div>
      <nav className="bg-teal-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex flex-wrap space-x-4 ">

                <Link to={'/add_member'}>
                  <p className="text-gray-100  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Member</p>
                </Link>

                <Link to={'/member_closing'}>
                  <p className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Member Closing</p>
                </Link>

                <Link to={'/member_request'}>
                  <p className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Member Request</p>
                </Link>

                <Link to={'/members_list'}>
                  <p className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Member List</p>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MemberNav;