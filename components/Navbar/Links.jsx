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
          <a href={items[1].link}>{items[1].name}</a>
        </li>

        <li className="">
          <button
            className=""
            onClick={() => setOpenLinkService(!openLinkService)}
          >
            {items[2].name}
          </button>
        </li>

        <li className="">
          <LocalizedLink href={items[3].link}>{items[3].name}</LocalizedLink>
        </li>
        <li className="">
          <a href={items[4].link}>{items[4].name}</a>
        </li>
      </ul>

      {openLinkService && (
        <div className=" absolute top-[80px] w-screen left-1/2 transform -translate-x-1/2 bg-[#CEEBFD]">
          <LinkService />
        </div>
      )}
    </div>
  );
};

export default Links;
