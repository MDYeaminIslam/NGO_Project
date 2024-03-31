import FixedAssetNav from "./FixedAssetNav/FixedAssetNav";

const FixedAssetItem = () => {
  return (
    <div>
      <section>
        <FixedAssetNav/>
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 "> Fixed Asset Item</h1>
        <form className="my-8" >
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

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
              <label className="font-medium" htmlFor="code">Code:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="code" type="text" placeholder="enter code here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="item_name">Item Name :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="item_name" type="text" placeholder="enter item name here" />
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

export default FixedAssetItem;