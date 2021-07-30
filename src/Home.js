import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Link,
} from "react-router-dom";
import GifApp from "./components/gifs/GifApp";
import StikerApp from "./components/stickers/StickerApp";

const Home = () => {
	return (
		<>
			<div className="navbar-gif">
				<Router>
					<ul>
						<Link to={"/gifs"}>
							<li href="/"> INICIO </li>
						</Link>

						<Link to={"/stickers"}>
							<li href="/stickers"> STICKERS </li>
						</Link>

						<Link to={"/gifs"}>
							<li href="/gifs"> GIFS </li>
						</Link>

						<li>
							<img
								className="logo"
								alt="hola"
								src="https://fontmeme.com/permalink/210730/8c294610de427cfb6b322001187db728.png"
							></img>
						</li>
					</ul>

					<Switch>
						<Router path="/gifs">
							<GifApp className="animate__animated animate__fadeIn" />
						</Router>

						<Router path="/stickers">
							<StikerApp className="animate__animated animate__fadeIn" />
						</Router>
					</Switch>
				</Router>
			</div>
		</>
	);
};

export default Home;
