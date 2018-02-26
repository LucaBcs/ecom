import React from "react"

export default class CartButton extends React.Component{

	render(){


		return(

				<div className="favourites-and-cart-container">
				<center className="line-height">
					<div className="fas fa-cart-arrow-down icons"></div>
				</center>
				<div className="two-line-text">
					ADD TO CART
				</div>
			</div>

			)

	}

}