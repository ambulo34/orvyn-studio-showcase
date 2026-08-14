import workElgon from "@/assets/work-elgon.jpg";
import workCommerce from "@/assets/work-commerce.jpg";
import workApp from "@/assets/work-app.jpg";
import workBrand from "@/assets/work-brand.jpg";

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
];

/** Replace with the real ORVYN WhatsApp link once provided. */
export const contactPlaceholders = {
  email: "[email address – to be added]",
  phone: "[phone / WhatsApp number – to be added]",
  whatsappUrl: "#whatsapp-placeholder",
  location: "[location – to be added]",
};

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Websites",
    description:
      "Modern, responsive websites designed to give businesses a professional digital presence and turn visitors into customers.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom web applications built around the way your business actually works.",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Online stores designed to make discovering, buying and managing products simple.",
  },
  {
    number: "04",
    title: "Design & Branding",
    description:
      "Visual identities and digital experiences that help businesses become recognizable and memorable.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  imageAlt: string;
  scope: string[];
  placeholder?: boolean;
};

/** Add new ORVYN projects here — the whole Work section is generated from this list. */
export const projects: Project[] = [
  {
    slug: "elgon-star-motors",
    title: "Elgon Star Motors",
    category: "Automotive Website",
    description:
      "A modern digital experience designed to give an automotive business a stronger online presence and make its vehicles easier for customers to explore.",
    year: "2026",
    image: workElgon,
    imageAlt: "Elgon Star Motors website shown on a laptop screen",
    scope: ["Website", "UI/UX Design", "Development"],
  },
  {
    slug: "retail-commerce-placeholder",
    title: "Commerce Concept",
    category: "E-commerce",
    description:
      "A placeholder store concept showing how ORVYN structures product discovery, browsing and checkout for retail businesses.",
    year: "2026",
    image: workCommerce,
    imageAlt: "Minimal e-commerce store interface on desktop and mobile",
    scope: ["E-commerce", "Design System"],
    placeholder: true,
  },
  {
    slug: "operations-app-placeholder",
    title: "Operations Platform",
    category: "Web Application",
    description:
      "A placeholder platform concept showing how ORVYN designs internal tools around real day-to-day business workflows.",
    year: "2026",
    image: workApp,
    imageAlt: "Web application dashboard interface on a laptop",
    scope: ["Web App", "Product Design"],
    placeholder: true,
  },
  {
    slug: "identity-system-placeholder",
    title: "Identity System",
    category: "Branding & Design",
    description:
      "A placeholder identity concept showing how ORVYN builds a consistent visual language across print and digital.",
    year: "2026",
    image: workBrand,
    imageAlt: "Brand identity system laid out with stationery and type specimens",
    scope: ["Branding", "Art Direction"],
    placeholder: true,
  },
];

export type Pillar = { title: string; description: string };

export const pillars: Pillar[] = [
  {
    title: "Designed with purpose",
    description:
      "Every element has a reason — from the visual identity to the customer journey.",
  },
  {
    title: "Built for real users",
    description: "We create experiences that are intuitive, responsive and easy to use.",
  },
  {
    title: "Made for your brand",
    description:
      "We don't believe every business should look the same. Your digital presence should feel like your business.",
  },
  {
    title: "Built to grow",
    description:
      "We create digital foundations that can evolve as your business grows.",
  },
];

export type Step = { number: string; title: string; description: string };

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, your audience and what you're trying to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description: "We create the visual direction and user experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the design into a fast, responsive and functional digital product.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We test, refine and launch your product to the world.",
  },
];
