import React from 'react';
import LoanAccoustsTable from './LoanAccoustsTable';

const LoanAccountsCard = ({ data }) => {
    const { _id, paymentTerm, totalAmount, numberOfInstallment, openingDate, expiryDate, paid } = data
    return (
        <div>
            <p>hello</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>

                            </tr>
                        </thead>


                    </table>
                </div>

                <LoanAccoustsTable />
            </div>
        </div>
    );
};

export default LoanAccountsCard;

