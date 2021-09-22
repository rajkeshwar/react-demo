import { useEffect, useState } from "react";
import { Card, Spinner, Button, Row, Col } from "react-bootstrap";
import {
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const UsersDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState();


  console.log('id', id)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(resp => resp.json())
      .then(resp => setUser(resp))
  }, [])

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center min-height">
        <Spinner animation="border" />
      </div>
    )
  }

  return (
    <div className="row">
      <Row>

        <Col>
          <Card className="shadow border-0 bg-white">
            <Card.Body>
              <Card.Title>Name: {user.name}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text>Username: {user.username}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow border-0 bg-white">
            <Card.Body>
              <Card.Title>Address</Card.Title>
              <Card.Text>
                <div><b>Street:</b>{user.address.street}</div>
                <div><b>Suite:</b>{user.address.suite}</div>
                <div><b>City:</b>{user.address.city}</div>
                <div><b>Zip Code:</b>{user.address.zipcode}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
}

export default UsersDetailsPage;