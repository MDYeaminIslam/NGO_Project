import { Link } from "react-router-dom";
import { dateToString } from "../utils/DateHelper";

const DepositAccountsTable = ({ data }) => {
  const {
    _id,
    paymentTerm,
    balance,
    onMatureAmount,
    openingDate,
    matureDate,
    paid,
    value,
  } = data;
  const { name, photo, samityName } = value;

  console.log(data);
  return (
    <div>
      <tbody className="grid grid-cols-4 divide-x-2 ">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{samityName}</div>
            </div>
          </div>
        </td>
        <td className="space-y-2">
          <span> {paymentTerm}</span>
          <br />
          <span className="badge badge-ghost badge-sm">
            Total Balance: <span className="pl-2">{balance}</span>
          </span>{" "}
          <br />
          <span className="badge badge-ghost badge-sm">
            On Mature Amount: <span className="pl-2">{onMatureAmount}</span>
          </span>
        </td>
        <td className="space-y-2">
          {" "}
          <p>
            Opening : <span>{dateToString(openingDate)}</span>
          </p>
          <span className="badge badge-ghost badge-sm">
            Mature Date: <span>{dateToString(matureDate)}</span>
          </span>
        </td>
        <th>
          <Link
            to={`/deposit_transaction_posting_details/${_id}`}
            className="btn bg-teal-500 text-white btn-xs"
          >
            Details
          </Link>
        </th>
      </tbody>
    </div>
  );
};

export default DepositAccountsTable;
