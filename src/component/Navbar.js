import {Container, Nav, Navbar} from "react-bootstrap";

export const StoreNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Component 1</Nav.Link>
                        <Nav.Link href="#home">Component 2</Nav.Link>
                        <Nav.Link href="#home">Component 3</Nav.Link>
                        <Nav.Link href="#home">Component 4</Nav.Link>
                        <Nav.Link href="#home">Component 5</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
