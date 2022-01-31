import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";
//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<Navbar label="My page" />
			<div className="row mx-5 mt-5 mb-2 p-0">
				<Jumbotron
					label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled it to make a type specimen book."
					titulo="Welcome to my page"
				/>
			</div>
			<div className="row mx-5 my-4 p-0 d-flex justify-content-between">
				<Card
					label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					title="new products"
				/>
				<Card
					label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					title="new products"
				/>
				<Card
					label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					title="new products"
				/>
				<Card
					label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					title="new products"
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
