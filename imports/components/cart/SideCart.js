import React from "react"
import SideCartList from "./SideCartList.js"
import Currency from "./_ComplexParts/Currency.js"
import Buyer from "./_ComplexParts/Buyer.js"
import DeliveryAddress from "./_ComplexParts/DeliveryAddress.js"
import Payment from "./_ComplexParts/Payment.js"


export default class SideCart extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var predefined = this.props.predefined
		var cart = this.props.cart

		return(

			<div className="side-cart-container">
					<div>
					</div>

					<div>
						<div className="sideCart-container-total">

							<Currency
							 predefined={predefined}
							 cart={cart}							
							/>

						</div>

						<div className="sideCart-container-top">

							<Buyer
							 predefined={predefined}
							 cart={cart}							
							/>

							<Payment
							 predefined={predefined}
							 cart={cart}							
							/>

							<DeliveryAddress
							 predefined={predefined}
							 cart={cart}							
							/>

						</div>

						<div className="sideCart-container-middle">
							<SideCartList
							 predefined={predefined}
							 cart={cart}
							/>
						</div>
							
						<div className="sideCart-container-bottom">
							
						</div>
						
					</div>
			</div>
		)
	}
}