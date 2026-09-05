"use client";

import * as React from "react";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Database,
  MoveRight,
  Route,
  Search,
  Sparkles,
} from "lucide-react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { MiniPrimitiveLockup, PrismFeatureLockup } from "@/components/ui/primitive-brand";

const STORY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=88", alt: "Nebula representing cosmic origins" },
  { src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=88", alt: "Earth from space" },
  { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=88", alt: "Microscopic biological forms" },
  { src: "https://images.unsplash.com/photo-1512206533059-361c5b6c40a4?auto=format&fit=crop&w=1600&q=88", alt: "Jellyfish underwater" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=88", alt: "Dense green forest" },
  { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=88", alt: "Human figure in open landscape" },
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=88", alt: "Cultivated fields" },
  { src: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1600&q=88", alt: "Ancient pyramids" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=88", alt: "Electronic circuitry representing AI" },
];

const PROCESS = [
  ["01", "Identify the constraint", "Find what is actually limiting the system — not just the symptom that is easiest to see."],
  ["02", "Set the perspective", "Choose the boundary, scale, observer and objective that make the problem useful to reason about."],
  ["03", "Map the domain", "Capture states, relationships, uncertainty and the paths that connect them."],
  ["04", "Explore the space", "Search beyond the default route and compare what the system could become."],
  ["05", "Cross the domains", "Borrow structures and solutions that already work elsewhere."],
  ["06", "Build the shortest path", "Collapse the useful signal into the simplest viable intervention."],
  ["07", "Test against reality", "Measure behaviour, trace outcomes and keep what survives contact with the real system."],
  ["08", "Recurse", "Feed the result back in. The next pass starts with a better map."],
] as const;

const SERVICES = [
  {
    title: "Systems Audits",
    price: "From A$1.5k",
    icon: Search,
    body: "A focused map of where time, information and judgement are leaking across your operation — with the highest-value opportunities ranked first.",
    points: ["Workflow map", "Opportunity register", "Pilot roadmap"],
  },
  {
    title: "Primitive Router",
    price: "From A$7.5k",
    icon: Route,
    body: "A model-agnostic routing layer that sends work to the right model, tool, agent or human based on cost, risk, capability and context.",
    points: ["Routing policies", "Traceable decisions", "Cost controls"],
  },
  {
    title: "Retrieval Base",
    price: "From A$6k",
    icon: Database,
    body: "A grounded knowledge layer for procedures, evidence, project history and operational memory — searchable by people and usable by AI.",
    points: ["Structured ingestion", "Permissions", "Evaluation loops"],
  },
  {
    title: "Custom Built Systems",
    price: "From A$12k",
    icon: Boxes,
    body: "Purpose-built internal tools and applied AI systems designed around the way your business actually works, not around a generic software template.",
    points: ["Local-first options", "Interfaces & automations", "Deployment & iteration"],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] font-medium uppercase tracking-[0.34em] text-black/42 sm:text-[11px]">{children}</div>;
}

function CorridorSection() {
  const word = "Emergent";
  return (
    <section id="emergence" className="flex min-h-[100svh] w-full items-center bg-white px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="mx-auto w-full max-w-[1720px]">
        <ImageStreamHero
          images={STORY_IMAGES}
          cards={7}
          speed={25}
          axis={58}
          path={{
            perspective: 17,
            cardWidth: 42,
            cardHeight: 56,
            birthHeight: 6.5,
            exitHeight: 112,
            railBirth: -15,
            railExit: 66,
            turnBirth: 8,
            turnExit: 34,
          }}
          className="card-shadow h-[calc(100svh-1.5rem)] min-h-[650px] w-full rounded-[2.5rem] border border-black/8 bg-[#FBFCFE] sm:h-[calc(100svh-2.5rem)] sm:rounded-[3rem]"
        >
          <div className="relative z-10 flex h-full flex-col items-center justify-between px-4 py-8 text-center sm:py-10">
            <div className="w-full">
              <div className="mb-5 flex items-center justify-between px-2 sm:px-4">
                <MiniPrimitiveLockup />
                <Eyebrow>recursive emergence</Eyebrow>
              </div>
              <h1 className="mx-auto max-w-[920px] text-balance text-[clamp(3.25rem,10vw,8rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-black">
                <span className="block" aria-label="Emergent">
                  {word.split("").map((letter, index) => (
                    <span
                      key={`${letter}-${index}`}
                      aria-hidden="true"
                      className="emergent-letter"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <span className="block">Intelligence</span>
              </h1>
            </div>

            <div className="flex flex-col items-center gap-4 px-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.38em] text-black/42 sm:text-xs">recursively primitive</p>
              <a href="#main" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/88 px-4 py-2.5 text-sm font-medium text-black shadow-sm backdrop-blur">
                Continue <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </ImageStreamHero>
      </div>
    </section>
  );
}

function MainHero() {
  return (
    <section id="main" className="soft-brand-wash relative flex min-h-screen w-full items-center overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="flex items-center justify-between gap-6">
          <MiniPrimitiveLockup />
          <Eyebrow>Applied intelligence studio</Eyebrow>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,380px)] lg:items-end">
          <div>
            <Eyebrow>Start beneath the obvious.</Eyebrow>
            <h2 className="mt-5 max-w-[980px] text-balance text-[clamp(4rem,11vw,9.4rem)] font-semibold leading-[0.82] tracking-[-0.078em] text-black">
              Intelligence
              <br />
              made simple.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-balance text-[1.1rem] leading-8 text-black/56 sm:text-[1.28rem] sm:leading-8">
              A research studio seeking the shortest path through complex systems — then building what survives the trip.
            </p>
            <div className="mt-8 h-[2px] w-16 rounded-full bg-[linear-gradient(90deg,#60d5ff,#af9bff,#ff8bd9)]" />
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <p className="max-w-[760px] text-balance text-[1.08rem] leading-8 text-black/60 sm:text-[1.22rem]">
            We contract the noise, trace the system and expand what works. The result is software, routing, retrieval and decision support built from the way the underlying system actually behaves.
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
              View services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#method" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5">
              How we work <MoveRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="method" className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Eyebrow>Primitive method</Eyebrow>
            <h3 className="mt-4 max-w-[620px] text-balance text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-black">
              Search wider.
              <br />
              Collapse harder.
            </h3>
          </div>
          <p className="max-w-[640px] text-balance text-[1.05rem] leading-8 text-black/56 lg:justify-self-end">
            Instead of assuming the first framing is correct, we change the lens, map the relationships, search across domains and keep reducing until the shortest useful path remains.
          </p>
        </div>

        <div className="panel-grid panel-shadow mt-12 overflow-hidden rounded-[2.25rem] border border-black/8 bg-[#FBFCFE] p-3 sm:p-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS.map(([number, title, body]) => (
              <div key={number} className="min-h-[230px] rounded-[1.75rem] border border-black/7 bg-white/92 p-5 backdrop-blur sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.28em] text-black/34">{number}</span>
                  <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#60d5ff,#ff8bd9)]" />
                </div>
                <h4 className="mt-10 text-[1.5rem] font-semibold tracking-[-0.05em] text-black">{title}</h4>
                <p className="mt-3 text-[0.96rem] leading-7 text-black/54">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrismSection() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="panel-grid panel-shadow mx-auto max-w-[1480px] overflow-hidden rounded-[2.5rem] border border-black/8 bg-[#FBFCFE] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <Eyebrow>Why Primitive</Eyebrow>
            <h3 className="mt-4 text-balance text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-black">
              The useful answer is rarely sitting on the obvious path.
            </h3>
            <p className="mt-6 max-w-[560px] text-[1.02rem] leading-8 text-black/56">
              Primitive Labs treats complexity as something to contract, not decorate. We look for the smallest representation that preserves what matters — then use it to route, retrieve, automate or build.
            </p>
          </div>
          <PrismFeatureLockup />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Eyebrow>Paid services</Eyebrow>
            <h3 className="mt-4 max-w-[680px] text-balance text-[clamp(3rem,7vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-black">
              Useful systems, <span className="gradient-text">not AI theatre.</span>
            </h3>
          </div>
          <p className="max-w-[640px] text-balance text-[1.05rem] leading-8 text-black/56 lg:justify-self-end">
            Start with a narrow intervention or commission the whole system. Every engagement is scoped around measurable friction, evidence and a defined path to deployment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card-shadow rounded-[2rem] border border-black/8 bg-[#FBFCFE] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/8 bg-white">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <div className="rounded-full border border-black/8 bg-white px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black/55">
                    {service.price}
                  </div>
                </div>
                <h4 className="mt-8 text-[2rem] font-semibold tracking-[-0.055em] text-black sm:text-[2.2rem]">{service.title}</h4>
                <p className="mt-3 max-w-[38rem] text-[1rem] leading-7 text-black/56">{service.body}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {service.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-black/7 bg-white px-4 py-4 text-sm font-medium text-black/66">
                      {point}
                    </div>
                  ))}
                </div>
                <button type="button" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Scope this <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  const items = [
    [BrainCircuit, "Model-agnostic", "Use the model that fits the task. Keep the orchestration layer independent of any single vendor."],
    [Database, "Grounded", "Connect generation to evidence, procedures, project memory and domain-specific retrieval."],
    [Sparkles, "Local-first where it matters", "Keep sensitive data, inference or control close to the organisation when the risk profile demands it."],
    [Route, "Traceable", "Make routes, sources, assumptions and outcomes inspectable enough to improve over time."],
  ] as const;

  return (
    <section className="w-full bg-white px-6 pb-24 pt-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map(([Icon, title, body], index) => (
            <div key={title} className={`card-shadow rounded-[2rem] border p-6 ${index === 0 ? "border-black bg-black text-white" : "border-black/8 bg-[#FBFCFE] text-black"}`}>
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${index === 0 ? "bg-white/10" : "border border-black/8 bg-white"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.05em]">{title}</h4>
              <p className={`mt-3 text-[0.96rem] leading-7 ${index === 0 ? "text-white/68" : "text-black/54"}`}>{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-[2rem] border border-black/8 bg-white px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <Eyebrow>Primitive Labs</Eyebrow>
            <p className="mt-2 max-w-[760px] text-balance text-[1rem] leading-7 text-black/56 sm:text-[1.12rem] sm:leading-8">
              Contract the noise. Trace the system. Expand what works.
            </p>
          </div>
          <div className="hidden rounded-full bg-black p-3 text-white sm:block">
            <BrainCircuit className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DemoPage() {
  return (
    <ArcRevealHero greetingHold={1320} revealDuration={1450} className="bg-white">
      <CorridorSection />
      <MainHero />
      <MethodSection />
      <PrismSection />
      <ServicesSection />
      <PrinciplesSection />
    </ArcRevealHero>
  );
}