import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchEmployeeByPhoneNumber } from "../../../api/admin";
import { useEffect, useState } from "react";


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
            <p>employee details {id}, {name}</p>
        </div>
    );
};

export default EmployeeDetailsPage;