
const SavingAccountListView = ({ data }) => {
    console.log(data);
    const {
        _id,
        updatedAt,
        paymentTerm,
        perInstallment,
        onMatureAmount,
        openingDate,
        balance,
    } = data
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default SavingAccountListView;

