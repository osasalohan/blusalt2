"use-client";

export default function Traffic({
  site,
  scale,
}: {
  site: string;
  scale: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <p className="font-inter text-[#1C1C1C] text-[12px] leading-[18px] w-[58px]">
        {site}
      </p>
      <div className={`grow flex gap-0.5 h-[2.33px]`}>
        {[...Array(scale).keys()].map((i) => {
          let bg = "";
          if (i === 0) bg = "bg-[#1C1C1C]";
          if (i === 1) bg = "bg-[#1C1C1C66]";
          if (i === 2) bg = "bg-[#1C1C1C1A]";

          return (
            <div key={i} className={`flex-1 h-full rounded-[80px] ${bg}`} />
          );
        })}
      </div>
    </div>
  );
}
