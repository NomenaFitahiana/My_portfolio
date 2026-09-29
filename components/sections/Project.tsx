"use client";

import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "EduTrack",
    year: "2024",
    category: "WEB APPLICATION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "02",
    title: "Moodify",
    year: "2023",
    category: "MOBILE APPLICATION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "03",
    title: "Café Blend",
    year: "2023",
    category: "BRANDING & WEB DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

// Placeholder polaroid images (grayscale gradient placeholders)
const polaroids = [
  {
    rotate: "-6deg",
    translateY: "0px",
    translateX: "0px",
    zIndex: 3,
    caption: "Building ideas.",
  },
  { rotate: "3deg", translateY: "60px", translateX: "-30px", zIndex: 2 },
  { rotate: "-2deg", translateY: "130px", translateX: "10px", zIndex: 1 },
];

export default function Projects() {
  return (
    <section className="projects-section">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="selected-work-label">
          <span>SELECTED</span>
          <span>WORK</span>
        </div>

        {/* Polaroid stack */}
        <div className="polaroid-stack">
          {polaroids.map((p, i) => (
            <div
              key={i}
              className="polaroid"
              style={{
                transform: `rotate(${p.rotate}) translateY(${p.translateY}) translateX(${p.translateX})`,
                zIndex: p.zIndex,
              }}
            >
              <div className="polaroid-img">
                {i === 0 && (
                  <>
                    {/* Laptop image placeholder */}
                    <div className="polaroid-placeholder laptop" />
                    {p.caption && (
                      <div className="polaroid-caption">{p.caption}</div>
                    )}
                  </>
                )}
                {i === 1 && <div className="polaroid-placeholder plant" />}
                {i === 2 && <div className="polaroid-placeholder notebook" />}
              </div>
              {i === 0 && (
                <div className="paperclip">
                  <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                    <path
                      d="M12 2C7.58 2 4 5.58 4 10v18c0 6.63 5.37 12 12 12s12-5.37 12-12V8"
                      stroke="#888"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="bottom-quote">
          <p>
            <em>Design is not just</em>
          </p>
          <p>
            <em>what it looks like</em>
          </p>
          <p>
            <em>and feels like.</em>
          </p>
          <div className="quote-dash" />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="work-label">/ WORK</div>

        <h2 className="projects-title">Projects</h2>

        <p className="projects-subtitle">
          I enjoy turning ideas into digital experiences that are not only
          <br />
          functional but also meaningful and beautiful.
        </p>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <div key={idx} className="project-item">
              <div className="project-header">
                <span className="project-number">{project.number}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <div className="project-category">{project.category}</div>
              <p className="project-description">{project.description}</p>
              {idx < projects.length - 1 && <div className="project-divider" />}
            </div>
          ))}
        </div>

        <div className="view-all">
          <span>VIEW ALL PROJECTS</span>
          <span className="view-all-arrow">→</span>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          display: flex;
          min-height: 100vh;
          width: 100%;
          background: var(--background, #f5f5f5);
          font-family: var(--font-body), sans-serif;
        }

        /* ── LEFT PANEL ── */
        .left-panel {
          width: 42%;
          background: #d9d6d0;
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 48px 40px;
          overflow: hidden;
        }

        .selected-work-label {
          display: flex;
          flex-direction: column;
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.15em;
          color: #3a3a3a;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .selected-work-label::after {
          content: "";
          display: block;
          width: 1px;
          height: 32px;
          background: #3a3a3a;
          margin-top: 10px;
        }

        /* Polaroid stack */
        .polaroid-stack {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%);
          width: 280px;
          height: 360px;
        }

        .polaroid {
          position: absolute;
          top: 0;
          left: 0;
          background: #fff;
          padding: 10px 10px 40px 10px;
          box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.18);
          width: 240px;
        }

        .polaroid-img {
          width: 100%;
          position: relative;
        }

        .polaroid-placeholder {
          width: 100%;
          height: 170px;
        }

        .polaroid-placeholder.laptop {
          background: linear-gradient(
            135deg,
            #2a2a2a 0%,
            #555 50%,
            #3a3a3a 100%
          );
        }

        .polaroid-placeholder.plant {
          background: linear-gradient(135deg, #e0ddd8 0%, #c0bdb8 100%);
          height: 140px;
        }

        .polaroid-placeholder.notebook {
          background: linear-gradient(135deg, #d8d5cf 0%, #b8b5af 100%);
          height: 140px;
        }

        .polaroid-caption {
          font-family: var(--font-display), serif;
          font-style: italic;
          font-size: 15px;
          color: #222;
          text-align: center;
          margin-top: 8px;
          font-weight: 300;
        }

        .paperclip {
          position: absolute;
          top: -18px;
          right: 30px;
        }

        /* Bottom quote */
        .bottom-quote {
          position: absolute;
          bottom: 48px;
          left: 40px;
        }

        .bottom-quote p {
          font-family: var(--font-display), serif;
          font-style: italic;
          font-size: 13px;
          font-weight: 300;
          color: #3a3a3a;
          line-height: 1.5;
          margin: 0;
        }

        .quote-dash {
          width: 28px;
          height: 1.5px;
          background: #3a3a3a;
          margin-top: 12px;
        }

        /* ── RIGHT PANEL ── */
        .right-panel {
          width: 58%;
          background: #f0ede8;
          padding: 48px 64px 48px 72px;
          display: flex;
          flex-direction: column;
        }

        .work-label {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #555;
          text-align: right;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .projects-title {
          font-family: var(--font-display), serif;
          font-size: clamp(72px, 9vw, 110px);
          font-weight: 400;
          color: #111;
          line-height: 1;
          margin: 0 0 20px 0;
          letter-spacing: -0.01em;
        }

        .projects-subtitle {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #333;
          line-height: 1.65;
          margin: 0 0 40px 0;
        }

        /* Project list */
        .projects-list {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-item {
          padding-top: 28px;
        }

        .project-header {
          display: flex;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 6px;
        }

        .project-number {
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #555;
          min-width: 24px;
        }

        .project-title {
          font-family: var(--font-display), serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 400;
          color: #111;
          flex: 1;
          letter-spacing: -0.01em;
        }

        .project-year {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #555;
        }

        .project-category {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #666;
          font-weight: 400;
          margin-left: 44px;
          margin-bottom: 10px;
        }

        .project-description {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #444;
          line-height: 1.7;
          margin: 0 0 28px 44px;
        }

        .project-divider {
          height: 1px;
          background: #ccc;
          width: 100%;
          margin-bottom: 0;
        }

        /* View all */
        .view-all {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          padding-top: 24px;
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #333;
          font-weight: 400;
          cursor: pointer;
          border-top: 1px solid #ccc;
        }

        .view-all-arrow {
          font-size: 16px;
          letter-spacing: 0;
        }

        .view-all:hover {
          color: #000;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .projects-section {
            flex-direction: column;
          }
          .left-panel,
          .right-panel {
            width: 100%;
          }
          .left-panel {
            min-height: 400px;
          }
          .right-panel {
            padding: 40px 24px;
          }
        }
      `}</style>
    </section>
  );
}
