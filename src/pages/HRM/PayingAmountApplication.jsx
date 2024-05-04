import { useMemo, useState } from "react";
import HRMNav from "./HRMNav/HRMNav";
import { IconSearch } from "../../../icons/icons";
import {
  createPrayingAmountApplication,
  searchEmployeeByPhoneNumber,
} from "../../../api/admin";
import { MoonLoader } from "react-spinners";
import useMutationHook from "../../../hooks/useMutationHook";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const initialState = {
  employeeId: "",
  reason: "",
  totalAmount: 0,
  adjustmentDuration: 0,
  adjustmentAmount: 0,
  date: new Date(),
};

const PayingAmountApplication = () => {
  const [formData, setFormData] = useState(initialState);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const [searchedUser, setSearchedUser] = useState(null);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(createPrayingAmountApplication, {
      onSuccess: () => {
        toast.success("successfully!");
      },
    });
  const adjustment_amount = useMemo(() => {
    const amountPerAdj =
      Number(formData.totalAmount) / Number(formData.adjustmentDuration);
    setFormData((prev) => ({ ...prev, adjustmentAmount: amountPerAdj }));
  }, [formData.adjustmentDuration, formData.totalAmount]);
  // * handleSearchUser
  const handleSearchUser = async (event) => {
    const { value } = event.target;
    if (value.length >= 11) {
      const userData = await searchEmployeeByPhoneNumber(value);
      if (userData.length) {
        setShowLoadingIcon(false);
        setSearchedUser(userData[0]);
        setFormData((prev) => ({ ...prev, employeeId: userData[0]._id }));
      } else {
        toast.error("No Data Found");
        setShowLoadingIcon(false);
      }
    } else {
      setShowLoadingIcon(true);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    mutate(formData);
    console.log(formData);
  };

  return (
    <div>
      <section>
        <HRMNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          Paying Amount Application
        </h1>
        <form className="my-8" action="">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="employee_id">
                Employee Id:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="employee_id"
                name="employeeId"
                onChange={handleChange}
                type="text"
                placeholder="Enter your id here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="phone_number">
                Name:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                value={searchedUser ? searchedUser.name : "No data available"}
                disabled
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">
                Date:
              </label>
              <DatePicker
                selected={formData.date}
                className="input input-bordered input-sm  hover:border-teal-500 w-full"
                dateFormat="dd/MM/yyyy"
                disabled={true}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="paying_amount">
                Total Amount:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500"
                id="paying_amount"
                name="totalAmount"
                onChange={handleChange}
                type="number"
                placeholder="Enter your amount"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="adjustment_duration">
                Adjustment Duration In Month:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="adjustment_duration"
                name="adjustmentDuration"
                onChange={handleChange}
                type="number"
                placeholder=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="adjustment_amount">
                Adjustment Amount:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500"
                id="adjustment_amount"
                name="adjustmentAmount"
                disabled
                value={formData.adjustmentAmount}
                type="number"
                placeholder="Enter your amount"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="reason">
                Reason:
              </label>
              <textarea
                className="input input-bordered hover:border-teal-500 "
                id="reason"
                name="reason"
                onChange={handleChange}
                cols="10"
                rows="1"
              ></textarea>
            </div>
          </section>
        </form>
        {isError ? errorMessage : null}
        <div className="w-full flex justify-center  mt-12">
          <button
            className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default PayingAmountApplication;
