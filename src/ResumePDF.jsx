import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdfUrl from "./assets/tech.pdf";

function ResumePDF() {
  return (
    <section className="resume-card">

      {/* Viewer Header */}
      <div className="resume-toolbar">
        <div className="resume-toolbar-title">
          <span></span>
          <p>Resume Preview</p>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="viewer-container">
        <Worker
          workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"
        >
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>

      {/* Download */}
      <div className="resume-actions">
        <a
          href={pdfUrl}
          download="Reginald-Dixon-Resume.pdf"
          className="download-button"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>

          Download Resume
        </a>
      </div>

    </section>
  );
}

export default ResumePDF;
