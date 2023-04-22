import Header from './Header/Header'
import Footer from './Footer/Footer';
import Notifications from './Notifications';
import Login from './Login/Login';
import { Fragment } from 'react';
import './utils'
import './App.css'

function App() {
	  return (
		      <Fragment>
				<Notifications />
				<div className="App">
				<Header />
		        <hr />
				<Login />
				<Footer />
		      </div>
			  </Fragment>
		    );
}

export default App;
