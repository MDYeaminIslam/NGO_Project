

const ListView = () => {
    return (
        <div>
            <table className="w-full mt-8 ">
                <tr className="grid grid-cols-5 items-center justify-center bg-slate-500 gap-1">
                    <th>Member Name</th>
                    <th>Phone Number</th>
                    <th>Branch Name</th>
                    <th>Samity Name</th>
                    <th>Action</th>
                </tr>
                <tr className="grid grid-cols-5 items-center w-full border-red-600 border-2 justify-between">
                    <td className=" border-red-600 border-2">Jodu</td>
                    <td className=" border-red-600 border-2">01783746583</td>
                    <td className=" border-red-600 border-2">Rajshahi</td>
                    <td className=" border-red-600 border-2">Brac</td>
                    <td>
                        <button className="btn btn-info text-white">view</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ListView;