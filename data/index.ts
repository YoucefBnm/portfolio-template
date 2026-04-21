import AmazonIcon from "@/components/icons/amazon-icon";
import AppleIcon from "@/components/icons/apple-icon";
import GoogleIcon from "@/components/icons/google-icon";
import { ExperienceT, ProjectT, ServiceT } from "@/types";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Work",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export const PROJECTS: ProjectT[] = [
  {
    id: "project-abla",
    year: 2024,
    client: "Abla",
    title: "Conducted a full content and conversion audit",
    services: ["custom website", "CMS"],
    solution:
      "We repositioned the agency website around clarity, authority, and conversion. Each service page was rebuilt to highlight outcomes, process, and proof points, while the new case study framework made the agency’s expertise easier to understand.",
    impact: [
      "+41% submeted qualified leads",
      "+29% average time on service pages",
      "-36% bounce rate",
      "+22% conversion rate from paid traffic",
    ],
    imageUrl: "/work-abla.png",
  },
  {
    id: "project-cognify",
    year: 2026,
    client: "Cognify",
    title: "Simply positioning and messaging for customers",
    services: ["marketing site", "SAAS dashboard"],
    solution:
      "We transformed the site from a technical showcase into a conversion-focused sales asset. Clear messaging, visual product previews, and industry-specific pages made it easier for prospects to understand the benefits of the platform.",
    impact: [
      "+53% demo requests",
      "+31% conversion rate",
      "+24% engagement on product sections",
      "+18% increase in qualified leads",
    ],
    imageUrl: "/work-cognify.png",
  },
];

export const EXPERIENCE_HISTORY: ExperienceT[] = [
  {
    id: "experience-history-amazon",
    company: "Amazon",
    title: "Senior Software Engineer",
    description:
      "my main role was to lead the development of the Amazon Echo smart speaker, which was a massive project that required a team of over 100 engineers. I was responsible for the design, development, and testing of the Echo's voice assistant, as well as the integration of Amazon's Alexa and Google Assistant services.",
    icon: AmazonIcon,
    periode: "2019 - 2022",
  },
  {
    id: "experience-history-google",
    company: "Google",
    title: "Staff Software Engineer",
    description:
      "my main role was to lead the development of the Google Assistant smart speaker, which was a massive project that required a team of over 100 engineers. I was responsible for the design, development, and testing of the Echo's voice assistant, as well as the integration of Amazon's Alexa and Google Assistant services.",
    icon: GoogleIcon,
    periode: "2022 - 2023",
  },
  {
    id: "experience-history-apple",
    company: "Apple",
    title: "Principal Software Engineer",
    description:
      "if you offer less money and upper position I’m yours, I thought siri how to spell, which was a massive project that required a team of over 100 engineers. I was responsible for the design, development, and testing of the Echo's voice assistant, as well as the integration of Amazon's Alexa and Google Assistant services, left after the glass design update.",
    icon: AppleIcon,
    periode: "2023 - 2025",
  },
];

export const SERVICES: ServiceT[] = [
  {
    focus: ["ux audits", "wireframes", "UI systems"],
    label: "Ecommerce UX/UI design",
    solution:
      "Conversion focused product pages, category pages, and checkout flows optimized for usability and trust.",
    serviceImage: "/template-stridath.png",
  },
  {
    focus: ["heatmaps", "analytics", "hypothesis"],
    label: "Conversion rate optimization",
    solution:
      "A/B testing, funnel analysis, and continuous iteration to increase conversion rate, AOV and revenue per visitor.",
    serviceImage: "/template-visiocraft.png",
  },
  {
    focus: ["performance", "scalability", "API integration"],
    label: "Shopify & headless development",
    solution:
      "Custom storefronts using shopify, shopify pluse, or headless architecture with modern frameworks.",
    serviceImage: "/template-breinkenhier.png",
  },
  {
    focus: ["faster pages", "higher conversions"],
    label: "Performance optimization",
    solution:
      "Improve core web vitals, reduce load times, and enhance user experience across devices.",
    serviceImage: "/template-gt.png",
  },
  {
    focus: ["payment gateways", "checkout flows"],
    label: "Payment gateway integration",
    solution:
      "Accept payments using popular payment gateways like Stripe, PayPal, and Braintree.",
    serviceImage: "/template-enera.png",
  },
  {
    focus: ["increase LTV", "repeat purchases"],
    label: "Retention & lifecycle design",
    solution:
      "Email flows, loyalty UX, subscriptions, and post purchase follow ups.",
    serviceImage: "/template-motus.png",
  },
];
