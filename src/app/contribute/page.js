"use client";
import React from "react";
import Layout from "@/Components/Layout";
import FileUpload from "@/Components/FileUpload";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[20px] justify-center">
        <FileUpload />
      </div>
    </Layout>
  );
};

export default page;
