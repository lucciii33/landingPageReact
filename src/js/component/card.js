import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
	return (
		<div className="card p-0 mt-2 text-center" style={{ width: "18rem" }}>
			<img
				src="https://picsum.photos/200"
				className="card-img-top p-0 m-0"
				alt=""
			/>
			<div className="card-body p-2 mb-2">
				<h5 className="card-title text-center">{props.title}</h5>
				<p className="card-text">{props.label}</p>
				<a href="#" className="btn btn-primary ">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	label: PropTypes.string,
	title: PropTypes.string,
};
