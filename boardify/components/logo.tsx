import Link from "next/link";
import Image from "next/image";
import logo from "@/public/photo_2025-02-16_20-49-44-Photoroom.png";
export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className=" hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={logo} alt="logo" width={70} height={70}></Image>
        <p className="text-lg text-neutral-700 pb-1">Boardify</p>
      </div>
    </Link>
  );
};
