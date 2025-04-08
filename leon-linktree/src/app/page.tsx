import { LinkTree } from "../components/link-tree";
import { StarsBackground } from "../components/stars-background";
import type { LinkItem } from "../components/link-tree";

const links: LinkItem[] = [
  {
    title: "GitHub",
    url: "https://github.com/yourusername",
    icon: "/icons/github.svg"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "/icons/twitter.svg"
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "/icons/linkedin.svg"
  },
  {
    title: "Portfolio",
    url: "https://yourportfolio.com",
    icon: "/icons/globe.svg"
  },
  {
    title: "Blog",
    url: "https://yourblog.com",
    icon: "/icons/pencil.svg"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative overflow-hidden bg-black">
      <StarsBackground />
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <LinkTree 
          name="Your Name"
          avatar="/avatar.jpg"
          bio="Full Stack Developer | Open Source Enthusiast | Tech Blogger"
          links={links}
        />
      </div>
    </main>
  );
}