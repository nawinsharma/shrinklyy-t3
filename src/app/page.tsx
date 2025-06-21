'use client'

import { motion } from 'framer-motion'
import { Link, Zap } from 'lucide-react'
import LandingNavbar from '@/components/LandingNavbar'
import AnimatedGradient from '@/components/AnimatedGradient'
import ElegantShape from '@/components/ElegantShape'
import HoverTextReveal from '@/components/HoverTextReveal'
import InteractiveButton from '@/components/InteractiveButton'
import type { Variants } from 'framer-motion'
function Home() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <div className='relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]'>
      <LandingNavbar />
      {/* Animated Background Gradient */}
      <AnimatedGradient
        colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
        speed={0.3}
        blur='heavy'
      />

      {/* Floating Shapes */}
      <div className='absolute inset-0 overflow-hidden'>
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient='from-blue-500/[0.15]'
          className='left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]'
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient='from-purple-500/[0.15]'
          className='right-[-5%] top-[70%] md:right-[0%] md:top-[75%]'
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient='from-cyan-500/[0.15]'
          className='bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]'
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient='from-emerald-500/[0.15]'
          className='right-[15%] top-[10%] md:right-[20%] md:top-[15%]'
        />
      </div>

      <div className='container relative z-10 mx-auto px-4 md:px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          {/* Brand Badge */}
          <motion.div
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 md:mb-12'
          >
            <Link className='h-4 w-4 text-blue-400' />
            <span className='text-sm tracking-wide text-white/60'>
              URL Shortener
            </span>
          </motion.div>

          {/* Interactive Brand Name */}
          <motion.div
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className='mb-8 md:mb-12'
          >
            <HoverTextReveal
              items={['s', 'h', 'r', 'i', 'n', 'k', 'l', 'y', 'y', 'y']}
              className='mx-auto max-w-3xl'
            />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
          >
            <h1 className='mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:mb-8 md:text-6xl'>
              <span className='bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
                Shorten Your Links
              </span>
              <br />
              <span className='bg-gradient-to-r from-blue-300 via-white/90 to-purple-300 bg-clip-text text-transparent'>
                Share with Style
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
          >
            <p className='mx-auto mb-8 max-w-2xl px-4 text-base font-light leading-relaxed tracking-wide text-white/60 sm:text-lg md:mb-12 md:text-xl'>
              Turn long, complicated URLs into easy-to-share short links in
              seconds. Make your links memorable and professional.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className='mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row'
          >
            <InteractiveButton text='Start Shortening' />
            <a
              href='https://github.com/nawinkumarsharma/shrinklyy-t3'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white'
            >
              <Zap className='h-4 w-4 text-yellow-400' />
              <span className='text-sm font-medium tracking-wide'>
                View on GitHub
              </span>
            </a>
          </motion.div>

          {/* Feature Preview */}
          <motion.div
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className='mx-auto max-w-2xl'
          >
            <div className='rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm md:p-8'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='h-3 w-3 rounded-full bg-red-500'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                <div className='h-3 w-3 rounded-full bg-green-500'></div>
              </div>
              <div className='space-y-3 text-left'>
                <div className='text-sm text-white/40'>Original URL:</div>
                <div className='rounded-lg border border-white/[0.05] bg-white/[0.02] p-3 font-mono text-sm text-white/60'>
                  https://example.com/very/long/url/that/needs/shortening/take/a/look/at/this/url/njadcndndksajcnasjkcmkds
                </div>
                <div className='text-sm text-white/40'>Shortened URL:</div>
                <div className='rounded-lg border border-white/[0.05] bg-white/[0.02] p-3 font-mono text-sm text-blue-400'>
                  trim.nawin.xyz/short
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80' />
    </div>
  )
}

export default Home
