export const siteConfig = {
  name: "Vanderbilt Agency",
  title: "Vanderbilt Agency | Web & AI Solutions",
  description: "Transforming small businesses with stunning websites and AI automation.",
  url: "https://example.com", // Replace with actual URL when deployed
  ogImage: "https://example.com/og.jpg", // Replace
  links: {
    linkedin: "https://www.linkedin.com", // Placeholder, update with actual link
    instagram: "https://www.instagram.com", // Placeholder, update with actual link
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  footerText: `© ${new Date().getFullYear()} Vanderbilt Agency. All rights reserved.`, // Use 2025 if specifically required: "© 2025 Vanderbilt Agency"
};

export type SiteConfig = typeof siteConfig;
