import React, { useState, useEffect } from "react";
import { Form, Button, Toast, Modal, Card } from "react-bootstrap";

const usernameRegex = /^[A-Za-z0-9_.]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

function RegisterForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const e = {};
    if (!usernameRegex.test(form.username)) e.username = "Username ≥3 ký tự, chỉ chữ/số/_.";
    if (!emailRegex.test(form.email)) e.email = "Email không hợp lệ.";
    if (!passwordRegex.test(form.password)) e.password = "Password ≥8 ký tự, gồm hoa/thường/số/ký tự đặc biệt.";
    if (form.confirm !== form.password) e.confirm = "Confirm password không khớp.";
    setErrors(e);
    setIsValid(Object.keys(e).length === 0);
  }, [form]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setShowToast(true);
      setShowModal(true);
    }
  };

  const handleReset = () => setForm({ username: "", email: "", password: "", confirm: "" });

  return (
    <div className="p-3 border rounded">
      <h4>Register Form</h4>
      <Form onSubmit={handleSubmit}>
        {["username", "email", "password", "confirm"].map((f) => (
          <Form.Group key={f} className="mb-2">
            <Form.Label>{f.charAt(0).toUpperCase() + f.slice(1)}</Form.Label>
            <Form.Control
              type={f.includes("password") ? "password" : f}
              name={f}
              value={form[f]}
              onChange={handleChange}
              isInvalid={!!errors[f]}
            />
            <Form.Control.Feedback type="invalid">{errors[f]}</Form.Control.Feedback>
          </Form.Group>
        ))}
        <Button type="submit" disabled={!isValid}>Submit</Button>{" "}
        <Button variant="secondary" onClick={handleReset}>Cancel</Button>
      </Form>

      <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className="mt-3">
        <Toast.Body>Submitted successfully!</Toast.Body>
      </Toast>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Submitted Info</Modal.Title></Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Title>{form.username}</Card.Title>
              <Card.Text>{form.email}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default RegisterForm;
