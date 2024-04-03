import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {
  createDepositAccount,
  searchUserByPhoneNumber,
} from "../../../api/admin";
import { MoonLoader } from "react-spinners";
import toast from "react-hot-toast";
import useMutationHook from "../../../hooks/useMutationHook";
import { IconSearch } from "../../../icons/icons";
const initialState = {
  openingDate: "",
  expiryDate: "",
  paymentTerm: "Daily",
  profitPercentage: "",
  onMatureAmount: "",
  loanAmount: "",
  totalAmount: "",
  numberOfInstallment: "",
  installmentAmount: "",
};

const OpenLoanAccount = () => {
  const [formData, setFormData] = useState(initialState);
  const [searchedUser, setSearchedUser] = useState(null);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(createDepositAccount, {
      onSuccess: () => {
        toast.success("User added successfully!");
      },
    });
  // * handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "periodOfTimeInMonths") {
      const tempMatureDate = moment().add(value, "months").format("YYYY-MM-DD");
      setFormData((prev) => ({ ...prev, matureDate: tempMatureDate }));
    }
    if (name === "profitPercentage") {
      const { periodOfTimeInMonths, perInstallment, paymentTerm } = formData;

      const total = getDepositDates(
        periodOfTimeInMonths,
        paymentTerm,
        perInstallment,
        value
      );
      setFormData((prev) => ({ ...prev, onMatureAmount: total }));
    }
  };
  // * handleSearchUser
  const handleSearchUser = async (event) => {
    const { value } = event.target;
    if (value.length >= 11) {
      const userData = await searchUserByPhoneNumber(value);
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
  // !handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      memberId: searchedUser._id,
      ...formData,
    };
    mutate(data);
  };
  return (
    <div>
      <section>
        <LoanManagementNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            Open Loan Account
          </h1>
          <form className="my-8">
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="member_id">
                  Search By Phone Number :{" "}
                </label>
                <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                  <input
                    onChange={handleSearchUser}
                    type="number"
                    id="member_id"
                    className="grow  "
                    placeholder="Search"
                  />
                  {!showLoadingIcon ? (
                    <IconSearch className="w-6 h-6 opacity-50" />
                  ) : (
                    <MoonLoader size={15} />
                  )}
                </label>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="acc_id">
                  User Name :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="acc_id"
                  type="text"
                  value={searchedUser ? searchedUser.name : "No Data Available"}
                  disabled
                />
              </div>

              {/* <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="cycle_no">
                  Cycle No :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="cycle_no"
                  type="text"
                  placeholder="how many times loan taken"
                />
              </div> */}

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="loan_amount">
                  Loan Amount :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="loan_amount"
                  type="text"
                  placeholder=""
                  name="loanAmount"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="profit">
                  Profit :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="profit"
                  type="number"
                  name="profitPercentage"
                  onChange={handleChange}
                  placeholder="%"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="profit_amount">
                  Total Amount :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="profit_amount"
                  type="text"
                  placeholder="auto calculated"
                  value={formData.totalAmount}
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="no_of_installment">
                  Number of Installment :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="no_of_installment"
                  type="text"
                  placeholder=""
                  name="numberOfInstallment"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="installment">
                  Installment :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="installment"
                  type="text"
                  placeholder="auto calculated"
                  value={formData.installmentAmount}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="payment_term">
                  Payment Term :
                </label>
                <select
                  onChange={handleChange}
                  name="paymentTerm"
                  className=" input input-bordered input-sm hover:border-teal-500 "
                >
                  <option disabled>Select a Value</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Fortnightly">Fortnightly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Half-Yearly">Half-Yearly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="opening_date">
                  {" "}
                  Opening Date :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="opening_date"
                  type="date"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="expiry_date">
                  Expiry Date :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="mature_date"
                  type="date"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="first_due_date">
                  {" "}
                  First Due Date:
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="first_due_date"
                  type="date"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="gurantor_info">
                  Guarantor Info :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="guarantor_info"
                  type="text"
                  placeholder="select the nominee"
                  value={
                    searchedUser
                      ? searchedUser.nominee.name
                      : "No Data Available"
                  }
                  disabled
                />
              </div>
            </section>

            <div className="w-full flex justify-center  mt-8">
              <input
                className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
                type="submit"
              />
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default OpenLoanAccount;
