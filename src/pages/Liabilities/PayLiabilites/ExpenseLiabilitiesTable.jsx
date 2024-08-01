// ExpenseLiabilitiesTable.jsx
import { Link } from "react-router-dom";
import { dateToString } from "../../../utils/DateHelper";

export default function ExpenseLiabilitiesTable({ idx, data }) {
  const { date, head, amount } = data;

  return (
    <tr className="bg-gray-100 border-b">
      <td className="py-2 px-4 text-left">{idx + 1}</td>
      <td className="py-2 px-4 text-left">{head}</td>
      <td className="py-2 px-4 text-right">{amount}</td>
      <td className="py-2 px-4 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Pay
        </button>
      </td>
    </tr>
  );
}
