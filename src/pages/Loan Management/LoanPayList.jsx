import { useQuery } from "@tanstack/react-query";
import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";
import { ngoLoanList } from "../../../api/admin";

const LoanPayList = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["ngo-loan"],
    queryFn: ngoLoanList,
  });
  console.log(data);

  return (
    <div>
      <LoanManagementNav />
      <h1>loan pay list page</h1>
    </div>
  );
};

export default LoanPayList;
