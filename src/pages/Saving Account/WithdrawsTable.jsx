import { dateToString } from "../../utils/DateHelper";

function WithdrawsTable({ data }) {
  const { date, amount, description } = data;
  return (
    <div>
      <tr className="grid grid-cols-3 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-3 items-center w-full justify-between text-center py-3">
        <td>{dateToString(date)}</td>
        <td>{amount}</td>
        <td>{description ? description : "null"}</td>
      </tr>
    </div>
  );
}

export default WithdrawsTable;
