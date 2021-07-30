export const getTrendingGifs = async () => {
	try {
		const url = `https://api.giphy.com/v1/gifs/trending?api_key=pLG9epdt5AYw6xeyAT2QYpG487qGv4qW&limit=9&rating=g`;
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

export const getTrendingStickers = async () => {
	try {
		const url = `https://api.giphy.com/v1/stickers/trending?api_key=pLG9epdt5AYw6xeyAT2QYpG487qGv4qW&limit=9&rating=g
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
