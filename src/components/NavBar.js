import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiMenu } from "react-icons/hi";
import { content } from "../Content";
import Stack from 'react-bootstrap/Stack';
import { IconContext } from "react-icons";
import Footer from "../components/Footer"
function NavBar() {
  const [show, setShow] = useState(false);
  const { nav } = content;
  const [active, setActive] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbar" onClick={handleShow}>
        <HiMenu size={40}/>
      </div>

      <Offcanvas show={show} onHide={handleClose} scroll={true}>
        <Offcanvas.Header >
          <Offcanvas.Title className="ps-4" style={{"font-size":"2rem", "font-style":"italic"}}>JL.</Offcanvas.Title>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
        <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <>
                <Stack gap={1}>
                    {nav.map((item, i) => (
                        
                        <a 
                            className={`ps-4 py-5 ${i===active && "active"}`}
                            href={item.link}
                            onClick={() => {setActive(i);}}>
                            <Stack direction="horizontal" gap={3}>
                                <item.icon/>
                                {item.name}
                            </Stack>
                        </a>

                    ))}   

                </Stack>
            </>
        </IconContext.Provider>
          
        </Offcanvas.Body>
        <Footer/>
      </Offcanvas>
    </>
  );
}

export default NavBar;