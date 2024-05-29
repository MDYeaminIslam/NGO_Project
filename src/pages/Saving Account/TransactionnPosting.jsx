import { useState } from "react";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import { useQuery } from "@tanstack/react-query";
import { getDepositAccountListsOfUser } from "../../../api/admin";
import UserDetailsCard from "../../component/UserDetailsCard";
import DepositAccountCard from "../../component/DepositAccountCard";
const TransactionnPosting = () => {
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const handleChange = (e) => {
    const { value } = e.target;
    setUserPhoneNumber(value);
  };
  const { data } = useQuery({
    queryKey: ["user-deposit-account-list"],
    queryFn: () => getDepositAccountListsOfUser(userPhoneNumber),
    initialData: null,
    enabled: userPhoneNumber?.length === 11 ? true : false,
  });
  console.log(data);

  function handleSubmit() {}
  return (
    <div>
      <section>
        <SavingAccountNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            Deposit Transaction Posting
          </h1>
          <div className=" flex flex-col md:flex-row gap-4 w-full p-4">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Search by PhoneNumber"
              className="input input-bordered input-sm w-full   hover:border-teal-500  "
              onChange={handleChange}
            />
            <button
              className="btn btn-sm  hover:bg-teal-500 hover:text-white"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </section>
        <section>
          {data && userPhoneNumber?.length == 11 ? (
            <UserDetailsCard data={{ ...data.userDetails, userPhoneNumber }} />
          ) : null}
        </section>
        <section>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="grid grid-cols-4 w-full bg-teal-500 text-white rounded-md">
                <th>Name</th>
                <th>Payment</th>
                <th>date</th>
                <th>Action</th>
              </thead>
            </table>
          </div>

          {data && userPhoneNumber?.length == 11 && data?.depositAccounts
            ? data.depositAccounts.map((account, idx) => (
                <DepositAccountCard
                  value={data.userDetails}
                  key={idx}
                  data={account}
                />
              ))
            : null}
        </section>
      </section>
    </div>
  );
};

export default TransactionnPosting;
