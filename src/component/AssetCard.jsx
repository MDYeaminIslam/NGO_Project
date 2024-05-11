import { Link } from "react-router-dom";

export default function AssetCard({ data }) {
  const {
    type,
    productName,
    quantity,
    amount,
    depreciation,
    description,
    remarks,
    date,
  } = data;

  return (
    <div>
      <section>
        {/* <section className="max-w-5xl mx-auto" >
          <tr className="grid grid-cols-3 md:grid-cols-3 bg-gray-100   items-center w-full justify-between text-center py-3 text-xs md:text-base border-b-2">
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{amount}</td>

            <td>
              <Link to={`/someLInks`}>
                <button className="btn btn-xs md:btn btn-info text-white">view</button>
              </Link>
            </td>
          </tr>
        </section> */}
        <section>
          <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4 mt-12">
            <tr className="grid text-xs md:text-base grid-cols-4 md:grid-cols-5  items-center justify-center gap-1 text-start">
              <td>{productName}</td>
              <td>{quantity}</td>
              <td>{amount}</td>

              <td>
                <Link to={`/someLInks`}>
                  <button className="btn btn-xs md:btn btn-info text-white">view</button>
                </Link>
              </td>

            </tr>
          </div>
        </section>
      </section>
    </div>
    // <div className="grid grid-cols-1 md:grid-cols-4  max-w-5xl mx-auto bg-gray-100 border-l-4 border-teal-700 p-4 text-start   ">
    //   <p className="mt-2">{productName}</p>
    //   <p className="mt-2">{quantity}</p>
    //   <p className="mt-2">{amount}</p>
    //   <button className="btn w-fit mt-2 btn-primary">View</button>

    // </div>
  );
}
