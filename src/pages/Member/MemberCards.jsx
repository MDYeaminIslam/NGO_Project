import EditBtn from "../../component/button/EditBtn";
import { dateToString } from "../../utils/DateHelper";


const MemberCards = ({ data }) => {
    const { name,
        fathersName,
        mothersName,
        spouseName,
        occupation,
        occupationBrief,
        presentAddress,
        permanentAddress,
        educationalQualification,
        dateOfBirth,
        nidNumber,
        mobileNumber,
        emergencyContactNumber,
        religion,
        membershipFee,
        photo,
        status,
        nominee,
        branchName,
        samityName,
    } = data;

    const { name: nomineeName, address: nomineeAddress, relation: nomineeRelation, share: nomineeShare, occupation: nomineeOccupation, } = nominee;
    console.log(nominee);

    console.log(data);
    return (
        <section className="p-4 max-w-5xl mx-auto  md:mt-8 rounded ">
            <div className="flex flex-col md:flex-row gap-4 border-b-4 pb-4">
                <div className=" ">
                    <img className=" rounded h-52 object-cover " src={photo} alt="" />
                </div>
                <div className=" space-y-2 p-4 ">
                    <h1 className="md:text-4xl">{name}</h1>
                    <p className="font-bold text-green-600">{status}</p>
                    <p className=" font-medium flex items-center  ">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-5 h-5 font-bold">
                                <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                            </svg>
                        </span>
                        <span className=" pl-1 font-normal">{mobileNumber}</span></p>
                    <p className=" font-medium"> NID :<span className="font-normal pl-2">{nidNumber}</span></p>
                </div>
            </div>
            <div className=" font-bold grid grid-cols-1 md:grid-cols-4 py-4 space-y-3 tracking-wide ">
                <p>Education: <br /> <span className="font-normal text-base ">{educationalQualification}</span></p>
                <p>Date of Birth: <br /> <span className="font-normal text-base ">{dateToString(dateOfBirth)}</span></p>
                <p>Present Address: <br /> <span className="font-normal text-base ">{presentAddress}</span></p>
                <p>Permanent Address: <br /> <span className="font-normal text-base ">{permanentAddress}</span></p>
                <p>Father Name: <br /> <span className="font-normal text-base ">{fathersName}</span></p>
                <p>Mother Name: <br /> <span className="font-normal text-base ">{mothersName}</span></p>
                <p>Spouse Name: <br /> <span className="font-normal text-base ">{spouseName}</span></p>
                <p>Occupation: <br /> <span className="font-normal text-base ">{occupation}</span></p>
                <p>Occupation Description: <br /> <span className="font-normal text-base ">{occupationBrief}</span></p>
                <p>Educational Qualification: <br /> <span className="font-normal text-base ">{educationalQualification}</span></p>
                <p>Emergency Contact: <br /> <span className="font-normal text-base ">{emergencyContactNumber}</span></p>
                <p>Religion: <br /> <span className="font-normal text-base ">{religion}</span></p>
                <p>Membership Fee: <br /> <span className="font-normal text-base ">{membershipFee}</span></p>
                <p>Branch Name: <br /> <span className="font-normal text-base ">{branchName}</span></p>
                <p>Samity Name: <br /> <span className="font-normal text-base ">{samityName}</span></p>
                {/* <p>: <br /> <span className="font-normal text-base ">{occupationBrief}</span></p> */}

            </div>

            <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
                Nominee Details
            </h1>
            <div className=" font-bold grid grid-cols-1 md:grid-cols-4 py-4 space-y-3 tracking-wide ">
                <p>Name: <br /> <span className="font-normal text-base ">{nomineeName}</span></p>
                {/* <p>Address: <br /> <span className="font-normal text-base ">{dateToString(dateOfBirth)}</span></p> */}
                <p>Address: <br /> <span className="font-normal text-base ">{nomineeAddress}</span></p>
                <p>Relation: <br /> <span className="font-normal text-base ">{nomineeRelation}</span></p>
                <p>Share: <br /> <span className="font-normal text-base ">{nomineeShare}</span></p>
                <p>Occupation: <br /> <span className="font-normal text-base ">{nomineeOccupation}</span></p>
                {/* <p>: <br /> <span className="font-normal text-base ">{occupationBrief}</span></p> */}

            </div>
            <div className="divider"></div>
            <div className=" flex gap-2 max-w-4xl justify-end   ">
                <button className="btn btn-sm bg-teal-700 text-white">Print</button>
                {/* <button className="btn btn-sm  btn-success text-white">Edit</button> */}
                <EditBtn data={data} />
                <button className="btn btn-sm  btn-error text-white ">Delete</button>
            </div>
        </section>
    );
};

export default MemberCards;