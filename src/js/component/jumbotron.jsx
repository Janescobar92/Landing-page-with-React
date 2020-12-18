import React from "react";
import { Button } from "./button.jsx";

export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<p className="lead">
					<Button />
				</p>
			</div>
		</div>
	);
};
