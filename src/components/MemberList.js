import React from "react";
import MemberCard from "./MemberCard";
import { Row, Col } from "react-bootstrap";

const MemberList = ({ members, searchTerm, onDelete, onEdit }) => {
  const filteredMembers = members.filter((m) =>
    m.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <Row className="g-4 justify-content-center">
      {filteredMembers.map((member, index) => (
        <Col xs={12} sm={6} md={4} key={index}>
         <MemberCard
  member={member}
  onDelete={onDelete}
  onEdit={onEdit}
  index={index}
/>
        </Col>
      ))}
    </Row>
  );
};

export default MemberList;
