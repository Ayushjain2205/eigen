import React from "react";
import Layout from "@/Components/Layout";
import TabsHolder from "@/Components/Tabs";
import DAOheader from "@/Components/DAOheader";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[20px] justify-center">
        <DAOheader />
        <TabsHolder />
      </div>
    </Layout>
  );
};

export default page;
