import { DropdownNavigation } from "./dropdown-menu"
import { ChevronDown } from "lucide-react";  // Add this import at the top with other icons

// Remove unused Link import
import {
  Phone,
  AppleIcon,
  Smartphone,
  Globe2,
  Building2,
  ShoppingCart,
  HeartHandshake,
  LayoutDashboard,
  Database,
  Users2,
  FileText,  // Changed from File to FileText
  DollarSign,
  LineChart,
  Brain,
  HardDrive,
  BarChart3,
  Languages,
  Cloud,
  PieChart,
  Search,
  TrendingUp,
  Lightbulb,
  AreaChart,
  Calculator,
  Bot,
  Store,
  Megaphone,
  Network,
  AppWindow,
  Cog,
  Palette
} from "lucide-react";

type Props = {
  id: number;
  label: string;
  icon?: React.ReactNode;
  dropdownIcon?: React.ReactNode;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      link?: string;  // Add this line
    }[];
  }[];
  link?: string;
};

function Demo() {
  const NAV_ITEMS = [
    {
      id: 1,
      label: "IT Services",
      icon: <ChevronDown className="w-4 h-4" />,
      link: "/it-services",
      subMenus: [
        {
          title: "Mobile Application",
          items: [
            {
              label: "Android Apps",
              description: "Native Android Development",
              icon: Smartphone,
              link: "/it/android/androidapps"
            },
            {
              label: "IOS Apps",
              description: "Native iOS Development",
              icon: AppleIcon,
              link: "/it/android/iosapps"
            },
            {
              label: "Hybrid Apps",
              description: "Cross-platform Solutions",
              icon: Smartphone,
              link: "/it/android/hybridapps"
            },
            {
              label: "Progressive Apps",
              description: "Modern Web Applications",
              icon: Globe2,
              link: "/it/android/progressiveapps"
            },
          ],
        },
        {
          title: "Website",
          items: [
            {
              label: "Corporate Website",
              description: "Professional Business Sites",
              icon: Building2,
              link: "/it/website/corporate-website"
            },
            {
              label: "E-commerce Website",
              description: "Online Store Solutions",
              icon: ShoppingCart,
              link: "/it/website/ecommerce-website"
            },
            {
              label: "Service Website",
              description: "Service-based Platforms",
              icon: HeartHandshake,
              link: "/it/website/service-website"
            },
            {
              label: "Portal Development",
              description: "Custom Web Portals",
              icon: LayoutDashboard,
              link: "/it/website/portal-development"
            },
          ],
        },
        {
          title: "ERP",
          items: [
            {
              label: "Dharma ERP",
              description: "Enterprise Resource Planning",
              icon: Database,
              link: "/it/erp/dharma-erp"
            },
            {
              label: "CRM",
              description: "Customer Relationship Management",
              icon: Users2,
              link: "/it/erp/crm"
            },
            {
              label: "Sub Contracting",
              description: "Contract Management Solutions",
              icon: FileText,
              link: "/it/erp/sub-contracting"
            },
            {
              label: "Sales",
              description: "Sales Management System",
              icon: DollarSign,
              link: "/it/erp/sales"
            },
            {
              label: "Finance",
              description: "Financial Management Tools",
              icon: LineChart,
              link: "/it/erp/finance"
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Data Science",
      icon: <ChevronDown className="w-4 h-4" />,
      link: "/data-science",
      subMenus: [
        // In the Solutions section, updating remaining items with links
        {
          title: "Data Science",
          items: [
            {
              label: "Data Mining",
              description: "Extract valuable insights from data",
              icon: HardDrive,
              link: "/solutions/data-science/data-mining"
            },
            {
              label: "Machine Learning",
              description: "Intelligent automated solutions",
              icon: Brain,
              link: "/solutions/data-science/machine-learning"
            },
            {
              label: "Big Data",
              description: "Large-scale data processing",
              icon: Database,
              link: "/solutions/data-science/big-data"
            },
            {
              label: "Data Analysis",
              description: "Comprehensive data examination",
              icon: BarChart3,
              link: "/solutions/data-science/data-analysis"
            },
          ],
        },
        {
          title: "Advanced Analytics",
          items: [
            {
              label: "Natural Language Processing",
              description: "Text and language analysis",
              icon: Languages,
              link: "/solutions/advanced-analytics/natural-language-processing"
            },
            {
              label: "Cloud Computing",
              description: "Scalable cloud solutions",
              icon: Cloud,
              link: "/solutions/advanced-analytics/cloud-computing"
            },
            {
              label: "Data Visualization",
              description: "Interactive data insights",
              icon: PieChart,
              link: "/solutions/advanced-analytics/data-visualization"
            },
            {
              label: "Data Exploration",
              description: "Discover patterns in data",
              icon: Search,
              link: "/solutions/advanced-analytics/data-exploration"
            },
          ],
        },
        {
          title: "Business Solutions",
          items: [
            {
              label: "Business Analysis",
              description: "Strategic business insights",
              icon: TrendingUp,
              link: "/solutions/business-solutions/business-analysis"
            },
            {
              label: "Business Intelligence",
              description: "Data-driven decision making",
              icon: Lightbulb,
              link: "/solutions/business-solutions/business-intelligence"
            },
            {
              label: "Power BI Dashboard",
              description: "Interactive BI visualizations",
              icon: AreaChart,
              link: "/solutions/business-solutions/power-bi-dashboard"
            },
            {
              label: "Statistics",
              description: "Statistical analysis and modeling",
              icon: Calculator,
              link: "/solutions/business-solutions/statistics"
            },
          ],
        },
        
      ],
    },
    {
      id: 4,
      label: "Digital Marketing",
      link: "/digital-marketing",
    },
    {
      id: 5,
      label: "About Us",
      link: "/about",
    },
    {
      id: 6,
      label: "Careers",
      link: "/career",
    },
    {
      id: 7,
      label: "Projects",
      link: "/project"  // Change from "/projects" to "/project"
    }
  ];

  return <DropdownNavigation navItems={NAV_ITEMS.map(item => ({
    ...item,
    subMenus: item.subMenus?.map(submenu => ({
      ...submenu,
      items: submenu.items.map(subitem => ({
        ...subitem,
        dropdownIcon: <ChevronDown className="w-4 h-4 ml-1" />
      }))
    }))
  }))} />;
}

export { Demo }