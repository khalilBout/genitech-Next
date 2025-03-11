import React, { useState } from "react";
import LinkService from "./LinkService";
import LocalizedLink from "../Ui/LocalizedLink";

const MobileLink = ({ items }) => {
  const [openLinkService, setOpenLinkService] = useState(false);

  return (
    <div className="mdl:hidden bg-slate-200/90  flex justify-center items-center w-full h-[80vh] absolute top-20 left-0  ">
      <ul className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-2 ">
        <li className="">
          <LocalizedLink
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[0].link}
          >
            {items[0].name}
          </LocalizedLink>
        </li>

        <li className="">
          <LocalizedLink
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[1].link}
          >
            {items[1].name}
          </LocalizedLink>
        </li>

        <li className=" flex flex-col justify-center items-center">
          <button
            onClick={() => setOpenLinkService(!openLinkService)}
            className=" relative font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
          >
            {items[2].name}
          </button>
          {openLinkService && <LinkService />}
        </li>

        <li className="">
          <LocalizedLink
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[3].link}
          >
            {items[3].name}
          </LocalizedLink>
        </li>
        <li className="">
          <LocalizedLink
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[4].link}
          >
            {items[4].name}
          </LocalizedLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileLink;
