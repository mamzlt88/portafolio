import{r as c,j as e,R as x,A as v,m as h}from"./index-s8lhMMPP.js";import{p as k,M}from"./MarkdownCaseStudy-BPjfezhJ.js";function S({words:t}){return e.jsx("h1",{style:{fontFamily:"'Poltawski Nowy', 'Poppins', serif",fontSize:"clamp(2rem, 6vw, 4.5rem)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.03em",color:"#fff",margin:0},children:t.map((a,o)=>{const i=a.style==="italic"||a.style==="semibold-italic",r=a.style==="bold"||a.style==="semibold-italic";return e.jsx("span",{style:{fontStyle:i?"italic":"normal",fontWeight:r?700:400,marginRight:"0.22em"},children:a.text},o)})})}function j({rawMarkdown:t,resolveImage:a,resolveVideo:o,onClose:i}){const r=c.useMemo(()=>k(t),[t]);c.useEffect(()=>{const n=s=>{s.key==="Escape"&&i()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[i]);const m=c.useMemo(()=>r.gallery.map(n=>({...n,url:n.type==="video"?o?.(n.file):a?.(n.file)})).filter(n=>!!n.url),[r.gallery,a,o]),l=m.find(n=>n.type!=="video"),p=m.filter(n=>n!==l&&n.type!=="video"),u=m.filter(n=>n.type==="video"),y=n=>p[Math.floor(n/2)];return e.jsxs("div",{style:{position:"fixed",inset:0,overflowY:"auto",overflowX:"hidden",background:"#0d1827",color:"#dde3ee",zIndex:100,scrollBehavior:"smooth"},children:[e.jsxs("div",{style:{position:"sticky",top:0,zIndex:20,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px clamp(20px, 5vw, 80px)",background:"rgba(13, 24, 39, 0.85)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[e.jsxs("button",{onClick:i,style:{display:"flex",alignItems:"center",gap:"8px",padding:"7px 16px",background:"rgba(255,255,255,0.08)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"100px",cursor:"pointer",color:"#fff",fontFamily:"'DM Mono', monospace",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.06em"},children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"M12 19l-7-7 7-7"})]}),"Close"]}),e.jsx("span",{style:{fontFamily:"'DM Mono', monospace",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.10em",color:"rgba(255,255,255,0.35)"},children:"Case Study"})]}),e.jsxs("div",{style:{padding:"clamp(60px, 10vw, 120px) clamp(20px, 5vw, 80px) 0",maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("p",{style:{fontFamily:"'DM Mono', monospace",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.14em",color:"#a456f3",marginBottom:"24px"},children:["Case Study · ",r.metadata.find(n=>n.label==="Timeline")?.value??""]}),e.jsx(S,{words:r.title}),l&&e.jsx("img",{src:l.url,alt:l.alt,style:{width:"100%",borderRadius:"16px",marginTop:"clamp(40px, 6vw, 80px)",display:"block",objectFit:"cover"}})]}),e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"24px 40px",borderTop:"1px solid rgba(255,255,255,0.08)",borderBottom:"1px solid rgba(255,255,255,0.08)",marginTop:"clamp(40px, 6vw, 72px)"},children:r.metadata.map(n=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"'DM Mono', monospace",fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,0.38)",margin:"0 0 8px"},children:n.label}),e.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"14px",color:"#dde3ee",margin:0,lineHeight:1.5},children:n.value})]},n.label))}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(20px, 5vw, 80px) clamp(80px, 10vw, 140px)"},children:[r.sections.map((n,s)=>{const d=y(s),w=d&&s%2===1;return e.jsxs(x.Fragment,{children:[e.jsxs("div",{style:{paddingTop:"clamp(48px, 7vw, 80px)",display:"grid",gridTemplateColumns:s===0?"1fr":"minmax(0,1fr) minmax(0,1fr)",gap:"clamp(32px, 5vw, 64px)",alignItems:"start"},children:[e.jsxs("div",{children:[n.heading&&e.jsx("h2",{style:{fontFamily:"'DM Mono', monospace",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.12em",color:"#a456f3",marginBottom:"20px",marginTop:0},children:n.heading}),e.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"clamp(14px, 1.4vw, 16px)",lineHeight:1.75,color:"#c8d0e0"},dangerouslySetInnerHTML:{__html:n.htmlContent}})]}),s>0&&d&&e.jsx("img",{src:d.url,alt:d.alt,style:{width:"100%",borderRadius:"12px",display:"block",objectFit:"contain"}})]}),s>0&&!w&&p[s]&&e.jsx("img",{src:p[s].url,alt:p[s].alt,style:{width:"100%",borderRadius:"16px",marginTop:"clamp(32px, 5vw, 56px)",display:"block",objectFit:"contain"}})]},s)}),u.length>0&&e.jsxs("div",{style:{marginTop:"clamp(48px, 7vw, 80px)"},children:[e.jsx("h2",{style:{fontFamily:"'DM Mono', monospace",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.12em",color:"#a456f3",marginBottom:"32px"},children:"In Motion"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"16px"},children:u.map(n=>e.jsx("video",{src:n.url,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:"100%",borderRadius:"12px",display:"block"}},n.file))})]})]})]})}const g=`---
slug: "white-label"
title:
  - text: "White"
    style: "bold"
  - text: "Label"
    style: "italic"
  - text: "Payment"
    style: "normal"
  - text: "Gateway"
    style: "semibold-italic"
  - text: "Modernization"
    style: "italic"
category: "experience"
colorScheme: "dark"

metadata:
  - label: "Role"
    value: "Lead Product Designer / Consultant"
  - label: "Timeline"
    value: "3-Year Partnership"
  - label: "Team"
    value: "Product Manager, Developers, Designers, QA"
  - label: "Tools Methods"
    value: "Figma, Design Systems, Agile, Lean UX, Accessibility Review, Internal Interviews, HSL Color System"

gallery:
  - file: "01-hero-payet-across-devices.webp"
    alt: "Hero — Payet across devices"
  - file: "Payet-placement.webp"
    alt: "Payet platform overview"
  - file: "Pacement 2.webp"
    alt: "Payet — payments made simple"
  - file: "1.webp"
    alt: "Overview 1"
  - file: "2.webp"
    alt: "Overview 2"
  - file: "3.webp"
    alt: "Overview 3"
  - file: "4.webp"
    alt: "Overview 4"
  - file: "Dashboard.webp"
    alt: "Dashboard"
  - file: "Admin.webp"
    alt: "Admin portal"
  - file: "Landing components.webp"
    alt: "Landing components"
  - file: "Styleguide.webp"
    alt: "Styleguide"
  - file: "buttons.webp"
    alt: "Buttons"
  - file: "components.webp"
    alt: "Components"
  - file: "shapes.webp"
    alt: "Shapes"
  - file: "MErchant01.webp"
    alt: "Merchant portal 01"
  - file: "MErchant02.webp"
    alt: "Merchant portal 02"
  - file: "MErchant03.webp"
    alt: "Merchant portal 03"
  - file: "MErchant04.webp"
    alt: "Merchant portal 04"
  - file: "MErchant05.webp"
    alt: "Merchant portal 05"
  - file: "MErchant06.webp"
    alt: "Merchant portal 06"
  - file: "cust01.webp"
    alt: "Customer portal 01"
  - file: "cust02.webp"
    alt: "Customer portal 02"
  - file: "cust03.webp"
    alt: "Customer portal 03"
  - file: "cust04.webp"
    alt: "Customer portal 04"
  - file: "screenshot-preview.webp"
    alt: "Screenshot"
  - file: "Audit-web.mp4"
    alt: "Audit walkthrough"
    type: "video"
  - file: "Color scheme.mp4"
    alt: "Color scheme demo"
    type: "video"
  - file: "UI color.mp4"
    alt: "UI color demo"
    type: "video"
---

# Executive Summary

Payet is a white-label payment gateway that enables financial, automotive, and healthcare institutions to manage recurring and one-time payments under their own brand.

Over time, the platform became powerful but fragmented. Each portal looked and behaved differently, creating friction for users and inefficiencies for the business.

To address this, a **custom design system** and phased redesign were introduced to unify the experience and support long-term growth.

By simplifying user flows and improving scalability, the platform became easier to use, faster to evolve, and more reliable. These improvements helped support business growth, with annual payment volume more than doubling from **$7.45B in 2018 to $15.2B in 2020**.

**Results**

- +30% merchant engagement
- +4% recurring customer transactions
- −40% design-to-development time
- Unified experience across all portals

# Discovery

Payet operates through three main environments:

- **Merchant Portal** — Businesses manage accounts, clients, and payments
- **End-Customer Portal** — Users make and schedule payments
- **Admin Portal** — Internal system for configuring merchants and branding

Each environment worked, but they did not feel connected. Navigation patterns changed between portals, visual styles were inconsistent, and similar features were rebuilt multiple times.

The discovery made one thing clear: the product did not need just a redesign. **It needed a system.**

# Core Challenge

The lack of consistency created real problems:

- Users struggled with **unclear and inconsistent interfaces**
- Developers **duplicated work** across products
- New merchants required **manual customization**
- Updates were **slow and difficult** to maintain

At the same time, the business was growing. The platform needed to scale without breaking usability or increasing complexity.

The challenge was to **modernize the experience** while keeping the system stable and adaptable.

# Strategy

The solution focused on building a strong foundation instead of redesigning isolated screens.

A **custom design system** was introduced to unify all portals under a shared structure, combined with a **phased redesign** to improve the product gradually without disrupting ongoing work.

The goal was to make the platform easier to use, faster to build, and scalable across more than **180 brands**.

This was not a one-time redesign. It was a shift toward a more structured and collaborative way of building products.

# Research & Insights

Because of compliance restrictions, direct user interviews were not possible. Insights came from sales, support, and development teams who worked closely with users.

Three key personas guided the work:

- **Erin — Developer** — Needs clear documentation and reusable components to reduce rework and improve delivery speed
- **Taylor — Merchant Manager** — Needs simple setup, automation, and visibility into payment activity
- **Sam — End-Customer** — Needs a clear, flexible, and trustworthy payment experience

These personas helped ensure that design decisions were grounded in **real needs, not assumptions**.

# Planning the Redesign

A full UI audit revealed inconsistencies in layout, typography, and components across the platform.

To align teams, a **Design Principles Workshop** was held with stakeholders from design, development, and business:

- **Clarity** — Legible text, clear icons, minimal visual noise
- **Flexibility** — Adapts to different brands, devices, and contexts
- **Intuitive** — Users complete tasks without stopping to think
- **Reusable** — Consistent patterns that reduce effort and learning curves
- **Accessible** — Inclusive and usable for all, following WCAG AA standards

These principles guided every decision moving forward.

# Building the Foundation

The team evaluated existing design libraries but found them too rigid for a white-label platform. A **custom design system** was built to support flexibility while maintaining consistency.

- Unify all portals under **one system**
- Reduce **duplication** across teams
- Enable **brand customization** at scale
- Improve **accessibility and performance**
- Speed up **design and development**

This system became the foundation for all future work.

# Design Language

The design language defined the structure and behavior of the product:

- **Color** — HSL-based system to support brand customization and accessibility
- **Grid** — 8px system for consistent layout
- **Typography** — Clear hierarchy based on a 16px base
- **Components** — Standardized patterns across all portals
- **Accessibility** — Built into every element

This created a shared visual and functional language across teams.

# Designing While Rebuilding

The system and the product were built at the same time.

Each sprint involved designing, testing, and refining components in real use. Designers and developers worked closely to ensure everything was **usable and feasible**.

This iterative approach allowed continuous improvement without disrupting the platform.

# Improving the Product

With the system in place, key flows were improved:

- Payment flows were **simplified** and made more reliable
- Recurring payments became **easier to set up** and manage
- New payment methods like **PayPal and Apple Pay** were added
- Sales tools were redesigned, **reducing setup time by 40%**

Each improvement made the product clearer and more efficient.

# The System in Action

The design system became part of daily work across teams:

- The **UI Kit** supported design consistency
- **Storybook** ensured components were documented and testable
- Shared patterns reduced friction between design and development

The system enabled the product to scale while maintaining quality.

# Results

| Focus Area | Before | Outcome |
| --- | --- | --- |
| **Business Scale** | Fragmented system | Unified platform supporting 180+ brands and doubling transaction volume from $7.45B to $15.2B |
| **Merchant Engagement** | Lower adoption | +30% merchant engagement through improved usability |
| **Design-to-Dev Time** | Slow delivery cycles | −40% design-to-development time with reusable components |
| **Customer Transactions** | Inconsistent experience | +4% recurring customer transactions through clearer flows |

# Reflections

Building a design system while redesigning a live product required balancing **improvement with stability**.

The biggest challenge was alignment. Moving from individual screens to a shared system required collaboration and trust across teams.

Once teams experienced the benefits, the system became part of how they worked.

# Lessons Learned

- Building and scaling at the same time requires a **structured approach**
- Design systems are as much about **culture** as they are about components
- **Consistency** improves both usability and efficiency
- **Iteration** leads to better adoption than large changes
- Clear **principles** make scaling possible

# Closing Thought

This project transformed more than the interface.

It introduced a **new way of building products**.

By focusing on clarity, structure, and collaboration, the platform became easier to use, easier to maintain, and ready to grow.
`,C="/portafolio/assets/01-hero-payet-across-devices-DvbP9Wkw.webp",T="/portafolio/assets/1-CdZ0MAH0.webp",I="/portafolio/assets/2-CcJsD6Kf.webp",E="/portafolio/assets/3-BzGXGo1t.webp",A="/portafolio/assets/4-3c2aU9n-.webp",B="/portafolio/assets/Dashboard-l_09mo7q.webp",D="/portafolio/assets/Admin-BAq-zykd.webp",P="/portafolio/assets/Landing%20components-JiMc86s4.webp",L="/portafolio/assets/Styleguide-CZZr7lC_.webp",F="/portafolio/assets/buttons-D4LSeA9f.webp",z="/portafolio/assets/components-jpYEfEL6.webp",R="/portafolio/assets/shapes-FEvm8GKN.webp",U="/portafolio/assets/MErchant01-elAJ_6Zo.webp",W="/portafolio/assets/MErchant02-DYFs4Cmk.webp",H="/portafolio/assets/MErchant03-_JJb3D3V.webp",O="/portafolio/assets/MErchant04-D_-FLvSk.webp",q="/portafolio/assets/MErchant05-YpkOqFUt.webp",N="/portafolio/assets/MErchant06-Cvx-EQN8.webp",_="/portafolio/assets/cust01-DHszx3qu.webp",G="/portafolio/assets/cust02-BPe9ygKo.webp",Y="/portafolio/assets/cust03-B0QdnMzO.webp",Z="/portafolio/assets/cust04-DZ9Sw8iv.webp",J="/portafolio/assets/screenshot-preview-Dmp9Ach2.webp",K="/portafolio/assets/Payet-placement-Byr0QhK-.webp",Q="/portafolio/assets/Pacement%202-BpIcpZyw.webp",X="/portafolio/assets/Audit-web-CYt9ILdA.mp4",$="/portafolio/assets/Color%20scheme--Cuj63Xw.mp4",V="/portafolio/assets/UI%20color-RSCHCCft.mp4",ee={"01-hero-payet-across-devices.webp":C,"Payet-placement.webp":K,"Pacement 2.webp":Q,"1.webp":T,"2.webp":I,"3.webp":E,"4.webp":A,"Dashboard.webp":B,"Admin.webp":D,"Landing components.webp":P,"Styleguide.webp":L,"buttons.webp":F,"components.webp":z,"shapes.webp":R,"MErchant01.webp":U,"MErchant02.webp":W,"MErchant03.webp":H,"MErchant04.webp":O,"MErchant05.webp":q,"MErchant06.webp":N,"cust01.webp":_,"cust02.webp":G,"cust03.webp":Y,"cust04.webp":Z,"screenshot-preview.webp":J},ne={"Audit-web.mp4":X,"Color scheme.mp4":$,"UI color.mp4":V},b=t=>ee[t],f=t=>ne[t];function te({mode:t,onToggle:a}){const o=i=>({display:"flex",alignItems:"center",gap:"6px",padding:"6px 14px",borderRadius:"100px",border:"none",cursor:"pointer",background:i?"rgba(255,255,255,0.18)":"transparent",color:i?"#ffffff":"rgba(255,255,255,0.45)",fontFamily:"'DM Mono', monospace",fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.06em",transition:"background 0.2s ease, color 0.2s ease",whiteSpace:"nowrap"});return e.jsxs("div",{style:{position:"fixed",top:"20px",left:"50%",transform:"translateX(-50%)",zIndex:110,display:"flex",alignItems:"center",gap:"2px",padding:"4px",background:"rgba(10, 10, 10, 0.60)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderRadius:"100px",border:"1px solid rgba(255,255,255,0.10)",boxShadow:"0 4px 24px rgba(0,0,0,0.30)"},role:"group","aria-label":"Case study view mode",children:[e.jsxs("button",{onClick:()=>a("immersive"),"aria-pressed":t==="immersive",title:"Immersive view",style:o(t==="immersive"),children:[e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),"Immersive"]}),e.jsxs("button",{onClick:()=>a("longform"),"aria-pressed":t==="longform",title:"Long-form view",style:o(t==="longform"),children:[e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"15",y2:"18"})]}),"Long-form"]})]})}function oe({onClose:t}){const[a,o]=c.useState("immersive");return e.jsxs(e.Fragment,{children:[e.jsx(te,{mode:a,onToggle:o}),e.jsx(v,{mode:"wait",children:a==="immersive"?e.jsx(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},style:{position:"fixed",inset:0,zIndex:100},children:e.jsx(M,{rawMarkdown:g,resolveImage:b,resolveVideo:f,onClose:t})},"immersive"):e.jsx(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},style:{position:"fixed",inset:0,zIndex:100},children:e.jsx(j,{rawMarkdown:g,resolveImage:b,resolveVideo:f,onClose:t})},"longform")})]})}export{oe as default};
