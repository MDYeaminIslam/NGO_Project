import { Link } from "react-router-dom";
import { dateToString } from "../utils/DateHelper";

export default function Expense({ data }) {

  const {
    date,
    officeRent,
    salary, stationaryAndPrinting,
    taDaAllowances, _id
  } = data;
  const totalBill = officeRent + salary
  console.log(totalBill);
  return <div>
    <section>
      <tr className="grid grid-cols-3 md:grid-cols-3 bg-gray-100 border-l-4 border-teal-700 items-center w-full justify-between text-center py-3 text-xs md:text-base">
        <td>{dateToString(date)}</td>
        <td>{totalBill}</td>

        <td>
          <Link to={`/someLInk/${_id}`}>
            <button className="btn btn-xs md:btn btn-info text-white">view</button>
          </Link>

        </td>
      </tr>
    </section>
  </div>;
}
