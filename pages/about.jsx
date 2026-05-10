import { useEffect, useState } from "react";
import { pdfjs, Document, Page, PDFDownloadLink } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const myResume = "./Resume.pdf";

const AboutPage = () => {
  const [dpr, setDpr] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDpr(window.devicePixelRatio || 1);
    }
  }, []);
  return (
    <>
      <h3>About Me</h3>
      <br />
      <ul>
        <li>
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          Continuously learning new technologies and software engineering best practices.
        </li>
        <li>
          <span role="img" aria-label="graduate-hat">
            🎓
          </span>{" "}
          Studying Software Engineering with a focus on practical, project-based experience.
        </li>
        <li>
          <span role="img" aria-label="light-bulb">
            💡
          </span>{" "}
          Open to collaboration on web and game-related projects; I enjoy building tools that solve real problems.
        </li>
        <li>
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          Currently developing projects around Hypixel SkyBlock, focusing on tooling, data visualization, and backend
          services.
        </li>
      </ul>
      <br />
      <center>
        <h3>
          Resume (
          <a href={myResume} download="Resume.pdf">
            Download
          </a>
          )
        </h3>
        <br />
        <Document
          file={myResume}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setPdfError(null);
          }}
          onLoadError={(error) => {
            console.error("Failed to load PDF:", error);
            setPdfError(error?.message || "Failed to load PDF");
            setNumPages(0);
          }}
        >
          {pdfError && <p>Failed to load the PDF: {pdfError}</p>}
          {!pdfError && numPages === null && <p>Loading PDF…</p>}
          {!pdfError && numPages > 0 && (
            <>
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageIndex={index}
                  renderMode="svg"
                  scale={dpr}
                />
              ))}
            </>
          )}
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
