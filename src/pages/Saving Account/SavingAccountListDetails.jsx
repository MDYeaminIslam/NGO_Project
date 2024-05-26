import { useLocation } from "react-router-dom";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import { dateToString } from "../../utils/DateHelper";

export const SavingAccountPerUserDetails = ({ data }) => {
  const {
    memberId,
    paymentTerm,
    periodOfTimeInMonths,
    perInstallment,
    profitPercentage,
    onMatureAmount,
    openingDate,
    matureDate,
    balance,
    createdAt,
    updatedAt,
    memberDetails,
  } = data;
  console.log(data);

  return (
    <div>
      <h1 className="border-b-4  text-gray-600 text-lg pl-6 font-medium  pb-2 pt-1 flex items-center gap-2">
        <span>
          <img
            className="w-8"
            src="./../../../public/Admin Dashboard icon/Total members.png"
            alt=""
          />
        </span>{" "}
        User Details
      </h1>
      <div className=" border-b-4 text-base font-medium tracking-wide divide-y-1 space-y-3 grid grid-cols-1 leading-6 p-6 py-3 bg-teal-50 rounded-b-md ">
        <p className="flex items-center gap-2">
          <span>
            <img className="w-4" src="/NGO Dashboard icon/Member.png" alt="" />
          </span>{" "}
          Member Name :{" "}
          <span className="font-normal pl-2">{memberDetails.name} </span>
        </p>
        <p className="flex items-center gap-2">
          <span>
            <img className="w-4" src="/NGO Dashboard icon/Member.png" alt="" />
          </span>{" "}
          Phone:{" "}
          <span className="font-normal pl-2">
            {memberDetails.mobileNumber}{" "}
          </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img className="w-5" src="/NGO Dashboard icon/expense.png" alt="" />
          Payment Term:{" "}
          <span className="font-normal px-2 bg-green-500 text-white rounded">
            {paymentTerm}
          </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="./../../../public/NGO Dashboard icon/report.png"
            alt=""
          />
          Period Of Months:{" "}
          <span className="font-normal text-white rounded px-2 bg-teal-500">
            {periodOfTimeInMonths}
          </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="./../../../public/NGO Dashboard icon/payroll.png"
            alt=""
          />
          Per Installment:{" "}
          <span className="font-normal pl-2">{perInstallment} </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="./../../../public/NGO Dashboard icon/bank-building.png"
            alt=""
          />
          Balance: <span className="font-normal pl-2">{balance} </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="./../../../public/NGO Dashboard icon/manage-drawer-cash.png"
            alt=""
          />
          Profit :{" "}
          <span className="font-normal pl-2">{profitPercentage} %</span>
        </p>
        <div className="flex flex-wrap  gap-4 border-t-2 pt-2">
          <p className="flex items-center gap-2 ">
            <span>
              <img
                width="22"
                height="22"
                src="https://img.icons8.com/ios/50/calendar--v1.png"
                alt="calendar--v1"
              />
            </span>
            On Mature Date :{" "}
            <span className="font-normal ">{dateToString(matureDate)} </span>
          </p>
          <p className="flex items-center gap-2 ">
            <span>
              <img
                width="22"
                height="22"
                src="https://img.icons8.com/ios/50/calendar--v1.png"
                alt="calendar--v1"
              />
            </span>
            Opening Date :{" "}
            <span className="font-normal ">{dateToString(openingDate)} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const TransactionsTable = ({ data }) => {
  console.log(data);

  const { date, amount, description, _id } = data;

  return (
    <div>
      <tr className="grid grid-cols-3 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-3 items-center w-full justify-between text-center py-3">
        <td>{dateToString(date)}</td>
        <td>{amount}</td>
        <td className="hidden md:block">{description}</td>
      </tr>
    </div>
  );
};

export const WithdrawsTable = ({ data }) => {
  const { date, amount, description, _id } = data;
  return (
    <div>
      <tr className="grid grid-cols-2 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-2 items-center w-full justify-between text-center py-3">
        <td>{dateToString(date)}</td>
        <td>{amount}</td>
      </tr>
    </div>
  );
};

const SavingAccountListDetails = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div>
      <div>
        <SavingAccountNav />
      </div>
      <section className="max-w-5xl mx-auto ">
        <SavingAccountPerUserDetails data={data} />
      </section>
      <div className="grid  md:grid-cols-2 ">
        <section>
          <div className="md:m-8">
            <h1 className="md:text-lg md:font-medium mt-3 text-center ">
              Transactions Table
            </h1>
            <div className="divider"></div>
            <table className="w-full  ">
              <tr className="grid grid-cols-3  text-xs md:text-base bg-teal-700  py-4 text-white md:grid-cols-3 items-center justify-center gap-1 text-center">
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
              {data.transactions
                ? data.transactions.map((data, idx) => (
                    <TransactionsTable data={data} key={idx} />
                  ))
                : null}
            </table>
          </div>
        </section>
        <section>
          <div className="md:m-8">
            <h1 className="md:text-lg md:font-medium mt-4 text-center ">
              Withdraws Table
            </h1>
            <div className="divider"></div>
            <table className="w-full  ">
              <tr className="grid grid-cols-2  text-xs md:text-base bg-teal-700  py-4 text-white md:grid-cols-2 items-center justify-center gap-1 text-center">
                <th>Date</th>
                <th>Amount</th>
              </tr>
              {data.withdraws
                ? data.withdraws.map((data, idx) => (
                    <WithdrawsTable data={data} key={idx} />
                  ))
                : null}
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SavingAccountListDetails;
