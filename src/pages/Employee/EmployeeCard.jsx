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
                    <p>Education: <br /> <span className="font-normal text-base ">{educationalQualification}</span></p>
                    <p>Date of Birth: <br /> <span className="font-normal text-base ">{dateToString(dateOfBirth)}</span></p>
                    <p>Address: <br /> <span className="font-normal text-base ">{presentAddress}</span></p>
                    <p>Father Name: <br /> <span className="font-normal text-base ">{fatherName}</span></p>
                    <p>Mother Name: <br /> <span className="font-normal text-base ">{motherName}</span></p>
                    <p>Spouse Name: <br /> <span className="font-normal text-base ">{spouseName}</span></p>
                    <p>religion: <br /> <span className="font-normal text-base ">{religion
                    }</span></p>
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