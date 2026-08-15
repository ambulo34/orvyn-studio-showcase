import workElgon from "@/assets/work-elgon.jpg";
import workCommerce from "@/assets/work-commerce.jpg";
import workApp from "@/assets/work-app.jpg";
import workBrand from "@/assets/work-brand.jpg";
import detailDevices from "@/assets/detail-devices.jpg";
import detailSystem from "@/assets/detail-system.jpg";
import workElgonSet from "@/assets/work-elgon.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import workCommerceSet from "@/assets/work-commerce.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import workAppSet from "@/assets/work-app.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import workBrandSet from "@/assets/work-brand.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import detailDevicesSet from "@/assets/detail-devices.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import detailSystemSet from "@/assets/detail-system.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";


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

export type GalleryItem = { src: string; srcSet?: string; alt: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  imageSrcSet?: string;
  imageAlt: string;
  scope: string[];
  placeholder?: boolean;
  /** Detail page content */
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  facts: { label: string; value: string }[];
  gallery: GalleryItem[];
};

/** Add new ORVYN projects here — the Work section and every project detail page are generated from this list. */
export const projects: Project[] = [
  {
    slug: "elgon-star-motors",
    title: "Elgon Star Motors",
    category: "Automotive Website",
    description:
      "A modern digital experience designed to give an automotive business a stronger online presence and make its vehicles easier for customers to explore.",
    year: "2026",
    image: workElgon,
    imageSrcSet: workElgonSet,
    imageAlt: "Elgon Star Motors website shown on a laptop screen",
    scope: ["Website", "UI/UX Design", "Development"],
    overview:
      "Elgon Star Motors needed a digital presence that matched the quality of the vehicles on its floor. We designed and built a website that puts the inventory first and makes every listing easy to browse, compare and enquire about.",
    challenge:
      "Buyers were discovering vehicles through scattered listings with inconsistent photos and no clear way to reach the business.",
    approach:
      "We structured the site around vehicle discovery — clean listing layouts, strong photography, and a direct enquiry path on every page.",
    outcome:
      "A fast, responsive website that presents the inventory clearly and gives customers an obvious next step.",
    facts: [
      { label: "Client", value: "Elgon Star Motors" },
      { label: "Type", value: "Automotive Website" },
      { label: "Year", value: "2026" },
      { label: "Role", value: "Design & Build" },
    ],
    gallery: [
      { src: workElgon, srcSet: workElgonSet, alt: "Elgon Star Motors homepage on a laptop", caption: "Homepage and inventory entry point" },
      { src: detailDevices, srcSet: detailDevicesSet, alt: "Vehicle listings on tablet and phone", caption: "Listings on tablet and mobile" },
      { src: detailSystem, srcSet: detailSystemSet, alt: "Typography and colour specimens", caption: "Type and colour direction" },
    ],
  },
  {
    slug: "retail-commerce-placeholder",
    title: "Commerce Concept",
    category: "E-commerce",
    description:
      "A placeholder store concept showing how ORVYN structures product discovery, browsing and checkout for retail businesses.",
    year: "2026",
    image: workCommerce,
    imageSrcSet: workCommerceSet,
    imageAlt: "Minimal e-commerce store interface on desktop and mobile",
    scope: ["E-commerce", "Design System"],
    placeholder: true,
    overview:
      "A concept store built to show how we approach retail: clear product discovery, honest photography and a checkout that gets out of the way.",
    challenge:
      "Most small online stores lose customers between browsing and checkout because the path isn't obvious.",
    approach:
      "We designed a simple browsing hierarchy, consistent product cards and a short, distraction-free checkout flow.",
    outcome:
      "A reusable commerce structure we can adapt quickly for real retail clients.",
    facts: [
      { label: "Client", value: "Concept project" },
      { label: "Type", value: "E-commerce" },
      { label: "Year", value: "2026" },
      { label: "Role", value: "Design & Build" },
    ],
    gallery: [
      { src: workCommerce, srcSet: workCommerceSet, alt: "Store interface on desktop and mobile", caption: "Storefront and product grid" },
      { src: detailDevices, srcSet: detailDevicesSet, alt: "Store pages on tablet and phone", caption: "Mobile shopping experience" },
      { src: detailSystem, srcSet: detailSystemSet, alt: "Colour and type specimens", caption: "Component and colour system" },
    ],
  },
  {
    slug: "operations-app-placeholder",
    title: "Operations Platform",
    category: "Web Application",
    description:
      "A placeholder platform concept showing how ORVYN designs internal tools around real day-to-day business workflows.",
    year: "2026",
    image: workApp,
    imageSrcSet: workAppSet,
    imageAlt: "Web application dashboard interface on a laptop",
    scope: ["Web App", "Product Design"],
    placeholder: true,
    overview:
      "A concept platform showing how we design internal tools: built around the tasks a team repeats every day, not around a generic dashboard template.",
    challenge:
      "Business teams often run critical operations through spreadsheets that nobody fully trusts.",
    approach:
      "We mapped the core workflows first, then designed screens that make the next action obvious at every step.",
    outcome:
      "A product structure that can be tailored to a specific business without starting from zero.",
    facts: [
      { label: "Client", value: "Concept project" },
      { label: "Type", value: "Web Application" },
      { label: "Year", value: "2026" },
      { label: "Role", value: "Product Design & Build" },
    ],
    gallery: [
      { src: workApp, srcSet: workAppSet, alt: "Application dashboard on a laptop", caption: "Primary workspace view" },
      { src: detailDevices, srcSet: detailDevicesSet, alt: "Application views on tablet and phone", caption: "Responsive views" },
      { src: detailSystem, srcSet: detailSystemSet, alt: "Interface type and colour specimens", caption: "Interface foundations" },
    ],
  },
  {
    slug: "identity-system-placeholder",
    title: "Identity System",
    category: "Branding & Design",
    description:
      "A placeholder identity concept showing how ORVYN builds a consistent visual language across print and digital.",
    year: "2026",
    image: workBrand,
    imageSrcSet: workBrandSet,
    imageAlt: "Brand identity system laid out with stationery and type specimens",
    scope: ["Branding", "Art Direction"],
    placeholder: true,
    overview:
      "An identity concept covering the essentials a growing business actually uses: a wordmark, a type scale, a restrained palette and rules for applying them.",
    challenge:
      "Brands lose recognition when every touchpoint is designed in isolation.",
    approach:
      "We defined a small set of decisions — type, colour, spacing, tone — and documented how they apply across print and screen.",
    outcome:
      "A visual language that stays consistent as the business adds new material.",
    facts: [
      { label: "Client", value: "Concept project" },
      { label: "Type", value: "Branding & Design" },
      { label: "Year", value: "2026" },
      { label: "Role", value: "Identity & Art Direction" },
    ],
    gallery: [
      { src: workBrand, srcSet: workBrandSet, alt: "Brand identity stationery and specimens", caption: "Identity applications" },
      { src: detailSystem, srcSet: detailSystemSet, alt: "Type scale and colour swatches", caption: "Type scale and palette" },
      { src: detailDevices, srcSet: detailDevicesSet, alt: "Brand applied on digital devices", caption: "Applied across digital" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

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
