import { pdfjs, Document, Page, PDFDownloadLink } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const myResume = "./Resume.pdf";

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3>
      <br />
      <ul>
        <li>
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          Learning or something idk.{" "}
        </li>
        <li>
          <span role="img" aria-label="graduate-hat">
            🎓
          </span>{" "}
          Studying Computer Science.{" "}
        </li>
        <li>
          <span role="img" aria-label="light-bulb">
            💡
          </span>{" "}
          Open to collaborating on projects and innovative ideas.{" "}
        </li>
        <li>
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          Currently working on surviving till the next day.{" "}
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
        <Document file={myResume}>
          <Page pageIndex={0} />
          <Page pageIndex={1} />
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
