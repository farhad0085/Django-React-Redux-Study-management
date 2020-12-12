import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import * as Types from './store/actions/actionTypes'


const token = localStorage.getItem('userToken')
if(token){
    store.dispatch({type: Types.USER_LOGGED_IN})
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
