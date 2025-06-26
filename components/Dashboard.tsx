"use-client";

import Label from "./Label";
import Metric from "./Metric";
import Traffic from "./Traffic";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import DonutGraph from "./DonutGraph";

export default function Dashboard() {
  return (
    <div className="xl:w-[75%] flex flex-col gap-4 font-inter text-[#1C1C1C]">
      <div className="grid xl:grid-cols-4 gap-3.5">
        <Metric
          title="Requests"
          count={7654}
          change="increase"
          percentage={11.02}
        />
        <Metric
          title="KYC"
          count={3456}
          change="decrease"
          percentage={0.02}
          alt
        />
        <Metric
          title="Tasks"
          count={154}
          change="increase"
          percentage={10.05}
        />
        <Metric
          title="Customers"
          count={2654}
          change="increase"
          percentage={6.07}
          alt
        />
      </div>
      <div className="flex flex-col xl:flex-row gap-3.5">
        <div className="xl:w-[76%] bg-[#F7F9FB] rounded-[16px] p-6 flex flex-col gap-4 text-[#1C1C1C]">
          <div className="flex flex-col xl:flex-row xl:items-center gap-4">
            <h5 className="font-semibold text-[14px] leading-[20px]">
              Total Users
            </h5>
            <h5 className="text-[#1C1C1C66] text-[14px] leading-[20px]">
              Total Projects
            </h5>
            <h5 className="text-[#1C1C1C66] text-[14px] leading-[20px]">
              Operating Status
            </h5>
            <span className="text-[#1C1C1C33] text-[14px] leading-[20px]">
              |
            </span>
            <Label title="This Year" color="#1C1C1C" />
            <Label title="Last Year" color="#A8C5DA" />
          </div>
          <LineGraph />
        </div>
        <div className="xl:grow bg-[#F7F9FB] rounded-[16px] p-6 flex flex-col gap-4">
          <h5 className="font-semibold text-[14px] leading-[20px]">
            Traffic by Website
          </h5>
          <div className="py-2 flex flex-col gap-6">
            <Traffic site="Google" scale={7} />
            <Traffic site="YouTube" scale={4} />
            <Traffic site="Instagram" scale={6} />
            <Traffic site="Pinterest" scale={3} />
            <Traffic site="Facebook" scale={8} />
            <Traffic site="Twitter" scale={5} />
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 gap-3.5">
        <div className="bg-[#F7F9FB] rounded-[16px] p-6 flex flex-col gap-4">
          <h5 className="font-semibold text-[14px] leading-[20px]">
            Reports Generated
          </h5>
          <BarGraph
            data={[
              { name: "Linux", value: 13000 },
              { name: "Mac", value: 24000 },
              { name: "iOS", value: 18000 },
              { name: "Windows", value: 30000 },
              { name: "Android", value: 10000 },
              { name: "Other", value: 22000 },
            ]}
            barColors={[
              "#95A4FC",
              "#BAEDBD",
              "#1C1C1C",
              "#B1E3FF",
              "#A8C5DA",
              "#A1E3CB",
            ]}
            barGap={14}
          />
        </div>
        <div className="bg-[#F7F9FB] rounded-[16px] p-6 flex flex-col gap-4">
          <h5 className="font-semibold text-[14px] leading-[20px]">
            Traffic by Location
          </h5>
          <div className="grid xl:grid-cols-2 xl:px-5 xl:gap-10 gap-3.5">
            <DonutGraph />
            <div className="flex flex-col justify-center gap-3 font-inter text-[#1C1C1C] text-[12px] leading-[18px]">
              <div className="flex justify-between items-center">
                <Label title="Nigeria" color="#1C1C1C" />
                <span>38.6%</span>
              </div>
              <div className="flex justify-between items-center">
                <Label title="Ghana" color="#A1E3CB" />
                <span>22.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <Label title="Kenya" color="#B1E3FF" />
                <span>30.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <Label title="Benin Republic" color="#A8C5DA" />
                <span>8.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F9FB] rounded-[16px] p-6 flex flex-col gap-4">
        <h5 className="font-semibold text-[14px] leading-[20px]">
          Marketing & SEO
        </h5>
        <BarGraph
          data={[
            { name: "Jan", value: 13000 },
            { name: "Feb", value: 24000 },
            { name: "Mar", value: 18000 },
            { name: "Apr", value: 30000 },
            { name: "May", value: 10000 },
            { name: "Jun", value: 22000 },
            { name: "Jul", value: 13000 },
            { name: "Aug", value: 24000 },
            { name: "Sep", value: 18000 },
            { name: "Oct", value: 30000 },
            { name: "Nov", value: 10000 },
            { name: "Dec", value: 22000 },
          ]}
          barColors={[
            "#95A4FC",
            "#BAEDBD",
            "#1C1C1C",
            "#B1E3FF",
            "#A8C5DA",
            "#A1E3CB",
            "#95A4FC",
            "#BAEDBD",
            "#1C1C1C",
            "#B1E3FF",
            "#A8C5DA",
            "#A1E3CB",
          ]}
          barGap={18}
        />
      </div>
    </div>
  );
}
