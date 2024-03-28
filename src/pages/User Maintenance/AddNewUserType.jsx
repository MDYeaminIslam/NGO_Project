import UserMaintanaceNav from "./UserMaintananceNav/UserMaintanaceNav";

const AddNewUserType = () => {
  return (
    <div>
      <section>
        <UserMaintanaceNav/>
      </section>
      
      
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">User Type</h1>
        <form className="my-8" >
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="status">Status :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >Active</option>
                <option >Deactive</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="user_type">User Type :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >dummy 1</option>
                <option >dummy 2</option>
                <option >dummy 3</option>
              </select>
            </div>


          </section>

        </form>

        <div className="w-full flex justify-center  m-8">
          <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
        </div>
        
      </section>
    </div>
  );
};

export default AddNewUserType;