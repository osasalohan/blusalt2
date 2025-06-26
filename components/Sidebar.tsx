"use-client";

import Image from "next/image";

import SidebarItem from "@/components/SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-[14.125rem] xl:flex flex-col justify-between py-7.5 px-5 border-r border-[#F0ECEC] fixed left-0 top-0 h-screen hidden">
      <div>
        <div className="py-1 px-4 mb-7.5">
          <Image src="/logo.svg" alt="Logo" width={116} height={25} />
        </div>
        <div className="flex flex-col gap-1">
          <SidebarItem
            icon={
              <Image
                src="/dashboard.svg"
                alt="Dashboard"
                width={16}
                height={16}
              />
            }
            text="Dashboard"
            isActive
          />
          <SidebarItem
            icon={
              <Image src="/timer.svg" alt="Requests" width={16} height={16} />
            }
            text="Requests"
          />
          <hr className="h-0 w-full border-b border-[#F0ECEC]" />
          <SidebarItem
            icon={<Image src="/kyc.svg" alt="KYC" width={16} height={16} />}
            text="KYC"
          />
          <SidebarItem
            icon={
              <Image src="/reports.svg" alt="Reports" width={16} height={16} />
            }
            text="Reports"
          />
          <SidebarItem
            icon={<Image src="/task.svg" alt="Tasks" width={16} height={16} />}
            text="Tasks"
          />
          <hr className="h-0 w-full border-b border-[#F0ECEC]" />
          <SidebarItem
            icon={
              <Image src="/link.svg" alt="Audit Trail" width={16} height={16} />
            }
            text="Audit Trail"
          />
          <SidebarItem
            icon={
              <Image src="/user.svg" alt="Customers" width={16} height={16} />
            }
            text="Customers"
          />
          <hr className="h-0 w-full border-b border-[#F0ECEC]" />
          <SidebarItem
            icon={
              <Image
                src="/security-user.svg"
                alt="Users"
                width={16}
                height={16}
              />
            }
            text="Users"
          />
          <SidebarItem
            icon={
              <Image
                src="/settings.svg"
                alt="Settings"
                width={16}
                height={16}
              />
            }
            text="Settings"
          />
          <SidebarItem
            icon={
              <Image
                src="/security.svg"
                alt="Administration"
                width={16}
                height={16}
              />
            }
            text="Administration"
          />
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center gap-2">
          <Image src="/avatar.svg" alt="Avatar" width={24} height={24} />
          <p className="font-inter text-[#1C1C1C] text-[14px] leading-[20px] ">
            ByeWind
          </p>
        </div>
      </div>
    </aside>
  );
}
