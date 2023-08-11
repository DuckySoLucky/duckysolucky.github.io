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
          Studying CS or Something idk @ <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0/">School or smth</a>.
        </li>
        <li>
          <span role="img" aria-label="graduate-hat">
            🎓
          </span>{" "}
          Researching some stuff @ <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0/">QwackCord</a>.
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
          Currently working on Hypixel Network related projects.{" "}
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
