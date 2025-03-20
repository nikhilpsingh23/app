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

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {/* IT Services Dropdown */}
        <div className="relative group">
          <button
            className="text-[18px] py-2 px-4 flex items-center gap-1 text-gray-700 hover:text-[#47bfe6] transition-colors"
            onMouseEnter={() => setIsHover(1)}
            onMouseLeave={() => setIsHover(null)}
          >
            <span>IT Services</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:text-[#47bfe6]" />
          </button>
          <div className="absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
            <div className="bg-white rounded-lg shadow-lg p-[1px] w-max border border-transparent bg-gradient-to-r from-[#47bfe6] via-[#4747c1] to-[#10187e]">
              <div className="bg-white rounded-lg p-4">
                <div className="flex gap-8">
                  {/* Mobile Application Section */}
                  <div className="min-w-[200px]">
                    <h3 className="font-medium mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#47bfe6] group-hover:via-[#4747c1] group-hover:to-[#10187e] group-hover:bg-clip-text group-hover:text-transparent">
                      Mobile Application
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/it-services/mobile-application/index" className="flex items-start gap-3 group/item">
                          <div className="p-2 transition-colors">
                            <Smartphone className="h-4 w-4 text-green-500 group-hover/item:text-[#47bfe6]" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Android Apps</p>
                            <p className="text-xs text-gray-500">Native Android Development</p>
                          </div>
                        </Link>
                      </li>
                      {/* Continue with other mobile items... */}
                    </ul>
                  </div>
                  {/* Continue with Website and ERP sections... */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Dropdown */}
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
        {/* Mobile menu content... */}
      </nav>
    </div>
  );
}