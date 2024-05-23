import { useLocation } from "react-router-dom";


const SalarySheetDetails = () => {
    const location = useLocation();
    const { data } = location.state;
    console.log(data);
    const { _id, basicSalary, mobileBill, tourBill, overTime, specialAward, bonus, total, totalPaid, due, name, deduction } = data
    return (
        <div>
            bro code <br />{_id}
        </div>
    );
};

export default SalarySheetDetails;