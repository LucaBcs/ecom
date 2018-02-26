import React from "react"
import Buyer from "./_SimpleParts/Buyer.js"
import Currency from "./_SimpleParts/Currency.js"
import DeliveryAddress from "./_SimpleParts/DeliveryAddress.js"
import FwdButton from "./_SimpleParts/FwdButton.js"
import Payment from "./_SimpleParts/Payment.js"
import RemoveButton from "./_SimpleParts/RemoveButton.js"
import TotalAmount from "./_SimpleParts/TotalAmount.js"
import TotalItems from "./_SimpleParts/TotalItems.js"
import SingleItem from "./_ComplexParts/SingleItem.js"


export default class SideCart extends React.Component{

	render(){


		return(

			<div className="side-cart-container">
				<div>
					
				</div>
				<div>
					<div className="sideCart-container-top">

						<div className="sideCart-standard-row-container">
						<div className="sideCart-left-text-container">
							<div className="two-line-text-left">CURRENCY</div>
							<div className="two-line-text-right">
								<div className="vertical-space"></div>
									<div className="text fsz-14">companyName</div>
									<div className="text fsz-14">companyName</div>
								<div className="vertical-space"></div>
							</div>
						</div>
						<center className="sideCart-edit-container">
							<div className="fas fas fa-edit icons"></div>
						</center>
						</div>

						<div className="sideCart-standard-row-container">
						<div className="sideCart-left-text-container">
							<div className="two-line-text-left">BUYER</div>
							<div className="two-line-text-right">
								<div className="vertical-space"></div>
									<div className="text fsz-14">companyName</div>
									<div className="text fsz-14">companyName</div>
								<div className="vertical-space"></div>
							</div>
						</div>
						<center className="sideCart-edit-container">
							<div className="fas fas fa-edit icons"></div>
						</center>
						</div>

						<div className="sideCart-standard-row-container">
						<div className="sideCart-left-text-container">
							<div className="two-line-text-left">DELIVERY ADDRESS</div>
							<div className="two-line-text-right">
								<div className="vertical-space"></div>
									<div className="text fsz-14">companyName</div>
									<div className="text fsz-14">companyName</div>
								<div className="vertical-space"></div>
							</div>
						</div>
						<center className="sideCart-edit-container">
							<div className="fas fas fa-edit icons"></div>
						</center>
						</div>

						<div className="sideCart-standard-row-container">
						<div className="sideCart-left-text-container">
							<div className="two-line-text-left">PAYMENT</div>
							<div className="two-line-text-right">
								<div className="vertical-space"></div>
									<div className="text fsz-14">companyName</div>
									<div className="text fsz-14">companyName</div>
								<div className="vertical-space"></div>
							</div>
						</div>
						<center className="sideCart-edit-container">
							<div className="fas fas fa-edit icons"></div>
						</center>
						</div>

				</div>

				<div className="sideCart-container-middle">
					
				</div>
					
				<div className="sideCart-container-bottom">
					
				</div>
					
			</div>


			</div>

			)

	}

}