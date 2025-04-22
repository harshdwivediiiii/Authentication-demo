'use client';

import { motion } from 'framer-motion';
import { LockKeyhole, LogIn, UserPlus, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const AuthHome = () => {
  const { isSignedIn } = useUser();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || typeof isSignedIn === 'undefined') return null;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const handleClick = (path: string) => {
    if (isSignedIn) {
      router.push(path);
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed7?q=80&w=2940')] bg-cover bg-center opacity-5 dark:opacity-10" />

      {/* Content */}
      <div className="relative mx-auto max-w-screen-xl px-4 pt-20 lg:pt-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center rounded-full bg-gray-300 px-4 py-1 text-gray-800 mb-8 dark:bg-gray-700 dark:text-gray-300"
          >
            <LockKeyhole className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Secure Authentication System</span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100"
          >
            Auth Made Easy for
            <span className="relative whitespace-nowrap text-black block mt-2 dark:text-white">
              <TypeAnimation
                sequence={[
                  'Developers',
                  2000,
                  'Startups',
                  2000,
                  'SaaS Platforms',
                  2000,
                  'Internal Tools',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="relative"
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Implement secure login, sign-up, and session management in minutes using Clerk-powered auth.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button
              onClick={() => handleClick('/dashboard')}
              className="group relative inline-flex items-center gap-x-2 rounded-full bg-gray-800 px-8 py-4 text-white hover:bg-gray-700 transition dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              Go to Dashboard
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => router.push('/sign-up')}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-800 transition dark:text-gray-100 dark:hover:text-gray-400"
            >
              Sign Up <span aria-hidden="true">→</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: LogIn,
                title: 'Instant Sign-In',
                desc: 'Allow users to log in securely using email, password, or social logins.',
              },
              {
                Icon: UserPlus,
                title: 'Easy Onboarding',
                desc: 'Seamlessly register users with a beautiful and customizable sign-up flow.',
              },
              {
                Icon: LockKeyhole,
                title: 'Secure Sessions',
                desc: 'User sessions are managed with best practices to ensure security and privacy.',
              },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 opacity-25 blur transition group-hover:opacity-75 dark:opacity-50" />
                <div className="relative rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900">
                  <Icon className="h-10 w-10 text-gray-800 dark:text-gray-400" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Trusted by devs & startups worldwide</p>
          <div className="mt-6 flex justify-center gap-x-8 grayscale opacity-50">
            {[
              'https://tailwindui.com/img/logos/tuple-logo-gray-900.svg',
              'https://tailwindui.com/img/logos/reform-logo-gray-900.svg',
              'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
            ].map((src, i) => (
              <Image key={i} height={32} width={158} className="h-8" src={src} alt="Company" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthHome;
