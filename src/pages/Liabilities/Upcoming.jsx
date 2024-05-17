import { useEffect, useState } from "react";
import Liabilities from "./LiabilitiesNav/LiabilitiesNav";
import { ngoLiability } from "../../../api/admin";
const Upcoming = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    ngoLiability().then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <section>
        <Liabilities />
      </section>
      <h1>Upcoming</h1>
    </div>
  );
};

export default Upcoming;
