import { useEffect, useState } from "react";
import { getGifs, getStickers } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
	const [state, setstate] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then((imgs) => {
			setstate({
				data: imgs,
				loading: false,
			});
		});
	}, [category]);

	return state;
};

export const useFetchStickers = (category) => {
	const [state, setstate] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getStickers(category).then((imgs) => {
			setstate({
				data: imgs,
				loading: false,
			});
		});
	}, [category]);

	return state;
};
