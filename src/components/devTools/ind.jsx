import { useState } from "react";

const devTools = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
    async function sendDevTools() {
        let cons = document.getElementById('console')
        cons.innerHTML += `
            <tr>
                <th>[YOUR]</th>
                <th>${document.getElementById('input').value}</th>
            </tr>
        `
        cons.innerHTML += `
            <tr>
                <th>[JavaScript]</th>
                <th>${await eval((document.getElementById('input').value).replace('console', 'consol'))}</th>
            </tr>
        `
    }
    const consol = {
        'log': function(a) {
            cons.innerHTML += `
                <tr>
                    <th>[COMMAND]</th>
                    <th>${a}</th>
                </tr>
            `
        },
        'warn': function(a) {
            cons.innerHTML += `
                <tr>
                    <th>[COMMAND, WARNING]</th>
                    <th>${a}</th>
                </tr>
            `
        },
        'error': function(a) {
            cons.innerHTML += `
                <tr>
                    <th>[COMMAND, ERROR]</th>
                    <th>${a}</th>
                </tr>
            `
        },
    }
	return (
        <div class='main'>
			<h1>devTools in website</h1>
            <table>
                <thead>
                    <tr></tr>
                </thead>
                <tbody id='console'>
                    <tr>
                        <th>[SYSTEM]</th>
                        <th>Wecolme to devTools console!</th>
                    </tr>
                </tbody>
            </table>
            <p><textarea id="input" placeholder="" rows="1" cols="30"></textarea><button onclick={ sendDevTools() }>SEND</button></p>
		</div>
    );
};

export default devTools;