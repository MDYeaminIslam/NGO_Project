import DepositAccountsTable, {
  DpsAccountsTable,
  FdrAccountsTable,
  SavingsAccountsTable,
} from "./DepositAccountTable";
const DepositAccountCard = ({ data, value }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="grid grid-cols-4 w-full bg-teal-500 text-white rounded-md">
            <th>Name</th>
            <th>Payment</th>
            <th>date</th>
            <th>Action</th>
          </thead>
        </table>
      </div>
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

export function SavingsAccountCard({ data, value }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="grid grid-cols-4 w-full bg-teal-500 text-white rounded-md">
            <th>Name</th>
            <th>Payment</th>
            <th>date</th>
            <th>Action</th>
          </thead>
        </table>
      </div>
      <div>
        <table className="table ">
          <tbody>
            <SavingsAccountsTable data={{ ...data, value }} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export function FdsAccountCard({ data, value }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="grid grid-cols-4 w-full bg-teal-500 text-white rounded-md">
            <th>Name</th>
            <th>Payment</th>
            <th>date</th>
            <th>Action</th>
          </thead>
        </table>
      </div>
      <div>
        <table className="table ">
          <tbody>
            <FdrAccountsTable data={{ ...data, value }} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export function DpsAccountCard({ data, value }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="grid grid-cols-4 w-full bg-teal-500 text-white rounded-md">
            <th>Name</th>
            <th>Payment</th>
            <th>date</th>
            <th>Action</th>
          </thead>
        </table>
      </div>
      <div>
        <table className="table ">
          <tbody>
            <DpsAccountsTable data={{ ...data, value }} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DepositAccountCard;
