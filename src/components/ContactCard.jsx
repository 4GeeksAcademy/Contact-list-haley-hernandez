
import React from "react";

// Define the ContactCard component
export const ContactCard = ({ contact }) => {
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
    </div>
  );
};
