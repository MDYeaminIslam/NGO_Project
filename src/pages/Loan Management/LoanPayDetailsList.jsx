import { dateToString } from "../../utils/DateHelper";

const LoanPayDetailsList = ({ data }) => {
    const { amount
        , date
        , ngoLoanId
        , remark
    } = data;
    return (
        <div className="max-w-5xl mx-auto">
            <section className="mx-1" >
                <tr className="grid grid-cols-3 md:grid-cols-5 bg-gray-100 border-l-4 border-b-2 border-b-base-100 border-teal-700 items-center w-full justify-between text-center py-3">
                    <td>{remark}</td>
                    <td>{dateToString(date)}</td>
                    <td>{amount}</td>
                    <td className="hidden md:block">{ngoLoanId}</td>


                </tr>
            </section>
        </div>
    );
};

export default LoanPayDetailsList;