import { useState } from "react";
import ManageDrawerCashNav from "./ManageDrawerCashNav/ManageDrawerCashNav";
import "react-datepicker/dist/react-datepicker.css";
import { createBank, getAllBank } from "../../../api/admin";
import toast from "react-hot-toast";
import useMutationHook from "../../../hooks/useMutationHook";

import { useQuery } from "@tanstack/react-query";
const initialState = {
  name: "",
};

const AddBank = () => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const { data, isFetched } = useQuery({
    initialData: [],
    queryKey: ["bank"],
    queryFn: getAllBank,
  });
  const { mutate, isError, errorMessage, isPending } = useMutationHook(
    createBank,
    {
      onSuccess: () => {
        toast.success("Bank added successfully!");
      },
      key: ["bank"],
    }
  );
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(formData);
  };

  return (
    <div>
      <section>
        <ManageDrawerCashNav />
      </section>
      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            Drawer Cash
          </h1>
          <form className="my-8">
            <section className="w-full">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="bankName">
                  Bank Name:{" "}
                </label>
                <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    id="bankName"
                    name="name"
                    onChange={handleChange}
                    className="grow  "
                    placeholder="Enter Bank Name"
                  />
                </label>
              </div>
            </section>
            {isError ? errorMessage : null}
            <div className="w-full flex justify-center  mt-12">
              <button
                className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
      {/* Bank List */}
      <section>
        {data.length
          ? data.map((bank, idx) => {
              return <div key={idx}>{bank.name}</div>;
            })
          : "No Bank Data"}
      </section>
    </div>
  );
};

export default AddBank;
