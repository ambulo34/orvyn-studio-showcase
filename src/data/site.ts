import workElgon from "@/assets/work-elgon.jpg";
import workGreenhaven from "@/assets/work-greenhaven.jpg";
import workImpala from "@/assets/work-impala.jpg";
import elgonDetail from "@/assets/work-elgon-detail.jpg";
import elgonMobile from "@/assets/work-elgon-mobile.jpg";
import greenhavenDetail from "@/assets/work-greenhaven-detail.jpg";
import greenhavenMobile from "@/assets/work-greenhaven-mobile.jpg";
import impalaDetail from "@/assets/work-impala-detail.jpg";
import impalaMobile from "@/assets/work-impala-mobile.jpg";
import workElgonSet from "@/assets/work-elgon.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import workGreenhavenSet from "@/assets/work-greenhaven.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import workImpalaSet from "@/assets/work-impala.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import elgonDetailSet from "@/assets/work-elgon-detail.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import elgonMobileSet from "@/assets/work-elgon-mobile.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import greenhavenDetailSet from "@/assets/work-greenhaven-detail.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import greenhavenMobileSet from "@/assets/work-greenhaven-mobile.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import impalaDetailSet from "@/assets/work-impala-detail.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";
import impalaMobileSet from "@/assets/work-impala-mobile.jpg?w=480;768;1200&format=webp&quality=72&as=srcset";

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
  /** Live, hosted URL for the project. */
  liveUrl?: string;
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
    liveUrl: "https://elgonstarmotors.vercel.app",
    image: workElgon,
    imageSrcSet: workElgonSet,
    imageAlt: "Elgon Star Motors website homepage shown in a browser window",
    scope: ["Website", "UI/UX Design", "Development"],
    overview:
      "Elgon Star Motors needed a digital presence that matched the quality of the vehicles on its floor. We designed and built a website that puts the inventory first and makes every listing easy to browse, compare and enquire about.",
    challenge:
      "Buyers were discovering vehicles through scattered listings with inconsistent photos and no clear way to reach the business.",
    approach:
      "We structured the site around vehicle discovery — clean listing layouts, strong photography, and a direct WhatsApp enquiry path on every page.",
    outcome:
      "A fast, responsive website that presents the inventory clearly and gives customers an obvious next step.",
    facts: [
      { label: "Client", value: "Elgon Star Motors" },
      { label: "Type", value: "Automotive Website" },
      { label: "Year", value: "2026" },
      { label: "Role", value: "Design & Build" },
    ],
    gallery: [
      { src: workElgon, srcSet: workElgonSet, alt: "Elgon Star Motors homepage in a browser window", caption: "Homepage and inventory entry point" },
      { src: elgonDetail, srcSet: elgonDetailSet, alt: "Vehicle listing section of the Elgon Star Motors website", caption: "Vehicle listings and filtering" },
      { src: elgonMobile, srcSet: elgonMobileSet, alt: "Elgon Star Motors website on a mobile phone", caption: "Mobile experience" },
    ],
  },
  {
    slug: "green-haven",
    title: "GreenHaven",
    category: "E-commerce",
    description:
      "An online plant shop built around effortless browsing — indoor and outdoor plants presented with warmth, clarity and a simple path to purchase.",
    year: "2026",
    liveUrl: "https://greenhaven-demo.vercel.app",
    image: workGreenhaven,
    imageSrcSet: workGreenhavenSet,
    imageAlt: "GreenHaven plant shop homepage shown in a browser window",
    scope: ["E-commerce", "UI/UX Design", "Development"],
    overview:
      "GreenHaven sells indoor and outdoor plants and needed a storefront that felt as calm and considered as the products themselves, while still making it easy to find, compare and buy.",
    challenge:
      "Plant shopping online is hard to get right: customers need context, care information and confidence before they buy.",
    approach:
      "We built a warm editorial storefront with clear categories, generous product photography, care guidance and a short, distraction-free checkout path.",
    outcome:
      "A store that feels premium and personal, and makes discovering the right plant simple on any device.",
    facts: [
      { label: "Client", value: "GreenHaven" },
      { label: "Type", value: "E-commerce" },
      { label: "Year", value: "2026" },
      { label: "Role", value: "Design & Build" },
    ],
    gallery: [
      { src: workGreenhaven, srcSet: workGreenhavenSet, alt: "GreenHaven homepage in a browser window", caption: "Storefront and hero" },
      { src: greenhavenDetail, srcSet: greenhavenDetailSet, alt: "GreenHaven product listing section", caption: "Product discovery and collections" },
      { src: greenhavenMobile, srcSet: greenhavenMobileSet, alt: "GreenHaven store on a mobile phone", caption: "Mobile shopping experience" },
    ],
  },
  {
    slug: "impala-hotel-parklands",
    title: "Impala Hotel Parklands",
    category: "Hospitality Website",
    description:
      "A hospitality website for a Nairobi hotel and restaurant, designed to showcase the space and turn visitors into bookings and enquiries.",
    year: "2026",
    liveUrl: "https://impalaparklands.vercel.app",
    image: workImpala,
    imageSrcSet: workImpalaSet,
    imageAlt: "Impala Hotel Parklands website homepage shown in a browser window",
    scope: ["Website", "UI/UX Design", "Development"],
    overview:
      "Impala Hotel Parklands needed a digital presence that reflected the atmosphere of the hotel and its restaurant, and gave guests a fast way to check availability or get in touch.",
    challenge:
      "Guests were relying on third-party listings that showed little of the property and made direct contact difficult.",
    approach:
      "We led with atmospheric photography, structured the site around rooms, dining and location, and kept booking and call actions visible throughout.",
    outcome:
      "A warm, responsive website that presents the hotel properly and makes enquiries effortless.",
    facts: [
      { label: "Client", value: "Impala Hotel Parklands" },
      { label: "Type", value: "Hospitality Website" },
      { label: "Year", value: "2026" },
      { label: "Role", value: "Design & Build" },
    ],
    gallery: [
      { src: workImpala, srcSet: workImpalaSet, alt: "Impala Hotel Parklands homepage in a browser window", caption: "Homepage and booking entry point" },
      { src: impalaDetail, srcSet: impalaDetailSet, alt: "Rooms and dining section of the Impala Hotel Parklands website", caption: "Rooms, dining and amenities" },
      { src: impalaMobile, srcSet: impalaMobileSet, alt: "Impala Hotel Parklands website on a mobile phone", caption: "Mobile experience" },
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
