import React, { useState, useEffect } from "react";
import { getTrendingGifs } from "../../helpers/getTrending";
import { GridItemGif } from "../gifs/GridItemGif";

export const TrendingGifs = () => {
	const [trendings, setTrandings] = useState([]);
	useEffect(() => {
		getTrendingGifs().then(setTrandings);
	}, []);

	return (
		<>
			{trendings.map((img, i) => (
				<GridItemGif key={i} {...img} />
			))}
		</>
	);
};
