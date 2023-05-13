import Link from "next/link";

const DAOheader = () => {
  return (
    <div className="flex flex-row gap-[90px] bg-[#262626] rounded-[10px] p-[42px] h-[282px] w-[1214px]">
      <div>
        <img src="/dao-header.svg" alt="" />
      </div>
      <div>
        <div className="flex flex-col gap-[50px]">
          <p className="text-[#f5f5f5] text-[24px] w-[755px]">
            VB’s DAO aims to honour the creater of Etherum by collecting images
            of him to create a fine tuned AI model
          </p>
          <div className="flex flex-row gap-[10px]">
            <Link href="/contribute">
              <button className="bg-[#FEC7C7] w-[366px] text-[24px] h-[60px] text-[#262626] rounded-[10px] px-[20px] py-[10px] mt-[20px]">
                Make your contribution
              </button>
            </Link>
            <button className="bg-[#f5f5f5] w-[143px] text-[24px] h-[60px] text-[#262626] rounded-[10px] px-[20px] py-[10px] mt-[20px]">
              Quit
            </button>
            <i class="fa-regular fa-circle-chevron-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAOheader;
