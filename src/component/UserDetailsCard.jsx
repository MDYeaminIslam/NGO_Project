

const UserDetailsCard = () => {
    return (
        <div>
            <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                        <span className="text-sm text-gray-600">General manager</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <img src="/public/card icon/group-svgrepo-com.svg" alt="" className="w-4 h-4" />
                            <span className="text-gray-600">Samity Name: </span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <img src="/public/card icon/branch-svgrepo-com.svg" alt="" className="w-4 h-4" />
                            <span className="text-gray-600">Branch Name: </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsCard;