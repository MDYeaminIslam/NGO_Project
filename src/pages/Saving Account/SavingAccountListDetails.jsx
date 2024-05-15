
import { useLocation, useParams } from 'react-router-dom';
import SavingAccountNav from './SavingAccountNav/SavingAccountNav';

const SavingAccountListDetails = () => {
    const location = useLocation()
    const { data } = location.state;
    console.log(data);

    console.log(data);
    return (
        <div>
            <div>
                <SavingAccountNav />
            </div>
            <h1>saving_account_list_details</h1>
        </div>
    );
};

export default SavingAccountListDetails;