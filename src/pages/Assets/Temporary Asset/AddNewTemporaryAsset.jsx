import TemporaryAssetNav from "./TeamporaryAssetNav/TemporaryAssetNav";

const AddNewTemporaryAsset = () => {
  return (
    <div>
      <section>
        <TemporaryAssetNav />
      </section>
      
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Add New Temporary Asset</h1>
        <form className="my-8" >
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="year">Year:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="year" type="text" placeholder="enter year here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="branch">Branch :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >dummy 1</option>
                <option >dummy 2</option>
                <option >dummy 3</option>
                <option >dummy 4</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="type">Type :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >dummy 1</option>
                <option >dummy 2</option>
                <option >dummy 3</option>
                <option >dummy 4</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="item">Item :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >dummy 1</option>
                <option >dummy 2</option>
                <option >dummy 3</option>
                <option >dummy 4</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="product_code">Product Code:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="product_code" type="text" placeholder="enter product code here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="permanent_address"> Remarks :</label>
              <textarea className="input input-bordered hover:border-teal-500 " id=" permanent_address" cols="10" rows="1"></textarea>
            </div>

          </section>

        </form>

        <div className="w-fit mx-auto  m-8">
          <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
        </div>
      </section>
    </div>
  );
};

export default AddNewTemporaryAsset;