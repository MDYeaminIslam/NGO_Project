import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { makeDeposit, searchDepositAccount } from "../../../api/admin";
import toast from "react-hot-toast";
import { IconSearch } from "../../../icons/icons";
import { MoonLoader } from "react-spinners";
import useMutationHook from "../../../hooks/useMutationHook";
const initialState = {
  description: "",
  date: "",
  amount: "",
};
const TransactionnPosting = () => {
  const [searchedUser, setSearchedUser] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(makeDeposit, {
      onSuccess: () => {
        toast.success("Deposit Added Successfully!");
      },
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // * handleSearchUser
  const handleSearchUser = async (event) => {
    const { value } = event.target;
    if (value.length >= 11) {
      const userData = await searchDepositAccount(value);
      console.log(userData);
      if (userData.length) {
        setShowLoadingIcon(false);
        setSearchedUser(userData[0]);
      } else {
        toast.error("No Data Found");
        setShowLoadingIcon(false);
      }
    } else {
      setShowLoadingIcon(true);
    }
  };
  // * handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { memberId: searchedUser._id, ...formData };
    mutate(data);
  };
  useEffect(() => {
    setFormData((prev) => ({ ...prev, date: new Date() }));
  }, []);
  return (
    <div>
      <section>
        <SavingAccountNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            Transaction Posting  
          </h1>
          <form className="my-8">
            <section className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="acc_id">
                  Account Id:{" "}
                </label>
                <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                  <input
                    type="number"
                    id="acc_id"
                    className="grow  "
                    placeholder="Search"
                    onChange={handleSearchUser}
                  />
                  {!showLoadingIcon ? (
                    <IconSearch className="w-6 h-6 opacity-50" />
                  ) : (
                    <MoonLoader size={15} />
                  )}
                </label>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="member_name">
                  Member Name:
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="member_name"
                  type="text"
                  placeholder="auto refill"
                  value={searchedUser ? searchedUser.name : "No Available Data"}
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="description">
                  Description:
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="description"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                  placeholder="write description here"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="installment_amount">
                  Installment Amount:
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="installment_amount"
                  name="amount"
                  type="number"
                  onChange={handleChange}
                  value={formData.amount}
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="date">
                  {" "}
                  Date:
                </label>
                <DatePicker
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  dateFormat="dd/MM/yyyy"
                  disabled
                  showIcon
                  selected={formData.date}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="payment_term">
                  Payment Term:
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="payment_term"
                  type="text"
                  placeholder="auto refill"
                  value={
                    searchedUser
                      ? searchedUser.paymentTerm
                      : "No Data Available"
                  }
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="installment_payment">
                  Installment Payment:
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="installment_payment"
                  type="text"
                  placeholder="auto refill"
                  value={
                    searchedUser
                      ? searchedUser.perInstallment
                      : "No Data Available"
                  }
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="balance">
                  {" "}
                  Total Deposit:
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="balance"
                  type="text"
                  placeholder=""
                  value={
                    searchedUser ? searchedUser.balance : "No Data Available"
                  }
                  disabled
                />
              </div>
            </section>
            {isError ? errorMessage : null}

            <div className="w-full flex flex-col md:flex-row  justify-center  mt-12 gap-6">
              <button
                onClick={handleSubmit}
                className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
              >
                Submit
              </button>
              <input
                className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
                type="submit"
                value="Save and Print"
              />
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default TransactionnPosting;
