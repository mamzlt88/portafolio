import { motion } from "motion/react";

export default function ExperienceDashboard() {
  const metrics = [
    { label: "Years of Experience", value: "10+", progress: 100, color: "#8923ee" },
    { label: "Leadership Experience", value: "4 years", progress: 40, color: "#a456f3" },
    { label: "Consultancy Experience", value: "8 years", progress: 80, color: "#e1f40b" },
  ];

  const focusAreas = [
    {
      area: "Leadership & Coaching",
      years: 4,
      maxYears: 10,
      description: "Built Product & Design capability, led 30+ professionals",
      color: "#000000"
    },
    {
      area: "Consultancy",
      years: 8,
      maxYears: 10,
      description: "Product strategy, UX, and systems design",
      color: "#000000"
    },
    {
      area: "Brand Design",
      years: 8,
      maxYears: 10,
      description: "Founder of MAZA Boutique Creativa, brand systems",
      color: "#000000"
    },
    {
      area: "Graphic Design",
      years: 4,
      maxYears: 10,
      description: "Visual storytelling and composition",
      color: "#000000"
    }
  ];

  return (
    <div className="w-full space-y-[32px]">
      {/* Top Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full">
        {/* Years of Experience */}
        <motion.div
          className="border-2 border-black rounded-[24px] p-[24px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Trim',_'Courier_New',_monospace] text-[11px] uppercase tracking-[0.5px] text-black/60">
              Years of Experience
            </p>
            <p className="font-['Poppins',_sans-serif] text-[32px] text-black">10+</p>
          </div>
        </motion.div>

        {/* Leadership Experience */}
        <motion.div
          className="border-2 border-black rounded-[24px] p-[24px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Trim',_'Courier_New',_monospace] text-[11px] uppercase tracking-[0.5px] text-black/60">
              Leadership Experience
            </p>
            <p className="font-['Poppins',_sans-serif] text-[28px] text-black">4 years</p>
          </div>
        </motion.div>

        {/* Consultancy Experience */}
        <motion.div
          className="border-2 border-black rounded-[24px] p-[24px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Trim',_'Courier_New',_monospace] text-[11px] uppercase tracking-[0.5px] text-black/60">
              Consultancy Experience
            </p>
            <p className="font-['Poppins',_sans-serif] text-[28px] text-black">8 years</p>
          </div>
        </motion.div>
      </div>

      {/* Experience by Focus Area */}
      <motion.div
        className="border-2 border-black rounded-[16px] p-[20px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="font-['Trim',_'Courier_New',_monospace] text-[14px] uppercase tracking-[0.6px] text-black mb-[20px]">
          Experience by Focus Area
        </p>

        <div className="space-y-[16px]">
          {focusAreas.map((area, index) => (
            <div key={area.area} className="space-y-[6px]">
              <div className="flex justify-between items-baseline gap-[8px]">
                <p className="font-['Poppins',_sans-serif] text-[13px] text-black">
                  {area.area}
                </p>
                <p className="font-['Trim',_'Courier_New',_monospace] text-[11px] text-black/60 whitespace-nowrap">
                  {area.years} years
                </p>
              </div>
              
              <div className="w-full h-[24px] bg-black/10 rounded-[12px] overflow-hidden relative">
                <motion.div
                  className="h-full rounded-[12px] flex items-center px-[12px]"
                  style={{ backgroundColor: area.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(area.years / area.maxYears) * 100}%` }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                >
                  <motion.span
                    className="font-['Poppins',_sans-serif] text-[10px] text-white/90 whitespace-nowrap overflow-hidden text-ellipsis"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  >
                    {area.description}
                  </motion.span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
