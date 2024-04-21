import { useState } from "react";
import HRMNav from "./HRMNav/HRMNav";
import { IconSearch } from "../../../icons/icons";
import {
  createMonthlyPaySlipApplication,
  searchEmployeeByPhoneNumber,
} from "../../../api/admin";
import { MoonLoader } from "react-spinners";
import toast from "react-hot-toast";
import useMutationHook from "../../../hooks/useMutationHook";
const initialState = {
  employeeId: "",
  basicSalary: "",
  mobileBill: "",
  tourBill: 0,
  overTime: 0,
  specialAward: 0,
  bonus: 0,
  totalPaid: 0,
  deduction: {
    advance: "",
    ait: "",
    providentFund: "",
    absent: "",
    others: "",
  },
};

const PaySlip = () => {
  const [formData, setFormData] = useState(initialState);
  const [showLoadingIcon, setShowLoadingIcon] = useState(false);
  const [searchedUser, setSearchedUser] = useState(null);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(createMonthlyPaySlipApplication, {
      onSuccess: () => {
        toast.success("successfully!");
      },
    });
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    console.log(type, name);
    setFormData((prev) => {
      return { ...prev, [name]: type === "number" ? Number(value) : value };
    });
  };
  const handleChangeDeduction = (event) => {
    const { name, value, type } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        deduction: {
          ...prev.deduction,
          [name]: type === "number" ? Number(value) : value,
        },
      };
    });
  };
  // * handleSearchUser
  const handleSearchUser = async (event) => {
    const { value } = event.target;
    if (value.length >= 11) {
      const userData = await searchEmployeeByPhoneNumber(value);
      if (userData.length) {
        setShowLoadingIcon(false);
        setSearchedUser(userData[0]);
        const { salaryAmount, mobileBill } = userData[0].presentPosition;
        console.log(userData[0]);

        setFormData((prev) => ({
          ...prev,
          basicSalary: salaryAmount,
          employeeId: userData[0]._id,
          mobileBill,
          deduction: {
            ...prev.deduction,
            advance: userData[0].advance,
          },
        }));
      } else {
        toast.error("No Data Found");
        setShowLoadingIcon(false);
      }
    } else {
      setShowLoadingIcon(true);
    }
  };
  const handleSubmit = (event, buttonAction) => {
    event.preventDefault();
    console.log(formData);
    const { tourBill, overTime, specialAward, bonus, basicSalary, mobileBill } =
      formData;
    const total =
      Number(tourBill) +
      Number(overTime) +
      Number(specialAward) +
      Number(bonus) +
      Number(basicSalary) +
      Number(mobileBill);
    console.log(total);

    const { absent, advance, ait, others, providentFund } = formData.deduction;
    const aitCalculation = Number(basicSalary) * (Number(ait) / 100);
    const proCalculation = Number(basicSalary) * (Number(providentFund) / 100);
    const totalDeduction =
      aitCalculation +
      proCalculation +
      Number(absent) +
      Number(advance) +
      Number(others);
    const totalCalculation = total - totalDeduction;
    setFormData((prev) => ({ ...prev, totalPaid: totalCalculation }));
  };

  function finalSubmit(e) {
    e.preventDefault();
    mutate(formData);
  }

  return (
    <div>
      <section>
        <HRMNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            {" "}
            Addition
          </h1>
          <form className="my-8">
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="phone_number">
                  Name
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  value={searchedUser ? searchedUser.name : "No data available"}
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="basic_salary">
                  Basic Salary :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="basic_salary"
                  name="basicSalary"
                  onChange={handleChange}
                  type="number"
                  placeholder="enter your basic salary"
                  value={formData.basicSalary}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mobile_bill">
                  Mobile Bill :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="mobile_bill"
                  name="mobileBill"
                  onChange={handleChange}
                  type="number"
                  placeholder="enter your mobile bill"
                  value={formData.mobileBill}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="tour_bill">
                  Tour Bill :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="tour_bill"
                  name="tourBill"
                  onChange={handleChange}
                  type="number"
                  placeholder="enter your tour bill"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="overtime">
                  Overtime :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="overtime"
                  name="overTime"
                  onChange={handleChange}
                  type="number"
                  placeholder="enter your overtime"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="special_award">
                  Special Award :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="special_award"
                  name="specialAward"
                  onChange={handleChange}
                  type="number"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="bonus">
                  Bonus :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="bonus"
                  name="bonus"
                  onChange={handleChange}
                  type="number"
                  placeholder=""
                />
              </div>
            </section>
          </form>
        </section>

        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            {" "}
            Deduction
          </h1>
          <form className="my-8">
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="advance">
                  Advance :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="advance"
                  name="advance"
                  onChange={handleChangeDeduction}
                  type="number"
                  value={formData.deduction.advance}
                  placeholder="enter advance"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="ait">
                  AIT :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="ait"
                  name="ait"
                  onChange={handleChangeDeduction}
                  type="number"
                  placeholder="enter AIT"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="provident fund">
                  Provident Fund :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="provident_fund"
                  name="providentFund"
                  onChange={handleChangeDeduction}
                  type="number"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="absent">
                  Absent :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="absent"
                  name="absent"
                  onChange={handleChangeDeduction}
                  type="number"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="others">
                  Others :
                </label>
                <input
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="others"
                  name="others"
                  onChange={handleChangeDeduction}
                  type="number"
                  placeholder=""
                />
              </div>
            </section>

            <div className="w-fit mx-auto flex justify-center  m-8">
              <button
                className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            {" "}
            Total Payable
          </h1>
          <form className="my-8">
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="advance">
                  Total Amount:
                </label>
                <h1>{formData.totalPaid}</h1>
              </div>
            </section>
          </form>
        </section>

        <div className="flex gap-6 justify-center items-center mt-6   col-span-2">
          <div className="flex w-fit mt-8">
            <button
              className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
              onClick={finalSubmit}
            >
              Save
            </button>
          </div>
          <div className=" flex w-fit  mt-8">
            <button
              className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
              onClick={(e) => handleSubmit(e, "saveAndPrint")}
            >
              Save and Print
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaySlip;
