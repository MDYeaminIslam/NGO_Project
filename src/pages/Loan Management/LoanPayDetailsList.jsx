import { dateToString } from "../../utils/DateHelper";

const LoanPayDetailsList = ({ data }) => {
    const { amount
        , date
        , ngoLoanId
        , remark
    } = data;
    return (
        <div>
            <section className="max-w-5xl mx-auto">
                <tr className="grid grid-cols-5 bg-gray-100 border-l-4 border-teal-700 items-center w-full justify-between text-center py-3">
                    <td>{remark}</td>
                    <td>{dateToString(date)}</td>
                    <td>{amount}</td>
                    <td>{ngoLoanId}</td>


                </tr>
            </section>
        </div>
    );
};

export default LoanPayDetailsList;