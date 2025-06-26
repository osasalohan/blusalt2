"use-client";

import Image from "next/image";

export default function Notification({
  text,
  subText,
  type,
}: {
  text: string;
  subText: string;
  type: "bug" | "user" | "sub";
}) {
  const renderImage = () => {
    switch (type) {
      case "bug":
        return <Image src="/bug.svg" alt="Bug" width={24} height={24} />;
      case "user":
        return <Image src="/new-user.svg" alt="User" width={24} height={24} />;
      case "sub":
        return (
          <Image src="/sub.svg" alt="Subscription" width={24} height={24} />
        );
    }
  };

  return (
    <div className="flex items-start gap-2 p-2">
      {renderImage()}
      <div>
        <p className="font-inter text-[#1C1C1C] text-[14px] leading-[20px] truncate text-ellipsis">
          {text}
        </p>
        <p className="font-inter text-[#1C1C1C66] text-[12px] leading-[18px]">
          {subText}
        </p>
      </div>
    </div>
  );
}
