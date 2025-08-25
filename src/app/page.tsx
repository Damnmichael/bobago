"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  MapPin,
  X,
  User,
  Phone,
  ShoppingBag,
  Coffee,
  Package,
} from "lucide-react";

import { FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";

// Dummy data for vendors
const vendors = [
  {
    id: 1,
    name: "Almond Deserts",
    description: "La-Bawaleshi Road, East Legon",
    locations: [
      { name: "East Legon", price: 20 },
      { name: "UPSA", price: 25 },
      { name: "University of Ghana", price: 30 },
      { name: "Adenta", price: 40 },
      { name: "Madina", price: 35 },
      { name: "Haatso", price: 35 },
      { name: "North Legon", price: 35 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#E6D5C7] to-[#F5E6D3]",
  },
  {
    id: 2,
    name: "Boba Fie",
    description: "Garden Road, East Legon",
    locations: [
      { name: "East Legon", price: 20 },
      { name: "UPSA", price: 25 },
      { name: "University of Ghana", price: 30 },
      { name: "Adenta", price: 40 },
      { name: "Madina", price: 35 },
      { name: "Haatso", price: 35 },
      { name: "North Legon", price: 35 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#D4E4E7] to-[#E8F1F2]",
  },
  {
    id: 3,
    name: "Daddy Boba",
    description: "Jungle Avenue, East Legon",
    locations: [
      { name: "East Legon", price: 20 },
      { name: "UPSA", price: 25 },
      { name: "University of Ghana", price: 30 },
      { name: "Adenta", price: 40 },
      { name: "Madina", price: 35 },
      { name: "Haatso", price: 35 },
      { name: "North Legon", price: 35 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#E8D3D1] to-[#F5E6E4]",
  },
  {
    id: 4,
    name: "Cafe De Boba",
    description: "1st Blohum Road, Dzorwulu",
    locations: [
      { name: "East Legon", price: 30 },
      { name: "UPSA", price: 35 },
      { name: "University of Ghana", price: 35 },
      { name: "Adenta", price: 45 },
      { name: "Madina", price: 40 },
      { name: "Haatso", price: 30 },
      { name: "North Legon", price: 35 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#D7E3D4] to-[#E8F1E6]",
  },
  {
    id: 5,
    name: "Fika Tea House",
    description: "Cairo Street, East Legon",
    locations: [
      { name: "East Legon", price: 20 },
      { name: "UPSA", price: 25 },
      { name: "University of Ghana", price: 30 },
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
    description: "Agbogba-Ashongman Road, North Legon",
    locations: [
      { name: "East Legon", price: 35 },
      { name: "UPSA", price: 30 },
      { name: "University of Ghana", price: 25 },
      { name: "Adenta", price: 35 },
      { name: "Madina", price: 25 },
      { name: "Haatso", price: 25 },
      { name: "North Legon", price: 20 },
      { name: "Westland", price: 35 },
    ],
    gradient: "from-[#D5E6E3] to-[#E6F2F0]",
  },
];

// Add boba flavors
const bobaFlavors = [
  "Classic Milk Tea",
  "Taro Milk Tea",
  "Brown Sugar Milk Tea",
  "Thai Milk Tea",
  "Matcha Milk Tea",
  "Honey Milk Tea",
  "Wintermelon Milk Tea",
  "Strawberry Milk Tea",
];

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [isOrderSheetOpen, setIsOrderSheetOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vendor: "",
    flavor: "",
    quantity: "1",
    location: "", // start empty
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log("Order submitted:", formData);
    // For now, we'll just close the sheet
    setIsOrderSheetOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f1ee]">
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-r from-[#5a3e2b] to-[#986d47] text-white p-6 md:p-8 rounded-2xl shadow-xl w-[90%] max-w-lg mx-auto"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="font-baloo text-2xl md:text-4xl font-bold mb-3">
                  Grand Opening Special! 🎉
                </h3>
                <p className="text-sm md:text-lg mb-6">
                  Starting June 1st, enjoy flat rate delivery of ₵20 to all
                  locations for the first 2 days!
                </p>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPromo(false)}
                  className="bg-white text-[#5a3e2b] px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium text-base md:text-lg w-full md:w-auto"
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            className="md:hidden text-[#5a3e2b]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <ChevronDown
              size={24}
              className={`transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden bg-white"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink href="#vendors" onClick={() => setIsMobileMenuOpen(false)}>
              Vendors
            </NavLink>
            <NavLink
              href="#delivery"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Delivery
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </motion.div>
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
              <span className="bg-[#986d47] text-transparent bg-clip-text text-5xl md:text-8xl font-baloo">
                Boba Delivered
              </span>
              <br />
              <span className="font-baloo text-[#5a3e2b]">To Your Door</span>
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

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-12 md:py-16">
        <SectionTitle>Place Your Order</SectionTitle>

        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Ready to enjoy your favorite boba? Click below to place your order!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => setIsOrderSheetOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-[#5a3e2b] to-[#986d47] text-white font-medium py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Order Sheet */}
      <AnimatePresence>
        {isOrderSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOrderSheetOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Mobile Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 md:hidden"
            >
              <div className="bg-white rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#5a3e2b]">
                    Place Your Order
                  </h2>
                  <button
                    onClick={() => setIsOrderSheetOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
                <OrderForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleOrderSubmit}
                />
              </div>
            </motion.div>

            {/* Desktop Side Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md z-50 hidden md:block"
            >
              <div className="bg-white h-full shadow-xl p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#5a3e2b]">
                    Place Your Order
                  </h2>
                  <button
                    onClick={() => setIsOrderSheetOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
                <OrderForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleOrderSubmit}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
              <motion.a
                href="https://instagram.com/bobagodelivery"
                whileHover={{ y: -3 }}
                className="text-white hover:text-[#e6d5c7] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://snapchat.com/add/bobagodelivery"
                whileHover={{ y: -3 }}
                className="text-white hover:text-[#e6d5c7] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchatGhost size={24} />
              </motion.a>
              <motion.a
                href="https://wa.me/233543940135"
                whileHover={{ y: -3 }}
                className="text-white hover:text-[#e6d5c7] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </motion.a>
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
      <h2 className="text-3xl md:text-4xl font-baloo font-bold text-[#5a3e2b]">
        {children}
      </h2>
      <div className="w-24 h-1 bg-[#986d47] mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

// Component for navigation links
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      className="font-medium text-gray-700 hover:text-purple-600 transition-colors"
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}

// Component for vendor cards
function VendorCard({
  vendor,
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
        <h3 className="text-xl font-bold mb-1 text-[#5a3e2b]">{vendor.name}</h3>
        <p className="text-gray-600 text-sm">{vendor.description}</p>
      </div>
    </div>
  );
}

// Add OrderForm component
function OrderForm({
  formData,
  setFormData,
  onSubmit,
}: {
  formData: {
    name: string;
    phone: string;
    vendor: string;
    flavor: string;
    quantity: string;
    location: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      phone: string;
      vendor: string;
      flavor: string;
      quantity: string;
      location: string;
    }>
  >;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  const handleUseCurrentLocation = () => {
    setGeoError(null);
    if (!("geolocation" in navigator)) {
      setGeoError("Geolocation is not supported by your browser.");
      return;
    }

    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const coords = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
        setFormData((prev) => ({ ...prev, location: coords }));
        setGeoLoading(false);
      },
      (err) => {
        setGeoLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setGeoError(
            "Permission denied. Please allow location access and try again."
          );
        } else {
          setGeoError("Unable to fetch location. Please try again.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name Input */}
      <div className="space-y-2">
        <label className="block text-[#5a3e2b] font-medium">Your Name</label>
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#986d47] focus:ring-2 focus:ring-[#986d47]/20 outline-none transition-all text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Phone Input */}
      <div className="space-y-2">
        <label className="block text-[#5a3e2b] font-medium">Phone Number</label>
        <div className="relative">
          <Phone
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Enter your phone number"
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#986d47] focus:ring-2 focus:ring-[#986d47]/20 outline-none transition-all text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Vendor Selection */}
      <div className="space-y-2">
        <label className="block text-[#5a3e2b] font-medium">
          Select Vendor
        </label>
        <div className="relative">
          <ShoppingBag
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <select
            value={formData.vendor}
            onChange={(e) =>
              setFormData({ ...formData, vendor: e.target.value })
            }
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#986d47] focus:ring-2 focus:ring-[#986d47]/20 outline-none transition-all appearance-none bg-white text-gray-800"
          >
            <option value="" className="text-gray-400">
              Select a vendor
            </option>
            {vendors.map((vendor) => (
              <option
                key={vendor.id}
                value={vendor.name}
                className="text-gray-800"
              >
                {vendor.name}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* Flavor Selection */}
      <div className="space-y-2">
        <label className="block text-[#5a3e2b] font-medium">
          Select Flavor
        </label>
        <div className="relative">
          <Coffee
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <select
            value={formData.flavor}
            onChange={(e) =>
              setFormData({ ...formData, flavor: e.target.value })
            }
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#986d47] focus:ring-2 focus:ring-[#986d47]/20 outline-none transition-all appearance-none bg-white text-gray-800"
          >
            <option value="" className="text-gray-400">
              Select a flavor
            </option>
            {bobaFlavors.map((flavor) => (
              <option key={flavor} value={flavor} className="text-gray-800">
                {flavor}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="space-y-2">
        <label className="block text-[#5a3e2b] font-medium">Quantity</label>
        <div className="relative">
          <Package
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <select
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#986d47] focus:ring-2 focus:ring-[#986d47]/20 outline-none transition-all appearance-none bg-white text-gray-800"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num} className="text-gray-800">
                {num}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* Location with Current Location Only */}
      <div className="space-y-2">
        <label className="block text-[#5a3e2b] font-medium">
          Delivery Location
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="Paste coordinates e.g. 5.603717, -0.186964"
            className="flex-1 px-3 py-3 rounded-lg border border-gray-200 text-gray-800 placeholder-gray-400"
          />
          <button
            type="button"
            onClick={handleUseCurrentLocation}
            className="bg-[#5a3e2b] text-white text-sm px-4 py-3 rounded-lg disabled:opacity-60"
            disabled={geoLoading}
          >
            {geoLoading ? "Locating..." : "Use my current location"}
          </button>
        </div>
        {geoError && <p className="text-sm text-red-600">{geoError}</p>}
        {!geoError &&
          formData.location &&
          /\d,\s?-?\d/.test(formData.location) && (
            <p className="text-sm text-gray-500">
              Coordinates detected. You can edit this if you are ordering for
              someone.
            </p>
          )}
        <div className="mt-3 rounded-xl bg-[#f7f1ee] p-3 text-sm text-[#5a3e2b]">
          <p className="leading-relaxed">
            Ordering for someone? Ask them for their location coordinates and
            paste it here. We’re working to support location names soon. Sorry
            for the inconvenience.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-gradient-to-r from-[#5a3e2b] to-[#986d47] text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all"
      >
        Place Order
      </motion.button>
    </form>
  );
}
