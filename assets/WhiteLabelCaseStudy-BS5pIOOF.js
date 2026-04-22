import{r as h,j as n}from"./index-avXVB651.js";const le=.09,ne=1.6,S=.28,de=.5,pe=.0012,oe=8e-4,ae=120,fe=8,W=42;function me({title:g,body:k}){const[b,E]=h.useState(!1);return n.jsxs("div",{className:`sdcs-card${b?" sdcs-card--open":""}`,children:[n.jsxs("button",{className:"sdcs-card-btn",onClick:()=>E(D=>!D),"aria-expanded":b,children:[n.jsx("span",{className:"sdcs-card-label",children:g}),n.jsx("svg",{className:"sdcs-card-chevron",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:n.jsx("path",{d:"M6 9l6 6 6-6"})})]}),n.jsx("div",{className:"sdcs-card-body","aria-hidden":!b,children:n.jsx("div",{className:"sdcs-card-inner",children:k})})]})}const ue=`
  /* Root + theme tokens */
  .sdcs-root {
    --fg: #ffffff;
    --card-bg: rgba(8, 8, 8, 0.60);
    position: fixed; inset: 0;
    overflow: hidden;
    background: #000;
    user-select: none; -webkit-user-select: none;
  }
  .sdcs-root.sdcs-light {
    --fg: #000000;
    --card-bg: rgba(255, 255, 255, 0.55);
  }

  /* ── Background layer container ── */
  .sdcs-bg {
    position: absolute; inset: 0;
    background: #000;
    pointer-events: none;
    overflow: hidden;
  }

  /* ── Nav bar ── */
  .sdcs-nav {
    position: absolute; top: 0; left: 0; right: 0; z-index: 20;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px clamp(16px, 3vw, 32px);
    transform: translate3d(0, -100vh, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
  }
  .sdcs-nav.sdcs-vis {
    transform: translate3d(0, 0, 0);
    pointer-events: auto;
  }

  .sdcs-back-btn {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    cursor: pointer;
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;
    transition: background 0.18s;
  }
  .sdcs-back-btn:hover { background: rgba(255, 255, 255, 0.20); }
  .sdcs-light .sdcs-back-btn {
    background: rgba(0, 0, 0, 0.10);
    border-color: rgba(0, 0, 0, 0.12);
  }

  .sdcs-nav-title {
    position: absolute; left: 50%; transform: translateX(-50%);
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.10em;
    pointer-events: none;
    white-space: nowrap;
  }
  .sdcs-nav-year {
    color: var(--fg); opacity: 0.45;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
  }

  /* ── Intro typed overlay ── */
  .sdcs-intro {
    position: absolute; inset: 0; z-index: 30;
    background: #000;
    display: flex; align-items: flex-end;
    padding: clamp(28px, 5vw, 72px) clamp(24px, 5vw, 72px);
    transform: translateX(0);
    transition: transform 0.42s cubic-bezier(0.4, 0, 0.6, 1);
  }
  .sdcs-intro-content {
    display: flex; flex-direction: column; gap: 10px;
    max-width: min(640px, 90vw);
  }
  .sdcs-intro-title {
    display: block;
    font-family: 'Poltawski Nowy', 'Poppins', serif;
    font-size: clamp(2.4rem, 7vw, 5.5rem);
    font-weight: 700;
    color: #fff; line-height: 1.0;
    letter-spacing: -0.03em;
    margin-bottom: clamp(8px, 2vw, 20px);
  }
  .sdcs-intro-row {
    display: flex; align-items: baseline; gap: 16px;
  }
  .sdcs-intro-key {
    font-family: 'DM Mono', monospace;
    font-size: clamp(10px, 1.1vw, 12px);
    text-transform: uppercase; letter-spacing: 0.10em;
    color: rgba(255, 255, 255, 0.38);
    min-width: 80px; flex-shrink: 0;
  }
  .sdcs-intro-val {
    font-family: 'DM Mono', monospace;
    font-size: clamp(12px, 1.3vw, 14px);
    color: rgba(255, 255, 255, 0.80);
  }

  /* ── Bottom cards row ── */
  .sdcs-cards {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 20;
    display: flex; gap: 8px;
    padding: 12px clamp(12px, 2vw, 20px) clamp(16px, 3vw, 24px);
    transform: translate3d(0, 100vh, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) 0.08s;
    pointer-events: none;
    overflow-x: auto; overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .sdcs-cards::-webkit-scrollbar { display: none; }
  .sdcs-cards.sdcs-vis {
    transform: translate3d(0, 0, 0);
    pointer-events: auto;
  }

  /* ── Card ── */
  .sdcs-card {
    flex: 1;
    min-width: clamp(130px, 26vw, 200px);
    background: var(--card-bg);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    overflow: hidden;
    flex-shrink: 0;
    transition: transform 0.20s ease, box-shadow 0.20s ease;
  }
  .sdcs-light .sdcs-card {
    border-color: rgba(0, 0, 0, 0.08);
  }
  @media (hover: hover) and (pointer: fine) {
    .sdcs-card:not(.sdcs-card--open):hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 36px rgba(0, 0, 0, 0.28);
    }
  }
  .sdcs-card-btn {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
    width: 100%;
    padding: 13px 14px;
    background: none; border: none;
    cursor: pointer;
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em;
    text-align: left;
    white-space: nowrap;
  }
  .sdcs-card-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sdcs-card-chevron {
    flex-shrink: 0;
    color: var(--fg); opacity: 0.55;
    transition: transform 0.25s ease;
  }
  .sdcs-card--open .sdcs-card-chevron { transform: rotate(180deg); }

  .sdcs-card-body {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition:
      grid-template-rows 320ms cubic-bezier(0.2, 0.7, 0.2, 1),
      opacity 240ms ease;
  }
  .sdcs-card--open .sdcs-card-body {
    grid-template-rows: 1fr;
    opacity: 1;
  }
  .sdcs-card-inner {
    overflow: hidden;
    padding: 0 14px 14px;
    color: var(--fg); opacity: 0.80;
    font-family: 'Poppins', sans-serif;
    font-size: 12px; line-height: 1.65;
  }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .sdcs-nav, .sdcs-cards { transform: none !important; transition: none !important; }
    .sdcs-intro { display: none !important; }
    .sdcs-card-body { transition: none !important; }
  }
`;function he({images:g,initialProgress:k=.35,projectTitle:b,year:E="",metadata:D=[],sections:_=[],onClose:R}){const q=h.useRef(null),Y=h.useRef(null),G=h.useRef(null),H=h.useRef(null),X=h.useRef(null);return h.useEffect(()=>{const m=a=>{a.key==="Escape"&&R()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[R]),h.useEffect(()=>{const m=Y.current,a=q.current,p=G.current,V=H.current,$=X.current;if(!m||!a||g.length===0)return;const v=g.length,re=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let z=k,M=k,T=0,L=!1,Z=0;const K=new Array(v).fill(ne);let y=null,j=null,U="dark",P=!1,O=0,F=0,B=0,I=0;const C=[];g.forEach((e,t)=>{const s=document.createElement("img");s.src=e,s.alt="",s.decoding="async",s.setAttribute("aria-hidden","true"),Object.assign(s.style,{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:t===0?"cover":"contain",objectPosition:"center",transformOrigin:"center center",backfaceVisibility:"hidden",willChange:"transform, opacity",transform:"scale(0.001)",opacity:"0",display:"none",pointerEvents:"none"}),m.appendChild(s),C.push(s)});function A(){L||(L=!0,T=requestAnimationFrame(J))}function J(){L=!1;const e=M-z;z+=e*le;const t=(z%v+v)%v,s=Math.floor(t),i=t-s,c=(s-1+v)%v,d=(s+1)%v,w=new Set([c,s,d]);C.forEach((x,r)=>{if(!w.has(r)){x.style.display!=="none"&&(x.style.display="none");return}x.style.display="block";let o,l;if(r===s)o=1+(ne-1)*i,l=1,i>.92&&(K[r]=o);else if(r===d)o=.001+.999*i,l=i;else{const f=K[r];if(i<S)o=f,l=1-i/S*.35;else{const u=(i-S)/(1-S);o=f*(1+u*de),l=Math.max(0,1-u*1.8)}}x.style.transform=`scale(${o.toFixed(4)})`,x.style.opacity=String(Math.max(0,Math.min(1,l)).toFixed(4))}),Z++,Z%fe===0&&ie(C[s]),Math.abs(e)>3e-4&&(L=!0,T=requestAnimationFrame(J))}function ie(e){if(!(!e?.complete||!e.naturalWidth))try{if(y||(y=document.createElement("canvas"),y.width=16,y.height=16,j=y.getContext("2d",{willReadFrequently:!0})),!j)return;j.drawImage(e,0,0,16,16);const t=j.getImageData(0,0,16,16).data;let s=0;for(let d=0;d<t.length;d+=4)s+=.2126*t[d]+.7152*t[d+1]+.0722*t[d+2];const c=s/(t.length/4)>148?"light":"dark";c!==U&&(U=c,a.style.setProperty("--fg",c==="light"?"#000000":"#ffffff"),a.classList.toggle("sdcs-light",c==="light"))}catch{}}function Q(e){e.preventDefault();let t=e.deltaY;e.deltaMode===1&&(t*=16),e.deltaMode===2&&(t*=100),t=Math.max(-ae,Math.min(ae,t)),M+=t*pe,A()}function ee(e){P=!0,O=e.touches[0].clientY,F=0,B=performance.now(),cancelAnimationFrame(I)}function te(e){if(!P)return;const t=e.touches[0].clientY,s=O-t,i=performance.now(),c=i-B;F=c>0?s/c:0,O=t,B=i,M+=s*oe,A(),e.preventDefault()}function se(){P=!1;let e=F*16;const t=()=>{Math.abs(e)<2e-4||(M+=e*oe*60,e*=.92,A(),I=requestAnimationFrame(t))};t()}function ce(){if(!p)return;const e=p.querySelector(".sdcs-intro-content");if(!e){p.style.display="none";return}e.innerHTML="";const t=document.createElement("span");t.className="sdcs-intro-title",e.appendChild(t);const s=D.map(r=>{const o=document.createElement("div");o.className="sdcs-intro-row";const l=document.createElement("span");l.className="sdcs-intro-key";const f=document.createElement("span");return f.className="sdcs-intro-val",o.appendChild(l),o.appendChild(f),e.appendChild(o),{key:l,val:f,label:r.label,value:r.value}}),i=b;let c=!1;function d(r,o,l,f){let u=0;const N=()=>{c||(r.textContent=o.slice(0,u),u++,u<=o.length?setTimeout(N,l):f())};N()}function w(r){if(!c)if(r===0)d(t,i,W,()=>setTimeout(()=>w(1),120));else{const o=r-1;if(o>=s.length){setTimeout(x,800);return}const{key:l,val:f,label:u,value:N}=s[o];d(l,u,W*.7,()=>{d(f,N,W*.55,()=>{setTimeout(()=>w(r+1),80)})})}}function x(){c=!0,p&&(p.style.transform="translateX(100%)",p.style.pointerEvents="none",setTimeout(()=>{p&&(p.style.display="none")},440),setTimeout(()=>{V?.classList.add("sdcs-vis")},60),setTimeout(()=>{$?.classList.add("sdcs-vis")},160))}setTimeout(()=>w(0),180)}return A(),re?(p&&(p.style.display="none"),V?.classList.add("sdcs-vis"),$?.classList.add("sdcs-vis")):ce(),a.addEventListener("wheel",Q,{passive:!1}),a.addEventListener("touchstart",ee,{passive:!1}),a.addEventListener("touchmove",te,{passive:!1}),a.addEventListener("touchend",se),()=>{cancelAnimationFrame(T),cancelAnimationFrame(I),a.removeEventListener("wheel",Q),a.removeEventListener("touchstart",ee),a.removeEventListener("touchmove",te),a.removeEventListener("touchend",se),C.forEach(e=>e.remove())}},[]),n.jsxs("div",{ref:q,className:"sdcs-root",style:{"--fg":"#ffffff"},"aria-label":`${b} — case study`,children:[n.jsx("style",{children:ue}),n.jsx("div",{ref:Y,className:"sdcs-bg","aria-hidden":"true"}),n.jsxs("div",{ref:H,className:"sdcs-nav",role:"navigation",children:[n.jsxs("button",{className:"sdcs-back-btn",onClick:R,"aria-label":"Close case study",children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[n.jsx("path",{d:"M19 12H5"}),n.jsx("path",{d:"M12 19l-7-7 7-7"})]}),"Close"]}),n.jsx("span",{className:"sdcs-nav-title",children:b}),E&&n.jsx("span",{className:"sdcs-nav-year",children:E})]}),n.jsx("div",{ref:G,className:"sdcs-intro","aria-hidden":"true",children:n.jsx("div",{className:"sdcs-intro-content"})}),_.length>0&&n.jsx("div",{ref:X,className:"sdcs-cards",role:"complementary",children:_.map((m,a)=>n.jsx(me,{title:m.title,body:m.body},a))})]})}const ge="/portafolio/assets/01-hero-payet-across-devices-DvbP9Wkw.webp",be="/portafolio/assets/1-CdZ0MAH0.webp",ve="/portafolio/assets/2-CcJsD6Kf.webp",xe="/portafolio/assets/3-BzGXGo1t.webp",ye="/portafolio/assets/4-3c2aU9n-.webp",we="/portafolio/assets/Dashboard-l_09mo7q.webp",ke="/portafolio/assets/Admin-BAq-zykd.webp",Ee="/portafolio/assets/Landing%20components-JiMc86s4.webp",Me="/portafolio/assets/Styleguide-CZZr7lC_.webp",Le="/portafolio/assets/buttons-D4LSeA9f.webp",je="/portafolio/assets/components-jpYEfEL6.webp",Ce="/portafolio/assets/shapes-FEvm8GKN.webp",Ae=[ge,be,ve,xe,ye,we,ke,Ee,Me,Le,je,Ce],Ne=[{label:"Role",value:"Lead Product Designer / Consultant"},{label:"Timeline",value:"3-Year Partnership"},{label:"Team",value:"PM, Developers, Design, QA"}],Se=[{title:"Overview",body:"Payet is a white-label payment gateway serving financial, automotive, and healthcare institutions. Each portal had grown independently — inconsistent patterns created friction for users and slowed development across a platform processing billions in transactions."},{title:"Approach",body:"A custom design system unified all portals under shared structure. Working alongside developers across a 3-year partnership, the redesign standardized components, improved accessibility (WCAG AA), and enabled brand customization at scale across 180+ merchants."},{title:"Outcomes",body:"+30% merchant engagement · +4% recurring customer transactions · −40% design-to-development time · Annual payment volume grew from $7.45B (2018) to $15.2B (2020)."}];function Re({onClose:g}){return n.jsx(he,{images:Ae,projectTitle:"White-Label Payment Gateway",year:"2024",metadata:Ne,sections:Se,onClose:g})}export{Re as default};
