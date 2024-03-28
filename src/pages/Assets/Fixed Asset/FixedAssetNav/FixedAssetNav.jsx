import { Link } from "react-router-dom";


const FixedAssetNav = () => {
    return (
        <div>
            <nav className="bg-teal-700 text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex  items-center justify-between h-16">
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