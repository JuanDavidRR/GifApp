import React, { useState } from "react";
import AddCategory from "../gifs/AddCategory";
// import { TrendingGifs } from "../gifs/TrendingGifs";
import { GridStickers } from "./GridStikers";
import { TrendingStickers } from "./TrendingStickers";

const StikerApp = () => {
	const [categories, setCategories] = useState([]);
	// const [random, setRandom] = useState(false);
	// const onClick = () => setRandom(!random);

	return (
		<div className="container-grid animate__animated animate__fadeIn">
			<br></br>
			<h1>Stickers</h1>
			{/* <button className="random" onClick={onClick}>
				Mostrar/Ocultar
			</button> */}
			<AddCategory
				setCategories={setCategories}
				// setNGifs={setNGifs}
				// setRating={setRating}
			/>

			<hr />
			{/* {random ? (
				<div className="card-grid animated__animated">
					<h3 className="animate__animated animate__rubberBand">
						Stickers en tedencia
						<small>Ocultalos dando nuevamente al botón</small>
					</h3>
					<TrendingStickers />
				</div>
			) : null} */}
			<ol>
				{categories.map((category, i) => (
					<GridStickers key={i} category={category} />
				))}
			</ol>
			<h2>Top Stickers de la semana</h2>
			<div className="card-grid">
				<TrendingStickers />
			</div>
		</div>
	);
};

export default StikerApp;
