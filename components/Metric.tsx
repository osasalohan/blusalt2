"use-client";

import Image from "next/image";

export default function Metric({
  title,
  count,
  percentage,
  change,
  alt,
}: {
  title: string;
  count: number;
  percentage: number;
  change: "increase" | "decrease";
  alt?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-[16px] flex flex-col gap-2 font-inter text-[#1C1C1C] ${
        alt ? "bg-[#E5ECF6]" : "bg-[#E3F5FF]"
      }`}
    >
      <h5 className="text-[12px] leading-[18px]">{title}</h5>
      <div className="flex items-center gap-3.5">
        <span className="font-semibold text-[24px] leading-[36px]">
          {count.toLocaleString()}
        </span>
        <div className="flex items-center gap-1">
          <p className="text-[12px] leading-[18px]">
            {change === "increase" ? "+" : "-"}
            {percentage}
          </p>
          {change === "increase" ? (
            <Image src="/increase.svg" alt="change" width={16} height={16} />
          ) : (
            <Image src="/decrease.svg" alt="change" width={16} height={16} />
          )}
        </div>
      </div>
    </div>
  );
}
