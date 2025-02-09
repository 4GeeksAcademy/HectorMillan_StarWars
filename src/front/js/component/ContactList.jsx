import React, {useActionState, useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const ContactList = () => {

 
    const { store, actions  } = useContext(Context);
    const navigate = useNavigate();
       
    // Funcion para guardar el contacto seleccionado y rutear a edit-contact
    // Function to save the selected contact and route to edit-contact
    const handleSubmitEdit = (contacto) => {
      
            actions.setSelectedContact(contacto);
            
             navigate("/edit-contact");
          
    }

      
    useEffect(() => {
    
      // Revisa si el usuario está logeado (store.isLogged == true), si no lo está, rutea a la pagina /no-logged, si está logeado recoge los contactos con:  actions.getContactList(event);
      // Check if the user is logged in (store.isLogged == true), if not, route to the /no-logged page, if logged in collect the contacts with: actions.getContactList(event);

        if(!store.isLogged) {
            navigate('/no-logged');

        } else {
            actions.getContactList(event);
            
        }
        
    
    }, [navigate]);

    

    return (

        <div className="container">
            <h1>
                Contact List
            </h1>

            <Link to="/AddContact" >
                <button type="button" className="btn btn-primary mb-2">Add Contact</button>
            </Link>

            <ul className="list-group">

                {/* recorre el array contact usando la función map(); */}
                {/* loop through the contact array using the map() function; */}
                {store.contact.map((iterator) =>
                    <li className="list-group-item d-flex justify-content-center">
                        <div className="d-flex align-items-center w-75">
                            <div className="col-md-3 d-flex justify-content-center">
                                <img
                                    className="rounded-circle"
                                    src={`https://picsum.photos/id/${iterator.id}/170/170`}
                                    alt="Contact"

                                />
                            </div>

                            <div className="col-md-6">
                                <h5 className="card-title mb-1">
                                    {iterator.name}
                                </h5>
                                <p className="card-text mb-1">
                                    <i className="fa fa-map-marker-alt me-2"></i> Ubicación
                                    {iterator.address}
                                </p>
                                <p className="card-text mb-1">
                                    <i className="fa fa-phone me-2" ></i>
                                    {iterator.phone}
                                </p>
                                <p className="card-text mb-1">
                                    <i className="fa fa-envelope me-2" ></i>
                                    {iterator.email}
                                </p>
                            </div>

                            <div className="col-md-3 d-flex justify-content-end">
                              
                                <button type="button"className="btn p-0 me-3" >
                                     <i className="fa fa-pen"  onClick={() => handleSubmitEdit(iterator)}></i>
                                </button>
                                   
                              

                                <button type="button" className="btn p-0 me-3" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + iterator.id} >
                                    <i className="fa fa-trash fa-lg" ></i>
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id={"delete-contact-" + iterator.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                            This change cannot be reversed, are you sure to delete the contact?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">CANCEL</button>
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={(event) => {actions.delContact(iterator.id);navigate("/contact-list"); }}>DELETE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    
                    )}

                </ul>
         </div>
    )   
}