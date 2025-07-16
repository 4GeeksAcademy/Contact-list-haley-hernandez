import { Link } from "react-router-dom";
import React from "react";


// Define the ContactCard component

// look up why it isn't deleting the contact
export const ContactCard = ({ contact, refreshContacts }) => { //renamed fetch to refreshContacts because since fetch is a JS function its confusing the code and breaking it 
  async function deleteContact(name, phone, email, address) {
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
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{contact.full_name}</h5>
        <p className="card-text">
          <strong>Email:</strong> {contact.email} <br />
          <strong>Phone:</strong> {contact.phone} <br />
          <strong>Address:</strong> {contact.address}
        </p>
      </div>
      <Link to={`/editcontact/${contact.id}`}>
        <button>Edit contact</button>
      </Link>
      <button onClick={(e) => deleteContact(e)}>Delete Contact</button>
      {/* need to pop up a modal, i need the delte contact function to trigger from a button on the modal  */}
    </div>
  );
};
