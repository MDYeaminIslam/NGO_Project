import DepositAccountsTable from "./DepositAccountTable";
const DepositAccountCard = ({ data, value }) => {
  return (
    <div>
      <div>
        <table className="table ">
          <tbody>
            <DepositAccountsTable data={{ ...data, value }} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositAccountCard;
