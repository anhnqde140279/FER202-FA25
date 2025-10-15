import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Modal } from "react-bootstrap";

function LoginForm2() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!user.username.trim()) newErrors.username = "Username required";
    if (!user.password.trim()) newErrors.password = "Password required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setShowModal(true);
  };

  const handleClose = () => {
    setUser({ username: "", password: "" });
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header><h4 className="text-center">Login Form 2</h4></Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" value={user.username} onChange={handleChange} isInvalid={!!errors.username} />
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" value={user.password} onChange={handleChange} isInvalid={!!errors.password} />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="w-100" variant="primary">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton><Modal.Title>Welcome</Modal.Title></Modal.Header>
        <Modal.Body>Welcome, {user.username}!</Modal.Body>
      </Modal>
    </Container>
  );
}
export default LoginForm2;
