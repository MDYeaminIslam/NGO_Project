import React from "react";

const TrialBalanceTable = ({ data }) => {
  console.log(data.assets);
  const assetEntries = data.assets.map((item) => ({
    name: item.headName,
    amount: item.totalSum,
  }));
  console.log(assetEntries);
  const debitEntries = [
    { name: "Cash in Hand", amount: data.drawerCash },
    { name: "Cash at Bank", amount: data.bankCash },
    { name: "Loans Receivable", amount: data.loanReceiveAble },
    { name: "Membership and Form Fees", amount: data.userFromAndMemberShipFee },
    ...assetEntries,
  ];

  const creditEntries = [
    { name: "Member Savings Accounts", amount: data.savings },
    { name: "FDR Accounts", amount: data.fdr },
    { name: "DPS Accounts", amount: data.dps },
    { name: "Employee Security Fund", amount: data.employeeSecurityFund },
    { name: "Loan from NGO", amount: data.ngoLoanReceived },
    { name: "Initial Capital", amount: data.initialCapital },
  ];

  const expenseEntries = data.expense.items.map((item) => ({
    name: item.name,
    amount: item.amount,
  }));

  const totalDebit =
    debitEntries.reduce((sum, entry) => sum + entry.amount, 0) +
    data.expense.total;
  const totalCredit = creditEntries.reduce(
    (sum, entry) => sum + entry.amount,
    0
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Account Name</th>
            <th className="py-3 px-6 text-right">Debit (TK)</th>
            <th className="py-3 px-6 text-right">Credit (TK)</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {debitEntries.map((entry, index) => (
            <tr
              key={`debit-${index}`}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.name}
              </td>
              <td className="py-3 px-6 text-right">
                {entry.amount.toLocaleString()}
              </td>
              <td className="py-3 px-6 text-right"></td>
            </tr>
          ))}
          {creditEntries.map((entry, index) => (
            <tr
              key={`credit-${index}`}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.name}
              </td>
              <td className="py-3 px-6 text-right"></td>
              <td className="py-3 px-6 text-right">
                {entry.amount.toLocaleString()}
              </td>
            </tr>
          ))}
          {expenseEntries.map((entry, index) => (
            <tr
              key={`expense-${index}`}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.name}
              </td>
              <td className="py-3 px-6 text-right">
                {entry.amount.toLocaleString()}
              </td>
              <td className="py-3 px-6 text-right"></td>
            </tr>
          ))}
          <tr className="bg-gray-200 font-bold">
            <td className="py-3 px-6 text-left whitespace-nowrap">TOTAL</td>
            <td className="py-3 px-6 text-right">
              {totalDebit.toLocaleString()}
            </td>
            <td className="py-3 px-6 text-right">
              {totalCredit.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TrialBalanceTable;
