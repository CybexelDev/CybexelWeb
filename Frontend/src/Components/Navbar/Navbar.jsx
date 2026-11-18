// import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
// import logo from "../../assets/logo (3).png";

// const leftLinks = [
//   { label: "Home", href: "#home" },
//   { label: "Services", href: "#services" },
//   { label: "Careers", href: "#careers" },
// ];
// const rightLinks = [
//   { label: "About", href: "#about" },
//   { label: "Blog", href: "#blog" },
// ];

// // Same size for every link, so the moving pill fits each one
// const linkBase =
//   "relative z-10 flex items-center justify-center rounded-full lg:py-[6px] lg:px-[26px]";

// export default function Navbar() {
//   const [active, setActive] = useState("Home");
//   const [pill, setPill] = useState(null); // { left, top, width, height }
//   const [ready, setReady] = useState(false); // no animation on the very first placement

//   const headerRef = useRef(null);
//   const itemRefs = useRef({});

//   // Measure the active link relative to the header and move the pill there
//   const measure = useCallback(() => {
//     const header = headerRef.current;
//     const el = itemRefs.current[active];
//     if (!header || !el) return;
//     const h = header.getBoundingClientRect();
//     const t = el.getBoundingClientRect();
//     if (!t.width) return; // links are hidden below lg
//     setPill({ left: t.left - h.left, top: t.top - h.top, width: t.width, height: t.height });
//   }, [active]);

//   useLayoutEffect(measure, [measure]);

//   useEffect(() => {
//     const id = requestAnimationFrame(() => setReady(true));
//     const ro = new ResizeObserver(measure);
//     if (headerRef.current) ro.observe(headerRef.current);
//     document.fonts?.ready.then(measure);
//     return () => {
//       cancelAnimationFrame(id);
//       ro.disconnect();
//     };
//   }, [measure]);

//   const renderLink = ({ label, href }) => (
//     <a
//       key={label}
//       ref={(el) => (itemRefs.current[label] = el)}
//       href={href}
//       onClick={() => setActive(label)}
//       aria-current={active === label ? "page" : undefined}
//       className={`${linkBase} transition-colors duration-300 ${active === label ? "text-white" : "text-white/90 hover:text-white"}`}
//     >
//       {label}
//     </a>
//   );

//   return (
//     <header
//       ref={headerRef}
//       className="absolute inset-x-0 bai top-0 z-30 flex h-[70px] items-center justify-center text-white lg:grid lg:grid-cols-[1fr_auto_1fr] lg:text-[1.3cqw] px-12"
//     >
//       {/* Sliding liquid-glass pill: one element that travels between links */}
//       {pill && (
//         <span
//           aria-hidden
//           className={`pointer-events-none absolute z-0 hidden rounded-full border border-white/50 bg-[#F0F0F01A] shadow-[inset_0_0_8px_rgba(255,255,255,0.35),0_4px_12px_rgba(10,25,90,0.25)] backdrop-blur-md before:absolute before:inset-x-3 before:top-[2px] before:h-1/3 before:rounded-full before:bg-gradient-to-b before:from-white/50 before:to-transparent lg:block ${
//             ready ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             left: pill.left,
//             top: pill.top,
//             width: pill.width,
//             height: pill.height,
//             // springy "liquid" feel: position leads, width follows a beat later so the pill stretches while moving
//             transition: ready
//               ? "left .55s cubic-bezier(.34,1.35,.64,1), width .55s cubic-bezier(.34,1.35,.64,1) .06s, height .4s ease, opacity .3s"
//               : "none",
//           }}
//         />
//       )}

//       {/* Left links */}
//       <nav aria-label="Primary" className="relative z-10 hidden text-[18px] font-[500] items-center gap-[2.2cqw] pl-[0] lg:flex">
//         {leftLinks.map(renderLink)}
//       </nav>

//       {/* Logo pill inside the top notch */}
//       <a
//         href="#home"
//         onClick={() => setActive("Home")}
//         aria-label="Cybexel home"
//         className="relative z-10 flex h-14 w-48 items-center justify-center rounded-full bg-gradient-to-b from-white to-[#ececf2] shadow-[0_6px_14px_rgba(20,30,90,0.25),inset_0_-3px_6px_rgba(0,0,0,0.06)] lg:mt-0.5 lg:h-[5cqw] lg:w-[18cqw] lg:self-start"
//       >
//         <img src={logo} alt="Cybexel" className="h-[70%] object-contain" />
//       </a>

//       {/* Right links */}
//       <nav aria-label="Secondary" className="relative z-10 hidden text-[18px] font-[500] items-center justify-end gap-[2cqw] pr-[0] lg:flex">
//         {rightLinks.map(renderLink)}
//         {/* Contact is a fixed glass button: the sliding pill never moves onto it */}
//         <a
//           href="#contact"
//           className="relative z-10 ml-[7.4cqw] flex items-center text-[18px] font-[500] justify-center gap-[8px] rounded-full border border-white/70 #F0F0F01A shadow-[inset_0_4px_4px_rgba(255,255,255,0.25),inset_0_-5px_4px_rgba(255,255,255,0.25)] backdrop-blur lg:px-8 lg:py-3"
//         >
//           <span aria-hidden>
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M16.2037 12.25L13.6637 11.96C13.365 11.9249 13.0623 11.958 12.7782 12.0567C12.4942 12.1554 12.2362 12.3173 12.0237 12.53L10.1837 14.37C7.34507 12.9259 5.03774 10.6186 3.59367 7.78L5.44367 5.93C5.87367 5.5 6.08367 4.9 6.01367 4.29L5.72367 1.77C5.66719 1.28209 5.43314 0.832026 5.06614 0.505596C4.69913 0.179166 4.22484 -0.000800071 3.73367 2.67396e-06H2.00367C0.873674 2.67396e-06 -0.0663265 0.940003 0.00367348 2.07C0.533673 10.61 7.36367 17.43 15.8937 17.96C17.0237 18.03 17.9637 17.09 17.9637 15.96V14.23C17.9737 13.22 17.2137 12.37 16.2037 12.25Z" fill="white"/>
// </svg>

//             </span> Contact
//         </a>
//       </nav>
//     </header>
//   );
// }


import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "../../assets/logo (3).png";
import './navbar.css'

const leftLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
];
const rightLinks = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];
const allLinks = [...leftLinks, ...rightLinks];

// Same padding on every desktop link, so the sliding pill fits each one
const linkBase =
  "relative z-10 flex items-center justify-center rounded-full lg:py-[6px] lg:px-[26px]";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false); // mobile / tablet menu
  const [pill, setPill] = useState(null); // { left, top, width, height }
  const [ready, setReady] = useState(false); // no animation on the very first placement

  const headerRef = useRef(null);
  const itemRefs = useRef({});

  // Measure the active desktop link relative to the header and move the pill there
  const measure = useCallback(() => {
    const header = headerRef.current;
    const el = itemRefs.current[active];
    if (!header || !el) return;
    const h = header.getBoundingClientRect();
    const t = el.getBoundingClientRect();
    if (!t.width) return; // desktop links are hidden below xl
    setPill({ left: t.left - h.left, top: t.top - h.top, width: t.width, height: t.height });
  }, [active]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);
    document.fonts?.ready.then(measure);
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [measure]);

  // Close the menu with Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const renderLink = ({ label, href }) => (
    <a
      key={label}
      ref={(el) => (itemRefs.current[label] = el)}
      href={href}
      onClick={() => setActive(label)}
      aria-current={active === label ? "page" : undefined}
      className={`${linkBase} transition-colors duration-300 ${active === label ? "text-white" : "text-white/90 hover:text-white"}`}
    >
      {label}
    </a>
  );

  return (
    <header
      ref={headerRef}
      className="absolute bai inset-x-[6px] top-[6px] z-30 grid h-[62px] grid-cols-[1fr_auto_1fr] items-center text-sm text-white md:h-[76px] lg:h-20 xl:text-base"
    >
      {/* Sliding liquid-glass pill (desktop only): one element that travels between links */}
      {pill && (
        <span
          aria-hidden
          className={`pointer-events-none absolute z-0 hidden rounded-full border border-white/50 bg-[#F0F0F01A] shadow-[inset_0_0_8px_rgba(255,255,255,0.35),0_4px_12px_rgba(10,25,90,0.25)] backdrop-blur-md before:absolute before:inset-x-3 before:top-[2px] before:h-1/3 before:rounded-full before:bg-gradient-to-b before:from-white/50 before:to-transparent xl:block ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: pill.left,
            top: pill.top,
            width: pill.width,
            height: pill.height,
            transition: ready
              ? "left .55s cubic-bezier(.34,1.35,.64,1), width .55s cubic-bezier(.34,1.35,.64,1) .06s, height .4s ease, opacity .3s"
              : "none",
          }}
        />
      )}

      {/* Left cell: hamburger (below xl) or links (xl and up) */}
      <div className="relative z-10 flex items-center pl-3 md:pl-5 xl:pl-14">
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/50 bg-[#F0F0F01A] shadow-[inset_0_0_8px_rgba(255,255,255,0.35)] backdrop-blur-md md:h-11 md:w-11 lg:hidden"
        >
          <span className={`h-[2px] w-4 rounded bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-4 rounded bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-4 rounded bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

              <nav aria-label="Primary" className="relative z-10 hidden text-[18px] font-[500] items-center xl:gap-[2.2cqw] pl-[0] lg:flex">
         {leftLinks.map(renderLink)}
       </nav>
      </div>

      {/* Logo pill inside the top notch */}
      <a
  href="#home"
  onClick={() => setActive("Home")}
  aria-label="Cybexel home"
  className="liquid-glass relative z-10 flex h-[46px] w-40 items-center justify-center overflow-hidden rounded-full md:h-14 md:w-52 lg:h-[60px] lg:w-[220px]"
>
  {/* specular highlight sheen */}
  <span
    aria-hidden
    className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/60 via-white/5 to-transparent"
  />
  <img src={logo} alt="Cybexel" className="relative h-[70%] object-contain" />
</a>

      {/* Right cell: links (xl and up) + Contact (always) */}
      <div className="relative z-10 flex items-center justify-end pr-3 md:pr-5 xl:pr-6">
          <nav aria-label="Secondary" className="relative z-10 hidden text-[18px] font-[500] items-center justify-end xl:gap-[2.2cqw] pr-[0] lg:flex">
       {rightLinks.map(renderLink)}
        {/* Contact is a fixed glass button: the sliding pill never moves onto it */}
       </nav>
        {/* Contact is a fixed glass button: the sliding pill never moves onto it */}
        <a
          href="#contact"
          aria-label="Contact"
          className="flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] backdrop-blur md:h-11 md:w-auto md:px-6 xl:ml-16 xl:h-12 xl:px-8"
        >
          <span aria-hidden>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2037 12.25L13.6637 11.96C13.365 11.9249 13.0623 11.958 12.7782 12.0567C12.4942 12.1554 12.2362 12.3173 12.0237 12.53L10.1837 14.37C7.34507 12.9259 5.03774 10.6186 3.59367 7.78L5.44367 5.93C5.87367 5.5 6.08367 4.9 6.01367 4.29L5.72367 1.77C5.66719 1.28209 5.43314 0.832026 5.06614 0.505596C4.69913 0.179166 4.22484 -0.000800071 3.73367 2.67396e-06H2.00367C0.873674 2.67396e-06 -0.0663265 0.940003 0.00367348 2.07C0.533673 10.61 7.36367 17.43 15.8937 17.96C17.0237 18.03 17.9637 17.09 17.9637 15.96V14.23C17.9737 13.22 17.2137 12.37 16.2037 12.25Z" fill="white"/>
</svg>
          </span>
          <span className="hidden md:inline">Contact</span>
        </a>
      </div>

      {/* Mobile / tablet dropdown */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute left-3 top-full z-40 mt-2 w-48 rounded-3xl border border-white/40 bg-[#1e3b9b]/70 p-2 shadow-xl backdrop-blur-xl md:left-5 xl:hidden"
        >
          {allLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setActive(label);
                setOpen(false);
              }}
              aria-current={active === label ? "page" : undefined}
              className={`block rounded-full px-4 py-2 text-sm transition-colors ${active === label ? "bg-white/25" : "hover:bg-white/10"}`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}