import { useState, useMemo } from "react";
import { motion } from "motion/react";

interface Skill {
  name: string;
  category: string;
  level: number;
}

interface BubblePosition {
  x: number;
  y: number;
  skill: Skill;
  size: number;
  color: string;
}

const skillsData: Skill[] = [
  { name: "Notion", category: "Tools", level: 8 },
  { name: "Figma", category: "Tools", level: 10 },
  { name: "After Effects", category: "Tools", level: 7 },
  { name: "3D Illustration", category: "Design", level: 3 },
  { name: "Spline", category: "Tools", level: 3 },
  { name: "Illustrator", category: "Tools", level: 10 },
  { name: "Photoshop", category: "Tools", level: 10 },
  { name: "Color Design System", category: "Design", level: 10 },
  { name: "Motion & macro animations", category: "Design", level: 7 },
  { name: "Negotiation Skills", category: "Soft Skills", level: 8 },
  { name: "Data Design System", category: "Design", level: 9 },
  { name: "Market design", category: "Design", level: 6 },
  { name: "User Interface Design", category: "Design", level: 10 },
  { name: "User Interface Design", category: "Design", level: 10 },
  { name: "Give Feedback & Critique", category: "Leadership", level: 10 },
  { name: "Estimate & timelines", category: "Define", level: 10 },
  { name: "Storytelling", category: "Soft Skills", level: 10 },
  { name: "Prioritization Matrixes", category: "Strategy", level: 10 },
  { name: "Written Communication", category: "Soft Skills", level: 9 },
  { name: "Resource allocation & time management", category: "Leadership", level: 10 },
  { name: "Scaling Strategy", category: "Strategy", level: 8 },
  { name: "Empathy Map", category: "Define", level: 5 },
  { name: "Visual Design Strategy", category: "Strategy", level: 10 },
  { name: "Information Architecture", category: "Define", level: 7 },
  { name: "User Personas", category: "Define", level: 10 },
  { name: "User Flows", category: "Define", level: 9 },
  { name: "Design Thinking", category: "Strategy", level: 10 },
  { name: "Leadership", category: "Soft Skills", level: 9 },
  { name: "Responsive & mobile design", category: "Design", level: 10 },
  { name: "Workshops API User Stories, DoD Sorting, Guerrilla", category: "Research", level: 5 },
  { name: "Agile Methodology", category: "Strategy", level: 10 },
  { name: "Remote work", category: "Soft Skills", level: 10 },
  { name: "High Fidelity Prototyping", category: "Design", level: 10 },
  { name: "Service Blueprint", category: "Define", level: 5 },
  { name: "Pre-sales", category: "Leadership", level: 9 },
  { name: "Project planning", category: "Leadership", level: 9 },
  { name: "Grids", category: "Design", level: 10 },
  { name: "Interaction Design", category: "Design", level: 10 },
  { name: "Service Design", category: "Strategy", level: 7 },
  { name: "Visual Benchmarking", category: "Research", level: 10 },
  { name: "Heuristics & Logic", category: "Design", level: 9 },
  { name: "User flows", category: "Define", level: 9 },
  { name: "Business Acumens", category: "Soft Skills", level: 8 },
  { name: "Value proposition", category: "Strategy", level: 8 },
  { name: "UI Kit Design", category: "Design", level: 10 },
  { name: "Onboarding Sessions", category: "Leadership", level: 9 },
  { name: "UX Writing", category: "Design", level: 8 },
  { name: "Navigation design", category: "Design", level: 10 },
  { name: "Human centered activities", category: "Strategy", level: 10 },
  { name: "Problem Statement Definition (HMW)", category: "Define", level: 10 },
  { name: "Assumption Mapping (Risk, Evidence, Importance, Interview)", category: "Research", level: 5 },
  { name: "UI Style/Guide", category: "Document", level: 10 },
  { name: "Typography", category: "Design", level: 9 },
  { name: "Presentation skills (clients + large groups)", category: "Soft Skills", level: 9 },
  { name: "Innovation as mindset", category: "Leadership", level: 8 },
  { name: "Low-fi Prototyping", category: "Ideate", level: 10 },
  { name: "Crazy 8/Diverge", category: "Ideate", level: 9 },
  { name: "Design QA", category: "Test", level: 8 },
  { name: "Design Interviewing", category: "Research", level: 8 },
  { name: "UX Design Package Documentation (Research Results, Flows, Wireframes)", category: "Document", level: 9 },
  { name: "UX Design Strategy", category: "Strategy", level: 9 },
  { name: "UI Design Strategy", category: "Strategy", level: 10 },
  { name: "Teamwork & Collaboration", category: "Soft Skills", level: 10 },
  { name: "Wireframes & low fidelity", category: "Research", level: 7 },
  { name: "Visual Comprehend board", category: "Design", level: 10 },
  { name: "Competitor Analysis", category: "Research", level: 10 },
  { name: "Requirements & User Stories", category: "Define", level: 8 },
  { name: "User Journey Functionalities (Code, Typography, Grid system)", category: "Design", level: 10 },
  { name: "Competitive Analysis", category: "Research", level: 8 },
  { name: "User journey & maps", category: "Research", level: 8 },
  { name: "Qualitative Research (Benchmarking, Stakeholder interview, Testing)", category: "Research", level: 10 },
  { name: "Data Storytelling", category: "Strategy", level: 10 },
  { name: "Prioritization and Time Management", category: "Soft Skills", level: 10 },
  { name: "Visual Ideation", category: "Soft Skills", level: 9 }
];

export default function SkillsRadar() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Category color mapping - using brand colors
  const categoryColors: Record<string, string> = {
    "Tools": "#fef3bd",        // Light yellow
    "Design": "#b4f8c8",        // Light green
    "Strategy": "#a0c4ff",      // Light blue
    "Leadership": "#ffc6ff",    // Light purple
    "Soft Skills": "#ffd6a5",   // Light orange
    "Research": "#ffadad",      // Light pink
    "Define": "#caffbf",        // Light lime
    "Document": "#e7c6ff",      // Light lavender
    "Ideate": "#fdffb6",        // Pale yellow
    "Test": "#bdb2ff"           // Light periwinkle
  };

  const filteredSkills = skillsData;

  const averageLevel = (filteredSkills.reduce((sum, skill) => sum + skill.level, 0) / filteredSkills.length).toFixed(1);

  // Calculate bubble size based on level (1-10 maps to 40-140px)
  const getBubbleSize = (level: number) => {
    return 40 + (level * 10);
  };

  // Generate bubble positions in a circular layout with collision detection
  const bubblePositions = useMemo(() => {
    const width = 1200;
    const height = 1200;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 500; // Main circle radius
    
    const positions: BubblePosition[] = [];
    
    // Check if two bubbles collide
    const checkCollision = (x1: number, y1: number, r1: number, x2: number, y2: number, r2: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = (r1 + r2) / 2 + 8; // Add 8px padding
      return distance < minDistance;
    };
    
    // Find non-colliding position
    const findPosition = (skill: Skill, angleRange: { start: number; end: number }, attempts = 100) => {
      const size = getBubbleSize(skill.level);
      const color = categoryColors[skill.category] || "#e0e0e0";
      
      for (let i = 0; i < attempts; i++) {
        const angleSpan = angleRange.end - angleRange.start;
        const randomAngle = angleRange.start + Math.random() * angleSpan;
        const angle = randomAngle * (Math.PI / 180);
        
        // Distance based on level with more variation
        const baseDistance = 0.25 + (skill.level / 10) * 0.55; // 25% to 80%
        const distanceVariation = Math.random() * 0.2; // 0 to 20% extra
        const distance = radius * Math.min(0.9, baseDistance + distanceVariation);
        
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        // Check collision with existing bubbles
        let hasCollision = false;
        for (const existing of positions) {
          if (checkCollision(x, y, size, existing.x, existing.y, existing.size)) {
            hasCollision = true;
            break;
          }
        }
        
        // Also check if too close to center
        const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        if (distanceFromCenter < 140 + size / 2) { // 140px is center circle radius
          hasCollision = true;
        }
        
        if (!hasCollision) {
          return { x, y, skill, size, color };
        }
      }
      
      // If no position found, place in spiral outward
      const fallbackAngle = (angleRange.start + angleRange.end) / 2 * (Math.PI / 180);
      const spiralDistance = radius * (0.4 + (positions.length % 20) * 0.02);
      const x = centerX + Math.cos(fallbackAngle) * spiralDistance;
      const y = centerY + Math.sin(fallbackAngle) * spiralDistance;
      
      return { x, y, skill, size, color };
    };
    
    // Group skills by category
    const skillsByCategory: Record<string, Skill[]> = {};
    filteredSkills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill);
    });
    
    // Assign angle ranges for each category
    const categoryAngles: Record<string, { start: number; end: number }> = {
      "Tools": { start: 0, end: 36 },
      "Design": { start: 36, end: 108 },
      "Strategy": { start: 108, end: 144 },
      "Leadership": { start: 144, end: 180 },
      "Soft Skills": { start: 180, end: 234 },
      "Research": { start: 234, end: 270 },
      "Define": { start: 270, end: 288 },
      "Document": { start: 288, end: 306 },
      "Ideate": { start: 306, end: 324 },
      "Test": { start: 324, end: 360 }
    };

    // Sort skills by level (larger bubbles first)
    const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);
    
    // Process each skill
    sortedSkills.forEach(skill => {
      const angleRange = categoryAngles[skill.category];
      if (!angleRange) return;
      
      const position = findPosition(skill, angleRange);
      positions.push(position);
    });

    return positions;
  }, [filteredSkills]);

  return (
    <div className="w-full">
      <motion.div
        className="w-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Bubble Chart - Circular Layout */}
        <div className="relative w-full max-w-[900px] aspect-square">
          <div className="relative w-full h-full">
            {/* Outer Circle Border */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 1200" preserveAspectRatio="xMidYMid meet">
              <circle
                cx="600"
                cy="600"
                r="500"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeDasharray="10,5"
                opacity="0.3"
              />
            </svg>

            {/* Central Title Area */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-[#f3f9ae] rounded-full w-[23%] aspect-square flex flex-col items-center justify-center border-2 border-black z-10">
              <p className="font-['Trim',_'Courier_New',_monospace] text-[1.5vw] uppercase tracking-[0.8px] text-black mb-[0.5vw]">
                Skills Matrix
              </p>
              <p className="font-['Poppins',_sans-serif] text-[0.9vw] text-black/60 px-[1.5vw]">
                {filteredSkills.length} skills
              </p>
              <div className="mt-[1vw]">
                <p className="font-['Trim',_'Courier_New',_monospace] text-[2.5vw] text-black">
                  {averageLevel}
                </p>
                <p className="font-['Trim',_'Courier_New',_monospace] text-[0.7vw] uppercase text-black/60">
                  Avg Level
                </p>
              </div>
            </div>

            {/* Bubbles */}
            {bubblePositions.map((bubble, index) => {
              const isHovered = hoveredSkill === `${bubble.skill.name}-${index}`;
              // Convert pixel positions to percentage for responsive layout
              const leftPercent = (bubble.x / 1200) * 100;
              const topPercent = (bubble.y / 1200) * 100;
              const sizePercent = (bubble.size / 1200) * 100;
              
              return (
                <motion.div
                  key={`${bubble.skill.name}-${index}`}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    width: `${sizePercent}%`,
                    height: `${sizePercent}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.01,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.15, zIndex: 50 }}
                  onMouseEnter={() => setHoveredSkill(`${bubble.skill.name}-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Bubble Circle */}
                  <div 
                    className="w-full h-full rounded-full border-2 border-black/20 flex items-center justify-center p-[0.5vw] transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? bubble.color : bubble.color + 'dd',
                      borderColor: isHovered ? '#000' : 'rgba(0,0,0,0.2)',
                      borderWidth: isHovered ? '3px' : '2px'
                    }}
                  >
                    <p 
                      className="font-['Poppins',_sans-serif] text-center leading-tight transition-all duration-300"
                      style={{
                        fontSize: bubble.size > 100 ? '0.9vw' : bubble.size > 70 ? '0.7vw' : '0.6vw',
                        fontWeight: isHovered ? 600 : 400
                      }}
                    >
                      {bubble.skill.name.length > 30 ? bubble.skill.name.substring(0, 30) + '...' : bubble.skill.name}
                    </p>
                  </div>

                  {/* Level Badge */}
                  <div 
                    className="absolute -top-[0.6vw] -right-[0.6vw] rounded-full bg-black border-2 border-white flex items-center justify-center"
                    style={{
                      width: '2vw',
                      height: '2vw',
                      minWidth: '18px',
                      minHeight: '18px'
                    }}
                  >
                    <p className="font-['Trim',_'Courier_New',_monospace] text-[0.8vw] text-white" style={{ minWidth: '8px' }}>
                      {bubble.skill.level}
                    </p>
                  </div>

                  {/* Expanded Tooltip on Hover */}
                  {isHovered && (
                    <motion.div
                      className="absolute top-full mt-[1vw] left-1/2 transform -translate-x-1/2 bg-black text-white rounded-[8px] p-[1vw] shadow-lg whitespace-nowrap z-50"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="font-['Poppins',_sans-serif] text-[0.9vw] mb-[0.3vw]">
                        {bubble.skill.name}
                      </p>
                      <p className="font-['Trim',_'Courier_New',_monospace] text-[0.7vw] text-white/70">
                        {bubble.skill.category} • Level {bubble.skill.level}/10
                      </p>
                      {/* Arrow */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-black" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
