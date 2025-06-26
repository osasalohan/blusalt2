"use-client";

export default function Label({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return (
    <div className="p-1 pr-2 flex items-center">
      <div className="w-[16px] h-[16px] flex justify-center items-center">
        <div
          className="w-[6px] h-[6px] rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <span className="font-inter text-[#1C1C1C] text-[14px] leading-[20px]">
        {title}
      </span>
    </div>
  );
}
