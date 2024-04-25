import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchUserByPhoneNumber } from "../../../api/admin";
import MemberCards from "./MemberCards";

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
    // const { name } = member;

    return (
        <div>
            {
                isFetched ? < MemberCards data={member} /> : null
            }
        </div>
    );
};

export default MemberDetailsPage;