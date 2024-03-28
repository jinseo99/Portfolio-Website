import { createElement, useRef } from "react";
import { content } from "../../Content";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  const { contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
    //   'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
        'service_hdgh4fc', 'template_smlvmx7', form.current, '-5DrcQUoy9pUiAkuR'

      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <Toaster />
        <h1>
        <strong>Contact</strong>
        </h1>

        <Container style={{"text-align":"left"}}>
          <Row>
            <Col md={{ span: 5, offset: 1 }}>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Control type="text" name="from_name" placeholder="Name" style={{ "margin-bottom": '10px' }}/>
                  <Form.Control type="email" name="from_email" placeholder="Email Id" style={{ "margin-bottom": '10px' }}/>
                  <Form.Control as="textarea" name="message" style={{ height: '100px', "margin-bottom":"10px" }} placeholder="Message" />
                  <Button variant="outline-secondary" type="submit">
                      Submit
                  </Button>
              </Form>

            </Col>
            <Col>
              <div style={{"font-size":"1.2rem", "font-weight":"bold"}}>
                {contact.social_media.map((content, i) => (
                  <div style={{"display":"flex"}}>
                    <h4 style={{"margin-right":"10px"}} >{createElement(content.icon)}</h4>
                    <a href={content.link} target="_blank">
                      {content.text}
                    </a>
                  </div>
                ))}

            </div>

            </Col>
          </Row>
        </Container>


    </section>
  );
};

export default Contact;