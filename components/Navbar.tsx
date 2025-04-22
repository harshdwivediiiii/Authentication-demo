'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import ModeToggle from './ModeToggle';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow-md dark:bg-black bg-white">
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        Authentication Demo
      </Link>

      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/features"
          className="text-gray-700 dark:text-gray-200 hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Features
        </Link>
        <Link
          href="/about"
          className="text-gray-700 dark:text-gray-200 hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          About
        </Link>
        <ModeToggle />
        <SignInButton>
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button
            variant="default"
            size="sm"
            className="hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white transition-colors"
          >
            Sign Up
          </Button>
        </SignUpButton>
      </div>

      <div className="md:hidden flex items-center space-x-2">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white dark:bg-black">
            <SheetHeader>
              <SheetTitle className="text-lg text-gray-900 dark:text-white">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6 text-gray-800 dark:text-gray-200">
              <Link
                href="/features"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <SignInButton>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white transition-colors"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
