"use client";
import commnet1 from "@/public/commnet/comment1.png";
import commnet2 from "@/public/commnet/comment2.png";
import user from "@/public/commnet/user.png";
import bg from "@/public/commnet/bg.png";
import CartComment from "./CartComment";
import Image from "next/image";

const dataComment = [
  {
    id: 1,
    user: "Folasade Daini",
    content:
      "يا خويا، خدمتي مع Genitech كانت هايلة بزاف! دارولي موقع يشرف البراند تاعي، ساهل في الاستعمال ويخدم مليح مع الزبائن. نصح بيهم لأي واحد حاب يخدم حاجة احترافية!",
    img: user,
  },
  {
    id: 2,
    user: "Folasade Daini",
    content:
      "يا خويا، خدمتي مع Genitech كانت هايلة بزاف! دارولي موقع يشرف البراند تاعي، ساهل في الاستعمال ويخدم مليح مع الزبائن. نصح بيهم لأي واحد حاب يخدم حاجة احترافية!",
    img: user,
  },
  {
    id: 3,
    user: "Folasade Daini",
    content:
      "يا خويا، خدمتي مع Genitech كانت هايلة بزاف! دارولي موقع يشرف البراند تاعي، ساهل في الاستعمال ويخدم مليح مع الزبائن. نصح بيهم لأي واحد حاب يخدم حاجة احترافية!",
    img: user,
  },
  {
    id: 4,
    user: "Folasade Daini",
    content:
      "يا خويا، خدمتي مع Genitech كانت هايلة بزاف! دارولي موقع يشرف البراند تاعي، ساهل في الاستعمال ويخدم مليح مع الزبائن. نصح بيهم لأي واحد حاب يخدم حاجة احترافية!",
    img: user,
  },
  {
    id: 5,
    user: "Folasade Daini",
    content:
      "يا خويا، خدمتي مع Genitech كانت هايلة بزاف! دارولي موقع يشرف البراند تاعي، ساهل في الاستعمال ويخدم مليح مع الزبائن. نصح بيهم لأي واحد حاب يخدم حاجة احترافية!",
    img: user,
  },
  {
    id: 6,
    user: "Folasade Daini",
    content:
      "يا خويا، خدمتي مع Genitech كانت هايلة بزاف! دارولي موقع يشرف البراند تاعي، ساهل في الاستعمال ويخدم مليح مع الزبائن. نصح بيهم لأي واحد حاب يخدم حاجة احترافية!",
    img: user,
  },
];
const Comment = () => {
  return (
    <div className="screenPadding my-16 relative">
      {/* image comment 1  */}
      <div className=" absolute top-12 left-0 w-[80px] mdl:w-[120px] lg:w-[180px] xl:w-[220px] ">
        <Image src={commnet1} alt="image comment" className="w-full h-auto" />
      </div>
      <div className=" absolute bottom-12 right-0 w-[80px] mdl:w-[120px] lg:w-[180px] xl:w-[220px] ">
        <Image src={commnet2} alt="image comment" className="w-full h-auto" />
      </div>
      <div className=" hidden lg:block absolute -top-8 left-22 w-[200px] mdl:w-[450px] lg:w-[880px] xl:w-[1120px]">
        <Image src={bg} alt="image comment" className="w-full h-auto" />
      </div>
      <div className=" lg:h-[90vh] flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="flex flex-col md:flex-row lg:flex-col ">
          {dataComment.slice(0, 2).map((elm, ind) => (
            <CartComment key={ind} item={elm} />
          ))}
        </div>
        <div className=" h-full flex flex-col md:flex-row lg:flex-col lg:justify-around ">
          {dataComment.slice(2, 4).map((elm, ind) => (
            <CartComment key={ind} item={elm} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col">
          {dataComment.slice(4, 6).map((elm, ind) => (
            <CartComment key={ind} item={elm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
