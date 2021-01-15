import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.jpg'
// import firebase from "firebase/app";
import { Route, Router } from 'react-router-dom';
import history from './history'

// var firebaseConfig = {
//     apiKey: "AIzaSyB0k2OyIW2S0UZxktO0_kVuPYWTWZOnhUE",
//     authDomain: "dareboard-7896f.firebaseapp.com",
//     projectId: "dareboard-7896f",
//     storageBucket: "dareboard-7896f.appspot.com",
//     messagingSenderId: "244409855639",
//     appId: "1:244409855639:web:c88aaf7c2db2474b8983d2",
//     measurementId: "G-QYNVV7MJS9"
//   };
// firebase.initializeApp(firebaseConfig);


ReactDOM.render(
	<div class = "page-layout">
		<img src = {logo} alt= "logo" class = "logo"/>

		<Router history={history}>
			<App />
		</Router>
	</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
