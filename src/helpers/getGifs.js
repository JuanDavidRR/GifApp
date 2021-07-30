export const getGifs = async (category) => {
	try {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=5k6bE6hRvssuTstrgX6n5AlaRSmCkg8n&q=${encodeURI(
			category
		)}&limit=9&offset=0&rating=r&lang=en`;
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

export const getStickers = async (category) => {
	try {
		const url = `https://api.giphy.com/v1/stickers/search?api_key=5k6bE6hRvssuTstrgX6n5AlaRSmCkg8n&q=${encodeURI(
			category
		)}&limit=9&offset=0&rating=r&lang=en`;
		const res = await fetch(url);
		const { data } = await res.json();
		const stickers = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});

		return stickers;
	} catch (error) {
		console.error("vale verga");
	}
};
