'use client';

import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const teamMembers = [
    {
      name: 'AR.Salman Mehmood',
      designation: 'Founder and Managing Director',
      image: '/team1.jpg',
      bio: 'Highly experienced and skilled architect who has worked on various projects not only in Pakistan but out of country too. He has been a project manager, owner, leader and director at his firm HiARC since 10 years. He has also worked for several other renowned firms ie Raees Faheem Associates. He has been involved in design and execution of Healthcare, Commercial, Corporate, Residential, and Urban planning projects. He has leadership qualities of taking his entire team in unity and working together to produce the best he can. Highly passionate and disciplined towards his work.',
    },
    {
      name: 'AR.Nouman Mehmood',
      designation: 'Co-Founder and Associate Architect',
      image: '/team2.png',
      bio: 'Highly innovative and passionate architect, graduated from NCA, who has assisted various projects in multiple cities of Pakistan. He has been an associate architect at architectural firm Hi arc since 6 years. He has also worked for other firms ie ARCHITECTS INC. He has been involved in design and execution of Commercial, Corporate, Residential, and Urban planning projects.',
    },
  ];

  return (
    <>
      <section
        id="about"
        className="bg-[#1A3C36] min-h-screen flex flex-col items-center justify-center pb-8 px-4"
      >
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-bold text-[#7ED6C1] tracking-widest mb-2 text-center"
        >
          ABOUT US
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-[2px] bg-[#7ED6C1] mb-12 origin-left"
        />

        <motion.div variants={scaleIn} initial="hidden" whileInView="visible">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="object-contain mt-10 mb-10"
          />
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="animate-bounce mt-4 text-[#7ED6C1]"
          aria-label="Scroll to team section"
        >
          <ChevronDown size={36} />
        </motion.button>
      </section>

      <section
        ref={aboutRef}
        className="bg-[#1A3C36] text-white py-16 px-4 md:px-20 flex justify-center"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-3xl text-center bg-[#629e90]/20 rounded-lg p-8 shadow-lg border border-[#7ED6C1]/40"
        >
          <h2 className="text-3xl font-extrabold mb-6 text-[#7ED6C1]">
            WHO WE ARE
          </h2>
          <p className="text-lg leading-7 text-[#E6F4EF]">
            We provide comprehensive architectural and engineering design
            solutions for residential, commercial, industrial, and public
            projects. Our expertise covers feasibility studies, cost estimation,
            project management, and quality control. Using advanced tools like
            AutoCAD, 3ds Max, SketchUp, and Revit, we deliver accurate models
            and renderings. We work closely with clients, contractors, and
            authorities to ensure designs meet all requirements, and oversee
            projects from concept to completion with a focus on quality and
            precision.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#1A3C36] py-20 px-4 md:px-20 space-y-20">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative w-72 h-80 flex-shrink-0 rounded-lg overflow-hidden shadow-lg border-2 border-[#7ED6C1]"
            >
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="flex-1 text-white"
            >
              <h3 className="text-2xl font-bold text-[#7ED6C1]">
                {member.name}
              </h3>
              <p className="text-[#629e90] font-semibold mb-4">
                {member.designation}
              </p>
              <p className="leading-7 text-[#E6F4EF]">{member.bio}</p>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </>
  );
}
