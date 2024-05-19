import { Link } from "react-router-dom";

const ListView = ({ data }) => {
    console.log(data);
    const { name, status, mobileNumber, occupation, _id, presentAddress } = data;

    return (
        <>
            <tr className="grid grid-cols-3 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-5 items-center w-full justify-between text-center py-3">
                <td>{name}</td>
                <td>{mobileNumber}</td>
                <td className="hidden md:block">{occupation}</td>
                <td className="hidden md:block">{presentAddress}</td>

                <td>
                    <Link
                        to={`/members_details/${mobileNumber}`}
                        className="btn btn-xs md:btn-sm btn-info text-white"
                    >
                        View
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default ListView;
