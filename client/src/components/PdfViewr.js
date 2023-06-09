import React, { useEffect, useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function PDFViewer({ fileUrl }) {
  const [newPluginInstance, setNewPluginInstance] = useState(null);

  useEffect(() => {
    setNewPluginInstance(defaultLayoutPlugin());
  }, []);

  return (
    <div className="pdf-container">
      <Worker
        workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.js"
      >
        {fileUrl ? (
          <Viewer fileUrl={fileUrl} plugins={[newPluginInstance]} />
        ) : (
          <div>No PDF</div>
        )}
      </Worker>
    </div>
  );
}
export default PDFViewer