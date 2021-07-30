import React from "react";

export const GridItemGif = ({ title, url }) => {
	return (
		<div className="card animate__animated animate__rubberBand">
			<img alt={title} src={url}></img>
			<p>{title}</p>
		</div>
	);
};
