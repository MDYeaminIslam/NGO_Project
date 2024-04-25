import { Link } from "react-router-dom";


const EmployeeListView = ({ data }) => {
    console.log(data);
    const { name, email, mobileNumber } = data;

    return (
        <div>
            <table className="w-full mt-8 ">
                {/* <tr className="grid grid-cols-5 items-center justify-center gap-1 text-center">
                    <th>Member Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>

                </tr> */}
                <tr className="grid grid-col-1 bg-gray-100 py-2 border-l-4 border-teal-700  md:grid-cols-4 items-center max-w-5xl mx-auto justify-between text-center">
                    <td>{name}</td>
                    <td>{mobileNumber}</td>
                    <td>{email}</td>


                    <td>
                        <Link className="btn btn-info text-white" to={`/employee_details/${mobileNumber}`}>
                            View
                        </Link>

                    </td>
                </tr>
            </table>
        </div>
    );
};

export default EmployeeListView;