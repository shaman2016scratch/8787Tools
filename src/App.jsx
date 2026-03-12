import { useEffect, useState } from "react";
import devTools from "./components/devTools/ind.jsx";

const App = () => {
	const page = window.location.pathname.split("/8787Tools")[1]
	if (page === "/" || page === "/index.html" || page === "/index") {
	    return (
		    <div className="app-viewport"></div>
	    );
	} else if (page === "/devTools.html" || page === "/devTools") {
		return (
		    <div className="app-viewport">
                <devTools />
            </div>
	    );
	}
};

export default App;
