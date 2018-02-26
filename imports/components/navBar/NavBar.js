import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


export default class NavBar extends React.Component{

	render(){


		return(

			<header className="navBar-container">
			
			<Link to="/chechout"> CHECKOUT </Link>
			<Link to="/order"> ORDER </Link>
			<Link to="/orderlist"> ORDERLIST </Link>
			<Link to="/product"> PRODUCT </Link>
			<Link to="/"> PRODUCTPAGE </Link>

			</header>

			)

	}

}