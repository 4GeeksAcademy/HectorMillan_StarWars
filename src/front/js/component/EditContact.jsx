import React, {useActionState, useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from 'react-router-dom'



export const EditContact = () => {


  
    const { store, actions  } = useContext(Context);
    const host = "https://playground.4geeks.com/todo";
    const user = store.user;
    let navigate = useNavigate();

    const [name, setName] = useState(store.selectedContact.name);
    const [phone, setPhone] = useState(store.selectedContact.phone);
    const [email, setEmail] = useState(store.selectedContact.email);
    const [address, setAddress] = useState(store.selectedContact.address);
    
    
    function saveContact(e) {

        // Evita los campos estén vacios antes de guardar. 
        // Prevent fields from being empty before saving.
        if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {
           
            alert("Empty fields")
            return null
            
        }
       
        const contacto = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            id: store.selectedContact.id
        };
             
      
        alert("Se grabo los datos del contacto");
        actions.editContact(contacto);
       
       
        setName("");
        setPhone("");
        setEmail(""),
        setAddress("");
        actions.getContactList();
        navigate("/contact-list");

    }
   
   
    return (

        <div className="container">
        <h1 className="text-center">{!id ? "Edit a Contact" : `Editing Contact: ${name}`}</h1>

        <form className="container" onSubmit={saveContact}>

            <div className="mb-3">
                <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} required />

            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} value={address} required />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary" >Save</button>
            </div>
        </form>

        <Link to="/contact-list">volver a Contacts</Link>
    </div>

    )
}