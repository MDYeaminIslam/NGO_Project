import { useEffect, useState } from "react";
{
  /**import Liabilities from "./LiabilitiesNav/LiabilitiesNav"; */
}

import LiabilitiesNav from "./LiabilitiesNav/LiabilitiesNav";
const Liabilities = () => {
  //const { capitalFund, ngoLoanReceived, totalDeposit, employeeSecurityFund, financialBank } = data
  // console.log(capitalFund, ngoLoanReceived, totalDeposit, employeeSecurityFund, financialBank,);

  return (
    <div>
      <section>
        <LiabilitiesNav />
      </section>
    </div>
  );
};

export default Liabilities;
