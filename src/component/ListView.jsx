import { Link } from "react-router-dom";

const ListView = ({ data }) => {
    console.log(data);
    const { name, status, mobileNumber, occupation, _id, presentAddress } = data;

    return (
        <>
            <tr className="grid grid-cols-1 bg-gray-100 border-l-4 border-teal-700  md:grid-cols-5 items-center w-full justify-between text-center py-3">
                <td>{name}</td>
                <td>{mobileNumber}</td>
                <td>{occupation}</td>
                <td>{presentAddress}</td>

                <td>
                    <Link
                        to={`/members_details/${mobileNumber}`}
                        className="btn btn-info text-white"
                    >
                        View
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default ListView;
