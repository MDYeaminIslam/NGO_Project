import { dateToString } from "../../utils/DateHelper";

const EmployeeCard = ({ data }) => {
    const { name,
        dateOfBirth,
        educationalQualification,
        status,
        mobileNumber,
        fatherName,
        motherName,
        spouseName,
        nidNumber,
        photo,
        presentAddress,
        religion

    } = data;
    console.log(data);
    return (
        <div>
            <section className="p-4 max-w-4xl mx-auto bg-gray-100 mt-8 rounded ">
                <div className="flex flex-col md:flex-row gap-10 border-b-4 pb-4 ">
                    <div className="md:w-1/2">
                        <img className=" w-60 object-cover " src={photo} alt="" />
                    </div>
                    <div className="md:w-1/2 space-y-2 p-4 ">
                        <h1 className="md:text-4xl">{name}</h1>
                        <p className="text-lg">Phone Number: {mobileNumber}</p>
                        <p className="font-bold text-green-600">{status}</p>
                        <p className="text-lg"> NID :{nidNumber}</p>
                    </div>
                </div>
                <div className=" font-bold grid grid-cols-1 md:grid-cols-4 space-y-2 py-4">
                    <p>Education: <br /> <span className="font-normal text-base ">{educationalQualification}</span></p>
                    <p>Date of Birth: <br /> <span className="font-normal text-base ">{dateToString(dateOfBirth)}</span></p>
                    <p>Address: <br /> <span className="font-normal text-base ">{presentAddress}</span></p>
                    <p>Father Name: <br /> <span className="font-normal text-base ">{fatherName}</span></p>
                    <p>Mother Name: <br /> <span className="font-normal text-base ">{motherName}</span></p>
                    <p>religion: <br /> <span className="font-normal text-base ">{religion
                    }</span></p>
                </div>
                <div className=" flex gap-2  py-4 ">
                    <button className="btn bg-teal-700 text-white">Print</button>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-error text-white ">Delete</button>
                </div>
            </section>
        </div>
    );
};

export default EmployeeCard;