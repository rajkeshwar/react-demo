
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Route, Switch, Redirect
} from "react-router-dom";
import './App.css';
import UsersDetailsPage from './UserDetailsPage';
import UsersPage from './UsersPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/users" className="text-white">Users App</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <Switch>
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/users/:id" component={UsersDetailsPage} />
            <Redirect path="/" to="users" />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
