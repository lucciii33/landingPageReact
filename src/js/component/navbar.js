import React from "react";
import PropTypes from "prop-types";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-5 py-2">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{props.label}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="#">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	label: PropTypes.string,
};
