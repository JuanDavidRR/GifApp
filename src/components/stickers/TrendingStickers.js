import React, { useEffect, useState } from "react";
import { getTrendStickers } from "../../helpers/getTrendStickers";
import { GridItemGif } from "../gifs/GridItemGif";

export const TrendingStickers = () => {
	const [trendings, setTrandings] = useState([]);
	useEffect(() => {
		getTrendStickers().then(setTrandings);
	}, []);

	return (
		<>
			{trendings.map((img, i) => (
				<GridItemGif key={i} {...img} />
			))}
		</>
	);
};
