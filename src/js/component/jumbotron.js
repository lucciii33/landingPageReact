import React from "react";
import PropTypes from "prop-types";

const styleTitle = {
	color: "#6A5ADF",
};
export const Jumbotron = (props) => {
	return (
		<div className="text-dark m-10 p-5 mb-4 bg-secondary bg-opacity-25 rounded-3 ">
			<div className="container py-5" col-xs-12>
				<h1 className="display-5 fw-bold " style={styleTitle}>
					{props.titulo}
				</h1>
				<p clasName="col-md-8 fs-4">{props.label}</p>
				<button className="btn btn-primary btn-lg" type="button">
					Click for more
				</button>
			</div>
		</div>
	);
};
Jumbotron.propTypes = {
	label: PropTypes.string,
	titulo: PropTypes.string,
};
