import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Blog from "./blog/blog";
import ExamplePosts from "./example-posts/example-posts";
export default function App () {
    return <>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container data-bs-theme="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Nav.Link href="/about/">About</Nav.Link>
            <Nav.Link href="/blog/">BLog</Nav.Link>
            <Nav.Link href="/example-posts/">Example Posts</Nav.Link>
            </Nav>
            <Button variant="primary">
                <Nav.Link href="/login/">Sign Up</Nav.Link>
            </Button>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/example-posts/" element={<ExamplePosts/>}/>
        </Routes>
    </main>
  </>
}