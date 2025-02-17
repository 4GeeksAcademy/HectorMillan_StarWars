import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {

	const { store } = useContext(Context);

	return (
		<footer className="footer mt-auto py-3 text-center">
			<p>
				Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a href="https://github.com/hectormillan">Héctor Millán</a>
				<span> for 4GeekAcademy </span>
			</p>
		</footer>
	);
}
