import { getAllBranches } from "../../../api/admin";
import BranchesNav from "./BranchesNav/BranchesNav";
import { useQuery } from "@tanstack/react-query";

const BranchList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["branches"],
    queryFn: getAllBranches,
    retry: false,
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  console.log(data);
  return (
    <div>
      <section>
        <BranchesNav />
      </section>
      <h1>Branch List</h1>
    </div>
  );
};

export default BranchList;
