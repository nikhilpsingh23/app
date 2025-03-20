import { useState } from "react";
import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  Phone, AppleIcon, Smartphone, Globe2, Building2,
  ShoppingCart, HeartHandshake, LayoutDashboard, Database,
  Users2, FileText, DollarSign, LineChart, Brain, HardDrive,
  BarChart3, Languages, Cloud, PieChart, Search, TrendingUp,
  Lightbulb, AreaChart, Calculator, Bot, Store, Megaphone,
  Network, AppWindow, Cog, Palette
} from "lucide-react";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {/* IT Services */}
        <div className="relative group">
          <button
            className="text-[18px] py-2 px-4 flex items-center gap-1 text-gray-700 hover:text-[#47bfe6] transition-colors"
            onMouseEnter={() => setIsHover(1)}
            onMouseLeave={() => setIsHover(null)}
          >
            <span>IT Services</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:text-[#47bfe6]" />
          </button>
          {/* IT Services Dropdown */}
          <div className="absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
            {/* Add your IT Services dropdown content here */}
          </div>
        </div>

        {/* Solutions */}
        <div className="relative group">
          <button
            className="text-[18px] py-2 px-4 flex items-center gap-1 text-gray-700 hover:text-[#47bfe6] transition-colors"
            onMouseEnter={() => setIsHover(2)}
            onMouseLeave={() => setIsHover(null)}
          >
            <span>Solutions</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:text-[#47bfe6]" />
          </button>
          {/* Solutions Dropdown */}
          <div className="absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
            {/* Add your Solutions dropdown content here */}
          </div>
        </div>

        {/* Direct Links */}
        <Link href="/digital-marketing" className="text-[18px] py-2 px-4 flex items-center gap-1 text-gray-700 hover:text-[#47bfe6] transition-colors">
          <span>Digital Marketing</span>
        </Link>

        <Link href="/about" className="text-[18px] py-2 px-4 flex items-center gap-1 text-gray-700 hover:text-[#47bfe6] transition-colors">
          <span>About Us</span>
        </Link>

        <Link href="/career" className="text-[18px] py-2 px-4 flex items-center gap-1 text-gray-700 hover:text-[#47bfe6] transition-colors">
          <span>Careers</span>
        </Link>

        <Link href="/project" className="text-[18px] py-2 px-4 flex items-center gap-1 text-gray-700 hover:text-[#47bfe6] transition-colors">
          <span>Projects</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <nav className="md:hidden w-full">
        {/* Add your mobile menu content here */}
      </nav>
    </div>
  );
}