"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const skills = ["Python", "PyTorch", "MLOps", "Kubernetes", "AWS", "LLMOps"];

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-grid-small-white/[0.08]" />
      <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_36%),linear-gradient(to_bottom,rgba(2,6,23,0.1),#020617_78%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-28 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-blue-950/30 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
          Building production-ready AI systems
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300"
        >
          Yesid López
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="max-w-5xl bg-gradient-to-br from-white via-slate-100 to-blue-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl"
        >
          AI Engineer | ML Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl"
        >
          I design, deploy, and scale AI-powered applications with production-ready
          ML pipelines, cloud-native infrastructure, and reliable MLOps practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/portfolio"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-xl hover:shadow-blue-500/20"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-white/[0.08]"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.44 }}
          className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 backdrop-blur"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
