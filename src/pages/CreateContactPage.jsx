import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";

export const CreateContactComponent = () => {

    const createContact = (name,phone,email,address) => {
        fetch("https://playground.4geeks.com/contact/agendas/haleyhernandez/contacts"), {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": name,
                "phone": phone,
                "email": email,
                "address": address,
            }),
        }
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
    }

    return (
        <div>
            <button>save</button>
        </div>
    )
}

