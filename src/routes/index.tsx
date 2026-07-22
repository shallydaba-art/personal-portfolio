import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";

// ── Addis Aesthetic Series (all 36 photos) ─────────────────────────────────
import addisP1  from "@/assets/addis_photo_1.jpg";
import addisP2  from "@/assets/addis_photo_2.jpg";
import addisP3  from "@/assets/addis_photo_3.jpg";
import addisP4  from "@/assets/addis_photo_4.jpg";
import addisP5  from "@/assets/addis_photo_5.jpg";
import addisP6  from "@/assets/addis_photo_6.jpg";
import addisP7  from "@/assets/addis_photo_7.jpg";
import addisP8  from "@/assets/addis_photo_8.jpg";
import addisP9  from "@/assets/addis_photo_9.jpg";
import addisP10 from "@/assets/addis_photo_10.jpg";
import addisP11 from "@/assets/addis_photo_11.jpg";
import addisP12 from "@/assets/addis_photo_12.jpg";
import addisP13 from "@/assets/addis_photo_13.jpg";
import addisP14 from "@/assets/addis_photo_14.jpg";
import addisP15 from "@/assets/addis_photo_15.jpg";
import addisP16 from "@/assets/addis_photo_16.jpg";
import addisP17 from "@/assets/addis_photo_17.jpg";
import addisP18 from "@/assets/addis_photo_18.jpg";
import addisP19 from "@/assets/addis_photo_19.jpg";
import addisP20 from "@/assets/addis_photo_20.jpg";
import addisP21 from "@/assets/addis_photo_21.jpg";
import addisP22 from "@/assets/addis_photo_22.jpg";
import addisP23 from "@/assets/addis_photo_23.jpg";
import addisP24 from "@/assets/addis_photo_24.jpg";
import addisP25 from "@/assets/addis_photo_25.jpg";
import addisP26 from "@/assets/addis_photo_26.jpg";
import addisP27 from "@/assets/addis_photo_27.jpg";
import addisP28 from "@/assets/addis_photo_28.jpg";
import addisP29 from "@/assets/addis_photo_29.jpg";
import addisP30 from "@/assets/addis_photo_30.jpg";
import addisP31 from "@/assets/addis_photo_31.jpg";
import addisP32 from "@/assets/addis_photo_32.jpg";
import addisP33 from "@/assets/addis_photo_33.jpg";
import addisP34 from "@/assets/addis_photo_34.jpg";
import addisP35 from "@/assets/addis_photo_35.jpg";
import addisP36 from "@/assets/addis_photo_36.jpg";

// ── CAWWE Women's Empowerment ────────────────────────────────────────────────
import cawweP1 from "@/assets/all/CAWWE Women's Empowerment/IMG_9250.JPG";
import cawweP2 from "@/assets/all/CAWWE Women's Empowerment/IMG_9526.JPG";
import cawweP3 from "@/assets/all/CAWWE Women's Empowerment/IMG_9583.JPG";
import cawweP4 from "@/assets/all/CAWWE Women's Empowerment/IMG_9639.JPG";
import cawweCover from "@/assets/cawwe_cover.jpg";      // IMG_9656.JPG (also in all/ folder)
import cawweP6 from "@/assets/all/CAWWE Women's Empowerment/IMG_9780.JPG";
import cawweP7 from "@/assets/all/CAWWE Women's Empowerment/IMG_9818.jpg";

// ── Portrait Sketches (all browser-compatible files) ──────────────────────
import sketchPN1  from "@/assets/IMG_9823.png";         // IMG_9823.PNG
import sketchPN2  from "@/assets/IMG_9825.png";         // IMG_9825.PNG
import sketchPN3  from "@/assets/img_1117_2.png";       // IMG_1117 (2).PNG
import sketchPN4  from "@/assets/img_5097.jpg";         // IMG_5097.JPG
import sketchP1   from "@/assets/sketch_photo_1.jpg";
import sketchP2   from "@/assets/sketch_photo_2.jpg";
import sketchP3   from "@/assets/sketch_photo_3.jpg";
import sketchP4   from "@/assets/sketch_photo_4.jpg";
import sketchP5   from "@/assets/sketch_photo_5.jpg";
import sketchP6   from "@/assets/sketch_photo_6.jpg";
import sketchP7   from "@/assets/sketch_photo_7.jpg";
import sketchP8   from "@/assets/sketch_photo_8.jpg";
import sketchP9   from "@/assets/sketch_photo_9.jpg";
import sketchP10  from "@/assets/sketch_photo_10.jpg";
import sketchP11  from "@/assets/sketch_photo_11.jpg";
import sketchP12  from "@/assets/sketch_photo_12.jpg";
import sketchP13  from "@/assets/sketch_photo_13.jpg";
import sketchP14  from "@/assets/sketch_photo_14.jpg";
import sketchP15  from "@/assets/sketch_photo_15.jpg";
import sketchP16  from "@/assets/sketch_photo_16.jpg";
import sketchPMain from "@/assets/sketch_photo_main.jpg"; // photo_2026-07-14_15-02-32
import sketchPJul  from "@/assets/sketch_photo_jul16.jpg"; // photo_2026-07-16_16-56-42

// ── Live Media Production ─────────────────────────────────────────────────
import mediaVideo from "@/assets/IMG_7477.mov";       // IMG_7477.MOV (hover play)
import mediaI1    from "@/assets/IMG_9826.png";
import mediaI2    from "@/assets/IMG_9827.png";
import mediaI3    from "@/assets/IMG_9828.png";
import mediaI4    from "@/assets/IMG_9829.png";
import mediaI5    from "@/assets/IMG_9831.png";
import mediaI6    from "@/assets/IMG_9832.png";
import mediaI7    from "@/assets/photo_live_1.jpg";

// ── CV and Certification ──────────────────────────────────────────────────
import cvResume  from "@/assets/cv_resume.png";
import cvDownload from "@/assets/all/cv and certificate/ELSHALOM.D CV Resume.pdf (1).png";
import cvAdobe   from "@/assets/cv_adobe.jpg";
import cvExcel   from "@/assets/cv_excel_adv.jpg";
import cvC1      from "@/assets/cv_c1.jpg";
import cvC2      from "@/assets/cv_c2.jpg";
import cvC3      from "@/assets/cv_c3.jpg";
import cvCapcut  from "@/assets/cv_capcut.jpg";
import cvMsExcel from "@/assets/cv_msexcel.jpg";
import cvCanva   from "@/assets/cv_canva.jpg";
import cvUiux    from "@/assets/cv_uiux.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elshalom Daba — Data Analyst & Visual Storyteller" },
      { name: "description", content: "Portfolio of Elshalom Daba — Data analyst, photographer, and media producer in Addis Ababa." },
      { property: "og:title", content: "Elshalom Daba — Portfolio" },
      { property: "og:description", content: "I analyze data, take photos, and produce media. Check out my work." },
    ],
  }),
  component: Index,
});

type Category = "All" | "NGO Work" | "Photography" | "Media" | "Art" | "Documents";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  cover: string;
  coverVideo?: string;  // optional: plays on card hover
  gallery: string[];
  year: string;
  description: string;
  aspect: string;
};

const projects: Project[] = [
  {
    title: "CAWWE Women's Empowerment",
    category: "NGO Work",
    cover: cawweCover,
    gallery: [cawweP1, cawweP2, cawweP3, cawweP4, cawweCover, cawweP6, cawweP7],
    year: "2026",
    description: "Data analysis and volunteer coordination for an economic empowerment program.",
    aspect: "aspect-square",
  },
  {
    title: "Addis Aesthetic Series",
    category: "Photography",
    cover: addisP4,
    gallery: [
      addisP1,  addisP2,  addisP3,  addisP4,  addisP5,  addisP6,
      addisP7,  addisP8,  addisP9,  addisP10, addisP11, addisP12,
      addisP13, addisP14, addisP15, addisP16, addisP17, addisP18,
      addisP19, addisP20, addisP21, addisP22, addisP23, addisP24,
      addisP25, addisP26, addisP27, addisP28, addisP29, addisP30,
      addisP31, addisP32, addisP33, addisP34, addisP35, addisP36,
    ],
    year: "2024",
    description: "Photos of Addis Ababa. I post these on my Instagram @venecia_her_316.",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Portrait Sketches",
    category: "Art",
    cover: sketchPN1,
    gallery: [
      sketchPN1, sketchPN2, sketchPN3, sketchPN4,
      sketchP1,  sketchP2,  sketchP3,  sketchP4,  sketchP5,  sketchP6,
      sketchP7,  sketchP8,  sketchP9,  sketchP10, sketchP11, sketchP12,
      sketchP13, sketchP14, sketchP15, sketchP16, sketchPMain, sketchPJul,
    ],
    year: "2023",
    description: "Pencil portraits of my friends from university.",
    aspect: "aspect-square",
  },
  {
    title: "Live Media Production",
    category: "Media",
    cover: mediaI1,
    coverVideo: mediaVideo,   // plays on hover
    gallery: [mediaI1, mediaI2, mediaI3, mediaI4, mediaI5, mediaI6, mediaI7],
    year: "Ongoing",
    description: "I manage cameras, sound, and screens for weekly church services.",
    aspect: "aspect-[4/5]",
  },
  {
    title: "CV and Certification",
    category: "Documents",
    cover: cvResume,
    gallery: [
      cvResume, cvAdobe, cvExcel, cvC1, cvC2,
      cvC3, cvCapcut, cvMsExcel, cvCanva, cvUiux,
    ],
    year: "2026",
    description: "My training certificates from Orbit Innovation Hub, Pinnacle Consult, and MABQAT.",
    aspect: "aspect-[4/5]",
  },
];

const categories: Category[] = ["All", "NGO Work", "Photography", "Media", "Art", "Documents"];

const timeline = [
  { date: "April 2026 — Present", role: "Program Officer", org: "CAWEE", note: "Leading data analysis, field coordination, and organizational representation for women's economic empowerment.", current: true },
  { date: "March 2026 — April 2026", role: "Data Entry Volunteer", org: "CAWEE", note: "Joined year 2 of the 5-year program, structuring volunteer datasets and reporting." },
  { date: "Ongoing — Wednesdays", role: "Media Team Volunteer", org: "Local Church, Addis Ababa", note: "Camera, sound system, video editing, and live screen control twice weekly." },
  { date: "Weekly", role: "Children's Volunteer", org: "HMH (Hold My Hand) Charity", note: "Teaching, playing with, and mentoring children every week." },
  { date: "Summer Sessions", role: "Sunday School Teacher", org: "Local Church", note: "Led children's summer Sunday school classes — teaching, mentoring, organizing." },
];

const services = [
  { n: "01", title: "Data & NGO Support", desc: "I analyze data, coordinate volunteers, and help with program reporting.", image: cawweCover },
  { n: "02", title: "Photography", desc: "I take event photos, aesthetic shots, and portraits for individuals and organizations.", image: addisP4 },
  { n: "03", title: "Media Production", desc: "I handle video editing, sound management, and live camera control.", image: mediaI1 },
  { n: "04", title: "Portrait Drawing", desc: "I draw custom pencil portraits.", image: sketchPN3 },
];

const skills = {
  Professional: ["Data Analysis", "Data Visualization", "NGO Program Coordination", "Field Work", "Report Writing", "Microsoft Office Suite", "Java", "C++", "SQL", "JavaScript"],
  Creative: ["Aesthetic Photography", "Portrait Photography", "Video Editing", "Sound System Mgmt", "Live Camera Control", "Canva Design", "Pencil Portraiture"],
  Soft: ["Problem Solving", "Team Leadership", "Adaptability", "Communication", "Persuasive Speaking", "Empathy"],
};

// ── ProjectCard: handles hover-video for the Media card ──────────────────
function ProjectCard({ p, i, onClick }: { p: Project; i: number; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Lazily assign src on first hover — avoids fetching the MOV on page load
      if (p.coverVideo && !videoRef.current.src) {
        videoRef.current.src = p.coverVideo;
        videoRef.current.load();
      }
      videoRef.current.play().catch(() => {/* autoplay blocked or still buffering */});
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article
      className={`group relative ${i % 3 === 1 ? "lg:mt-16" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={`Open ${p.title} folder`}
        className="block w-full text-left"
      >
        {/* Folder tab */}
        <div className="relative z-10 ml-4 h-5 w-24 rounded-t-md border border-b-0 border-amber-900/60 bg-amber-700/80 shadow-md" />
        {/* Folder body */}
        <div className={`relative overflow-hidden rounded-md rounded-tl-none border border-amber-900/60 bg-amber-600/90 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg] ${p.aspect}`}>
          <div className="absolute inset-3 overflow-hidden rounded-sm bg-card">
            {/* Static cover image — hidden when video is playing on hover */}
            <img
              src={p.cover}
              alt={p.title}
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
              className={`h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 ${p.coverVideo ? "group-hover:opacity-0 absolute inset-0" : ""}`}
            />
            {/* Hover video (Media card only) */}
            {p.coverVideo && (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="none"
                className="h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </div>
          <div className="absolute bottom-3 left-3 z-10 bg-background/80 px-2 py-1 font-mono text-[9px] uppercase tracking-widest backdrop-blur-sm">
            {p.year}
          </div>
          <div className="absolute right-3 top-3 z-10 rounded-full bg-background/80 px-2 py-1 font-mono text-[9px] uppercase tracking-widest backdrop-blur-sm">
            {p.coverVideo ? "▶ hover · " : "Click to open · "}{p.gallery.length}
          </div>
        </div>
      </button>
      <div className="mt-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{p.category}</span>
        <h3 className="mt-1 font-display text-xl italic">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
      </div>
    </article>
  );
}

function Index() {
  const [filter, setFilter] = useState<Category>("All");
  const [skillTab, setSkillTab] = useState<keyof typeof skills>("Professional");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [openService, setOpenService] = useState<string | null>(null);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="font-display text-xl italic tracking-tighter">E.D.</a>
          <div className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.2em] md:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#work" className="transition-colors hover:text-primary">Work</a>
            <a href="#experience" className="transition-colors hover:text-primary">Timeline</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </div>
          <a href="#contact" className="border border-primary px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground">
            Get in touch
          </a>
        </div>
      </nav>

      <main id="top" className="blueprint-grid min-h-screen pt-16">
        {/* HERO */}
        <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6">
          <div className="relative z-10 text-center">
            <h1 className="animate-reveal font-display text-6xl italic leading-none tracking-tighter sm:text-8xl md:text-9xl">
              Elshalom <br /> <span className="text-primary">Daba.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-md text-balance leading-relaxed text-muted-foreground">
              I'm a data analyst, photographer, and media producer based in Addis Ababa. I build tools and tell stories.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={cvDownload}
                download="ELSHALOM_DABA_CV.png"
                className="warm-glow bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary/90 flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                Download CV
              </a>
              <a href="#work" className="border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition hover:border-primary hover:text-primary">
                Explore work →
              </a>
            </div>
          </div>

          {/* Floating cutouts */}
          <div className="absolute -left-6 bottom-12 hidden lg:block animate-float" style={{ ['--r' as never]: '-8deg' }}>
            <div className="border border-border bg-white/5 p-2 shadow-2xl">
              <img src="https://i.postimg.cc/15fS5SgY/IMG-9752.avif" alt="Elshalom Daba location portrait" width={192} height={256} className="h-64 w-48 object-cover" />
              <div className="mt-2 px-1 font-mono text-[9px] uppercase tracking-tighter text-muted-foreground">Location: Bole, AA</div>
            </div>
          </div>
          <div className="absolute -right-8 top-32 hidden lg:block animate-float" style={{ ['--r' as never]: '5deg', animationDelay: '1s' }}>
            <div className="border border-border bg-white/5 p-2 shadow-2xl">
              <img
                src={addisP4}
                alt="Addis Aesthetic sample"
                width={224}
                height={288}
                fetchPriority="high"
                decoding="async"
                className="h-72 w-56 object-cover"
              />
              <div className="mt-2 px-1 font-mono text-[9px] uppercase tracking-tighter text-muted-foreground">Project: Visual Journals</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl border-t border-border px-6 py-32">
          <div className="mb-12 flex items-end justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">[ 01 ] About</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">About me</span>
          </div>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 -rotate-3 rounded-[2rem] border-2 border-dashed border-primary" />
                <img
                  src="https://i.postimg.cc/DZ8JPDph/IMG-9749.avif"
                  alt="Portrait of Elshalom Daba"
                  width={1024}
                  height={1280}
                  className="relative z-10 aspect-[4/5] w-full rounded-[1.5rem] object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute -bottom-4 -right-4 rotate-6 bg-accent px-4 py-2 font-display text-lg italic text-accent-foreground shadow-xl">
                  Analyst by day.
                </div>
                <div className="absolute -left-6 top-6 -rotate-6 border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  Hecho por ED
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <h2 className="mb-8 font-display text-4xl italic md:text-5xl">About Me</h2>
              <div className="space-y-6 leading-relaxed text-muted-foreground">
                <p className="text-lg text-foreground">
                  I'm Elshalom Daba, a Computer Science Graduate at Unity University who graduated in April 2026. Right now, I work as a <span className="text-primary">Program Officer at CAWEE</span>.
                </p>
                <p>
                  Outside of work, I run the media team at my church twice a week, managing cameras, sound, and video. I also volunteer with kids at the Hold My Hand charity. In my free time, I enjoy taking photos and drawing pencil portraits of my friends.
                </p>
                <p className="text-foreground">
                  You can find my photography on Instagram: <a href="https://instagram.com/venecia_her_316" target="_blank" rel="noreferrer" className="text-primary hover:underline">@venecia_her_316</a>.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">Education</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Unity University</p>
                    <p className="text-xs italic text-muted-foreground">BSc Computer Science</p>
                    <p className="font-mono text-xs text-primary">2022 — April 2026</p>
                    <p className="mt-3 text-xs text-muted-foreground">Nazareth School & Bole Kale Hiwot School<br /><span className="font-mono text-primary">2017 — 2021</span></p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase">EN C1-C2</span>
                    <span className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase">AM C1-C2</span>
                    <span className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase">FR B1</span>
                  </div>
                  <h3 className="mb-3 mt-6 font-mono text-[10px] uppercase tracking-widest text-accent">Tagline</h3>
                  <p className="font-display text-lg italic text-foreground">Data. Art. Impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS / SERVICES */}
        <section id="skills" className="border-y border-border bg-card/30 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">[ 02 ] What I Do</span>
                <h2 className="mt-3 font-display text-5xl italic md:text-6xl">My Skills</h2>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">[ 01 — 04 ]</div>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const isOpen = openService === s.n;
                return (
                  <button
                    type="button"
                    key={s.n}
                    onClick={() => setOpenService(isOpen ? null : s.n)}
                    aria-expanded={isOpen}
                    className={`group bg-background p-10 text-left transition-all hover:bg-card ${isOpen ? "bg-card ring-1 ring-primary" : ""}`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="block font-mono text-[10px] text-muted-foreground">{s.n}/</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{isOpen ? "− Close" : "+ Open"}</span>
                    </div>
                    {s.image && (
                      <div className="mb-5 overflow-hidden border border-border">
                        <img src={s.image} alt={s.title} width={800} height={160} loading="lazy" decoding="async" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    )}
                    <h3 className="mb-4 font-display text-2xl italic group-hover:text-primary">{s.title}</h3>
                    <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                    {!isOpen && (
                      <p className="text-sm text-muted-foreground/70 line-clamp-1">Click to read more →</p>
                    )}
                  </button>
                );
              })}
              <div className="bg-primary/90 p-10 text-primary-foreground">
                <span className="mb-4 block font-mono text-[10px] opacity-70">+</span>
                <h3 className="mb-4 font-display text-2xl italic">Looking for a collaborator?</h3>
                <a href="#contact" className="font-mono text-[11px] uppercase tracking-widest underline underline-offset-4">Get in touch →</a>
              </div>
            </div>

            {/* Skills tabs */}
            <div className="mt-24">
              <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-border pb-4">
                <span className="mr-4 font-mono text-base uppercase tracking-widest text-accent md:text-lg">Skills /</span>
                {(Object.keys(skills) as Array<keyof typeof skills>).map((k) => (
                  <button
                    key={k}
                    onClick={() => setSkillTab(k)}
                    className={`font-mono text-lg uppercase tracking-widest transition md:text-xl ${skillTab === k ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {k}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {skills[skillTab].map((s) => (
                  <span key={s} className="border border-border bg-background px-5 py-3 font-mono text-base transition hover:border-primary hover:text-primary md:text-lg">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK / COLLECTION */}
        <section id="work" className="py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">[ 03 ] Work</span>
                <h2 className="mt-3 font-display text-5xl italic md:text-7xl">Projects</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <ProjectCard
                  key={p.title}
                  p={p}
                  i={i}
                  onClick={() => setOpenProject(p)}
                />
              ))}
            </div>

            {/* Gallery Modal */}
            {openProject && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-6 backdrop-blur-md animate-fade-in"
                onClick={() => setOpenProject(null)}
                role="dialog"
                aria-modal="true"
                aria-label={`${openProject.title} gallery`}
              >
                <div
                  className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-md border border-border bg-card p-6 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{openProject.category} · Folder</span>
                      <h3 className="mt-1 font-display text-3xl italic md:text-4xl">{openProject.title}</h3>
                      <p className="mt-2 max-w-prose text-sm text-muted-foreground">{openProject.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpenProject(null)}
                      className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition hover:border-primary hover:text-primary"
                      aria-label="Close gallery"
                    >
                      Close ✕
                    </button>
                  </div>

                  {/* Show video at top for Media project */}
                  {openProject.coverVideo && (
                    <div className="mb-6 overflow-hidden rounded-sm border border-border">
                      <video
                        src={openProject.coverVideo}
                        controls
                        muted
                        playsInline
                        className="w-full max-h-64 object-cover"
                      />
                      <div className="px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                        Live session footage · MOV
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {openProject.gallery.map((src, idx) => (
                      <button
                        type="button"
                        key={`${src}-${idx}`}
                        onClick={() => setLightbox(src)}
                        className="group relative block overflow-hidden rounded-sm border border-border bg-background text-left focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label={`View ${openProject.title} image ${idx + 1} full screen`}
                      >
                        <img
                          src={src}
                          alt={`${openProject.title} ${idx + 1}`}
                          width={400}
                          height={400}
                          loading="lazy"
                          decoding="async"
                          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 font-mono text-[9px] uppercase tracking-widest">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Lightbox */}
            {lightbox && (
              <div
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 animate-fade-in"
                onClick={() => setLightbox(null)}
                role="dialog"
                aria-modal="true"
                aria-label="Full screen image"
              >
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
                  className="absolute right-4 top-4 z-10 border border-white/40 bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white transition hover:border-white"
                  aria-label="Close full screen"
                >
                  Close ✕
                </button>
                <img
                  src={lightbox}
                  alt="Full screen view"
                  className="max-h-[95vh] max-w-[95vw] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="relative overflow-hidden border-t border-border bg-card/30 py-32">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background/95" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
          <div className="relative mx-auto max-w-3xl px-6">
            <div className="mb-16 text-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">[ 04 ] Experience</span>
              <h2 className="mt-3 font-display text-5xl italic md:text-6xl">Timeline</h2>
            </div>
            <div className="relative space-y-14">
              <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
              {timeline.map((t) => (
                <div key={t.role + t.date} className="relative pl-12">
                  <div className={`absolute left-0 top-1.5 size-4 rounded-full ring-4 ${t.current ? "bg-primary ring-primary/20" : "bg-muted ring-muted/20"}`} />
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">{t.date}</span>
                  <h4 className="mt-1 font-display text-2xl italic">{t.role}</h4>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.org}</p>
                  <p className="mt-3 max-w-[52ch] text-sm text-muted-foreground">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden border-t border-border px-6 py-32">
          {/* Ambient gradient orbs */}
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Available for new projects</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">[ 05 ] Contact</span>
                <h2 className="mt-3 font-display text-5xl italic leading-[0.95] drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] md:text-7xl">
                  Let's work <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">together.</span>
                </h2>
              </div>
              <p className="max-w-sm rounded-xl bg-card/90 p-4 text-sm leading-relaxed text-muted-foreground backdrop-blur-md">
                Send me a message and I'll get back to you soon.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-5">
              {/* Contact channels */}
              <div className="space-y-4 lg:col-span-2">
                {[
                  { label: "Email", value: "elshalomdaba@gmail.com", href: "mailto:elshalomdaba@gmail.com", icon: "M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l2-2h14l2 2" },
                  { label: "Phone", value: "+251 904 957 010", href: "tel:+251904957010", icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" },
                  { label: "Location", value: "Bole, Addis Ababa, ETH", href: null, icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z" },
                  { label: "Instagram", value: "@venecia_her_316", href: "https://instagram.com/venecia_her_316", icon: "M16 8a6 6 0 016 6v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a6 6 0 016-6h8zM12 11a3 3 0 100 6 3 3 0 000-6zm5-1h.01" },
                ].map((c) => {
                  const Tag = c.href ? "a" : "div";
                  return (
                    <Tag
                      key={c.label}
                      {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/90 p-5 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:-translate-y-0.5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={c.icon} />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
                        <p className="truncate text-sm text-foreground transition-colors group-hover:text-primary">{c.value}</p>
                      </div>
                      {c.href && (
                        <svg className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      )}
                    </Tag>
                  );
                })}

                <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/30 to-primary/20 p-6 backdrop-blur-md">
                  <p className="font-display text-2xl italic">Response time</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Under 24 hours · Mon–Sat</p>
                </div>
              </div>

              {/* Form card */}
              <div className="lg:col-span-3">
                <div className="relative rounded-3xl border border-border bg-card/90 p-8 backdrop-blur-xl md:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <h3 className="font-display text-2xl italic">Send a message</h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ get in touch</span>
                  </div>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-5 md:grid-cols-2">
                      {[
                        { label: "Full Name", type: "text", placeholder: "Your name", required: true },
                        { label: "Email Address", type: "email", placeholder: "you@email.com", required: true },
                      ].map((f) => (
                        <div key={f.label} className="group relative">
                          <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{f.label}</label>
                          <input
                            type={f.type}
                            required={f.required}
                            placeholder={f.placeholder}
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/60 focus:bg-background/95 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Subject</label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/60 focus:bg-background/95 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project type</label>
                      <div className="flex flex-wrap gap-2">
                        {["Data / NGO", "Photography", "Media", "Design", "Other"].map((t) => (
                          <label key={t} className="cursor-pointer">
                            <input type="radio" name="ptype" className="peer sr-only" />
                            <span className="block rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground">
                              {t}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project Inquiry</label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project, timeline, and what success looks like…"
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/60 focus:bg-background/95 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <button
                      type="submit"
                      className="warm-glow group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:from-primary hover:to-accent"
                    >
                      <span>Send Message</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                    <p className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Or email me directly — I read everything.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
              <span>© 2026 Elshalom Daba</span>
              <div className="flex gap-8">
                <a href="https://instagram.com/venecia_her_316" target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">Instagram</a>
                <a href="mailto:elshalomdaba@gmail.com" className="transition hover:text-primary">Email</a>
                <a href="tel:+251904957010" className="transition hover:text-primary">Phone</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
