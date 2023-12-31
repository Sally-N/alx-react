import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "..Notifications/Notifications"

function App() {
	return (
		<React.Fragment>
			<Notificatiions />
			<div className='App'>
				<Header />
				<Login />
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
