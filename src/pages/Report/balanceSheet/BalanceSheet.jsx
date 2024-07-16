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
    <div className="p-6 rounded-lg shadow-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">ASSETS (Debit)</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">LIABILITIES & EQUITY (Credit)</th>
            <th className="px-6 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td colSpan="2" className="px-6 py-4 font-medium">
              Current Assets:
            </td>
            <td colSpan="2" className="px-6 py-4 font-medium">
              Current Liabilities:
            </td>
          </tr>
          {data.assets.currentAssets.map((asset, index) => (
            <tr key={`asset-${index}`} className="border-b">
              <td className="px-6 py-4">{asset.name}</td>
              <td className="px-6 py-4">
                {formatAmount(asset.amount, asset.name)}
              </td>
              {index < data.liabilitiesAndEquity.currentLiabilities.length && (
                <>
                  <td className="px-6 py-4">
                    {data.liabilitiesAndEquity.currentLiabilities[index].name}
                  </td>
                  <td className="px-6 py-4">
                    {formatAmount(
                      data.liabilitiesAndEquity.currentLiabilities[index]
                        .amount,
                      data.liabilitiesAndEquity.currentLiabilities[index].name
                    )}
                  </td>
                </>
              )}
            </tr>
          ))}
          <tr className="border-b">
            <td colSpan="2" className="px-6 py-4 font-medium">
              Fixed Assets:
            </td>
            <td colSpan="2" className="px-6 py-4 font-medium">
              Equity:
            </td>
          </tr>
          {data.assets.fixedAssets.map((asset, index) => (
            <tr key={`fixed-asset-${index}`} className="border-b">
              <td className="px-6 py-4">{asset.name}</td>
              <td className="px-6 py-4">
                {formatAmount(asset.amount, asset.name)}
              </td>
              {index < data.liabilitiesAndEquity.equity.length && (
                <>
                  <td className="px-6 py-4">
                    {data.liabilitiesAndEquity.equity[index].name}
                  </td>
                  <td className="px-6 py-4">
                    {formatAmount(
                      data.liabilitiesAndEquity.equity[index].amount,
                      data.liabilitiesAndEquity.equity[index].name
                    )}
                  </td>
                </>
              )}
            </tr>
          ))}
          {/* Add any remaining equity items */}
          {data.liabilitiesAndEquity.equity
            .slice(data.assets.fixedAssets.length)
            .map((item, index) => (
              <tr key={`equity-${index}`} className="border-b">
                <td colSpan="2"></td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">
                  {formatAmount(item.amount, item.name)}
                </td>
              </tr>
            ))}
          <tr className="font-bold bg-gray-100">
            <td className="px-6 py-4">TOTAL</td>
            <td className="px-6 py-4">
              {formatAmount(data.assets.total, "Total")}
            </td>
            <td className="px-6 py-4">TOTAL</td>
            <td className="px-6 py-4">
              {formatAmount(data.liabilitiesAndEquity.total, "Total")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSheetData;
