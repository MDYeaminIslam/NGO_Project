
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchUserByPhoneNumber } from "../../../api/admin";
import MemberCards from "./MemberCards";

const MemberDetailsPage = () => {
    const { id } = useParams();
    console.log(id);
    const [member, setMember] = useState(null);

    useEffect(() => {

        searchUserByPhoneNumber(id).then(data => setMember(data[0]))
    }, [])

    console.log(member);
    // const { name } = member;

    return (
        <div>
            {
                member ? < MemberCards data={member} /> : null
            }
        </div>
    );
};

export default MemberDetailsPage;