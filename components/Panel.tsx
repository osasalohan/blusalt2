"use-client";

import Image from "next/image";

import Contact from "./Contact";
import Activity from "./Activity";
import PanelHeader from "./PanelHeader";
import Notification from "./Notification";

export default function Panel() {
  return (
    <div className="grow bg-[#FFF8F8] rounded-[30px] p-4 flex flex-col gap-4 h-fit">
      <div className="flex flex-col gap-1">
        <PanelHeader text="Notifications" />
        <Notification text="You fixed a bug." subText="Just now" type="bug" />
        <Notification
          text="New user registered."
          subText="59 minutes ago"
          type="user"
        />
        <Notification
          text="You fixed a bug."
          subText="12 hours ago"
          type="bug"
        />
        <Notification
          text="Andi Lane subscribed to you."
          subText="Today, 11:59 AM"
          type="sub"
        />
      </div>
      <div className="flex flex-col gap-1">
        <PanelHeader text="Activities" />
        <Activity
          text="Changed the style."
          subText="Just now"
          avatar={
            <Image
              src="/planet.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Activity
          text="Released a new version."
          subText="59 minutes ago"
          avatar={
            <Image
              src="/female.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Activity
          text="Submitted a bug."
          subText="12 hours ago"
          avatar={
            <Image
              src="/male.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Activity
          text="Modified A data in Page X."
          subText="Today, 11:59 AM"
          avatar={
            <Image
              src="/ginger.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Activity
          text="Deleted a page in Project X."
          subText="Feb 2, 2024"
          avatar={
            <Image
              src="/hijabi.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <PanelHeader text="Contacts" />
        <Contact
          text="John Doe"
          avatar={
            <Image
              src="/male.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Contact
          text="Jane Doe"
          avatar={
            <Image
              src="/female.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Contact
          text="Duncan Tall"
          avatar={
            <Image
              src="/planet.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Contact
          text="Elia Sand"
          avatar={
            <Image
              src="/hijabi.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Contact
          text="Nymeria Martell"
          avatar={
            <Image
              src="/ginger.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
        <Contact
          text="Podrick Pod"
          avatar={
            <Image
              src="/male.svg"
              alt="Avatar"
              width={24}
              height={24}
              className="rounded-full h-[24px] w-[24px]"
            />
          }
        />
      </div>
    </div>
  );
}
