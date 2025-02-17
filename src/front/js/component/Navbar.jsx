import React, { useContext,useState, useEffect } from "react";  
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom'


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const desLoguearse = () => {

		
		if (store.isLogged) {

			actions.DesLogging();
			navigate('/no-logged');

		} else navigate('/Login')
		

	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<div className="d-flex justify-content-center col col-lg-3 p-4">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">{"HOME"}</span>
					</Link>
				</div>
				
				<div className="d-flex justify-content-center col col-lg-3 p-4">
					<Link to="/contact-list">
						<span className="navbar-brand mb-0 h1">{"CONTACTS"}</span>
					</Link>
				</div>
			
				<div className="d-flex col col-lg-6 justify-content-end align-items-center">
					<span className={store.user ? "ms-2 align-items-center":"d-none" }>Bienvenido:</span>
					<span className={store.user ? "text-primary ms-2 align-item-center":"d-none" }>{store.user}</span>
					<span  className= "ms-2 align-items-center" ><button className="btn btn-primary" onClick={desLoguearse} >{store.isLogged ? 'Logout' : 'Login'}</button></span>
					
					
					
				</div>

			</div>
		</nav>
	);
};
