import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GridItemGif } from "./GridItemGif";

export const GridGif = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);
	return (
		<>
			<h4 className="animate__animated animate__backInLeft">
				Has buscado: {category.toUpperCase()}
			</h4>
			{loading && <p>Cargando</p>}
			<div className="card-grid">
				{images.map((gif) => {
					return <GridItemGif key={gif.id} {...gif} />;
				})}
			</div>
			{}
		</>
	);
};
