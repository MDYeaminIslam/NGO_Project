import { Link } from "react-router-dom";

const EmployeeListView = ({ data }) => {
    console.log(data);
    const { name, email, mobileNumber, presentAddress } = data;

    return (
        <>
            <section className="max-w-5xl mx-auto">
                <tr className="grid grid-cols-3 text-xs md:text-base bg-gray-100 border-l-4 border-teal-700 items-center w-full justify-between text-center py-3">
                    <td>{name}</td>
                    <td>{mobileNumber}</td>
                    <td className="hidden md:block">{email}</td>
                    <td className="hidden md:block">{presentAddress}</td>

                    <td>
                        <Link to={`/employee_details/${mobileNumber}`}>
                            <button className="btn btn-xs md:btn btn-info text-white">view</button>
                        </Link>
                    </td>
                </tr>
            </section>
        </>
    );
};

export default EmployeeListView;
