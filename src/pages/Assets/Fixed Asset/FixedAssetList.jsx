import FixedAssetNav from "./FixedAssetNav/FixedAssetNav";

const FixedAssetList = () => {
  return (
    <div>
      <section>
        <FixedAssetNav/>
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Fixed Asset List</h1>
        <form className="my-8" >
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="year">Year :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >2000</option>
                <option >2010</option>
                <option >2020</option>
                <option >2030</option>
              </select>
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

            <div className=" flex w-fit  mt-6">
              <button className="bg-blue-500 hover:bg-blue-700 px-10 py-2 rounded font-medium     text-white" >Search</button>
            </div>
            <div className=" flex w-fit  mt-6">
              <button className="bg-red-500 hover:bg-red-700 px-10 py-2 rounded font-medium     text-white" >Clear Search</button>
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

export default FixedAssetList;