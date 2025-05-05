"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  PhoneIcon as WhatsApp,
  ChevronDown,
  MapPin,
  Clock,
  Bike,
} from "lucide-react";
import { InstagramIcon as BaseTiktokIcon } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";

// Dummy data for vendors
const vendors = [
  {
    id: 1,
    name: "Almonds Cafe",
    description: "Classic milk teas with a twist",
    locations: [
      { name: "East Legon", price: 30 },
      { name: "UPSA", price: 35 },
      { name: "University of Ghana", price: 40 },
      { name: "Adenta", price: 45 },
      { name: "Madina", price: 35 },
      { name: "Haatso", price: 30 },
      { name: "North Legon", price: 35 },
      { name: "Westland", price: 40 },
    ],
    gradient: "from-[#E6D5C7] to-[#F5E6D3]",
  },
  {
    id: 2,
    name: "Boba Fie",
    description: "Fruity flavors and chewy pearls",
    locations: [
      { name: "East Legon", price: 35 },
      { name: "UPSA", price: 30 },
      { name: "University of Ghana", price: 35 },
      { name: "Adenta", price: 40 },
      { name: "Madina", price: 30 },
      { name: "Haatso", price: 35 },
      { name: "North Legon", price: 40 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#D4E4E7] to-[#E8F1F2]",
  },
  {
    id: 3,
    name: "Daddy Boba",
    description: "Premium teas with artisanal toppings",
    locations: [
      { name: "East Legon", price: 40 },
      { name: "UPSA", price: 35 },
      { name: "University of Ghana", price: 30 },
      { name: "Adenta", price: 45 },
      { name: "Madina", price: 35 },
      { name: "Haatso", price: 40 },
      { name: "North Legon", price: 35 },
      { name: "Westland", price: 30 },
    ],
    gradient: "from-[#E8D3D1] to-[#F5E6E4]",
  },
  {
    id: 4,
    name: "Cafe De Boba",
    description: "Innovative flavors and combinations",
    locations: [
      { name: "East Legon", price: 35 },
      { name: "UPSA", price: 40 },
      { name: "University of Ghana", price: 35 },
      { name: "Adenta", price: 30 },
      { name: "Madina", price: 40 },
      { name: "Haatso", price: 35 },
      { name: "North Legon", price: 30 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#D7E3D4] to-[#E8F1E6]",
  },
  {
    id: 5,
    name: "Fika Tea House",
    description: "Organic ingredients, eco-friendly packaging",
    locations: [
      { name: "East Legon", price: 30 },
      { name: "UPSA", price: 35 },
      { name: "University of Ghana", price: 40 },
      { name: "Adenta", price: 35 },
      { name: "Madina", price: 30 },
      { name: "Haatso", price: 35 },
      { name: "North Legon", price: 40 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#E3D5E6] to-[#F0E6F2]",
  },
  {
    id: 6,
    name: "Mixmi",
    description: "Aesthetic drinks for your feed",
    locations: [
      { name: "East Legon", price: 35 },
      { name: "UPSA", price: 30 },
      { name: "University of Ghana", price: 35 },
      { name: "Adenta", price: 40 },
      { name: "Madina", price: 35 },
      { name: "Haatso", price: 30 },
      { name: "North Legon", price: 35 },
      { name: "Westland", price: 40 },
    ],
    gradient: "from-[#D5E6E3] to-[#E6F2F0]",
  },
];

// Delivery times
const deliveryTimes = ["12:00 PM", "4:00 PM", "8:00 PM"];

// Function to get initials from vendor name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Home() {
  const [activeVendor, setActiveVendor] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f7f1ee] ">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center p-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-[#5a3e2b] flex items-center justify-center">
              <span className="text-white font-bold">BG</span>
            </div>
            <h1 className="text-xl font-bold bg-[#5a3e2b] text-transparent bg-clip-text">
              Boba Go
            </h1>
          </motion.div>

          <nav className="hidden md:flex gap-6">
            <NavLink href="#vendors">Vendors</NavLink>
            <NavLink href="#delivery">Delivery</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-purple-600"
          >
            <ChevronDown size={24} />
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 ">
        <div className="flex flex-col md:flex-row items-center gap-8 p-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-[#986d47] text-transparent bg-clip-text text-5xl md:text-8xl">
                Boba Delivered
              </span>
              <br />
              To Your Door
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Get your favorite boba drinks from the best vendors in town,
              <span className="hidden md:inline">
                <br />
              </span>
              delivered right to your doorstep.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#5a3e2b] text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
            >
              Order Now
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full mt-8 md:mt-0"
          >
            <div className="relative h-[450px] md:h-[750px] w-full">
              <Image
                src="/splbg.png?height=400&width=400"
                alt="Boba drinks"
                fill
                className="object-contain rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-xl shadow-lg">
              <p className="text-sm font-bold text-[#986d47]">Fast Delivery</p>
              <p className="text-sm font-bold text-gray-500">
                3 delivery times daily
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vendors Section */}
      <section id="vendors" className="container mx-auto px-4 py-12 md:py-16">
        <SectionTitle>Our Partner Vendors</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {vendors.map((vendor) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: vendor.id * 0.1 }}
            >
              <VendorCard
                vendor={vendor}
                isActive={activeVendor === vendor.id}
                onClick={() =>
                  setActiveVendor(activeVendor === vendor.id ? null : vendor.id)
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery Times Section */}
      <section id="delivery" className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Delivery Times</SectionTitle>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 bg-[#f7f1ee] rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliveryTimes.map((time, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-[#f7f1ee] rounded-full flex items-center justify-center mb-4">
                    <Clock className="text-[#5a3e2b]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{time}</h3>
                  <p className="text-gray-500 text-center mt-2">
                    {index === 0
                      ? "Morning Delivery"
                      : index === 1
                      ? "Afternoon Delivery"
                      : "Evening Delivery"}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-[#986d47] rounded-xl p-4  ">
              <p className="text-center text-white">
                <span className="font-medium">Note:</span> Order at least 1 hour
                before your chosen time to avoid being moved to the next
                delivery slot.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-12 md:py-16">
        <SectionTitle>Place Your Order</SectionTitle>

        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Reach out to us on social media to place your order or ask any
            questions!
          </p>

          <div className="flex justify-center gap-6">
            <SocialButton
              icon={<FaInstagram size={24} />}
              color="bg-[#5a3e2b]"
              href="https://instagram.com/bobagodelivery"
            >
              @bobagodelivery
            </SocialButton>
            <SocialButton icon={<FaWhatsapp size={24} />} color="bg-[#5a3e2b]">
              +233 54 394 0135
            </SocialButton>
            <SocialButton
              icon={<FaSnapchatGhost size={24} />}
              color="bg-[#5a3e2b]"
            >
              @bobagodelivery
            </SocialButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a3e2b] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Boba Bliss</h2>
              <p className="text-white text-sm mt-1">
                Delivering happiness, one boba at a time
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <WhatsApp size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <TiktokIcon size={20} />
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white text-center text-white text-sm">
            &copy; {new Date().getFullYear()} Boba Bliss. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for section titles
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-4">
      <h2 className="text-3xl md:text-4xl font-bold">{children}</h2>
      <div className="w-24 h-1 bg-[#986d47] mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

// Component for navigation links
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      className="font-medium text-gray-700 hover:text-purple-600 transition-colors"
    >
      {children}
    </motion.a>
  );
}

// Component for vendor cards
function VendorCard({
  vendor,
  isActive,
  onClick,
}: {
  vendor: (typeof vendors)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const initials = getInitials(vendor.name);

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-1`}
    >
      <div
        className={`relative h-48 w-full bg-gradient-to-r ${vendor.gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{initials}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-1">{vendor.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{vendor.description}</p>

        <div
          onClick={onClick}
          className="flex items-center gap-1 text-[#986d47] text-sm font-medium cursor-pointer"
        >
          <MapPin size={16} />
          <span>Delivery locations</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${isActive ? "rotate-180" : ""}`}
          />
        </div>

        {isActive && (
          <div className="mt-3 pt-3 border-t">
            <ul className="space-y-2">
              {vendor.locations.map((location, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-sm text-gray-600"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#986d47]"></div>
                    {location.name}
                  </div>
                  <div
                    className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${vendor.gradient} text-black`}
                  >
                    ₵{location.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Component for social media buttons
function SocialButton({
  icon,
  color,
  children,
  href = "#",
}: {
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-lg`}
    >
      {icon}
      <span>{children}</span>
    </motion.a>
  );
}

// TikTok icon component
function TiktokIcon(props: { size: number }) {
  return <BaseTiktokIcon width={props.size} height={props.size} />;
}
