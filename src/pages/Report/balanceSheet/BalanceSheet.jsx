import React from "react";

const BalanceSheetData = ({ data }) => {
  const formatAmount = (amount, name) =>
    name !== "Retained Earnings"
      ? amount.toLocaleString("en-US") + " TK"
      : `(${Math.abs(amount).toLocaleString("en-US")}) TK`;

  const maxRows = Math.max(
    data.assets.currentAssets.length,
    data.liabilitiesAndEquity.currentLiabilities.length +
      data.liabilitiesAndEquity.equity.length
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Balance Sheet</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border-collapse">
          <thead className="bg-gray-800 text-white text-center">
            <tr>
              <th className="px-4 py-2 text-left">ASSETS (Debit)</th>
              <th className="px-4 py-2 text-right">Amount</th>
              <th className="px-4 py-2 text-left">
                LIABILITIES & EQUITY (Credit)
              </th>
              <th className="px-4 py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td colSpan="2" className="px-4 py-2 font-semibold">
                Current Assets:
              </td>
              <td colSpan="2" className="px-4 py-2 font-semibold">
                Current Liabilities:
              </td>
            </tr>
            {Array.from({ length: maxRows }, (_, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-4 py-2">
                  {data.assets.currentAssets[i]?.name || ""}
                </td>
                <td className="border px-4 py-2 text-right">
                  {data.assets.currentAssets[i]
                    ? formatAmount(data.assets.currentAssets[i].amount)
                    : ""}
                </td>
                <td className="border px-4 py-2">
                  {data.liabilitiesAndEquity.currentLiabilities[i]?.name || ""}
                </td>
                <td className="border px-4 py-2 text-right">
                  {data.liabilitiesAndEquity.currentLiabilities[i]
                    ? formatAmount(
                        data.liabilitiesAndEquity.currentLiabilities[i].amount
                      )
                    : ""}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td colSpan="2" className="px-4 py-2 font-semibold">
                Fixed Assets:
              </td>
              <td colSpan="2" className="px-4 py-2 font-semibold"></td>
            </tr>
            {data.assets.fixedAssets.map((asset, index) => (
              <tr key={`fixed-asset-${index}`} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{asset.name}</td>
                <td className="border px-4 py-2 text-right">
                  {formatAmount(asset.amount, asset.name)}
                </td>
                <td className="border"></td>
                <td className="border"></td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td colSpan="2" className="px-4 py-2 font-semibold"></td>
              <td colSpan="2" className="px-4 py-2 font-semibold">
                Equity:
              </td>
            </tr>
            {data.liabilitiesAndEquity.equity.map((equity, index) => (
              <tr key={`equity-${index}`} className="hover:bg-gray-50">
                <td className="border"></td>
                <td className="border"></td>
                <td className="border px-4 py-2">{equity.name}</td>
                <td className="border px-4 py-2 text-right">
                  {formatAmount(equity.amount, equity.name)}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-200 font-bold">
              <td className="border px-4 py-2">TOTAL</td>
              <td className="border px-4 py-2 text-right">
                {formatAmount(data.assets.total)}
              </td>
              <td className="border px-4 py-2">TOTAL</td>
              <td className="border px-4 py-2 text-right">
                {formatAmount(data.liabilitiesAndEquity.total)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalanceSheetData;
