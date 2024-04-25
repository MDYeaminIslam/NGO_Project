const EmployeeListView = ({ data }) => {
  console.log(data);
  const { name, email, mobileNumber, presentAddress } = data;

  return (
    <>
      <tr className="grid grid-cols-5 items-center w-full justify-between text-center py-3">
        <td>{name}</td>
        <td>{mobileNumber}</td>
        <td>{email}</td>
        <td>{presentAddress}</td>

        <td>
          <button className="btn btn-info text-white">view</button>
        </td>
      </tr>
    </>
  );
};

export default EmployeeListView;
