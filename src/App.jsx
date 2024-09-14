import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Blog from "./blog/blog";
import Contact from "./contact/contact";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Footer from "./components/footer";
export default function App () {
    return <>
        <Navbar expand="lg" className="bg-dark position-fixed w-100 z-3" data-bs-theme="dark">
        <Container data-bs-theme="dark">
        <Navbar.Brand href="/" className="d-flex align-items-end gap-3">
        <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"/><path d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.512 10.512 0 0 1 12 22.5ZM12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Z"/></svg>
            <span>progressus</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="d-flex justify-content-end align-ites-center gap-2">
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/about/">About</Nav.Link>
                <NavDropdown title="More Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">Blog</NavDropdown.Item>
                    <NavDropdown.Item href="/">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact/">Contact</Nav.Link>
                <Button href="/login/" className="text-uppercase border-1 fw-bold" variant="outline-secondary">Sign In / Sign UP</Button>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/" element={<About/>}/>
        <Route path="/contact/" element={<Contact/>}/>
        <Route path="/blog/" element={<Blog/>}/>   
    </Routes>
    <Footer/>
  </>
}