import React from "react";
import { Button } from "./button.jsx";

export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1 className="display-4"> A halloween, NotSoScaryWeb!</h1>
				<p className="lead jumbotron-subtitle-size">
					It is all just a bunch of hocus pocus!
				</p>
				<p className="lead">
					<Button />
				</p>
			</div>
		</div>
	);
};
