"use client";

import { useState, useCallback } from "react";
import { Calendar, X, ChevronRight, MapPin, MessageCircle } from "lucide-react";

interface Condition {
  name: string;
  description: string;
}

interface BodyRegion {
  id: string;
  label: string;
  conditions: Condition[];
  // hotspot coordinates
  hx: number;
  hy: number;
  // label and pointer line configuration coordinates
  lx: number; // label text anchor X
  ly: number; // label text anchor Y
  textAnchor: "start" | "end";
  lineX1: number; // pointer line start X (on label side)
  lineX2: number; // pointer line end X (on hotspot side)
}

const BODY_REGIONS: BodyRegion[] = [
  {
    id: "neck",
    label: "Neck",
    hx: 103.16,
    hy: 38,
    lx: 144,
    ly: 40,
    textAnchor: "start",
    lineX1: 140,
    lineX2: 111,
    conditions: [
      {
        name: "Neck Pain",
        description:
          "Persistent stiffness or aching in the cervical region, often worsened by prolonged sitting, screen use, or poor pillow support.",
      },
      {
        name: "Headache & Migraine",
        description:
          "Tension-type and cervicogenic headaches stemming from tight suboccipital muscles and restricted upper-cervical joint mobility.",
      },
      {
        name: "Cervical Spondylosis",
        description:
          "Age-related wear and tear of the cervical discs causing stiffness, radiating arm pain, and occasional tingling in the hands.",
      },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    hx: 80,
    hy: 52,
    lx: 49,
    ly: 54,
    textAnchor: "end",
    lineX1: 53,
    lineX2: 72,
    conditions: [
      {
        name: "Shoulder Pain",
        description:
          "Generalised aching around the glenohumeral joint, frequently caused by overuse, poor posture, or sudden trauma.",
      },
      {
        name: "Rotator Cuff Injury",
        description:
          "Partial or full-thickness tear of the rotator cuff tendons leading to weakness when lifting and night-time pain.",
      },
      {
        name: "Frozen Shoulder",
        description:
          "Progressive loss of shoulder range of motion combined with significant pain, often occurring in diabetics or post-immobilisation.",
      },
    ],
  },
  {
    id: "back",
    label: "Back",
    hx: 103.16,
    hy: 80,
    lx: 144,
    ly: 82,
    textAnchor: "start",
    lineX1: 140,
    lineX2: 111,
    conditions: [
      {
        name: "Lower Back Pain",
        description:
          "Ranging from acute muscle spasm to chronic lumbar disc herniation and facet joint irritation affecting daily function.",
      },
      {
        name: "Sciatica",
        description:
          "Shooting pain, numbness, or tingling radiating from the lower back down one or both legs along the sciatic nerve.",
      },
      {
        name: "Posture & Alignment Issues",
        description:
          "Forward head posture, excessive kyphosis, or scoliosis leading to chronic fatigue and recurring musculoskeletal pain.",
      },
    ],
  },
  {
    id: "knee",
    label: "Knee",
    hx: 94,
    hy: 148,
    lx: 63,
    ly: 150,
    textAnchor: "end",
    lineX1: 67,
    lineX2: 86,
    conditions: [
      {
        name: "Knee Pain",
        description:
          "Diffuse or localised pain around the patella or joint line, affecting daily walking, stair climbing, and sports.",
      },
      {
        name: "ACL / Ligament Rehab",
        description:
          "Structured progressive strengthening and neuromuscular training following ACL injury or reconstruction surgery.",
      },
      {
        name: "Post-Surgical Recovery",
        description:
          "Customised physiotherapy after total knee replacement, arthroscopy, or cartilage procedures to restore full function.",
      },
    ],
  },
  {
    id: "ankle",
    label: "Ankle",
    hx: 94,
    hy: 188,
    lx: 63,
    ly: 190,
    textAnchor: "end",
    lineX1: 67,
    lineX2: 86,
    conditions: [
      {
        name: "Ankle Sprains",
        description:
          "Lateral ligament tears from inversion injuries during sports or walking on uneven ground, causing swelling and instability.",
      },
      {
        name: "Restricted Movement",
        description:
          "Loss of dorsiflexion or plantar-flexion range due to scar tissue, previous injury, or chronic Achilles tightness.",
      },
      {
        name: "Plantar Fasciitis",
        description:
          "Heel and arch pain due to inflammation of the plantar fascia, typically worst with first steps in the morning.",
      },
    ],
  },
];

const HOTSPOT_R = 7; // radius of hotspots within 206.326 viewBox

export default function BodyMap() {
  const [activeRegion, setActiveRegion] = useState<BodyRegion | null>(null);

  const toggle = useCallback((region: BodyRegion) => {
    setActiveRegion((prev) => (prev?.id === region.id ? null : region));
  }, []);

  const onKey = useCallback(
    (e: React.KeyboardEvent, region: BodyRegion) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(region);
      }
    },
    [toggle]
  );

  return (
    <section
      id="body-map"
      aria-label="Interactive body map — select a region to learn about treatments"
      className="py-20 lg:py-28 bg-white border-t border-dark-teal/5"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-teal">
            Find Your Treatment
          </span>
          <h2 className="text-3xl font-extrabold text-dark-teal sm:text-4xl mt-2">
            Where Does It Hurt?
          </h2>
          <p className="mt-3 text-base text-dark-text/70 max-w-xl mx-auto">
            Click on the area where you&apos;re experiencing discomfort to learn
            more about our treatments.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

          {/* SVG Body Map (Scaled up to max-w-[340px]) */}
          <div className="relative mx-auto w-full max-w-[340px] shrink-0 select-none">
            {/* Ambient glow behind body outline */}
            <div className="absolute inset-0 scale-110 rounded-full bg-primary-teal/5 blur-3xl pointer-events-none" />

            <svg
              viewBox="0 0 206.326 206.326"
              aria-hidden="true"
              className="w-full h-auto drop-shadow-md"
            >
              {/* Silhouette SVG Path */}
              <path
                d="M104.265,117.959c-0.304,3.58,2.126,22.529,3.38,29.959c0.597,3.52,2.234,9.255,1.645,12.3 c-0.841,4.244-1.084,9.736-0.621,12.934c0.292,1.942,1.211,10.899-0.104,14.175c-0.688,1.718-1.949,10.522-1.949,10.522 c-3.285,8.294-1.431,7.886-1.431,7.886c1.017,1.248,2.759,0.098,2.759,0.098c1.327,0.846,2.246-0.201,2.246-0.201 c1.139,0.943,2.467-0.116,2.467-0.116c1.431,0.743,2.758-0.627,2.758-0.627c0.822,0.414,1.023-0.109,1.023-0.109 c2.466-0.158-1.376-8.05-1.376-8.05c-0.92-7.088,0.913-11.033,0.913-11.033c6.004-17.805,6.309-22.53,3.909-29.24 c-0.676-1.937-0.847-2.704-0.536-3.545c0.719-1.941,0.195-9.748,1.072-12.848c1.692-5.979,3.361-21.142,4.231-28.217 c1.169-9.53-4.141-22.308-4.141-22.308c-1.163-5.2,0.542-23.727,0.542-23.727c2.381,3.705,2.29,10.245,2.29,10.245 c-0.378,6.859,5.541,17.342,5.541,17.342c2.844,4.332,3.921,8.442,3.921,8.747c0,1.248-0.273,4.269-0.273,4.269l0.109,2.631 c0.049,0.67,0.426,2.977,0.365,4.092c-0.444,6.862,0.646,5.571,0.646,5.571c0.92,0,1.931-5.522,1.931-5.522 c0,1.424-0.348,5.687,0.42,7.295c0.919,1.918,1.595-0.329,1.607-0.78c0.243-8.737,0.768-6.448,0.768-6.448 c0.511,7.088,1.139,8.689,2.265,8.135c0.853-0.407,0.073-8.506,0.073-8.506c1.461,4.811,2.569,5.577,2.569,5.577 c2.411,1.693,0.92-2.983,0.585-3.909c-1.784-4.92-1.839-6.625-1.839-6.625c2.229,4.421,3.909,4.257,3.909,4.257 c2.174-0.694-1.9-6.954-4.287-9.953c-1.218-1.528-2.789-3.574-3.245-4.789c-0.743-2.058-1.304-8.674-1.304-8.674 c-0.225-7.807-2.155-11.198-2.155-11.198c-3.3-5.282-3.921-15.135-3.921-15.135l-0.146-16.635 c-1.157-11.347-9.518-11.429-9.518-11.429c-8.451-1.258-9.627-3.988-9.627-3.988c-1.79-2.576-0.767-7.514-0.767-7.514 c1.485-1.208,2.058-4.415,2.058-4.415c2.466-1.891,2.345-4.658,1.206-4.628c-0.914,0.024-0.707-0.733-0.707-0.733 C115.068,0.636,104.01,0,104.01,0h-1.688c0,0-11.063,0.636-9.523,13.089c0,0,0.207,0.758-0.715,0.733 c-1.136-0.03-1.242,2.737,1.215,4.628c0,0,0.572,3.206,2.058,4.415c0,0,1.023,4.938-0.767,7.514c0,0-1.172,2.73-9.627,3.988 c0,0-8.375,0.082-9.514,11.429l-0.158,16.635c0,0-0.609,9.853-3.922,15.135c0,0-1.921,3.392-2.143,11.198 c0,0-0.563,6.616-1.303,8.674c-0.451,1.209-2.021,3.255-3.249,4.789c-2.408,2.993-6.455,9.24-4.29,9.953 c0,0,1.689,0.164,3.909-4.257c0,0-0.046,1.693-1.827,6.625c-0.35,0.914-1.839,5.59,0.573,3.909c0,0,1.117-0.767,2.569-5.577 c0,0-0.779,8.099,0.088,8.506c1.133,0.555,1.751-1.047,2.262-8.135c0,0,0.524-2.289,0.767,6.448 c0.012,0.451,0.673,2.698,1.596,0.78c0.779-1.608,0.429-5.864,0.429-7.295c0,0,0.999,5.522,1.933,5.522 c0,0,1.099,1.291,0.648-5.571c-0.073-1.121,0.32-3.422,0.369-4.092l0.106-2.631c0,0-0.274-3.014-0.274-4.269 c0-0.311,1.078-4.415,3.921-8.747c0,0,5.913-10.488,5.532-17.342c0,0-0.082-6.54,2.299-10.245c0,0,1.69,18.526,0.545,23.727 c0,0-5.319,12.778-4.146,22.308c0.864,7.094,2.53,22.237,4.226,28.217c0.886,3.094,0.362,10.899,1.072,12.848 c0.32,0.847,0.152,1.627-0.536,3.545c-2.387,6.71-2.083,11.436,3.921,29.24c0,0,1.848,3.945,0.914,11.033 c0,0-3.836,7.892-1.379,8.05c0,0,0.192,0.523,1.023,0.109c0,0,1.327,1.37,2.761,0.627c0,0,1.328,1.06,2.463,0.116 c0,0,0.91,1.047,2.237,0.201c0,0,1.742,1.175,2.777-0.098c0,0,1.839,0.408-1.435-7.886c0,0-1.254-8.793-1.945-10.522 c-1.318-3.275-0.387-12.251-0.106-14.175c0.453-3.216,0.21-8.695-0.618-12.934c-0.606-3.038,1.035-8.774,1.641-12.3 c1.245-7.423,3.685-26.373,3.38-29.959l1.008,0.354C103.809,118.312,104.265,117.959,104.265,117.959z"
                fill="#E8F8F5"
                stroke="#0D5C5A"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* Dotted pointer lines and indicator dots */}
              {BODY_REGIONS.map((region) => {
                const active = activeRegion?.id === region.id;
                return (
                  <g key={`lines-${region.id}`} className="transition-all duration-300">
                    {/* Dashed line */}
                    <line
                      x1={region.lineX1}
                      y1={region.hy}
                      x2={region.lineX2}
                      y2={region.hy}
                      stroke="#00C9B7"
                      strokeWidth="0.8"
                      strokeDasharray="1.5,1.5"
                      opacity={activeRegion ? (active ? 1 : 0.25) : 0.7}
                      className="transition-all duration-300"
                    />
                    {/* Small anchor dot on the label side */}
                    <circle
                      cx={region.lineX1}
                      cy={region.hy}
                      r="1.2"
                      fill="#00C9B7"
                      opacity={activeRegion ? (active ? 1 : 0.25) : 0.7}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* Clickable Hotspots & Labels */}
              {BODY_REGIONS.map((region) => {
                const active = activeRegion?.id === region.id;
                const isAnyActive = activeRegion !== null;
                const opacity = isAnyActive ? (active ? 1 : 0.3) : 0.95;

                return (
                  <g
                    key={region.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${region.label} — press to see conditions`}
                    aria-pressed={active}
                    onClick={() => toggle(region)}
                    onKeyDown={(e) => onKey(e, region)}
                    className="cursor-pointer focus:outline-none transition-all duration-300"
                    style={{ opacity }}
                  >
                    {/* Pulsing ring for active state */}
                    {active && (
                      <circle
                        cx={region.hx}
                        cy={region.hy}
                        r={HOTSPOT_R + 5}
                        fill="none"
                        stroke="#00C9B7"
                        strokeWidth="1"
                        opacity="0.5"
                        className="animate-ping"
                        style={{ transformOrigin: `${region.hx}px ${region.hy}px` }}
                      />
                    )}

                    {/* Outer border ring */}
                    <circle
                      cx={region.hx}
                      cy={region.hy}
                      r={HOTSPOT_R + 2}
                      fill="none"
                      stroke="#00C9B7"
                      strokeWidth={active ? "1.5" : "1"}
                      opacity={active ? 1 : 0.6}
                      className="transition-all duration-200"
                    />

                    {/* Inner filled dot */}
                    <circle
                      cx={region.hx}
                      cy={region.hy}
                      r={HOTSPOT_R}
                      fill={active ? "#00C9B7" : "white"}
                      stroke="#00C9B7"
                      strokeWidth="1"
                      className="transition-all duration-200"
                    />

                    {/* + / x sign */}
                    {active ? (
                      <>
                        <line
                          x1={region.hx - 2.5} y1={region.hy - 2.5}
                          x2={region.hx + 2.5} y2={region.hy + 2.5}
                          stroke="white" strokeWidth="1" strokeLinecap="round"
                        />
                        <line
                          x1={region.hx + 2.5} y1={region.hy - 2.5}
                          x2={region.hx - 2.5} y2={region.hy + 2.5}
                          stroke="white" strokeWidth="1" strokeLinecap="round"
                        />
                      </>
                    ) : (
                      <>
                        <line
                          x1={region.hx} y1={region.hy - 3}
                          x2={region.hx} y2={region.hy + 3}
                          stroke="#00C9B7" strokeWidth="1" strokeLinecap="round"
                        />
                        <line
                          x1={region.hx - 3} y1={region.hy}
                          x2={region.hx + 3} y2={region.hy}
                          stroke="#00C9B7" strokeWidth="1" strokeLinecap="round"
                        />
                      </>
                    )}

                    {/* Highly readable text label pointed to by dotted lines */}
                    <text
                      x={region.lx}
                      y={region.ly}
                      fontSize="7.5"
                      fontWeight={active ? "900" : "700"}
                      fontFamily="Inter, sans-serif"
                      fill={active ? "#00C9B7" : "#1A3C3A"}
                      textAnchor={region.textAnchor}
                      className="select-none transition-all duration-200"
                    >
                      {region.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            <p className="mt-2 text-center text-xs text-dark-text/45 font-medium">
              Tap a <span className="text-primary-teal font-bold">+</span> hotspot to view conditions
            </p>
          </div>

          {/* Info Panel side-drawer */}
          <div className="w-full lg:max-w-xl">
            {!activeRegion ? (
              /* Empty state */
              <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-dark-teal/15 bg-light-mint/30 px-10 py-20 text-center h-full min-h-[400px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-teal/10 text-primary-teal mb-5">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-extrabold text-dark-teal">
                  Select a Body Region
                </h3>
                <p className="mt-2 text-sm text-dark-text/60 max-w-xs">
                  Click any <span className="text-primary-teal font-bold">+</span> hotspot on the body map to see common conditions and available treatments.
                </p>
                {/* Quick-select pills */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {BODY_REGIONS.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => toggle(r)}
                      className="rounded-full border border-primary-teal/30 bg-white px-4 py-1.5 text-xs font-bold text-dark-teal hover:bg-primary-teal hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2"
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Active region panel */
              <div
                key={activeRegion.id}
                className="rounded-3xl border border-primary-teal/20 bg-white shadow-2xl shadow-dark-teal/5 overflow-hidden"
                style={{ animation: "fadeSlideIn 0.25s ease-out" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between bg-gradient-to-r from-dark-teal to-dark-teal/80 px-8 py-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                      Region Selected
                    </p>
                    <h3 className="text-2xl font-extrabold text-white mt-0.5">
                      {activeRegion.label}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveRegion(null)}
                    aria-label="Close panel"
                    className="rounded-xl bg-white/10 p-2 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Condition cards */}
                <div className="p-6 space-y-4">
                  {activeRegion.conditions.map((condition, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-dark-teal/8 bg-light-mint/20 p-5 hover:bg-white hover:border-primary-teal/25 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="flex h-2 w-2 rounded-full bg-primary-teal shrink-0" />
                            <h4 className="font-extrabold text-dark-teal text-sm">
                              {condition.name}
                            </h4>
                          </div>
                          <p className="text-sm text-dark-text/75 leading-relaxed">
                            {condition.description}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-dark-text/25 group-hover:text-primary-teal shrink-0 mt-0.5 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="border-t border-dark-teal/8 px-6 py-5 bg-light-mint/20">
                  <a
                    href={`https://wa.me/919773953209?text=${encodeURIComponent(
                      `Hello Dr. Rajashree Lad, I would like to book a consultation for my ${activeRegion.label.toLowerCase()} pain/discomfort. I saw this option on your interactive body map.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300"
                  >
                    <MessageCircle className="h-4.5 w-4.5 shrink-0" />
                    Book Consultation for {activeRegion.label}
                  </a>
                  <p className="mt-3 text-center text-xs text-dark-text/50">
                    Direct chat with Dr. Lad:{" "}
                    <a
                      href="tel:9773953209"
                      className="font-bold text-primary-teal hover:underline"
                    >
                      +91 9773953209
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
