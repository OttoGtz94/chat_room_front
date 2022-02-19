import React from 'react';

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Header from '../layout/Header';
import Home from '../views/public/Home';
import Login from '../views/public/Login';
import Register from '../views/public/Register';
import store from '../../store';
import { Provider } from 'react-redux';
import Main from '../views/private/Main';

const Rutas = () => {
	return (
		<Router>
			<Provider store={store}>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route
						exact
						path='/registrarse'
						element={<Register />}
					/>
					<Route exact path='/main' element={<Main />} />
				</Routes>
			</Provider>
		</Router>
	);
};

export default Rutas;
