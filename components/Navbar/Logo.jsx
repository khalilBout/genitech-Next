import logo from "@/public/logo.svg";
import Image from "next/image";
import LocalizedLink from "@/components/Ui/LocalizedLink";
const Logo = () => {
  return (
    <LocalizedLink href="/" className="flex justify-center items-center h-full">
      <Image src={logo} alt="" className="h-[28px] mdl:h-[45px] w-auto" />
    </LocalizedLink>
  );
};

export default Logo;
