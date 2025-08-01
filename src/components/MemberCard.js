import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultAvatar from "../assets/default-avatar.png";
import { FaEdit, FaTrash } from "react-icons/fa"; // أيقونات من react-icons

const MemberCard = ({ member, onDelete, onEdit, index }) => {
  const imageUrl = member.image || defaultAvatar;

  return (
    <Card className="h-100 card-hover">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={member.name}
        className="member-image"
      />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>{member.role}</Card.Text>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="outline-primary" size="sm" onClick={() => onEdit(index)}>
            <FaEdit className="me-1" />
            Edit
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => onDelete(index)}>
            <FaTrash className="me-1" />
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MemberCard;
