import React, { useState, useRef } from "react";
import LinkService from "./LinkService";
import LocalizedLink from "../Ui/LocalizedLink";

const Links = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setIsHovered(false), 500); // تأخير 500ms قبل الإخفاء
  };

  return (
    <div className="hidden mdl:block relative">
      <ul className="flex justify-center items-center gap-4 font-Title font-bold">
        <li>
          <a href={items[0].link}>{items[0].name}</a>
        </li>
        <li>
          <LocalizedLink href={items[1].link}>{items[1].name}</LocalizedLink>
        </li>

        <li
          className="relative group cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items[2].name}
          {isHovered && (
            <div className="absolute top-[35px] w-[120vw] left-1/2 transform -translate-x-1/2 bg-[#CEEBFD] transition-all duration-300">
              <LinkService />
            </div>
          )}
        </li>
        <li>
          <LocalizedLink href={items[3].link}>{items[3].name}</LocalizedLink>
        </li>
        <li>
          <a href={items[4].link}>{items[4].name}</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
