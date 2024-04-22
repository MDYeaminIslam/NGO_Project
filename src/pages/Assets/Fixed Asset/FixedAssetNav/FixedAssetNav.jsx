import { useState } from "react";
import { Link } from "react-router-dom";


const FixedAssetNav = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="bg-teal-700 text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex  items-center justify-between h-16">

                        <div className="block sm:hidden relative">
                            <button
                            onClick={toggleDropdown}
                            className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                            type="button">

                            --Select Menu--
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6">
                                
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>

                            {isOpen && (
                            <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">


                                <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">


                                    <li>
                                    <Link to={'/edit_fixed_asset'}>
                                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Edit Fixed Asset</p>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link to={'/remove_wasted_asset'}>
                                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Remove Wasted Asset</p>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link to={'/fixed_asset_list'}>
                                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Fixed Asset List</p>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link to={'/add_new_fixed_asset'}>
                                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Add New Fixed Asset</p>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link to={'/fixed_asset_item'}>
                                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Fixed Asset Item</p>
                                    </Link>
                                    </li>

                                    <li>
                                    <Link to={'/fixed_asset_types'}>
                                        <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Fixed Asset Types</p>
                                    </Link>
                                    </li>

                                </ul>
                            </div>
                            )}
                        </div>



                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex flex-wrap space-x-2 ">

                                <Link to={'/edit_fixed_asset'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Edit Fixed Asset</p>
                                </Link>

                                <Link to={'/remove_wasted_asset'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Remove Wasted Asset</p>
                                </Link>

                                <Link to={'/fixed_asset_list'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Fixed Asset List</p>
                                </Link>

                                <Link to={'/add_new_fixed_asset'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Fixed Asset</p>
                                </Link>

                                <Link to={'/fixed_asset_item'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Fixed Asset Item</p>
                                </Link>

                                <Link to={'/fixed_asset_types'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Fixed Asset Types</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default FixedAssetNav;