import React from "react"

export default class QuantityInTheCart extends React.Component{

	render(){
		
		{/* IMPORT PROPS */}

		var quantityInTheCart = this.props.cart.cart.quantityInTheCart

		return (

			<div className="QuantityInTheCart">{quantityInTheCart}</div>
		)
	}
}