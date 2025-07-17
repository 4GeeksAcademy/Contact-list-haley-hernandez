import { Link } from "react-router-dom";
import React from "react";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import "../index.css";


// Define the ContactCard component

export const ContactCard = ({ contact, refreshContacts }) => { //renamed fetch to refreshContacts because since fetch is a JS function its confusing the code and breaking it 
  // showModal: boolean state that controls whether the modal is visible or not.
  // setShowModal: function used to update the showModal state.
  const [showModal, setShowModal] = useState(false);
  async function deleteContact() {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/haleyhernandez/contacts/${contact.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Contact deleted successfully.");
        refreshContacts(); // This will refetch the contacts and update the UI
      } else {
        console.log("Failed to delete contact.");
      }
    } catch (error) {
      console.log("There was an error:", error);
    }
  }
  return (
    <div className="contact-card">
      <div className="card-content">
        <div className="avatar">
          {/* Use initials as fallback avatar */}
          <div className="avatar-circle">
            {contact.full_name ? contact.full_name.charAt(0).toUpperCase() : "?"}
          </div>
        </div>

        <div className="contact-details">
          <h2>{contact.full_name}</h2>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Address:</strong> {contact.address}</p>
        </div>
      </div>

      <div className="card-actions">
        <Link to={`/editcontact/${contact.id}`}>
          <button className="edit-btn">Edit</button>
        </Link>
        <button className="delete-btn" onClick={() => setShowModal(true)}>Delete</button>
      </div>

      <DeleteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => deleteContact(contact.id)}
      />
    </div>
  );
};
