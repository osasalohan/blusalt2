"use-client";

import Image from "next/image";

export default function Input() {
  return (
    <div className="relative hidden xl:block">
      <input
        className="bg-[#1C1C1C0D] rounded-[8px] font-inter placeholder:text-[#1C1C1C33] text-[14px] leading-[20px] p-1 pl-7"
        placeholder="Search"
      />
      <Image
        src="/search.svg"
        alt="Search"
        className="absolute top-1.5 left-2"
        width={16}
        height={16}
      />
      <Image
        src="/input-icon.svg"
        alt="Input"
        className="absolute top-1 right-2"
        width={20}
        height={20}
      />
    </div>
  );
}
