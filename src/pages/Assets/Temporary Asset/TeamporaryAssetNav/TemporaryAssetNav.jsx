import { Link } from "react-router-dom";

const TemporaryAssetNav = () => {
    return (
        <div>
            <nav className="bg-teal-700 text-white">
                <div className="w-full px-2 ">
                    <div className="relative flex  items-center justify-between h-16">
                        <div className=" ">
                            <div className="flex flex-wrap space-x-2 ">

                                <Link to={'/add_new_temporary_asset'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Temporary Asset</p>
                                </Link>

                                <Link to={'/edit_temporary_asset'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Edit Temporary Asset</p>
                                </Link>

                                <Link to={'/remove_wasted_temporary_asset'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Remove Wasted Temp Asset </p>
                                </Link>

                                <Link to={'/temporary_asset_item'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Temporary Asset Item</p>
                                </Link>

                                <Link to={'/temporary_asset_list'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Temporary Asset List</p>
                                </Link>
                                <Link to={'/temporary_asset_types'}>
                                    <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Temporary Asset Types</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default TemporaryAssetNav;