import { Link } from "react-router-dom";

const Liabilities = () => {
  return (
    <div>
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              
              <Link>
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Upcoming</p>
              </Link>

              
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Liabilities;