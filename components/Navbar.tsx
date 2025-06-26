"use-client";

import Image from "next/image";

import Input from "@/components/Input";

export default function Navbar() {
  return (
    <nav className="p-7.5 pb-5 border-b border-[#F0ECEC] flex justify-between items-center sticky top-0 bg-white z-10">
      <h1 className="font-inter font-medium text-black text-[22px] leading-[100%]">
        Dashboard
      </h1>
      <div className="flex items-center gap-5">
        <Input />
        <div className="flex items-center gap-2">
          <Image
            src="/brightness.svg"
            alt="Brightness"
            width={28}
            height={28}
          />
          <Image src="/rewind.svg" alt="Rewind" width={28} height={28} />
          <Image src="/bell.svg" alt="Notifications" width={28} height={28} />
          <Image src="/window.svg" alt="Orientation" width={28} height={28} />
        </div>
      </div>
    </nav>
  );
}
