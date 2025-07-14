// Import custom hook for global state (store and dispatch function)
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// Import the ContactCard component to display each contact
import { ContactCard } from "../components/ContactCard.jsx";
// Import react and the useEffect hook (used to run code when the component loads)
import React, { useEffect } from "react";
import "../index.css";

// Define Home component 
export const Home = () => {
  // Grab the global state (store) and the function to update it (dispatch) this renders my homepage
  // store: contains global data like contacts, agendas,etc
  // dispatch: a function to update that store
  const { store, dispatch } = useGlobalReducer();

  // useEffect runs once when this component loads because of the empty array []
  // This is where I fetch external data (example:agendas)
  useEffect(() => {
    // Fetch agenda names from API
    fetch("https://playground.4geeks.com/contact/agendas/haleyhernandez/contacts")
      .then(response => response.json())
      .then(data => {
        // Once the data is ready, dispatch an action to update the global state
        dispatch({
          type: "set_contacts", // This tells the reducer *what kind* of data Im setting 
          payload: data.contacts // This is the actual data I got from the API
        });
        console.log("this is the data", data.contacts);
      })
      .catch(error => console.error("Error fetching agendas:", error));
  }, []); // Empty array = run this effect once 

  // Everything inside the return() shows up on the screen
  return (
    <div className="text-center mt-5">
      <h1>Contact List</h1>
      <div>
        {/* Checks if store.contacts exists.
        If it does, loop through it and show a ContactCard for each contact.
        The map() function loops over arrays. */}
        {store.contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
