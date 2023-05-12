"use client";
import React from "react";
import Layout from "@/Components/Layout";
import FileUpload from "@/Components/FileUpload";
import BoxHeader from "@/Components/UI/BoxHeader";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[20px] justify-center">
        <BoxHeader title="Upload your contribution">
          <FileUpload />
        </BoxHeader>
        <progress className="progress w-[1214px] hidden"></progress>
      </div>
    </Layout>
  );
};

export default page;
