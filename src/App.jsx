import { useEffect, useState } from "react";
import Main from "./components/main/main.jsx";
import Noauth from "./components/noauth/noauth.jsx";
import Credits from "./components/main/credits.jsx";
import Login from "./components/login/login.jsx";
import Regestrate from "./components/reg/reg.jsx";
import TP from "./components/tp/tp.jsx";
import TOS from "./components/main/tos.jsx";
import { isLogin, getMyUser } from "./lib/user.js";
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
		    <div className="app-viewport"></div>
	    );
	}
};

export default App;