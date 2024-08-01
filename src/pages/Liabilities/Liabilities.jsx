import LiabilitiesNav from "./LiabilitiesNav/LiabilitiesNav";
import { Tab, TabContent } from "../../component/Tab";
import { useState } from "react";
import PayAssetLiabilities from "./PayLiabilites/PayAssetLiabilities";
import PayExpenseLiabilities from "./PayLiabilites/PayExpenseLiabilities";
const DummyContent = () => {
  return <div className="w-56 h-44"></div>;
};

export function TabsDemo() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Expense",
      value: "expense",
      content: <PayExpenseLiabilities />,
    },
    {
      title: "Assets",
      value: "assets",
      content: <PayAssetLiabilities />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] gap-y-3 [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full items-center my-4 ">
      <div className="flex items-center justify-center border-b w-full">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.value}
            label={tab.title}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      {tabs.map((tab, index) => (
        <TabContent key={tab.value} active={activeTab === index}>
          {tab.content}
        </TabContent>
      ))}
    </div>
  );
}
const Liabilities = () => {
  return (
    <div>
      <section>
        <LiabilitiesNav />
      </section>
      <section>
        <TabsDemo />
      </section>
    </div>
  );
};

export default Liabilities;
