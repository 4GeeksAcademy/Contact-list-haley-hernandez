import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React, { useEffect, useState } from "react";
import storeReducer from "../store";

export const EditContactComponent = () => {
const { store, dispatch } = useGlobalReducer();
const { id } = useParams()
    const [editcontactInformaton, setEditContactInformation] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": "",
    });
    // Things to do: create a useEffect that filters through the store and updates a state, create the edit contact fetch.. use .filter ... store.contacts.filter(to find the contact that has the ID of the contact i am trying to change) ... seteditContactInformation with store.contacts.filter(this is going to find the contact with the ID i am trying to change) 
    useEffect(() => {
        const contactToFind = store.contacts.find((contact) => {
            return contact.id.toString() === id
        })
        if (contactToFind) {
            setEditContactInformation({
                name: contactToFind.name,
                phone: contactToFind.phone, 
                email: contactToFind.email,
                address: contactToFind.address,
            })
        }
    }, []); // Empty dependency array = run once
    async function editcontact(name, phone, email, address) {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/haleyhernandez/contacts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: editcontactInformaton.name,
                    phone: editcontactInformaton.phone, //THE BODY NEEDS CHANGE 
                    email: editcontactInformaton.email,
                    address: editcontactInformaton.address,
                }),

            });

            const data = await response.json(); // optional: get the JSON response
            console.log("Contact created:", data);
            return data;

        } catch (error) {
            console.log("There was an error:", error);
        }
    }


    return (
        <div>
            <div>
                <div className="mb-3">
                    <label for="" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Jane Doe"
                    value={editcontactInformaton.name}
                    onChange={(event) => setEditContactInformation({ ...editcontactInformaton, name: event.target.value })}

                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="(123)546-7890"
                    value={editcontactInformaton.phone}
                    onChange={(event) => setEditContactInformation({ ...editcontactInformaton, phone: event.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id=""
                        placeholder="name@example.com"
                    value={editcontactInformaton.email}
                    onChange={(event) => setEditContactInformation({ ...editcontactInformaton, email: event.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label for="" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="123 nw 1st street"
                    value={editcontactInformaton.address}
                    onChange={(event) => setEditContactInformation({ ...editcontactInformaton, address: event.target.value })}
                    />
                </div>

                <div>
                    <button onClick={() => editcontact()}  >save </button>
                </div>
            </div>
        </div>
    )
}