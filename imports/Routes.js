
import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ChartCheckOut from "./ChartCheckOut.js"
import OrderFullPage from "./OrderFullPage.js"
import OrdersListPage from "./OrdersListPage.js"
import ProductFullPage from "./ProductFullPage.js"
import ProductsListPage from "./ProductsListPage.js"
import AdminProductsListPage from "./AdminProductsListPage.js"


export default class Routes extends React.Component{

	render(){

		return(

			  <Router>
			  	<div>
					<Route exact path="/" component={ProductsListPage} />
			        <Route exact path="/chechout" component={ChartCheckOut} />
					<Route exact path="/order" component={OrderFullPage} />
					<Route exact path="/orderlist" component={OrdersListPage} />
					<Route exact path="/product" component={ProductFullPage} />
					<Route exact path="/admin/productslist" component={AdminProductsListPage} />
				</div>
			  </Router>
		) 
	}
}