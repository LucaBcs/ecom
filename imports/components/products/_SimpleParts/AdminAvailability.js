import React from "react"

import { Products } from "../../../collections/Products.js"

export default class AdminAvailability extends React.Component{

	removeProduct(){
		
		var productId = this.props.product._id
		
		Meteor.call("removeProduct", productId)
	}

	render(){

		{/* IMPORT PROPS */}

		var itemsAvailable = this.props.product.available

		return(

				<div className="favourites-and-cart-container">

				<center onClick={this.removeProduct.bind(this)} className="line-height">
					<div className="far fa-trash-alt icons"></div>
				</center>

				<div className="two-line-text-right">
					<div className="vertical-space"></div>
					<div className="text fsz-14">{itemsAvailable}</div>
					<div className="text fsz-12">AVAILABLE</div>
					<div className="vertical-space"></div>
				</div>

			</div>

			)

	}

}