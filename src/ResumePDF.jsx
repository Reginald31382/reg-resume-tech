import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdfUrl from "./assets/tech.pdf";

import React from "react";

function ResumePDF() {
  return (
    <div>
      <h1>Thank you for viewing my resume</h1>

      {/* PDF Viewer */}
      <div style={{ border: "1px solid #ccc", height: "500px" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>

      {/* Download Link */}
      <div style={{ marginTop: "20px" }}>
        <a href={pdfUrl} download="tech.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default ResumePDF;
