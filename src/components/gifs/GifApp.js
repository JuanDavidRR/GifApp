import React, { useState } from "react";
import AddCategory from "./AddCategory";
import { GridGif } from "./GridGif";
import { TrendingGifs } from "./TrendingGifs";

const GifApp = () => {
	const [categories, setCategories] = useState([]);
	// const [random, setRandom] = useState(false);
	// const onClick = () => setRandom(!random);

	return (
		<>
			<div className="container-grid animate__animated animate__fadeIn">
				<br></br>
				<h1>GIFs</h1>
				{/* 
			<button className="random" onClick={onClick}>
				Mostrar/Ocultar
			</button> */}
				<AddCategory setCategories={setCategories} />

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
						<GridGif key={i} category={category} />
					))}
				</ol>
				<h2>Top Gifs de la semana</h2>
				<div className="card-grid">
					<TrendingGifs />
				</div>
			</div>
		</>
	);
};

export default GifApp;
