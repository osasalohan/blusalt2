"use-client";

import { ReactElement } from "react";

export default function Activity({
  text,
  subText,
  avatar,
}: {
  text: string;
  subText: string;
  avatar: ReactElement;
}) {

  return (
    <div className="flex items-start gap-2 p-2">
      {avatar}
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
