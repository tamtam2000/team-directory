import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditMemberModal = ({ show, onClose, onEdit, member, index }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (member) {
      setName(member.name || "");
      setRole(member.role || "");
      setImage(member.image || "");
    }
  }, [member]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    onEdit({ name, role, image }, index);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter member name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formRole" className="mt-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter member role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formImage" className="mt-3">
            <Form.Label>Image URL (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditMemberModal;
