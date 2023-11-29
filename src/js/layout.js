import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/Home.jsx";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx";
import { Starships } from "./views/Starships.jsx";
import { Details } from "./views/Details.jsx";
import { NotFound } from "./views/NotFound.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

/* import { Footer } from "./component/Footer.jsx"; */

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/:type/:id" element={<Details />} />
						<Route path="*" element={<NotFound/>} /> 
					</Routes>
					
					<Footer/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
