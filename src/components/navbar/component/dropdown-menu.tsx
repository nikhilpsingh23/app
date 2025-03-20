import { ReactNode, useState } from "react";
import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";  // Change this import

export function DropdownNavigation(props: { navItems: Props[] }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  return ( 
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-3">
        {props.navItems.map((navItem) => (
          <div key={navItem.label} className="relative group">
            {navItem.link ? (
              <Link 
                href={navItem.link}
                className="text-[18px] py-2 px-4 flex items-center gap-2 text-gray-700 hover:bg-gradient-to-r hover:from-[#ee83a1] hover:via-[#b66be8] hover:to-[#7f65e4] hover:bg-clip-text hover:text-transparent"
              >
                {navItem.icon}
                <span>{navItem.label}</span>
              </Link>
            ) : (
              <button
                className="text-[18px] py-2 px-4 flex items-center gap-2 text-gray-700 hover:text-[#47bfe6] transition-colors"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                {navItem.icon}
                <span>{navItem.label}</span>
                {navItem.dropdownIcon || (navItem.subMenus && <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:text-[#47bfe6]" />)}
              </button>
            )}
            {navItem.subMenus && (
              <div className="absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg p-[1px] w-max border border-transparent bg-gradient-to-r from-[#47bfe6] via-[#4747c1] to-[#10187e]">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex gap-5">
                      {navItem.subMenus.map((sub) => (
                        <div key={sub.title} className="min-w-[200px]">
                          <h3 className="font-medium mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#47bfe6] group-hover:via-[#4747c1] group-hover:to-[#10187e] group-hover:bg-clip-text group-hover:text-transparent">{sub.title}</h3>
                          <ul className="space-y-4">
                            {sub.items.map((item) => (
                              <li key={item.label}>
                                <Link 
                                  href={`/it/${sub.title.toLowerCase().replace(/\s+/g,"" )}/${item.label.toLowerCase().replace(/\s+/g, "-")}`} 
                                  className="flex items-start gap-3 group/item"
                                >
                                  <div className="p-2 transition-colors">
                                    <item.icon className={`h-4 w-4 ${
                                      item.label.toLowerCase().includes('android') ? 'text-green-500' :
                                      item.label.toLowerCase().includes('ios') ? 'text-gray-800' :
                                      item.label.toLowerCase().includes('hybrid') ? 'text-blue-500' :
                                      item.label.toLowerCase().includes('progressive') ? 'text-purple-500' :
                                      item.label.toLowerCase().includes('corporate') ? 'text-blue-600' :
                                      item.label.toLowerCase().includes('e-commerce') ? 'text-orange-500' :
                                      item.label.toLowerCase().includes('service') ? 'text-teal-500' :
                                      item.label.toLowerCase().includes('portal') ? 'text-indigo-500' :
                                      item.label.toLowerCase().includes('erp') ? 'text-red-500' :
                                      item.label.toLowerCase().includes('crm') ? 'text-pink-500' :
                                      item.label.toLowerCase().includes('sales') ? 'text-green-600' :
                                      item.label.toLowerCase().includes('finance') ? 'text-yellow-600' :
                                      item.label.toLowerCase().includes('data') ? 'text-cyan-500' :
                                      item.label.toLowerCase().includes('machine') ? 'text-violet-500' :
                                      item.label.toLowerCase().includes('cloud') ? 'text-sky-500' :
                                      item.label.toLowerCase().includes('business') ? 'text-amber-500' :
                                      'text-gray-600'
                                    } group-hover/item:text-[#47bfe6]`} />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                                    <p className="text-xs text-gray-500">{item.description}</p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile Menu */}
      <nav className="md:hidden w-full">
        <div className="space-y-4">
          {props.navItems.map((navItem) => (
            <div key={navItem.label} className="space-y-2">
              <button
                onClick={() => setOpenMenu(navItem.label === openMenu ? null : navItem.label)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-[#47bfe6] py-2"
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === navItem.label ? "rotate-180" : ""} hover:text-[#47bfe6]`} />}
              </button>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="pl-4 space-y-4">
                  {navItem.subMenus.map((sub) => (
                    <div key={sub.title} className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-500 hover:bg-gradient-to-r hover:from-[#47bfe6] hover:via-[#4747c1] hover:to-[#10187e] hover:bg-clip-text hover:text-transparent">{sub.title}</h3>
                      <ul className="space-y-2">
                        {sub.items.map((item) => (
                          <li key={item.label}>
                            
                            {item.link ? (
                              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 py-2 relative">
                                {React.createElement(item.icon)}
                                {item.label}
                                {item.dropdownIcon}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                              </button>
                            ) : (
                              <Link 
                                href={item.link || '#'} 
                                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 py-2 relative"
                              >
                                {React.createElement(item.icon)}
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

type Props = {
  id: number;
  label: string;
  icon?: React.ReactNode;
  dropdownIcon?: React.ReactNode;
  subMenus?: {
    title: string;
    items: {
      dropdownIcon: ReactNode;
      label: string;
      description: string;
      icon: React.ElementType;
      link?: string;
    }[];
  }[];
  link?: string;
};
