import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export function TestForm() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="TestFormEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="email"
            name="email"
          ></Form.Control>
          <Form.Control.Feedback>All good</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Input valid email
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="TestFormPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            name="password"
          ></Form.Control>
          <Form.Control.Feedback>All good</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Password must at least 6 characters long
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
