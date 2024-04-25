import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchUserByPhoneNumber } from "../../../api/admin";

const MemberDetailsPage = () => {
    const { id } = useParams();
    console.log(id);
    const [member, setMember] = useState({});
    const { data, isFetched } = useQuery({ queryFn: () => searchUserByPhoneNumber(id) })

    useEffect(() => {
        if (isFetched) {
            setMember(data[0])
        }
    }, [isFetched])

    console.log(member);
    const { name } = member;
    // const { name,
    //     dateOfBirth,
    //     educationalQualification,
    //     status,
    //     mobileNumber,
    //     fathersName,
    //     mothersName,
    //     spouseName,
    //     nidNumber,
    //     photo,
    //     presentAddress,
    // } = member;
    return (
        <div>
            <p>page id {name}</p>
        </div>
    );
};

export default MemberDetailsPage;