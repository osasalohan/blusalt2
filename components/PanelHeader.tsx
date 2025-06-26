"use-client";

export default function PanelHeader({ text }: { text: string }) {
  return (
    <p className="py-2 px-1 font-inter text-[#1C1C1C] text-[14px] leading-[20px]">
      {text}
    </p>
  );
}
