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
export interface Project {
  id: string;
  year: number;
  client: string;
  title: string;
  services: string[];
  solution: string;
  impact: string[];
  imageUrl: string;
}
export const PROJECTS: Project[] = [
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
