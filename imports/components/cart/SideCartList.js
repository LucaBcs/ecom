import React from "react"
import QuantityInTheCart from "./_SimpleParts/QuantityInTheCart.js"
import ProductName_Id_Price from "./_ComplexParts/ProductName_Id_Price.js"

export default class SingleItem extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var predefined = this.props.predefined
		var cart = this.props.cart

		return(

		cart.map((item,index) =>{

			return(

				<div key={index} className="singleCartItem-row-container">

					<center className="singleCartItem-icon-container">
						<QuantityInTheCart
							cart={item}
							predefined={predefined}
						/>
					</center>

					<center className="singleCartItem-icon-container">
						<center className="singleCartItem-doubleIcon-container addBorderBottom">
							<div className="fas fas fa-plus icons15rem"></div>
						</center>
						<center className="singleCartItem-doubleIcon-container">
							<div className="fas fas fa-minus icons15rem"></div>
						</center>
					</center>

					<ProductName_Id_Price
						cart={item}
						predefined={predefined}
					/>

					<center className="line-height">
						<div className="far fa-trash-alt icons"></div>
					</center>

				</div>

			)
		}))
	}
}



