import { useFetchStickers } from "../../hooks/useFetchGifs";
import { GridItemGif } from "../gifs/GridItemGif";

export const GridStickers = ({ category }) => {
	const { data: images, loading } = useFetchStickers(category);
	return (
		<>
			<h4 className="animate__animated animate__backInLeft">
				Has buscado: {category}
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
