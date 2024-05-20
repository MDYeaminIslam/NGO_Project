import { dateToString } from "../../utils/DateHelper";

const EmployeeCard = ({ data }) => {
    const { name,
        fatherName,
        motherName,
        presentAddress,
        permanentAddress,
        educationalQualification,
        dateOfBirth,
        mobileNumber,
        email,
        emergencyContactNumber,
        religion,
        nidNumber,
        photo,
        status,
        spouseName,
        previousOrganization,
        presentPosition,
        guarantorDetails

    } = data;

    console.log(data);
    return (
        <div>
            <section className="p-4 max-w-5xl mx-auto bg-gray-100 md:mt-8 rounded ">
                <div className="flex flex-col md:flex-row gap-10 border-b-4 pb-4 ">
                    <div className="">
                        <img className=" w-60 object-cover " src={photo} alt="" />
                    </div>
                    <div className=" space-y-2 p-4 ">
                        <h1 className="text-lg md:text-4xl">{name}</h1>
                        <p className="md:text-lg">Phone Number: {mobileNumber}</p>
                        <p className="font-bold text-green-600">{status}</p>
                        <p className="md:text-lg"> NID :{nidNumber}</p>
                    </div>
                </div>
                <div className=" font-bold grid grid-cols-1 md:grid-cols-4 space-y-3 tracking-wide py-4">
                    <p>Father Name: <br /> <span className="font-normal text-base ">{fatherName}</span></p>
                    <p>Mother Name: <br /> <span className="font-normal text-base ">{motherName}</span></p>
                    <p>Present Address: <br /> <span className="font-normal text-base ">{presentAddress}</span></p>
                    <p>Permanent Address: <br /> <span className="font-normal text-base ">{permanentAddress}</span></p>
                    <p>Education: <br /> <span className="font-normal text-base ">{educationalQualification}</span></p>
                    <p>Date of Birth: <br /> <span className="font-normal text-base ">{dateToString(dateOfBirth)}</span></p>
                    <p>Address: <br /> <span className="font-normal text-base ">{presentAddress}</span></p>
                    <p>Email: <br /> <span className="font-normal text-base ">{email}</span></p>
                    <p>Emergency Contact: <br /> <span className="font-normal text-base ">{emergencyContactNumber}</span></p>
                    <p>religion: <br /> <span className="font-normal text-base ">{religion}</span></p>
                    <p>Spouse Name: <br /> <span className="font-normal text-base ">{spouseName}</span></p>
                    <p>Spouse Name: <br /> <span className="font-normal text-base ">{spouseName}</span></p>

                </div>

                <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
                    Previous Organization Details
                </h1>

                <div className=" font-bold grid grid-cols-1 md:grid-cols-4 space-y-3 tracking-wide py-4">
                    <p>Name: <br /> <span className="font-normal text-base ">{previousOrganization.name}</span></p>
                    <p>Address: <br /> <span className="font-normal text-base ">{previousOrganization.address}</span></p>
                    <p>Joining Date: <br /> <span className="font-normal text-base ">{dateToString(previousOrganization.joiningDate)}</span></p>
                    <p>Position: <br /> <span className="font-normal text-base ">{previousOrganization.position}</span></p>
                    <p>Salary: <br /> <span className="font-normal text-base ">{previousOrganization.salary}</span></p>
                    <p>Switch Reason: <br /> <span className="font-normal text-base ">{previousOrganization.switchReason}</span></p>

                </div>

                <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
                    Present Position
                </h1>

                <div className=" font-bold grid grid-cols-1 md:grid-cols-4 space-y-3 tracking-wide py-4">
                    <p>Designation: <br /> <span className="font-normal text-base ">{presentPosition.designation}</span></p>
                    <p>Joining Date: <br /> <span className="font-normal text-base ">{dateToString(presentPosition.dateOfJoining)}</span></p>
                    <p>Salary Amount: <br /> <span className="font-normal text-base ">{presentPosition.salaryAmount}</span></p>
                    <p>Mobile Bill: <br /> <span className="font-normal text-base ">{presentPosition.mobileBill}</span></p>
                    <p>TaDa: <br /> <span className="font-normal text-base ">{presentPosition.taDa}</span></p>
                    <p>Additional Total: <br /> <span className="font-normal text-base ">{presentPosition.additionalTotal}</span></p>
                    <p>Employee Security Fund: <br /> <span className="font-normal text-base ">{presentPosition.employeeSecurityFund}</span></p>

                </div>

                <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
                    Guarantor Details
                </h1>

                <div className=" font-bold grid grid-cols-1 md:grid-cols-4 space-y-3 tracking-wide py-4">
                    <p>Name: <br /> <span className="font-normal text-base ">{guarantorDetails.name}</span></p>
                    <p>Address: <br /> <span className="font-normal text-base ">{guarantorDetails.address}</span></p>
                    <p>Relation: <br /> <span className="font-normal text-base ">{guarantorDetails.relation}</span></p>
                    <p>Occupation: <br /> <span className="font-normal text-base ">{guarantorDetails.occupation}</span></p>
                    
                </div>

                <div className=" flex justify-end gap-2  py-4 ">
                    <button className="btn btn-xs md:btn-sm bg-teal-700 text-white">Print</button>
                    <button className="btn btn-xs md:btn-sm btn-success text-white">Edit</button>
                    <button className="btn btn-xs md:btn-sm btn-error text-white ">Delete</button>
                </div>

            </section>
        </div>
    );
};

export default EmployeeCard;