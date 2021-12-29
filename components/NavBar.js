import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ContactForm from "./Cform";
import Image from 'next/image';
import Logo from "../public/logo.svg";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Active class
  const router = useRouter();
  return (
    <Navbar
      expand="lg"
      variant="light"
      className={navBackground ? "sticky-nav" : "bg-white"}
    >
      <Container>
        <Link href="/">
          <a>
            <Navbar.Brand style={{color:"rgba(0,17,15,1)"}}>
              <Image src={Logo} alt={'Custom Timber Works Logo'} width={100} height={80} />
              <span>Custom<span style={{color:'yellow'}}>Timber</span>Works</span>
            </Navbar.Brand>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <a
                className={
                  router.pathname == "/about" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </Link>
            <Link href="#!">
              <a
                className={
                  router.pathname == "/services" ? "nav-link active" : "nav-link"
                }
              >
                Services
              </a>
            </Link>
            <Link href="#!">
              <a
                className={
                  router.pathname == "/projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </Link>
            <Link href="#!">
              <a
                className={
                  router.pathname == "/testemonials" ? "nav-link active" : "nav-link"
                }
              >
                Testemonials
              </a>
            </Link>
          </Nav>
          <ContactForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
