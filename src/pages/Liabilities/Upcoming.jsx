import { useEffect, useState } from "react";
{/**import Liabilities from "./LiabilitiesNav/LiabilitiesNav"; */ }
import { ngoLiability } from "../../../api/admin";
const Upcoming = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    ngoLiability().then((data) => setData(data));
  }, []);
  console.log(data);
  //const { capitalFund, ngoLoanReceived, totalDeposit, employeeSecurityFund, financialBank } = data
  // console.log(capitalFund, ngoLoanReceived, totalDeposit, employeeSecurityFund, financialBank,);

  return (
    <div>
      {/*
      <section>
        <Liabilities />
      </section>
      */}
      {
        data ? <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            Liabilities{" "}
          </h1>

          <div className="flex flex-col mt-8 ml-8 mr-8 mb-32">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border overflow-hidden border-black">


                  <table className="min-w-full divide-y divide-gray-200">

                    <thead className="bg-slate-800">

                      <tr>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-white uppercase">SL No.</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-white uppercase">Title</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-white uppercase">Amount</th>
                      </tr>

                    </thead>

                    <tbody className="divide-y divide-gray-200">

                      <td className="px-9 py-4 text-sm font-medium text-black">1.</td>
                      <td className="px-6 py-4 text-sm text-black">Capital Fund Account</td>
                      <td className="px-6 py-4 text-start text-sm font-medium">
                        {data.capitalFund}
                      </td>


                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">2.</td>
                        <td className="px-6 py-4 text-sm text-black">Reserved Fund</td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          Null
                        </td>
                      </tr>

                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">3.</td>
                        <td className="px-6 py-4 text-sm text-black">Loan Received Money
                        </td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          {data.ngoLoanReceived}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">4.</td>
                        <td className="px-6 py-4 text-sm text-black">Member Deposit Money</td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          {data.totalDeposit}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">5.</td>
                        <td className="px-6 py-4 text-sm text-black">Employee Security Fund</td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          {data.employeeSecurityFund}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">6.</td>
                        <td className="px-6 py-4 text-sm text-black">Commercial Bank Loan Received</td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          {data.financialBank}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">7.</td>
                        <td className="px-6 py-4 text-sm text-black">Provision for Expense</td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          {data.provisionForExpense}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">8.</td>
                        <td className="px-6 py-4 text-sm text-black">Depriciation Fund</td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          {data.depreciationPrice}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-9 py-4 text-sm font-medium text-black">9.</td>
                        <td className="px-6 py-4 text-sm text-black">Loan Loss Provision</td>
                        <td className="px-6 py-4 text-start text-sm font-medium">
                          {data.loanLossProvision}
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section > : null
      }
    </div >
  );
};

export default Upcoming;
