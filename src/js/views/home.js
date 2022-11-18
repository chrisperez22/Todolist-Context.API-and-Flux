import React from "react";
import rigoImage from "../../img/make-it-happen.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		
		<p>
			<img src={rigoImage} />
		</p>
		{/* <a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
	</div>
);
