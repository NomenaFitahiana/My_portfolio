const navLinks = [
  { id: "about", label: "ABOUT ME" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const socialLinks = [
  {
    id: "github",
    label: "GITHUB",
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    href: process.env.NEXT_PUBLIC_LINKEDIN,
  },
  {
    id: "email",
    label: "EMAIL",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
];

export default function Footer() {
    return (
        <footer className="w-full mt-20 bg-[#1a1a1a] text-[#d9d9d9] ">
          <div className="w-full flex justify-between items-start px-16 pb-6 pt-8 max-[900px]:flex-wrap max-[900px]:gap-8 max-[900px]:px-6 max-[900px]:py-10">
            {/* Tag */}
            <div className="relative flex min-w-[260px] items-stretch gap-4 bg-[#f0ede8] px-4 py-[18px] text-[#111]">
              <div className="absolute -left-2.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full border-2 border-[#555] bg-[#1a1a1a]" />
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-normal tracking-[0.15em] text-[#666]">
                  DESIGNED & BUILT BY
                </span>
                <span className="font-[family-name:var(--font-display)] text-[22px] font-normal italic leading-[1.2] text-[#111]">
                  Nomena Fitahiana
                </span>
                <div className="mt-2 flex h-5 items-end gap-0.5">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-full shrink-0 bg-[#111]"
                      style={{
                        width: i % 5 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                        opacity: i % 7 === 0 ? 0.4 : 1,
                      }}
                    />
                  ))}
                </div>
                <span className="mt-[3px] text-[7px] tracking-[0.05em] text-[#555]">
                  (01) 0 1234567 891011 2
                </span>
              </div>
          
              <div className="flex flex-col items-center justify-center gap-1 border-l border-dashed border-[#bbb] pl-3">
                <span className="text-center text-[7px] font-normal tracking-[0.12em] text-[#555]">
                  THANK YOU
                </span>
                <span className="text-center text-[7px] font-normal tracking-[0.12em] text-[#555]">
                  FOR VISITING
                </span>
                <div className="mt-2 text-xl text-[#555]">💛</div>
              </div>
            </div>

            {/* Nav */}
            <div className="flex min-w-[100px] flex-col gap-3">
              <span className="mb-1 text-[9px] font-normal tracking-[0.18em] text-[#888]">
                NAVIGATION
              </span>
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[11px] font-light tracking-[0.12em] text-[#bbb] no-underline transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Connect */}
            <div className="flex min-w-[100px] flex-col gap-3">
              <span className="mb-1 text-[9px] font-normal tracking-[0.18em] text-[#888]">
                LET&apos;S CONNECT
              </span>
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id !== "email" ? "_blank" : undefined}
                  rel={item.id !== "email" ? "noopener noreferrer" : undefined}
                  className="text-[11px] font-light tracking-[0.12em] text-[#bbb] no-underline transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Quote */}
            <div className="flex  flex-col justify-center">
              <div className="mb-6 h-px bg-[#444]" />
              <p className="m-0 mb-6 font-[family-name:var(--font-display)] text-[13px] font-light italic leading-[1.5] text-[#ccc]">
                <em>Code is structure.</em>
                <br />
                <em>Design is emotion.</em>
                <br />
                <em>Together, they create experience.</em>
              </p>
              <div className="h-px bg-[#444]" />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-[#2e2e2e] px-16 py-4 max-[900px]:flex-col max-[900px]:gap-2 max-[900px]:px-6 max-[900px]:text-center">
            <span className="text-[9px] font-light tracking-[0.15em] text-[#666]">
              © 2026 NOMENA FITAHIANA. ALL RIGHTS RESERVED.
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-light tracking-[0.15em] text-[#666]">
                BUILT WITH PASSION 
              </span>
              <span className="text-[9px] font-light tracking-[0.15em] text-[#666]">
                💛
              </span>
            </div>
          </div>
      </footer>
    );
}