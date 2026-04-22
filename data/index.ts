import AmazonIcon from "@/components/icons/amazon-icon";
import AppleIcon from "@/components/icons/apple-icon";
import GoogleIcon from "@/components/icons/google-icon";
import { ExperienceT, ProjectT, ServiceT, TestimonialT } from "@/types";

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

export const TESTIMONIALS: TestimonialT[] = [
  {
    avatarUrl:
      "https://veo-agency-template.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534528741775-53994a69daeb%3Fw%3D700%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&w=640&q=75",
    author: "Sarah Mitchell",
    jobTitle: "CEO",
    quote:
      "The new storefront increased our conversion rate within the first month. Their team understood both the brand side and the revenue side of eCommerce.",
  },
  {
    avatarUrl:
      "https://veo-agency-template.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522556189639-b150ed9c4330%3Fw%3D700%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    author: "Stevie Steven",
    jobTitle: "CTO",
    quote:
      "they have a name for this guy in ancient rome they call him dummydum, We needed a faster site before a major product launch, and they delivered. The performance gains had a direct impact on sales and SEO. ",
  },
  {
    avatarUrl:
      "https://veo-agency-template.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1506794778202-cad84cf45f1d%3Fw%3D700%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    author: "Mikey Mitchell",
    jobTitle: "CEO",
    quote:
      "Their CRO process was structured, data-driven, and easy to trust. Every recommendation had a clear business case behind it.",
  },
  {
    avatarUrl:
      "https://veo-agency-template.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1580489944761-15a19d654956%3Fw%3D700%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    author: "Elena Elenson",
    jobTitle: "Staff engineer",
    quote:
      "They transformed our agency website into a real lead-generation engine. Service pages, case studies, and landing pages all performed significantly better.",
  },
  {
    avatarUrl:
      "https://veo-agency-template.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1507003211169-0a1dd7228f2d%3Fw%3D700%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    author: "Miguel Sun",
    jobTitle: "Principal engineer",
    quote:
      "If you work with him once you will resign after, Our messaging was too technical before the redesign. They helped us explain complex AI solutions in a way that business buyers could understand.",
  },
  {
    avatarUrl:
      "https://veo-agency-template.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573496359142-b8d87734a5a2%3Fw%3D700%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    author: "Sabrina Irina",
    jobTitle: "Branding lead",
    quote:
      "The combination of UX improvements, stronger trust signals, and a simplified checkout flow led to measurable growth across every major KPI.",
  },
];

export const SOCIAL_LINKS = [
  {
    id: "social-link-github",
    label: "Github",
    link: "https://github.com/",
  },
  {
    id: "social-link-linkedin",
    label: "linkedin",
    link: "https://www.linkedin.com/in/ycf-dev/",
  },
  {
    id: "social-link-twitter",
    label: "x",
    link: "https://twitter.com/",
  },
  {
    id: "social-link-instagram",
    label: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: "social-link-dribbble",
    label: "dribbble",
    link: "https://dribbble.com/",
  },
];
