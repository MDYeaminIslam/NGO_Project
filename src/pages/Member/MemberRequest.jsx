import MemberNav from "./MemberNav/MemberNav";

const MemberRequest = () => {
  return (
    <div>
      <section>
        <MemberNav />
      </section>
     
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 mb-10">Member Request</h1>

        <p className="mb-3">You have 4 Member request pending!!</p>
        
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border overflow-hidden border-black">


                <table className="min-w-full divide-y divide-gray-200">

                  <thead className="bg-slate-800">

                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-white uppercase">Name</th>
                      
                      <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-white uppercase">ID</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-white uppercase">Action</th>
                    </tr>

                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-black">Dummy text</td>
                      <td className="px-6 py-4 text-sm text-black">9847562</td>
                      <td className="px-6 py-4 text-center text-sm font-medium">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-green-500 hover:text-green-700 pr-4">Approved </button>
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-red-500 hover:text-red-700">Rejected</button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-black">Dummy text</td>
                      <td className="px-6 py-4 text-sm text-black">9847562</td>
                      <td className="px-6 py-4 text-center text-sm font-medium">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-green-500 hover:text-green-700 pr-4">Approved </button>
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-red-500 hover:text-red-700">Rejected</button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-black">Dummy text</td>
                      <td className="px-6 py-4 text-sm text-black">9847562</td>
                      <td className="px-6 py-4 text-center text-sm font-medium">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-green-500 hover:text-green-700 pr-4">Approved </button>
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-red-500 hover:text-red-700">Rejected</button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-black">Dummy text</td>
                      <td className="px-6 py-4 text-sm text-black">9847562</td>
                      <td className="px-6 py-4 text-center text-sm font-medium">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-green-500 hover:text-green-700 pr-4">Approved </button>
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-red-500 hover:text-red-700">Rejected</button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
       </div>

      </section>
    </div>
  );
};

export default MemberRequest;