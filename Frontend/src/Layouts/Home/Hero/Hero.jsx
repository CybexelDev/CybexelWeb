import Navbar from "../../../Components/Navbar/Navbar";
import heroHand from "../../../assets/Herohand.png";
import heroBall from "../../../assets/Heroball.png";


const projects = ["sun", "booq", "buysel", "nme"];

// Page colour behind the hero. Notches are filled with it, so keep it equal to your page background.
// --r is the curve radius, set per breakpoint on the blue box.
const cornerTL = "bg-[radial-gradient(circle_at_0_0,transparent_calc(var(--r)_-_1px),#f6f6f6_var(--r))]";
const cornerBL = "bg-[radial-gradient(circle_at_0_100%,transparent_calc(var(--r)_-_1px),#f6f6f6_var(--r))]";
const cornerBR = "bg-[radial-gradient(circle_at_100%_100%,transparent_calc(var(--r)_-_1px),#f6f6f6_var(--r))]";
const cornerSize = "h-[var(--r)] w-[var(--r)]";

export default function Hero() {
  return (
    <section className="flex min-h-[100dvh] flex-col bg-[#f6f6f6] p-3 sm:p-[1px]">
      <div
        className="relative flex min-h-[600px] flex-1 flex-col overflow-hidden rounded-[28px] pb-[96px] text-white
          [--r:20px]
          bg-[linear-gradient(155deg,#76B5FF_0%,#315AA5_40%,#153574_70%,#06164B_100%)]
          backdrop-blur-[1.5px]
          shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.5),inset_0.75px_3px_7.7px_0_rgba(115,82,221,0.43)]
          sm:rounded-[36px]
          md:pb-[124px] md:[--r:26px]
          lg:rounded-[40px] lg:pb-0 lg:[--r:30px]"
      >
        <Navbar />

        {/* Top-center notch (logo) */}
        <div className="absolute left-1/2 top-0 z-10 h-[68px] w-[190px] -translate-x-1/2 rounded-b-[var(--r)] bg-[#f6f6f6] md:h-[84px] md:w-[260px] lg:h-[88px] lg:w-[280px]">
          <span className={`absolute -left-[var(--r)] top-0 ${cornerSize} ${cornerBL}`} />
          <span className={`absolute -right-[var(--r)] top-0 ${cornerSize} ${cornerBR}`} />
        </div>

        {/*
          mobile : headline / hand / copy (stacked)
          tablet : headline + hand | copy
          desktop: left 2/3 = headline + hand, right 1/3 = copy + glass box
        */}
        <div className="mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 px-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:grid-rows-[1fr] lg:pt-32">
          {/* LEFT (2/3): headline (+ hand on mobile/tablet). Not positioned, so the
              hand's absolute positioning on desktop is relative to the blue box. */}
          <div className="flex flex-col items-start">
            <h1 className="outfit relative z-10 mt-24 whitespace-nowrap font-[700] uppercase leading-[87%] text-[clamp(40px,8vw,110px)] md:mt-28 lg:mt-0 lg:text-[clamp(60px,9.3vw,128px)]">
              Future Ready
            </h1>

            {/* Hand + glass sphere (one transparent PNG), locked to the left 2/3 */}
            {/* Hand + ball: wrapper has the original hand box (70% tall, 2/3 wide), so it can never go right */}
<div
  className="pointer-events-none relative z-20 -mt-2 w-[92%] max-w-[420px] select-none self-center
    md:mt-4 md:w-full md:max-w-none md:self-start
    lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:h-[70%] lg:w-2/3 lg:max-w-none lg:self-auto"
>
  {/* Hand: fills the box, pinned to the bottom-left (same as your original image) */}
  <img
    src={heroHand}
    alt=""
    className="block h-auto w-full object-contain lg:h-full lg:object-left-bottom"
  />

  {/* Ball: inside the same box, so it always moves with the hand */}
  <img
  src={heroBall}
  alt=""
  className="absolute left-[50%] top-[-12%] z-10 w-[48%] animate-[spin_12s_linear_infinite] object-contain motion-reduce:animate-none lg:left-[30%] lg:top-[-19%] lg:w-[70%]"
/>
</div>
          </div>

          {/* RIGHT (1/3): copy at the top, glass box pinned to the bottom */}
          <div className="relative z-20 flex flex-col px-1 pb-4 md:px-4 md:pr-0 lg:pb-[150px] lg:pl-12 lg:pr-0 2xl:pb-[170px]">
            <div className="md:mt-28 lg:mt-0 lg:pt-3">
              <h2 className="outfit text-[29.43px] font-[700] leading-[100%]">
                Building Smarter Futures
              </h2>
              <p className="comfortaa mt-3 max-w-[451px] text-[14px] leading-[120%]">
                At Cybexel, we create modern websites, powerful applications and customized IT solutions that drive business growth, improve efficiency and strengthen your digital presence.
              </p>
            </div>

            {/* mt-auto pushes the box down, pb above keeps it clear of the bottom-right notch */}
            <div className="mt-6 h-32 rounded-[24px] border border-white/30 bg-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md sm:h-40 md:mt-auto md:h-44 xl:h-56 2xl:h-64" />
          </div>
        </div>

        {/* Bottom-right notch with the projects badge */}
        <div className="absolute bottom-0 right-0 z-20 flex h-[84px] w-[236px] items-center gap-3 rounded-tl-[var(--r)] bg-[#f6f6f6] pl-3 pr-2 text-[#1a1a2e] md:h-[110px] md:w-[340px] md:gap-5 md:pl-5 lg:h-[120px] lg:w-[400px] lg:pl-6 2xl:h-[140px] 2xl:w-[460px]">
          <span className={`absolute -left-[var(--r)] bottom-0 ${cornerSize} ${cornerTL}`} />
          <span className={`absolute -top-[var(--r)] right-0 ${cornerSize} ${cornerTL}`} />

          <div className="flex -space-x-4 md:-space-x-5 lg:-space-x-7">
            {projects.map((p) => (
              <img
                key={p}
                src={`/assets/projects/${p}.png`}
                alt={p}
                className="h-10 w-10 rounded-full border border-white/80 bg-[#cdd9f7] object-contain p-2 shadow-[0_6px_14px_rgba(40,60,140,0.25)] md:h-14 md:w-14 lg:h-20 lg:w-20 lg:p-3 2xl:h-24 2xl:w-24"
              />
            ))}
          </div>

          <div className="flex-1 text-center">
            <p className="text-base font-bold leading-none md:text-xl lg:text-2xl">10+</p>
            <p className="mt-1 text-[11px] leading-none md:text-sm lg:text-base">Our Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}