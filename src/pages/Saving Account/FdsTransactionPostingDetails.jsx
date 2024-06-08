import { useParams } from "react-router-dom";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import { useQuery } from "@tanstack/react-query";
import {
  depositTransactionList,
  fdrTransactionList,
  fdrWithdrawTransactionList,
  getFdrAccountDetailsById,
  getSavingAccountDetailsById,
  savingsTransactionList,
  savingsWithdrawTransactionList,
  withdrawTransactionList,
} from "../../../api/admin";
import SavingAccountPerUserDetails, {
  FdrAccountPerUserDetails,
} from "./SavingAccountPerUserDetails";

import WithdrawsTable from "./WithdrawsTable";
import TransactionsTable from "./TransactionsTable";
import AddMoneySavings from "./AddMoneySavings";
import WithdrawMoneySavings from "./WithdrawMoneySavings";
import AddMoneyFdr from "./AddMoneyFdr";
import WithdrawMoneyFdr from "./WithdrawMoneyFdr";
import FdrTransactionsTable from "./FdrTransactionTable";

const FdrTransactionPostingDetails = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [`fdr-account-${id}`],
    queryFn: () => getFdrAccountDetailsById(id),
    initialData: [],
    enabled: !!id,
  });
  const { data: transactions } = useQuery({
    queryKey: [`fdr-transactions-${id}`],
    queryFn: () => fdrTransactionList(id),
    initialData: null,
  });

  return (
    <>
      <section>
        <SavingAccountNav />
      </section>
      <section>
        {data.length ? <FdrAccountPerUserDetails data={data[0]} /> : null}
      </section>

      <section>
        <div className="">
          <section className="mt-12">
            <div>
              <div className="max-w-5xl mx-auto">
                <div className=" bg-teal-700 text-white py-4 mx-1 rounded-t-md  ">
                  <tr className="grid grid-cols-3 md:grid-cols-5  items-center justify-center gap-1 text-start ">
                    <th>SL</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </div>
              </div>
              {transactions
                ? transactions.map((data, idx) => (
                    <FdrTransactionsTable data={data} key={idx} index={idx} />
                  ))
                : null}
            </div>
            {/* New */}
          </section>
        </div>
      </section>
    </>
  );
};

export default FdrTransactionPostingDetails;
