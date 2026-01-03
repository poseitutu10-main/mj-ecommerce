"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="bg-[#D9B899]">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-wrap justify-between items-center h-16">
          <div className="flex items-center gap-4 md:gap-10">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 flex-shrink-0"
            >
              <Image
                src={"/logo.png"}
                width={50}
                height={50}
                priority
                alt="logo"
              />
            </Link>

            <div className="hidden sm:block">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  id="search"
                  className="w-72 md:w-96 max-w-full bg-white rounded-full py-2 pl-10 pr-10 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Start your shopping journey..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <CiSearch color="#D9B899" />
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center md:ml-8 space-x-4 md:space-x-6">
            <Link
              href="/favorite"
              className="text-gray-900 hover:text-gray-800 flex items-center gap-1"
            >
              <FaRegHeart size={18} />
              Favorite
            </Link>
            <Link
              href="/cart"
              className="text-gray-800 hover:text-gray-700 flex items-center gap-1"
            >
              <MdOutlineShoppingCart size={18} />
              Cart
            </Link>

            <Button
              label="Login"
              onClick={() => {}}
              styles="bg-white px-6 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg font-semibold cursor-pointer  "
            />

            <Link href="/signup" className="text-gray-800 hover:text-gray-700">
              Sign up
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                setMobileSearchOpen(!mobileSearchOpen);
              }}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              aria-label="Open search"
            >
              <CiSearch size={20} />
            </button>
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setMobileSearchOpen(false);
              }}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t"
          >
            <div className="px-4 py-3">
              <div className="relative">
                <input
                  id="mobile-search"
                  className="w-full bg-white text-gray-800 rounded-full py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Start your shopping journey..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <CiSearch color="#D9B899" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: 0, opacity: 0 }}
            className="md:hidden border-t"
          >
            <nav className="px-4 py-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Contact
              </Link>
              <Link
                href="/account"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Account
              </Link>
              <Link
                href="/cart"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Cart
              </Link>
            </nav>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
