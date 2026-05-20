import Image from "next/image";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="h-screen w-full flex"
      style={{ color: "var(--text-dark)" }}
    >
      <div className="w-1/2 h-full relative bg-transparent">
        <Image
          src="/images/heroImage.png"
          alt="Nomena Fitahiana"
          fill
          className="object-cover"
          loading="eager"
        />
      </div>

      <div className="bg-transparent w-1/2 h-full flex flex-col justify-center items-start relative pl-8 pr-12">
        <div className="w-full flex flex-col" style={{ lineHeight: "0.92" }}>
          <h1
            className="font-[family-name:var(--font-display)] font-light"
            style={{
              fontSize: "clamp(5rem, 9vw, 8.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Nomena
          </h1>
          <h1
            className="font-[family-name:var(--font-display)] font-light"
            style={{
              fontSize: "clamp(5rem, 9vw, 8.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Fitahiana
          </h1>
        </div>

        <div className="w-[72%] flex items-center gap-6 my-8">
          <div className="w-24 h-[1px] bg-black/60"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-black/50"></div>
          <div className="flex-1 h-[1px] bg-black/25"></div>
        </div>

        <p
          className="font-[family-name:var(--font-body)] font-light uppercase"
          style={{
            fontSize: "0.78rem",
            letterSpacing: "0.5em",
            color: "var(--text-dark)",
            opacity: 0.85,
          }}
        >
          Full‑Stack Developer
        </p>

        <div className="absolute bottom-10 right-12 flex gap-9">
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={17}
              className="opacity-70 hover:opacity-35 transition-opacity duration-300"
            />
          </a>
          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            <FaAt
              size={17}
              className="opacity-70 hover:opacity-35 transition-opacity duration-300"
            />
          </a>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN} >
            <FaLinkedin
              size={17}
              className="opacity-70 hover:opacity-35 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}