import React from 'react';
import LoanAccoustsTable from './LoanAccoustsTable';

const LoanAccountsCard = ({ data, value }) => {
    const { _id, paymentTerm, totalAmount, numberOfInstallment, openingDate, expiryDate, paid } = data
    console.log(value);
    return (


        <div>
            <div >
                <table className="table ">


                    <tbody>
                        <LoanAccoustsTable data={{ ...data, value }} />
                    </tbody>


                </table>
            </div>

        </div>

    );
};

export default LoanAccountsCard;

