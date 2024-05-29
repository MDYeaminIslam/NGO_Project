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
        <section>
          <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4 mt-12">
            <tr className="grid text-xs md:text-base grid-cols-4 md:grid-cols-5  items-center justify-center gap-1 text-start">
              <td>{productName}</td>
              <td>{quantity}</td>
              <td>{amount}</td>

              <td>
                <Link to={`/someLInks`}>
                  <button className="btn btn-xs md:btn btn-info text-white">
                    view
                  </button>
                </Link>
              </td>
            </tr>
          </div>
        </section>
      </section>
    </div>
  );
}
