import React from "react";
import Layout from "@/Components/Layout";
import ExploreCard from "@/Components/UI/ExploreCard";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-between items-center mt-[40px] gap-[20px] justify-center mb-[60px]">
        <span className="text-[32px] font-medium mt-[30px]">
          Hello, which tribe do you want to join?
        </span>
        <div className="carousel w-1/2">
          <div
            id="slide1"
            className="carousel-item relative w-full justify-center"
          >
            <ExploreCard />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full justify-center"
          >
            <ExploreCard />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full justify-center"
          >
            <ExploreCard />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
