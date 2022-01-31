import React from "react";

const styleTitle1 = {
	color: "#6A5ADF",
};

export const Footer = (props) => {
	return (
		<footer className="bg-secondary bg-opacity-25 rounded-3 text-dark text-center">
			<div className="container">
				<div className="row">
					<h3 className="col-sx-12" style={styleTitle1}>
						The footer of my page
					</h3>
				</div>
			</div>
		</footer>
	);
};
