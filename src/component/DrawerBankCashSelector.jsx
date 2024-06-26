import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBank } from "../../api/admin";

export default function DrawerBankCashSelector({ samityId, callBackFn }) {
  const [data, setData] = useState([]);
  const { data: banks, isFetched } = useQuery({
    queryKey: ["bank"],
    queryFn: getAllBank,
    initialData: [],
    enabled: !!samityId,
  });

  useEffect(() => {
    if (isFetched) {
      const bankData = banks.map((bank) => ({
        _id: bank._id,
        type: "bank",
        name: bank.name,
      }));

      const ar = [
        { _id: samityId, type: "drawer", name: "Drawer" },
        ...bankData,
      ];
      setData(ar);
    }
  }, [isFetched]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    try {
      const selectedObject = JSON.parse(selectedValue);
      callBackFn((prev) => ({ ...prev, payFrom: selectedObject }));
      console.log(selectedObject);
    } catch (e) {
      console.error("Invalid JSON:", selectedValue);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium" htmlFor="name">
        From:
      </label>
      <select
        onChange={handleSelectChange}
        className="input input-bordered input-sm hover:border-teal-500"
      >
        <option value="" disabled selected>
          Select Payment
        </option>
        {data.map((item) => (
          <option key={item._id} value={JSON.stringify(item)}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
