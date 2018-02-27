import React from "react"

export default class ExpectedCostsPickUp_Delivery extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var pickUpCity = this.props.predefined.pickUp.location.address.city
		var pickUpCountry = this.props.predefined.pickUp.location.address.country
		var pickUpPriceNoVAT = this.props.predefined.pickUp.price.priceNoVAT
		var pickUpProductVAT = this.props.predefined.pickUp.price.productVAT
		var pickUpCurrency = this.props.predefined.pickUp.price.currency.symbol

		var deliveryCity = this.props.predefined.delivery.location.address.city
		var deliveryCountry = this.props.predefined.delivery.location.address.country
		var deliveryPriceNoVAT = this.props.predefined.delivery.price.priceNoVAT
		var deliveryProductVAT = this.props.predefined.delivery.price.productVAT
		var deliveryCurrency = this.props.predefined.delivery.price.currency.symbol

		return(

			<div className="standarCenterRow-container">
				<div className="two-line-text-left">DELIVERY</div>
			<div className="two-line-text-right">
				<div className="vertical-space"></div>
				<div className="text fsz-14">{pickUpCity}</div>
				<div className="text fsz-14">{deliveryCity}</div>
				<div className="vertical-space"></div>
			</div>

			</div>
		)
	}
}