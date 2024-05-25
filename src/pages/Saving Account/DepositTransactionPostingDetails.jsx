import { useParams } from "react-router-dom";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
const DepositTransactionPostingDetails = () => {
  const { id } = useParams();

  return (
    <>
      <section>
        <SavingAccountNav />
      </section>
      <section>
        <h1>{id}</h1>
      </section>
    </>
  );
};
export default DepositTransactionPostingDetails;
