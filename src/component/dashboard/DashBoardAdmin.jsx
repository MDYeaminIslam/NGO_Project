

const DashBoardAdmin = () => {
    return (
        <div className="flex justify-center items-center   bg-gray-100 md:py-10 min-h-screen   ">
            <section className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 w-fit    ">
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md md:col-span-2 ">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Total capital.png" alt="" />
                    </div>
                    <div>
                        <p className="font-light">Total Capital</p>
                        <h2 className="text-2xl font">4,70,000 Tk</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Number of center.png  " alt="" />
                    </div>
                    <div>
                        <p className="font-light">Number of Center</p>
                        <h2 className="text-2xl font">14</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Loan in field.png  " alt="" />
                    </div>
                    <div>
                        <p className="font-light"> Loan in Field</p>
                        <h2 className="text-2xl font">15,000 Tk</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Total collection.png " alt="" />
                    </div>
                    <div>
                        <p className="font-light"> Today Collection</p>
                        <h2 className="text-2xl font">34,00 Tk</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Total members.png  " alt="" />
                    </div>
                    <div>
                        <p className="font-light">Total Members</p>
                        <h2 className="text-2xl font">54</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Balance in bank.png  " alt="" />
                    </div>
                    <div>
                        <p className="font-light">Balance  in Bank</p>
                        <h2 className="text-2xl font">1,34,000 Tk</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/drawer cash.png " alt="" />
                    </div>
                    <div>
                        <p className="font-light">Drawer Cash</p>
                        <h2 className="text-2xl font">45,000 Tk</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Regular loan.png " alt="" />
                    </div>
                    <div>
                        <p className="font-light">Regular </p>
                        <h2 className="text-2xl font">14,000 Tk</h2>
                    </div>
                </div>
                {/* card */}
                <div className="bg-teal-700 text-white p-4 rounded-md">
                    <div>
                        <img className="w-10" src="/Admin Dashboard icon/Irregular loan.png " alt="" />
                    </div>
                    <div>
                        <p className="font-light">Irregular Loan</p>
                        <h2 className="text-2xl font">4,000 Tk</h2>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default DashBoardAdmin;