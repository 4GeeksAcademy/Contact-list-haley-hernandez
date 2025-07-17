import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const CreateContactComponent = () => {
    // Here i am using useState to store the input values
    const navigate = useNavigate()
    const [contactInformation, setContactInformation] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": "",
    });

    async function createContact() {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/haleyhernandez/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: contactInformation.name,
                    phone: contactInformation.phone,
                    email: contactInformation.email,
                    address: contactInformation.address,
                }),
            });

            const data = await response.json(); // optional: get the JSON response
            console.log("Contact created:", data);
            return data;
            // navigate("/");
        } catch (error) {
            console.log("There was an error:", error);
        }
    }

    // Do i need to implement some bootstrap into the return so the user can input their information to create a contact?
    return (
        <div>
            <div className="mb-3">
                <label for="" className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Jane Doe"
                    value={contactInformation.name}
                    onChange={(event) => setContactInformation({ ...contactInformation, name: event.target.value })}

                />
            </div>
            <div className="mb-3">
                <label for="" className="form-label">Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="(123)546-7890"
                    value={contactInformation.phone}
                    onChange={(event) => setContactInformation({ ...contactInformation, phone: event.target.value })}
                />
            </div>
            <div className="mb-3">
                <label for="" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id=""
                    placeholder="name@example.com"
                    value={contactInformation.email}
                    onChange={(event) => setContactInformation({ ...contactInformation, email: event.target.value })}
                />
            </div>
            <div className="mb-3">
                <label for="" className="form-label">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="123 nw 1st street"
                    value={contactInformation.address}
                    onChange={(event) => setContactInformation({ ...contactInformation, address: event.target.value })}
                />
            </div>

            <div>
                <Link to="/">
                    <button onClick={() => createContact()} >save</button>
                </Link>
            </div>
        </div>
    )
}

