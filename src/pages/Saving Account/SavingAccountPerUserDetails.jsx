import { dateToString } from "../../utils/DateHelper";

const SavingAccountPerUserDetails = ({ data }) => {
  console.log(data);
  const {
    memberId,
    paymentTerm,
    periodOfTimeInMonths,
    profitPercentage,
    balanceWithProfit,
    openingDate,
    balance,
    memberDetails,
    status,
  } = data;
  console.log(status);

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
            src="./../../../public/NGO Dashboard icon/bank-building.png"
            alt=""
          />
          Balance: <span className="font-normal pl-2">{balance} </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="./../../../public/NGO Dashboard icon/bank-building.png"
            alt=""
          />
          Balance Wit Profit:{" "}
          <span className="font-normal pl-2">{balanceWithProfit} </span>
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
            Opening Date :{" "}
            <span className="font-normal ">{dateToString(openingDate)} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavingAccountPerUserDetails;
