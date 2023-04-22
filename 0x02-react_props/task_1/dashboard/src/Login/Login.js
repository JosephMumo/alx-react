import { Fragment } from "react";
import './Login.js';

function Login() {
    return(
        <Fragment className="App-body">
		    <p>Login to access the full dashboard</p>
		    <label for="email">Email: </label>
		    <input type="email"></input>
		    <label for="password">Password: </label>
		    <input type="password"></input>
		    <button>OK</button>
		</Fragment>
    )
}
export default Login