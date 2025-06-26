"use-client";

import { ReactElement } from "react";

export default function Contact({
  text,
  avatar,
}: {
  text: string;
  avatar: ReactElement;
}) {
  return (
    <div className="flex items-center gap-2 p-2">
      {avatar}
      <p className="font-inter text-[#1C1C1C] text-[14px] leading-[20px] truncate text-ellipsis">
        {text}
      </p>
    </div>
  );
}
