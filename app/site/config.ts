import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  defaultLanguage: "zh-CN",
  avatarSrc: "/images/avatar/user.jpg",
  resume: {
    href: "/documents/resume.md",
    downloadName: "resume.md",
    email: "peienxiao41@gmail.com",
  },
  contact: {
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/PayneXXX",
        side: "bottom",
        profile: {
          name: "PayneXXX",
          subtitle: "GitHub Profile",
          description:
            "AI building experiments, research notes, and the source for this personal site.",
        },
      },
      {
        label: "WeChat",
        side: "bottom",
        profile: {
          name: "Payne",
          subtitle: "微信号 Payne-FF",
          description: "微信名：Payne",
        },
      },
      {
        label: "Phone",
        href: "tel:+8615955132013",
        side: "bottom",
        profile: {
          name: "+86 15955132013",
          subtitle: "Phone",
          description: "中国大陆手机号，适合电话或短信联系。",
        },
      },
    ],
  },
  visitorCount: 27,
} satisfies SiteConfig;
