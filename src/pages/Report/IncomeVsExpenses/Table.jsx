import React from "react";

const IncomeExpenseTable = ({ data }) => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left" colSpan="2">
              INCOME
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data.income.items).map(([key, value], index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{key}</td>
              <td className="px-4 py-2 text-right">
                {value.toLocaleString()} TK
              </td>
            </tr>
          ))}
          <tr className="bg-gray-200 font-bold">
            <td className="px-4 py-2">Total Income</td>
            <td className="px-4 py-2 text-right">
              {data.income.total.toLocaleString()} TK
            </td>
          </tr>
        </tbody>
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left" colSpan="2">
              EXPENSES
            </th>
          </tr>
        </thead>
        <tbody>
          {data.expenses.items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2 text-right">
                {item.amount.toLocaleString()} TK
              </td>
            </tr>
          ))}
          <tr className="bg-gray-200 font-bold">
            <td className="px-4 py-2">Total Expenses</td>
            <td className="px-4 py-2 text-right">
              {data.expenses.total.toLocaleString()} TK
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-red-100 font-bold text-red-700">
            <td className="px-4 py-2">Net Loss</td>
            <td className="px-4 py-2 text-right">
              ({data.netLoss.toLocaleString()} TK)
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default IncomeExpenseTable;
