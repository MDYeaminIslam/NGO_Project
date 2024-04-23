

const ListView = ({ data }) => {
    console.log(data);
    const { name, status, mobileNumber, occupation } = data;


    return (
        <div>
            <table className="w-full mt-8 ">
                <tr className="grid grid-cols-5 items-center justify-center gap-1 text-center">
                    <th>Member Name</th>
                    <th>Phone Number</th>
                    <th>Branch Name</th>
                    <th>Samity Name</th>
                    <th>Action</th>
                </tr>
                <tr className="grid grid-cols-5 items-center w-full justify-between text-center">
                    <td>{ }</td>
                    <td>01783746583</td>
                    <td>Rajshahi</td>
                    <td>Brac</td>
                    <td>
                        <button className="btn btn-info text-white">view</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ListView;