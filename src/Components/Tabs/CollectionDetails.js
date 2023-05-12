import React from "react";

const CollectionDetails = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[467px] h-[517px] py-5 border-r-2 border-black">
        <p className="w-[379px] mt-[57px] text-[#262626] text-[16px] ">
          VB’s DAO aims to honour the creater of Etherum by collecting images of
          him to create a fine tuned AI model. Let’s create the largest
          collection of images for him.
        </p>
        <p className="w-[354px] text-[#262626] text-[16px] mt-[62px] ">
          Rules for contribution :
        </p>
        <ul class="w-[354px] list-disc mx-[10px] ">
          <li>Images that are not of Vitalik will be discarded</li>
          <li>Pixelated images will be discarded</li>
          <li>Images of Vitalik’s face not seen will be discarded</li>
          <li>Images with text on face will be discarded</li>
          <li>
            Images should represent the face of Vitalik in different angles
          </li>
        </ul>
      </div>
      <div className="py-5 px-[40px]">
        <p className="text-[20px] mb-[10px]">Reference Images</p>
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-row gap-[26px]">
            <img
              className="w-[302px] h-[172px]"
              src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/Who_Is_Vitalik_Buterin.jpg"
              alt=""
            />
            <img
              className="w-[172px] h-[172px]"
              src="https://media.licdn.com/dms/image/C5103AQEzvhMhHDWFgQ/profile-displayphoto-shrink_800_800/0/1516475236139?e=2147483647&v=beta&t=IyMYWLLAlpOWnsWEFQ0_Bjo6K4k5vuDqhTMVxXF-aIA"
              alt=""
            />
          </div>
          <div className="flex flex-row gap-[26px]">
            <img
              className="w-[302px] h-[172px]"
              src="https://i.gadgets360cdn.com/large/Vitalik_buterin_youtube_techcrunch_large_1659340714254.jpg"
              alt=""
            />
            <img
              className="w-[172px] h-[172px]"
              src="https://api.time.com/wp-content/uploads/2020/09/vitalik-buterin-time-100-2021.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
