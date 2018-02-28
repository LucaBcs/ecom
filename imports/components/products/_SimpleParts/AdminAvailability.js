import React from "react"

export default class AdminAvailability extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var itemsAvailable = this.props.product.available

		return(

				<div className="favourites-and-cart-container">

				<center className="line-height">
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