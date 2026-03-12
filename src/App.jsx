import { useEffect, useState } from "react";
import devTools from "./components/devTools/ind.jsx";
import "./App.css";

const App = () => {
	const page = window.location.pathname.split("/BluOf")[1]
	const [token, setTokenState] = useState(
	    localStorage.getItem('bluof-session-token'),
	);
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