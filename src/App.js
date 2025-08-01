import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MemberList from "./components/MemberList";
import AddMemberModal from "./components/AddMemberModal";
import EditMemberModal from "./components/EditMemberModal";
import { Container, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      name: "Ahmed Youssef",
      role: "Frontend Developer",
      image: "",
    },
    {
      name: "Sara Adel",
      role: "Backend Engineer",
      image: "",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddMember = (member) => {
    setMembers([...members, member]);
    setShowAddModal(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
  };

  const handleUpdateMember = (updatedMember, index) => {
    const updated = [...members];
    updated[index] = updatedMember;
    setMembers(updated);
    setShowEditModal(false);
    setEditIndex(null);
  };

 const handleDelete = (index) => {
  const confirmDelete = window.confirm(" Are you sure you want to delete this member? ");
  if (!confirmDelete) return;

  const updated = [...members];
  updated.splice(index, 1);
  setMembers(updated);
};

  return (
    <div className="app-background">
      <Container className="py-4">
        <Header />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="text-end mb-3">
          <Button onClick={() => setShowAddModal(true)}>Add Member</Button>
        </div>
        <MemberList
          members={members}
          searchTerm={searchTerm}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <AddMemberModal
          show={showAddModal}
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddMember}
        />
        <EditMemberModal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          onEdit={handleUpdateMember}
          member={members[editIndex]}
          index={editIndex}
        />
      </Container>
    </div>
  );
}

export default App;
