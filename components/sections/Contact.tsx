"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const contactLinks = [
  {
    icon: "email",
    label: "EMAIL",
    value: "nomenafitahiana.randrianirina@gmail.com",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
  {
    icon: "github",
    label: "GITHUB",
    value: "github.com/NomenaFitahiana",
    href: process.env.NEXT_PUBLIC_GITHUB,
  },
  {
    icon: "location",
    label: "LOCATION",
    value: "Antananarivo, Madagascar",
    href: null,
  },
  {
    icon: "linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/nomena-fitahiana-randrianirina",
    href: process.env.NEXT_PUBLIC_LINKEDIN,
  },
];

type IconKey = "email" | "github" | "linkedin" | "location";

const icons: Record<IconKey, React.ReactNode> = {
  email: <FaEnvelope />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  location: <HiOutlineLocationMarker />,
};

export default function Contact() {
  return (
    <section className="w-full h-screen px-16 pt-7 pb-0 font-[family-name:var(--font-body)] max-[900px]:px-6 max-[900px]:pt-12">
      <div className="mb-12 flex items-center gap-5">
        <span className="whitespace-nowrap text-[10px] font-normal tracking-[0.2em] text-[#333]">
          CONTACT ME
        </span>
        <div className="h-px max-w-[200px] flex-1 bg-[#888]" />
      </div>

      <div className="flex min-h-[520px] items-start gap-0 max-[900px]:flex-col">
        <div className="flex-[0_0_42%] pr-10 max-[900px]:flex-none max-[900px]:pr-0">
        <h2
          className="m-0 mb-7 font-[family-name:var(--font-display)] font-normal leading-[1.05] text-[#111]"
          style={{ fontSize: "clamp(52px, 6.5vw, 88px)" }}
        >
          Let’s work
          <br />
          <em className="font-light italic">together.</em>
        </h2>


          <p className="m-0 mb-11 text-sm font-light leading-[1.75] text-[#333]">
            Available for freelance projects, collaborations
            <br />
            and full-time opportunities.
            <br />
            Based in Madagascar, open to remote work.
          </p>

          <div className="flex items-start gap-6 ">
            <div
              className="relative w-[200px] shrink-0 bg-white px-2 pb-8 pt-2 "
              style={{
                boxShadow: "2px 4px 16px rgba(0, 0, 0, 0.15)",
                transform: "rotate(-1.5deg)",
              }}
            >
              <div className="absolute -top-2.5 left-1/2 h-[18px] w-[50px] -translate-x-1/2 bg-[#c8c3b9]" style={{ opacity: 0.6 }} />
              <div
                className="relative h-40 w-full overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #c8c5bf 0%, #a0a0a0 50%, #d0cdc8 100%)",
                }}
              >
                <Image
                  src="/images/contactImage.png"
                  alt="aesthetic flower"
                  fill
                  className="scale-125 object-cover"
                  loading="eager"
                />
            </div>
            </div>
            <div className="pt-2">
            <p className="m-0 font-[family-name:var(--font-display)] text-[15px] font-light italic leading-[1.6] text-[#333]">
              <em>The best ideas</em>
            </p>
            <p className="m-0 font-[family-name:var(--font-display)] text-[15px] font-light italic leading-[1.6] text-[#333]">
              <em>come from</em>
            </p>
            <p className="m-0 font-[family-name:var(--font-display)] text-[15px] font-light italic leading-[1.6] text-[#333]">
              <em>real</em>
            </p>
            <p className="m-0 font-[family-name:var(--font-display)] text-[15px] font-light italic leading-[1.6] text-[#333]">
              <em>conversations.</em>
            </p>
              <div className="mt-3.5 h-[1.5px] w-6 bg-[#555]" />
            </div>
          </div>
        </div>

        <div className="mx-12 w-px self-stretch bg-[#ccc] max-[900px]:hidden" />

        <div className="flex flex-1 flex-col gap-0">
          {contactLinks.map((link, i) => (
            <div
              key={i}
              className="relative flex items-center gap-5 py-[18px]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#bbb] text-[16px] text-[#222]">
              {icons[link.icon as IconKey]}
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="text-[9px] font-normal tracking-[0.2em] text-[#888]">
                  {link.label}
                </span>
                {link.href ? (
                  <a
                  href={link.href ?? undefined}
                  target={link.href ? "_blank" : undefined}
                  rel={link.href ? "noopener noreferrer" : undefined}
                  className="font-[family-name:var(--font-body)] text-[15px] font-light text-[#111] no-underline hover:underline"
                >
                  {link.value}
                </a>
                ) : (
                  <span className="font-[family-name:var(--font-body)] text-[15px] font-light text-[#111] no-underline">
                    {link.value}
                  </span>
                )}
              </div>
              {i === 1 && (
                <div className="ml-auto flex flex-col gap-1 self-center">
                  <span className="block h-1 w-1 rounded-full bg-[#666]" />
                  <span className="block h-1 w-1 rounded-full bg-[#666]" />
                  <span className="block h-1 w-1 rounded-full bg-[#666]" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-px bg-[#ddd]" />
            </div>
          ))}

          <a
            href="mailto:nomena@mail.com"
            className="group mt-8 flex cursor-pointer items-center justify-between border border-[#888] px-6 py-[22px] no-underline transition-[background] duration-200 hover:border-[#111] hover:bg-[#111]"
          >
            <em className="font-[family-name:var(--font-display)] text-[22px] font-light italic text-[#111] transition-colors duration-200 group-hover:text-white">
              Send a message
            </em>
            <span className="text-xl text-[#111] transition-colors duration-200 group-hover:text-white">
              →
            </span>
          </a>
        </div>
      </div>
      
    </section>
  );
}
