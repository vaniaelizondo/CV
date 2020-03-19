import React from "react";

const Education = props => (
	<div>
		<h3>
			Education
		</h3>
			{props.data.map((value, index) => (
				<div key={index}>
						{value.degree}
						{value.campus}
						{value.date}
				</div>
			))}
	</div>
);

export default Education;
