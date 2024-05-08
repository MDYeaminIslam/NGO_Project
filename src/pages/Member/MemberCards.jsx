import { dateToString } from "../../utils/DateHelper";


const MemberCards = ({ data }) => {
    const { name,
        dateOfBirth,
        educationalQualification,
        status,
        mobileNumber,
        fathersName,
        mothersName,
        spouseName,
        nidNumber,
        photo,
        presentAddress,
    } = data;
    return (
        <section className="p-4 max-w-4xl mx-auto bg-gray-100 md:mt-8 rounded ">
            <div className="flex flex-col md:flex-row gap-10 border-b-4 pb-4">
                <div className="md:w-1/2">
                    <img className=" object-cover " src={photo} alt="" />
                </div>
                <div className="md:w-1/2 space-y-2 p-4 ">
                    <h1 className="md:text-4xl">{name}</h1>
                    <p className="text-lg">Phone Number: {mobileNumber}</p>
                    <p className="font-bold text-green-600">{status}</p>
                    <p className="text-lg"> NID :{nidNumber}</p>
                </div>
            </div>
            <div className=" font-bold grid grid-cols-1e md:grid-cols-4 py-4">
                <p>Education: <br /> <span className="font-normal text-base ">{educationalQualification}</span></p>
                <p>Date of Birth: <br /> <span className="font-normal text-base ">{dateToString(dateOfBirth)}</span></p>
                <p>Address: <br /> <span className="font-normal text-base ">{presentAddress}</span></p>
                <p>Father Name: <br /> <span className="font-normal text-base ">{fathersName}</span></p>
                <p>Mother Name: <br /> <span className="font-normal text-base ">{mothersName}</span></p>
                <p>Spouse Name: <br /> <span className="font-normal text-base ">{spouseName}</span></p>
            </div>
            <div className=" flex gap-2  ">
                <button className="btn bg-teal-700 text-white">Print</button>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-error text-white ">Delete</button>
            </div>
        </section>
    );
};

export default MemberCards;