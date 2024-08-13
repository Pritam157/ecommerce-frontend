import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({info }) => {
  const nevigate=useNavigate();
  console.log(info);
  
  return (
    <div onClick={()=>nevigate(`${info.topLavelCategory}/${info.secondLavelCategory}/${info.thirdLavelCategory}`)}  className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] h-[20rem] mx-3 ">

      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={info.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 ">{info.brand}</h3>
          <p className="mt-2 text-sm text-gray-500">{info.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;