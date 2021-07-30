export const getTrendStickers = async () => {
	try {
		const url = `https://api.giphy.com/v1/stickers/trending?api_key=5k6bE6hRvssuTstrgX6n5AlaRSmCkg8n&limit=9&rating=g
        `;
		console.log(url);
		const res = await fetch(url);
		const { data } = await res.json();
		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});

		return gifs;
	} catch (error) {
		console.error("vale verga");
	}
};
