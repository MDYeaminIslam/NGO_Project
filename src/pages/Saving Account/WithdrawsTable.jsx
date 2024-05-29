import { dateToString } from "../../utils/DateHelper";

function WithdrawsTable({ data }) {
  const { date, amount, description, _id } = data;
  return (
    <div>
      <tr className="grid grid-cols-2 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-2 items-center w-full justify-between text-center py-3">
        <td>{dateToString(date)}</td>
        <td>{amount}</td>
      </tr>
    </div>
  );
}

export default WithdrawsTable;
