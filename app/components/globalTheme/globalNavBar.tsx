import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import type { AppState } from '~/redux/store';
import type { AppDispatch } from '~/redux/store';
import { logoutUser } from '~/redux/actions/auth/Auth-actionCreators';

interface MyComponentProps {}

export default function GlobalNavigationBar(props: MyComponentProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, currentUser } = useSelector((state: AppState) => state.auth);
  const authState = useSelector((state: AppState) => state.auth);
  const [showDropdown, setShowDropdown] = useState(false);

  // Debug: log the logged in user and current state
  console.log('currentUser:', currentUser);
  console.log('authState:', authState);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ProdManager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {!isAuthenticated ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            ) : (
              <Dropdown align="end" show={showDropdown} onToggle={setShowDropdown}>
                <Dropdown.Toggle as="span" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none', background: 'none', boxShadow: 'none' }}>
                  <Image
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser?.name || 'U')}&background=random&rounded=true&size=32`}
                    roundedCircle
                    width={32}
                    height={32}
                    alt="profile"
                  />
                  <span style={{ marginLeft: 8 }}>{currentUser?.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  <Dropdown.Item disabled>Account Setting</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}