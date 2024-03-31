import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Resume LC.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs} from "react-pdf";
import { GrNext,GrPrevious } from "react-icons/gr";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function Resume() {
  const [width, setWidth] = useState(1200);
  const [page, setPage] = useState(1);
  const maxPage = 2;
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  const handleNext = () => {
    if (page === 1) {
        setPage(page + 1);
    } else {
        setPage(1);
    }
  };
  const handlePrev = () => {
    if (page === maxPage) {
        setPage(page - 1);
    } else {
        setPage(maxPage);
    }
  };


  return (
    <section id="resume" className="page-section">
        <Container fluid className="resume-section">
            <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="dark"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" , "font-weight":"bold"}}
            >
                <AiOutlineDownload />
                &nbsp;Download Resume
            </Button>
            </Row>

            <Row style={{"minHeight":"1300px"}}>
                <Document 
                    // style ={{"display":"flex"}}
                    file={pdf} 
                    className="d-flex justify-content-center"
                >
                    <GrPrevious className="resume_page" onClick={handlePrev}/>
                    <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
                    <GrNext className="resume_page" onClick={handleNext}/>
                </Document>

            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="dark"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px", "font-weight":"bold" }}
            >
                <AiOutlineDownload />
                &nbsp;Download Resume
            </Button>
            </Row>
        </Container>


    </section>
  );
}

export default Resume;