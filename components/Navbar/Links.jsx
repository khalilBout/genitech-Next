import React, { useState } from "react";
import LinkService from "./LinkService";
import LocalizedLink from "../Ui/LocalizedLink";

const Links = ({ items }) => {
  const [openLinkService, setOpenLinkService] = useState(false);

  return (
    <div className=" hidden mdl:block relative">
      <ul className="flex justify-center items-center gap-4 font-Title font-bold">
        <li className="">
          <a href={items[0].link}>{items[0].name}</a>
        </li>

        <li className="">
          <LocalizedLink href={items[1].link}>{items[1].name}</LocalizedLink>
        </li>

        <li className=" relative group">
          {/* <button
            className=""
            onClick={() => setOpenLinkService(!openLinkService)}
          > */}
          {items[2].name}
          <div
            // className="hidden group-hover:block absolute top-[40px] w-[120vw] left-1/2 transform -translate-x-1/2 bg-[#CEEBFD]"
            className=" hidden group-hover:block absolute top-[40px] w-[120vw] left-1/2 transform -translate-x-1/2 bg-[#CEEBFD] transition-all duration-300 delay-200 group-hover:delay-100"
          >
            <LinkService setOpenLinkService={setOpenLinkService} />
          </div>
          {/* </button> */}
        </li>

        <li className="">
          <LocalizedLink href={items[3].link}>{items[3].name}</LocalizedLink>
        </li>
        <li className="">
          <a href={items[4].link}>{items[4].name}</a>
        </li>
      </ul>

      {/* {openLinkService && (
        <div className=" absolute top-[80px] w-screen left-1/2 transform -translate-x-1/2 bg-[#CEEBFD]">
          <LinkService setOpenLinkService={setOpenLinkService} />
        </div>
      )} */}
    </div>
  );
};

export default Links;
