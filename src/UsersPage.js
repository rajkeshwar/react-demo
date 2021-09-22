import { useEffect, useState } from "react";
import { Spinner, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState()

  const fetchAllUsers = () => {
    fetch('http://localhost:8080/users')
      .then(resp => resp.json())
      .then(resp => setUsers(resp))
  }

  const handleAddUser = () => {
    console.log('edit called')

    const newUser = {
      "name": "Rajkeshwar Prasad",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    };

    fetch(`http://localhost:8080/users`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => fetchAllUsers())
  }

  const handleEdit = (user) => {
    console.log('handleEdit called', user)
  }

  const handleDelete = (user) => {
    console.log('delete called', user)

    fetch(`http://localhost:8080/users/${user.id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(resp => fetchAllUsers())
  }

  useEffect(() => fetchAllUsers(), []);

  if (!users) {
    return (
      <div className="d-flex justify-content-center align-items-center min-height">
        <Spinner animation="border" />
      </div>
    )
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3 className="my-4">Users app</h3>
        <span className="d-flex align-items-center">
          <Button onClick={handleAddUser}>Add New User</Button>
        </span>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className="d-flex justify-content-center">
                <Button
                  size="sm"
                  variant="warning"
                  style={{ marginRight: '8px' }}
                  onClick={() => handleEdit(user)}
                >Edit</Button>

                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(user)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
}

export default UsersPage;