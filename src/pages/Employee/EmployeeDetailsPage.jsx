import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchEmployeeByPhoneNumber } from "../../../api/admin";
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";


const EmployeeDetailsPage = () => {
    const { id } = useParams()
    const [member, setMember] = useState({})
    const { data, isFetched } = useQuery({ queryFn: () => searchEmployeeByPhoneNumber(id) })

    useEffect(() => {
        if (isFetched) {
            setMember(data[0]);
        }
    }, [isFetched])

    console.log(member);
    const { name
    } = member
    return (
        <div>
            {
                isFetched ? <EmployeeCard data={member} /> : null
            }
        </div>
    );
};

export default EmployeeDetailsPage;