import { useEffect, useState } from "react";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { IconSearch } from "../../../icons/icons";
import { searchUserByPhoneNumber } from "../../../api/admin";
import { MoonLoader } from "react-spinners";
import { data } from "autoprefixer";
import toast from "react-hot-toast";
const initialState = {
  periodOfTimeInMonths: "",
  openingDate: "",
  matureDate: "",
};
const Deposit = () => {
  const [formData, setFormData] = useState(initialState);
  const [searchedUser, setSearchedUser] = useState(null);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  // * handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "periodOfTimeInMonths") {
      const tempMatureDate = moment().add(value, "months").format("YYYY-MM-DD");
      setFormData((prev) => ({ ...prev, matureDate: tempMatureDate }));
    }
  };
  // * handleSearchUser
  const handleSearchUser = async (event) => {
    const { value } = event.target;
    if (value.length >= 11) {
      const userData = await searchUserByPhoneNumber(value);
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
  useEffect(() => {
    setFormData((prev) => ({ ...prev, openingDate: new Date() }));
  }, []);
  return (
    <div>
      <section>
        <SavingAccountNav />
      </section>

      <section>
        {/* input container */}
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            Open Deposit Account Form{" "}
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

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="occupation">
                  Status :
                </label>
                <select className=" input input-bordered input-sm hover:border-teal-500 ">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Fortnightly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Half-Yearly</option>
                  <option>Yearly</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="period_of_time">
                  Period of time :
                </label>
                <input
                  name="periodOfTimeInMonths"
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="period_of_time"
                  type="text"
                  placeholder="In months"
                  value={formData.periodOfTimeInMonths}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="per_installment">
                  Per installment :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="per_installment"
                  type="number"
                  placeholder="money amount"
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
                  placeholder="%"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="on_mature_amount">
                  {" "}
                  On Mature amount :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="on_mature_amount"
                  type="number"
                  placeholder="500 tk"
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="opening_date">
                  {" "}
                  Opening Date :
                </label>

                <DatePicker
                  selected={formData.openingDate}
                  dateFormat="dd/MM/yyyy"
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mature_date">
                  Mature Date :
                </label>
                <DatePicker
                  selected={formData.matureDate}
                  dateFormat="dd/MM/yyyy"
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  disabled
                  showIcon
                />
              </div>

              <div className="flex flex-col gap-1 col-span-3">
                <label className="font-medium" htmlFor="first_due_date">
                  {" "}
                  First Due Date :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="first_due_date"
                  type="date"
                  placeholder=""
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

export default Deposit;
