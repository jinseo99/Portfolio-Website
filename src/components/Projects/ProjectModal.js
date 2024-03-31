import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-bootstrap';
import VideoPlayer from "./VideoPlayer";

function ProjectModal(props) {
    const {title,preview,video} = props;
    // console.log("DEBUG VIDEO",video);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {preview && <Carousel data-bs-theme="dark">

            {preview.map((slide, i)=> (
                <Carousel.Item>
                    <img
                    className="d-block w-100 project-slide"
                    src={slide.image}
                    alt=""
                    />
                    <Carousel.Caption className="carousel-caption">
                        {slide.description}
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>}
        {video && <VideoPlayer filename={video}/>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"  onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;