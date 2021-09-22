import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import {
  useParams
} from "react-router-dom";

const UsersDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${id}`)
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
    <div className="mt-8" style={{marginTop: '2rem'}}>
      <Row>
        <Col>
          <Card className="shadow border-0 bg-white">
            <Card.Body>
              <Card.Title>Name: {user.name}</Card.Title>
              <div>
                <div><b>ID:</b> {user.id}</div>
                <div><b>Email:</b> {user.email}</div>
                <div><b>Username:</b> {user.username}</div>
                <div><b>Phone:</b> {user.phone}</div>
                <div><b>Website:</b> {user.website}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow border-0 bg-white">
            <Card.Body>
              <Card.Title>Address</Card.Title>
              {user.address
                ? (
                  <div>
                    <div><b>Street:</b>{user.address.street}</div>
                    <div><b>Suite:</b>{user.address.suite}</div>
                    <div><b>City:</b>{user.address.city}</div>
                    <div><b>Zip Code:</b>{user.address.zipcode}</div>
                  </div>
                ) : (
                  <div>No address found</div>
                )
              }
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
}

export default UsersDetailsPage;