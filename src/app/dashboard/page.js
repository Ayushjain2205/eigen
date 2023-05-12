import React from "react";
import Layout from "@/Components/Layout";
import TabsHolder from "@/Components/Tabs";

const page = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <TabsHolder />
      </div>
    </Layout>
  );
};

export default page;
