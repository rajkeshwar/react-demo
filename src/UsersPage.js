import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(resp => setUsers(resp))
  }, []);

  if (!users) {
    return (
      <div className="d-flex justify-content-center align-items-center min-height">
        <Spinner animation="border" />
      </div>
    )
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx}>
            <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  );
}

export default UsersPage;