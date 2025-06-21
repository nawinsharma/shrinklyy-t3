"use client";

import AnimatedGradient from "@/components/AnimatedGradient";
import ElegantShape from "@/components/ElegantShape";
import SignInWithGitHubButton from "@/components/SignInWithGitHubButton";
import SignInWithGoogleButton from "@/components/SignInWithGoogle";
import Link from "next/link";

export default function AuthPage() {

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]">
      <AnimatedGradient
        colors={["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"]}
        speed={0.3}
        blur="heavy"
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-purple-500/[0.15]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-cyan-500/[0.15]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-emerald-500/[0.15]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-2xl w-full">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm md:p-8 shadow-lg">
            <Link href="/" className="mb-6 inline-block">
              <span className="text-white font-bold text-md underline hover:text-blue-700">Home</span>
            </Link>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:mb-6 md:text-5xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent text-center">
              Get Started Now!
            </h1>
            <h2 className="mb-6 text-lg text-white/60 text-center">
              Sign in quickly using
            </h2>
            <div className="flex flex-col items-center gap-4">
              <SignInWithGitHubButton />
              <SignInWithGoogleButton />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
    </div>
  );
}
