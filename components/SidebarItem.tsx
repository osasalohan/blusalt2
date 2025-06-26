import { ReactElement } from "react";

export default function SidebarItem({
  icon,
  text,
  isActive,
}: {
  icon: ReactElement;
  text: string;
  isActive?: boolean;
}) {
  return (
    <div className="py-4 px-5 flex items-center gap-2">
      <div>{icon}</div>
      <p
        className={`font-ibm text-[14px] leading-[100%] ${
          isActive ? "font-medium text-[#161716]" : "text-[#292D32]"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
