import { useState } from "react";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import { useQuery } from "@tanstack/react-query";
import { getDepositAccountListsOfUser } from "../../../api/admin";
import UserDetailsCard from "../../component/UserDetailsCard";
import DepositAccountCard, {
  FdsAccountCard,
  SavingsAccountCard,
} from "../../component/DepositAccountCard";
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
          </div>
        </section>
        <section>
          {data && userPhoneNumber?.length == 11 ? (
            <UserDetailsCard data={{ ...data.userDetails, userPhoneNumber }} />
          ) : null}
        </section>
        {/* Deposit  Accounts */}
        <section>
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
        {/* Saving Accounts */}
        <section>
          {data && userPhoneNumber?.length == 11 && data?.savingsAccounts
            ? data.savingsAccounts.map((account, idx) => (
                <SavingsAccountCard
                  value={data.userDetails}
                  key={idx}
                  data={account}
                />
              ))
            : null}
        </section>
        {/* FDs Accounts */}
        <section>
          {data && userPhoneNumber?.length == 11 && data?.fdrAccounts
            ? data.fdrAccounts.map((account, idx) => (
                <FdsAccountCard
                  value={data.userDetails}
                  key={idx}
                  data={account}
                />
              ))
            : null}
        </section>
        {/* Dps Accounts */}
        <section>
          {data && userPhoneNumber?.length == 11 && data?.dpsAccounts
            ? data.dpsAccounts.map((account, idx) => (
                <FdsAccountCard
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
