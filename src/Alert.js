import React, { useEffect } from "react";

const Alert = ({ type, msg, showAlert }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			showAlert();
		}, 4000);
		return () => clearTimeout(timeout);
	});
	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
