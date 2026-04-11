import React from "react";
import { motion } from "motion/react";
import experienceData from "../../data/experience.json";

function CompanyTag({ name }: { name: string }) {
  return (
    <div className="bg-[#6721ae] box-border content-stretch flex gap-[10px] items-center justify-center px-[21.6px] py-[7.2px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#6721ae] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-nowrap text-white tracking-[0.29px] uppercase whitespace-pre">{name}</p>
    </div>
  );
}

function YearPill({ year, isActive = false }: { year: string; isActive?: boolean }) {
  return (
    <div className={`${isActive ? 'bg-black' : 'bg-[#f3f9ae]'} box-border content-stretch flex gap-[10px] h-[31.5px] items-center justify-center px-[14.4px] py-[7.2px] relative rounded-[100px] w-[70.2px]`}>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className={`font-['Trim',_'Courier_New',_monospace] leading-[1.2] not-italic relative shrink-0 text-[14.4px] ${isActive ? 'text-white' : 'text-black'} text-nowrap tracking-[0.29px] uppercase whitespace-pre`}>{year}</p>
    </div>
  );
}

function RotatedYearPill({ year, isActive = false }: { year: string; isActive?: boolean }) {
  return (
    <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "70.2", "--transform-inner-height": "31.5" } as React.CSSProperties}>
      <div className="flex-none rotate-[270deg]">
        <YearPill year={year} isActive={isActive} />
      </div>
    </div>
  );
}

interface YearGroup {
  years: string[];
  activeYears: string[];
}

function YearGroupPills({ group }: { group: YearGroup }) {
  const height = group.years.length * 39.5; // 31.5px pill + 8px gap per pill
  return (
    <div
      className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]"
      style={{ "--transform-inner-width": "31.5", "--transform-inner-height": String(height) } as React.CSSProperties}
    >
      <div className="flex-none rotate-[90deg]">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative">
          {group.years.map((year) => (
            <RotatedYearPill key={year} year={year} isActive={group.activeYears.includes(year)} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Role {
  title: string;
  companies: string[];
  description: string;
  yearGroups: YearGroup[];
}

function ExperienceRow({ role }: { role: Role }) {
  return (
    <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      {/* Heading */}
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
        <p className="font-['DM_Mono',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] uppercase w-[min-content]">{role.title}</p>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 flex-wrap">
          {role.companies.map((company) => (
            <CompanyTag key={company} name={company} />
          ))}
        </div>
      </div>
      {/* Body */}
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
        <p className="font-['Poppins',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.18px] w-[min-content]">{role.description}</p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          {role.yearGroups.map((group, i) => (
            <YearGroupPills key={i} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <motion.div
      className="size-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center px-[124px] py-[76px] relative w-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
              <p className="font-['DM_Mono',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[24px] text-black tracking-[0.48px] uppercase w-full">My experience</p>
              {/* Intro paragraph */}
              <div className="box-border content-stretch flex gap-[80px] items-start justify-center px-0 py-[24px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black tracking-[0.24px] w-full">{experienceData.intro}</p>
                </div>
              </div>
              {/* Role rows */}
              {experienceData.roles.map((role) => (
                <ExperienceRow key={role.title} role={role} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
